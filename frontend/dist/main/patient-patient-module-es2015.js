(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patient-patient-module"],{

/***/ "1Y09":
/*!**********************************************************!*\
  !*** ./src/app/patient/settings/settings.component.sass ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "5XIA":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patient/settings/settings.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">Settings</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a routerLink=\"/patient/dashboard\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">Settings</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"header\">\r\n        <h2>\r\n          <strong>Security</strong> Settings</h2>\r\n      </div>\r\n      <div class=\"body\">\r\n        <div class=\"example-container\">\r\n          <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n            <mat-label>Username</mat-label>\r\n            <input matInput>\r\n          </mat-form-field>\r\n          <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n            <mat-label>Current Password</mat-label>\r\n            <input matInput type=\"password\">\r\n          </mat-form-field>\r\n          <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n            <mat-label>New Password</mat-label>\r\n            <input matInput type=\"password\">\r\n          </mat-form-field>\r\n        </div>\r\n        <button mat-raised-button color=\"primary\">Save</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"header\">\r\n        <h2>\r\n          <strong>Account</strong> Settings</h2>\r\n      </div>\r\n      <div class=\"body\">\r\n        <div class=\"row clearfix\">\r\n          <div class=\"col-lg-6 col-md-12\">\r\n            <div class=\"form-group\">\r\n              <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                <mat-label>First Name</mat-label>\r\n                <input matInput>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-6 col-md-12\">\r\n            <div class=\"form-group\">\r\n              <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                <mat-label>Last Name</mat-label>\r\n                <input matInput>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4 col-md-12\">\r\n            <div class=\"form-group\">\r\n              <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                <mat-label>City</mat-label>\r\n                <input matInput>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4 col-md-12\">\r\n            <div class=\"form-group\">\r\n              <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                <mat-label>Email</mat-label>\r\n                <input matInput>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4 col-md-12\">\r\n            <div class=\"form-group\">\r\n              <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                <mat-label>Country</mat-label>\r\n                <input matInput>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4 col-md-12\">\r\n            <div class=\"form-group\">\r\n              <mat-form-field class=\"example-full-width mb-3\" appearance=\"fill\">\r\n                <mat-label>Date Of Birth</mat-label>\r\n                <input matInput [matDatepicker]=\"picker\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                <mat-datepicker #picker></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4 col-md-12\">\r\n            <div class=\"form-group\">\r\n              <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                <mat-label>Mobile</mat-label>\r\n                <input matInput>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4 col-md-12\">\r\n            <div class=\"form-group\">\r\n              <mat-form-field class=\"example-full-width mb-3\" appearance=\"fill\">\r\n                <mat-label>Blood Group</mat-label>\r\n                <mat-select>\r\n                  <mat-option [value]=\"'A-'\">\r\n                    A-\r\n                  </mat-option>\r\n                  <mat-option [value]=\"'A+'\">\r\n                    A+\r\n                  </mat-option>\r\n                  <mat-option [value]=\"'B-'\">\r\n                    B-\r\n                  </mat-option>\r\n                  <mat-option [value]=\"'B+'\">\r\n                    B+\r\n                  </mat-option>\r\n                  <mat-option [value]=\"'AB-'\">\r\n                    AB-\r\n                  </mat-option>\r\n                  <mat-option [value]=\"'AB+'\">\r\n                    AB+\r\n                  </mat-option>\r\n                  <mat-option [value]=\"'O-'\">\r\n                    O-\r\n                  </mat-option>\r\n                  <mat-option [value]=\"'O+'\">\r\n                    O+\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-12\">\r\n            <div class=\"form-group\">\r\n              <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                <mat-label>Address</mat-label>\r\n                <textarea matInput></textarea>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-12\">\r\n            <button mat-raised-button color=\"primary\">Save Changes</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "AMsP":
/*!*******************************************!*\
  !*** ./src/app/patient/patient.module.ts ***!
  \*******************************************/
/*! exports provided: PatientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientModule", function() { return PatientModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-echarts */ "DKVz");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _patient_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./patient-routing.module */ "dP2w");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "M4rk");
/* harmony import */ var _prescriptions_prescriptions_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./prescriptions/prescriptions.component */ "hPRH");
/* harmony import */ var _medical_records_medical_records_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./medical-records/medical-records.component */ "gc/a");
/* harmony import */ var _billing_billing_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./billing/billing.component */ "iTVP");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./settings/settings.component */ "oPFr");
























