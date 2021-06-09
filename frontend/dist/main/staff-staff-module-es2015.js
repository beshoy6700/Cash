(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["staff-staff-module"],{

/***/ "/vZU":
/*!******************************************************************!*\
  !*** ./src/app/admin/staff/edit-staff/edit-staff.component.sass ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXN0YWZmLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "/xlF":
/*!****************************************************************!*\
  !*** ./src/app/admin/staff/edit-staff/edit-staff.component.ts ***!
  \****************************************************************/
/*! exports provided: EditStaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditStaffComponent", function() { return EditStaffComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_staff_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-staff.component.html */ "8S3S");
/* harmony import */ var _edit_staff_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-staff.component.sass */ "/vZU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





let EditStaffComponent = class EditStaffComponent {
    constructor(fb) {
        this.fb = fb;
        this.formdata = {
            first: "Pooja",
            last: "Sarma",
            gender: "Female",
            mobile: "123456789",
            password: "123",
            conformPassword: "123",
            email: "test@example.com",
            designation: "Sr. Doctor",
            department: "2",
            address: "101, Elanxa, New Yourk",
            dob: "1987-02-17T14:22:18Z",
            education: "M.B.B.S.",
        };
        this.staffForm = this.createContactForm();
    }
    onSubmit() {
        console.log("Form Value", this.staffForm.value);
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
            password: [this.formdata.password],
            conformPassword: [this.formdata.conformPassword],
            email: [
                this.formdata.email,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)],
            ],
            designation: [this.formdata.designation],
            department: [this.formdata.department],
            address: [this.formdata.address],
            dob: [this.formdata.dob, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            education: [this.formdata.education],
        });
    }
};
EditStaffComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
EditStaffComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-edit-staff",
        template: _raw_loader_edit_staff_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_staff_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditStaffComponent);



/***/ }),

/***/ "1JCc":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/staff/allstaff/dialog/form-dialog/form-dialog.component.ts ***!
  \**********************************************************************************/
/*! exports provided: FormDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDialogComponent", function() { return FormDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_form_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./form-dialog.component.html */ "HOD6");
/* harmony import */ var _form_dialog_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-dialog.component.sass */ "C4wn");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _staff_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../staff.service */ "D/5M");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _staff_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../staff.model */ "xorS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");









let FormDialogComponent = class FormDialogComponent {
    constructor(dialogRef, data, staffService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.staffService = staffService;
        this.fb = fb;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            // Validators.email,
        ]);
        // Set the defaults
        this.action = data.action;
        if (this.action === "edit") {
            this.dialogTitle = data.staff.name;
            this.staff = data.staff;
        }
        else {
            this.dialogTitle = "New Staff";
            this.staff = new _staff_model__WEBPACK_IMPORTED_MODULE_7__["Staff"]({});
        }
        this.staffForm = this.createContactForm();
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
            id: [this.staff.id],
            img: [this.staff.img],
            name: [this.staff.name],
            email: [this.staff.email],
            date: [
                Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(this.staff.date, "yyyy-MM-dd", "en"),
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            ],
            designation: [this.staff.designation],
            address: [this.staff.address],
            mobile: [this.staff.mobile],
        });
    }
    submit() {
        // emppty stuff
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmAdd() {
        this.staffService.addStaff(this.staffForm.getRawValue());
    }
};
FormDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _staff_service__WEBPACK_IMPORTED_MODULE_5__["StaffService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
FormDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-form-dialog",
        template: _raw_loader_form_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_form_dialog_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FormDialogComponent);



/***/ }),

