(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["apps-apps-module"],{

/***/ "/yEv":
/*!*******************************************************!*\
  !*** ./src/app/apps/drag-drop/drag-drop.component.ts ***!
  \*******************************************************/
/*! exports provided: DragDropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropComponent", function() { return DragDropComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_drag_drop_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./drag-drop.component.html */ "5U9Y");
/* harmony import */ var _drag_drop_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drag-drop.component.scss */ "ndhP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-dragula */ "9Ejp");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "41Ph");






let DragDropComponent = class DragDropComponent {
    constructor(dragulaService) {
        this.dragulaService = dragulaService;
        this.BAG = "DRAGULA_EVENTS";
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
        this.dragulaService.createGroup("VAMPIRES", {});
        this.dragulaService.dropModel("VAMPIRES").subscribe((args) => {
            console.log(args);
        });
        this.subs.add(dragulaService.drag(this.BAG).subscribe(({ el }) => {
            this.removeClass(el, "ex-moved");
        }));
        this.subs.add(dragulaService.drop(this.BAG).subscribe(({ el }) => {
            this.addClass(el, "ex-moved");
        }));
        this.subs.add(dragulaService.over(this.BAG).subscribe(({ el, container }) => {
            console.log("over", container);
            this.addClass(container, "ex-over");
        }));
        this.subs.add(dragulaService.out(this.BAG).subscribe(({ el, container }) => {
            console.log("out", container);
            this.removeClass(container, "ex-over");
        }));
        // spill
        dragulaService.createGroup("SPILL", {
            removeOnSpill: true,
        });
        // revert
        dragulaService.createGroup("REVERT", {
            revertOnSpill: true,
        });
        dragulaService.createGroup("COPYABLE", {
            copy: (el, source) => {
                return source.id === "left";
            },
            accepts: (el, target, source, sibling) => {
                // To avoid dragging from right to left container
                return target.id !== "left";
            },
        });
    }
    ngOnDestroy() {
        this.dragulaService.destroy("VAMPIRES");
        this.dragulaService.destroy("SPILL");
        this.dragulaService.destroy("REVERT");
        this.dragulaService.destroy("COPYABLE");
        this.subs.unsubscribe();
    }
    hasClass(el, name) {
        return new RegExp("(?:^|\\s+)" + name + "(?:\\s+|$)").test(el.className);
    }
    addClass(el, name) {
        if (!this.hasClass(el, name)) {
            el.className = el.className ? [el.className, name].join(" ") : name;
        }
    }
    removeClass(el, name) {
        if (this.hasClass(el, name)) {
            el.className = el.className.replace(new RegExp("(?:^|\\s+)" + name + "(?:\\s+|$)", "g"), "");
        }
    }
};
DragDropComponent.ctorParameters = () => [
    { type: ng2_dragula__WEBPACK_IMPORTED_MODULE_4__["DragulaService"] }
];
DragDropComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-drag-drop",
        template: _raw_loader_drag_drop_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_drag_drop_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DragDropComponent);



/***/ }),

/***/ "5U9Y":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/drag-drop/drag-drop.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">Drag &amp; Drop</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a href=\"#\" onClick=\"return false;\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-2\">\r\n              <a href=\"#\" onClick=\"return false;\">Apps</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">Drag & Drop</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2><strong>Basic</strong> Drag &amp; Drop</h2>\r\n\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"alert alert-info\">\r\n              Move stuff between these two containers. Note how the stuff gets inserted near the mouse\r\n              pointer? Great stuff.\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n                <div class=\"board\">\r\n                  <div class=\"cards\" id=\"left\">\r\n                    <div class=\"container\" dragula=\"VAMPIRES\">\r\n                      <div class=\"drop-card\"><span class=\"table-img msg-user\">\r\n                          <img src=\"assets/images/user/user5.jpg\" alt=\"\">\r\n                        </span><span class=\"cardtitle noselect\"> User\r\n                          card #1</span></div>\r\n                      <div class=\"drop-card\"><span class=\"table-img msg-user\">\r\n                          <img src=\"assets/images/user/user6.jpg\" alt=\"\">\r\n                        </span><span class=\"cardtitle noselect\">User\r\n                          card #2</span></div>\r\n                      <div class=\"drop-card\"><span class=\"table-img msg-user\">\r\n                          <img src=\"assets/images/user/user7.jpg\" alt=\"\">\r\n                        </span><span class=\"cardtitle noselect\">User\r\n                          card #3</span></div>\r\n                      <div class=\"drop-card\"><span class=\"table-img msg-user\">\r\n                          <img src=\"assets/images/user/user8.jpg\" alt=\"\">\r\n                        </span><span class=\"cardtitle noselect\">User\r\n                          card #4</span></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n                <div class=\"board\">\r\n                  <div class=\"cards\" id=\"right\">\r\n                    <div class=\"container\" dragula=\"VAMPIRES\">\r\n                      <div class=\"drop-card\"><span class=\"table-img msg-user\">\r\n                          <img src=\"assets/images/user/user1.jpg\" alt=\"\">\r\n                        </span><span class=\"cardtitle noselect\">User\r\n                          card #7</span></div>\r\n                      <div class=\"drop-card\"><span class=\"table-img msg-user\">\r\n                          <img src=\"assets/images/user/user2.jpg\" alt=\"\">\r\n                        </span><span class=\"cardtitle noselect\">User\r\n                          card #8</span></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2><strong>Drag</strong> &amp; Drop Events</h2>\r\n\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"alert alert-info\" style=\"width: 100%\">\r\n              There are plenty of events along the lifetime of a drag event. <a\r\n                href=\"https://github.com/bevacqua/dragula#drakeon-events\">all\r\n                of them</a> in the docs!\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n                <div class=\"board\">\r\n                  <div class=\"cards\" id=\"left\">\r\n                    <div class=\"container\" dragula=\"DRAGULA_EVENTS\">\r\n                      <div class=\"drop-card\"><span class=\"table-img msg-user\">\r\n                          <img src=\"assets/images/user/user5.jpg\" alt=\"\">\r\n                        </span><span class=\"cardtitle noselect\"> User\r\n                          card #1</span></div>\r\n                      <div class=\"drop-card\"><span class=\"table-img msg-user\">\r\n                          <img src=\"assets/images/user/user6.jpg\" alt=\"\">\r\n                        </span><span class=\"cardtitle noselect\">User\r\n                          card #2</span></div>\r\n                      <div class=\"drop-card\"><span class=\"table-img msg-user\">\r\n                          <img src=\"assets/images/user/user7.jpg\" alt=\"\">\r\n                        </span><span class=\"cardtitle noselect\">User\r\n                          card #3</span></div>\r\n                      <div class=\"drop-card\"><span class=\"table-img msg-user\">\r\n                          <img src=\"assets/images/user/user8.jpg\" alt=\"\">\r\n                        </span><span class=\"cardtitle noselect\">User\r\n                          card #4</span></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n                <div class=\"board\">\r\n                  <div class=\"cards\" id=\"right\">\r\n                    <div class=\"container\" dragula=\"DRAGULA_EVENTS\">\r\n                      <div class=\"drop-card\"><span class=\"table-img msg-user\">\r\n                          <img src=\"assets/images/user/user3.jpg\" alt=\"\">\r\n                        </span><span class=\"cardtitle noselect\">User\r\n                          card #5</span></div>\r\n                      <div class=\"drop-card\"><span class=\"table-img msg-user\">\r\n                          <img src=\"assets/images/user/user4.jpg\" alt=\"\">\r\n                        </span><span class=\"cardtitle noselect\">User\r\n                          card #6</span></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2><strong>Spill</strong></h2>\r\n\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"alert alert-info\">\r\n              Need to be able to quickly delete stuff when it spills out of the chosen containers?\r\n              Note how you can easily sort the items in any containers by just dragging and dropping.\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n                <div class=\"board\">\r\n                  <div class=\"cards\" id=\"right\">\r\n                    <div class='container' dragula=\"SPILL\">\r\n                      <div class=\"drop-card\"><span class=\"table-img msg-user\">\r\n                          <img src=\"assets/images/user/user5.jpg\" alt=\"\">\r\n                        </span><span class=\"cardtitle noselect\"> User\r\n                          card #1</span></div>\r\n                      <div class=\"drop-card\"><span class=\"table-img msg-user\">\r\n                          <img src=\"assets/images/user/user6.jpg\" alt=\"\">\r\n                        </span><span class=\"cardtitle noselect\">User\r\n                          card #2</span></div>\r\n                      <div class=\"drop-card\"><span class=\"table-img msg-user\">\r\n                          <img src=\"assets/images/user/user7.jpg\" alt=\"\">\r\n                        </span><span class=\"cardtitle noselect\">User\r\n                          card #3</span></div>\r\n                      <div class=\"drop-card\"><span class=\"table-img msg-user\">\r\n                          <img src=\"assets/images/user/user8.jpg\" alt=\"\">\r\n                        </span><span class=\"cardtitle noselect\">User\r\n                          card #4</span></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2><strong>Revert</strong></h2>\r\n\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"alert alert-info\">\r\n              By default, dropping an element outside of any known containers will keep the element in\r\n              the last place it went over. You can make elements go back to origin if they're dropped\r\n              outside of known containers, too.\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n                <div class=\"board\">\r\n                  <div class=\"cards\" id=\"left\">\r\n                    <div class=\"container\" dragula=\"REVERT\">\r\n                      <div class=\"drop-card\"><span class=\"table-img msg-user\">\r\n                          <img src=\"assets/images/user/user5.jpg\" alt=\"\">\r\n                        </span><span class=\"cardtitle noselect\"> User\r\n                          card #1</span></div>\r\n                      <div class=\"drop-card\"><span class=\"table-img msg-user\">\r\n                          <img src=\"assets/images/user/user6.jpg\" alt=\"\">\r\n                        </span><span class=\"cardtitle noselect\">User\r\n                          card #2</span></div>\r\n                      <div class=\"drop-card\"><span class=\"table-img msg-user\">\r\n                          <img src=\"assets/images/user/user7.jpg\" alt=\"\">\r\n                        </span><span class=\"cardtitle noselect\">User\r\n                          card #3</span></div>\r\n                      <div class=\"drop-card\"><span class=\"table-img msg-user\">\r\n                          <img src=\"assets/images/user/user8.jpg\" alt=\"\">\r\n                        </span><span class=\"cardtitle noselect\">User\r\n                          card #4</span></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n                <div class=\"board\">\r\n                  <div class=\"cards\" id=\"right\">\r\n                    <div class=\"container\" dragula=\"REVERT\">\r\n                      <div class=\"drop-card\"><span class=\"table-img msg-user\">\r\n                          <img src=\"assets/images/user/user3.jpg\" alt=\"\">\r\n                        </span><span class=\"cardtitle noselect\">User\r\n                          card #5</span></div>\r\n                      <div class=\"drop-card\"><span class=\"table-img msg-user\">\r\n                          <img src=\"assets/images/user/user4.jpg\" alt=\"\">\r\n                        </span><span class=\"cardtitle noselect\">User\r\n                          card #6</span></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2><strong>Revert</strong></h2>\r\n\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"alert alert-info\">\r\n              Copying Elements from left side to right side made it easy for you.\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n                <div class=\"board\">\r\n                  <div class=\"cards\" id=\"left\">\r\n                    <div class='container' dragula=\"COPYABLE\" id=\"left\">\r\n                      <div class=\"drop-card\"><span class=\"table-img msg-user\">\r\n                          <img src=\"assets/images/user/user5.jpg\" alt=\"\">\r\n                        </span><span class=\"cardtitle noselect\"> User\r\n                          card #1</span></div>\r\n                      <div class=\"drop-card\"><span class=\"table-img msg-user\">\r\n                          <img src=\"assets/images/user/user6.jpg\" alt=\"\">\r\n                        </span><span class=\"cardtitle noselect\">User\r\n                          card #2</span></div>\r\n                      <div class=\"drop-card\"><span class=\"table-img msg-user\">\r\n                          <img src=\"assets/images/user/user7.jpg\" alt=\"\">\r\n                        </span><span class=\"cardtitle noselect\">User\r\n                          card #3</span></div>\r\n                      <div class=\"drop-card\"><span class=\"table-img msg-user\">\r\n                          <img src=\"assets/images/user/user8.jpg\" alt=\"\">\r\n                        </span><span class=\"cardtitle noselect\">User\r\n                          card #4</span></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n                <div class=\"board\">\r\n                  <div class=\"cards\" id=\"right\">\r\n                    <div class='container' dragula=\"COPYABLE\" id=\"right\">\r\n                      <div class=\"drop-card\"><span class=\"table-img msg-user\">\r\n                          <img src=\"assets/images/user/user3.jpg\" alt=\"\">\r\n                        </span><span class=\"cardtitle noselect\">User\r\n                          card #5</span></div>\r\n                      <div class=\"drop-card\"><span class=\"table-img msg-user\">\r\n                          <img src=\"assets/images/user/user4.jpg\" alt=\"\">\r\n                        </span><span class=\"cardtitle noselect\">User\r\n                          card #6</span></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "8/JR":
/*!****************************************!*\
  !*** ./node_modules/contra/emitter.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var atoa = __webpack_require__(/*! atoa */ "8T9/");
var debounce = __webpack_require__(/*! ./debounce */ "Ibf7");

module.exports = function emitter (thing, options) {
  var opts = options || {};
  var evt = {};
  if (thing === undefined) { thing = {}; }
  thing.on = function (type, fn) {
    if (!evt[type]) {
      evt[type] = [fn];
    } else {
      evt[type].push(fn);
    }
    return thing;
  };
  thing.once = function (type, fn) {
    fn._once = true; // thing.off(fn) still works!
    thing.on(type, fn);
    return thing;
  };
  thing.off = function (type, fn) {
    var c = arguments.length;
    if (c === 1) {
      delete evt[type];
    } else if (c === 0) {
      evt = {};
    } else {
      var et = evt[type];
      if (!et) { return thing; }
      et.splice(et.indexOf(fn), 1);
    }
    return thing;
  };
  thing.emit = function () {
    var args = atoa(arguments);
    return thing.emitterSnapshot(args.shift()).apply(this, args);
  };
  thing.emitterSnapshot = function (type) {
    var et = (evt[type] || []).slice(0);
    return function () {
      var args = atoa(arguments);
      var ctx = this || thing;
      if (type === 'error' && opts.throws !== false && !et.length) { throw args.length === 1 ? args[0] : args; }
      et.forEach(function emitter (listen) {
        if (opts.async) { debounce(listen, args, ctx); } else { listen.apply(ctx, args); }
        if (listen._once) { thing.off(type, listen); }
      });
      return thing;
    };
  };
  return thing;
};


/***/ }),

/***/ "8T9/":
/*!***********************************!*\
  !*** ./node_modules/atoa/atoa.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function atoa (a, n) { return Array.prototype.slice.call(a, n); }


/***/ }),

/***/ "9Ejp":
/*!****************************************************************************!*\
  !*** ./node_modules/ng2-dragula/__ivy_ngcc__/dist/fesm2015/ng2-dragula.js ***!
  \****************************************************************************/
/*! exports provided: DragulaDirective, DragulaService, DragulaModule, dragula, DrakeFactory, Group, EventTypes, MockDrake, MockDrakeFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragulaDirective", function() { return DragulaDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragulaService", function() { return DragulaService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragulaModule", function() { return DragulaModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dragula", function() { return dragula; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrakeFactory", function() { return DrakeFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventTypes", function() { return EventTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockDrake", function() { return MockDrake; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockDrakeFactory", function() { return MockDrakeFactory; });
/* harmony import */ var dragula__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dragula */ "YS7c");
/* harmony import */ var dragula__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dragula__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "41Ph");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "9YHx");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

