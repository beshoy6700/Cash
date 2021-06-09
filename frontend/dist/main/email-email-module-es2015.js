(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["email-email-module"],{

/***/ "APMK":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/email/read-mail/read-mail.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">View Mail</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a href=\"#\" onClick=\"return false;\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-2\">\r\n              <a href=\"#\" onClick=\"return false;\">Email</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">View Mail</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-3\">\r\n        <div class=\"card\">\r\n          <div class=\"body\">\r\n            <div id=\"mail-nav\">\r\n              <button type=\"button\" class=\"btn btn-success waves-effect m-b-15\">COMPOSE</button>\r\n              <ul class=\"\" id=\"mail-folders\">\r\n                <li class=\"active\">\r\n                  <a href=\"inbox.html\" title=\"Inbox\">Inbox\r\n                    <span class=\"badge bg-orange\">6</span>\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\" title=\"Sent\">Sent</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\" title=\"Draft\">Draft</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\" title=\"Bin\">Bin</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\" title=\"Important\">Important</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\" title=\"Starred\">Starred</a>\r\n                </li>\r\n              </ul>\r\n              <h5 class=\"b-b p-10 text-strong\">Labels</h5>\r\n              <ul class=\"\" id=\"mail-labels\">\r\n                <li>\r\n                  <a href=\"javascript:;\">\r\n                    <i class=\"material-icons col-red\">local_offer</i>Family</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\">\r\n                    <i class=\"material-icons col-blue\">local_offer</i>Work</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\">\r\n                    <i class=\"material-icons col-orange\">local_offer</i>Shop</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\">\r\n                    <i class=\"material-icons col-cyan\">local_offer</i>Themeforest</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\">\r\n                    <i class=\"material-icons col-blue\">local_offer</i>Google</a>\r\n                </li>\r\n              </ul>\r\n              <h5 class=\"b-b p-10 text-strong\">Online</h5>\r\n              <ul class=\"online-user\" id=\"online-offline\">\r\n                <li>\r\n                  <a href=\"javascript:;\">\r\n                    <i class=\"material-icons col-green\" title=\"Online\">brightness_1</i>Sachin</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\">\r\n                    <i class=\"material-icons col-indigo\" title=\"Off Line\">brightness_1</i>John\r\n                    Smith\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\">\r\n                    <i class=\"material-icons col-orange\" title=\"Away\">brightness_1</i>Askay</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\">\r\n                    <i class=\"material-icons col-indigo\" title=\"Off Line\">brightness_1</i>Dhavan</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\">\r\n                    <i class=\"material-icons col-indigo\" title=\"Off Line\">brightness_1</i>Lee</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-12 col-sm-12 col-md-9 col-lg-9\">\r\n        <div class=\"card\">\r\n          <div class=\"boxs mail_listing\">\r\n            <div class=\"inbox-body no-pad\">\r\n              <section class=\"mail-list\">\r\n                <div class=\"mail-sender\">\r\n                  <div class=\"mail-heading\">\r\n                    <h4 class=\"vew-mail-header\">\r\n                      <b>Hi Dear, How are you?</b>\r\n                    </h4>\r\n                  </div>\r\n                  <hr>\r\n                  <div class=\"media\">\r\n                    <a href=\"#\" class=\"table-img m-r-15\">\r\n                      <img alt=\"\" src=\"assets/images/user/user2.jpg\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                      <span class=\"date pull-right\">4:15AM 04 April 2017</span>\r\n                      <h4 class=\"text-primary\">Sarah Smith</h4>\r\n                      <small class=\"text-muted\">From: sarah@example.com</small>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"view-mail\">\r\n                  <p>Donec ultrices faucibus rutrum. Phasellus sodales vulputate urna, vel\r\n                    accumsan augue\r\n                    egestas ac. Donec vitae leo at sem lobortis porttitor eu consequat risus.\r\n                    Mauris\r\n                    sed congue orci. Donec ultrices faucibus rutrum. Phasellus sodales\r\n                    vulputate urna,\r\n                    vel accumsan augue egestas ac. Donec vitae leo at sem lobortis porttitor eu\r\n                    consequat\r\n                    risus. Mauris sed congue orci. Donec ultrices faucibus rutrum. Phasellus\r\n                    sodales\r\n                    vulputate urna, vel accumsan augue egestas ac. Donec vitae leo at sem\r\n                    lobortis porttitor\r\n                    eu consequat risus. Mauris sed congue orci.</p>\r\n                  <p>\r\n                    Porttitor eu consequat risus.\r\n                    <a href=\"#\">Mauris sed congue orci. Donec ultrices faucibus rutrum</a>.\r\n                    Phasellus sodales vulputate\r\n                    urna, vel accumsan augue egestas ac. Donec vitae leo at sem lobortis\r\n                    porttitor eu\r\n                    consequat risus. Mauris sed congue orci. Donec ultrices faucibus rutrum.\r\n                    Phasellus\r\n                    sodales vulputate urna, vel accumsan augue egestas ac. Donec vitae leo at\r\n                    sem lobortis\r\n                    porttitor eu consequat risus. Mauris sed congue orci.\r\n                  </p>\r\n                  <p>\r\n                    Sodales\r\n                    <a href=\"#\">vulputate urna, vel accumsan augue egestas ac</a>. Donec vitae\r\n                    leo at sem lobortis\r\n                    porttitor eu consequat risus. Mauris sed congue orci. Donec ultrices\r\n                    faucibus rutrum.\r\n                    Phasellus sodales vulputate urna, vel accumsan augue egestas ac. Donec\r\n                    vitae leo\r\n                    at sem lobortis porttitor eu consequat risus. Mauris sed congue orci.\r\n                  </p>\r\n                </div>\r\n                <div class=\"attachment-mail\">\r\n                  <p>\r\n                    <span>\r\n                      <i class=\"fa fa-paperclip\"></i> 3 attachments — </span>\r\n                    <a href=\"#\">Download all attachments</a> |\r\n                    <a href=\"#\">View all images</a>\r\n                  </p>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-2\">\r\n                      <a href=\"#\">\r\n                        <img class=\"img-thumbnail img-responsive\" alt=\"attachment\" src=\"assets/images/user/usrbig2.jpg\">\r\n                      </a>\r\n                      <a class=\"name\" href=\"#\"> IMG_001.jpg\r\n                        <span>20KB</span>\r\n                      </a>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                      <a href=\"#\">\r\n                        <img class=\"img-thumbnail img-responsive\" alt=\"attachment\" src=\"assets/images/user/usrbig1.jpg\">\r\n                      </a>\r\n                      <a class=\"name\" href=\"#\"> IMG_002.jpg\r\n                        <span>22KB</span>\r\n                      </a>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                      <a href=\"#\">\r\n                        <img class=\"img-thumbnail img-responsive\" alt=\"attachment\" src=\"assets/images/user/usrbig3.jpg\">\r\n                      </a>\r\n                      <a class=\"name\" href=\"#\"> IMG_003.jpg\r\n                        <span>28KB</span>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"replyBox m-t-20\">\r\n                  <p class=\"p-b-20\">click here to\r\n                    <a href=\"#\">Reply</a> or\r\n                    <a href=\"#\">Forward</a>\r\n                  </p>\r\n                </div>\r\n              </section>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "B+D3":
/*!************************************************!*\
  !*** ./src/app/email/inbox/inbox.component.ts ***!
  \************************************************/
/*! exports provided: InboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxComponent", function() { return InboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inbox_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inbox.component.html */ "dMV5");
/* harmony import */ var _inbox_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inbox.component.scss */ "cKYo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let InboxComponent = class InboxComponent {
    constructor() { }
    ngOnInit() { }
};
InboxComponent.ctorParameters = () => [];
InboxComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-inbox",
        template: _raw_loader_inbox_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inbox_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InboxComponent);