/***/ "2V0U":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/staff/add-staff/add-staff.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">Add Staff</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a routerLink=\"/admin/dashboard/main\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-2\">\r\n              <a href=\"#\" onClick=\"return false;\">Staffs</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">Add</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2><strong> Staff Information</strong></h2>\r\n\r\n          </div>\r\n          <div class=\"body\">\r\n            <form class=\"m-4\" [formGroup]=\"staffForm\" (ngSubmit)=\"onSubmit()\">\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\" appearance=\"fill\">\r\n                    <mat-label>First name</mat-label>\r\n                    <input matInput formControlName=\"first\" required>\r\n                    <mat-error *ngIf=\"staffForm.get('first').hasError('required')\">\r\n                      First name is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\" appearance=\"fill\">\r\n                    <mat-label>Last name</mat-label>\r\n                    <input matInput formControlName=\"last\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\" appearance=\"fill\">\r\n                    <mat-label>Gender</mat-label>\r\n                    <mat-select formControlName=\"gender\" required>\r\n                      <mat-option [value]=\"'Male'\">\r\n                        Male\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'Female'\">\r\n                        Female\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <mat-error *ngIf=\"staffForm.get('gender').hasError('required')\">\r\n                      Gender is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\" appearance=\"fill\">\r\n                    <mat-label>Mobile</mat-label>\r\n                    <input matInput formControlName=\"mobile\" type=\"number\" required>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\" appearance=\"fill\">\r\n                    <mat-label>Password</mat-label>\r\n                    <input matInput formControlName=\"password\" type=\"password\" required>\r\n                    <mat-error *ngIf=\"staffForm.get('password').hasError('required')\">\r\n                      password is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\" appearance=\"fill\">\r\n                    <mat-label>Re-Enter Password</mat-label>\r\n                    <input matInput formControlName=\"conformPassword\" type=\"password\" required>\r\n                    <mat-error *ngIf=\"staffForm.get('conformPassword').hasError('required')\">\r\n                      Re-Enter password is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\" appearance=\"fill\">\r\n                    <mat-label>Designation</mat-label>\r\n                    <input matInput formControlName=\"designation\">\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\" appearance=\"fill\">\r\n                    <mat-label>Select Department</mat-label>\r\n                    <mat-select formControlName=\"department\" required>\r\n                      <mat-option [value]=\"'1'\">\r\n                        Neurology\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'2'\">\r\n                        Orthopedics\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'3'\">\r\n                        Gynaecology\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'4'\">\r\n                        Microbiology\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <mat-error *ngIf=\"staffForm.get('department').hasError('required')\">\r\n                      Select Any Department\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\" appearance=\"fill\">\r\n                    <mat-label>Address</mat-label>\r\n                    <textarea matInput formControlName=\"address\"></textarea>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\" appearance=\"fill\">\r\n                    <mat-label>Email</mat-label>\r\n                    <input matInput formControlName=\"email\" required>\r\n                    <mat-error *ngIf=\"staffForm.get('email').hasError('email') && staffForm.get('email').touched\">\r\n                      Please enter a valid email address\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\" appearance=\"fill\">\r\n                    <mat-label>Date Of Birth</mat-label>\r\n                    <input matInput [matDatepicker]=\"picker\" formControlName=\"dob\" required>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                    <mat-error *ngIf=\"staffForm.get('dob').hasError('required')\">\r\n                      Please select date\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\" appearance=\"fill\">\r\n                    <mat-label>Upload Image</mat-label>\r\n                    <ngx-mat-file-input formControlName=\"uploadImg\">\r\n                    </ngx-mat-file-input>\r\n                    <mat-icon matSuffix>face</mat-icon>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\" appearance=\"fill\">\r\n                    <mat-label>Education</mat-label>\r\n                    <textarea matInput formControlName=\"education\"></textarea>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                  <button class=\"btn-space\" [disabled]=\"!staffForm.valid \" mat-raised-button\r\n                    color=\"primary\">Submit</button>\r\n                  <button type=\"button\" mat-button>Cancel</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "3Cuv":
/*!************************************************************!*\
  !*** ./src/app/admin/staff/allstaff/allstaff.component.ts ***!
  \************************************************************/
/*! exports provided: AllstaffComponent, ExampleDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllstaffComponent", function() { return AllstaffComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDataSource", function() { return ExampleDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_allstaff_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./allstaff.component.html */ "ycr4");
/* harmony import */ var _allstaff_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allstaff.component.sass */ "HhXz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _staff_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./staff.service */ "D/5M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _dialog_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dialog/form-dialog/form-dialog.component */ "1JCc");
/* harmony import */ var _dialog_delete_delete_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dialog/delete/delete.component */ "leYB");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "41Ph");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "9YHx");
