class Group {
    /**
     * @param {?} name
     * @param {?} drake
     * @param {?} options
     */
    constructor(name, drake, options) {
        this.name = name;
        this.drake = drake;
        this.options = options;
        this.initEvents = false;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const EventTypes = {
    Cancel: "cancel",
    Cloned: "cloned",
    Drag: "drag",
    DragEnd: "dragend",
    Drop: "drop",
    Out: "out",
    Over: "over",
    Remove: "remove",
    Shadow: "shadow",
    DropModel: "dropModel",
    RemoveModel: "removeModel",
};
/** @type {?} */
const AllEvents = Object.keys(EventTypes).map(k => /** @type {?} */ (EventTypes[/** @type {?} */ (k)]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @type {?} */
const dragula = dragula__WEBPACK_IMPORTED_MODULE_0___default.a || dragula__WEBPACK_IMPORTED_MODULE_0__;
class DrakeFactory {
    /**
     * @param {?=} build
     */
    constructor(build = dragula) {
        this.build = build;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @type {?} */
const filterEvent = (eventType, filterDragType, projector) => (input) => {
    return input.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(({ event, name }) => {
        return event === eventType
            && (filterDragType === undefined || name === filterDragType);
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(({ name, args }) => projector(name, args)));
};
/** @type {?} */
const elContainerSourceProjector = (name, [el, container, source]) => ({ name, el, container, source });
class DragulaService {
    /**
     * @param {?=} drakeFactory
     */
    constructor(drakeFactory = null) {
        this.drakeFactory = drakeFactory;
        this.dispatch$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.drag = (groupName) => this.dispatch$.pipe(filterEvent(EventTypes.Drag, groupName, (name, [el, source]) => ({ name, el, source })));
        this.dragend = (groupName) => this.dispatch$.pipe(filterEvent(EventTypes.DragEnd, groupName, (name, [el]) => ({ name, el })));
        this.drop = (groupName) => this.dispatch$.pipe(filterEvent(EventTypes.Drop, groupName, (name, [el, target, source, sibling]) => {
            return { name, el, target, source, sibling };
        }));
        this.elContainerSource = (eventType) => (groupName) => this.dispatch$.pipe(filterEvent(eventType, groupName, elContainerSourceProjector));
        this.cancel = this.elContainerSource(EventTypes.Cancel);
        this.remove = this.elContainerSource(EventTypes.Remove);
        this.shadow = this.elContainerSource(EventTypes.Shadow);
        this.over = this.elContainerSource(EventTypes.Over);
        this.out = this.elContainerSource(EventTypes.Out);
        this.cloned = (groupName) => this.dispatch$.pipe(filterEvent(EventTypes.Cloned, groupName, (name, [clone, original, cloneType]) => {
            return { name, clone, original, cloneType };
        }));
        this.dropModel = (groupName) => this.dispatch$.pipe(filterEvent(EventTypes.DropModel, groupName, (name, [el, target, source, sibling, item, sourceModel, targetModel, sourceIndex, targetIndex]) => {
            return { name, el, target, source, sibling, item, sourceModel, targetModel, sourceIndex, targetIndex };
        }));
        this.removeModel = (groupName) => this.dispatch$.pipe(filterEvent(EventTypes.RemoveModel, groupName, (name, [el, container, source, item, sourceModel, sourceIndex]) => {
            return { name, el, container, source, item, sourceModel, sourceIndex };
        }));
        this.groups = {};
        if (this.drakeFactory === null) {
            this.drakeFactory = new DrakeFactory();
        }
    }
    /**
     * Public mainly for testing purposes. Prefer `createGroup()`.
     * @param {?} group
     * @return {?}
     */
    add(group) {
        /** @type {?} */
        let existingGroup = this.find(group.name);
        if (existingGroup) {
            throw new Error('Group named: "' + group.name + '" already exists.');
        }
        this.groups[group.name] = group;
        this.handleModels(group);
        this.setupEvents(group);
        return group;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    find(name) {
        return this.groups[name];
    }
    /**
     * @param {?} name
     * @return {?}
     */
    destroy(name) {
        /** @type {?} */
        let group = this.find(name);
        if (!group) {
            return;
        }
        group.drake && group.drake.destroy();
        delete this.groups[name];
    }
    /**
     * Creates a group with the specified name and options.
     *
     * Note: formerly known as `setOptions`
     * @template T
     * @param {?} name
     * @param {?} options
     * @return {?}
     */
    createGroup(name, options) {
        return this.add(new Group(name, this.drakeFactory.build([], options), options));
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    handleModels({ name, drake, options }) {
        /** @type {?} */
        let dragElm;
        /** @type {?} */
        let dragIndex;
        /** @type {?} */
        let dropIndex;
        drake.on('remove', (el, container, source) => {
            if (!drake.models) {
                return;
            }
            /** @type {?} */
            let sourceModel = drake.models[drake.containers.indexOf(source)];
            sourceModel = sourceModel.slice(0);
            /** @type {?} */
            const item = sourceModel.splice(dragIndex, 1)[0];
            // console.log('REMOVE');
            // console.log(sourceModel);
            this.dispatch$.next({
                event: EventTypes.RemoveModel,
                name,
                args: [el, container, source, item, sourceModel, dragIndex]
            });
        });
        drake.on('drag', (el, source) => {
            if (!drake.models) {
                return;
            }
            dragElm = el;
            dragIndex = this.domIndexOf(el, source);
        });
        drake.on('drop', (dropElm, target, source, sibling) => {
            if (!drake.models || !target) {
                return;
            }
            dropIndex = this.domIndexOf(dropElm, target);
            /** @type {?} */
            let sourceModel = drake.models[drake.containers.indexOf(source)];
            /** @type {?} */
            let targetModel = drake.models[drake.containers.indexOf(target)];
            /** @type {?} */
            let item;
            if (target === source) {
                sourceModel = sourceModel.slice(0);
                item = sourceModel.splice(dragIndex, 1)[0];
                sourceModel.splice(dropIndex, 0, item);
                // this was true before we cloned and updated sourceModel,
                // but targetModel still has the old value
                targetModel = sourceModel;
            }
            else {
                /** @type {?} */
                let isCopying = dragElm !== dropElm;
                item = sourceModel[dragIndex];
                if (isCopying) {
                    if (!options.copyItem) {
                        throw new Error("If you have enabled `copy` on a group, you must provide a `copyItem` function.");
                    }
                    item = options.copyItem(item);
                }
                if (!isCopying) {
                    sourceModel = sourceModel.slice(0);
                    sourceModel.splice(dragIndex, 1);
                }
                targetModel = targetModel.slice(0);
                targetModel.splice(dropIndex, 0, item);
                if (isCopying) {
                    try {
                        target.removeChild(dropElm);
                    }
                    catch (e) { }
                }
            }
            this.dispatch$.next({
                event: EventTypes.DropModel,
                name,
                args: [dropElm, target, source, sibling, item, sourceModel, targetModel, dragIndex, dropIndex]
            });
        });
    }
    /**
     * @param {?} group
     * @return {?}
     */
    setupEvents(group) {
        if (group.initEvents) {
            return;
        }
        group.initEvents = true;
        /** @type {?} */
        const name = group.name;
        /** @type {?} */
        let emitter = (event) => {
            group.drake.on(event, (...args) => {
                this.dispatch$.next({ event, name, args });
            });
        };
        AllEvents.forEach(emitter);
    }
    /**
     * @param {?} child
     * @param {?} parent
     * @return {?}
     */
    domIndexOf(child, parent) {
        return Array.prototype.indexOf.call(parent.children, child);
    }
}
DragulaService.ɵfac = function DragulaService_Factory(t) { return new (t || DragulaService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DrakeFactory, 8)); };
DragulaService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DragulaService, factory: DragulaService.ɵfac });
/** @nocollapse */
DragulaService.ctorParameters = () => [
    { type: DrakeFactory, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DragulaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: DrakeFactory, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DragulaDirective {
    /**
     * @param {?} el
     * @param {?} dragulaService
     */
    constructor(el, dragulaService) {
        this.el = el;
        this.dragulaService = dragulaService;
        this.dragulaModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    get container() {
        return this.el && this.el.nativeElement;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes && changes.dragula) {
            const { previousValue: prev, currentValue: current, firstChange } = changes.dragula;
            /** @type {?} */
            let hadPreviousValue = !!prev;
            /** @type {?} */
            let hasNewValue = !!current;
            // something -> null       =>  teardown only
            // something -> something  =>  teardown, then setup
            //      null -> something  =>  setup only
            //
            //      null -> null (precluded by fact of change being present)
            if (hadPreviousValue) {
                this.teardown(prev);
            }
            if (hasNewValue) {
                this.setup();
            }
        }
        else if (changes && changes.dragulaModel) {
            const { previousValue: prev, currentValue: current, firstChange } = changes.dragulaModel;
            const { drake } = this.group;
            if (this.dragula && drake) {
                drake.models = drake.models || [];
                /** @type {?} */
                let prevIndex = drake.models.indexOf(prev);
                if (prevIndex !== -1) {
                    // delete the previous
                    drake.models.splice(prevIndex, 1);
                    // maybe insert a new one at the same spot
                    if (!!current) {
                        drake.models.splice(prevIndex, 0, current);
                    }
                }
                else if (!!current) {
                    // no previous one to remove; just push this one.
                    drake.models.push(current);
                }
            }
        }
    }
    /**
     * @return {?}
     */
    setup() {
        /** @type {?} */
        let checkModel = (group) => {
            if (this.dragulaModel) {
                if (group.drake.models) {
                    group.drake.models.push(this.dragulaModel);
                }
                else {
                    group.drake.models = [this.dragulaModel];
                }
            }
        };
        /** @type {?} */
        let group = this.dragulaService.find(this.dragula);
        if (!group) {
            /** @type {?} */
            let options = {};
            group = this.dragulaService.createGroup(this.dragula, options);
        }
        // ensure model and container element are pushed
        checkModel(group);
        group.drake.containers.push(this.container);
        this.subscribe(this.dragula);
        this.group = group;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    subscribe(name) {
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.subs.add(this.dragulaService
            .dropModel(name)
            .subscribe(({ source, target, sourceModel, targetModel }) => {
            if (source === this.el.nativeElement) {
                this.dragulaModelChange.emit(sourceModel);
            }
            else if (target === this.el.nativeElement) {
                this.dragulaModelChange.emit(targetModel);
            }
        }));
        this.subs.add(this.dragulaService
            .removeModel(name)
            .subscribe(({ source, sourceModel }) => {
            if (source === this.el.nativeElement) {
                this.dragulaModelChange.emit(sourceModel);
            }
        }));
    }
    /**
     * @param {?} groupName
     * @return {?}
     */
    teardown(groupName) {
        if (this.subs) {
            this.subs.unsubscribe();
        }
        /** @type {?} */
        const group = this.dragulaService.find(groupName);
        if (group) {
            /** @type {?} */
            const itemToRemove = group.drake.containers.indexOf(this.el.nativeElement);
            if (itemToRemove !== -1) {
                group.drake.containers.splice(itemToRemove, 1);
            }
            if (this.dragulaModel && group.drake && group.drake.models) {
                /** @type {?} */
                let modelIndex = group.drake.models.indexOf(this.dragulaModel);
                if (modelIndex !== -1) {
                    group.drake.models.splice(modelIndex, 1);
                }
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.teardown(this.dragula);
    }
}
DragulaDirective.ɵfac = function DragulaDirective_Factory(t) { return new (t || DragulaDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DragulaService)); };
DragulaDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DragulaDirective, selectors: [["", "dragula", ""]], inputs: { dragula: "dragula", dragulaModel: "dragulaModel" }, outputs: { dragulaModelChange: "dragulaModelChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
DragulaDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: DragulaService }
];
DragulaDirective.propDecorators = {
    dragula: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    dragulaModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    dragulaModelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DragulaDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: '[dragula]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: DragulaService }]; }, { dragulaModelChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], dragula: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], dragulaModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DragulaModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DragulaModule,
            providers: [DragulaService]
        };
    }
}
DragulaModule.ɵfac = function DragulaModule_Factory(t) { return new (t || DragulaModule)(); };
DragulaModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DragulaModule });
DragulaModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DragulaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                exports: [DragulaDirective],
                declarations: [DragulaDirective]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DragulaModule, { declarations: [DragulaDirective], exports: [DragulaDirective] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @type {?} */
const MockDrakeFactory = new DrakeFactory((containers, options) => {
    return new MockDrake(containers, options);
});
/**
 * You can use MockDrake to simulate Drake events.
 *
 * The three methods that actually do anything are `on(event, listener)`,
 * `destroy()`, and a new method, `emit()`. Use `emit()` to manually emit Drake
 * events, and if you injected MockDrake properly with MockDrakeFactory or
 * mocked the DragulaService.find() method, then you can make ng2-dragula think
 * drags and drops are happening.
 *
 * Caveats:
 *
 * 1. YOU MUST MAKE THE DOM CHANGES YOURSELF.
 * 2. REPEAT: YOU MUST MAKE THE DOM CHANGES YOURSELF.
 *    That means `source.removeChild(el)`, and `target.insertBefore(el)`.
 * 3. None of the other methods do anything.
 *    That's ok, because ng2-dragula doesn't use them.
 */
class MockDrake {
    /**
     * @param {?=} containers A list of container elements.
     * @param {?=} options These will NOT be used. At all.
     * @param {?=} models Nonstandard, but useful for testing using `new MockDrake()` directly.
     *               Note, default value is undefined, like a real Drake. Don't change that.
     */
    constructor(containers = [], options = {}, models) {
        this.containers = containers;
        this.options = options;
        this.models = models;
        /* Doesn't represent anything meaningful. */
        this.dragging = false;
        this.emitter$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    start(item) {
        this.dragging = true;
    }
    /**
     * @return {?}
     */
    end() {
        this.dragging = false;
    }
    /**
     * @param {?=} revert
     * @return {?}
     */
    cancel(revert) {
        this.dragging = false;
    }
    /**
     * @return {?}
     */
    remove() {
        this.dragging = false;
    }
    /**
     * @param {?} event
     * @param {?} callback
     * @return {?}
     */
    on(event, callback) {
        this.subs.add(this.emitter$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(({ eventType }) => eventType === event))
            .subscribe(({ args }) => {
            callback(...args);
        }));
    }
    /**
     * @return {?}
     */
    destroy() {
        this.subs.unsubscribe();
    }
    /**
     * This is the most useful method. You can use it to manually fire events that would normally
     * be fired by a real drake.
     *
     * You're likely most interested in firing `drag`, `remove` and `drop`, the three events
     * DragulaService uses to implement [dragulaModel].
     *
     * See https://github.com/bevacqua/dragula#drakeon-events for what you should emit (and in what order).
     *
     * (Note also, firing dropModel and removeModel won't work. You would have to mock DragulaService for that.)
     * @param {?} eventType
     * @param {...?} args
     * @return {?}
     */
    emit(eventType, ...args) {
        this.emitter$.next({ eventType, args });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWRyYWd1bGEuanMiLCJzb3VyY2VzIjpbIm5nMi1kcmFndWxhL0dyb3VwLnRzIiwibmcyLWRyYWd1bGEvRXZlbnRUeXBlcy50cyIsIm5nMi1kcmFndWxhL0RyYWtlRmFjdG9yeS50cyIsIm5nMi1kcmFndWxhL2NvbXBvbmVudHMvZHJhZ3VsYS5zZXJ2aWNlLnRzIiwibmcyLWRyYWd1bGEvY29tcG9uZW50cy9kcmFndWxhLmRpcmVjdGl2ZS50cyIsIm5nMi1kcmFndWxhL2NvbXBvbmVudHMvZHJhZ3VsYS5tb2R1bGUudHMiLCJuZzItZHJhZ3VsYS9Nb2NrRHJha2UudHMiXSwibmFtZXMiOlsiKC8qKiBAdHlwZSB7P30gKi8gKGRyYWd1bGFFeHB0KSkuZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHQTtBQUFjO0FBQ2I7QUFBdUI7QUFDZDtBQUNXO0FBQ2pCLElBRkYsWUFDUyxNQUNBLE9BQ0E7QUFBVyxRQUZYLFNBQUksR0FBSixJQUFJO0FBQUUsUUFDTixVQUFLLEdBQUwsS0FBSztBQUFFLFFBQ1AsWUFBTyxHQUFQLE9BQU87QUFBRSwwQkFKVyxLQUFLO0FBQ3BDLEtBSU07QUFDTixDQUFDO0FBQ0Q7QUFBQztBQUFJO0FBQWtDO0FBQXlDO0FBQUk7QUFBc0I7QUFBcUIsSUNWM0gsUUFBUyxRQUFRO0FBQ3JCLElBQUksUUFBUyxRQUFRO0FBQ3JCLElBQUksTUFBTyxNQUFNO0FBQ2pCLElBQUksU0FBVSxTQUFTO0FBQ3ZCLElBQUksTUFBTyxNQUFNO0FBQ2pCLElBQUksS0FBTSxLQUFLO0FBQ2YsSUFBSSxNQUFPLE1BQU07QUFDakIsSUFBSSxRQUFTLFFBQVE7QUFDckIsSUFBSSxRQUFTLFFBQVE7QUFDckIsSUFBSSxXQUFZLFdBQVc7QUFDM0IsSUFBSSxhQUFjLGFBQWE7QUFDL0I7QUFFQTtBQUFBLE1BQWEsU0FBUyxHQUFpQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLHNCQUFJLFVBQVUsbUJB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QUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO0FBQzNDLEtBQUc7QUFDSCxDQUNDO0FBQ0Q7QUFBQztBQUFJO0FBQWtDO0FBQXlDO0FBQUk7QUFBQztBQUFJO0FBQWtDO0FBQXlDO0FBQUk7QUFBQzs7QU45RkEsQUFFQSxBQUNBLEFBQ0EsQUFDQSxBQUZBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUpBLEFBQUEsQUFLQSxBQUNBLEFDVEEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUNaQSxBQUNBLEFBQUEsQUFBQSxBQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFDVEEsQUFXQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQXFGQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUE5RUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFDQSxBQUVBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFRQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBeE5BLEFBQUEsQUF2QkEsQUFBQSxBQTBHQSxBQUFBLEFDaEhBLEFBbUJBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFUQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFPQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQU1BLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFDQSxBQUtBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFDQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFDQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQWhJQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBTkEsQUFBQSxBQUNBLEFBQUEsQUFPQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUNWQSxBQVNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQVZBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFDUEEsQUFPQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFrQkEsQUFPQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBRkEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQXNCQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBM0JBLEFBTUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQU9BLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBYUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERyYWtlV2l0aE1vZGVscyB9IGZyb20gXCIuL0RyYWtlV2l0aE1vZGVsc1wiO1xuaW1wb3J0IHsgRHJhZ3VsYU9wdGlvbnMgfSBmcm9tIFwiLi9EcmFndWxhT3B0aW9uc1wiO1xuXG5leHBvcnQgY2xhc3MgR3JvdXAge1xuICBwdWJsaWMgaW5pdEV2ZW50czogYm9vbGVhbiA9IGZhbHNlO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nLFxuICAgIHB1YmxpYyBkcmFrZTogRHJha2VXaXRoTW9kZWxzLFxuICAgIHB1YmxpYyBvcHRpb25zOiBEcmFndWxhT3B0aW9uc1xuICApIHt9XG59XG4iLCJleHBvcnQgZW51bSBFdmVudFR5cGVzIHtcbiAgICBDYW5jZWwgPSBcImNhbmNlbFwiLFxuICAgIENsb25lZCA9IFwiY2xvbmVkXCIsXG4gICAgRHJhZyA9IFwiZHJhZ1wiLFxuICAgIERyYWdFbmQgPSBcImRyYWdlbmRcIixcbiAgICBEcm9wID0gXCJkcm9wXCIsXG4gICAgT3V0ID0gXCJvdXRcIixcbiAgICBPdmVyID0gXCJvdmVyXCIsXG4gICAgUmVtb3ZlID0gXCJyZW1vdmVcIixcbiAgICBTaGFkb3cgPSBcInNoYWRvd1wiLFxuICAgIERyb3BNb2RlbCA9IFwiZHJvcE1vZGVsXCIsXG4gICAgUmVtb3ZlTW9kZWwgPSBcInJlbW92ZU1vZGVsXCIsXG59XG5cbmV4cG9ydCBjb25zdCBBbGxFdmVudHM6IEV2ZW50VHlwZXNbXSA9IE9iamVjdC5rZXlzKEV2ZW50VHlwZXMpLm1hcChrID0+IEV2ZW50VHlwZXNbayBhcyBhbnldIGFzIEV2ZW50VHlwZXMpO1xuXG4iLCJpbXBvcnQgeyBEcmFndWxhT3B0aW9ucyB9IGZyb20gJy4vRHJhZ3VsYU9wdGlvbnMnO1xuaW1wb3J0IHsgRHJha2VXaXRoTW9kZWxzIH0gZnJvbSAnLi9EcmFrZVdpdGhNb2RlbHMnO1xuaW1wb3J0ICogYXMgZHJhZ3VsYUV4cHQgZnJvbSAnZHJhZ3VsYSc7XG5leHBvcnQgY29uc3QgZHJhZ3VsYTogKGNvbnRhaW5lcnM/OiBhbnksIG9wdGlvbnM/OiBhbnkpID0+IGFueSA9IChkcmFndWxhRXhwdCBhcyBhbnkpLmRlZmF1bHQgfHwgZHJhZ3VsYUV4cHQ7XG5cbmV4cG9ydCB0eXBlIERyYWtlQnVpbGRlciA9IChjb250YWluZXJzOiBhbnlbXSwgb3B0aW9uczogRHJhZ3VsYU9wdGlvbnMpID0+IERyYWtlV2l0aE1vZGVscztcblxuZXhwb3J0IGNsYXNzIERyYWtlRmFjdG9yeSB7XG4gIGNvbnN0cnVjdG9yIChwdWJsaWMgYnVpbGQ6IERyYWtlQnVpbGRlciA9IGRyYWd1bGEpIHt9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuLi9Hcm91cCc7XG5pbXBvcnQgeyBEcmFndWxhT3B0aW9ucyB9IGZyb20gJy4uL0RyYWd1bGFPcHRpb25zJztcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRXZlbnRUeXBlcywgQWxsRXZlbnRzIH0gZnJvbSAnLi4vRXZlbnRUeXBlcyc7XG5pbXBvcnQgeyBEcmFrZUZhY3RvcnkgfSBmcm9tICcuLi9EcmFrZUZhY3RvcnknO1xuXG50eXBlIEZpbHRlclByb2plY3RvcjxUIGV4dGVuZHMgeyBuYW1lOiBzdHJpbmc7IH0+ID0gKG5hbWU6IHN0cmluZywgYXJnczogYW55W10pID0+IFQ7XG50eXBlIERpc3BhdGNoID0geyBldmVudDogRXZlbnRUeXBlczsgbmFtZTogc3RyaW5nOyBhcmdzOiBhbnlbXTsgfTtcblxuY29uc3QgZmlsdGVyRXZlbnQgPSA8VCBleHRlbmRzIHsgbmFtZTogc3RyaW5nOyB9PihcbiAgZXZlbnRUeXBlOiBFdmVudFR5cGVzLFxuICBmaWx0ZXJEcmFnVHlwZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICBwcm9qZWN0b3I6IEZpbHRlclByb2plY3RvcjxUPlxuKSA9PiAoaW5wdXQ6IE9ic2VydmFibGU8RGlzcGF0Y2g+KTogT2JzZXJ2YWJsZTxUPiA9PiB7XG4gIHJldHVybiBpbnB1dC5waXBlKFxuICAgIGZpbHRlcigoeyBldmVudCwgbmFtZSB9KSA9PiB7XG4gICAgICByZXR1cm4gZXZlbnQgPT09IGV2ZW50VHlwZVxuICAgICAgICAgICYmIChmaWx0ZXJEcmFnVHlwZSA9PT0gdW5kZWZpbmVkIHx8IG5hbWUgPT09IGZpbHRlckRyYWdUeXBlKTtcbiAgICB9KSxcbiAgICBtYXAoKHsgbmFtZSwgYXJncyB9KSA9PiBwcm9qZWN0b3IobmFtZSwgYXJncykpXG4gICk7XG59XG5cbmNvbnN0IGVsQ29udGFpbmVyU291cmNlUHJvamVjdG9yID1cbiAgKG5hbWU6IHN0cmluZywgW2VsLCBjb250YWluZXIsIHNvdXJjZV06IFtFbGVtZW50LCBFbGVtZW50LCBFbGVtZW50XSkgPT5cbiAgICAoeyBuYW1lLCBlbCwgY29udGFpbmVyLCBzb3VyY2UgfSk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEcmFndWxhU2VydmljZSB7XG5cbiAgLyogaHR0cHM6Ly9naXRodWIuY29tL2JldmFjcXVhL2RyYWd1bGEjZHJha2Vvbi1ldmVudHMgKi9cblxuICBwcml2YXRlIGRpc3BhdGNoJCA9IG5ldyBTdWJqZWN0PERpc3BhdGNoPigpO1xuXG4gIHB1YmxpYyBkcmFnID0gKGdyb3VwTmFtZT86IHN0cmluZykgPT4gdGhpcy5kaXNwYXRjaCQucGlwZShcbiAgICBmaWx0ZXJFdmVudChcbiAgICAgIEV2ZW50VHlwZXMuRHJhZyxcbiAgICAgIGdyb3VwTmFtZSxcbiAgICAgIChuYW1lLCBbZWwsIHNvdXJjZV06IFtFbGVtZW50LCBFbGVtZW50XSkgPT4gKHsgbmFtZSwgZWwsIHNvdXJjZSB9KVxuICAgIClcbiAgKTtcblxuICBwdWJsaWMgZHJhZ2VuZCA9IChncm91cE5hbWU/OiBzdHJpbmcpID0+IHRoaXMuZGlzcGF0Y2gkLnBpcGUoXG4gICAgZmlsdGVyRXZlbnQoXG4gICAgICBFdmVudFR5cGVzLkRyYWdFbmQsXG4gICAgICBncm91cE5hbWUsXG4gICAgICAobmFtZSwgW2VsXTogW0VsZW1lbnRdKSA9PiAoeyBuYW1lLCBlbCB9KVxuICAgIClcbiAgKTtcblxuICBwdWJsaWMgZHJvcCA9IChncm91cE5hbWU/OiBzdHJpbmcpID0+IHRoaXMuZGlzcGF0Y2gkLnBpcGUoXG4gICAgZmlsdGVyRXZlbnQoXG4gICAgICBFdmVudFR5cGVzLkRyb3AsXG4gICAgICBncm91cE5hbWUsXG4gICAgICAobmFtZSwgW1xuICAgICAgICBlbCwgdGFyZ2V0LCBzb3VyY2UsIHNpYmxpbmdcbiAgICAgIF06IFtFbGVtZW50LCBFbGVtZW50LCBFbGVtZW50LCBFbGVtZW50XSkgPT4ge1xuICAgICAgICByZXR1cm4geyBuYW1lLCBlbCwgdGFyZ2V0LCBzb3VyY2UsIHNpYmxpbmcgfTtcbiAgICAgIH0pXG4gICk7XG5cbiAgcHJpdmF0ZSBlbENvbnRhaW5lclNvdXJjZSA9XG4gICAgKGV2ZW50VHlwZTogRXZlbnRUeXBlcykgPT5cbiAgICAoZ3JvdXBOYW1lPzogc3RyaW5nKSA9PlxuICAgIHRoaXMuZGlzcGF0Y2gkLnBpcGUoXG4gICAgICBmaWx0ZXJFdmVudChldmVudFR5cGUsIGdyb3VwTmFtZSwgZWxDb250YWluZXJTb3VyY2VQcm9qZWN0b3IpXG4gICAgKTtcblxuICBwdWJsaWMgY2FuY2VsID0gdGhpcy5lbENvbnRhaW5lclNvdXJjZShFdmVudFR5cGVzLkNhbmNlbCk7XG4gIHB1YmxpYyByZW1vdmUgPSB0aGlzLmVsQ29udGFpbmVyU291cmNlKEV2ZW50VHlwZXMuUmVtb3ZlKTtcbiAgcHVibGljIHNoYWRvdyA9IHRoaXMuZWxDb250YWluZXJTb3VyY2UoRXZlbnRUeXBlcy5TaGFkb3cpO1xuICBwdWJsaWMgb3ZlciA9IHRoaXMuZWxDb250YWluZXJTb3VyY2UoRXZlbnRUeXBlcy5PdmVyKTtcbiAgcHVibGljIG91dCA9IHRoaXMuZWxDb250YWluZXJTb3VyY2UoRXZlbnRUeXBlcy5PdXQpO1xuXG4gIHB1YmxpYyBjbG9uZWQgPSAoZ3JvdXBOYW1lPzogc3RyaW5nKSA9PiB0aGlzLmRpc3BhdGNoJC5waXBlKFxuICAgIGZpbHRlckV2ZW50KFxuICAgICAgRXZlbnRUeXBlcy5DbG9uZWQsXG4gICAgICBncm91cE5hbWUsXG4gICAgICAobmFtZSwgW1xuICAgICAgICBjbG9uZSwgb3JpZ2luYWwsIGNsb25lVHlwZVxuICAgICAgXTogW0VsZW1lbnQsIEVsZW1lbnQsICdtaXJyb3InIHwgJ2NvcHknXSkgPT4ge1xuICAgICAgICByZXR1cm4geyBuYW1lLCBjbG9uZSwgb3JpZ2luYWwsIGNsb25lVHlwZSB9XG4gICAgICB9KVxuICApO1xuXG4gIHB1YmxpYyBkcm9wTW9kZWwgPSA8VCA9IGFueT4oZ3JvdXBOYW1lPzogc3RyaW5nKSA9PiB0aGlzLmRpc3BhdGNoJC5waXBlKFxuICAgIGZpbHRlckV2ZW50KFxuICAgICAgRXZlbnRUeXBlcy5Ecm9wTW9kZWwsXG4gICAgICBncm91cE5hbWUsXG4gICAgICAobmFtZSwgW1xuICAgICAgICBlbCwgdGFyZ2V0LCBzb3VyY2UsIHNpYmxpbmcsIGl0ZW0sIHNvdXJjZU1vZGVsLCB0YXJnZXRNb2RlbCwgc291cmNlSW5kZXgsIHRhcmdldEluZGV4XG4gICAgICBdOiBbRWxlbWVudCwgRWxlbWVudCwgRWxlbWVudCwgRWxlbWVudCwgVCwgVFtdLCBUW10sIG51bWJlciwgbnVtYmVyXSkgPT4ge1xuICAgICAgICByZXR1cm4geyBuYW1lLCBlbCwgdGFyZ2V0LCBzb3VyY2UsIHNpYmxpbmcsIGl0ZW0sIHNvdXJjZU1vZGVsLCB0YXJnZXRNb2RlbCwgc291cmNlSW5kZXgsIHRhcmdldEluZGV4IH1cbiAgICAgIH0pXG4gICk7XG5cbiAgcHVibGljIHJlbW92ZU1vZGVsID0gPFQgPSBhbnk+KGdyb3VwTmFtZT86IHN0cmluZykgPT4gdGhpcy5kaXNwYXRjaCQucGlwZShcbiAgICBmaWx0ZXJFdmVudChcbiAgICAgIEV2ZW50VHlwZXMuUmVtb3ZlTW9kZWwsXG4gICAgICBncm91cE5hbWUsXG4gICAgICAobmFtZSwgW1xuICAgICAgICBlbCwgY29udGFpbmVyLCBzb3VyY2UsIGl0ZW0sIHNvdXJjZU1vZGVsLCBzb3VyY2VJbmRleFxuICAgICAgXTogW0VsZW1lbnQsIEVsZW1lbnQsIEVsZW1lbnQsIFQsIFRbXSwgbnVtYmVyXSkgPT4ge1xuICAgICAgICByZXR1cm4geyBuYW1lLCBlbCwgY29udGFpbmVyLCBzb3VyY2UsIGl0ZW0sIHNvdXJjZU1vZGVsLCBzb3VyY2VJbmRleCB9XG4gICAgICB9XG4gICAgKVxuICApO1xuXG4gIHByaXZhdGUgZ3JvdXBzOiB7IFtrOiBzdHJpbmddOiBHcm91cCB9ID0ge307XG5cbiAgY29uc3RydWN0b3IgKEBPcHRpb25hbCgpIHByaXZhdGUgZHJha2VGYWN0b3J5OiBEcmFrZUZhY3RvcnkgPSBudWxsKSB7XG4gICAgaWYgKHRoaXMuZHJha2VGYWN0b3J5ID09PSBudWxsKSB7XG4gICAgICB0aGlzLmRyYWtlRmFjdG9yeSA9IG5ldyBEcmFrZUZhY3RvcnkoKTtcbiAgICB9XG4gIH1cblxuICAvKiogUHVibGljIG1haW5seSBmb3IgdGVzdGluZyBwdXJwb3Nlcy4gUHJlZmVyIGBjcmVhdGVHcm91cCgpYC4gKi9cbiAgcHVibGljIGFkZChncm91cDogR3JvdXApOiBHcm91cCB7XG4gICAgbGV0IGV4aXN0aW5nR3JvdXAgPSB0aGlzLmZpbmQoZ3JvdXAubmFtZSk7XG4gICAgaWYgKGV4aXN0aW5nR3JvdXApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignR3JvdXAgbmFtZWQ6IFwiJyArIGdyb3VwLm5hbWUgKyAnXCIgYWxyZWFkeSBleGlzdHMuJyk7XG4gICAgfVxuICAgIHRoaXMuZ3JvdXBzW2dyb3VwLm5hbWVdID0gZ3JvdXA7XG4gICAgdGhpcy5oYW5kbGVNb2RlbHMoZ3JvdXApO1xuICAgIHRoaXMuc2V0dXBFdmVudHMoZ3JvdXApO1xuICAgIHJldHVybiBncm91cDtcbiAgfVxuXG4gIHB1YmxpYyBmaW5kKG5hbWU6IHN0cmluZyk6IEdyb3VwIHtcbiAgICByZXR1cm4gdGhpcy5ncm91cHNbbmFtZV07XG4gIH1cblxuICBwdWJsaWMgZGVzdHJveShuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBsZXQgZ3JvdXAgPSB0aGlzLmZpbmQobmFtZSk7XG4gICAgaWYgKCFncm91cCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBncm91cC5kcmFrZSAmJiBncm91cC5kcmFrZS5kZXN0cm95KCk7XG4gICAgZGVsZXRlIHRoaXMuZ3JvdXBzW25hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBncm91cCB3aXRoIHRoZSBzcGVjaWZpZWQgbmFtZSBhbmQgb3B0aW9ucy5cbiAgICpcbiAgICogTm90ZTogZm9ybWVybHkga25vd24gYXMgYHNldE9wdGlvbnNgXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlR3JvdXA8VCA9IGFueT4obmFtZTogc3RyaW5nLCBvcHRpb25zOiBEcmFndWxhT3B0aW9uczxUPik6IEdyb3VwIHtcbiAgICByZXR1cm4gdGhpcy5hZGQobmV3IEdyb3VwKFxuICAgICAgbmFtZSxcbiAgICAgIHRoaXMuZHJha2VGYWN0b3J5LmJ1aWxkKFtdLCBvcHRpb25zKSxcbiAgICAgIG9wdGlvbnNcbiAgICApKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTW9kZWxzKHsgbmFtZSwgZHJha2UsIG9wdGlvbnMgfTogR3JvdXApOiB2b2lkIHtcbiAgICBsZXQgZHJhZ0VsbTogYW55O1xuICAgIGxldCBkcmFnSW5kZXg6IG51bWJlcjtcbiAgICBsZXQgZHJvcEluZGV4OiBudW1iZXI7XG4gICAgZHJha2Uub24oJ3JlbW92ZScsIChlbDogYW55LCBjb250YWluZXI6IGFueSwgc291cmNlOiBhbnkpID0+IHtcbiAgICAgIGlmICghZHJha2UubW9kZWxzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBzb3VyY2VNb2RlbCA9IGRyYWtlLm1vZGVsc1tkcmFrZS5jb250YWluZXJzLmluZGV4T2Yoc291cmNlKV07XG4gICAgICBzb3VyY2VNb2RlbCA9IHNvdXJjZU1vZGVsLnNsaWNlKDApOyAvLyBjbG9uZSBpdFxuICAgICAgY29uc3QgaXRlbSA9IHNvdXJjZU1vZGVsLnNwbGljZShkcmFnSW5kZXgsIDEpWzBdO1xuICAgICAgLy8gY29uc29sZS5sb2coJ1JFTU9WRScpO1xuICAgICAgLy8gY29uc29sZS5sb2coc291cmNlTW9kZWwpO1xuICAgICAgdGhpcy5kaXNwYXRjaCQubmV4dCh7XG4gICAgICAgIGV2ZW50OiBFdmVudFR5cGVzLlJlbW92ZU1vZGVsLFxuICAgICAgICBuYW1lLFxuICAgICAgICBhcmdzOiBbIGVsLCBjb250YWluZXIsIHNvdXJjZSwgaXRlbSwgc291cmNlTW9kZWwsIGRyYWdJbmRleCBdXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBkcmFrZS5vbignZHJhZycsIChlbDogYW55LCBzb3VyY2U6IGFueSkgPT4ge1xuICAgICAgaWYgKCFkcmFrZS5tb2RlbHMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZHJhZ0VsbSA9IGVsO1xuICAgICAgZHJhZ0luZGV4ID0gdGhpcy5kb21JbmRleE9mKGVsLCBzb3VyY2UpO1xuICAgIH0pO1xuICAgIGRyYWtlLm9uKCdkcm9wJywgKGRyb3BFbG06IGFueSwgdGFyZ2V0OiBFbGVtZW50LCBzb3VyY2U6IEVsZW1lbnQsIHNpYmxpbmc/OiBFbGVtZW50KSA9PiB7XG4gICAgICBpZiAoIWRyYWtlLm1vZGVscyB8fCAhdGFyZ2V0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRyb3BJbmRleCA9IHRoaXMuZG9tSW5kZXhPZihkcm9wRWxtLCB0YXJnZXQpO1xuICAgICAgbGV0IHNvdXJjZU1vZGVsID0gZHJha2UubW9kZWxzW2RyYWtlLmNvbnRhaW5lcnMuaW5kZXhPZihzb3VyY2UpXTtcbiAgICAgIGxldCB0YXJnZXRNb2RlbCA9IGRyYWtlLm1vZGVsc1tkcmFrZS5jb250YWluZXJzLmluZGV4T2YodGFyZ2V0KV07XG4gICAgICAvLyBjb25zb2xlLmxvZygnRFJPUCcpO1xuICAgICAgLy8gY29uc29sZS5sb2coc291cmNlTW9kZWwpO1xuICAgICAgbGV0IGl0ZW06IGFueTtcbiAgICAgIGlmICh0YXJnZXQgPT09IHNvdXJjZSkge1xuICAgICAgICBzb3VyY2VNb2RlbCA9IHNvdXJjZU1vZGVsLnNsaWNlKDApXG4gICAgICAgIGl0ZW0gPSBzb3VyY2VNb2RlbC5zcGxpY2UoZHJhZ0luZGV4LCAxKVswXTtcbiAgICAgICAgc291cmNlTW9kZWwuc3BsaWNlKGRyb3BJbmRleCwgMCwgaXRlbSk7XG4gICAgICAgIC8vIHRoaXMgd2FzIHRydWUgYmVmb3JlIHdlIGNsb25lZCBhbmQgdXBkYXRlZCBzb3VyY2VNb2RlbCxcbiAgICAgICAgLy8gYnV0IHRhcmdldE1vZGVsIHN0aWxsIGhhcyB0aGUgb2xkIHZhbHVlXG4gICAgICAgIHRhcmdldE1vZGVsID0gc291cmNlTW9kZWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgaXNDb3B5aW5nID0gZHJhZ0VsbSAhPT0gZHJvcEVsbTtcbiAgICAgICAgaXRlbSA9IHNvdXJjZU1vZGVsW2RyYWdJbmRleF07XG4gICAgICAgIGlmIChpc0NvcHlpbmcpIHtcbiAgICAgICAgICBpZiAoIW9wdGlvbnMuY29weUl0ZW0pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIklmIHlvdSBoYXZlIGVuYWJsZWQgYGNvcHlgIG9uIGEgZ3JvdXAsIHlvdSBtdXN0IHByb3ZpZGUgYSBgY29weUl0ZW1gIGZ1bmN0aW9uLlwiKVxuICAgICAgICAgIH1cbiAgICAgICAgICBpdGVtID0gb3B0aW9ucy5jb3B5SXRlbShpdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNDb3B5aW5nKSB7XG4gICAgICAgICAgc291cmNlTW9kZWwgPSBzb3VyY2VNb2RlbC5zbGljZSgwKVxuICAgICAgICAgIHNvdXJjZU1vZGVsLnNwbGljZShkcmFnSW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHRhcmdldE1vZGVsID0gdGFyZ2V0TW9kZWwuc2xpY2UoMClcbiAgICAgICAgdGFyZ2V0TW9kZWwuc3BsaWNlKGRyb3BJbmRleCwgMCwgaXRlbSk7XG4gICAgICAgIGlmIChpc0NvcHlpbmcpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUNoaWxkKGRyb3BFbG0pO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuZGlzcGF0Y2gkLm5leHQoe1xuICAgICAgICBldmVudDogRXZlbnRUeXBlcy5Ecm9wTW9kZWwsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGFyZ3M6IFsgZHJvcEVsbSwgdGFyZ2V0LCBzb3VyY2UsIHNpYmxpbmcsIGl0ZW0sIHNvdXJjZU1vZGVsLCB0YXJnZXRNb2RlbCwgZHJhZ0luZGV4LCBkcm9wSW5kZXggXVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldHVwRXZlbnRzKGdyb3VwOiBHcm91cCk6IHZvaWQge1xuICAgIGlmIChncm91cC5pbml0RXZlbnRzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGdyb3VwLmluaXRFdmVudHMgPSB0cnVlO1xuICAgIGNvbnN0IG5hbWUgPSBncm91cC5uYW1lO1xuICAgIGxldCB0aGF0OiBhbnkgPSB0aGlzO1xuICAgIGxldCBlbWl0dGVyID0gKGV2ZW50OiBFdmVudFR5cGVzKSA9PiB7XG4gICAgICBncm91cC5kcmFrZS5vbihldmVudCwgKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2gkLm5leHQoeyBldmVudCwgbmFtZSwgYXJncyB9KTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgQWxsRXZlbnRzLmZvckVhY2goZW1pdHRlcik7XG4gIH1cblxuICBwcml2YXRlIGRvbUluZGV4T2YoY2hpbGQ6IGFueSwgcGFyZW50OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHBhcmVudC5jaGlsZHJlbiwgY2hpbGQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEcmFndWxhU2VydmljZSB9IGZyb20gJy4vZHJhZ3VsYS5zZXJ2aWNlJztcbmltcG9ydCB7IERyYWtlV2l0aE1vZGVscyB9IGZyb20gJy4uL0RyYWtlV2l0aE1vZGVscyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSAnLi4vR3JvdXAnO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tkcmFndWxhXSd9KVxuZXhwb3J0IGNsYXNzIERyYWd1bGFEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHB1YmxpYyBkcmFndWxhOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBkcmFndWxhTW9kZWw6IGFueVtdO1xuICBAT3V0cHV0KCkgcHVibGljIGRyYWd1bGFNb2RlbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55W10+KCk7XG5cbiAgcHJpdmF0ZSBzdWJzOiBTdWJzY3JpcHRpb247XG5cbiAgcHJpdmF0ZSBnZXQgY29udGFpbmVyKCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5lbCAmJiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbiAgcHJpdmF0ZSBncm91cDogR3JvdXA7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgZHJhZ3VsYVNlcnZpY2U6IERyYWd1bGFTZXJ2aWNlKSB7XG4gIH1cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczoge2RyYWd1bGE/OiBTaW1wbGVDaGFuZ2UsIGRyYWd1bGFNb2RlbD86IFNpbXBsZUNoYW5nZX0pOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcyAmJiBjaGFuZ2VzLmRyYWd1bGEpIHtcbiAgICAgIGNvbnN0IHsgcHJldmlvdXNWYWx1ZTogcHJldiwgY3VycmVudFZhbHVlOiBjdXJyZW50LCBmaXJzdENoYW5nZSB9ID0gY2hhbmdlcy5kcmFndWxhO1xuICAgICAgbGV0IGhhZFByZXZpb3VzVmFsdWUgPSAhIXByZXY7XG4gICAgICBsZXQgaGFzTmV3VmFsdWUgPSAhIWN1cnJlbnQ7XG4gICAgICAvLyBzb21ldGhpbmcgLT4gbnVsbCAgICAgICA9PiAgdGVhcmRvd24gb25seVxuICAgICAgLy8gc29tZXRoaW5nIC0+IHNvbWV0aGluZyAgPT4gIHRlYXJkb3duLCB0aGVuIHNldHVwXG4gICAgICAvLyAgICAgIG51bGwgLT4gc29tZXRoaW5nICA9PiAgc2V0dXAgb25seVxuICAgICAgLy9cbiAgICAgIC8vICAgICAgbnVsbCAtPiBudWxsIChwcmVjbHVkZWQgYnkgZmFjdCBvZiBjaGFuZ2UgYmVpbmcgcHJlc2VudClcbiAgICAgIGlmIChoYWRQcmV2aW91c1ZhbHVlKSB7XG4gICAgICAgIHRoaXMudGVhcmRvd24ocHJldik7XG4gICAgICB9XG4gICAgICBpZiAoaGFzTmV3VmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXR1cCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY2hhbmdlcyAmJiBjaGFuZ2VzLmRyYWd1bGFNb2RlbCkge1xuICAgICAgLy8gdGhpcyBjb2RlIG9ubHkgcnVucyB3aGVuIHlvdSdyZSBub3QgY2hhbmdpbmcgdGhlIGdyb3VwIG5hbWVcbiAgICAgIC8vIGJlY2F1c2UgaWYgeW91J3JlIGNoYW5naW5nIHRoZSBncm91cCBuYW1lLCB5b3UnbGwgYmUgZG9pbmcgc2V0dXAgb3IgdGVhcmRvd25cbiAgICAgIC8vIGl0IGFsc28gb25seSBydW5zIGlmIHRoZXJlIGlzIGEgZ3JvdXAgbmFtZSB0byBhdHRhY2ggdG8uXG4gICAgICBjb25zdCB7IHByZXZpb3VzVmFsdWU6IHByZXYsIGN1cnJlbnRWYWx1ZTogY3VycmVudCwgZmlyc3RDaGFuZ2UgfSA9IGNoYW5nZXMuZHJhZ3VsYU1vZGVsO1xuICAgICAgY29uc3QgeyBkcmFrZSB9ID0gdGhpcy5ncm91cDtcbiAgICAgIGlmICh0aGlzLmRyYWd1bGEgJiYgZHJha2UpIHtcbiAgICAgICAgZHJha2UubW9kZWxzID0gZHJha2UubW9kZWxzIHx8IFtdO1xuICAgICAgICBsZXQgcHJldkluZGV4ID0gZHJha2UubW9kZWxzLmluZGV4T2YocHJldik7XG4gICAgICAgIGlmIChwcmV2SW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgLy8gZGVsZXRlIHRoZSBwcmV2aW91c1xuICAgICAgICAgIGRyYWtlLm1vZGVscy5zcGxpY2UocHJldkluZGV4LCAxKTtcbiAgICAgICAgICAvLyBtYXliZSBpbnNlcnQgYSBuZXcgb25lIGF0IHRoZSBzYW1lIHNwb3RcbiAgICAgICAgICBpZiAoISFjdXJyZW50KSB7XG4gICAgICAgICAgICBkcmFrZS5tb2RlbHMuc3BsaWNlKHByZXZJbmRleCwgMCwgY3VycmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCEhY3VycmVudCkge1xuICAgICAgICAgIC8vIG5vIHByZXZpb3VzIG9uZSB0byByZW1vdmU7IGp1c3QgcHVzaCB0aGlzIG9uZS5cbiAgICAgICAgICBkcmFrZS5tb2RlbHMucHVzaChjdXJyZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGNhbGwgbmdPbkluaXQgJ3NldHVwJyBiZWNhdXNlIHdlIHdhbnQgdG8gY2FsbCBpdCBpbiBuZ09uQ2hhbmdlc1xuICAvLyBhbmQgaXQgd291bGQgb3RoZXJ3aXNlIHJ1biB0d2ljZVxuICBwdWJsaWMgc2V0dXAoKTogdm9pZCB7XG4gICAgbGV0IGNoZWNrTW9kZWwgPSAoZ3JvdXA6IEdyb3VwKSA9PiB7XG4gICAgICBpZiAodGhpcy5kcmFndWxhTW9kZWwpIHtcbiAgICAgICAgaWYgKGdyb3VwLmRyYWtlLm1vZGVscykge1xuICAgICAgICAgIGdyb3VwLmRyYWtlLm1vZGVscy5wdXNoKHRoaXMuZHJhZ3VsYU1vZGVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBncm91cC5kcmFrZS5tb2RlbHMgPSBbdGhpcy5kcmFndWxhTW9kZWxdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIGZpbmQgb3IgY3JlYXRlIGEgZ3JvdXBcbiAgICBsZXQgZ3JvdXAgPSB0aGlzLmRyYWd1bGFTZXJ2aWNlLmZpbmQodGhpcy5kcmFndWxhKTtcbiAgICBpZiAoIWdyb3VwKSB7XG4gICAgICBsZXQgb3B0aW9ucyA9IHt9O1xuICAgICAgZ3JvdXAgPSB0aGlzLmRyYWd1bGFTZXJ2aWNlLmNyZWF0ZUdyb3VwKHRoaXMuZHJhZ3VsYSwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLy8gZW5zdXJlIG1vZGVsIGFuZCBjb250YWluZXIgZWxlbWVudCBhcmUgcHVzaGVkXG4gICAgY2hlY2tNb2RlbChncm91cCk7XG4gICAgZ3JvdXAuZHJha2UuY29udGFpbmVycy5wdXNoKHRoaXMuY29udGFpbmVyKTtcbiAgICB0aGlzLnN1YnNjcmliZSh0aGlzLmRyYWd1bGEpO1xuXG4gICAgdGhpcy5ncm91cCA9IGdyb3VwO1xuICB9XG5cbiAgcHVibGljIHN1YnNjcmliZShuYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLnN1YnMgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gICAgdGhpcy5zdWJzLmFkZChcbiAgICAgIHRoaXMuZHJhZ3VsYVNlcnZpY2VcbiAgICAgIC5kcm9wTW9kZWwobmFtZSlcbiAgICAgIC5zdWJzY3JpYmUoKHsgc291cmNlLCB0YXJnZXQsIHNvdXJjZU1vZGVsLCB0YXJnZXRNb2RlbCB9KSA9PiB7XG4gICAgICAgIGlmIChzb3VyY2UgPT09IHRoaXMuZWwubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuZHJhZ3VsYU1vZGVsQ2hhbmdlLmVtaXQoc291cmNlTW9kZWwpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gdGhpcy5lbC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5kcmFndWxhTW9kZWxDaGFuZ2UuZW1pdCh0YXJnZXRNb2RlbCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgICB0aGlzLnN1YnMuYWRkKFxuICAgICAgdGhpcy5kcmFndWxhU2VydmljZVxuICAgICAgLnJlbW92ZU1vZGVsKG5hbWUpXG4gICAgICAuc3Vic2NyaWJlKCh7IHNvdXJjZSwgc291cmNlTW9kZWwgfSkgPT4ge1xuICAgICAgICBpZiAoc291cmNlID09PSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLmRyYWd1bGFNb2RlbENoYW5nZS5lbWl0KHNvdXJjZU1vZGVsKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIHRlYXJkb3duKGdyb3VwTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3Vicykge1xuICAgICAgdGhpcy5zdWJzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGNvbnN0IGdyb3VwID0gdGhpcy5kcmFndWxhU2VydmljZS5maW5kKGdyb3VwTmFtZSk7XG4gICAgaWYgKGdyb3VwKSB7XG4gICAgICBjb25zdCBpdGVtVG9SZW1vdmUgPSBncm91cC5kcmFrZS5jb250YWluZXJzLmluZGV4T2YodGhpcy5lbC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIGlmIChpdGVtVG9SZW1vdmUgIT09IC0xKSB7XG4gICAgICAgIGdyb3VwLmRyYWtlLmNvbnRhaW5lcnMuc3BsaWNlKGl0ZW1Ub1JlbW92ZSwgMSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5kcmFndWxhTW9kZWwgJiYgZ3JvdXAuZHJha2UgJiYgZ3JvdXAuZHJha2UubW9kZWxzKSB7XG4gICAgICAgIGxldCBtb2RlbEluZGV4ID0gZ3JvdXAuZHJha2UubW9kZWxzLmluZGV4T2YodGhpcy5kcmFndWxhTW9kZWwpO1xuICAgICAgICBpZiAobW9kZWxJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICBncm91cC5kcmFrZS5tb2RlbHMuc3BsaWNlKG1vZGVsSW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudGVhcmRvd24odGhpcy5kcmFndWxhKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRHJhZ3VsYURpcmVjdGl2ZSB9IGZyb20gJy4vZHJhZ3VsYS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRHJhZ3VsYVNlcnZpY2UgfSBmcm9tICcuL2RyYWd1bGEuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFtEcmFndWxhRGlyZWN0aXZlXSxcbiAgZGVjbGFyYXRpb25zOiBbRHJhZ3VsYURpcmVjdGl2ZV0sXG59KVxuZXhwb3J0IGNsYXNzIERyYWd1bGFNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERyYWd1bGFNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtEcmFndWxhU2VydmljZV1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRHJha2VXaXRoTW9kZWxzIH0gZnJvbSAnLi9EcmFrZVdpdGhNb2RlbHMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRXZlbnRUeXBlcyB9IGZyb20gJy4vRXZlbnRUeXBlcyc7XG5pbXBvcnQgeyBEcmFndWxhT3B0aW9ucyB9IGZyb20gJy4vRHJhZ3VsYU9wdGlvbnMnO1xuaW1wb3J0IHsgRHJha2VGYWN0b3J5IH0gZnJvbSAnLi9EcmFrZUZhY3RvcnknO1xuXG5leHBvcnQgY29uc3QgTW9ja0RyYWtlRmFjdG9yeSA9IG5ldyBEcmFrZUZhY3RvcnkoKGNvbnRhaW5lcnMsIG9wdGlvbnMpID0+IHtcbiAgcmV0dXJuIG5ldyBNb2NrRHJha2UoY29udGFpbmVycywgb3B0aW9ucyk7XG59KTtcblxuLyoqIFlvdSBjYW4gdXNlIE1vY2tEcmFrZSB0byBzaW11bGF0ZSBEcmFrZSBldmVudHMuXG4gKlxuICogVGhlIHRocmVlIG1ldGhvZHMgdGhhdCBhY3R1YWxseSBkbyBhbnl0aGluZyBhcmUgYG9uKGV2ZW50LCBsaXN0ZW5lcilgLFxuICogYGRlc3Ryb3koKWAsIGFuZCBhIG5ldyBtZXRob2QsIGBlbWl0KClgLiBVc2UgYGVtaXQoKWAgdG8gbWFudWFsbHkgZW1pdCBEcmFrZVxuICogZXZlbnRzLCBhbmQgaWYgeW91IGluamVjdGVkIE1vY2tEcmFrZSBwcm9wZXJseSB3aXRoIE1vY2tEcmFrZUZhY3Rvcnkgb3JcbiAqIG1vY2tlZCB0aGUgRHJhZ3VsYVNlcnZpY2UuZmluZCgpIG1ldGhvZCwgdGhlbiB5b3UgY2FuIG1ha2UgbmcyLWRyYWd1bGEgdGhpbmtcbiAqIGRyYWdzIGFuZCBkcm9wcyBhcmUgaGFwcGVuaW5nLlxuICpcbiAqIENhdmVhdHM6XG4gKlxuICogMS4gWU9VIE1VU1QgTUFLRSBUSEUgRE9NIENIQU5HRVMgWU9VUlNFTEYuXG4gKiAyLiBSRVBFQVQ6IFlPVSBNVVNUIE1BS0UgVEhFIERPTSBDSEFOR0VTIFlPVVJTRUxGLlxuICogICAgVGhhdCBtZWFucyBgc291cmNlLnJlbW92ZUNoaWxkKGVsKWAsIGFuZCBgdGFyZ2V0Lmluc2VydEJlZm9yZShlbClgLlxuICogMy4gTm9uZSBvZiB0aGUgb3RoZXIgbWV0aG9kcyBkbyBhbnl0aGluZy5cbiAqICAgIFRoYXQncyBvaywgYmVjYXVzZSBuZzItZHJhZ3VsYSBkb2Vzbid0IHVzZSB0aGVtLlxuICovXG5leHBvcnQgY2xhc3MgTW9ja0RyYWtlIGltcGxlbWVudHMgRHJha2VXaXRoTW9kZWxzIHtcbiAgLyoqXG4gICAqIEBwYXJhbSBjb250YWluZXJzIEEgbGlzdCBvZiBjb250YWluZXIgZWxlbWVudHMuXG4gICAqIEBwYXJhbSBvcHRpb25zIFRoZXNlIHdpbGwgTk9UIGJlIHVzZWQuIEF0IGFsbC5cbiAgICogQHBhcmFtIG1vZGVscyBOb25zdGFuZGFyZCwgYnV0IHVzZWZ1bCBmb3IgdGVzdGluZyB1c2luZyBgbmV3IE1vY2tEcmFrZSgpYCBkaXJlY3RseS5cbiAgICogICAgICAgICAgICAgICBOb3RlLCBkZWZhdWx0IHZhbHVlIGlzIHVuZGVmaW5lZCwgbGlrZSBhIHJlYWwgRHJha2UuIERvbid0IGNoYW5nZSB0aGF0LlxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNvbnRhaW5lcnM6IEVsZW1lbnRbXSA9IFtdLFxuICAgIHB1YmxpYyBvcHRpb25zOiBEcmFndWxhT3B0aW9ucyA9IHt9LFxuICAgIHB1YmxpYyBtb2RlbHM/OiBhbnlbXVtdXG4gICkge31cblxuICAvKiBEb2Vzbid0IHJlcHJlc2VudCBhbnl0aGluZyBtZWFuaW5nZnVsLiAqL1xuICBkcmFnZ2luZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qIERvZXMgbm90aGluZyB1c2VmdWwuICovXG4gIHN0YXJ0KGl0ZW06IEVsZW1lbnQpOiBhbnkge1xuICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuICB9XG4gIC8qIERvZXMgbm90aGluZyB1c2VmdWwuICovXG4gIGVuZCgpOiBhbnkge1xuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgfVxuICAvKiBEb2VzIG5vdGhpbmcgdXNlZnVsLiAqL1xuICBjYW5jZWwocmV2ZXJ0OiBib29sZWFuKTogYW55O1xuICBjYW5jZWwoKTogYW55O1xuICBjYW5jZWwocmV2ZXJ0PzogYW55KSB7XG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICB9XG4gIC8qIERvZXMgbm90aGluZyB1c2VmdWwuICovXG4gIHJlbW92ZSgpOiBhbnkge1xuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIC8vIEJhc2ljIGJ1dCBmdWxseSBmdW5jdGlvbmFsIGV2ZW50IGVtaXR0ZXIgc2hpbVxuICBwcml2YXRlIGVtaXR0ZXIkID0gbmV3IFN1YmplY3Q8eyBldmVudFR5cGU6IEV2ZW50VHlwZXMsIGFyZ3M6IGFueVtdIH0+KCk7XG5cbiAgcHJpdmF0ZSBzdWJzID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIG9uKGV2ZW50OiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbik6IGFueSB7XG4gICAgdGhpcy5zdWJzLmFkZCh0aGlzLmVtaXR0ZXIkXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKCh7IGV2ZW50VHlwZSB9KSA9PiBldmVudFR5cGUgPT09IGV2ZW50KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoeyBhcmdzIH0pID0+IHtcbiAgICAgICAgY2FsbGJhY2soLi4uYXJncyk7XG4gICAgICB9KSk7XG4gIH1cblxuICBkZXN0cm95KCk6IGFueSB7XG4gICAgdGhpcy5zdWJzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBpcyB0aGUgbW9zdCB1c2VmdWwgbWV0aG9kLiBZb3UgY2FuIHVzZSBpdCB0byBtYW51YWxseSBmaXJlIGV2ZW50cyB0aGF0IHdvdWxkIG5vcm1hbGx5XG4gICAqIGJlIGZpcmVkIGJ5IGEgcmVhbCBkcmFrZS5cbiAgICpcbiAgICogWW91J3JlIGxpa2VseSBtb3N0IGludGVyZXN0ZWQgaW4gZmlyaW5nIGBkcmFnYCwgYHJlbW92ZWAgYW5kIGBkcm9wYCwgdGhlIHRocmVlIGV2ZW50c1xuICAgKiBEcmFndWxhU2VydmljZSB1c2VzIHRvIGltcGxlbWVudCBbZHJhZ3VsYU1vZGVsXS5cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9iZXZhY3F1YS9kcmFndWxhI2RyYWtlb24tZXZlbnRzIGZvciB3aGF0IHlvdSBzaG91bGQgZW1pdCAoYW5kIGluIHdoYXQgb3JkZXIpLlxuICAgKlxuICAgKiAoTm90ZSBhbHNvLCBmaXJpbmcgZHJvcE1vZGVsIGFuZCByZW1vdmVNb2RlbCB3b24ndCB3b3JrLiBZb3Ugd291bGQgaGF2ZSB0byBtb2NrIERyYWd1bGFTZXJ2aWNlIGZvciB0aGF0LilcbiAgICovXG4gIGVtaXQoZXZlbnRUeXBlOiBFdmVudFR5cGVzLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgIHRoaXMuZW1pdHRlciQubmV4dCh7IGV2ZW50VHlwZSwgYXJncyB9KVxuICB9XG5cbn1cbiJdfQ==

/***/ }),

/***/ "EAk/":
/*!***************************************************************!*\
  !*** ./src/app/apps/contact-grid/contact-grid.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LWdyaWQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "Gjsa":
/*!*********************************************!*\
  !*** ./node_modules/ticky/ticky-browser.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var si = typeof setImmediate === 'function', tick;
if (si) {
  tick = function (fn) { setImmediate(fn); };
} else {
  tick = function (fn) { setTimeout(fn, 0); };
}

module.exports = tick;

/***/ }),

/***/ "IYw8":
/*!*************************************!*\
  !*** ./src/app/apps/apps.module.ts ***!
  \*************************************/
/*! exports provided: AppsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsModule", function() { return AppsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-dragula */ "9Ejp");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-material-file-input */ "7ZcW");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _apps_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./apps-routing.module */ "aWwC");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./chat/chat.component */ "pWwN");
/* harmony import */ var _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./drag-drop/drag-drop.component */ "/yEv");
/* harmony import */ var _contact_grid_contact_grid_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contact-grid/contact-grid.component */ "ZOYJ");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./support/support.component */ "xK1z");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-pick-datetime */ "z17N");

