let PatientModule = class PatientModule {
};
PatientModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["DashboardComponent"],
            _prescriptions_prescriptions_component__WEBPACK_IMPORTED_MODULE_20__["PrescriptionsComponent"],
            _medical_records_medical_records_component__WEBPACK_IMPORTED_MODULE_21__["MedicalRecordsComponent"],
            _billing_billing_component__WEBPACK_IMPORTED_MODULE_22__["BillingComponent"],
            _settings_settings_component__WEBPACK_IMPORTED_MODULE_23__["SettingsComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"],
            ngx_echarts__WEBPACK_IMPORTED_MODULE_5__["NgxEchartsModule"].forRoot({
                echarts: () => __webpack_require__.e(/*! import() | echarts */ "echarts").then(__webpack_require__.t.bind(null, /*! echarts */ "MT78", 7)),
            }),
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _patient_routing_module__WEBPACK_IMPORTED_MODULE_18__["PatientRoutingModule"],
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__["NgApexchartsModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"],
        ],
    })
], PatientModule);



/***/ }),

/***/ "BIGo":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patient/billing/billing.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">Billing</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a routerLink=\"/patient/dashboard\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">Billing</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Billing</h2>\r\n\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"card-body\">\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table table-hover \">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>Invoice No</th>\r\n                      <th>Doctor Name</th>\r\n                      <th>Date</th>\r\n                      <th>Amount</th>\r\n                      <th>Tax</th>\r\n                      <th>Discount</th>\r\n                      <th>Total</th>\r\n                      <th>Actions </th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr>\r\n                      <td>#A348</td>\r\n                      <td><a href=\"mailto:test@gmail.com\"> Dr.Jacob Ryan </a></td>\r\n                      <td>04/03/2016 </td>\r\n                      <td>$40</td>\r\n                      <td>10%</td>\r\n                      <td>$5</td>\r\n                      <td>$39</td>\r\n                      <td>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-purple\">cloud_download</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-green\">visibility</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-blue\">print</mat-icon>\r\n                        </button>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>#A645</td>\r\n                      <td><a href=\"mailto:test@gmail.com\"> Dr.Rajesh </a></td>\r\n                      <td>11/04/2016 </td>\r\n                      <td>$25</td>\r\n                      <td>10%</td>\r\n                      <td>$5</td>\r\n                      <td>$22</td>\r\n                      <td>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-purple\">cloud_download</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-green\">visibility</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-blue\">print</mat-icon>\r\n                        </button>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>#A873</td>\r\n                      <td><a href=\"mailto:test@gmail.com\"> Dr.Jay Soni </a></td>\r\n                      <td>18/04/2016 </td>\r\n                      <td>$50</td>\r\n                      <td>10%</td>\r\n                      <td>$5</td>\r\n                      <td>$47</td>\r\n                      <td>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-purple\">cloud_download</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-green\">visibility</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-blue\">print</mat-icon>\r\n                        </button>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>#A927</td>\r\n                      <td><a href=\"mailto:test@gmail.com\"> Dr.John Deo </a></td>\r\n                      <td>22/05/2016 </td>\r\n                      <td>$45</td>\r\n                      <td>10%</td>\r\n                      <td>$5</td>\r\n                      <td>$42</td>\r\n                      <td>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-purple\">cloud_download</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-green\">visibility</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-blue\">print</mat-icon>\r\n                        </button>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>#A228</td>\r\n                      <td><a href=\"mailto:test@gmail.com\"> Dr.Megha Trivedi </a></td>\r\n                      <td>09/07/2016 </td>\r\n                      <td>$62</td>\r\n                      <td>10%</td>\r\n                      <td>$5</td>\r\n                      <td>$57</td>\r\n                      <td>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-purple\">cloud_download</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-green\">visibility</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-blue\">print</mat-icon>\r\n                        </button>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>#A345</td>\r\n                      <td><a href=\"mailto:test@gmail.com\"> Dr.Sarah Smith </a></td>\r\n                      <td>14/07/2016 </td>\r\n                      <td>$60</td>\r\n                      <td>10%</td>\r\n                      <td>$5</td>\r\n                      <td>$56</td>\r\n                      <td>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-purple\">cloud_download</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-green\">visibility</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-blue\">print</mat-icon>\r\n                        </button>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>#A765</td>\r\n                      <td><a href=\"mailto:test@gmail.com\"> Dr.Jacob Ryan </a></td>\r\n                      <td>22/06/2016 </td>\r\n                      <td>$40</td>\r\n                      <td>10%</td>\r\n                      <td>$5</td>\r\n                      <td>$39</td>\r\n                      <td>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-purple\">cloud_download</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-green\">visibility</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-blue\">print</mat-icon>\r\n                        </button>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>#A125</td>\r\n                      <td><a href=\"mailto:test@gmail.com\"> Dr.Rajesh </a></td>\r\n                      <td>23/06/2016 </td>\r\n                      <td>$30</td>\r\n                      <td>10%</td>\r\n                      <td>$5</td>\r\n                      <td>$29</td>\r\n                      <td>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-purple\">cloud_download</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-green\">visibility</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-blue\">print</mat-icon>\r\n                        </button>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "Fi/F":
/*!************************************************************************!*\
  !*** ./src/app/patient/medical-records/medical-records.component.sass ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZWRpY2FsLXJlY29yZHMuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "GIgi":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patient/prescriptions/prescriptions.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">Prescriptions</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a routerLink=\"/patient/dashboard\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">Prescriptions</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Prescriptions</h2>\r\n\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"card-body\">\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table table-hover \">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>#</th>\r\n                      <th>Title</th>\r\n                      <th>Created by</th>\r\n                      <th>Date</th>\r\n                      <th>Diseases</th>\r\n                      <th>Actions </th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr>\r\n                      <td>#A348</td>\r\n                      <td>Prescription 1</td>\r\n                      <td><a href=\"mailto:test@gmail.com\"> Dr.Jacob Ryan </a></td>\r\n                      <td>12/05/2016 </td>\r\n                      <td>\r\n                        <div class=\"badge col-red\">Fever</div>\r\n                      </td>\r\n                      <td>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-purple\">cloud_download</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-green\">visibility</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-orange\">delete</mat-icon>\r\n                        </button>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>#A645</td>\r\n                      <td>Prescription 2</td>\r\n                      <td><a href=\"mailto:test@gmail.com\"> Dr.Rajesh </a></td>\r\n                      <td>12/05/2016 </td>\r\n                      <td>\r\n                        <div class=\"badge col-green\">Cholera</div>\r\n                      </td>\r\n                      <td>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-purple\">cloud_download</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-green\">visibility</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-orange\">delete</mat-icon>\r\n                        </button>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>#A873</td>\r\n                      <td>Prescription 3</td>\r\n                      <td><a href=\"mailto:test@gmail.com\"> Dr.Jay Soni </a></td>\r\n                      <td>12/05/2016 </td>\r\n                      <td>\r\n                        <div class=\"badge col-purple\">Jaundice</div>\r\n                      </td>\r\n                      <td>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-purple\">cloud_download</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-green\">visibility</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-orange\">delete</mat-icon>\r\n                        </button>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>#A927</td>\r\n                      <td>Prescription 4</td>\r\n                      <td><a href=\"mailto:test@gmail.com\"> Dr.John Deo </a></td>\r\n                      <td>12/05/2016 </td>\r\n                      <td>\r\n                        <div class=\"badge col-purple\">Typhod</div>\r\n                      </td>\r\n                      <td>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-purple\">cloud_download</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-green\">visibility</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-orange\">delete</mat-icon>\r\n                        </button>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>#A228</td>\r\n                      <td>Prescription 5</td>\r\n                      <td><a href=\"mailto:test@gmail.com\"> Dr.Megha Trivedi </a></td>\r\n                      <td>12/05/2016 </td>\r\n                      <td>\r\n                        <div class=\"badge col-orange\">Maleria</div>\r\n                      </td>\r\n                      <td>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-purple\">cloud_download</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-green\">visibility</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-orange\">delete</mat-icon>\r\n                        </button>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>#A345</td>\r\n                      <td>Prescription 6</td>\r\n                      <td><a href=\"mailto:test@gmail.com\"> Dr.Sarah Smith </a></td>\r\n                      <td>12/05/2016 </td>\r\n                      <td>\r\n                        <div class=\"badge col-cyan\">Infection</div>\r\n                      </td>\r\n                      <td>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-purple\">cloud_download</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-green\">visibility</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-orange\">delete</mat-icon>\r\n                        </button>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>#A765</td>\r\n                      <td>Prescription 7</td>\r\n                      <td><a href=\"mailto:test@gmail.com\"> Dr.Jacob Ryan </a></td>\r\n                      <td>12/05/2016 </td>\r\n                      <td>\r\n                        <div class=\"badge col-red\">Fever</div>\r\n                      </td>\r\n                      <td>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-purple\">cloud_download</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-green\">visibility</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-orange\">delete</mat-icon>\r\n                        </button>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>#A125</td>\r\n                      <td>Prescription 8</td>\r\n                      <td><a href=\"mailto:test@gmail.com\"> Dr.Rajesh </a></td>\r\n                      <td>12/05/2016 </td>\r\n                      <td>\r\n                        <div class=\"badge col-green\">Cholera</div>\r\n                      </td>\r\n                      <td>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-purple\">cloud_download</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-green\">visibility</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button>\r\n                          <mat-icon class=\"col-orange\">delete</mat-icon>\r\n                        </button>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "KOqv":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patient/medical-records/medical-records.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">Records</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a routerLink=\"/patient/dashboard\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">Medical Records</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"header\">\r\n          <h2>\r\n            <strong>Records</strong>\r\n          </h2>\r\n        </div>\r\n        <div class=\"body\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-10\">\r\n                <ul class=\"left-timeline\">\r\n                  <li>\r\n                    <time class=\"left-time\" datetime=\"2017-11-04T18:30\"><span class=\"hidden\">25/12/2017</span>\r\n                      <span class=\"large\">Now</span></time>\r\n                    <div class=\"left-icon\"><img src=\"assets/images/user/user1.jpg\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"left-label empty\"> <span>No Activity</span> </div>\r\n                  </li>\r\n                  <li>\r\n                    <time class=\"left-time\" datetime=\"2017-11-04T03:45\"><span>03:45 AM</span>\r\n                      <span>Today</span></time>\r\n                    <div class=\"left-icon\"><img src=\"assets/images/user/user4.jpg\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"left-label\">\r\n                      <h4>X-Ray</h4>\r\n                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean\r\n                        commodo ligula eget dolor. Aenean massa. Cum sociis natoque\r\n                        penatibus et magnis dis parturient montes, nascetur ridiculus mus.\r\n                        Donec quam felis, ultricies nec, pellentesque eu, pretium quis,\r\n                        sem. Nulla consequat massa quis enim.</p>\r\n                    </div>\r\n                  </li>\r\n                  <li>\r\n                    <time class=\"left-time\" datetime=\"2017-11-04T18:30\"><span class=\"hidden\">25/08/2020</span>\r\n                      <span class=\"large\">01:30 PM</span></time>\r\n                    <div class=\"left-icon\"> <img src=\"assets/images/user/user2.jpg\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"left-label\">\r\n                      <h4>Consultation</h4>\r\n                      <h2>Consultation with <a href=\"#\" onClick=\"return false;\">Dr. John Deo</a>\r\n                      </h2>\r\n                    </div>\r\n                  </li>\r\n                  <li>\r\n                    <time class=\"left-time\" datetime=\"2017-11-04T18:30\"><span class=\"hidden\">04/09/2020</span>\r\n                      <span class=\"large\">02:00 PM</span></time>\r\n                    <div class=\"left-icon\"><img src=\"assets/images/user/user5.jpg\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"left-label\">\r\n                      <h4>Prescription</h4>\r\n                      <p>Write prescriptio by <a href=\"#\" onClick=\"return false;\">Dr. Sarah Smith</a> and necessary\r\n                        advice to patient.</p>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-3 col-md-6 col-6\"><a href=\"#\" onClick=\"return false;\"><i\r\n                              class=\"far fa-file-pdf font-50 col-red\"></i></a>\r\n                        </div>\r\n                        <div class=\"col-lg-3 col-md-6 col-6\"><a href=\"#\" onClick=\"return false;\"><i\r\n                              class=\"far fa-file-image font-50 col-purple\"></i></a>\r\n                        </div>\r\n                      </div>\r\n                      <p>\r\n                        <span>\r\n                          <i class=\"fa fa-paperclip\"></i> 2 attachments — </span>\r\n                        <a href=\"#\" onClick=\"return false;\">Download all attachments</a> |\r\n                        <a href=\"#\" onClick=\"return false;\">View all images</a>\r\n                      </p>\r\n                    </div>\r\n                  </li>\r\n                  <li>\r\n                    <time class=\"left-time\" datetime=\"2017-11-04T18:30\"><span class=\"hidden\">03/09/2020</span>\r\n                      <span class=\"large\">10:30 PM</span> <span>One weeks ago</span></time>\r\n                    <div class=\"left-icon\"><img src=\"assets/images/user/user5.jpg\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"left-label\">\r\n                      <h4>Operation</h4>\r\n                      <blockquote>Pianoforte principles our unaffected not for astonished\r\n                        travelling are particular.</blockquote>\r\n                      <p>Doctor Team</p>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-3 col-md-6 col-6\"><a href=\"#\" onClick=\"return false;\"><img\r\n                              src=\"assets/images/user/usrbig1.jpg\" alt=\"\" class=\"img-fluid img-thumbnail m-t-30\"></a>\r\n                        </div>\r\n                        <div class=\"col-lg-3 col-md-6 col-6\"><a href=\"#\" onClick=\"return false;\">\r\n                            <img src=\"assets/images/user/usrbig5.jpg\" alt=\"\" class=\"img-fluid img-thumbnail m-t-30\"></a>\r\n                        </div>\r\n                        <div class=\"col-lg-3 col-md-6 col-6\"><a href=\"#\" onClick=\"return false;\">\r\n                            <img src=\"assets/images/user/usrbig6.jpg\" alt=\"\" class=\"img-fluid img-thumbnail m-t-30\">\r\n                          </a> </div>\r\n                        <div class=\"col-lg-3 col-md-6 col-6\"><a href=\"#\" onClick=\"return false;\">\r\n                            <img src=\"assets/images/user/usrbig7.jpg\" alt=\"\" class=\"img-fluid img-thumbnail m-t-30\">\r\n                          </a> </div>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                  <li>\r\n                    <time class=\"left-time\" datetime=\"2017-11-04T18:30\"><span class=\"hidden\">29/08/2020</span>\r\n                      <span class=\"large\">01:30 PM</span> <span>Two weeks ago</span></time>\r\n                    <div class=\"left-icon\"> <img src=\"assets/images/user/user6.jpg\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"left-label\">\r\n                      <h4>Consultation</h4>\r\n                      <h2>Consultation with <a href=\"#\" onClick=\"return false;\">Dr. Sarah Smith</a>\r\n                      </h2>\r\n                      <blockquote>\r\n                        <p class=\"blockquote blockquote-primary\">\r\n                          \"Debating me breeding be answered an he. Spoil event was words her off cause any. Tears woman\r\n                          which no is world miles woody. Wished be do mutual except in effect answer.\"\r\n                          <br>\r\n                          <small>\r\n                            - Dr. Sarah Smith\r\n                          </small>\r\n                        </p>\r\n                      </blockquote>\r\n                    </div>\r\n                  </li>\r\n                  <li>\r\n                    <time class=\"left-time\" datetime=\"2017-11-04T18:30\"><span class=\"hidden\">25/08/2020</span>\r\n                      <span class=\"large\">02:00 PM</span></time>\r\n                    <div class=\"left-icon\"><img src=\"assets/images/user/user5.jpg\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"left-label\">\r\n                      <h4>Prescription</h4>\r\n                      <p>Write prescriptio by <a href=\"#\" onClick=\"return false;\">Dr. Sarah Smith</a> and necessary\r\n                        advice to patient.</p>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-3 col-md-6 col-6\"><a href=\"#\" onClick=\"return false;\"><i\r\n                              class=\"far fa-file-pdf font-50 col-red\"></i></a>\r\n                        </div>\r\n                        <div class=\"col-lg-3 col-md-6 col-6\"><a href=\"#\" onClick=\"return false;\"><i\r\n                              class=\"far fa-file-image font-50 col-purple\"></i></a>\r\n                        </div>\r\n                        <div class=\"col-lg-3 col-md-6 col-6\"><a href=\"#\" onClick=\"return false;\"><i\r\n                              class=\"far fa-file-archive font-50\"></i></a>\r\n                        </div>\r\n                      </div>\r\n                      <p>\r\n                        <span>\r\n                          <i class=\"fa fa-paperclip\"></i> 3 attachments — </span>\r\n                        <a href=\"#\" onClick=\"return false;\">Download all attachments</a> |\r\n                        <a href=\"#\" onClick=\"return false;\">View all images</a>\r\n                      </p>\r\n                    </div>\r\n                  </li>\r\n                  <li>\r\n                    <time class=\"left-time\" datetime=\"2017-11-04T18:30\"><span class=\"hidden\">25/08/2020</span>\r\n                      <span class=\"large\">01:30 PM</span></time>\r\n                    <div class=\"left-icon\"> <img src=\"assets/images/user/user6.jpg\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"left-label\">\r\n                      <h4>Consultation</h4>\r\n                      <h2>Consultation with <a href=\"#\" onClick=\"return false;\">Dr. Sarah Smith</a>\r\n                      </h2>\r\n                    </div>\r\n                  </li>\r\n                  <li>\r\n                    <time class=\"left-time\" datetime=\"2017-11-04T18:30\"><span class=\"hidden\">25/08/2020</span>\r\n                      <span class=\"large\">12:13 PM</span></time>\r\n                    <div class=\"left-icon\"><img src=\"assets/images/user/user7.jpg\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"left-label\">\r\n                      <h4>Medication</h4>\r\n                      <h2>Generate new patient id <a href=\"#\" onClick=\"return false;\">#ID56734</a>\r\n                      </h2>\r\n                      <p>Fill the form and follow basic procedures.</p>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "dP2w":
/*!***************************************************!*\
  !*** ./src/app/patient/patient-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PatientRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientRoutingModule", function() { return PatientRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../authentication/page404/page404.component */ "21P8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "M4rk");