let AllstaffComponent = class AllstaffComponent {
    constructor(httpClient, dialog, staffService, snackBar) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.staffService = staffService;
        this.snackBar = snackBar;
        this.displayedColumns = [
            "select",
            "img",
            "name",
            "designation",
            "mobile",
            "email",
            "date",
            "address",
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
    addNew() {
        let tempDirection;
        if (localStorage.getItem("isRtl") === "true") {
            tempDirection = "rtl";
        }
        else {
            tempDirection = "ltr";
        }
        const dialogRef = this.dialog.open(_dialog_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_10__["FormDialogComponent"], {
            data: {
                staff: this.staff,
                action: "add",
            },
            direction: tempDirection,
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result === 1) {
                // After dialog is closed we're doing frontend updates
                // For add we're just pushing a new row inside DataService
                this.exampleDatabase.dataChange.value.unshift(this.staffService.getDialogData());
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
        const dialogRef = this.dialog.open(_dialog_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_10__["FormDialogComponent"], {
            data: {
                staff: row,
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
                    this.staffService.getDialogData();
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
        const dialogRef = this.dialog.open(_dialog_delete_delete_component__WEBPACK_IMPORTED_MODULE_11__["DeleteDialogComponent"], {
            data: row,
            direction: tempDirection
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
    loadData() {
        this.exampleDatabase = new _staff_service__WEBPACK_IMPORTED_MODULE_4__["StaffService"](this.httpClient);
        this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["fromEvent"])(this.filter.nativeElement, "keyup").subscribe(() => {
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
AllstaffComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _staff_service__WEBPACK_IMPORTED_MODULE_4__["StaffService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBar"] }
];
AllstaffComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], { static: true },] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"], { static: true },] }],
    filter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["filter", { static: true },] }]
};
AllstaffComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-allstaff",
        template: _raw_loader_allstaff_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_allstaff_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AllstaffComponent);

class ExampleDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__["DataSource"] {
    constructor(exampleDatabase, paginator, _sort) {
        super();
        this.exampleDatabase = exampleDatabase;
        this.paginator = paginator;
        this._sort = _sort;
        this.filterChange = new rxjs__WEBPACK_IMPORTED_MODULE_13__["BehaviorSubject"]("");
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
        this.exampleDatabase.getAllStaffs();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["merge"])(...displayDataChanges).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(() => {
            // Filter data
            this.filteredData = this.exampleDatabase.data
                .slice()
                .filter((staff) => {
                const searchStr = (staff.name +
                    staff.designation +
                    staff.mobile +
                    staff.email +
                    staff.date +
                    staff.address).toLowerCase();
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
                case "date":
                    [propertyA, propertyB] = [a.date, b.date];
                    break;
                case "address":
                    [propertyA, propertyB] = [a.address, b.address];
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

/***/ "8S3S":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/staff/edit-staff/edit-staff.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">Edit Staff</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a routerLink=\"/admin/dashboard/main\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-2\">\r\n              <a href=\"#\" onClick=\"return false;\">Staff</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">Edit</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Edit Staff</h2>\r\n\r\n          </div>\r\n          <div class=\"body\">\r\n            <form class=\"m-4\" [formGroup]=\"staffForm\" (ngSubmit)=\"onSubmit()\">\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\" appearance=\"fill\">\r\n                    <mat-label>First name</mat-label>\r\n                    <input matInput formControlName=\"first\" required>\r\n                    <mat-error *ngIf=\"staffForm.get('first').hasError('required')\">\r\n                      First name is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\" appearance=\"fill\">\r\n                    <mat-label>Last name</mat-label>\r\n                    <input matInput formControlName=\"last\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\" appearance=\"fill\">\r\n                    <mat-label>Gender</mat-label>\r\n                    <mat-select formControlName=\"gender\" required>\r\n                      <mat-option [value]=\"'Male'\">\r\n                        Male\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'Female'\">\r\n                        Female\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <mat-error *ngIf=\"staffForm.get('gender').hasError('required')\">\r\n                      Gender is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\" appearance=\"fill\">\r\n                    <mat-label>Mobile</mat-label>\r\n                    <input matInput formControlName=\"mobile\" type=\"number\" required>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\" appearance=\"fill\">\r\n                    <mat-label>Password</mat-label>\r\n                    <input matInput formControlName=\"password\" type=\"password\" required>\r\n                    <mat-error *ngIf=\"staffForm.get('password').hasError('required')\">\r\n                      password is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\" appearance=\"fill\">\r\n                    <mat-label>Re-Enter Password</mat-label>\r\n                    <input matInput formControlName=\"conformPassword\" type=\"password\" required>\r\n                    <mat-error *ngIf=\"staffForm.get('conformPassword').hasError('required')\">\r\n                      Re-Enter password is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\" appearance=\"fill\">\r\n                    <mat-label>Designation</mat-label>\r\n                    <input matInput formControlName=\"designation\">\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\" appearance=\"fill\">\r\n                    <mat-label>Select Department</mat-label>\r\n                    <mat-select formControlName=\"department\" required>\r\n                      <mat-option [value]=\"'1'\">\r\n                        Neurology\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'2'\">\r\n                        Orthopedics\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'3'\">\r\n                        Gynaecology\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'4'\">\r\n                        Microbiology\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <mat-error *ngIf=\"staffForm.get('department').hasError('required')\">\r\n                      Select Any Department\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\" appearance=\"fill\">\r\n                    <mat-label>Address</mat-label>\r\n                    <textarea matInput formControlName=\"address\"></textarea>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\" appearance=\"fill\">\r\n                    <mat-label>Email</mat-label>\r\n                    <input matInput formControlName=\"email\" required>\r\n                    <mat-error *ngIf=\"staffForm.get('email').hasError('email') && staffForm.get('email').touched\">\r\n                      Please enter a valid email address\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\" appearance=\"fill\">\r\n                    <mat-label>Date Of Birth</mat-label>\r\n                    <input matInput [matDatepicker]=\"picker\" formControlName=\"dob\" required>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                    <mat-error *ngIf=\"staffForm.get('dob').hasError('required')\">\r\n                      Please select date\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\" appearance=\"fill\">\r\n                    <mat-label>Education</mat-label>\r\n                    <textarea matInput formControlName=\"education\"></textarea>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                  <button class=\"btn-space\" [disabled]=\"!staffForm.valid \" mat-raised-button\r\n                    color=\"primary\">Submit</button>\r\n                  <button type=\"button\" mat-button>Cancel</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "C4wn":
/*!************************************************************************************!*\
  !*** ./src/app/admin/staff/allstaff/dialog/form-dialog/form-dialog.component.sass ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWRpYWxvZy5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "D/5M":
/*!*******************************************************!*\
  !*** ./src/app/admin/staff/allstaff/staff.service.ts ***!
  \*******************************************************/
/*! exports provided: StaffService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffService", function() { return StaffService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "41Ph");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




let StaffService = class StaffService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = "assets/data/staff.json";
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
    getAllStaffs() {
        this.httpClient.get(this.API_URL).subscribe((data) => {
            this.isTblLoading = false;
            this.dataChange.next(data);
        }, (error) => {
            this.isTblLoading = false;
            console.log(error.name + " " + error.message);
        });
    }
    addStaff(staff) {
        this.dialogData = staff;
        /*  this.httpClient.post(this.API_URL, staff).subscribe(data => {
          this.dialogData = staff;
          },
          (err: HttpErrorResponse) => {
         // error code here
        });*/
    }
    updateStaff(staff) {
        this.dialogData = staff;
        /* this.httpClient.put(this.API_URL + staff.id, staff).subscribe(data => {
          this.dialogData = staff;
        },
        (err: HttpErrorResponse) => {
          // error code here
        }
      );*/
    }
    deleteStaff(id) {
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
StaffService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
StaffService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], StaffService);



/***/ }),

/***/ "DHh7":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/staff/staff-profile/staff-profile.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">Staff Profile</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a routerLink=\"/admin/dashboard/main\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-2\">\r\n              <a href=\"#\" onClick=\"return false;\">Staff</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">Profile</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Your content goes here  -->\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-lg-4 col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"m-b-20\">\r\n            <div class=\"contact-grid\">\r\n              <div class=\"profile-header bg-dark\">\r\n                <div class=\"user-name\">Jayna Patil</div>\r\n                <div class=\"name-center\">Nurse</div>\r\n              </div>\r\n              <img src=\"assets/images/user/usrbig5.jpg\" class=\"user-img\" alt=\"\">\r\n              <p>\r\n                456, Estern evenue, Courtage area,\r\n                <br />New York\r\n              </p>\r\n              <div>\r\n                <span class=\"phone\">\r\n                  <i class=\"material-icons\">phone</i>264-625-2583</span>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-4\">\r\n                  <h5>564</h5>\r\n                  <small>Following</small>\r\n                </div>\r\n                <div class=\"col-4\">\r\n                  <h5>18k</h5>\r\n                  <small>Followers</small>\r\n                </div>\r\n                <div class=\"col-4\">\r\n                  <h5>565</h5>\r\n                  <small>Post</small>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card\">\r\n          <mat-tab-group mat-align-tabs=\"start\">\r\n            <mat-tab label=\"About\">\r\n              <div class=\"p-4\">\r\n                <p class=\"text-default\">Lorem Ipsum is simply dummy text of the printing and\r\n                  typesetting industry. Lorem Ipsum has\r\n                  been the industry's standard dummy text ever since the 1500s, when an unknown\r\n                  printer\r\n                  took a galley of type and scrambled it to make a type specimen book. It has\r\n                  survived\r\n                  not only five centuries, but also the leap into electronic typesetting, remaining\r\n                  essentially\r\n                  unchanged.</p>\r\n                <small class=\"text-muted\">Email address: </small>\r\n                <p>john@gmail.com</p>\r\n                <hr>\r\n                <small class=\"text-muted\">Phone: </small>\r\n                <p>+91 1234567890</p>\r\n                <hr>\r\n              </div>\r\n            </mat-tab>\r\n            <mat-tab label=\"Skills\">\r\n              <ul class=\"list-unstyled p-4\">\r\n                <li>\r\n                  <div>observing patient</div>\r\n                  <div class=\"progress skill-progress m-b-20\">\r\n                    <div class=\"progress-bar l-bg-green width-per-45\" role=\"progressbar\" aria-valuenow=\"45\"\r\n                      aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <div>Dressing</div>\r\n                  <div class=\"progress skill-progress m-b-20\">\r\n                    <div class=\"progress-bar l-bg-orange width-per-38\" role=\"progressbar\" aria-valuenow=\"38\"\r\n                      aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <div>disease management</div>\r\n                  <div class=\"progress skill-progress m-b-20\">\r\n                    <div class=\"progress-bar l-bg-cyan width-per-39\" role=\"progressbar\" aria-valuenow=\"39\"\r\n                      aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <div>communication</div>\r\n                  <div class=\"progress skill-progress m-b-20\">\r\n                    <div class=\"progress-bar l-bg-purple width-per-70\" role=\"progressbar\" aria-valuenow=\"70\"\r\n                      aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </mat-tab>\r\n          </mat-tab-group>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-8 col-md-12\">\r\n        <div class=\"card\">\r\n          <mat-tab-group>\r\n            <mat-tab>\r\n              <ng-template mat-tab-label>\r\n                <mat-icon class=\"example-tab-icon msr-2\">face</mat-icon>\r\n                About Me\r\n              </ng-template>\r\n              <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                <div class=\"project_widget\">\r\n                  <div class=\"header\">\r\n                    <h2><strong>About</strong></h2>\r\n                  </div>\r\n                  <div class=\"body\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-3 col-6 b-r\">\r\n                        <strong>Full Name</strong>\r\n                        <br>\r\n                        <p class=\"text-muted\">Jayna Patil</p>\r\n                      </div>\r\n                      <div class=\"col-md-3 col-6 b-r\">\r\n                        <strong>Mobile</strong>\r\n                        <br>\r\n                        <p class=\"text-muted\">(123) 456 7890</p>\r\n                      </div>\r\n                      <div class=\"col-md-3 col-6 b-r\">\r\n                        <strong>Email</strong>\r\n                        <br>\r\n                        <p class=\"text-muted\">johndeo@example.com</p>\r\n                      </div>\r\n                      <div class=\"col-md-3 col-6\">\r\n                        <strong>Location</strong>\r\n                        <br>\r\n                        <p class=\"text-muted\">India</p>\r\n                      </div>\r\n                    </div>\r\n                    <p class=\"m-t-30\">Completed my graduation in Arts from the well known and\r\n                      renowned institution\r\n                      of India – SARDAR PATEL ARTS COLLEGE, BARODA in 2000-01, which was\r\n                      affiliated\r\n                      to M.S. University. I ranker in University exams from the same\r\n                      university\r\n                      from 1996-01.</p>\r\n                    <p>Worked as Professor and Head of the department at Sarda Collage, Rajkot,\r\n                      Gujarat\r\n                      from 2003-2015 </p>\r\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting\r\n                      industry. Lorem\r\n                      Ipsum has been the industry's standard dummy text ever since the 1500s,\r\n                      when\r\n                      an unknown printer took a galley of type and scrambled it to make a\r\n                      type\r\n                      specimen book. It has survived not only five centuries, but also the\r\n                      leap\r\n                      into electronic typesetting, remaining essentially unchanged.</p>\r\n                    <br>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                <div class=\"project_widget\">\r\n                  <div class=\"header\">\r\n                    <h2><strong>Education</strong></h2>\r\n                  </div>\r\n                  <div class=\"body\">\r\n                    <ul>\r\n                      <li>M.S.N.,Gujarat University, Ahmedabad,India.</li>\r\n                      <li>B.S.N.,Gujarat University, Ahmedabad, India.</li>\r\n                      <li>A.S.D.,Shaurashtra University, Rajkot, India</li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                <div class=\"project_widget\">\r\n                  <div class=\"header\">\r\n                    <h2><strong>Experience</strong></h2>\r\n                  </div>\r\n                  <div class=\"body\">\r\n                    <ul>\r\n                      <li>One year nursing internship from April-2009 to march-2010 at B. J.\r\n                        Medical College, Ahmedabad.</li>\r\n                      <li>I have worked as a part time Nursing in Apang manav mandal from 1st june\r\n                        2004 to 31st jan 2005.</li>\r\n                      <li>2.5 Years Worked at Mahatma Gandhi General Hospital, Surendranagar.</li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                <div class=\"project_widget\">\r\n                  <div class=\"header\">\r\n                    <h2><strong>Conferences, Cources &amp; Workshop Attended</strong></h2>\r\n                  </div>\r\n                  <div class=\"body\">\r\n                    <ul>\r\n                      <li>Lorem Ipsum is simply dummy text of the printing and typesetting\r\n                        industry.\r\n                      </li>\r\n                      <li>Lorem Ipsum is simply dummy text of the printing and typesetting\r\n                        industry.\r\n                      </li>\r\n                      <li>Lorem Ipsum is simply dummy text of the printing and typesetting\r\n                        industry.\r\n                      </li>\r\n                      <li>Lorem Ipsum is simply dummy text of the printing and typesetting\r\n                        industry.\r\n                      </li>\r\n                      <li>Lorem Ipsum is simply dummy text of the printing and typesetting\r\n                        industry.\r\n                      </li>\r\n                      <li>Lorem Ipsum is simply dummy text of the printing and typesetting\r\n                        industry.\r\n                      </li>\r\n                      <li>Lorem Ipsum is simply dummy text of the printing and typesetting\r\n                        industry.\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </mat-tab>\r\n\r\n            <mat-tab>\r\n              <ng-template mat-tab-label>\r\n                <mat-icon class=\"example-tab-icon msr-2\">settings</mat-icon>\r\n                Settings\r\n              </ng-template>\r\n              <div class=\"header\">\r\n                <h2>\r\n                  <strong>Security</strong> Settings</h2>\r\n              </div>\r\n              <div class=\"body\">\r\n                <div class=\"example-container\">\r\n                  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                    <mat-label>Username</mat-label>\r\n                    <input matInput>\r\n                  </mat-form-field>\r\n                  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                    <mat-label>Current Password</mat-label>\r\n                    <input matInput type=\"password\">\r\n                  </mat-form-field>\r\n                  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                    <mat-label>New Password</mat-label>\r\n                    <input matInput type=\"password\">\r\n                  </mat-form-field>\r\n                </div>\r\n                <button mat-raised-button color=\"primary\">Save</button>\r\n              </div>\r\n              <div class=\"header\">\r\n                <h2>\r\n                  <strong>Account</strong> Settings</h2>\r\n              </div>\r\n              <div class=\"body\">\r\n                <div class=\"row clearfix\">\r\n                  <div class=\"col-lg-6 col-md-12\">\r\n                    <div class=\"form-group\">\r\n                      <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                        <mat-label>First Name</mat-label>\r\n                        <input matInput>\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-6 col-md-12\">\r\n                    <div class=\"form-group\">\r\n                      <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                        <mat-label>Last Name</mat-label>\r\n                        <input matInput>\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-4 col-md-12\">\r\n                    <div class=\"form-group\">\r\n                      <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                        <mat-label>City</mat-label>\r\n                        <input matInput>\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-4 col-md-12\">\r\n                    <div class=\"form-group\">\r\n                      <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                        <mat-label>Email</mat-label>\r\n                        <input matInput>\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-4 col-md-12\">\r\n                    <div class=\"form-group\">\r\n                      <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                        <mat-label>Country</mat-label>\r\n                        <input matInput>\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                      <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                        <mat-label>Address</mat-label>\r\n                        <textarea matInput></textarea>\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                      <mat-checkbox class=\"example-margin\">Profile Visibility For Everyone\r\n                      </mat-checkbox>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <mat-checkbox class=\"example-margin\">New task notifications\r\n                      </mat-checkbox>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <mat-checkbox class=\"example-margin\">New friend request notifications\r\n                      </mat-checkbox>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <button mat-raised-button color=\"primary\">Save Changes</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </mat-tab>\r\n          </mat-tab-group>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "HOD6":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/staff/allstaff/dialog/form-dialog/form-dialog.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"addContainer\">\r\n  <div class=\"modalHeader\">\r\n    <div class=\"editRowModal\">\r\n      <div class=\"modalHeader clearfix\">\r\n        <img [src]='staff.img' alt=\"avatar\">\r\n        <div class=\"modal-about\">\r\n          <div class=\"font-weight-bold p-t-5 msl-3 font-17\">\r\n            {{dialogTitle}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <button mat-icon-button (click)=\"dialogRef.close()\" aria-label=\"Close dialog\">\r\n      <mat-icon>close</mat-icon>\r\n    </button>\r\n  </div>\r\n  <div mat-dialog-content>\r\n    <form class=\"register-form m-4\" [formGroup]=\"staffForm\" (ngSubmit)=\"submit\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n          <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n            <mat-label>Name</mat-label>\r\n            <input matInput formControlName=\"name\" required>\r\n            <mat-icon matSuffix>face</mat-icon>\r\n            <mat-error *ngIf=\"staffForm.get('name').hasError('required')\">\r\n              Name is required\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n          <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n            <mat-label>Designation</mat-label>\r\n            <input matInput formControlName=\"designation\" required>\r\n            <mat-icon matSuffix>business_center</mat-icon>\r\n            <mat-error *ngIf=\"staffForm.get('designation').hasError('required')\">\r\n              Designation is required\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n          <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n            <mat-label>Mobile</mat-label>\r\n            <input matInput formControlName=\"mobile\" type=\"number\">\r\n            <mat-icon matSuffix>phone</mat-icon>\r\n            <mat-error *ngIf=\"staffForm.get('mobile').hasError('required')\">\r\n              Mobile is required\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n          <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n            <mat-label>Email</mat-label>\r\n            <input matInput formControlName=\"email\" required>\r\n            <mat-icon matSuffix>email</mat-icon>\r\n            <mat-error *ngIf=\"staffForm.get('email').hasError('required') || staffForm.get('email').touched\">\r\n              Please enter a valid email address\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n          <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n            <mat-label>Joining date</mat-label>\r\n            <input matInput [matDatepicker]=\"picker\" formControlName=\"date\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker></mat-datepicker>\r\n            <mat-error *ngIf=\"staffForm.get('date').hasError('required')\">\r\n              Please select date\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n          <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n            <mat-label>Address</mat-label>\r\n            <textarea matInput formControlName=\"address\"></textarea>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n          <div class=\"example-button-row\">\r\n            <button mat-raised-button color=\"primary\" [type]=\"submit\" [disabled]=\"!staffForm.valid\"\r\n              [mat-dialog-close]=\"1\" (click)=\"confirmAdd()\">Save</button>\r\n            <button mat-raised-button color=\"warn\" (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "HhXz":
/*!**************************************************************!*\
  !*** ./src/app/admin/staff/allstaff/allstaff.component.sass ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGxzdGFmZi5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "Htvc":
/*!**********************************************************************!*\
  !*** ./src/app/admin/staff/staff-profile/staff-profile.component.ts ***!
  \**********************************************************************/
/*! exports provided: StaffProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffProfileComponent", function() { return StaffProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_staff_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./staff-profile.component.html */ "DHh7");
/* harmony import */ var _staff_profile_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./staff-profile.component.sass */ "Zb9t");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let StaffProfileComponent = class StaffProfileComponent {
    constructor() { }
    ngOnInit() { }
};
StaffProfileComponent.ctorParameters = () => [];
StaffProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-staff-profile",
        template: _raw_loader_staff_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_staff_profile_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], StaffProfileComponent);



/***/ }),

