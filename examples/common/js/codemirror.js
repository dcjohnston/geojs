var jsonlint = function() {
    var parser = {
        trace: function() {},
        yy: {},
        symbols_: {
            error: 2,
            JSONString: 3,
            STRING: 4,
            JSONNumber: 5,
            NUMBER: 6,
            JSONNullLiteral: 7,
            NULL: 8,
            JSONBooleanLiteral: 9,
            TRUE: 10,
            FALSE: 11,
            JSONText: 12,
            JSONValue: 13,
            EOF: 14,
            JSONObject: 15,
            JSONArray: 16,
            "{": 17,
            "}": 18,
            JSONMemberList: 19,
            JSONMember: 20,
            ":": 21,
            ",": 22,
            "[": 23,
            "]": 24,
            JSONElementList: 25,
            $accept: 0,
            $end: 1
        },
        terminals_: {
            2: "error",
            4: "STRING",
            6: "NUMBER",
            8: "NULL",
            10: "TRUE",
            11: "FALSE",
            14: "EOF",
            17: "{",
            18: "}",
            21: ":",
            22: ",",
            23: "[",
            24: "]"
        },
        productions_: [ 0, [ 3, 1 ], [ 5, 1 ], [ 7, 1 ], [ 9, 1 ], [ 9, 1 ], [ 12, 2 ], [ 13, 1 ], [ 13, 1 ], [ 13, 1 ], [ 13, 1 ], [ 13, 1 ], [ 13, 1 ], [ 15, 2 ], [ 15, 3 ], [ 20, 3 ], [ 19, 1 ], [ 19, 3 ], [ 16, 2 ], [ 16, 3 ], [ 25, 1 ], [ 25, 3 ] ],
        performAction: function(yytext, yyleng, yylineno, yy, yystate, $$) {
            var $0 = $$.length - 1;
            switch (yystate) {
              case 1:
                this.$ = yytext.replace(/\\(\\|")/g, "$1").replace(/\\n/g, "\n").replace(/\\r/g, "\r").replace(/\\t/g, "	").replace(/\\v/g, "").replace(/\\f/g, "\f").replace(/\\b/g, "\b");
                break;

              case 2:
                this.$ = Number(yytext);
                break;

              case 3:
                this.$ = null;
                break;

              case 4:
                this.$ = !0;
                break;

              case 5:
                this.$ = !1;
                break;

              case 6:
                return this.$ = $$[$0 - 1];

              case 13:
                this.$ = {};
                break;

              case 14:
                this.$ = $$[$0 - 1];
                break;

              case 15:
                this.$ = [ $$[$0 - 2], $$[$0] ];
                break;

              case 16:
                this.$ = {}, this.$[$$[$0][0]] = $$[$0][1];
                break;

              case 17:
                this.$ = $$[$0 - 2], $$[$0 - 2][$$[$0][0]] = $$[$0][1];
                break;

              case 18:
                this.$ = [];
                break;

              case 19:
                this.$ = $$[$0 - 1];
                break;

              case 20:
                this.$ = [ $$[$0] ];
                break;

              case 21:
                this.$ = $$[$0 - 2], $$[$0 - 2].push($$[$0]);
            }
        },
        table: [ {
            3: 5,
            4: [ 1, 12 ],
            5: 6,
            6: [ 1, 13 ],
            7: 3,
            8: [ 1, 9 ],
            9: 4,
            10: [ 1, 10 ],
            11: [ 1, 11 ],
            12: 1,
            13: 2,
            15: 7,
            16: 8,
            17: [ 1, 14 ],
            23: [ 1, 15 ]
        }, {
            1: [ 3 ]
        }, {
            14: [ 1, 16 ]
        }, {
            14: [ 2, 7 ],
            18: [ 2, 7 ],
            22: [ 2, 7 ],
            24: [ 2, 7 ]
        }, {
            14: [ 2, 8 ],
            18: [ 2, 8 ],
            22: [ 2, 8 ],
            24: [ 2, 8 ]
        }, {
            14: [ 2, 9 ],
            18: [ 2, 9 ],
            22: [ 2, 9 ],
            24: [ 2, 9 ]
        }, {
            14: [ 2, 10 ],
            18: [ 2, 10 ],
            22: [ 2, 10 ],
            24: [ 2, 10 ]
        }, {
            14: [ 2, 11 ],
            18: [ 2, 11 ],
            22: [ 2, 11 ],
            24: [ 2, 11 ]
        }, {
            14: [ 2, 12 ],
            18: [ 2, 12 ],
            22: [ 2, 12 ],
            24: [ 2, 12 ]
        }, {
            14: [ 2, 3 ],
            18: [ 2, 3 ],
            22: [ 2, 3 ],
            24: [ 2, 3 ]
        }, {
            14: [ 2, 4 ],
            18: [ 2, 4 ],
            22: [ 2, 4 ],
            24: [ 2, 4 ]
        }, {
            14: [ 2, 5 ],
            18: [ 2, 5 ],
            22: [ 2, 5 ],
            24: [ 2, 5 ]
        }, {
            14: [ 2, 1 ],
            18: [ 2, 1 ],
            21: [ 2, 1 ],
            22: [ 2, 1 ],
            24: [ 2, 1 ]
        }, {
            14: [ 2, 2 ],
            18: [ 2, 2 ],
            22: [ 2, 2 ],
            24: [ 2, 2 ]
        }, {
            3: 20,
            4: [ 1, 12 ],
            18: [ 1, 17 ],
            19: 18,
            20: 19
        }, {
            3: 5,
            4: [ 1, 12 ],
            5: 6,
            6: [ 1, 13 ],
            7: 3,
            8: [ 1, 9 ],
            9: 4,
            10: [ 1, 10 ],
            11: [ 1, 11 ],
            13: 23,
            15: 7,
            16: 8,
            17: [ 1, 14 ],
            23: [ 1, 15 ],
            24: [ 1, 21 ],
            25: 22
        }, {
            1: [ 2, 6 ]
        }, {
            14: [ 2, 13 ],
            18: [ 2, 13 ],
            22: [ 2, 13 ],
            24: [ 2, 13 ]
        }, {
            18: [ 1, 24 ],
            22: [ 1, 25 ]
        }, {
            18: [ 2, 16 ],
            22: [ 2, 16 ]
        }, {
            21: [ 1, 26 ]
        }, {
            14: [ 2, 18 ],
            18: [ 2, 18 ],
            22: [ 2, 18 ],
            24: [ 2, 18 ]
        }, {
            22: [ 1, 28 ],
            24: [ 1, 27 ]
        }, {
            22: [ 2, 20 ],
            24: [ 2, 20 ]
        }, {
            14: [ 2, 14 ],
            18: [ 2, 14 ],
            22: [ 2, 14 ],
            24: [ 2, 14 ]
        }, {
            3: 20,
            4: [ 1, 12 ],
            20: 29
        }, {
            3: 5,
            4: [ 1, 12 ],
            5: 6,
            6: [ 1, 13 ],
            7: 3,
            8: [ 1, 9 ],
            9: 4,
            10: [ 1, 10 ],
            11: [ 1, 11 ],
            13: 30,
            15: 7,
            16: 8,
            17: [ 1, 14 ],
            23: [ 1, 15 ]
        }, {
            14: [ 2, 19 ],
            18: [ 2, 19 ],
            22: [ 2, 19 ],
            24: [ 2, 19 ]
        }, {
            3: 5,
            4: [ 1, 12 ],
            5: 6,
            6: [ 1, 13 ],
            7: 3,
            8: [ 1, 9 ],
            9: 4,
            10: [ 1, 10 ],
            11: [ 1, 11 ],
            13: 31,
            15: 7,
            16: 8,
            17: [ 1, 14 ],
            23: [ 1, 15 ]
        }, {
            18: [ 2, 17 ],
            22: [ 2, 17 ]
        }, {
            18: [ 2, 15 ],
            22: [ 2, 15 ]
        }, {
            22: [ 2, 21 ],
            24: [ 2, 21 ]
        } ],
        defaultActions: {
            16: [ 2, 6 ]
        },
        parseError: function(str) {
            throw new Error(str);
        },
        parse: function(input) {
            function popStack(n) {
                stack.length = stack.length - 2 * n, vstack.length = vstack.length - n, lstack.length = lstack.length - n;
            }
            function lex() {
                var token;
                return token = self.lexer.lex() || 1, "number" != typeof token && (token = self.symbols_[token] || token), 
                token;
            }
            var self = this, stack = [ 0 ], vstack = [ null ], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
            this.lexer.setInput(input), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, 
            "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
            var yyloc = this.lexer.yylloc;
            lstack.push(yyloc), "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
            for (var symbol, preErrorSymbol, state, action, r, p, len, newState, expected, yyval = {}; ;) {
                if (state = stack[stack.length - 1], this.defaultActions[state] ? action = this.defaultActions[state] : (null == symbol && (symbol = lex()), 
                action = table[state] && table[state][symbol]), "undefined" == typeof action || !action.length || !action[0]) {
                    if (!recovering) {
                        expected = [];
                        for (p in table[state]) this.terminals_[p] && p > 2 && expected.push("'" + this.terminals_[p] + "'");
                        var errStr = "";
                        errStr = this.lexer.showPosition ? "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + this.terminals_[symbol] + "'" : "Parse error on line " + (yylineno + 1) + ": Unexpected " + (1 == symbol ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'"), 
                        this.parseError(errStr, {
                            text: this.lexer.match,
                            token: this.terminals_[symbol] || symbol,
                            line: this.lexer.yylineno,
                            loc: yyloc,
                            expected: expected
                        });
                    }
                    if (3 == recovering) {
                        if (symbol == EOF) throw new Error(errStr || "Parsing halted.");
                        yyleng = this.lexer.yyleng, yytext = this.lexer.yytext, yylineno = this.lexer.yylineno, 
                        yyloc = this.lexer.yylloc, symbol = lex();
                    }
                    for (;;) {
                        if (TERROR.toString() in table[state]) break;
                        if (0 == state) throw new Error(errStr || "Parsing halted.");
                        popStack(1), state = stack[stack.length - 1];
                    }
                    preErrorSymbol = symbol, symbol = TERROR, state = stack[stack.length - 1], action = table[state] && table[state][TERROR], 
                    recovering = 3;
                }
                if (action[0] instanceof Array && action.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
                switch (action[0]) {
                  case 1:
                    stack.push(symbol), vstack.push(this.lexer.yytext), lstack.push(this.lexer.yylloc), 
                    stack.push(action[1]), symbol = null, preErrorSymbol ? (symbol = preErrorSymbol, 
                    preErrorSymbol = null) : (yyleng = this.lexer.yyleng, yytext = this.lexer.yytext, 
                    yylineno = this.lexer.yylineno, yyloc = this.lexer.yylloc, recovering > 0 && recovering--);
                    break;

                  case 2:
                    if (len = this.productions_[action[1]][1], yyval.$ = vstack[vstack.length - len], 
                    yyval._$ = {
                        first_line: lstack[lstack.length - (len || 1)].first_line,
                        last_line: lstack[lstack.length - 1].last_line,
                        first_column: lstack[lstack.length - (len || 1)].first_column,
                        last_column: lstack[lstack.length - 1].last_column
                    }, r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack), 
                    "undefined" != typeof r) return r;
                    len && (stack = stack.slice(0, -1 * len * 2), vstack = vstack.slice(0, -1 * len), 
                    lstack = lstack.slice(0, -1 * len)), stack.push(this.productions_[action[1]][0]), 
                    vstack.push(yyval.$), lstack.push(yyval._$), newState = table[stack[stack.length - 2]][stack[stack.length - 1]], 
                    stack.push(newState);
                    break;

                  case 3:
                    return !0;
                }
            }
            return !0;
        }
    }, lexer = function() {
        var lexer = {
            EOF: 1,
            parseError: function(str, hash) {
                if (!this.yy.parseError) throw new Error(str);
                this.yy.parseError(str, hash);
            },
            setInput: function(input) {
                return this._input = input, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, 
                this.yytext = this.matched = this.match = "", this.conditionStack = [ "INITIAL" ], 
                this.yylloc = {
                    first_line: 1,
                    first_column: 0,
                    last_line: 1,
                    last_column: 0
                }, this;
            },
            input: function() {
                var ch = this._input[0];
                this.yytext += ch, this.yyleng++, this.match += ch, this.matched += ch;
                var lines = ch.match(/\n/);
                return lines && this.yylineno++, this._input = this._input.slice(1), ch;
            },
            unput: function(ch) {
                return this._input = ch + this._input, this;
            },
            more: function() {
                return this._more = !0, this;
            },
            less: function(n) {
                this._input = this.match.slice(n) + this._input;
            },
            pastInput: function() {
                var past = this.matched.substr(0, this.matched.length - this.match.length);
                return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
            },
            upcomingInput: function() {
                var next = this.match;
                return next.length < 20 && (next += this._input.substr(0, 20 - next.length)), (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
            },
            showPosition: function() {
                var pre = this.pastInput(), c = new Array(pre.length + 1).join("-");
                return pre + this.upcomingInput() + "\n" + c + "^";
            },
            next: function() {
                if (this.done) return this.EOF;
                this._input || (this.done = !0);
                var token, match, tempMatch, index, lines;
                this._more || (this.yytext = "", this.match = "");
                for (var rules = this._currentRules(), i = 0; i < rules.length && (tempMatch = this._input.match(this.rules[rules[i]]), 
                !tempMatch || match && !(tempMatch[0].length > match[0].length) || (match = tempMatch, 
                index = i, this.options.flex)); i++) ;
                return match ? (lines = match[0].match(/\n.*/g), lines && (this.yylineno += lines.length), 
                this.yylloc = {
                    first_line: this.yylloc.last_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.last_column,
                    last_column: lines ? lines[lines.length - 1].length - 1 : this.yylloc.last_column + match[0].length
                }, this.yytext += match[0], this.match += match[0], this.yyleng = this.yytext.length, 
                this._more = !1, this._input = this._input.slice(match[0].length), this.matched += match[0], 
                token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]), 
                this.done && this._input && (this.done = !1), token ? token : void 0) : "" === this._input ? this.EOF : void this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                    text: "",
                    token: null,
                    line: this.yylineno
                });
            },
            lex: function() {
                var r = this.next();
                return "undefined" != typeof r ? r : this.lex();
            },
            begin: function(condition) {
                this.conditionStack.push(condition);
            },
            popState: function() {
                return this.conditionStack.pop();
            },
            _currentRules: function() {
                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
            },
            topState: function() {
                return this.conditionStack[this.conditionStack.length - 2];
            },
            pushState: function(condition) {
                this.begin(condition);
            }
        };
        return lexer.options = {}, lexer.performAction = function(yy, yy_, $avoiding_name_collisions, YY_START) {
            switch ($avoiding_name_collisions) {
              case 0:
                break;

              case 1:
                return 6;

              case 2:
                return yy_.yytext = yy_.yytext.substr(1, yy_.yyleng - 2), 4;

              case 3:
                return 17;

              case 4:
                return 18;

              case 5:
                return 23;

              case 6:
                return 24;

              case 7:
                return 22;

              case 8:
                return 21;

              case 9:
                return 10;

              case 10:
                return 11;

              case 11:
                return 8;

              case 12:
                return 14;

              case 13:
                return "INVALID";
            }
        }, lexer.rules = [ /^(?:\s+)/, /^(?:(-?([0-9]|[1-9][0-9]+))(\.[0-9]+)?([eE][-+]?[0-9]+)?\b)/, /^(?:"(?:\\[\\"bfnrt/]|\\u[a-fA-F0-9]{4}|[^\\\0-\x09\x0a-\x1f"])*")/, /^(?:\{)/, /^(?:\})/, /^(?:\[)/, /^(?:\])/, /^(?:,)/, /^(?::)/, /^(?:true\b)/, /^(?:false\b)/, /^(?:null\b)/, /^(?:$)/, /^(?:.)/ ], 
        lexer.conditions = {
            INITIAL: {
                rules: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ],
                inclusive: !0
            }
        }, lexer;
    }();
    return parser.lexer = lexer, parser;
}();

"undefined" != typeof require && "undefined" != typeof exports && (exports.parser = jsonlint, 
exports.parse = function() {
    return jsonlint.parse.apply(jsonlint, arguments);
}, exports.main = function(args) {
    if (!args[1]) throw new Error("Usage: " + args[0] + " FILE");
    if ("undefined" != typeof process) var source = require("fs").readFileSync(require("path").join(process.cwd(), args[1]), "utf8"); else var cwd = require("file").path(require("file").cwd()), source = cwd.join(args[1]).read({
        charset: "utf-8"
    });
    return exports.parser.parse(source);
}, "undefined" != typeof module && require.main === module && exports.main("undefined" != typeof process ? process.argv.slice(1) : require("system").args)), 
function(mod) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = mod(); else {
        if ("function" == typeof define && define.amd) return define([], mod);
        this.CodeMirror = mod();
    }
}(function() {
    "use strict";
    function CodeMirror(place, options) {
        if (!(this instanceof CodeMirror)) return new CodeMirror(place, options);
        this.options = options = options ? copyObj(options) : {}, copyObj(defaults, options, !1), 
        setGuttersForLineNumbers(options);
        var doc = options.value;
        "string" == typeof doc && (doc = new Doc(doc, options.mode)), this.doc = doc;
        var display = this.display = new Display(place, doc);
        display.wrapper.CodeMirror = this, updateGutters(this), themeChanged(this), options.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), 
        options.autofocus && !mobile && focusInput(this), this.state = {
            keyMaps: [],
            overlays: [],
            modeGen: 0,
            overwrite: !1,
            focused: !1,
            suppressEdits: !1,
            pasteIncoming: !1,
            cutIncoming: !1,
            draggingText: !1,
            highlight: new Delayed()
        }, ie && 11 > ie_version && setTimeout(bind(resetInput, this, !0), 20), registerEventHandlers(this), 
        ensureGlobalHandlers(), startOperation(this), this.curOp.forceUpdate = !0, attachDoc(this, doc), 
        options.autofocus && !mobile || activeElt() == display.input ? setTimeout(bind(onFocus, this), 20) : onBlur(this);
        for (var opt in optionHandlers) optionHandlers.hasOwnProperty(opt) && optionHandlers[opt](this, options[opt], Init);
        maybeUpdateLineNumberWidth(this);
        for (var i = 0; i < initHooks.length; ++i) initHooks[i](this);
        endOperation(this);
    }
    function Display(place, doc) {
        var d = this, input = d.input = elt("textarea", null, null, "position: absolute; padding: 0; width: 1px; height: 1em; outline: none");
        webkit ? input.style.width = "1000px" : input.setAttribute("wrap", "off"), ios && (input.style.border = "1px solid black"), 
        input.setAttribute("autocorrect", "off"), input.setAttribute("autocapitalize", "off"), 
        input.setAttribute("spellcheck", "false"), d.inputDiv = elt("div", [ input ], null, "overflow: hidden; position: relative; width: 3px; height: 0px;"), 
        d.scrollbarH = elt("div", [ elt("div", null, null, "height: 100%; min-height: 1px") ], "CodeMirror-hscrollbar"), 
        d.scrollbarV = elt("div", [ elt("div", null, null, "min-width: 1px") ], "CodeMirror-vscrollbar"), 
        d.scrollbarFiller = elt("div", null, "CodeMirror-scrollbar-filler"), d.gutterFiller = elt("div", null, "CodeMirror-gutter-filler"), 
        d.lineDiv = elt("div", null, "CodeMirror-code"), d.selectionDiv = elt("div", null, null, "position: relative; z-index: 1"), 
        d.cursorDiv = elt("div", null, "CodeMirror-cursors"), d.measure = elt("div", null, "CodeMirror-measure"), 
        d.lineMeasure = elt("div", null, "CodeMirror-measure"), d.lineSpace = elt("div", [ d.measure, d.lineMeasure, d.selectionDiv, d.cursorDiv, d.lineDiv ], null, "position: relative; outline: none"), 
        d.mover = elt("div", [ elt("div", [ d.lineSpace ], "CodeMirror-lines") ], null, "position: relative"), 
        d.sizer = elt("div", [ d.mover ], "CodeMirror-sizer"), d.heightForcer = elt("div", null, null, "position: absolute; height: " + scrollerCutOff + "px; width: 1px;"), 
        d.gutters = elt("div", null, "CodeMirror-gutters"), d.lineGutter = null, d.scroller = elt("div", [ d.sizer, d.heightForcer, d.gutters ], "CodeMirror-scroll"), 
        d.scroller.setAttribute("tabIndex", "-1"), d.wrapper = elt("div", [ d.inputDiv, d.scrollbarH, d.scrollbarV, d.scrollbarFiller, d.gutterFiller, d.scroller ], "CodeMirror"), 
        ie && 8 > ie_version && (d.gutters.style.zIndex = -1, d.scroller.style.paddingRight = 0), 
        ios && (input.style.width = "0px"), webkit || (d.scroller.draggable = !0), khtml && (d.inputDiv.style.height = "1px", 
        d.inputDiv.style.position = "absolute"), ie && 8 > ie_version && (d.scrollbarH.style.minHeight = d.scrollbarV.style.minWidth = "18px"), 
        place.appendChild ? place.appendChild(d.wrapper) : place(d.wrapper), d.viewFrom = d.viewTo = doc.first, 
        d.view = [], d.externalMeasured = null, d.viewOffset = 0, d.lastSizeC = 0, d.updateLineNumbers = null, 
        d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null, d.prevInput = "", 
        d.alignWidgets = !1, d.pollingFast = !1, d.poll = new Delayed(), d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null, 
        d.inaccurateSelection = !1, d.maxLine = null, d.maxLineLength = 0, d.maxLineChanged = !1, 
        d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null, d.shift = !1, d.selForContextMenu = null;
    }
    function loadMode(cm) {
        cm.doc.mode = CodeMirror.getMode(cm.options, cm.doc.modeOption), resetModeState(cm);
    }
    function resetModeState(cm) {
        cm.doc.iter(function(line) {
            line.stateAfter && (line.stateAfter = null), line.styles && (line.styles = null);
        }), cm.doc.frontier = cm.doc.first, startWorker(cm, 100), cm.state.modeGen++, cm.curOp && regChange(cm);
    }
    function wrappingChanged(cm) {
        cm.options.lineWrapping ? (addClass(cm.display.wrapper, "CodeMirror-wrap"), cm.display.sizer.style.minWidth = "") : (rmClass(cm.display.wrapper, "CodeMirror-wrap"), 
        findMaxLine(cm)), estimateLineHeights(cm), regChange(cm), clearCaches(cm), setTimeout(function() {
            updateScrollbars(cm);
        }, 100);
    }
    function estimateHeight(cm) {
        var th = textHeight(cm.display), wrapping = cm.options.lineWrapping, perLine = wrapping && Math.max(5, cm.display.scroller.clientWidth / charWidth(cm.display) - 3);
        return function(line) {
            if (lineIsHidden(cm.doc, line)) return 0;
            var widgetsHeight = 0;
            if (line.widgets) for (var i = 0; i < line.widgets.length; i++) line.widgets[i].height && (widgetsHeight += line.widgets[i].height);
            return wrapping ? widgetsHeight + (Math.ceil(line.text.length / perLine) || 1) * th : widgetsHeight + th;
        };
    }
    function estimateLineHeights(cm) {
        var doc = cm.doc, est = estimateHeight(cm);
        doc.iter(function(line) {
            var estHeight = est(line);
            estHeight != line.height && updateLineHeight(line, estHeight);
        });
    }
    function keyMapChanged(cm) {
        var map = keyMap[cm.options.keyMap], style = map.style;
        cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-keymap-\S+/g, "") + (style ? " cm-keymap-" + style : "");
    }
    function themeChanged(cm) {
        cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), 
        clearCaches(cm);
    }
    function guttersChanged(cm) {
        updateGutters(cm), regChange(cm), setTimeout(function() {
            alignHorizontally(cm);
        }, 20);
    }
    function updateGutters(cm) {
        var gutters = cm.display.gutters, specs = cm.options.gutters;
        removeChildren(gutters);
        for (var i = 0; i < specs.length; ++i) {
            var gutterClass = specs[i], gElt = gutters.appendChild(elt("div", null, "CodeMirror-gutter " + gutterClass));
            "CodeMirror-linenumbers" == gutterClass && (cm.display.lineGutter = gElt, gElt.style.width = (cm.display.lineNumWidth || 1) + "px");
        }
        gutters.style.display = i ? "" : "none", updateGutterSpace(cm);
    }
    function updateGutterSpace(cm) {
        var width = cm.display.gutters.offsetWidth;
        cm.display.sizer.style.marginLeft = width + "px", cm.display.scrollbarH.style.left = cm.options.fixedGutter ? width + "px" : 0;
    }
    function lineLength(line) {
        if (0 == line.height) return 0;
        for (var merged, len = line.text.length, cur = line; merged = collapsedSpanAtStart(cur); ) {
            var found = merged.find(0, !0);
            cur = found.from.line, len += found.from.ch - found.to.ch;
        }
        for (cur = line; merged = collapsedSpanAtEnd(cur); ) {
            var found = merged.find(0, !0);
            len -= cur.text.length - found.from.ch, cur = found.to.line, len += cur.text.length - found.to.ch;
        }
        return len;
    }
    function findMaxLine(cm) {
        var d = cm.display, doc = cm.doc;
        d.maxLine = getLine(doc, doc.first), d.maxLineLength = lineLength(d.maxLine), d.maxLineChanged = !0, 
        doc.iter(function(line) {
            var len = lineLength(line);
            len > d.maxLineLength && (d.maxLineLength = len, d.maxLine = line);
        });
    }
    function setGuttersForLineNumbers(options) {
        var found = indexOf(options.gutters, "CodeMirror-linenumbers");
        -1 == found && options.lineNumbers ? options.gutters = options.gutters.concat([ "CodeMirror-linenumbers" ]) : found > -1 && !options.lineNumbers && (options.gutters = options.gutters.slice(0), 
        options.gutters.splice(found, 1));
    }
    function hScrollbarTakesSpace(cm) {
        return cm.display.scroller.clientHeight - cm.display.wrapper.clientHeight < scrollerCutOff - 3;
    }
    function measureForScrollbars(cm) {
        var scroll = cm.display.scroller;
        return {
            clientHeight: scroll.clientHeight,
            barHeight: cm.display.scrollbarV.clientHeight,
            scrollWidth: scroll.scrollWidth,
            clientWidth: scroll.clientWidth,
            hScrollbarTakesSpace: hScrollbarTakesSpace(cm),
            barWidth: cm.display.scrollbarH.clientWidth,
            docHeight: Math.round(cm.doc.height + paddingVert(cm.display))
        };
    }
    function updateScrollbars(cm, measure) {
        measure || (measure = measureForScrollbars(cm));
        var d = cm.display, sWidth = scrollbarWidth(d.measure), scrollHeight = measure.docHeight + scrollerCutOff, needsH = measure.scrollWidth > measure.clientWidth;
        needsH && measure.scrollWidth <= measure.clientWidth + 1 && sWidth > 0 && !measure.hScrollbarTakesSpace && (needsH = !1);
        var needsV = scrollHeight > measure.clientHeight;
        if (needsV ? (d.scrollbarV.style.display = "block", d.scrollbarV.style.bottom = needsH ? sWidth + "px" : "0", 
        d.scrollbarV.firstChild.style.height = Math.max(0, scrollHeight - measure.clientHeight + (measure.barHeight || d.scrollbarV.clientHeight)) + "px") : (d.scrollbarV.style.display = "", 
        d.scrollbarV.firstChild.style.height = "0"), needsH ? (d.scrollbarH.style.display = "block", 
        d.scrollbarH.style.right = needsV ? sWidth + "px" : "0", d.scrollbarH.firstChild.style.width = measure.scrollWidth - measure.clientWidth + (measure.barWidth || d.scrollbarH.clientWidth) + "px") : (d.scrollbarH.style.display = "", 
        d.scrollbarH.firstChild.style.width = "0"), needsH && needsV ? (d.scrollbarFiller.style.display = "block", 
        d.scrollbarFiller.style.height = d.scrollbarFiller.style.width = sWidth + "px") : d.scrollbarFiller.style.display = "", 
        needsH && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter ? (d.gutterFiller.style.display = "block", 
        d.gutterFiller.style.height = sWidth + "px", d.gutterFiller.style.width = d.gutters.offsetWidth + "px") : d.gutterFiller.style.display = "", 
        !cm.state.checkedOverlayScrollbar && measure.clientHeight > 0) {
            if (0 === sWidth) {
                var w = mac && !mac_geMountainLion ? "12px" : "18px";
                d.scrollbarV.style.minWidth = d.scrollbarH.style.minHeight = w;
                var barMouseDown = function(e) {
                    e_target(e) != d.scrollbarV && e_target(e) != d.scrollbarH && operation(cm, onMouseDown)(e);
                };
                on(d.scrollbarV, "mousedown", barMouseDown), on(d.scrollbarH, "mousedown", barMouseDown);
            }
            cm.state.checkedOverlayScrollbar = !0;
        }
    }
    function visibleLines(display, doc, viewport) {
        var top = viewport && null != viewport.top ? Math.max(0, viewport.top) : display.scroller.scrollTop;
        top = Math.floor(top - paddingTop(display));
        var bottom = viewport && null != viewport.bottom ? viewport.bottom : top + display.wrapper.clientHeight, from = lineAtHeight(doc, top), to = lineAtHeight(doc, bottom);
        if (viewport && viewport.ensure) {
            var ensureFrom = viewport.ensure.from.line, ensureTo = viewport.ensure.to.line;
            if (from > ensureFrom) return {
                from: ensureFrom,
                to: lineAtHeight(doc, heightAtLine(getLine(doc, ensureFrom)) + display.wrapper.clientHeight)
            };
            if (Math.min(ensureTo, doc.lastLine()) >= to) return {
                from: lineAtHeight(doc, heightAtLine(getLine(doc, ensureTo)) - display.wrapper.clientHeight),
                to: ensureTo
            };
        }
        return {
            from: from,
            to: Math.max(to, from + 1)
        };
    }
    function alignHorizontally(cm) {
        var display = cm.display, view = display.view;
        if (display.alignWidgets || display.gutters.firstChild && cm.options.fixedGutter) {
            for (var comp = compensateForHScroll(display) - display.scroller.scrollLeft + cm.doc.scrollLeft, gutterW = display.gutters.offsetWidth, left = comp + "px", i = 0; i < view.length; i++) if (!view[i].hidden) {
                cm.options.fixedGutter && view[i].gutter && (view[i].gutter.style.left = left);
                var align = view[i].alignable;
                if (align) for (var j = 0; j < align.length; j++) align[j].style.left = left;
            }
            cm.options.fixedGutter && (display.gutters.style.left = comp + gutterW + "px");
        }
    }
    function maybeUpdateLineNumberWidth(cm) {
        if (!cm.options.lineNumbers) return !1;
        var doc = cm.doc, last = lineNumberFor(cm.options, doc.first + doc.size - 1), display = cm.display;
        if (last.length != display.lineNumChars) {
            var test = display.measure.appendChild(elt("div", [ elt("div", last) ], "CodeMirror-linenumber CodeMirror-gutter-elt")), innerW = test.firstChild.offsetWidth, padding = test.offsetWidth - innerW;
            return display.lineGutter.style.width = "", display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding), 
            display.lineNumWidth = display.lineNumInnerWidth + padding, display.lineNumChars = display.lineNumInnerWidth ? last.length : -1, 
            display.lineGutter.style.width = display.lineNumWidth + "px", updateGutterSpace(cm), 
            !0;
        }
        return !1;
    }
    function lineNumberFor(options, i) {
        return String(options.lineNumberFormatter(i + options.firstLineNumber));
    }
    function compensateForHScroll(display) {
        return display.scroller.getBoundingClientRect().left - display.sizer.getBoundingClientRect().left;
    }
    function DisplayUpdate(cm, viewport, force) {
        var display = cm.display;
        this.viewport = viewport, this.visible = visibleLines(display, cm.doc, viewport), 
        this.editorIsHidden = !display.wrapper.offsetWidth, this.wrapperHeight = display.wrapper.clientHeight, 
        this.oldViewFrom = display.viewFrom, this.oldViewTo = display.viewTo, this.oldScrollerWidth = display.scroller.clientWidth, 
        this.force = force, this.dims = getDimensions(cm);
    }
    function updateDisplayIfNeeded(cm, update) {
        var display = cm.display, doc = cm.doc;
        if (update.editorIsHidden) return resetView(cm), !1;
        if (!update.force && update.visible.from >= display.viewFrom && update.visible.to <= display.viewTo && (null == display.updateLineNumbers || display.updateLineNumbers >= display.viewTo) && 0 == countDirtyView(cm)) return !1;
        maybeUpdateLineNumberWidth(cm) && (resetView(cm), update.dims = getDimensions(cm));
        var end = doc.first + doc.size, from = Math.max(update.visible.from - cm.options.viewportMargin, doc.first), to = Math.min(end, update.visible.to + cm.options.viewportMargin);
        display.viewFrom < from && from - display.viewFrom < 20 && (from = Math.max(doc.first, display.viewFrom)), 
        display.viewTo > to && display.viewTo - to < 20 && (to = Math.min(end, display.viewTo)), 
        sawCollapsedSpans && (from = visualLineNo(cm.doc, from), to = visualLineEndNo(cm.doc, to));
        var different = from != display.viewFrom || to != display.viewTo || display.lastSizeC != update.wrapperHeight;
        adjustView(cm, from, to), display.viewOffset = heightAtLine(getLine(cm.doc, display.viewFrom)), 
        cm.display.mover.style.top = display.viewOffset + "px";
        var toUpdate = countDirtyView(cm);
        if (!different && 0 == toUpdate && !update.force && (null == display.updateLineNumbers || display.updateLineNumbers >= display.viewTo)) return !1;
        var focused = activeElt();
        return toUpdate > 4 && (display.lineDiv.style.display = "none"), patchDisplay(cm, display.updateLineNumbers, update.dims), 
        toUpdate > 4 && (display.lineDiv.style.display = ""), focused && activeElt() != focused && focused.offsetHeight && focused.focus(), 
        removeChildren(display.cursorDiv), removeChildren(display.selectionDiv), different && (display.lastSizeC = update.wrapperHeight, 
        startWorker(cm, 400)), display.updateLineNumbers = null, !0;
    }
    function postUpdateDisplay(cm, update) {
        for (var force = update.force, viewport = update.viewport, first = !0; ;first = !1) {
            if (first && cm.options.lineWrapping && update.oldScrollerWidth != cm.display.scroller.clientWidth) force = !0; else if (force = !1, 
            viewport && null != viewport.top && (viewport = {
                top: Math.min(cm.doc.height + paddingVert(cm.display) - scrollerCutOff - cm.display.scroller.clientHeight, viewport.top)
            }), update.visible = visibleLines(cm.display, cm.doc, viewport), update.visible.from >= cm.display.viewFrom && update.visible.to <= cm.display.viewTo) break;
            if (!updateDisplayIfNeeded(cm, update)) break;
            updateHeightsInViewport(cm);
            var barMeasure = measureForScrollbars(cm);
            updateSelection(cm), setDocumentHeight(cm, barMeasure), updateScrollbars(cm, barMeasure);
        }
        signalLater(cm, "update", cm), (cm.display.viewFrom != update.oldViewFrom || cm.display.viewTo != update.oldViewTo) && signalLater(cm, "viewportChange", cm, cm.display.viewFrom, cm.display.viewTo);
    }
    function updateDisplaySimple(cm, viewport) {
        var update = new DisplayUpdate(cm, viewport);
        if (updateDisplayIfNeeded(cm, update)) {
            updateHeightsInViewport(cm), postUpdateDisplay(cm, update);
            var barMeasure = measureForScrollbars(cm);
            updateSelection(cm), setDocumentHeight(cm, barMeasure), updateScrollbars(cm, barMeasure);
        }
    }
    function setDocumentHeight(cm, measure) {
        cm.display.sizer.style.minHeight = cm.display.heightForcer.style.top = measure.docHeight + "px", 
        cm.display.gutters.style.height = Math.max(measure.docHeight, measure.clientHeight - scrollerCutOff) + "px";
    }
    function checkForWebkitWidthBug(cm, measure) {
        cm.display.sizer.offsetWidth + cm.display.gutters.offsetWidth < cm.display.scroller.clientWidth - 1 && (cm.display.sizer.style.minHeight = cm.display.heightForcer.style.top = "0px", 
        cm.display.gutters.style.height = measure.docHeight + "px");
    }
    function updateHeightsInViewport(cm) {
        for (var display = cm.display, prevBottom = display.lineDiv.offsetTop, i = 0; i < display.view.length; i++) {
            var height, cur = display.view[i];
            if (!cur.hidden) {
                if (ie && 8 > ie_version) {
                    var bot = cur.node.offsetTop + cur.node.offsetHeight;
                    height = bot - prevBottom, prevBottom = bot;
                } else {
                    var box = cur.node.getBoundingClientRect();
                    height = box.bottom - box.top;
                }
                var diff = cur.line.height - height;
                if (2 > height && (height = textHeight(display)), (diff > .001 || -.001 > diff) && (updateLineHeight(cur.line, height), 
                updateWidgetHeight(cur.line), cur.rest)) for (var j = 0; j < cur.rest.length; j++) updateWidgetHeight(cur.rest[j]);
            }
        }
    }
    function updateWidgetHeight(line) {
        if (line.widgets) for (var i = 0; i < line.widgets.length; ++i) line.widgets[i].height = line.widgets[i].node.offsetHeight;
    }
    function getDimensions(cm) {
        for (var d = cm.display, left = {}, width = {}, gutterLeft = d.gutters.clientLeft, n = d.gutters.firstChild, i = 0; n; n = n.nextSibling, 
        ++i) left[cm.options.gutters[i]] = n.offsetLeft + n.clientLeft + gutterLeft, width[cm.options.gutters[i]] = n.clientWidth;
        return {
            fixedPos: compensateForHScroll(d),
            gutterTotalWidth: d.gutters.offsetWidth,
            gutterLeft: left,
            gutterWidth: width,
            wrapperWidth: d.wrapper.clientWidth
        };
    }
    function patchDisplay(cm, updateNumbersFrom, dims) {
        function rm(node) {
            var next = node.nextSibling;
            return webkit && mac && cm.display.currentWheelTarget == node ? node.style.display = "none" : node.parentNode.removeChild(node), 
            next;
        }
        for (var display = cm.display, lineNumbers = cm.options.lineNumbers, container = display.lineDiv, cur = container.firstChild, view = display.view, lineN = display.viewFrom, i = 0; i < view.length; i++) {
            var lineView = view[i];
            if (lineView.hidden) ; else if (lineView.node) {
                for (;cur != lineView.node; ) cur = rm(cur);
                var updateNumber = lineNumbers && null != updateNumbersFrom && lineN >= updateNumbersFrom && lineView.lineNumber;
                lineView.changes && (indexOf(lineView.changes, "gutter") > -1 && (updateNumber = !1), 
                updateLineForChanges(cm, lineView, lineN, dims)), updateNumber && (removeChildren(lineView.lineNumber), 
                lineView.lineNumber.appendChild(document.createTextNode(lineNumberFor(cm.options, lineN)))), 
                cur = lineView.node.nextSibling;
            } else {
                var node = buildLineElement(cm, lineView, lineN, dims);
                container.insertBefore(node, cur);
            }
            lineN += lineView.size;
        }
        for (;cur; ) cur = rm(cur);
    }
    function updateLineForChanges(cm, lineView, lineN, dims) {
        for (var j = 0; j < lineView.changes.length; j++) {
            var type = lineView.changes[j];
            "text" == type ? updateLineText(cm, lineView) : "gutter" == type ? updateLineGutter(cm, lineView, lineN, dims) : "class" == type ? updateLineClasses(lineView) : "widget" == type && updateLineWidgets(lineView, dims);
        }
        lineView.changes = null;
    }
    function ensureLineWrapped(lineView) {
        return lineView.node == lineView.text && (lineView.node = elt("div", null, null, "position: relative"), 
        lineView.text.parentNode && lineView.text.parentNode.replaceChild(lineView.node, lineView.text), 
        lineView.node.appendChild(lineView.text), ie && 8 > ie_version && (lineView.node.style.zIndex = 2)), 
        lineView.node;
    }
    function updateLineBackground(lineView) {
        var cls = lineView.bgClass ? lineView.bgClass + " " + (lineView.line.bgClass || "") : lineView.line.bgClass;
        if (cls && (cls += " CodeMirror-linebackground"), lineView.background) cls ? lineView.background.className = cls : (lineView.background.parentNode.removeChild(lineView.background), 
        lineView.background = null); else if (cls) {
            var wrap = ensureLineWrapped(lineView);
            lineView.background = wrap.insertBefore(elt("div", null, cls), wrap.firstChild);
        }
    }
    function getLineContent(cm, lineView) {
        var ext = cm.display.externalMeasured;
        return ext && ext.line == lineView.line ? (cm.display.externalMeasured = null, lineView.measure = ext.measure, 
        ext.built) : buildLineContent(cm, lineView);
    }
    function updateLineText(cm, lineView) {
        var cls = lineView.text.className, built = getLineContent(cm, lineView);
        lineView.text == lineView.node && (lineView.node = built.pre), lineView.text.parentNode.replaceChild(built.pre, lineView.text), 
        lineView.text = built.pre, built.bgClass != lineView.bgClass || built.textClass != lineView.textClass ? (lineView.bgClass = built.bgClass, 
        lineView.textClass = built.textClass, updateLineClasses(lineView)) : cls && (lineView.text.className = cls);
    }
    function updateLineClasses(lineView) {
        updateLineBackground(lineView), lineView.line.wrapClass ? ensureLineWrapped(lineView).className = lineView.line.wrapClass : lineView.node != lineView.text && (lineView.node.className = "");
        var textClass = lineView.textClass ? lineView.textClass + " " + (lineView.line.textClass || "") : lineView.line.textClass;
        lineView.text.className = textClass || "";
    }
    function updateLineGutter(cm, lineView, lineN, dims) {
        lineView.gutter && (lineView.node.removeChild(lineView.gutter), lineView.gutter = null);
        var markers = lineView.line.gutterMarkers;
        if (cm.options.lineNumbers || markers) {
            var wrap = ensureLineWrapped(lineView), gutterWrap = lineView.gutter = wrap.insertBefore(elt("div", null, "CodeMirror-gutter-wrapper", "position: absolute; left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px"), lineView.text);
            if (!cm.options.lineNumbers || markers && markers["CodeMirror-linenumbers"] || (lineView.lineNumber = gutterWrap.appendChild(elt("div", lineNumberFor(cm.options, lineN), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + dims.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + cm.display.lineNumInnerWidth + "px"))), 
            markers) for (var k = 0; k < cm.options.gutters.length; ++k) {
                var id = cm.options.gutters[k], found = markers.hasOwnProperty(id) && markers[id];
                found && gutterWrap.appendChild(elt("div", [ found ], "CodeMirror-gutter-elt", "left: " + dims.gutterLeft[id] + "px; width: " + dims.gutterWidth[id] + "px"));
            }
        }
    }
    function updateLineWidgets(lineView, dims) {
        lineView.alignable && (lineView.alignable = null);
        for (var next, node = lineView.node.firstChild; node; node = next) {
            var next = node.nextSibling;
            "CodeMirror-linewidget" == node.className && lineView.node.removeChild(node);
        }
        insertLineWidgets(lineView, dims);
    }
    function buildLineElement(cm, lineView, lineN, dims) {
        var built = getLineContent(cm, lineView);
        return lineView.text = lineView.node = built.pre, built.bgClass && (lineView.bgClass = built.bgClass), 
        built.textClass && (lineView.textClass = built.textClass), updateLineClasses(lineView), 
        updateLineGutter(cm, lineView, lineN, dims), insertLineWidgets(lineView, dims), 
        lineView.node;
    }
    function insertLineWidgets(lineView, dims) {
        if (insertLineWidgetsFor(lineView.line, lineView, dims, !0), lineView.rest) for (var i = 0; i < lineView.rest.length; i++) insertLineWidgetsFor(lineView.rest[i], lineView, dims, !1);
    }
    function insertLineWidgetsFor(line, lineView, dims, allowAbove) {
        if (line.widgets) for (var wrap = ensureLineWrapped(lineView), i = 0, ws = line.widgets; i < ws.length; ++i) {
            var widget = ws[i], node = elt("div", [ widget.node ], "CodeMirror-linewidget");
            widget.handleMouseEvents || (node.ignoreEvents = !0), positionLineWidget(widget, node, lineView, dims), 
            allowAbove && widget.above ? wrap.insertBefore(node, lineView.gutter || lineView.text) : wrap.appendChild(node), 
            signalLater(widget, "redraw");
        }
    }
    function positionLineWidget(widget, node, lineView, dims) {
        if (widget.noHScroll) {
            (lineView.alignable || (lineView.alignable = [])).push(node);
            var width = dims.wrapperWidth;
            node.style.left = dims.fixedPos + "px", widget.coverGutter || (width -= dims.gutterTotalWidth, 
            node.style.paddingLeft = dims.gutterTotalWidth + "px"), node.style.width = width + "px";
        }
        widget.coverGutter && (node.style.zIndex = 5, node.style.position = "relative", 
        widget.noHScroll || (node.style.marginLeft = -dims.gutterTotalWidth + "px"));
    }
    function copyPos(x) {
        return Pos(x.line, x.ch);
    }
    function maxPos(a, b) {
        return cmp(a, b) < 0 ? b : a;
    }
    function minPos(a, b) {
        return cmp(a, b) < 0 ? a : b;
    }
    function Selection(ranges, primIndex) {
        this.ranges = ranges, this.primIndex = primIndex;
    }
    function Range(anchor, head) {
        this.anchor = anchor, this.head = head;
    }
    function normalizeSelection(ranges, primIndex) {
        var prim = ranges[primIndex];
        ranges.sort(function(a, b) {
            return cmp(a.from(), b.from());
        }), primIndex = indexOf(ranges, prim);
        for (var i = 1; i < ranges.length; i++) {
            var cur = ranges[i], prev = ranges[i - 1];
            if (cmp(prev.to(), cur.from()) >= 0) {
                var from = minPos(prev.from(), cur.from()), to = maxPos(prev.to(), cur.to()), inv = prev.empty() ? cur.from() == cur.head : prev.from() == prev.head;
                primIndex >= i && --primIndex, ranges.splice(--i, 2, new Range(inv ? to : from, inv ? from : to));
            }
        }
        return new Selection(ranges, primIndex);
    }
    function simpleSelection(anchor, head) {
        return new Selection([ new Range(anchor, head || anchor) ], 0);
    }
    function clipLine(doc, n) {
        return Math.max(doc.first, Math.min(n, doc.first + doc.size - 1));
    }
    function clipPos(doc, pos) {
        if (pos.line < doc.first) return Pos(doc.first, 0);
        var last = doc.first + doc.size - 1;
        return pos.line > last ? Pos(last, getLine(doc, last).text.length) : clipToLen(pos, getLine(doc, pos.line).text.length);
    }
    function clipToLen(pos, linelen) {
        var ch = pos.ch;
        return null == ch || ch > linelen ? Pos(pos.line, linelen) : 0 > ch ? Pos(pos.line, 0) : pos;
    }
    function isLine(doc, l) {
        return l >= doc.first && l < doc.first + doc.size;
    }
    function clipPosArray(doc, array) {
        for (var out = [], i = 0; i < array.length; i++) out[i] = clipPos(doc, array[i]);
        return out;
    }
    function extendRange(doc, range, head, other) {
        if (doc.cm && doc.cm.display.shift || doc.extend) {
            var anchor = range.anchor;
            if (other) {
                var posBefore = cmp(head, anchor) < 0;
                posBefore != cmp(other, anchor) < 0 ? (anchor = head, head = other) : posBefore != cmp(head, other) < 0 && (head = other);
            }
            return new Range(anchor, head);
        }
        return new Range(other || head, head);
    }
    function extendSelection(doc, head, other, options) {
        setSelection(doc, new Selection([ extendRange(doc, doc.sel.primary(), head, other) ], 0), options);
    }
    function extendSelections(doc, heads, options) {
        for (var out = [], i = 0; i < doc.sel.ranges.length; i++) out[i] = extendRange(doc, doc.sel.ranges[i], heads[i], null);
        var newSel = normalizeSelection(out, doc.sel.primIndex);
        setSelection(doc, newSel, options);
    }
    function replaceOneSelection(doc, i, range, options) {
        var ranges = doc.sel.ranges.slice(0);
        ranges[i] = range, setSelection(doc, normalizeSelection(ranges, doc.sel.primIndex), options);
    }
    function setSimpleSelection(doc, anchor, head, options) {
        setSelection(doc, simpleSelection(anchor, head), options);
    }
    function filterSelectionChange(doc, sel) {
        var obj = {
            ranges: sel.ranges,
            update: function(ranges) {
                this.ranges = [];
                for (var i = 0; i < ranges.length; i++) this.ranges[i] = new Range(clipPos(doc, ranges[i].anchor), clipPos(doc, ranges[i].head));
            }
        };
        return signal(doc, "beforeSelectionChange", doc, obj), doc.cm && signal(doc.cm, "beforeSelectionChange", doc.cm, obj), 
        obj.ranges != sel.ranges ? normalizeSelection(obj.ranges, obj.ranges.length - 1) : sel;
    }
    function setSelectionReplaceHistory(doc, sel, options) {
        var done = doc.history.done, last = lst(done);
        last && last.ranges ? (done[done.length - 1] = sel, setSelectionNoUndo(doc, sel, options)) : setSelection(doc, sel, options);
    }
    function setSelection(doc, sel, options) {
        setSelectionNoUndo(doc, sel, options), addSelectionToHistory(doc, doc.sel, doc.cm ? doc.cm.curOp.id : 0 / 0, options);
    }
    function setSelectionNoUndo(doc, sel, options) {
        (hasHandler(doc, "beforeSelectionChange") || doc.cm && hasHandler(doc.cm, "beforeSelectionChange")) && (sel = filterSelectionChange(doc, sel));
        var bias = options && options.bias || (cmp(sel.primary().head, doc.sel.primary().head) < 0 ? -1 : 1);
        setSelectionInner(doc, skipAtomicInSelection(doc, sel, bias, !0)), options && options.scroll === !1 || !doc.cm || ensureCursorVisible(doc.cm);
    }
    function setSelectionInner(doc, sel) {
        sel.equals(doc.sel) || (doc.sel = sel, doc.cm && (doc.cm.curOp.updateInput = doc.cm.curOp.selectionChanged = !0, 
        signalCursorActivity(doc.cm)), signalLater(doc, "cursorActivity", doc));
    }
    function reCheckSelection(doc) {
        setSelectionInner(doc, skipAtomicInSelection(doc, doc.sel, null, !1), sel_dontScroll);
    }
    function skipAtomicInSelection(doc, sel, bias, mayClear) {
        for (var out, i = 0; i < sel.ranges.length; i++) {
            var range = sel.ranges[i], newAnchor = skipAtomic(doc, range.anchor, bias, mayClear), newHead = skipAtomic(doc, range.head, bias, mayClear);
            (out || newAnchor != range.anchor || newHead != range.head) && (out || (out = sel.ranges.slice(0, i)), 
            out[i] = new Range(newAnchor, newHead));
        }
        return out ? normalizeSelection(out, sel.primIndex) : sel;
    }
    function skipAtomic(doc, pos, bias, mayClear) {
        var flipped = !1, curPos = pos, dir = bias || 1;
        doc.cantEdit = !1;
        search: for (;;) {
            var line = getLine(doc, curPos.line);
            if (line.markedSpans) for (var i = 0; i < line.markedSpans.length; ++i) {
                var sp = line.markedSpans[i], m = sp.marker;
                if ((null == sp.from || (m.inclusiveLeft ? sp.from <= curPos.ch : sp.from < curPos.ch)) && (null == sp.to || (m.inclusiveRight ? sp.to >= curPos.ch : sp.to > curPos.ch))) {
                    if (mayClear && (signal(m, "beforeCursorEnter"), m.explicitlyCleared)) {
                        if (line.markedSpans) {
                            --i;
                            continue;
                        }
                        break;
                    }
                    if (!m.atomic) continue;
                    var newPos = m.find(0 > dir ? -1 : 1);
                    if (0 == cmp(newPos, curPos) && (newPos.ch += dir, newPos.ch < 0 ? newPos = newPos.line > doc.first ? clipPos(doc, Pos(newPos.line - 1)) : null : newPos.ch > line.text.length && (newPos = newPos.line < doc.first + doc.size - 1 ? Pos(newPos.line + 1, 0) : null), 
                    !newPos)) {
                        if (flipped) return mayClear ? (doc.cantEdit = !0, Pos(doc.first, 0)) : skipAtomic(doc, pos, bias, !0);
                        flipped = !0, newPos = pos, dir = -dir;
                    }
                    curPos = newPos;
                    continue search;
                }
            }
            return curPos;
        }
    }
    function drawSelection(cm) {
        for (var display = cm.display, doc = cm.doc, result = {}, curFragment = result.cursors = document.createDocumentFragment(), selFragment = result.selection = document.createDocumentFragment(), i = 0; i < doc.sel.ranges.length; i++) {
            var range = doc.sel.ranges[i], collapsed = range.empty();
            (collapsed || cm.options.showCursorWhenSelecting) && drawSelectionCursor(cm, range, curFragment), 
            collapsed || drawSelectionRange(cm, range, selFragment);
        }
        if (cm.options.moveInputWithCursor) {
            var headPos = cursorCoords(cm, doc.sel.primary().head, "div"), wrapOff = display.wrapper.getBoundingClientRect(), lineOff = display.lineDiv.getBoundingClientRect();
            result.teTop = Math.max(0, Math.min(display.wrapper.clientHeight - 10, headPos.top + lineOff.top - wrapOff.top)), 
            result.teLeft = Math.max(0, Math.min(display.wrapper.clientWidth - 10, headPos.left + lineOff.left - wrapOff.left));
        }
        return result;
    }
    function showSelection(cm, drawn) {
        removeChildrenAndAdd(cm.display.cursorDiv, drawn.cursors), removeChildrenAndAdd(cm.display.selectionDiv, drawn.selection), 
        null != drawn.teTop && (cm.display.inputDiv.style.top = drawn.teTop + "px", cm.display.inputDiv.style.left = drawn.teLeft + "px");
    }
    function updateSelection(cm) {
        showSelection(cm, drawSelection(cm));
    }
    function drawSelectionCursor(cm, range, output) {
        var pos = cursorCoords(cm, range.head, "div", null, null, !cm.options.singleCursorHeightPerLine), cursor = output.appendChild(elt("div", " ", "CodeMirror-cursor"));
        if (cursor.style.left = pos.left + "px", cursor.style.top = pos.top + "px", cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px", 
        pos.other) {
            var otherCursor = output.appendChild(elt("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
            otherCursor.style.display = "", otherCursor.style.left = pos.other.left + "px", 
            otherCursor.style.top = pos.other.top + "px", otherCursor.style.height = .85 * (pos.other.bottom - pos.other.top) + "px";
        }
    }
    function drawSelectionRange(cm, range, output) {
        function add(left, top, width, bottom) {
            0 > top && (top = 0), top = Math.round(top), bottom = Math.round(bottom), fragment.appendChild(elt("div", null, "CodeMirror-selected", "position: absolute; left: " + left + "px; top: " + top + "px; width: " + (null == width ? rightSide - left : width) + "px; height: " + (bottom - top) + "px"));
        }
        function drawForLine(line, fromArg, toArg) {
            function coords(ch, bias) {
                return charCoords(cm, Pos(line, ch), "div", lineObj, bias);
            }
            var start, end, lineObj = getLine(doc, line), lineLen = lineObj.text.length;
            return iterateBidiSections(getOrder(lineObj), fromArg || 0, null == toArg ? lineLen : toArg, function(from, to, dir) {
                var rightPos, left, right, leftPos = coords(from, "left");
                if (from == to) rightPos = leftPos, left = right = leftPos.left; else {
                    if (rightPos = coords(to - 1, "right"), "rtl" == dir) {
                        var tmp = leftPos;
                        leftPos = rightPos, rightPos = tmp;
                    }
                    left = leftPos.left, right = rightPos.right;
                }
                null == fromArg && 0 == from && (left = leftSide), rightPos.top - leftPos.top > 3 && (add(left, leftPos.top, null, leftPos.bottom), 
                left = leftSide, leftPos.bottom < rightPos.top && add(left, leftPos.bottom, null, rightPos.top)), 
                null == toArg && to == lineLen && (right = rightSide), (!start || leftPos.top < start.top || leftPos.top == start.top && leftPos.left < start.left) && (start = leftPos), 
                (!end || rightPos.bottom > end.bottom || rightPos.bottom == end.bottom && rightPos.right > end.right) && (end = rightPos), 
                leftSide + 1 > left && (left = leftSide), add(left, rightPos.top, right - left, rightPos.bottom);
            }), {
                start: start,
                end: end
            };
        }
        var display = cm.display, doc = cm.doc, fragment = document.createDocumentFragment(), padding = paddingH(cm.display), leftSide = padding.left, rightSide = display.lineSpace.offsetWidth - padding.right, sFrom = range.from(), sTo = range.to();
        if (sFrom.line == sTo.line) drawForLine(sFrom.line, sFrom.ch, sTo.ch); else {
            var fromLine = getLine(doc, sFrom.line), toLine = getLine(doc, sTo.line), singleVLine = visualLine(fromLine) == visualLine(toLine), leftEnd = drawForLine(sFrom.line, sFrom.ch, singleVLine ? fromLine.text.length + 1 : null).end, rightStart = drawForLine(sTo.line, singleVLine ? 0 : null, sTo.ch).start;
            singleVLine && (leftEnd.top < rightStart.top - 2 ? (add(leftEnd.right, leftEnd.top, null, leftEnd.bottom), 
            add(leftSide, rightStart.top, rightStart.left, rightStart.bottom)) : add(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom)), 
            leftEnd.bottom < rightStart.top && add(leftSide, leftEnd.bottom, null, rightStart.top);
        }
        output.appendChild(fragment);
    }
    function restartBlink(cm) {
        if (cm.state.focused) {
            var display = cm.display;
            clearInterval(display.blinker);
            var on = !0;
            display.cursorDiv.style.visibility = "", cm.options.cursorBlinkRate > 0 ? display.blinker = setInterval(function() {
                display.cursorDiv.style.visibility = (on = !on) ? "" : "hidden";
            }, cm.options.cursorBlinkRate) : cm.options.cursorBlinkRate < 0 && (display.cursorDiv.style.visibility = "hidden");
        }
    }
    function startWorker(cm, time) {
        cm.doc.mode.startState && cm.doc.frontier < cm.display.viewTo && cm.state.highlight.set(time, bind(highlightWorker, cm));
    }
    function highlightWorker(cm) {
        var doc = cm.doc;
        if (doc.frontier < doc.first && (doc.frontier = doc.first), !(doc.frontier >= cm.display.viewTo)) {
            var end = +new Date() + cm.options.workTime, state = copyState(doc.mode, getStateBefore(cm, doc.frontier)), changedLines = [];
            doc.iter(doc.frontier, Math.min(doc.first + doc.size, cm.display.viewTo + 500), function(line) {
                if (doc.frontier >= cm.display.viewFrom) {
                    var oldStyles = line.styles, highlighted = highlightLine(cm, line, state, !0);
                    line.styles = highlighted.styles;
                    var oldCls = line.styleClasses, newCls = highlighted.classes;
                    newCls ? line.styleClasses = newCls : oldCls && (line.styleClasses = null);
                    for (var ischange = !oldStyles || oldStyles.length != line.styles.length || oldCls != newCls && (!oldCls || !newCls || oldCls.bgClass != newCls.bgClass || oldCls.textClass != newCls.textClass), i = 0; !ischange && i < oldStyles.length; ++i) ischange = oldStyles[i] != line.styles[i];
                    ischange && changedLines.push(doc.frontier), line.stateAfter = copyState(doc.mode, state);
                } else processLine(cm, line.text, state), line.stateAfter = doc.frontier % 5 == 0 ? copyState(doc.mode, state) : null;
                return ++doc.frontier, +new Date() > end ? (startWorker(cm, cm.options.workDelay), 
                !0) : void 0;
            }), changedLines.length && runInOp(cm, function() {
                for (var i = 0; i < changedLines.length; i++) regLineChange(cm, changedLines[i], "text");
            });
        }
    }
    function findStartLine(cm, n, precise) {
        for (var minindent, minline, doc = cm.doc, lim = precise ? -1 : n - (cm.doc.mode.innerMode ? 1e3 : 100), search = n; search > lim; --search) {
            if (search <= doc.first) return doc.first;
            var line = getLine(doc, search - 1);
            if (line.stateAfter && (!precise || search <= doc.frontier)) return search;
            var indented = countColumn(line.text, null, cm.options.tabSize);
            (null == minline || minindent > indented) && (minline = search - 1, minindent = indented);
        }
        return minline;
    }
    function getStateBefore(cm, n, precise) {
        var doc = cm.doc, display = cm.display;
        if (!doc.mode.startState) return !0;
        var pos = findStartLine(cm, n, precise), state = pos > doc.first && getLine(doc, pos - 1).stateAfter;
        return state = state ? copyState(doc.mode, state) : startState(doc.mode), doc.iter(pos, n, function(line) {
            processLine(cm, line.text, state);
            var save = pos == n - 1 || pos % 5 == 0 || pos >= display.viewFrom && pos < display.viewTo;
            line.stateAfter = save ? copyState(doc.mode, state) : null, ++pos;
        }), precise && (doc.frontier = pos), state;
    }
    function paddingTop(display) {
        return display.lineSpace.offsetTop;
    }
    function paddingVert(display) {
        return display.mover.offsetHeight - display.lineSpace.offsetHeight;
    }
    function paddingH(display) {
        if (display.cachedPaddingH) return display.cachedPaddingH;
        var e = removeChildrenAndAdd(display.measure, elt("pre", "x")), style = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle, data = {
            left: parseInt(style.paddingLeft),
            right: parseInt(style.paddingRight)
        };
        return isNaN(data.left) || isNaN(data.right) || (display.cachedPaddingH = data), 
        data;
    }
    function ensureLineHeights(cm, lineView, rect) {
        var wrapping = cm.options.lineWrapping, curWidth = wrapping && cm.display.scroller.clientWidth;
        if (!lineView.measure.heights || wrapping && lineView.measure.width != curWidth) {
            var heights = lineView.measure.heights = [];
            if (wrapping) {
                lineView.measure.width = curWidth;
                for (var rects = lineView.text.firstChild.getClientRects(), i = 0; i < rects.length - 1; i++) {
                    var cur = rects[i], next = rects[i + 1];
                    Math.abs(cur.bottom - next.bottom) > 2 && heights.push((cur.bottom + next.top) / 2 - rect.top);
                }
            }
            heights.push(rect.bottom - rect.top);
        }
    }
    function mapFromLineView(lineView, line, lineN) {
        if (lineView.line == line) return {
            map: lineView.measure.map,
            cache: lineView.measure.cache
        };
        for (var i = 0; i < lineView.rest.length; i++) if (lineView.rest[i] == line) return {
            map: lineView.measure.maps[i],
            cache: lineView.measure.caches[i]
        };
        for (var i = 0; i < lineView.rest.length; i++) if (lineNo(lineView.rest[i]) > lineN) return {
            map: lineView.measure.maps[i],
            cache: lineView.measure.caches[i],
            before: !0
        };
    }
    function updateExternalMeasurement(cm, line) {
        line = visualLine(line);
        var lineN = lineNo(line), view = cm.display.externalMeasured = new LineView(cm.doc, line, lineN);
        view.lineN = lineN;
        var built = view.built = buildLineContent(cm, view);
        return view.text = built.pre, removeChildrenAndAdd(cm.display.lineMeasure, built.pre), 
        view;
    }
    function measureChar(cm, line, ch, bias) {
        return measureCharPrepared(cm, prepareMeasureForLine(cm, line), ch, bias);
    }
    function findViewForLine(cm, lineN) {
        if (lineN >= cm.display.viewFrom && lineN < cm.display.viewTo) return cm.display.view[findViewIndex(cm, lineN)];
        var ext = cm.display.externalMeasured;
        return ext && lineN >= ext.lineN && lineN < ext.lineN + ext.size ? ext : void 0;
    }
    function prepareMeasureForLine(cm, line) {
        var lineN = lineNo(line), view = findViewForLine(cm, lineN);
        view && !view.text ? view = null : view && view.changes && updateLineForChanges(cm, view, lineN, getDimensions(cm)), 
        view || (view = updateExternalMeasurement(cm, line));
        var info = mapFromLineView(view, line, lineN);
        return {
            line: line,
            view: view,
            rect: null,
            map: info.map,
            cache: info.cache,
            before: info.before,
            hasHeights: !1
        };
    }
    function measureCharPrepared(cm, prepared, ch, bias, varHeight) {
        prepared.before && (ch = -1);
        var found, key = ch + (bias || "");
        return prepared.cache.hasOwnProperty(key) ? found = prepared.cache[key] : (prepared.rect || (prepared.rect = prepared.view.text.getBoundingClientRect()), 
        prepared.hasHeights || (ensureLineHeights(cm, prepared.view, prepared.rect), prepared.hasHeights = !0), 
        found = measureCharInner(cm, prepared, ch, bias), found.bogus || (prepared.cache[key] = found)), 
        {
            left: found.left,
            right: found.right,
            top: varHeight ? found.rtop : found.top,
            bottom: varHeight ? found.rbottom : found.bottom
        };
    }
    function measureCharInner(cm, prepared, ch, bias) {
        for (var node, start, end, collapse, map = prepared.map, i = 0; i < map.length; i += 3) {
            var mStart = map[i], mEnd = map[i + 1];
            if (mStart > ch ? (start = 0, end = 1, collapse = "left") : mEnd > ch ? (start = ch - mStart, 
            end = start + 1) : (i == map.length - 3 || ch == mEnd && map[i + 3] > ch) && (end = mEnd - mStart, 
            start = end - 1, ch >= mEnd && (collapse = "right")), null != start) {
                if (node = map[i + 2], mStart == mEnd && bias == (node.insertLeft ? "left" : "right") && (collapse = bias), 
                "left" == bias && 0 == start) for (;i && map[i - 2] == map[i - 3] && map[i - 1].insertLeft; ) node = map[(i -= 3) + 2], 
                collapse = "left";
                if ("right" == bias && start == mEnd - mStart) for (;i < map.length - 3 && map[i + 3] == map[i + 4] && !map[i + 5].insertLeft; ) node = map[(i += 3) + 2], 
                collapse = "right";
                break;
            }
        }
        var rect;
        if (3 == node.nodeType) {
            for (var i = 0; 4 > i; i++) {
                for (;start && isExtendingChar(prepared.line.text.charAt(mStart + start)); ) --start;
                for (;mEnd > mStart + end && isExtendingChar(prepared.line.text.charAt(mStart + end)); ) ++end;
                if (ie && 9 > ie_version && 0 == start && end == mEnd - mStart) rect = node.parentNode.getBoundingClientRect(); else if (ie && cm.options.lineWrapping) {
                    var rects = range(node, start, end).getClientRects();
                    rect = rects.length ? rects["right" == bias ? rects.length - 1 : 0] : nullRect;
                } else rect = range(node, start, end).getBoundingClientRect() || nullRect;
                if (rect.left || rect.right || 0 == start) break;
                end = start, start -= 1, collapse = "right";
            }
            ie && 11 > ie_version && (rect = maybeUpdateRectForZooming(cm.display.measure, rect));
        } else {
            start > 0 && (collapse = bias = "right");
            var rects;
            rect = cm.options.lineWrapping && (rects = node.getClientRects()).length > 1 ? rects["right" == bias ? rects.length - 1 : 0] : node.getBoundingClientRect();
        }
        if (ie && 9 > ie_version && !start && (!rect || !rect.left && !rect.right)) {
            var rSpan = node.parentNode.getClientRects()[0];
            rect = rSpan ? {
                left: rSpan.left,
                right: rSpan.left + charWidth(cm.display),
                top: rSpan.top,
                bottom: rSpan.bottom
            } : nullRect;
        }
        for (var rtop = rect.top - prepared.rect.top, rbot = rect.bottom - prepared.rect.top, mid = (rtop + rbot) / 2, heights = prepared.view.measure.heights, i = 0; i < heights.length - 1 && !(mid < heights[i]); i++) ;
        var top = i ? heights[i - 1] : 0, bot = heights[i], result = {
            left: ("right" == collapse ? rect.right : rect.left) - prepared.rect.left,
            right: ("left" == collapse ? rect.left : rect.right) - prepared.rect.left,
            top: top,
            bottom: bot
        };
        return rect.left || rect.right || (result.bogus = !0), cm.options.singleCursorHeightPerLine || (result.rtop = rtop, 
        result.rbottom = rbot), result;
    }
    function maybeUpdateRectForZooming(measure, rect) {
        if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !hasBadZoomedRects(measure)) return rect;
        var scaleX = screen.logicalXDPI / screen.deviceXDPI, scaleY = screen.logicalYDPI / screen.deviceYDPI;
        return {
            left: rect.left * scaleX,
            right: rect.right * scaleX,
            top: rect.top * scaleY,
            bottom: rect.bottom * scaleY
        };
    }
    function clearLineMeasurementCacheFor(lineView) {
        if (lineView.measure && (lineView.measure.cache = {}, lineView.measure.heights = null, 
        lineView.rest)) for (var i = 0; i < lineView.rest.length; i++) lineView.measure.caches[i] = {};
    }
    function clearLineMeasurementCache(cm) {
        cm.display.externalMeasure = null, removeChildren(cm.display.lineMeasure);
        for (var i = 0; i < cm.display.view.length; i++) clearLineMeasurementCacheFor(cm.display.view[i]);
    }
    function clearCaches(cm) {
        clearLineMeasurementCache(cm), cm.display.cachedCharWidth = cm.display.cachedTextHeight = cm.display.cachedPaddingH = null, 
        cm.options.lineWrapping || (cm.display.maxLineChanged = !0), cm.display.lineNumChars = null;
    }
    function pageScrollX() {
        return window.pageXOffset || (document.documentElement || document.body).scrollLeft;
    }
    function pageScrollY() {
        return window.pageYOffset || (document.documentElement || document.body).scrollTop;
    }
    function intoCoordSystem(cm, lineObj, rect, context) {
        if (lineObj.widgets) for (var i = 0; i < lineObj.widgets.length; ++i) if (lineObj.widgets[i].above) {
            var size = widgetHeight(lineObj.widgets[i]);
            rect.top += size, rect.bottom += size;
        }
        if ("line" == context) return rect;
        context || (context = "local");
        var yOff = heightAtLine(lineObj);
        if ("local" == context ? yOff += paddingTop(cm.display) : yOff -= cm.display.viewOffset, 
        "page" == context || "window" == context) {
            var lOff = cm.display.lineSpace.getBoundingClientRect();
            yOff += lOff.top + ("window" == context ? 0 : pageScrollY());
            var xOff = lOff.left + ("window" == context ? 0 : pageScrollX());
            rect.left += xOff, rect.right += xOff;
        }
        return rect.top += yOff, rect.bottom += yOff, rect;
    }
    function fromCoordSystem(cm, coords, context) {
        if ("div" == context) return coords;
        var left = coords.left, top = coords.top;
        if ("page" == context) left -= pageScrollX(), top -= pageScrollY(); else if ("local" == context || !context) {
            var localBox = cm.display.sizer.getBoundingClientRect();
            left += localBox.left, top += localBox.top;
        }
        var lineSpaceBox = cm.display.lineSpace.getBoundingClientRect();
        return {
            left: left - lineSpaceBox.left,
            top: top - lineSpaceBox.top
        };
    }
    function charCoords(cm, pos, context, lineObj, bias) {
        return lineObj || (lineObj = getLine(cm.doc, pos.line)), intoCoordSystem(cm, lineObj, measureChar(cm, lineObj, pos.ch, bias), context);
    }
    function cursorCoords(cm, pos, context, lineObj, preparedMeasure, varHeight) {
        function get(ch, right) {
            var m = measureCharPrepared(cm, preparedMeasure, ch, right ? "right" : "left", varHeight);
            return right ? m.left = m.right : m.right = m.left, intoCoordSystem(cm, lineObj, m, context);
        }
        function getBidi(ch, partPos) {
            var part = order[partPos], right = part.level % 2;
            return ch == bidiLeft(part) && partPos && part.level < order[partPos - 1].level ? (part = order[--partPos], 
            ch = bidiRight(part) - (part.level % 2 ? 0 : 1), right = !0) : ch == bidiRight(part) && partPos < order.length - 1 && part.level < order[partPos + 1].level && (part = order[++partPos], 
            ch = bidiLeft(part) - part.level % 2, right = !1), right && ch == part.to && ch > part.from ? get(ch - 1) : get(ch, right);
        }
        lineObj = lineObj || getLine(cm.doc, pos.line), preparedMeasure || (preparedMeasure = prepareMeasureForLine(cm, lineObj));
        var order = getOrder(lineObj), ch = pos.ch;
        if (!order) return get(ch);
        var partPos = getBidiPartAt(order, ch), val = getBidi(ch, partPos);
        return null != bidiOther && (val.other = getBidi(ch, bidiOther)), val;
    }
    function estimateCoords(cm, pos) {
        var left = 0, pos = clipPos(cm.doc, pos);
        cm.options.lineWrapping || (left = charWidth(cm.display) * pos.ch);
        var lineObj = getLine(cm.doc, pos.line), top = heightAtLine(lineObj) + paddingTop(cm.display);
        return {
            left: left,
            right: left,
            top: top,
            bottom: top + lineObj.height
        };
    }
    function PosWithInfo(line, ch, outside, xRel) {
        var pos = Pos(line, ch);
        return pos.xRel = xRel, outside && (pos.outside = !0), pos;
    }
    function coordsChar(cm, x, y) {
        var doc = cm.doc;
        if (y += cm.display.viewOffset, 0 > y) return PosWithInfo(doc.first, 0, !0, -1);
        var lineN = lineAtHeight(doc, y), last = doc.first + doc.size - 1;
        if (lineN > last) return PosWithInfo(doc.first + doc.size - 1, getLine(doc, last).text.length, !0, 1);
        0 > x && (x = 0);
        for (var lineObj = getLine(doc, lineN); ;) {
            var found = coordsCharInner(cm, lineObj, lineN, x, y), merged = collapsedSpanAtEnd(lineObj), mergedPos = merged && merged.find(0, !0);
            if (!merged || !(found.ch > mergedPos.from.ch || found.ch == mergedPos.from.ch && found.xRel > 0)) return found;
            lineN = lineNo(lineObj = mergedPos.to.line);
        }
    }
    function coordsCharInner(cm, lineObj, lineNo, x, y) {
        function getX(ch) {
            var sp = cursorCoords(cm, Pos(lineNo, ch), "line", lineObj, preparedMeasure);
            return wrongLine = !0, innerOff > sp.bottom ? sp.left - adjust : innerOff < sp.top ? sp.left + adjust : (wrongLine = !1, 
            sp.left);
        }
        var innerOff = y - heightAtLine(lineObj), wrongLine = !1, adjust = 2 * cm.display.wrapper.clientWidth, preparedMeasure = prepareMeasureForLine(cm, lineObj), bidi = getOrder(lineObj), dist = lineObj.text.length, from = lineLeft(lineObj), to = lineRight(lineObj), fromX = getX(from), fromOutside = wrongLine, toX = getX(to), toOutside = wrongLine;
        if (x > toX) return PosWithInfo(lineNo, to, toOutside, 1);
        for (;;) {
            if (bidi ? to == from || to == moveVisually(lineObj, from, 1) : 1 >= to - from) {
                for (var ch = fromX > x || toX - x >= x - fromX ? from : to, xDiff = x - (ch == from ? fromX : toX); isExtendingChar(lineObj.text.charAt(ch)); ) ++ch;
                var pos = PosWithInfo(lineNo, ch, ch == from ? fromOutside : toOutside, -1 > xDiff ? -1 : xDiff > 1 ? 1 : 0);
                return pos;
            }
            var step = Math.ceil(dist / 2), middle = from + step;
            if (bidi) {
                middle = from;
                for (var i = 0; step > i; ++i) middle = moveVisually(lineObj, middle, 1);
            }
            var middleX = getX(middle);
            middleX > x ? (to = middle, toX = middleX, (toOutside = wrongLine) && (toX += 1e3), 
            dist = step) : (from = middle, fromX = middleX, fromOutside = wrongLine, dist -= step);
        }
    }
    function textHeight(display) {
        if (null != display.cachedTextHeight) return display.cachedTextHeight;
        if (null == measureText) {
            measureText = elt("pre");
            for (var i = 0; 49 > i; ++i) measureText.appendChild(document.createTextNode("x")), 
            measureText.appendChild(elt("br"));
            measureText.appendChild(document.createTextNode("x"));
        }
        removeChildrenAndAdd(display.measure, measureText);
        var height = measureText.offsetHeight / 50;
        return height > 3 && (display.cachedTextHeight = height), removeChildren(display.measure), 
        height || 1;
    }
    function charWidth(display) {
        if (null != display.cachedCharWidth) return display.cachedCharWidth;
        var anchor = elt("span", "xxxxxxxxxx"), pre = elt("pre", [ anchor ]);
        removeChildrenAndAdd(display.measure, pre);
        var rect = anchor.getBoundingClientRect(), width = (rect.right - rect.left) / 10;
        return width > 2 && (display.cachedCharWidth = width), width || 10;
    }
    function startOperation(cm) {
        cm.curOp = {
            cm: cm,
            viewChanged: !1,
            startHeight: cm.doc.height,
            forceUpdate: !1,
            updateInput: null,
            typing: !1,
            changeObjs: null,
            cursorActivityHandlers: null,
            cursorActivityCalled: 0,
            selectionChanged: !1,
            updateMaxLine: !1,
            scrollLeft: null,
            scrollTop: null,
            scrollToPos: null,
            id: ++nextOpId
        }, operationGroup ? operationGroup.ops.push(cm.curOp) : cm.curOp.ownsGroup = operationGroup = {
            ops: [ cm.curOp ],
            delayedCallbacks: []
        };
    }
    function fireCallbacksForOps(group) {
        var callbacks = group.delayedCallbacks, i = 0;
        do {
            for (;i < callbacks.length; i++) callbacks[i]();
            for (var j = 0; j < group.ops.length; j++) {
                var op = group.ops[j];
                if (op.cursorActivityHandlers) for (;op.cursorActivityCalled < op.cursorActivityHandlers.length; ) op.cursorActivityHandlers[op.cursorActivityCalled++](op.cm);
            }
        } while (i < callbacks.length);
    }
    function endOperation(cm) {
        var op = cm.curOp, group = op.ownsGroup;
        if (group) try {
            fireCallbacksForOps(group);
        } finally {
            operationGroup = null;
            for (var i = 0; i < group.ops.length; i++) group.ops[i].cm.curOp = null;
            endOperations(group);
        }
    }
    function endOperations(group) {
        for (var ops = group.ops, i = 0; i < ops.length; i++) endOperation_R1(ops[i]);
        for (var i = 0; i < ops.length; i++) endOperation_W1(ops[i]);
        for (var i = 0; i < ops.length; i++) endOperation_R2(ops[i]);
        for (var i = 0; i < ops.length; i++) endOperation_W2(ops[i]);
        for (var i = 0; i < ops.length; i++) endOperation_finish(ops[i]);
    }
    function endOperation_R1(op) {
        var cm = op.cm, display = cm.display;
        op.updateMaxLine && findMaxLine(cm), op.mustUpdate = op.viewChanged || op.forceUpdate || null != op.scrollTop || op.scrollToPos && (op.scrollToPos.from.line < display.viewFrom || op.scrollToPos.to.line >= display.viewTo) || display.maxLineChanged && cm.options.lineWrapping, 
        op.update = op.mustUpdate && new DisplayUpdate(cm, op.mustUpdate && {
            top: op.scrollTop,
            ensure: op.scrollToPos
        }, op.forceUpdate);
    }
    function endOperation_W1(op) {
        op.updatedDisplay = op.mustUpdate && updateDisplayIfNeeded(op.cm, op.update);
    }
    function endOperation_R2(op) {
        var cm = op.cm, display = cm.display;
        op.updatedDisplay && updateHeightsInViewport(cm), op.barMeasure = measureForScrollbars(cm), 
        display.maxLineChanged && !cm.options.lineWrapping && (op.adjustWidthTo = measureChar(cm, display.maxLine, display.maxLine.text.length).left + 3, 
        op.maxScrollLeft = Math.max(0, display.sizer.offsetLeft + op.adjustWidthTo + scrollerCutOff - display.scroller.clientWidth)), 
        (op.updatedDisplay || op.selectionChanged) && (op.newSelectionNodes = drawSelection(cm));
    }
    function endOperation_W2(op) {
        var cm = op.cm;
        null != op.adjustWidthTo && (cm.display.sizer.style.minWidth = op.adjustWidthTo + "px", 
        op.maxScrollLeft < cm.doc.scrollLeft && setScrollLeft(cm, Math.min(cm.display.scroller.scrollLeft, op.maxScrollLeft), !0), 
        cm.display.maxLineChanged = !1), op.newSelectionNodes && showSelection(cm, op.newSelectionNodes), 
        op.updatedDisplay && setDocumentHeight(cm, op.barMeasure), (op.updatedDisplay || op.startHeight != cm.doc.height) && updateScrollbars(cm, op.barMeasure), 
        op.selectionChanged && restartBlink(cm), cm.state.focused && op.updateInput && resetInput(cm, op.typing);
    }
    function endOperation_finish(op) {
        var cm = op.cm, display = cm.display, doc = cm.doc;
        if (null != op.adjustWidthTo && Math.abs(op.barMeasure.scrollWidth - cm.display.scroller.scrollWidth) > 1 && updateScrollbars(cm), 
        op.updatedDisplay && postUpdateDisplay(cm, op.update), null == display.wheelStartX || null == op.scrollTop && null == op.scrollLeft && !op.scrollToPos || (display.wheelStartX = display.wheelStartY = null), 
        null != op.scrollTop && (display.scroller.scrollTop != op.scrollTop || op.forceScroll)) {
            var top = Math.max(0, Math.min(display.scroller.scrollHeight - display.scroller.clientHeight, op.scrollTop));
            display.scroller.scrollTop = display.scrollbarV.scrollTop = doc.scrollTop = top;
        }
        if (null != op.scrollLeft && (display.scroller.scrollLeft != op.scrollLeft || op.forceScroll)) {
            var left = Math.max(0, Math.min(display.scroller.scrollWidth - display.scroller.clientWidth, op.scrollLeft));
            display.scroller.scrollLeft = display.scrollbarH.scrollLeft = doc.scrollLeft = left, 
            alignHorizontally(cm);
        }
        if (op.scrollToPos) {
            var coords = scrollPosIntoView(cm, clipPos(doc, op.scrollToPos.from), clipPos(doc, op.scrollToPos.to), op.scrollToPos.margin);
            op.scrollToPos.isCursor && cm.state.focused && maybeScrollWindow(cm, coords);
        }
        var hidden = op.maybeHiddenMarkers, unhidden = op.maybeUnhiddenMarkers;
        if (hidden) for (var i = 0; i < hidden.length; ++i) hidden[i].lines.length || signal(hidden[i], "hide");
        if (unhidden) for (var i = 0; i < unhidden.length; ++i) unhidden[i].lines.length && signal(unhidden[i], "unhide");
        display.wrapper.offsetHeight && (doc.scrollTop = cm.display.scroller.scrollTop), 
        op.updatedDisplay && webkit && (cm.options.lineWrapping && checkForWebkitWidthBug(cm, op.barMeasure), 
        op.barMeasure.scrollWidth > op.barMeasure.clientWidth && op.barMeasure.scrollWidth < op.barMeasure.clientWidth + 1 && !hScrollbarTakesSpace(cm) && updateScrollbars(cm)), 
        op.changeObjs && signal(cm, "changes", cm, op.changeObjs);
    }
    function runInOp(cm, f) {
        if (cm.curOp) return f();
        startOperation(cm);
        try {
            return f();
        } finally {
            endOperation(cm);
        }
    }
    function operation(cm, f) {
        return function() {
            if (cm.curOp) return f.apply(cm, arguments);
            startOperation(cm);
            try {
                return f.apply(cm, arguments);
            } finally {
                endOperation(cm);
            }
        };
    }
    function methodOp(f) {
        return function() {
            if (this.curOp) return f.apply(this, arguments);
            startOperation(this);
            try {
                return f.apply(this, arguments);
            } finally {
                endOperation(this);
            }
        };
    }
    function docMethodOp(f) {
        return function() {
            var cm = this.cm;
            if (!cm || cm.curOp) return f.apply(this, arguments);
            startOperation(cm);
            try {
                return f.apply(this, arguments);
            } finally {
                endOperation(cm);
            }
        };
    }
    function LineView(doc, line, lineN) {
        this.line = line, this.rest = visualLineContinued(line), this.size = this.rest ? lineNo(lst(this.rest)) - lineN + 1 : 1, 
        this.node = this.text = null, this.hidden = lineIsHidden(doc, line);
    }
    function buildViewArray(cm, from, to) {
        for (var nextPos, array = [], pos = from; to > pos; pos = nextPos) {
            var view = new LineView(cm.doc, getLine(cm.doc, pos), pos);
            nextPos = pos + view.size, array.push(view);
        }
        return array;
    }
    function regChange(cm, from, to, lendiff) {
        null == from && (from = cm.doc.first), null == to && (to = cm.doc.first + cm.doc.size), 
        lendiff || (lendiff = 0);
        var display = cm.display;
        if (lendiff && to < display.viewTo && (null == display.updateLineNumbers || display.updateLineNumbers > from) && (display.updateLineNumbers = from), 
        cm.curOp.viewChanged = !0, from >= display.viewTo) sawCollapsedSpans && visualLineNo(cm.doc, from) < display.viewTo && resetView(cm); else if (to <= display.viewFrom) sawCollapsedSpans && visualLineEndNo(cm.doc, to + lendiff) > display.viewFrom ? resetView(cm) : (display.viewFrom += lendiff, 
        display.viewTo += lendiff); else if (from <= display.viewFrom && to >= display.viewTo) resetView(cm); else if (from <= display.viewFrom) {
            var cut = viewCuttingPoint(cm, to, to + lendiff, 1);
            cut ? (display.view = display.view.slice(cut.index), display.viewFrom = cut.lineN, 
            display.viewTo += lendiff) : resetView(cm);
        } else if (to >= display.viewTo) {
            var cut = viewCuttingPoint(cm, from, from, -1);
            cut ? (display.view = display.view.slice(0, cut.index), display.viewTo = cut.lineN) : resetView(cm);
        } else {
            var cutTop = viewCuttingPoint(cm, from, from, -1), cutBot = viewCuttingPoint(cm, to, to + lendiff, 1);
            cutTop && cutBot ? (display.view = display.view.slice(0, cutTop.index).concat(buildViewArray(cm, cutTop.lineN, cutBot.lineN)).concat(display.view.slice(cutBot.index)), 
            display.viewTo += lendiff) : resetView(cm);
        }
        var ext = display.externalMeasured;
        ext && (to < ext.lineN ? ext.lineN += lendiff : from < ext.lineN + ext.size && (display.externalMeasured = null));
    }
    function regLineChange(cm, line, type) {
        cm.curOp.viewChanged = !0;
        var display = cm.display, ext = cm.display.externalMeasured;
        if (ext && line >= ext.lineN && line < ext.lineN + ext.size && (display.externalMeasured = null), 
        !(line < display.viewFrom || line >= display.viewTo)) {
            var lineView = display.view[findViewIndex(cm, line)];
            if (null != lineView.node) {
                var arr = lineView.changes || (lineView.changes = []);
                -1 == indexOf(arr, type) && arr.push(type);
            }
        }
    }
    function resetView(cm) {
        cm.display.viewFrom = cm.display.viewTo = cm.doc.first, cm.display.view = [], cm.display.viewOffset = 0;
    }
    function findViewIndex(cm, n) {
        if (n >= cm.display.viewTo) return null;
        if (n -= cm.display.viewFrom, 0 > n) return null;
        for (var view = cm.display.view, i = 0; i < view.length; i++) if (n -= view[i].size, 
        0 > n) return i;
    }
    function viewCuttingPoint(cm, oldN, newN, dir) {
        var diff, index = findViewIndex(cm, oldN), view = cm.display.view;
        if (!sawCollapsedSpans || newN == cm.doc.first + cm.doc.size) return {
            index: index,
            lineN: newN
        };
        for (var i = 0, n = cm.display.viewFrom; index > i; i++) n += view[i].size;
        if (n != oldN) {
            if (dir > 0) {
                if (index == view.length - 1) return null;
                diff = n + view[index].size - oldN, index++;
            } else diff = n - oldN;
            oldN += diff, newN += diff;
        }
        for (;visualLineNo(cm.doc, newN) != newN; ) {
            if (index == (0 > dir ? 0 : view.length - 1)) return null;
            newN += dir * view[index - (0 > dir ? 1 : 0)].size, index += dir;
        }
        return {
            index: index,
            lineN: newN
        };
    }
    function adjustView(cm, from, to) {
        var display = cm.display, view = display.view;
        0 == view.length || from >= display.viewTo || to <= display.viewFrom ? (display.view = buildViewArray(cm, from, to), 
        display.viewFrom = from) : (display.viewFrom > from ? display.view = buildViewArray(cm, from, display.viewFrom).concat(display.view) : display.viewFrom < from && (display.view = display.view.slice(findViewIndex(cm, from))), 
        display.viewFrom = from, display.viewTo < to ? display.view = display.view.concat(buildViewArray(cm, display.viewTo, to)) : display.viewTo > to && (display.view = display.view.slice(0, findViewIndex(cm, to)))), 
        display.viewTo = to;
    }
    function countDirtyView(cm) {
        for (var view = cm.display.view, dirty = 0, i = 0; i < view.length; i++) {
            var lineView = view[i];
            lineView.hidden || lineView.node && !lineView.changes || ++dirty;
        }
        return dirty;
    }
    function slowPoll(cm) {
        cm.display.pollingFast || cm.display.poll.set(cm.options.pollInterval, function() {
            readInput(cm), cm.state.focused && slowPoll(cm);
        });
    }
    function fastPoll(cm) {
        function p() {
            var changed = readInput(cm);
            changed || missed ? (cm.display.pollingFast = !1, slowPoll(cm)) : (missed = !0, 
            cm.display.poll.set(60, p));
        }
        var missed = !1;
        cm.display.pollingFast = !0, cm.display.poll.set(20, p);
    }
    function readInput(cm) {
        var input = cm.display.input, prevInput = cm.display.prevInput, doc = cm.doc;
        if (!cm.state.focused || hasSelection(input) && !prevInput || isReadOnly(cm) || cm.options.disableInput) return !1;
        cm.state.pasteIncoming && cm.state.fakedLastChar && (input.value = input.value.substring(0, input.value.length - 1), 
        cm.state.fakedLastChar = !1);
        var text = input.value;
        if (text == prevInput && !cm.somethingSelected()) return !1;
        if (ie && ie_version >= 9 && cm.display.inputHasSelection === text || mac && /[\uf700-\uf7ff]/.test(text)) return resetInput(cm), 
        !1;
        var withOp = !cm.curOp;
        withOp && startOperation(cm), cm.display.shift = !1, 8203 != text.charCodeAt(0) || doc.sel != cm.display.selForContextMenu || prevInput || (prevInput = "​");
        for (var same = 0, l = Math.min(prevInput.length, text.length); l > same && prevInput.charCodeAt(same) == text.charCodeAt(same); ) ++same;
        var inserted = text.slice(same), textLines = splitLines(inserted), multiPaste = null;
        cm.state.pasteIncoming && doc.sel.ranges.length > 1 && (lastCopied && lastCopied.join("\n") == inserted ? multiPaste = doc.sel.ranges.length % lastCopied.length == 0 && map(lastCopied, splitLines) : textLines.length == doc.sel.ranges.length && (multiPaste = map(textLines, function(l) {
            return [ l ];
        })));
        for (var i = doc.sel.ranges.length - 1; i >= 0; i--) {
            var range = doc.sel.ranges[i], from = range.from(), to = range.to();
            same < prevInput.length ? from = Pos(from.line, from.ch - (prevInput.length - same)) : cm.state.overwrite && range.empty() && !cm.state.pasteIncoming && (to = Pos(to.line, Math.min(getLine(doc, to.line).text.length, to.ch + lst(textLines).length)));
            var updateInput = cm.curOp.updateInput, changeEvent = {
                from: from,
                to: to,
                text: multiPaste ? multiPaste[i % multiPaste.length] : textLines,
                origin: cm.state.pasteIncoming ? "paste" : cm.state.cutIncoming ? "cut" : "+input"
            };
            if (makeChange(cm.doc, changeEvent), signalLater(cm, "inputRead", cm, changeEvent), 
            inserted && !cm.state.pasteIncoming && cm.options.electricChars && cm.options.smartIndent && range.head.ch < 100 && (!i || doc.sel.ranges[i - 1].head.line != range.head.line)) {
                var mode = cm.getModeAt(range.head), end = changeEnd(changeEvent);
                if (mode.electricChars) {
                    for (var j = 0; j < mode.electricChars.length; j++) if (inserted.indexOf(mode.electricChars.charAt(j)) > -1) {
                        indentLine(cm, end.line, "smart");
                        break;
                    }
                } else mode.electricInput && mode.electricInput.test(getLine(doc, end.line).text.slice(0, end.ch)) && indentLine(cm, end.line, "smart");
            }
        }
        return ensureCursorVisible(cm), cm.curOp.updateInput = updateInput, cm.curOp.typing = !0, 
        text.length > 1e3 || text.indexOf("\n") > -1 ? input.value = cm.display.prevInput = "" : cm.display.prevInput = text, 
        withOp && endOperation(cm), cm.state.pasteIncoming = cm.state.cutIncoming = !1, 
        !0;
    }
    function resetInput(cm, typing) {
        var minimal, selected, doc = cm.doc;
        if (cm.somethingSelected()) {
            cm.display.prevInput = "";
            var range = doc.sel.primary();
            minimal = hasCopyEvent && (range.to().line - range.from().line > 100 || (selected = cm.getSelection()).length > 1e3);
            var content = minimal ? "-" : selected || cm.getSelection();
            cm.display.input.value = content, cm.state.focused && selectInput(cm.display.input), 
            ie && ie_version >= 9 && (cm.display.inputHasSelection = content);
        } else typing || (cm.display.prevInput = cm.display.input.value = "", ie && ie_version >= 9 && (cm.display.inputHasSelection = null));
        cm.display.inaccurateSelection = minimal;
    }
    function focusInput(cm) {
        "nocursor" == cm.options.readOnly || mobile && activeElt() == cm.display.input || cm.display.input.focus();
    }
    function ensureFocus(cm) {
        cm.state.focused || (focusInput(cm), onFocus(cm));
    }
    function isReadOnly(cm) {
        return cm.options.readOnly || cm.doc.cantEdit;
    }
    function registerEventHandlers(cm) {
        function reFocus() {
            cm.state.focused && setTimeout(bind(focusInput, cm), 0);
        }
        function drag_(e) {
            signalDOMEvent(cm, e) || e_stop(e);
        }
        function prepareCopyCut(e) {
            if (cm.somethingSelected()) lastCopied = cm.getSelections(), d.inaccurateSelection && (d.prevInput = "", 
            d.inaccurateSelection = !1, d.input.value = lastCopied.join("\n"), selectInput(d.input)); else {
                for (var text = [], ranges = [], i = 0; i < cm.doc.sel.ranges.length; i++) {
                    var line = cm.doc.sel.ranges[i].head.line, lineRange = {
                        anchor: Pos(line, 0),
                        head: Pos(line + 1, 0)
                    };
                    ranges.push(lineRange), text.push(cm.getRange(lineRange.anchor, lineRange.head));
                }
                "cut" == e.type ? cm.setSelections(ranges, null, sel_dontScroll) : (d.prevInput = "", 
                d.input.value = text.join("\n"), selectInput(d.input)), lastCopied = text;
            }
            "cut" == e.type && (cm.state.cutIncoming = !0);
        }
        var d = cm.display;
        on(d.scroller, "mousedown", operation(cm, onMouseDown)), ie && 11 > ie_version ? on(d.scroller, "dblclick", operation(cm, function(e) {
            if (!signalDOMEvent(cm, e)) {
                var pos = posFromMouse(cm, e);
                if (pos && !clickInGutter(cm, e) && !eventInWidget(cm.display, e)) {
                    e_preventDefault(e);
                    var word = cm.findWordAt(pos);
                    extendSelection(cm.doc, word.anchor, word.head);
                }
            }
        })) : on(d.scroller, "dblclick", function(e) {
            signalDOMEvent(cm, e) || e_preventDefault(e);
        }), on(d.lineSpace, "selectstart", function(e) {
            eventInWidget(d, e) || e_preventDefault(e);
        }), captureRightClick || on(d.scroller, "contextmenu", function(e) {
            onContextMenu(cm, e);
        }), on(d.scroller, "scroll", function() {
            d.scroller.clientHeight && (setScrollTop(cm, d.scroller.scrollTop), setScrollLeft(cm, d.scroller.scrollLeft, !0), 
            signal(cm, "scroll", cm));
        }), on(d.scrollbarV, "scroll", function() {
            d.scroller.clientHeight && setScrollTop(cm, d.scrollbarV.scrollTop);
        }), on(d.scrollbarH, "scroll", function() {
            d.scroller.clientHeight && setScrollLeft(cm, d.scrollbarH.scrollLeft);
        }), on(d.scroller, "mousewheel", function(e) {
            onScrollWheel(cm, e);
        }), on(d.scroller, "DOMMouseScroll", function(e) {
            onScrollWheel(cm, e);
        }), on(d.scrollbarH, "mousedown", reFocus), on(d.scrollbarV, "mousedown", reFocus), 
        on(d.wrapper, "scroll", function() {
            d.wrapper.scrollTop = d.wrapper.scrollLeft = 0;
        }), on(d.input, "keyup", function(e) {
            onKeyUp.call(cm, e);
        }), on(d.input, "input", function() {
            ie && ie_version >= 9 && cm.display.inputHasSelection && (cm.display.inputHasSelection = null), 
            fastPoll(cm);
        }), on(d.input, "keydown", operation(cm, onKeyDown)), on(d.input, "keypress", operation(cm, onKeyPress)), 
        on(d.input, "focus", bind(onFocus, cm)), on(d.input, "blur", bind(onBlur, cm)), 
        cm.options.dragDrop && (on(d.scroller, "dragstart", function(e) {
            onDragStart(cm, e);
        }), on(d.scroller, "dragenter", drag_), on(d.scroller, "dragover", drag_), on(d.scroller, "drop", operation(cm, onDrop))), 
        on(d.scroller, "paste", function(e) {
            eventInWidget(d, e) || (cm.state.pasteIncoming = !0, focusInput(cm), fastPoll(cm));
        }), on(d.input, "paste", function() {
            if (webkit && !cm.state.fakedLastChar && !(new Date() - cm.state.lastMiddleDown < 200)) {
                var start = d.input.selectionStart, end = d.input.selectionEnd;
                d.input.value += "$", d.input.selectionEnd = end, d.input.selectionStart = start, 
                cm.state.fakedLastChar = !0;
            }
            cm.state.pasteIncoming = !0, fastPoll(cm);
        }), on(d.input, "cut", prepareCopyCut), on(d.input, "copy", prepareCopyCut), khtml && on(d.sizer, "mouseup", function() {
            activeElt() == d.input && d.input.blur(), focusInput(cm);
        });
    }
    function onResize(cm) {
        var d = cm.display;
        d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null, cm.setSize();
    }
    function eventInWidget(display, e) {
        for (var n = e_target(e); n != display.wrapper; n = n.parentNode) if (!n || n.ignoreEvents || n.parentNode == display.sizer && n != display.mover) return !0;
    }
    function posFromMouse(cm, e, liberal, forRect) {
        var display = cm.display;
        if (!liberal) {
            var target = e_target(e);
            if (target == display.scrollbarH || target == display.scrollbarV || target == display.scrollbarFiller || target == display.gutterFiller) return null;
        }
        var x, y, space = display.lineSpace.getBoundingClientRect();
        try {
            x = e.clientX - space.left, y = e.clientY - space.top;
        } catch (e) {
            return null;
        }
        var line, coords = coordsChar(cm, x, y);
        if (forRect && 1 == coords.xRel && (line = getLine(cm.doc, coords.line).text).length == coords.ch) {
            var colDiff = countColumn(line, line.length, cm.options.tabSize) - line.length;
            coords = Pos(coords.line, Math.max(0, Math.round((x - paddingH(cm.display).left) / charWidth(cm.display)) - colDiff));
        }
        return coords;
    }
    function onMouseDown(e) {
        if (!signalDOMEvent(this, e)) {
            var cm = this, display = cm.display;
            if (display.shift = e.shiftKey, eventInWidget(display, e)) return void (webkit || (display.scroller.draggable = !1, 
            setTimeout(function() {
                display.scroller.draggable = !0;
            }, 100)));
            if (!clickInGutter(cm, e)) {
                var start = posFromMouse(cm, e);
                switch (window.focus(), e_button(e)) {
                  case 1:
                    start ? leftButtonDown(cm, e, start) : e_target(e) == display.scroller && e_preventDefault(e);
                    break;

                  case 2:
                    webkit && (cm.state.lastMiddleDown = +new Date()), start && extendSelection(cm.doc, start), 
                    setTimeout(bind(focusInput, cm), 20), e_preventDefault(e);
                    break;

                  case 3:
                    captureRightClick && onContextMenu(cm, e);
                }
            }
        }
    }
    function leftButtonDown(cm, e, start) {
        setTimeout(bind(ensureFocus, cm), 0);
        var type, now = +new Date();
        lastDoubleClick && lastDoubleClick.time > now - 400 && 0 == cmp(lastDoubleClick.pos, start) ? type = "triple" : lastClick && lastClick.time > now - 400 && 0 == cmp(lastClick.pos, start) ? (type = "double", 
        lastDoubleClick = {
            time: now,
            pos: start
        }) : (type = "single", lastClick = {
            time: now,
            pos: start
        });
        var sel = cm.doc.sel, modifier = mac ? e.metaKey : e.ctrlKey;
        cm.options.dragDrop && dragAndDrop && !isReadOnly(cm) && "single" == type && sel.contains(start) > -1 && sel.somethingSelected() ? leftButtonStartDrag(cm, e, start, modifier) : leftButtonSelect(cm, e, start, type, modifier);
    }
    function leftButtonStartDrag(cm, e, start, modifier) {
        var display = cm.display, dragEnd = operation(cm, function(e2) {
            webkit && (display.scroller.draggable = !1), cm.state.draggingText = !1, off(document, "mouseup", dragEnd), 
            off(display.scroller, "drop", dragEnd), Math.abs(e.clientX - e2.clientX) + Math.abs(e.clientY - e2.clientY) < 10 && (e_preventDefault(e2), 
            modifier || extendSelection(cm.doc, start), focusInput(cm), ie && 9 == ie_version && setTimeout(function() {
                document.body.focus(), focusInput(cm);
            }, 20));
        });
        webkit && (display.scroller.draggable = !0), cm.state.draggingText = dragEnd, display.scroller.dragDrop && display.scroller.dragDrop(), 
        on(document, "mouseup", dragEnd), on(display.scroller, "drop", dragEnd);
    }
    function leftButtonSelect(cm, e, start, type, addNew) {
        function extendTo(pos) {
            if (0 != cmp(lastPos, pos)) if (lastPos = pos, "rect" == type) {
                for (var ranges = [], tabSize = cm.options.tabSize, startCol = countColumn(getLine(doc, start.line).text, start.ch, tabSize), posCol = countColumn(getLine(doc, pos.line).text, pos.ch, tabSize), left = Math.min(startCol, posCol), right = Math.max(startCol, posCol), line = Math.min(start.line, pos.line), end = Math.min(cm.lastLine(), Math.max(start.line, pos.line)); end >= line; line++) {
                    var text = getLine(doc, line).text, leftPos = findColumn(text, left, tabSize);
                    left == right ? ranges.push(new Range(Pos(line, leftPos), Pos(line, leftPos))) : text.length > leftPos && ranges.push(new Range(Pos(line, leftPos), Pos(line, findColumn(text, right, tabSize))));
                }
                ranges.length || ranges.push(new Range(start, start)), setSelection(doc, normalizeSelection(startSel.ranges.slice(0, ourIndex).concat(ranges), ourIndex), {
                    origin: "*mouse",
                    scroll: !1
                }), cm.scrollIntoView(pos);
            } else {
                var oldRange = ourRange, anchor = oldRange.anchor, head = pos;
                if ("single" != type) {
                    if ("double" == type) var range = cm.findWordAt(pos); else var range = new Range(Pos(pos.line, 0), clipPos(doc, Pos(pos.line + 1, 0)));
                    cmp(range.anchor, anchor) > 0 ? (head = range.head, anchor = minPos(oldRange.from(), range.anchor)) : (head = range.anchor, 
                    anchor = maxPos(oldRange.to(), range.head));
                }
                var ranges = startSel.ranges.slice(0);
                ranges[ourIndex] = new Range(clipPos(doc, anchor), head), setSelection(doc, normalizeSelection(ranges, ourIndex), sel_mouse);
            }
        }
        function extend(e) {
            var curCount = ++counter, cur = posFromMouse(cm, e, !0, "rect" == type);
            if (cur) if (0 != cmp(cur, lastPos)) {
                ensureFocus(cm), extendTo(cur);
                var visible = visibleLines(display, doc);
                (cur.line >= visible.to || cur.line < visible.from) && setTimeout(operation(cm, function() {
                    counter == curCount && extend(e);
                }), 150);
            } else {
                var outside = e.clientY < editorSize.top ? -20 : e.clientY > editorSize.bottom ? 20 : 0;
                outside && setTimeout(operation(cm, function() {
                    counter == curCount && (display.scroller.scrollTop += outside, extend(e));
                }), 50);
            }
        }
        function done(e) {
            counter = 1 / 0, e_preventDefault(e), focusInput(cm), off(document, "mousemove", move), 
            off(document, "mouseup", up), doc.history.lastSelOrigin = null;
        }
        var display = cm.display, doc = cm.doc;
        e_preventDefault(e);
        var ourRange, ourIndex, startSel = doc.sel;
        if (addNew && !e.shiftKey ? (ourIndex = doc.sel.contains(start), ourRange = ourIndex > -1 ? doc.sel.ranges[ourIndex] : new Range(start, start)) : ourRange = doc.sel.primary(), 
        e.altKey) type = "rect", addNew || (ourRange = new Range(start, start)), start = posFromMouse(cm, e, !0, !0), 
        ourIndex = -1; else if ("double" == type) {
            var word = cm.findWordAt(start);
            ourRange = cm.display.shift || doc.extend ? extendRange(doc, ourRange, word.anchor, word.head) : word;
        } else if ("triple" == type) {
            var line = new Range(Pos(start.line, 0), clipPos(doc, Pos(start.line + 1, 0)));
            ourRange = cm.display.shift || doc.extend ? extendRange(doc, ourRange, line.anchor, line.head) : line;
        } else ourRange = extendRange(doc, ourRange, start);
        addNew ? ourIndex > -1 ? replaceOneSelection(doc, ourIndex, ourRange, sel_mouse) : (ourIndex = doc.sel.ranges.length, 
        setSelection(doc, normalizeSelection(doc.sel.ranges.concat([ ourRange ]), ourIndex), {
            scroll: !1,
            origin: "*mouse"
        })) : (ourIndex = 0, setSelection(doc, new Selection([ ourRange ], 0), sel_mouse), 
        startSel = doc.sel);
        var lastPos = start, editorSize = display.wrapper.getBoundingClientRect(), counter = 0, move = operation(cm, function(e) {
            e_button(e) ? extend(e) : done(e);
        }), up = operation(cm, done);
        on(document, "mousemove", move), on(document, "mouseup", up);
    }
    function gutterEvent(cm, e, type, prevent, signalfn) {
        try {
            var mX = e.clientX, mY = e.clientY;
        } catch (e) {
            return !1;
        }
        if (mX >= Math.floor(cm.display.gutters.getBoundingClientRect().right)) return !1;
        prevent && e_preventDefault(e);
        var display = cm.display, lineBox = display.lineDiv.getBoundingClientRect();
        if (mY > lineBox.bottom || !hasHandler(cm, type)) return e_defaultPrevented(e);
        mY -= lineBox.top - display.viewOffset;
        for (var i = 0; i < cm.options.gutters.length; ++i) {
            var g = display.gutters.childNodes[i];
            if (g && g.getBoundingClientRect().right >= mX) {
                var line = lineAtHeight(cm.doc, mY), gutter = cm.options.gutters[i];
                return signalfn(cm, type, cm, line, gutter, e), e_defaultPrevented(e);
            }
        }
    }
    function clickInGutter(cm, e) {
        return gutterEvent(cm, e, "gutterClick", !0, signalLater);
    }
    function onDrop(e) {
        var cm = this;
        if (!signalDOMEvent(cm, e) && !eventInWidget(cm.display, e)) {
            e_preventDefault(e), ie && (lastDrop = +new Date());
            var pos = posFromMouse(cm, e, !0), files = e.dataTransfer.files;
            if (pos && !isReadOnly(cm)) if (files && files.length && window.FileReader && window.File) for (var n = files.length, text = Array(n), read = 0, loadFile = function(file, i) {
                var reader = new FileReader();
                reader.onload = operation(cm, function() {
                    if (text[i] = reader.result, ++read == n) {
                        pos = clipPos(cm.doc, pos);
                        var change = {
                            from: pos,
                            to: pos,
                            text: splitLines(text.join("\n")),
                            origin: "paste"
                        };
                        makeChange(cm.doc, change), setSelectionReplaceHistory(cm.doc, simpleSelection(pos, changeEnd(change)));
                    }
                }), reader.readAsText(file);
            }, i = 0; n > i; ++i) loadFile(files[i], i); else {
                if (cm.state.draggingText && cm.doc.sel.contains(pos) > -1) return cm.state.draggingText(e), 
                void setTimeout(bind(focusInput, cm), 20);
                try {
                    var text = e.dataTransfer.getData("Text");
                    if (text) {
                        if (cm.state.draggingText && !(mac ? e.metaKey : e.ctrlKey)) var selected = cm.listSelections();
                        if (setSelectionNoUndo(cm.doc, simpleSelection(pos, pos)), selected) for (var i = 0; i < selected.length; ++i) replaceRange(cm.doc, "", selected[i].anchor, selected[i].head, "drag");
                        cm.replaceSelection(text, "around", "paste"), focusInput(cm);
                    }
                } catch (e) {}
            }
        }
    }
    function onDragStart(cm, e) {
        if (ie && (!cm.state.draggingText || +new Date() - lastDrop < 100)) return void e_stop(e);
        if (!signalDOMEvent(cm, e) && !eventInWidget(cm.display, e) && (e.dataTransfer.setData("Text", cm.getSelection()), 
        e.dataTransfer.setDragImage && !safari)) {
            var img = elt("img", null, null, "position: fixed; left: 0; top: 0;");
            img.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", 
            presto && (img.width = img.height = 1, cm.display.wrapper.appendChild(img), img._top = img.offsetTop), 
            e.dataTransfer.setDragImage(img, 0, 0), presto && img.parentNode.removeChild(img);
        }
    }
    function setScrollTop(cm, val) {
        Math.abs(cm.doc.scrollTop - val) < 2 || (cm.doc.scrollTop = val, gecko || updateDisplaySimple(cm, {
            top: val
        }), cm.display.scroller.scrollTop != val && (cm.display.scroller.scrollTop = val), 
        cm.display.scrollbarV.scrollTop != val && (cm.display.scrollbarV.scrollTop = val), 
        gecko && updateDisplaySimple(cm), startWorker(cm, 100));
    }
    function setScrollLeft(cm, val, isScroller) {
        (isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) || (val = Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth), 
        cm.doc.scrollLeft = val, alignHorizontally(cm), cm.display.scroller.scrollLeft != val && (cm.display.scroller.scrollLeft = val), 
        cm.display.scrollbarH.scrollLeft != val && (cm.display.scrollbarH.scrollLeft = val));
    }
    function onScrollWheel(cm, e) {
        var dx = e.wheelDeltaX, dy = e.wheelDeltaY;
        null == dx && e.detail && e.axis == e.HORIZONTAL_AXIS && (dx = e.detail), null == dy && e.detail && e.axis == e.VERTICAL_AXIS ? dy = e.detail : null == dy && (dy = e.wheelDelta);
        var display = cm.display, scroll = display.scroller;
        if (dx && scroll.scrollWidth > scroll.clientWidth || dy && scroll.scrollHeight > scroll.clientHeight) {
            if (dy && mac && webkit) outer: for (var cur = e.target, view = display.view; cur != scroll; cur = cur.parentNode) for (var i = 0; i < view.length; i++) if (view[i].node == cur) {
                cm.display.currentWheelTarget = cur;
                break outer;
            }
            if (dx && !gecko && !presto && null != wheelPixelsPerUnit) return dy && setScrollTop(cm, Math.max(0, Math.min(scroll.scrollTop + dy * wheelPixelsPerUnit, scroll.scrollHeight - scroll.clientHeight))), 
            setScrollLeft(cm, Math.max(0, Math.min(scroll.scrollLeft + dx * wheelPixelsPerUnit, scroll.scrollWidth - scroll.clientWidth))), 
            e_preventDefault(e), void (display.wheelStartX = null);
            if (dy && null != wheelPixelsPerUnit) {
                var pixels = dy * wheelPixelsPerUnit, top = cm.doc.scrollTop, bot = top + display.wrapper.clientHeight;
                0 > pixels ? top = Math.max(0, top + pixels - 50) : bot = Math.min(cm.doc.height, bot + pixels + 50), 
                updateDisplaySimple(cm, {
                    top: top,
                    bottom: bot
                });
            }
            20 > wheelSamples && (null == display.wheelStartX ? (display.wheelStartX = scroll.scrollLeft, 
            display.wheelStartY = scroll.scrollTop, display.wheelDX = dx, display.wheelDY = dy, 
            setTimeout(function() {
                if (null != display.wheelStartX) {
                    var movedX = scroll.scrollLeft - display.wheelStartX, movedY = scroll.scrollTop - display.wheelStartY, sample = movedY && display.wheelDY && movedY / display.wheelDY || movedX && display.wheelDX && movedX / display.wheelDX;
                    display.wheelStartX = display.wheelStartY = null, sample && (wheelPixelsPerUnit = (wheelPixelsPerUnit * wheelSamples + sample) / (wheelSamples + 1), 
                    ++wheelSamples);
                }
            }, 200)) : (display.wheelDX += dx, display.wheelDY += dy));
        }
    }
    function doHandleBinding(cm, bound, dropShift) {
        if ("string" == typeof bound && (bound = commands[bound], !bound)) return !1;
        cm.display.pollingFast && readInput(cm) && (cm.display.pollingFast = !1);
        var prevShift = cm.display.shift, done = !1;
        try {
            isReadOnly(cm) && (cm.state.suppressEdits = !0), dropShift && (cm.display.shift = !1), 
            done = bound(cm) != Pass;
        } finally {
            cm.display.shift = prevShift, cm.state.suppressEdits = !1;
        }
        return done;
    }
    function allKeyMaps(cm) {
        var maps = cm.state.keyMaps.slice(0);
        return cm.options.extraKeys && maps.push(cm.options.extraKeys), maps.push(cm.options.keyMap), 
        maps;
    }
    function handleKeyBinding(cm, e) {
        var startMap = getKeyMap(cm.options.keyMap), next = startMap.auto;
        clearTimeout(maybeTransition), next && !isModifierKey(e) && (maybeTransition = setTimeout(function() {
            getKeyMap(cm.options.keyMap) == startMap && (cm.options.keyMap = next.call ? next.call(null, cm) : next, 
            keyMapChanged(cm));
        }, 50));
        var name = keyName(e, !0), handled = !1;
        if (!name) return !1;
        var keymaps = allKeyMaps(cm);
        return handled = e.shiftKey ? lookupKey("Shift-" + name, keymaps, function(b) {
            return doHandleBinding(cm, b, !0);
        }) || lookupKey(name, keymaps, function(b) {
            return ("string" == typeof b ? /^go[A-Z]/.test(b) : b.motion) ? doHandleBinding(cm, b) : void 0;
        }) : lookupKey(name, keymaps, function(b) {
            return doHandleBinding(cm, b);
        }), handled && (e_preventDefault(e), restartBlink(cm), signalLater(cm, "keyHandled", cm, name, e)), 
        handled;
    }
    function handleCharBinding(cm, e, ch) {
        var handled = lookupKey("'" + ch + "'", allKeyMaps(cm), function(b) {
            return doHandleBinding(cm, b, !0);
        });
        return handled && (e_preventDefault(e), restartBlink(cm), signalLater(cm, "keyHandled", cm, "'" + ch + "'", e)), 
        handled;
    }
    function onKeyDown(e) {
        var cm = this;
        if (ensureFocus(cm), !signalDOMEvent(cm, e)) {
            ie && 11 > ie_version && 27 == e.keyCode && (e.returnValue = !1);
            var code = e.keyCode;
            cm.display.shift = 16 == code || e.shiftKey;
            var handled = handleKeyBinding(cm, e);
            presto && (lastStoppedKey = handled ? code : null, !handled && 88 == code && !hasCopyEvent && (mac ? e.metaKey : e.ctrlKey) && cm.replaceSelection("", null, "cut")), 
            18 != code || /\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className) || showCrossHair(cm);
        }
    }
    function showCrossHair(cm) {
        function up(e) {
            18 != e.keyCode && e.altKey || (rmClass(lineDiv, "CodeMirror-crosshair"), off(document, "keyup", up), 
            off(document, "mouseover", up));
        }
        var lineDiv = cm.display.lineDiv;
        addClass(lineDiv, "CodeMirror-crosshair"), on(document, "keyup", up), on(document, "mouseover", up);
    }
    function onKeyUp(e) {
        16 == e.keyCode && (this.doc.sel.shift = !1), signalDOMEvent(this, e);
    }
    function onKeyPress(e) {
        var cm = this;
        if (!(signalDOMEvent(cm, e) || e.ctrlKey && !e.altKey || mac && e.metaKey)) {
            var keyCode = e.keyCode, charCode = e.charCode;
            if (presto && keyCode == lastStoppedKey) return lastStoppedKey = null, void e_preventDefault(e);
            if (!(presto && (!e.which || e.which < 10) || khtml) || !handleKeyBinding(cm, e)) {
                var ch = String.fromCharCode(null == charCode ? keyCode : charCode);
                handleCharBinding(cm, e, ch) || (ie && ie_version >= 9 && (cm.display.inputHasSelection = null), 
                fastPoll(cm));
            }
        }
    }
    function onFocus(cm) {
        "nocursor" != cm.options.readOnly && (cm.state.focused || (signal(cm, "focus", cm), 
        cm.state.focused = !0, addClass(cm.display.wrapper, "CodeMirror-focused"), cm.curOp || cm.display.selForContextMenu == cm.doc.sel || (resetInput(cm), 
        webkit && setTimeout(bind(resetInput, cm, !0), 0))), slowPoll(cm), restartBlink(cm));
    }
    function onBlur(cm) {
        cm.state.focused && (signal(cm, "blur", cm), cm.state.focused = !1, rmClass(cm.display.wrapper, "CodeMirror-focused")), 
        clearInterval(cm.display.blinker), setTimeout(function() {
            cm.state.focused || (cm.display.shift = !1);
        }, 150);
    }
    function onContextMenu(cm, e) {
        function prepareSelectAllHack() {
            if (null != display.input.selectionStart) {
                var selected = cm.somethingSelected(), extval = display.input.value = "​" + (selected ? display.input.value : "");
                display.prevInput = selected ? "" : "​", display.input.selectionStart = 1, display.input.selectionEnd = extval.length, 
                display.selForContextMenu = cm.doc.sel;
            }
        }
        function rehide() {
            if (display.inputDiv.style.position = "relative", display.input.style.cssText = oldCSS, 
            ie && 9 > ie_version && (display.scrollbarV.scrollTop = display.scroller.scrollTop = scrollPos), 
            slowPoll(cm), null != display.input.selectionStart) {
                (!ie || ie && 9 > ie_version) && prepareSelectAllHack();
                var i = 0, poll = function() {
                    display.selForContextMenu == cm.doc.sel && 0 == display.input.selectionStart ? operation(cm, commands.selectAll)(cm) : i++ < 10 ? display.detectingSelectAll = setTimeout(poll, 500) : resetInput(cm);
                };
                display.detectingSelectAll = setTimeout(poll, 200);
            }
        }
        if (!signalDOMEvent(cm, e, "contextmenu")) {
            var display = cm.display;
            if (!eventInWidget(display, e) && !contextMenuInGutter(cm, e)) {
                var pos = posFromMouse(cm, e), scrollPos = display.scroller.scrollTop;
                if (pos && !presto) {
                    var reset = cm.options.resetSelectionOnContextMenu;
                    reset && -1 == cm.doc.sel.contains(pos) && operation(cm, setSelection)(cm.doc, simpleSelection(pos), sel_dontScroll);
                    var oldCSS = display.input.style.cssText;
                    if (display.inputDiv.style.position = "absolute", display.input.style.cssText = "position: fixed; width: 30px; height: 30px; top: " + (e.clientY - 5) + "px; left: " + (e.clientX - 5) + "px; z-index: 1000; background: " + (ie ? "rgba(255, 255, 255, .05)" : "transparent") + "; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);", 
                    webkit) var oldScrollY = window.scrollY;
                    if (focusInput(cm), webkit && window.scrollTo(null, oldScrollY), resetInput(cm), 
                    cm.somethingSelected() || (display.input.value = display.prevInput = " "), display.selForContextMenu = cm.doc.sel, 
                    clearTimeout(display.detectingSelectAll), ie && ie_version >= 9 && prepareSelectAllHack(), 
                    captureRightClick) {
                        e_stop(e);
                        var mouseup = function() {
                            off(window, "mouseup", mouseup), setTimeout(rehide, 20);
                        };
                        on(window, "mouseup", mouseup);
                    } else setTimeout(rehide, 50);
                }
            }
        }
    }
    function contextMenuInGutter(cm, e) {
        return hasHandler(cm, "gutterContextMenu") ? gutterEvent(cm, e, "gutterContextMenu", !1, signal) : !1;
    }
    function adjustForChange(pos, change) {
        if (cmp(pos, change.from) < 0) return pos;
        if (cmp(pos, change.to) <= 0) return changeEnd(change);
        var line = pos.line + change.text.length - (change.to.line - change.from.line) - 1, ch = pos.ch;
        return pos.line == change.to.line && (ch += changeEnd(change).ch - change.to.ch), 
        Pos(line, ch);
    }
    function computeSelAfterChange(doc, change) {
        for (var out = [], i = 0; i < doc.sel.ranges.length; i++) {
            var range = doc.sel.ranges[i];
            out.push(new Range(adjustForChange(range.anchor, change), adjustForChange(range.head, change)));
        }
        return normalizeSelection(out, doc.sel.primIndex);
    }
    function offsetPos(pos, old, nw) {
        return pos.line == old.line ? Pos(nw.line, pos.ch - old.ch + nw.ch) : Pos(nw.line + (pos.line - old.line), pos.ch);
    }
    function computeReplacedSel(doc, changes, hint) {
        for (var out = [], oldPrev = Pos(doc.first, 0), newPrev = oldPrev, i = 0; i < changes.length; i++) {
            var change = changes[i], from = offsetPos(change.from, oldPrev, newPrev), to = offsetPos(changeEnd(change), oldPrev, newPrev);
            if (oldPrev = change.to, newPrev = to, "around" == hint) {
                var range = doc.sel.ranges[i], inv = cmp(range.head, range.anchor) < 0;
                out[i] = new Range(inv ? to : from, inv ? from : to);
            } else out[i] = new Range(from, from);
        }
        return new Selection(out, doc.sel.primIndex);
    }
    function filterChange(doc, change, update) {
        var obj = {
            canceled: !1,
            from: change.from,
            to: change.to,
            text: change.text,
            origin: change.origin,
            cancel: function() {
                this.canceled = !0;
            }
        };
        return update && (obj.update = function(from, to, text, origin) {
            from && (this.from = clipPos(doc, from)), to && (this.to = clipPos(doc, to)), text && (this.text = text), 
            void 0 !== origin && (this.origin = origin);
        }), signal(doc, "beforeChange", doc, obj), doc.cm && signal(doc.cm, "beforeChange", doc.cm, obj), 
        obj.canceled ? null : {
            from: obj.from,
            to: obj.to,
            text: obj.text,
            origin: obj.origin
        };
    }
    function makeChange(doc, change, ignoreReadOnly) {
        if (doc.cm) {
            if (!doc.cm.curOp) return operation(doc.cm, makeChange)(doc, change, ignoreReadOnly);
            if (doc.cm.state.suppressEdits) return;
        }
        if (!(hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")) || (change = filterChange(doc, change, !0))) {
            var split = sawReadOnlySpans && !ignoreReadOnly && removeReadOnlyRanges(doc, change.from, change.to);
            if (split) for (var i = split.length - 1; i >= 0; --i) makeChangeInner(doc, {
                from: split[i].from,
                to: split[i].to,
                text: i ? [ "" ] : change.text
            }); else makeChangeInner(doc, change);
        }
    }
    function makeChangeInner(doc, change) {
        if (1 != change.text.length || "" != change.text[0] || 0 != cmp(change.from, change.to)) {
            var selAfter = computeSelAfterChange(doc, change);
            addChangeToHistory(doc, change, selAfter, doc.cm ? doc.cm.curOp.id : 0 / 0), makeChangeSingleDoc(doc, change, selAfter, stretchSpansOverChange(doc, change));
            var rebased = [];
            linkedDocs(doc, function(doc, sharedHist) {
                sharedHist || -1 != indexOf(rebased, doc.history) || (rebaseHist(doc.history, change), 
                rebased.push(doc.history)), makeChangeSingleDoc(doc, change, null, stretchSpansOverChange(doc, change));
            });
        }
    }
    function makeChangeFromHistory(doc, type, allowSelectionOnly) {
        if (!doc.cm || !doc.cm.state.suppressEdits) {
            for (var event, hist = doc.history, selAfter = doc.sel, source = "undo" == type ? hist.done : hist.undone, dest = "undo" == type ? hist.undone : hist.done, i = 0; i < source.length && (event = source[i], 
            allowSelectionOnly ? !event.ranges || event.equals(doc.sel) : event.ranges); i++) ;
            if (i != source.length) {
                for (hist.lastOrigin = hist.lastSelOrigin = null; event = source.pop(), event.ranges; ) {
                    if (pushSelectionToHistory(event, dest), allowSelectionOnly && !event.equals(doc.sel)) return void setSelection(doc, event, {
                        clearRedo: !1
                    });
                    selAfter = event;
                }
                var antiChanges = [];
                pushSelectionToHistory(selAfter, dest), dest.push({
                    changes: antiChanges,
                    generation: hist.generation
                }), hist.generation = event.generation || ++hist.maxGeneration;
                for (var filter = hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange"), i = event.changes.length - 1; i >= 0; --i) {
                    var change = event.changes[i];
                    if (change.origin = type, filter && !filterChange(doc, change, !1)) return void (source.length = 0);
                    antiChanges.push(historyChangeFromChange(doc, change));
                    var after = i ? computeSelAfterChange(doc, change) : lst(source);
                    makeChangeSingleDoc(doc, change, after, mergeOldSpans(doc, change)), !i && doc.cm && doc.cm.scrollIntoView({
                        from: change.from,
                        to: changeEnd(change)
                    });
                    var rebased = [];
                    linkedDocs(doc, function(doc, sharedHist) {
                        sharedHist || -1 != indexOf(rebased, doc.history) || (rebaseHist(doc.history, change), 
                        rebased.push(doc.history)), makeChangeSingleDoc(doc, change, null, mergeOldSpans(doc, change));
                    });
                }
            }
        }
    }
    function shiftDoc(doc, distance) {
        if (0 != distance && (doc.first += distance, doc.sel = new Selection(map(doc.sel.ranges, function(range) {
            return new Range(Pos(range.anchor.line + distance, range.anchor.ch), Pos(range.head.line + distance, range.head.ch));
        }), doc.sel.primIndex), doc.cm)) {
            regChange(doc.cm, doc.first, doc.first - distance, distance);
            for (var d = doc.cm.display, l = d.viewFrom; l < d.viewTo; l++) regLineChange(doc.cm, l, "gutter");
        }
    }
    function makeChangeSingleDoc(doc, change, selAfter, spans) {
        if (doc.cm && !doc.cm.curOp) return operation(doc.cm, makeChangeSingleDoc)(doc, change, selAfter, spans);
        if (change.to.line < doc.first) return void shiftDoc(doc, change.text.length - 1 - (change.to.line - change.from.line));
        if (!(change.from.line > doc.lastLine())) {
            if (change.from.line < doc.first) {
                var shift = change.text.length - 1 - (doc.first - change.from.line);
                shiftDoc(doc, shift), change = {
                    from: Pos(doc.first, 0),
                    to: Pos(change.to.line + shift, change.to.ch),
                    text: [ lst(change.text) ],
                    origin: change.origin
                };
            }
            var last = doc.lastLine();
            change.to.line > last && (change = {
                from: change.from,
                to: Pos(last, getLine(doc, last).text.length),
                text: [ change.text[0] ],
                origin: change.origin
            }), change.removed = getBetween(doc, change.from, change.to), selAfter || (selAfter = computeSelAfterChange(doc, change)), 
            doc.cm ? makeChangeSingleDocInEditor(doc.cm, change, spans) : updateDoc(doc, change, spans), 
            setSelectionNoUndo(doc, selAfter, sel_dontScroll);
        }
    }
    function makeChangeSingleDocInEditor(cm, change, spans) {
        var doc = cm.doc, display = cm.display, from = change.from, to = change.to, recomputeMaxLength = !1, checkWidthStart = from.line;
        cm.options.lineWrapping || (checkWidthStart = lineNo(visualLine(getLine(doc, from.line))), 
        doc.iter(checkWidthStart, to.line + 1, function(line) {
            return line == display.maxLine ? (recomputeMaxLength = !0, !0) : void 0;
        })), doc.sel.contains(change.from, change.to) > -1 && signalCursorActivity(cm), 
        updateDoc(doc, change, spans, estimateHeight(cm)), cm.options.lineWrapping || (doc.iter(checkWidthStart, from.line + change.text.length, function(line) {
            var len = lineLength(line);
            len > display.maxLineLength && (display.maxLine = line, display.maxLineLength = len, 
            display.maxLineChanged = !0, recomputeMaxLength = !1);
        }), recomputeMaxLength && (cm.curOp.updateMaxLine = !0)), doc.frontier = Math.min(doc.frontier, from.line), 
        startWorker(cm, 400);
        var lendiff = change.text.length - (to.line - from.line) - 1;
        from.line != to.line || 1 != change.text.length || isWholeLineUpdate(cm.doc, change) ? regChange(cm, from.line, to.line + 1, lendiff) : regLineChange(cm, from.line, "text");
        var changesHandler = hasHandler(cm, "changes"), changeHandler = hasHandler(cm, "change");
        if (changeHandler || changesHandler) {
            var obj = {
                from: from,
                to: to,
                text: change.text,
                removed: change.removed,
                origin: change.origin
            };
            changeHandler && signalLater(cm, "change", cm, obj), changesHandler && (cm.curOp.changeObjs || (cm.curOp.changeObjs = [])).push(obj);
        }
        cm.display.selForContextMenu = null;
    }
    function replaceRange(doc, code, from, to, origin) {
        if (to || (to = from), cmp(to, from) < 0) {
            var tmp = to;
            to = from, from = tmp;
        }
        "string" == typeof code && (code = splitLines(code)), makeChange(doc, {
            from: from,
            to: to,
            text: code,
            origin: origin
        });
    }
    function maybeScrollWindow(cm, coords) {
        var display = cm.display, box = display.sizer.getBoundingClientRect(), doScroll = null;
        if (coords.top + box.top < 0 ? doScroll = !0 : coords.bottom + box.top > (window.innerHeight || document.documentElement.clientHeight) && (doScroll = !1), 
        null != doScroll && !phantom) {
            var scrollNode = elt("div", "​", null, "position: absolute; top: " + (coords.top - display.viewOffset - paddingTop(cm.display)) + "px; height: " + (coords.bottom - coords.top + scrollerCutOff) + "px; left: " + coords.left + "px; width: 2px;");
            cm.display.lineSpace.appendChild(scrollNode), scrollNode.scrollIntoView(doScroll), 
            cm.display.lineSpace.removeChild(scrollNode);
        }
    }
    function scrollPosIntoView(cm, pos, end, margin) {
        null == margin && (margin = 0);
        for (var limit = 0; 5 > limit; limit++) {
            var changed = !1, coords = cursorCoords(cm, pos), endCoords = end && end != pos ? cursorCoords(cm, end) : coords, scrollPos = calculateScrollPos(cm, Math.min(coords.left, endCoords.left), Math.min(coords.top, endCoords.top) - margin, Math.max(coords.left, endCoords.left), Math.max(coords.bottom, endCoords.bottom) + margin), startTop = cm.doc.scrollTop, startLeft = cm.doc.scrollLeft;
            if (null != scrollPos.scrollTop && (setScrollTop(cm, scrollPos.scrollTop), Math.abs(cm.doc.scrollTop - startTop) > 1 && (changed = !0)), 
            null != scrollPos.scrollLeft && (setScrollLeft(cm, scrollPos.scrollLeft), Math.abs(cm.doc.scrollLeft - startLeft) > 1 && (changed = !0)), 
            !changed) return coords;
        }
    }
    function scrollIntoView(cm, x1, y1, x2, y2) {
        var scrollPos = calculateScrollPos(cm, x1, y1, x2, y2);
        null != scrollPos.scrollTop && setScrollTop(cm, scrollPos.scrollTop), null != scrollPos.scrollLeft && setScrollLeft(cm, scrollPos.scrollLeft);
    }
    function calculateScrollPos(cm, x1, y1, x2, y2) {
        var display = cm.display, snapMargin = textHeight(cm.display);
        0 > y1 && (y1 = 0);
        var screentop = cm.curOp && null != cm.curOp.scrollTop ? cm.curOp.scrollTop : display.scroller.scrollTop, screen = display.scroller.clientHeight - scrollerCutOff, result = {};
        y2 - y1 > screen && (y2 = y1 + screen);
        var docBottom = cm.doc.height + paddingVert(display), atTop = snapMargin > y1, atBottom = y2 > docBottom - snapMargin;
        if (screentop > y1) result.scrollTop = atTop ? 0 : y1; else if (y2 > screentop + screen) {
            var newTop = Math.min(y1, (atBottom ? docBottom : y2) - screen);
            newTop != screentop && (result.scrollTop = newTop);
        }
        var screenleft = cm.curOp && null != cm.curOp.scrollLeft ? cm.curOp.scrollLeft : display.scroller.scrollLeft, screenw = display.scroller.clientWidth - scrollerCutOff - display.gutters.offsetWidth, tooWide = x2 - x1 > screenw;
        return tooWide && (x2 = x1 + screenw), 10 > x1 ? result.scrollLeft = 0 : screenleft > x1 ? result.scrollLeft = Math.max(0, x1 - (tooWide ? 0 : 10)) : x2 > screenw + screenleft - 3 && (result.scrollLeft = x2 + (tooWide ? 0 : 10) - screenw), 
        result;
    }
    function addToScrollPos(cm, left, top) {
        (null != left || null != top) && resolveScrollToPos(cm), null != left && (cm.curOp.scrollLeft = (null == cm.curOp.scrollLeft ? cm.doc.scrollLeft : cm.curOp.scrollLeft) + left), 
        null != top && (cm.curOp.scrollTop = (null == cm.curOp.scrollTop ? cm.doc.scrollTop : cm.curOp.scrollTop) + top);
    }
    function ensureCursorVisible(cm) {
        resolveScrollToPos(cm);
        var cur = cm.getCursor(), from = cur, to = cur;
        cm.options.lineWrapping || (from = cur.ch ? Pos(cur.line, cur.ch - 1) : cur, to = Pos(cur.line, cur.ch + 1)), 
        cm.curOp.scrollToPos = {
            from: from,
            to: to,
            margin: cm.options.cursorScrollMargin,
            isCursor: !0
        };
    }
    function resolveScrollToPos(cm) {
        var range = cm.curOp.scrollToPos;
        if (range) {
            cm.curOp.scrollToPos = null;
            var from = estimateCoords(cm, range.from), to = estimateCoords(cm, range.to), sPos = calculateScrollPos(cm, Math.min(from.left, to.left), Math.min(from.top, to.top) - range.margin, Math.max(from.right, to.right), Math.max(from.bottom, to.bottom) + range.margin);
            cm.scrollTo(sPos.scrollLeft, sPos.scrollTop);
        }
    }
    function indentLine(cm, n, how, aggressive) {
        var state, doc = cm.doc;
        null == how && (how = "add"), "smart" == how && (doc.mode.indent ? state = getStateBefore(cm, n) : how = "prev");
        var tabSize = cm.options.tabSize, line = getLine(doc, n), curSpace = countColumn(line.text, null, tabSize);
        line.stateAfter && (line.stateAfter = null);
        var indentation, curSpaceString = line.text.match(/^\s*/)[0];
        if (aggressive || /\S/.test(line.text)) {
            if ("smart" == how && (indentation = doc.mode.indent(state, line.text.slice(curSpaceString.length), line.text), 
            indentation == Pass || indentation > 150)) {
                if (!aggressive) return;
                how = "prev";
            }
        } else indentation = 0, how = "not";
        "prev" == how ? indentation = n > doc.first ? countColumn(getLine(doc, n - 1).text, null, tabSize) : 0 : "add" == how ? indentation = curSpace + cm.options.indentUnit : "subtract" == how ? indentation = curSpace - cm.options.indentUnit : "number" == typeof how && (indentation = curSpace + how), 
        indentation = Math.max(0, indentation);
        var indentString = "", pos = 0;
        if (cm.options.indentWithTabs) for (var i = Math.floor(indentation / tabSize); i; --i) pos += tabSize, 
        indentString += "	";
        if (indentation > pos && (indentString += spaceStr(indentation - pos)), indentString != curSpaceString) replaceRange(doc, indentString, Pos(n, 0), Pos(n, curSpaceString.length), "+input"); else for (var i = 0; i < doc.sel.ranges.length; i++) {
            var range = doc.sel.ranges[i];
            if (range.head.line == n && range.head.ch < curSpaceString.length) {
                var pos = Pos(n, curSpaceString.length);
                replaceOneSelection(doc, i, new Range(pos, pos));
                break;
            }
        }
        line.stateAfter = null;
    }
    function changeLine(doc, handle, changeType, op) {
        var no = handle, line = handle;
        return "number" == typeof handle ? line = getLine(doc, clipLine(doc, handle)) : no = lineNo(handle), 
        null == no ? null : (op(line, no) && doc.cm && regLineChange(doc.cm, no, changeType), 
        line);
    }
    function deleteNearSelection(cm, compute) {
        for (var ranges = cm.doc.sel.ranges, kill = [], i = 0; i < ranges.length; i++) {
            for (var toKill = compute(ranges[i]); kill.length && cmp(toKill.from, lst(kill).to) <= 0; ) {
                var replaced = kill.pop();
                if (cmp(replaced.from, toKill.from) < 0) {
                    toKill.from = replaced.from;
                    break;
                }
            }
            kill.push(toKill);
        }
        runInOp(cm, function() {
            for (var i = kill.length - 1; i >= 0; i--) replaceRange(cm.doc, "", kill[i].from, kill[i].to, "+delete");
            ensureCursorVisible(cm);
        });
    }
    function findPosH(doc, pos, dir, unit, visually) {
        function findNextLine() {
            var l = line + dir;
            return l < doc.first || l >= doc.first + doc.size ? possible = !1 : (line = l, lineObj = getLine(doc, l));
        }
        function moveOnce(boundToLine) {
            var next = (visually ? moveVisually : moveLogically)(lineObj, ch, dir, !0);
            if (null == next) {
                if (boundToLine || !findNextLine()) return possible = !1;
                ch = visually ? (0 > dir ? lineRight : lineLeft)(lineObj) : 0 > dir ? lineObj.text.length : 0;
            } else ch = next;
            return !0;
        }
        var line = pos.line, ch = pos.ch, origDir = dir, lineObj = getLine(doc, line), possible = !0;
        if ("char" == unit) moveOnce(); else if ("column" == unit) moveOnce(!0); else if ("word" == unit || "group" == unit) for (var sawType = null, group = "group" == unit, helper = doc.cm && doc.cm.getHelper(pos, "wordChars"), first = !0; !(0 > dir) || moveOnce(!first); first = !1) {
            var cur = lineObj.text.charAt(ch) || "\n", type = isWordChar(cur, helper) ? "w" : group && "\n" == cur ? "n" : !group || /\s/.test(cur) ? null : "p";
            if (!group || first || type || (type = "s"), sawType && sawType != type) {
                0 > dir && (dir = 1, moveOnce());
                break;
            }
            if (type && (sawType = type), dir > 0 && !moveOnce(!first)) break;
        }
        var result = skipAtomic(doc, Pos(line, ch), origDir, !0);
        return possible || (result.hitSide = !0), result;
    }
    function findPosV(cm, pos, dir, unit) {
        var y, doc = cm.doc, x = pos.left;
        if ("page" == unit) {
            var pageSize = Math.min(cm.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
            y = pos.top + dir * (pageSize - (0 > dir ? 1.5 : .5) * textHeight(cm.display));
        } else "line" == unit && (y = dir > 0 ? pos.bottom + 3 : pos.top - 3);
        for (;;) {
            var target = coordsChar(cm, x, y);
            if (!target.outside) break;
            if (0 > dir ? 0 >= y : y >= doc.height) {
                target.hitSide = !0;
                break;
            }
            y += 5 * dir;
        }
        return target;
    }
    function option(name, deflt, handle, notOnInit) {
        CodeMirror.defaults[name] = deflt, handle && (optionHandlers[name] = notOnInit ? function(cm, val, old) {
            old != Init && handle(cm, val, old);
        } : handle);
    }
    function getKeyMap(val) {
        return "string" == typeof val ? keyMap[val] : val;
    }
    function markText(doc, from, to, options, type) {
        if (options && options.shared) return markTextShared(doc, from, to, options, type);
        if (doc.cm && !doc.cm.curOp) return operation(doc.cm, markText)(doc, from, to, options, type);
        var marker = new TextMarker(doc, type), diff = cmp(from, to);
        if (options && copyObj(options, marker, !1), diff > 0 || 0 == diff && marker.clearWhenEmpty !== !1) return marker;
        if (marker.replacedWith && (marker.collapsed = !0, marker.widgetNode = elt("span", [ marker.replacedWith ], "CodeMirror-widget"), 
        options.handleMouseEvents || (marker.widgetNode.ignoreEvents = !0), options.insertLeft && (marker.widgetNode.insertLeft = !0)), 
        marker.collapsed) {
            if (conflictingCollapsedRange(doc, from.line, from, to, marker) || from.line != to.line && conflictingCollapsedRange(doc, to.line, from, to, marker)) throw new Error("Inserting collapsed marker partially overlapping an existing one");
            sawCollapsedSpans = !0;
        }
        marker.addToHistory && addChangeToHistory(doc, {
            from: from,
            to: to,
            origin: "markText"
        }, doc.sel, 0 / 0);
        var updateMaxLine, curLine = from.line, cm = doc.cm;
        if (doc.iter(curLine, to.line + 1, function(line) {
            cm && marker.collapsed && !cm.options.lineWrapping && visualLine(line) == cm.display.maxLine && (updateMaxLine = !0), 
            marker.collapsed && curLine != from.line && updateLineHeight(line, 0), addMarkedSpan(line, new MarkedSpan(marker, curLine == from.line ? from.ch : null, curLine == to.line ? to.ch : null)), 
            ++curLine;
        }), marker.collapsed && doc.iter(from.line, to.line + 1, function(line) {
            lineIsHidden(doc, line) && updateLineHeight(line, 0);
        }), marker.clearOnEnter && on(marker, "beforeCursorEnter", function() {
            marker.clear();
        }), marker.readOnly && (sawReadOnlySpans = !0, (doc.history.done.length || doc.history.undone.length) && doc.clearHistory()), 
        marker.collapsed && (marker.id = ++nextMarkerId, marker.atomic = !0), cm) {
            if (updateMaxLine && (cm.curOp.updateMaxLine = !0), marker.collapsed) regChange(cm, from.line, to.line + 1); else if (marker.className || marker.title || marker.startStyle || marker.endStyle) for (var i = from.line; i <= to.line; i++) regLineChange(cm, i, "text");
            marker.atomic && reCheckSelection(cm.doc), signalLater(cm, "markerAdded", cm, marker);
        }
        return marker;
    }
    function markTextShared(doc, from, to, options, type) {
        options = copyObj(options), options.shared = !1;
        var markers = [ markText(doc, from, to, options, type) ], primary = markers[0], widget = options.widgetNode;
        return linkedDocs(doc, function(doc) {
            widget && (options.widgetNode = widget.cloneNode(!0)), markers.push(markText(doc, clipPos(doc, from), clipPos(doc, to), options, type));
            for (var i = 0; i < doc.linked.length; ++i) if (doc.linked[i].isParent) return;
            primary = lst(markers);
        }), new SharedTextMarker(markers, primary);
    }
    function findSharedMarkers(doc) {
        return doc.findMarks(Pos(doc.first, 0), doc.clipPos(Pos(doc.lastLine())), function(m) {
            return m.parent;
        });
    }
    function copySharedMarkers(doc, markers) {
        for (var i = 0; i < markers.length; i++) {
            var marker = markers[i], pos = marker.find(), mFrom = doc.clipPos(pos.from), mTo = doc.clipPos(pos.to);
            if (cmp(mFrom, mTo)) {
                var subMark = markText(doc, mFrom, mTo, marker.primary, marker.primary.type);
                marker.markers.push(subMark), subMark.parent = marker;
            }
        }
    }
    function detachSharedMarkers(markers) {
        for (var i = 0; i < markers.length; i++) {
            var marker = markers[i], linked = [ marker.primary.doc ];
            linkedDocs(marker.primary.doc, function(d) {
                linked.push(d);
            });
            for (var j = 0; j < marker.markers.length; j++) {
                var subMarker = marker.markers[j];
                -1 == indexOf(linked, subMarker.doc) && (subMarker.parent = null, marker.markers.splice(j--, 1));
            }
        }
    }
    function MarkedSpan(marker, from, to) {
        this.marker = marker, this.from = from, this.to = to;
    }
    function getMarkedSpanFor(spans, marker) {
        if (spans) for (var i = 0; i < spans.length; ++i) {
            var span = spans[i];
            if (span.marker == marker) return span;
        }
    }
    function removeMarkedSpan(spans, span) {
        for (var r, i = 0; i < spans.length; ++i) spans[i] != span && (r || (r = [])).push(spans[i]);
        return r;
    }
    function addMarkedSpan(line, span) {
        line.markedSpans = line.markedSpans ? line.markedSpans.concat([ span ]) : [ span ], 
        span.marker.attachLine(line);
    }
    function markedSpansBefore(old, startCh, isInsert) {
        if (old) for (var nw, i = 0; i < old.length; ++i) {
            var span = old[i], marker = span.marker, startsBefore = null == span.from || (marker.inclusiveLeft ? span.from <= startCh : span.from < startCh);
            if (startsBefore || span.from == startCh && "bookmark" == marker.type && (!isInsert || !span.marker.insertLeft)) {
                var endsAfter = null == span.to || (marker.inclusiveRight ? span.to >= startCh : span.to > startCh);
                (nw || (nw = [])).push(new MarkedSpan(marker, span.from, endsAfter ? null : span.to));
            }
        }
        return nw;
    }
    function markedSpansAfter(old, endCh, isInsert) {
        if (old) for (var nw, i = 0; i < old.length; ++i) {
            var span = old[i], marker = span.marker, endsAfter = null == span.to || (marker.inclusiveRight ? span.to >= endCh : span.to > endCh);
            if (endsAfter || span.from == endCh && "bookmark" == marker.type && (!isInsert || span.marker.insertLeft)) {
                var startsBefore = null == span.from || (marker.inclusiveLeft ? span.from <= endCh : span.from < endCh);
                (nw || (nw = [])).push(new MarkedSpan(marker, startsBefore ? null : span.from - endCh, null == span.to ? null : span.to - endCh));
            }
        }
        return nw;
    }
    function stretchSpansOverChange(doc, change) {
        var oldFirst = isLine(doc, change.from.line) && getLine(doc, change.from.line).markedSpans, oldLast = isLine(doc, change.to.line) && getLine(doc, change.to.line).markedSpans;
        if (!oldFirst && !oldLast) return null;
        var startCh = change.from.ch, endCh = change.to.ch, isInsert = 0 == cmp(change.from, change.to), first = markedSpansBefore(oldFirst, startCh, isInsert), last = markedSpansAfter(oldLast, endCh, isInsert), sameLine = 1 == change.text.length, offset = lst(change.text).length + (sameLine ? startCh : 0);
        if (first) for (var i = 0; i < first.length; ++i) {
            var span = first[i];
            if (null == span.to) {
                var found = getMarkedSpanFor(last, span.marker);
                found ? sameLine && (span.to = null == found.to ? null : found.to + offset) : span.to = startCh;
            }
        }
        if (last) for (var i = 0; i < last.length; ++i) {
            var span = last[i];
            if (null != span.to && (span.to += offset), null == span.from) {
                var found = getMarkedSpanFor(first, span.marker);
                found || (span.from = offset, sameLine && (first || (first = [])).push(span));
            } else span.from += offset, sameLine && (first || (first = [])).push(span);
        }
        first && (first = clearEmptySpans(first)), last && last != first && (last = clearEmptySpans(last));
        var newMarkers = [ first ];
        if (!sameLine) {
            var gapMarkers, gap = change.text.length - 2;
            if (gap > 0 && first) for (var i = 0; i < first.length; ++i) null == first[i].to && (gapMarkers || (gapMarkers = [])).push(new MarkedSpan(first[i].marker, null, null));
            for (var i = 0; gap > i; ++i) newMarkers.push(gapMarkers);
            newMarkers.push(last);
        }
        return newMarkers;
    }
    function clearEmptySpans(spans) {
        for (var i = 0; i < spans.length; ++i) {
            var span = spans[i];
            null != span.from && span.from == span.to && span.marker.clearWhenEmpty !== !1 && spans.splice(i--, 1);
        }
        return spans.length ? spans : null;
    }
    function mergeOldSpans(doc, change) {
        var old = getOldSpans(doc, change), stretched = stretchSpansOverChange(doc, change);
        if (!old) return stretched;
        if (!stretched) return old;
        for (var i = 0; i < old.length; ++i) {
            var oldCur = old[i], stretchCur = stretched[i];
            if (oldCur && stretchCur) spans: for (var j = 0; j < stretchCur.length; ++j) {
                for (var span = stretchCur[j], k = 0; k < oldCur.length; ++k) if (oldCur[k].marker == span.marker) continue spans;
                oldCur.push(span);
            } else stretchCur && (old[i] = stretchCur);
        }
        return old;
    }
    function removeReadOnlyRanges(doc, from, to) {
        var markers = null;
        if (doc.iter(from.line, to.line + 1, function(line) {
            if (line.markedSpans) for (var i = 0; i < line.markedSpans.length; ++i) {
                var mark = line.markedSpans[i].marker;
                !mark.readOnly || markers && -1 != indexOf(markers, mark) || (markers || (markers = [])).push(mark);
            }
        }), !markers) return null;
        for (var parts = [ {
            from: from,
            to: to
        } ], i = 0; i < markers.length; ++i) for (var mk = markers[i], m = mk.find(0), j = 0; j < parts.length; ++j) {
            var p = parts[j];
            if (!(cmp(p.to, m.from) < 0 || cmp(p.from, m.to) > 0)) {
                var newParts = [ j, 1 ], dfrom = cmp(p.from, m.from), dto = cmp(p.to, m.to);
                (0 > dfrom || !mk.inclusiveLeft && !dfrom) && newParts.push({
                    from: p.from,
                    to: m.from
                }), (dto > 0 || !mk.inclusiveRight && !dto) && newParts.push({
                    from: m.to,
                    to: p.to
                }), parts.splice.apply(parts, newParts), j += newParts.length - 1;
            }
        }
        return parts;
    }
    function detachMarkedSpans(line) {
        var spans = line.markedSpans;
        if (spans) {
            for (var i = 0; i < spans.length; ++i) spans[i].marker.detachLine(line);
            line.markedSpans = null;
        }
    }
    function attachMarkedSpans(line, spans) {
        if (spans) {
            for (var i = 0; i < spans.length; ++i) spans[i].marker.attachLine(line);
            line.markedSpans = spans;
        }
    }
    function extraLeft(marker) {
        return marker.inclusiveLeft ? -1 : 0;
    }
    function extraRight(marker) {
        return marker.inclusiveRight ? 1 : 0;
    }
    function compareCollapsedMarkers(a, b) {
        var lenDiff = a.lines.length - b.lines.length;
        if (0 != lenDiff) return lenDiff;
        var aPos = a.find(), bPos = b.find(), fromCmp = cmp(aPos.from, bPos.from) || extraLeft(a) - extraLeft(b);
        if (fromCmp) return -fromCmp;
        var toCmp = cmp(aPos.to, bPos.to) || extraRight(a) - extraRight(b);
        return toCmp ? toCmp : b.id - a.id;
    }
    function collapsedSpanAtSide(line, start) {
        var found, sps = sawCollapsedSpans && line.markedSpans;
        if (sps) for (var sp, i = 0; i < sps.length; ++i) sp = sps[i], sp.marker.collapsed && null == (start ? sp.from : sp.to) && (!found || compareCollapsedMarkers(found, sp.marker) < 0) && (found = sp.marker);
        return found;
    }
    function collapsedSpanAtStart(line) {
        return collapsedSpanAtSide(line, !0);
    }
    function collapsedSpanAtEnd(line) {
        return collapsedSpanAtSide(line, !1);
    }
    function conflictingCollapsedRange(doc, lineNo, from, to, marker) {
        var line = getLine(doc, lineNo), sps = sawCollapsedSpans && line.markedSpans;
        if (sps) for (var i = 0; i < sps.length; ++i) {
            var sp = sps[i];
            if (sp.marker.collapsed) {
                var found = sp.marker.find(0), fromCmp = cmp(found.from, from) || extraLeft(sp.marker) - extraLeft(marker), toCmp = cmp(found.to, to) || extraRight(sp.marker) - extraRight(marker);
                if (!(fromCmp >= 0 && 0 >= toCmp || 0 >= fromCmp && toCmp >= 0) && (0 >= fromCmp && (cmp(found.to, from) > 0 || sp.marker.inclusiveRight && marker.inclusiveLeft) || fromCmp >= 0 && (cmp(found.from, to) < 0 || sp.marker.inclusiveLeft && marker.inclusiveRight))) return !0;
            }
        }
    }
    function visualLine(line) {
        for (var merged; merged = collapsedSpanAtStart(line); ) line = merged.find(-1, !0).line;
        return line;
    }
    function visualLineContinued(line) {
        for (var merged, lines; merged = collapsedSpanAtEnd(line); ) line = merged.find(1, !0).line, 
        (lines || (lines = [])).push(line);
        return lines;
    }
    function visualLineNo(doc, lineN) {
        var line = getLine(doc, lineN), vis = visualLine(line);
        return line == vis ? lineN : lineNo(vis);
    }
    function visualLineEndNo(doc, lineN) {
        if (lineN > doc.lastLine()) return lineN;
        var merged, line = getLine(doc, lineN);
        if (!lineIsHidden(doc, line)) return lineN;
        for (;merged = collapsedSpanAtEnd(line); ) line = merged.find(1, !0).line;
        return lineNo(line) + 1;
    }
    function lineIsHidden(doc, line) {
        var sps = sawCollapsedSpans && line.markedSpans;
        if (sps) for (var sp, i = 0; i < sps.length; ++i) if (sp = sps[i], sp.marker.collapsed) {
            if (null == sp.from) return !0;
            if (!sp.marker.widgetNode && 0 == sp.from && sp.marker.inclusiveLeft && lineIsHiddenInner(doc, line, sp)) return !0;
        }
    }
    function lineIsHiddenInner(doc, line, span) {
        if (null == span.to) {
            var end = span.marker.find(1, !0);
            return lineIsHiddenInner(doc, end.line, getMarkedSpanFor(end.line.markedSpans, span.marker));
        }
        if (span.marker.inclusiveRight && span.to == line.text.length) return !0;
        for (var sp, i = 0; i < line.markedSpans.length; ++i) if (sp = line.markedSpans[i], 
        sp.marker.collapsed && !sp.marker.widgetNode && sp.from == span.to && (null == sp.to || sp.to != span.from) && (sp.marker.inclusiveLeft || span.marker.inclusiveRight) && lineIsHiddenInner(doc, line, sp)) return !0;
    }
    function adjustScrollWhenAboveVisible(cm, line, diff) {
        heightAtLine(line) < (cm.curOp && cm.curOp.scrollTop || cm.doc.scrollTop) && addToScrollPos(cm, null, diff);
    }
    function widgetHeight(widget) {
        if (null != widget.height) return widget.height;
        if (!contains(document.body, widget.node)) {
            var parentStyle = "position: relative;";
            widget.coverGutter && (parentStyle += "margin-left: -" + widget.cm.getGutterElement().offsetWidth + "px;"), 
            removeChildrenAndAdd(widget.cm.display.measure, elt("div", [ widget.node ], null, parentStyle));
        }
        return widget.height = widget.node.offsetHeight;
    }
    function addLineWidget(cm, handle, node, options) {
        var widget = new LineWidget(cm, node, options);
        return widget.noHScroll && (cm.display.alignWidgets = !0), changeLine(cm.doc, handle, "widget", function(line) {
            var widgets = line.widgets || (line.widgets = []);
            if (null == widget.insertAt ? widgets.push(widget) : widgets.splice(Math.min(widgets.length - 1, Math.max(0, widget.insertAt)), 0, widget), 
            widget.line = line, !lineIsHidden(cm.doc, line)) {
                var aboveVisible = heightAtLine(line) < cm.doc.scrollTop;
                updateLineHeight(line, line.height + widgetHeight(widget)), aboveVisible && addToScrollPos(cm, null, widget.height), 
                cm.curOp.forceUpdate = !0;
            }
            return !0;
        }), widget;
    }
    function updateLine(line, text, markedSpans, estimateHeight) {
        line.text = text, line.stateAfter && (line.stateAfter = null), line.styles && (line.styles = null), 
        null != line.order && (line.order = null), detachMarkedSpans(line), attachMarkedSpans(line, markedSpans);
        var estHeight = estimateHeight ? estimateHeight(line) : 1;
        estHeight != line.height && updateLineHeight(line, estHeight);
    }
    function cleanUpLine(line) {
        line.parent = null, detachMarkedSpans(line);
    }
    function extractLineClasses(type, output) {
        if (type) for (;;) {
            var lineClass = type.match(/(?:^|\s+)line-(background-)?(\S+)/);
            if (!lineClass) break;
            type = type.slice(0, lineClass.index) + type.slice(lineClass.index + lineClass[0].length);
            var prop = lineClass[1] ? "bgClass" : "textClass";
            null == output[prop] ? output[prop] = lineClass[2] : new RegExp("(?:^|s)" + lineClass[2] + "(?:$|s)").test(output[prop]) || (output[prop] += " " + lineClass[2]);
        }
        return type;
    }
    function callBlankLine(mode, state) {
        if (mode.blankLine) return mode.blankLine(state);
        if (mode.innerMode) {
            var inner = CodeMirror.innerMode(mode, state);
            return inner.mode.blankLine ? inner.mode.blankLine(inner.state) : void 0;
        }
    }
    function readToken(mode, stream, state) {
        for (var i = 0; 10 > i; i++) {
            var style = mode.token(stream, state);
            if (stream.pos > stream.start) return style;
        }
        throw new Error("Mode " + mode.name + " failed to advance stream.");
    }
    function runMode(cm, text, mode, state, f, lineClasses, forceToEnd) {
        var flattenSpans = mode.flattenSpans;
        null == flattenSpans && (flattenSpans = cm.options.flattenSpans);
        var style, curStart = 0, curStyle = null, stream = new StringStream(text, cm.options.tabSize);
        for ("" == text && extractLineClasses(callBlankLine(mode, state), lineClasses); !stream.eol(); ) {
            if (stream.pos > cm.options.maxHighlightLength ? (flattenSpans = !1, forceToEnd && processLine(cm, text, state, stream.pos), 
            stream.pos = text.length, style = null) : style = extractLineClasses(readToken(mode, stream, state), lineClasses), 
            cm.options.addModeClass) {
                var mName = CodeMirror.innerMode(mode, state).mode.name;
                mName && (style = "m-" + (style ? mName + " " + style : mName));
            }
            flattenSpans && curStyle == style || (curStart < stream.start && f(stream.start, curStyle), 
            curStart = stream.start, curStyle = style), stream.start = stream.pos;
        }
        for (;curStart < stream.pos; ) {
            var pos = Math.min(stream.pos, curStart + 5e4);
            f(pos, curStyle), curStart = pos;
        }
    }
    function highlightLine(cm, line, state, forceToEnd) {
        var st = [ cm.state.modeGen ], lineClasses = {};
        runMode(cm, line.text, cm.doc.mode, state, function(end, style) {
            st.push(end, style);
        }, lineClasses, forceToEnd);
        for (var o = 0; o < cm.state.overlays.length; ++o) {
            var overlay = cm.state.overlays[o], i = 1, at = 0;
            runMode(cm, line.text, overlay.mode, !0, function(end, style) {
                for (var start = i; end > at; ) {
                    var i_end = st[i];
                    i_end > end && st.splice(i, 1, end, st[i + 1], i_end), i += 2, at = Math.min(end, i_end);
                }
                if (style) if (overlay.opaque) st.splice(start, i - start, end, "cm-overlay " + style), 
                i = start + 2; else for (;i > start; start += 2) {
                    var cur = st[start + 1];
                    st[start + 1] = (cur ? cur + " " : "") + "cm-overlay " + style;
                }
            }, lineClasses);
        }
        return {
            styles: st,
            classes: lineClasses.bgClass || lineClasses.textClass ? lineClasses : null
        };
    }
    function getLineStyles(cm, line) {
        if (!line.styles || line.styles[0] != cm.state.modeGen) {
            var result = highlightLine(cm, line, line.stateAfter = getStateBefore(cm, lineNo(line)));
            line.styles = result.styles, result.classes ? line.styleClasses = result.classes : line.styleClasses && (line.styleClasses = null);
        }
        return line.styles;
    }
    function processLine(cm, text, state, startAt) {
        var mode = cm.doc.mode, stream = new StringStream(text, cm.options.tabSize);
        for (stream.start = stream.pos = startAt || 0, "" == text && callBlankLine(mode, state); !stream.eol() && stream.pos <= cm.options.maxHighlightLength; ) readToken(mode, stream, state), 
        stream.start = stream.pos;
    }
    function interpretTokenStyle(style, options) {
        if (!style || /^\s*$/.test(style)) return null;
        var cache = options.addModeClass ? styleToClassCacheWithMode : styleToClassCache;
        return cache[style] || (cache[style] = style.replace(/\S+/g, "cm-$&"));
    }
    function buildLineContent(cm, lineView) {
        var content = elt("span", null, null, webkit ? "padding-right: .1px" : null), builder = {
            pre: elt("pre", [ content ]),
            content: content,
            col: 0,
            pos: 0,
            cm: cm
        };
        lineView.measure = {};
        for (var i = 0; i <= (lineView.rest ? lineView.rest.length : 0); i++) {
            var order, line = i ? lineView.rest[i - 1] : lineView.line;
            builder.pos = 0, builder.addToken = buildToken, (ie || webkit) && cm.getOption("lineWrapping") && (builder.addToken = buildTokenSplitSpaces(builder.addToken)), 
            hasBadBidiRects(cm.display.measure) && (order = getOrder(line)) && (builder.addToken = buildTokenBadBidi(builder.addToken, order)), 
            builder.map = [], insertLineContent(line, builder, getLineStyles(cm, line)), line.styleClasses && (line.styleClasses.bgClass && (builder.bgClass = joinClasses(line.styleClasses.bgClass, builder.bgClass || "")), 
            line.styleClasses.textClass && (builder.textClass = joinClasses(line.styleClasses.textClass, builder.textClass || ""))), 
            0 == builder.map.length && builder.map.push(0, 0, builder.content.appendChild(zeroWidthElement(cm.display.measure))), 
            0 == i ? (lineView.measure.map = builder.map, lineView.measure.cache = {}) : ((lineView.measure.maps || (lineView.measure.maps = [])).push(builder.map), 
            (lineView.measure.caches || (lineView.measure.caches = [])).push({}));
        }
        return signal(cm, "renderLine", cm, lineView.line, builder.pre), builder.pre.className && (builder.textClass = joinClasses(builder.pre.className, builder.textClass || "")), 
        builder;
    }
    function defaultSpecialCharPlaceholder(ch) {
        var token = elt("span", "•", "cm-invalidchar");
        return token.title = "\\u" + ch.charCodeAt(0).toString(16), token;
    }
    function buildToken(builder, text, style, startStyle, endStyle, title) {
        if (text) {
            var special = builder.cm.options.specialChars, mustWrap = !1;
            if (special.test(text)) for (var content = document.createDocumentFragment(), pos = 0; ;) {
                special.lastIndex = pos;
                var m = special.exec(text), skipped = m ? m.index - pos : text.length - pos;
                if (skipped) {
                    var txt = document.createTextNode(text.slice(pos, pos + skipped));
                    content.appendChild(ie && 9 > ie_version ? elt("span", [ txt ]) : txt), builder.map.push(builder.pos, builder.pos + skipped, txt), 
                    builder.col += skipped, builder.pos += skipped;
                }
                if (!m) break;
                if (pos += skipped + 1, "	" == m[0]) {
                    var tabSize = builder.cm.options.tabSize, tabWidth = tabSize - builder.col % tabSize, txt = content.appendChild(elt("span", spaceStr(tabWidth), "cm-tab"));
                    builder.col += tabWidth;
                } else {
                    var txt = builder.cm.options.specialCharPlaceholder(m[0]);
                    content.appendChild(ie && 9 > ie_version ? elt("span", [ txt ]) : txt), builder.col += 1;
                }
                builder.map.push(builder.pos, builder.pos + 1, txt), builder.pos++;
            } else {
                builder.col += text.length;
                var content = document.createTextNode(text);
                builder.map.push(builder.pos, builder.pos + text.length, content), ie && 9 > ie_version && (mustWrap = !0), 
                builder.pos += text.length;
            }
            if (style || startStyle || endStyle || mustWrap) {
                var fullStyle = style || "";
                startStyle && (fullStyle += startStyle), endStyle && (fullStyle += endStyle);
                var token = elt("span", [ content ], fullStyle);
                return title && (token.title = title), builder.content.appendChild(token);
            }
            builder.content.appendChild(content);
        }
    }
    function buildTokenSplitSpaces(inner) {
        function split(old) {
            for (var out = " ", i = 0; i < old.length - 2; ++i) out += i % 2 ? " " : " ";
            return out += " ";
        }
        return function(builder, text, style, startStyle, endStyle, title) {
            inner(builder, text.replace(/ {3,}/g, split), style, startStyle, endStyle, title);
        };
    }
    function buildTokenBadBidi(inner, order) {
        return function(builder, text, style, startStyle, endStyle, title) {
            style = style ? style + " cm-force-border" : "cm-force-border";
            for (var start = builder.pos, end = start + text.length; ;) {
                for (var i = 0; i < order.length; i++) {
                    var part = order[i];
                    if (part.to > start && part.from <= start) break;
                }
                if (part.to >= end) return inner(builder, text, style, startStyle, endStyle, title);
                inner(builder, text.slice(0, part.to - start), style, startStyle, null, title), 
                startStyle = null, text = text.slice(part.to - start), start = part.to;
            }
        };
    }
    function buildCollapsedSpan(builder, size, marker, ignoreWidget) {
        var widget = !ignoreWidget && marker.widgetNode;
        widget && (builder.map.push(builder.pos, builder.pos + size, widget), builder.content.appendChild(widget)), 
        builder.pos += size;
    }
    function insertLineContent(line, builder, styles) {
        var spans = line.markedSpans, allText = line.text, at = 0;
        if (spans) for (var style, spanStyle, spanEndStyle, spanStartStyle, title, collapsed, len = allText.length, pos = 0, i = 1, text = "", nextChange = 0; ;) {
            if (nextChange == pos) {
                spanStyle = spanEndStyle = spanStartStyle = title = "", collapsed = null, nextChange = 1 / 0;
                for (var foundBookmarks = [], j = 0; j < spans.length; ++j) {
                    var sp = spans[j], m = sp.marker;
                    sp.from <= pos && (null == sp.to || sp.to > pos) ? (null != sp.to && nextChange > sp.to && (nextChange = sp.to, 
                    spanEndStyle = ""), m.className && (spanStyle += " " + m.className), m.startStyle && sp.from == pos && (spanStartStyle += " " + m.startStyle), 
                    m.endStyle && sp.to == nextChange && (spanEndStyle += " " + m.endStyle), m.title && !title && (title = m.title), 
                    m.collapsed && (!collapsed || compareCollapsedMarkers(collapsed.marker, m) < 0) && (collapsed = sp)) : sp.from > pos && nextChange > sp.from && (nextChange = sp.from), 
                    "bookmark" == m.type && sp.from == pos && m.widgetNode && foundBookmarks.push(m);
                }
                if (collapsed && (collapsed.from || 0) == pos && (buildCollapsedSpan(builder, (null == collapsed.to ? len + 1 : collapsed.to) - pos, collapsed.marker, null == collapsed.from), 
                null == collapsed.to)) return;
                if (!collapsed && foundBookmarks.length) for (var j = 0; j < foundBookmarks.length; ++j) buildCollapsedSpan(builder, 0, foundBookmarks[j]);
            }
            if (pos >= len) break;
            for (var upto = Math.min(len, nextChange); ;) {
                if (text) {
                    var end = pos + text.length;
                    if (!collapsed) {
                        var tokenText = end > upto ? text.slice(0, upto - pos) : text;
                        builder.addToken(builder, tokenText, style ? style + spanStyle : spanStyle, spanStartStyle, pos + tokenText.length == nextChange ? spanEndStyle : "", title);
                    }
                    if (end >= upto) {
                        text = text.slice(upto - pos), pos = upto;
                        break;
                    }
                    pos = end, spanStartStyle = "";
                }
                text = allText.slice(at, at = styles[i++]), style = interpretTokenStyle(styles[i++], builder.cm.options);
            }
        } else for (var i = 1; i < styles.length; i += 2) builder.addToken(builder, allText.slice(at, at = styles[i]), interpretTokenStyle(styles[i + 1], builder.cm.options));
    }
    function isWholeLineUpdate(doc, change) {
        return 0 == change.from.ch && 0 == change.to.ch && "" == lst(change.text) && (!doc.cm || doc.cm.options.wholeLineUpdateBefore);
    }
    function updateDoc(doc, change, markedSpans, estimateHeight) {
        function spansFor(n) {
            return markedSpans ? markedSpans[n] : null;
        }
        function update(line, text, spans) {
            updateLine(line, text, spans, estimateHeight), signalLater(line, "change", line, change);
        }
        var from = change.from, to = change.to, text = change.text, firstLine = getLine(doc, from.line), lastLine = getLine(doc, to.line), lastText = lst(text), lastSpans = spansFor(text.length - 1), nlines = to.line - from.line;
        if (isWholeLineUpdate(doc, change)) {
            for (var i = 0, added = []; i < text.length - 1; ++i) added.push(new Line(text[i], spansFor(i), estimateHeight));
            update(lastLine, lastLine.text, lastSpans), nlines && doc.remove(from.line, nlines), 
            added.length && doc.insert(from.line, added);
        } else if (firstLine == lastLine) if (1 == text.length) update(firstLine, firstLine.text.slice(0, from.ch) + lastText + firstLine.text.slice(to.ch), lastSpans); else {
            for (var added = [], i = 1; i < text.length - 1; ++i) added.push(new Line(text[i], spansFor(i), estimateHeight));
            added.push(new Line(lastText + firstLine.text.slice(to.ch), lastSpans, estimateHeight)), 
            update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0)), doc.insert(from.line + 1, added);
        } else if (1 == text.length) update(firstLine, firstLine.text.slice(0, from.ch) + text[0] + lastLine.text.slice(to.ch), spansFor(0)), 
        doc.remove(from.line + 1, nlines); else {
            update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0)), update(lastLine, lastText + lastLine.text.slice(to.ch), lastSpans);
            for (var i = 1, added = []; i < text.length - 1; ++i) added.push(new Line(text[i], spansFor(i), estimateHeight));
            nlines > 1 && doc.remove(from.line + 1, nlines - 1), doc.insert(from.line + 1, added);
        }
        signalLater(doc, "change", doc, change);
    }
    function LeafChunk(lines) {
        this.lines = lines, this.parent = null;
        for (var i = 0, height = 0; i < lines.length; ++i) lines[i].parent = this, height += lines[i].height;
        this.height = height;
    }
    function BranchChunk(children) {
        this.children = children;
        for (var size = 0, height = 0, i = 0; i < children.length; ++i) {
            var ch = children[i];
            size += ch.chunkSize(), height += ch.height, ch.parent = this;
        }
        this.size = size, this.height = height, this.parent = null;
    }
    function linkedDocs(doc, f, sharedHistOnly) {
        function propagate(doc, skip, sharedHist) {
            if (doc.linked) for (var i = 0; i < doc.linked.length; ++i) {
                var rel = doc.linked[i];
                if (rel.doc != skip) {
                    var shared = sharedHist && rel.sharedHist;
                    (!sharedHistOnly || shared) && (f(rel.doc, shared), propagate(rel.doc, doc, shared));
                }
            }
        }
        propagate(doc, null, !0);
    }
    function attachDoc(cm, doc) {
        if (doc.cm) throw new Error("This document is already in use.");
        cm.doc = doc, doc.cm = cm, estimateLineHeights(cm), loadMode(cm), cm.options.lineWrapping || findMaxLine(cm), 
        cm.options.mode = doc.modeOption, regChange(cm);
    }
    function getLine(doc, n) {
        if (n -= doc.first, 0 > n || n >= doc.size) throw new Error("There is no line " + (n + doc.first) + " in the document.");
        for (var chunk = doc; !chunk.lines; ) for (var i = 0; ;++i) {
            var child = chunk.children[i], sz = child.chunkSize();
            if (sz > n) {
                chunk = child;
                break;
            }
            n -= sz;
        }
        return chunk.lines[n];
    }
    function getBetween(doc, start, end) {
        var out = [], n = start.line;
        return doc.iter(start.line, end.line + 1, function(line) {
            var text = line.text;
            n == end.line && (text = text.slice(0, end.ch)), n == start.line && (text = text.slice(start.ch)), 
            out.push(text), ++n;
        }), out;
    }
    function getLines(doc, from, to) {
        var out = [];
        return doc.iter(from, to, function(line) {
            out.push(line.text);
        }), out;
    }
    function updateLineHeight(line, height) {
        var diff = height - line.height;
        if (diff) for (var n = line; n; n = n.parent) n.height += diff;
    }
    function lineNo(line) {
        if (null == line.parent) return null;
        for (var cur = line.parent, no = indexOf(cur.lines, line), chunk = cur.parent; chunk; cur = chunk, 
        chunk = chunk.parent) for (var i = 0; chunk.children[i] != cur; ++i) no += chunk.children[i].chunkSize();
        return no + cur.first;
    }
    function lineAtHeight(chunk, h) {
        var n = chunk.first;
        outer: do {
            for (var i = 0; i < chunk.children.length; ++i) {
                var child = chunk.children[i], ch = child.height;
                if (ch > h) {
                    chunk = child;
                    continue outer;
                }
                h -= ch, n += child.chunkSize();
            }
            return n;
        } while (!chunk.lines);
        for (var i = 0; i < chunk.lines.length; ++i) {
            var line = chunk.lines[i], lh = line.height;
            if (lh > h) break;
            h -= lh;
        }
        return n + i;
    }
    function heightAtLine(lineObj) {
        lineObj = visualLine(lineObj);
        for (var h = 0, chunk = lineObj.parent, i = 0; i < chunk.lines.length; ++i) {
            var line = chunk.lines[i];
            if (line == lineObj) break;
            h += line.height;
        }
        for (var p = chunk.parent; p; chunk = p, p = chunk.parent) for (var i = 0; i < p.children.length; ++i) {
            var cur = p.children[i];
            if (cur == chunk) break;
            h += cur.height;
        }
        return h;
    }
    function getOrder(line) {
        var order = line.order;
        return null == order && (order = line.order = bidiOrdering(line.text)), order;
    }
    function History(startGen) {
        this.done = [], this.undone = [], this.undoDepth = 1 / 0, this.lastModTime = this.lastSelTime = 0, 
        this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, 
        this.generation = this.maxGeneration = startGen || 1;
    }
    function historyChangeFromChange(doc, change) {
        var histChange = {
            from: copyPos(change.from),
            to: changeEnd(change),
            text: getBetween(doc, change.from, change.to)
        };
        return attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1), 
        linkedDocs(doc, function(doc) {
            attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);
        }, !0), histChange;
    }
    function clearSelectionEvents(array) {
        for (;array.length; ) {
            var last = lst(array);
            if (!last.ranges) break;
            array.pop();
        }
    }
    function lastChangeEvent(hist, force) {
        return force ? (clearSelectionEvents(hist.done), lst(hist.done)) : hist.done.length && !lst(hist.done).ranges ? lst(hist.done) : hist.done.length > 1 && !hist.done[hist.done.length - 2].ranges ? (hist.done.pop(), 
        lst(hist.done)) : void 0;
    }
    function addChangeToHistory(doc, change, selAfter, opId) {
        var hist = doc.history;
        hist.undone.length = 0;
        var cur, time = +new Date();
        if ((hist.lastOp == opId || hist.lastOrigin == change.origin && change.origin && ("+" == change.origin.charAt(0) && doc.cm && hist.lastModTime > time - doc.cm.options.historyEventDelay || "*" == change.origin.charAt(0))) && (cur = lastChangeEvent(hist, hist.lastOp == opId))) {
            var last = lst(cur.changes);
            0 == cmp(change.from, change.to) && 0 == cmp(change.from, last.to) ? last.to = changeEnd(change) : cur.changes.push(historyChangeFromChange(doc, change));
        } else {
            var before = lst(hist.done);
            for (before && before.ranges || pushSelectionToHistory(doc.sel, hist.done), cur = {
                changes: [ historyChangeFromChange(doc, change) ],
                generation: hist.generation
            }, hist.done.push(cur); hist.done.length > hist.undoDepth; ) hist.done.shift(), 
            hist.done[0].ranges || hist.done.shift();
        }
        hist.done.push(selAfter), hist.generation = ++hist.maxGeneration, hist.lastModTime = hist.lastSelTime = time, 
        hist.lastOp = hist.lastSelOp = opId, hist.lastOrigin = hist.lastSelOrigin = change.origin, 
        last || signal(doc, "historyAdded");
    }
    function selectionEventCanBeMerged(doc, origin, prev, sel) {
        var ch = origin.charAt(0);
        return "*" == ch || "+" == ch && prev.ranges.length == sel.ranges.length && prev.somethingSelected() == sel.somethingSelected() && new Date() - doc.history.lastSelTime <= (doc.cm ? doc.cm.options.historyEventDelay : 500);
    }
    function addSelectionToHistory(doc, sel, opId, options) {
        var hist = doc.history, origin = options && options.origin;
        opId == hist.lastSelOp || origin && hist.lastSelOrigin == origin && (hist.lastModTime == hist.lastSelTime && hist.lastOrigin == origin || selectionEventCanBeMerged(doc, origin, lst(hist.done), sel)) ? hist.done[hist.done.length - 1] = sel : pushSelectionToHistory(sel, hist.done), 
        hist.lastSelTime = +new Date(), hist.lastSelOrigin = origin, hist.lastSelOp = opId, 
        options && options.clearRedo !== !1 && clearSelectionEvents(hist.undone);
    }
    function pushSelectionToHistory(sel, dest) {
        var top = lst(dest);
        top && top.ranges && top.equals(sel) || dest.push(sel);
    }
    function attachLocalSpans(doc, change, from, to) {
        var existing = change["spans_" + doc.id], n = 0;
        doc.iter(Math.max(doc.first, from), Math.min(doc.first + doc.size, to), function(line) {
            line.markedSpans && ((existing || (existing = change["spans_" + doc.id] = {}))[n] = line.markedSpans), 
            ++n;
        });
    }
    function removeClearedSpans(spans) {
        if (!spans) return null;
        for (var out, i = 0; i < spans.length; ++i) spans[i].marker.explicitlyCleared ? out || (out = spans.slice(0, i)) : out && out.push(spans[i]);
        return out ? out.length ? out : null : spans;
    }
    function getOldSpans(doc, change) {
        var found = change["spans_" + doc.id];
        if (!found) return null;
        for (var i = 0, nw = []; i < change.text.length; ++i) nw.push(removeClearedSpans(found[i]));
        return nw;
    }
    function copyHistoryArray(events, newGroup, instantiateSel) {
        for (var i = 0, copy = []; i < events.length; ++i) {
            var event = events[i];
            if (event.ranges) copy.push(instantiateSel ? Selection.prototype.deepCopy.call(event) : event); else {
                var changes = event.changes, newChanges = [];
                copy.push({
                    changes: newChanges
                });
                for (var j = 0; j < changes.length; ++j) {
                    var m, change = changes[j];
                    if (newChanges.push({
                        from: change.from,
                        to: change.to,
                        text: change.text
                    }), newGroup) for (var prop in change) (m = prop.match(/^spans_(\d+)$/)) && indexOf(newGroup, Number(m[1])) > -1 && (lst(newChanges)[prop] = change[prop], 
                    delete change[prop]);
                }
            }
        }
        return copy;
    }
    function rebaseHistSelSingle(pos, from, to, diff) {
        to < pos.line ? pos.line += diff : from < pos.line && (pos.line = from, pos.ch = 0);
    }
    function rebaseHistArray(array, from, to, diff) {
        for (var i = 0; i < array.length; ++i) {
            var sub = array[i], ok = !0;
            if (sub.ranges) {
                sub.copied || (sub = array[i] = sub.deepCopy(), sub.copied = !0);
                for (var j = 0; j < sub.ranges.length; j++) rebaseHistSelSingle(sub.ranges[j].anchor, from, to, diff), 
                rebaseHistSelSingle(sub.ranges[j].head, from, to, diff);
            } else {
                for (var j = 0; j < sub.changes.length; ++j) {
                    var cur = sub.changes[j];
                    if (to < cur.from.line) cur.from = Pos(cur.from.line + diff, cur.from.ch), cur.to = Pos(cur.to.line + diff, cur.to.ch); else if (from <= cur.to.line) {
                        ok = !1;
                        break;
                    }
                }
                ok || (array.splice(0, i + 1), i = 0);
            }
        }
    }
    function rebaseHist(hist, change) {
        var from = change.from.line, to = change.to.line, diff = change.text.length - (to - from) - 1;
        rebaseHistArray(hist.done, from, to, diff), rebaseHistArray(hist.undone, from, to, diff);
    }
    function e_defaultPrevented(e) {
        return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue;
    }
    function e_target(e) {
        return e.target || e.srcElement;
    }
    function e_button(e) {
        var b = e.which;
        return null == b && (1 & e.button ? b = 1 : 2 & e.button ? b = 3 : 4 & e.button && (b = 2)), 
        mac && e.ctrlKey && 1 == b && (b = 3), b;
    }
    function signalLater(emitter, type) {
        function bnd(f) {
            return function() {
                f.apply(null, args);
            };
        }
        var arr = emitter._handlers && emitter._handlers[type];
        if (arr) {
            var list, args = Array.prototype.slice.call(arguments, 2);
            operationGroup ? list = operationGroup.delayedCallbacks : orphanDelayedCallbacks ? list = orphanDelayedCallbacks : (list = orphanDelayedCallbacks = [], 
            setTimeout(fireOrphanDelayed, 0));
            for (var i = 0; i < arr.length; ++i) list.push(bnd(arr[i]));
        }
    }
    function fireOrphanDelayed() {
        var delayed = orphanDelayedCallbacks;
        orphanDelayedCallbacks = null;
        for (var i = 0; i < delayed.length; ++i) delayed[i]();
    }
    function signalDOMEvent(cm, e, override) {
        return signal(cm, override || e.type, cm, e), e_defaultPrevented(e) || e.codemirrorIgnore;
    }
    function signalCursorActivity(cm) {
        var arr = cm._handlers && cm._handlers.cursorActivity;
        if (arr) for (var set = cm.curOp.cursorActivityHandlers || (cm.curOp.cursorActivityHandlers = []), i = 0; i < arr.length; ++i) -1 == indexOf(set, arr[i]) && set.push(arr[i]);
    }
    function hasHandler(emitter, type) {
        var arr = emitter._handlers && emitter._handlers[type];
        return arr && arr.length > 0;
    }
    function eventMixin(ctor) {
        ctor.prototype.on = function(type, f) {
            on(this, type, f);
        }, ctor.prototype.off = function(type, f) {
            off(this, type, f);
        };
    }
    function Delayed() {
        this.id = null;
    }
    function findColumn(string, goal, tabSize) {
        for (var pos = 0, col = 0; ;) {
            var nextTab = string.indexOf("	", pos);
            -1 == nextTab && (nextTab = string.length);
            var skipped = nextTab - pos;
            if (nextTab == string.length || col + skipped >= goal) return pos + Math.min(skipped, goal - col);
            if (col += nextTab - pos, col += tabSize - col % tabSize, pos = nextTab + 1, col >= goal) return pos;
        }
    }
    function spaceStr(n) {
        for (;spaceStrs.length <= n; ) spaceStrs.push(lst(spaceStrs) + " ");
        return spaceStrs[n];
    }
    function lst(arr) {
        return arr[arr.length - 1];
    }
    function indexOf(array, elt) {
        for (var i = 0; i < array.length; ++i) if (array[i] == elt) return i;
        return -1;
    }
    function map(array, f) {
        for (var out = [], i = 0; i < array.length; i++) out[i] = f(array[i], i);
        return out;
    }
    function createObj(base, props) {
        var inst;
        if (Object.create) inst = Object.create(base); else {
            var ctor = function() {};
            ctor.prototype = base, inst = new ctor();
        }
        return props && copyObj(props, inst), inst;
    }
    function copyObj(obj, target, overwrite) {
        target || (target = {});
        for (var prop in obj) !obj.hasOwnProperty(prop) || overwrite === !1 && target.hasOwnProperty(prop) || (target[prop] = obj[prop]);
        return target;
    }
    function bind(f) {
        var args = Array.prototype.slice.call(arguments, 1);
        return function() {
            return f.apply(null, args);
        };
    }
    function isWordChar(ch, helper) {
        return helper ? helper.source.indexOf("\\w") > -1 && isWordCharBasic(ch) ? !0 : helper.test(ch) : isWordCharBasic(ch);
    }
    function isEmpty(obj) {
        for (var n in obj) if (obj.hasOwnProperty(n) && obj[n]) return !1;
        return !0;
    }
    function isExtendingChar(ch) {
        return ch.charCodeAt(0) >= 768 && extendingChars.test(ch);
    }
    function elt(tag, content, className, style) {
        var e = document.createElement(tag);
        if (className && (e.className = className), style && (e.style.cssText = style), 
        "string" == typeof content) e.appendChild(document.createTextNode(content)); else if (content) for (var i = 0; i < content.length; ++i) e.appendChild(content[i]);
        return e;
    }
    function removeChildren(e) {
        for (var count = e.childNodes.length; count > 0; --count) e.removeChild(e.firstChild);
        return e;
    }
    function removeChildrenAndAdd(parent, e) {
        return removeChildren(parent).appendChild(e);
    }
    function contains(parent, child) {
        if (parent.contains) return parent.contains(child);
        for (;child = child.parentNode; ) if (child == parent) return !0;
    }
    function activeElt() {
        return document.activeElement;
    }
    function classTest(cls) {
        return new RegExp("\\b" + cls + "\\b\\s*");
    }
    function rmClass(node, cls) {
        var test = classTest(cls);
        test.test(node.className) && (node.className = node.className.replace(test, ""));
    }
    function addClass(node, cls) {
        classTest(cls).test(node.className) || (node.className += " " + cls);
    }
    function joinClasses(a, b) {
        for (var as = a.split(" "), i = 0; i < as.length; i++) as[i] && !classTest(as[i]).test(b) && (b += " " + as[i]);
        return b;
    }
    function forEachCodeMirror(f) {
        if (document.body.getElementsByClassName) for (var byClass = document.body.getElementsByClassName("CodeMirror"), i = 0; i < byClass.length; i++) {
            var cm = byClass[i].CodeMirror;
            cm && f(cm);
        }
    }
    function ensureGlobalHandlers() {
        globalsRegistered || (registerGlobalHandlers(), globalsRegistered = !0);
    }
    function registerGlobalHandlers() {
        var resizeTimer;
        on(window, "resize", function() {
            null == resizeTimer && (resizeTimer = setTimeout(function() {
                resizeTimer = null, knownScrollbarWidth = null, forEachCodeMirror(onResize);
            }, 100));
        }), on(window, "blur", function() {
            forEachCodeMirror(onBlur);
        });
    }
    function scrollbarWidth(measure) {
        if (null != knownScrollbarWidth) return knownScrollbarWidth;
        var test = elt("div", null, null, "width: 50px; height: 50px; overflow-x: scroll");
        return removeChildrenAndAdd(measure, test), test.offsetWidth && (knownScrollbarWidth = test.offsetHeight - test.clientHeight), 
        knownScrollbarWidth || 0;
    }
    function zeroWidthElement(measure) {
        if (null == zwspSupported) {
            var test = elt("span", "​");
            removeChildrenAndAdd(measure, elt("span", [ test, document.createTextNode("x") ])), 
            0 != measure.firstChild.offsetHeight && (zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !(ie && 8 > ie_version));
        }
        return zwspSupported ? elt("span", "​") : elt("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
    }
    function hasBadBidiRects(measure) {
        if (null != badBidiRects) return badBidiRects;
        var txt = removeChildrenAndAdd(measure, document.createTextNode("AخA")), r0 = range(txt, 0, 1).getBoundingClientRect();
        if (!r0 || r0.left == r0.right) return !1;
        var r1 = range(txt, 1, 2).getBoundingClientRect();
        return badBidiRects = r1.right - r0.right < 3;
    }
    function hasBadZoomedRects(measure) {
        if (null != badZoomedRects) return badZoomedRects;
        var node = removeChildrenAndAdd(measure, elt("span", "x")), normal = node.getBoundingClientRect(), fromRange = range(node, 0, 1).getBoundingClientRect();
        return badZoomedRects = Math.abs(normal.left - fromRange.left) > 1;
    }
    function iterateBidiSections(order, from, to, f) {
        if (!order) return f(from, to, "ltr");
        for (var found = !1, i = 0; i < order.length; ++i) {
            var part = order[i];
            (part.from < to && part.to > from || from == to && part.to == from) && (f(Math.max(part.from, from), Math.min(part.to, to), 1 == part.level ? "rtl" : "ltr"), 
            found = !0);
        }
        found || f(from, to, "ltr");
    }
    function bidiLeft(part) {
        return part.level % 2 ? part.to : part.from;
    }
    function bidiRight(part) {
        return part.level % 2 ? part.from : part.to;
    }
    function lineLeft(line) {
        var order = getOrder(line);
        return order ? bidiLeft(order[0]) : 0;
    }
    function lineRight(line) {
        var order = getOrder(line);
        return order ? bidiRight(lst(order)) : line.text.length;
    }
    function lineStart(cm, lineN) {
        var line = getLine(cm.doc, lineN), visual = visualLine(line);
        visual != line && (lineN = lineNo(visual));
        var order = getOrder(visual), ch = order ? order[0].level % 2 ? lineRight(visual) : lineLeft(visual) : 0;
        return Pos(lineN, ch);
    }
    function lineEnd(cm, lineN) {
        for (var merged, line = getLine(cm.doc, lineN); merged = collapsedSpanAtEnd(line); ) line = merged.find(1, !0).line, 
        lineN = null;
        var order = getOrder(line), ch = order ? order[0].level % 2 ? lineLeft(line) : lineRight(line) : line.text.length;
        return Pos(null == lineN ? lineNo(line) : lineN, ch);
    }
    function lineStartSmart(cm, pos) {
        var start = lineStart(cm, pos.line), line = getLine(cm.doc, start.line), order = getOrder(line);
        if (!order || 0 == order[0].level) {
            var firstNonWS = Math.max(0, line.text.search(/\S/)), inWS = pos.line == start.line && pos.ch <= firstNonWS && pos.ch;
            return Pos(start.line, inWS ? 0 : firstNonWS);
        }
        return start;
    }
    function compareBidiLevel(order, a, b) {
        var linedir = order[0].level;
        return a == linedir ? !0 : b == linedir ? !1 : b > a;
    }
    function getBidiPartAt(order, pos) {
        bidiOther = null;
        for (var found, i = 0; i < order.length; ++i) {
            var cur = order[i];
            if (cur.from < pos && cur.to > pos) return i;
            if (cur.from == pos || cur.to == pos) {
                if (null != found) return compareBidiLevel(order, cur.level, order[found].level) ? (cur.from != cur.to && (bidiOther = found), 
                i) : (cur.from != cur.to && (bidiOther = i), found);
                found = i;
            }
        }
        return found;
    }
    function moveInLine(line, pos, dir, byUnit) {
        if (!byUnit) return pos + dir;
        do pos += dir; while (pos > 0 && isExtendingChar(line.text.charAt(pos)));
        return pos;
    }
    function moveVisually(line, start, dir, byUnit) {
        var bidi = getOrder(line);
        if (!bidi) return moveLogically(line, start, dir, byUnit);
        for (var pos = getBidiPartAt(bidi, start), part = bidi[pos], target = moveInLine(line, start, part.level % 2 ? -dir : dir, byUnit); ;) {
            if (target > part.from && target < part.to) return target;
            if (target == part.from || target == part.to) return getBidiPartAt(bidi, target) == pos ? target : (part = bidi[pos += dir], 
            dir > 0 == part.level % 2 ? part.to : part.from);
            if (part = bidi[pos += dir], !part) return null;
            target = dir > 0 == part.level % 2 ? moveInLine(line, part.to, -1, byUnit) : moveInLine(line, part.from, 1, byUnit);
        }
    }
    function moveLogically(line, start, dir, byUnit) {
        var target = start + dir;
        if (byUnit) for (;target > 0 && isExtendingChar(line.text.charAt(target)); ) target += dir;
        return 0 > target || target > line.text.length ? null : target;
    }
    var gecko = /gecko\/\d/i.test(navigator.userAgent), ie_upto10 = /MSIE \d/.test(navigator.userAgent), ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), ie = ie_upto10 || ie_11up, ie_version = ie && (ie_upto10 ? document.documentMode || 6 : ie_11up[1]), webkit = /WebKit\//.test(navigator.userAgent), qtwebkit = webkit && /Qt\/\d+\.\d+/.test(navigator.userAgent), chrome = /Chrome\//.test(navigator.userAgent), presto = /Opera\//.test(navigator.userAgent), safari = /Apple Computer/.test(navigator.vendor), khtml = /KHTML\//.test(navigator.userAgent), mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(navigator.userAgent), phantom = /PhantomJS/.test(navigator.userAgent), ios = /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent), mobile = ios || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(navigator.userAgent), mac = ios || /Mac/.test(navigator.platform), windows = /win/i.test(navigator.platform), presto_version = presto && navigator.userAgent.match(/Version\/(\d*\.\d*)/);
    presto_version && (presto_version = Number(presto_version[1])), presto_version && presto_version >= 15 && (presto = !1, 
    webkit = !0);
    var flipCtrlCmd = mac && (qtwebkit || presto && (null == presto_version || 12.11 > presto_version)), captureRightClick = gecko || ie && ie_version >= 9, sawReadOnlySpans = !1, sawCollapsedSpans = !1, Pos = CodeMirror.Pos = function(line, ch) {
        return this instanceof Pos ? (this.line = line, void (this.ch = ch)) : new Pos(line, ch);
    }, cmp = CodeMirror.cmpPos = function(a, b) {
        return a.line - b.line || a.ch - b.ch;
    };
    Selection.prototype = {
        primary: function() {
            return this.ranges[this.primIndex];
        },
        equals: function(other) {
            if (other == this) return !0;
            if (other.primIndex != this.primIndex || other.ranges.length != this.ranges.length) return !1;
            for (var i = 0; i < this.ranges.length; i++) {
                var here = this.ranges[i], there = other.ranges[i];
                if (0 != cmp(here.anchor, there.anchor) || 0 != cmp(here.head, there.head)) return !1;
            }
            return !0;
        },
        deepCopy: function() {
            for (var out = [], i = 0; i < this.ranges.length; i++) out[i] = new Range(copyPos(this.ranges[i].anchor), copyPos(this.ranges[i].head));
            return new Selection(out, this.primIndex);
        },
        somethingSelected: function() {
            for (var i = 0; i < this.ranges.length; i++) if (!this.ranges[i].empty()) return !0;
            return !1;
        },
        contains: function(pos, end) {
            end || (end = pos);
            for (var i = 0; i < this.ranges.length; i++) {
                var range = this.ranges[i];
                if (cmp(end, range.from()) >= 0 && cmp(pos, range.to()) <= 0) return i;
            }
            return -1;
        }
    }, Range.prototype = {
        from: function() {
            return minPos(this.anchor, this.head);
        },
        to: function() {
            return maxPos(this.anchor, this.head);
        },
        empty: function() {
            return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
        }
    };
    var measureText, lastClick, lastDoubleClick, nullRect = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }, operationGroup = null, nextOpId = 0, lastCopied = null, lastDrop = 0, wheelSamples = 0, wheelPixelsPerUnit = null;
    ie ? wheelPixelsPerUnit = -.53 : gecko ? wheelPixelsPerUnit = 15 : chrome ? wheelPixelsPerUnit = -.7 : safari && (wheelPixelsPerUnit = -1 / 3);
    var maybeTransition, lastStoppedKey = null, changeEnd = CodeMirror.changeEnd = function(change) {
        return change.text ? Pos(change.from.line + change.text.length - 1, lst(change.text).length + (1 == change.text.length ? change.from.ch : 0)) : change.to;
    };
    CodeMirror.prototype = {
        constructor: CodeMirror,
        focus: function() {
            window.focus(), focusInput(this), fastPoll(this);
        },
        setOption: function(option, value) {
            var options = this.options, old = options[option];
            (options[option] != value || "mode" == option) && (options[option] = value, optionHandlers.hasOwnProperty(option) && operation(this, optionHandlers[option])(this, value, old));
        },
        getOption: function(option) {
            return this.options[option];
        },
        getDoc: function() {
            return this.doc;
        },
        addKeyMap: function(map, bottom) {
            this.state.keyMaps[bottom ? "push" : "unshift"](map);
        },
        removeKeyMap: function(map) {
            for (var maps = this.state.keyMaps, i = 0; i < maps.length; ++i) if (maps[i] == map || "string" != typeof maps[i] && maps[i].name == map) return maps.splice(i, 1), 
            !0;
        },
        addOverlay: methodOp(function(spec, options) {
            var mode = spec.token ? spec : CodeMirror.getMode(this.options, spec);
            if (mode.startState) throw new Error("Overlays may not be stateful.");
            this.state.overlays.push({
                mode: mode,
                modeSpec: spec,
                opaque: options && options.opaque
            }), this.state.modeGen++, regChange(this);
        }),
        removeOverlay: methodOp(function(spec) {
            for (var overlays = this.state.overlays, i = 0; i < overlays.length; ++i) {
                var cur = overlays[i].modeSpec;
                if (cur == spec || "string" == typeof spec && cur.name == spec) return overlays.splice(i, 1), 
                this.state.modeGen++, void regChange(this);
            }
        }),
        indentLine: methodOp(function(n, dir, aggressive) {
            "string" != typeof dir && "number" != typeof dir && (dir = null == dir ? this.options.smartIndent ? "smart" : "prev" : dir ? "add" : "subtract"), 
            isLine(this.doc, n) && indentLine(this, n, dir, aggressive);
        }),
        indentSelection: methodOp(function(how) {
            for (var ranges = this.doc.sel.ranges, end = -1, i = 0; i < ranges.length; i++) {
                var range = ranges[i];
                if (range.empty()) range.head.line > end && (indentLine(this, range.head.line, how, !0), 
                end = range.head.line, i == this.doc.sel.primIndex && ensureCursorVisible(this)); else {
                    var from = range.from(), to = range.to(), start = Math.max(end, from.line);
                    end = Math.min(this.lastLine(), to.line - (to.ch ? 0 : 1)) + 1;
                    for (var j = start; end > j; ++j) indentLine(this, j, how);
                    var newRanges = this.doc.sel.ranges;
                    0 == from.ch && ranges.length == newRanges.length && newRanges[i].from().ch > 0 && replaceOneSelection(this.doc, i, new Range(from, newRanges[i].to()), sel_dontScroll);
                }
            }
        }),
        getTokenAt: function(pos, precise) {
            var doc = this.doc;
            pos = clipPos(doc, pos);
            for (var state = getStateBefore(this, pos.line, precise), mode = this.doc.mode, line = getLine(doc, pos.line), stream = new StringStream(line.text, this.options.tabSize); stream.pos < pos.ch && !stream.eol(); ) {
                stream.start = stream.pos;
                var style = readToken(mode, stream, state);
            }
            return {
                start: stream.start,
                end: stream.pos,
                string: stream.current(),
                type: style || null,
                state: state
            };
        },
        getTokenTypeAt: function(pos) {
            pos = clipPos(this.doc, pos);
            var type, styles = getLineStyles(this, getLine(this.doc, pos.line)), before = 0, after = (styles.length - 1) / 2, ch = pos.ch;
            if (0 == ch) type = styles[2]; else for (;;) {
                var mid = before + after >> 1;
                if ((mid ? styles[2 * mid - 1] : 0) >= ch) after = mid; else {
                    if (!(styles[2 * mid + 1] < ch)) {
                        type = styles[2 * mid + 2];
                        break;
                    }
                    before = mid + 1;
                }
            }
            var cut = type ? type.indexOf("cm-overlay ") : -1;
            return 0 > cut ? type : 0 == cut ? null : type.slice(0, cut - 1);
        },
        getModeAt: function(pos) {
            var mode = this.doc.mode;
            return mode.innerMode ? CodeMirror.innerMode(mode, this.getTokenAt(pos).state).mode : mode;
        },
        getHelper: function(pos, type) {
            return this.getHelpers(pos, type)[0];
        },
        getHelpers: function(pos, type) {
            var found = [];
            if (!helpers.hasOwnProperty(type)) return helpers;
            var help = helpers[type], mode = this.getModeAt(pos);
            if ("string" == typeof mode[type]) help[mode[type]] && found.push(help[mode[type]]); else if (mode[type]) for (var i = 0; i < mode[type].length; i++) {
                var val = help[mode[type][i]];
                val && found.push(val);
            } else mode.helperType && help[mode.helperType] ? found.push(help[mode.helperType]) : help[mode.name] && found.push(help[mode.name]);
            for (var i = 0; i < help._global.length; i++) {
                var cur = help._global[i];
                cur.pred(mode, this) && -1 == indexOf(found, cur.val) && found.push(cur.val);
            }
            return found;
        },
        getStateAfter: function(line, precise) {
            var doc = this.doc;
            return line = clipLine(doc, null == line ? doc.first + doc.size - 1 : line), getStateBefore(this, line + 1, precise);
        },
        cursorCoords: function(start, mode) {
            var pos, range = this.doc.sel.primary();
            return pos = null == start ? range.head : "object" == typeof start ? clipPos(this.doc, start) : start ? range.from() : range.to(), 
            cursorCoords(this, pos, mode || "page");
        },
        charCoords: function(pos, mode) {
            return charCoords(this, clipPos(this.doc, pos), mode || "page");
        },
        coordsChar: function(coords, mode) {
            return coords = fromCoordSystem(this, coords, mode || "page"), coordsChar(this, coords.left, coords.top);
        },
        lineAtHeight: function(height, mode) {
            return height = fromCoordSystem(this, {
                top: height,
                left: 0
            }, mode || "page").top, lineAtHeight(this.doc, height + this.display.viewOffset);
        },
        heightAtLine: function(line, mode) {
            var end = !1, last = this.doc.first + this.doc.size - 1;
            line < this.doc.first ? line = this.doc.first : line > last && (line = last, end = !0);
            var lineObj = getLine(this.doc, line);
            return intoCoordSystem(this, lineObj, {
                top: 0,
                left: 0
            }, mode || "page").top + (end ? this.doc.height - heightAtLine(lineObj) : 0);
        },
        defaultTextHeight: function() {
            return textHeight(this.display);
        },
        defaultCharWidth: function() {
            return charWidth(this.display);
        },
        setGutterMarker: methodOp(function(line, gutterID, value) {
            return changeLine(this.doc, line, "gutter", function(line) {
                var markers = line.gutterMarkers || (line.gutterMarkers = {});
                return markers[gutterID] = value, !value && isEmpty(markers) && (line.gutterMarkers = null), 
                !0;
            });
        }),
        clearGutter: methodOp(function(gutterID) {
            var cm = this, doc = cm.doc, i = doc.first;
            doc.iter(function(line) {
                line.gutterMarkers && line.gutterMarkers[gutterID] && (line.gutterMarkers[gutterID] = null, 
                regLineChange(cm, i, "gutter"), isEmpty(line.gutterMarkers) && (line.gutterMarkers = null)), 
                ++i;
            });
        }),
        addLineWidget: methodOp(function(handle, node, options) {
            return addLineWidget(this, handle, node, options);
        }),
        removeLineWidget: function(widget) {
            widget.clear();
        },
        lineInfo: function(line) {
            if ("number" == typeof line) {
                if (!isLine(this.doc, line)) return null;
                var n = line;
                if (line = getLine(this.doc, line), !line) return null;
            } else {
                var n = lineNo(line);
                if (null == n) return null;
            }
            return {
                line: n,
                handle: line,
                text: line.text,
                gutterMarkers: line.gutterMarkers,
                textClass: line.textClass,
                bgClass: line.bgClass,
                wrapClass: line.wrapClass,
                widgets: line.widgets
            };
        },
        getViewport: function() {
            return {
                from: this.display.viewFrom,
                to: this.display.viewTo
            };
        },
        addWidget: function(pos, node, scroll, vert, horiz) {
            var display = this.display;
            pos = cursorCoords(this, clipPos(this.doc, pos));
            var top = pos.bottom, left = pos.left;
            if (node.style.position = "absolute", display.sizer.appendChild(node), "over" == vert) top = pos.top; else if ("above" == vert || "near" == vert) {
                var vspace = Math.max(display.wrapper.clientHeight, this.doc.height), hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth);
                ("above" == vert || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight ? top = pos.top - node.offsetHeight : pos.bottom + node.offsetHeight <= vspace && (top = pos.bottom), 
                left + node.offsetWidth > hspace && (left = hspace - node.offsetWidth);
            }
            node.style.top = top + "px", node.style.left = node.style.right = "", "right" == horiz ? (left = display.sizer.clientWidth - node.offsetWidth, 
            node.style.right = "0px") : ("left" == horiz ? left = 0 : "middle" == horiz && (left = (display.sizer.clientWidth - node.offsetWidth) / 2), 
            node.style.left = left + "px"), scroll && scrollIntoView(this, left, top, left + node.offsetWidth, top + node.offsetHeight);
        },
        triggerOnKeyDown: methodOp(onKeyDown),
        triggerOnKeyPress: methodOp(onKeyPress),
        triggerOnKeyUp: onKeyUp,
        execCommand: function(cmd) {
            return commands.hasOwnProperty(cmd) ? commands[cmd](this) : void 0;
        },
        findPosH: function(from, amount, unit, visually) {
            var dir = 1;
            0 > amount && (dir = -1, amount = -amount);
            for (var i = 0, cur = clipPos(this.doc, from); amount > i && (cur = findPosH(this.doc, cur, dir, unit, visually), 
            !cur.hitSide); ++i) ;
            return cur;
        },
        moveH: methodOp(function(dir, unit) {
            var cm = this;
            cm.extendSelectionsBy(function(range) {
                return cm.display.shift || cm.doc.extend || range.empty() ? findPosH(cm.doc, range.head, dir, unit, cm.options.rtlMoveVisually) : 0 > dir ? range.from() : range.to();
            }, sel_move);
        }),
        deleteH: methodOp(function(dir, unit) {
            var sel = this.doc.sel, doc = this.doc;
            sel.somethingSelected() ? doc.replaceSelection("", null, "+delete") : deleteNearSelection(this, function(range) {
                var other = findPosH(doc, range.head, dir, unit, !1);
                return 0 > dir ? {
                    from: other,
                    to: range.head
                } : {
                    from: range.head,
                    to: other
                };
            });
        }),
        findPosV: function(from, amount, unit, goalColumn) {
            var dir = 1, x = goalColumn;
            0 > amount && (dir = -1, amount = -amount);
            for (var i = 0, cur = clipPos(this.doc, from); amount > i; ++i) {
                var coords = cursorCoords(this, cur, "div");
                if (null == x ? x = coords.left : coords.left = x, cur = findPosV(this, coords, dir, unit), 
                cur.hitSide) break;
            }
            return cur;
        },
        moveV: methodOp(function(dir, unit) {
            var cm = this, doc = this.doc, goals = [], collapse = !cm.display.shift && !doc.extend && doc.sel.somethingSelected();
            if (doc.extendSelectionsBy(function(range) {
                if (collapse) return 0 > dir ? range.from() : range.to();
                var headPos = cursorCoords(cm, range.head, "div");
                null != range.goalColumn && (headPos.left = range.goalColumn), goals.push(headPos.left);
                var pos = findPosV(cm, headPos, dir, unit);
                return "page" == unit && range == doc.sel.primary() && addToScrollPos(cm, null, charCoords(cm, pos, "div").top - headPos.top), 
                pos;
            }, sel_move), goals.length) for (var i = 0; i < doc.sel.ranges.length; i++) doc.sel.ranges[i].goalColumn = goals[i];
        }),
        findWordAt: function(pos) {
            var doc = this.doc, line = getLine(doc, pos.line).text, start = pos.ch, end = pos.ch;
            if (line) {
                var helper = this.getHelper(pos, "wordChars");
                (pos.xRel < 0 || end == line.length) && start ? --start : ++end;
                for (var startChar = line.charAt(start), check = isWordChar(startChar, helper) ? function(ch) {
                    return isWordChar(ch, helper);
                } : /\s/.test(startChar) ? function(ch) {
                    return /\s/.test(ch);
                } : function(ch) {
                    return !/\s/.test(ch) && !isWordChar(ch);
                }; start > 0 && check(line.charAt(start - 1)); ) --start;
                for (;end < line.length && check(line.charAt(end)); ) ++end;
            }
            return new Range(Pos(pos.line, start), Pos(pos.line, end));
        },
        toggleOverwrite: function(value) {
            (null == value || value != this.state.overwrite) && ((this.state.overwrite = !this.state.overwrite) ? addClass(this.display.cursorDiv, "CodeMirror-overwrite") : rmClass(this.display.cursorDiv, "CodeMirror-overwrite"), 
            signal(this, "overwriteToggle", this, this.state.overwrite));
        },
        hasFocus: function() {
            return activeElt() == this.display.input;
        },
        scrollTo: methodOp(function(x, y) {
            (null != x || null != y) && resolveScrollToPos(this), null != x && (this.curOp.scrollLeft = x), 
            null != y && (this.curOp.scrollTop = y);
        }),
        getScrollInfo: function() {
            var scroller = this.display.scroller, co = scrollerCutOff;
            return {
                left: scroller.scrollLeft,
                top: scroller.scrollTop,
                height: scroller.scrollHeight - co,
                width: scroller.scrollWidth - co,
                clientHeight: scroller.clientHeight - co,
                clientWidth: scroller.clientWidth - co
            };
        },
        scrollIntoView: methodOp(function(range, margin) {
            if (null == range ? (range = {
                from: this.doc.sel.primary().head,
                to: null
            }, null == margin && (margin = this.options.cursorScrollMargin)) : "number" == typeof range ? range = {
                from: Pos(range, 0),
                to: null
            } : null == range.from && (range = {
                from: range,
                to: null
            }), range.to || (range.to = range.from), range.margin = margin || 0, null != range.from.line) resolveScrollToPos(this), 
            this.curOp.scrollToPos = range; else {
                var sPos = calculateScrollPos(this, Math.min(range.from.left, range.to.left), Math.min(range.from.top, range.to.top) - range.margin, Math.max(range.from.right, range.to.right), Math.max(range.from.bottom, range.to.bottom) + range.margin);
                this.scrollTo(sPos.scrollLeft, sPos.scrollTop);
            }
        }),
        setSize: methodOp(function(width, height) {
            function interpret(val) {
                return "number" == typeof val || /^\d+$/.test(String(val)) ? val + "px" : val;
            }
            var cm = this;
            null != width && (cm.display.wrapper.style.width = interpret(width)), null != height && (cm.display.wrapper.style.height = interpret(height)), 
            cm.options.lineWrapping && clearLineMeasurementCache(this);
            var lineNo = cm.display.viewFrom;
            cm.doc.iter(lineNo, cm.display.viewTo, function(line) {
                if (line.widgets) for (var i = 0; i < line.widgets.length; i++) if (line.widgets[i].noHScroll) {
                    regLineChange(cm, lineNo, "widget");
                    break;
                }
                ++lineNo;
            }), cm.curOp.forceUpdate = !0, signal(cm, "refresh", this);
        }),
        operation: function(f) {
            return runInOp(this, f);
        },
        refresh: methodOp(function() {
            var oldHeight = this.display.cachedTextHeight;
            regChange(this), this.curOp.forceUpdate = !0, clearCaches(this), this.scrollTo(this.doc.scrollLeft, this.doc.scrollTop), 
            updateGutterSpace(this), (null == oldHeight || Math.abs(oldHeight - textHeight(this.display)) > .5) && estimateLineHeights(this), 
            signal(this, "refresh", this);
        }),
        swapDoc: methodOp(function(doc) {
            var old = this.doc;
            return old.cm = null, attachDoc(this, doc), clearCaches(this), resetInput(this), 
            this.scrollTo(doc.scrollLeft, doc.scrollTop), this.curOp.forceScroll = !0, signalLater(this, "swapDoc", this, old), 
            old;
        }),
        getInputField: function() {
            return this.display.input;
        },
        getWrapperElement: function() {
            return this.display.wrapper;
        },
        getScrollerElement: function() {
            return this.display.scroller;
        },
        getGutterElement: function() {
            return this.display.gutters;
        }
    }, eventMixin(CodeMirror);
    var defaults = CodeMirror.defaults = {}, optionHandlers = CodeMirror.optionHandlers = {}, Init = CodeMirror.Init = {
        toString: function() {
            return "CodeMirror.Init";
        }
    };
    option("value", "", function(cm, val) {
        cm.setValue(val);
    }, !0), option("mode", null, function(cm, val) {
        cm.doc.modeOption = val, loadMode(cm);
    }, !0), option("indentUnit", 2, loadMode, !0), option("indentWithTabs", !1), option("smartIndent", !0), 
    option("tabSize", 4, function(cm) {
        resetModeState(cm), clearCaches(cm), regChange(cm);
    }, !0), option("specialChars", /[\t\u0000-\u0019\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g, function(cm, val) {
        cm.options.specialChars = new RegExp(val.source + (val.test("	") ? "" : "|	"), "g"), 
        cm.refresh();
    }, !0), option("specialCharPlaceholder", defaultSpecialCharPlaceholder, function(cm) {
        cm.refresh();
    }, !0), option("electricChars", !0), option("rtlMoveVisually", !windows), option("wholeLineUpdateBefore", !0), 
    option("theme", "default", function(cm) {
        themeChanged(cm), guttersChanged(cm);
    }, !0), option("keyMap", "default", keyMapChanged), option("extraKeys", null), option("lineWrapping", !1, wrappingChanged, !0), 
    option("gutters", [], function(cm) {
        setGuttersForLineNumbers(cm.options), guttersChanged(cm);
    }, !0), option("fixedGutter", !0, function(cm, val) {
        cm.display.gutters.style.left = val ? compensateForHScroll(cm.display) + "px" : "0", 
        cm.refresh();
    }, !0), option("coverGutterNextToScrollbar", !1, updateScrollbars, !0), option("lineNumbers", !1, function(cm) {
        setGuttersForLineNumbers(cm.options), guttersChanged(cm);
    }, !0), option("firstLineNumber", 1, guttersChanged, !0), option("lineNumberFormatter", function(integer) {
        return integer;
    }, guttersChanged, !0), option("showCursorWhenSelecting", !1, updateSelection, !0), 
    option("resetSelectionOnContextMenu", !0), option("readOnly", !1, function(cm, val) {
        "nocursor" == val ? (onBlur(cm), cm.display.input.blur(), cm.display.disabled = !0) : (cm.display.disabled = !1, 
        val || resetInput(cm));
    }), option("disableInput", !1, function(cm, val) {
        val || resetInput(cm);
    }, !0), option("dragDrop", !0), option("cursorBlinkRate", 530), option("cursorScrollMargin", 0), 
    option("cursorHeight", 1, updateSelection, !0), option("singleCursorHeightPerLine", !0, updateSelection, !0), 
    option("workTime", 100), option("workDelay", 100), option("flattenSpans", !0, resetModeState, !0), 
    option("addModeClass", !1, resetModeState, !0), option("pollInterval", 100), option("undoDepth", 200, function(cm, val) {
        cm.doc.history.undoDepth = val;
    }), option("historyEventDelay", 1250), option("viewportMargin", 10, function(cm) {
        cm.refresh();
    }, !0), option("maxHighlightLength", 1e4, resetModeState, !0), option("moveInputWithCursor", !0, function(cm, val) {
        val || (cm.display.inputDiv.style.top = cm.display.inputDiv.style.left = 0);
    }), option("tabindex", null, function(cm, val) {
        cm.display.input.tabIndex = val || "";
    }), option("autofocus", null);
    var modes = CodeMirror.modes = {}, mimeModes = CodeMirror.mimeModes = {};
    CodeMirror.defineMode = function(name, mode) {
        CodeMirror.defaults.mode || "null" == name || (CodeMirror.defaults.mode = name), 
        arguments.length > 2 && (mode.dependencies = Array.prototype.slice.call(arguments, 2)), 
        modes[name] = mode;
    }, CodeMirror.defineMIME = function(mime, spec) {
        mimeModes[mime] = spec;
    }, CodeMirror.resolveMode = function(spec) {
        if ("string" == typeof spec && mimeModes.hasOwnProperty(spec)) spec = mimeModes[spec]; else if (spec && "string" == typeof spec.name && mimeModes.hasOwnProperty(spec.name)) {
            var found = mimeModes[spec.name];
            "string" == typeof found && (found = {
                name: found
            }), spec = createObj(found, spec), spec.name = found.name;
        } else if ("string" == typeof spec && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) return CodeMirror.resolveMode("application/xml");
        return "string" == typeof spec ? {
            name: spec
        } : spec || {
            name: "null"
        };
    }, CodeMirror.getMode = function(options, spec) {
        var spec = CodeMirror.resolveMode(spec), mfactory = modes[spec.name];
        if (!mfactory) return CodeMirror.getMode(options, "text/plain");
        var modeObj = mfactory(options, spec);
        if (modeExtensions.hasOwnProperty(spec.name)) {
            var exts = modeExtensions[spec.name];
            for (var prop in exts) exts.hasOwnProperty(prop) && (modeObj.hasOwnProperty(prop) && (modeObj["_" + prop] = modeObj[prop]), 
            modeObj[prop] = exts[prop]);
        }
        if (modeObj.name = spec.name, spec.helperType && (modeObj.helperType = spec.helperType), 
        spec.modeProps) for (var prop in spec.modeProps) modeObj[prop] = spec.modeProps[prop];
        return modeObj;
    }, CodeMirror.defineMode("null", function() {
        return {
            token: function(stream) {
                stream.skipToEnd();
            }
        };
    }), CodeMirror.defineMIME("text/plain", "null");
    var modeExtensions = CodeMirror.modeExtensions = {};
    CodeMirror.extendMode = function(mode, properties) {
        var exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : modeExtensions[mode] = {};
        copyObj(properties, exts);
    }, CodeMirror.defineExtension = function(name, func) {
        CodeMirror.prototype[name] = func;
    }, CodeMirror.defineDocExtension = function(name, func) {
        Doc.prototype[name] = func;
    }, CodeMirror.defineOption = option;
    var initHooks = [];
    CodeMirror.defineInitHook = function(f) {
        initHooks.push(f);
    };
    var helpers = CodeMirror.helpers = {};
    CodeMirror.registerHelper = function(type, name, value) {
        helpers.hasOwnProperty(type) || (helpers[type] = CodeMirror[type] = {
            _global: []
        }), helpers[type][name] = value;
    }, CodeMirror.registerGlobalHelper = function(type, name, predicate, value) {
        CodeMirror.registerHelper(type, name, value), helpers[type]._global.push({
            pred: predicate,
            val: value
        });
    };
    var copyState = CodeMirror.copyState = function(mode, state) {
        if (state === !0) return state;
        if (mode.copyState) return mode.copyState(state);
        var nstate = {};
        for (var n in state) {
            var val = state[n];
            val instanceof Array && (val = val.concat([])), nstate[n] = val;
        }
        return nstate;
    }, startState = CodeMirror.startState = function(mode, a1, a2) {
        return mode.startState ? mode.startState(a1, a2) : !0;
    };
    CodeMirror.innerMode = function(mode, state) {
        for (;mode.innerMode; ) {
            var info = mode.innerMode(state);
            if (!info || info.mode == mode) break;
            state = info.state, mode = info.mode;
        }
        return info || {
            mode: mode,
            state: state
        };
    };
    var commands = CodeMirror.commands = {
        selectAll: function(cm) {
            cm.setSelection(Pos(cm.firstLine(), 0), Pos(cm.lastLine()), sel_dontScroll);
        },
        singleSelection: function(cm) {
            cm.setSelection(cm.getCursor("anchor"), cm.getCursor("head"), sel_dontScroll);
        },
        killLine: function(cm) {
            deleteNearSelection(cm, function(range) {
                if (range.empty()) {
                    var len = getLine(cm.doc, range.head.line).text.length;
                    return range.head.ch == len && range.head.line < cm.lastLine() ? {
                        from: range.head,
                        to: Pos(range.head.line + 1, 0)
                    } : {
                        from: range.head,
                        to: Pos(range.head.line, len)
                    };
                }
                return {
                    from: range.from(),
                    to: range.to()
                };
            });
        },
        deleteLine: function(cm) {
            deleteNearSelection(cm, function(range) {
                return {
                    from: Pos(range.from().line, 0),
                    to: clipPos(cm.doc, Pos(range.to().line + 1, 0))
                };
            });
        },
        delLineLeft: function(cm) {
            deleteNearSelection(cm, function(range) {
                return {
                    from: Pos(range.from().line, 0),
                    to: range.from()
                };
            });
        },
        delWrappedLineLeft: function(cm) {
            deleteNearSelection(cm, function(range) {
                var top = cm.charCoords(range.head, "div").top + 5, leftPos = cm.coordsChar({
                    left: 0,
                    top: top
                }, "div");
                return {
                    from: leftPos,
                    to: range.from()
                };
            });
        },
        delWrappedLineRight: function(cm) {
            deleteNearSelection(cm, function(range) {
                var top = cm.charCoords(range.head, "div").top + 5, rightPos = cm.coordsChar({
                    left: cm.display.lineDiv.offsetWidth + 100,
                    top: top
                }, "div");
                return {
                    from: range.from(),
                    to: rightPos
                };
            });
        },
        undo: function(cm) {
            cm.undo();
        },
        redo: function(cm) {
            cm.redo();
        },
        undoSelection: function(cm) {
            cm.undoSelection();
        },
        redoSelection: function(cm) {
            cm.redoSelection();
        },
        goDocStart: function(cm) {
            cm.extendSelection(Pos(cm.firstLine(), 0));
        },
        goDocEnd: function(cm) {
            cm.extendSelection(Pos(cm.lastLine()));
        },
        goLineStart: function(cm) {
            cm.extendSelectionsBy(function(range) {
                return lineStart(cm, range.head.line);
            }, {
                origin: "+move",
                bias: 1
            });
        },
        goLineStartSmart: function(cm) {
            cm.extendSelectionsBy(function(range) {
                return lineStartSmart(cm, range.head);
            }, {
                origin: "+move",
                bias: 1
            });
        },
        goLineEnd: function(cm) {
            cm.extendSelectionsBy(function(range) {
                return lineEnd(cm, range.head.line);
            }, {
                origin: "+move",
                bias: -1
            });
        },
        goLineRight: function(cm) {
            cm.extendSelectionsBy(function(range) {
                var top = cm.charCoords(range.head, "div").top + 5;
                return cm.coordsChar({
                    left: cm.display.lineDiv.offsetWidth + 100,
                    top: top
                }, "div");
            }, sel_move);
        },
        goLineLeft: function(cm) {
            cm.extendSelectionsBy(function(range) {
                var top = cm.charCoords(range.head, "div").top + 5;
                return cm.coordsChar({
                    left: 0,
                    top: top
                }, "div");
            }, sel_move);
        },
        goLineLeftSmart: function(cm) {
            cm.extendSelectionsBy(function(range) {
                var top = cm.charCoords(range.head, "div").top + 5, pos = cm.coordsChar({
                    left: 0,
                    top: top
                }, "div");
                return pos.ch < cm.getLine(pos.line).search(/\S/) ? lineStartSmart(cm, range.head) : pos;
            }, sel_move);
        },
        goLineUp: function(cm) {
            cm.moveV(-1, "line");
        },
        goLineDown: function(cm) {
            cm.moveV(1, "line");
        },
        goPageUp: function(cm) {
            cm.moveV(-1, "page");
        },
        goPageDown: function(cm) {
            cm.moveV(1, "page");
        },
        goCharLeft: function(cm) {
            cm.moveH(-1, "char");
        },
        goCharRight: function(cm) {
            cm.moveH(1, "char");
        },
        goColumnLeft: function(cm) {
            cm.moveH(-1, "column");
        },
        goColumnRight: function(cm) {
            cm.moveH(1, "column");
        },
        goWordLeft: function(cm) {
            cm.moveH(-1, "word");
        },
        goGroupRight: function(cm) {
            cm.moveH(1, "group");
        },
        goGroupLeft: function(cm) {
            cm.moveH(-1, "group");
        },
        goWordRight: function(cm) {
            cm.moveH(1, "word");
        },
        delCharBefore: function(cm) {
            cm.deleteH(-1, "char");
        },
        delCharAfter: function(cm) {
            cm.deleteH(1, "char");
        },
        delWordBefore: function(cm) {
            cm.deleteH(-1, "word");
        },
        delWordAfter: function(cm) {
            cm.deleteH(1, "word");
        },
        delGroupBefore: function(cm) {
            cm.deleteH(-1, "group");
        },
        delGroupAfter: function(cm) {
            cm.deleteH(1, "group");
        },
        indentAuto: function(cm) {
            cm.indentSelection("smart");
        },
        indentMore: function(cm) {
            cm.indentSelection("add");
        },
        indentLess: function(cm) {
            cm.indentSelection("subtract");
        },
        insertTab: function(cm) {
            cm.replaceSelection("	");
        },
        insertSoftTab: function(cm) {
            for (var spaces = [], ranges = cm.listSelections(), tabSize = cm.options.tabSize, i = 0; i < ranges.length; i++) {
                var pos = ranges[i].from(), col = countColumn(cm.getLine(pos.line), pos.ch, tabSize);
                spaces.push(new Array(tabSize - col % tabSize + 1).join(" "));
            }
            cm.replaceSelections(spaces);
        },
        defaultTab: function(cm) {
            cm.somethingSelected() ? cm.indentSelection("add") : cm.execCommand("insertTab");
        },
        transposeChars: function(cm) {
            runInOp(cm, function() {
                for (var ranges = cm.listSelections(), newSel = [], i = 0; i < ranges.length; i++) {
                    var cur = ranges[i].head, line = getLine(cm.doc, cur.line).text;
                    if (line) if (cur.ch == line.length && (cur = new Pos(cur.line, cur.ch - 1)), cur.ch > 0) cur = new Pos(cur.line, cur.ch + 1), 
                    cm.replaceRange(line.charAt(cur.ch - 1) + line.charAt(cur.ch - 2), Pos(cur.line, cur.ch - 2), cur, "+transpose"); else if (cur.line > cm.doc.first) {
                        var prev = getLine(cm.doc, cur.line - 1).text;
                        prev && cm.replaceRange(line.charAt(0) + "\n" + prev.charAt(prev.length - 1), Pos(cur.line - 1, prev.length - 1), Pos(cur.line, 1), "+transpose");
                    }
                    newSel.push(new Range(cur, cur));
                }
                cm.setSelections(newSel);
            });
        },
        newlineAndIndent: function(cm) {
            runInOp(cm, function() {
                for (var len = cm.listSelections().length, i = 0; len > i; i++) {
                    var range = cm.listSelections()[i];
                    cm.replaceRange("\n", range.anchor, range.head, "+input"), cm.indentLine(range.from().line + 1, null, !0), 
                    ensureCursorVisible(cm);
                }
            });
        },
        toggleOverwrite: function(cm) {
            cm.toggleOverwrite();
        }
    }, keyMap = CodeMirror.keyMap = {};
    keyMap.basic = {
        Left: "goCharLeft",
        Right: "goCharRight",
        Up: "goLineUp",
        Down: "goLineDown",
        End: "goLineEnd",
        Home: "goLineStartSmart",
        PageUp: "goPageUp",
        PageDown: "goPageDown",
        Delete: "delCharAfter",
        Backspace: "delCharBefore",
        "Shift-Backspace": "delCharBefore",
        Tab: "defaultTab",
        "Shift-Tab": "indentAuto",
        Enter: "newlineAndIndent",
        Insert: "toggleOverwrite",
        Esc: "singleSelection"
    }, keyMap.pcDefault = {
        "Ctrl-A": "selectAll",
        "Ctrl-D": "deleteLine",
        "Ctrl-Z": "undo",
        "Shift-Ctrl-Z": "redo",
        "Ctrl-Y": "redo",
        "Ctrl-Home": "goDocStart",
        "Ctrl-End": "goDocEnd",
        "Ctrl-Up": "goLineUp",
        "Ctrl-Down": "goLineDown",
        "Ctrl-Left": "goGroupLeft",
        "Ctrl-Right": "goGroupRight",
        "Alt-Left": "goLineStart",
        "Alt-Right": "goLineEnd",
        "Ctrl-Backspace": "delGroupBefore",
        "Ctrl-Delete": "delGroupAfter",
        "Ctrl-S": "save",
        "Ctrl-F": "find",
        "Ctrl-G": "findNext",
        "Shift-Ctrl-G": "findPrev",
        "Shift-Ctrl-F": "replace",
        "Shift-Ctrl-R": "replaceAll",
        "Ctrl-[": "indentLess",
        "Ctrl-]": "indentMore",
        "Ctrl-U": "undoSelection",
        "Shift-Ctrl-U": "redoSelection",
        "Alt-U": "redoSelection",
        fallthrough: "basic"
    }, keyMap.macDefault = {
        "Cmd-A": "selectAll",
        "Cmd-D": "deleteLine",
        "Cmd-Z": "undo",
        "Shift-Cmd-Z": "redo",
        "Cmd-Y": "redo",
        "Cmd-Home": "goDocStart",
        "Cmd-Up": "goDocStart",
        "Cmd-End": "goDocEnd",
        "Cmd-Down": "goDocEnd",
        "Alt-Left": "goGroupLeft",
        "Alt-Right": "goGroupRight",
        "Cmd-Left": "goLineLeft",
        "Cmd-Right": "goLineRight",
        "Alt-Backspace": "delGroupBefore",
        "Ctrl-Alt-Backspace": "delGroupAfter",
        "Alt-Delete": "delGroupAfter",
        "Cmd-S": "save",
        "Cmd-F": "find",
        "Cmd-G": "findNext",
        "Shift-Cmd-G": "findPrev",
        "Cmd-Alt-F": "replace",
        "Shift-Cmd-Alt-F": "replaceAll",
        "Cmd-[": "indentLess",
        "Cmd-]": "indentMore",
        "Cmd-Backspace": "delWrappedLineLeft",
        "Cmd-Delete": "delWrappedLineRight",
        "Cmd-U": "undoSelection",
        "Shift-Cmd-U": "redoSelection",
        "Ctrl-Up": "goDocStart",
        "Ctrl-Down": "goDocEnd",
        fallthrough: [ "basic", "emacsy" ]
    }, keyMap.emacsy = {
        "Ctrl-F": "goCharRight",
        "Ctrl-B": "goCharLeft",
        "Ctrl-P": "goLineUp",
        "Ctrl-N": "goLineDown",
        "Alt-F": "goWordRight",
        "Alt-B": "goWordLeft",
        "Ctrl-A": "goLineStart",
        "Ctrl-E": "goLineEnd",
        "Ctrl-V": "goPageDown",
        "Shift-Ctrl-V": "goPageUp",
        "Ctrl-D": "delCharAfter",
        "Ctrl-H": "delCharBefore",
        "Alt-D": "delWordAfter",
        "Alt-Backspace": "delWordBefore",
        "Ctrl-K": "killLine",
        "Ctrl-T": "transposeChars"
    }, keyMap["default"] = mac ? keyMap.macDefault : keyMap.pcDefault;
    var lookupKey = CodeMirror.lookupKey = function(name, maps, handle) {
        function lookup(map) {
            map = getKeyMap(map);
            var found = map[name];
            if (found === !1) return "stop";
            if (null != found && handle(found)) return !0;
            if (map.nofallthrough) return "stop";
            var fallthrough = map.fallthrough;
            if (null == fallthrough) return !1;
            if ("[object Array]" != Object.prototype.toString.call(fallthrough)) return lookup(fallthrough);
            for (var i = 0; i < fallthrough.length; ++i) {
                var done = lookup(fallthrough[i]);
                if (done) return done;
            }
            return !1;
        }
        for (var i = 0; i < maps.length; ++i) {
            var done = lookup(maps[i]);
            if (done) return "stop" != done;
        }
    }, isModifierKey = CodeMirror.isModifierKey = function(event) {
        var name = keyNames[event.keyCode];
        return "Ctrl" == name || "Alt" == name || "Shift" == name || "Mod" == name;
    }, keyName = CodeMirror.keyName = function(event, noShift) {
        if (presto && 34 == event.keyCode && event["char"]) return !1;
        var name = keyNames[event.keyCode];
        return null == name || event.altGraphKey ? !1 : (event.altKey && (name = "Alt-" + name), 
        (flipCtrlCmd ? event.metaKey : event.ctrlKey) && (name = "Ctrl-" + name), (flipCtrlCmd ? event.ctrlKey : event.metaKey) && (name = "Cmd-" + name), 
        !noShift && event.shiftKey && (name = "Shift-" + name), name);
    };
    CodeMirror.fromTextArea = function(textarea, options) {
        function save() {
            textarea.value = cm.getValue();
        }
        if (options || (options = {}), options.value = textarea.value, !options.tabindex && textarea.tabindex && (options.tabindex = textarea.tabindex), 
        !options.placeholder && textarea.placeholder && (options.placeholder = textarea.placeholder), 
        null == options.autofocus) {
            var hasFocus = activeElt();
            options.autofocus = hasFocus == textarea || null != textarea.getAttribute("autofocus") && hasFocus == document.body;
        }
        if (textarea.form && (on(textarea.form, "submit", save), !options.leaveSubmitMethodAlone)) {
            var form = textarea.form, realSubmit = form.submit;
            try {
                var wrappedSubmit = form.submit = function() {
                    save(), form.submit = realSubmit, form.submit(), form.submit = wrappedSubmit;
                };
            } catch (e) {}
        }
        textarea.style.display = "none";
        var cm = CodeMirror(function(node) {
            textarea.parentNode.insertBefore(node, textarea.nextSibling);
        }, options);
        return cm.save = save, cm.getTextArea = function() {
            return textarea;
        }, cm.toTextArea = function() {
            cm.toTextArea = isNaN, save(), textarea.parentNode.removeChild(cm.getWrapperElement()), 
            textarea.style.display = "", textarea.form && (off(textarea.form, "submit", save), 
            "function" == typeof textarea.form.submit && (textarea.form.submit = realSubmit));
        }, cm;
    };
    var StringStream = CodeMirror.StringStream = function(string, tabSize) {
        this.pos = this.start = 0, this.string = string, this.tabSize = tabSize || 8, this.lastColumnPos = this.lastColumnValue = 0, 
        this.lineStart = 0;
    };
    StringStream.prototype = {
        eol: function() {
            return this.pos >= this.string.length;
        },
        sol: function() {
            return this.pos == this.lineStart;
        },
        peek: function() {
            return this.string.charAt(this.pos) || void 0;
        },
        next: function() {
            return this.pos < this.string.length ? this.string.charAt(this.pos++) : void 0;
        },
        eat: function(match) {
            var ch = this.string.charAt(this.pos);
            if ("string" == typeof match) var ok = ch == match; else var ok = ch && (match.test ? match.test(ch) : match(ch));
            return ok ? (++this.pos, ch) : void 0;
        },
        eatWhile: function(match) {
            for (var start = this.pos; this.eat(match); ) ;
            return this.pos > start;
        },
        eatSpace: function() {
            for (var start = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos)); ) ++this.pos;
            return this.pos > start;
        },
        skipToEnd: function() {
            this.pos = this.string.length;
        },
        skipTo: function(ch) {
            var found = this.string.indexOf(ch, this.pos);
            return found > -1 ? (this.pos = found, !0) : void 0;
        },
        backUp: function(n) {
            this.pos -= n;
        },
        column: function() {
            return this.lastColumnPos < this.start && (this.lastColumnValue = countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), 
            this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0);
        },
        indentation: function() {
            return countColumn(this.string, null, this.tabSize) - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0);
        },
        match: function(pattern, consume, caseInsensitive) {
            if ("string" != typeof pattern) {
                var match = this.string.slice(this.pos).match(pattern);
                return match && match.index > 0 ? null : (match && consume !== !1 && (this.pos += match[0].length), 
                match);
            }
            var cased = function(str) {
                return caseInsensitive ? str.toLowerCase() : str;
            }, substr = this.string.substr(this.pos, pattern.length);
            return cased(substr) == cased(pattern) ? (consume !== !1 && (this.pos += pattern.length), 
            !0) : void 0;
        },
        current: function() {
            return this.string.slice(this.start, this.pos);
        },
        hideFirstChars: function(n, inner) {
            this.lineStart += n;
            try {
                return inner();
            } finally {
                this.lineStart -= n;
            }
        }
    };
    var TextMarker = CodeMirror.TextMarker = function(doc, type) {
        this.lines = [], this.type = type, this.doc = doc;
    };
    eventMixin(TextMarker), TextMarker.prototype.clear = function() {
        if (!this.explicitlyCleared) {
            var cm = this.doc.cm, withOp = cm && !cm.curOp;
            if (withOp && startOperation(cm), hasHandler(this, "clear")) {
                var found = this.find();
                found && signalLater(this, "clear", found.from, found.to);
            }
            for (var min = null, max = null, i = 0; i < this.lines.length; ++i) {
                var line = this.lines[i], span = getMarkedSpanFor(line.markedSpans, this);
                cm && !this.collapsed ? regLineChange(cm, lineNo(line), "text") : cm && (null != span.to && (max = lineNo(line)), 
                null != span.from && (min = lineNo(line))), line.markedSpans = removeMarkedSpan(line.markedSpans, span), 
                null == span.from && this.collapsed && !lineIsHidden(this.doc, line) && cm && updateLineHeight(line, textHeight(cm.display));
            }
            if (cm && this.collapsed && !cm.options.lineWrapping) for (var i = 0; i < this.lines.length; ++i) {
                var visual = visualLine(this.lines[i]), len = lineLength(visual);
                len > cm.display.maxLineLength && (cm.display.maxLine = visual, cm.display.maxLineLength = len, 
                cm.display.maxLineChanged = !0);
            }
            null != min && cm && this.collapsed && regChange(cm, min, max + 1), this.lines.length = 0, 
            this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, 
            cm && reCheckSelection(cm.doc)), cm && signalLater(cm, "markerCleared", cm, this), 
            withOp && endOperation(cm), this.parent && this.parent.clear();
        }
    }, TextMarker.prototype.find = function(side, lineObj) {
        null == side && "bookmark" == this.type && (side = 1);
        for (var from, to, i = 0; i < this.lines.length; ++i) {
            var line = this.lines[i], span = getMarkedSpanFor(line.markedSpans, this);
            if (null != span.from && (from = Pos(lineObj ? line : lineNo(line), span.from), 
            -1 == side)) return from;
            if (null != span.to && (to = Pos(lineObj ? line : lineNo(line), span.to), 1 == side)) return to;
        }
        return from && {
            from: from,
            to: to
        };
    }, TextMarker.prototype.changed = function() {
        var pos = this.find(-1, !0), widget = this, cm = this.doc.cm;
        pos && cm && runInOp(cm, function() {
            var line = pos.line, lineN = lineNo(pos.line), view = findViewForLine(cm, lineN);
            if (view && (clearLineMeasurementCacheFor(view), cm.curOp.selectionChanged = cm.curOp.forceUpdate = !0), 
            cm.curOp.updateMaxLine = !0, !lineIsHidden(widget.doc, line) && null != widget.height) {
                var oldHeight = widget.height;
                widget.height = null;
                var dHeight = widgetHeight(widget) - oldHeight;
                dHeight && updateLineHeight(line, line.height + dHeight);
            }
        });
    }, TextMarker.prototype.attachLine = function(line) {
        if (!this.lines.length && this.doc.cm) {
            var op = this.doc.cm.curOp;
            op.maybeHiddenMarkers && -1 != indexOf(op.maybeHiddenMarkers, this) || (op.maybeUnhiddenMarkers || (op.maybeUnhiddenMarkers = [])).push(this);
        }
        this.lines.push(line);
    }, TextMarker.prototype.detachLine = function(line) {
        if (this.lines.splice(indexOf(this.lines, line), 1), !this.lines.length && this.doc.cm) {
            var op = this.doc.cm.curOp;
            (op.maybeHiddenMarkers || (op.maybeHiddenMarkers = [])).push(this);
        }
    };
    var nextMarkerId = 0, SharedTextMarker = CodeMirror.SharedTextMarker = function(markers, primary) {
        this.markers = markers, this.primary = primary;
        for (var i = 0; i < markers.length; ++i) markers[i].parent = this;
    };
    eventMixin(SharedTextMarker), SharedTextMarker.prototype.clear = function() {
        if (!this.explicitlyCleared) {
            this.explicitlyCleared = !0;
            for (var i = 0; i < this.markers.length; ++i) this.markers[i].clear();
            signalLater(this, "clear");
        }
    }, SharedTextMarker.prototype.find = function(side, lineObj) {
        return this.primary.find(side, lineObj);
    };
    var LineWidget = CodeMirror.LineWidget = function(cm, node, options) {
        if (options) for (var opt in options) options.hasOwnProperty(opt) && (this[opt] = options[opt]);
        this.cm = cm, this.node = node;
    };
    eventMixin(LineWidget), LineWidget.prototype.clear = function() {
        var cm = this.cm, ws = this.line.widgets, line = this.line, no = lineNo(line);
        if (null != no && ws) {
            for (var i = 0; i < ws.length; ++i) ws[i] == this && ws.splice(i--, 1);
            ws.length || (line.widgets = null);
            var height = widgetHeight(this);
            runInOp(cm, function() {
                adjustScrollWhenAboveVisible(cm, line, -height), regLineChange(cm, no, "widget"), 
                updateLineHeight(line, Math.max(0, line.height - height));
            });
        }
    }, LineWidget.prototype.changed = function() {
        var oldH = this.height, cm = this.cm, line = this.line;
        this.height = null;
        var diff = widgetHeight(this) - oldH;
        diff && runInOp(cm, function() {
            cm.curOp.forceUpdate = !0, adjustScrollWhenAboveVisible(cm, line, diff), updateLineHeight(line, line.height + diff);
        });
    };
    var Line = CodeMirror.Line = function(text, markedSpans, estimateHeight) {
        this.text = text, attachMarkedSpans(this, markedSpans), this.height = estimateHeight ? estimateHeight(this) : 1;
    };
    eventMixin(Line), Line.prototype.lineNo = function() {
        return lineNo(this);
    };
    var styleToClassCache = {}, styleToClassCacheWithMode = {};
    LeafChunk.prototype = {
        chunkSize: function() {
            return this.lines.length;
        },
        removeInner: function(at, n) {
            for (var i = at, e = at + n; e > i; ++i) {
                var line = this.lines[i];
                this.height -= line.height, cleanUpLine(line), signalLater(line, "delete");
            }
            this.lines.splice(at, n);
        },
        collapse: function(lines) {
            lines.push.apply(lines, this.lines);
        },
        insertInner: function(at, lines, height) {
            this.height += height, this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at));
            for (var i = 0; i < lines.length; ++i) lines[i].parent = this;
        },
        iterN: function(at, n, op) {
            for (var e = at + n; e > at; ++at) if (op(this.lines[at])) return !0;
        }
    }, BranchChunk.prototype = {
        chunkSize: function() {
            return this.size;
        },
        removeInner: function(at, n) {
            this.size -= n;
            for (var i = 0; i < this.children.length; ++i) {
                var child = this.children[i], sz = child.chunkSize();
                if (sz > at) {
                    var rm = Math.min(n, sz - at), oldHeight = child.height;
                    if (child.removeInner(at, rm), this.height -= oldHeight - child.height, sz == rm && (this.children.splice(i--, 1), 
                    child.parent = null), 0 == (n -= rm)) break;
                    at = 0;
                } else at -= sz;
            }
            if (this.size - n < 25 && (this.children.length > 1 || !(this.children[0] instanceof LeafChunk))) {
                var lines = [];
                this.collapse(lines), this.children = [ new LeafChunk(lines) ], this.children[0].parent = this;
            }
        },
        collapse: function(lines) {
            for (var i = 0; i < this.children.length; ++i) this.children[i].collapse(lines);
        },
        insertInner: function(at, lines, height) {
            this.size += lines.length, this.height += height;
            for (var i = 0; i < this.children.length; ++i) {
                var child = this.children[i], sz = child.chunkSize();
                if (sz >= at) {
                    if (child.insertInner(at, lines, height), child.lines && child.lines.length > 50) {
                        for (;child.lines.length > 50; ) {
                            var spilled = child.lines.splice(child.lines.length - 25, 25), newleaf = new LeafChunk(spilled);
                            child.height -= newleaf.height, this.children.splice(i + 1, 0, newleaf), newleaf.parent = this;
                        }
                        this.maybeSpill();
                    }
                    break;
                }
                at -= sz;
            }
        },
        maybeSpill: function() {
            if (!(this.children.length <= 10)) {
                var me = this;
                do {
                    var spilled = me.children.splice(me.children.length - 5, 5), sibling = new BranchChunk(spilled);
                    if (me.parent) {
                        me.size -= sibling.size, me.height -= sibling.height;
                        var myIndex = indexOf(me.parent.children, me);
                        me.parent.children.splice(myIndex + 1, 0, sibling);
                    } else {
                        var copy = new BranchChunk(me.children);
                        copy.parent = me, me.children = [ copy, sibling ], me = copy;
                    }
                    sibling.parent = me.parent;
                } while (me.children.length > 10);
                me.parent.maybeSpill();
            }
        },
        iterN: function(at, n, op) {
            for (var i = 0; i < this.children.length; ++i) {
                var child = this.children[i], sz = child.chunkSize();
                if (sz > at) {
                    var used = Math.min(n, sz - at);
                    if (child.iterN(at, used, op)) return !0;
                    if (0 == (n -= used)) break;
                    at = 0;
                } else at -= sz;
            }
        }
    };
    var nextDocId = 0, Doc = CodeMirror.Doc = function(text, mode, firstLine) {
        if (!(this instanceof Doc)) return new Doc(text, mode, firstLine);
        null == firstLine && (firstLine = 0), BranchChunk.call(this, [ new LeafChunk([ new Line("", null) ]) ]), 
        this.first = firstLine, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, 
        this.cleanGeneration = 1, this.frontier = firstLine;
        var start = Pos(firstLine, 0);
        this.sel = simpleSelection(start), this.history = new History(null), this.id = ++nextDocId, 
        this.modeOption = mode, "string" == typeof text && (text = splitLines(text)), updateDoc(this, {
            from: start,
            to: start,
            text: text
        }), setSelection(this, simpleSelection(start), sel_dontScroll);
    };
    Doc.prototype = createObj(BranchChunk.prototype, {
        constructor: Doc,
        iter: function(from, to, op) {
            op ? this.iterN(from - this.first, to - from, op) : this.iterN(this.first, this.first + this.size, from);
        },
        insert: function(at, lines) {
            for (var height = 0, i = 0; i < lines.length; ++i) height += lines[i].height;
            this.insertInner(at - this.first, lines, height);
        },
        remove: function(at, n) {
            this.removeInner(at - this.first, n);
        },
        getValue: function(lineSep) {
            var lines = getLines(this, this.first, this.first + this.size);
            return lineSep === !1 ? lines : lines.join(lineSep || "\n");
        },
        setValue: docMethodOp(function(code) {
            var top = Pos(this.first, 0), last = this.first + this.size - 1;
            makeChange(this, {
                from: top,
                to: Pos(last, getLine(this, last).text.length),
                text: splitLines(code),
                origin: "setValue"
            }, !0), setSelection(this, simpleSelection(top));
        }),
        replaceRange: function(code, from, to, origin) {
            from = clipPos(this, from), to = to ? clipPos(this, to) : from, replaceRange(this, code, from, to, origin);
        },
        getRange: function(from, to, lineSep) {
            var lines = getBetween(this, clipPos(this, from), clipPos(this, to));
            return lineSep === !1 ? lines : lines.join(lineSep || "\n");
        },
        getLine: function(line) {
            var l = this.getLineHandle(line);
            return l && l.text;
        },
        getLineHandle: function(line) {
            return isLine(this, line) ? getLine(this, line) : void 0;
        },
        getLineNumber: function(line) {
            return lineNo(line);
        },
        getLineHandleVisualStart: function(line) {
            return "number" == typeof line && (line = getLine(this, line)), visualLine(line);
        },
        lineCount: function() {
            return this.size;
        },
        firstLine: function() {
            return this.first;
        },
        lastLine: function() {
            return this.first + this.size - 1;
        },
        clipPos: function(pos) {
            return clipPos(this, pos);
        },
        getCursor: function(start) {
            var pos, range = this.sel.primary();
            return pos = null == start || "head" == start ? range.head : "anchor" == start ? range.anchor : "end" == start || "to" == start || start === !1 ? range.to() : range.from();
        },
        listSelections: function() {
            return this.sel.ranges;
        },
        somethingSelected: function() {
            return this.sel.somethingSelected();
        },
        setCursor: docMethodOp(function(line, ch, options) {
            setSimpleSelection(this, clipPos(this, "number" == typeof line ? Pos(line, ch || 0) : line), null, options);
        }),
        setSelection: docMethodOp(function(anchor, head, options) {
            setSimpleSelection(this, clipPos(this, anchor), clipPos(this, head || anchor), options);
        }),
        extendSelection: docMethodOp(function(head, other, options) {
            extendSelection(this, clipPos(this, head), other && clipPos(this, other), options);
        }),
        extendSelections: docMethodOp(function(heads, options) {
            extendSelections(this, clipPosArray(this, heads, options));
        }),
        extendSelectionsBy: docMethodOp(function(f, options) {
            extendSelections(this, map(this.sel.ranges, f), options);
        }),
        setSelections: docMethodOp(function(ranges, primary, options) {
            if (ranges.length) {
                for (var i = 0, out = []; i < ranges.length; i++) out[i] = new Range(clipPos(this, ranges[i].anchor), clipPos(this, ranges[i].head));
                null == primary && (primary = Math.min(ranges.length - 1, this.sel.primIndex)), 
                setSelection(this, normalizeSelection(out, primary), options);
            }
        }),
        addSelection: docMethodOp(function(anchor, head, options) {
            var ranges = this.sel.ranges.slice(0);
            ranges.push(new Range(clipPos(this, anchor), clipPos(this, head || anchor))), setSelection(this, normalizeSelection(ranges, ranges.length - 1), options);
        }),
        getSelection: function(lineSep) {
            for (var lines, ranges = this.sel.ranges, i = 0; i < ranges.length; i++) {
                var sel = getBetween(this, ranges[i].from(), ranges[i].to());
                lines = lines ? lines.concat(sel) : sel;
            }
            return lineSep === !1 ? lines : lines.join(lineSep || "\n");
        },
        getSelections: function(lineSep) {
            for (var parts = [], ranges = this.sel.ranges, i = 0; i < ranges.length; i++) {
                var sel = getBetween(this, ranges[i].from(), ranges[i].to());
                lineSep !== !1 && (sel = sel.join(lineSep || "\n")), parts[i] = sel;
            }
            return parts;
        },
        replaceSelection: function(code, collapse, origin) {
            for (var dup = [], i = 0; i < this.sel.ranges.length; i++) dup[i] = code;
            this.replaceSelections(dup, collapse, origin || "+input");
        },
        replaceSelections: docMethodOp(function(code, collapse, origin) {
            for (var changes = [], sel = this.sel, i = 0; i < sel.ranges.length; i++) {
                var range = sel.ranges[i];
                changes[i] = {
                    from: range.from(),
                    to: range.to(),
                    text: splitLines(code[i]),
                    origin: origin
                };
            }
            for (var newSel = collapse && "end" != collapse && computeReplacedSel(this, changes, collapse), i = changes.length - 1; i >= 0; i--) makeChange(this, changes[i]);
            newSel ? setSelectionReplaceHistory(this, newSel) : this.cm && ensureCursorVisible(this.cm);
        }),
        undo: docMethodOp(function() {
            makeChangeFromHistory(this, "undo");
        }),
        redo: docMethodOp(function() {
            makeChangeFromHistory(this, "redo");
        }),
        undoSelection: docMethodOp(function() {
            makeChangeFromHistory(this, "undo", !0);
        }),
        redoSelection: docMethodOp(function() {
            makeChangeFromHistory(this, "redo", !0);
        }),
        setExtending: function(val) {
            this.extend = val;
        },
        getExtending: function() {
            return this.extend;
        },
        historySize: function() {
            for (var hist = this.history, done = 0, undone = 0, i = 0; i < hist.done.length; i++) hist.done[i].ranges || ++done;
            for (var i = 0; i < hist.undone.length; i++) hist.undone[i].ranges || ++undone;
            return {
                undo: done,
                redo: undone
            };
        },
        clearHistory: function() {
            this.history = new History(this.history.maxGeneration);
        },
        markClean: function() {
            this.cleanGeneration = this.changeGeneration(!0);
        },
        changeGeneration: function(forceSplit) {
            return forceSplit && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), 
            this.history.generation;
        },
        isClean: function(gen) {
            return this.history.generation == (gen || this.cleanGeneration);
        },
        getHistory: function() {
            return {
                done: copyHistoryArray(this.history.done),
                undone: copyHistoryArray(this.history.undone)
            };
        },
        setHistory: function(histData) {
            var hist = this.history = new History(this.history.maxGeneration);
            hist.done = copyHistoryArray(histData.done.slice(0), null, !0), hist.undone = copyHistoryArray(histData.undone.slice(0), null, !0);
        },
        addLineClass: docMethodOp(function(handle, where, cls) {
            return changeLine(this, handle, "class", function(line) {
                var prop = "text" == where ? "textClass" : "background" == where ? "bgClass" : "wrapClass";
                if (line[prop]) {
                    if (new RegExp("(?:^|\\s)" + cls + "(?:$|\\s)").test(line[prop])) return !1;
                    line[prop] += " " + cls;
                } else line[prop] = cls;
                return !0;
            });
        }),
        removeLineClass: docMethodOp(function(handle, where, cls) {
            return changeLine(this, handle, "class", function(line) {
                var prop = "text" == where ? "textClass" : "background" == where ? "bgClass" : "wrapClass", cur = line[prop];
                if (!cur) return !1;
                if (null == cls) line[prop] = null; else {
                    var found = cur.match(new RegExp("(?:^|\\s+)" + cls + "(?:$|\\s+)"));
                    if (!found) return !1;
                    var end = found.index + found[0].length;
                    line[prop] = cur.slice(0, found.index) + (found.index && end != cur.length ? " " : "") + cur.slice(end) || null;
                }
                return !0;
            });
        }),
        markText: function(from, to, options) {
            return markText(this, clipPos(this, from), clipPos(this, to), options, "range");
        },
        setBookmark: function(pos, options) {
            var realOpts = {
                replacedWith: options && (null == options.nodeType ? options.widget : options),
                insertLeft: options && options.insertLeft,
                clearWhenEmpty: !1,
                shared: options && options.shared
            };
            return pos = clipPos(this, pos), markText(this, pos, pos, realOpts, "bookmark");
        },
        findMarksAt: function(pos) {
            pos = clipPos(this, pos);
            var markers = [], spans = getLine(this, pos.line).markedSpans;
            if (spans) for (var i = 0; i < spans.length; ++i) {
                var span = spans[i];
                (null == span.from || span.from <= pos.ch) && (null == span.to || span.to >= pos.ch) && markers.push(span.marker.parent || span.marker);
            }
            return markers;
        },
        findMarks: function(from, to, filter) {
            from = clipPos(this, from), to = clipPos(this, to);
            var found = [], lineNo = from.line;
            return this.iter(from.line, to.line + 1, function(line) {
                var spans = line.markedSpans;
                if (spans) for (var i = 0; i < spans.length; i++) {
                    var span = spans[i];
                    lineNo == from.line && from.ch > span.to || null == span.from && lineNo != from.line || lineNo == to.line && span.from > to.ch || filter && !filter(span.marker) || found.push(span.marker.parent || span.marker);
                }
                ++lineNo;
            }), found;
        },
        getAllMarks: function() {
            var markers = [];
            return this.iter(function(line) {
                var sps = line.markedSpans;
                if (sps) for (var i = 0; i < sps.length; ++i) null != sps[i].from && markers.push(sps[i].marker);
            }), markers;
        },
        posFromIndex: function(off) {
            var ch, lineNo = this.first;
            return this.iter(function(line) {
                var sz = line.text.length + 1;
                return sz > off ? (ch = off, !0) : (off -= sz, void ++lineNo);
            }), clipPos(this, Pos(lineNo, ch));
        },
        indexFromPos: function(coords) {
            coords = clipPos(this, coords);
            var index = coords.ch;
            return coords.line < this.first || coords.ch < 0 ? 0 : (this.iter(this.first, coords.line, function(line) {
                index += line.text.length + 1;
            }), index);
        },
        copy: function(copyHistory) {
            var doc = new Doc(getLines(this, this.first, this.first + this.size), this.modeOption, this.first);
            return doc.scrollTop = this.scrollTop, doc.scrollLeft = this.scrollLeft, doc.sel = this.sel, 
            doc.extend = !1, copyHistory && (doc.history.undoDepth = this.history.undoDepth, 
            doc.setHistory(this.getHistory())), doc;
        },
        linkedDoc: function(options) {
            options || (options = {});
            var from = this.first, to = this.first + this.size;
            null != options.from && options.from > from && (from = options.from), null != options.to && options.to < to && (to = options.to);
            var copy = new Doc(getLines(this, from, to), options.mode || this.modeOption, from);
            return options.sharedHist && (copy.history = this.history), (this.linked || (this.linked = [])).push({
                doc: copy,
                sharedHist: options.sharedHist
            }), copy.linked = [ {
                doc: this,
                isParent: !0,
                sharedHist: options.sharedHist
            } ], copySharedMarkers(copy, findSharedMarkers(this)), copy;
        },
        unlinkDoc: function(other) {
            if (other instanceof CodeMirror && (other = other.doc), this.linked) for (var i = 0; i < this.linked.length; ++i) {
                var link = this.linked[i];
                if (link.doc == other) {
                    this.linked.splice(i, 1), other.unlinkDoc(this), detachSharedMarkers(findSharedMarkers(this));
                    break;
                }
            }
            if (other.history == this.history) {
                var splitIds = [ other.id ];
                linkedDocs(other, function(doc) {
                    splitIds.push(doc.id);
                }, !0), other.history = new History(null), other.history.done = copyHistoryArray(this.history.done, splitIds), 
                other.history.undone = copyHistoryArray(this.history.undone, splitIds);
            }
        },
        iterLinkedDocs: function(f) {
            linkedDocs(this, f);
        },
        getMode: function() {
            return this.mode;
        },
        getEditor: function() {
            return this.cm;
        }
    }), Doc.prototype.eachLine = Doc.prototype.iter;
    var dontDelegate = "iter insert remove copy getEditor".split(" ");
    for (var prop in Doc.prototype) Doc.prototype.hasOwnProperty(prop) && indexOf(dontDelegate, prop) < 0 && (CodeMirror.prototype[prop] = function(method) {
        return function() {
            return method.apply(this.doc, arguments);
        };
    }(Doc.prototype[prop]));
    eventMixin(Doc);
    var e_preventDefault = CodeMirror.e_preventDefault = function(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1;
    }, e_stopPropagation = CodeMirror.e_stopPropagation = function(e) {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
    }, e_stop = CodeMirror.e_stop = function(e) {
        e_preventDefault(e), e_stopPropagation(e);
    }, on = CodeMirror.on = function(emitter, type, f) {
        if (emitter.addEventListener) emitter.addEventListener(type, f, !1); else if (emitter.attachEvent) emitter.attachEvent("on" + type, f); else {
            var map = emitter._handlers || (emitter._handlers = {}), arr = map[type] || (map[type] = []);
            arr.push(f);
        }
    }, off = CodeMirror.off = function(emitter, type, f) {
        if (emitter.removeEventListener) emitter.removeEventListener(type, f, !1); else if (emitter.detachEvent) emitter.detachEvent("on" + type, f); else {
            var arr = emitter._handlers && emitter._handlers[type];
            if (!arr) return;
            for (var i = 0; i < arr.length; ++i) if (arr[i] == f) {
                arr.splice(i, 1);
                break;
            }
        }
    }, signal = CodeMirror.signal = function(emitter, type) {
        var arr = emitter._handlers && emitter._handlers[type];
        if (arr) for (var args = Array.prototype.slice.call(arguments, 2), i = 0; i < arr.length; ++i) arr[i].apply(null, args);
    }, orphanDelayedCallbacks = null, scrollerCutOff = 30, Pass = CodeMirror.Pass = {
        toString: function() {
            return "CodeMirror.Pass";
        }
    }, sel_dontScroll = {
        scroll: !1
    }, sel_mouse = {
        origin: "*mouse"
    }, sel_move = {
        origin: "+move"
    };
    Delayed.prototype.set = function(ms, f) {
        clearTimeout(this.id), this.id = setTimeout(f, ms);
    };
    var countColumn = CodeMirror.countColumn = function(string, end, tabSize, startIndex, startValue) {
        null == end && (end = string.search(/[^\s\u00a0]/), -1 == end && (end = string.length));
        for (var i = startIndex || 0, n = startValue || 0; ;) {
            var nextTab = string.indexOf("	", i);
            if (0 > nextTab || nextTab >= end) return n + (end - i);
            n += nextTab - i, n += tabSize - n % tabSize, i = nextTab + 1;
        }
    }, spaceStrs = [ "" ], selectInput = function(node) {
        node.select();
    };
    ios ? selectInput = function(node) {
        node.selectionStart = 0, node.selectionEnd = node.value.length;
    } : ie && (selectInput = function(node) {
        try {
            node.select();
        } catch (_e) {}
    }), [].indexOf && (indexOf = function(array, elt) {
        return array.indexOf(elt);
    }), [].map && (map = function(array, f) {
        return array.map(f);
    });
    var range, nonASCIISingleCaseWordChar = /[\u00df\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/, isWordCharBasic = CodeMirror.isWordChar = function(ch) {
        return /\w/.test(ch) || ch > "" && (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch));
    }, extendingChars = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
    range = document.createRange ? function(node, start, end) {
        var r = document.createRange();
        return r.setEnd(node, end), r.setStart(node, start), r;
    } : function(node, start, end) {
        var r = document.body.createTextRange();
        return r.moveToElementText(node.parentNode), r.collapse(!0), r.moveEnd("character", end), 
        r.moveStart("character", start), r;
    }, ie && 11 > ie_version && (activeElt = function() {
        try {
            return document.activeElement;
        } catch (e) {
            return document.body;
        }
    });
    var knownScrollbarWidth, zwspSupported, badBidiRects, globalsRegistered = !1, dragAndDrop = function() {
        if (ie && 9 > ie_version) return !1;
        var div = elt("div");
        return "draggable" in div || "dragDrop" in div;
    }(), splitLines = CodeMirror.splitLines = 3 != "\n\nb".split(/\n/).length ? function(string) {
        for (var pos = 0, result = [], l = string.length; l >= pos; ) {
            var nl = string.indexOf("\n", pos);
            -1 == nl && (nl = string.length);
            var line = string.slice(pos, "\r" == string.charAt(nl - 1) ? nl - 1 : nl), rt = line.indexOf("\r");
            -1 != rt ? (result.push(line.slice(0, rt)), pos += rt + 1) : (result.push(line), 
            pos = nl + 1);
        }
        return result;
    } : function(string) {
        return string.split(/\r\n?|\n/);
    }, hasSelection = window.getSelection ? function(te) {
        try {
            return te.selectionStart != te.selectionEnd;
        } catch (e) {
            return !1;
        }
    } : function(te) {
        try {
            var range = te.ownerDocument.selection.createRange();
        } catch (e) {}
        return range && range.parentElement() == te ? 0 != range.compareEndPoints("StartToEnd", range) : !1;
    }, hasCopyEvent = function() {
        var e = elt("div");
        return "oncopy" in e ? !0 : (e.setAttribute("oncopy", "return;"), "function" == typeof e.oncopy);
    }(), badZoomedRects = null, keyNames = {
        3: "Enter",
        8: "Backspace",
        9: "Tab",
        13: "Enter",
        16: "Shift",
        17: "Ctrl",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Esc",
        32: "Space",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "Left",
        38: "Up",
        39: "Right",
        40: "Down",
        44: "PrintScrn",
        45: "Insert",
        46: "Delete",
        59: ";",
        61: "=",
        91: "Mod",
        92: "Mod",
        93: "Mod",
        107: "=",
        109: "-",
        127: "Delete",
        173: "-",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'",
        63232: "Up",
        63233: "Down",
        63234: "Left",
        63235: "Right",
        63272: "Delete",
        63273: "Home",
        63275: "End",
        63276: "PageUp",
        63277: "PageDown",
        63302: "Insert"
    };
    CodeMirror.keyNames = keyNames, function() {
        for (var i = 0; 10 > i; i++) keyNames[i + 48] = keyNames[i + 96] = String(i);
        for (var i = 65; 90 >= i; i++) keyNames[i] = String.fromCharCode(i);
        for (var i = 1; 12 >= i; i++) keyNames[i + 111] = keyNames[i + 63235] = "F" + i;
    }();
    var bidiOther, bidiOrdering = function() {
        function charType(code) {
            return 247 >= code ? lowTypes.charAt(code) : code >= 1424 && 1524 >= code ? "R" : code >= 1536 && 1773 >= code ? arabicTypes.charAt(code - 1536) : code >= 1774 && 2220 >= code ? "r" : code >= 8192 && 8203 >= code ? "w" : 8204 == code ? "b" : "L";
        }
        function BidiSpan(level, from, to) {
            this.level = level, this.from = from, this.to = to;
        }
        var lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN", arabicTypes = "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm", bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/, isNeutral = /[stwN]/, isStrong = /[LRr]/, countsAsLeft = /[Lb1n]/, countsAsNum = /[1n]/, outerType = "L";
        return function(str) {
            if (!bidiRE.test(str)) return !1;
            for (var type, len = str.length, types = [], i = 0; len > i; ++i) types.push(type = charType(str.charCodeAt(i)));
            for (var i = 0, prev = outerType; len > i; ++i) {
                var type = types[i];
                "m" == type ? types[i] = prev : prev = type;
            }
            for (var i = 0, cur = outerType; len > i; ++i) {
                var type = types[i];
                "1" == type && "r" == cur ? types[i] = "n" : isStrong.test(type) && (cur = type, 
                "r" == type && (types[i] = "R"));
            }
            for (var i = 1, prev = types[0]; len - 1 > i; ++i) {
                var type = types[i];
                "+" == type && "1" == prev && "1" == types[i + 1] ? types[i] = "1" : "," != type || prev != types[i + 1] || "1" != prev && "n" != prev || (types[i] = prev), 
                prev = type;
            }
            for (var i = 0; len > i; ++i) {
                var type = types[i];
                if ("," == type) types[i] = "N"; else if ("%" == type) {
                    for (var end = i + 1; len > end && "%" == types[end]; ++end) ;
                    for (var replace = i && "!" == types[i - 1] || len > end && "1" == types[end] ? "1" : "N", j = i; end > j; ++j) types[j] = replace;
                    i = end - 1;
                }
            }
            for (var i = 0, cur = outerType; len > i; ++i) {
                var type = types[i];
                "L" == cur && "1" == type ? types[i] = "L" : isStrong.test(type) && (cur = type);
            }
            for (var i = 0; len > i; ++i) if (isNeutral.test(types[i])) {
                for (var end = i + 1; len > end && isNeutral.test(types[end]); ++end) ;
                for (var before = "L" == (i ? types[i - 1] : outerType), after = "L" == (len > end ? types[end] : outerType), replace = before || after ? "L" : "R", j = i; end > j; ++j) types[j] = replace;
                i = end - 1;
            }
            for (var m, order = [], i = 0; len > i; ) if (countsAsLeft.test(types[i])) {
                var start = i;
                for (++i; len > i && countsAsLeft.test(types[i]); ++i) ;
                order.push(new BidiSpan(0, start, i));
            } else {
                var pos = i, at = order.length;
                for (++i; len > i && "L" != types[i]; ++i) ;
                for (var j = pos; i > j; ) if (countsAsNum.test(types[j])) {
                    j > pos && order.splice(at, 0, new BidiSpan(1, pos, j));
                    var nstart = j;
                    for (++j; i > j && countsAsNum.test(types[j]); ++j) ;
                    order.splice(at, 0, new BidiSpan(2, nstart, j)), pos = j;
                } else ++j;
                i > pos && order.splice(at, 0, new BidiSpan(1, pos, i));
            }
            return 1 == order[0].level && (m = str.match(/^\s+/)) && (order[0].from = m[0].length, 
            order.unshift(new BidiSpan(0, 0, m[0].length))), 1 == lst(order).level && (m = str.match(/\s+$/)) && (lst(order).to -= m[0].length, 
            order.push(new BidiSpan(0, len - m[0].length, len))), order[0].level != lst(order).level && order.push(new BidiSpan(order[0].level, len, len)), 
            order;
        };
    }();
    return CodeMirror.version = "4.7.0", CodeMirror;
}), function(mod) {
    "object" == typeof exports && "object" == typeof module ? mod(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define([ "../../lib/codemirror" ], mod) : mod(CodeMirror);
}(function(CodeMirror) {
    "use strict";
    CodeMirror.defineMode("javascript", function(config, parserConfig) {
        function readRegexp(stream) {
            for (var next, escaped = !1, inSet = !1; null != (next = stream.next()); ) {
                if (!escaped) {
                    if ("/" == next && !inSet) return;
                    "[" == next ? inSet = !0 : inSet && "]" == next && (inSet = !1);
                }
                escaped = !escaped && "\\" == next;
            }
        }
        function ret(tp, style, cont) {
            return type = tp, content = cont, style;
        }
        function tokenBase(stream, state) {
            var ch = stream.next();
            if ('"' == ch || "'" == ch) return state.tokenize = tokenString(ch), state.tokenize(stream, state);
            if ("." == ch && stream.match(/^\d+(?:[eE][+\-]?\d+)?/)) return ret("number", "number");
            if ("." == ch && stream.match("..")) return ret("spread", "meta");
            if (/[\[\]{}\(\),;\:\.]/.test(ch)) return ret(ch);
            if ("=" == ch && stream.eat(">")) return ret("=>", "operator");
            if ("0" == ch && stream.eat(/x/i)) return stream.eatWhile(/[\da-f]/i), ret("number", "number");
            if (/\d/.test(ch)) return stream.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/), ret("number", "number");
            if ("/" == ch) return stream.eat("*") ? (state.tokenize = tokenComment, tokenComment(stream, state)) : stream.eat("/") ? (stream.skipToEnd(), 
            ret("comment", "comment")) : "operator" == state.lastType || "keyword c" == state.lastType || "sof" == state.lastType || /^[\[{}\(,;:]$/.test(state.lastType) ? (readRegexp(stream), 
            stream.eatWhile(/[gimy]/), ret("regexp", "string-2")) : (stream.eatWhile(isOperatorChar), 
            ret("operator", "operator", stream.current()));
            if ("`" == ch) return state.tokenize = tokenQuasi, tokenQuasi(stream, state);
            if ("#" == ch) return stream.skipToEnd(), ret("error", "error");
            if (isOperatorChar.test(ch)) return stream.eatWhile(isOperatorChar), ret("operator", "operator", stream.current());
            if (wordRE.test(ch)) {
                stream.eatWhile(wordRE);
                var word = stream.current(), known = keywords.propertyIsEnumerable(word) && keywords[word];
                return known && "." != state.lastType ? ret(known.type, known.style, word) : ret("variable", "variable", word);
            }
        }
        function tokenString(quote) {
            return function(stream, state) {
                var next, escaped = !1;
                if (jsonldMode && "@" == stream.peek() && stream.match(isJsonldKeyword)) return state.tokenize = tokenBase, 
                ret("jsonld-keyword", "meta");
                for (;null != (next = stream.next()) && (next != quote || escaped); ) escaped = !escaped && "\\" == next;
                return escaped || (state.tokenize = tokenBase), ret("string", "string");
            };
        }
        function tokenComment(stream, state) {
            for (var ch, maybeEnd = !1; ch = stream.next(); ) {
                if ("/" == ch && maybeEnd) {
                    state.tokenize = tokenBase;
                    break;
                }
                maybeEnd = "*" == ch;
            }
            return ret("comment", "comment");
        }
        function tokenQuasi(stream, state) {
            for (var next, escaped = !1; null != (next = stream.next()); ) {
                if (!escaped && ("`" == next || "$" == next && stream.eat("{"))) {
                    state.tokenize = tokenBase;
                    break;
                }
                escaped = !escaped && "\\" == next;
            }
            return ret("quasi", "string-2", stream.current());
        }
        function findFatArrow(stream, state) {
            state.fatArrowAt && (state.fatArrowAt = null);
            var arrow = stream.string.indexOf("=>", stream.start);
            if (!(0 > arrow)) {
                for (var depth = 0, sawSomething = !1, pos = arrow - 1; pos >= 0; --pos) {
                    var ch = stream.string.charAt(pos), bracket = brackets.indexOf(ch);
                    if (bracket >= 0 && 3 > bracket) {
                        if (!depth) {
                            ++pos;
                            break;
                        }
                        if (0 == --depth) break;
                    } else if (bracket >= 3 && 6 > bracket) ++depth; else if (wordRE.test(ch)) sawSomething = !0; else if (sawSomething && !depth) {
                        ++pos;
                        break;
                    }
                }
                sawSomething && !depth && (state.fatArrowAt = pos);
            }
        }
        function JSLexical(indented, column, type, align, prev, info) {
            this.indented = indented, this.column = column, this.type = type, this.prev = prev, 
            this.info = info, null != align && (this.align = align);
        }
        function inScope(state, varname) {
            for (var v = state.localVars; v; v = v.next) if (v.name == varname) return !0;
            for (var cx = state.context; cx; cx = cx.prev) for (var v = cx.vars; v; v = v.next) if (v.name == varname) return !0;
        }
        function parseJS(state, style, type, content, stream) {
            var cc = state.cc;
            for (cx.state = state, cx.stream = stream, cx.marked = null, cx.cc = cc, cx.style = style, 
            state.lexical.hasOwnProperty("align") || (state.lexical.align = !0); ;) {
                var combinator = cc.length ? cc.pop() : jsonMode ? expression : statement;
                if (combinator(type, content)) {
                    for (;cc.length && cc[cc.length - 1].lex; ) cc.pop()();
                    return cx.marked ? cx.marked : "variable" == type && inScope(state, content) ? "variable-2" : style;
                }
            }
        }
        function pass() {
            for (var i = arguments.length - 1; i >= 0; i--) cx.cc.push(arguments[i]);
        }
        function cont() {
            return pass.apply(null, arguments), !0;
        }
        function register(varname) {
            function inList(list) {
                for (var v = list; v; v = v.next) if (v.name == varname) return !0;
                return !1;
            }
            var state = cx.state;
            if (state.context) {
                if (cx.marked = "def", inList(state.localVars)) return;
                state.localVars = {
                    name: varname,
                    next: state.localVars
                };
            } else {
                if (inList(state.globalVars)) return;
                parserConfig.globalVars && (state.globalVars = {
                    name: varname,
                    next: state.globalVars
                });
            }
        }
        function pushcontext() {
            cx.state.context = {
                prev: cx.state.context,
                vars: cx.state.localVars
            }, cx.state.localVars = defaultVars;
        }
        function popcontext() {
            cx.state.localVars = cx.state.context.vars, cx.state.context = cx.state.context.prev;
        }
        function pushlex(type, info) {
            var result = function() {
                var state = cx.state, indent = state.indented;
                if ("stat" == state.lexical.type) indent = state.lexical.indented; else for (var outer = state.lexical; outer && ")" == outer.type && outer.align; outer = outer.prev) indent = outer.indented;
                state.lexical = new JSLexical(indent, cx.stream.column(), type, null, state.lexical, info);
            };
            return result.lex = !0, result;
        }
        function poplex() {
            var state = cx.state;
            state.lexical.prev && (")" == state.lexical.type && (state.indented = state.lexical.indented), 
            state.lexical = state.lexical.prev);
        }
        function expect(wanted) {
            function exp(type) {
                return type == wanted ? cont() : ";" == wanted ? pass() : cont(exp);
            }
            return exp;
        }
        function statement(type, value) {
            return "var" == type ? cont(pushlex("vardef", value.length), vardef, expect(";"), poplex) : "keyword a" == type ? cont(pushlex("form"), expression, statement, poplex) : "keyword b" == type ? cont(pushlex("form"), statement, poplex) : "{" == type ? cont(pushlex("}"), block, poplex) : ";" == type ? cont() : "if" == type ? ("else" == cx.state.lexical.info && cx.state.cc[cx.state.cc.length - 1] == poplex && cx.state.cc.pop()(), 
            cont(pushlex("form"), expression, statement, poplex, maybeelse)) : "function" == type ? cont(functiondef) : "for" == type ? cont(pushlex("form"), forspec, statement, poplex) : "variable" == type ? cont(pushlex("stat"), maybelabel) : "switch" == type ? cont(pushlex("form"), expression, pushlex("}", "switch"), expect("{"), block, poplex, poplex) : "case" == type ? cont(expression, expect(":")) : "default" == type ? cont(expect(":")) : "catch" == type ? cont(pushlex("form"), pushcontext, expect("("), funarg, expect(")"), statement, poplex, popcontext) : "module" == type ? cont(pushlex("form"), pushcontext, afterModule, popcontext, poplex) : "class" == type ? cont(pushlex("form"), className, poplex) : "export" == type ? cont(pushlex("form"), afterExport, poplex) : "import" == type ? cont(pushlex("form"), afterImport, poplex) : pass(pushlex("stat"), expression, expect(";"), poplex);
        }
        function expression(type) {
            return expressionInner(type, !1);
        }
        function expressionNoComma(type) {
            return expressionInner(type, !0);
        }
        function expressionInner(type, noComma) {
            if (cx.state.fatArrowAt == cx.stream.start) {
                var body = noComma ? arrowBodyNoComma : arrowBody;
                if ("(" == type) return cont(pushcontext, pushlex(")"), commasep(pattern, ")"), poplex, expect("=>"), body, popcontext);
                if ("variable" == type) return pass(pushcontext, pattern, expect("=>"), body, popcontext);
            }
            var maybeop = noComma ? maybeoperatorNoComma : maybeoperatorComma;
            return atomicTypes.hasOwnProperty(type) ? cont(maybeop) : "function" == type ? cont(functiondef, maybeop) : "keyword c" == type ? cont(noComma ? maybeexpressionNoComma : maybeexpression) : "(" == type ? cont(pushlex(")"), maybeexpression, comprehension, expect(")"), poplex, maybeop) : "operator" == type || "spread" == type ? cont(noComma ? expressionNoComma : expression) : "[" == type ? cont(pushlex("]"), arrayLiteral, poplex, maybeop) : "{" == type ? contCommasep(objprop, "}", null, maybeop) : "quasi" == type ? pass(quasi, maybeop) : cont();
        }
        function maybeexpression(type) {
            return type.match(/[;\}\)\],]/) ? pass() : pass(expression);
        }
        function maybeexpressionNoComma(type) {
            return type.match(/[;\}\)\],]/) ? pass() : pass(expressionNoComma);
        }
        function maybeoperatorComma(type, value) {
            return "," == type ? cont(expression) : maybeoperatorNoComma(type, value, !1);
        }
        function maybeoperatorNoComma(type, value, noComma) {
            var me = 0 == noComma ? maybeoperatorComma : maybeoperatorNoComma, expr = 0 == noComma ? expression : expressionNoComma;
            return "=>" == type ? cont(pushcontext, noComma ? arrowBodyNoComma : arrowBody, popcontext) : "operator" == type ? /\+\+|--/.test(value) ? cont(me) : "?" == value ? cont(expression, expect(":"), expr) : cont(expr) : "quasi" == type ? pass(quasi, me) : ";" != type ? "(" == type ? contCommasep(expressionNoComma, ")", "call", me) : "." == type ? cont(property, me) : "[" == type ? cont(pushlex("]"), maybeexpression, expect("]"), poplex, me) : void 0 : void 0;
        }
        function quasi(type, value) {
            return "quasi" != type ? pass() : "${" != value.slice(value.length - 2) ? cont(quasi) : cont(expression, continueQuasi);
        }
        function continueQuasi(type) {
            return "}" == type ? (cx.marked = "string-2", cx.state.tokenize = tokenQuasi, cont(quasi)) : void 0;
        }
        function arrowBody(type) {
            return findFatArrow(cx.stream, cx.state), pass("{" == type ? statement : expression);
        }
        function arrowBodyNoComma(type) {
            return findFatArrow(cx.stream, cx.state), pass("{" == type ? statement : expressionNoComma);
        }
        function maybelabel(type) {
            return ":" == type ? cont(poplex, statement) : pass(maybeoperatorComma, expect(";"), poplex);
        }
        function property(type) {
            return "variable" == type ? (cx.marked = "property", cont()) : void 0;
        }
        function objprop(type, value) {
            return "variable" == type || "keyword" == cx.style ? (cx.marked = "property", cont("get" == value || "set" == value ? getterSetter : afterprop)) : "number" == type || "string" == type ? (cx.marked = jsonldMode ? "property" : cx.style + " property", 
            cont(afterprop)) : "jsonld-keyword" == type ? cont(afterprop) : "[" == type ? cont(expression, expect("]"), afterprop) : void 0;
        }
        function getterSetter(type) {
            return "variable" != type ? pass(afterprop) : (cx.marked = "property", cont(functiondef));
        }
        function afterprop(type) {
            return ":" == type ? cont(expressionNoComma) : "(" == type ? pass(functiondef) : void 0;
        }
        function commasep(what, end) {
            function proceed(type) {
                if ("," == type) {
                    var lex = cx.state.lexical;
                    return "call" == lex.info && (lex.pos = (lex.pos || 0) + 1), cont(what, proceed);
                }
                return type == end ? cont() : cont(expect(end));
            }
            return function(type) {
                return type == end ? cont() : pass(what, proceed);
            };
        }
        function contCommasep(what, end, info) {
            for (var i = 3; i < arguments.length; i++) cx.cc.push(arguments[i]);
            return cont(pushlex(end, info), commasep(what, end), poplex);
        }
        function block(type) {
            return "}" == type ? cont() : pass(statement, block);
        }
        function maybetype(type) {
            return isTS && ":" == type ? cont(typedef) : void 0;
        }
        function typedef(type) {
            return "variable" == type ? (cx.marked = "variable-3", cont()) : void 0;
        }
        function vardef() {
            return pass(pattern, maybetype, maybeAssign, vardefCont);
        }
        function pattern(type, value) {
            return "variable" == type ? (register(value), cont()) : "[" == type ? contCommasep(pattern, "]") : "{" == type ? contCommasep(proppattern, "}") : void 0;
        }
        function proppattern(type, value) {
            return "variable" != type || cx.stream.match(/^\s*:/, !1) ? ("variable" == type && (cx.marked = "property"), 
            cont(expect(":"), pattern, maybeAssign)) : (register(value), cont(maybeAssign));
        }
        function maybeAssign(_type, value) {
            return "=" == value ? cont(expressionNoComma) : void 0;
        }
        function vardefCont(type) {
            return "," == type ? cont(vardef) : void 0;
        }
        function maybeelse(type, value) {
            return "keyword b" == type && "else" == value ? cont(pushlex("form", "else"), statement, poplex) : void 0;
        }
        function forspec(type) {
            return "(" == type ? cont(pushlex(")"), forspec1, expect(")"), poplex) : void 0;
        }
        function forspec1(type) {
            return "var" == type ? cont(vardef, expect(";"), forspec2) : ";" == type ? cont(forspec2) : "variable" == type ? cont(formaybeinof) : pass(expression, expect(";"), forspec2);
        }
        function formaybeinof(_type, value) {
            return "in" == value || "of" == value ? (cx.marked = "keyword", cont(expression)) : cont(maybeoperatorComma, forspec2);
        }
        function forspec2(type, value) {
            return ";" == type ? cont(forspec3) : "in" == value || "of" == value ? (cx.marked = "keyword", 
            cont(expression)) : pass(expression, expect(";"), forspec3);
        }
        function forspec3(type) {
            ")" != type && cont(expression);
        }
        function functiondef(type, value) {
            return "*" == value ? (cx.marked = "keyword", cont(functiondef)) : "variable" == type ? (register(value), 
            cont(functiondef)) : "(" == type ? cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, statement, popcontext) : void 0;
        }
        function funarg(type) {
            return "spread" == type ? cont(funarg) : pass(pattern, maybetype);
        }
        function className(type, value) {
            return "variable" == type ? (register(value), cont(classNameAfter)) : void 0;
        }
        function classNameAfter(type, value) {
            return "extends" == value ? cont(expression, classNameAfter) : "{" == type ? cont(pushlex("}"), classBody, poplex) : void 0;
        }
        function classBody(type, value) {
            return "variable" == type || "keyword" == cx.style ? (cx.marked = "property", "get" == value || "set" == value ? cont(classGetterSetter, functiondef, classBody) : cont(functiondef, classBody)) : "*" == value ? (cx.marked = "keyword", 
            cont(classBody)) : ";" == type ? cont(classBody) : "}" == type ? cont() : void 0;
        }
        function classGetterSetter(type) {
            return "variable" != type ? pass() : (cx.marked = "property", cont());
        }
        function afterModule(type, value) {
            return "string" == type ? cont(statement) : "variable" == type ? (register(value), 
            cont(maybeFrom)) : void 0;
        }
        function afterExport(_type, value) {
            return "*" == value ? (cx.marked = "keyword", cont(maybeFrom, expect(";"))) : "default" == value ? (cx.marked = "keyword", 
            cont(expression, expect(";"))) : pass(statement);
        }
        function afterImport(type) {
            return "string" == type ? cont() : pass(importSpec, maybeFrom);
        }
        function importSpec(type, value) {
            return "{" == type ? contCommasep(importSpec, "}") : ("variable" == type && register(value), 
            cont());
        }
        function maybeFrom(_type, value) {
            return "from" == value ? (cx.marked = "keyword", cont(expression)) : void 0;
        }
        function arrayLiteral(type) {
            return "]" == type ? cont() : pass(expressionNoComma, maybeArrayComprehension);
        }
        function maybeArrayComprehension(type) {
            return "for" == type ? pass(comprehension, expect("]")) : "," == type ? cont(commasep(maybeexpressionNoComma, "]")) : pass(commasep(expressionNoComma, "]"));
        }
        function comprehension(type) {
            return "for" == type ? cont(forspec, comprehension) : "if" == type ? cont(expression, comprehension) : void 0;
        }
        var type, content, indentUnit = config.indentUnit, statementIndent = parserConfig.statementIndent, jsonldMode = parserConfig.jsonld, jsonMode = parserConfig.json || jsonldMode, isTS = parserConfig.typescript, wordRE = parserConfig.wordCharacters || /[\w$\xa1-\uffff]/, keywords = function() {
            function kw(type) {
                return {
                    type: type,
                    style: "keyword"
                };
            }
            var A = kw("keyword a"), B = kw("keyword b"), C = kw("keyword c"), operator = kw("operator"), atom = {
                type: "atom",
                style: "atom"
            }, jsKeywords = {
                "if": kw("if"),
                "while": A,
                "with": A,
                "else": B,
                "do": B,
                "try": B,
                "finally": B,
                "return": C,
                "break": C,
                "continue": C,
                "new": C,
                "delete": C,
                "throw": C,
                "debugger": C,
                "var": kw("var"),
                "const": kw("var"),
                let: kw("var"),
                "function": kw("function"),
                "catch": kw("catch"),
                "for": kw("for"),
                "switch": kw("switch"),
                "case": kw("case"),
                "default": kw("default"),
                "in": operator,
                "typeof": operator,
                "instanceof": operator,
                "true": atom,
                "false": atom,
                "null": atom,
                undefined: atom,
                NaN: atom,
                Infinity: atom,
                "this": kw("this"),
                module: kw("module"),
                "class": kw("class"),
                "super": kw("atom"),
                "yield": C,
                "export": kw("export"),
                "import": kw("import"),
                "extends": C
            };
            if (isTS) {
                var type = {
                    type: "variable",
                    style: "variable-3"
                }, tsKeywords = {
                    "interface": kw("interface"),
                    "extends": kw("extends"),
                    constructor: kw("constructor"),
                    "public": kw("public"),
                    "private": kw("private"),
                    "protected": kw("protected"),
                    "static": kw("static"),
                    string: type,
                    number: type,
                    bool: type,
                    any: type
                };
                for (var attr in tsKeywords) jsKeywords[attr] = tsKeywords[attr];
            }
            return jsKeywords;
        }(), isOperatorChar = /[+\-*&%=<>!?|~^]/, isJsonldKeyword = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/, brackets = "([{}])", atomicTypes = {
            atom: !0,
            number: !0,
            variable: !0,
            string: !0,
            regexp: !0,
            "this": !0,
            "jsonld-keyword": !0
        }, cx = {
            state: null,
            column: null,
            marked: null,
            cc: null
        }, defaultVars = {
            name: "this",
            next: {
                name: "arguments"
            }
        };
        return poplex.lex = !0, {
            startState: function(basecolumn) {
                var state = {
                    tokenize: tokenBase,
                    lastType: "sof",
                    cc: [],
                    lexical: new JSLexical((basecolumn || 0) - indentUnit, 0, "block", !1),
                    localVars: parserConfig.localVars,
                    context: parserConfig.localVars && {
                        vars: parserConfig.localVars
                    },
                    indented: 0
                };
                return parserConfig.globalVars && "object" == typeof parserConfig.globalVars && (state.globalVars = parserConfig.globalVars), 
                state;
            },
            token: function(stream, state) {
                if (stream.sol() && (state.lexical.hasOwnProperty("align") || (state.lexical.align = !1), 
                state.indented = stream.indentation(), findFatArrow(stream, state)), state.tokenize != tokenComment && stream.eatSpace()) return null;
                var style = state.tokenize(stream, state);
                return "comment" == type ? style : (state.lastType = "operator" != type || "++" != content && "--" != content ? type : "incdec", 
                parseJS(state, style, type, content, stream));
            },
            indent: function(state, textAfter) {
                if (state.tokenize == tokenComment) return CodeMirror.Pass;
                if (state.tokenize != tokenBase) return 0;
                var firstChar = textAfter && textAfter.charAt(0), lexical = state.lexical;
                if (!/^\s*else\b/.test(textAfter)) for (var i = state.cc.length - 1; i >= 0; --i) {
                    var c = state.cc[i];
                    if (c == poplex) lexical = lexical.prev; else if (c != maybeelse) break;
                }
                "stat" == lexical.type && "}" == firstChar && (lexical = lexical.prev), statementIndent && ")" == lexical.type && "stat" == lexical.prev.type && (lexical = lexical.prev);
                var type = lexical.type, closing = firstChar == type;
                return "vardef" == type ? lexical.indented + ("operator" == state.lastType || "," == state.lastType ? lexical.info + 1 : 0) : "form" == type && "{" == firstChar ? lexical.indented : "form" == type ? lexical.indented + indentUnit : "stat" == type ? lexical.indented + ("operator" == state.lastType || "," == state.lastType ? statementIndent || indentUnit : 0) : "switch" != lexical.info || closing || 0 == parserConfig.doubleIndentSwitch ? lexical.align ? lexical.column + (closing ? 0 : 1) : lexical.indented + (closing ? 0 : indentUnit) : lexical.indented + (/^(?:case|default)\b/.test(textAfter) ? indentUnit : 2 * indentUnit);
            },
            electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
            blockCommentStart: jsonMode ? null : "/*",
            blockCommentEnd: jsonMode ? null : "*/",
            lineComment: jsonMode ? null : "//",
            fold: "brace",
            helperType: jsonMode ? "json" : "javascript",
            jsonldMode: jsonldMode,
            jsonMode: jsonMode
        };
    }), CodeMirror.registerHelper("wordChars", "javascript", /[\w$]/), CodeMirror.defineMIME("text/javascript", "javascript"), 
    CodeMirror.defineMIME("text/ecmascript", "javascript"), CodeMirror.defineMIME("application/javascript", "javascript"), 
    CodeMirror.defineMIME("application/x-javascript", "javascript"), CodeMirror.defineMIME("application/ecmascript", "javascript"), 
    CodeMirror.defineMIME("application/json", {
        name: "javascript",
        json: !0
    }), CodeMirror.defineMIME("application/x-json", {
        name: "javascript",
        json: !0
    }), CodeMirror.defineMIME("application/ld+json", {
        name: "javascript",
        jsonld: !0
    }), CodeMirror.defineMIME("text/typescript", {
        name: "javascript",
        typescript: !0
    }), CodeMirror.defineMIME("application/typescript", {
        name: "javascript",
        typescript: !0
    });
}), function(mod) {
    "object" == typeof exports && "object" == typeof module ? mod(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define([ "../../lib/codemirror" ], mod) : mod(CodeMirror);
}(function(CodeMirror) {
    "use strict";
    function showTooltip(e, content) {
        function position(e) {
            return tt.parentNode ? (tt.style.top = Math.max(0, e.clientY - tt.offsetHeight - 5) + "px", 
            void (tt.style.left = e.clientX + 5 + "px")) : CodeMirror.off(document, "mousemove", position);
        }
        var tt = document.createElement("div");
        return tt.className = "CodeMirror-lint-tooltip", tt.appendChild(content.cloneNode(!0)), 
        document.body.appendChild(tt), CodeMirror.on(document, "mousemove", position), position(e), 
        null != tt.style.opacity && (tt.style.opacity = 1), tt;
    }
    function rm(elt) {
        elt.parentNode && elt.parentNode.removeChild(elt);
    }
    function hideTooltip(tt) {
        tt.parentNode && (null == tt.style.opacity && rm(tt), tt.style.opacity = 0, setTimeout(function() {
            rm(tt);
        }, 600));
    }
    function showTooltipFor(e, content, node) {
        function hide() {
            CodeMirror.off(node, "mouseout", hide), tooltip && (hideTooltip(tooltip), tooltip = null);
        }
        var tooltip = showTooltip(e, content), poll = setInterval(function() {
            if (tooltip) for (var n = node; ;n = n.parentNode) {
                if (n == document.body) return;
                if (!n) {
                    hide();
                    break;
                }
            }
            return tooltip ? void 0 : clearInterval(poll);
        }, 400);
        CodeMirror.on(node, "mouseout", hide);
    }
    function LintState(cm, options, hasGutter) {
        this.marked = [], this.options = options, this.timeout = null, this.hasGutter = hasGutter, 
        this.onMouseOver = function(e) {
            onMouseOver(cm, e);
        };
    }
    function parseOptions(cm, options) {
        if (options instanceof Function) return {
            getAnnotations: options
        };
        if (options && options !== !0 || (options = {}), options.getAnnotations || (options.getAnnotations = cm.getHelper(CodeMirror.Pos(0, 0), "lint")), 
        !options.getAnnotations) throw new Error("Required option 'getAnnotations' missing (lint addon)");
        return options;
    }
    function clearMarks(cm) {
        var state = cm.state.lint;
        state.hasGutter && cm.clearGutter(GUTTER_ID);
        for (var i = 0; i < state.marked.length; ++i) state.marked[i].clear();
        state.marked.length = 0;
    }
    function makeMarker(labels, severity, multiple, tooltips) {
        var marker = document.createElement("div"), inner = marker;
        return marker.className = "CodeMirror-lint-marker-" + severity, multiple && (inner = marker.appendChild(document.createElement("div")), 
        inner.className = "CodeMirror-lint-marker-multiple"), 0 != tooltips && CodeMirror.on(inner, "mouseover", function(e) {
            showTooltipFor(e, labels, inner);
        }), marker;
    }
    function getMaxSeverity(a, b) {
        return "error" == a ? a : b;
    }
    function groupByLine(annotations) {
        for (var lines = [], i = 0; i < annotations.length; ++i) {
            var ann = annotations[i], line = ann.from.line;
            (lines[line] || (lines[line] = [])).push(ann);
        }
        return lines;
    }
    function annotationTooltip(ann) {
        var severity = ann.severity;
        severity || (severity = "error");
        var tip = document.createElement("div");
        return tip.className = "CodeMirror-lint-message-" + severity, tip.appendChild(document.createTextNode(ann.message)), 
        tip;
    }
    function startLinting(cm) {
        var state = cm.state.lint, options = state.options, passOptions = options.options || options;
        options.async ? options.getAnnotations(cm.getValue(), updateLinting, passOptions, cm) : updateLinting(cm, options.getAnnotations(cm.getValue(), passOptions, cm));
    }
    function updateLinting(cm, annotationsNotSorted) {
        clearMarks(cm);
        for (var state = cm.state.lint, options = state.options, annotations = groupByLine(annotationsNotSorted), line = 0; line < annotations.length; ++line) {
            var anns = annotations[line];
            if (anns) {
                for (var maxSeverity = null, tipLabel = state.hasGutter && document.createDocumentFragment(), i = 0; i < anns.length; ++i) {
                    var ann = anns[i], severity = ann.severity;
                    severity || (severity = "error"), maxSeverity = getMaxSeverity(maxSeverity, severity), 
                    options.formatAnnotation && (ann = options.formatAnnotation(ann)), state.hasGutter && tipLabel.appendChild(annotationTooltip(ann)), 
                    ann.to && state.marked.push(cm.markText(ann.from, ann.to, {
                        className: "CodeMirror-lint-mark-" + severity,
                        __annotation: ann
                    }));
                }
                state.hasGutter && cm.setGutterMarker(line, GUTTER_ID, makeMarker(tipLabel, maxSeverity, anns.length > 1, state.options.tooltips));
            }
        }
        options.onUpdateLinting && options.onUpdateLinting(annotationsNotSorted, annotations, cm);
    }
    function onChange(cm) {
        var state = cm.state.lint;
        clearTimeout(state.timeout), state.timeout = setTimeout(function() {
            startLinting(cm);
        }, state.options.delay || 500);
    }
    function popupSpanTooltip(ann, e) {
        var target = e.target || e.srcElement;
        showTooltipFor(e, annotationTooltip(ann), target);
    }
    function onMouseOver(cm, e) {
        var target = e.target || e.srcElement;
        if (/\bCodeMirror-lint-mark-/.test(target.className)) for (var box = target.getBoundingClientRect(), x = (box.left + box.right) / 2, y = (box.top + box.bottom) / 2, spans = cm.findMarksAt(cm.coordsChar({
            left: x,
            top: y
        }, "client")), i = 0; i < spans.length; ++i) {
            var ann = spans[i].__annotation;
            if (ann) return popupSpanTooltip(ann, e);
        }
    }
    var GUTTER_ID = "CodeMirror-lint-markers";
    CodeMirror.defineOption("lint", !1, function(cm, val, old) {
        if (old && old != CodeMirror.Init && (clearMarks(cm), cm.off("change", onChange), 
        CodeMirror.off(cm.getWrapperElement(), "mouseover", cm.state.lint.onMouseOver), 
        delete cm.state.lint), val) {
            for (var gutters = cm.getOption("gutters"), hasLintGutter = !1, i = 0; i < gutters.length; ++i) gutters[i] == GUTTER_ID && (hasLintGutter = !0);
            var state = cm.state.lint = new LintState(cm, parseOptions(cm, val), hasLintGutter);
            cm.on("change", onChange), 0 != state.options.tooltips && CodeMirror.on(cm.getWrapperElement(), "mouseover", state.onMouseOver), 
            startLinting(cm);
        }
    });
}), function(mod) {
    "object" == typeof exports && "object" == typeof module ? mod(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define([ "../../lib/codemirror" ], mod) : mod(CodeMirror);
}(function(CodeMirror) {
    "use strict";
    CodeMirror.registerHelper("lint", "json", function(text) {
        var found = [];
        jsonlint.parseError = function(str, hash) {
            var loc = hash.loc;
            found.push({
                from: CodeMirror.Pos(loc.first_line - 1, loc.first_column),
                to: CodeMirror.Pos(loc.last_line - 1, loc.last_column),
                message: str
            });
        };
        try {
            jsonlint.parse(text);
        } catch (e) {}
        return found;
    });
}), function(mod) {
    "object" == typeof exports && "object" == typeof module ? mod(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define([ "../../lib/codemirror" ], mod) : mod(CodeMirror);
}(function(CodeMirror) {
    "use strict";
    CodeMirror.registerHelper("fold", "brace", function(cm, start) {
        function findOpening(openCh) {
            for (var at = start.ch, pass = 0; ;) {
                var found = 0 >= at ? -1 : lineText.lastIndexOf(openCh, at - 1);
                if (-1 != found) {
                    if (1 == pass && found < start.ch) break;
                    if (tokenType = cm.getTokenTypeAt(CodeMirror.Pos(line, found + 1)), !/^(comment|string)/.test(tokenType)) return found + 1;
                    at = found - 1;
                } else {
                    if (1 == pass) break;
                    pass = 1, at = lineText.length;
                }
            }
        }
        var startCh, tokenType, line = start.line, lineText = cm.getLine(line), startToken = "{", endToken = "}", startCh = findOpening("{");
        if (null == startCh && (startToken = "[", endToken = "]", startCh = findOpening("[")), 
        null != startCh) {
            var end, endCh, count = 1, lastLine = cm.lastLine();
            outer: for (var i = line; lastLine >= i; ++i) for (var text = cm.getLine(i), pos = i == line ? startCh : 0; ;) {
                var nextOpen = text.indexOf(startToken, pos), nextClose = text.indexOf(endToken, pos);
                if (0 > nextOpen && (nextOpen = text.length), 0 > nextClose && (nextClose = text.length), 
                pos = Math.min(nextOpen, nextClose), pos == text.length) break;
                if (cm.getTokenTypeAt(CodeMirror.Pos(i, pos + 1)) == tokenType) if (pos == nextOpen) ++count; else if (!--count) {
                    end = i, endCh = pos;
                    break outer;
                }
                ++pos;
            }
            if (null != end && (line != end || endCh != startCh)) return {
                from: CodeMirror.Pos(line, startCh),
                to: CodeMirror.Pos(end, endCh)
            };
        }
    }), CodeMirror.registerHelper("fold", "import", function(cm, start) {
        function hasImport(line) {
            if (line < cm.firstLine() || line > cm.lastLine()) return null;
            var start = cm.getTokenAt(CodeMirror.Pos(line, 1));
            if (/\S/.test(start.string) || (start = cm.getTokenAt(CodeMirror.Pos(line, start.end + 1))), 
            "keyword" != start.type || "import" != start.string) return null;
            for (var i = line, e = Math.min(cm.lastLine(), line + 10); e >= i; ++i) {
                var text = cm.getLine(i), semi = text.indexOf(";");
                if (-1 != semi) return {
                    startCh: start.end,
                    end: CodeMirror.Pos(i, semi)
                };
            }
        }
        var prev, start = start.line, has = hasImport(start);
        if (!has || hasImport(start - 1) || (prev = hasImport(start - 2)) && prev.end.line == start - 1) return null;
        for (var end = has.end; ;) {
            var next = hasImport(end.line + 1);
            if (null == next) break;
            end = next.end;
        }
        return {
            from: cm.clipPos(CodeMirror.Pos(start, has.startCh + 1)),
            to: end
        };
    }), CodeMirror.registerHelper("fold", "include", function(cm, start) {
        function hasInclude(line) {
            if (line < cm.firstLine() || line > cm.lastLine()) return null;
            var start = cm.getTokenAt(CodeMirror.Pos(line, 1));
            return /\S/.test(start.string) || (start = cm.getTokenAt(CodeMirror.Pos(line, start.end + 1))), 
            "meta" == start.type && "#include" == start.string.slice(0, 8) ? start.start + 8 : void 0;
        }
        var start = start.line, has = hasInclude(start);
        if (null == has || null != hasInclude(start - 1)) return null;
        for (var end = start; ;) {
            var next = hasInclude(end + 1);
            if (null == next) break;
            ++end;
        }
        return {
            from: CodeMirror.Pos(start, has + 1),
            to: cm.clipPos(CodeMirror.Pos(end))
        };
    });
}), function(mod) {
    "object" == typeof exports && "object" == typeof module ? mod(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define([ "../../lib/codemirror" ], mod) : mod(CodeMirror);
}(function(CodeMirror) {
    "use strict";
    function doFold(cm, pos, options, force) {
        function getRange(allowFolded) {
            var range = finder(cm, pos);
            if (!range || range.to.line - range.from.line < minSize) return null;
            for (var marks = cm.findMarksAt(range.from), i = 0; i < marks.length; ++i) if (marks[i].__isFold && "fold" !== force) {
                if (!allowFolded) return null;
                range.cleared = !0, marks[i].clear();
            }
            return range;
        }
        if (options && options.call) {
            var finder = options;
            options = null;
        } else var finder = getOption(cm, options, "rangeFinder");
        "number" == typeof pos && (pos = CodeMirror.Pos(pos, 0));
        var minSize = getOption(cm, options, "minFoldSize"), range = getRange(!0);
        if (getOption(cm, options, "scanUp")) for (;!range && pos.line > cm.firstLine(); ) pos = CodeMirror.Pos(pos.line - 1, 0), 
        range = getRange(!1);
        if (range && !range.cleared && "unfold" !== force) {
            var myWidget = makeWidget(cm, options);
            CodeMirror.on(myWidget, "mousedown", function(e) {
                myRange.clear(), CodeMirror.e_preventDefault(e);
            });
            var myRange = cm.markText(range.from, range.to, {
                replacedWith: myWidget,
                clearOnEnter: !0,
                __isFold: !0
            });
            myRange.on("clear", function(from, to) {
                CodeMirror.signal(cm, "unfold", cm, from, to);
            }), CodeMirror.signal(cm, "fold", cm, range.from, range.to);
        }
    }
    function makeWidget(cm, options) {
        var widget = getOption(cm, options, "widget");
        if ("string" == typeof widget) {
            var text = document.createTextNode(widget);
            widget = document.createElement("span"), widget.appendChild(text), widget.className = "CodeMirror-foldmarker";
        }
        return widget;
    }
    function getOption(cm, options, name) {
        if (options && void 0 !== options[name]) return options[name];
        var editorOptions = cm.options.foldOptions;
        return editorOptions && void 0 !== editorOptions[name] ? editorOptions[name] : defaultOptions[name];
    }
    CodeMirror.newFoldFunction = function(rangeFinder, widget) {
        return function(cm, pos) {
            doFold(cm, pos, {
                rangeFinder: rangeFinder,
                widget: widget
            });
        };
    }, CodeMirror.defineExtension("foldCode", function(pos, options, force) {
        doFold(this, pos, options, force);
    }), CodeMirror.defineExtension("isFolded", function(pos) {
        for (var marks = this.findMarksAt(pos), i = 0; i < marks.length; ++i) if (marks[i].__isFold) return !0;
    }), CodeMirror.commands.toggleFold = function(cm) {
        cm.foldCode(cm.getCursor());
    }, CodeMirror.commands.fold = function(cm) {
        cm.foldCode(cm.getCursor(), null, "fold");
    }, CodeMirror.commands.unfold = function(cm) {
        cm.foldCode(cm.getCursor(), null, "unfold");
    }, CodeMirror.commands.foldAll = function(cm) {
        cm.operation(function() {
            for (var i = cm.firstLine(), e = cm.lastLine(); e >= i; i++) cm.foldCode(CodeMirror.Pos(i, 0), null, "fold");
        });
    }, CodeMirror.commands.unfoldAll = function(cm) {
        cm.operation(function() {
            for (var i = cm.firstLine(), e = cm.lastLine(); e >= i; i++) cm.foldCode(CodeMirror.Pos(i, 0), null, "unfold");
        });
    }, CodeMirror.registerHelper("fold", "combine", function() {
        var funcs = Array.prototype.slice.call(arguments, 0);
        return function(cm, start) {
            for (var i = 0; i < funcs.length; ++i) {
                var found = funcs[i](cm, start);
                if (found) return found;
            }
        };
    }), CodeMirror.registerHelper("fold", "auto", function(cm, start) {
        for (var helpers = cm.getHelpers(start, "fold"), i = 0; i < helpers.length; i++) {
            var cur = helpers[i](cm, start);
            if (cur) return cur;
        }
    });
    var defaultOptions = {
        rangeFinder: CodeMirror.fold.auto,
        widget: "↔",
        minFoldSize: 0,
        scanUp: !1
    };
    CodeMirror.defineOption("foldOptions", null);
}), function(mod) {
    "object" == typeof exports && "object" == typeof module ? mod(require("../../lib/codemirror"), require("./foldcode")) : "function" == typeof define && define.amd ? define([ "../../lib/codemirror", "./foldcode" ], mod) : mod(CodeMirror);
}(function(CodeMirror) {
    "use strict";
    function State(options) {
        this.options = options, this.from = this.to = 0;
    }
    function parseOptions(opts) {
        return opts === !0 && (opts = {}), null == opts.gutter && (opts.gutter = "CodeMirror-foldgutter"), 
        null == opts.indicatorOpen && (opts.indicatorOpen = "CodeMirror-foldgutter-open"), 
        null == opts.indicatorFolded && (opts.indicatorFolded = "CodeMirror-foldgutter-folded"), 
        opts;
    }
    function isFolded(cm, line) {
        for (var marks = cm.findMarksAt(Pos(line)), i = 0; i < marks.length; ++i) if (marks[i].__isFold && marks[i].find().from.line == line) return !0;
    }
    function marker(spec) {
        if ("string" == typeof spec) {
            var elt = document.createElement("div");
            return elt.className = spec + " CodeMirror-guttermarker-subtle", elt;
        }
        return spec.cloneNode(!0);
    }
    function updateFoldInfo(cm, from, to) {
        var opts = cm.state.foldGutter.options, cur = from;
        cm.eachLine(from, to, function(line) {
            var mark = null;
            if (isFolded(cm, cur)) mark = marker(opts.indicatorFolded); else {
                var pos = Pos(cur, 0), func = opts.rangeFinder || CodeMirror.fold.auto, range = func && func(cm, pos);
                range && range.from.line + 1 < range.to.line && (mark = marker(opts.indicatorOpen));
            }
            cm.setGutterMarker(line, opts.gutter, mark), ++cur;
        });
    }
    function updateInViewport(cm) {
        var vp = cm.getViewport(), state = cm.state.foldGutter;
        state && (cm.operation(function() {
            updateFoldInfo(cm, vp.from, vp.to);
        }), state.from = vp.from, state.to = vp.to);
    }
    function onGutterClick(cm, line, gutter) {
        var opts = cm.state.foldGutter.options;
        gutter == opts.gutter && cm.foldCode(Pos(line, 0), opts.rangeFinder);
    }
    function onChange(cm) {
        var state = cm.state.foldGutter, opts = cm.state.foldGutter.options;
        state.from = state.to = 0, clearTimeout(state.changeUpdate), state.changeUpdate = setTimeout(function() {
            updateInViewport(cm);
        }, opts.foldOnChangeTimeSpan || 600);
    }
    function onViewportChange(cm) {
        var state = cm.state.foldGutter, opts = cm.state.foldGutter.options;
        clearTimeout(state.changeUpdate), state.changeUpdate = setTimeout(function() {
            var vp = cm.getViewport();
            state.from == state.to || vp.from - state.to > 20 || state.from - vp.to > 20 ? updateInViewport(cm) : cm.operation(function() {
                vp.from < state.from && (updateFoldInfo(cm, vp.from, state.from), state.from = vp.from), 
                vp.to > state.to && (updateFoldInfo(cm, state.to, vp.to), state.to = vp.to);
            });
        }, opts.updateViewportTimeSpan || 400);
    }
    function onFold(cm, from) {
        var state = cm.state.foldGutter, line = from.line;
        line >= state.from && line < state.to && updateFoldInfo(cm, line, line + 1);
    }
    CodeMirror.defineOption("foldGutter", !1, function(cm, val, old) {
        old && old != CodeMirror.Init && (cm.clearGutter(cm.state.foldGutter.options.gutter), 
        cm.state.foldGutter = null, cm.off("gutterClick", onGutterClick), cm.off("change", onChange), 
        cm.off("viewportChange", onViewportChange), cm.off("fold", onFold), cm.off("unfold", onFold), 
        cm.off("swapDoc", updateInViewport)), val && (cm.state.foldGutter = new State(parseOptions(val)), 
        updateInViewport(cm), cm.on("gutterClick", onGutterClick), cm.on("change", onChange), 
        cm.on("viewportChange", onViewportChange), cm.on("fold", onFold), cm.on("unfold", onFold), 
        cm.on("swapDoc", updateInViewport));
    });
    var Pos = CodeMirror.Pos;
}), function(mod) {
    "object" == typeof exports && "object" == typeof module ? mod(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define([ "../../lib/codemirror" ], mod) : mod(CodeMirror);
}(function(CodeMirror) {
    function findMatchingBracket(cm, where, strict, config) {
        var line = cm.getLineHandle(where.line), pos = where.ch - 1, match = pos >= 0 && matching[line.text.charAt(pos)] || matching[line.text.charAt(++pos)];
        if (!match) return null;
        var dir = ">" == match.charAt(1) ? 1 : -1;
        if (strict && dir > 0 != (pos == where.ch)) return null;
        var style = cm.getTokenTypeAt(Pos(where.line, pos + 1)), found = scanForBracket(cm, Pos(where.line, pos + (dir > 0 ? 1 : 0)), dir, style || null, config);
        return null == found ? null : {
            from: Pos(where.line, pos),
            to: found && found.pos,
            match: found && found.ch == match.charAt(0),
            forward: dir > 0
        };
    }
    function scanForBracket(cm, where, dir, style, config) {
        for (var maxScanLen = config && config.maxScanLineLength || 1e4, maxScanLines = config && config.maxScanLines || 1e3, stack = [], re = config && config.bracketRegex ? config.bracketRegex : /[(){}[\]]/, lineEnd = dir > 0 ? Math.min(where.line + maxScanLines, cm.lastLine() + 1) : Math.max(cm.firstLine() - 1, where.line - maxScanLines), lineNo = where.line; lineNo != lineEnd; lineNo += dir) {
            var line = cm.getLine(lineNo);
            if (line) {
                var pos = dir > 0 ? 0 : line.length - 1, end = dir > 0 ? line.length : -1;
                if (!(line.length > maxScanLen)) for (lineNo == where.line && (pos = where.ch - (0 > dir ? 1 : 0)); pos != end; pos += dir) {
                    var ch = line.charAt(pos);
                    if (re.test(ch) && (void 0 === style || cm.getTokenTypeAt(Pos(lineNo, pos + 1)) == style)) {
                        var match = matching[ch];
                        if (">" == match.charAt(1) == dir > 0) stack.push(ch); else {
                            if (!stack.length) return {
                                pos: Pos(lineNo, pos),
                                ch: ch
                            };
                            stack.pop();
                        }
                    }
                }
            }
        }
        return lineNo - dir == (dir > 0 ? cm.lastLine() : cm.firstLine()) ? !1 : null;
    }
    function matchBrackets(cm, autoclear, config) {
        for (var maxHighlightLen = cm.state.matchBrackets.maxHighlightLineLength || 1e3, marks = [], ranges = cm.listSelections(), i = 0; i < ranges.length; i++) {
            var match = ranges[i].empty() && findMatchingBracket(cm, ranges[i].head, !1, config);
            if (match && cm.getLine(match.from.line).length <= maxHighlightLen) {
                var style = match.match ? "CodeMirror-matchingbracket" : "CodeMirror-nonmatchingbracket";
                marks.push(cm.markText(match.from, Pos(match.from.line, match.from.ch + 1), {
                    className: style
                })), match.to && cm.getLine(match.to.line).length <= maxHighlightLen && marks.push(cm.markText(match.to, Pos(match.to.line, match.to.ch + 1), {
                    className: style
                }));
            }
        }
        if (marks.length) {
            ie_lt8 && cm.state.focused && cm.display.input.focus();
            var clear = function() {
                cm.operation(function() {
                    for (var i = 0; i < marks.length; i++) marks[i].clear();
                });
            };
            if (!autoclear) return clear;
            setTimeout(clear, 800);
        }
    }
    function doMatchBrackets(cm) {
        cm.operation(function() {
            currentlyHighlighted && (currentlyHighlighted(), currentlyHighlighted = null), currentlyHighlighted = matchBrackets(cm, !1, cm.state.matchBrackets);
        });
    }
    var ie_lt8 = /MSIE \d/.test(navigator.userAgent) && (null == document.documentMode || document.documentMode < 8), Pos = CodeMirror.Pos, matching = {
        "(": ")>",
        ")": "(<",
        "[": "]>",
        "]": "[<",
        "{": "}>",
        "}": "{<"
    }, currentlyHighlighted = null;
    CodeMirror.defineOption("matchBrackets", !1, function(cm, val, old) {
        old && old != CodeMirror.Init && cm.off("cursorActivity", doMatchBrackets), val && (cm.state.matchBrackets = "object" == typeof val ? val : {}, 
        cm.on("cursorActivity", doMatchBrackets));
    }), CodeMirror.defineExtension("matchBrackets", function() {
        matchBrackets(this, !0);
    }), CodeMirror.defineExtension("findMatchingBracket", function(pos, strict, config) {
        return findMatchingBracket(this, pos, strict, config);
    }), CodeMirror.defineExtension("scanForBracket", function(pos, dir, style, config) {
        return scanForBracket(this, pos, dir, style, config);
    });
});
//# sourceMappingURL=codemirror.js.map