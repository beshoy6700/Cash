(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "3+du":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/main/main.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">Dashboard</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a routerLink=\"/admin/dashboard/main\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">Dashboard</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Widgets -->\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n        <div class=\"card card-statistic-2\">\r\n          <div class=\"clearfix\">\r\n            <div class=\"card-icon shadow-primary bg-purple\">\r\n              <i class=\"material-icons align-middle\">face</i>\r\n            </div>\r\n            <div class=\"card-right\">\r\n              <div>\r\n                <h5 class=\"pull-right\">Appointments</h5>\r\n              </div>\r\n              <div class=\"m-r-10 m-l-10\">\r\n                <h3 class=\"font-weight-bold pull-right mb-0\"> 650</h3>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-chart\">\r\n            <canvas baseChart [chartType]=\"'line'\" [datasets]=\"cardChart1Data\" [labels]=\"cardChart1Label\"\r\n              [options]=\"cardChart1\" [legend]=\"true\">\r\n            </canvas>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n        <div class=\"card card-statistic-2\">\r\n          <div class=\"clearfix\">\r\n            <div class=\"card-icon shadow-primary bg-orange\">\r\n              <i class=\"material-icons align-middle\">content_cut</i>\r\n            </div>\r\n            <div class=\"card-right\">\r\n              <div>\r\n                <h5 class=\"pull-right\">Operations</h5>\r\n              </div>\r\n              <div class=\"m-r-10 m-l-10\">\r\n                <h3 class=\"font-weight-bold pull-right mb-0\"> 54</h3>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-chart\">\r\n            <canvas baseChart [chartType]=\"'line'\" [datasets]=\"cardChart2Data\" [labels]=\"cardChart2Label\"\r\n              [options]=\"cardChart2\" [legend]=\"true\">\r\n            </canvas>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n        <div class=\"card card-statistic-2\">\r\n          <div class=\"clearfix\">\r\n            <div class=\"card-icon shadow-primary bg-green\">\r\n              <i class=\"material-icons align-middle\">person_add</i>\r\n            </div>\r\n            <div class=\"card-right\">\r\n              <div>\r\n                <h5 class=\"pull-right\">New Patients</h5>\r\n              </div>\r\n              <div class=\"m-r-10 m-l-10\">\r\n                <h3 class=\"font-weight-bold pull-right mb-0\"> 129</h3>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-chart\">\r\n            <canvas baseChart [chartType]=\"'line'\" [datasets]=\"cardChart3Data\" [labels]=\"cardChart3Label\"\r\n              [options]=\"cardChart3\" [legend]=\"true\">\r\n            </canvas>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n        <div class=\"card card-statistic-2\">\r\n          <div class=\"clearfix\">\r\n            <div class=\"card-icon shadow-primary bg-blue\">\r\n              <i class=\"material-icons align-middle\">local_activity</i>\r\n            </div>\r\n            <div class=\"card-right\">\r\n              <div>\r\n                <h5 class=\"pull-right\">Earning</h5>\r\n              </div>\r\n              <div class=\"m-r-10 m-l-10\">\r\n                <h3 class=\"font-weight-bold pull-right mb-0\"> $20,125</h3>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-chart\">\r\n            <canvas baseChart [chartType]=\"'line'\" [datasets]=\"cardChart4Data\" [labels]=\"cardChart4Label\"\r\n              [options]=\"cardChart4\" [legend]=\"true\">\r\n            </canvas>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <!-- #END# Widgets -->\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>\r\n              Hospital Survay</h2>\r\n            <button mat-button [matMenuTriggerFor]=\"menu\" class=\"header-dropdown\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n              <button mat-menu-item>Action</button>\r\n              <button mat-menu-item>Another action</button>\r\n              <button mat-menu-item>Something else here</button>\r\n            </mat-menu>\r\n          </div>\r\n          <div class=\"body\">\r\n            <apx-chart [series]=\"areaChartOptions.series\" [chart]=\"areaChartOptions.chart\"\r\n              [xaxis]=\"areaChartOptions.xaxis\" [yaxis]=\"areaChartOptions.yaxis\" [colors]=\"areaChartOptions.colors\"\r\n              [stroke]=\"areaChartOptions.stroke\" [legend]=\"areaChartOptions.legend\" [tooltip]=\"areaChartOptions.tooltip\"\r\n              [dataLabels]=\"areaChartOptions.dataLabels\"></apx-chart>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Common Diseases Report</h2>\r\n            <button mat-button [matMenuTriggerFor]=\"menu\" class=\"header-dropdown\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n              <button mat-menu-item>Action</button>\r\n              <button mat-menu-item>Another action</button>\r\n              <button mat-menu-item>Something else here</button>\r\n            </mat-menu>\r\n          </div>\r\n          <div class=\"body\">\r\n            <apx-chart [series]=\"barChartOptions.series\" [chart]=\"barChartOptions.chart\"\r\n              [dataLabels]=\"barChartOptions.dataLabels\" [plotOptions]=\"barChartOptions.plotOptions\"\r\n              [responsive]=\"barChartOptions.responsive\" [xaxis]=\"barChartOptions.xaxis\"\r\n              [tooltip]=\"barChartOptions.tooltip\" [legend]=\"barChartOptions.legend\" [fill]=\"barChartOptions.fill\">\r\n            </apx-chart>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>\r\n              Booked Appointment</h2>\r\n            <button mat-button [matMenuTriggerFor]=\"menu\" class=\"header-dropdown\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n              <button mat-menu-item>Action</button>\r\n              <button mat-menu-item>Another action</button>\r\n              <button mat-menu-item>Something else here</button>\r\n            </mat-menu>\r\n          </div>\r\n          <div class=\"tableBody\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table table-hover \">\r\n                <thead>\r\n                  <tr>\r\n                    <th>#</th>\r\n                    <th>Patient Name</th>\r\n                    <th>Assigned Doctor</th>\r\n                    <th>Date</th>\r\n                    <th>Diseases</th>\r\n                    <th>Actions </th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td class=\"table-img\">\r\n                      <img src=\"assets/images/user/user1.jpg\" alt=\"\">\r\n                    </td>\r\n                    <td>John Doe</td>\r\n                    <td><a href=\"mailto:test@gmail.com\"> Dr.Jacob Ryan </a></td>\r\n                    <td>12/05/2016 </td>\r\n                    <td>\r\n                      <div class=\"badge col-red\">Fever</div>\r\n                    </td>\r\n                    <td>\r\n                      <button mat-icon-button>\r\n                        <mat-icon>edit</mat-icon>\r\n                      </button>\r\n                      <button mat-icon-button>\r\n                        <mat-icon>delete</mat-icon>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"table-img\">\r\n                      <img src=\"assets/images/user/user2.jpg\" alt=\"\">\r\n                    </td>\r\n                    <td>Sarah Smith</td>\r\n                    <td><a href=\"mailto:test@gmail.com\"> Dr.Rajesh </a></td>\r\n                    <td>12/05/2016 </td>\r\n                    <td>\r\n                      <div class=\"badge col-green\">Cholera</div>\r\n                    </td>\r\n                    <td>\r\n                      <button mat-icon-button>\r\n                        <mat-icon>edit</mat-icon>\r\n                      </button>\r\n                      <button mat-icon-button>\r\n                        <mat-icon>delete</mat-icon>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"table-img\">\r\n                      <img src=\"assets/images/user/user3.jpg\" alt=\"\">\r\n                    </td>\r\n                    <td>Airi Satou</td>\r\n                    <td><a href=\"mailto:test@gmail.com\"> Dr.Jay Soni </a></td>\r\n                    <td>12/05/2016 </td>\r\n                    <td>\r\n                      <div class=\"badge col-purple\">Jaundice</div>\r\n                    </td>\r\n                    <td>\r\n                      <button mat-icon-button>\r\n                        <mat-icon>edit</mat-icon>\r\n                      </button>\r\n                      <button mat-icon-button>\r\n                        <mat-icon>delete</mat-icon>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"table-img\">\r\n                      <img src=\"assets/images/user/user4.jpg\" alt=\"\">\r\n                    </td>\r\n                    <td>Angelica Ramos</td>\r\n                    <td><a href=\"mailto:test@gmail.com\"> Dr.John Deo </a></td>\r\n                    <td>12/05/2016 </td>\r\n                    <td>\r\n                      <div class=\"badge col-purple\">Typhod</div>\r\n                    </td>\r\n                    <td>\r\n                      <button mat-icon-button>\r\n                        <mat-icon>edit</mat-icon>\r\n                      </button>\r\n                      <button mat-icon-button>\r\n                        <mat-icon>delete</mat-icon>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"table-img\">\r\n                      <img src=\"assets/images/user/user5.jpg\" alt=\"\">\r\n                    </td>\r\n                    <td>Ashton Cox</td>\r\n                    <td><a href=\"mailto:test@gmail.com\"> Dr.Megha Trivedi </a></td>\r\n                    <td>12/05/2016 </td>\r\n                    <td>\r\n                      <div class=\"badge col-orange\">Maleria</div>\r\n                    </td>\r\n                    <td>\r\n                      <button mat-icon-button>\r\n                        <mat-icon>edit</mat-icon>\r\n                      </button>\r\n                      <button mat-icon-button>\r\n                        <mat-icon>delete</mat-icon>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"table-img\">\r\n                      <img src=\"assets/images/user/user8.jpg\" alt=\"\">\r\n                    </td>\r\n                    <td>Cara Stevens</td>\r\n                    <td><a href=\"mailto:test@gmail.com\"> Dr.Sarah Smith </a></td>\r\n                    <td>12/05/2016 </td>\r\n                    <td>\r\n                      <div class=\"badge col-cyan\">Infection</div>\r\n                    </td>\r\n                    <td>\r\n                      <button mat-icon-button>\r\n                        <mat-icon>edit</mat-icon>\r\n                      </button>\r\n                      <button mat-icon-button>\r\n                        <mat-icon>delete</mat-icon>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>\r\n              Doctors List</h2>\r\n            <button mat-button [matMenuTriggerFor]=\"menu\" class=\"header-dropdown\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n              <button mat-menu-item>Action</button>\r\n              <button mat-menu-item>Another action</button>\r\n              <button mat-menu-item>Something else here</button>\r\n            </mat-menu>\r\n          </div>\r\n          <div class=\"tableBody\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table table-hover \">\r\n                <thead>\r\n                  <tr>\r\n                    <th>#</th>\r\n                    <th>Doctor Name</th>\r\n                    <th>Status</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td class=\"table-img\">\r\n                      <img src=\"assets/images/user/user5.jpg\" alt=\"\">\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"media-title\"><a href=\"mailto:test@gmail.com\"> Dr.Jay Soni\r\n                        </a></div>\r\n                      <div class=\"text-job font-11\">(MBBS,MD)</div>\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"badge col-green\">Available</div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"table-img\">\r\n                      <img src=\"assets/images/user/user6.jpg\" alt=\"\">\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"media-title\"><a href=\"mailto:test@gmail.com\"> Dr.Sarah Smith\r\n                        </a></div>\r\n                      <div class=\"text-job font-11\">(BDS,MDS)</div>\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"badge col-red\">Absend</div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"table-img\">\r\n                      <img src=\"assets/images/user/user3.jpg\" alt=\"\">\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"media-title\"><a href=\"mailto:test@gmail.com\">Dr.Megha Trivedi\r\n                        </a></div>\r\n                      <div class=\"text-job font-11\">(BHMS)</div>\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"badge col-green\">Available</div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"table-img\">\r\n                      <img src=\"assets/images/user/user2.jpg\" alt=\"\">\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"media-title\"><a href=\"mailto:test@gmail.com\"> Dr.John Deo\r\n                        </a></div>\r\n                      <div class=\"text-job font-11\">(MBBS,MS)</div>\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"badge col-green\">Available</div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"table-img\">\r\n                      <img src=\"assets/images/user/user1.jpg\" alt=\"\">\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"media-title\"><a href=\"mailto:test@gmail.com\"> Dr.Jacob Ryan\r\n                        </a></div>\r\n                      <div class=\"text-job font-11\">(MBBS,MD)</div>\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"badge col-red\">Absend</div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"table-img\">\r\n                      <img src=\"assets/images/user/user8.jpg\" alt=\"\">\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"media-title\"><a href=\"mailto:test@gmail.com\"> Dr.Jay Soni\r\n                        </a></div>\r\n                      <div class=\"text-job font-11\">(MBBS)</div>\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"badge col-green\">Available</div>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>\r\n              Operations</h2>\r\n            <button mat-button [matMenuTriggerFor]=\"menu\" class=\"header-dropdown\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n              <button mat-menu-item>Action</button>\r\n              <button mat-menu-item>Another action</button>\r\n              <button mat-menu-item>Something else here</button>\r\n            </mat-menu>\r\n          </div>\r\n          <div class=\"tableBody\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>#</th>\r\n                    <th>Parient Name</th>\r\n                    <th>Doctors Team</th>\r\n                    <th>Date Of Operation</th>\r\n                    <th>Report</th>\r\n                    <th>Diseases</th>\r\n                    <th>Actions</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td class=\"table-img\">\r\n                      <img src=\"assets/images/user/user8.jpg\" alt=\"\">\r\n                    </td>\r\n                    <td>John Deo</td>\r\n                    <td class=\"text-truncate\">\r\n                      <ul class=\"list-unstyled order-list\">\r\n                        <li class=\"avatar avatar-sm\"><img class=\"rounded-circle\" src=\"assets/images/user/user1.jpg\"\r\n                            alt=\"user\">\r\n                        </li>\r\n                        <li class=\"avatar avatar-sm\"><img class=\"rounded-circle\" src=\"assets/images/user/user2.jpg\"\r\n                            alt=\"user\">\r\n                        </li>\r\n                        <li class=\"avatar avatar-sm\"><img class=\"rounded-circle\" src=\"assets/images/user/user3.jpg\"\r\n                            alt=\"user\">\r\n                        </li>\r\n                        <li class=\"avatar avatar-sm\"><span class=\"badge\">+4</span>\r\n                        </li>\r\n                      </ul>\r\n                    </td>\r\n                    <td>12-08-2019</td>\r\n                    <td>\r\n                      <i class=\"far fa-file-pdf tbl-pdf\"></i>\r\n                    </td>\r\n                    <td>Cancer</td>\r\n                    <td>\r\n                      <button mat-icon-button class=\"btn-tbl-edit\">\r\n                        <mat-icon>edit</mat-icon>\r\n                      </button>\r\n                      <button mat-icon-button class=\"btn-tbl-delete\">\r\n                        <mat-icon>delete</mat-icon>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"table-img\">\r\n                      <img src=\"assets/images/user/user5.jpg\" alt=\"\">\r\n                    </td>\r\n                    <td>Jens Brincker</td>\r\n                    <td class=\"text-truncate\">\r\n                      <ul class=\"list-unstyled order-list\">\r\n                        <li class=\"avatar avatar-sm\"><img class=\"rounded-circle\" src=\"assets/images/user/user7.jpg\"\r\n                            alt=\"user\">\r\n                        </li>\r\n                        <li class=\"avatar avatar-sm\"><img class=\"rounded-circle\" src=\"assets/images/user/user2.jpg\"\r\n                            alt=\"user\">\r\n                        </li>\r\n                        <li class=\"avatar avatar-sm\"><span class=\"badge\">+3</span>\r\n                        </li>\r\n                      </ul>\r\n                    </td>\r\n                    <td>14-08-2019</td>\r\n                    <td>\r\n                      <i class=\"far fa-file-pdf tbl-pdf\"></i>\r\n                    </td>\r\n                    <td>Fracture</td>\r\n                    <td>\r\n                      <button mat-icon-button class=\"btn-tbl-edit\">\r\n                        <mat-icon>edit</mat-icon>\r\n                      </button>\r\n                      <button mat-icon-button class=\"btn-tbl-delete\">\r\n                        <mat-icon>delete</mat-icon>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"table-img\">\r\n                      <img src=\"assets/images/user/user3.jpg\" alt=\"\">\r\n                    </td>\r\n                    <td>Mark Hay</td>\r\n                    <td class=\"text-truncate\">\r\n                      <ul class=\"list-unstyled order-list\">\r\n                        <li class=\"avatar avatar-sm\"><img class=\"rounded-circle\" src=\"assets/images/user/user2.jpg\"\r\n                            alt=\"user\">\r\n                        </li>\r\n                        <li class=\"avatar avatar-sm\"><img class=\"rounded-circle\" src=\"assets/images/user/user1.jpg\"\r\n                            alt=\"user\">\r\n                        </li>\r\n                        <li class=\"avatar avatar-sm\"><img class=\"rounded-circle\" src=\"assets/images/user/user8.jpg\"\r\n                            alt=\"user\">\r\n                        </li>\r\n                        <li class=\"avatar avatar-sm\"><span class=\"badge\">+2</span>\r\n                        </li>\r\n                      </ul>\r\n                    </td>\r\n                    <td>18-08-2019</td>\r\n                    <td>\r\n                      <i class=\"far fa-file-pdf tbl-pdf\"></i>\r\n                    </td>\r\n                    <td>Cataract surgery</td>\r\n                    <td>\r\n                      <button mat-icon-button class=\"btn-tbl-edit\">\r\n                        <mat-icon>edit</mat-icon>\r\n                      </button>\r\n                      <button mat-icon-button class=\"btn-tbl-delete\">\r\n                        <mat-icon>delete</mat-icon>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"table-img\">\r\n                      <img src=\"assets/images/user/user6.jpg\" alt=\"\">\r\n                    </td>\r\n                    <td>Mark Hay</td>\r\n                    <td class=\"text-truncate\">\r\n                      <ul class=\"list-unstyled order-list\">\r\n                        <li class=\"avatar avatar-sm\"><img class=\"rounded-circle\" src=\"assets/images/user/user5.jpg\"\r\n                            alt=\"user\">\r\n                        </li>\r\n                        <li class=\"avatar avatar-sm\"><img class=\"rounded-circle\" src=\"assets/images/user/user3.jpg\"\r\n                            alt=\"user\">\r\n                        </li>\r\n                        <li class=\"avatar avatar-sm\"><img class=\"rounded-circle\" src=\"assets/images/user/user9.jpg\"\r\n                            alt=\"user\">\r\n                        </li>\r\n                        <li class=\"avatar avatar-sm\"><span class=\"badge\">+4</span>\r\n                        </li>\r\n                      </ul>\r\n                    </td>\r\n                    <td>20-08-2019</td>\r\n                    <td>\r\n                      <i class=\"far fa-file-pdf tbl-pdf\"></i>\r\n                    </td>\r\n                    <td>Cholecystectomy</td>\r\n                    <td>\r\n                      <button mat-icon-button class=\"btn-tbl-edit\">\r\n                        <mat-icon>edit</mat-icon>\r\n                      </button>\r\n                      <button mat-icon-button class=\"btn-tbl-delete\">\r\n                        <mat-icon>delete</mat-icon>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"table-img\">\r\n                      <img src=\"assets/images/user/user1.jpg\" alt=\"\">\r\n                    </td>\r\n                    <td>Mark Hay</td>\r\n                    <td class=\"text-truncate\">\r\n                      <ul class=\"list-unstyled order-list\">\r\n                        <li class=\"avatar avatar-sm\"><img class=\"rounded-circle\" src=\"assets/images/user/user2.jpg\"\r\n                            alt=\"user\">\r\n                        </li>\r\n                        <li class=\"avatar avatar-sm\"><img class=\"rounded-circle\" src=\"assets/images/user/user4.jpg\"\r\n                            alt=\"user\">\r\n                        </li>\r\n                        <li class=\"avatar avatar-sm\"><span class=\"badge\">+3</span>\r\n                        </li>\r\n                      </ul>\r\n                    </td>\r\n                    <td>22-08-2019</td>\r\n                    <td>\r\n                      <i class=\"far fa-file-pdf tbl-pdf\"></i>\r\n                    </td>\r\n                    <td>Hysterectomy</td>\r\n                    <td>\r\n                      <button mat-icon-button class=\"btn-tbl-edit\">\r\n                        <mat-icon>edit</mat-icon>\r\n                      </button>\r\n                      <button mat-icon-button class=\"btn-tbl-delete\">\r\n                        <mat-icon>delete</mat-icon>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"table-img\">\r\n                      <img src=\"assets/images/user/user2.jpg\" alt=\"\">\r\n                    </td>\r\n                    <td>Mark Hay</td>\r\n                    <td class=\"text-truncate\">\r\n                      <ul class=\"list-unstyled order-list\">\r\n                        <li class=\"avatar avatar-sm\"><img class=\"rounded-circle\" src=\"assets/images/user/user6.jpg\"\r\n                            alt=\"user\">\r\n                        </li>\r\n                        <li class=\"avatar avatar-sm\"><img class=\"rounded-circle\" src=\"assets/images/user/user9.jpg\"\r\n                            alt=\"user\">\r\n                        </li>\r\n                        <li class=\"avatar avatar-sm\"><img class=\"rounded-circle\" src=\"assets/images/user/user4.jpg\"\r\n                            alt=\"user\">\r\n                        </li>\r\n                        <li class=\"avatar avatar-sm\"><span class=\"badge\">+2</span>\r\n                        </li>\r\n                      </ul>\r\n                    </td>\r\n                    <td>28-08-2019</td>\r\n                    <td>\r\n                      <i class=\"far fa-file-pdf tbl-pdf\"></i>\r\n                    </td>\r\n                    <td>back pain surgery</td>\r\n                    <td>\r\n                      <button mat-icon-button class=\"btn-tbl-edit\">\r\n                        <mat-icon>edit</mat-icon>\r\n                      </button>\r\n                      <button mat-icon-button class=\"btn-tbl-delete\">\r\n                        <mat-icon>delete</mat-icon>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "MXfZ":
/*!*************************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _patient_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../patient/dashboard/dashboard.component */ "M4rk");
/* harmony import */ var _doctor_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../doctor/dashboard/dashboard.component */ "I5lE");
/* harmony import */ var _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../authentication/page404/page404.component */ "21P8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "QLu+");
/* harmony import */ var _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard2/dashboard2.component */ "g2Pu");