/***/ "Qh9N":
/*!**************************************************************!*\
  !*** ./src/app/admin/staff/add-staff/add-staff.component.ts ***!
  \**************************************************************/
/*! exports provided: AddStaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStaffComponent", function() { return AddStaffComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_staff_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-staff.component.html */ "2V0U");
/* harmony import */ var _add_staff_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-staff.component.sass */ "hd6+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





let AddStaffComponent = class AddStaffComponent {
    constructor(fb) {
        this.fb = fb;
        this.hide3 = true;
        this.agree3 = false;
        this.staffForm = this.fb.group({
            first: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("[a-zA-Z]+")]],
            last: [""],
            gender: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            mobile: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            conformPassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            designation: [""],
            department: [""],
            address: [""],
            email: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)],
            ],
            dob: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            education: [""],
            uploadImg: [""],
        });
    }
    onSubmit() {
        console.log("Form Value", this.staffForm.value);
    }
};
AddStaffComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
AddStaffComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-add-staff",
        template: _raw_loader_add_staff_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_staff_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddStaffComponent);



/***/ }),

/***/ "RLRS":
/*!*****************************************************!*\
  !*** ./src/app/admin/staff/staff-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: StaffRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffRoutingModule", function() { return StaffRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _allstaff_allstaff_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allstaff/allstaff.component */ "3Cuv");