let AppsModule = class AppsModule {
};
AppsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _chat_chat_component__WEBPACK_IMPORTED_MODULE_13__["ChatComponent"],
            _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_14__["DragDropComponent"],
            _contact_grid_contact_grid_component__WEBPACK_IMPORTED_MODULE_15__["ContactGridComponent"],
            _support_support_component__WEBPACK_IMPORTED_MODULE_16__["SupportComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _apps_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppsRoutingModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__["MatCheckboxModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__["MatTooltipModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__["MatSnackBarModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_30__["DragDropModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__["MatSidenavModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_9__["MaterialFileInputModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_25__["MatCardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_32__["OwlDateTimeModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_32__["OwlNativeDateTimeModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
            ng2_dragula__WEBPACK_IMPORTED_MODULE_5__["DragulaModule"].forRoot(),
        ],
    })
], AppsModule);



/***/ }),

/***/ "Ibf7":
/*!*****************************************!*\
  !*** ./node_modules/contra/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ticky = __webpack_require__(/*! ticky */ "Gjsa");

module.exports = function debounce (fn, args, ctx) {
  if (!fn) { return; }
  ticky(function run () {
    fn.apply(ctx || null, args || []);
  });
};


/***/ }),

/***/ "PzH3":
/*!*************************************************!*\
  !*** ./node_modules/crossvent/src/crossvent.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var customEvent = __webpack_require__(/*! custom-event */ "bBst");