const routes = [
    {
        path: "",
        redirectTo: "main",
        pathMatch: "full",
    },
    {
        path: "main",
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
    },
    {
        path: "dashboard2",
        component: _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_7__["Dashboard2Component"],
    },
    {
        path: "doctor-dashboard",
        component: _doctor_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
    },
    {
        path: "patient-dashboard",
        component: _patient_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"],
    },
    { path: "**", component: _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_3__["Page404Component"] },
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
    })
], DashboardRoutingModule);



/***/ }),

/***/ "QLu+":
/*!********************************************************!*\
  !*** ./src/app/admin/dashboard/main/main.component.ts ***!
  \********************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_main_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./main.component.html */ "3+du");
/* harmony import */ var _main_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.component.scss */ "SIr5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let MainComponent = class MainComponent {
    constructor() { }
    ngOnInit() {
        this.smallChart1();
        this.smallChart2();
        this.smallChart3();
        this.smallChart4();
        this.chart1();
        this.chart2();
    }
    smallChart1() {
        this.cardChart1 = {
            responsive: true,
            tooltips: {
                enabled: false,
            },
            legend: {
                display: false,
            },
            scales: {
                yAxes: [
                    {
                        gridLines: {
                            display: false,
                            drawBorder: false,
                        },
                        ticks: {
                            beginAtZero: true,
                            display: false,
                        },
                    },
                ],
                xAxes: [
                    {
                        gridLines: {
                            drawBorder: false,
                            display: false,
                        },
                        ticks: {
                            display: false,
                        },
                    },
                ],
            },
            title: {
                display: false,
            },
        };
        this.cardChart1Data = [
            {
                label: "New Patients",
                data: [50, 61, 80, 50, 72, 52, 60, 41, 30, 45, 70, 40, 93, 63, 50, 62],
                borderWidth: 4,
                pointStyle: "circle",
                pointRadius: 4,
                borderColor: "rgba(103,119,239,.7)",
                pointBackgroundColor: "rgba(103,119,239,.2)",
                backgroundColor: "rgba(103,119,239,.2)",
                pointBorderColor: "transparent",
            },
        ];
        this.cardChart1Label = [
            "16-07-2018",
            "17-07-2018",
            "18-07-2018",
            "19-07-2018",
            "20-07-2018",
            "21-07-2018",
            "22-07-2018",
            "23-07-2018",
            "24-07-2018",
            "25-07-2018",
            "26-07-2018",
            "27-07-2018",
            "28-07-2018",
            "29-07-2018",
            "30-07-2018",
            "31-07-2018",
        ];
    }
    smallChart2() {
        this.cardChart2 = {
            responsive: true,
            tooltips: {
                enabled: false,
            },
            legend: {
                display: false,
            },
            scales: {
                yAxes: [
                    {
                        gridLines: {
                            display: false,
                            drawBorder: false,
                        },
                        ticks: {
                            beginAtZero: true,
                            display: false,
                        },
                    },
                ],
                xAxes: [
                    {
                        gridLines: {
                            drawBorder: false,
                            display: false,
                        },
                        ticks: {
                            display: false,
                        },
                    },
                ],
            },
            title: {
                display: false,
            },
        };
        this.cardChart2Data = [
            {
                label: "New Patients",
                data: [50, 61, 80, 50, 40, 93, 63, 50, 62, 72, 52, 60, 41, 30, 45, 70],
                borderWidth: 4,
                pointStyle: "circle",
                pointRadius: 4,
                borderColor: "rgba(253,126,20,.7)",
                pointBackgroundColor: "rgba(253,126,20,.2)",
                backgroundColor: "rgba(253,126,20,.2)",
                pointBorderColor: "transparent",
            },
        ];
        this.cardChart2Label = [
            "16-07-2018",
            "17-07-2018",
            "18-07-2018",
            "19-07-2018",
            "20-07-2018",
            "21-07-2018",
            "22-07-2018",
            "23-07-2018",
            "24-07-2018",
            "25-07-2018",
            "26-07-2018",
            "27-07-2018",
            "28-07-2018",
            "29-07-2018",
            "30-07-2018",
            "31-07-2018",
        ];
    }
    smallChart3() {
        this.cardChart3 = {
            responsive: true,
            tooltips: {
                enabled: false,
            },
            legend: {
                display: false,
            },
            scales: {
                yAxes: [
                    {
                        gridLines: {
                            display: false,
                            drawBorder: false,
                        },
                        ticks: {
                            beginAtZero: true,
                            display: false,
                        },
                    },
                ],
                xAxes: [
                    {
                        gridLines: {
                            drawBorder: false,
                            display: false,
                        },
                        ticks: {
                            display: false,
                        },
                    },
                ],
            },
            title: {
                display: false,
            },
        };
        this.cardChart3Data = [
            {
                label: "New Patients",
                data: [52, 60, 41, 30, 45, 70, 50, 61, 80, 50, 72, 40, 93, 63, 50, 62],
                borderWidth: 4,
                pointStyle: "circle",
                pointRadius: 4,
                borderColor: "rgba(40,167,69,.7)",
                pointBackgroundColor: "rgba(40,167,69,.2)",
                backgroundColor: "rgba(40,167,69,.2)",
                pointBorderColor: "transparent",
            },
        ];
        this.cardChart3Label = [
            "16-07-2018",
            "17-07-2018",
            "18-07-2018",
            "19-07-2018",
            "20-07-2018",
            "21-07-2018",
            "22-07-2018",
            "23-07-2018",
            "24-07-2018",
            "25-07-2018",
            "26-07-2018",
            "27-07-2018",
            "28-07-2018",
            "29-07-2018",
            "30-07-2018",
            "31-07-2018",
        ];
    }
    smallChart4() {
        this.cardChart4 = {
            responsive: true,
            tooltips: {
                enabled: false,
            },
            legend: {
                display: false,
            },
            scales: {
                yAxes: [
                    {
                        gridLines: {
                            display: false,
                            drawBorder: false,
                        },
                        ticks: {
                            beginAtZero: true,
                            display: false,
                        },
                    },
                ],
                xAxes: [
                    {
                        gridLines: {
                            drawBorder: false,
                            display: false,
                        },
                        ticks: {
                            display: false,
                        },
                    },
                ],
            },
            title: {
                display: false,
            },
        };
        this.cardChart4Data = [
            {
                label: "New Patients",
                data: [30, 45, 70, 40, 93, 63, 50, 62, 50, 61, 80, 50, 72, 52, 60, 41],
                borderWidth: 4,
                pointStyle: "circle",
                pointRadius: 4,
                borderColor: "rgba(0,123,255,.7)",
                pointBackgroundColor: "rgba(0,123,255,.2)",
                backgroundColor: "rgba(0,123,255,.2)",
                pointBorderColor: "transparent",
            },
        ];
        this.cardChart4Label = [
            "16-07-2018",
            "17-07-2018",
            "18-07-2018",
            "19-07-2018",
            "20-07-2018",
            "21-07-2018",
            "22-07-2018",
            "23-07-2018",
            "24-07-2018",
            "25-07-2018",
            "26-07-2018",
            "27-07-2018",
            "28-07-2018",
            "29-07-2018",
            "30-07-2018",
            "31-07-2018",
        ];
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
            colors: ["#407fe4", "#908e8e"],
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "2018-09-19",
                    "2018-09-20",
                    "2018-09-21",
                    "2018-09-22",
                    "2018-09-23",
                    "2018-09-24",
                    "2018-09-25",
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
                    show: true,
                },
            },
        };
    }
    chart2() {
        this.barChartOptions = {
            series: [
                {
                    name: "Colds and Flu",
                    data: [44, 55, 41, 67, 22, 43],
                },
                {
                    name: "Headaches",
                    data: [13, 23, 20, 8, 13, 27],
                },
                {
                    name: "Malaria",
                    data: [11, 17, 15, 15, 21, 14],
                },
                {
                    name: "Typhoid",
                    data: [21, 7, 25, 13, 22, 8],
                },
            ],
            chart: {
                type: "bar",
                height: 350,
                foreColor: "#9aa0ac",
                stacked: true,
                toolbar: {
                    show: false,
                },
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: "bottom",
                            offsetX: -10,
                            offsetY: 0,
                        },
                    },
                },
            ],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "30%",
                },
            },
            dataLabels: {
                enabled: false,
            },
            xaxis: {
                type: "category",
                categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            },
            legend: {
                show: false,
            },
            fill: {
                opacity: 0.8,
                colors: ["#01B8AA", "#374649", "#FD625E", "#F2C80F"],
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
MainComponent.ctorParameters = () => [];
MainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-main",
        template: _raw_loader_main_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_main_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MainComponent);



