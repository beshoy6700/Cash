(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["appointments-appointments-module"],{

/***/ "+qHA":
/*!***********************************************************************************!*\
  !*** ./src/app/patient/appointments/past-appointment/past-appointment.service.ts ***!
  \***********************************************************************************/
/*! exports provided: PastAppointmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PastAppointmentService", function() { return PastAppointmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "41Ph");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




let PastAppointmentService = class PastAppointmentService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = "assets/data/past-appointment.json";
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
    getAllPastAppointment() {
        this.httpClient.get(this.API_URL).subscribe((data) => {
            this.isTblLoading = false;
            this.dataChange.next(data);
        }, (error) => {
            this.isTblLoading = false;
            console.log(error.name + " " + error.message);
        });
    }
    addPastAppointment(appointment) {
        this.dialogData = appointment;
        /*  this.httpClient.post(this.API_URL, appointment).subscribe(data => {
          this.dialogData = appointment;
          },
          (err: HttpErrorResponse) => {
         // error code here
        });*/
    }
    updatePastAppointment(appointment) {
        this.dialogData = appointment;
        /* this.httpClient.put(this.API_URL + appointment.id, appointment).subscribe(data => {
          this.dialogData = appointment;
        },
        (err: HttpErrorResponse) => {
          // error code here
        }
      );*/
    }
    deletePastAppointment(id) {
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
PastAppointmentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
PastAppointmentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PastAppointmentService);



/***/ }),

/***/ "6/kI":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patient/appointments/today-appointment/dialogs/delete/delete.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>delete works!</p>\r\n");

/***/ }),

/***/ "6280":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patient/appointments/upcoming-appointment/dialogs/form-dialog/form-dialog.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"addContainer\">\r\n  <div class=\"modalHeader\">\r\n    <div class=\"editRowModal\">\r\n      <div class=\"modalHeader clearfix\">\r\n        <img [src]='appointment.img' alt=\"avatar\">\r\n        <div class=\"modal-about\">\r\n          <div class=\"font-weight-bold p-t-5 msl-3 font-17\">\r\n            {{dialogTitle}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <button mat-icon-button (click)=\"dialogRef.close()\" aria-label=\"Close dialog\">\r\n      <mat-icon>close</mat-icon>\r\n    </button>\r\n  </div>\r\n  <div mat-dialog-content>\r\n    <form class=\"register-form m-4\" [formGroup]=\"appointmentForm\" (ngSubmit)=\"submit\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n          <mat-form-field class=\"example-full-width \" appearance=\"outline\">\r\n            <mat-label>Doctor Name</mat-label>\r\n            <mat-select formControlName=\"doctor\" required>\r\n              <mat-option [value]=\"'Dr.Rajesh'\">\r\n                Dr.Rajesh\r\n              </mat-option>\r\n              <mat-option [value]=\"'Dr.Sarah Smith'\">\r\n                Dr.Sarah Smith\r\n              </mat-option>\r\n              <mat-option [value]=\"'Dr.Jay Soni'\">\r\n                Dr.Jay Soni\r\n              </mat-option>\r\n              <mat-option [value]=\"'Dr.Pooja Patel'\">\r\n                Dr.Pooja Patel\r\n              </mat-option>\r\n              <mat-option [value]=\"' Dr.Jamie Blair'\">\r\n                Dr.Jamie Blair\r\n              </mat-option>\r\n              <mat-option [value]=\"'Other'\">\r\n                Other\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-error *ngIf=\"appointmentForm.get('doctor').hasError('required')\">\r\n              Doctor Name is required\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n          <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n            <mat-label>Email</mat-label>\r\n            <input matInput formControlName=\"email\" required>\r\n            <mat-icon matSuffix>email</mat-icon>\r\n            <mat-error\r\n              *ngIf=\"appointmentForm.get('email').hasError('required') || appointmentForm.get('email').touched\">\r\n              Please enter a valid email address\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n          <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n            <mat-label>Choose a date</mat-label>\r\n            <input matInput [matDatepicker]=\"picker\" formControlName=\"date\" required>\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker></mat-datepicker>\r\n            <mat-error *ngIf=\"appointmentForm.get('date').hasError('required')\">\r\n              Please select date\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\" col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n          <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n            <mat-label>Time</mat-label>\r\n            <input matInput formControlName=\"time\" required>\r\n            <mat-icon matSuffix>access_time</mat-icon>\r\n            <mat-error *ngIf=\"appointmentForm.get('time').hasError('required')\">\r\n              Please select time\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n          <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n            <mat-label>Mobile</mat-label>\r\n            <input matInput formControlName=\"mobile\" type=\"number\" required>\r\n            <mat-icon matSuffix>phone</mat-icon>\r\n            <mat-error *ngIf=\"appointmentForm.get('mobile').hasError('required')\">\r\n              Mobile is required\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n          <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n            <mat-label>Injury/Condition</mat-label>\r\n            <textarea matInput formControlName=\"injury\"></textarea>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n          <div class=\"example-button-row\">\r\n            <button mat-raised-button color=\"primary\" [type]=\"submit\" [disabled]=\"!appointmentForm.valid\"\r\n              [mat-dialog-close]=\"1\" (click)=\"confirmAdd()\">Save</button>\r\n            <button mat-raised-button color=\"warn\" (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "6dwX":
/*!***************************************************************************************!*\
  !*** ./src/app/patient/appointments/today-appointment/today-appointment.component.ts ***!
  \***************************************************************************************/
