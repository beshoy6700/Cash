(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["room-room-module"],{

/***/ "09rd":
/*!********************************************************************************!*\
  !*** ./src/app/admin/room/allroom/dialog/form-dialog/form-dialog.component.ts ***!
  \********************************************************************************/
/*! exports provided: FormDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDialogComponent", function() { return FormDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_form_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./form-dialog.component.html */ "QLLi");
/* harmony import */ var _form_dialog_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-dialog.component.sass */ "t3CC");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _room_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../room.service */ "2f7F");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _room_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../room.model */ "T3/I");








let FormDialogComponent = class FormDialogComponent {
    constructor(dialogRef, data, roomService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.roomService = roomService;
        this.fb = fb;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            // Validators.email,
        ]);
        // Set the defaults
        this.action = data.action;
        if (this.action === "edit") {
            this.dialogTitle = data.room.pName;
            this.room = data.room;
        }
        else {
            this.dialogTitle = "New Room";
            this.room = new _room_model__WEBPACK_IMPORTED_MODULE_7__["Room"]({});
        }
        this.roomForm = this.createContactForm();
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
            id: [this.room.id],
            img: [this.room.img],
            pName: [this.room.pName],
            rType: [this.room.rType],
            admitDate: [this.room.admitDate],
            dischargeDate: [this.room.dischargeDate],
            rNo: [this.room.rNo],
            sex: [this.room.sex],
        });
    }
    submit() {
        // emppty stuff
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmAdd() {
        this.roomService.addRoom(this.roomForm.getRawValue());
    }
};
FormDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _room_service__WEBPACK_IMPORTED_MODULE_5__["RoomService"] },
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

/***/ "2f7F":
/*!****************************************************!*\
  !*** ./src/app/admin/room/allroom/room.service.ts ***!
  \****************************************************/
/*! exports provided: RoomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomService", function() { return RoomService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "41Ph");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




let RoomService = class RoomService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = "assets/data/rooms.json";
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
    getAllRooms() {
        this.httpClient.get(this.API_URL).subscribe((data) => {
            this.isTblLoading = false;
            this.dataChange.next(data);
        }, (error) => {
            this.isTblLoading = false;
            console.log(error.name + " " + error.message);
        });
    }
    addRoom(room) {
        this.dialogData = room;
        /*  this.httpClient.post(this.API_URL, room).subscribe(data => {
          this.dialogData = room;
          },
          (err: HttpErrorResponse) => {
         // error code here
        });*/
    }
    updateRoom(room) {
        this.dialogData = room;
        /* this.httpClient.put(this.API_URL + room.id, room).subscribe(data => {
          this.dialogData = room;
        },
        (err: HttpErrorResponse) => {
          // error code here
        }
      );*/
    }
    deleteRoom(id) {
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
RoomService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
RoomService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], RoomService);



/***/ }),

