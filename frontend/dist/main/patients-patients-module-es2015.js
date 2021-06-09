(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patients-patients-module"],{

/***/ "4H17":
/*!*********************************************************************!*\
  !*** ./src/app/admin/patients/add-patient/add-patient.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddPatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPatientComponent", function() { return AddPatientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_patient_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-patient.component.html */ "chEc");
/* harmony import */ var _add_patient_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-patient.component.sass */ "AVm9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





let AddPatientComponent = class AddPatientComponent {
    constructor(fb) {
        this.fb = fb;
        this.patientForm = this.fb.group({
            first: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("[a-zA-Z]+")]],
            last: [""],
            gender: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            mobile: [""],
            dob: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            age: [""],
            email: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)],
            ],
            maritalStatus: [""],
            address: [""],
            bGroup: [""],
            bPresure: [""],
            sugger: [""],
            injury: [""],
            uploadImg: [""],
        });
    }
    onSubmit() {
        console.log("Form Value", this.patientForm.value);
    }
};
AddPatientComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
AddPatientComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-add-patient",
        template: _raw_loader_add_patient_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_patient_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddPatientComponent);



/***/ }),

/***/ "4tiZ":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/patients/allpatients/dialog/form-dialog/form-dialog.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"addContainer\">\r\n  <div class=\"modalHeader\">\r\n    <div class=\"editRowModal\">\r\n      <div class=\"modalHeader clearfix\">\r\n        <img [src]='patient.img' alt=\"avatar\">\r\n        <div class=\"modal-about\">\r\n          <div class=\"font-weight-bold p-t-5 msl-3 font-17\">\r\n            {{dialogTitle}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <button mat-icon-button (click)=\"dialogRef.close()\" aria-label=\"Close dialog\">\r\n      <mat-icon>close</mat-icon>\r\n    </button>\r\n  </div>\r\n  <div mat-dialog-content>\r\n    <form class=\"register-form m-4\" [formGroup]=\"patientForm\" (ngSubmit)=\"submit\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n          <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n            <mat-label>Name</mat-label>\r\n            <input matInput formControlName=\"name\" required>\r\n            <mat-icon matSuffix>face</mat-icon>\r\n            <mat-error *ngIf=\"patientForm.get('name').hasError('required')\">\r\n              Name is required\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n          <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n            <mat-label>Mobile</mat-label>\r\n            <input matInput formControlName=\"mobile\" type=\"number\">\r\n            <mat-icon matSuffix>phone</mat-icon>\r\n            <mat-error *ngIf=\"patientForm.get('mobile').hasError('required')\">\r\n              Mobile is required\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n          <div class=\"m-b-20\">\r\n            <mat-label class=\"msr-3\">Gender:</mat-label>\r\n            <mat-radio-group aria-label=\"Select gender\" formControlName=\"gender\" required>\r\n              <mat-radio-button value=\"male\">Male</mat-radio-button>\r\n              <mat-radio-button value=\"female\">Female</mat-radio-button>\r\n              <mat-error *ngIf=\"patientForm.get('gender').hasError('required')\">\r\n                Select gender\r\n              </mat-error>\r\n            </mat-radio-group>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n          <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n            <mat-label>Address</mat-label>\r\n            <textarea matInput formControlName=\"address\"></textarea>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n          <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n            <mat-label>Birth date</mat-label>\r\n            <input matInput [matDatepicker]=\"picker\" formControlName=\"date\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker></mat-datepicker>\r\n            <mat-error *ngIf=\"patientForm.get('date').hasError('required')\">\r\n              Please select date\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n          <mat-form-field class=\"example-full-width \" appearance=\"outline\">\r\n            <mat-label>Blood Group</mat-label>\r\n            <mat-select formControlName=\"bGroup\" required>\r\n              <mat-option [value]=\"'A+'\">\r\n                A+\r\n              </mat-option>\r\n              <mat-option [value]=\"'B+'\">\r\n                B+\r\n              </mat-option>\r\n              <mat-option [value]=\"'O+'\">\r\n                O+\r\n              </mat-option>\r\n              <mat-option [value]=\"'AB+'\">\r\n                AB+\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-error *ngIf=\"patientForm.get('bGroup').hasError('required')\">\r\n              Blood Group is required\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n          <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n            <mat-label>Treatment</mat-label>\r\n            <input matInput formControlName=\"treatment\" required>\r\n            <mat-icon matSuffix>healing</mat-icon>\r\n            <mat-error *ngIf=\"patientForm.get('treatment').hasError('required')\">\r\n              Treatment is required\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n          <div class=\"example-button-row\">\r\n            <button mat-raised-button color=\"primary\" [type]=\"submit\" [disabled]=\"!patientForm.valid\"\r\n              [mat-dialog-close]=\"1\" (click)=\"confirmAdd()\">Save</button>\r\n            <button mat-raised-button color=\"warn\" (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "9eKU":
/*!******************************************************************************************!*\
  !*** ./src/app/admin/patients/allpatients/dialog/form-dialog/form-dialog.component.sass ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWRpYWxvZy5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "9ikp":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/patients/patient-profile/patient-profile.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PatientProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientProfileComponent", function() { return PatientProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_patient_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./patient-profile.component.html */ "ohyr");
