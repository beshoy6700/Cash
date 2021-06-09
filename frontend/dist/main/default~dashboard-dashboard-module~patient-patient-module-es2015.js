(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~patient-patient-module"],{

/***/ "M4rk":
/*!**********************************************************!*\
  !*** ./src/app/patient/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "shKz");
/* harmony import */ var _dashboard_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component.sass */ "lv5f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
        this.chart1();
        this.chart2();
        this.chart3();
        this.chart4();
    }
    chart1() {
        this.areaChartOptions = {
            series: [
                {
                    name: "New Patients",
                    data: [31, 40, 28, 51, 42, 85, 77],
                },
                {
                    name: "Old Patients",
                    data: [11, 32, 45, 32, 34, 52, 41],
                },
            ],
            chart: {
                height: 350,
                type: "area",
                toolbar: {
                    show: false,
                },
                foreColor: "#9aa0ac",
            },
            colors: ["#7D4988", "#66BB6A"],
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "2018-09-19T00:00:00.000Z",
                    "2018-09-19T01:30:00.000Z",
                    "2018-09-19T02:30:00.000Z",
                    "2018-09-19T03:30:00.000Z",
                    "2018-09-19T04:30:00.000Z",
                    "2018-09-19T05:30:00.000Z",
                    "2018-09-19T06:30:00.000Z",
                ],
            },
            legend: {
                show: true,
                position: "top",
                horizontalAlign: "center",
                offsetX: 0,
                offsetY: 0,
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
        };
    }
    chart2() {
        this.radialChartOptions = {
            series: [44, 55, 67],
            chart: {
                height: 265,
                type: "radialBar",
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: "22px",
                        },
                        value: {
                            fontSize: "16px",
                        },
                        total: {
                            show: true,
                            label: "Total",
                            formatter: function (w) {
                                return "249";
                            },
                        },
                    },
                },
            },
            colors: ["#ffc107", "#3f51b5", "#8bc34a"],
            labels: ["Face TO Face", "E-Consult", "Available"],
        };
    }
    chart3() {
        this.restRateChartOptions = {
            series: [
                {
                    name: "Heart Rate",
                    data: [69, 75, 72, 69, 75, 80, 87],
                },
            ],
            chart: {
                height: 350,
                type: "line",
                dropShadow: {
                    enabled: true,
                    color: "#000",
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2,
                },
                foreColor: "#9aa0ac",
                toolbar: {
                    show: false,
                },
            },
            colors: ["#FCB939"],
            dataLabels: {
                enabled: true,
            },
            stroke: {
                curve: "smooth",
            },
            markers: {
                size: 1,
            },
            xaxis: {
                categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                title: {
                    text: "Weekday",
                },
            },
            yaxis: {
                title: {
                    text: "Heart Rate",
                },
            },
            tooltip: {
                theme: "dark",
                marker: {
                    show: true,
                },
                x: {
                    show: true,
                },
            },
        };
    }
    chart4() {
        this.performanceRateChartOptions = {
            series: [
                {
                    name: "Heart Rate",
                    data: [113, 120, 130, 120, 125, 119, 126],
                },
            ],
            chart: {
                height: 350,
                type: "line",
                dropShadow: {
                    enabled: true,
                    color: "#000",
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2,
                },
                foreColor: "#9aa0ac",
                toolbar: {
                    show: false,
                },
            },
            colors: ["#545454"],
            dataLabels: {
                enabled: true,
            },
            stroke: {
                curve: "smooth",
            },
            markers: {
                size: 1,
            },
            xaxis: {
                categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                title: {
                    text: "Weekday",
                },
            },
            yaxis: {
                title: {
                    text: "Heart Rate",
                },
            },
            tooltip: {
                theme: "dark",
                marker: {
                    show: true,
                },
                x: {
                    show: true,
                },
            },
        };
    }
};
DashboardComponent.ctorParameters = () => [];
DashboardComponent.propDecorators = {
    chart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["chart",] }]
};
DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-dashboard",
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DashboardComponent);



/***/ }),

