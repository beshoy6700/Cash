(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contacts-contacts-module"],{

/***/ "/rNG":
/*!*****************************************************!*\
  !*** ./src/app/contacts/contacts-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AdvanceTableRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceTableRoutingModule", function() { return AdvanceTableRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _contacts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts.component */ "iZNs");




const routes = [
    {
        path: "",
        component: _contacts_component__WEBPACK_IMPORTED_MODULE_3__["ContactsComponent"],
    },
];
let AdvanceTableRoutingModule = class AdvanceTableRoutingModule {
};
AdvanceTableRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdvanceTableRoutingModule);



/***/ }),

/***/ "1s7i":
/*!*********************************************!*\
  !*** ./src/app/contacts/contacts.module.ts ***!
  \*********************************************/
/*! exports provided: ContactsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsModule", function() { return ContactsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contacts-routing.module */ "/rNG");
/* harmony import */ var _contacts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contacts.component */ "iZNs");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form/form.component */ "GowW");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./delete/delete.component */ "PbYJ");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-material-file-input */ "7ZcW");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _contacts_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./contacts.service */ "uEmk");



























let ContactsModule = class ContactsModule {
};
ContactsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_contacts_component__WEBPACK_IMPORTED_MODULE_5__["ContactsComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_6__["FormComponent"], _delete_delete_component__WEBPACK_IMPORTED_MODULE_7__["DeleteComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _contacts_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdvanceTableRoutingModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__["MatToolbarModule"],
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_24__["MaterialFileInputModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
        ],
        providers: [_contacts_service__WEBPACK_IMPORTED_MODULE_26__["ContactsService"]],
    })
], ContactsModule);



/***/ }),

/***/ "9sdL":
/*!********************************************!*\
  !*** ./src/app/contacts/contacts.model.ts ***!
  \********************************************/
/*! exports provided: Contacts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contacts", function() { return Contacts; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");

class Contacts {
    constructor(contacts) {
        {
            this.id = contacts.id || this.getRandomID();
            this.img = contacts.avatar || "assets/images/user/usrbig1.jpg";
            this.name = contacts.name || "";
            this.email = contacts.email || "";
            this.birthDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(new Date(), "yyyy-MM-dd", "en") || "";
            this.address = contacts.address || "";
            this.mobile = contacts.mobile || "";
            this.note = contacts.note || "";
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

/***/ "BjLg":
/*!**************************************************!*\
  !*** ./src/app/contacts/contacts.component.sass ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0cy5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "GowW":
/*!*************************************************!*\
  !*** ./src/app/contacts/form/form.component.ts ***!
  \*************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./form.component.html */ "mUVX");
/* harmony import */ var _form_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.component.sass */ "UmDv");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _contacts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contacts.service */ "uEmk");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _contacts_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contacts.model */ "9sdL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");









let FormComponent = class FormComponent {
    constructor(dialogRef, data, contactsService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.contactsService = contactsService;
        this.fb = fb;
        this.isDetails = false;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            // Validators.email,
        ]);
        // Set the defaults
        this.action = data.action;
        if (this.action === "edit") {
            this.isDetails = false;
            this.dialogTitle = data.contacts.name;
            this.contacts = data.contacts;
            this.contactsForm = this.createContactForm();
        }
        else if (this.action === "details") {
            this.contacts = data.contacts;
            this.isDetails = true;
        }
        else {
            this.isDetails = false;
            this.dialogTitle = "New Contacts";
            this.contacts = new _contacts_model__WEBPACK_IMPORTED_MODULE_7__["Contacts"]({});
            this.contactsForm = this.createContactForm();
        }
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
            id: [this.contacts.id],
            img: [this.contacts.img],
            name: [this.contacts.name],
            email: [
                this.contacts.email,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(5)],
            ],
            birthDate: [
                Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(this.contacts.birthDate, "yyyy-MM-dd", "en"),
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            ],
            address: [this.contacts.address],
            mobile: [this.contacts.mobile],
            note: [this.contacts.note],
        });
    }
    submit() {
        // emppty stuff
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmAdd() {
        this.contactsService.addContacts(this.contactsForm.getRawValue());
    }
};
FormComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _contacts_service__WEBPACK_IMPORTED_MODULE_5__["ContactsService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
FormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-form",
        template: _raw_loader_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_form_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FormComponent);



