(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["appointment-appointment-module"],{

/***/ "0q9G":
/*!********************************************************************************!*\
  !*** ./src/app/admin/appointment/editappointment/editappointment.component.ts ***!
  \********************************************************************************/
/*! exports provided: EditappointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditappointmentComponent", function() { return EditappointmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_editappointment_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./editappointment.component.html */ "Xfqv");
/* harmony import */ var _editappointment_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editappointment.component.sass */ "36bA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





let EditappointmentComponent = class EditappointmentComponent {
    constructor(fb) {
        this.fb = fb;
        this.formdata = {
            first: "Pooja",
            last: "Sarma",
            gender: "female",
            mobile: "123456789",
            address: "101, Elanxa, New Yourk",
            email: "test@example.com",
            dob: "1987-02-17T14:22:18Z",
            doctor: "Dr.Rajesh",
            doa: "2018-05-25T14:22:18Z",
            toa: "10:25",
            injury: "Fever",
            note: "No Comments",
        };
        this.bookingForm = this.createContactForm();
    }
    onSubmit() {
        console.log("Form Value", this.bookingForm.value);
    }
    createContactForm() {
        return this.fb.group({
            first: [
                this.formdata.first,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("[a-zA-Z]+")],
            ],
            last: [this.formdata.last],
            gender: [this.formdata.gender, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            mobile: [this.formdata.mobile, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            address: [this.formdata.address],
            email: [
                this.formdata.email,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)],
            ],
            dob: [this.formdata.dob, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            doctor: [this.formdata.doctor, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            doa: [this.formdata.doa, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            toa: [this.formdata.toa, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            injury: [this.formdata.injury],
            note: [this.formdata.note],
        });
    }
};
EditappointmentComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
EditappointmentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-editappointment",
        template: _raw_loader_editappointment_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_editappointment_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditappointmentComponent);



/***/ }),

/***/ "1C99":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/appointment/viewappointment/dialogs/delete/delete.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDialogComponent", function() { return DeleteDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_delete_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./delete.component.html */ "sYmw");
/* harmony import */ var _delete_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete.component.sass */ "FHnU");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _appointment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../appointment.service */ "fWDJ");






let DeleteDialogComponent = class DeleteDialogComponent {
    constructor(dialogRef, data, appointmentService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.appointmentService = appointmentService;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmDelete() {
        this.appointmentService.deleteAppointment(this.data.id);
    }
};
DeleteDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _appointment_service__WEBPACK_IMPORTED_MODULE_5__["AppointmentService"] }
];
DeleteDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-delete",
        template: _raw_loader_delete_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_delete_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DeleteDialogComponent);



/***/ }),

/***/ "36bA":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/appointment/editappointment/editappointment.component.sass ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0YXBwb2ludG1lbnQuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "7bkt":
/*!********************************************************************************!*\
  !*** ./src/app/admin/appointment/bookappointment/bookappointment.component.ts ***!
  \********************************************************************************/
/*! exports provided: BookappointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookappointmentComponent", function() { return BookappointmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_bookappointment_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bookappointment.component.html */ "enIv");
/* harmony import */ var _bookappointment_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bookappointment.component.sass */ "tliD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





let BookappointmentComponent = class BookappointmentComponent {
    constructor(fb) {
        this.fb = fb;
        this.hide3 = true;
        this.agree3 = false;
        this.bookingForm = this.fb.group({
            first: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("[a-zA-Z]+")]],
            last: [""],
            gender: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            mobile: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            address: [""],
            email: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)],
            ],
            dob: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            doctor: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            doa: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            toa: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            injury: [""],
            note: [""],
            uploadImg: [""],
        });
    }
    onSubmit() {
        console.log("Form Value", this.bookingForm.value);
    }
};
BookappointmentComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
BookappointmentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-bookappointment",
        template: _raw_loader_bookappointment_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bookappointment_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BookappointmentComponent);



/***/ }),