/***/ "BOHX":
/*!***********************************************************!*\
  !*** ./src/app/admin/room/allroom/allroom.component.sass ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGxyb29tLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "D2gG":
/*!***********************************************************************!*\
  !*** ./src/app/admin/room/add-allotment/add-allotment.component.sass ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtYWxsb3RtZW50LmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "KcMv":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/room/allroom/dialog/delete/delete.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <h3 mat-dialog-title>Are you sure?</h3>\r\n  <div mat-dialog-content>\r\n    <ul class=\"clearfix\">\r\n      <li>\r\n        <p><span class=\"font-weight-bold\"> Room No: </span>{{data.rNo}}</p>\r\n      </li>\r\n      <li>\r\n        <p><span class=\"font-weight-bold\"> Patient Name: </span>{{ data.pName }}</p>\r\n      </li>\r\n      <li>\r\n        <p>\r\n          <span class=\"font-weight-bold\">Room Type: </span>{{data.rType}}\r\n        </p>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div mat-dialog-actions class=\"mb-1\">\r\n    <button mat-flat-button color=\"warn\" [mat-dialog-close]=\"1\" (click)=\"confirmDelete()\">\r\n      Delete\r\n    </button>\r\n    <button mat-flat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "KyJY":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/room/allroom/allroom.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">View Rooms</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a routerLink=\"/admin/dashboard/main\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-2\">\r\n              <a href=\"#\" onClick=\"return false;\">Rooms</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">View</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n        <div class=\"card\">\r\n          <div class=\"body\">\r\n            <div class=\"table-responsive\">\r\n              <div class=\"materialTableHeader\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-8\">\r\n                    <ul class=\"header-buttons-left ms-0\">\r\n                      <li class=\"dropdown\">\r\n                        <h2>\r\n                          <strong>Rooms</strong></h2>\r\n                      </li>\r\n                      <li class=\"dropdown m-l-20\">\r\n                        <label for=\"search-input\"><i class=\"material-icons search-icon\">search</i></label>\r\n                        <input placeholder=\"Search\" type=\"text\" #filter class=\"browser-default search-field\"\r\n                          aria-label=\"Search box\">\r\n                      </li>\r\n                      <li>\r\n                        <div class=\"icon-button-demo m-l-10\" [hidden]=!selection.hasValue()>\r\n                          <button mat-mini-fab color=\"warn\" (click)=\"removeSelectedRows()\">\r\n                            <mat-icon class=\"col-white\">delete</mat-icon>\r\n                          </button>\r\n                        </div>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                  <div class=\"col-4\">\r\n                    <ul class=\"header-buttons\">\r\n                      <li>\r\n                        <div class=\"icon-button-demo\">\r\n                          <button mat-mini-fab color=\"primary\" (click)=\"addNew()\">\r\n                            <mat-icon class=\"col-white\">add</mat-icon>\r\n                          </button>\r\n                        </div>\r\n                      </li>\r\n                      <li>\r\n                        <div class=\"icon-button-demo\">\r\n                          <button mat-mini-fab color=\"primary\" (click)=\"refresh()\">\r\n                            <mat-icon class=\"col-white\">refresh</mat-icon>\r\n                          </button>\r\n                        </div>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <mat-table #table [dataSource]=\"dataSource\" matSort class=\"mat-cell\">\r\n                <!-- Checkbox Column -->\r\n                <ng-container matColumnDef=\"select\">\r\n                  <mat-header-cell *matHeaderCellDef [ngClass]=\"'tbl-col-width-per-6'\">\r\n                    <mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n                      [checked]=\"selection.hasValue() && isAllSelected()\"\r\n                      [indeterminate]=\"selection.hasValue() && !isAllSelected()\" [ngClass]=\"'tbl-checkbox'\">\r\n                    </mat-checkbox>\r\n                  </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\" [ngClass]=\"'tbl-col-width-per-6'\">\r\n                    <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\"\r\n                      [checked]=\"selection.isSelected(row)\" [ngClass]=\"'tbl-checkbox'\">\r\n                    </mat-checkbox>\r\n                  </mat-cell>\r\n                </ng-container>\r\n                <!-- ID Column -->\r\n                <ng-container matColumnDef=\"id\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Id</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\">{{row.id}}</mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"img\">\r\n                  <mat-header-cell mat-header-cell *matHeaderCellDef [ngClass]=\"'tbl-col-width-per-5'\"> Image\r\n                  </mat-header-cell>\r\n                  <mat-cell mat-cell *matCellDef=\"let row\" class=\"table-img tbl-col-width-per-5\"> <img\r\n                      [src]=\"row.img\" />\r\n                  </mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"rNo\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Room No</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.rNo}}</mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"pName\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>patient Name</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.pName}}</mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"rType\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Room Type</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.rType}}</mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"sex\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Sex</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.sex}}</mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"admitDate\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Admit Date</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.admitDate | date: 'MM/dd/yyyy'}}\r\n                  </mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"dischargeDate\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>Discharge Date</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.dischargeDate | date: 'MM/dd/yyyy'}}\r\n                  </mat-cell>\r\n                </ng-container>\r\n                <!-- actions -->\r\n                <ng-container matColumnDef=\"actions\">\r\n                  <mat-header-cell *matHeaderCellDef class=\"pr-0\">Actions</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row; let i=index;\" class=\"pr-0\">\r\n                    <button mat-icon-button color=\"accent\" class=\"btn-tbl-edit\" (click)=\"$event.stopPropagation()\"\r\n                      (click)=\"editCall(row)\">\r\n                      <mat-icon aria-label=\"Edit\" class=\"col-white\">edit</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button color=\"accent\" class=\"btn-tbl-delete\" (click)=\"$event.stopPropagation()\"\r\n                      (click)=\"deleteItem(i, row)\">\r\n                      <mat-icon aria-label=\"Delete\" class=\"col-white\">delete</mat-icon>\r\n                    </button>\r\n                  </mat-cell>\r\n                </ng-container>\r\n                <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"editCall(row)\"\r\n                  [style.cursor]=\"'pointer'\" matRipple>\r\n                </mat-row>\r\n              </mat-table>\r\n              <!-- Loading spinner -->\r\n              <div *ngIf=\"exampleDatabase.isTblLoading\" class=\"tbl-spinner\">\r\n                <mat-progress-spinner color=\"primary\" [diameter]=\"40\" mode=\"indeterminate\">\r\n                </mat-progress-spinner>\r\n              </div>\r\n              <div *ngIf=\"!exampleDatabase.isTblLoading\" class=\"no-results\"\r\n                [style.display]=\"dataSource.renderedData.length == 0 ? '' : 'none'\">\r\n                No results\r\n              </div>\r\n              <mat-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"10\"\r\n                [pageSizeOptions]=\"[5, 10, 25, 100]\">\r\n              </mat-paginator>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "QLLi":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/room/allroom/dialog/form-dialog/form-dialog.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"addContainer\">\r\n  <div class=\"modalHeader\">\r\n    <div class=\"editRowModal\">\r\n      <div class=\"modalHeader clearfix\">\r\n        <img [src]='room.img' alt=\"avatar\">\r\n        <div class=\"modal-about\">\r\n          <div class=\"font-weight-bold p-t-5 msl-3 font-17\">\r\n            {{dialogTitle}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <button mat-icon-button (click)=\"dialogRef.close()\" aria-label=\"Close dialog\">\r\n      <mat-icon>close</mat-icon>\r\n    </button>\r\n  </div>\r\n  <div mat-dialog-content>\r\n    <form class=\"register-form m-4\" [formGroup]=\"roomForm\" (ngSubmit)=\"submit\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n          <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n            <mat-label>Room No</mat-label>\r\n            <input matInput formControlName=\"rNo\" required>\r\n            <mat-icon matSuffix>assignment</mat-icon>\r\n            <mat-error *ngIf=\"roomForm.get('rNo').hasError('required')\">\r\n              Room no is required\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n          <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n            <mat-label>Patient Name</mat-label>\r\n            <input matInput formControlName=\"pName\" required>\r\n            <mat-icon matSuffix>face</mat-icon>\r\n            <mat-error *ngIf=\"roomForm.get('pName').hasError('required')\">\r\n              Patient Name is required\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n          <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n            <mat-label>Room Type</mat-label>\r\n            <input matInput formControlName=\"rType\" required>\r\n            <mat-icon matSuffix>store</mat-icon>\r\n            <mat-error *ngIf=\"roomForm.get('rType').hasError('required')\">\r\n              Room type is required\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n          <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n            <mat-label>Sex</mat-label>\r\n            <input matInput formControlName=\"sex\" required>\r\n            <mat-icon matSuffix>supervisor_account</mat-icon>\r\n            <mat-error *ngIf=\"roomForm.get('sex').hasError('required')\">\r\n              Sex is required\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n          <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n            <mat-label>Admit date</mat-label>\r\n            <input matInput [matDatepicker]=\"picker\" formControlName=\"admitDate\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker></mat-datepicker>\r\n            <mat-error *ngIf=\"roomForm.get('admitDate').hasError('required')\">\r\n              Please select Admit date\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n          <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n            <mat-label>Discharge date</mat-label>\r\n            <input matInput [matDatepicker]=\"pickerTo\" formControlName=\"dischargeDate\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"pickerTo\"></mat-datepicker-toggle>\r\n            <mat-datepicker #pickerTo></mat-datepicker>\r\n            <mat-error *ngIf=\"roomForm.get('dischargeDate').hasError('required')\">\r\n              Please select Discharge date\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n          <div class=\"example-button-row\">\r\n            <button mat-raised-button color=\"primary\" [type]=\"submit\" [disabled]=\"!roomForm.valid\"\r\n              [mat-dialog-close]=\"1\" (click)=\"confirmAdd()\">Save</button>\r\n            <button mat-raised-button color=\"warn\" (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "T3/I":
/*!**************************************************!*\
  !*** ./src/app/admin/room/allroom/room.model.ts ***!
  \**************************************************/