/* harmony import */ var _prescriptions_prescriptions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prescriptions/prescriptions.component */ "hPRH");
/* harmony import */ var _medical_records_medical_records_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./medical-records/medical-records.component */ "gc/a");
/* harmony import */ var _billing_billing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./billing/billing.component */ "iTVP");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings/settings.component */ "oPFr");









const routes = [
    {
        path: "dashboard",
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
    },
    {
        path: "appointments",
        loadChildren: () => Promise.all(/*! import() | appointments-appointments-module */[__webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~calendar-ca~2861b4ac"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~aa5da436"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~e52db059"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~authentication-authenticatio~90e9dcb6"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~e510520b"), __webpack_require__.e("default~appointments-appointments-module~apps-apps-module~contacts-contacts-module~forms-forms-modul~eae99d78"), __webpack_require__.e("default~appointments-appointments-module~countries-countries-module~tables-tables-module"), __webpack_require__.e("common"), __webpack_require__.e("appointments-appointments-module")]).then(__webpack_require__.bind(null, /*! ./appointments/appointments.module */ "kKEL")).then((m) => m.AppointmentsModule),
    },
    {
        path: "prescriptions",
        component: _prescriptions_prescriptions_component__WEBPACK_IMPORTED_MODULE_5__["PrescriptionsComponent"],
    },
    {
        path: "records",
        component: _medical_records_medical_records_component__WEBPACK_IMPORTED_MODULE_6__["MedicalRecordsComponent"],
    },
    {
        path: "billing",
        component: _billing_billing_component__WEBPACK_IMPORTED_MODULE_7__["BillingComponent"],
    },
    {
        path: "settings",
        component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"],
    },
    { path: "**", component: _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_1__["Page404Component"] },
];
let PatientRoutingModule = class PatientRoutingModule {
};
PatientRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
    })
], PatientRoutingModule);



