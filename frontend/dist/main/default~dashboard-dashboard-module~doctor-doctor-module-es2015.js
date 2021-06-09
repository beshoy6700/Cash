(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~doctor-doctor-module"],{

/***/ "ERaj":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/doctor/dashboard/dashboard.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">Dashboard</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a routerLink=\"/doctor/dashboard\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">Doctor Dashboard</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Widgets -->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"info-box7 l-bg-card1 order-info-box7\">\r\n          <div class=\"info-box7-block\">\r\n            <h5 class=\"m-b-15\">Todays Patients</h5>\r\n            <h2 class=\"text-end\"><i class=\"fas fa-user-injured pull-left\"></i><span>231</span></h2>\r\n            <p class=\"m-b-0\">18% Higher Then Last Month</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"info-box7 l-bg-card2 order-info-box7\">\r\n          <div class=\"info-box7-block\">\r\n            <h5 class=\"m-b-15\">Appointments</h5>\r\n            <h2 class=\"text-end\"><i class=\"far fa-calendar-check pull-left\"></i><span>122</span></h2>\r\n            <p class=\"m-b-0\">21% Higher Then Last Month</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"info-box7 l-bg-card3 order-info-box7\">\r\n          <div class=\"info-box7-block\">\r\n            <h5 class=\"m-b-15\">Todays Operations</h5>\r\n            <h2 class=\"text-end\"><i class=\"fas fa-cut pull-left\"></i><span>28</span></h2>\r\n            <p class=\"m-b-0\">37% Higher Then Last Month</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"info-box7 l-bg-card4 order-info-box7\">\r\n          <div class=\"info-box7-block\">\r\n            <h5 class=\"m-b-15\">Online Appointment</h5>\r\n            <h2 class=\"text-end\"><i class=\"fab fa-internet-explorer pull-left\"></i><span>42</span></h2>\r\n            <p class=\"m-b-0\">10% Higher Then Last Month</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- #END# Widgets -->\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-8 col-lg-8 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>\r\n              Patients Survay</h2>\r\n\r\n          </div>\r\n          <div class=\"body\">\r\n            <apx-chart [series]=\"areaChartOptions.series\" [chart]=\"areaChartOptions.chart\"\r\n              [xaxis]=\"areaChartOptions.xaxis\" [yaxis]=\"areaChartOptions.yaxis\" [colors]=\"areaChartOptions.colors\"\r\n              [stroke]=\"areaChartOptions.stroke\" [legend]=\"areaChartOptions.legend\" [tooltip]=\"areaChartOptions.tooltip\"\r\n              [dataLabels]=\"areaChartOptions.dataLabels\"></apx-chart>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xl-4 col-lg-4 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Appointment Review</h2>\r\n\r\n          </div>\r\n          <div class=\"body\">\r\n            <apx-chart [series]=\"radialChartOptions.series\" [chart]=\"radialChartOptions.chart\"\r\n              [plotOptions]=\"radialChartOptions.plotOptions\" [labels]=\"radialChartOptions.labels\"></apx-chart>\r\n            <div class=\"text-center p-t-20\">\r\n              <div class=\"chart-note\">\r\n                <span class=\"dot bg-orange\"></span>\r\n                <span>Face To Face</span>\r\n              </div>\r\n              <div class=\"chart-note\">\r\n                <span class=\"dot bg-indigo\"></span>\r\n                <span>E-Consult</span>\r\n              </div>\r\n              <div class=\"chart-note msr-0\">\r\n                <span class=\"dot bg-green\"></span>\r\n                <span>Available</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"text-center p-t-20\">\r\n              <button mat-stroked-button color=\"primary\">Modify Availability</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>\r\n              Todays Appointment</h2>\r\n\r\n          </div>\r\n          <div class=\"tableBody\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table table-hover \">\r\n                <thead>\r\n                  <tr>\r\n                    <th>#</th>\r\n                    <th>Patient Name</th>\r\n                    <th>Gender</th>\r\n                    <th>Last Visit</th>\r\n                    <th>Diseases</th>\r\n                    <th>Report</th>\r\n                    <th>Details </th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td class=\"table-img\">\r\n                      <img src=\"assets/images/user/user1.jpg\" alt=\"\">\r\n                    </td>\r\n                    <td>John Doe</td>\r\n                    <td>Male</td>\r\n                    <td>12/05/2016 </td>\r\n                    <td>\r\n                      <div class=\"badge col-red\">Fever</div>\r\n                    </td>\r\n                    <td>\r\n                      <i class=\"far fa-file-pdf tbl-pdf\"></i>\r\n                    </td>\r\n                    <td>\r\n                      <button mat-flat-button color=\"primary\">Details</button>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"table-img\">\r\n                      <img src=\"assets/images/user/user2.jpg\" alt=\"\">\r\n                    </td>\r\n                    <td>Sarah Smith</td>\r\n                    <td>Female</td>\r\n                    <td>12/05/2016 </td>\r\n                    <td>\r\n                      <div class=\"badge col-green\">Cholera</div>\r\n                    </td>\r\n                    <td>\r\n                      <i class=\"far fa-file-pdf tbl-pdf\"></i>\r\n                    </td>\r\n                    <td>\r\n                      <button mat-flat-button color=\"primary\">Details</button>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"table-img\">\r\n                      <img src=\"assets/images/user/user3.jpg\" alt=\"\">\r\n                    </td>\r\n                    <td>Airi Satou</td>\r\n                    <td>Male</td>\r\n                    <td>12/05/2016 </td>\r\n                    <td>\r\n                      <div class=\"badge col-purple\">Jaundice</div>\r\n                    </td>\r\n                    <td>\r\n                      <i class=\"far fa-file-pdf tbl-pdf\"></i>\r\n                    </td>\r\n                    <td>\r\n                      <button mat-flat-button color=\"primary\">Details</button>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"table-img\">\r\n                      <img src=\"assets/images/user/user4.jpg\" alt=\"\">\r\n                    </td>\r\n                    <td>Angelica Ramos</td>\r\n                    <td>Female</td>\r\n                    <td>12/05/2016 </td>\r\n                    <td>\r\n                      <div class=\"badge col-purple\">Typhod</div>\r\n                    </td>\r\n                    <td>\r\n                      <i class=\"far fa-file-pdf tbl-pdf\"></i>\r\n                    </td>\r\n                    <td>\r\n                      <button mat-flat-button color=\"primary\">Details</button>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"table-img\">\r\n                      <img src=\"assets/images/user/user5.jpg\" alt=\"\">\r\n                    </td>\r\n                    <td>Ashton Cox</td>\r\n                    <td>Female</td>\r\n                    <td>12/05/2016 </td>\r\n                    <td>\r\n                      <div class=\"badge col-orange\">Maleria</div>\r\n                    </td>\r\n                    <td>\r\n                      <i class=\"far fa-file-pdf tbl-pdf\"></i>\r\n                    </td>\r\n                    <td>\r\n                      <button mat-flat-button color=\"primary\">Details</button>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"table-img\">\r\n                      <img src=\"assets/images/user/user8.jpg\" alt=\"\">\r\n                    </td>\r\n                    <td>Cara Stevens</td>\r\n                    <td>Male</td>\r\n                    <td>12/05/2016 </td>\r\n                    <td>\r\n                      <div class=\"badge col-cyan\">Infection</div>\r\n                    </td>\r\n                    <td>\r\n                      <i class=\"far fa-file-pdf tbl-pdf\"></i>\r\n                    </td>\r\n                    <td>\r\n                      <button mat-flat-button color=\"primary\">Details</button>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Patients Group</h2>\r\n          </div>\r\n          <div class=\"list-body\">\r\n            <ul class=\"list-unstyled list-unstyled-noborder\">\r\n              <li class=\"patient-group-list\">\r\n                <div class=\"d-flex\">\r\n                  <div class=\"lbl-bedge l-bg-orange\">\r\n                    <span class=\"lbl-bedge-title\">C</span>\r\n                  </div>\r\n                  <div class=\"group-details font-16\">Cholesterol</div>\r\n                </div>\r\n                <div class=\"ms-auto\">\r\n                  <div class=\"media-title text-muted mb-0 font-14\">5 Patients</div>\r\n                </div>\r\n              </li>\r\n              <li class=\"patient-group-list\">\r\n                <div class=\"d-flex\">\r\n                  <div class=\"lbl-bedge l-bg-card1\">\r\n                    <span class=\"lbl-bedge-title\">D</span>\r\n                  </div>\r\n                  <div class=\"group-details font-16\">Diabetic</div>\r\n                </div>\r\n                <div class=\"ms-auto\">\r\n                  <div class=\"media-title text-muted mb-0 font-14\">14 Patients</div>\r\n                </div>\r\n              </li>\r\n              <li class=\"patient-group-list\">\r\n                <div class=\"d-flex\">\r\n                  <div class=\"lbl-bedge l-bg-card2\">\r\n                    <span class=\"lbl-bedge-title\">L</span>\r\n                  </div>\r\n                  <div class=\"group-details font-16\">Low Blood Pressure</div>\r\n                </div>\r\n                <div class=\"ms-auto\">\r\n                  <div class=\"media-title text-muted mb-0 font-14\">10 Patients</div>\r\n                </div>\r\n              </li>\r\n              <li class=\"patient-group-list\">\r\n                <div class=\"d-flex\">\r\n                  <div class=\"lbl-bedge l-bg-cyan\">\r\n                    <span class=\"lbl-bedge-title\">H</span>\r\n                  </div>\r\n                  <div class=\"group-details font-16\">Hypertension</div>\r\n                </div>\r\n                <div class=\"ms-auto\">\r\n                  <div class=\"media-title text-muted mb-0 font-14\">21 Patients</div>\r\n                </div>\r\n              </li>\r\n              <li class=\"patient-group-list\">\r\n                <div class=\"d-flex\">\r\n                  <div class=\"lbl-bedge l-bg-red\">\r\n                    <span class=\"lbl-bedge-title\">M</span>\r\n                  </div>\r\n                  <div class=\"group-details font-16\">Malaria</div>\r\n                </div>\r\n                <div class=\"ms-auto\">\r\n                  <div class=\"media-title text-muted mb-0 font-14\">11 Patients</div>\r\n                </div>\r\n              </li>\r\n              <li class=\"patient-group-list\">\r\n                <div class=\"d-flex\">\r\n                  <div class=\"lbl-bedge l-bg-card3\">\r\n                    <span class=\"lbl-bedge-title\">D</span>\r\n                  </div>\r\n                  <div class=\"group-details font-16\">Dental Problem</div>\r\n                </div>\r\n                <div class=\"ms-auto\">\r\n                  <div class=\"media-title text-muted mb-0 font-14\">17 Patients</div>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>\r\n              <strong>Todo</strong> List</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <div cdkDropList class=\"task-list\" (cdkDropListDropped)=\"drop($event)\"\r\n              style=\"position: relative; max-height: 370px;\" [perfectScrollbar]>\r\n              <div class=\"task-box\" *ngFor=\"let task of tasks\" cdkDrag>\r\n                <div>\r\n                  <div class=\"task-handle m-r-20\" cdkDragHandle>\r\n                    <mat-icon aria-hidden=\"false\">drag_indicator</mat-icon>\r\n                  </div>\r\n                </div>\r\n                <mat-checkbox (change)=\"toggle(task, sidenav)\" [checked]=\"!!task.done\" class=\"m-r-15\" color=\"primary\">\r\n                </mat-checkbox>\r\n                <div class=\"task-custom-placeholder\" *cdkDragPlaceholder></div>\r\n                <div matTooltip=\"Title\" [ngClass]=\"{done:task.done}\">\r\n                  {{task.title}}</div>\r\n                <div\r\n                  [ngClass]=\"{'task-low': task.priority=='Low', 'task-high': task.priority=='High','task-normal': task.priority=='Normal'}\">\r\n                  <mat-icon matTooltip=\"Low\" aria-hidden=\"false\" class=\"lbl-low\" *ngIf=\"task?.priority == 'Low'\">\r\n                    arrow_downward\r\n                  </mat-icon>\r\n                  <mat-icon matTooltip=\"High\" aria-hidden=\"false\" class=\"lbl-high\" *ngIf=\"task?.priority == 'High'\">\r\n                    arrow_upward\r\n                  </mat-icon>\r\n                  <mat-icon matTooltip=\"Normal\" aria-hidden=\"false\" class=\"lbl-normal\"\r\n                    *ngIf=\"task?.priority == 'Normal'\">\r\n                    remove</mat-icon>\r\n                  {{task.priority}}\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>\r\n              Doctors List</h2>\r\n\r\n          </div>\r\n          <div class=\"tableBody\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table table-hover \">\r\n                <thead>\r\n                  <tr>\r\n                    <th>#</th>\r\n                    <th>Doctor Name</th>\r\n                    <th>Status</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td class=\"table-img\">\r\n                      <img src=\"assets/images/user/user5.jpg\" alt=\"\">\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"media-title\"><a href=\"mailto:test@gmail.com\"> Dr.Jay Soni\r\n                        </a></div>\r\n                      <div class=\"text-job font-11\">(MBBS,MD)</div>\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"badge col-green\">Available</div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"table-img\">\r\n                      <img src=\"assets/images/user/user6.jpg\" alt=\"\">\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"media-title\"><a href=\"mailto:test@gmail.com\"> Dr.Sarah Smith\r\n                        </a></div>\r\n                      <div class=\"text-job font-11\">(BDS,MDS)</div>\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"badge col-red\">Absend</div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"table-img\">\r\n                      <img src=\"assets/images/user/user3.jpg\" alt=\"\">\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"media-title\"><a href=\"mailto:test@gmail.com\">Dr.Megha Trivedi\r\n                        </a></div>\r\n                      <div class=\"text-job font-11\">(BHMS)</div>\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"badge col-green\">Available</div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"table-img\">\r\n                      <img src=\"assets/images/user/user2.jpg\" alt=\"\">\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"media-title\"><a href=\"mailto:test@gmail.com\"> Dr.John Deo\r\n                        </a></div>\r\n                      <div class=\"text-job font-11\">(MBBS,MS)</div>\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"badge col-green\">Available</div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"table-img\">\r\n                      <img src=\"assets/images/user/user1.jpg\" alt=\"\">\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"media-title\"><a href=\"mailto:test@gmail.com\"> Dr.Jacob Ryan\r\n                        </a></div>\r\n                      <div class=\"text-job font-11\">(MBBS,MD)</div>\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"badge col-red\">Absend</div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"table-img\">\r\n                      <img src=\"assets/images/user/user8.jpg\" alt=\"\">\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"media-title\"><a href=\"mailto:test@gmail.com\"> Dr.Jay Soni\r\n                        </a></div>\r\n                      <div class=\"text-job font-11\">(MBBS)</div>\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"badge col-green\">Available</div>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xl-4 col-lg-4 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Number Of Patients</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <apx-chart [series]=\"linechartOptions.series\" [chart]=\"linechartOptions.chart\"\r\n              [dataLabels]=\"linechartOptions.dataLabels\" [plotOptions]=\"linechartOptions.plotOptions\"\r\n              [yaxis]=\"linechartOptions.yaxis\" [legend]=\"linechartOptions.legend\" [fill]=\"linechartOptions.fill\"\r\n              [colors]=\"linechartOptions.colors\" [stroke]=\"linechartOptions.stroke\" [tooltip]=\"linechartOptions.tooltip\"\r\n              [xaxis]=\"linechartOptions.xaxis\">\r\n            </apx-chart>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "I5lE":
/*!*********************************************************!*\
  !*** ./src/app/doctor/dashboard/dashboard.component.ts ***!
  \*********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "ERaj");
/* harmony import */ var _dashboard_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component.sass */ "UapR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");