/***/ "8Nsm":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/appointment/viewappointment/viewappointment.component.sass ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3YXBwb2ludG1lbnQuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "EsjQ":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/appointment/viewappointment/viewappointment.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">View Appointments</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a routerLink=\"/admin/dashboard/main\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-2\">\r\n              <a href=\"#\" onClick=\"return false;\">Appointments</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">View</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n        <div class=\"card\">\r\n          <div class=\"body\">\r\n            <div class=\"responsive_table\">\r\n              <div class=\"materialTableHeader\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-8\">\r\n                    <ul class=\"header-buttons-left ms-0\">\r\n                      <li class=\"dropdown\">\r\n                        <h2>\r\n                          <strong>Appointments</strong></h2>\r\n                      </li>\r\n                      <li class=\"dropdown m-l-20\">\r\n                        <label for=\"search-input\"><i class=\"material-icons search-icon\">search</i></label>\r\n                        <input placeholder=\"Search\" type=\"text\" #filter class=\"browser-default search-field\"\r\n                          aria-label=\"Search box\">\r\n                      </li>\r\n                      <li>\r\n                        <div class=\"icon-button-demo m-l-10\" [hidden]=!selection.hasValue()>\r\n                          <button mat-mini-fab color=\"warn\" (click)=\"removeSelectedRows()\">\r\n                            <mat-icon class=\"col-white\">delete</mat-icon>\r\n                          </button>\r\n                        </div>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                  <div class=\"col-4\">\r\n                    <ul class=\"header-buttons\">\r\n                      <li>\r\n                        <div class=\"icon-button-demo\">\r\n                          <button mat-mini-fab color=\"primary\" (click)=\"addNew()\">\r\n                            <mat-icon class=\"col-white\">add</mat-icon>\r\n                          </button>\r\n                        </div>\r\n                      </li>\r\n                      <li>\r\n                        <div class=\"icon-button-demo\">\r\n                          <button mat-mini-fab color=\"primary\" (click)=\"refresh()\">\r\n                            <mat-icon class=\"col-white\">refresh</mat-icon>\r\n                          </button>\r\n                        </div>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <mat-table #table [dataSource]=\"dataSource\" matSort class=\"mat-cell\">\r\n                <!-- Checkbox Column -->\r\n                <ng-container matColumnDef=\"select\">\r\n                  <mat-header-cell *matHeaderCellDef [ngClass]=\"'tbl-col-width-per-6'\">\r\n                    <mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n                      [checked]=\"selection.hasValue() && isAllSelected()\"\r\n                      [indeterminate]=\"selection.hasValue() && !isAllSelected()\" [ngClass]=\"'tbl-checkbox'\">\r\n                    </mat-checkbox>\r\n                  </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\" [ngClass]=\"'tbl-col-width-per-6'\">\r\n                    <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\"\r\n                      [checked]=\"selection.isSelected(row)\" [ngClass]=\"'tbl-checkbox'\">\r\n                    </mat-checkbox>\r\n                  </mat-cell>\r\n                </ng-container>\r\n                <!-- ID Column -->\r\n                <ng-container matColumnDef=\"id\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Id</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\">{{row.id}}</mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"img\">\r\n                  <mat-header-cell mat-header-cell *matHeaderCellDef [ngClass]=\"'tbl-col-width-per-5'\"> Image\r\n                  </mat-header-cell>\r\n                  <mat-cell mat-cell *matCellDef=\"let row\" class=\"table-img tbl-col-width-per-5\"> <img\r\n                      [src]=\"row.img\" />\r\n                  </mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"name\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Name</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.name}}</mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"email\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Email</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.email}}</mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"gender\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Gender</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.gender}}</mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"date\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Date</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.date | date: 'MM/dd/yyyy' }}\r\n                  </mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"time\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Time</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.time}}</mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"mobile\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Mobile</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.mobile}}</mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"doctor\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Doctor</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.doctor}}</mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"injury\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Injury/Condition\r\n                  </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.injury}}</mat-cell>\r\n                </ng-container>\r\n                <!-- actions -->\r\n                <ng-container matColumnDef=\"actions\">\r\n                  <mat-header-cell *matHeaderCellDef class=\"pr-0\">Actions</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row; let i=index;\" class=\"pr-0\">\r\n                    <button mat-icon-button color=\"accent\" class=\"btn-tbl-edit\" (click)=\"$event.stopPropagation()\"\r\n                      (click)=\"editCall(row)\">\r\n                      <mat-icon aria-label=\"Edit\" class=\"col-white\">edit</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button color=\"accent\" class=\"btn-tbl-delete\" (click)=\"$event.stopPropagation()\"\r\n                      (click)=\"deleteItem(i, row)\">\r\n                      <mat-icon aria-label=\"Delete\" class=\"col-white\">delete</mat-icon>\r\n                    </button>\r\n                  </mat-cell>\r\n                </ng-container>\r\n                <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                <!-- <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row> -->\r\n                <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"editCall(row)\"\r\n                  [style.cursor]=\"'pointer'\" matRipple>\r\n                </mat-row>\r\n              </mat-table>\r\n              <!-- Loading spinner -->\r\n              <div *ngIf=\"exampleDatabase.isTblLoading\" class=\"tbl-spinner\">\r\n                <mat-progress-spinner color=\"primary\" [diameter]=\"40\" mode=\"indeterminate\">\r\n                </mat-progress-spinner>\r\n              </div>\r\n              <div *ngIf=\"!exampleDatabase.isTblLoading\" class=\"no-results\"\r\n                [style.display]=\"dataSource.renderedData.length == 0 ? '' : 'none'\">\r\n                No results\r\n              </div>\r\n              <mat-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"10\"\r\n                [pageSizeOptions]=\"[5, 10, 25, 100]\">\r\n              </mat-paginator>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "FHnU":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/appointment/viewappointment/dialogs/delete/delete.component.sass ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "HkMs":
/*!*****************************************************************!*\
  !*** ./src/app/admin/appointment/appointment-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AppointmentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentRoutingModule", function() { return AppointmentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _bookappointment_bookappointment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookappointment/bookappointment.component */ "7bkt");