/* harmony import */ var _patient_profile_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patient-profile.component.sass */ "SzER");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PatientProfileComponent = class PatientProfileComponent {
    constructor() { }
    ngOnInit() { }
};
PatientProfileComponent.ctorParameters = () => [];
PatientProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-patient-profile",
        template: _raw_loader_patient_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_patient_profile_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PatientProfileComponent);



/***/ }),

/***/ "AVm9":
/*!***********************************************************************!*\
  !*** ./src/app/admin/patients/add-patient/add-patient.component.sass ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcGF0aWVudC5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "AZ9q":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/patients/allpatients/allpatients.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">View Patient</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a routerLink=\"/admin/dashboard/main\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-2\">\r\n              <a href=\"#\" onClick=\"return false;\">Patient</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">View</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n        <div class=\"card\">\r\n          <div class=\"body\">\r\n            <div class=\"table-responsive\">\r\n              <div class=\"materialTableHeader\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-8\">\r\n                    <ul class=\"header-buttons-left ms-0\">\r\n                      <li class=\"dropdown\">\r\n                        <h2>\r\n                          <strong>Patients</strong></h2>\r\n                      </li>\r\n                      <li class=\"dropdown m-l-20\">\r\n                        <label for=\"search-input\"><i class=\"material-icons search-icon\">search</i></label>\r\n                        <input placeholder=\"Search\" type=\"text\" #filter class=\"browser-default search-field\"\r\n                          aria-label=\"Search box\">\r\n                      </li>\r\n                      <li>\r\n                        <div class=\"icon-button-demo m-l-10\" [hidden]=!selection.hasValue()>\r\n                          <button mat-mini-fab color=\"warn\" (click)=\"removeSelectedRows()\">\r\n                            <mat-icon class=\"col-white\">delete</mat-icon>\r\n                          </button>\r\n                        </div>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                  <div class=\"col-4\">\r\n                    <ul class=\"header-buttons\">\r\n                      <li>\r\n                        <div class=\"icon-button-demo\">\r\n                          <button mat-mini-fab color=\"primary\" (click)=\"addNew()\">\r\n                            <mat-icon class=\"col-white\">add</mat-icon>\r\n                          </button>\r\n                        </div>\r\n                      </li>\r\n                      <li>\r\n                        <div class=\"icon-button-demo\">\r\n                          <button mat-mini-fab color=\"primary\" (click)=\"refresh()\">\r\n                            <mat-icon class=\"col-white\">refresh</mat-icon>\r\n                          </button>\r\n                        </div>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <mat-table #table [dataSource]=\"dataSource\" matSort class=\"mat-cell\">\r\n                <!-- Checkbox Column -->\r\n                <ng-container matColumnDef=\"select\">\r\n                  <mat-header-cell *matHeaderCellDef [ngClass]=\"'tbl-col-width-per-6'\">\r\n                    <mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n                      [checked]=\"selection.hasValue() && isAllSelected()\"\r\n                      [indeterminate]=\"selection.hasValue() && !isAllSelected()\" [ngClass]=\"'tbl-checkbox'\">\r\n                    </mat-checkbox>\r\n                  </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\" [ngClass]=\"'tbl-col-width-per-6'\">\r\n                    <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\"\r\n                      [checked]=\"selection.isSelected(row)\" [ngClass]=\"'tbl-checkbox'\">\r\n                    </mat-checkbox>\r\n                  </mat-cell>\r\n                </ng-container>\r\n                <!-- ID Column -->\r\n                <ng-container matColumnDef=\"id\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Id</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\">{{row.id}}</mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"img\">\r\n                  <mat-header-cell mat-header-cell *matHeaderCellDef [ngClass]=\"'tbl-col-width-per-5'\"> Image\r\n                  </mat-header-cell>\r\n                  <mat-cell mat-cell *matCellDef=\"let row\" class=\"table-img tbl-col-width-per-5\"> <img\r\n                      [src]=\"row.img\" />\r\n                  </mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"name\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Name</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.name}}</mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"gender\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header [ngClass]=\"'tbl-col-width-per-8'\">Gender\r\n                  </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\" [ngClass]=\"'tbl-col-width-per-8'\"> {{row.gender}}\r\n                  </mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"address\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header [ngClass]=\"'tbl-col-width-per-15'\">Address\r\n                  </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\" [ngClass]=\"'tbl-col-width-per-20'\"> {{row.address}}\r\n                  </mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"mobile\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Mobile</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.mobile}}</mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"date\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Birth Date</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.date | date: 'MM/dd/yyyy'}}</mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"bGroup\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Blood Group</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.bGroup}}</mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"treatment\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Treatment</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.treatment}}</mat-cell>\r\n                </ng-container>\r\n                <!-- actions -->\r\n                <ng-container matColumnDef=\"actions\">\r\n                  <mat-header-cell *matHeaderCellDef class=\"pr-0\">Actions</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row; let i=index;\" class=\"pr-0\">\r\n                    <button mat-icon-button color=\"accent\" class=\"btn-tbl-edit\" (click)=\"$event.stopPropagation()\"\r\n                      (click)=\"editCall(row)\">\r\n                      <mat-icon aria-label=\"Edit\" class=\"col-white\">edit</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button color=\"accent\" class=\"btn-tbl-delete\" (click)=\"$event.stopPropagation()\"\r\n                      (click)=\"deleteItem(i, row)\">\r\n                      <mat-icon aria-label=\"Delete\" class=\"col-white\">delete</mat-icon>\r\n                    </button>\r\n                  </mat-cell>\r\n                </ng-container>\r\n                <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                <!-- <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row> -->\r\n                <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"editCall(row)\"\r\n                  [style.cursor]=\"'pointer'\" matRipple>\r\n                </mat-row>\r\n              </mat-table>\r\n              <!-- Loading spinner -->\r\n              <div *ngIf=\"exampleDatabase.isTblLoading\" class=\"tbl-spinner\">\r\n                <mat-progress-spinner color=\"primary\" [diameter]=\"40\" mode=\"indeterminate\">\r\n                </mat-progress-spinner>\r\n              </div>\r\n              <div *ngIf=\"!exampleDatabase.isTblLoading\" class=\"no-results\"\r\n                [style.display]=\"dataSource.renderedData.length == 0 ? '' : 'none'\">\r\n                No results\r\n              </div>\r\n              <mat-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"10\"\r\n                [pageSizeOptions]=\"[5, 10, 25, 100]\">\r\n              </mat-paginator>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "DZmN":
/*!***************************************************************!*\
  !*** ./src/app/admin/patients/allpatients/patient.service.ts ***!
  \***************************************************************/