/*! exports provided: TodayAppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodayAppointmentComponent", function() { return TodayAppointmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_today_appointment_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./today-appointment.component.html */ "9V5a");
/* harmony import */ var _today_appointment_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./today-appointment.component.sass */ "S8Wn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let TodayAppointmentComponent = class TodayAppointmentComponent {
    constructor() { }
    ngOnInit() { }
};
TodayAppointmentComponent.ctorParameters = () => [];
TodayAppointmentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-today-appointment",
        template: _raw_loader_today_appointment_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_today_appointment_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TodayAppointmentComponent);



/***/ }),

/***/ "9V5a":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patient/appointments/today-appointment/today-appointment.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">Appointment</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a routerLink=\"/patient/dashboard\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">Today</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Today's Appointments</h2>\r\n\r\n          </div>\r\n          <div class=\"body\">\r\n            <ul class=\"list-unstyled user-progress list-unstyled-border list-unstyled-noborder\">\r\n              <li class=\"app-list\">\r\n                <img alt=\"image\" class=\"msr-3 rounded-circle\" width=\"40\" src=\"assets/images/user/usrbig1.jpg\">\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title font-16\">Dr.Cara Stevens</div>\r\n                  <div class=\"text-job text-muted mb-0\">Radiologist</div>\r\n                </div>\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title font-16\">12 June '20</div>\r\n                  <div class=\"text-job text-muted mb-0\">09:00-10:00</div>\r\n                </div>\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title text-muted mb-0\">Treatement</div>\r\n                  <div class=\"text-job font-16\">CT scans</div>\r\n                </div>\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title text-muted mb-0\">Contact Number</div>\r\n                  <div class=\"text-job font-16\">+123 676545655</div>\r\n                </div>\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title text-muted mb-0\">Status</div>\r\n                  <div class=\"col-green\">Confirm</div>\r\n                </div>\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title text-muted mb-0\">Location</div>\r\n                  <div class=\"text-job font-16\">Grand Plains Clinic</div>\r\n                </div>\r\n                <div class=\"media-cta\">\r\n                  <td>\r\n                    <button mat-icon-button class=\"btn-tbl-confirm\">\r\n                      <mat-icon>done</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button class=\"btn-tbl-reject\">\r\n                      <mat-icon>close</mat-icon>\r\n                    </button>\r\n                  </td>\r\n                </div>\r\n              </li>\r\n              <li class=\"app-list\">\r\n                <img alt=\"image\" class=\"msr-3 rounded-circle\" width=\"40\" src=\"assets/images/user/usrbig2.jpg\">\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title font-16\">Dr.John Doe</div>\r\n                  <div class=\"text-job text-muted mb-0\">Cardiologist</div>\r\n                </div>\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title font-16\">12 June '20</div>\r\n                  <div class=\"text-job text-muted mb-0\">11:00-11:30</div>\r\n                </div>\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title text-muted mb-0\">Treatement</div>\r\n                  <div class=\"text-job font-16\">heart checkup</div>\r\n                </div>\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title text-muted mb-0\">Contact Number</div>\r\n                  <div class=\"text-job font-16\">+123 434656764</div>\r\n                </div>\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title text-muted mb-0\">Status</div>\r\n                  <div class=\"col-red\">Cancelled</div>\r\n                </div>\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title text-muted mb-0\">Location</div>\r\n                  <div class=\"text-job font-16\">Genesis Hospital</div>\r\n                </div>\r\n                <div class=\"media-cta\">\r\n                  <td>\r\n                    <button mat-icon-button class=\"btn-tbl-confirm\">\r\n                      <mat-icon>done</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button class=\"btn-tbl-reject\">\r\n                      <mat-icon>close</mat-icon>\r\n                    </button>\r\n                  </td>\r\n                </div>\r\n              </li>\r\n              <li class=\"app-list\">\r\n                <img alt=\"image\" class=\"msr-3 rounded-circle\" width=\"40\" src=\"assets/images/user/usrbig3.jpg\">\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title font-16\">Dr.Airi Satou</div>\r\n                  <div class=\"text-job text-muted mb-0\">Otolaryngologist</div>\r\n                </div>\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title font-16\">12 June '20</div>\r\n                  <div class=\"text-job text-muted mb-0\">09:15-10:15 </div>\r\n                </div>\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title text-muted mb-0\">Treatement</div>\r\n                  <div class=\"text-job font-16\">Diseases Of The Ear</div>\r\n                </div>\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title text-muted mb-0\">Contact Number</div>\r\n                  <div class=\"text-job font-16\">+123 45345673</div>\r\n                </div>\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title text-muted mb-0\">Status</div>\r\n                  <div class=\"col-green\">Confirm</div>\r\n                </div>\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title text-muted mb-0\">Location</div>\r\n                  <div class=\"text-job font-16\">Genesis Laboratory</div>\r\n                </div>\r\n                <div class=\"media-cta\">\r\n                  <td>\r\n                    <button mat-icon-button class=\"btn-tbl-confirm\">\r\n                      <mat-icon>done</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button class=\"btn-tbl-reject\">\r\n                      <mat-icon>close</mat-icon>\r\n                    </button>\r\n                  </td>\r\n                </div>\r\n              </li>\r\n              <li class=\"app-list\">\r\n                <img alt=\"image\" class=\"msr-3 rounded-circle\" width=\"40\" src=\"assets/images/user/usrbig4.jpg\">\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title font-16\">Dr.Angelica Ramos</div>\r\n                  <div class=\"text-job text-muted mb-0\">Dentist</div>\r\n                </div>\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title font-16\">12 June '20</div>\r\n                  <div class=\"text-job text-muted mb-0\">11:00-12:00</div>\r\n                </div>\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title text-muted mb-0\">Treatement</div>\r\n                  <div class=\"text-job font-16\">Root Canal</div>\r\n                </div>\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title text-muted mb-0\">Contact Number</div>\r\n                  <div class=\"text-job font-16\">+123 87654533</div>\r\n                </div>\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title text-muted mb-0\">Status</div>\r\n                  <div class=\"col-green\">Confirm</div>\r\n                </div>\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title text-muted mb-0\">Location</div>\r\n                  <div class=\"text-job font-16\">Clemency Hospital</div>\r\n                </div>\r\n                <div class=\"media-cta\">\r\n                  <td>\r\n                    <button mat-icon-button class=\"btn-tbl-confirm\">\r\n                      <mat-icon>done</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button class=\"btn-tbl-reject\">\r\n                      <mat-icon>close</mat-icon>\r\n                    </button>\r\n                  </td>\r\n                </div>\r\n              </li>\r\n              <li class=\"app-list\">\r\n                <img alt=\"image\" class=\"msr-3 rounded-circle\" width=\"40\" src=\"assets/images/user/usrbig6.jpg\">\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title font-16\">Dr.Jens Brincker</div>\r\n                  <div class=\"text-job text-muted mb-0\">Endocrinologist</div>\r\n                </div>\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title font-16\">12 June '20</div>\r\n                  <div class=\"text-job text-muted mb-0\">04:00-05:00</div>\r\n                </div>\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title text-muted mb-0\">Treatement</div>\r\n                  <div class=\"text-job font-16\">Diabetes</div>\r\n                </div>\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title text-muted mb-0\">Contact Number</div>\r\n                  <div class=\"text-job font-16\">+123 45678345</div>\r\n                </div>\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title text-muted mb-0\">Status</div>\r\n                  <div class=\"col-red\">Cancelled</div>\r\n                </div>\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title text-muted mb-0\">Location</div>\r\n                  <div class=\"text-job font-16\">Hopevale Clinic</div>\r\n                </div>\r\n                <div class=\"media-cta\">\r\n                  <td>\r\n                    <button mat-icon-button class=\"btn-tbl-confirm\">\r\n                      <mat-icon>done</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button class=\"btn-tbl-reject\">\r\n                      <mat-icon>close</mat-icon>\r\n                    </button>\r\n                  </td>\r\n                </div>\r\n              </li>\r\n              <li class=\"app-list\">\r\n                <img alt=\"image\" class=\"msr-3 rounded-circle\" width=\"40\" src=\"assets/images/user/usrbig7.jpg\">\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title font-16\">Dr.Jamie Blair</div>\r\n                  <div class=\"text-job text-muted mb-0\">Radiologist</div>\r\n                </div>\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title font-16\">12 June '20</div>\r\n                  <div class=\"text-job text-muted mb-0\">05:00-05:30</div>\r\n                </div>\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title text-muted mb-0\">Treatement</div>\r\n                  <div class=\"text-job font-16\">Diabetes</div>\r\n                </div>\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title text-muted mb-0\">Contact Number</div>\r\n                  <div class=\"text-job font-16\">+123 45678345</div>\r\n                </div>\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title text-muted mb-0\">Status</div>\r\n                  <div class=\"col-green\">Confirm</div>\r\n                </div>\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title text-muted mb-0\">Location</div>\r\n                  <div class=\"text-job font-16\">Pinevale Medical Center</div>\r\n                </div>\r\n                <div class=\"media-cta\">\r\n                  <td>\r\n                    <button mat-icon-button class=\"btn-tbl-confirm\">\r\n                      <mat-icon>done</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button class=\"btn-tbl-reject\">\r\n                      <mat-icon>close</mat-icon>\r\n                    </button>\r\n                  </td>\r\n                </div>\r\n              </li>\r\n              <li class=\"app-list\">\r\n                <img alt=\"image\" class=\"msr-3 rounded-circle\" width=\"40\" src=\"assets/images/user/usrbig8.jpg\">\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title font-16\">Dr.Nikki Barton</div>\r\n                  <div class=\"text-job text-muted mb-0\">Endocrinologist</div>\r\n                </div>\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title font-16\">12 June '20</div>\r\n                  <div class=\"text-job text-muted mb-0\">06:00-07:00</div>\r\n                </div>\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title text-muted mb-0\">Treatement</div>\r\n                  <div class=\"text-job font-16\">X-Ray</div>\r\n                </div>\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title text-muted mb-0\">Contact Number</div>\r\n                  <div class=\"text-job font-16\">+123 45678345</div>\r\n                </div>\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title text-muted mb-0\">Status</div>\r\n                  <div class=\"col-orange\">Pending</div>\r\n                </div>\r\n                <div class=\"set-flex\">\r\n                  <div class=\"media-title text-muted mb-0\">Location</div>\r\n                  <div class=\"text-job font-16\">Hopevale Clinic</div>\r\n                </div>\r\n                <div class=\"media-cta\">\r\n                  <td>\r\n                    <button mat-icon-button class=\"btn-tbl-confirm\">\r\n                      <mat-icon>done</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button class=\"btn-tbl-reject\">\r\n                      <mat-icon>close</mat-icon>\r\n                    </button>\r\n                  </td>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "9beF":
/*!*********************************************************************!*\
  !*** ./src/app/patient/appointments/appointments-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: AppointmentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsRoutingModule", function() { return AppointmentsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../authentication/page404/page404.component */ "21P8");
