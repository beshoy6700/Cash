(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["countries-countries-module"],{

/***/ "3dmE":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/countries/all-countries/all-countries.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\n  <div class=\"container-fluid\">\n    <div class=\"block-header\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n          <ul class=\"breadcrumb breadcrumb-style \">\n            <li class=\"breadcrumb-item\">\n              <h4 class=\"page-title\">قائمة الدول</h4>\n            </li>\n            <li class=\"breadcrumb-item bcrumb-1\">\n              <a routerLink=\"/admin/dashboard/main\">\n                <i class=\"fas fa-home\"></i> الرئيسية</a>\n            </li>\n            <li class=\"breadcrumb-item bcrumb-2\">\n              <a href=\"#\" onClick=\"return false;\">Doctors</a>\n            </li>\n            <li class=\"breadcrumb-item active\">View</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"card\">\n          <div class=\"body\">\n\n            <ngx-datatable class=\"material\"\n                           [rows]=\"rows\" [columns]=\"columns\" [sortType]=\"'multi'\" [columnMode]=\"'force'\"\n                           [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"50\" [limit]=\"10\">\n            </ngx-datatable>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "9pi0":
/*!******************************************************!*\
  !*** ./src/app/admin/countries/countries.service.ts ***!
  \******************************************************/
/*! exports provided: CountriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesService", function() { return CountriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");




let CountriesService = class CountriesService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/admin/countries/`;
    }
    getAll() {
        return this.httpClient.get(this.API_URL + 'list');
        // return this.httpClient.get<Countries[]>(this.API_URL);
    }
    create(country) {
        return this.httpClient.post(this.API_URL + 'create', country);
    }
};
CountriesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CountriesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CountriesService);



/***/ }),

/***/ "A1FZ":
/*!*************************************************************!*\
  !*** ./src/app/admin/countries/countries-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CountriesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesRoutingModule", function() { return CountriesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _all_countries_all_countries_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-countries/all-countries.component */ "BlMa");
/* harmony import */ var _add_country_add_country_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-country/add-country.component */ "DJWU");
/* harmony import */ var _edit_country_edit_country_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-country/edit-country.component */ "xEXL");






const routes = [
    {
        path: 'allCountries',
        component: _all_countries_all_countries_component__WEBPACK_IMPORTED_MODULE_3__["AllCountriesComponent"]
    },
    {
        path: 'add-country',
        component: _add_country_add_country_component__WEBPACK_IMPORTED_MODULE_4__["AddCountryComponent"]
    },
    {
        path: 'edit-country',
        component: _edit_country_edit_country_component__WEBPACK_IMPORTED_MODULE_5__["EditCountryComponent"]
    }
];
let CountriesRoutingModule = class CountriesRoutingModule {
};
CountriesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CountriesRoutingModule);



/***/ }),

/***/ "A1Tf":
/*!****************************************************************************!*\
  !*** ./src/app/admin/countries/all-countries/all-countries.component.sass ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGwtY291bnRyaWVzLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "Adw4":
/*!************************************************************************!*\
  !*** ./src/app/admin/countries/add-country/add-country.component.sass ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY291bnRyeS5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "BlMa":
/*!**************************************************************************!*\
  !*** ./src/app/admin/countries/all-countries/all-countries.component.ts ***!
  \**************************************************************************/
/*! exports provided: AllCountriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllCountriesComponent", function() { return AllCountriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_all_countries_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./all-countries.component.html */ "3dmE");
/* harmony import */ var _all_countries_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-countries.component.sass */ "A1Tf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _countries_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../countries.service */ "9pi0");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");