/***/ }),

/***/ "BHJ8":
/*!****************************************************!*\
  !*** ./src/app/email/compose/compose.component.ts ***!
  \****************************************************/
/*! exports provided: ComposeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComposeComponent", function() { return ComposeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_compose_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./compose.component.html */ "t889");
/* harmony import */ var _compose_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compose.component.scss */ "d2mA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "+z1p");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__);





let ComposeComponent = class ComposeComponent {
    constructor() {
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__;
    }
};
ComposeComponent.ctorParameters = () => [];
ComposeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-compose",
        template: _raw_loader_compose_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_compose_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ComposeComponent);



/***/ }),

/***/ "GPS7":
/*!**********************************************************!*\
  !*** ./src/app/email/read-mail/read-mail.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWFkLW1haWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "IrIT":
/*!***************************************!*\
  !*** ./src/app/email/email.module.ts ***!
  \***************************************/
/*! exports provided: EmailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailModule", function() { return EmailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _email_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email-routing.module */ "m4Pl");
/* harmony import */ var _compose_compose_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compose/compose.component */ "BHJ8");
/* harmony import */ var _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inbox/inbox.component */ "B+D3");
/* harmony import */ var _read_mail_read_mail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./read-mail/read-mail.component */ "jsIf");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "zioG");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");













let EmailModule = class EmailModule {
};
EmailModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_compose_compose_component__WEBPACK_IMPORTED_MODULE_4__["ComposeComponent"], _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_5__["InboxComponent"], _read_mail_read_mail_component__WEBPACK_IMPORTED_MODULE_6__["ReadMailComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _email_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmailRoutingModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__["CKEditorModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
        ],
    })
], EmailModule);