/*! exports provided: Room */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Room", function() { return Room; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");

class Room {
    constructor(room) {
        {
            this.id = room.id || this.getRandomID();
            this.img = room.avatar || "assets/images/user/user1.jpg";
            this.pName = room.pName || "";
            this.rNo = room.rNo || "";
            this.rType = room.rType || "";
            this.sex = room.sex || "";
            this.admitDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(new Date(), "yyyy-MM-dd", "en") || "";
            this.dischargeDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(new Date(), "yyyy-MM-dd", "en") || "";
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

/***/ "X1wD":
/*!***********************************************************************!*\
  !*** ./src/app/admin/room/edit-allotment/edit-allotment.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditAllotmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAllotmentComponent", function() { return EditAllotmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_allotment_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-allotment.component.html */ "lpqY");
/* harmony import */ var _edit_allotment_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-allotment.component.sass */ "jaQj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





let EditAllotmentComponent = class EditAllotmentComponent {
    constructor(fb) {
        this.fb = fb;
        this.formdata = {
            rNo: "105",
            rType: "2",
            pName: "John Deo",
            aDate: "2020-02-17T14:22:18Z",
            dDate: "2020-02-19T14:22:18Z",
        };
        this.roomForm = this.createContactForm();
    }
    onSubmit() {
        console.log("Form Value", this.roomForm.value);
    }
    createContactForm() {
        return this.fb.group({
            rNo: [this.formdata.rNo, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            rType: [this.formdata.rType, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            pName: [this.formdata.pName, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            aDate: [this.formdata.aDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            dDate: [this.formdata.dDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    }
};
EditAllotmentComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
EditAllotmentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-edit-allotment",
        template: _raw_loader_edit_allotment_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_allotment_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditAllotmentComponent);



/***/ }),

/***/ "ga6u":
/*!*********************************************************************!*\
  !*** ./src/app/admin/room/add-allotment/add-allotment.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddAllotmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAllotmentComponent", function() { return AddAllotmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_allotment_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-allotment.component.html */ "ipYa");
/* harmony import */ var _add_allotment_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-allotment.component.sass */ "D2gG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





let AddAllotmentComponent = class AddAllotmentComponent {
    constructor(fb) {
        this.fb = fb;
        this.roomForm = this.fb.group({
            rNo: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            rType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            pName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            aDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            dDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    }
    onSubmit() {
        console.log("Form Value", this.roomForm.value);
    }
};
AddAllotmentComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
AddAllotmentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-add-allotment",
        template: _raw_loader_add_allotment_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_allotment_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddAllotmentComponent);



/***/ }),

/***/ "ipYa":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/room/add-allotment/add-allotment.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">New Allotment</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a routerLink=\"/admin/dashboard/main\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-2\">\r\n              <a href=\"#\" onClick=\"return false;\">Room</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">New Allotment</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2><strong> New Allotment</strong></h2>\r\n\r\n          </div>\r\n          <div class=\"body\">\r\n            <form class=\"m-4\" [formGroup]=\"roomForm\" (ngSubmit)=\"onSubmit()\">\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Room No</mat-label>\r\n                    <input matInput formControlName=\"rNo\" required>\r\n                    <mat-error *ngIf=\"roomForm.get('rNo').hasError('required')\">\r\n                      Room Number is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Room Type</mat-label>\r\n                    <mat-select formControlName=\"rType\" required>\r\n                      <mat-option [value]=\"'1'\">\r\n                        General\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'2'\">\r\n                        Delux\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'3'\">\r\n                        Super Delux\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'4'\">\r\n                        ICU\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <mat-error *ngIf=\"roomForm.get('rType').hasError('required')\">\r\n                      Room Type is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Patient Name</mat-label>\r\n                    <input matInput formControlName=\"pName\" required>\r\n                    <mat-error *ngIf=\"roomForm.get('pName').hasError('required')\">\r\n                      Patient Name is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Allotment Date</mat-label>\r\n                    <input matInput [matDatepicker]=\"picker\" formControlName=\"aDate\" required>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                    <mat-error *ngIf=\"roomForm.get('aDate').hasError('required')\">\r\n                      Please select date\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Discharge Date</mat-label>\r\n                    <input matInput [matDatepicker]=\"picker1\" formControlName=\"dDate\" required>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker1></mat-datepicker>\r\n                    <mat-error *ngIf=\"roomForm.get('dDate').hasError('required')\">\r\n                      Please select date\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                  <button class=\"btn-space\" [disabled]=\"!roomForm.valid \" mat-raised-button\r\n                    color=\"primary\">Submit</button>\r\n                  <button type=\"button\" mat-button>Cancel</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "j7aR":
/*!**********************************************************************!*\
  !*** ./src/app/admin/room/allroom/dialog/delete/delete.component.ts ***!
  \**********************************************************************/
/*! exports provided: DeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDialogComponent", function() { return DeleteDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_delete_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./delete.component.html */ "KcMv");
/* harmony import */ var _delete_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete.component.sass */ "w2DK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _room_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../room.service */ "2f7F");






let DeleteDialogComponent = class DeleteDialogComponent {
    constructor(dialogRef, data, roomService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.roomService = roomService;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmDelete() {
        this.roomService.deleteRoom(this.data.id);
    }
};
DeleteDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _room_service__WEBPACK_IMPORTED_MODULE_5__["RoomService"] }
];
DeleteDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-delete",
        template: _raw_loader_delete_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_delete_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DeleteDialogComponent);



/***/ }),