/* harmony import */ var _viewappointment_viewappointment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewappointment/viewappointment.component */ "Rnra");
/* harmony import */ var _editappointment_editappointment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editappointment/editappointment.component */ "0q9G");
/* harmony import */ var _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../authentication/page404/page404.component */ "21P8");







const routes = [
    {
        path: "bookAppointment",
        component: _bookappointment_bookappointment_component__WEBPACK_IMPORTED_MODULE_3__["BookappointmentComponent"],
    },
    {
        path: "viewAppointment",
        component: _viewappointment_viewappointment_component__WEBPACK_IMPORTED_MODULE_4__["ViewappointmentComponent"],
    },
    {
        path: "edit-ppointment",
        component: _editappointment_editappointment_component__WEBPACK_IMPORTED_MODULE_5__["EditappointmentComponent"],
    },
    { path: "**", component: _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_6__["Page404Component"] },
];
let AppointmentRoutingModule = class AppointmentRoutingModule {
};
AppointmentRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppointmentRoutingModule);



/***/ }),

/***/ "Rnra":
/*!********************************************************************************!*\
  !*** ./src/app/admin/appointment/viewappointment/viewappointment.component.ts ***!
  \********************************************************************************/
/*! exports provided: ViewappointmentComponent, ExampleDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewappointmentComponent", function() { return ViewappointmentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDataSource", function() { return ExampleDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_viewappointment_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./viewappointment.component.html */ "EsjQ");
/* harmony import */ var _viewappointment_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewappointment.component.sass */ "8Nsm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _appointment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./appointment.service */ "fWDJ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "41Ph");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "9YHx");
/* harmony import */ var _dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dialogs/form-dialog/form-dialog.component */ "hIkn");
/* harmony import */ var _dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dialogs/delete/delete.component */ "1C99");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "FKr1");

