/*! exports provided: PatientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientService", function() { return PatientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "41Ph");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




let PatientService = class PatientService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = "assets/data/patient.json";
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
    getAllPatients() {
        this.httpClient.get(this.API_URL).subscribe((data) => {
            this.isTblLoading = false;
            this.dataChange.next(data);
        }, (error) => {
            this.isTblLoading = false;
            console.log(error.name + " " + error.message);
        });
    }
    addPatient(patient) {
        this.dialogData = patient;
        /*  this.httpClient.post(this.API_URL, patient).subscribe(data => {
          this.dialogData = patient;
          },
          (err: HttpErrorResponse) => {
         // error code here
        });*/
    }
    updatePatient(patient) {
        this.dialogData = patient;
        /* this.httpClient.put(this.API_URL + patient.id, patient).subscribe(data => {
          this.dialogData = patient;
        },
        (err: HttpErrorResponse) => {
          // error code here
        }
      );*/
    }
    deletePatient(id) {
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
PatientService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
PatientService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PatientService);



/***/ }),

/***/ "GCeW":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/patients/allpatients/dialog/delete/delete.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <h3 mat-dialog-title>Are you sure?</h3>\r\n  <div mat-dialog-content>\r\n    <ul class=\"clearfix\">\r\n      <li>\r\n        <p><span class=\"font-weight-bold\"> Patient Name: </span>{{data.name}}</p>\r\n      </li>\r\n      <li>\r\n        <p><span class=\"font-weight-bold\"> Gender: </span>{{ data.gender }}</p>\r\n      </li>\r\n      <li>\r\n        <p>\r\n          <span class=\"font-weight-bold\">Blood Group: </span>{{data.bGroup}}\r\n        </p>\r\n      </li>\r\n      <li>\r\n        <p>\r\n          <span class=\"font-weight-bold\">Mobile: </span>{{data.mobile}}\r\n        </p>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div mat-dialog-actions class=\"mb-1\">\r\n    <button mat-flat-button color=\"warn\" [mat-dialog-close]=\"1\" (click)=\"confirmDelete()\">\r\n      Delete\r\n    </button>\r\n    <button mat-flat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "INyv":
/*!********************************************************************************!*\
  !*** ./src/app/admin/patients/allpatients/dialog/delete/delete.component.sass ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "Isrk":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/patients/edit-patient/edit-patient.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">Edit Patient</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a routerLink=\"/admin/dashboard/main\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-2\">\r\n              <a href=\"#\" onClick=\"return false;\">Patients</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">Edit</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2><strong> Patient Information</strong></h2>\r\n\r\n          </div>\r\n          <div class=\"body\">\r\n            <form class=\"m-4\" [formGroup]=\"patientForm\" (ngSubmit)=\"onSubmit()\">\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>First name</mat-label>\r\n                    <input matInput formControlName=\"first\" required>\r\n                    <mat-error *ngIf=\"patientForm.get('first').hasError('required')\">\r\n                      First name is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Last name</mat-label>\r\n                    <input matInput formControlName=\"last\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Gender</mat-label>\r\n                    <mat-select formControlName=\"gender\" required>\r\n                      <mat-option [value]=\"'Male'\">\r\n                        Male\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'Female'\">\r\n                        Female\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <mat-error *ngIf=\"patientForm.get('gender').hasError('required')\">\r\n                      Gender is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Mobile</mat-label>\r\n                    <input matInput formControlName=\"mobile\" type=\"number\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Date Of Birth</mat-label>\r\n                    <input matInput [matDatepicker]=\"picker\" formControlName=\"dob\" required>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                    <mat-error *ngIf=\"patientForm.get('dob').hasError('required')\">\r\n                      Please select date\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Age</mat-label>\r\n                    <input matInput formControlName=\"age\" type=\"number\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Email</mat-label>\r\n                    <input matInput formControlName=\"email\" type=\"email\" required>\r\n                    <mat-error *ngIf=\"patientForm.get('email').hasError('email') && patientForm.get('email').touched\">\r\n                      Please enter a valid email address\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Marital Status</mat-label>\r\n                    <mat-select formControlName=\"maritalStatus\" required>\r\n                      <mat-option [value]=\"'1'\">\r\n                        Single\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'2'\">\r\n                        Married\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <mat-error *ngIf=\"patientForm.get('maritalStatus').hasError('required')\">\r\n                      Select Any\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Address</mat-label>\r\n                    <textarea matInput formControlName=\"address\"></textarea>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Blood Group</mat-label>\r\n                    <input matInput formControlName=\"bGroup\">\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Blood Presure</mat-label>\r\n                    <input matInput formControlName=\"bPresure\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Sugger</mat-label>\r\n                    <input matInput formControlName=\"sugger\">\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Injury/Condition</mat-label>\r\n                    <input matInput formControlName=\"injury\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                  <button class=\"btn-space\" [disabled]=\"!patientForm.valid \" mat-raised-button\r\n                    color=\"primary\">Submit</button>\r\n                  <button type=\"button\" mat-button>Cancel</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "LZch":
/*!***************************************************!*\
  !*** ./src/app/admin/patients/patients.module.ts ***!
  \***************************************************/