/***/ }),

/***/ "SIr5":
/*!**********************************************************!*\
  !*** ./src/app/admin/dashboard/main/main.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "cd9N":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/dashboard2/dashboard2.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">Dashboard 2</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a routerLink=\"/admin/dashboard/main\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">Dashboard 2</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <!-- Bar chart with line -->\r\n      <div class=\"col-xl-8 col-lg-8 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2><strong>Doctor</strong> Performance</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"recent-report__chart\">\r\n              <apx-chart [series]=\"lineChartOptions.series\" [chart]=\"lineChartOptions.chart\"\r\n                [xaxis]=\"lineChartOptions.xaxis\" [stroke]=\"lineChartOptions.stroke\" [colors]=\"lineChartOptions.colors\"\r\n                [dataLabels]=\"lineChartOptions.dataLabels\" [legend]=\"lineChartOptions.legend\"\r\n                [tooltip]=\"lineChartOptions.tooltip\" [markers]=\"lineChartOptions.markers\" [grid]=\"lineChartOptions.grid\"\r\n                [yaxis]=\"lineChartOptions.yaxis\" [title]=\"lineChartOptions.title\" [fill]=\"lineChartOptions.fill\">\r\n              </apx-chart>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- line chart -->\r\n      <div class=\"col-xl-4 col-lg-4 col-md-12 col-sm-12\">\r\n        <div class=\"plain-card\">\r\n          <div class=\"card-inner\">\r\n            <h6 class=\"tx-primary m-b-10\">Patient Report</h6>\r\n            <div class=\"row\">\r\n              <div class=\"col-4\">\r\n                <label class=\"font-14\">Today</label>\r\n                <p>105</p>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <label class=\"font-14\">This Week</label>\r\n                <p>825</p>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <label class=\"font-14\">This Month</label>\r\n                <p>22,067</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"progress shadow-style\">\r\n              <div class=\"progress-bar l-bg-orange width-per-74\" role=\"progressbar\" aria-valuenow=\"74\" aria-valuemin=\"0\"\r\n                aria-valuemax=\"100\">74%</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"plain-card\">\r\n          <div class=\"card-inner\">\r\n            <h6 class=\"tx-primary m-b-10\">Income Report</h6>\r\n            <div class=\"row\">\r\n              <div class=\"col-4\">\r\n                <label class=\"font-14\">Today</label>\r\n                <p>$1,247</p>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <label class=\"font-14\">This Week</label>\r\n                <p>$22,568</p>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <label class=\"font-14\">This Month</label>\r\n                <p>$65,147</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"progress shadow-style\">\r\n              <div class=\"progress-bar l-bg-red width-per-70\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\"\r\n                aria-valuemax=\"100\">70%</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"plain-card\">\r\n          <div class=\"card-inner\">\r\n            <h6 class=\"tx-primary m-b-10\">Expense Report</h6>\r\n            <div class=\"row\">\r\n              <div class=\"col-4\">\r\n                <label class=\"font-14\">Today</label>\r\n                <p>$723</p>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <label class=\"font-14\">This Week</label>\r\n                <p>$12,451</p>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <label class=\"font-14\">This Month</label>\r\n                <p>$35,589</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"progress shadow-style\">\r\n              <div class=\"progress-bar l-bg-cyan width-per-55\" role=\"progressbar\" aria-valuenow=\"55\" aria-valuemin=\"0\"\r\n                aria-valuemax=\"100\">55%</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>\r\n              <strong>Recent</strong> Report</h2>\r\n            <button mat-button [matMenuTriggerFor]=\"menu\" class=\"header-dropdown\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n              <button mat-menu-item>Action</button>\r\n              <button mat-menu-item>Another action</button>\r\n              <button mat-menu-item>Something else here</button>\r\n            </mat-menu>\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 col-xl-4 d-flex flex-column justify-content-center\">\r\n                <div class=\"ml-xl-3 m-b-20\">\r\n                  <h2>$1,17,289</h2>\r\n                  <h4 class=\"font-weight-light col-green\">Total Income</h4>\r\n                  <p class=\"mb-2\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\r\n                    Aenean commodo ligula eget dolor.\r\n                  </p>\r\n                </div>\r\n                <div class=\"ml-xl-3\">\r\n                  <h2>$1,17,289</h2>\r\n                  <h4 class=\"font-weight-light col-orange\">Total Expense</h4>\r\n                  <p class=\"mb-2\"> Cras dapibus. Vivamus elementum semper nisi. Aenean\r\n                    vulputate eleifend tellus.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-12 col-xl-8\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <h5 class=\"tx-primary m-b-30\">Country Wise Patients</h5>\r\n                    <div class=\"progress-list m-b-10\">\r\n                      <div class=\"details\">\r\n                        <div class=\"title\">USA</div>\r\n                      </div>\r\n                      <div class=\"status\">\r\n                        <span>40</span>% </div>\r\n                      <div class=\"progress-xs not-rounded progress\">\r\n                        <div class=\"progress-bar progress-bar-warning width-per-40\" role=\"progressbar\"\r\n                          aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                          <span class=\"sr-only\">40%</span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"progress-list m-b-10\">\r\n                      <div class=\"details\">\r\n                        <div class=\"title\">Germany</div>\r\n                      </div>\r\n                      <div class=\"status\">\r\n                        <span>49</span>% </div>\r\n                      <div class=\"progress-xs not-rounded progress\">\r\n                        <div class=\"progress-bar progress-bar-danger width-per-49\" role=\"progressbar\" aria-valuenow=\"49\"\r\n                          aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                          <span class=\"sr-only\">49%</span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"progress-list m-b-10\">\r\n                      <div class=\"details\">\r\n                        <div class=\"title\">France</div>\r\n                      </div>\r\n                      <div class=\"status\">\r\n                        <span>65</span>% </div>\r\n                      <div class=\"progress-xs not-rounded progress\">\r\n                        <div class=\"progress-bar progress-bar-blue width-per-65\" role=\"progressbar\" aria-valuenow=\"65\"\r\n                          aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                          <span class=\"sr-only\">65%</span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"progress-list m-b-10\">\r\n                      <div class=\"details\">\r\n                        <div class=\"title\">India</div>\r\n                      </div>\r\n                      <div class=\"status\">\r\n                        <span>28</span>% </div>\r\n                      <div class=\"progress-xs not-rounded progress\">\r\n                        <div class=\"progress-bar progress-bar-success width-per-28\" role=\"progressbar\"\r\n                          aria-valuenow=\"28\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                          <span class=\"sr-only\">28%</span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"progress-list m-b-10\">\r\n                      <div class=\"details\">\r\n                        <div class=\"title\">Other</div>\r\n                      </div>\r\n                      <div class=\"status\">\r\n                        <span>16</span>% </div>\r\n                      <div class=\"progress-xs not-rounded progress\">\r\n                        <div class=\"progress-bar progress-bar-hotpink width-per-16\" role=\"progressbar\"\r\n                          aria-valuenow=\"16\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                          <span class=\"sr-only\">16%</span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6 mt-3\">\r\n                    <!-- chart -->\r\n                    <div class=\"recent-report__chart\">\r\n                      <canvas baseChart class=\"chart\" [data]=\"doughnutChartData\" [labels]=\"doughnutChartLabels\"\r\n                        [options]=\"doughnutChartOptions\" [legend]=\"doughnutChartLegend\" [chartType]=\"doughnutChartType\"\r\n                        [colors]=\"doughnutChartColors\"></canvas>\r\n                    </div>\r\n                    <div class=\"country-chart\">\r\n                      <div class=\"d-flex justify-content-between mx-xl-5 mt-3\">\r\n                        <div class=\"chart-note\">\r\n                          <span class=\"dot dot-product bg-green\"></span>\r\n                          <span>Itely</span>\r\n                        </div>\r\n                        <p class=\"mb-0\">$30,289</p>\r\n                      </div>\r\n                      <div class=\"d-flex justify-content-between mx-xl-5 mt-3\">\r\n                        <div class=\"chart-note\">\r\n                          <span class=\"dot dot-product bg-orange\"></span>\r\n                          <span>USA</span>\r\n                        </div>\r\n                        <p class=\"mb-0\">$25,968</p>\r\n                      </div>\r\n                      <div class=\"d-flex justify-content-between mx-xl-5 mt-3\">\r\n                        <div class=\"chart-note\">\r\n                          <span class=\"dot dot-product bg-purple\"></span>\r\n                          <span>India</span>\r\n                        </div>\r\n                        <p class=\"mb-0\">$45,278</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Patients Group</h2>\r\n            <button mat-button [matMenuTriggerFor]=\"menu\" class=\"header-dropdown\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n              <button mat-menu-item>Action</button>\r\n              <button mat-menu-item>Another action</button>\r\n              <button mat-menu-item>Something else here</button>\r\n            </mat-menu>\r\n          </div>\r\n          <div class=\"list-body\">\r\n            <ul class=\"list-unstyled list-unstyled-noborder\" style=\"position: relative; max-height:330px;\"\r\n              [perfectScrollbar]>\r\n              <li class=\"patient-group-list\">\r\n                <div class=\"d-flex\">\r\n                  <div class=\"lbl-bedge l-bg-orange\">\r\n                    <span class=\"lbl-bedge-title\">C</span>\r\n                  </div>\r\n                  <div class=\"group-details font-16\">Cholesterol</div>\r\n                </div>\r\n                <div class=\"ms-auto\">\r\n                  <div class=\"media-title text-muted mb-0 font-14\">5 Patients</div>\r\n                </div>\r\n              </li>\r\n              <li class=\"patient-group-list\">\r\n                <div class=\"d-flex\">\r\n                  <div class=\"lbl-bedge l-bg-card1\">\r\n                    <span class=\"lbl-bedge-title\">D</span>\r\n                  </div>\r\n                  <div class=\"group-details font-16\">Diabetic</div>\r\n                </div>\r\n                <div class=\"ms-auto\">\r\n                  <div class=\"media-title text-muted mb-0 font-14\">14 Patients</div>\r\n                </div>\r\n              </li>\r\n              <li class=\"patient-group-list\">\r\n                <div class=\"d-flex\">\r\n                  <div class=\"lbl-bedge l-bg-card2\">\r\n                    <span class=\"lbl-bedge-title\">L</span>\r\n                  </div>\r\n                  <div class=\"group-details font-16\">Low Blood Pressure</div>\r\n                </div>\r\n                <div class=\"ms-auto\">\r\n                  <div class=\"media-title text-muted mb-0 font-14\">10 Patients</div>\r\n                </div>\r\n              </li>\r\n              <li class=\"patient-group-list\">\r\n                <div class=\"d-flex\">\r\n                  <div class=\"lbl-bedge l-bg-cyan\">\r\n                    <span class=\"lbl-bedge-title\">H</span>\r\n                  </div>\r\n                  <div class=\"group-details font-16\">Hypertension</div>\r\n                </div>\r\n                <div class=\"ms-auto\">\r\n                  <div class=\"media-title text-muted mb-0 font-14\">21 Patients</div>\r\n                </div>\r\n              </li>\r\n              <li class=\"patient-group-list\">\r\n                <div class=\"d-flex\">\r\n                  <div class=\"lbl-bedge l-bg-red\">\r\n                    <span class=\"lbl-bedge-title\">M</span>\r\n                  </div>\r\n                  <div class=\"group-details font-16\">Malaria</div>\r\n                </div>\r\n                <div class=\"ms-auto\">\r\n                  <div class=\"media-title text-muted mb-0 font-14\">11 Patients</div>\r\n                </div>\r\n              </li>\r\n              <li class=\"patient-group-list\">\r\n                <div class=\"d-flex\">\r\n                  <div class=\"lbl-bedge l-bg-card3\">\r\n                    <span class=\"lbl-bedge-title\">D</span>\r\n                  </div>\r\n                  <div class=\"group-details font-16\">Dental Problem</div>\r\n                </div>\r\n                <div class=\"ms-auto\">\r\n                  <div class=\"media-title text-muted mb-0 font-14\">17 Patients</div>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>\r\n              <strong>Notice</strong> Board</h2>\r\n            <button mat-button [matMenuTriggerFor]=\"menu\" class=\"header-dropdown\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n              <button mat-menu-item>Action</button>\r\n              <button mat-menu-item>Another action</button>\r\n              <button mat-menu-item>Something else here</button>\r\n            </mat-menu>\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"recent-comment\" style=\"position: relative; max-height: 330px;\" [perfectScrollbar]>\r\n              <div class=\"notice-board\">\r\n                <div class=\"table-img\">\r\n                  <img class=\"notice-object\" src=\"assets/images/user/user6.jpg\" alt=\"...\">\r\n                </div>\r\n                <div class=\"notice-body\">\r\n                  <h6 class=\"notice-heading col-green\">Dr. Airi Satou</h6>\r\n                  <p>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.</p>\r\n                  <small class=\"text-muted\">7 hours ago</small>\r\n                </div>\r\n              </div>\r\n              <div class=\"notice-board\">\r\n                <div class=\"table-img\">\r\n                  <img class=\"notice-object\" src=\"assets/images/user/user4.jpg\" alt=\"...\">\r\n                </div>\r\n                <div class=\"notice-body\">\r\n                  <h6 class=\"notice-heading color-primary col-indigo\">Dr. Sarah Smith</h6>\r\n                  <p>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.</p>\r\n                  <p class=\"comment-date\">1 hour ago</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"notice-board\">\r\n                <div class=\"table-img\">\r\n                  <img class=\"notice-object\" src=\"assets/images/user/user3.jpg\" alt=\"...\">\r\n                </div>\r\n                <div class=\"notice-body\">\r\n                  <h6 class=\"notice-heading color-danger col-cyan\">Dr. Cara Stevens</h6>\r\n                  <p>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.</p>\r\n                  <div class=\"comment-date\">Yesterday</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"notice-board no-border\">\r\n                <div class=\"table-img\">\r\n                  <img class=\"notice-object\" src=\"assets/images/user/user7.jpg\" alt=\"...\">\r\n                </div>\r\n                <div class=\"notice-body\">\r\n                  <h6 class=\"notice-heading color-info col-orange\">Dr. Ashton Cox</h6>\r\n                  <p>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.</p>\r\n                  <div class=\"comment-date\">Yesterday</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"notice-board\">\r\n                <div class=\"table-img\">\r\n                  <img class=\"notice-object\" src=\"assets/images/user/user9.jpg\" alt=\"...\">\r\n                </div>\r\n                <div class=\"notice-body\">\r\n                  <h6 class=\"notice-heading color-primary col-red\">Dr. Mark Hay</h6>\r\n                  <p>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.</p>\r\n                  <p class=\"comment-date\">1 hour ago</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>\r\n              <strong>Recent</strong> Activity</h2>\r\n            <button mat-button [matMenuTriggerFor]=\"menu\" class=\"header-dropdown\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n              <button mat-menu-item>Action</button>\r\n              <button mat-menu-item>Another action</button>\r\n              <button mat-menu-item>Something else here</button>\r\n            </mat-menu>\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"sl-item sl-primary\">\r\n              <div class=\"sl-content\">\r\n                <small class=\"text-muted\">\r\n                  <i class=\"fa fa-user position-left\"></i> 5 mins ago</small>\r\n                <p>Lorem ipsum dolor sit amet conse ctetur which ascing elit users.</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"sl-item sl-danger\">\r\n              <div class=\"sl-content\">\r\n                <small class=\"text-muted\">\r\n                  <i class=\"fa fa-user position-left\"></i> 8 mins ago</small>\r\n                <p>Lorem ipsum dolor sit ametcon the sectetur that ascing elit users.</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"sl-item sl-success\">\r\n              <div class=\"sl-content\">\r\n                <small class=\"text-muted\">\r\n                  <i class=\"fa fa-user position-left\"></i> 10 mins ago</small>\r\n                <p>Lorem ipsum dolor sit amet cons the ecte tur and adip ascing elit users.</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"sl-item sl-primary\">\r\n              <div class=\"sl-content\">\r\n                <small class=\"text-muted\">\r\n                  <i class=\"fa fa-user position-left\"></i> 5 mins ago</small>\r\n                <p>Lorem ipsum dolor sit amet conse ctetur which ascing elit users.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>\r\n              <strong>Operations</strong></h2>\r\n            <button mat-button [matMenuTriggerFor]=\"menu\" class=\"header-dropdown\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n              <button mat-menu-item>Action</button>\r\n              <button mat-menu-item>Another action</button>\r\n              <button mat-menu-item>Something else here</button>\r\n            </mat-menu>\r\n          </div>\r\n          <div class=\"tableBody\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table display product-overview mb-30\" id=\"support_table\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>No</th>\r\n                    <th>Name</th>\r\n                    <th>Assigned Doctor</th>\r\n                    <th>Date Of Admit</th>\r\n                    <th>Diseases</th>\r\n                    <th>Room No</th>\r\n                    <th>Edit</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td>1</td>\r\n                    <td>Jens Brincker</td>\r\n                    <td>Dr.Kenny Josh</td>\r\n                    <td>27/05/2016</td>\r\n                    <td>\r\n                      <div class=\"badge col-green\">Influenza</div>\r\n                    </td>\r\n                    <td>101</td>\r\n                    <td>\r\n                      <button mat-icon-button>\r\n                        <mat-icon>edit</mat-icon>\r\n                      </button>\r\n                      <button mat-icon-button>\r\n                        <mat-icon class=\"col-red\">delete</mat-icon>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>2</td>\r\n                    <td>Mark Hay</td>\r\n                    <td>Dr. Mark</td>\r\n                    <td>26/05/2017</td>\r\n                    <td>\r\n                      <div class=\"badge col-red\">Cholera</div>\r\n                    </td>\r\n                    <td>105</td>\r\n                    <td>\r\n                      <button mat-icon-button>\r\n                        <mat-icon>edit</mat-icon>\r\n                      </button>\r\n                      <button mat-icon-button>\r\n                        <mat-icon class=\"col-red\">delete</mat-icon>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>3</td>\r\n                    <td>Anthony Davie</td>\r\n                    <td>Dr.Cinnabar</td>\r\n                    <td>21/05/2016</td>\r\n                    <td>\r\n                      <div class=\"badge col-cyan\">Amoebiasis</div>\r\n                    </td>\r\n                    <td>106</td>\r\n                    <td>\r\n                      <button mat-icon-button>\r\n                        <mat-icon>edit</mat-icon>\r\n                      </button>\r\n                      <button mat-icon-button>\r\n                        <mat-icon class=\"col-red\">delete</mat-icon>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>4</td>\r\n                    <td>David Perry</td>\r\n                    <td>Dr.Felix </td>\r\n                    <td>20/04/2016</td>\r\n                    <td>\r\n                      <div class=\"badge col-purple\">Jaundice</div>\r\n                    </td>\r\n                    <td>105</td>\r\n                    <td>\r\n                      <button mat-icon-button>\r\n                        <mat-icon>edit</mat-icon>\r\n                      </button>\r\n                      <button mat-icon-button>\r\n                        <mat-icon class=\"col-red\">delete</mat-icon>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>5</td>\r\n                    <td>Anthony Davie</td>\r\n                    <td>Dr.Beryl</td>\r\n                    <td>24/05/2016</td>\r\n                    <td>\r\n                      <div class=\"badge col-purple\">Leptospirosis</div>\r\n                    </td>\r\n                    <td>102</td>\r\n                    <td>\r\n                      <button mat-icon-button>\r\n                        <mat-icon>edit</mat-icon>\r\n                      </button>\r\n                      <button mat-icon-button>\r\n                        <mat-icon class=\"col-red\">delete</mat-icon>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>6</td>\r\n                    <td>Alan Gilchrist</td>\r\n                    <td>Dr.Joshep</td>\r\n                    <td>22/05/2016</td>\r\n                    <td>\r\n                      <div class=\"badge col-red\">Hepatitis</div>\r\n                    </td>\r\n                    <td>103</td>\r\n                    <td>\r\n                      <button mat-icon-button>\r\n                        <mat-icon>edit</mat-icon>\r\n                      </button>\r\n                      <button mat-icon-button>\r\n                        <mat-icon class=\"col-red\">delete</mat-icon>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>7</td>\r\n                    <td>Mark Hay</td>\r\n                    <td>Dr.Jayesh</td>\r\n                    <td>18/06/2016</td>\r\n                    <td>\r\n                      <div class=\"badge col-green\">Typhoid</div>\r\n                    </td>\r\n                    <td>107</td>\r\n                    <td>\r\n                      <button mat-icon-button>\r\n                        <mat-icon>edit</mat-icon>\r\n                      </button>\r\n                      <button mat-icon-button>\r\n                        <mat-icon class=\"col-red\">delete</mat-icon>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>8</td>\r\n                    <td>Sue Woodger</td>\r\n                    <td>Dr.Sharma</td>\r\n                    <td>17/05/2016</td>\r\n                    <td>\r\n                      <div class=\"badge col-blue\">Malaria</div>\r\n                    </td>\r\n                    <td>108</td>\r\n                    <td>\r\n                      <button mat-icon-button>\r\n                        <mat-icon>edit</mat-icon>\r\n                      </button>\r\n                      <button mat-icon-button>\r\n                        <mat-icon class=\"col-red\">delete</mat-icon>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "g2Pu":
/*!********************************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard2/dashboard2.component.ts ***!
  \********************************************************************/
