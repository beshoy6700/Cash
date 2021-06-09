(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["task-task-module"],{

/***/ "+4SW":
/*!*********************************************!*\
  !*** ./src/app/task/task-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TaskRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskRoutingModule", function() { return TaskRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task.component */ "EBRB");




const routes = [
    {
        path: "",
        component: _task_component__WEBPACK_IMPORTED_MODULE_3__["TaskComponent"],
    },
];
let TaskRoutingModule = class TaskRoutingModule {
};
TaskRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TaskRoutingModule);



/***/ }),

/***/ "09GQ":
/*!*************************************!*\
  !*** ./src/app/task/task.module.ts ***!
  \*************************************/
/*! exports provided: TaskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModule", function() { return TaskModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task.component */ "EBRB");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _task_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task-routing.module */ "+4SW");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-material-file-input */ "7ZcW");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");


























let TaskModule = class TaskModule {
};
TaskModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
            _task_routing_module__WEBPACK_IMPORTED_MODULE_6__["TaskRoutingModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_21__["MatCardModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__["MatToolbarModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_25__["DragDropModule"],
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_24__["MaterialFileInputModule"],
        ],
        declarations: [_task_component__WEBPACK_IMPORTED_MODULE_3__["TaskComponent"]],
    })
], TaskModule);



/***/ }),

/***/ "EBRB":
/*!****************************************!*\
  !*** ./src/app/task/task.component.ts ***!
  \****************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_task_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./task.component.html */ "Hdt5");
/* harmony import */ var _task_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.component.sass */ "mZV9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







let TaskComponent = class TaskComponent {
    constructor(fb) {
        this.fb = fb;
        this.mode = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("side");
        this.showFiller = false;
        this.isNewEvent = false;
        this.tasks = [
            {
                id: "1",
                img: "assets/images/user/user1.jpg",
                name: "Sarah Smith",
                title: "Develop angular project",
                done: true,
                note: "note details",
                priority: "High",
                due_date: "2/12/2020",
            },
            {
                id: "2",
                img: "assets/images/user/user2.jpg",
                name: "John Deo",
                title: "File not found exception solve",
                done: false,
                note: "note details",
                priority: "High",
                due_date: "2/12/2019",
            },
            {
                id: "3",
                img: "assets/images/user/user3.jpg",
                name: "Jens Brincker",
                title: "Test project and find bug",
                done: false,
                note: "note details",
                priority: "Low",
                due_date: "2/12/2017",
            },
            {
                id: "4",
                img: "assets/images/user/user4.jpg",
                name: "Mark Hay",
                title: "Image not found error",
                done: true,
                note: "note details",
                priority: "Normal",
                due_date: "2/12/2020",
            },
            {
                id: "5",
                img: "assets/images/user/user5.jpg",
                name: "Anthony Davie",
                title: "Solve client error in form",
                done: false,
                note: "note details",
                priority: "High",
                due_date: "2/12/2019",
            },
            {
                id: "6",
                img: "assets/images/user/user6.jpg",
                name: "Sue Woodger",
                title: "Tab button is flickering on hover",
                done: false,
                note: "note details",
                priority: "Normal",
                due_date: "2/12/2017",
            },
            {
                id: "7",
                img: "assets/images/user/user7.jpg",
                name: "John Deo",
                title: "Chart responsive issue solve",
                done: true,
                note: "note details",
                priority: "High",
                due_date: "2/12/2019",
            },
            {
                id: "8",
                img: "assets/images/user/user8.jpg",
                name: "Jens Brincker",
                title: "Web service data load issue",
                done: false,
                note: "note details",
                priority: "High",
                due_date: "2/12/2020",
            },
            {
                id: "9",
                img: "assets/images/user/user9.jpg",
                name: "Sarah Smith",
                title: "Java compile error",
                done: false,
                note: "note details",
                priority: "Low",
                due_date: "2/12/2017",
            },
            {
                id: "10",
                img: "assets/images/user/user10.jpg",
                name: "Mark Hay",
                title: "Integrate project with spring boot",
                done: true,
                note: "note details",
                priority: "High",
                due_date: "2/12/2019",
            },
            {
                id: "11",
                img: "assets/images/user/user1.jpg",
                name: "John Deo",
                title: "Update latest angular version",
                done: false,
                note: "note details",
                priority: "High",
                due_date: "2/12/2017",
            },
            {
                id: "12",
                img: "assets/images/user/user2.jpg",
                name: "Jens Brincker",
                title: "Integrate lazy loading on project",
                done: false,
                note: "note details",
                priority: "Normal",
                due_date: "2/12/2020",
            },
            {
                id: "13",
                img: "assets/images/user/user3.jpg",
                name: "Mark Hay",
                title: "js file not load properly",
                done: true,
                note: "note details",
                priority: "Normal",
                due_date: "2/12/2019",
            },
            {
                id: "14",
                img: "assets/images/user/user4.jpg",
                name: "Anthony Davie",
                title: "need to change color of table",
                done: false,
                note: "note details",
                priority: "Normal",
                due_date: "2/12/2017",
            },
            {
                id: "15",
                img: "assets/images/user/user5.jpg",
                name: "Sue Woodger",
                title: "modal window select item issue",
                done: false,
                note: "note details",
                priority: "Low",
                due_date: "2/12/2017",
            },
        ];
        this.taskForm = this.createFormGroup(null);
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["moveItemInArray"])(this.tasks, event.previousIndex, event.currentIndex);
    }
    toggle(task, nav) {
        nav.close();
        task.done = !task.done;
    }
    addNewTask(nav) {
        this.resetFormField();
        this.isNewEvent = true;
        this.dialogTitle = "New Task";
        this.userImg = "assets/images/user/user1.jpg";
        nav.open();
    }
    taskClick(task, nav) {
        this.isNewEvent = false;
        this.dialogTitle = "Edit Task";
        this.userImg = task.img;
        nav.open();
        this.taskForm = this.createFormGroup(task);
    }
    closeSlider(nav) {
        if (nav.open()) {
            nav.close();
        }
    }
    createFormGroup(data) {
        return this.fb.group({
            id: [data ? data.id : this.getRandomID()],
            img: [data ? data.img : "assets/images/user/user1.jpg"],
            name: [data ? data.name : null],
            title: [data ? data.title : null],
            done: [data ? data.done : null],
            priority: [data ? data.priority : null],
            due_date: [
                Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(data
                    ? data.due_date
                    : Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(), "yyyy-MM-dd", "en") || "", "yyyy-MM-dd", "en"),
            ],
            note: [data ? data.note : null],
        });
    }
    saveTask() {
        this.tasks.unshift(this.taskForm.value);
        this.resetFormField();
    }
    editTask() {
        const targetIdx = this.tasks
            .map((item) => item.id)
            .indexOf(this.taskForm.value.id);
        this.tasks[targetIdx] = this.taskForm.value;
    }
    deleteTask(nav) {
        const targetIdx = this.tasks
            .map((item) => item.id)
            .indexOf(this.taskForm.value.id);
        this.tasks.splice(targetIdx, 1);
        nav.close();
    }
    resetFormField() {
        this.taskForm.controls.name.reset();
        this.taskForm.controls.title.reset();
        this.taskForm.controls.done.reset();
        this.taskForm.controls.priority.reset();
        this.taskForm.controls.due_date.reset();
        this.taskForm.controls.note.reset();
    }
    getRandomID() {
        const S4 = () => {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return S4() + S4();
    }
    ngOnInit() { }
};
TaskComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
TaskComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-task",
        template: _raw_loader_task_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_task_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TaskComponent);