/*! exports provided: PatientsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsModule", function() { return PatientsModule; });
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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-material-file-input */ "7ZcW");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _patients_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./patients-routing.module */ "qhbg");
/* harmony import */ var _add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./add-patient/add-patient.component */ "4H17");
/* harmony import */ var _allpatients_allpatients_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./allpatients/allpatients.component */ "Rcyf");
/* harmony import */ var _edit_patient_edit_patient_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./edit-patient/edit-patient.component */ "myH/");
/* harmony import */ var _patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./patient-profile/patient-profile.component */ "9ikp");
/* harmony import */ var _allpatients_dialog_delete_delete_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./allpatients/dialog/delete/delete.component */ "nx97");
/* harmony import */ var _allpatients_dialog_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./allpatients/dialog/form-dialog/form-dialog.component */ "i5yr");
/* harmony import */ var _allpatients_patient_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./allpatients/patient.service */ "DZmN");





























let PatientsModule = class PatientsModule {
};
PatientsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_22__["AddPatientComponent"],
            _allpatients_allpatients_component__WEBPACK_IMPORTED_MODULE_23__["AllpatientsComponent"],
            _edit_patient_edit_patient_component__WEBPACK_IMPORTED_MODULE_24__["EditPatientComponent"],
            _patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_25__["PatientProfileComponent"],
            _allpatients_dialog_delete_delete_component__WEBPACK_IMPORTED_MODULE_26__["DeleteComponent"],
            _allpatients_dialog_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_27__["FormDialogComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _patients_routing_module__WEBPACK_IMPORTED_MODULE_21__["PatientsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_19__["MaterialFileInputModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
        ],
        providers: [_allpatients_patient_service__WEBPACK_IMPORTED_MODULE_28__["PatientService"]],
    })
], PatientsModule);



/***/ }),

/***/ "OAST":
/*!***********************************************************************!*\
  !*** ./src/app/admin/patients/allpatients/allpatients.component.sass ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGxwYXRpZW50cy5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "Rcyf":
/*!*********************************************************************!*\
  !*** ./src/app/admin/patients/allpatients/allpatients.component.ts ***!
  \*********************************************************************/
