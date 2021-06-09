(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["widget-widget-module"],{

/***/ "8CUj":
/*!***************************************************************!*\
  !*** ./src/app/widget/chart-widget/chart-widget.component.ts ***!
  \***************************************************************/
/*! exports provided: ChartWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartWidgetComponent", function() { return ChartWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chart_widget_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chart-widget.component.html */ "nzNg");
/* harmony import */ var _chart_widget_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart-widget.component.sass */ "Dw4y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ChartWidgetComponent = class ChartWidgetComponent {
    constructor() { }
    ngOnInit() {
        this.initChartReport1();
        this.initChartReport2();
        this.initChartReport3();
        this.initChartReport4();
        this.pieChart();
        this.radarChart();
        this.chartArea();
    }
    initChartReport1() {
        this.areaChartOptions2 = {
            elements: {
                point: {
                    radius: 0,
                    hitRadius: 5,
                    hoverRadius: 5,
                },
            },
            legend: {
                display: true,
                labels: {
                    fontColor: "#9aa0ac",
                },
                position: "top",
            },
            scales: {
                xAxes: [
                    {
                        display: false,
                    },
                ],
                yAxes: [
                    {
                        display: false,
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                ],
            },
        };
        this.areaChartPlugins = [
            {
                afterLayout: (chart) => {
                    const ctx = chart.chart.ctx;
                    const gradientStroke = ctx.createLinearGradient(0, 0, 0, 150);
                    const dataset = chart.data.datasets[0];
                    gradientStroke.addColorStop(0, "#5555FF");
                    gradientStroke.addColorStop(1, "#9787FF");
                    dataset.backgroundColor = gradientStroke;
                    dataset.borderColor = "transparent";
                    dataset.pointBorderColor = "transparent";
                    dataset.pointBackgroundColor = "transparent";
                    dataset.lineTension = "0.4";
                    const gradientStroke2 = ctx.createLinearGradient(0, 0, 0, 150);
                    const dataset2 = chart.data.datasets[1];
                    gradientStroke2.addColorStop(0, "#FF55B8");
                    gradientStroke2.addColorStop(1, "#FF8787");
                    dataset2.backgroundColor = gradientStroke2;
                    dataset2.borderColor = "transparent";
                    dataset2.pointBorderColor = "transparent";
                    dataset2.pointBackgroundColor = "transparent";
                    dataset2.lineTension = "0.4";
                },
            },
        ];
        this.areaChartData = [
            {
                label: "Foods",
                data: [24, 18, 16, 18, 24, 36, 28],
            },
            {
                label: "Electronics",
                data: [20, 22, 30, 22, 18, 22, 30],
            },
        ];
        this.areaChartLabels = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
        // area chart end
    }
    initChartReport2() {
        this.radarChartPlugins = [
            {
                afterLayout: (chart) => {
                    const ctx = chart.chart.ctx;
                    const gradientStroke = ctx.createLinearGradient(0, 0, 0, 150);
                    const dataset = chart.data.datasets[0];
                    gradientStroke.addColorStop(0, "rgba(85, 85, 255, 0.9)");
                    gradientStroke.addColorStop(1, "rgba(151, 135, 255, 0.8)");
                    dataset.backgroundColor = gradientStroke;
                    dataset.borderColor = "transparent";
                    dataset.pointBackgroundColor = "transparent";
                    dataset.pointBorderColor = "transparent";
                    dataset.pointHoverBackgroundColor = "transparent";
                    dataset.pointHoverBorderColor = "transparent";
                    dataset.pointHitRadius = 50;
                    const gradientStroke2 = ctx.createLinearGradient(0, 0, 0, 150);
                    const dataset2 = chart.data.datasets[1];
                    gradientStroke2.addColorStop(0, "rgba(255, 85, 184, 0.9)");
                    gradientStroke2.addColorStop(1, "rgba(255, 135, 135, 0.8)");
                    dataset2.backgroundColor = gradientStroke2;
                    dataset2.borderColor = "transparent";
                    dataset2.pointBackgroundColor = "transparent";
                    dataset2.pointBorderColor = "transparent";
                    dataset2.pointHoverBackgroundColor = "transparent";
                    dataset2.pointHoverBorderColor = "transparent";
                    dataset2.pointHitRadius = 50;
                },
                beforeDatasetsDraw: (chart) => {
                    chart.ctx.shadowColor = "rgba(0, 0, 0, 0.25)";
                    chart.ctx.shadowBlur = 40;
                },
                afterDatasetsDraw: (chart) => {
                    chart.ctx.shadowColor = "rgba(0, 0, 0, 0)";
                    chart.ctx.shadowBlur = 0;
                },
            },
        ];
        this.radarChartLabels = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
        this.radarChartData = [
            { data: [25, 59, 90, 81, 60, 82, 52], label: "Product", fill: true },
            { data: [40, 100, 40, 90, 40, 90, 84], label: "Services", fill: true },
        ];
        this.radarChartType = "radar";
        this.radarChartColors = [
            {
                backgroundColor: ["rgba(109, 144, 232,0.8)"],
            },
            {
                backgroundColor: ["rgba(255, 140, 96,0.8)"],
            },
        ];
        this.radarChartOptions2 = {
            legend: {
                display: true,
                labels: {
                    fontColor: "#9aa0ac",
                },
                position: "top",
            },
            gridLines: {
                display: false,
            },
            scale: {
                ticks: {
                    maxTicksLimit: 1,
                    display: false,
                },
            },
        };
        // end radar chart
    }
    initChartReport3() {
        this.pieChartOptions = {
            series: [44, 55, 13, 43, 22],
            chart: {
                type: "donut",
                width: 200,
            },
            legend: {
                show: false,
            },
            dataLabels: {
                enabled: false,
            },
            labels: ["Science", "Mathes", "Economics", "History", "Music"],
            responsive: [
                {
                    breakpoint: 480,
                    options: {},
                },
            ],
        };
    }
    initChartReport4() {
        this.avgLecChartOptions = {
            series: [
                {
                    name: "Avg. Lecture",
                    data: [65, 72, 62, 73, 66, 74, 63, 67],
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
                toolbar: {
                    show: false,
                },
                foreColor: "#9aa0ac",
            },
            stroke: {
                curve: "smooth",
            },
            xaxis: {
                categories: ["Jan", "Feb", "March", "Apr", "May", "Jun", "July", "Aug"],
                title: {
                    text: "Weekday",
                },
            },
            yaxis: {
                title: {
                    text: "Avg. Lecture",
                },
            },
            fill: {
                type: "gradient",
                gradient: {
                    shade: "dark",
                    gradientToColors: ["#35fdd8"],
                    shadeIntensity: 1,
                    type: "horizontal",
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100, 100, 100],
                },
            },
            markers: {
                size: 4,
                colors: ["#FFA41B"],
                strokeColors: "#fff",
                strokeWidth: 2,
                hover: {
                    size: 7,
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
    pieChart() {
        this.circleChartOptions = {
            series: [76, 67, 61, 90],
            chart: {
                height: 275,
                type: "radialBar",
            },
            plotOptions: {
                radialBar: {
                    offsetY: 0,
                    startAngle: 0,
                    endAngle: 270,
                    hollow: {
                        margin: 5,
                        size: "30%",
                        background: "transparent",
                        image: undefined,
                    },
                    dataLabels: {
                        name: {
                            show: false,
                        },
                        value: {
                            show: false,
                        },
                    },
                },
            },
            colors: ["#FF4560", "#775DD0", "#00E396", "#FEB019"],
            labels: ["Vimeo", "Messenger", "Facebook", "LinkedIn"],
            legend: {
                show: true,
                floating: true,
                fontSize: "12px",
                position: "left",
                offsetX: 10,
                offsetY: 10,
                labels: {
                    useSeriesColors: true,
                },
                formatter: function (seriesName, opts) {
                    return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
                },
                itemMargin: {
                    horizontal: 3,
                },
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                            show: false,
                        },
                    },
                },
            ],
        };
    }
    radarChart() {
        this.radarChartOptions = {
            series: [
                {
                    name: "Blue",
                    data: [80, 50, 30, 40, 100, 20],
                },
                {
                    name: "Green",
                    data: [20, 30, 40, 80, 20, 80],
                },
                {
                    name: "Orange",
                    data: [44, 76, 78, 13, 43, 10],
                },
            ],
            chart: {
                height: 240,
                type: "radar",
                toolbar: {
                    show: false,
                },
                dropShadow: {
                    enabled: true,
                    blur: 1,
                    left: 1,
                    top: 1,
                },
            },
            stroke: {
                width: 0,
            },
            fill: {
                opacity: 0.4,
            },
            markers: {
                size: 0,
            },
            xaxis: {
                categories: ["2011", "2012", "2013", "2014", "2015", "2016"],
            },
        };
    }
    chartArea() {
        this.areaChartOptions = {
            chart: {
                height: 240,
                type: "area",
                toolbar: {
                    show: false,
                },
                foreColor: "#9aa0ac",
            },
            legend: {
                show: false,
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
            },
            series: [
                {
                    name: "series1",
                    data: [31, 40, 28, 51, 42],
                },
                {
                    name: "series2",
                    data: [11, 32, 45, 32, 34],
                },
            ],
            xaxis: {
                type: "datetime",
                categories: ["1990", "1991", "1992", "1993", "1994"],
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
        };
    }
};
ChartWidgetComponent.ctorParameters = () => [];
ChartWidgetComponent.propDecorators = {
    chart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["chart", { static: true },] }]
};
ChartWidgetComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-chart-widget",
        template: _raw_loader_chart_widget_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chart_widget_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChartWidgetComponent);



/***/ }),