/* harmony import */ var _upcoming_appointment_upcoming_appointment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./upcoming-appointment/upcoming-appointment.component */ "L+1L");
/* harmony import */ var _past_appointment_past_appointment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./past-appointment/past-appointment.component */ "OZmR");
/* harmony import */ var _today_appointment_today_appointment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./today-appointment/today-appointment.component */ "6dwX");







const routes = [
    {
        path: "today",
        component: _today_appointment_today_appointment_component__WEBPACK_IMPORTED_MODULE_6__["TodayAppointmentComponent"],
    },
    {
        path: "upcoming",
        component: _upcoming_appointment_upcoming_appointment_component__WEBPACK_IMPORTED_MODULE_4__["UpcomingAppointmentComponent"],
    },
    {
        path: "past",
        component: _past_appointment_past_appointment_component__WEBPACK_IMPORTED_MODULE_5__["PastAppointmentComponent"],
    },
    { path: "**", component: _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_3__["Page404Component"] },
];
let AppointmentsRoutingModule = class AppointmentsRoutingModule {
};
AppointmentsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppointmentsRoutingModule);



/***/ }),

/***/ "Jto9":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patient/appointments/past-appointment/dialogs/delete/delete.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <h3 mat-dialog-title>Are you sure?</h3>\r\n  <div mat-dialog-content>\r\n    <ul class=\"clearfix\">\r\n      <li>\r\n        <p><span class=\"font-weight-bold\"> Name: </span>{{data.doctor}}</p>\r\n      </li>\r\n      <li>\r\n        <p><span class=\"font-weight-bold\"> Email: </span>{{ data.email }}</p>\r\n      </li>\r\n      <li>\r\n        <p>\r\n          <span class=\"font-weight-bold\">Mobile: </span>{{data.mobile}}\r\n        </p>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div mat-dialog-actions class=\"mb-1\">\r\n    <button mat-flat-button color=\"warn\" [mat-dialog-close]=\"1\" (click)=\"confirmDelete()\">\r\n      Delete\r\n    </button>\r\n    <button mat-flat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "Jw3p":
/*!*******************************************************************************************!*\
  !*** ./src/app/patient/appointments/today-appointment/dialogs/delete/delete.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteComponent", function() { return DeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_delete_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./delete.component.html */ "6/kI");