/* harmony import */ var _add_staff_add_staff_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-staff/add-staff.component */ "Qh9N");
/* harmony import */ var _edit_staff_edit_staff_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-staff/edit-staff.component */ "/xlF");
/* harmony import */ var _staff_profile_staff_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./staff-profile/staff-profile.component */ "Htvc");
/* harmony import */ var _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../authentication/page404/page404.component */ "21P8");








const routes = [
    {
        path: "all-staff",
        component: _allstaff_allstaff_component__WEBPACK_IMPORTED_MODULE_3__["AllstaffComponent"],
    },
    {
        path: "add-staff",
        component: _add_staff_add_staff_component__WEBPACK_IMPORTED_MODULE_4__["AddStaffComponent"],
    },
    {
        path: "edit-staff",
        component: _edit_staff_edit_staff_component__WEBPACK_IMPORTED_MODULE_5__["EditStaffComponent"],
    },
    {
        path: "staff-profile",
        component: _staff_profile_staff_profile_component__WEBPACK_IMPORTED_MODULE_6__["StaffProfileComponent"],
    },
    { path: "**", component: _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_7__["Page404Component"] },
];
let StaffRoutingModule = class StaffRoutingModule {
};
StaffRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StaffRoutingModule);



/***/ }),

/***/ "Zb9t":
/*!************************************************************************!*\
  !*** ./src/app/admin/staff/staff-profile/staff-profile.component.sass ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGFmZi1wcm9maWxlLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "bejo":
/*!*********************************************!*\
  !*** ./src/app/admin/staff/staff.module.ts ***!
  \*********************************************/