let ViewappointmentComponent = class ViewappointmentComponent {
    constructor(httpClient, dialog, appointmentService, snackBar) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.appointmentService = appointmentService;
        this.snackBar = snackBar;
        this.displayedColumns = [
            "select",
            "img",
            "name",
            "email",
            "gender",
            "date",
            "time",
            "mobile",
            "doctor",
            "injury",
            "actions",
        ];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__["SelectionModel"](true, []);
    }
    ngOnInit() {
        this.loadData();
    }
    refresh() {
        this.loadData();
    }
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.renderedData.length;
        return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected()
            ? this.selection.clear()
            : this.dataSource.renderedData.forEach((row) => this.selection.select(row));
    }
    removeSelectedRows() {
        const totalSelect = this.selection.selected.length;
        this.selection.selected.forEach((item) => {
            const index = this.dataSource.renderedData.findIndex((d) => d === item);
            // console.log(this.dataSource.renderedData.findIndex((d) => d === item));
            this.exampleDatabase.dataChange.value.splice(index, 1);
            this.refreshTable();
            this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__["SelectionModel"](true, []);
        });
        this.showNotification("snackbar-danger", totalSelect + " Record Delete Successfully...!!!", "bottom", "center");
    }
    addNew() {
        let tempDirection;
        if (localStorage.getItem("isRtl") === "true") {
            tempDirection = "rtl";
        }
        else {
            tempDirection = "ltr";
        }
        const dialogRef = this.dialog.open(_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_13__["FormDialogComponent"], {
            data: {
                appointment: this.appointment,
                action: "add",
            },
            direction: tempDirection,
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result === 1) {
                // After dialog is closed we're doing frontend updates
                // For add we're just pushing a new row inside DataService
                this.exampleDatabase.dataChange.value.unshift(this.appointmentService.getDialogData());
                this.refreshTable();
                this.showNotification("snackbar-success", "Add Record Successfully...!!!", "bottom", "center");
            }
        });
    }
    editCall(row) {
        this.id = row.id;
        let tempDirection;
        if (localStorage.getItem("isRtl") === "true") {
            tempDirection = "rtl";
        }
        else {
            tempDirection = "ltr";
        }
        const dialogRef = this.dialog.open(_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_13__["FormDialogComponent"], {
            data: {
                appointment: row,
                action: "edit",
            },
            direction: tempDirection,
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result === 1) {
                // When using an edit things are little different, firstly we find record inside DataService by id
                const foundIndex = this.exampleDatabase.dataChange.value.findIndex((x) => x.id === this.id);
                // Then you update that record using data from dialogData (values you enetered)
                this.exampleDatabase.dataChange.value[foundIndex] =
                    this.appointmentService.getDialogData();
                // And lastly refresh table
                this.refreshTable();
                this.showNotification("black", "Edit Record Successfully...!!!", "bottom", "center");
            }
        });
    }
    deleteItem(i, row) {
        this.index = i;
        this.id = row.id;
        let tempDirection;
        if (localStorage.getItem("isRtl") === "true") {
            tempDirection = "rtl";
        }
        else {
            tempDirection = "ltr";
        }
        const dialogRef = this.dialog.open(_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_14__["DeleteDialogComponent"], {
            data: row,
            direction: tempDirection,
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result === 1) {
                const foundIndex = this.exampleDatabase.dataChange.value.findIndex((x) => x.id === this.id);
                // for delete we use splice in order to remove single object from DataService
                this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
                this.refreshTable();
                this.showNotification("snackbar-danger", "Delete Record Successfully...!!!", "bottom", "center");
            }
        });
    }
    refreshTable() {
        this.paginator._changePageSize(this.paginator.pageSize);
    }
    loadData() {
        this.exampleDatabase = new _appointment_service__WEBPACK_IMPORTED_MODULE_4__["AppointmentService"](this.httpClient);
        this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["fromEvent"])(this.filter.nativeElement, "keyup").subscribe(() => {
            if (!this.dataSource) {
                return;
            }
            this.dataSource.filter = this.filter.nativeElement.value;
        });
    }
    showNotification(colorName, text, placementFrom, placementAlign) {
        this.snackBar.open(text, "", {
            duration: 2000,
            verticalPosition: placementFrom,
            horizontalPosition: placementAlign,
            panelClass: colorName,
        });
    }
};
ViewappointmentComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _appointment_service__WEBPACK_IMPORTED_MODULE_4__["AppointmentService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"] }
];
ViewappointmentComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], { static: true },] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"], { static: true },] }],
    filter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["filter", { static: true },] }]
};
ViewappointmentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-viewappointment",
        template: _raw_loader_viewappointment_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [{ provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MAT_DATE_LOCALE"], useValue: "en-GB" }],
        styles: [_viewappointment_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ViewappointmentComponent);

class ExampleDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__["DataSource"] {
    constructor(exampleDatabase, paginator, _sort) {
        super();
        this.exampleDatabase = exampleDatabase;
        this.paginator = paginator;
        this._sort = _sort;
        this.filterChange = new rxjs__WEBPACK_IMPORTED_MODULE_11__["BehaviorSubject"]("");
        this.filteredData = [];
        this.renderedData = [];
        // Reset to the first page when the user changes the filter.
        this.filterChange.subscribe(() => (this.paginator.pageIndex = 0));
    }
    get filter() {
        return this.filterChange.value;
    }
    set filter(filter) {
        this.filterChange.next(filter);
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect() {
        // Listen for any changes in the base data, sorting, filtering, or pagination
        const displayDataChanges = [
            this.exampleDatabase.dataChange,
            this._sort.sortChange,
            this.filterChange,
            this.paginator.page,
        ];
        this.exampleDatabase.getAllAppointments();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["merge"])(...displayDataChanges).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(() => {
            // Filter data
            this.filteredData = this.exampleDatabase.data
                .slice()
                .filter((appointment) => {
                const searchStr = (appointment.name +
                    appointment.email +
                    appointment.gender +
                    appointment.date +
                    appointment.doctor +
                    appointment.injury +
                    appointment.mobile).toLowerCase();
                return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
            });
            // Sort filtered data
            const sortedData = this.sortData(this.filteredData.slice());
            // Grab the page's slice of the filtered sorted data.
            const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
            this.renderedData = sortedData.splice(startIndex, this.paginator.pageSize);
            return this.renderedData;
        }));
    }
    disconnect() { }
    /** Returns a sorted copy of the database data. */
    sortData(data) {
        if (!this._sort.active || this._sort.direction === "") {
            return data;
        }
        return data.sort((a, b) => {
            let propertyA = "";
            let propertyB = "";
            switch (this._sort.active) {
                case "id":
                    [propertyA, propertyB] = [a.id, b.id];
                    break;
                case "name":
                    [propertyA, propertyB] = [a.name, b.name];
                    break;
                case "email":
                    [propertyA, propertyB] = [a.email, b.email];
                    break;
                // case 'date': [propertyA, propertyB] = [a.date, b.date]; break;
                case "time":
                    [propertyA, propertyB] = [a.time, b.time];
                    break;
                case "mobile":
                    [propertyA, propertyB] = [a.mobile, b.mobile];
                    break;
            }
            const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return ((valueA < valueB ? -1 : 1) * (this._sort.direction === "asc" ? 1 : -1));
        });
    }
}


/***/ }),