/* harmony import */ var _delete_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete.component.sass */ "xQaI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let DeleteComponent = class DeleteComponent {
    constructor() { }
    ngOnInit() { }
};
DeleteComponent.ctorParameters = () => [];
DeleteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-delete",
        template: _raw_loader_delete_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_delete_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DeleteComponent);



/***/ }),

/***/ "KMyl":
/*!*******************************************************************************************!*\
  !*** ./src/app/patient/appointments/upcoming-appointment/upcoming-appointment.service.ts ***!
  \*******************************************************************************************/
/*! exports provided: UpcomingAppointmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcomingAppointmentService", function() { return UpcomingAppointmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "41Ph");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




let UpcomingAppointmentService = class UpcomingAppointmentService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = "assets/data/upcoming-appointment.json";
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
    getAllUpcomingAppointment() {
        this.httpClient.get(this.API_URL).subscribe((data) => {
            this.isTblLoading = false;
            this.dataChange.next(data);
        }, (error) => {
            this.isTblLoading = false;
            console.log(error.name + " " + error.message);
        });
    }
    addUpcomingAppointment(appointment) {
        this.dialogData = appointment;
        /*  this.httpClient.post(this.API_URL, appointment).subscribe(data => {
          this.dialogData = appointment;
          },
          (err: HttpErrorResponse) => {
         // error code here
        });*/
    }
    updateUpcomingAppointment(appointment) {
        this.dialogData = appointment;
        /* this.httpClient.put(this.API_URL + appointment.id, appointment).subscribe(data => {
          this.dialogData = appointment;
        },
        (err: HttpErrorResponse) => {
          // error code here
        }
      );*/
    }
    deleteUpcomingAppointment(id) {
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
UpcomingAppointmentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
UpcomingAppointmentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UpcomingAppointmentService);



/***/ }),

/***/ "KY0j":
/*!*****************************************************************************************!*\
  !*** ./src/app/patient/appointments/upcoming-appointment/upcoming-appointment.model.ts ***!
  \*****************************************************************************************/
/*! exports provided: UpcomingAppointment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcomingAppointment", function() { return UpcomingAppointment; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");

class UpcomingAppointment {
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

/***/ "L+1L":
/*!*********************************************************************************************!*\
  !*** ./src/app/patient/appointments/upcoming-appointment/upcoming-appointment.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: UpcomingAppointmentComponent, ExampleDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcomingAppointmentComponent", function() { return UpcomingAppointmentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDataSource", function() { return ExampleDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_upcoming_appointment_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./upcoming-appointment.component.html */ "SUX8");
/* harmony import */ var _upcoming_appointment_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upcoming-appointment.component.sass */ "q2cm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _upcoming_appointment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./upcoming-appointment.service */ "KMyl");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "41Ph");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "9YHx");
/* harmony import */ var _dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dialogs/form-dialog/form-dialog.component */ "yxCr");
/* harmony import */ var _dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dialogs/delete/delete.component */ "mMJY");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "FKr1");

