var eventmap = __webpack_require__(/*! ./eventmap */ "Ys8N");
var doc = global.document;
var addEvent = addEventEasy;
var removeEvent = removeEventEasy;
var hardCache = [];

if (!global.addEventListener) {
  addEvent = addEventHard;
  removeEvent = removeEventHard;
}

module.exports = {
  add: addEvent,
  remove: removeEvent,
  fabricate: fabricateEvent
};

function addEventEasy (el, type, fn, capturing) {
  return el.addEventListener(type, fn, capturing);
}

function addEventHard (el, type, fn) {
  return el.attachEvent('on' + type, wrap(el, type, fn));
}

function removeEventEasy (el, type, fn, capturing) {
  return el.removeEventListener(type, fn, capturing);
}

function removeEventHard (el, type, fn) {
  var listener = unwrap(el, type, fn);
  if (listener) {
    return el.detachEvent('on' + type, listener);
  }
}

function fabricateEvent (el, type, model) {
  var e = eventmap.indexOf(type) === -1 ? makeCustomEvent() : makeClassicEvent();
  if (el.dispatchEvent) {
    el.dispatchEvent(e);
  } else {
    el.fireEvent('on' + type, e);
  }
  function makeClassicEvent () {
    var e;
    if (doc.createEvent) {
      e = doc.createEvent('Event');
      e.initEvent(type, true, true);
    } else if (doc.createEventObject) {
      e = doc.createEventObject();
    }
    return e;
  }
  function makeCustomEvent () {
    return new customEvent(type, { detail: model });
  }
}