/***/ }),

/***/ "PbYJ":
/*!*****************************************************!*\
  !*** ./src/app/contacts/delete/delete.component.ts ***!
  \*****************************************************/
/*! exports provided: DeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteComponent", function() { return DeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_delete_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./delete.component.html */ "RKUQ");
/* harmony import */ var _delete_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete.component.sass */ "n+Yt");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _contacts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contacts.service */ "uEmk");






let DeleteComponent = class DeleteComponent {
    constructor(dialogRef, data, contactsService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.contactsService = contactsService;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmDelete() {
        this.contactsService.deleteContacts(this.data.id);
    }
};
DeleteComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _contacts_service__WEBPACK_IMPORTED_MODULE_5__["ContactsService"] }
];
DeleteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-delete",
        template: _raw_loader_delete_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_delete_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DeleteComponent);



/***/ }),

/***/ "RKUQ":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/delete/delete.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <h3 mat-dialog-title>Are you sure?</h3>\r\n  <div mat-dialog-content>\r\n    <ul class=\"clearfix\">\r\n      <li>\r\n        <p><span class=\"font-weight-bold\"> Name: </span>{{data.name}}</p>\r\n      </li>\r\n      <li>\r\n        <p><span class=\"font-weight-bold\"> Email: </span>{{ data.email }}</p>\r\n      </li>\r\n      <li>\r\n        <p>\r\n          <span class=\"font-weight-bold\">Mobile: </span>{{data.mobile}}\r\n        </p>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div mat-dialog-actions class=\"mb-1\">\r\n    <button mat-flat-button color=\"warn\" [mat-dialog-close]=\"1\" (click)=\"confirmDelete()\">\r\n      Delete\r\n    </button>\r\n    <button mat-flat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "UmDv":
/*!***************************************************!*\
  !*** ./src/app/contacts/form/form.component.sass ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "iZNs":
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/*! exports provided: ContactsComponent, ExampleDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDataSource", function() { return ExampleDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contacts_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contacts.component.html */ "w019");
/* harmony import */ var _contacts_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts.component.sass */ "BjLg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _contacts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contacts.service */ "uEmk");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "41Ph");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "9YHx");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./form/form.component */ "GowW");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./delete/delete.component */ "PbYJ");

