/***/ "BXA7":
/*!***************************************************************!*\
  !*** ./src/app/widget/data-widget/data-widget.component.sass ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRhLXdpZGdldC5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "Dw4y":
/*!*****************************************************************!*\
  !*** ./src/app/widget/chart-widget/chart-widget.component.sass ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFydC13aWRnZXQuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "Ld+1":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widget/data-widget/data-widget.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">Data Widget</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a routerLink=\"/admin/dashboard/main\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-2\">\r\n              <a href=\"#\" onClick=\"return false;\">Widget</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">Data Widget</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-4 col-lg-4 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Your Progress</h2>\r\n          </div>\r\n          <div class=\"tableBody\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table table-hover\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Subject</th>\r\n                    <th>Progress</th>\r\n                    <th>Duration</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td>Chemistry</td>\r\n                    <td>30%<mat-progress-bar mode=\"determinate\" value=\"30\" color=\"warn\"></mat-progress-bar>\r\n                    </td>\r\n                    <td>2 Months</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Mathematics</td>\r\n                    <td>55%<mat-progress-bar mode=\"determinate\" value=\"55\"></mat-progress-bar>\r\n                    </td>\r\n                    <td>3 Months</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Painting</td>\r\n                    <td>67%<mat-progress-bar mode=\"determinate\" value=\"67\"></mat-progress-bar>\r\n                    </td>\r\n                    <td>1 Months</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Business studies</td>\r\n                    <td>70%<mat-progress-bar mode=\"determinate\" value=\"70\"></mat-progress-bar>\r\n                    </td>\r\n                    <td>2 Months</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Biology</td>\r\n                    <td>24%<mat-progress-bar mode=\"determinate\" value=\"24\" color=\"warn\"></mat-progress-bar>\r\n                    </td>\r\n                    <td>3 Months</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Computer studies</td>\r\n                    <td>77%<mat-progress-bar mode=\"determinate\" value=\"77\"></mat-progress-bar>\r\n                    </td>\r\n                    <td>4 Months</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Geography</td>\r\n                    <td>41%<mat-progress-bar mode=\"determinate\" value=\"41\" color=\"warn\"></mat-progress-bar>\r\n                    </td>\r\n                    <td>2 Months</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Assignments</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"doc-file-type\">\r\n              <ul class=\"list-unstyled\" style=\"position: relative; max-height: 285px;\" [perfectScrollbar]>\r\n                <li class=\"d-flex mb-3\">\r\n                  <span class=\"msr-3 align-self-center img-icon primary-rgba text-primary\"><i\r\n                      class=\"far fa-file-word\"></i></span>\r\n                  <div class=\"set-flex\">\r\n                    <h5 class=\"font-16 mb-1\">Java Programming</h5>\r\n                    <p>.doc, 4.3 MB</p>\r\n                  </div>\r\n                  <div class=\"ms-auto\">\r\n                    <td>\r\n                      <i class=\"far fa-trash-alt pr-3\"></i>\r\n                      <i class=\"far fa-arrow-alt-circle-down\"></i>\r\n                    </td>\r\n                  </div>\r\n                </li>\r\n                <li class=\"d-flex mb-3\">\r\n                  <span class=\"msr-3 align-self-center img-icon success-rgba text-success\"><i\r\n                      class=\"far fa-file-excel\"></i></span>\r\n                  <div class=\"set-flex\">\r\n                    <h5 class=\"font-16 mb-1\">Angular Theory</h5>\r\n                    <p>.xls, 2.5 MB</p>\r\n                  </div>\r\n                  <div class=\"ms-auto\">\r\n                    <td>\r\n                      <i class=\"far fa-trash-alt pr-3\"></i>\r\n                      <i class=\"far fa-arrow-alt-circle-down\"></i>\r\n                    </td>\r\n                  </div>\r\n                </li>\r\n                <li class=\"d-flex mb-3\">\r\n                  <span class=\"msr-3 align-self-center img-icon danger-rgba text-danger\"><i\r\n                      class=\"far fa-file-pdf\"></i></span>\r\n                  <div class=\"set-flex\">\r\n                    <h5 class=\"font-16 mb-1\">Maths Sums Solution</h5>\r\n                    <p>.pdf, 10.5 MB</p>\r\n                  </div>\r\n                  <div class=\"ms-auto\">\r\n                    <td>\r\n                      <i class=\"far fa-trash-alt pr-3\"></i>\r\n                      <i class=\"far fa-arrow-alt-circle-down\"></i>\r\n                    </td>\r\n                  </div>\r\n                </li>\r\n                <li class=\"d-flex mb-3\">\r\n                  <span class=\"msr-3 align-self-center img-icon info-rgba text-info\"><i\r\n                      class=\"far fa-file-archive\"></i></span>\r\n                  <div class=\"set-flex\">\r\n                    <h5 class=\"font-16 mb-1\">Submit Science Journal</h5>\r\n                    <p>.zip, 53.2 MB</p>\r\n                  </div>\r\n                  <div class=\"ms-auto\">\r\n                    <td>\r\n                      <i class=\"far fa-trash-alt pr-3\"></i>\r\n                      <i class=\"far fa-arrow-alt-circle-down\"></i>\r\n                    </td>\r\n                  </div>\r\n                </li>\r\n                <li class=\"d-flex mb-3\">\r\n                  <span class=\"msr-3 align-self-center img-icon primary-rgba text-primary\"><i\r\n                      class=\"far fa-file-word\"></i></span>\r\n                  <div class=\"set-flex\">\r\n                    <h5 class=\"font-16 mb-1\">Marketing Instructions</h5>\r\n                    <p>.doc, 5.3 MB</p>\r\n                  </div>\r\n                  <div class=\"ms-auto\">\r\n                    <td>\r\n                      <i class=\"far fa-trash-alt pr-3\"></i>\r\n                      <i class=\"far fa-arrow-alt-circle-down\"></i>\r\n                    </td>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n              <div class=\"text-center p-t-20\">\r\n                <button mat-stroked-button color=\"primary\">Report Adverse Effect</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xl-4 col-lg-4 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>\r\n              Upcomming Appointments\r\n            </h2>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <ul class=\"list-unstyled user-progress list-unstyled-border list-unstyled-noborder\"\r\n              style=\"position: relative; max-height: 335px;\" [perfectScrollbar]>\r\n              <li class=\"lecture-list\">\r\n                <img alt=\"image\" class=\"msr-3 rounded-circle\" width=\"40\" src=\"assets/images/user/usrbig1.jpg\">\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title font-16\">Cara Stevens</div>\r\n                  <div class=\"text-job text-muted mb-0\">M.B.B.S.</div>\r\n                </div>\r\n                <div class=\"ms-auto\">\r\n                  <div class=\"media-title font-16\">12 June '20</div>\r\n                  <div class=\"text-job text-muted mb-0\">09:00-10:00</div>\r\n                </div>\r\n              </li>\r\n              <li class=\"lecture-list\">\r\n                <img alt=\"image\" class=\"msr-3 rounded-circle\" width=\"40\" src=\"assets/images/user/usrbig2.jpg\">\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title font-16\">Airi Satou</div>\r\n                  <div class=\"text-job text-muted mb-0\">M.S.</div>\r\n                </div>\r\n                <div class=\"ms-auto\">\r\n                  <div class=\"media-title font-16\">13 June '20</div>\r\n                  <div class=\"text-job text-muted mb-0\">11:00-12:00</div>\r\n                </div>\r\n              </li>\r\n              <li class=\"lecture-list\">\r\n                <img alt=\"image\" class=\"msr-3 rounded-circle\" width=\"40\" src=\"assets/images/user/usrbig3.jpg\">\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title font-16\">Jens Brincker</div>\r\n                  <div class=\"text-job text-muted mb-0\">Geography</div>\r\n                </div>\r\n                <div class=\"ms-auto\">\r\n                  <div class=\"media-title font-16\">15 June '20</div>\r\n                  <div class=\"text-job text-muted mb-0\">09:30-10:30</div>\r\n                </div>\r\n              </li>\r\n              <li class=\"lecture-list\">\r\n                <img alt=\"image\" class=\"msr-3 rounded-circle\" width=\"40\" src=\"assets/images/user/usrbig4.jpg\">\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title font-16\">Angelica Ramos</div>\r\n                  <div class=\"text-job text-muted mb-0\">B.H.M.S.</div>\r\n                </div>\r\n                <div class=\"ms-auto\">\r\n                  <div class=\"media-title font-16\">16 June '20</div>\r\n                  <div class=\"text-job text-muted mb-0\">14:00-15:00</div>\r\n                </div>\r\n              </li>\r\n              <li class=\"lecture-list\">\r\n                <img alt=\"image\" class=\"msr-3 rounded-circle\" width=\"40\" src=\"assets/images/user/usrbig5.jpg\">\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title font-16\">Cara Stevens</div>\r\n                  <div class=\"text-job text-muted mb-0\">M.B.B.S.</div>\r\n                </div>\r\n                <div class=\"ms-auto\">\r\n                  <div class=\"media-title font-16\">18 June '20</div>\r\n                  <div class=\"text-job text-muted mb-0\">11:00-12:30</div>\r\n                </div>\r\n              </li>\r\n              <li class=\"lecture-list\">\r\n                <img alt=\"image\" class=\"msr-3 rounded-circle\" width=\"40\" src=\"assets/images/user/usrbig6.jpg\">\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title font-16\">Jacob Ryan</div>\r\n                  <div class=\"text-job text-muted mb-0\">M.D.</div>\r\n                </div>\r\n                <div class=\"ms-auto\">\r\n                  <div class=\"media-title font-16\">22 June '20</div>\r\n                  <div class=\"text-job text-muted mb-0\">13:00-14:15</div>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <!-- Customer Review -->\r\n      <div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Customer Review</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"review-block\">\r\n              <div class=\"row\">\r\n                <div class=\"review-img\">\r\n                  <img src=\"assets/images/user/user1.jpg\" alt=\"\">\r\n                </div>\r\n                <div class=\"col\">\r\n                  <h6 class=\"m-b-15\">Alis Smith\r\n                    <span class=\"float-end m-r-10 text-muted\"> a week ago</span>\r\n                  </h6>\r\n                  <i class=\"material-icons\">star</i>\r\n                  <i class=\"material-icons\">star</i>\r\n                  <i class=\"material-icons\">star</i>\r\n                  <i class=\"material-icons\">star_half</i>\r\n                  <i class=\"material-icons\">star_border</i>\r\n                  <p class=\"m-t-15 m-b-15 text-muted\">Lorem ipsum dolor sit amet, consectetur\r\n                    adipiscing elit. Etiam vel rutrum ex, at\r\n                    ornare mi. In quis scelerisque dui, eget rhoncus orci. Fusce et sodales\r\n                    ipsum.\r\n                    Nam id nunc euismod, aliquet arcu quis, mattis nisi.</p>\r\n                  <a href=\"#!\">\r\n                    <i class=\"material-icons m-r-10\">thumb_up</i>\r\n                  </a>\r\n                  <a href=\"#!\">\r\n                    <i class=\"material-icons m-r-10 col-red\">thumb_down</i>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"review-img\">\r\n                  <img src=\"assets/images/user/user2.jpg\" alt=\"\">\r\n                </div>\r\n                <div class=\"col\">\r\n                  <h6 class=\"m-b-15\">John Dio\r\n                    <span class=\"float-end m-r-10 text-muted\"> a week ago</span>\r\n                  </h6>\r\n                  <i class=\"material-icons\">star</i>\r\n                  <i class=\"material-icons\">star_half</i>\r\n                  <i class=\"material-icons\">star_border</i>\r\n                  <i class=\"material-icons\">star_border</i>\r\n                  <i class=\"material-icons\">star_border</i>\r\n                  <p class=\"m-t-15 m-b-15 text-muted\">Nam quis ligula est. Nunc sed risus non\r\n                    turpis tristique tempor. Ut sollicitudin\r\n                    faucibus magna nec gravida. Suspendisse ullamcorper justo vel porta\r\n                    imperdiet.\r\n                    Nunc nec ipsum vel augue placerat faucibus. </p>\r\n                  <a href=\"#!\">\r\n                    <i class=\"material-icons m-r-10\">thumb_up</i>\r\n                  </a>\r\n                  <a href=\"#!\">\r\n                    <i class=\"material-icons m-r-10 col-red\">thumb_down</i>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n              <div class=\"text-center  m-b-5\">\r\n                <a href=\"#!\" class=\"b-b-primary text-primary\">View all Customer Reviews</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- #END# Customer Review -->\r\n      <div class=\"col-md-4 col-sm-12 col-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Earning Source</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"totalEarning\">\r\n              <h2>$90,808</h2>\r\n            </div>\r\n            <div class=\"tab-pane body\" id=\"skills\">\r\n              <ul class=\"list-unstyled\">\r\n                <li>\r\n                  <div class=\"mb-2\">\r\n                    <span class=\"progress-label\">envato.com</span>\r\n                    <span class=\"pull-right progress-percent label label-info m-b-5\">17%</span>\r\n                  </div>\r\n                  <div class=\"progress skill-progress m-b-20 w-100\">\r\n                    <div class=\"progress-bar l-bg-green width-per-45\" role=\"progressbar\" aria-valuenow=\"45\"\r\n                      aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <div class=\"mb-2\">\r\n                    <span class=\"pull-left progress-label\">google.com</span>\r\n                    <span class=\"pull-right progress-percent label label-danger m-b-5\">27%</span>\r\n                  </div>\r\n                  <div class=\"progress skill-progress m-b-20 w-100\">\r\n                    <div class=\"progress-bar l-bg-purple width-per-27\" role=\"progressbar\" aria-valuenow=\"27\"\r\n                      aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <div class=\"mb-2\">\r\n                    <span class=\"pull-left progress-label\">yahoo.com</span>\r\n                    <span class=\"pull-right progress-percent label label-primary m-b-5\">25%</span>\r\n                  </div>\r\n                  <div class=\"progress skill-progress m-b-20 w-100\">\r\n                    <div class=\"progress-bar l-bg-orange width-per-25\" role=\"progressbar\" aria-valuenow=\"25\"\r\n                      aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <div class=\"mb-2\">\r\n                    <span class=\"pull-left progress-label\">store</span>\r\n                    <span class=\"pull-right progress-percent label label-success m-b-5\">18%</span>\r\n                  </div>\r\n                  <div class=\"progress skill-progress m-b-20 w-100\">\r\n                    <div class=\"progress-bar l-bg-cyan width-per-18\" role=\"progressbar\" aria-valuenow=\"18\"\r\n                      aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <div class=\"mb-2\">\r\n                    <span class=\"pull-left progress-label\">Others</span>\r\n                    <span class=\"pull-right progress-percent label label-warning m-b-5\">13%</span>\r\n                  </div>\r\n                  <div class=\"progress skill-progress m-b-20 w-100\">\r\n                    <div class=\"progress-bar l-bg-red width-per-13\" role=\"progressbar\" aria-valuenow=\"13\"\r\n                      aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\r\n        <div class=\"box-part text-center\">\r\n          <i class=\"fab fa-twitter fa-3x col-blue\"></i>\r\n          <div class=\"title p-t-15\">\r\n            <h3>Twitter</h3>\r\n          </div>\r\n          <div class=\"text p-b-10\">\r\n            <span>Lorem ipsum dolor sit amet, id quo eruditi\r\n              eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui\r\n              ad.</span>\r\n          </div>\r\n          <a href=\"#\">Learn More</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\r\n        <div class=\"box-part text-center\">\r\n          <i class=\"fab fa-instagram fa-3x col-red\"></i>\r\n          <div class=\"title p-t-15\">\r\n            <h3>Instagram</h3>\r\n          </div>\r\n          <div class=\"text p-b-10\">\r\n            <span>Lorem ipsum dolor sit amet, id quo eruditi\r\n              eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui\r\n              ad.</span>\r\n          </div>\r\n          <a href=\"#\">Learn More</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\r\n        <div class=\"box-part text-center\">\r\n          <i class=\"fab fa-facebook-f fa-3x col-blue\"></i>\r\n          <div class=\"title p-t-15\">\r\n            <h3>Facebook</h3>\r\n          </div>\r\n          <div class=\"text p-b-10\">\r\n            <span>Lorem ipsum dolor sit amet, id quo eruditi\r\n              eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui\r\n              ad.</span>\r\n          </div>\r\n          <a href=\"#\">Learn More</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Activity</h2>\r\n\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"assign-style\" style=\"position: relative; max-height: 400px;\" [perfectScrollbar]>\r\n              <ul class=\"feedBody\">\r\n                <li class=\"active-feed\">\r\n                  <div class=\"feed-user-img\">\r\n                    <img src=\"assets/images/user/user1.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">\r\n                  </div>\r\n                  <h6>\r\n                    <span class=\"feedLblStyle lblFileStyle\">File</span> Sarah Smith\r\n                    <small class=\"text-muted\">6 hours ago</small>\r\n                  </h6>\r\n                  <p class=\"m-b-15 m-t-15\">\r\n                    hii John, I have upload doc related to task.\r\n                  </p>\r\n                </li>\r\n                <li class=\"diactive-feed\">\r\n                  <div class=\"feed-user-img\">\r\n                    <img src=\"assets/images/user/user2.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">\r\n                  </div>\r\n                  <h6>\r\n                    <span class=\"feedLblStyle lblTaskStyle\">Task </span> Jalpa Joshi\r\n                    <small class=\"text-muted\">5 hours ago\r\n                    </small>\r\n                  </h6>\r\n                  <p class=\"m-b-15 m-t-15\">\r\n                    Please do as specify. Let me know if you have any query.\r\n                  </p>\r\n                </li>\r\n                <li class=\"diactive-feed\">\r\n                  <div class=\"feed-user-img\">\r\n                    <img src=\"assets/images/user/user3.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">\r\n                  </div>\r\n                  <h6>\r\n                    <span class=\"feedLblStyle lblCommentStyle\">comment</span> Lina Smith\r\n                    <small class=\"text-muted\">6 hours ago</small>\r\n                  </h6>\r\n                  <p class=\"m-b-15 m-t-15\">\r\n                    Hey, How are you??\r\n                  </p>\r\n                </li>\r\n                <li class=\"active-feed\">\r\n                  <div class=\"feed-user-img\">\r\n                    <img src=\"assets/images/user/user4.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">\r\n                  </div>\r\n                  <h6>\r\n                    <span class=\"feedLblStyle lblReplyStyle\">Reply</span> Jacob Ryan\r\n                    <small class=\"text-muted\">7 hours ago</small>\r\n                  </h6>\r\n                  <p class=\"m-b-15 m-t-15\">\r\n                    I am fine. You??\r\n                  </p>\r\n                </li>\r\n                <li class=\"active-feed\">\r\n                  <div class=\"feed-user-img\">\r\n                    <img src=\"assets/images/user/user5.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">\r\n                  </div>\r\n                  <h6>\r\n                    <span class=\"feedLblStyle lblFileStyle\">File</span> Sarah Smith\r\n                    <small class=\"text-muted\">6 hours ago</small>\r\n                  </h6>\r\n                  <p class=\"m-b-15 m-t-15\">\r\n                    hii John, I have upload doc related to task.\r\n                  </p>\r\n                </li>\r\n                <li class=\"diactive-feed\">\r\n                  <div class=\"feed-user-img\">\r\n                    <img src=\"assets/images/user/user6.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">\r\n                  </div>\r\n                  <h6>\r\n                    <span class=\"feedLblStyle lblTaskStyle\">Task </span> Jalpa Joshi\r\n                    <small class=\"text-muted\">5 hours ago\r\n                    </small>\r\n                  </h6>\r\n                  <p class=\"m-b-15 m-t-15\">\r\n                    Please do as specify. Let me know if you have any query.\r\n                  </p>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Assign Task</h2>\r\n          </div>\r\n          <div class=\"tableBody\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table table-hover dashboard-task-infos\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>User</th>\r\n                    <th>Task</th>\r\n                    <th>Status</th>\r\n                    <th>Manager</th>\r\n                    <th>Progress</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td class=\"table-img\">\r\n                      <img src=\"assets/images/user/user1.jpg\" alt=\"\">\r\n                    </td>\r\n                    <td>Task A</td>\r\n                    <td>\r\n                      <span class=\"label l-bg-green shadow-style\">Doing</span>\r\n                    </td>\r\n                    <td>John Doe</td>\r\n                    <td>\r\n                      <div class=\"progress shadow-style\">\r\n                        <div class=\"progress-bar l-bg-green width-per-62\" role=\"progressbar\" aria-valuenow=\"62\"\r\n                          aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"table-img\">\r\n                      <img src=\"assets/images/user/user2.jpg\" alt=\"\">\r\n                    </td>\r\n                    <td>Task B</td>\r\n                    <td>\r\n                      <span class=\"label l-bg-purple shadow-style\">To Do</span>\r\n                    </td>\r\n                    <td>John Doe</td>\r\n                    <td>\r\n                      <div class=\"progress shadow-style\">\r\n                        <div class=\"progress-bar l-bg-purple width-per-40\" role=\"progressbar\" aria-valuenow=\"40\"\r\n                          aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"table-img\">\r\n                      <img src=\"assets/images/user/user3.jpg\" alt=\"\">\r\n                    </td>\r\n                    <td>Task C</td>\r\n                    <td>\r\n                      <span class=\"label l-bg-orange shadow-style\">On Hold</span>\r\n                    </td>\r\n                    <td>John Doe</td>\r\n                    <td>\r\n                      <div class=\"progress shadow-style\">\r\n                        <div class=\"progress-bar l-bg-orange width-per-72\" role=\"progressbar\" aria-valuenow=\"72\"\r\n                          aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"table-img\">\r\n                      <img src=\"assets/images/user/user4.jpg\" alt=\"\">\r\n                    </td>\r\n                    <td>Task D</td>\r\n                    <td>\r\n                      <span class=\"label l-bg-cyan shadow-style\">Wait Approvel</span>\r\n                    </td>\r\n                    <td>John Doe</td>\r\n                    <td>\r\n                      <div class=\"progress shadow-style\">\r\n                        <div class=\"progress-bar l-bg-cyan width-per-95\" role=\"progressbar\" aria-valuenow=\"95\"\r\n                          aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"table-img\">\r\n                      <img src=\"assets/images/user/user5.jpg\" alt=\"\">\r\n                    </td>\r\n                    <td>Task E</td>\r\n                    <td>\r\n                      <span class=\"label bg-green shadow-style\">Suspended</span>\r\n                    </td>\r\n                    <td>John Doe</td>\r\n                    <td>\r\n                      <div class=\"progress shadow-style\">\r\n                        <div class=\"progress-bar l-bg-green width-per-87\" role=\"progressbar\" aria-valuenow=\"87\"\r\n                          aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"table-img\">\r\n                      <img src=\"assets/images/user/user1.jpg\" alt=\"\">\r\n                    </td>\r\n                    <td>Task A</td>\r\n                    <td>\r\n                      <span class=\"label bg-green shadow-style\">Doing</span>\r\n                    </td>\r\n                    <td>John Doe</td>\r\n                    <td>\r\n                      <div class=\"progress shadow-style\">\r\n                        <div class=\"progress-bar l-bg-green width-per-62\" role=\"progressbar\" aria-valuenow=\"62\"\r\n                          aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"table-img\">\r\n                      <img src=\"assets/images/user/user2.jpg\" alt=\"\">\r\n                    </td>\r\n                    <td>Task B</td>\r\n                    <td>\r\n                      <span class=\"label l-bg-purple shadow-style\">To Do</span>\r\n                    </td>\r\n                    <td>John Doe</td>\r\n                    <td>\r\n                      <div class=\"progress shadow-style\">\r\n                        <div class=\"progress-bar l-bg-purple width-per-40\" role=\"progressbar\" aria-valuenow=\"40\"\r\n                          aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>New Orders</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <div id=\"new-orders\" class=\"media-list position-relative\" style=\"position: relative; max-height: 390px;\"\r\n              [perfectScrollbar]>\r\n              <div class=\"table-responsive\">\r\n                <table id=\"new-orders-table\" class=\"table table-hover table-xl mb-0\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th class=\"border-top-0\">Product</th>\r\n                      <th class=\"border-top-0\">Customers</th>\r\n                      <th class=\"border-top-0\">Total</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr>\r\n                      <td class=\"text-truncate\">iPhone X</td>\r\n                      <td class=\"text-truncate\">\r\n                        <ul class=\"list-unstyled order-list\">\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <img class=\"rounded-circle\" src=\"assets/images/user/user1.jpg\" alt=\"user\">\r\n                          </li>\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <img class=\"rounded-circle\" src=\"assets/images/user/user2.jpg\" alt=\"user\">\r\n                          </li>\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <img class=\"rounded-circle\" src=\"assets/images/user/user3.jpg\" alt=\"user\">\r\n                          </li>\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <span class=\"badge\">+4</span>\r\n                          </li>\r\n                        </ul>\r\n                      </td>\r\n                      <td class=\"text-truncate\">$8999</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td class=\"text-truncate\">Pixel 2</td>\r\n                      <td class=\"text-truncate\">\r\n                        <ul class=\"list-unstyled order-list\">\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <img class=\"rounded-circle\" src=\"assets/images/user/user1.jpg\" alt=\"user\">\r\n                          </li>\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <img class=\"rounded-circle\" src=\"assets/images/user/user2.jpg\" alt=\"user\">\r\n                          </li>\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <img class=\"rounded-circle\" src=\"assets/images/user/user3.jpg\" alt=\"user\">\r\n                          </li>\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <span class=\"badge\">+4</span>\r\n                          </li>\r\n                        </ul>\r\n                      </td>\r\n                      <td class=\"text-truncate\">$5550</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td class=\"text-truncate\">OnePlus</td>\r\n                      <td class=\"text-truncate\">\r\n                        <ul class=\"list-unstyled order-list\">\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <img class=\"rounded-circle\" src=\"assets/images/user/user1.jpg\" alt=\"user\">\r\n                          </li>\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <img class=\"rounded-circle\" src=\"assets/images/user/user2.jpg\" alt=\"user\">\r\n                          </li>\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <img class=\"rounded-circle\" src=\"assets/images/user/user3.jpg\" alt=\"user\">\r\n                          </li>\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <span class=\"badge\">+4</span>\r\n                          </li>\r\n                        </ul>\r\n                      </td>\r\n                      <td class=\"text-truncate\">$9000</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td class=\"text-truncate\">Galaxy</td>\r\n                      <td class=\"text-truncate\">\r\n                        <ul class=\"list-unstyled order-list\">\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <img class=\"rounded-circle\" src=\"assets/images/user/user1.jpg\" alt=\"user\">\r\n                          </li>\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <img class=\"rounded-circle\" src=\"assets/images/user/user2.jpg\" alt=\"user\">\r\n                          </li>\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <img class=\"rounded-circle\" src=\"assets/images/user/user3.jpg\" alt=\"user\">\r\n                          </li>\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <span class=\"badge\">+4</span>\r\n                          </li>\r\n                        </ul>\r\n                      </td>\r\n                      <td class=\"text-truncate\">$7500</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td class=\"text-truncate\">Moto Z2</td>\r\n                      <td class=\"text-truncate\">\r\n                        <ul class=\"list-unstyled order-list\">\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <img class=\"rounded-circle\" src=\"assets/images/user/user1.jpg\" alt=\"user\">\r\n                          </li>\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <img class=\"rounded-circle\" src=\"assets/images/user/user2.jpg\" alt=\"user\">\r\n                          </li>\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <img class=\"rounded-circle\" src=\"assets/images/user/user3.jpg\" alt=\"user\">\r\n                          </li>\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <span class=\"badge\">+4</span>\r\n                          </li>\r\n                        </ul>\r\n                      </td>\r\n                      <td class=\"text-truncate\">$8500</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td class=\"text-truncate\">iPhone X</td>\r\n                      <td class=\"text-truncate\">\r\n                        <ul class=\"list-unstyled order-list\">\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <img class=\"rounded-circle\" src=\"assets/images/user/user1.jpg\" alt=\"user\">\r\n                          </li>\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <img class=\"rounded-circle\" src=\"assets/images/user/user2.jpg\" alt=\"user\">\r\n                          </li>\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <img class=\"rounded-circle\" src=\"assets/images/user/user3.jpg\" alt=\"user\">\r\n                          </li>\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <span class=\"badge\">+4</span>\r\n                          </li>\r\n                        </ul>\r\n                      </td>\r\n                      <td class=\"text-truncate\">$8999</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td class=\"text-truncate\">iPhone X</td>\r\n                      <td class=\"text-truncate\">\r\n                        <ul class=\"list-unstyled order-list\">\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <img class=\"rounded-circle\" src=\"assets/images/user/user1.jpg\" alt=\"user\">\r\n                          </li>\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <img class=\"rounded-circle\" src=\"assets/images/user/user2.jpg\" alt=\"user\">\r\n                          </li>\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <img class=\"rounded-circle\" src=\"assets/images/user/user3.jpg\" alt=\"user\">\r\n                          </li>\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <span class=\"badge\">+4</span>\r\n                          </li>\r\n                        </ul>\r\n                      </td>\r\n                      <td class=\"text-truncate\">$8999</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td class=\"text-truncate\">Pixel 2</td>\r\n                      <td class=\"text-truncate\">\r\n                        <ul class=\"list-unstyled order-list\">\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <img class=\"rounded-circle\" src=\"assets/images/user/user1.jpg\" alt=\"user\">\r\n                          </li>\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <img class=\"rounded-circle\" src=\"assets/images/user/user2.jpg\" alt=\"user\">\r\n                          </li>\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <img class=\"rounded-circle\" src=\"assets/images/user/user3.jpg\" alt=\"user\">\r\n                          </li>\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <span class=\"badge\">+4</span>\r\n                          </li>\r\n                        </ul>\r\n                      </td>\r\n                      <td class=\"text-truncate\">$5550</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td class=\"text-truncate\">OnePlus</td>\r\n                      <td class=\"text-truncate\">\r\n                        <ul class=\"list-unstyled order-list\">\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <img class=\"rounded-circle\" src=\"assets/images/user/user1.jpg\" alt=\"user\">\r\n                          </li>\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <img class=\"rounded-circle\" src=\"assets/images/user/user2.jpg\" alt=\"user\">\r\n                          </li>\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <img class=\"rounded-circle\" src=\"assets/images/user/user3.jpg\" alt=\"user\">\r\n                          </li>\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <span class=\"badge\">+4</span>\r\n                          </li>\r\n                        </ul>\r\n                      </td>\r\n                      <td class=\"text-truncate\">$9000</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td class=\"text-truncate\">Galaxy</td>\r\n                      <td class=\"text-truncate\">\r\n                        <ul class=\"list-unstyled order-list\">\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <img class=\"rounded-circle\" src=\"assets/images/user/user1.jpg\" alt=\"user\">\r\n                          </li>\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <img class=\"rounded-circle\" src=\"assets/images/user/user2.jpg\" alt=\"user\">\r\n                          </li>\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <img class=\"rounded-circle\" src=\"assets/images/user/user3.jpg\" alt=\"user\">\r\n                          </li>\r\n                          <li class=\"avatar avatar-sm\">\r\n                            <span class=\"badge\">+4</span>\r\n                          </li>\r\n                        </ul>\r\n                      </td>\r\n                      <td class=\"text-truncate\">$7500</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Task List</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n\r\n            <mat-tab-group>\r\n              <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                  <img src=\"assets/images/user/user1.jpg\" alt=\"user\">Sarah Smith\r\n                </ng-template>\r\n                <div class=\"table-responsive mt-3\">\r\n                  <table class=\"table table-hover dashboard-task-infos\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th>Task</th>\r\n                        <th>Status</th>\r\n                        <th>Manager</th>\r\n                        <th>Progress</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr>\r\n                        <td>Task C</td>\r\n                        <td><span class=\"badge col-green\">Completed</span></td>\r\n                        <td>John Doe</td>\r\n                        <td>\r\n                          <div class=\"progress shadow-style\">\r\n                            <div class=\"progress-bar l-bg-green width-per-72\" role=\"progressbar\" aria-valuenow=\"72\"\r\n                              aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Task A</td>\r\n                        <td><span class=\"badge col-red\">On Process</span></td>\r\n                        <td>John Doe</td>\r\n                        <td>\r\n                          <div class=\"progress shadow-style\">\r\n                            <div class=\"progress-bar l-bg-red width-per-62\" role=\"progressbar\" aria-valuenow=\"62\"\r\n                              aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Task B</td>\r\n                        <td><span class=\"badge col-purple\">On Hold</span></td>\r\n                        <td>John Doe</td>\r\n                        <td>\r\n                          <div class=\"progress shadow-style\">\r\n                            <div class=\"progress-bar l-bg-purple width-per-40\" role=\"progressbar\" aria-valuenow=\"40\"\r\n                              aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Task D</td>\r\n                        <td><span class=\"badge col-green\">Completed</span></td>\r\n                        <td>John Doe</td>\r\n                        <td>\r\n                          <div class=\"progress shadow-style\">\r\n                            <div class=\"progress-bar l-bg-green width-per-72\" role=\"progressbar\" aria-valuenow=\"72\"\r\n                              aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Task E</td>\r\n                        <td><span class=\"badge col-purple\">On Hold</span></td>\r\n                        <td>John Doe</td>\r\n                        <td>\r\n                          <div class=\"progress shadow-style\">\r\n                            <div class=\"progress-bar l-bg-purple width-per-40\" role=\"progressbar\" aria-valuenow=\"40\"\r\n                              aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Task F</td>\r\n                        <td><span class=\"badge col-purple\">On Hold</span></td>\r\n                        <td>John Doe</td>\r\n                        <td>\r\n                          <div class=\"progress shadow-style\">\r\n                            <div class=\"progress-bar l-bg-purple width-per-40\" role=\"progressbar\" aria-valuenow=\"40\"\r\n                              aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </mat-tab>\r\n\r\n              <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                  <img src=\"assets/images/user/user2.jpg\" alt=\"user\">Jalpa Joshi\r\n                </ng-template>\r\n                <div class=\"table-responsive mt-3\">\r\n                  <table class=\"table table-hover dashboard-task-infos\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th>Task</th>\r\n                        <th>Status</th>\r\n                        <th>Manager</th>\r\n                        <th>Progress</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr>\r\n                        <td>Task D</td>\r\n                        <td><span class=\"badge col-red\">On Process</span></td>\r\n                        <td>John Doe</td>\r\n                        <td>\r\n                          <div class=\"progress shadow-style\">\r\n                            <div class=\"progress-bar l-bg-red width-per-62\" role=\"progressbar\" aria-valuenow=\"62\"\r\n                              aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Task E</td>\r\n                        <td><span class=\"badge col-purple\">On Hold</span></td>\r\n                        <td>John Doe</td>\r\n                        <td>\r\n                          <div class=\"progress shadow-style\">\r\n                            <div class=\"progress-bar l-bg-purple width-per-40\" role=\"progressbar\" aria-valuenow=\"40\"\r\n                              aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Task F</td>\r\n                        <td><span class=\"badge col-green\">Completed</span></td>\r\n                        <td>John Doe</td>\r\n                        <td>\r\n                          <div class=\"progress shadow-style\">\r\n                            <div class=\"progress-bar l-bg-green width-per-72\" role=\"progressbar\" aria-valuenow=\"72\"\r\n                              aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Task G</td>\r\n                        <td><span class=\"badge col-red\">On Process</span></td>\r\n                        <td>John Doe</td>\r\n                        <td>\r\n                          <div class=\"progress shadow-style\">\r\n                            <div class=\"progress-bar l-bg-red width-per-62\" role=\"progressbar\" aria-valuenow=\"62\"\r\n                              aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Task K</td>\r\n                        <td><span class=\"badge col-purple\">On Hold</span></td>\r\n                        <td>John Doe</td>\r\n                        <td>\r\n                          <div class=\"progress shadow-style\">\r\n                            <div class=\"progress-bar l-bg-purple width-per-40\" role=\"progressbar\" aria-valuenow=\"40\"\r\n                              aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Task M</td>\r\n                        <td><span class=\"badge col-red\">On Process</span></td>\r\n                        <td>John Doe</td>\r\n                        <td>\r\n                          <div class=\"progress shadow-style\">\r\n                            <div class=\"progress-bar l-bg-red width-per-62\" role=\"progressbar\" aria-valuenow=\"62\"\r\n                              aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </mat-tab>\r\n\r\n              <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                  <img src=\"assets/images/user/user3.jpg\" alt=\"user\">Mark Peter\r\n                </ng-template>\r\n                <div class=\"table-responsive mt-3\">\r\n                  <table class=\"table table-hover dashboard-task-infos\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th>Task</th>\r\n                        <th>Status</th>\r\n                        <th>Manager</th>\r\n                        <th>Progress</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr>\r\n                        <td>Task E</td>\r\n                        <td><span class=\"badge col-purple\">On Hold</span></td>\r\n                        <td>John Doe</td>\r\n                        <td>\r\n                          <div class=\"progress shadow-style\">\r\n                            <div class=\"progress-bar l-bg-purple width-per-40\" role=\"progressbar\" aria-valuenow=\"40\"\r\n                              aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Task D</td>\r\n                        <td><span class=\"badge col-red\">On Process</span></td>\r\n                        <td>John Doe</td>\r\n                        <td>\r\n                          <div class=\"progress shadow-style\">\r\n                            <div class=\"progress-bar l-bg-red width-per-62\" role=\"progressbar\" aria-valuenow=\"62\"\r\n                              aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Task F</td>\r\n                        <td><span class=\"badge col-green\">Completed</span></td>\r\n                        <td>John Doe</td>\r\n                        <td>\r\n                          <div class=\"progress shadow-style\">\r\n                            <div class=\"progress-bar l-bg-green width-per-72\" role=\"progressbar\" aria-valuenow=\"72\"\r\n                              aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Task L</td>\r\n                        <td><span class=\"badge col-red\">On Process</span></td>\r\n                        <td>John Doe</td>\r\n                        <td>\r\n                          <div class=\"progress shadow-style\">\r\n                            <div class=\"progress-bar l-bg-red width-per-62\" role=\"progressbar\" aria-valuenow=\"62\"\r\n                              aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Task H</td>\r\n                        <td><span class=\"badge col-purple\">On Hold</span></td>\r\n                        <td>John Doe</td>\r\n                        <td>\r\n                          <div class=\"progress shadow-style\">\r\n                            <div class=\"progress-bar l-bg-purple width-per-40\" role=\"progressbar\" aria-valuenow=\"40\"\r\n                              aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Task L</td>\r\n                        <td><span class=\"badge col-red\">On Process</span></td>\r\n                        <td>John Doe</td>\r\n                        <td>\r\n                          <div class=\"progress shadow-style\">\r\n                            <div class=\"progress-bar l-bg-red width-per-62\" role=\"progressbar\" aria-valuenow=\"62\"\r\n                              aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </mat-tab>\r\n            </mat-tab-group>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n        <div class=\"card profile-header\">\r\n          <div class=\"body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-4 col-md-4 col-12\">\r\n                <div class=\"profile-image float-md-right\"> <img src=\"assets/images/user/usrbig6.jpg\" alt=\"\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-8 col-md-8 col-12\">\r\n                <h4 class=\"m-t-0 m-b-0\"><strong>Sarah</strong> Smith</h4>\r\n                <span class=\"job_post\">Java Develper</span>\r\n                <p>102, Svayam Appartment, new P.L. road, Rajkot-369852</p>\r\n                <div>\r\n                  <button type=\"button\" class=\"btn btn-outline-success btn-border-radius msr-2\">Follow</button>\r\n                  <button type=\"button\" class=\"btn btn-outline-warning btn-border-radius\">Message</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n        <div class=\"card profile-header\">\r\n          <div class=\"body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-4 col-md-4 col-12\">\r\n                <div class=\"profile-image float-md-right\"> <img src=\"assets/images/user/usrbig1.jpg\" alt=\"\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-8 col-md-8 col-12\">\r\n                <h4 class=\"m-t-0 m-b-0\"><strong>Sarah</strong> Smith</h4>\r\n                <span class=\"job_post\">Java Develper</span>\r\n                <p>102, Svayam Appartment, new P.L. road, Rajkot-369852</p>\r\n                <div>\r\n                  <button type=\"button\" class=\"btn btn-outline-success btn-border-radius msr-2\">Follow</button>\r\n                  <button type=\"button\" class=\"btn btn-outline-warning btn-border-radius\">Message</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Recent Activities</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"sl-item sl-primary\">\r\n              <div class=\"sl-content\">\r\n                <small class=\"text-muted\">\r\n                  <i class=\"fa fa-user position-left\"></i> 5 mins ago</small>\r\n                <p>Lorem ipsum dolor sit amet conse ctetur which ascing elit users.</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"sl-item sl-danger\">\r\n              <div class=\"sl-content\">\r\n                <small class=\"text-muted\">\r\n                  <i class=\"fa fa-user position-left\"></i> 8 mins ago</small>\r\n                <p>Lorem ipsum dolor sit ametcon the sectetur that ascing elit users.</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"sl-item sl-success\">\r\n              <div class=\"sl-content\">\r\n                <small class=\"text-muted\">\r\n                  <i class=\"fa fa-user position-left\"></i> 10 mins ago</small>\r\n                <p>Lorem ipsum dolor sit amet cons the ecte tur and adip ascing elit users.</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"sl-item sl-warning\">\r\n              <div class=\"sl-content\">\r\n                <small class=\"text-muted\">\r\n                  <i class=\"fa fa-user position-left\"></i> 12 mins ago</small>\r\n                <p>Lorem ipsum dolor sit amet consec tetur adip ascing elit users.</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"sl-item sl-primary\">\r\n              <div class=\"sl-content\">\r\n                <small class=\"text-muted\">\r\n                  <i class=\"fa fa-user position-left\"></i> 5 mins ago</small>\r\n                <p>Lorem ipsum dolor sit amet conse ctetur which ascing elit users.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n        <div class=\"card\">\r\n          <div class=\"chat\">\r\n            <div class=\"chat-header clearfix\">\r\n              <img src=\"assets/images/user/user2.jpg\" alt=\"avatar\">\r\n              <div class=\"chat-about\">\r\n                <div class=\"chat-with\">Aiden Chavez</div>\r\n                <div class=\"chat-num-messages\">2 new messages</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"chat-history\" id=\"chat-conversation\" style=\"position: relative; max-height: 270px;\"\r\n              [perfectScrollbar]>\r\n              <ul>\r\n                <li class=\"clearfix\">\r\n                  <div class=\"message-data text-end\">\r\n                    <span class=\"message-data-time\">10:10 AM, Today</span> &nbsp; &nbsp;\r\n                    <span class=\"message-data-name\">Michael</span>\r\n                    <i class=\"zmdi zmdi-circle me\"></i>\r\n                  </div>\r\n                  <div class=\"message other-message float-end\"> Hi Aiden, how are you? How is\r\n                    the project coming along? </div>\r\n                </li>\r\n                <li>\r\n                  <div class=\"message-data\">\r\n                    <span class=\"message-data-name\">\r\n                      <i class=\"zmdi zmdi-circle online\"></i> Aiden</span>\r\n                    <span class=\"message-data-time\">10:12 AM, Today</span>\r\n                  </div>\r\n                  <div class=\"message my-message\">\r\n                    <p>Are we meeting today? Project has been already finished and I have\r\n                      results to\r\n                      show you.</p>\r\n                    <div class=\"row\">\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <div class=\"message-data\">\r\n                    <span class=\"message-data-name\">\r\n                      <i class=\"zmdi zmdi-circle online\"></i> Aiden</span>\r\n                    <span class=\"message-data-time\">10:12 AM, Today</span>\r\n                  </div>\r\n                  <div class=\"message my-message\">\r\n                    <p>Are we meeting today? Project has been already finished and I have\r\n                      results to\r\n                      show you.</p>\r\n                    <div class=\"row\">\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li class=\"clearfix\">\r\n                  <div class=\"message-data text-end\">\r\n                    <span class=\"message-data-time\">10:10 AM, Today</span> &nbsp; &nbsp;\r\n                    <span class=\"message-data-name\">Michael</span>\r\n                    <i class=\"zmdi zmdi-circle me\"></i>\r\n                  </div>\r\n                  <div class=\"message other-message float-end\"> Hi Aiden, how are you? How is\r\n                    the project coming along? </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n            <div class=\"chat-message clearfix\">\r\n              <div class=\"form-group\">\r\n                <div class=\"form-line\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"Enter text here..\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Latest Posts</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"card-block\">\r\n              <div class=\"row m-b-20\">\r\n                <div class=\"col-auto p-r-0\">\r\n                  <img src=\"assets/images/posts/post1.jpg\" alt=\"user image\" class=\"latest-posts-img\">\r\n                </div>\r\n                <div class=\"col\">\r\n                  <h6>About Something</h6>\r\n                  <p class=\"text-muted m-b-5\">\r\n                    <i class=\"fa fa-play-circle-o\"></i> Video | 10 minutes ago</p>\r\n                  <p class=\"text-muted \">Lorem Ipsum is simply dummy text of the.</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"row m-b-20\">\r\n                <div class=\"col-auto p-r-0\">\r\n                  <img src=\"assets/images/posts/post2.jpg\" alt=\"user image\" class=\"latest-posts-img\">\r\n                </div>\r\n                <div class=\"col\">\r\n                  <h6>Relationship</h6>\r\n                  <p class=\"text-muted m-b-5\">\r\n                    <i class=\"fa fa-play-circle-o\"></i> Video | 24 minutes ago</p>\r\n                  <p class=\"text-muted \">Lorem Ipsum is simply dummy text of the.</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"row m-b-20\">\r\n                <div class=\"col-auto p-r-0\">\r\n                  <img src=\"assets/images/posts/post3.jpg\" alt=\"user image\" class=\"latest-posts-img\">\r\n                </div>\r\n                <div class=\"col\">\r\n                  <h6>Human body</h6>\r\n                  <p class=\"text-muted m-b-5\">\r\n                    <i class=\"fa fa-play-circle-o\"></i> Video | 53 minutes ago</p>\r\n                  <p class=\"text-muted \">Lorem Ipsum is simply dummy text of the.</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"text-center\">\r\n                <a href=\"#!\" class=\"b-b-primary text-primary\">View All Posts</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Notice Board</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"recent-comment\">\r\n              <div class=\"notice-board\">\r\n                <div class=\"table-img\">\r\n                  <img class=\"notice-object\" src=\"assets/images/user/user6.jpg\" alt=\"...\">\r\n                </div>\r\n                <div class=\"notice-body\">\r\n                  <h5 class=\"notice-heading col-green\">Airi Satou</h5>\r\n                  <p>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.</p>\r\n                  <small class=\"text-muted\">7 hours ago</small>\r\n                </div>\r\n              </div>\r\n              <div class=\"notice-board\">\r\n                <div class=\"table-img\">\r\n                  <img class=\"notice-object\" src=\"assets/images/user/user4.jpg\" alt=\"...\">\r\n                </div>\r\n                <div class=\"notice-body\">\r\n                  <h5 class=\"notice-heading color-primary col-indigo\">Sarah Smith</h5>\r\n                  <p>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.</p>\r\n                  <p class=\"comment-date\">1 hour ago</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"notice-board\">\r\n                <div class=\"table-img\">\r\n                  <img class=\"notice-object\" src=\"assets/images/user/user3.jpg\" alt=\"...\">\r\n                </div>\r\n                <div class=\"notice-body\">\r\n                  <h5 class=\"notice-heading color-danger col-cyan\">Cara Stevens</h5>\r\n                  <p>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.</p>\r\n                  <div class=\"comment-date\">Yesterday</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"notice-board no-border\">\r\n                <div class=\"table-img\">\r\n                  <img class=\"notice-object\" src=\"assets/images/user/user7.jpg\" alt=\"...\">\r\n                </div>\r\n                <div class=\"notice-body\">\r\n                  <h5 class=\"notice-heading color-info col-orange\">Ashton Cox</h5>\r\n                  <p>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.</p>\r\n                  <div class=\"comment-date\">Yesterday</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Recent Activity</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <ul class=\"timeline\">\r\n              <li>\r\n                <div class=\"timeline-badge primary\">\r\n                  <img class=\"notice-object\" src=\"assets/images/user/user1.jpg\" alt=\"...\">\r\n                </div>\r\n                <div class=\"timeline-panel\">\r\n                  <div class=\"timeline-heading\">\r\n                    <h5 class=\"timeline-title\">Lorem ipsum dolor sit amet, id quo eruditi.</h5>\r\n                  </div>\r\n                  <div class=\"timeline-body\">\r\n                    <p>5 minutes ago</p>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <div class=\"timeline-badge primary\">\r\n                  <img class=\"notice-object\" src=\"assets/images/user/user2.jpg\" alt=\"...\">\r\n                </div>\r\n                <div class=\"timeline-panel\">\r\n                  <div class=\"timeline-heading\">\r\n                    <h5 class=\"timeline-title\">Lorem ipsum dolor sit amet, id quo eruditi.</h5>\r\n                  </div>\r\n                  <div class=\"timeline-body\">\r\n                    <p>10 minutes ago</p>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <div class=\"timeline-badge primary\">\r\n                  <img class=\"notice-object\" src=\"assets/images/user/user8.jpg\" alt=\"...\">\r\n                </div>\r\n                <div class=\"timeline-panel\">\r\n                  <div class=\"timeline-heading\">\r\n                    <h5 class=\"timeline-title\">Lorem ipsum dolor sit amet, id quo eruditi.</h5>\r\n                  </div>\r\n                  <div class=\"timeline-body\">\r\n                    <p>20 minutes ago</p>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <div class=\"timeline-badge primary\">\r\n                  <img class=\"notice-object\" src=\"assets/images/user/user4.jpg\" alt=\"...\">\r\n                </div>\r\n                <div class=\"timeline-panel\">\r\n                  <div class=\"timeline-heading\">\r\n                    <h5 class=\"timeline-title\">Lorem ipsum dolor sit amet, id quo eruditi.</h5>\r\n                  </div>\r\n                  <div class=\"timeline-body\">\r\n                    <p>35 minutes ago</p>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Todo List</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <div cdkDropList class=\"task-list\" (cdkDropListDropped)=\"drop($event)\"\r\n              style=\"position: relative; max-height: 370px;\" [perfectScrollbar]>\r\n              <div class=\"task-box\" *ngFor=\"let task of tasks\" cdkDrag>\r\n                <div>\r\n                  <div class=\"task-handle m-r-20\" cdkDragHandle>\r\n                    <mat-icon aria-hidden=\"false\">drag_indicator</mat-icon>\r\n                  </div>\r\n                </div>\r\n                <mat-checkbox (change)=\"toggle(task, sidenav)\" [checked]=\"!!task.done\" class=\"m-r-15\" color=\"primary\">\r\n                </mat-checkbox>\r\n                <div class=\"task-custom-placeholder\" *cdkDragPlaceholder></div>\r\n                <div matTooltip=\"Title\" [ngClass]=\"{done:task.done}\">\r\n                  {{task.title}}</div>\r\n                <div\r\n                  [ngClass]=\"{'task-low': task.priority=='Low', 'task-high': task.priority=='High','task-normal': task.priority=='Normal'}\">\r\n                  <mat-icon matTooltip=\"Low\" aria-hidden=\"false\" class=\"lbl-low\" *ngIf=\"task?.priority == 'Low'\">\r\n                    arrow_downward\r\n                  </mat-icon>\r\n                  <mat-icon matTooltip=\"High\" aria-hidden=\"false\" class=\"lbl-high\" *ngIf=\"task?.priority == 'High'\">\r\n                    arrow_upward\r\n                  </mat-icon>\r\n                  <mat-icon matTooltip=\"Normal\" aria-hidden=\"false\" class=\"lbl-normal\"\r\n                    *ngIf=\"task?.priority == 'Normal'\">\r\n                    remove</mat-icon>\r\n                  {{task.priority}}\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xl-4 col-lg-4 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Medications</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table table-borderless medicine-list\">\r\n                <tr>\r\n                  <td><i class=\"fas fa-tablets pill-style\"></i> Econochlor (chloramphenicol-oral)</td>\r\n                  <td class=\"text-end w-25\">\r\n                    <span class=\"badge-outline\">1 - 0 - 1</span>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td><i class=\"fas fa-capsules pill-style\"></i> Desmopressin tabs</td>\r\n                  <td class=\"text-end w-25\">\r\n                    <span class=\"badge-outline\">1 - 1 - 1</span>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td><i class=\"fas fa-syringe pill-style\"></i> Abciximab-injection</td>\r\n                  <td class=\"text-end w-25\">\r\n                    <span class=\"badge-outline\">1 Daily</span>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td><i class=\"fas fa-pills pill-style\"></i> Kevzara sarilumab</td>\r\n                  <td class=\"text-end w-25\">\r\n                    <span class=\"badge-outline\">0 - 0 - 1</span>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td><i class=\"fas fa-capsules pill-style\"></i> Gentamicin-topical</td>\r\n                  <td class=\"text-end w-25\">\r\n                    <span class=\"badge-outline\">1 - 0 - 1</span>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td><i class=\"fas fa-tablets pill-style\"></i> Paliperidone palmitate</td>\r\n                  <td class=\"text-end w-25\">\r\n                    <span class=\"badge-outline\">1 - 1 - 1</span>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td><i class=\"fas fa-syringe pill-style\"></i> Sermorelin-injectable</td>\r\n                  <td class=\"text-end w-25\">\r\n                    <span class=\"badge-outline\">1 Daily</span>\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n            <div class=\"text-center p-t-20\">\r\n              <button mat-stroked-button color=\"primary\">Report Adverse Effect</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xl-4 col-lg-4 col-md-12 col-sm-12\">\r\n        <div class=\"plain-card\">\r\n          <div class=\"card-inner\">\r\n            <h6 class=\"tx-primary m-b-15\">New Admission Report</h6>\r\n            <div class=\"row mb-2\">\r\n              <div class=\"col-4\">\r\n                <label class=\"font-14\">Today</label>\r\n                <h4>105<i class=\"material-icons col-green\">trending_up</i></h4>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <label class=\"font-14\">This Week</label>\r\n                <h4>825<i class=\"material-icons col-orange\">trending_down</i></h4>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <label class=\"font-14\">This Month</label>\r\n                <h4>22,067<i class=\"material-icons col-green\">trending_up</i></h4>\r\n              </div>\r\n            </div>\r\n            <div class=\"progress shadow-style mb-2 mt-3\">\r\n              <div class=\"progress-bar l-bg-green width-per-70\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\"\r\n                aria-valuemax=\"100\">70%</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"plain-card mt-4\">\r\n          <div class=\"card-inner\">\r\n            <h6 class=\"tx-primary m-b-15\">Fees Collection Report</h6>\r\n            <div class=\"row mb-2\">\r\n              <div class=\"col-4\">\r\n                <label class=\"font-14\">Today</label>\r\n                <h4>$147<i class=\"material-icons col-orange\">trending_down</i></h4>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <label class=\"font-14\">This Week</label>\r\n                <h4>$968<i class=\"material-icons col-green\">trending_up</i></h4>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <label class=\"font-14\">This Month</label>\r\n                <h4>$1,147<i class=\"material-icons col-orange\">trending_down</i></h4>\r\n              </div>\r\n            </div>\r\n            <div class=\"progress shadow-style mb-2 mt-3\">\r\n              <div class=\"progress-bar l-bg-red width-per-50\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\"\r\n                aria-valuemax=\"100\">50%</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "d0E2":
/*!*************************************************************!*\
  !*** ./src/app/widget/data-widget/data-widget.component.ts ***!
  \*************************************************************/