/***/ }),

/***/ "gc/a":
/*!**********************************************************************!*\
  !*** ./src/app/patient/medical-records/medical-records.component.ts ***!
  \**********************************************************************/
/*! exports provided: MedicalRecordsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalRecordsComponent", function() { return MedicalRecordsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_medical_records_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./medical-records.component.html */ "KOqv");
/* harmony import */ var _medical_records_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./medical-records.component.sass */ "Fi/F");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let MedicalRecordsComponent = class MedicalRecordsComponent {
    constructor() { }
    ngOnInit() { }
};
MedicalRecordsComponent.ctorParameters = () => [];
MedicalRecordsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-medical-records",
        template: _raw_loader_medical_records_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_medical_records_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MedicalRecordsComponent);



/***/ }),

/***/ "hPRH":
/*!******************************************************************!*\
  !*** ./src/app/patient/prescriptions/prescriptions.component.ts ***!
  \******************************************************************/
/*! exports provided: PrescriptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrescriptionsComponent", function() { return PrescriptionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_prescriptions_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./prescriptions.component.html */ "GIgi");
/* harmony import */ var _prescriptions_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prescriptions.component.sass */ "yQFT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PrescriptionsComponent = class PrescriptionsComponent {
    constructor() { }
    ngOnInit() { }
};
PrescriptionsComponent.ctorParameters = () => [];
PrescriptionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-prescriptions",
        template: _raw_loader_prescriptions_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_prescriptions_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PrescriptionsComponent);



