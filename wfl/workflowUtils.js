//////////////////////////////////////////////////////////////////////////////
/**
 * @module ogs.wfl
 */

/*jslint devel: true, forin: true, newcap: true, plusplus: true*/
/*jslint white: true, indent: 2*/

/*global geoModule, ogs, inherit, $, HTMLCanvasElement, Image*/
/*global vglModule, proj4, document*/
//////////////////////////////////////////////////////////////////////////////

/**
 * Overwrites obj1's values with obj2's and adds obj2's if non existent in obj1
 * @param obj1 object
 * @param obj2 object
 * @returns object a new object based on obj1 and obj2
 */
function merge_options(obj1,obj2){
  var obj3 = {};
  for (var attrName in obj1) { obj3[attrName] = obj1[attrName]; }
  for (var attrName in obj2) { obj3[attrName] = obj2[attrName]; }
  return obj3;
}

function merge_options_in_place(obj1, obj2) {
  for (var attrName in obj2) { obj1[attrName] = obj2[attrName]; }
  return obj1;
}

function defaultValue(param, _default) {
  return typeof param !== 'undefined' ? param: _default;
}

function createIdCounter(initialId) {
  initialId = defaultValue(initialId, -1);
  return function() { initialId += 1; return initialId; };
}

var nextWorkflowId = createIdCounter();
var nextModuleId = createIdCounter();
var nextLocationId = createIdCounter();
var nextConnectionId = createIdCounter();
var nextPortId = createIdCounter();
var nextFunctionId = createIdCounter();


function blankWorkflow(name, version, connections, modules, vistrail_id, id) {
  name = defaultValue(name, 'untitled');
  version = defaultValue(version, '1.0.2');
  connections = defaultValue(connections, []);
  modules = defaultValue(modules, []);
  vistrail_id = defaultValue(vistrail_id, "");
  id = defaultValue(id, nextWorkflowId());
  return {
    "workflow": {
      "@name": name,
      "@version": version,
      "@{http://www.w3.org/2001/XMLSchema-instance}schemaLocation": "http://www.vistrails.org/workflow.xsd",
      "connection": connections,
      "module": modules,
      "@vistrail_id": vistrail_id,
      "@id": id
    }
  };
}

var moduleRegistry = {},
  currentWorkflowStyle = climatePipesStyle,
  activeWorkflow;

function debug(msg) {
  console.log(msg);
}

function initWorkflowCanvas() {
  $(window).on('resize', function() {
    activeWorkflow.resize();
  });

  //append workflow html elements
  $('body').append(
    [
      '<div id="workflow-dialog" title="Workflow"><table id="mainTable">',
      '<tr><td><div id="modulediv"><table id="moduletable">',
      '<tbody></tbody></table></div></td>',
      '<td id="canvasContainer"><canvas id="workspace"/></td></tr></table></div>'
    ].join('')
  );

  setupWorkflowDragAndDrop();
  setupModuleList();
  setupInteraction();
  setupWorkflowCSS();
}

function setupWorkflowCSS() {
  var stylesheet = document.styleSheets[0],
    selector = "[draggable]",
    rule = [
      '{-moz-user-select: none;',
      '-khtml-user-select: none;',
      '-webkit-user-select: none;',
      'user-select: none;',
      '-khtml-user-drag: element;',
      '-webkit-user-drag: element;',
      'cursor: move;}'
    ].join('');

  if (stylesheet.insertRule) {
    var pos = stylesheet.cssRules ? stylesheet.cssRules.length : 0;
    stylesheet.insertRule(selector + rule, pos);
  } else if (stylesheet.addRule) {
    stylesheet.addRule(selector, rule, -1);
  }

  $('#mainTable').css({
    height: '100%',
    width: '100%'
  });

  $('#modulediv').css({
    height: '100%',
    width: 160,
    overflow: 'auto'
  });

  $('#canvasContainer').css({
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  });
}

function setupWorkflowDragAndDrop() {
  var $canvas = $('#workspace');

  $canvas.on('dragover', function(e) {
    if (e.originalEvent) { //jQuery
      e = e.originalEvent;
    }

    if (e.preventDefault) {
      e.preventDefault();
    }

    e.dataTransfer.dropEffect = 'copy';
  });

  $canvas.on('drop', function(e) {
    if (e.originalEvent) { //jQuery
      e = e.originalEvent;
    }

    if (e.preventDefault) {
      e.preventDefault();
    }

    // this / e.target is current target element.

    if (e.stopPropagation) {
      e.stopPropagation(); // stops the browser from redirecting.
    }

    var ctxPos = this.ctxMousePos(e);

    activeWorkflow.addNewModule(
      e.dataTransfer.getData("Text"),
      ctxPos.x,
      ctxPos.y
    );

    activeWorkflow.draw($canvas[0].getContext('2d'));

    return false;
  });
}