let ContactsComponent = class ContactsComponent {
    constructor(httpClient, dialog, contactsService, snackBar) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.contactsService = contactsService;
        this.snackBar = snackBar;
        this.filterToggle = false;
        this.displayedColumns = [
            "select",
            "img",
            "name",
            "email",
            "mobile",
            "birthDate",
            "address",
            "actions",
        ];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__["SelectionModel"](true, []);
        this.contextMenuPosition = { x: "0px", y: "0px" };
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
        const dialogRef = this.dialog.open(_form_form_component__WEBPACK_IMPORTED_MODULE_14__["FormComponent"], {
            data: {
                contacts: this.contacts,
                action: "add",
            },
            direction: tempDirection,
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result === 1) {
                // After dialog is closed we're doing frontend updates
                // For add we're just pushing a new row inside DataServicex
                this.exampleDatabase.dataChange.value.unshift(this.contactsService.getDialogData());
                this.refreshTable();
                this.showNotification("snackbar-success", "Add Record Successfully...!!!", "bottom", "center");
            }
        });
    }
    detailsCall(row) {
        this.dialog.open(_form_form_component__WEBPACK_IMPORTED_MODULE_14__["FormComponent"], {
            data: {
                contacts: row,
                action: "details",
            },
            height: "70%",
            width: "35%",
        });
    }
    toggleStar(row) {
        console.log(row);
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
        const dialogRef = this.dialog.open(_form_form_component__WEBPACK_IMPORTED_MODULE_14__["FormComponent"], {
            data: {
                contacts: row,
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
                    this.contactsService.getDialogData();
                // And lastly refresh table
                this.refreshTable();
                this.showNotification("black", "Edit Record Successfully...!!!", "bottom", "center");
            }
        });
    }
    deleteItem(row) {
        this.id = row.id;
        let tempDirection;
        if (localStorage.getItem("isRtl") === "true") {
            tempDirection = "rtl";
        }
        else {
            tempDirection = "ltr";
        }
        const dialogRef = this.dialog.open(_delete_delete_component__WEBPACK_IMPORTED_MODULE_15__["DeleteComponent"], {
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
        this.exampleDatabase = new _contacts_service__WEBPACK_IMPORTED_MODULE_4__["ContactsService"](this.httpClient);
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
ContactsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _contacts_service__WEBPACK_IMPORTED_MODULE_4__["ContactsService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"] }
];
ContactsComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], { static: true },] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"], { static: true },] }],
    filter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["filter", { static: true },] }],
    contextMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuTrigger"],] }]
};
ContactsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-contacts",
        template: _raw_loader_contacts_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contacts_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ContactsComponent);

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
        this.exampleDatabase.getAllContactss();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["merge"])(...displayDataChanges).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(() => {
            // Filter data
            this.filteredData = this.exampleDatabase.data
                .slice()
                .filter((contacts) => {
                const searchStr = (contacts.name +
                    contacts.birthDate +
                    contacts.email +
                    contacts.mobile +
                    contacts.address).toLowerCase();
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
                case "birthDate":
                    [propertyA, propertyB] = [a.birthDate, b.birthDate];
                    break;
                case "address":
                    [propertyA, propertyB] = [a.address, b.address];
                    break;
            }
            const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return ((valueA < valueB ? -1 : 1) * (this._sort.direction === "asc" ? 1 : -1));
        });
    }
}


/***/ }),