/*! exports provided: AllpatientsComponent, ExampleDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllpatientsComponent", function() { return AllpatientsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDataSource", function() { return ExampleDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_allpatients_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./allpatients.component.html */ "AZ9q");
/* harmony import */ var _allpatients_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allpatients.component.sass */ "OAST");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _patient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patient.service */ "DZmN");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _dialog_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dialog/form-dialog/form-dialog.component */ "i5yr");
/* harmony import */ var _dialog_delete_delete_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dialog/delete/delete.component */ "nx97");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "41Ph");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "9YHx");
















let AllpatientsComponent = class AllpatientsComponent {
    constructor(httpClient, dialog, patientService, snackBar) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.patientService = patientService;
        this.snackBar = snackBar;
        this.displayedColumns = [
            "select",
            "img",
            "name",
            "gender",
            "address",
            "mobile",
            "date",
            "bGroup",
            "treatment",
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
        const dialogRef = this.dialog.open(_dialog_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_11__["FormDialogComponent"], {
            data: {
                patient: this.patient,
                action: "add",
            },
            direction: tempDirection,
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result === 1) {
                // After dialog is closed we're doing frontend updates
                // For add we're just pushing a new row inside DataService
                this.exampleDatabase.dataChange.value.unshift(this.patientService.getDialogData());
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
        const dialogRef = this.dialog.open(_dialog_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_11__["FormDialogComponent"], {
            data: {
                patient: row,
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
                    this.patientService.getDialogData();
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
        const dialogRef = this.dialog.open(_dialog_delete_delete_component__WEBPACK_IMPORTED_MODULE_12__["DeleteComponent"], {
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
        this.exampleDatabase = new _patient_service__WEBPACK_IMPORTED_MODULE_4__["PatientService"](this.httpClient);
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
AllpatientsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _patient_service__WEBPACK_IMPORTED_MODULE_4__["PatientService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"] }
];
AllpatientsComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], { static: true },] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"], { static: true },] }],
    filter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["filter", { static: true },] }]
};
AllpatientsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-allpatients",
        template: _raw_loader_allpatients_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_allpatients_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AllpatientsComponent);

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
        this.exampleDatabase.getAllPatients();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["merge"])(...displayDataChanges).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(() => {
            // Filter data
            this.filteredData = this.exampleDatabase.data
                .slice()
                .filter((patient) => {
                const searchStr = (patient.name +
                    patient.gender +
                    patient.address +
                    patient.date +
                    patient.bGroup +
                    patient.treatment +
                    patient.mobile).toLowerCase();
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
                case "gender":
                    [propertyA, propertyB] = [a.gender, b.gender];
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

/***/ "SzER":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/patients/patient-profile/patient-profile.component.sass ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXRpZW50LXByb2ZpbGUuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "WghS":
/*!*************************************************************!*\
  !*** ./src/app/admin/patients/allpatients/patient.model.ts ***!
  \*************************************************************/
/*! exports provided: Patient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Patient", function() { return Patient; });
class Patient {
    constructor(patient) {
        {
            this.id = patient.id || this.getRandomID();
            this.img = patient.avatar || "assets/images/user/user1.jpg";
            this.name = patient.name || "";
            this.gender = patient.gender || "male";
            this.bGroup = patient.email || "";
            this.date = patient.date || "";
            this.address = patient.address || "";
            this.mobile = patient.mobile || "";
            this.treatment = patient.treatment || "";
        }
    }
    getRandomID() {
        var S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return S4() + S4();
    }
}


/***/ }),

/***/ "bcqm":
/*!*************************************************************************!*\
  !*** ./src/app/admin/patients/edit-patient/edit-patient.component.sass ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXBhdGllbnQuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "chEc":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/patients/add-patient/add-patient.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">Add Patient</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a routerLink=\"/admin/dashboard/main\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-2\">\r\n              <a href=\"#\" onClick=\"return false;\">Patients</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">Add</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2><strong> Patient Information</strong></h2>\r\n\r\n          </div>\r\n          <div class=\"body\">\r\n            <form class=\"m-4\" [formGroup]=\"patientForm\" (ngSubmit)=\"onSubmit()\">\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>First name</mat-label>\r\n                    <input matInput formControlName=\"first\" required>\r\n                    <mat-error *ngIf=\"patientForm.get('first').hasError('required')\">\r\n                      First name is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Last name</mat-label>\r\n                    <input matInput formControlName=\"last\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Gender</mat-label>\r\n                    <mat-select formControlName=\"gender\" required>\r\n                      <mat-option [value]=\"'Male'\">\r\n                        Male\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'Female'\">\r\n                        Female\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <mat-error *ngIf=\"patientForm.get('gender').hasError('required')\">\r\n                      Gender is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Mobile</mat-label>\r\n                    <input matInput formControlName=\"mobile\" type=\"number\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Date Of Birth</mat-label>\r\n                    <input matInput [matDatepicker]=\"picker\" formControlName=\"dob\" required>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                    <mat-error *ngIf=\"patientForm.get('dob').hasError('required')\">\r\n                      Please select date\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Age</mat-label>\r\n                    <input matInput formControlName=\"age\" type=\"number\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Email</mat-label>\r\n                    <input matInput formControlName=\"email\" type=\"email\" required>\r\n                    <mat-error *ngIf=\"patientForm.get('email').hasError('email') && patientForm.get('email').touched\">\r\n                      Please enter a valid email address\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Marital Status</mat-label>\r\n                    <mat-select formControlName=\"maritalStatus\" required>\r\n                      <mat-option [value]=\"'1'\">\r\n                        Single\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'2'\">\r\n                        Married\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <mat-error *ngIf=\"patientForm.get('maritalStatus').hasError('required')\">\r\n                      Select Any\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Address</mat-label>\r\n                    <textarea matInput formControlName=\"address\"></textarea>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Blood Group</mat-label>\r\n                    <input matInput formControlName=\"bGroup\">\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Blood Presure</mat-label>\r\n                    <input matInput formControlName=\"bPresure\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Sugger</mat-label>\r\n                    <input matInput formControlName=\"sugger\">\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Injury/Condition</mat-label>\r\n                    <input matInput formControlName=\"injury\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Upload Image</mat-label>\r\n                    <ngx-mat-file-input formControlName=\"uploadImg\">\r\n                    </ngx-mat-file-input>\r\n                    <mat-icon matSuffix>face</mat-icon>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                  <button class=\"btn-space\" [disabled]=\"!patientForm.valid \" mat-raised-button\r\n                    color=\"primary\">Submit</button>\r\n                  <button type=\"button\" mat-button>Cancel</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "i5yr":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/patients/allpatients/dialog/form-dialog/form-dialog.component.ts ***!
  \****************************************************************************************/
/*! exports provided: FormDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDialogComponent", function() { return FormDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_form_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./form-dialog.component.html */ "4tiZ");
/* harmony import */ var _form_dialog_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-dialog.component.sass */ "9eKU");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _patient_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../patient.service */ "DZmN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _patient_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../patient.model */ "WghS");