/***/ "jaQj":
/*!*************************************************************************!*\
  !*** ./src/app/admin/room/edit-allotment/edit-allotment.component.sass ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWFsbG90bWVudC5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "lpqY":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/room/edit-allotment/edit-allotment.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">Edit Allotment</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a routerLink=\"/admin/dashboard/main\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-2\">\r\n              <a href=\"#\" onClick=\"return false;\">Room</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">Edit Allotment</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2><strong> Edit Allotment</strong></h2>\r\n\r\n          </div>\r\n          <div class=\"body\">\r\n            <form class=\"m-4\" [formGroup]=\"roomForm\" (ngSubmit)=\"onSubmit()\">\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Room No</mat-label>\r\n                    <input matInput formControlName=\"rNo\" required>\r\n                    <mat-error *ngIf=\"roomForm.get('rNo').hasError('required')\">\r\n                      Room Number is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Room Type</mat-label>\r\n                    <mat-select formControlName=\"rType\" required>\r\n                      <mat-option [value]=\"'1'\">\r\n                        General\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'2'\">\r\n                        Delux\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'3'\">\r\n                        Super Delux\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'4'\">\r\n                        ICU\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <mat-error *ngIf=\"roomForm.get('rType').hasError('required')\">\r\n                      Room Type is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Patient Name</mat-label>\r\n                    <input matInput formControlName=\"pName\" required>\r\n                    <mat-error *ngIf=\"roomForm.get('pName').hasError('required')\">\r\n                      Patient Name is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Allotment Date</mat-label>\r\n                    <input matInput [matDatepicker]=\"picker\" formControlName=\"aDate\" required>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                    <mat-error *ngIf=\"roomForm.get('aDate').hasError('required')\">\r\n                      Please select date\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width mb-3\">\r\n                    <mat-label>Discharge Date</mat-label>\r\n                    <input matInput [matDatepicker]=\"picker1\" formControlName=\"dDate\" required>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker1></mat-datepicker>\r\n                    <mat-error *ngIf=\"roomForm.get('dDate').hasError('required')\">\r\n                      Please select date\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                  <button class=\"btn-space\" [disabled]=\"!roomForm.valid \" mat-raised-button\r\n                    color=\"primary\">Submit</button>\r\n                  <button type=\"button\" mat-button>Cancel</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "t3CC":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/room/allroom/dialog/form-dialog/form-dialog.component.sass ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWRpYWxvZy5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "t6NI":
/*!*******************************************!*\
  !*** ./src/app/admin/room/room.module.ts ***!
  \*******************************************/