/***/ "mUVX":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/form/form.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"addContainer\">\r\n  <div *ngIf=\"!isDetails\" class=\"contact-form\">\r\n    <div class=\"modalHeader\">\r\n      <div class=\"editRowModal\">\r\n        <div class=\"modalHeader clearfix\">\r\n          <img [src]='contacts.img' alt=\"avatar\">\r\n          <div class=\"modal-about\">\r\n            <div class=\"font-weight-bold p-t-5 msl-3 font-17\">\r\n              {{dialogTitle}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <button mat-icon-button (click)=\"dialogRef.close()\" aria-label=\"Close dialog\">\r\n        <mat-icon>close</mat-icon>\r\n      </button>\r\n    </div>\r\n    <div mat-dialog-content>\r\n      <form class=\"register-form m-4\" [formGroup]=\"contactsForm\" (ngSubmit)=\"submit\">\r\n        <div class=\"row\">\r\n          <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n            <mat-form-field class=\"example-full-width mb-3\" appearance=\"outline\">\r\n              <mat-label>Name</mat-label>\r\n              <input matInput formControlName=\"name\" required>\r\n              <i class=\"material-icons-two-tone color-icon\" matSuffix>face</i>\r\n              <mat-error *ngIf=\"contactsForm.get('name').hasError('required')\">\r\n                Name is required\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n            <mat-form-field class=\"example-full-width mb-3\" appearance=\"outline\">\r\n              <mat-label>Email</mat-label>\r\n              <input matInput formControlName=\"email\" required>\r\n              <i class=\"material-icons-two-tone color-icon\" matSuffix>email</i>\r\n              <mat-error *ngIf=\"contactsForm.get('email').hasError('required') || contactsForm.get('email').touched\">\r\n                Please enter a valid email address\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n            <mat-form-field class=\"example-full-width mb-3\" appearance=\"outline\">\r\n              <mat-label>Mobile</mat-label>\r\n              <input matInput formControlName=\"mobile\" type=\"number\">\r\n              <i class=\"material-icons-two-tone color-icon\" matSuffix>smartphone</i>\r\n              <mat-error *ngIf=\"contactsForm.get('mobile').hasError('required')\">\r\n                Mobile is required\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n            <mat-form-field class=\"example-full-width mb-3\" appearance=\"outline\">\r\n              <mat-label>Birth date</mat-label>\r\n              <input matInput [matDatepicker]=\"picker\" formControlName=\"birthDate\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n              <mat-datepicker #picker></mat-datepicker>\r\n              <mat-error *ngIf=\"contactsForm.get('birthDate').hasError('required')\">\r\n                Please select date\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n            <mat-form-field class=\"example-full-width mb-3\" appearance=\"outline\">\r\n              <mat-label>Address</mat-label>\r\n              <textarea matInput formControlName=\"address\"></textarea>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n            <mat-form-field class=\"example-full-width mb-3\" appearance=\"outline\">\r\n              <mat-label>Note</mat-label>\r\n              <textarea matInput formControlName=\"note\"></textarea>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n            <div class=\"example-button-row\">\r\n              <button mat-raised-button color=\"primary\" [type]=\"submit\" [disabled]=\"!contactsForm.valid\"\r\n                [mat-dialog-close]=\"1\" (click)=\"confirmAdd()\">Save</button>\r\n              <button mat-raised-button color=\"warn\" (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"isDetails\" class=\"contact-details\">\r\n    <div class=\"modalHeader\">\r\n      <div class=\"editRowModal\">\r\n        <div class=\"modalHeader clearfix\">\r\n          <div class=\"modal-about contact-header\">\r\n            <div class=\"contact-details-img\">\r\n              <img [src]='contacts.img' alt=\"avatar\">\r\n            </div>\r\n            <div class=\"contact-details-heading\">\r\n              <div class=\"contact-details-name mb-2\">{{contacts.name}}</div>\r\n              <div class=\"badge col-green\">Friends</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <button mat-icon-button (click)=\"dialogRef.close()\" aria-label=\"Close dialog\">\r\n        <mat-icon>close</mat-icon>\r\n      </button>\r\n    </div>\r\n    <div mat-dialog-content>\r\n      <mat-card-content>\r\n        <div class=\"contact-details-field\">\r\n          <i class=\"material-icons-two-tone color-icon\">email</i>\r\n          <div class=\"contact-detail-info\"> {{contacts.email}}\r\n          </div>\r\n        </div>\r\n        <div class=\"contact-details-field\">\r\n          <i class=\"material-icons-two-tone color-icon\">phonelink_ring</i>\r\n          <div class=\"contact-detail-info\"> {{contacts.mobile}}\r\n          </div>\r\n        </div>\r\n        <div class=\"contact-details-field\">\r\n          <i class=\"material-icons-two-tone color-icon\">cake</i>\r\n          <div class=\"contact-detail-info\"> {{contacts.birthDate | date: 'MMMM d, yyyy'}}\r\n          </div>\r\n        </div>\r\n        <div class=\"contact-details-field\">\r\n          <i class=\"material-icons-two-tone color-icon\">location_on</i>\r\n          <div class=\"contact-detail-info\"> {{contacts.address}}\r\n          </div>\r\n        </div>\r\n        <div class=\"contact-details-field\">\r\n          <i class=\"material-icons-two-tone color-icon\">note</i>\r\n          <div class=\"contact-detail-info\"> {{contacts.note}}\r\n          </div>\r\n        </div>\r\n      </mat-card-content>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "n+Yt":
/*!*******************************************************!*\
  !*** ./src/app/contacts/delete/delete.component.sass ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "uEmk":
/*!**********************************************!*\
  !*** ./src/app/contacts/contacts.service.ts ***!
  \**********************************************/