let AllCountriesComponent = class AllCountriesComponent {
    constructor(httpClient, service) {
        this.httpClient = httpClient;
        this.service = service;
        this.API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl}/admin/countries/list`;
        this.rows = [];
        this.tableStyle = 'bootstrap';
        this.columns = [
            { name: 'Name' },
            { name: 'Status' },
            { name: 'Slug' }
        ];
    }
    switchStyle() {
        if (this.tableStyle == 'dark') {
            this.tableStyle = 'bootstrap';
        }
        else {
            this.tableStyle = 'dark';
        }
    }
    ngOnInit() {
        this.loadData();
    }
    // HBGC~-h}qiLB
    loadData() {
        this.service.getAll().subscribe((data) => {
            this.countries = data.countries;
            this.rows = this.countries;
        });
    }
    onRemove(country) {
        /*  let index = this.countries.indexOf(country);
          this.countries.splice(index,1);*/
    }
};
AllCountriesComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _countries_service__WEBPACK_IMPORTED_MODULE_4__["CountriesService"] }
];
AllCountriesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-all-countries',
        template: _raw_loader_all_countries_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_all_countries_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AllCountriesComponent);



/***/ }),

/***/ "CPYq":
/*!**************************************************************************!*\
  !*** ./src/app/admin/countries/edit-country/edit-country.component.sass ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWNvdW50cnkuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "DJWU":
/*!**********************************************************************!*\
  !*** ./src/app/admin/countries/add-country/add-country.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddCountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCountryComponent", function() { return AddCountryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_country_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-country.component.html */ "Sq6L");
/* harmony import */ var _add_country_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-country.component.sass */ "Adw4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AddCountryComponent = class AddCountryComponent {
    constructor() { }
    ngOnInit() {
        /*this.register = this.fb.group({
          first: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
          last: [''],
          termcondition: [false, [Validators.requiredTrue]],
        })*/
    }
};
AddCountryComponent.ctorParameters = () => [];
AddCountryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-country',
        template: _raw_loader_add_country_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_country_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddCountryComponent);



/***/ }),

/***/ "DMhW":
/*!*****************************************************!*\
  !*** ./src/app/admin/countries/countries.module.ts ***!
  \*****************************************************/
/*! exports provided: CountriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesModule", function() { return CountriesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _countries_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./countries-routing.module */ "A1FZ");
/* harmony import */ var _all_countries_all_countries_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all-countries/all-countries.component */ "BlMa");
/* harmony import */ var _countries_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./countries.service */ "9pi0");
/* harmony import */ var _add_country_add_country_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-country/add-country.component */ "DJWU");
/* harmony import */ var _edit_country_edit_country_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-country/edit-country.component */ "xEXL");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-material-file-input */ "7ZcW");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");


























let CountriesModule = class CountriesModule {
};
CountriesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _all_countries_all_countries_component__WEBPACK_IMPORTED_MODULE_4__["AllCountriesComponent"],
            _add_country_add_country_component__WEBPACK_IMPORTED_MODULE_6__["AddCountryComponent"],
            _edit_country_edit_country_component__WEBPACK_IMPORTED_MODULE_7__["EditCountryComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _countries_routing_module__WEBPACK_IMPORTED_MODULE_3__["CountriesRoutingModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__["MatDatepickerModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__["MatCheckboxModule"],
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_24__["MaterialFileInputModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"],
        ],
        providers: [
            _countries_service__WEBPACK_IMPORTED_MODULE_5__["CountriesService"]
        ]
    })
], CountriesModule);



/***/ }),

/***/ "Sq6L":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/countries/add-country/add-country.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\n  <div class=\"container-fluid\">\n    <div class=\"block-header\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n          <ul class=\"breadcrumb breadcrumb-style \">\n            <li class=\"breadcrumb-item\">\n              <h4 class=\"page-title\">قائمة الدول</h4>\n            </li>\n            <li class=\"breadcrumb-item bcrumb-1\">\n              <a routerLink=\"/admin/dashboard/main\">\n                <i class=\"fas fa-home\"></i> الرئيسية</a>\n            </li>\n            <li class=\"breadcrumb-item bcrumb-2\">\n              <a href=\"#\" onClick=\"return false;\">Doctors</a>\n            </li>\n            <li class=\"breadcrumb-item active\">View</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"card\">\n          <div class=\"body\">\n\n\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "xEXL":
/*!************************************************************************!*\
  !*** ./src/app/admin/countries/edit-country/edit-country.component.ts ***!
  \************************************************************************/
/*! exports provided: EditCountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCountryComponent", function() { return EditCountryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_country_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-country.component.html */ "zerm");
/* harmony import */ var _edit_country_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-country.component.sass */ "CPYq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let EditCountryComponent = class EditCountryComponent {
    constructor() { }
    ngOnInit() {
    }
};
EditCountryComponent.ctorParameters = () => [];
EditCountryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-country',
        template: _raw_loader_edit_country_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_country_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditCountryComponent);



/***/ }),

/***/ "zerm":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/countries/edit-country/edit-country.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>edit-country works!</p>\n");

/***/ })

}]);
//# sourceMappingURL=countries-countries-module-es2015.js.map