let DashboardComponent = class DashboardComponent {
    constructor() {
        // TODO start
        this.tasks = [
            {
                id: "1",
                title: "Check patient report",
                done: true,
                priority: "High",
            },
            {
                id: "2",
                title: "Request for festivle holiday",
                done: false,
                priority: "High",
            },
            {
                id: "3",
                title: "Order new medicine stock",
                done: false,
                priority: "Low",
            },
            {
                id: "4",
                title: "Remind for lunch in hotel",
                done: true,
                priority: "Normal",
            },
            {
                id: "5",
                title: "Conference in london",
                done: false,
                priority: "High",
            },
            {
                id: "6",
                title: "Announcement for",
                done: false,
                priority: "Normal",
            },
            {
                id: "7",
                title: "call bus driver",
                done: true,
                priority: "High",
            },
            {
                id: "8",
                title: "Web service data load issue",
                done: false,
                priority: "High",
            },
            {
                id: "9",
                title: "Java compile error",
                done: false,
                priority: "Low",
            },
            {
                id: "10",
                title: "Integrate project with spring boot",
                done: true,
                priority: "High",
            },
        ];
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["moveItemInArray"])(this.tasks, event.previousIndex, event.currentIndex);
    }
    toggle(task, nav) {
        task.done = !task.done;
    }
    // TODO end
    ngOnInit() {
        this.chart1();
        this.chart2();
        this.chart3();
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
                theme: "dark",
                marker: {
                    show: true,
                },
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
        this.linechartOptions = {
            series: [
                {
                    name: "Male",
                    data: [44, 55, 57, 56, 61, 58],
                },
                {
                    name: "Female",
                    data: [76, 85, 101, 98, 87, 105],
                },
            ],
            chart: {
                type: "bar",
                height: 350,
                dropShadow: {
                    enabled: true,
                    color: "#000",
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2,
                },
                toolbar: {
                    show: false,
                },
                foreColor: "#9aa0ac",
            },
            colors: ["#5C9FFB", "#AEAEAE"],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "55%",
                    borderRadius: 5,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 2,
                colors: ["transparent"],
            },
            xaxis: {
                categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            },
            yaxis: {},
            fill: {
                opacity: 1,
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

/***/ "UapR":
/*!***********************************************************!*\
  !*** ./src/app/doctor/dashboard/dashboard.component.sass ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNhc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=default~dashboard-dashboard-module~doctor-doctor-module-es2015.js.map