let UpcomingAppointmentComponent = class UpcomingAppointmentComponent {
    constructor(httpClient, dialog, appointmentService, snackBar) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.appointmentService = appointmentService;
        this.snackBar = snackBar;
        this.displayedColumns = [
            "select",
            "img",
            "doctor",
            "date",
            "time",
            "email",
            "mobile",
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
        this.exampleDatabase = new _upcoming_appointment_service__WEBPACK_IMPORTED_MODULE_4__["UpcomingAppointmentService"](this.httpClient);
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
UpcomingAppointmentComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _upcoming_appointment_service__WEBPACK_IMPORTED_MODULE_4__["UpcomingAppointmentService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"] }
];
UpcomingAppointmentComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], { static: true },] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"], { static: true },] }],
    filter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["filter", { static: true },] }]
};
UpcomingAppointmentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-upcoming-appointment",
        template: _raw_loader_upcoming_appointment_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [{ provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MAT_DATE_LOCALE"], useValue: "en-GB" }],
        styles: [_upcoming_appointment_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UpcomingAppointmentComponent);

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
        this.exampleDatabase.getAllUpcomingAppointment();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["merge"])(...displayDataChanges).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(() => {
            // Filter data
            this.filteredData = this.exampleDatabase.data
                .slice()
                .filter((appointment) => {
                const searchStr = (appointment.email +
                    appointment.date +
                    appointment.time +
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
                case "doctor":
                    [propertyA, propertyB] = [a.name, b.name];
                    break;
                case "email":
                    [propertyA, propertyB] = [a.email, b.email];
                    break;
                case "date":
                    [propertyA, propertyB] = [a.date, b.date];
                    break;
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

/***/ "OZmR":
/*!*************************************************************************************!*\
  !*** ./src/app/patient/appointments/past-appointment/past-appointment.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PastAppointmentComponent, ExampleDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PastAppointmentComponent", function() { return PastAppointmentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDataSource", function() { return ExampleDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_past_appointment_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./past-appointment.component.html */ "yiMd");
/* harmony import */ var _past_appointment_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./past-appointment.component.sass */ "eWic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _past_appointment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./past-appointment.service */ "+qHA");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "41Ph");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "9YHx");
/* harmony import */ var _dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dialogs/delete/delete.component */ "oatb");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
















let PastAppointmentComponent = class PastAppointmentComponent {
    constructor(httpClient, dialog, appointmentService, snackBar) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.appointmentService = appointmentService;
        this.snackBar = snackBar;
        this.displayedColumns = [
            "select",
            "img",
            "doctor",
            "date",
            "time",
            "email",
            "mobile",
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
        const dialogRef = this.dialog.open(_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_13__["PastDeleteDialogComponent"], {
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
        this.exampleDatabase = new _past_appointment_service__WEBPACK_IMPORTED_MODULE_4__["PastAppointmentService"](this.httpClient);
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
PastAppointmentComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _past_appointment_service__WEBPACK_IMPORTED_MODULE_4__["PastAppointmentService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"] }
];
PastAppointmentComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], { static: true },] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"], { static: true },] }],
    filter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["filter", { static: true },] }]
};
PastAppointmentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-past-appointment",
        template: _raw_loader_past_appointment_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [{ provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MAT_DATE_LOCALE"], useValue: "en-GB" }],
        styles: [_past_appointment_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PastAppointmentComponent);

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
        this.exampleDatabase.getAllPastAppointment();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["merge"])(...displayDataChanges).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(() => {
            // Filter data
            this.filteredData = this.exampleDatabase.data
                .slice()
                .filter((appointment) => {
                const searchStr = (appointment.email +
                    appointment.date +
                    appointment.time +
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
                case "doctor":
                    [propertyA, propertyB] = [a.name, b.name];
                    break;
                case "email":
                    [propertyA, propertyB] = [a.email, b.email];
                    break;
                case "date":
                    [propertyA, propertyB] = [a.date, b.date];
                    break;
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

/***/ "S8Wn":
/*!*****************************************************************************************!*\
  !*** ./src/app/patient/appointments/today-appointment/today-appointment.component.sass ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b2RheS1hcHBvaW50bWVudC5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "SUX8":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patient/appointments/upcoming-appointment/upcoming-appointment.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">Upcoming</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a routerLink=\"/patient/dashboard\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">Upcoming Appointments</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n        <div class=\"card\">\r\n          <div class=\"body\">\r\n            <div class=\"responsive_table\">\r\n              <div class=\"materialTableHeader\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-8\">\r\n                    <ul class=\"header-buttons-left ms-0\">\r\n                      <li class=\"dropdown\">\r\n                        <h2>\r\n                          <strong>Upcoming Appointments</strong></h2>\r\n                      </li>\r\n                      <li class=\"dropdown m-l-20\">\r\n                        <label for=\"search-input\"><i class=\"material-icons search-icon\">search</i></label>\r\n                        <input placeholder=\"Search\" type=\"text\" #filter class=\"browser-default search-field\"\r\n                          aria-label=\"Search box\">\r\n                      </li>\r\n                      <li>\r\n                        <div class=\"icon-button-demo m-l-10\" [hidden]=!selection.hasValue()>\r\n                          <button mat-mini-fab color=\"warn\" (click)=\"removeSelectedRows()\">\r\n                            <mat-icon class=\"col-white\">delete</mat-icon>\r\n                          </button>\r\n                        </div>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                  <div class=\"col-4\">\r\n                    <ul class=\"header-buttons\">\r\n                      <li>\r\n                        <div class=\"icon-button-demo\">\r\n                          <button mat-mini-fab color=\"primary\" (click)=\"addNew()\">\r\n                            <mat-icon class=\"col-white\">add</mat-icon>\r\n                          </button>\r\n                        </div>\r\n                      </li>\r\n                      <li>\r\n                        <div class=\"icon-button-demo\">\r\n                          <button mat-mini-fab color=\"primary\" (click)=\"refresh()\">\r\n                            <mat-icon class=\"col-white\">refresh</mat-icon>\r\n                          </button>\r\n                        </div>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <mat-table #table [dataSource]=\"dataSource\" matSort class=\"mat-cell\">\r\n                <!-- Checkbox Column -->\r\n                <ng-container matColumnDef=\"select\">\r\n                  <mat-header-cell *matHeaderCellDef [ngClass]=\"'tbl-col-width-per-6'\">\r\n                    <mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n                      [checked]=\"selection.hasValue() && isAllSelected()\"\r\n                      [indeterminate]=\"selection.hasValue() && !isAllSelected()\" [ngClass]=\"'tbl-checkbox'\">\r\n                    </mat-checkbox>\r\n                  </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\" [ngClass]=\"'tbl-col-width-per-6'\">\r\n                    <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\"\r\n                      [checked]=\"selection.isSelected(row)\" [ngClass]=\"'tbl-checkbox'\">\r\n                    </mat-checkbox>\r\n                  </mat-cell>\r\n                </ng-container>\r\n                <!-- ID Column -->\r\n                <ng-container matColumnDef=\"id\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Id</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\">{{row.id}}</mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"img\">\r\n                  <mat-header-cell mat-header-cell *matHeaderCellDef [ngClass]=\"'tbl-col-width-per-5'\"> Image\r\n                  </mat-header-cell>\r\n                  <mat-cell mat-cell *matCellDef=\"let row\" class=\"table-img tbl-col-width-per-5\"> <img\r\n                      [src]=\"row.img\" />\r\n                  </mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"doctor\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Doctor Name</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.doctor}}</mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"email\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Email</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.email}}</mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"date\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Appo. Date</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.date | date: 'MM/dd/yyyy' }}\r\n                  </mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"time\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Appo. Time</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.time}}</mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"mobile\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Mobile</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.mobile}}</mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"injury\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Injury/Condition\r\n                  </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.injury}}</mat-cell>\r\n                </ng-container>\r\n                <!-- actions -->\r\n                <ng-container matColumnDef=\"actions\">\r\n                  <mat-header-cell *matHeaderCellDef class=\"pr-0\">Actions</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row; let i=index;\" class=\"pr-0\">\r\n                    <button mat-icon-button color=\"accent\" class=\"btn-tbl-edit\" (click)=\"$event.stopPropagation()\"\r\n                      (click)=\"editCall(row)\">\r\n                      <mat-icon aria-label=\"Edit\" class=\"col-white\">edit</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button color=\"accent\" class=\"btn-tbl-delete\" (click)=\"$event.stopPropagation()\"\r\n                      (click)=\"deleteItem(i, row)\">\r\n                      <mat-icon aria-label=\"Delete\" class=\"col-white\">delete</mat-icon>\r\n                    </button>\r\n                  </mat-cell>\r\n                </ng-container>\r\n                <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                <!-- <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row> -->\r\n                <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"editCall(row)\"\r\n                  [style.cursor]=\"'pointer'\" matRipple>\r\n                </mat-row>\r\n              </mat-table>\r\n              <!-- Loading spinner -->\r\n              <div *ngIf=\"exampleDatabase.isTblLoading\" class=\"tbl-spinner\">\r\n                <mat-progress-spinner color=\"primary\" [diameter]=\"40\" mode=\"indeterminate\">\r\n                </mat-progress-spinner>\r\n              </div>\r\n              <div *ngIf=\"!exampleDatabase.isTblLoading\" class=\"no-results\"\r\n                [style.display]=\"dataSource.renderedData.length == 0 ? '' : 'none'\">\r\n                No results\r\n              </div>\r\n              <mat-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"10\"\r\n                [pageSizeOptions]=\"[5, 10, 25, 100]\">\r\n              </mat-paginator>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "Yegp":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patient/appointments/upcoming-appointment/dialogs/delete/delete.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <h3 mat-dialog-title>Are you sure?</h3>\r\n  <div mat-dialog-content>\r\n    <ul class=\"clearfix\">\r\n      <li>\r\n        <p><span class=\"font-weight-bold\"> Name: </span>{{data.doctor}}</p>\r\n      </li>\r\n      <li>\r\n        <p><span class=\"font-weight-bold\"> Email: </span>{{ data.email }}</p>\r\n      </li>\r\n      <li>\r\n        <p>\r\n          <span class=\"font-weight-bold\">Mobile: </span>{{data.mobile}}\r\n        </p>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div mat-dialog-actions class=\"mb-1\">\r\n    <button mat-flat-button color=\"warn\" [mat-dialog-close]=\"1\" (click)=\"confirmDelete()\">\r\n      Delete\r\n    </button>\r\n    <button mat-flat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "eWic":
/*!***************************************************************************************!*\
  !*** ./src/app/patient/appointments/past-appointment/past-appointment.component.sass ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXN0LWFwcG9pbnRtZW50LmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "kKEL":
/*!*************************************************************!*\
  !*** ./src/app/patient/appointments/appointments.module.ts ***!
  \*************************************************************/
/*! exports provided: AppointmentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsModule", function() { return AppointmentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-material-file-input */ "7ZcW");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _appointments_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./appointments-routing.module */ "9beF");
/* harmony import */ var _upcoming_appointment_upcoming_appointment_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./upcoming-appointment/upcoming-appointment.component */ "L+1L");
/* harmony import */ var _upcoming_appointment_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./upcoming-appointment/dialogs/delete/delete.component */ "mMJY");
/* harmony import */ var _upcoming_appointment_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./upcoming-appointment/dialogs/form-dialog/form-dialog.component */ "yxCr");
/* harmony import */ var _past_appointment_past_appointment_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./past-appointment/past-appointment.component */ "OZmR");
/* harmony import */ var _past_appointment_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./past-appointment/dialogs/delete/delete.component */ "oatb");
/* harmony import */ var _today_appointment_today_appointment_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./today-appointment/today-appointment.component */ "6dwX");
/* harmony import */ var _today_appointment_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./today-appointment/dialogs/delete/delete.component */ "Jw3p");
/* harmony import */ var _upcoming_appointment_upcoming_appointment_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./upcoming-appointment/upcoming-appointment.service */ "KMyl");
/* harmony import */ var _past_appointment_past_appointment_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./past-appointment/past-appointment.service */ "+qHA");
