/***/ }),

/***/ "cKYo":
/*!**************************************************!*\
  !*** ./src/app/email/inbox/inbox.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmJveC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "d2mA":
/*!******************************************************!*\
  !*** ./src/app/email/compose/compose.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .ck-editor__editable_inline {\n  min-height: 350px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb21wb3NlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRiIsImZpbGUiOiJjb21wb3NlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5jay1lZGl0b3JfX2VkaXRhYmxlX2lubGluZSB7XHJcbiAgbWluLWhlaWdodDogMzUwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "dMV5":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/email/inbox/inbox.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">Inbox</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a routerLink=\"/dashboard/main\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-2\">\r\n              <a href=\"#\" onClick=\"return false;\">Email</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">Inbox</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-3\">\r\n        <div class=\"card\">\r\n          <div class=\"body\">\r\n            <div id=\"mail-nav\">\r\n              <button type=\"button\" class=\"btn btn-success waves-effect m-b-15\">COMPOSE</button>\r\n              <ul class=\"\" id=\"mail-folders\">\r\n                <li class=\"active\">\r\n                  <a title=\"Inbox\">Inbox\r\n                    <span class=\"badge bg-orange\">6</span>\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\" title=\"Sent\">Sent</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\" title=\"Draft\">Draft</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\" title=\"Bin\">Bin</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\" title=\"Important\">Important</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\" title=\"Starred\">Starred</a>\r\n                </li>\r\n              </ul>\r\n              <h5 class=\"b-b p-10 text-strong\">Labels</h5>\r\n              <ul class=\"\" id=\"mail-labels\">\r\n                <li>\r\n                  <a href=\"javascript:;\">\r\n                    <i class=\"material-icons col-red\">local_offer</i>Family</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\">\r\n                    <i class=\"material-icons col-blue\">local_offer</i>Work</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\">\r\n                    <i class=\"material-icons col-orange\">local_offer</i>Shop</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\">\r\n                    <i class=\"material-icons col-cyan\">local_offer</i>Themeforest</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\">\r\n                    <i class=\"material-icons col-blue\">local_offer</i>Google</a>\r\n                </li>\r\n              </ul>\r\n              <h5 class=\"b-b p-10 text-strong\">Online</h5>\r\n              <ul class=\"online-user\" id=\"online-offline\">\r\n                <li>\r\n                  <a href=\"javascript:;\">\r\n                    <i class=\"material-icons col-green\" title=\"Online\">brightness_1</i>Sachin</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\">\r\n                    <i class=\"material-icons col-indigo\" title=\"Off Line\">brightness_1</i>John\r\n                    Smith\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\">\r\n                    <i class=\"material-icons col-orange\" title=\"Away\">brightness_1</i>Askay</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\">\r\n                    <i class=\"material-icons col-indigo\" title=\"Off Line\">brightness_1</i>Dhavan</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\">\r\n                    <i class=\"material-icons col-indigo\" title=\"Off Line\">brightness_1</i>Lee</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-12 col-sm-12 col-md-9 col-lg-9\">\r\n        <div class=\"card\">\r\n          <div class=\"boxs mail_listing\">\r\n            <div class=\"inbox-center table-responsive\">\r\n              <table class=\"table table-hover\">\r\n                <thead>\r\n                  <tr>\r\n                    <th class=\"text-center\">\r\n                      <mat-checkbox class=\"example-margin\"></mat-checkbox>\r\n                    </th>\r\n                    <th colspan=\"3\">\r\n                      <div class=\"inbox-header\">\r\n                        <div class=\"mail-option no-pad-left\">\r\n                          <div class=\"email-btn-group m-l-15\">\r\n                            <button mat-icon-button aria-label=\"Example icon-button with a heart icon\">\r\n                              <mat-icon>keyboard_return</mat-icon>\r\n                            </button>\r\n                            <button mat-icon-button aria-label=\"Example icon-button with a heart icon\">\r\n                              <mat-icon>archive</mat-icon>\r\n                            </button>\r\n                            <button mat-icon-button aria-label=\"Example icon-button with a heart icon\">\r\n                              <mat-icon>error</mat-icon>\r\n                            </button>\r\n                            <button mat-icon-button aria-label=\"Example icon-button with a heart icon\">\r\n                              <mat-icon>delete</mat-icon>\r\n                            </button>\r\n                            <button mat-icon-button aria-label=\"Example icon-button with a heart icon\">\r\n                              <mat-icon>folder</mat-icon>\r\n                            </button>\r\n                            <button mat-icon-button aria-label=\"Example icon-button with a heart icon\">\r\n                              <mat-icon>local_offer</mat-icon>\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </th>\r\n                    <th class=\"hidden-xs\" colspan=\"2\">\r\n                      <div class=\"pull-right\">\r\n                        <div class=\"email-btn-group m-l-15\">\r\n                          <button mat-icon-button aria-label=\"Example icon-button with a heart icon\">\r\n                            <mat-icon>navigate_before</mat-icon>\r\n                          </button>\r\n                          <button mat-icon-button aria-label=\"Example icon-button with a heart icon\">\r\n                            <mat-icon>navigate_next</mat-icon>\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr class=\"unread\">\r\n                    <td class=\"tbl-checkbox\">\r\n                      <mat-checkbox class=\"example-margin\"></mat-checkbox>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">\r\n                      <i class=\"material-icons\">star_border</i>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">Nelson Lane</td>\r\n                    <td class=\"max-texts\">\r\n                      <a routerLink=\"/email/read-mail\">\r\n                        <span class=\"badge col-blue shadow-style m-r-10\">Work</span>\r\n                        Lorem ipsum perspiciatis unde omnis iste natus</a>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">\r\n                      <i class=\"material-icons\">attach_file</i>\r\n                    </td>\r\n                    <td class=\"text-end\"> 12:30 PM </td>\r\n                  </tr>\r\n                  <tr class=\"unread\">\r\n                    <td class=\"tbl-checkbox\">\r\n                      <mat-checkbox class=\"example-margin\"></mat-checkbox>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">\r\n                      <i class=\"material-icons text-warning\">star</i>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">Kerry Mann</td>\r\n                    <td class=\"max-texts\">\r\n                      <a routerLink=\"/email/read-mail\">Lorem ipsum perspiciatis unde omnis iste natus</a>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">\r\n                      <i class=\"material-icons\">attach_file</i>\r\n                    </td>\r\n                    <td class=\"text-end\"> May 13 </td>\r\n                  </tr>\r\n                  <tr class=\"unread\">\r\n                    <td class=\"tbl-checkbox\">\r\n                      <mat-checkbox class=\"example-margin\"></mat-checkbox>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">\r\n                      <i class=\"material-icons\">star_border</i>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">Adam Peters</td>\r\n                    <td class=\"max-texts\">\r\n                      <a routerLink=\"/email/read-mail\">\r\n                        <span class=\"badge col-red shadow-style m-r-10\">Shopping</span>\r\n                        Lorem ipsum perspiciatis unde omnis</a>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">\r\n                      <i class=\"material-icons\">attach_file</i>\r\n                    </td>\r\n                    <td class=\"text-end\"> May 12 </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"tbl-checkbox\">\r\n                      <mat-checkbox class=\"example-margin\"></mat-checkbox>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">\r\n                      <i class=\"material-icons\">star_border</i>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">Lula Reese</td>\r\n                    <td class=\"max-texts\">\r\n                      <a routerLink=\"/email/read-mail\">\r\n                        <span class=\"badge col-cyan shadow-style m-r-10\">Family</span>\r\n                        Lorem ipsum perspiciatis unde omnis</a>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">\r\n                      <i class=\"material-icons\">attach_file</i>\r\n                    </td>\r\n                    <td class=\"text-end\"> May 12 </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"tbl-checkbox\">\r\n                      <mat-checkbox class=\"example-margin\"></mat-checkbox>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">\r\n                      <i class=\"material-icons\">star_border</i>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">Nelson Lane</td>\r\n                    <td class=\"max-texts\">\r\n                      <a routerLink=\"/email/read-mail\">\r\n                        <span class=\"badge col-orange shadow-style m-r-10\">Work</span>\r\n                        Lorem ipsum perspiciatis unde omnis iste natus</a>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">\r\n                      <i class=\"material-icons\">attach_file</i>\r\n                    </td>\r\n                    <td class=\"text-end\"> May 12 </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"tbl-checkbox\">\r\n                      <mat-checkbox class=\"example-margin\"></mat-checkbox>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">\r\n                      <i class=\"material-icons text-warning\">star</i>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">Kerry Mann</td>\r\n                    <td class=\"max-texts\">\r\n                      <a routerLink=\"/email/read-mail\">Lorem ipsum perspiciatis unde omnis iste natus</a>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">\r\n                      <i class=\"material-icons\">attach_file</i>\r\n                    </td>\r\n                    <td class=\"text-end\"> May 11 </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"tbl-checkbox\">\r\n                      <mat-checkbox class=\"example-margin\"></mat-checkbox>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">\r\n                      <i class=\"material-icons\">star_border</i>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">Adam Peters</td>\r\n                    <td class=\"max-texts\">\r\n                      <a routerLink=\"/email/read-mail\">\r\n                        <span class=\"badge col-purple shadow-style m-r-10\">Office</span>\r\n                        Lorem ipsum perspiciatis unde omnis iste natus</a>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">\r\n                      <i class=\"material-icons\">attach_file</i>\r\n                    </td>\r\n                    <td class=\"text-end\"> May 11 </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"tbl-checkbox\">\r\n                      <mat-checkbox class=\"example-margin\"></mat-checkbox>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">\r\n                      <i class=\"material-icons\">star_border</i>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">Lula Reese</td>\r\n                    <td class=\"max-texts\">\r\n                      <a routerLink=\"/email/read-mail\">\r\n                        <span class=\"badge col-orange shadow-style m-r-10\">Work</span>\r\n                        Lorem ipsum perspiciatis unde omnis iste natus</a>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">\r\n                      <i class=\"material-icons\">attach_file</i>\r\n                    </td>\r\n                    <td class=\"text-end\"> May 11 </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"tbl-checkbox\">\r\n                      <mat-checkbox class=\"example-margin\"></mat-checkbox>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">\r\n                      <i class=\"material-icons\">star_border</i>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">Nelson Lane</td>\r\n                    <td class=\"max-texts\">\r\n                      <a routerLink=\"/email/read-mail\">\r\n                        <span class=\"badge col-blue shadow-style m-r-10\">Work</span>\r\n                        Lorem ipsum perspiciatis unde omnis iste natus</a>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">\r\n                      <i class=\"material-icons\">attach_file</i>\r\n                    </td>\r\n                    <td class=\"text-end\"> May 10 </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"tbl-checkbox\">\r\n                      <mat-checkbox class=\"example-margin\"></mat-checkbox>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">\r\n                      <i class=\"material-icons text-warning\">star</i>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">Kerry Mann</td>\r\n                    <td class=\"max-texts\">\r\n                      <a routerLink=\"/email/read-mail\">Lorem ipsum perspiciatis unde omnis iste natus</a>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">\r\n                      <i class=\"material-icons\">attach_file</i>\r\n                    </td>\r\n                    <td class=\"text-end\"> May 10 </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"tbl-checkbox\">\r\n                      <mat-checkbox class=\"example-margin\"></mat-checkbox>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">\r\n                      <i class=\"material-icons\">star_border</i>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">Adam Peters</td>\r\n                    <td class=\"max-texts\">\r\n                      <a routerLink=\"/email/read-mail\">\r\n                        <span class=\"badge col-green shadow-style m-r-10\">Shopping</span>\r\n                        Lorem ipsum perspiciatis unde omnis</a>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">\r\n                      <i class=\"material-icons\">attach_file</i>\r\n                    </td>\r\n                    <td class=\"text-end\"> May 10 </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"tbl-checkbox\">\r\n                      <mat-checkbox class=\"example-margin\"></mat-checkbox>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">\r\n                      <i class=\"material-icons\">star_border</i>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">Lula Reese</td>\r\n                    <td class=\"max-texts\">\r\n                      <a routerLink=\"/email/read-mail\">\r\n                        <span class=\"badge col-red shadow-style m-r-10\">Work</span>\r\n                        Lorem ipsum perspiciatis unde omnis iste natus</a>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">\r\n                      <i class=\"material-icons\">attach_file</i>\r\n                    </td>\r\n                    <td class=\"text-end\"> May 09 </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"tbl-checkbox\">\r\n                      <mat-checkbox class=\"example-margin\"></mat-checkbox>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">\r\n                      <i class=\"material-icons\">star_border</i>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">Nelson Lane</td>\r\n                    <td class=\"max-texts\">\r\n                      <a routerLink=\"/email/read-mail\">\r\n                        <span class=\"badge col-cyan shadow-style m-r-10\">Work</span>\r\n                        Lorem ipsum perspiciatis unde omnis iste natus</a>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">\r\n                      <i class=\"material-icons\">attach_file</i>\r\n                    </td>\r\n                    <td class=\"text-end\"> May 09 </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"tbl-checkbox\">\r\n                      <mat-checkbox class=\"example-margin\"></mat-checkbox>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">\r\n                      <i class=\"material-icons text-warning\">star</i>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">Kerry Mann</td>\r\n                    <td class=\"max-texts\">\r\n                      <a routerLink=\"/email/read-mail\">Lorem ipsum perspiciatis unde omnis iste natus</a>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">\r\n                      <i class=\"material-icons\">attach_file</i>\r\n                    </td>\r\n                    <td class=\"text-end\"> May 09 </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"tbl-checkbox\">\r\n                      <mat-checkbox class=\"example-margin\"></mat-checkbox>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">\r\n                      <i class=\"material-icons\">star_border</i>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">Adam Peters</td>\r\n                    <td class=\"max-texts\">\r\n                      <a routerLink=\"/email/read-mail\">\r\n                        <span class=\"badge col-green shadow-style m-r-10\">Shopping</span>\r\n                        Lorem ipsum perspiciatis unde omnis</a>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">\r\n                      <i class=\"material-icons\">attach_file</i>\r\n                    </td>\r\n                    <td class=\"text-end\"> May 09 </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-7 \">\r\n                <p class=\"p-15\">Showing 1 - 15 of 200</p>\r\n              </div>\r\n              <div class=\"col-sm-5 text-end\">\r\n                <div class=\"pull-right\">\r\n                  <div class=\"email-btn-group m-l-15\">\r\n                    <button mat-icon-button aria-label=\"Example icon-button with a heart icon\">\r\n                      <mat-icon>navigate_before</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button aria-label=\"Example icon-button with a heart icon\">\r\n                      <mat-icon>navigate_next</mat-icon>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "jsIf":
/*!********************************************************!*\
  !*** ./src/app/email/read-mail/read-mail.component.ts ***!
  \********************************************************/