function wrapperFactory (el, type, fn) {
  return function wrapper (originalEvent) {
    var e = originalEvent || global.event;
    e.target = e.target || e.srcElement;
    e.preventDefault = e.preventDefault || function preventDefault () { e.returnValue = false; };
    e.stopPropagation = e.stopPropagation || function stopPropagation () { e.cancelBubble = true; };
    e.which = e.which || e.keyCode;
    fn.call(el, e);
  };
}

function wrap (el, type, fn) {
  var wrapper = unwrap(el, type, fn) || wrapperFactory(el, type, fn);
  hardCache.push({
    wrapper: wrapper,
    element: el,
    type: type,
    fn: fn
  });
  return wrapper;
}

function unwrap (el, type, fn) {
  var i = find(el, type, fn);
  if (i) {
    var wrapper = hardCache[i].wrapper;
    hardCache.splice(i, 1); // free up a tad of memory
    return wrapper;
  }
}

function find (el, type, fn) {
  var i, item;
  for (i = 0; i < hardCache.length; i++) {
    item = hardCache[i];
    if (item.element === el && item.type === type && item.fn === fn) {
      return i;
    }
  }
}


/***/ }),

/***/ "SWf4":
/*!***********************************************!*\
  !*** ./src/app/apps/chat/chat.component.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "YS7c":
/*!*****************************************!*\
  !*** ./node_modules/dragula/dragula.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var emitter = __webpack_require__(/*! contra/emitter */ "8/JR");