/***/ "ViCA":
/*!*********************************************************!*\
  !*** ./src/app/admin/appointment/appointment.module.ts ***!
  \*********************************************************/
/*! exports provided: AppointmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentModule", function() { return AppointmentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-material-file-input */ "7ZcW");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _appointment_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./appointment-routing.module */ "HkMs");
/* harmony import */ var _bookappointment_bookappointment_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bookappointment/bookappointment.component */ "7bkt");
/* harmony import */ var _editappointment_editappointment_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./editappointment/editappointment.component */ "0q9G");
/* harmony import */ var _viewappointment_viewappointment_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./viewappointment/viewappointment.component */ "Rnra");
/* harmony import */ var _viewappointment_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./viewappointment/dialogs/delete/delete.component */ "1C99");
/* harmony import */ var _viewappointment_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./viewappointment/dialogs/form-dialog/form-dialog.component */ "hIkn");
/* harmony import */ var _viewappointment_appointment_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./viewappointment/appointment.service */ "fWDJ");


























let AppointmentModule = class AppointmentModule {
};
AppointmentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _bookappointment_bookappointment_component__WEBPACK_IMPORTED_MODULE_20__["BookappointmentComponent"],
            _editappointment_editappointment_component__WEBPACK_IMPORTED_MODULE_21__["EditappointmentComponent"],
            _viewappointment_viewappointment_component__WEBPACK_IMPORTED_MODULE_22__["ViewappointmentComponent"],
            _viewappointment_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_23__["DeleteDialogComponent"],
            _viewappointment_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_24__["FormDialogComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _appointment_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppointmentRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_17__["MaterialFileInputModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
        ],
        providers: [_viewappointment_appointment_service__WEBPACK_IMPORTED_MODULE_25__["AppointmentService"]],
    })
], AppointmentModule);



/***/ }),