/*! exports provided: ReadMailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadMailComponent", function() { return ReadMailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_read_mail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./read-mail.component.html */ "APMK");
/* harmony import */ var _read_mail_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./read-mail.component.scss */ "GPS7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ReadMailComponent = class ReadMailComponent {
    constructor() { }
    ngOnInit() { }
};
ReadMailComponent.ctorParameters = () => [];
ReadMailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-read-mail",
        template: _raw_loader_read_mail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_read_mail_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ReadMailComponent);



/***/ }),

/***/ "m4Pl":
/*!***********************************************!*\
  !*** ./src/app/email/email-routing.module.ts ***!
  \***********************************************/
/*! exports provided: EmailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailRoutingModule", function() { return EmailRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inbox/inbox.component */ "B+D3");
/* harmony import */ var _compose_compose_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compose/compose.component */ "BHJ8");
/* harmony import */ var _read_mail_read_mail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./read-mail/read-mail.component */ "jsIf");






const routes = [
    {
        path: "inbox",
        component: _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_3__["InboxComponent"],
    },
    {
        path: "compose",
        component: _compose_compose_component__WEBPACK_IMPORTED_MODULE_4__["ComposeComponent"],
    },
    {
        path: "read-mail",
        component: _read_mail_read_mail_component__WEBPACK_IMPORTED_MODULE_5__["ReadMailComponent"],
    },
];
let EmailRoutingModule = class EmailRoutingModule {
};
EmailRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EmailRoutingModule);