/*! exports provided: RoomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomModule", function() { return RoomModule; });
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
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _room_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./room-routing.module */ "w7Bm");
/* harmony import */ var _allroom_allroom_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./allroom/allroom.component */ "yT6/");
/* harmony import */ var _allroom_dialog_delete_delete_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./allroom/dialog/delete/delete.component */ "j7aR");
/* harmony import */ var _allroom_dialog_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./allroom/dialog/form-dialog/form-dialog.component */ "09rd");
/* harmony import */ var _edit_allotment_edit_allotment_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./edit-allotment/edit-allotment.component */ "X1wD");
/* harmony import */ var _add_allotment_add_allotment_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./add-allotment/add-allotment.component */ "ga6u");
/* harmony import */ var _allroom_room_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./allroom/room.service */ "2f7F");

























let RoomModule = class RoomModule {
};
RoomModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _allroom_allroom_component__WEBPACK_IMPORTED_MODULE_19__["AllroomComponent"],
            _allroom_dialog_delete_delete_component__WEBPACK_IMPORTED_MODULE_20__["DeleteDialogComponent"],
            _allroom_dialog_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_21__["FormDialogComponent"],
            _edit_allotment_edit_allotment_component__WEBPACK_IMPORTED_MODULE_22__["EditAllotmentComponent"],
            _add_allotment_add_allotment_component__WEBPACK_IMPORTED_MODULE_23__["AddAllotmentComponent"],
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
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
            _room_routing_module__WEBPACK_IMPORTED_MODULE_18__["RoomRoutingModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"],
        ],
        providers: [_allroom_room_service__WEBPACK_IMPORTED_MODULE_24__["RoomService"]],
    })
], RoomModule);