var crossvent = __webpack_require__(/*! crossvent */ "PzH3");
var classes = __webpack_require__(/*! ./classes */ "n6yW");
var doc = document;
var documentElement = doc.documentElement;

function dragula (initialContainers, options) {
  var len = arguments.length;
  if (len === 1 && Array.isArray(initialContainers) === false) {
    options = initialContainers;
    initialContainers = [];
  }
  var _mirror; // mirror image
  var _source; // source container
  var _item; // item being dragged
  var _offsetX; // reference x
  var _offsetY; // reference y
  var _moveX; // reference move x
  var _moveY; // reference move y
  var _initialSibling; // reference sibling when grabbed
  var _currentSibling; // reference sibling now
  var _copy; // item used for copying
  var _renderTimer; // timer for setTimeout renderMirrorImage
  var _lastDropTarget = null; // last container item was over
  var _grabbed; // holds mousedown context until first mousemove

  var o = options || {};
  if (o.moves === void 0) { o.moves = always; }
  if (o.accepts === void 0) { o.accepts = always; }
  if (o.invalid === void 0) { o.invalid = invalidTarget; }
  if (o.containers === void 0) { o.containers = initialContainers || []; }
  if (o.isContainer === void 0) { o.isContainer = never; }
  if (o.copy === void 0) { o.copy = false; }
  if (o.copySortSource === void 0) { o.copySortSource = false; }
  if (o.revertOnSpill === void 0) { o.revertOnSpill = false; }
  if (o.removeOnSpill === void 0) { o.removeOnSpill = false; }
  if (o.direction === void 0) { o.direction = 'vertical'; }
  if (o.ignoreInputTextSelection === void 0) { o.ignoreInputTextSelection = true; }
  if (o.mirrorContainer === void 0) { o.mirrorContainer = doc.body; }

  var drake = emitter({
    containers: o.containers,
    start: manualStart,
    end: end,
    cancel: cancel,
    remove: remove,
    destroy: destroy,
    canMove: canMove,
    dragging: false
  });

  if (o.removeOnSpill === true) {
    drake.on('over', spillOver).on('out', spillOut);
  }

  events();

  return drake;

  function isContainer (el) {
    return drake.containers.indexOf(el) !== -1 || o.isContainer(el);
  }

  function events (remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousedown', grab);
    touchy(documentElement, op, 'mouseup', release);
  }

  function eventualMovements (remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousemove', startBecauseMouseMoved);
  }

  function movements (remove) {
    var op = remove ? 'remove' : 'add';
    crossvent[op](documentElement, 'selectstart', preventGrabbed); // IE8
    crossvent[op](documentElement, 'click', preventGrabbed);
  }

  function destroy () {
    events(true);
    release({});
  }

  function preventGrabbed (e) {
    if (_grabbed) {
      e.preventDefault();
    }
  }

  function grab (e) {
    _moveX = e.clientX;
    _moveY = e.clientY;

    var ignore = whichMouseButton(e) !== 1 || e.metaKey || e.ctrlKey;
    if (ignore) {
      return; // we only care about honest-to-god left clicks and touch events
    }
    var item = e.target;
    var context = canStart(item);
    if (!context) {
      return;
    }
    _grabbed = context;
    eventualMovements();
    if (e.type === 'mousedown') {
      if (isInput(item)) { // see also: https://github.com/bevacqua/dragula/issues/208
        item.focus(); // fixes https://github.com/bevacqua/dragula/issues/176
      } else {
        e.preventDefault(); // fixes https://github.com/bevacqua/dragula/issues/155
      }
    }
  }

  function startBecauseMouseMoved (e) {
    if (!_grabbed) {
      return;
    }
    if (whichMouseButton(e) === 0) {
      release({});
      return; // when text is selected on an input and then dragged, mouseup doesn't fire. this is our only hope
    }

    // truthy check fixes #239, equality fixes #207, fixes #501
    if ((e.clientX !== void 0 && Math.abs(e.clientX - _moveX) <= (o.slideFactorX || 0)) &&
      (e.clientY !== void 0 && Math.abs(e.clientY - _moveY) <= (o.slideFactorY || 0))) {
      return;
    }

    if (o.ignoreInputTextSelection) {
      var clientX = getCoord('clientX', e) || 0;
      var clientY = getCoord('clientY', e) || 0;
      var elementBehindCursor = doc.elementFromPoint(clientX, clientY);
      if (isInput(elementBehindCursor)) {
        return;
      }
    }

    var grabbed = _grabbed; // call to end() unsets _grabbed
    eventualMovements(true);
    movements();
    end();
    start(grabbed);

    var offset = getOffset(_item);
    _offsetX = getCoord('pageX', e) - offset.left;
    _offsetY = getCoord('pageY', e) - offset.top;

    classes.add(_copy || _item, 'gu-transit');
    renderMirrorImage();
    drag(e);
  }

  function canStart (item) {
    if (drake.dragging && _mirror) {
      return;
    }
    if (isContainer(item)) {
      return; // don't drag container itself
    }
    var handle = item;
    while (getParent(item) && isContainer(getParent(item)) === false) {
      if (o.invalid(item, handle)) {
        return;
      }
      item = getParent(item); // drag target should be a top element
      if (!item) {
        return;
      }
    }
    var source = getParent(item);
    if (!source) {
      return;
    }
    if (o.invalid(item, handle)) {
      return;
    }

    var movable = o.moves(item, source, handle, nextEl(item));
    if (!movable) {
      return;
    }

    return {
      item: item,
      source: source
    };
  }

  function canMove (item) {
    return !!canStart(item);
  }

  function manualStart (item) {
    var context = canStart(item);
    if (context) {
      start(context);
    }
  }

  function start (context) {
    if (isCopy(context.item, context.source)) {
      _copy = context.item.cloneNode(true);
      drake.emit('cloned', _copy, context.item, 'copy');
    }

    _source = context.source;
    _item = context.item;
    _initialSibling = _currentSibling = nextEl(context.item);

    drake.dragging = true;
    drake.emit('drag', _item, _source);
  }

  function invalidTarget () {
    return false;
  }

  function end () {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    drop(item, getParent(item));
  }

  function ungrab () {
    _grabbed = false;
    eventualMovements(true);
    movements(true);
  }

  function release (e) {
    ungrab();

    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var clientX = getCoord('clientX', e) || 0;
    var clientY = getCoord('clientY', e) || 0;
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    if (dropTarget && ((_copy && o.copySortSource) || (!_copy || dropTarget !== _source))) {
      drop(item, dropTarget);
    } else if (o.removeOnSpill) {
      remove();
    } else {
      cancel();
    }
  }

  function drop (item, target) {
    var parent = getParent(item);
    if (_copy && o.copySortSource && target === _source) {
      parent.removeChild(_item);
    }
    if (isInitialPlacement(target)) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, target, _source, _currentSibling);
    }
    cleanup();
  }

  function remove () {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var parent = getParent(item);
    if (parent) {
      parent.removeChild(item);
    }
    drake.emit(_copy ? 'cancel' : 'remove', item, parent, _source);
    cleanup();
  }

  function cancel (revert) {
    if (!drake.dragging) {
      return;
    }
    var reverts = arguments.length > 0 ? revert : o.revertOnSpill;
    var item = _copy || _item;
    var parent = getParent(item);
    var initial = isInitialPlacement(parent);
    if (initial === false && reverts) {
      if (_copy) {
        if (parent) {
          parent.removeChild(_copy);
        }
      } else {
        _source.insertBefore(item, _initialSibling);
      }
    }
    if (initial || reverts) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, parent, _source, _currentSibling);
    }
    cleanup();
  }

  function cleanup () {
    var item = _copy || _item;
    ungrab();
    removeMirrorImage();
    if (item) {
      classes.rm(item, 'gu-transit');
    }
    if (_renderTimer) {
      clearTimeout(_renderTimer);
    }
    drake.dragging = false;
    if (_lastDropTarget) {
      drake.emit('out', item, _lastDropTarget, _source);
    }
    drake.emit('dragend', item);
    _source = _item = _copy = _initialSibling = _currentSibling = _renderTimer = _lastDropTarget = null;
  }

  function isInitialPlacement (target, s) {
    var sibling;
    if (s !== void 0) {
      sibling = s;
    } else if (_mirror) {
      sibling = _currentSibling;
    } else {
      sibling = nextEl(_copy || _item);
    }
    return target === _source && sibling === _initialSibling;
  }

  function findDropTarget (elementBehindCursor, clientX, clientY) {
    var target = elementBehindCursor;
    while (target && !accepted()) {
      target = getParent(target);
    }
    return target;

    function accepted () {
      var droppable = isContainer(target);
      if (droppable === false) {
        return false;
      }

      var immediate = getImmediateChild(target, elementBehindCursor);
      var reference = getReference(target, immediate, clientX, clientY);
      var initial = isInitialPlacement(target, reference);
      if (initial) {
        return true; // should always be able to drop it right back where it was
      }
      return o.accepts(_item, target, _source, reference);
    }
  }

  function drag (e) {
    if (!_mirror) {
      return;
    }
    e.preventDefault();

    var clientX = getCoord('clientX', e) || 0;
    var clientY = getCoord('clientY', e) || 0;
    var x = clientX - _offsetX;
    var y = clientY - _offsetY;

    _mirror.style.left = x + 'px';
    _mirror.style.top = y + 'px';

    var item = _copy || _item;
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    var changed = dropTarget !== null && dropTarget !== _lastDropTarget;
    if (changed || dropTarget === null) {
      out();
      _lastDropTarget = dropTarget;
      over();
    }
    var parent = getParent(item);
    if (dropTarget === _source && _copy && !o.copySortSource) {
      if (parent) {
        parent.removeChild(item);
      }
      return;
    }
    var reference;
    var immediate = getImmediateChild(dropTarget, elementBehindCursor);
    if (immediate !== null) {
      reference = getReference(dropTarget, immediate, clientX, clientY);
    } else if (o.revertOnSpill === true && !_copy) {
      reference = _initialSibling;
      dropTarget = _source;
    } else {
      if (_copy && parent) {
        parent.removeChild(item);
      }
      return;
    }
    if (
      (reference === null && changed) ||
      reference !== item &&
      reference !== nextEl(item)
    ) {
      _currentSibling = reference;
      dropTarget.insertBefore(item, reference);
      drake.emit('shadow', item, dropTarget, _source);
    }
    function moved (type) { drake.emit(type, item, _lastDropTarget, _source); }
    function over () { if (changed) { moved('over'); } }
    function out () { if (_lastDropTarget) { moved('out'); } }
  }

  function spillOver (el) {
    classes.rm(el, 'gu-hide');
  }

  function spillOut (el) {
    if (drake.dragging) { classes.add(el, 'gu-hide'); }
  }

  function renderMirrorImage () {
    if (_mirror) {
      return;
    }
    var rect = _item.getBoundingClientRect();
    _mirror = _item.cloneNode(true);
    _mirror.style.width = getRectWidth(rect) + 'px';
    _mirror.style.height = getRectHeight(rect) + 'px';
    classes.rm(_mirror, 'gu-transit');
    classes.add(_mirror, 'gu-mirror');
    o.mirrorContainer.appendChild(_mirror);
    touchy(documentElement, 'add', 'mousemove', drag);
    classes.add(o.mirrorContainer, 'gu-unselectable');
    drake.emit('cloned', _mirror, _item, 'mirror');
  }

  function removeMirrorImage () {
    if (_mirror) {
      classes.rm(o.mirrorContainer, 'gu-unselectable');
      touchy(documentElement, 'remove', 'mousemove', drag);
      getParent(_mirror).removeChild(_mirror);
      _mirror = null;
    }
  }

  function getImmediateChild (dropTarget, target) {
    var immediate = target;
    while (immediate !== dropTarget && getParent(immediate) !== dropTarget) {
      immediate = getParent(immediate);
    }
    if (immediate === documentElement) {
      return null;
    }
    return immediate;
  }

  function getReference (dropTarget, target, x, y) {
    var horizontal = o.direction === 'horizontal';
    var reference = target !== dropTarget ? inside() : outside();
    return reference;

    function outside () { // slower, but able to figure out any position
      var len = dropTarget.children.length;
      var i;
      var el;
      var rect;
      for (i = 0; i < len; i++) {
        el = dropTarget.children[i];
        rect = el.getBoundingClientRect();
        if (horizontal && (rect.left + rect.width / 2) > x) { return el; }
        if (!horizontal && (rect.top + rect.height / 2) > y) { return el; }
      }
      return null;
    }

    function inside () { // faster, but only available if dropped inside a child element
      var rect = target.getBoundingClientRect();
      if (horizontal) {
        return resolve(x > rect.left + getRectWidth(rect) / 2);
      }
      return resolve(y > rect.top + getRectHeight(rect) / 2);
    }

    function resolve (after) {
      return after ? nextEl(target) : target;
    }
  }

  function isCopy (item, container) {
    return typeof o.copy === 'boolean' ? o.copy : o.copy(item, container);
  }
}

function touchy (el, op, type, fn) {
  var touch = {
    mouseup: 'touchend',
    mousedown: 'touchstart',
    mousemove: 'touchmove'
  };
  var pointers = {
    mouseup: 'pointerup',
    mousedown: 'pointerdown',
    mousemove: 'pointermove'
  };
  var microsoft = {
    mouseup: 'MSPointerUp',
    mousedown: 'MSPointerDown',
    mousemove: 'MSPointerMove'
  };
  if (global.navigator.pointerEnabled) {
    crossvent[op](el, pointers[type], fn);
  } else if (global.navigator.msPointerEnabled) {
    crossvent[op](el, microsoft[type], fn);
  } else {
    crossvent[op](el, touch[type], fn);
    crossvent[op](el, type, fn);
  }
}

function whichMouseButton (e) {
  if (e.touches !== void 0) { return e.touches.length; }
  if (e.which !== void 0 && e.which !== 0) { return e.which; } // see https://github.com/bevacqua/dragula/issues/261
  if (e.buttons !== void 0) { return e.buttons; }
  var button = e.button;
  if (button !== void 0) { // see https://github.com/jquery/jquery/blob/99e8ff1baa7ae341e94bb89c3e84570c7c3ad9ea/src/event.js#L573-L575
    return button & 1 ? 1 : button & 2 ? 3 : (button & 4 ? 2 : 0);
  }
}

function getOffset (el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left + getScroll('scrollLeft', 'pageXOffset'),
    top: rect.top + getScroll('scrollTop', 'pageYOffset')
  };
}

function getScroll (scrollProp, offsetProp) {
  if (typeof global[offsetProp] !== 'undefined') {
    return global[offsetProp];
  }
  if (documentElement.clientHeight) {
    return documentElement[scrollProp];
  }
  return doc.body[scrollProp];
}

function getElementBehindPoint (point, x, y) {
  point = point || {};
  var state = point.className || '';
  var el;
  point.className += ' gu-hide';
  el = doc.elementFromPoint(x, y);
  point.className = state;
  return el;
}

function never () { return false; }
function always () { return true; }
function getRectWidth (rect) { return rect.width || (rect.right - rect.left); }
function getRectHeight (rect) { return rect.height || (rect.bottom - rect.top); }
function getParent (el) { return el.parentNode === doc ? null : el.parentNode; }
function isInput (el) { return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || isEditable(el); }
function isEditable (el) {
  if (!el) { return false; } // no parents were editable
  if (el.contentEditable === 'false') { return false; } // stop the lookup
  if (el.contentEditable === 'true') { return true; } // found a contentEditable element in the chain
  return isEditable(getParent(el)); // contentEditable is set to 'inherit'
}

function nextEl (el) {
  return el.nextElementSibling || manually();
  function manually () {
    var sibling = el;
    do {
      sibling = sibling.nextSibling;
    } while (sibling && sibling.nodeType !== 1);
    return sibling;
  }
}

function getEventHost (e) {
  // on touchend event, we have to use `e.changedTouches`
  // see http://stackoverflow.com/questions/7192563/touchend-event-properties
  // see https://github.com/bevacqua/dragula/issues/34
  if (e.targetTouches && e.targetTouches.length) {
    return e.targetTouches[0];
  }
  if (e.changedTouches && e.changedTouches.length) {
    return e.changedTouches[0];
  }
  return e;
}

