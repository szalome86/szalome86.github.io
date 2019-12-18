(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div style=\"text-align:center\">\n  <!--\n  <h1> Welcome to {{title}} </h1>\n  -->\n  <mat-toolbar class=\"f_color\">\n    <mat-toolbar-row>\n      <h1 class=\" header_style2\"> Rohstoffdatei / Ändern</h1>\n    </mat-toolbar-row>\n  </mat-toolbar>\n\n</div>\n\n<!-- {{Comment}} -->\n\n\n<mat-toolbar class=\"f_color\">\n  <mat-toolbar-row>\n    <label>Rohstoffnummer:</label>\n    <input type=\" text\" placeholder=\"6\" class=\"header_style\" />\n    <label>Flüssig </label>\n    <input type=\"checkbox\" class=\"header_style\" />\n    <label>01.07.2019 12:00:00</label>\n  </mat-toolbar-row>\n\n  <mat-toolbar-row>\n    <label>Bezeichnung:</label>\n    <input type=\"text\" placeholder=\"Gerste 2 zeilig\" class=\"header_style\" />\n    <button mat-raised-button>Lang.</button>\n  </mat-toolbar-row>\n\n  <mat-toolbar-row>\n    <label>Inhaltsstoff-Reihenfolge:</label>\n    <select>\n      <option>(Alle inhaltsstoffe)</option>\n      <option>Geflügel</option>\n      <option>Schweine</option>\n      <option>Wiederkäuer</option>\n    </select>\n  </mat-toolbar-row>\n  <mat-toolbar-row>\n    <input type=\"checkbox\" /><label>Rinderauf.</label>\n    <input type=\"checkbox\" /><label>Mastr.</label>\n    <input type=\"checkbox\" /><label>Kühe</label>\n    <input type=\"checkbox\" /><label>Wiederk.</label>\n    <input type=\"checkbox\" /><label>Schw.</label>\n    <input type=\"checkbox\" /><label>Pferde</label>\n    <input type=\"checkbox\" /><label>Gefl.</label>\n    <input type=\"checkbox\" /><label>Hund.-Katz.</label>\n    <input type=\"checkbox\" /><label>Kleintiere</label>\n    <input type=\"checkbox\" /><label>Zoot.</label>\n    <input type=\"checkbox\" /><label>Var.</label>\n  </mat-toolbar-row>\n</mat-toolbar>\n<!-- {{\n<div class=\"container\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"0.5%\" fxLayoutAlign=\"center\">\n  <div fxFlex=\"20%\">\n    <img mat-card-image class=\"img\" src=\"./assets/1.jpg\">\n  </div>\n  <div fxFlex=\"20%\">\n    <img mat-card-image class=\"img\" src=\"./assets/1.jpg\">\n  </div>\n  <div fxFlex=\" 20%\">\n    <img mat-card-image class=\"img\" src=\"./assets/1.jpg\">\n  </div>\n  <div fxFlex=\"20%\">\n    <img mat-card-image class=\"img\" src=\"./assets/1.jpg\">\n  </div>\n</div>\n\n\n<div class=\"container\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"0.5%\" fxLayoutAlign=\"center\">\n  <div fxFlex=\"20%\">\n    <img mat-card-image class=\"img\" src=\"./assets/1.jpg\">\n  </div>\n  <div fxFlex=\"20%\">\n    <img mat-card-image class=\"img\" src=\"./assets/1.jpg\">\n  </div>\n  <div fxFlex=\" 20%\">\n    <img mat-card-image class=\"img\" src=\"./assets/1.jpg\">\n  </div>\n  <div fxFlex=\"20%\">\n    <img mat-card-image class=\"img\" src=\"./assets/1.jpg\">\n  </div>\n</div>\n\n}} -->\n\n\n\n<!-- {{Responsive}} -->\n\n<!-- {{\n<div class=\"row\">\n  <div class=\"col-xs-12\n              col-sm-8\n              col-md-6\n              col-lg-4\">\n    <img mat-card-image class=\"img\" src=\"./assets/1.jpg\">\n    <div class=\"box\">Responsive</div>\n  </div>\n</div>\n\n}} -->\n\n<!--\n<div class=\" row\">\n      <div class=\"col-xs-12\n              col-sm-8\n              col-md-6\n              col-lg-4\">\n        <table border=\"\" style=\" width:100%\">\n          <tr>\n            <th>Firstname</th>\n            <th>Lastname</th>\n            <th>Age</th>\n          </tr>\n          <tr>\n            <td>Jill</td>\n            <td>Smith</td>\n            <td>50</td>\n\n          </tr>\n          <tr>\n            <td>Eve</td>\n            <td>Jackson</td>\n            <td>94</td>\n          </tr>\n        </table>\n        <div class=\"box\">Responsive</div>\n      </div>\n      </div>\n      }} -->\n\n<!--\n<div class=\"row\">\n  <div class=\"col-xs-12\n  col-sm-8\n  col-md-6\n  col-lg-4\">\n    <img mat-card-image class=\"img\" src=\"./assets/1.jpg\">\n    <div class=\"box\">Responsive</div>\n  </div>\n</div>\n\n}} -->\n\n<!--\n<div class=\"row\">\n<div class=\"col-xs-12\n  col-sm-8\n  col-md-6\n  col-lg-4\">\n<table border=\"\" style=\" width:100%\">\n<tr>\n<th>Firstname</th>\n<th>Lastname</th>\n<th>Age</th>\n</tr>\n<tr>\n<td>Jill</td>\n<td>Smith</td>\n<td>50</td>\n\n</tr>\n<tr>\n<td>Eve</td>\n<td>Jackson</td>\n<td>94</td>\n</tr>\n</table>\n<div class=\"box\">Responsive</div>\n</div>\n</div>\n}} -->\n\n\n\n<div>\n  <div class=\" col-xs-12 col-sm-8 col-md-6 col-lg-4\">\n    <table style=\"width:100%\">\n      <thead>\n        <tr>\n          <th>Inhaltsstoff</th>\n          <th>Einheit</th>\n          <th>OS</th>\n          <th>TM</th>\n        </tr>\n      </thead>\n      <tbody>\n        <!--\n        <div class=\"box\">\n          <tr *ngFor=\" let character of characters\">\n            <div class=\"box\">\n              <td>{{ character.inhaltsstoff }}</td>\n            </div>\n\n            <td>{{ character.einheit }}</td>\n            <td>{{ character.OS }}</td>\n            <td>{{ character.TM }}</td>\n           \n        </tr>\n  </div>\n   }} -->\n        <div id=\"grid\" class=\"wrapper\">\n          <tr *ngFor=\" let character of characters\">\n            <td id=\"areaA\" class=\"design\">{{ character.inhaltsstoff }}</td>\n            <td id=\"areaB\" class=\"design\">{{ character.einheit }}</td>\n            <td id=\"areaC\" class=\"design\">{{ character.OS }}</td>\n            <td id=\"areaD\" class=\"design\">{{ character.TM }}</td>\n          </tr>\n        </div>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n\n<mat-toolbar class=\"f_color\">\n  <mat-toolbar-row>\n    <div>\n      <input type=\"checkbox\" />\n      <label>Form. rech.</label>\n      <button mat-raised-button>TM</button>\n      <button mat-raised-button>Richtwerte</button>\n      <button mat-raised-button>Importieren</button>\n      <button mat-raised-button>Drucken</button>\n      <button mat-raised-button>Speichern</button>\n      <button mat-raised-button>Speichern unter</button>\n      <button mat-raised-button>Abberchen</button>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".img{\r\n    width: 100%;\r\n}\r\n\r\ntable, th, td \r\n{\r\n    font: 17px Calibri;\r\n    border: solid 1px rgb(230, 221, 221);\r\n    border-collapse: collapse;\r\n    padding: 2px 3px;\r\n    text-align: center;\r\n    margin: 10px 0;\r\n    background-color: rgb(247, 242, 114);\r\n}\r\n\r\nth {\r\n    font-weight:bold;\r\n}\r\n\r\n.design { \r\n    font: 17px Calibri;\r\n    border: solid 1px #CCC;\r\n    border-collapse: collapse;\r\n    padding: 3px 3px 3px 3px;\r\n    text-align: center;\r\n    margin: 10px 10px 10px 10px;\r\n    width: 100px;\r\n    white-space:nowrap;\r\n}\r\n\r\n#grid2 {\r\n    display: grid;\r\n  }\r\n\r\n#areaA {\r\n    background-color: #FFF851;\r\n  }\r\n\r\n#areaB {\r\n    background-color: white;\r\n  }\r\n\r\n#areaC {\r\n    background-color: white;\r\n  }\r\n\r\n#areaD {\r\n    background-color: white;\r\n  }\r\n\r\n.wrapper2 {\r\n    display: grid;\r\n    grid-gap: 50px;\r\n    grid-template-columns: repeat(10, minmax(186px, 1fr));\r\n  }\r\n\r\n.wrapper {\r\n    display: grid;\r\n    grid-gap: 5px;\r\n    grid-template-columns: repeat(90, minmax(186px, 1fr));\r\n  }\r\n\r\nlabel{\r\nfont: 17px Calibri;\r\npadding: 5px 5px 5px 5px;\r\n}\r\n\r\ninput {\r\n  font: 15px Calibri;\r\n  padding: 5px 5px 5px 5px;\r\n  }\r\n\r\n.header_style {\r\n  font: 17px Calibri;\r\n}\r\n\r\n.header_style2 {\r\n  font: 35px Calibri;\r\n}\r\n\r\nbutton{\r\n  padding: 10px 10px 10px 10px;\r\n  margin: 10px 10px 10px 10px;\r\n  text-align: center;\r\n}\r\n\r\n.buttons {\r\n\r\n}\r\n\r\n.f_color {\r\ncolor: rgb(114, 114, 112);\r\nbackground-color: #ffff81\r\n;\r\n}\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsb0NBQW9DO0FBQ3hDOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7RUFDZjs7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7QUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7QUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7QUFHQTtJQUNFLGFBQWE7SUFDYixjQUFjO0lBQ2QscURBQXFEO0VBQ3ZEOztBQUVBO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYixxREFBcUQ7RUFDdkQ7O0FBRUY7QUFDQSxrQkFBa0I7QUFDbEIsd0JBQXdCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4Qjs7QUFFRjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFHQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFHQTtFQUNFLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCOztBQUVBOztBQUVBOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50YWJsZSwgdGgsIHRkIFxyXG57XHJcbiAgICBmb250OiAxN3B4IENhbGlicmk7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZ2IoMjMwLCAyMjEsIDIyMSk7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgcGFkZGluZzogMnB4IDNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjQyLCAxMTQpO1xyXG59XHJcbnRoIHtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbn1cclxuXHJcblxyXG4uZGVzaWduIHsgXHJcbiAgICBmb250OiAxN3B4IENhbGlicmk7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjQ0NDO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHBhZGRpbmc6IDNweCAzcHggM3B4IDNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcclxufVxyXG5cclxuI2dyaWQyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgfVxyXG4gIFxyXG4gICNhcmVhQSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGODUxO1xyXG4gIH1cclxuICBcclxuICAjYXJlYUIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAjYXJlYUMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAjYXJlYUQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICBcclxuICAud3JhcHBlcjIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtZ2FwOiA1MHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIG1pbm1heCgxODZweCwgMWZyKSk7XHJcbiAgfVxyXG4gIFxyXG4gIC53cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLWdhcDogNXB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOTAsIG1pbm1heCgxODZweCwgMWZyKSk7XHJcbiAgfVxyXG5cclxubGFiZWx7XHJcbmZvbnQ6IDE3cHggQ2FsaWJyaTtcclxucGFkZGluZzogNXB4IDVweCA1cHggNXB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgZm9udDogMTVweCBDYWxpYnJpO1xyXG4gIHBhZGRpbmc6IDVweCA1cHggNXB4IDVweDtcclxuICB9XHJcblxyXG4uaGVhZGVyX3N0eWxlIHtcclxuICBmb250OiAxN3B4IENhbGlicmk7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyX3N0eWxlMiB7XHJcbiAgZm9udDogMzVweCBDYWxpYnJpO1xyXG59XHJcblxyXG5cclxuYnV0dG9ue1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG5cclxufVxyXG5cclxuLmZfY29sb3Ige1xyXG5jb2xvcjogcmdiKDExNCwgMTE0LCAxMTIpO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjgxXHJcbjtcclxufVxyXG4gICJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'Ändern von Rohstoffen';
                    this.characters = [
                        { inhaltsstoff: "	Weender Analyse	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Tro.-Masse	", einheit: "	g	", OS: "	871.000	", TM: "	871.000	" },
                        { inhaltsstoff: "	Rohprotein (XP)	", einheit: "	g	", OS: "	261.000	", TM: "	261.000	" },
                        { inhaltsstoff: "	Rohfaser (XF)	", einheit: "	g	", OS: "	79.000	", TM: "	79.000	" },
                        { inhaltsstoff: "	strukt. Rohfaser	", einheit: "	g	", OS: "	10.000	", TM: "	10.000	" },
                        { inhaltsstoff: "	Rohfett (XL)	", einheit: "	g	", OS: "	36.000	", TM: "	36.000	" },
                        { inhaltsstoff: "	Rohasche (XA)	", einheit: "	g	", OS: "	375.000	", TM: "	375.000	" },
                        { inhaltsstoff: "	StÃ¤rke	", einheit: "	g	", OS: "	56.000	", TM: "	56.000	" },
                        { inhaltsstoff: "	bestÃ¤ndige StÃ¤rke	", einheit: "	g	", OS: "	45.000	", TM: "	45.000	" },
                        { inhaltsstoff: "	StÃ¤rke aufgeschlossen	", einheit: "	g	", OS: "	420.000	", TM: "	420.000	" },
                        { inhaltsstoff: "	Zucker	", einheit: "	g	", OS: "	15.000	", TM: "	15.000	" },
                        { inhaltsstoff: "	StÃ¤rke+Zucker	", einheit: "	g	", OS: "	39.150	", TM: "	39.150	" },
                        { inhaltsstoff: "	LÃ¶sliches Protein	", einheit: "	%	", OS: "	485.000	", TM: "	485.000	" },
                        { inhaltsstoff: "	%-unabb. Prot.	", einheit: "	g	", OS: "	1.100	", TM: "	1.100	" },
                        { inhaltsstoff: "	unabb. Prot.	", einheit: "	g	", OS: "	5.300	", TM: "	5.300	" },
                        { inhaltsstoff: "	NfE	", einheit: "		", OS: "	1.800	", TM: "	1.800	" },
                        { inhaltsstoff: "	Mengenelemente	", einheit: "	g	", OS: "	0.100	", TM: "	0.100	" },
                        { inhaltsstoff: "	Calcium	", einheit: "	g	", OS: "	1.200	", TM: "	1.200	" },
                        { inhaltsstoff: "	Phosphor	", einheit: "	g	", OS: "	13.000	", TM: "	13.000	" },
                        { inhaltsstoff: "	verdaul. Phosphor	", einheit: "	g	", OS: "	0.700	", TM: "	0.700	" },
                        { inhaltsstoff: "	Natrium	", einheit: "	g	", OS: "	2.500	", TM: "	2.500	" },
                        { inhaltsstoff: "	Magnesium	", einheit: "	g	", OS: "	80.000	", TM: "	80.000	" },
                        { inhaltsstoff: "	Kalium	", einheit: "	g	", OS: "	78.150	", TM: "	78.150	" },
                        { inhaltsstoff: "	Chlor	", einheit: "	g	", OS: "	60.000	", TM: "	60.000	" },
                        { inhaltsstoff: "	Schwefel	", einheit: "		", OS: "	80.000	", TM: "	80.000	" },
                        { inhaltsstoff: "	Spurenelemente	", einheit: "	mg	", OS: "	49.000	", TM: "	49.000	" },
                        { inhaltsstoff: "	Zink	", einheit: "	mg	", OS: "	71.800	", TM: "	71.800	" },
                        { inhaltsstoff: "	Eisen	", einheit: "	mg	", OS: "	65.000	", TM: "	65.000	" },
                        { inhaltsstoff: "	Mangan	", einheit: "	mg	", OS: "	80.000	", TM: "	80.000	" },
                        { inhaltsstoff: "	Kupfer	", einheit: "	mg	", OS: "	68.130	", TM: "	68.130	" },
                        { inhaltsstoff: "	Kobalt	", einheit: "	mg	", OS: "	75.490	", TM: "	75.490	" },
                        { inhaltsstoff: "	Jod	", einheit: "	mg	", OS: "	6.210	", TM: "	6.210	" },
                        { inhaltsstoff: "	Selen	", einheit: "	mg	", OS: "	0.800	", TM: "	0.800	" },
                        { inhaltsstoff: "	MolybdÃ¤n	", einheit: "	mg	", OS: "	1.920	", TM: "	1.920	" },
                        { inhaltsstoff: "	Fluor	", einheit: "		", OS: "	0.770	", TM: "	0.770	" },
                        { inhaltsstoff: "	Vitamine	", einheit: "	IE	", OS: "	3.490	", TM: "	3.490	" },
                        { inhaltsstoff: "	Vitamin A	", einheit: "	IE	", OS: "	16.210	", TM: "	16.210	" },
                        { inhaltsstoff: "	Vitamin D	", einheit: "	mg	", OS: "	12.970	", TM: "	12.970	" },
                        { inhaltsstoff: "	Vitamin E	", einheit: "	mg	", OS: "	12.670	", TM: "	12.670	" },
                        { inhaltsstoff: "	Vitamin C	", einheit: "	mg	", OS: "	2.090	", TM: "	2.090	" },
                        { inhaltsstoff: "	Vitamin K	", einheit: "	mg	", OS: "	1.250	", TM: "	1.250	" },
                        { inhaltsstoff: "	Vitamin B1	", einheit: "	mg	", OS: "	1.670	", TM: "	1.670	" },
                        { inhaltsstoff: "	Vitamin B2	", einheit: "	mg	", OS: "	5.010	", TM: "	5.010	" },
                        { inhaltsstoff: "	Vitamin B6	", einheit: "	mcg	", OS: "	2.450	", TM: "	2.450	" },
                        { inhaltsstoff: "	Vitamin B12	", einheit: "	mg	", OS: "	3.600	", TM: "	3.600	" },
                        { inhaltsstoff: "	NikotinsÃ¤ure	", einheit: "	mg	", OS: "	2.010	", TM: "	2.010	" },
                        { inhaltsstoff: "	PantothensÃ¤ure	", einheit: "	mg	", OS: "	1.310	", TM: "	1.310	" },
                        { inhaltsstoff: "	FolsÃ¤ure	", einheit: "	mcg	", OS: "	1.610	", TM: "	1.610	" },
                        { inhaltsstoff: "	Biotin	", einheit: "	mg	", OS: "	9.110	", TM: "	9.110	" },
                        { inhaltsstoff: "	Cholinchlorid	", einheit: "		", OS: "	6.210	", TM: "	6.210	" },
                        { inhaltsstoff: "	Verdauungsquotient AminosÃ¤uren	", einheit: "	%	", OS: "	6.880	", TM: "	6.880	" },
                        { inhaltsstoff: "	VQ-Lysin-S	", einheit: "	%	", OS: "	1.800	", TM: "	1.800	" },
                        { inhaltsstoff: "	VQ-Lysin-G	", einheit: "	%	", OS: "	217.000	", TM: "	217.000	" },
                        { inhaltsstoff: "	pcv VQ-Lysin-S	", einheit: "	%	", OS: "	203.820	", TM: "	203.820	" },
                        { inhaltsstoff: "	VQ-Methionin-S	", einheit: "	%	", OS: "	188.020	", TM: "	188.020	" },
                        { inhaltsstoff: "	VQ-Methionin-G	", einheit: "	%	", OS: "	91.000	", TM: "	91.000	" },
                        { inhaltsstoff: "	pcv VQ-Methionin-S	", einheit: "	%	", OS: "	86.000	", TM: "	86.000	" },
                        { inhaltsstoff: "	VQ-Met.+Cys.-S	", einheit: "	%	", OS: "	75.000	", TM: "	75.000	" },
                        { inhaltsstoff: "	VQ-Met.+Cys.-G	", einheit: "	%	", OS: "	86.000	", TM: "	86.000	" },
                        { inhaltsstoff: "	pcv VQ-Met.+Cys.-S	", einheit: "	%	", OS: "	94.000	", TM: "	94.000	" },
                        { inhaltsstoff: "	VQ-Tryptophan-S	", einheit: "	%	", OS: "	759.850	", TM: "	759.850	" },
                        { inhaltsstoff: "	VQ-Tryptophan-G	", einheit: "	%	", OS: "	224.460	", TM: "	224.460	" },
                        { inhaltsstoff: "	pcv VQ-Tryptophan-S	", einheit: "	%	", OS: "	7.500	", TM: "	7.500	" },
                        { inhaltsstoff: "	VQ-Threonin-S	", einheit: "	%	", OS: "	67.940	", TM: "	67.940	" },
                        { inhaltsstoff: "	VQ-Threonin-G	", einheit: "	%	", OS: "	455.900	", TM: "	455.900	" },
                        { inhaltsstoff: "	pcv VQ-Threonin-S	", einheit: "	%	", OS: "	169.800	", TM: "	169.800	" },
                        { inhaltsstoff: "	UQ-Lysin/XP	", einheit: "	%	", OS: "	14.590	", TM: "	14.590	" },
                        { inhaltsstoff: "	UQ-Methionin/XP	", einheit: "	%	", OS: "	75.985	", TM: "	75.985	" },
                        { inhaltsstoff: "	UQ Met.+Cys./XP	", einheit: "	%	", OS: "	58.670	", TM: "	58.670	" },
                        { inhaltsstoff: "	UQ-Tryptophan/XP	", einheit: "	%	", OS: "	16.711	", TM: "	16.711	" },
                        { inhaltsstoff: "	UQ-Threonin/XP	", einheit: "		", OS: "	11.830	", TM: "	11.830	" },
                        { inhaltsstoff: "	AminosÃ¤uren	", einheit: "	g	", OS: "	11.830	", TM: "	11.830	" },
                        { inhaltsstoff: "	Lysin	", einheit: "	g	", OS: "	7.489	", TM: "	7.489	" },
                        { inhaltsstoff: "	pcv Lysin-S	", einheit: "	g	", OS: "	7.490	", TM: "	7.490	" },
                        { inhaltsstoff: "	verd. Lysin-S	", einheit: "	g	", OS: "	12.010	", TM: "	12.010	" },
                        { inhaltsstoff: "	verd. Lysin-G	", einheit: "	g	", OS: "	12.910	", TM: "	12.910	" },
                        { inhaltsstoff: "	Methionin	", einheit: "	g	", OS: "	12.807	", TM: "	12.807	" },
                        { inhaltsstoff: "	pcv Methionin-S	", einheit: "	g	", OS: "	11.235	", TM: "	11.235	" },
                        { inhaltsstoff: "	verd. Methionin-S	", einheit: "	g	", OS: "	2,687.900	", TM: "	2,687.900	" },
                        { inhaltsstoff: "	verd. Methionin-G	", einheit: "	g	", OS: "	13.470	", TM: "	13.470	" },
                        { inhaltsstoff: "	Met.+Cys.	", einheit: "	g	", OS: "	14.810	", TM: "	14.810	" },
                        { inhaltsstoff: "	pcv Met.+Cys.-S	", einheit: "	g	", OS: "	12.140	", TM: "	12.140	" },
                        { inhaltsstoff: "	verd. Met.+Cys.-S	", einheit: "	g	", OS: "	10.570	", TM: "	10.570	" },
                        { inhaltsstoff: "	verd. Met+Cys.-G	", einheit: "	g	", OS: "	16.250	", TM: "	16.250	" },
                        { inhaltsstoff: "	Tryptophan	", einheit: "	g	", OS: "	14.270	", TM: "	14.270	" },
                        { inhaltsstoff: "	pcv Tryptophan-S	", einheit: "	g	", OS: "	4.100	", TM: "	4.100	" },
                        { inhaltsstoff: "	verd. Trypto.-S	", einheit: "	g	", OS: "	2.600	", TM: "	2.600	" },
                        { inhaltsstoff: "	verd. Trypto.-G	", einheit: "	g	", OS: "	1.100	", TM: "	1.100	" },
                        { inhaltsstoff: "	Threonin	", einheit: "	g	", OS: "	2.600	", TM: "	2.600	" },
                        { inhaltsstoff: "	pcv Threonin-S	", einheit: "	g	", OS: "	4.100	", TM: "	4.100	" },
                        { inhaltsstoff: "	verd. Threonin-S	", einheit: "	g	", OS: "	6.700	", TM: "	6.700	" },
                        { inhaltsstoff: "	verd. Threonin-G	", einheit: "	g	", OS: "	1.556	", TM: "	1.556	" },
                        { inhaltsstoff: "	Leucin	", einheit: "	g	", OS: "	0.540	", TM: "	0.540	" },
                        { inhaltsstoff: "	Isoleucin	", einheit: "	g	", OS: "	1,000.000	", TM: "	1,000.000	" },
                        { inhaltsstoff: "	Valin	", einheit: "	mg	", OS: "	75.000	", TM: "	75.000	" },
                        { inhaltsstoff: "	Taurin	", einheit: "	mg	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Histidin	", einheit: "		", OS: "	1,000.000	", TM: "	1,000.000	" },
                        { inhaltsstoff: "	Enzyme	", einheit: "	KBE	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Bio plus	", einheit: "	FTU	", OS: "	163.000	", TM: "	163.000	" },
                        { inhaltsstoff: "	Phytase	", einheit: "	FTU	", OS: "	75.000	", TM: "	75.000	" },
                        { inhaltsstoff: "	3-Phytase	", einheit: "	FTU	", OS: "	401.000	", TM: "	401.000	" },
                        { inhaltsstoff: "	6-Phytase	", einheit: "		", OS: "	104.250	", TM: "	104.250	" },
                        { inhaltsstoff: "	Verdauliches	", einheit: "	g	", OS: "	14.350	", TM: "	14.350	" },
                        { inhaltsstoff: "	verd. Phosphor+P	", einheit: "	g	", OS: "	1,000.000	", TM: "	1,000.000	" },
                        { inhaltsstoff: "	verd. XP-S	", einheit: "	g	", OS: "	871.000	", TM: "	871.000	" },
                        { inhaltsstoff: "	verd. XP-Pferd	", einheit: "	g	", OS: "	1,000.000	", TM: "	1,000.000	" },
                        { inhaltsstoff: "	verd. XP Hund	", einheit: "	g	", OS: "	871.000	", TM: "	871.000	" },
                        { inhaltsstoff: "	verd. XP Katze	", einheit: "	%	", OS: "	299.656	", TM: "	299.656	" },
                        { inhaltsstoff: "	VQ-Org. Subst.-WdK	", einheit: "	%	", OS: "	11.481	", TM: "	11.481	" },
                        { inhaltsstoff: "	VQ-Protein-WdK	", einheit: "	%	", OS: "	44.948	", TM: "	44.948	" },
                        { inhaltsstoff: "	VQ-Rohfett-WdK	", einheit: "	%	", OS: "	0.872	", TM: "	0.872	" },
                        { inhaltsstoff: "	VQ-Rohfaser-WdK	", einheit: "	%	", OS: "	0.009	", TM: "	0.009	" },
                        { inhaltsstoff: "	VQ-NfE-WdK	", einheit: "	g	", OS: "	194.943	", TM: "	194.943	" },
                        { inhaltsstoff: "	verd. Org. Subst.-WdK	", einheit: "	g	", OS: "	199.164	", TM: "	199.164	" },
                        { inhaltsstoff: "	verd. Protein-WdK	", einheit: "	g	", OS: "	194.943	", TM: "	194.943	" },
                        { inhaltsstoff: "	verd. Rohfett-WdK	", einheit: "	g	", OS: "	169.795	", TM: "	169.795	" },
                        { inhaltsstoff: "	verd. Rohfaser-WdK	", einheit: "	g	", OS: "	14.593	", TM: "	14.593	" },
                        { inhaltsstoff: "	verd. NfE	", einheit: "	g	", OS: "	0.130	", TM: "	0.130	" },
                        { inhaltsstoff: "	nXP	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	RNB	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	ELOS	", einheit: "	ml	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Gasbildung / 200mg TM	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Harnstoff	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	verd. Org. Subst.-S	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	verd. XL-S	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	verd. Rest-S	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	pcv XP-Pferd	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	NDIXP-Pferd	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Energieberechnung	", einheit: "	MJ	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	GE	", einheit: "	MJ	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	ME-WiederkÃ¤uer	", einheit: "	MJ	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	ME-Wiederk.-Formel	", einheit: "	MJ	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	NEL-VQ	", einheit: "	MJ	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	NEL-VQ-Formel	", einheit: "	MJ	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	ME-Schwein	", einheit: "	MJ	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	ME-Schwein (2010)	", einheit: "	MJ	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	ME-Schwein (<2010)	", einheit: "	MJ	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	ME-EiweiÃŸr. FM	", einheit: "	MJ	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	ME-Pferd	", einheit: "	MJ	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	ME-GeflÃ¼gel	", einheit: "	Cal	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	ME-GeflÃ¼gel-K	", einheit: "	MJ	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	DE-Pferd	", einheit: "	MJ	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	DE-Nager	", einheit: "	MJ	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	DE-Hunde	", einheit: "	MJ	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	DE-Katzen	", einheit: "	MJ	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	DE-Fische	", einheit: "	MJ	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	DE-Elefant	", einheit: "	MJ	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	BE- Fisch-Formel-Nutz	", einheit: "	MJ	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	DE- Fisch-Formel-Nutz	", einheit: "	MJ	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	ME- Fisch-v.F.l	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Stoffstrombilanz	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	P205	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Stickstoff (N)	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Farb- und Zusatzstoffe	", einheit: "	mg	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Astaxanthin	", einheit: "	mg	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Inosit	", einheit: "	mg	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Xantophyll	", einheit: "	mg	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	ÃŸ-Carotin	", einheit: "	mg	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Betain	", einheit: "	mg	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Carophyll-rot	", einheit: "	mg	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Carophyll-gelb	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	FettsÃ¤uren	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	LinolsÃ¤ure	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	LinolensÃ¤ure	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Ã–lsÃ¤ure	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	ArachidonsÃ¤ure	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	ErucasÃ¤ure	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	n-3 - FettsÃ¤uren	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	n-6 - FettsÃ¤uren	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	PolyensÃ¤uren	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	FischÃ¶l	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Jodzahl	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Organische SÃ¤uren	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	PropionsÃ¤ure	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	FumarsÃ¤ure	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	AmeisensÃ¤ure	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	ZitronensÃ¤ure	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	EssigsÃ¤ure	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	ButtersÃ¤ure	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	MilchsÃ¤ure	", einheit: "	mol	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	SBV	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	UQ-LinolsÃ¤ure	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	UQ-LinolensÃ¤ure	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	UQ-Ã–lsÃ¤ure	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	UQ-ArachidonsÃ¤ure	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	UQ-ErucasÃ¤ure	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	UQ-PolyensÃ¤uren	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Kennzahlen	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Volumen	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Raumgewicht	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Grundfutter	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Grundfutter /TM	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Rauhfutter	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Rauhfutter /TM	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Silagen	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Silagen /TM	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Ausgleichfutter	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Kraftfutter	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Getreide	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Tier.Protein	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	CCM-total	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	CCM /TM	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Molke-total	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Molke /TM	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Kartoffel-total	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Kartoffeln /TM	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Treber-total	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Treber /TM	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Zellwandbestandteile	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	NDF-Grundfutter	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	ADF-Grundfutter	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	NDF-gesamt	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	ADF-gesamt	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	ADL-gesamt	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	NFC-gesamt	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	NDFom	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	ADFom	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	% NDF 10h	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	% NDF 30h	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	% NDF 70h	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	% NDF 120h	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	% NDF 240h	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Milch aus	", einheit: "	l	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Milch aus NEL	", einheit: "	l	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Milch aus Prot	", einheit: "	l	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Milch aus nXP	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Preise	", einheit: "	EUR	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Preis	", einheit: "	EUR	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Preis 1	", einheit: "	EUR	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Preis 2	", einheit: "	EUR	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Preis 3	", einheit: "	EUR	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Kosten Kuh/ Tag	", einheit: "	EUR	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	100 KÃ¼he/ 1 Tag	", einheit: "	EUR	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	100 KÃ¼he/ Monat	", einheit: "	EUR	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	je 10 MJ NEL	", einheit: "	EUR	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	je 10 MJ ME-S	", einheit: "	EUR	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	je 10 MJ ME-G	", einheit: "	EUR	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	je 10 MJ DE-Pf	", einheit: "	EUR	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	je kg Milch	", einheit: "	EUR	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	je kg Zuwachs Schwein	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Bio	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Landw.  Rohware	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Landw. Rohware-TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Landw. Roh.-TM/TM	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	BIO-Rohware	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	BIO Rohware -TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	TM-BIO/TM landw. Rohw.	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Nicht landw. Rohware	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Nicht landw. Roh.-TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Nicht landw.-TM/ TM	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	A-landw. Rohware	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	TM-A-BIO	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	TM-A/ TM landw.	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	U-landw. Rohware	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	TM-U-BIO	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	TM-U/ TM-landw.	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	konv. landw. Rohware	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	TM/ldw. konv. Rohware	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	TM-konv./TM-landw.	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	BIO - Rohware	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	A-Ware/landw.Rohw.	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	U-Ware/landw.Rohw.	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	konv./landw. Rohw.	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	WachstumsfÃ¶rderer	", einheit: "	mg	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Avilamycin*	", einheit: "	mg	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Flavophospholip*	", einheit: "	mg	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Monensin-Na*	", einheit: "	mg	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Salinomycin-Na*	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	VerhÃ¤ltnisse	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Calcium : Phosphor	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Kalium : Natrium	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Lys/10 MJ ME-S	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Lysin:Methionin	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Lysin:Met+Cys	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Lysin:Tryptoph.	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Lysin:Threonin	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Bilanz Mengenelemente- WdK	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Bilanz Ca	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Bilanz Ca*	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Bilanz P	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Bilanz P*	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Bilanz Na	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Bilanz Mg	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Weender Anlayse /kg TM	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Rohprotein/TM	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	XP/TM	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Rohfett/TM	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Rohasche/TM	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	StÃ¤rke/TM	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	XL/TM	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	XZ+XS-bXS/TM	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	UDP/TM	", einheit: "	kg	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	DOM/TM	", einheit: "	kg	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	DXL/TM	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	ADForg/TM	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXP <7% Fett	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXP >7 % Fett	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXP/TM	", einheit: "	MJ	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	NEL/ TM	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXP-Formel	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	RNB-Formel	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	RNB /TM	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Pansen/ Kohlenhydrate	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	SW in TM	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	SW /kg TM	", einheit: "	ml	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Gasbildung /TM	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Futterverwertung-S	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Mengenelemente /kg TM	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Calicum /TM	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Phosphor /TM	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Natrium /TM	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Magnesium /TM	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Kalium /TM	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Chlor /TM	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Schwefel /TM	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Spurenelemente /kg TM	", einheit: "	mg	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Eisen /TM	", einheit: "	mg	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Jod /TM	", einheit: "	mg	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Kobalt /TM	", einheit: "	mg	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Kupfer /TM	", einheit: "	mg	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Mangan /TM	", einheit: "	mg	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Selen /TM	", einheit: "	mg	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Zink /TM	", einheit: "	mg	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	MolybdÃ¤n /TM	", einheit: "	mg	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Fluor /TM	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Vitamine /kg TM	", einheit: "	IE	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Vitamin A /TM	", einheit: "	IE	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Vitamin D /TM	", einheit: "	mg	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Vitamin E /TM	", einheit: "	mg	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Vitamin C /TM	", einheit: "	mg	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Vitamin K /TM	", einheit: "	mg	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Vitamin B1 /TM	", einheit: "	mg	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Vitamin B2 /TM	", einheit: "	mg	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Vitamin B6 /TM	", einheit: "	mcg	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Vitamin B12 /TM	", einheit: "	mg	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	NikotinsÃ¤ure /TM	", einheit: "	mg	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	PantothensÃ¤ure /TM	", einheit: "	mg	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	FolsÃ¤ure /TM	", einheit: "	mcg	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Biotin /TM	", einheit: "	mg	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Cholinchlorid /TM	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Energie /kg TM	", einheit: "	MJ	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	ME-Wdk/ TM	", einheit: "	MJ	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	ME-Wdk-MF (2010)	", einheit: "	MJ	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	NEL-MF (2010)	", einheit: "	MJ	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	ME-S /TM	", einheit: "	MJ	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	ME-G/ TM	", einheit: "	MJ	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	DE-Pferd/ TM	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Grundfutter	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	GF max TM (1986)	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	GF max TM (2005)	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Gesamt max TM (2005)	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Kationen-Anionen-Bilanz	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Elektrolyt.Bilanz-S mmol/kg TM	", einheit: "	meq	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	DCAB-WdK	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	HARN - pH	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	pH-Wert	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Weender Analyse %	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-Trockenmasse	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-unabb. Protein	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-best. StÃ¤rke	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-Rohprot/TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%Rohfas/TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%str.Rohfas/TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-Rohfett/TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-StÃ¤rke /TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-best. StÃ¤rke/TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-Zucker /TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-St.+Zuck. /TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-lÃ¶slich Prot.	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-nXP /TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-UDP/XP	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Mengenelemente % /kg TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-Ca / TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-P / TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-Na / TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-Mg / TM	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Zellwandbestandteile %/kg TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-NDF /TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-NDF-GF /TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-ADF /TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-ADL /TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-NFC /TM	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	---------------	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-CCM /TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-Molke /TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-Kartoffel /TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-Treber /TM	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-Uplift-ME-Schwein	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-Uplift-ME-GeflÃ¼gel	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-Uplift-v.Lys.Schwein	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-Uplift-v.Lys.GeflÃ¼gel	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-Uplift-v.Met.Schwein	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-Uplift-v.Met.GeflÃ¼gel	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-Uplift-v.M+C.Schwein	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-Uplift-v.M+C.GeflÃ¼gel	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-Uplift-v.Tryp.Schwein	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-Uplift-v.Tryp.GeflÃ¼gel	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-Uplift-v.Thre.Schwein	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-Uplift-v.Thre.GeflÃ¼gel	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-->--UPLIFT-total	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	v.Lys-Schwein+Enzym	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	v.Lys-GeflÃ¼gel+Enzym	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	v.Met-Schwein+Enzym	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	v.Met-GeflÃ¼gel+Enzym	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	v.M+C-Schwein+Enzym	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	v.M+C-GeflÃ¼gel+Enzym	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	v.Tryp-Schwein+Enzym	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	v.Tryp-GeflÃ¼gel+Enzym	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	v.Thre-Schwein+Enzym	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	v.Thre-GeflÃ¼gel+Enzym	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	ME-Schwein+Enzym	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	ME-GeflÃ¼gel+Enzym	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	erweiteretes nXP System	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXP Formel 9	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXM P (mikrob. Protein) 9	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nX UDP (Bypass Protein) 9	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXM Lys (mikrob. Lysin) 9	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXM Met (mikrob. Meth.) 9	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXLys 9	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXMet 9	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXLys/nXMet 9	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXLys % nXP 9	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXMet % nXP 9	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXLys Soll 9	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXMet Soll 9	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXLys % Bedarfsdeckung 9	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXMet % Bedarfsdeckung 9	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXLys TatsÃ¤chlich 9	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXLys Verlust 9	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXLys/nXMet Verbesserung 9	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXP Reduktion 9	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXP reduziert 9	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Einsparung nXP 9	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXP NEU g/TM 9	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXP Formel 11	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXM P (mikrob. Protein) 11	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nX UDP (Bypass Protein) 11	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nX Lys (mikrob. Lysin) 11	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXUDP Lys (Bypass Lysin) 11	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXM Met (mikro. Met.) 11	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXUD Met (Bypass Met.) 11	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXLys 11	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXMet 11	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXLys/nXMet 11	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXLys % nXP 11	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXMet % nXP 11	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXLys Soll 11	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXMet Soll 11	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXLys % Bedarfsdeckung 11	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXMet % Bedarfsdeckung 11	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXLys TatsÃ¤chlich 11	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXLys Verlust 11	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXLys/nXMet Verbesserung 11	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXP Reduktion 11	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXP reduziert 11	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Einsparung nXP 11	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	nXP NEU g/TM 11	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Cornell System-USA	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-wasserlÃ¶sl. Zucker /TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-ethanollÃ¶sl. Zucker /TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-FettsÃ¤uren (FS) /TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-lÃ¶sl. Protein /XP	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-NH3CPE /TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-NDFom /TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-NDICP /TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-NDICP /CP	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-ADICP /TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-ADICP /CP	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-tNDF30om /NDFom	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-tNDF120om /NDFom	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-tNDF240om /NDFom	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	uNDF240	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-uNDF240 /TM	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	RFV	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Relative FutterqualitÃ¤t	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	TDN	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	NELMcallb mcal/lb	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	NEGMcallb mcal/lb	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	NEMMcallb mcal/lb	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	kd NDF %/Std.	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	kd StÃ¤rke %/Std.	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-MyristinsÃ¤ure /FS	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-PalmitinsÃ¤ure /FS	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-SterarinsÃ¤ure /FS	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-Ã–lsÃ¤ure /FS	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-LinolsÃ¤ure /FS	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-LinolensÃ¤ure /FS	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-Ã–lsÃ¤ure /XL	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-LinolsÃ¤ure /XL	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-LinolensÃ¤ure /XL	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-His /XP	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-Lys /XP	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-Met /XP	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-uNDF30om /TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-uNDF120om /TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-uNDF240om /TM	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	i.v. Verdaulichkeit 30h	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-rSTD 0hr /StÃ¤rke	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-rSTD 3hr /StÃ¤rke	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-rSTD 7hr /StÃ¤rke	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-rSTD 16hr /StÃ¤rke	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Eurofins NiederlÃ¤ndisch	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	VEM	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	VEVI	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	DVE+	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	VOS	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	FOSp+	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	OEB+	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	FOSp+ 2 Std.	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	OEB+ 2 Std.	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-VCOS	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	unlÃ¶sl. Protein	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	ReineiweiÃŸ	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Cr. Protein +NH3N	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	XP NH3-frei	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-XP-NH3N-frei	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	NH3	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-NH3 /TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-NH3- Fraktion /XP	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Nitrat	", einheit: "	mg	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Bor	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	NDIN /TM	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	NDF /TM	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	NDF N-frei /TM	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	ELOS /TM	", einheit: "	MJ	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	NEL ELOS	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	TDN 3x maint	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	NEL 1x maint mcal /TM	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	NEL 3x maint mcal /TM	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	NEM 1x maint mcal /TM	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	NEM 3x maint mcal /TM	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	NEG 1x maint mcal /TM	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	NEG 3x maint mcal /TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-verd. NDF /NDF	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-ADF /NDF	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-ADL /NDF	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	dNDF 12h /NDF	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	dNDF 24h /NDF	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	dNDF 30h /NDF	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	dNDF 48h /NDF	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	dNDF 120h /NDF	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	dNDF 240h /NDF	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	uNDF /NDF	", einheit: "	g	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	UDP	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Kohlenhydratfraktion	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	A1: flÃ¼chtige FS /NFC	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	A2: MilchsÃ¤ure /NFC	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	A3: weitere org. FS /NFC	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	A4: Zucker /NFC	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	B1: StÃ¤rke /NFC	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	B2: lÃ¶sl. Faser /NFC	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	B3: abbaub. NDF /NFC	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	C: nicht abbaub. NDF /NFC	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Proteinfraktion	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	A1: NPN /TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	A1: NPN /XP	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	A2: lÃ¶sl. XP - NPN /TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	A2: lÃ¶sl. XP - NPN /XP	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	B1: XP-(lÃ¶sl.XP+NPN) /TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	B1: XP-(lÃ¶sl.XP+NPN) /XP	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	B2: NDIN - ADIN /TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	B2: NDIN - ADIN /XP	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	C: ADIN /TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	C: ADIN /XP	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	RDP /TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	RDP /XP	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	RUP /TM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	RUP /XP	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-WOM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-UOM	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-WXP	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-UXP /XP	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-WSt	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	%-uNDF	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	kd OS %/Std.	", einheit: "	%	", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	kd XP %/Std.	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	Konservierungsindex	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	NacherwÃ¤rmungsrisiko	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	N-Index Silage	", einheit: "		", OS: "	0.000	", TM: "	0.000	" },
                        { inhaltsstoff: "	S-Index Silage	", einheit: "		", OS: "	0.000	", TM: "	0.000	" }
                    ];
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
            /* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/grid */ "./node_modules/@angular/flex-layout/esm2015/grid.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
            /* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                        _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["FlexModule"],
                        _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_7__["GridModule"],
                        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                        _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production })
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! D:\SSL\ANGULAR\my-app\material-flex-project\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map