function setupModuleList() {
  var $moduleTableBody = $('#moduletable > tbody:last');

  for(var i = 0; i < reg.registry.package.length; i++) {
    var pkg = reg.registry.package[i];
    if(!moduleRegistry.hasOwnProperty(pkg['@identifier'])) {
      moduleRegistry[pkg['@identifier']] = {};
    }
    if(!pkg.hasOwnProperty('moduleDescriptor')) {
      continue;
    }
    for(var j = 0; j < pkg.moduleDescriptor.length; j++) {
      var moduleInfo = pkg.moduleDescriptor[j];
      moduleRegistry[pkg['@identifier']][moduleInfo['@name']] = moduleInfo;
      addModuleToList(moduleInfo, $moduleTableBody);
    }
  }
}

function addModuleToList(moduleInfo, $moduleTableBody) {
  var $text = $(document.createElement('div'));
  $text.append(moduleInfo['@name'])
    .attr('draggable', 'true')
    .data('moduleInfo', moduleInfo)
    .on('dragstart', function(e) {
      if (e.originalEvent) { //jQuery
        e = e.originalEvent;
      }
      e.dataTransfer.effectAllowed = 'copy';
      e.dataTransfer.setData("Text", JSON.stringify($(this).data('moduleInfo')));

      debug(e);
    });

  var $td = $(document.createElement('td'));
  var $tr = $(document.createElement('tr'));
  $moduleTableBody.append($tr.append($td.append($text)));
}

function setupInteraction() {
  var $canvas = $('#workspace'),
    ctx = $canvas[0].getContext('2d'),
    panning,
    lastPoint,
    lastPanEvent,
    draggingPort,
    draggingPortPos,
    draggingPortModule,
    draggingModule,
    tempConnection = wflModule.connection();

  $canvas.mousedown(function (e) {
    var modules = activeWorkflow.modules(),
      key,
      module;

    lastPoint = this.ctxMousePos(e);

    // find modules
    for(key in modules) {
      if(modules.hasOwnProperty(key)) {
        module = modules[key];
        if(module.contains(lastPoint)) {
          if(draggingPort = module.portByPos(lastPoint)) {
            draggingPortPos = lastPoint;
            draggingPortModule = module;
          } else {
            draggingModule = module;
          }
          return;
        }
      }
    }

    // find connections

    // else initiate pan
    panning = true;
    lastPanEvent = e;
  });

  $canvas.mousemove(function (e) {
    // if dragging module

    if(draggingModule) {
      var newPoint = this.ctxMousePos(e);
      draggingModule.getData().location['@x'] += newPoint.x - lastPoint.x;
      draggingModule.getData().location['@y'] -= newPoint.y - lastPoint.y;
      draggingModule.recomputeMetrics($canvas[0].getContext('2d'), currentWorkflowStyle);
      lastPoint = newPoint;
      activeWorkflow.draw(ctx);
    } else if (draggingPort) {
      lastPoint = this.ctxMousePos(e);
      activeWorkflow.draw(ctx);
      tempConnection.drawCurve(ctx, currentWorkflowStyle, {
        cx1: draggingPortPos.x,
        cy1: draggingPortPos.y,
        cx2: lastPoint.x,
        cy2: lastPoint.y
      });
    } else if (panning) {
      activeWorkflow.translate(
        this.getContext('2d'),
        e.clientX - lastPanEvent.clientX,
        e.clientY - lastPanEvent.clientY
      );
      lastPanEvent = e;
      activeWorkflow.draw(ctx);
      activeWorkflow.updateElementPositions();
    }
  });

  $canvas.mouseup(function (e) {
    panning = false;
    draggingModule = null;
    if( draggingPort ) {
      var port,
        modules = activeWorkflow.modules(),
        key,
        module,
        ctx = this.getContext('2d');

      for(key in modules) {
        if(modules.hasOwnProperty(key)) {
          module = modules[key];
          if(module.contains(lastPoint)) {
            if(port = module.portByPos(lastPoint)) {
              activeWorkflow.addConnection(
                draggingPortModule,
                draggingPort,
                module,
                port
              );
              break;
            }
          }
        }
      }
      draggingPort = null;
      draggingPortModule = null;
      draggingPortPos = null;
      activeWorkflow.draw(ctx, currentWorkflowStyle);
    }
  });

  $canvas.mouseout(function (e) {
    panning = false;
  });
}

function ctxMousePos(event){
  var totalOffsetX = 0,
    totalOffsetY = 0,
    currentElement = this,
    translated = activeWorkflow.translated();

  do{
    totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
    totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
  }
  while(currentElement = currentElement.offsetParent)

  return {
    x: event.pageX - totalOffsetX - translated.x,
    y: event.pageY - totalOffsetY - translated.y
  };
}

HTMLCanvasElement.prototype.ctxMousePos = ctxMousePos;