let FormDialogComponent = class FormDialogComponent {
    constructor(dialogRef, data, patientService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.patientService = patientService;
        this.fb = fb;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            // Validators.email,
        ]);
        // Set the defaults
        this.action = data.action;
        if (this.action === "edit") {
            this.dialogTitle = data.patient.name;
            this.patient = data.patient;
        }
        else {
            this.dialogTitle = "New Patient";
            this.patient = new _patient_model__WEBPACK_IMPORTED_MODULE_7__["Patient"]({});
        }
        this.patientForm = this.createContactForm();
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
            id: [this.patient.id],
            img: [this.patient.img],
            name: [this.patient.name],
            gender: [this.patient.gender],
            date: [this.patient.date],
            bGroup: [this.patient.bGroup],
            mobile: [this.patient.mobile],
            address: [this.patient.address],
            treatment: [this.patient.treatment],
        });
    }
    submit() {
        // emppty stuff
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmAdd() {
        this.patientService.addPatient(this.patientForm.getRawValue());
    }
};
FormDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _patient_service__WEBPACK_IMPORTED_MODULE_5__["PatientService"] },
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

/***/ "myH/":
/*!***********************************************************************!*\
  !*** ./src/app/admin/patients/edit-patient/edit-patient.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditPatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPatientComponent", function() { return EditPatientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_patient_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-patient.component.html */ "Isrk");
/* harmony import */ var _edit_patient_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-patient.component.sass */ "bcqm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





let EditPatientComponent = class EditPatientComponent {
    constructor(fb) {
        this.fb = fb;
        this.formdata = {
            first: "Pooja",
            last: "Sarma",
            gender: "Female",
            mobile: "123456789",
            age: "23",
            email: "test@example.com",
            maritalStatus: "1",
            bGroup: "O+",
            bPresure: "123",
            sugger: "150",
            injury: "Fever",
            address: "101, Elanxa, New Yourk",
            dob: "1987-02-17T14:22:18Z",
        };
        this.patientForm = this.createContactForm();
    }
    onSubmit() {
        console.log("Form Value", this.patientForm.value);
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
            age: [this.formdata.age],
            maritalStatus: [this.formdata.maritalStatus],
            email: [
                this.formdata.email,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)],
            ],
            bGroup: [this.formdata.bGroup],
            bPresure: [this.formdata.bPresure],
            address: [this.formdata.address],
            dob: [this.formdata.dob, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            sugger: [this.formdata.sugger],
            injury: [this.formdata.injury],
        });
    }
};
EditPatientComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
EditPatientComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-edit-patient",
        template: _raw_loader_edit_patient_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_patient_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditPatientComponent);



/***/ }),

/***/ "nx97":
/*!******************************************************************************!*\
  !*** ./src/app/admin/patients/allpatients/dialog/delete/delete.component.ts ***!
  \******************************************************************************/