let AppointmentsModule = class AppointmentsModule {
};
AppointmentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _upcoming_appointment_upcoming_appointment_component__WEBPACK_IMPORTED_MODULE_23__["UpcomingAppointmentComponent"],
            _upcoming_appointment_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_24__["DeleteDialogComponent"],
            _upcoming_appointment_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_25__["FormDialogComponent"],
            _past_appointment_past_appointment_component__WEBPACK_IMPORTED_MODULE_26__["PastAppointmentComponent"],
            _past_appointment_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_27__["PastDeleteDialogComponent"],
            _today_appointment_today_appointment_component__WEBPACK_IMPORTED_MODULE_28__["TodayAppointmentComponent"],
            _today_appointment_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_29__["DeleteComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _appointments_routing_module__WEBPACK_IMPORTED_MODULE_22__["AppointmentsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"],
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_20__["MaterialFileInputModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
        ],
        providers: [_upcoming_appointment_upcoming_appointment_service__WEBPACK_IMPORTED_MODULE_30__["UpcomingAppointmentService"], _past_appointment_past_appointment_service__WEBPACK_IMPORTED_MODULE_31__["PastAppointmentService"]],
    })
], AppointmentsModule);



/***/ }),

/***/ "mMJY":
/*!**********************************************************************************************!*\
  !*** ./src/app/patient/appointments/upcoming-appointment/dialogs/delete/delete.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: DeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDialogComponent", function() { return DeleteDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_delete_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./delete.component.html */ "Yegp");