/***/ }),

/***/ "w2DK":
/*!************************************************************************!*\
  !*** ./src/app/admin/room/allroom/dialog/delete/delete.component.sass ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "w7Bm":
/*!***************************************************!*\
  !*** ./src/app/admin/room/room-routing.module.ts ***!
  \***************************************************/
/*! exports provided: RoomRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomRoutingModule", function() { return RoomRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _allroom_allroom_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allroom/allroom.component */ "yT6/");
/* harmony import */ var _add_allotment_add_allotment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-allotment/add-allotment.component */ "ga6u");
/* harmony import */ var _edit_allotment_edit_allotment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-allotment/edit-allotment.component */ "X1wD");
/* harmony import */ var _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../authentication/page404/page404.component */ "21P8");







const routes = [
    {
        path: "all-rooms",
        component: _allroom_allroom_component__WEBPACK_IMPORTED_MODULE_3__["AllroomComponent"],
    },
    {
        path: "add-allotment",
        component: _add_allotment_add_allotment_component__WEBPACK_IMPORTED_MODULE_4__["AddAllotmentComponent"],
    },
    {
        path: "edit-allotment",
        component: _edit_allotment_edit_allotment_component__WEBPACK_IMPORTED_MODULE_5__["EditAllotmentComponent"],
    },
    { path: "**", component: _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_6__["Page404Component"] },
];
let RoomRoutingModule = class RoomRoutingModule {
};
RoomRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RoomRoutingModule);