/*! exports provided: Dashboard2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard2Component", function() { return Dashboard2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard2_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard2.component.html */ "cd9N");
/* harmony import */ var _dashboard2_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard2.component.scss */ "v6GB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let Dashboard2Component = class Dashboard2Component {
    // Doughnut chart end
    constructor() {
        //  color: ["#3FA7DC", "#F6A025", "#9BC311"],
        // Doughnut chart start
        this.doughnutChartLabels = ["India", "USA", "Itely"];
        this.doughnutChartData = [45, 25, 30];
        this.doughnutChartLegend = false;
        this.doughnutChartColors = [
            {
                backgroundColor: ["#735A84", "#E76412", "#9BC311"],
            },
        ];
        this.doughnutChartType = "doughnut";
        this.doughnutChartOptions = {
            animation: false,
            responsive: true,
        };
    }
    ngOnInit() {
        this.chart1();
    }
    chart1() {
        this.lineChartOptions = {
            series: [
                {
                    name: "Doctor 1",
                    data: [70, 200, 80, 180, 170, 105, 210],
                },
                {
                    name: "Doctor 2",
                    data: [80, 250, 30, 120, 260, 100, 180],
                },
                {
                    name: "Doctor 3",
                    data: [85, 130, 85, 225, 80, 190, 120],
                },
            ],
            chart: {
                height: 350,
                type: "line",
                foreColor: "#9aa0ac",
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
            },
            colors: ["#A5A5A5", "#875692", "#4CB5AC"],
            stroke: {
                curve: "smooth",
            },
            grid: {
                row: {
                    colors: ["transparent", "transparent"],
                    opacity: 0.5,
                },
            },
            markers: {
                size: 3,
            },
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
                title: {
                    text: "Month",
                },
            },
            yaxis: {
                // opposite: true,
                title: {
                    text: "Patients",
                },
            },
            legend: {
                position: "top",
                horizontalAlign: "right",
                floating: true,
                offsetY: -25,
                offsetX: -5,
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
Dashboard2Component.ctorParameters = () => [];
Dashboard2Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-dashboard2",
        template: _raw_loader_dashboard2_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard2_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Dashboard2Component);



/***/ }),

/***/ "pBKm":
/*!*****************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-routing.module */ "MXfZ");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "QLu+");
/* harmony import */ var _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard2/dashboard2.component */ "g2Pu");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");













let DashboardModule = class DashboardModule {
};
DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"], _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_6__["Dashboard2Component"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__["DashboardRoutingModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"],
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_12__["NgApexchartsModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
        ],
    })
], DashboardModule);



/***/ }),

/***/ "v6GB":
/*!**********************************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard2/dashboard2.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map