/* harmony import */ var _delete_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete.component.sass */ "uHoI");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _upcoming_appointment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../upcoming-appointment.service */ "KMyl");






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
        this.appointmentService.deleteUpcomingAppointment(this.data.id);
    }
};
DeleteDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _upcoming_appointment_service__WEBPACK_IMPORTED_MODULE_5__["UpcomingAppointmentService"] }
];
DeleteDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-delete",
        template: _raw_loader_delete_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_delete_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DeleteDialogComponent);



/***/ }),

/***/ "oatb":
/*!******************************************************************************************!*\
  !*** ./src/app/patient/appointments/past-appointment/dialogs/delete/delete.component.ts ***!
  \******************************************************************************************/
/*! exports provided: PastDeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PastDeleteDialogComponent", function() { return PastDeleteDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_delete_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./delete.component.html */ "Jto9");
/* harmony import */ var _delete_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete.component.sass */ "pRoz");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _past_appointment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../past-appointment.service */ "+qHA");






let PastDeleteDialogComponent = class PastDeleteDialogComponent {
    constructor(dialogRef, data, appointmentService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.appointmentService = appointmentService;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmDelete() {
        this.appointmentService.deletePastAppointment(this.data.id);
    }
};
PastDeleteDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _past_appointment_service__WEBPACK_IMPORTED_MODULE_5__["PastAppointmentService"] }
];
PastDeleteDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-delete",
        template: _raw_loader_delete_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_delete_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PastDeleteDialogComponent);



/***/ }),