/*! exports provided: StaffModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffModule", function() { return StaffModule; });
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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _staff_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./staff-routing.module */ "RLRS");
/* harmony import */ var _allstaff_allstaff_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./allstaff/allstaff.component */ "3Cuv");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _allstaff_dialog_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./allstaff/dialog/form-dialog/form-dialog.component */ "1JCc");
/* harmony import */ var _allstaff_dialog_delete_delete_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./allstaff/dialog/delete/delete.component */ "leYB");
/* harmony import */ var _add_staff_add_staff_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./add-staff/add-staff.component */ "Qh9N");
/* harmony import */ var _edit_staff_edit_staff_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./edit-staff/edit-staff.component */ "/xlF");
/* harmony import */ var _staff_profile_staff_profile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./staff-profile/staff-profile.component */ "Htvc");
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-material-file-input */ "7ZcW");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _allstaff_staff_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./allstaff/staff.service */ "D/5M");




























let StaffModule = class StaffModule {
};
StaffModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _allstaff_allstaff_component__WEBPACK_IMPORTED_MODULE_17__["AllstaffComponent"],
            _allstaff_dialog_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_20__["FormDialogComponent"],
            _allstaff_dialog_delete_delete_component__WEBPACK_IMPORTED_MODULE_21__["DeleteDialogComponent"],
            _add_staff_add_staff_component__WEBPACK_IMPORTED_MODULE_22__["AddStaffComponent"],
            _edit_staff_edit_staff_component__WEBPACK_IMPORTED_MODULE_23__["EditStaffComponent"],
            _staff_profile_staff_profile_component__WEBPACK_IMPORTED_MODULE_24__["StaffProfileComponent"],
        ],
        imports: [
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
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_25__["MaterialFileInputModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MatTabsModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"],
            _staff_routing_module__WEBPACK_IMPORTED_MODULE_16__["StaffRoutingModule"],
        ],
        providers: [_allstaff_staff_service__WEBPACK_IMPORTED_MODULE_27__["StaffService"]],
    })
], StaffModule);