/***/ "Xfqv":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/appointment/editappointment/editappointment.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">Edit Appointment</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a routerLink=\"/admin/dashboard/main\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-2\">\r\n              <a href=\"#\" onClick=\"return false;\">Appointment</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">Edit</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Edit Appointment</h2>\r\n\r\n          </div>\r\n          <div class=\"body\">\r\n            <form class=\"m-4\" [formGroup]=\"bookingForm\" (ngSubmit)=\"onSubmit()\">\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>First name</mat-label>\r\n                    <input matInput formControlName=\"first\" required>\r\n                    <mat-error *ngIf=\"bookingForm.get('first').hasError('required')\">\r\n                      First name is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Last name</mat-label>\r\n                    <input matInput formControlName=\"last\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Gender</mat-label>\r\n                    <mat-select formControlName=\"gender\" required>\r\n                      <mat-option [value]=\"'male'\">\r\n                        Male\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'female'\">\r\n                        Female\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <mat-error *ngIf=\"bookingForm.get('gender').hasError('required')\">\r\n                      Gender is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Mobile</mat-label>\r\n                    <input matInput formControlName=\"mobile\" type=\"number\" required>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Address</mat-label>\r\n                    <textarea matInput formControlName=\"address\"></textarea>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Email</mat-label>\r\n                    <input matInput formControlName=\"email\" required>\r\n                    <mat-error *ngIf=\"bookingForm.get('email').hasError('email') && bookingForm.get('email').touched\">\r\n                      Please enter a valid email address\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Date Of Birth</mat-label>\r\n                    <input matInput [matDatepicker]=\"picker\" formControlName=\"dob\" required>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                    <mat-error *ngIf=\"bookingForm.get('dob').hasError('required')\">\r\n                      Please select date\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <h2 class=\"card-inside-title\">Appointment Details</h2>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Consulting Doctor</mat-label>\r\n                    <mat-select formControlName=\"doctor\" required>\r\n                      <mat-option [value]=\"'Dr.Rajesh'\">\r\n                        Dr.Rajesh\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'Dr.Sarah Smith'\">\r\n                        Dr.Sarah Smith\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'Dr.Jay Soni'\">\r\n                        Dr.Jay Soni\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'Dr.Pooja Patel'\">\r\n                        Dr.Pooja Patel\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'other'\">\r\n                        Other\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <mat-error *ngIf=\"bookingForm.get('doctor').hasError('required')\">\r\n                      Select Any Doctor\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Date Of Appointment</mat-label>\r\n                    <input matInput [matDatepicker]=\"picker1\" formControlName=\"doa\" required>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker1></mat-datepicker>\r\n                    <mat-error *ngIf=\"bookingForm.get('doa').hasError('required')\">\r\n                      Please select a date\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Time Of Appointment</mat-label>\r\n                    <input matInput formControlName=\"toa\" required>\r\n                    <mat-error *ngIf=\"bookingForm.get('toa').hasError('required')\">\r\n                      Please select a time\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Injury/Contion</mat-label>\r\n                    <textarea matInput formControlName=\"injury\"></textarea>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Note</mat-label>\r\n                    <textarea matInput formControlName=\"note\"></textarea>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                  <button class=\"btn-space\" [disabled]=\"!bookingForm.valid \" mat-raised-button\r\n                    color=\"primary\">Submit</button>\r\n                  <button type=\"button\" mat-button>Cancel</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "ZKib":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/appointment/viewappointment/dialogs/form-dialog/form-dialog.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"addContainer\">\r\n  <div class=\"modalHeader\">\r\n    <div class=\"editRowModal\">\r\n      <div class=\"modalHeader clearfix\">\r\n        <img [src]='appointment.img' alt=\"avatar\">\r\n        <div class=\"modal-about\">\r\n          <div class=\"font-weight-bold p-t-5 msl-3 font-17\">\r\n            {{dialogTitle}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <button mat-icon-button (click)=\"dialogRef.close()\" aria-label=\"Close dialog\">\r\n      <mat-icon>close</mat-icon>\r\n    </button>\r\n  </div>\r\n  <div mat-dialog-content>\r\n    <form class=\"register-form m-4\" [formGroup]=\"appointmentForm\" (ngSubmit)=\"submit\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n          <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n            <mat-label>name</mat-label>\r\n            <input matInput formControlName=\"name\">\r\n            <mat-icon matSuffix>face</mat-icon>\r\n            <mat-error *ngIf=\"appointmentForm.get('name').hasError('required')\">\r\n              Name is required\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n          <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n            <mat-label>Email</mat-label>\r\n            <input matInput formControlName=\"email\" required>\r\n            <mat-icon matSuffix>email</mat-icon>\r\n            <mat-error\r\n              *ngIf=\"appointmentForm.get('email').hasError('required') || appointmentForm.get('email').touched\">\r\n              Please enter a valid email address\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n          <div class=\"m-b-20\">\r\n            <mat-label class=\"msr-3\">Gender:</mat-label>\r\n            <mat-radio-group aria-label=\"Select gender\" formControlName=\"gender\" required>\r\n              <mat-radio-button value=\"male\">Male</mat-radio-button>\r\n              <mat-radio-button value=\"female\">Female</mat-radio-button>\r\n              <mat-error *ngIf=\"appointmentForm.get('gender').hasError('required')\">\r\n                Select gender\r\n              </mat-error>\r\n            </mat-radio-group>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n          <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n            <mat-label>Choose a date</mat-label>\r\n            <input matInput [matDatepicker]=\"picker\" formControlName=\"date\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker></mat-datepicker>\r\n            <mat-error *ngIf=\"appointmentForm.get('date').hasError('required')\">\r\n              Please select date\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\" col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n          <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n            <mat-label>Time</mat-label>\r\n            <input matInput formControlName=\"time\">\r\n            <mat-icon matSuffix>access_time</mat-icon>\r\n            <mat-error *ngIf=\"appointmentForm.get('time').hasError('required')\">\r\n              Please select time\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n          <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n            <mat-label>Mobile</mat-label>\r\n            <input matInput formControlName=\"mobile\" type=\"number\">\r\n            <mat-icon matSuffix>phone</mat-icon>\r\n            <mat-error *ngIf=\"appointmentForm.get('mobile').hasError('required')\">\r\n              Mobile is required\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\" col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n          <mat-form-field class=\"example-full-width \" appearance=\"outline\">\r\n            <mat-label>Doctor Name</mat-label>\r\n            <mat-select formControlName=\"doctor\" required>\r\n              <mat-option [value]=\"'Dr.Rajesh'\">\r\n                Dr.Rajesh\r\n              </mat-option>\r\n              <mat-option [value]=\"'Dr.Sarah Smith'\">\r\n                Dr.Sarah Smith\r\n              </mat-option>\r\n              <mat-option [value]=\"'Dr.Jay Soni'\">\r\n                Dr.Jay Soni\r\n              </mat-option>\r\n              <mat-option [value]=\"'Dr.Pooja Patel'\">\r\n                Dr.Pooja Patel\r\n              </mat-option>\r\n              <mat-option [value]=\"'other'\">\r\n                Other\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-error *ngIf=\"appointmentForm.get('doctor').hasError('required')\">\r\n              Doctor Name is required\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n          <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n            <mat-label>Injury/Condition</mat-label>\r\n            <textarea matInput formControlName=\"injury\"></textarea>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n          <div class=\"example-button-row\">\r\n            <button mat-raised-button color=\"primary\" [type]=\"submit\" [disabled]=\"!appointmentForm.valid\"\r\n              [mat-dialog-close]=\"1\" (click)=\"confirmAdd()\">Save</button>\r\n            <button mat-raised-button color=\"warn\" (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "b10Y":
/*!************************************************************************!*\
  !*** ./src/app/admin/appointment/viewappointment/appointment.model.ts ***!
  \************************************************************************/