/***/ "lv5f":
/*!************************************************************!*\
  !*** ./src/app/patient/dashboard/dashboard.component.sass ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "shKz":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patient/dashboard/dashboard.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">Dashboard</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a routerLink=\"/patient/dashboard\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">Patient Dashboard</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Widgets -->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"card\">\r\n          <div class=\"body\">\r\n            <div class=\"row align-items-center\">\r\n              <div class=\"col-md-4\">\r\n                <img src=\"assets/images/pages/welcome.png\" alt=\"\" class=\"w-100\">\r\n              </div>\r\n              <div class=\"col-md-8\">\r\n                <h4 class=\"font-20 weight-500 mb-2\">\r\n                  Welcome back <div class=\"weight-600 font-30 col-blue pt-1\">Sarah Smith!</div>\r\n                </h4>\r\n                <p class=\"font-18 max-width-600\">We would like to take this opportunity to welcome you to our practice\r\n                  and to thank you\r\n                  for choosing our physicians to participate in your healthcare. We look forward to\r\n                  providing you with personalized, comprehensive health care focusing on wellness and\r\n                  prevention.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- #END# Widgets -->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-md-3 col-sm-12\">\r\n        <div class=\"card card-statistic-2\">\r\n          <div class=\"clearfix\">\r\n            <div class=\"card-icon-only shadow-primary float-start\">\r\n              <img src=\"assets/images/pages/blood-pressure.png\" alt=\"\">\r\n            </div>\r\n            <div class=\"card-right\">\r\n              <div>\r\n                <h5 class=\"pull-right\">Blood Pressure</h5>\r\n              </div>\r\n              <div class=\"col-green\">\r\n                <h3 class=\"font-weight-bold pull-right mb-0\"> 110/70</h3>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-content msl-4 mb-3\">\r\n            <p class=\"m-b-0 d-flex\"><i class=\"material-icons col-green pr-2\">trending_up</i> 10% Higher Then Last Month\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-md-3 col-sm-12\">\r\n        <div class=\"card card-statistic-2\">\r\n          <div class=\"clearfix\">\r\n            <div class=\"card-icon-only shadow-primary float-start\">\r\n              <img src=\"assets/images/pages/heart-rate.png\" alt=\"\">\r\n            </div>\r\n            <div class=\"card-right\">\r\n              <div>\r\n                <h5 class=\"pull-right\">Blood Pressure</h5>\r\n              </div>\r\n              <div class=\"col-green\">\r\n                <h3 class=\"font-weight-bold pull-right mb-0\">650</h3>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-content msl-4 mb-3\">\r\n            <p class=\"m-b-0 d-flex\"><i class=\"material-icons col-orange pr-2\">trending_down</i> 07% Less Then Last Month\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-md-3 col-sm-12\">\r\n        <div class=\"card card-statistic-2\">\r\n          <div class=\"clearfix\">\r\n            <div class=\"card-icon-only shadow-primary float-start\">\r\n              <img src=\"assets/images/pages/glucose.png\" alt=\"\">\r\n            </div>\r\n            <div class=\"card-right\">\r\n              <div>\r\n                <h5 class=\"pull-right\">Glucose Level</h5>\r\n              </div>\r\n              <div class=\"col-green\">\r\n                <h3 class=\"font-weight-bold pull-right mb-0\">88-75</h3>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-content msl-4 mb-3\">\r\n            <p class=\"m-b-0 d-flex\"><i class=\"material-icons col-green pr-2\">trending_up</i> 12% Higher Then Last Month\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-md-3 col-sm-12\">\r\n        <div class=\"card card-statistic-2\">\r\n          <div class=\"clearfix\">\r\n            <div class=\"card-icon-only shadow-primary float-start\">\r\n              <img src=\"assets/images/pages/blood-count.png\" alt=\"\">\r\n            </div>\r\n            <div class=\"card-right\">\r\n              <div>\r\n                <h5 class=\"pull-right\">Blood Count</h5>\r\n              </div>\r\n              <div class=\"col-green\">\r\n                <h3 class=\"font-weight-bold pull-right mb-0\">9,456/mL</h3>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-content msl-4 mb-3\">\r\n            <p class=\"m-b-0 d-flex\"><i class=\"material-icons col-orange pr-2\">trending_down</i> 22% Less Then Last Month\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-4 col-lg-4 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <div class=\"pull-left\">\r\n              <h6 class=\"text-muted\">Resting Heart Rate</h6>\r\n              <h5>72 bmp <span class=\"text-muted font-12\">(Average)</span></h5>\r\n            </div>\r\n            <div class=\"mb-5\">\r\n              <apx-chart [series]=\"restRateChartOptions.series\" [chart]=\"restRateChartOptions.chart\"\r\n                [xaxis]=\"restRateChartOptions.xaxis\" [stroke]=\"restRateChartOptions.stroke\"\r\n                [colors]=\"restRateChartOptions.colors\" [dataLabels]=\"restRateChartOptions.dataLabels\"\r\n                [legend]=\"restRateChartOptions.legend\" [markers]=\"restRateChartOptions.markers\"\r\n                [grid]=\"restRateChartOptions.grid\" [yaxis]=\"restRateChartOptions.yaxis\"\r\n                [tooltip]=\"restRateChartOptions.tooltip\" [title]=\"restRateChartOptions.title\"></apx-chart>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xl-4 col-lg-4 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <div class=\"pull-left\">\r\n              <h6 class=\"text-muted\">Performance Heart Rate</h6>\r\n              <h5>129 bmp <span class=\"text-muted font-12\">(Average)</span></h5>\r\n            </div>\r\n            <div class=\"mb-5\">\r\n              <apx-chart [series]=\"performanceRateChartOptions.series\" [chart]=\"performanceRateChartOptions.chart\"\r\n                [xaxis]=\"performanceRateChartOptions.xaxis\" [stroke]=\"performanceRateChartOptions.stroke\"\r\n                [colors]=\"performanceRateChartOptions.colors\" [dataLabels]=\"performanceRateChartOptions.dataLabels\"\r\n                [legend]=\"performanceRateChartOptions.legend\" [markers]=\"performanceRateChartOptions.markers\"\r\n                [grid]=\"performanceRateChartOptions.grid\" [yaxis]=\"performanceRateChartOptions.yaxis\"\r\n                [tooltip]=\"performanceRateChartOptions.tooltip\" [title]=\"performanceRateChartOptions.title\"></apx-chart>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xl-4 col-lg-4 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Medications</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table table-borderless medicine-list\">\r\n                <tr>\r\n                  <td><i class=\"fas fa-tablets pill-style\"></i> Econochlor (chloramphenicol-oral)</td>\r\n                  <td class=\"text-end w-25\">\r\n                    <span class=\"badge-outline\">1 - 0 - 1</span>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td><i class=\"fas fa-capsules pill-style\"></i> Desmopressin tabs</td>\r\n                  <td class=\"text-end w-25\">\r\n                    <span class=\"badge-outline\">1 - 1 - 1</span>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td><i class=\"fas fa-syringe pill-style\"></i> Abciximab-injection</td>\r\n                  <td class=\"text-end w-25\">\r\n                    <span class=\"badge-outline\">1 Daily</span>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td><i class=\"fas fa-pills pill-style\"></i> Kevzara sarilumab</td>\r\n                  <td class=\"text-end w-25\">\r\n                    <span class=\"badge-outline\">0 - 0 - 1</span>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td><i class=\"fas fa-capsules pill-style\"></i> Gentamicin-topical</td>\r\n                  <td class=\"text-end w-25\">\r\n                    <span class=\"badge-outline\">1 - 0 - 1</span>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td><i class=\"fas fa-tablets pill-style\"></i> Paliperidone palmitate</td>\r\n                  <td class=\"text-end w-25\">\r\n                    <span class=\"badge-outline\">1 - 1 - 1</span>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td><i class=\"fas fa-syringe pill-style\"></i> Sermorelin-injectable</td>\r\n                  <td class=\"text-end w-25\">\r\n                    <span class=\"badge-outline\">1 Daily</span>\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n            <div class=\"text-center p-t-20\">\r\n              <button mat-stroked-button color=\"primary\">Report Adverse Effect</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8\">\r\n        <div class=\"card\">\r\n          <div class=\"body\">\r\n            <mat-tab-group dynamicHeight>\r\n              <mat-tab label=\"Upcoming Appointment\">\r\n                <ul class=\"list-unstyled list-unstyled-border list-unstyled-noborder\">\r\n                  <li class=\"app-list\">\r\n                    <img alt=\"image\" class=\"rounded-circle\" width=\"40\" src=\"assets/images/user/usrbig1.jpg\">\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title font-16\">Dr.Cara Stevens</div>\r\n                      <div class=\"text-job text-muted mb-0\">Radiologist</div>\r\n                    </div>\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title font-16\">12 June '20</div>\r\n                      <div class=\"text-job text-muted mb-0\">09:00-10:00</div>\r\n                    </div>\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title text-muted mb-0\">Treatement</div>\r\n                      <div class=\"text-job font-16\">CT scans</div>\r\n                    </div>\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title text-muted mb-0\">Contact Number</div>\r\n                      <div class=\"text-job font-16\">+123 676545655</div>\r\n                    </div>\r\n                    <div class=\"media-cta\">\r\n                      <td>\r\n                        <button mat-icon-button class=\"btn-tbl-confirm\">\r\n                          <mat-icon>done</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button class=\"btn-tbl-reject\">\r\n                          <mat-icon>close</mat-icon>\r\n                        </button>\r\n                      </td>\r\n                    </div>\r\n                  </li>\r\n                  <li class=\"app-list\">\r\n                    <img alt=\"image\" class=\"rounded-circle\" width=\"40\" src=\"assets/images/user/usrbig2.jpg\">\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title font-16\">Dr.John Doe</div>\r\n                      <div class=\"text-job text-muted mb-0\">Cardiologist</div>\r\n                    </div>\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title font-16\">13 June '20</div>\r\n                      <div class=\"text-job text-muted mb-0\">11:00-11:30</div>\r\n                    </div>\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title text-muted mb-0\">Treatement</div>\r\n                      <div class=\"text-job font-16\">heart checkup</div>\r\n                    </div>\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title text-muted mb-0\">Contact Number</div>\r\n                      <div class=\"text-job font-16\">+123 434656764</div>\r\n                    </div>\r\n                    <div class=\"media-cta\">\r\n                      <td>\r\n                        <button mat-icon-button class=\"btn-tbl-confirm\">\r\n                          <mat-icon>done</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button class=\"btn-tbl-reject\">\r\n                          <mat-icon>close</mat-icon>\r\n                        </button>\r\n                      </td>\r\n                    </div>\r\n                  </li>\r\n                  <li class=\"app-list\">\r\n                    <img alt=\"image\" class=\"rounded-circle\" width=\"40\" src=\"assets/images/user/usrbig3.jpg\">\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title font-16\">Dr.Airi Satou</div>\r\n                      <div class=\"text-job text-muted mb-0\">Otolaryngologist</div>\r\n                    </div>\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title font-16\">12 June '20</div>\r\n                      <div class=\"text-job text-muted mb-0\">09:15-10:15 </div>\r\n                    </div>\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title text-muted mb-0\">Treatement</div>\r\n                      <div class=\"text-job font-16\">Diseases Of The Ear</div>\r\n                    </div>\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title text-muted mb-0\">Contact Number</div>\r\n                      <div class=\"text-job font-16\">+123 45345673</div>\r\n                    </div>\r\n                    <div class=\"media-cta\">\r\n                      <td>\r\n                        <button mat-icon-button class=\"btn-tbl-confirm\">\r\n                          <mat-icon>done</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button class=\"btn-tbl-reject\">\r\n                          <mat-icon>close</mat-icon>\r\n                        </button>\r\n                      </td>\r\n                    </div>\r\n                  </li>\r\n                  <li class=\"app-list\">\r\n                    <img alt=\"image\" class=\"rounded-circle\" width=\"40\" src=\"assets/images/user/usrbig4.jpg\">\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title font-16\">Dr.Angelica Ramos</div>\r\n                      <div class=\"text-job text-muted mb-0\">Dentist</div>\r\n                    </div>\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title font-16\">12 June '20</div>\r\n                      <div class=\"text-job text-muted mb-0\">11:00-12:00</div>\r\n                    </div>\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title text-muted mb-0\">Treatement</div>\r\n                      <div class=\"text-job font-16\">Root Canal</div>\r\n                    </div>\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title text-muted mb-0\">Contact Number</div>\r\n                      <div class=\"text-job font-16\">+123 87654533</div>\r\n                    </div>\r\n                    <div class=\"media-cta\">\r\n                      <td>\r\n                        <button mat-icon-button class=\"btn-tbl-confirm\">\r\n                          <mat-icon>done</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button class=\"btn-tbl-reject\">\r\n                          <mat-icon>close</mat-icon>\r\n                        </button>\r\n                      </td>\r\n                    </div>\r\n                  </li>\r\n                  <li class=\"app-list\">\r\n                    <img alt=\"image\" class=\"rounded-circle\" width=\"40\" src=\"assets/images/user/usrbig6.jpg\">\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title font-16\">Dr.Jens Brincker</div>\r\n                      <div class=\"text-job text-muted mb-0\">Endocrinologist</div>\r\n                    </div>\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title font-16\">23 June '20</div>\r\n                      <div class=\"text-job text-muted mb-0\">04:00-05:00</div>\r\n                    </div>\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title text-muted mb-0\">Treatement</div>\r\n                      <div class=\"text-job font-16\">Diabetes</div>\r\n                    </div>\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title text-muted mb-0\">Contact Number</div>\r\n                      <div class=\"text-job font-16\">+123 45678345</div>\r\n                    </div>\r\n                    <div class=\"media-cta\">\r\n                      <td>\r\n                        <button mat-icon-button class=\"btn-tbl-confirm\">\r\n                          <mat-icon>done</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button class=\"btn-tbl-reject\">\r\n                          <mat-icon>close</mat-icon>\r\n                        </button>\r\n                      </td>\r\n                    </div>\r\n                  </li>\r\n                  <li class=\"app-list\">\r\n                    <img alt=\"image\" class=\"rounded-circle\" width=\"40\" src=\"assets/images/user/usrbig7.jpg\">\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title font-16\">Dr.Airi Satou</div>\r\n                      <div class=\"text-job text-muted mb-0\">Otolaryngologist</div>\r\n                    </div>\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title font-16\">12 June '20</div>\r\n                      <div class=\"text-job text-muted mb-0\">09:15-10:15 </div>\r\n                    </div>\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title text-muted mb-0\">Treatement</div>\r\n                      <div class=\"text-job font-16\">Diseases Of The Ear</div>\r\n                    </div>\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title text-muted mb-0\">Contact Number</div>\r\n                      <div class=\"text-job font-16\">+123 45345673</div>\r\n                    </div>\r\n                    <div class=\"media-cta\">\r\n                      <td>\r\n                        <button mat-icon-button class=\"btn-tbl-confirm\">\r\n                          <mat-icon>done</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button class=\"btn-tbl-reject\">\r\n                          <mat-icon>close</mat-icon>\r\n                        </button>\r\n                      </td>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </mat-tab>\r\n              <mat-tab label=\"Past Appointment\">\r\n                <ul class=\"list-unstyled user-progress list-unstyled-border list-unstyled-noborder\">\r\n                  <li class=\"app-list\">\r\n                    <img alt=\"image\" class=\"rounded-circle\" width=\"40\" src=\"assets/images/user/usrbig7.jpg\">\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title font-16\">Dr.Jens Brincker</div>\r\n                      <div class=\"text-job text-muted mb-0\">Endocrinologist</div>\r\n                    </div>\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title font-16\">23 June '20</div>\r\n                      <div class=\"text-job text-muted mb-0\">04:00-05:00</div>\r\n                    </div>\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title text-muted mb-0\">Treatement</div>\r\n                      <div class=\"text-job font-16\">Diabetes</div>\r\n                    </div>\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title text-muted mb-0\">Contact Number</div>\r\n                      <div class=\"text-job font-16\">+123 45678345</div>\r\n                    </div>\r\n                    <div class=\"media-cta\">\r\n                      <td>\r\n                        <button mat-icon-button class=\"btn-tbl-confirm\">\r\n                          <mat-icon>done</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button class=\"btn-tbl-reject\">\r\n                          <mat-icon>close</mat-icon>\r\n                        </button>\r\n                      </td>\r\n                    </div>\r\n                  </li>\r\n                  <li class=\"app-list\">\r\n                    <img alt=\"image\" class=\"rounded-circle\" width=\"40\" src=\"assets/images/user/usrbig6.jpg\">\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title font-16\">Dr.John Doe</div>\r\n                      <div class=\"text-job text-muted mb-0\">Cardiologist</div>\r\n                    </div>\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title font-16\">13 June '20</div>\r\n                      <div class=\"text-job text-muted mb-0\">11:00-11:30</div>\r\n                    </div>\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title text-muted mb-0\">Treatement</div>\r\n                      <div class=\"text-job font-16\">heart checkup</div>\r\n                    </div>\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title text-muted mb-0\">Contact Number</div>\r\n                      <div class=\"text-job font-16\">+123 434656764</div>\r\n                    </div>\r\n                    <div class=\"media-cta\">\r\n                      <td>\r\n                        <button mat-icon-button class=\"btn-tbl-confirm\">\r\n                          <mat-icon>done</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button class=\"btn-tbl-reject\">\r\n                          <mat-icon>close</mat-icon>\r\n                        </button>\r\n                      </td>\r\n                    </div>\r\n                  </li>\r\n                  <li class=\"app-list\">\r\n                    <img alt=\"image\" class=\"rounded-circle\" width=\"40\" src=\"assets/images/user/usrbig8.jpg\">\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title font-16\">Dr.Cara Stevens</div>\r\n                      <div class=\"text-job text-muted mb-0\">Radiologist</div>\r\n                    </div>\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title font-16\">12 June '20</div>\r\n                      <div class=\"text-job text-muted mb-0\">09:00-10:00</div>\r\n                    </div>\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title text-muted mb-0\">Treatement</div>\r\n                      <div class=\"text-job font-16\">CT scans</div>\r\n                    </div>\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title text-muted mb-0\">Contact Number</div>\r\n                      <div class=\"text-job font-16\">+123 676545655</div>\r\n                    </div>\r\n                    <div class=\"media-cta\">\r\n                      <td>\r\n                        <button mat-icon-button class=\"btn-tbl-confirm\">\r\n                          <mat-icon>done</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button class=\"btn-tbl-reject\">\r\n                          <mat-icon>close</mat-icon>\r\n                        </button>\r\n                      </td>\r\n                    </div>\r\n                  </li>\r\n                  <li class=\"app-list\">\r\n                    <img alt=\"image\" class=\"rounded-circle\" width=\"40\" src=\"assets/images/user/usrbig9.jpg\">\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title font-16\">Dr.Airi Satou</div>\r\n                      <div class=\"text-job text-muted mb-0\">Otolaryngologist</div>\r\n                    </div>\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title font-16\">12 June '20</div>\r\n                      <div class=\"text-job text-muted mb-0\">09:15-10:15 </div>\r\n                    </div>\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title text-muted mb-0\">Treatement</div>\r\n                      <div class=\"text-job font-16\">Diseases Of The Ear</div>\r\n                    </div>\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title text-muted mb-0\">Contact Number</div>\r\n                      <div class=\"text-job font-16\">+123 45345673</div>\r\n                    </div>\r\n                    <div class=\"media-cta\">\r\n                      <td>\r\n                        <button mat-icon-button class=\"btn-tbl-confirm\">\r\n                          <mat-icon>done</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button class=\"btn-tbl-reject\">\r\n                          <mat-icon>close</mat-icon>\r\n                        </button>\r\n                      </td>\r\n                    </div>\r\n                  </li>\r\n                  <li class=\"app-list\">\r\n                    <img alt=\"image\" class=\"rounded-circle\" width=\"40\" src=\"assets/images/user/usrbig5.jpg\">\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title font-16\">Dr.Angelica Ramos</div>\r\n                      <div class=\"text-job text-muted mb-0\">Dentist</div>\r\n                    </div>\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title font-16\">12 June '20</div>\r\n                      <div class=\"text-job text-muted mb-0\">11:00-12:00</div>\r\n                    </div>\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title text-muted mb-0\">Treatement</div>\r\n                      <div class=\"text-job font-16\">Root Canal</div>\r\n                    </div>\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title text-muted mb-0\">Contact Number</div>\r\n                      <div class=\"text-job font-16\">+123 87654533</div>\r\n                    </div>\r\n                    <div class=\"media-cta\">\r\n                      <td>\r\n                        <button mat-icon-button class=\"btn-tbl-confirm\">\r\n                          <mat-icon>done</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button class=\"btn-tbl-reject\">\r\n                          <mat-icon>close</mat-icon>\r\n                        </button>\r\n                      </td>\r\n                    </div>\r\n                  </li>\r\n                  <li class=\"app-list\">\r\n                    <img alt=\"image\" class=\"rounded-circle\" width=\"40\" src=\"assets/images/user/usrbig10.jpg\">\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title font-16\">Dr.John Doe</div>\r\n                      <div class=\"text-job text-muted mb-0\">Cardiologist</div>\r\n                    </div>\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title font-16\">13 June '20</div>\r\n                      <div class=\"text-job text-muted mb-0\">11:00-11:30</div>\r\n                    </div>\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title text-muted mb-0\">Treatement</div>\r\n                      <div class=\"text-job font-16\">heart checkup</div>\r\n                    </div>\r\n                    <div class=\"set-flex\">\r\n                      <div class=\"media-title text-muted mb-0\">Contact Number</div>\r\n                      <div class=\"text-job font-16\">+123 434656764</div>\r\n                    </div>\r\n                    <div class=\"media-cta\">\r\n                      <td>\r\n                        <button mat-icon-button class=\"btn-tbl-confirm\">\r\n                          <mat-icon>done</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button class=\"btn-tbl-reject\">\r\n                          <mat-icon>close</mat-icon>\r\n                        </button>\r\n                      </td>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </mat-tab>\r\n            </mat-tab-group>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Reports/Documents</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <ul class=\"list-unstyled list-unstyled-border list-unstyled-noborder\">\r\n              <li class=\"report-list\">\r\n                <div class=\"d-flex\">\r\n                  <i class=\"far fa-file-pdf file-style col-red font-20\"></i>\r\n                  <div class=\"media-title font-16\">Blood Report</div>\r\n                </div>\r\n                <div class=\"ms-auto\">\r\n                  <td>\r\n                    <i class=\"far fa-trash-alt\"></i>\r\n                    <i class=\"far fa-arrow-alt-circle-down\"></i>\r\n                  </td>\r\n                </div>\r\n              </li>\r\n              <li class=\"report-list\">\r\n                <div class=\"d-flex\">\r\n                  <i class=\"far fa-file-word col-blue font-20 file-style\"></i>\r\n                  <div class=\"media-title font-16\">Mediclaim Documents</div>\r\n                </div>\r\n                <div class=\"ms-auto\">\r\n                  <td>\r\n                    <i class=\"far fa-trash-alt\"></i>\r\n                    <i class=\"far fa-arrow-alt-circle-down\"></i>\r\n                  </td>\r\n                </div>\r\n              </li>\r\n              <li class=\"report-list\">\r\n                <div class=\"d-flex\">\r\n                  <i class=\"far fa-file-alt col-black font-20 file-style\"></i>\r\n                  <div class=\"media-title font-16\">Doctor Prescription</div>\r\n                </div>\r\n                <div class=\"ms-auto\">\r\n                  <td>\r\n                    <i class=\"far fa-trash-alt\"></i>\r\n                    <i class=\"far fa-arrow-alt-circle-down\"></i>\r\n                  </td>\r\n                </div>\r\n              </li>\r\n              <li class=\"report-list\">\r\n                <div class=\"d-flex\">\r\n                  <i class=\"far fa-file-archive col-purple font-20 file-style\"></i>\r\n                  <div class=\"media-title font-16\">X-Ray Files</div>\r\n                </div>\r\n                <div class=\"ms-auto\">\r\n                  <td>\r\n                    <i class=\"far fa-trash-alt\"></i>\r\n                    <i class=\"far fa-arrow-alt-circle-down\"></i>\r\n                  </td>\r\n                </div>\r\n              </li>\r\n              <li class=\"report-list\">\r\n                <div class=\"d-flex\">\r\n                  <i class=\"far fa-file-pdf col-red font-20 file-style\"></i>\r\n                  <div class=\"media-title font-16\">Urine Report</div>\r\n                </div>\r\n                <div class=\"ms-auto\">\r\n                  <td>\r\n                    <i class=\"far fa-trash-alt\"></i>\r\n                    <i class=\"far fa-arrow-alt-circle-down\"></i>\r\n                  </td>\r\n                </div>\r\n              </li>\r\n              <li class=\"report-list\">\r\n                <div class=\"d-flex\">\r\n                  <i class=\"far fa-file-image col-teal font-20 file-style\"></i>\r\n                  <div class=\"media-title font-16\">Scanned Documents</div>\r\n                </div>\r\n                <div class=\"ms-auto\">\r\n                  <td>\r\n                    <i class=\"far fa-trash-alt\"></i>\r\n                    <i class=\"far fa-arrow-alt-circle-down\"></i>\r\n                  </td>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ })

}]);
//# sourceMappingURL=default~dashboard-dashboard-module~patient-patient-module-es2015.js.map