/***/ }),

/***/ "hd6+":
/*!****************************************************************!*\
  !*** ./src/app/admin/staff/add-staff/add-staff.component.sass ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtc3RhZmYuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "leYB":
/*!************************************************************************!*\
  !*** ./src/app/admin/staff/allstaff/dialog/delete/delete.component.ts ***!
  \************************************************************************/
/*! exports provided: DeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDialogComponent", function() { return DeleteDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_delete_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./delete.component.html */ "sXXN");
/* harmony import */ var _delete_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete.component.sass */ "tju8");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _staff_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../staff.service */ "D/5M");






let DeleteDialogComponent = class DeleteDialogComponent {
    constructor(dialogRef, data, staffService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.staffService = staffService;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmDelete() {
        this.staffService.deleteStaff(this.data.id);
    }
};
DeleteDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _staff_service__WEBPACK_IMPORTED_MODULE_5__["StaffService"] }
];
DeleteDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-delete",
        template: _raw_loader_delete_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_delete_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DeleteDialogComponent);



/***/ }),

/***/ "sXXN":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/staff/allstaff/dialog/delete/delete.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <h3 mat-dialog-title>Are you sure?</h3>\r\n  <div mat-dialog-content>\r\n    <ul class=\"clearfix\">\r\n      <li>\r\n        <p><span class=\"font-weight-bold\"> Name: </span>{{data.name}}</p>\r\n      </li>\r\n      <li>\r\n        <p><span class=\"font-weight-bold\"> Designation: </span>{{ data.designation }}</p>\r\n      </li>\r\n      <li>\r\n        <p>\r\n          <span class=\"font-weight-bold\">Mobile: </span>{{data.mobile}}\r\n        </p>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div mat-dialog-actions class=\"mb-1\">\r\n    <button mat-flat-button color=\"warn\" [mat-dialog-close]=\"1\" (click)=\"confirmDelete()\">\r\n      Delete\r\n    </button>\r\n    <button mat-flat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "tju8":
/*!**************************************************************************!*\
  !*** ./src/app/admin/staff/allstaff/dialog/delete/delete.component.sass ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "xorS":
/*!*****************************************************!*\
  !*** ./src/app/admin/staff/allstaff/staff.model.ts ***!
  \*****************************************************/
