(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["secondlevel-secondlevel-module"],{

/***/ "/7dJ":
/*!*********************************************************************!*\
  !*** ./src/app/multilevel/secondlevel/second1/second1.component.ts ***!
  \*********************************************************************/
/*! exports provided: Second1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Second1Component", function() { return Second1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_second1_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./second1.component.html */ "FUFA");
/* harmony import */ var _second1_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./second1.component.sass */ "agbI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let Second1Component = class Second1Component {
    constructor() { }
    ngOnInit() { }
};
Second1Component.ctorParameters = () => [];
Second1Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-second1",
        template: _raw_loader_second1_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_second1_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Second1Component);



/***/ }),

/***/ "15cR":
/*!**********************************************************************!*\
  !*** ./src/app/multilevel/secondlevel/secondlevel-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: SecondLevelRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondLevelRoutingModule", function() { return SecondLevelRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _second1_second1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./second1/second1.component */ "/7dJ");
/* harmony import */ var _second2_second2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./second2/second2.component */ "7gDV");





const routes = [
    {
        path: "second1",
        component: _second1_second1_component__WEBPACK_IMPORTED_MODULE_3__["Second1Component"],
    },
    {
        path: "second2",
        component: _second2_second2_component__WEBPACK_IMPORTED_MODULE_4__["Second2Component"],
    },
];
let SecondLevelRoutingModule = class SecondLevelRoutingModule {
};
SecondLevelRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SecondLevelRoutingModule);



/***/ }),

/***/ "7gDV":
/*!*********************************************************************!*\
  !*** ./src/app/multilevel/secondlevel/second2/second2.component.ts ***!
  \*********************************************************************/
/*! exports provided: Second2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Second2Component", function() { return Second2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_second2_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./second2.component.html */ "qGx+");
/* harmony import */ var _second2_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./second2.component.sass */ "w5RF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let Second2Component = class Second2Component {
    constructor() { }
    ngOnInit() { }
};
Second2Component.ctorParameters = () => [];
Second2Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-second2",
        template: _raw_loader_second2_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_second2_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Second2Component);



/***/ }),

/***/ "FUFA":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/multilevel/secondlevel/second1/second1.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">Second Level</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a routerLink=\"/dashboard/main\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-2\">\r\n              <a href=\"#\" onClick=\"return false;\">Second</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">Second 1</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Second Level</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n\r\n            <!-- Add content here -->\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "agbI":
/*!***********************************************************************!*\
  !*** ./src/app/multilevel/secondlevel/second1/second1.component.sass ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWNvbmQxLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "f4yQ":
/*!**************************************************************!*\
  !*** ./src/app/multilevel/secondlevel/secondlevel.module.ts ***!
  \**************************************************************/
/*! exports provided: SecondLevelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondLevelModule", function() { return SecondLevelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _second1_second1_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./second1/second1.component */ "/7dJ");
/* harmony import */ var _second2_second2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./second2/second2.component */ "7gDV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _secondlevel_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./secondlevel-routing.module */ "15cR");







let SecondLevelModule = class SecondLevelModule {
};
SecondLevelModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_second1_second1_component__WEBPACK_IMPORTED_MODULE_1__["Second1Component"], _second2_second2_component__WEBPACK_IMPORTED_MODULE_2__["Second2Component"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _secondlevel_routing_module__WEBPACK_IMPORTED_MODULE_6__["SecondLevelRoutingModule"],
        ],
    })
], SecondLevelModule);



/***/ }),

/***/ "qGx+":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/multilevel/secondlevel/second2/second2.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">Second Level</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a routerLink=\"/dashboard/main\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-2\">\r\n              <a href=\"#\" onClick=\"return false;\">Second</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">Second 2</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Second Level 2</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n\r\n            <!-- Add content here -->\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "w5RF":
/*!***********************************************************************!*\
  !*** ./src/app/multilevel/secondlevel/second2/second2.component.sass ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWNvbmQyLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ })

}]);
//# sourceMappingURL=secondlevel-secondlevel-module-es2015.js.map