/***/ }),

/***/ "t889":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/email/compose/compose.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">Compose</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a href=\"#\" onClick=\"return false;\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-2\">\r\n              <a href=\"#\" onClick=\"return false;\">Email</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">Compose</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-3\">\r\n        <div class=\"card\">\r\n          <div class=\"body\">\r\n            <div id=\"mail-nav\">\r\n              <button type=\"button\" class=\"btn btn-success waves-effect m-b-15\">COMPOSE</button>\r\n              <ul class=\"\" id=\"mail-folders\">\r\n                <li class=\"active\">\r\n                  <a href=\"inbox.html\" title=\"Inbox\">Inbox\r\n                    <span class=\"badge bg-orange\">6</span>\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\" title=\"Sent\">Sent</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\" title=\"Draft\">Draft</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\" title=\"Bin\">Bin</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\" title=\"Important\">Important</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\" title=\"Starred\">Starred</a>\r\n                </li>\r\n              </ul>\r\n              <h5 class=\"b-b p-10 text-strong\">Labels</h5>\r\n              <ul class=\"\" id=\"mail-labels\">\r\n                <li>\r\n                  <a href=\"javascript:;\">\r\n                    <i class=\"material-icons col-red\">local_offer</i>Family</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\">\r\n                    <i class=\"material-icons col-blue\">local_offer</i>Work</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\">\r\n                    <i class=\"material-icons col-orange\">local_offer</i>Shop</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\">\r\n                    <i class=\"material-icons col-cyan\">local_offer</i>Themeforest</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\">\r\n                    <i class=\"material-icons col-blue\">local_offer</i>Google</a>\r\n                </li>\r\n              </ul>\r\n              <h5 class=\"b-b p-10 text-strong\">Online</h5>\r\n              <ul class=\"online-user\" id=\"online-offline\">\r\n                <li>\r\n                  <a href=\"javascript:;\">\r\n                    <i class=\"material-icons col-green\" title=\"Online\">brightness_1</i>Sachin</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\">\r\n                    <i class=\"material-icons col-indigo\" title=\"Off Line\">brightness_1</i>John\r\n                    Smith\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\">\r\n                    <i class=\"material-icons col-orange\" title=\"Away\">brightness_1</i>Askay</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\">\r\n                    <i class=\"material-icons col-indigo\" title=\"Off Line\">brightness_1</i>Dhavan</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\">\r\n                    <i class=\"material-icons col-indigo\" title=\"Off Line\">brightness_1</i>Lee</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-12 col-sm-12 col-md-9 col-lg-9\">\r\n        <div class=\"card\">\r\n          <div class=\"boxs mail_listing\">\r\n            <div class=\"inbox-center table-responsive\">\r\n              <table class=\"table table-hover\">\r\n                <thead>\r\n                  <tr>\r\n                    <th colspan=\"1\">\r\n                      <div class=\"inbox-header\">\r\n                        Compose New Message\r\n                      </div>\r\n                    </th>\r\n                  </tr>\r\n                </thead>\r\n              </table>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-12\">\r\n                <form class=\"composeForm\">\r\n                  <div class=\"form-line\">\r\n                    <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                      <mat-label>TO</mat-label>\r\n                      <input matInput id=\"email_address\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"form-line\">\r\n                    <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                      <mat-label>Subject</mat-label>\r\n                      <input matInput id=\"subject\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <ckeditor [editor]=\"Editor\" data=\"<p>Hello, world!</p>\"></ckeditor>\r\n                  <div class=\"compose-editor m-t-20\">\r\n                    <div id=\"summernote\"></div>\r\n                    <input type=\"file\" class=\"default\" multiple>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n              <div class=\"col-lg-12\">\r\n                <div class=\"m-l-25 m-b-20\">\r\n                  <button mat-flat-button color=\"primary\" class=\"msr-2\">Send</button>\r\n                  <button mat-flat-button color=\"warn\">Discard</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ })

}]);
//# sourceMappingURL=email-email-module-es2015.js.map