function getCoord (coord, e) {
  var host = getEventHost(e);
  var missMap = {
    pageX: 'clientX', // IE8
    pageY: 'clientY' // IE8
  };
  if (coord in missMap && !(coord in host) && missMap[coord] in host) {
    coord = missMap[coord];
  }
  return host[coord];
}

module.exports = dragula;


/***/ }),

/***/ "Ys8N":
/*!************************************************!*\
  !*** ./node_modules/crossvent/src/eventmap.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var eventmap = [];
var eventname = '';
var ron = /^on/;

for (eventname in global) {
  if (ron.test(eventname)) {
    eventmap.push(eventname.slice(2));
  }
}

module.exports = eventmap;


/***/ }),

/***/ "ZOYJ":
/*!*************************************************************!*\
  !*** ./src/app/apps/contact-grid/contact-grid.component.ts ***!
  \*************************************************************/
/*! exports provided: ContactGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactGridComponent", function() { return ContactGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contact_grid_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contact-grid.component.html */ "vSJ+");
/* harmony import */ var _contact_grid_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-grid.component.scss */ "EAk/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ContactGridComponent = class ContactGridComponent {
    constructor() { }
    ngOnInit() { }
};
ContactGridComponent.ctorParameters = () => [];
ContactGridComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-contact-grid",
        template: _raw_loader_contact_grid_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contact_grid_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ContactGridComponent);



/***/ }),

/***/ "aWwC":
/*!*********************************************!*\
  !*** ./src/app/apps/apps-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AppsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsRoutingModule", function() { return AppsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat/chat.component */ "pWwN");
/* harmony import */ var _contact_grid_contact_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-grid/contact-grid.component */ "ZOYJ");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./support/support.component */ "xK1z");
/* harmony import */ var _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drag-drop/drag-drop.component */ "/yEv");







const routes = [
    {
        path: "chat",
        component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"],
    },
    {
        path: "contact-grid",
        component: _contact_grid_contact_grid_component__WEBPACK_IMPORTED_MODULE_4__["ContactGridComponent"],
    },
    {
        path: "support",
        component: _support_support_component__WEBPACK_IMPORTED_MODULE_5__["SupportComponent"],
    },
    {
        path: "dragdrop",
        component: _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_6__["DragDropComponent"],
    },
];
let AppsRoutingModule = class AppsRoutingModule {
};
AppsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppsRoutingModule);



/***/ }),

/***/ "bBst":
/*!********************************************!*\
  !*** ./node_modules/custom-event/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


var NativeCustomEvent = global.CustomEvent;

function useNative () {
  try {
    var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });
    return  'cat' === p.type && 'bar' === p.detail.foo;
  } catch (e) {
  }
  return false;
}

/**
 * Cross-browser `CustomEvent` constructor.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
 *
 * @public
 */

module.exports = useNative() ? NativeCustomEvent :

// IE >= 9
'undefined' !== typeof document && 'function' === typeof document.createEvent ? function CustomEvent (type, params) {
  var e = document.createEvent('CustomEvent');
  if (params) {
    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
  } else {
    e.initCustomEvent(type, false, false, void 0);
  }
  return e;
} :

// IE <= 8
function CustomEvent (type, params) {
  var e = document.createEventObject();
  e.type = type;
  if (params) {
    e.bubbles = Boolean(params.bubbles);
    e.cancelable = Boolean(params.cancelable);
    e.detail = params.detail;
  } else {
    e.bubbles = false;
    e.cancelable = false;
    e.detail = void 0;
  }
  return e;
}


/***/ }),

/***/ "hMKE":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/chat/chat.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">Chat</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a href=\"#\" onClick=\"return false;\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-2\">\r\n              <a href=\"#\" onClick=\"return false;\">Apps</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">Chat</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-3\">\r\n        <div class=\"card\">\r\n          <div class=\"body\">\r\n            <div id=\"plist\" class=\"people-list\">\r\n              <div class=\"form-line m-b-15\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" />\r\n              </div>\r\n              <div class=\"tab-content\">\r\n                <div id=\"chat_user\" style=\"position: relative; max-height: 590px;\" [perfectScrollbar]>\r\n                  <ul class=\"chat-list list-unstyled m-b-0\">\r\n                    <li class=\"clearfix active\">\r\n                      <img src=\"assets/images/user/user1.jpg\" alt=\"avatar\">\r\n                      <div class=\"about\">\r\n                        <div class=\"name\">William Smith</div>\r\n                        <div class=\"status\">\r\n                          <i class=\"material-icons offline\">fiber_manual_record</i>\r\n                          left 7 mins ago </div>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"clearfix \">\r\n                      <img src=\"assets/images/user/user2.jpg\" alt=\"avatar\">\r\n                      <div class=\"about\">\r\n                        <div class=\"name\">Martha Williams</div>\r\n                        <div class=\"status\">\r\n                          <i class=\"material-icons offline\">fiber_manual_record</i>\r\n                          online </div>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"clearfix\">\r\n                      <img src=\"assets/images/user/user3.jpg\" alt=\"avatar\">\r\n                      <div class=\"about\">\r\n                        <div class=\"name\">Joseph Clark</div>\r\n                        <div class=\"status\">\r\n                          <i class=\"material-icons online\">fiber_manual_record</i>\r\n                          online </div>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"clearfix\">\r\n                      <img src=\"assets/images/user/user4.jpg\" alt=\"avatar\">\r\n                      <div class=\"about\">\r\n                        <div class=\"name\">Nancy Taylor</div>\r\n                        <div class=\"status\">\r\n                          <i class=\"material-icons online\">fiber_manual_record</i>\r\n                          online </div>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"clearfix\">\r\n                      <img src=\"assets/images/user/user5.jpg\" alt=\"avatar\">\r\n                      <div class=\"about\">\r\n                        <div class=\"name\">Margaret Wilson</div>\r\n                        <div class=\"status\">\r\n                          <i class=\"material-icons online\">fiber_manual_record</i>\r\n                          online </div>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"clearfix\">\r\n                      <img src=\"assets/images/user/user6.jpg\" alt=\"avatar\">\r\n                      <div class=\"about\">\r\n                        <div class=\"name\">Joseph Jones</div>\r\n                        <div class=\"status\">\r\n                          <i class=\"material-icons offline\">fiber_manual_record</i>\r\n                          left 30 mins ago </div>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"clearfix\">\r\n                      <img src=\"assets/images/user/user7.jpg\" alt=\"avatar\">\r\n                      <div class=\"about\">\r\n                        <div class=\"name\">Jane Brown</div>\r\n                        <div class=\"status\">\r\n                          <i class=\"material-icons offline\">fiber_manual_record</i>\r\n                          left 10 hours ago </div>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"clearfix\">\r\n                      <img src=\"assets/images/user/user8.jpg\" alt=\"avatar\">\r\n                      <div class=\"about\">\r\n                        <div class=\"name\">Eliza Johnson</div>\r\n                        <div class=\"status\">\r\n                          <i class=\"material-icons online\">fiber_manual_record</i>\r\n                          online </div>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"clearfix\">\r\n                      <img src=\"assets/images/user/user3.jpg\" alt=\"avatar\">\r\n                      <div class=\"about\">\r\n                        <div class=\"name\">Mike Clark</div>\r\n                        <div class=\"status\">\r\n                          <i class=\"material-icons online\">fiber_manual_record</i>\r\n                          online </div>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"clearfix\">\r\n                      <img src=\"assets/images/user/user4.jpg\" alt=\"avatar\">\r\n                      <div class=\"about\">\r\n                        <div class=\"name\">Ann Henry</div>\r\n                        <div class=\"status\">\r\n                          <i class=\"material-icons online\">fiber_manual_record</i>\r\n                          online </div>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"clearfix\">\r\n                      <img src=\"assets/images/user/user5.jpg\" alt=\"avatar\">\r\n                      <div class=\"about\">\r\n                        <div class=\"name\">Nancy Smith</div>\r\n                        <div class=\"status\">\r\n                          <i class=\"material-icons online\">fiber_manual_record</i>\r\n                          online </div>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"clearfix\">\r\n                      <img src=\"assets/images/user/user9.jpg\" alt=\"avatar\">\r\n                      <div class=\"about\">\r\n                        <div class=\"name\">David Wilson</div>\r\n                        <div class=\"status\">\r\n                          <i class=\"material-icons offline\">fiber_manual_record</i>\r\n                          offline since Oct 28 </div>\r\n                      </div>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-12 col-sm-12 col-md-9 col-lg-9\">\r\n        <div class=\"card\">\r\n          <div class=\"chat\">\r\n            <div class=\"chat-header clearfix\">\r\n              <img src=\"assets/images/user/user2.jpg\" alt=\"avatar\">\r\n              <div class=\"chat-about\">\r\n                <div class=\"chat-with\">Maria Smith</div>\r\n                <div class=\"chat-num-messages\">2 new messages</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"chat-history\" id=\"chat-conversation\" style=\"position: relative; max-height: 449px;\"\r\n              [perfectScrollbar]>\r\n              <ul>\r\n                <li class=\"clearfix\">\r\n                  <div class=\"message-data text-end\">\r\n                    <span class=\"message-data-time\">10:10 AM, Today\r\n                    </span>\r\n                    &nbsp; &nbsp;\r\n                    <span class=\"message-data-name\">Maria</span>\r\n                  </div>\r\n                  <div class=\"message other-message float-end\"> Hi Robert , how are you? How is\r\n                    your work going on? </div>\r\n                </li>\r\n                <li>\r\n                  <div class=\"message-data\">\r\n                    <span class=\"message-data-name\">Robert </span>\r\n                    <span class=\"message-data-time\">10:12 AM, Today</span>\r\n                  </div>\r\n                  <div class=\"message my-message\">\r\n                    <p>Its good. We completed almost all task assign by our manager.</p>\r\n                    <div class=\"row\">\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <div class=\"message-data\">\r\n                    <span class=\"message-data-name\">Robert </span>\r\n                    <span class=\"message-data-time\">10:12 AM, Today</span>\r\n                  </div>\r\n                  <div class=\"message my-message\">\r\n                    <p>How are you feel today? What's about vacation?.</p>\r\n                    <div class=\"row\">\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li class=\"clearfix\">\r\n                  <div class=\"message-data text-end\">\r\n                    <span class=\"message-data-time\">10:10 AM, Today\r\n                    </span>\r\n                    &nbsp; &nbsp;\r\n                    <span class=\"message-data-name\">Maria</span>\r\n                  </div>\r\n                  <div class=\"message other-message float-end\"> I am good, We think for next\r\n                    weekend.\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n            <div class=\"chat-message clearfix\">\r\n              <div class=\"form-group\">\r\n                <div class=\"form-line\">\r\n                  <mat-form-field class=\"example-full-width\" appearance=\"outline\"\r\n                    [hideRequiredMarker]=\"hideRequiredControl.value\" [floatLabel]=\"false\">\r\n                    <input matInput placeholder=\"Enter text here..\" required>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"chat-upload\">\r\n                <button mat-mini-fab class=\"bg-deep-orange msr-2\"> <i class=\"material-icons\">attach_file</i></button>\r\n                <button mat-mini-fab class=\"bg-deep-orange\"> <i class=\"material-icons\">insert_emoticon</i></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "jG+E":
/*!*****************************************************!*\
  !*** ./src/app/apps/support/support.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBwb3J0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "n6yW":
/*!*****************************************!*\
  !*** ./node_modules/dragula/classes.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cache = {};
var start = '(?:^|\\s)';
var end = '(?:\\s|$)';

function lookupClass (className) {
  var cached = cache[className];
  if (cached) {
    cached.lastIndex = 0;
  } else {
    cache[className] = cached = new RegExp(start + className + end, 'g');
  }
  return cached;
}

function addClass (el, className) {
  var current = el.className;
  if (!current.length) {
    el.className = className;
  } else if (!lookupClass(className).test(current)) {
    el.className += ' ' + className;
  }
}

function rmClass (el, className) {
  el.className = el.className.replace(lookupClass(className), ' ').trim();
}

module.exports = {
  add: addClass,
  rm: rmClass
};


/***/ }),

/***/ "ndhP":
/*!*********************************************************!*\
  !*** ./src/app/apps/drag-drop/drag-drop.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container .ex-moved {\n  background-color: rgba(255, 21, 45, 0.75);\n  color: #fff;\n}\n\n.container.ex-over {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkcmFnLWRyb3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFDQTtFQUNFLDBDQUFBO0FBRUYiLCJmaWxlIjoiZHJhZy1kcm9wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciAuZXgtbW92ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjkzLCAyMSwgNDUsIDAuNzUpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5jb250YWluZXIuZXgtb3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "pWwN":
/*!*********************************************!*\
  !*** ./src/app/apps/chat/chat.component.ts ***!
  \*********************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chat_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chat.component.html */ "hMKE");
/* harmony import */ var _chat_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.component.scss */ "SWf4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





let ChatComponent = class ChatComponent {
    constructor() {
        this.hideRequiredControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false);
    }
};
ChatComponent.ctorParameters = () => [];
ChatComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-chat",
        template: _raw_loader_chat_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chat_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChatComponent);



/***/ }),