/*! exports provided: Staff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Staff", function() { return Staff; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");

class Staff {
    constructor(staff) {
        {
            this.id = staff.id || this.getRandomID();
            this.img = staff.avatar || "assets/images/user/user1.jpg";
            this.name = staff.name || "";
            this.designation = staff.designation || "";
            this.email = staff.email || "";
            this.date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(new Date(), "yyyy-MM-dd", "en") || "";
            this.address = staff.address || "";
            this.mobile = staff.mobile || "";
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

/***/ "ycr4":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/staff/allstaff/allstaff.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">View Staff</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a routerLink=\"/admin/dashboard/main\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-2\">\r\n              <a href=\"#\" onClick=\"return false;\">Staff</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">View</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n        <div class=\"card\">\r\n          <div class=\"body\">\r\n            <div class=\"table-responsive\">\r\n              <div class=\"materialTableHeader\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-8\">\r\n                    <ul class=\"header-buttons-left ms-0\">\r\n                      <li class=\"dropdown\">\r\n                        <h2>\r\n                          <strong>Staff</strong></h2>\r\n                      </li>\r\n                      <li class=\"dropdown m-l-20\">\r\n                        <label for=\"search-input\"><i class=\"material-icons search-icon\">search</i></label>\r\n                        <input placeholder=\"Search\" type=\"text\" #filter class=\"browser-default search-field\"\r\n                          aria-label=\"Search box\">\r\n                      </li>\r\n                      <li>\r\n                        <div class=\"icon-button-demo m-l-10\" [hidden]=!selection.hasValue()>\r\n                          <button mat-mini-fab color=\"warn\" (click)=\"removeSelectedRows()\">\r\n                            <mat-icon class=\"col-white\">delete</mat-icon>\r\n                          </button>\r\n                        </div>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                  <div class=\"col-4\">\r\n                    <ul class=\"header-buttons\">\r\n                      <li>\r\n                        <div class=\"icon-button-demo\">\r\n                          <button mat-mini-fab color=\"primary\" (click)=\"addNew()\">\r\n                            <mat-icon class=\"col-white\">add</mat-icon>\r\n                          </button>\r\n                        </div>\r\n                      </li>\r\n                      <li>\r\n                        <div class=\"icon-button-demo\">\r\n                          <button mat-mini-fab color=\"primary\" (click)=\"refresh()\">\r\n                            <mat-icon class=\"col-white\">refresh</mat-icon>\r\n                          </button>\r\n                        </div>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <mat-table #table [dataSource]=\"dataSource\" matSort class=\"mat-cell\">\r\n                <!-- Checkbox Column -->\r\n                <ng-container matColumnDef=\"select\">\r\n                  <mat-header-cell *matHeaderCellDef [ngClass]=\"'tbl-col-width-per-6'\">\r\n                    <mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n                      [checked]=\"selection.hasValue() && isAllSelected()\"\r\n                      [indeterminate]=\"selection.hasValue() && !isAllSelected()\" [ngClass]=\"'tbl-checkbox'\">\r\n                    </mat-checkbox>\r\n                  </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\" [ngClass]=\"'tbl-col-width-per-6'\">\r\n                    <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\"\r\n                      [checked]=\"selection.isSelected(row)\" [ngClass]=\"'tbl-checkbox'\">\r\n                    </mat-checkbox>\r\n                  </mat-cell>\r\n                </ng-container>\r\n                <!-- ID Column -->\r\n                <ng-container matColumnDef=\"id\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Id</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\">{{row.id}}</mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"img\">\r\n                  <mat-header-cell mat-header-cell *matHeaderCellDef [ngClass]=\"'tbl-col-width-per-5'\"> Image\r\n                  </mat-header-cell>\r\n                  <mat-cell mat-cell *matCellDef=\"let row\" class=\"table-img tbl-col-width-per-5\"> <img\r\n                      [src]=\"row.img\" />\r\n                  </mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"name\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Name</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.name}}</mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"designation\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Designation</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.designation}}</mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"mobile\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Mobile</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.mobile}}</mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"email\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Email</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.email}}</mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"date\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Date</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.date | date: 'MM/dd/yyyy'}}</mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"address\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Address</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.address}}</mat-cell>\r\n                </ng-container>\r\n                <!-- actions -->\r\n                <ng-container matColumnDef=\"actions\">\r\n                  <mat-header-cell *matHeaderCellDef class=\"pr-0\">Actions</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row; let i=index;\" class=\"pr-0\">\r\n                    <button mat-icon-button color=\"accent\" class=\"btn-tbl-edit\" (click)=\"$event.stopPropagation()\"\r\n                      (click)=\"editCall(row)\">\r\n                      <mat-icon aria-label=\"Edit\" class=\"col-white\">edit</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button color=\"accent\" class=\"btn-tbl-delete\" (click)=\"$event.stopPropagation()\"\r\n                      (click)=\"deleteItem(i, row)\">\r\n                      <mat-icon aria-label=\"Delete\" class=\"col-white\">delete</mat-icon>\r\n                    </button>\r\n                  </mat-cell>\r\n                </ng-container>\r\n                <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                <!-- <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row> -->\r\n                <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"editCall(row)\"\r\n                  [style.cursor]=\"'pointer'\" matRipple>\r\n                </mat-row>\r\n              </mat-table>\r\n              <!-- Loading spinner -->\r\n              <div *ngIf=\"exampleDatabase.isTblLoading\" class=\"tbl-spinner\">\r\n                <mat-progress-spinner color=\"primary\" [diameter]=\"40\" mode=\"indeterminate\">\r\n                </mat-progress-spinner>\r\n              </div>\r\n              <div *ngIf=\"!exampleDatabase.isTblLoading\" class=\"no-results\"\r\n                [style.display]=\"dataSource.renderedData.length == 0 ? '' : 'none'\">\r\n                No results\r\n              </div>\r\n              <mat-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"10\"\r\n                [pageSizeOptions]=\"[5, 10, 25, 100]\">\r\n              </mat-paginator>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ })

}]);
//# sourceMappingURL=staff-staff-module-es2015.js.map