/*! exports provided: DataWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataWidgetComponent", function() { return DataWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_data_widget_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./data-widget.component.html */ "Ld+1");
/* harmony import */ var _data_widget_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-widget.component.sass */ "BXA7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");





let DataWidgetComponent = class DataWidgetComponent {
    constructor() {
        // TODO start
        this.tasks = [
            {
                id: "1",
                title: "Submit Science Homework",
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
                title: "Order new java book",
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
                title: "Pay Hostel Fees",
                done: false,
                priority: "High",
            },
            {
                id: "6",
                title: "Attend Seminar On Sunday",
                done: false,
                priority: "Normal",
            },
            {
                id: "7",
                title: "Renew bus pass",
                done: true,
                priority: "High",
            },
            {
                id: "8",
                title: "Issue book in library",
                done: false,
                priority: "High",
            },
            {
                id: "9",
                title: "Project report submit",
                done: false,
                priority: "Low",
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
    ngOnInit() { }
};
DataWidgetComponent.ctorParameters = () => [];
DataWidgetComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-data-widget",
        template: _raw_loader_data_widget_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_data_widget_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DataWidgetComponent);



/***/ }),

/***/ "kXT5":
/*!*****************************************!*\
  !*** ./src/app/widget/widget.module.ts ***!
  \*****************************************/