/*! exports provided: ContactsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsService", function() { return ContactsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "41Ph");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




let ContactsService = class ContactsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = "assets/data/contacts.json";
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
    getAllContactss() {
        this.httpClient.get(this.API_URL).subscribe((data) => {
            this.isTblLoading = false;
            this.dataChange.next(data);
        }, (error) => {
            this.isTblLoading = false;
            console.log(error.name + " " + error.message);
        });
    }
    addContacts(contacts) {
        this.dialogData = contacts;
        /*  this.httpClient.post(this.API_URL, contacts).subscribe(data => {
          this.dialogData = contacts;
          },
          (err: HttpErrorResponse) => {
         // error code here
        });*/
    }
    updateContacts(contacts) {
        this.dialogData = contacts;
        /* this.httpClient.put(this.API_URL + contacts.id, contacts).subscribe(data => {
          this.dialogData = contacts;
        },
        (err: HttpErrorResponse) => {
          // error code here
        }
      );*/
    }
    deleteContacts(id) {
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
ContactsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ContactsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ContactsService);



/***/ }),

/***/ "w019":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contacts.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">All Contacts</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a href=\"#\" onClick=\"return false;\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-2\">\r\n              <a href=\"#\" onClick=\"return false;\">Contacts</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">All</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"tabbable-line\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n              <div class=\"card\">\r\n                <div class=\"body\">\r\n                  <div class=\"table-responsive\">\r\n                    <div class=\"materialTableHeader\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-8\">\r\n                          <ul class=\"header-buttons-left ms-0\">\r\n                            <li class=\"dropdown\">\r\n                              <h2>\r\n                                <strong>Contacts</strong></h2>\r\n                            </li>\r\n                            <li class=\"dropdown m-l-20\">\r\n                              <label for=\"search-input\"><i class=\"material-icons search-icon\">search</i></label>\r\n                              <input placeholder=\"Search\" type=\"text\" #filter class=\"browser-default search-field\"\r\n                                aria-label=\"Search box\">\r\n                            </li>\r\n                            <li>\r\n                              <div class=\"icon-button-demo m-l-10\" [hidden]=!selection.hasValue()>\r\n                                <button mat-mini-fab color=\"warn\" (click)=\"removeSelectedRows()\">\r\n                                  <mat-icon class=\"col-white\">delete\r\n                                  </mat-icon>\r\n                                </button>\r\n                              </div>\r\n                            </li>\r\n                          </ul>\r\n                        </div>\r\n                        <div class=\"col-4\">\r\n                          <ul class=\"header-buttons\">\r\n                            <li>\r\n                              <div class=\"icon-button-demo\">\r\n                                <button mat-mini-fab color=\"primary\" (click)=\"addNew()\">\r\n                                  <mat-icon class=\"col-white\">add</mat-icon>\r\n                                </button>\r\n                              </div>\r\n                            </li>\r\n                            <li>\r\n                              <div class=\"icon-button-demo\">\r\n                                <button mat-mini-fab color=\"primary\" (click)=\"refresh()\">\r\n                                  <mat-icon class=\"col-white\">refresh\r\n                                  </mat-icon>\r\n                                </button>\r\n                              </div>\r\n                            </li>\r\n                          </ul>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <mat-table #table [dataSource]=\"dataSource\" matSort class=\"mat-cell\">\r\n                      <!-- Checkbox Column -->\r\n                      <ng-container matColumnDef=\"select\">\r\n                        <mat-header-cell *matHeaderCellDef [ngClass]=\"'tbl-col-width-per-6'\">\r\n                          <mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n                            [checked]=\"selection.hasValue() && isAllSelected()\"\r\n                            [indeterminate]=\"selection.hasValue() && !isAllSelected()\" [ngClass]=\"'tbl-checkbox'\">\r\n                          </mat-checkbox>\r\n                        </mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let row\" [ngClass]=\"'tbl-col-width-per-6'\">\r\n                          <mat-checkbox (click)=\"$event.stopPropagation()\"\r\n                            (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\"\r\n                            [ngClass]=\"'tbl-checkbox'\">\r\n                          </mat-checkbox>\r\n                        </mat-cell>\r\n                      </ng-container>\r\n                      <!-- ID Column -->\r\n                      <ng-container matColumnDef=\"id\">\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header>Id\r\n                        </mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let row\">{{row.id}}</mat-cell>\r\n                      </ng-container>\r\n                      <ng-container matColumnDef=\"img\">\r\n                        <mat-header-cell mat-header-cell *matHeaderCellDef [ngClass]=\"'tbl-col-width-per-6'\"> Image\r\n                        </mat-header-cell>\r\n                        <mat-cell mat-cell *matCellDef=\"let row\" class=\"table-img tbl-col-width-per-6\"> <img\r\n                            [src]=\"row.img\" />\r\n                        </mat-cell>\r\n                      </ng-container>\r\n                      <ng-container matColumnDef=\"name\">\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header>Name\r\n                        </mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let row\"> {{row.name}}\r\n                        </mat-cell>\r\n                      </ng-container>\r\n                      <ng-container matColumnDef=\"mobile\">\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header>Mobile\r\n                        </mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let row\"> {{row.mobile}}\r\n                        </mat-cell>\r\n                      </ng-container>\r\n                      <ng-container matColumnDef=\"email\">\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header>Email\r\n                        </mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let row\"> {{row.email}}\r\n                        </mat-cell>\r\n                      </ng-container>\r\n                      <ng-container matColumnDef=\"birthDate\">\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header>Birth Date\r\n                        </mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let row\">\r\n                          {{row.birthDate | date: 'MM/dd/yyyy'}}</mat-cell>\r\n                      </ng-container>\r\n                      <ng-container matColumnDef=\"address\">\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header>Address\r\n                        </mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let row\" class=\"column-nowrap\"> {{row.address}}\r\n                        </mat-cell>\r\n                      </ng-container>\r\n                      <ng-container matColumnDef=\"note\">\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header>Note\r\n                        </mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let row\"> {{row.note}}\r\n                        </mat-cell>\r\n                      </ng-container>\r\n                      <!-- actions -->\r\n                      <ng-container matColumnDef=\"actions\">\r\n                        <mat-header-cell class=\"pl-3 tbl-col-width-per-10\" *matHeaderCellDef>Actions\r\n                        </mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let row; let i=index;\" class=\"pl-3 tbl-col-width-per-10\">\r\n                          <button mat-icon-button [matMenuTriggerFor]=\"menu\" (click)=\"$event.stopPropagation()\">\r\n                            <mat-icon>more_vert</mat-icon>\r\n                          </button>\r\n                          <mat-menu #menu=\"matMenu\">\r\n                            <button mat-menu-item (click)=\"editCall(row)\">\r\n                              <i class=\"material-icons-two-tone align-middle msr-2\">create</i>\r\n                              <span>Edit Contact</span>\r\n                            </button>\r\n                            <button mat-menu-item (click)=\"deleteItem(row)\">\r\n                              <i class=\"material-icons-two-tone align-middle msr-2\">delete_forever</i>\r\n                              <span>Delete Contact</span>\r\n                            </button>\r\n                          </mat-menu>\r\n                        </mat-cell>\r\n                      </ng-container>\r\n\r\n                      <mat-header-row *matHeaderRowDef=\"displayedColumns\">\r\n                      </mat-header-row>\r\n                      <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"detailsCall(row)\"\r\n                        [style.cursor]=\"'pointer'\" matRipple>\r\n                      </mat-row>\r\n                    </mat-table>\r\n                    <!-- Loading spinner -->\r\n                    <div *ngIf=\"exampleDatabase.isTblLoading\" class=\"tbl-spinner\">\r\n                      <mat-progress-spinner color=\"primary\" [diameter]=\"40\" mode=\"indeterminate\">\r\n                      </mat-progress-spinner>\r\n                    </div>\r\n                    <div *ngIf=\"!exampleDatabase.isTblLoading\" class=\"no-results\"\r\n                      [style.display]=\"dataSource.renderedData.length == 0 ? '' : 'none'\">\r\n                      No results\r\n                    </div>\r\n                    <mat-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"10\"\r\n                      [pageSizeOptions]=\"[5, 10, 25, 100]\">\r\n                    </mat-paginator>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ })

}]);
//# sourceMappingURL=contacts-contacts-module-es2015.js.map