/*! exports provided: DeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteComponent", function() { return DeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_delete_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./delete.component.html */ "GCeW");
/* harmony import */ var _delete_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete.component.sass */ "INyv");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _patient_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../patient.service */ "DZmN");






let DeleteComponent = class DeleteComponent {
    constructor(dialogRef, data, patientService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.patientService = patientService;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmDelete() {
        this.patientService.deletePatient(this.data.id);
    }
};
DeleteComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _patient_service__WEBPACK_IMPORTED_MODULE_5__["PatientService"] }
];
DeleteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-delete",
        template: _raw_loader_delete_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_delete_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DeleteComponent);



/***/ }),

/***/ "ohyr":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/patients/patient-profile/patient-profile.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">Patient Profile</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a routerLink=\"/admin/dashboard/main\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-2\">\r\n              <a href=\"#\" onClick=\"return false;\">Patient</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">Profile</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-lg-4 col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"contact-grid profile-image\">\r\n            <img src=\"assets/images/user/usrbig4.jpg\" alt=\"\">\r\n          </div>\r\n        </div>\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>About Patient</h2>\r\n          </div>\r\n          <div class=\"tab-pane body active\" id=\"about\">\r\n            <p class=\"text-default\">Lorem Ipsum is simply dummy text of the printing and\r\n              typesetting industry. Lorem Ipsum has\r\n              been the industry's standard dummy text ever since the 1500s, when an unknown\r\n              printer\r\n              took a galley of type and scrambled it to make a type specimen book. It has\r\n              survived\r\n              not only five centuries, but also the leap into electronic typesetting, remaining\r\n              essentially\r\n              unchanged.</p>\r\n            <small class=\"text-muted\">Email address: </small>\r\n            <p>john@gmail.com</p>\r\n            <hr>\r\n            <small class=\"text-muted\">Phone: </small>\r\n            <p>+91 1234567890</p>\r\n            <hr>\r\n            <small class=\"text-muted\">Address: </small>\r\n            <p>345, Sarju Appt., Mota Varacha, Surat\r\n              Gujarat, India.</p>\r\n            <hr>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-8 col-md-12\">\r\n        <div class=\"tab-content\">\r\n          <div role=\"tabpanel\" class=\"tab-pane active\" aria-expanded=\"true\">\r\n            <div class=\"row clearfix\">\r\n              <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                <div class=\"card project_widget\">\r\n                  <div class=\"header\">\r\n                    <h5>About</h5>\r\n                  </div>\r\n                  <div class=\"body\">\r\n                    <p>It is also used to identify any abnormal tissue in the uterine cavity, such\r\n                      as uterine fibroids, endometrial polyps, scar tissue, or retained pregnancy\r\n                      tissue, the presence of which may be suggested by history or previous tests\r\n                      such as a hysterosalpingogram (x-ray of the uterus and tubes). This\r\n                      procedure is done in the office here at IVF New England, and is done by one\r\n                      of the physicians.</p>\r\n                    <p>Approximately an hour before the exam we suggest that you take Ibuprofen 600\r\n                      mg (Motrin/Advil) or a similar medication to minimize some mild to moderate\r\n                      cramping that you may experience during the procedure.</p>\r\n                    <br>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                <div class=\"card project_widget\">\r\n                  <div class=\"header\">\r\n                    <h5>General Report</h5>\r\n                  </div>\r\n                  <div class=\"body\">\r\n                    <ul class=\"list-unstyled\">\r\n                      <li>\r\n                        <h5>Heart Beat <span class=\"pull-right\">85</span></h5>\r\n                        <div class=\"progress skill-progress m-b-20\">\r\n                          <div class=\"progress-bar l-bg-green width-per-45\" role=\"progressbar\" aria-valuenow=\"45\"\r\n                            aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                        </div>\r\n                      </li>\r\n                      <li>\r\n                        <h5>Blood Pressure<span class=\"pull-right\">93</span></h5>\r\n                        <div class=\"progress skill-progress m-b-20\">\r\n                          <div class=\"progress-bar l-bg-orange width-per-38\" role=\"progressbar\" aria-valuenow=\"38\"\r\n                            aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                        </div>\r\n                      </li>\r\n                      <li>\r\n                        <h5>Sugar<span class=\"pull-right\">55</span></h5>\r\n                        <div class=\"progress skill-progress m-b-20\">\r\n                          <div class=\"progress-bar l-bg-cyan width-per-39\" role=\"progressbar\" aria-valuenow=\"39\"\r\n                            aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                        </div>\r\n                      </li>\r\n                      <li>\r\n                        <h5>Haemoglobin<span class=\"pull-right\">78%</span></h5>\r\n                        <div class=\"progress skill-progress m-b-20\">\r\n                          <div class=\"progress-bar l-bg-purple width-per-70\" role=\"progressbar\" aria-valuenow=\"70\"\r\n                            aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                        </div>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                <div class=\"card project_widget\">\r\n                  <div class=\"header\">\r\n                    <h5>Past Visit History</h5>\r\n                  </div>\r\n                  <div class=\"body\">\r\n                    <div class=\"table-responsive\">\r\n                      <table class=\"table table-striped custom-table table-hover\">\r\n                        <thead>\r\n                          <tr>\r\n                            <th>Date</th>\r\n                            <th>Doctor</th>\r\n                            <th>Treatment</th>\r\n                            <th>Charges($)</th>\r\n                            <th>Action</th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr>\r\n                            <td>11/05/2017</td>\r\n                            <td>Dr.Rajesh</td>\r\n                            <td>Check up</td>\r\n                            <td>14$</td>\r\n                            <td>\r\n                              <button class=\"btn tblActnBtn\">\r\n                                <i class=\"material-icons\">mode_edit</i>\r\n                              </button>\r\n                              <button class=\"btn tblActnBtn\">\r\n                                <i class=\"material-icons\">delete</i>\r\n                              </button>\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>13/05/2017</td>\r\n                            <td>Dr.Rajesh</td>\r\n                            <td>X-Ray</td>\r\n                            <td>16$</td>\r\n                            <td>\r\n                              <button class=\"btn tblActnBtn\">\r\n                                <i class=\"material-icons\">mode_edit</i>\r\n                              </button>\r\n                              <button class=\"btn tblActnBtn\">\r\n                                <i class=\"material-icons\">delete</i>\r\n                              </button>\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>13/05/2017</td>\r\n                            <td>Dr.Rajesh</td>\r\n                            <td>Blood Test</td>\r\n                            <td>24$</td>\r\n                            <td>\r\n                              <button class=\"btn tblActnBtn\">\r\n                                <i class=\"material-icons\">mode_edit</i>\r\n                              </button>\r\n                              <button class=\"btn tblActnBtn\">\r\n                                <i class=\"material-icons\">delete</i>\r\n                              </button>\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>14/05/2017</td>\r\n                            <td>Dr.Rajesh</td>\r\n                            <td>Admit</td>\r\n                            <td>14$</td>\r\n                            <td>\r\n                              <button class=\"btn tblActnBtn\">\r\n                                <i class=\"material-icons\">mode_edit</i>\r\n                              </button>\r\n                              <button class=\"btn tblActnBtn\">\r\n                                <i class=\"material-icons\">delete</i>\r\n                              </button>\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>15/05/2017</td>\r\n                            <td>Dr.Rajesh</td>\r\n                            <td>Operation</td>\r\n                            <td>14$</td>\r\n                            <td>\r\n                              <button class=\"btn tblActnBtn\">\r\n                                <i class=\"material-icons\">mode_edit</i>\r\n                              </button>\r\n                              <button class=\"btn tblActnBtn\">\r\n                                <i class=\"material-icons\">delete</i>\r\n                              </button>\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>18/05/2017</td>\r\n                            <td>Dr.Rajesh</td>\r\n                            <td>Discharge</td>\r\n                            <td>14$</td>\r\n                            <td>\r\n                              <button class=\"btn tblActnBtn\">\r\n                                <i class=\"material-icons\">mode_edit</i>\r\n                              </button>\r\n                              <button class=\"btn tblActnBtn\">\r\n                                <i class=\"material-icons\">delete</i>\r\n                              </button>\r\n                            </td>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "qhbg":
/*!***********************************************************!*\
  !*** ./src/app/admin/patients/patients-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PatientsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsRoutingModule", function() { return PatientsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patient-profile/patient-profile.component */ "9ikp");
/* harmony import */ var _edit_patient_edit_patient_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-patient/edit-patient.component */ "myH/");
/* harmony import */ var _add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-patient/add-patient.component */ "4H17");
/* harmony import */ var _allpatients_allpatients_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./allpatients/allpatients.component */ "Rcyf");
/* harmony import */ var _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../authentication/page404/page404.component */ "21P8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








const routes = [
    {
        path: "all-patients",
        component: _allpatients_allpatients_component__WEBPACK_IMPORTED_MODULE_4__["AllpatientsComponent"],
    },
    {
        path: "add-patient",
        component: _add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_3__["AddPatientComponent"],
    },
    {
        path: "edit-patient",
        component: _edit_patient_edit_patient_component__WEBPACK_IMPORTED_MODULE_2__["EditPatientComponent"],
    },
    {
        path: "patient-profile",
        component: _patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_1__["PatientProfileComponent"],
    },
    { path: "**", component: _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_5__["Page404Component"] },
];
let PatientsRoutingModule = class PatientsRoutingModule {
};
PatientsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]],
    })
], PatientsRoutingModule);



/***/ })

}]);
//# sourceMappingURL=patients-patients-module-es2015.js.map