/*! exports provided: Appointment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Appointment", function() { return Appointment; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");

class Appointment {
    constructor(appointment) {
        {
            this.id = appointment.id || this.getRandomID();
            this.img = appointment.avatar || "assets/images/user/user1.jpg";
            this.name = appointment.name || "";
            this.email = appointment.email || "";
            this.gender = appointment.gender || "male";
            this.date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(new Date(), "yyyy-MM-dd", "en") || "";
            this.time = appointment.time || "";
            this.mobile = appointment.mobile || "";
            this.doctor = appointment.mobile || "";
            this.injury = appointment.mobile || "";
        }
    }
    getRandomID() {
        const S4 = () => {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return S4() + S4();
    }
}


/***/ }),

/***/ "enIv":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/appointment/bookappointment/bookappointment.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">Book Appointment</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a routerLink=\"/admin/dashboard/main\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-2\">\r\n              <a href=\"#\" onClick=\"return false;\">Appointment</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">Book</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Book Appointment</h2>\r\n\r\n          </div>\r\n          <div class=\"body\">\r\n            <form class=\"m-4\" [formGroup]=\"bookingForm\" (ngSubmit)=\"onSubmit()\">\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>First name</mat-label>\r\n                    <input matInput formControlName=\"first\" required>\r\n                    <mat-error *ngIf=\"bookingForm.get('first').hasError('required')\">\r\n                      First name is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Last name</mat-label>\r\n                    <input matInput formControlName=\"last\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Gender</mat-label>\r\n                    <mat-select formControlName=\"gender\" required>\r\n                      <mat-option [value]=\"'male'\">\r\n                        Male\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'female'\">\r\n                        Female\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <mat-error *ngIf=\"bookingForm.get('gender').hasError('required')\">\r\n                      Gender is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Mobile</mat-label>\r\n                    <input matInput formControlName=\"mobile\" type=\"number\" required>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Address</mat-label>\r\n                    <textarea matInput formControlName=\"address\"></textarea>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Email</mat-label>\r\n                    <input matInput formControlName=\"email\" required>\r\n                    <mat-error *ngIf=\"bookingForm.get('email').hasError('email') && bookingForm.get('email').touched\">\r\n                      Please enter a valid email address\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Date Of Birth</mat-label>\r\n                    <input matInput [matDatepicker]=\"picker\" formControlName=\"dob\" required>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                    <mat-error *ngIf=\"bookingForm.get('dob').hasError('required')\">\r\n                      Please select date\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <h2 class=\"card-inside-title\">Appointment Details</h2>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Consulting Doctor</mat-label>\r\n                    <mat-select formControlName=\"doctor\" required>\r\n                      <mat-option [value]=\"'Dr.Rajesh'\">\r\n                        Dr.Rajesh\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'Dr.Sarah Smith'\">\r\n                        Dr.Sarah Smith\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'Dr.Jay Soni'\">\r\n                        Dr.Jay Soni\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'Dr.Pooja Patel'\">\r\n                        Dr.Pooja Patel\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'other'\">\r\n                        Other\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <mat-error *ngIf=\"bookingForm.get('doctor').hasError('required')\">\r\n                      Select Any Doctor\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Date Of Appointment</mat-label>\r\n                    <input matInput [matDatepicker]=\"picker1\" formControlName=\"doa\" required>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker1></mat-datepicker>\r\n                    <mat-error *ngIf=\"bookingForm.get('doa').hasError('required')\">\r\n                      Please select a date\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Time Of Appointment</mat-label>\r\n                    <input matInput formControlName=\"toa\" required>\r\n                    <mat-error *ngIf=\"bookingForm.get('toa').hasError('required')\">\r\n                      Please select a time\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Injury/Contion</mat-label>\r\n                    <textarea matInput formControlName=\"injury\"></textarea>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Note</mat-label>\r\n                    <textarea matInput formControlName=\"note\"></textarea>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <ngx-mat-file-input formControlName=\"uploadImg\" placeholder=\"Upload Image\">\r\n                    </ngx-mat-file-input>\r\n                    <mat-icon matSuffix>face</mat-icon>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                  <button class=\"btn-space\" [disabled]=\"!bookingForm.valid \" mat-raised-button\r\n                    color=\"primary\">Submit</button>\r\n                  <button type=\"button\" mat-button>Cancel</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "fWDJ":
/*!**************************************************************************!*\
  !*** ./src/app/admin/appointment/viewappointment/appointment.service.ts ***!
  \**************************************************************************/