/***/ }),

/***/ "yT6/":
/*!*********************************************************!*\
  !*** ./src/app/admin/room/allroom/allroom.component.ts ***!
  \*********************************************************/
/*! exports provided: AllroomComponent, ExampleDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllroomComponent", function() { return AllroomComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDataSource", function() { return ExampleDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_allroom_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./allroom.component.html */ "KyJY");
/* harmony import */ var _allroom_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allroom.component.sass */ "BOHX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _room_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./room.service */ "2f7F");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _dialog_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dialog/form-dialog/form-dialog.component */ "09rd");
/* harmony import */ var _dialog_delete_delete_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dialog/delete/delete.component */ "j7aR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "41Ph");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "9YHx");
















let AllroomComponent = class AllroomComponent {
    constructor(httpClient, dialog, roomService, snackBar) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.roomService = roomService;
        this.snackBar = snackBar;
        this.displayedColumns = [
            "select",
            "img",
            "rNo",
            "pName",
            "rType",
            "sex",
            "admitDate",
            "dischargeDate",
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
                room: this.room,
                action: "add",
            },
            direction: tempDirection,
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result === 1) {
                // After dialog is closed we're doing frontend updates
                // For add we're just pushing a new row inside DataService
                this.exampleDatabase.dataChange.value.unshift(this.roomService.getDialogData());
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
                room: row,
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
                    this.roomService.getDialogData();
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
        const dialogRef = this.dialog.open(_dialog_delete_delete_component__WEBPACK_IMPORTED_MODULE_12__["DeleteDialogComponent"], {
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
        this.exampleDatabase = new _room_service__WEBPACK_IMPORTED_MODULE_4__["RoomService"](this.httpClient);
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
AllroomComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _room_service__WEBPACK_IMPORTED_MODULE_4__["RoomService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"] }
];
AllroomComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], { static: true },] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"], { static: true },] }],
    filter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["filter", { static: true },] }]
};
AllroomComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-allroom",
        template: _raw_loader_allroom_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_allroom_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AllroomComponent);

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
        this.exampleDatabase.getAllRooms();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["merge"])(...displayDataChanges).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(() => {
            // Filter data
            this.filteredData = this.exampleDatabase.data
                .slice()
                .filter((room) => {
                const searchStr = (room.rNo +
                    room.pName +
                    room.rType +
                    room.sex +
                    room.admitDate +
                    room.dischargeDate).toLowerCase();
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
                case "pName":
                    [propertyA, propertyB] = [a.pName, b.pName];
                    break;
                case "rType":
                    [propertyA, propertyB] = [a.rType, b.rType];
                    break;
                case "admitDate":
                    [propertyA, propertyB] = [a.admitDate, b.admitDate];
                    break;
                case "dischargeDate":
                    [propertyA, propertyB] = [a.dischargeDate, b.dischargeDate];
                    break;
                case "rNo":
                    [propertyA, propertyB] = [a.rNo, b.rNo];
                    break;
            }
            const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return ((valueA < valueB ? -1 : 1) * (this._sort.direction === "asc" ? 1 : -1));
        });
    }
}


/***/ })

}]);
//# sourceMappingURL=room-room-module-es2015.js.map