/***/ "pRoz":
/*!********************************************************************************************!*\
  !*** ./src/app/patient/appointments/past-appointment/dialogs/delete/delete.component.sass ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "q2cm":
/*!***********************************************************************************************!*\
  !*** ./src/app/patient/appointments/upcoming-appointment/upcoming-appointment.component.sass ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGNvbWluZy1hcHBvaW50bWVudC5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "seps":
/*!**********************************************************************************************************!*\
  !*** ./src/app/patient/appointments/upcoming-appointment/dialogs/form-dialog/form-dialog.component.sass ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWRpYWxvZy5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "uHoI":
/*!************************************************************************************************!*\
  !*** ./src/app/patient/appointments/upcoming-appointment/dialogs/delete/delete.component.sass ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "xQaI":
/*!*********************************************************************************************!*\
  !*** ./src/app/patient/appointments/today-appointment/dialogs/delete/delete.component.sass ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "yiMd":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patient/appointments/past-appointment/past-appointment.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">Past</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a routerLink=\"/patient/dashboard\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">Past Appointments</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n        <div class=\"card\">\r\n          <div class=\"body\">\r\n            <div class=\"responsive_table\">\r\n              <div class=\"materialTableHeader\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-8\">\r\n                    <ul class=\"header-buttons-left ms-0\">\r\n                      <li class=\"dropdown\">\r\n                        <h2>\r\n                          <strong>Past Appointments</strong></h2>\r\n                      </li>\r\n                      <li class=\"dropdown m-l-20\">\r\n                        <label for=\"search-input\"><i class=\"material-icons search-icon\">search</i></label>\r\n                        <input placeholder=\"Search\" type=\"text\" #filter class=\"browser-default search-field\"\r\n                          aria-label=\"Search box\">\r\n                      </li>\r\n                      <li>\r\n                        <div class=\"icon-button-demo m-l-10\" [hidden]=!selection.hasValue()>\r\n                          <button mat-mini-fab color=\"warn\" (click)=\"removeSelectedRows()\">\r\n                            <mat-icon class=\"col-white\">delete</mat-icon>\r\n                          </button>\r\n                        </div>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <mat-table #table [dataSource]=\"dataSource\" matSort class=\"mat-cell\">\r\n                <!-- Checkbox Column -->\r\n                <ng-container matColumnDef=\"select\">\r\n                  <mat-header-cell *matHeaderCellDef [ngClass]=\"'tbl-col-width-per-6'\">\r\n                    <mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n                      [checked]=\"selection.hasValue() && isAllSelected()\"\r\n                      [indeterminate]=\"selection.hasValue() && !isAllSelected()\" [ngClass]=\"'tbl-checkbox'\">\r\n                    </mat-checkbox>\r\n                  </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\" [ngClass]=\"'tbl-col-width-per-6'\">\r\n                    <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\"\r\n                      [checked]=\"selection.isSelected(row)\" [ngClass]=\"'tbl-checkbox'\">\r\n                    </mat-checkbox>\r\n                  </mat-cell>\r\n                </ng-container>\r\n                <!-- ID Column -->\r\n                <ng-container matColumnDef=\"id\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Id</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\">{{row.id}}</mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"img\">\r\n                  <mat-header-cell mat-header-cell *matHeaderCellDef [ngClass]=\"'tbl-col-width-per-5'\"> Image\r\n                  </mat-header-cell>\r\n                  <mat-cell mat-cell *matCellDef=\"let row\" class=\"table-img tbl-col-width-per-5\"> <img\r\n                      [src]=\"row.img\" />\r\n                  </mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"doctor\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Doctor Name</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.doctor}}</mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"email\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Email</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.email}}</mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"date\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Appo. Date</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.date | date: 'MM/dd/yyyy' }}\r\n                  </mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"time\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Appo. Time</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.time}}</mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"mobile\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Mobile</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.mobile}}</mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"injury\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Injury/Condition\r\n                  </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.injury}}</mat-cell>\r\n                </ng-container>\r\n                <!-- actions -->\r\n                <ng-container matColumnDef=\"actions\">\r\n                  <mat-header-cell *matHeaderCellDef class=\"pr-0\">Actions</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row; let i=index;\" class=\"pr-0\">\r\n                    <button mat-icon-button color=\"accent\" class=\"btn-tbl-delete\" (click)=\"$event.stopPropagation()\"\r\n                      (click)=\"deleteItem(i, row)\">\r\n                      <mat-icon aria-label=\"Delete\" class=\"col-white\">delete</mat-icon>\r\n                    </button>\r\n                  </mat-cell>\r\n                </ng-container>\r\n                <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                <!-- <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row> -->\r\n                <mat-row *matRowDef=\"let row; columns: displayedColumns;\" [style.cursor]=\"'pointer'\" matRipple>\r\n                </mat-row>\r\n              </mat-table>\r\n              <!-- Loading spinner -->\r\n              <div *ngIf=\"exampleDatabase.isTblLoading\" class=\"tbl-spinner\">\r\n                <mat-progress-spinner color=\"primary\" [diameter]=\"40\" mode=\"indeterminate\">\r\n                </mat-progress-spinner>\r\n              </div>\r\n              <div *ngIf=\"!exampleDatabase.isTblLoading\" class=\"no-results\"\r\n                [style.display]=\"dataSource.renderedData.length == 0 ? '' : 'none'\">\r\n                No results\r\n              </div>\r\n              <mat-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"10\"\r\n                [pageSizeOptions]=\"[5, 10, 25, 100]\">\r\n              </mat-paginator>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "yxCr":
/*!********************************************************************************************************!*\
  !*** ./src/app/patient/appointments/upcoming-appointment/dialogs/form-dialog/form-dialog.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: FormDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDialogComponent", function() { return FormDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_form_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./form-dialog.component.html */ "6280");
/* harmony import */ var _form_dialog_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-dialog.component.sass */ "seps");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _upcoming_appointment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../upcoming-appointment.service */ "KMyl");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _upcoming_appointment_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../upcoming-appointment.model */ "KY0j");
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
            this.dialogTitle = data.appointment.doctor;
            this.appointment = data.appointment;
        }
        else {
            this.dialogTitle = "New Appointment";
            this.appointment = new _upcoming_appointment_model__WEBPACK_IMPORTED_MODULE_7__["UpcomingAppointment"]({});
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
            email: [
                this.appointment.email,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(5)],
            ],
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
        this.appointmentService.addUpcomingAppointment(this.appointmentForm.getRawValue());
    }
};
FormDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _upcoming_appointment_service__WEBPACK_IMPORTED_MODULE_5__["UpcomingAppointmentService"] },
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



/***/ })

}]);
//# sourceMappingURL=appointments-appointments-module-es2015.js.map