/*! exports provided: AppointmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentService", function() { return AppointmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "41Ph");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




let AppointmentService = class AppointmentService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = "assets/data/appointment.json";
        this.isTblLoading = true;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    get data() {
        return this.dataChange.value;
    }
    getDialogData() {
        return this.dialogData;
    }
    /** CRUD METHODS */
    getAllAppointments() {
        this.httpClient.get(this.API_URL).subscribe((data) => {
            this.isTblLoading = false;
            this.dataChange.next(data);
        }, (error) => {
            this.isTblLoading = false;
            console.log(error.name + " " + error.message);
        });
    }
    addAppointment(appointment) {
        this.dialogData = appointment;
        /*  this.httpClient.post(this.API_URL, appointment).subscribe(data => {
          this.dialogData = appointment;
          },
          (err: HttpErrorResponse) => {
         // error code here
        });*/
    }
    updateAppointment(appointment) {
        this.dialogData = appointment;
        /* this.httpClient.put(this.API_URL + appointment.id, appointment).subscribe(data => {
          this.dialogData = appointment;
        },
        (err: HttpErrorResponse) => {
          // error code here
        }
      );*/
    }
    deleteAppointment(id) {
        console.log(id);
        /*  this.httpClient.delete(this.API_URL + id).subscribe(data => {
          console.log(id);
          },
          (err: HttpErrorResponse) => {
             // error code here
          }
        );*/
    }
};
AppointmentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AppointmentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppointmentService);



/***/ }),

/***/ "hIkn":
/*!************************************************************************************************!*\
  !*** ./src/app/admin/appointment/viewappointment/dialogs/form-dialog/form-dialog.component.ts ***!
  \************************************************************************************************/
/*! exports provided: FormDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDialogComponent", function() { return FormDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_form_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./form-dialog.component.html */ "ZKib");
/* harmony import */ var _form_dialog_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-dialog.component.sass */ "xyTl");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _appointment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../appointment.service */ "fWDJ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _appointment_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../appointment.model */ "b10Y");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");










let FormDialogComponent = class FormDialogComponent {
    constructor(dialogRef, data, appointmentService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.appointmentService = appointmentService;
        this.fb = fb;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            // Validators.email,
        ]);
        // Set the defaults
        this.action = data.action;
        if (this.action === "edit") {
            console.log(data.appointment.date);
            this.dialogTitle = data.appointment.name;
            this.appointment = data.appointment;
        }
        else {
            this.dialogTitle = "New Appointment";
            this.appointment = new _appointment_model__WEBPACK_IMPORTED_MODULE_7__["Appointment"]({});
        }
        this.appointmentForm = this.createContactForm();
    }
    getErrorMessage() {
        return this.formControl.hasError("required")
            ? "Required field"
            : this.formControl.hasError("email")
                ? "Not a valid email"
                : "";
    }
    createContactForm() {
        return this.fb.group({
            id: [this.appointment.id],
            img: [this.appointment.img],
            name: [this.appointment.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            email: [
                this.appointment.email,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(5)],
            ],
            gender: [this.appointment.gender],
            date: [
                Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(this.appointment.date, "yyyy-MM-dd", "en"),
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            ],
            time: [this.appointment.time, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            mobile: [this.appointment.mobile, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            doctor: [this.appointment.doctor, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            injury: [this.appointment.injury],
        });
    }
    submit() {
        // emppty stuff
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmAdd() {
        this.appointmentService.addAppointment(this.appointmentForm.getRawValue());
    }
};
FormDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _appointment_service__WEBPACK_IMPORTED_MODULE_5__["AppointmentService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
FormDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-form-dialog",
        template: _raw_loader_form_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [{ provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_LOCALE"], useValue: "en-GB" }],
        styles: [_form_dialog_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FormDialogComponent);



/***/ }),

/***/ "sYmw":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/appointment/viewappointment/dialogs/delete/delete.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <h3 mat-dialog-title>Are you sure?</h3>\r\n  <div mat-dialog-content>\r\n    <ul class=\"clearfix\">\r\n      <li>\r\n        <p><span class=\"font-weight-bold\"> Name: </span>{{data.name}}</p>\r\n      </li>\r\n      <li>\r\n        <p><span class=\"font-weight-bold\"> Email: </span>{{ data.email }}</p>\r\n      </li>\r\n      <li>\r\n        <p>\r\n          <span class=\"font-weight-bold\">Mobile: </span>{{data.mobile}}\r\n        </p>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div mat-dialog-actions class=\"mb-1\">\r\n    <button mat-flat-button color=\"warn\" [mat-dialog-close]=\"1\" (click)=\"confirmDelete()\">\r\n      Delete\r\n    </button>\r\n    <button mat-flat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "tliD":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/appointment/bookappointment/bookappointment.component.sass ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29rYXBwb2ludG1lbnQuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "xyTl":
/*!**************************************************************************************************!*\
  !*** ./src/app/admin/appointment/viewappointment/dialogs/form-dialog/form-dialog.component.sass ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWRpYWxvZy5jb21wb25lbnQuc2FzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=appointment-appointment-module-es2015.js.map