/***/ }),

/***/ "Hdt5":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task/task.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">Task</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a href=\"#\" onClick=\"return false;\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-2\">\r\n              <a href=\"#\" onClick=\"return false;\">Apps</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">Task</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 col-sm-12\">\r\n        <div class=\"card h-100\">\r\n          <div class=\"card-body\">\r\n            <div class=\"task-module\">\r\n              <div class=\"task-header\">\r\n                <div class=\"task-title\">\r\n                  <h2>Tasks</h2>\r\n                  <h5>{{tasks.length}} Total task</h5>\r\n                </div>\r\n                <div class=\"header-button\">\r\n                  <button mat-raised-button color=\"primary\" (click)=\"addNewTask(sidenav)\">Add\r\n                    Task</button>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 col-sm-12\">\r\n                  <mat-sidenav-container class=\"task-container\">\r\n                    <mat-sidenav #sidenav [mode]=\"mode.value\" position=\"end\">\r\n                      <div class=\"header\">\r\n                        <h2 class=\"header-title\">{{dialogTitle}}</h2>\r\n                        <div class=\"header-close m-r-0\">\r\n                          <button mat-icon-button *ngIf=\"!isNewEvent\" (click)=\"deleteTask(sidenav)\"\r\n                            matTooltip=\"Delete Task\">\r\n                            <mat-icon>delete</mat-icon>\r\n                          </button>\r\n                          <button mat-icon-button *ngIf=\"isNewEvent\" (click)=\"saveTask()\" matTooltip=\"Save Task\">\r\n                            <mat-icon>save</mat-icon>\r\n                          </button>\r\n                          <button mat-icon-button *ngIf=\"!isNewEvent\" (click)=\"editTask()\" matTooltip=\"Edit Task\">\r\n                            <mat-icon>save</mat-icon>\r\n                          </button>\r\n                          <button mat-icon-button (click)=\"closeSlider(sidenav)\">\r\n                            <mat-icon>close</mat-icon>\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                      <form class=\"register-form m-4\" [formGroup]=\"taskForm\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 \">\r\n                            <mat-form-field [hidden]=\"true\">\r\n                              <input matInput formControlName=\"id\">\r\n                            </mat-form-field>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 \">\r\n                            <mat-form-field [hidden]=\"true\">\r\n                              <input matInput formControlName=\"img\">\r\n                            </mat-form-field>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 \">\r\n                            <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                              <mat-label>Title</mat-label>\r\n                              <input matInput formControlName=\"title\">\r\n                              <mat-icon matSuffix>turned_in_not</mat-icon>\r\n                            </mat-form-field>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                            <mat-checkbox class=\"example-margin\" formControlName=\"done\" color=\"primary\">Mark as\r\n                              complete\r\n                            </mat-checkbox>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                            <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                              <mat-label>Assigned Name</mat-label>\r\n                              <mat-select formControlName=\"name\">\r\n                                <mat-option [value]=\"'Sarah Smith'\">\r\n                                  Sarah Smith\r\n                                </mat-option>\r\n                                <mat-option [value]=\"'John Deo'\">\r\n                                  John Deo\r\n                                </mat-option>\r\n                                <mat-option [value]=\"'Jens Brincker'\">\r\n                                  Jens Brincker\r\n                                </mat-option>\r\n                                <mat-option [value]=\"'Mark Hay'\">\r\n                                  Mark Hay\r\n                                </mat-option>\r\n                                <mat-option [value]=\"'Anthony Davie'\">\r\n                                  Anthony Davie\r\n                                </mat-option>\r\n                                <mat-option [value]=\"'Sue Woodger'\">\r\n                                  Sue Woodger\r\n                                </mat-option>\r\n                              </mat-select>\r\n                            </mat-form-field>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n                            <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                              <mat-label>Priority</mat-label>\r\n                              <mat-select formControlName=\"priority\">\r\n                                <mat-option [value]=\"'Low'\">\r\n                                  Low\r\n                                </mat-option>\r\n                                <mat-option [value]=\"'Normal'\">\r\n                                  Normal\r\n                                </mat-option>\r\n                                <mat-option [value]=\"'High'\">\r\n                                  High\r\n                                </mat-option>\r\n                              </mat-select>\r\n                            </mat-form-field>\r\n                          </div>\r\n                          <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n                            <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                              <mat-label>Due date</mat-label>\r\n                              <input matInput formControlName=\"due_date\" [matDatepicker]=\"picker1\">\r\n                              <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                              <mat-datepicker #picker1></mat-datepicker>\r\n                            </mat-form-field>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n                            <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                              <mat-label>Event Details</mat-label>\r\n                              <textarea matInput formControlName=\"note\"></textarea>\r\n                            </mat-form-field>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-xl-10 col-lg-10 col-md-12 col-sm-12\">\r\n                          </div>\r\n                        </div>\r\n                      </form>\r\n                    </mat-sidenav>\r\n                    <mat-sidenav-content>\r\n                      <div cdkDropList class=\"task-list\" (cdkDropListDropped)=\"drop($event)\"\r\n                        style=\"position: relative; max-height: 500px;\" [perfectScrollbar]>\r\n                        <div class=\"task-box\" *ngFor=\"let task of tasks\" (click)=\"taskClick(task, sidenav)\" cdkDrag>\r\n                          <div>\r\n                            <div class=\"task-handle m-r-20\" cdkDragHandle>\r\n                              <mat-icon aria-hidden=\"false\">drag_indicator</mat-icon>\r\n                            </div>\r\n                          </div>\r\n                          <mat-checkbox (change)=\"toggle(task, sidenav)\" [checked]=\"!!task.done\" class=\"m-r-15\"\r\n                            color=\"primary\">\r\n                          </mat-checkbox>\r\n                          <div class=\"task-custom-placeholder\" *cdkDragPlaceholder></div>\r\n                          <div matTooltip=\"Title\" [ngClass]=\"{done:task.done}\">\r\n                            {{task.title}}</div>\r\n                          <div\r\n                            [ngClass]=\"{'task-low': task.priority=='Low', 'task-high': task.priority=='High','task-normal': task.priority=='Normal'}\">\r\n                            <mat-icon matTooltip=\"Low\" aria-hidden=\"false\" class=\"lbl-low\"\r\n                              *ngIf=\"task?.priority == 'Low'\">arrow_downward\r\n                            </mat-icon>\r\n                            <mat-icon matTooltip=\"High\" aria-hidden=\"false\" class=\"lbl-high\"\r\n                              *ngIf=\"task?.priority == 'High'\">arrow_upward\r\n                            </mat-icon>\r\n                            <mat-icon matTooltip=\"Normal\" aria-hidden=\"false\" class=\"lbl-normal\"\r\n                              *ngIf=\"task?.priority == 'Normal'\">\r\n                              remove</mat-icon>\r\n                            {{task.priority}}\r\n                          </div>\r\n                          <img src='{{ task.img }}' class=\"task-user-img\" matTooltip='{{ task.name }}'>\r\n                          <div class=\"task-date\" matTooltip=\"Due Date\">{{ task.due_date | date }}</div>\r\n                        </div>\r\n                      </div>\r\n                    </mat-sidenav-content>\r\n                  </mat-sidenav-container>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "mZV9":
/*!******************************************!*\
  !*** ./src/app/task/task.component.sass ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXNrLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ })

}]);
//# sourceMappingURL=task-task-module-es2015.js.map