/*! exports provided: WidgetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetModule", function() { return WidgetModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _widget_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widget-routing.module */ "pZWl");
/* harmony import */ var _chart_widget_chart_widget_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chart-widget/chart-widget.component */ "8CUj");
/* harmony import */ var _data_widget_data_widget_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data-widget/data-widget.component */ "d0E2");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");


















let WidgetModule = class WidgetModule {
};
WidgetModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_chart_widget_chart_widget_component__WEBPACK_IMPORTED_MODULE_6__["ChartWidgetComponent"], _data_widget_data_widget_component__WEBPACK_IMPORTED_MODULE_7__["DataWidgetComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _widget_routing_module__WEBPACK_IMPORTED_MODULE_5__["WidgetRoutingModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"],
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__["NgApexchartsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__["DragDropModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_9__["ChartsModule"],
        ],
    })
], WidgetModule);



/***/ }),

/***/ "nzNg":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widget/chart-widget/chart-widget.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">Chart Widget</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a routerLink=\"/admin/dashboard/main\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-2\">\r\n              <a href=\"#\" onClick=\"return false;\">Widget</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">Chart Widget</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Chart Sample</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <div id=\"chart\">\r\n              <apx-chart [series]=\"circleChartOptions.series\" [chart]=\"circleChartOptions.chart\"\r\n                [plotOptions]=\"circleChartOptions.plotOptions\" [labels]=\"circleChartOptions.labels\"\r\n                [legend]=\"circleChartOptions.legend\" [colors]=\"circleChartOptions.colors\"\r\n                [responsive]=\"circleChartOptions.responsive\"></apx-chart>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-4\">\r\n                <p class=\"text-muted font-15 text-truncate\">Target</p>\r\n                <h5>\r\n                  <i class=\"fas fa-arrow-circle-up col-green m-r-5\"></i>$15.3k\r\n                </h5>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <p class=\"text-muted font-15 text-truncate\">Last\r\n                  week</p>\r\n                <h5>\r\n                  <i class=\"fas fa-arrow-circle-down col-red m-r-5\"></i>$2.8k\r\n                </h5>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <p class=\"text-muted text-truncate\">Last\r\n                  Month</p>\r\n                <h5>\r\n                  <i class=\"fas fa-arrow-circle-up col-green m-r-5\"></i>$12.5k\r\n                </h5>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Chart Sample</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <div id=\"chart\">\r\n              <apx-chart [series]=\"radarChartOptions.series\" [chart]=\"radarChartOptions.chart\"\r\n                [xaxis]=\"radarChartOptions.xaxis\" [stroke]=\"radarChartOptions.stroke\"\r\n                [markers]=\"radarChartOptions.markers\" [fill]=\"radarChartOptions.fill\"></apx-chart>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-4\">\r\n                <p class=\"text-muted font-15 text-truncate\">Target</p>\r\n                <h5>\r\n                  <i class=\"fas fa-arrow-circle-down col-red m-r-5\"></i>$15.3k\r\n                </h5>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <p class=\"text-muted font-15 text-truncate\">Last\r\n                  week</p>\r\n                <h5>\r\n                  <i class=\"fas fa-arrow-circle-up col-green m-r-5\"></i>$2.8k\r\n                </h5>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <p class=\"text-muted text-truncate\">Last\r\n                  Month</p>\r\n                <h5>\r\n                  <i class=\"fas fa-arrow-circle-down col-red m-r-5\"></i>$12.5k\r\n                </h5>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Chart Sample</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <div id=\"chart\">\r\n              <apx-chart [series]=\"areaChartOptions.series\" [chart]=\"areaChartOptions.chart\"\r\n                [xaxis]=\"areaChartOptions.xaxis\" [stroke]=\"areaChartOptions.stroke\" [tooltip]=\"areaChartOptions.tooltip\"\r\n                [dataLabels]=\"areaChartOptions.dataLabels\">\r\n              </apx-chart>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-4\">\r\n                <p class=\"text-muted font-15 text-truncate\">Target</p>\r\n                <h5>\r\n                  <i class=\"fas fa-arrow-circle-down col-red m-r-5\"></i>$15.3k\r\n                </h5>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <p class=\"text-muted font-15 text-truncate\">Last\r\n                  week</p>\r\n                <h5>\r\n                  <i class=\"fas fa-arrow-circle-up col-green m-r-5\"></i>$2.8k\r\n                </h5>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <p class=\"text-muted text-truncate\">Last\r\n                  Month</p>\r\n                <h5>\r\n                  <i class=\"fas fa-arrow-circle-down col-red m-r-5\"></i>$12.5k\r\n                </h5>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row \">\r\n      <div class=\"col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-statistic-4\">\r\n            <div class=\"align-items-center justify-content-between\">\r\n              <div class=\"row \">\r\n                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 card-spacing\">\r\n                  <div class=\"card-content\">\r\n                    <h5 class=\"font-15\">New Students</h5>\r\n                    <h2 class=\"mb-3 font-18\">1,025</h2>\r\n                    <p class=\"mb-0\"><span class=\"col-green\">10%</span> Increase</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\r\n                  <div class=\"banner-img\">\r\n                    <img src=\"assets/images/banner/1.png\" alt=\"\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-statistic-4\">\r\n            <div class=\"align-items-center justify-content-between\">\r\n              <div class=\"row \">\r\n                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 card-spacing\">\r\n                  <div class=\"card-content\">\r\n                    <h5 class=\"font-15\"> Total Courses</h5>\r\n                    <h2 class=\"mb-3 font-18\">47</h2>\r\n                    <p class=\"mb-0\"><span class=\"col-orange\">09%</span> Decrease</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\r\n                  <div class=\"banner-img\">\r\n                    <img src=\"assets/images/banner/2.png\" alt=\"\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-statistic-4\">\r\n            <div class=\"align-items-center justify-content-between\">\r\n              <div class=\"row \">\r\n                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 card-spacing\">\r\n                  <div class=\"card-content\">\r\n                    <h5 class=\"font-15\">Awards</h5>\r\n                    <h2 class=\"mb-3 font-18\">128</h2>\r\n                    <p class=\"mb-0\"><span class=\"col-green\">18%</span>\r\n                      Increase</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\r\n                  <div class=\"banner-img\">\r\n                    <img src=\"assets/images/banner/3.png\" alt=\"\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-statistic-4\">\r\n            <div class=\"align-items-center justify-content-between\">\r\n              <div class=\"row \">\r\n                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 card-spacing\">\r\n                  <div class=\"card-content\">\r\n                    <h5 class=\"font-15\">Revenue</h5>\r\n                    <h2 class=\"mb-3 font-18\">$48,697</h2>\r\n                    <p class=\"mb-0\"><span class=\"col-green\">42%</span> Increase</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\r\n                  <div class=\"banner-img\">\r\n                    <img src=\"assets/images/banner/4.png\" alt=\"\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-8 col-lg-8 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <div class=\"pull-left\">\r\n              <h6 class=\"text-muted\">Average Lecture Per Month</h6>\r\n              <h5>65 <span class=\"text-muted font-12\">(Average)</span></h5>\r\n            </div>\r\n            <div class=\"mb-5\">\r\n              <apx-chart [series]=\"avgLecChartOptions.series\" [chart]=\"avgLecChartOptions.chart\"\r\n                [xaxis]=\"avgLecChartOptions.xaxis\" [stroke]=\"avgLecChartOptions.stroke\"\r\n                [colors]=\"avgLecChartOptions.colors\" [dataLabels]=\"avgLecChartOptions.dataLabels\"\r\n                [legend]=\"avgLecChartOptions.legend\" [markers]=\"avgLecChartOptions.markers\"\r\n                [grid]=\"avgLecChartOptions.grid\" [yaxis]=\"avgLecChartOptions.yaxis\"\r\n                [tooltip]=\"avgLecChartOptions.tooltip\" [title]=\"avgLecChartOptions.title\"\r\n                [fill]=\"avgLecChartOptions.fill\">\r\n              </apx-chart>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xl-4 col-lg-4 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Subject Chart</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <div id=\"chart\">\r\n              <apx-chart [series]=\"pieChartOptions.series\" [chart]=\"pieChartOptions.chart\"\r\n                [labels]=\"pieChartOptions.labels\" [responsive]=\"pieChartOptions.responsive\"\r\n                [dataLabels]=\"pieChartOptions.dataLabels\" [legend]=\"pieChartOptions.legend\" class=\"apex-pie-center\">\r\n              </apx-chart>\r\n            </div>\r\n            <div class=\"table-responsive m-t-15\">\r\n              <table class=\"table align-items-center\">\r\n                <tbody>\r\n                  <tr>\r\n                    <td><i class=\"fa fa-circle col-cyan msr-2\"></i> Music</td>\r\n                    <td>23</td>\r\n                    <td class=\"col-green\">+32%</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td><i class=\"fa fa-circle col-blue msr-2\"></i>Science</td>\r\n                    <td>32</td>\r\n                    <td class=\"col-green\">+12%</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td><i class=\"fa fa-circle col-orange msr-2\"></i>Economics</td>\r\n                    <td>12</td>\r\n                    <td class=\"col-orange\">-12%</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td><i class=\"fa fa-circle col-green msr-2\"></i>Mathes</td>\r\n                    <td>32</td>\r\n                    <td class=\"col-green\">+3%</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Recent Report</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <!-- Canvas for Chart.js -->\r\n            <div class=\"recent-report__chart\">\r\n              <canvas baseChart [chartType]=\"'line'\" [datasets]=\"areaChartData\" [labels]=\"areaChartLabels\"\r\n                [options]=\"areaChartOptions2\" [plugins]=\"areaChartPlugins\" [legend]=\"true\">\r\n              </canvas>\r\n            </div>\r\n            <!-- Custom Axis -->\r\n            <div class=\"axisData\">\r\n              <div class=\"tick\">\r\n                MON <span class=\"value productValue\">24</span> <span class=\"value serviceValue\">20</span>\r\n              </div>\r\n              <div class=\"tick\">\r\n                TUE <span class=\"value productValue\">18</span> <span class=\"value serviceValue\">22</span>\r\n              </div>\r\n              <div class=\"tick\">\r\n                WED <span class=\"value productValue\">16</span> <span class=\"value serviceValue\">30</span>\r\n              </div>\r\n              <div class=\"tick\">\r\n                THU <span class=\"value productValue\">18</span> <span class=\"value serviceValue\">22</span>\r\n              </div>\r\n              <div class=\"tick\">\r\n                FRI <span class=\"value productValue\">24</span> <span class=\"value serviceValue\">18</span>\r\n              </div>\r\n              <div class=\"tick\">\r\n                SAT <span class=\"value productValue\">36</span> <span class=\"value serviceValue\">22</span>\r\n              </div>\r\n              <div class=\"tick\">\r\n                SUN <span class=\"value productValue\">28</span> <span class=\"value serviceValue\">30</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Recent Report</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <!-- Canvas for Chart.js -->\r\n            <canvas baseChart class=\"chart\" [datasets]=\"radarChartData\" [labels]=\"radarChartLabels\"\r\n              [options]=\"radarChartOptions2\" [chartType]=\"radarChartType\" [plugins]=\"radarChartPlugins\"\r\n              [colors]=\"radarChartColors\"></canvas>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"info-box7 bg-c-blue order-info-box7\">\r\n          <div class=\"info-box7-block\">\r\n            <h6 class=\"m-b-20\">Orders Received</h6>\r\n            <h2 class=\"text-end\"><i class=\"fas fa-cart-plus pull-left\"></i><span>358</span></h2>\r\n            <p class=\"m-b-0\">18% Higher Then Last Month</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"info-box7 bg-c-green order-info-box7\">\r\n          <div class=\"info-box7-block\">\r\n            <h6 class=\"m-b-20\">Completed Orders</h6>\r\n            <h2 class=\"text-end\"><i class=\"fas fa-business-time pull-left\"></i><span>865</span></h2>\r\n            <p class=\"m-b-0\">21% Higher Then Last Month</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"info-box7 bg-c-yellow order-info-box7\">\r\n          <div class=\"info-box7-block\">\r\n            <h6 class=\"m-b-20\">New Orders</h6>\r\n            <h2 class=\"text-end\"><i class=\"fas fa-chart-line pull-left\"></i><span>128</span></h2>\r\n            <p class=\"m-b-0\">37% Higher Then Last Month</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"info-box7 bg-c-pink order-info-box7\">\r\n          <div class=\"info-box7-block\">\r\n            <h6 class=\"m-b-20\">Total Earning</h6>\r\n            <h2 class=\"text-end\"><i class=\"fas fa-dollar-sign pull-left\"></i><span>$25698</span></h2>\r\n            <p class=\"m-b-0\">10% Higher Then Last Month</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-12 col-sm-6 col-md-3\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <div class=\"d-flex justify-content-between\">\r\n              <div>\r\n                <h5>Todays Income</h5>\r\n                <p class=\"text-muted\">Income For Today</p>\r\n              </div>\r\n              <h3 class=\"text-info\">$170</h3>\r\n            </div>\r\n            <div class=\"card-content mt-2\">\r\n              <div class=\"progress skill-progress m-b-5 w-100\">\r\n                <div class=\"progress-bar l-bg-purple width-per-45\" role=\"progressbar\" aria-valuenow=\"45\"\r\n                  aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"d-flex justify-content-between mt-2\">\r\n              <p class=\"text-muted mb-0\">Change</p>\r\n              <p class=\"text-muted mb-0\">75%</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 col-sm-6 col-md-3\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <div class=\"d-flex justify-content-between\">\r\n              <div>\r\n                <h5>Total Revenue</h5>\r\n                <p class=\"text-muted\">Total Income</p>\r\n              </div>\r\n              <h3 class=\"text-success\">$120</h3>\r\n            </div>\r\n            <div class=\"card-content mt-2\">\r\n              <div class=\"progress skill-progress m-b-5 w-100\">\r\n                <div class=\"progress-bar l-bg-orange width-per-45\" role=\"progressbar\" aria-valuenow=\"45\"\r\n                  aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"d-flex justify-content-between mt-2\">\r\n              <p class=\"text-muted mb-0\">Change</p>\r\n              <p class=\"text-muted mb-0\">25%</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 col-sm-6 col-md-3\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <div class=\"d-flex justify-content-between\">\r\n              <div>\r\n                <h5>New Orders</h5>\r\n                <p class=\"text-muted\">Fresh New Order</p>\r\n              </div>\r\n              <h3 class=\"text-danger\">15</h3>\r\n            </div>\r\n            <div class=\"card-content mt-2\">\r\n              <div class=\"progress skill-progress m-b-5 w-100\">\r\n                <div class=\"progress-bar l-bg-cyan width-per-45\" role=\"progressbar\" aria-valuenow=\"45\" aria-valuemin=\"0\"\r\n                  aria-valuemax=\"100\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"d-flex justify-content-between\">\r\n              <p class=\"text-muted mb-0\">Change</p>\r\n              <p class=\"text-muted mb-0\">50%</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 col-sm-6 col-md-3\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <div class=\"d-flex justify-content-between\">\r\n              <div>\r\n                <h5>New Users</h5>\r\n                <p class=\"text-muted\">Joined New User</p>\r\n              </div>\r\n              <h3 class=\"text-secondary\">12</h3>\r\n            </div>\r\n            <div class=\"card-content mt-2\">\r\n              <div class=\"progress skill-progress m-b-5 w-100\">\r\n                <div class=\"progress-bar l-bg-red width-per-45\" role=\"progressbar\" aria-valuenow=\"45\" aria-valuemin=\"0\"\r\n                  aria-valuemax=\"100\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"d-flex justify-content-between mt-2\">\r\n              <p class=\"text-muted mb-0\">Change</p>\r\n              <p class=\"text-muted mb-0\">25%</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "pZWl":
/*!*************************************************!*\
  !*** ./src/app/widget/widget-routing.module.ts ***!
  \*************************************************/
/*! exports provided: WidgetRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetRoutingModule", function() { return WidgetRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _chart_widget_chart_widget_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart-widget/chart-widget.component */ "8CUj");
/* harmony import */ var _data_widget_data_widget_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-widget/data-widget.component */ "d0E2");





const routes = [
    {
        path: "",
        redirectTo: "chart-widget",
        pathMatch: "full",
    },
    {
        path: "chart-widget",
        component: _chart_widget_chart_widget_component__WEBPACK_IMPORTED_MODULE_3__["ChartWidgetComponent"],
    },
    {
        path: "data-widget",
        component: _data_widget_data_widget_component__WEBPACK_IMPORTED_MODULE_4__["DataWidgetComponent"],
    },
];
let WidgetRoutingModule = class WidgetRoutingModule {
};
WidgetRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WidgetRoutingModule);



/***/ })

}]);
//# sourceMappingURL=widget-widget-module-es2015.js.map