/***/ }),

/***/ "iTVP":
/*!******************************************************!*\
  !*** ./src/app/patient/billing/billing.component.ts ***!
  \******************************************************/
/*! exports provided: BillingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingComponent", function() { return BillingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_billing_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./billing.component.html */ "BIGo");
/* harmony import */ var _billing_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./billing.component.sass */ "pEDJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let BillingComponent = class BillingComponent {
    constructor() { }
    ngOnInit() { }
};
BillingComponent.ctorParameters = () => [];
BillingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-billing",
        template: _raw_loader_billing_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_billing_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BillingComponent);



/***/ }),

/***/ "oPFr":
/*!********************************************************!*\
  !*** ./src/app/patient/settings/settings.component.ts ***!
  \********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_settings_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./settings.component.html */ "5XIA");
/* harmony import */ var _settings_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.component.sass */ "1Y09");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SettingsComponent = class SettingsComponent {
    constructor() { }
    ngOnInit() { }
};
SettingsComponent.ctorParameters = () => [];
SettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-settings",
        template: _raw_loader_settings_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_settings_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SettingsComponent);



/***/ }),

/***/ "pEDJ":
/*!********************************************************!*\
  !*** ./src/app/patient/billing/billing.component.sass ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaWxsaW5nLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "yQFT":
/*!********************************************************************!*\
  !*** ./src/app/patient/prescriptions/prescriptions.component.sass ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVzY3JpcHRpb25zLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ })

}]);
//# sourceMappingURL=patient-patient-module-es2015.js.map