/***/ "txcO":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/support/support.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">Support</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a href=\"#\" onClick=\"return false;\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-2\">\r\n              <a href=\"#\" onClick=\"return false;\">Apps</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">Support</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>\r\n              <strong>Support</strong> Tickets\r\n            </h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-3 col-sm-6\">\r\n                <div class=\"info-box7 bg-c-blue order-info-box7\">\r\n                  <div class=\"info-box7-block\">\r\n                    <h4 class=\"m-b-20\">Total Tickets</h4>\r\n                    <h2 class=\"text-end\"><i class=\"fas fa-ticket-alt pull-left\"></i><span>1,276</span></h2>\r\n                    <p class=\"m-b-0\">18% Higher Then Last Month</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-3 col-sm-6\">\r\n                <div class=\"info-box7 bg-c-green order-info-box7\">\r\n                  <div class=\"info-box7-block\">\r\n                    <h4 class=\"m-b-20\">Reply</h4>\r\n                    <h2 class=\"text-end\"><i class=\"fas fa-reply pull-left\"></i><span>865</span></h2>\r\n                    <p class=\"m-b-0\">21% Higher Then Last Month</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-3 col-sm-6\">\r\n                <div class=\"info-box7 bg-c-yellow order-info-box7\">\r\n                  <div class=\"info-box7-block\">\r\n                    <h4 class=\"m-b-20\">Resolve</h4>\r\n                    <h2 class=\"text-end\"><i class=\"fas fa-clipboard-check pull-left\"></i><span>457</span></h2>\r\n                    <p class=\"m-b-0\">37% Higher Then Last Month</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-3 col-sm-6\">\r\n                <div class=\"info-box7 bg-c-pink order-info-box7\">\r\n                  <div class=\"info-box7-block\">\r\n                    <h4 class=\"m-b-20\">Pending</h4>\r\n                    <h2 class=\"text-end\"><i class=\"fas fa-clipboard-list pull-left\"></i><span>239</span></h2>\r\n                    <p class=\"m-b-0\">10% Higher Then Last Month</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"table-responsive\">\r\n              <table mat-table [dataSource]=\"dataSource\" class=\"w-100\">\r\n                <ng-container matColumnDef=\"checked\">\r\n                  <th mat-header-cell *matHeaderCellDef width=\"10%\"> # </th>\r\n                  <td mat-cell *matCellDef=\"let element\">\r\n                    <mat-checkbox [(ngModel)]=\"element.checked\"></mat-checkbox>\r\n                  </td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"imageUrl\">\r\n                  <th mat-header-cell *matHeaderCellDef width=\"8%\"> User </th>\r\n                  <td mat-cell *matCellDef=\"let element\" class=\"table-img\"> <img [src]=\"element.imageUrl\" /> </td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"name\">\r\n                  <th mat-header-cell *matHeaderCellDef width=\"10%\"> Opened By </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"email\">\r\n                  <th mat-header-cell *matHeaderCellDef> Email </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"subject\">\r\n                  <th mat-header-cell *matHeaderCellDef> Subject </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.subject}} </td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"status\">\r\n                  <th mat-header-cell *matHeaderCellDef width=\"8%\"> Status </th>\r\n                  <td mat-cell *matCellDef=\"let element\">\r\n                    <div class=\"badge\"> {{element.status}}</div>\r\n                  </td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"assignTo\">\r\n                  <th mat-header-cell *matHeaderCellDef width=\"10%\"> Assign To </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.assignTo}} </td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"date\">\r\n                  <th mat-header-cell *matHeaderCellDef width=\"10%\"> Date </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.date}} </td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"action\">\r\n                  <th mat-header-cell *matHeaderCellDef width=\"15%\"> Actions </th>\r\n                  <td mat-cell *matCellDef=\"let element\">\r\n                    <button mat-icon-button class=\"btn-tbl-edit\">\r\n                      <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button class=\"btn-tbl-delete\">\r\n                      <mat-icon>delete</mat-icon>\r\n                    </button>\r\n                  </td>\r\n                </ng-container>\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n              </table>\r\n              <mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons>\r\n              </mat-paginator>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "vSJ+":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/contact-grid/contact-grid.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">Contact Grid</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a href=\"#\" onClick=\"return false;\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-2\">\r\n              <a href=\"#\" onClick=\"return false;\">Apps</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">Contact Grid</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <div class=\"col-xs-12 col-sm-6\">\r\n              <h2>\r\n                <strong>Contact</strong> Grid</h2>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"card border-apply\">\r\n                  <div class=\"m-b-20\">\r\n                    <div class=\"contact-grid\">\r\n                      <div class=\"profile-header l-bg-purple-dark\">\r\n                        <div class=\"user-name\">Pooja Patel</div>\r\n                        <div class=\"name-center\">General Manager</div>\r\n                      </div>\r\n                      <img src=\"assets/images/user/usrbig1.jpg\" class=\"user-img\" alt=\"\">\r\n                      <p>\r\n                        A-103, shyam gokul flats, Mahatma Road\r\n                        <br />Mumbai\r\n                      </p>\r\n                      <div>\r\n                        <span class=\"phone\">\r\n                          <i class=\"material-icons\">phone</i>264-625-2583</span>\r\n                      </div>\r\n                      <div class=\"profile-userbuttons\">\r\n                        <button mat-flat-button color=\"primary\">Read More</button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"card border-apply\">\r\n                  <div class=\"m-b-20\">\r\n                    <div class=\"contact-grid\">\r\n                      <div class=\"profile-header bg-cyan\">\r\n                        <div class=\"user-name\">Smita Patil</div>\r\n                        <div class=\"name-center\">Housekeeper</div>\r\n                      </div>\r\n                      <img src=\"assets/images/user/usrbig2.jpg\" class=\"user-img\" alt=\"\">\r\n                      <p>\r\n                        45, Krishna Tower, Near Bus Stop, Satellite,\r\n                        <br />Ahmedabad\r\n                      </p>\r\n                      <div>\r\n                        <span class=\"phone\">\r\n                          <i class=\"material-icons\">phone</i>264-625-2583</span>\r\n                      </div>\r\n                      <div class=\"profile-userbuttons\">\r\n                        <button mat-flat-button color=\"primary\">Read More</button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"card border-apply\">\r\n                  <div class=\"m-b-20\">\r\n                    <div class=\"contact-grid\">\r\n                      <div class=\"profile-header bg-dark\">\r\n                        <div class=\"user-name\">John Smith</div>\r\n                        <div class=\"name-center\">Cook</div>\r\n                      </div>\r\n                      <img src=\"assets/images/user/usrbig3.jpg\" class=\"user-img\" alt=\"\">\r\n                      <p>\r\n                        456, Estern evenue, Courtage area,\r\n                        <br />New York\r\n                      </p>\r\n                      <div>\r\n                        <span class=\"phone\">\r\n                          <i class=\"material-icons\">phone</i>264-625-2583</span>\r\n                      </div>\r\n                      <div class=\"profile-userbuttons\">\r\n                        <button mat-flat-button color=\"primary\">Read More</button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"card border-apply\">\r\n                  <div class=\"m-b-20\">\r\n                    <div class=\"contact-grid\">\r\n                      <div class=\"profile-header l-bg-orange\">\r\n                        <div class=\"user-name\">Pooja Patel</div>\r\n                        <div class=\"name-center\">General Manager</div>\r\n                      </div>\r\n                      <img src=\"assets/images/user/usrbig4.jpg\" class=\"user-img\" alt=\"\">\r\n                      <p>\r\n                        A-103, shyam gokul flats, Mahatma Road\r\n                        <br />Mumbai\r\n                      </p>\r\n                      <div>\r\n                        <span class=\"phone\">\r\n                          <i class=\"material-icons\">phone</i>264-625-2583</span>\r\n                      </div>\r\n                      <div class=\"profile-userbuttons\">\r\n                        <button mat-flat-button color=\"primary\">Read More</button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"card border-apply\">\r\n                  <div class=\"m-b-20\">\r\n                    <div class=\"contact-grid\">\r\n                      <div class=\"profile-header bg-green\">\r\n                        <div class=\"user-name\">Smita Patil</div>\r\n                        <div class=\"name-center\">Housekeeper</div>\r\n                      </div>\r\n                      <img src=\"assets/images/user/usrbig5.jpg\" class=\"user-img\" alt=\"\">\r\n                      <p>\r\n                        45, Krishna Tower, Near Bus Stop, Satellite,\r\n                        <br />Ahmedabad\r\n                      </p>\r\n                      <div>\r\n                        <span class=\"phone\">\r\n                          <i class=\"material-icons\">phone</i>264-625-2583</span>\r\n                      </div>\r\n                      <div class=\"profile-userbuttons\">\r\n                        <button mat-flat-button color=\"primary\">Read More</button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"card border-apply\">\r\n                  <div class=\"m-b-20\">\r\n                    <div class=\"contact-grid\">\r\n                      <div class=\"profile-header l-bg-red\">\r\n                        <div class=\"user-name\">John Smith</div>\r\n                        <div class=\"name-center\">Cook</div>\r\n                      </div>\r\n                      <img src=\"assets/images/user/usrbig6.jpg\" class=\"user-img\" alt=\"\">\r\n                      <p>\r\n                        456, Estern evenue, Courtage area,\r\n                        <br />New York\r\n                      </p>\r\n                      <div>\r\n                        <span class=\"phone\">\r\n                          <i class=\"material-icons\">phone</i>264-625-2583</span>\r\n                      </div>\r\n                      <div class=\"profile-userbuttons\">\r\n                        <button mat-flat-button color=\"primary\">Read More</button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"card border-apply\">\r\n                  <div class=\"m-b-20\">\r\n                    <div class=\"contact-grid\">\r\n                      <div class=\"profile-header bg-indigo\">\r\n                        <div class=\"user-name\">Pooja Patel</div>\r\n                        <div class=\"name-center\">General Manager</div>\r\n                      </div>\r\n                      <img src=\"assets/images/user/usrbig7.jpg\" class=\"user-img\" alt=\"\">\r\n                      <p>\r\n                        A-103, shyam gokul flats, Mahatma Road\r\n                        <br />Mumbai\r\n                      </p>\r\n                      <div>\r\n                        <span class=\"phone\">\r\n                          <i class=\"material-icons\">phone</i>264-625-2583</span>\r\n                      </div>\r\n                      <div class=\"profile-userbuttons\">\r\n                        <button mat-flat-button color=\"primary\">Read More</button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"card border-apply\">\r\n                  <div class=\"m-b-20\">\r\n                    <div class=\"contact-grid\">\r\n                      <div class=\"profile-header bg-brown\">\r\n                        <div class=\"user-name\">Smita Patil</div>\r\n                        <div class=\"name-center\">Housekeeper</div>\r\n                      </div>\r\n                      <img src=\"assets/images/user/usrbig8.jpg\" class=\"user-img\" alt=\"\">\r\n                      <p>\r\n                        45, Krishna Tower, Near Bus Stop, Satellite,\r\n                        <br />Ahmedabad\r\n                      </p>\r\n                      <div>\r\n                        <span class=\"phone\">\r\n                          <i class=\"material-icons\">phone</i>264-625-2583</span>\r\n                      </div>\r\n                      <div class=\"profile-userbuttons\">\r\n                        <button mat-flat-button color=\"primary\">Read More</button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"card border-apply\">\r\n                  <div class=\"m-b-20\">\r\n                    <div class=\"contact-grid\">\r\n                      <div class=\"profile-header bg-yellow\">\r\n                        <div class=\"user-name\">John Smith</div>\r\n                        <div class=\"name-center\">Cook</div>\r\n                      </div>\r\n                      <img src=\"assets/images/user/usrbig9.jpg\" class=\"user-img\" alt=\"\">\r\n                      <p>\r\n                        456, Estern evenue, Courtage area,\r\n                        <br />New York\r\n                      </p>\r\n                      <div>\r\n                        <span class=\"phone\">\r\n                          <i class=\"material-icons\">phone</i>264-625-2583</span>\r\n                      </div>\r\n                      <div class=\"profile-userbuttons\">\r\n                        <button mat-flat-button color=\"primary\">Read More</button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"card border-apply\">\r\n                  <div class=\"m-b-20\">\r\n                    <div class=\"contact-grid\">\r\n                      <div class=\"profile-header l-bg-purple-dark\">\r\n                        <div class=\"user-name\">Pooja Patel</div>\r\n                        <div class=\"name-center\">General Manager</div>\r\n                      </div>\r\n                      <img src=\"assets/images/user/usrbig1.jpg\" class=\"user-img\" alt=\"\">\r\n                      <p>\r\n                        A-103, shyam gokul flats, Mahatma Road\r\n                        <br />Mumbai\r\n                      </p>\r\n                      <div>\r\n                        <span class=\"phone\">\r\n                          <i class=\"material-icons\">phone</i>264-625-2583</span>\r\n                      </div>\r\n                      <div class=\"profile-userbuttons\">\r\n                        <button mat-flat-button color=\"primary\">Read More</button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"card border-apply\">\r\n                  <div class=\"m-b-20\">\r\n                    <div class=\"contact-grid\">\r\n                      <div class=\"profile-header bg-cyan\">\r\n                        <div class=\"user-name\">Smita Patil</div>\r\n                        <div class=\"name-center\">Housekeeper</div>\r\n                      </div>\r\n                      <img src=\"assets/images/user/usrbig2.jpg\" class=\"user-img\" alt=\"\">\r\n                      <p>\r\n                        45, Krishna Tower, Near Bus Stop, Satellite,\r\n                        <br />Ahmedabad\r\n                      </p>\r\n                      <div>\r\n                        <span class=\"phone\">\r\n                          <i class=\"material-icons\">phone</i>264-625-2583</span>\r\n                      </div>\r\n                      <div class=\"profile-userbuttons\">\r\n                        <button mat-flat-button color=\"primary\">Read More</button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"card border-apply\">\r\n                  <div class=\"m-b-20\">\r\n                    <div class=\"contact-grid\">\r\n                      <div class=\"profile-header bg-dark\">\r\n                        <div class=\"user-name\">John Smith</div>\r\n                        <div class=\"name-center\">Cook</div>\r\n                      </div>\r\n                      <img src=\"assets/images/user/usrbig3.jpg\" class=\"user-img\" alt=\"\">\r\n                      <p>\r\n                        456, Estern evenue, Courtage area,\r\n                        <br />New York\r\n                      </p>\r\n                      <div>\r\n                        <span class=\"phone\">\r\n                          <i class=\"material-icons\">phone</i>264-625-2583</span>\r\n                      </div>\r\n                      <div class=\"profile-userbuttons\">\r\n                        <button mat-flat-button color=\"primary\">Read More</button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "xK1z":
/*!***************************************************!*\
  !*** ./src/app/apps/support/support.component.ts ***!
  \***************************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_support_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./support.component.html */ "txcO");
/* harmony import */ var _support_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./support.component.scss */ "jG+E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");






const ELEMENT_DATA = [
    {
        checked: false,
        imageUrl: "assets/images/user/user1.jpg",
        name: "Tim Hank",
        email: "test@example.com",
        subject: "Image not Proper",
        status: "closed",
        assignTo: "John Deo",
        date: "27/05/2016",
        action: "",
    },
    {
        checked: false,
        imageUrl: "assets/images/user/user2.jpg",
        name: "Tim Hank",
        email: "test@example.com",
        subject: "Image not Proper",
        status: "closed",
        assignTo: "John Deo",
        date: "27/05/2016",
        action: "",
    },
    {
        checked: false,
        imageUrl: "assets/images/user/user3.jpg",
        name: "Tim Hank",
        email: "test@example.com",
        subject: "Image not Proper",
        status: "open",
        assignTo: "John Deo",
        date: "27/05/2016",
        action: "",
    },
    {
        checked: false,
        imageUrl: "assets/images/user/user4.jpg",
        name: "Tim Hank",
        email: "test@example.com",
        subject: "Image not Proper",
        status: "closed",
        assignTo: "John Deo",
        date: "27/05/2016",
        action: "",
    },
    {
        checked: false,
        imageUrl: "assets/images/user/user5.jpg",
        name: "Tim Hank",
        email: "test@example.com",
        subject: "Image not Proper",
        status: "open",
        assignTo: "John Deo",
        date: "27/05/2016",
        action: "",
    },
    {
        checked: false,
        imageUrl: "assets/images/user/user6.jpg",
        name: "Tim Hank",
        email: "test@example.com",
        subject: "Image not Proper",
        status: "closed",
        assignTo: "John Deo",
        date: "27/05/2016",
        action: "",
    },
    {
        checked: false,
        imageUrl: "assets/images/user/user7.jpg",
        name: "Tim Hank",
        email: "test@example.com",
        subject: "Image not Proper",
        status: "open",
        assignTo: "John Deo",
        date: "27/05/2016",
        action: "",
    },
    {
        checked: false,
        imageUrl: "assets/images/user/user8.jpg",
        name: "Tim Hank",
        email: "test@example.com",
        subject: "Image not Proper",
        status: "pending",
        assignTo: "John Deo",
        date: "27/05/2016",
        action: "",
    },
    {
        checked: false,
        imageUrl: "assets/images/user/user9.jpg",
        name: "Tim Hank",
        email: "test@example.com",
        subject: "Image not Proper",
        status: "closed",
        assignTo: "John Deo",
        date: "27/05/2016",
        action: "",
    },
    {
        checked: false,
        imageUrl: "assets/images/user/user10.jpg",
        name: "Tim Hank",
        email: "test@example.com",
        subject: "Image not Proper",
        status: "closed",
        assignTo: "John Deo",
        date: "27/05/2016",
        action: "",
    },
    {
        checked: false,
        imageUrl: "assets/images/user/user1.jpg",
        name: "Tim Hank",
        email: "test@example.com",
        subject: "Image not Proper",
        status: "open",
        assignTo: "John Deo",
        date: "27/05/2016",
        action: "",
    },
    {
        checked: false,
        imageUrl: "assets/images/user/user2.jpg",
        name: "Tim Hank",
        email: "test@example.com",
        subject: "Image not Proper",
        status: "closed",
        assignTo: "John Deo",
        date: "27/05/2016",
        action: "",
    },
    {
        checked: false,
        imageUrl: "assets/images/user/user3.jpg",
        name: "Tim Hank",
        email: "test@example.com",
        subject: "Image not Proper",
        status: "pending",
        assignTo: "John Deo",
        date: "27/05/2016",
        action: "",
    },
    {
        checked: false,
        imageUrl: "assets/images/user/user4.jpg",
        name: "Tim Hank",
        email: "test@example.com",
        subject: "Image not Proper",
        status: "closed",
        assignTo: "John Deo",
        date: "27/05/2016",
        action: "",
    },
    {
        checked: false,
        imageUrl: "assets/images/user/user5.jpg",
        name: "Tim Hank",
        email: "test@example.com",
        subject: "Image not Proper",
        status: "closed",
        assignTo: "John Deo",
        date: "27/05/2016",
        action: "",
    },
    {
        checked: false,
        imageUrl: "assets/images/user/user6.jpg",
        name: "Tim Hank",
        email: "test@example.com",
        subject: "Image not Proper",
        status: "pending",
        assignTo: "John Deo",
        date: "27/05/2016",
        action: "",
    },
    {
        checked: false,
        imageUrl: "assets/images/user/user7.jpg",
        name: "Tim Hank",
        email: "test@example.com",
        subject: "Image not Proper",
        status: "closed",
        assignTo: "John Deo",
        date: "27/05/2016",
        action: "",
    },
    {
        checked: false,
        imageUrl: "assets/images/user/user8.jpg",
        name: "Tim Hank",
        email: "test@example.com",
        subject: "Image not Proper",
        status: "closed",
        assignTo: "John Deo",
        date: "27/05/2016",
        action: "",
    },
];
let SupportComponent = class SupportComponent {
    constructor() {
        this.displayedColumns = [
            "checked",
            "imageUrl",
            "name",
            "email",
            "subject",
            "status",
            "assignTo",
            "date",
            "action",
        ];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](ELEMENT_DATA);
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
    }
};
SupportComponent.ctorParameters = () => [];
SupportComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true },] }]
};
SupportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-support",
        template: _raw_loader_support_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_support_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SupportComponent);



/***/ })

}]);
//# sourceMappingURL=apps-apps-module-es2015.js.map