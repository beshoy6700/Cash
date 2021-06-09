(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-authentication-module"],{

/***/ "1HOj":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/signin/signin.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-container\">\r\n  <div class=\"row auth-main\">\r\n    <div class=\"col-sm-6 px-0 d-none d-sm-block\">\r\n      <div class=\"left-img\" style=\"background-image: url(assets/images/pages/bg-01.png);\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-6 auth-form-section\">\r\n      <div class=\"form-section\">\r\n        <div class=\"auth-wrapper\">\r\n          <h2 class=\"welcome-msg\"> كاش للتمويل متناهي الصغر </h2>\r\n          <br>\r\n          <br>\r\n          <!--<p class=\"auth-signup-text text-muted\">Need an account?<a routerLink=\"/authentication/signup\"\r\n              class=\"sign-up-link\">Sign Up\r\n            </a></p>-->\r\n          <!--<div class=\"d-flex justify-content-between lbl-alert mb-3\">\r\n            <div>\r\n              <button mat-raised-button color=\"primary\" type=\"button\" (click)=\"adminSet();\">Admin</button>\r\n            </div>\r\n            <div>\r\n              <button mat-raised-button color=\"accent\" type=\"button\" (click)=\"doctorSet();\">Doctor</button>\r\n            </div>\r\n            <div>\r\n              <button mat-raised-button color=\"warn\" type=\"button\" (click)=\"patientSet();\">Patient</button>\r\n            </div>\r\n          </div>-->\r\n          <h2 class=\"login-title\">تسجيل الدخول</h2>\r\n          <form class=\"validate-form\" [formGroup]=\"authForm\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"row\">\r\n              <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n                <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                  <mat-label>اسم المستخدم</mat-label>\r\n                  <input matInput formControlName=\"username\" />\r\n                  <mat-icon matSuffix>face</mat-icon>\r\n                  <mat-error *ngIf=\"authForm.get('username').hasError('required')\">\r\n                    اسم المستخدم مطلوب\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-xl-12col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n                <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                  <mat-label>كلمة المرور</mat-label>\r\n                  <input matInput [type]=\"hide ? 'password' : 'text'\" formControlName=\"password\">\r\n                  <a class=\"show-pwd-icon\" href=\"#\" onClick=\"return false;\" matSuffix (click)=\"hide = !hide\"\r\n                    [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n                    <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                  </a>\r\n                  <mat-error *ngIf=\"authForm.get('password').hasError('required')\">\r\n                    الكلمة المرور مطلوبة\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n            <div class=\"d-flex justify-content-between align-items-center mb-5\">\r\n              <div class=\"form-check\">\r\n                <label class=\"form-check-label\">\r\n                  <input class=\"form-check-input\" type=\"checkbox\" value=\"\"> تذكرني\r\n                  <span class=\"form-check-sign\">\r\n                    <span class=\"check\"></span>\r\n                  </span>\r\n                </label>\r\n              </div>\r\n              <a class=\"txt1\" routerLink=\"/authentication/forgot-password\">تذكر كلمة المرور</a>\r\n            </div>\r\n            <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\r\n            <div class=\"container-auth-form-btn\">\r\n              <mat-spinner-button class=\"auth-form-btn\" [options]=\"spinnerButtonOptions\" [disabled]=\"!authForm.valid \"\r\n                type=\"submit\">\r\n              </mat-spinner-button>\r\n            </div>\r\n          </form>\r\n        <!--  <h6 class=\"social-login-title\">OR</h6>-->\r\n          <!--<ul class=\"list-unstyled social-icon mb-0 mt-3\">\r\n            <li class=\"list-inline-item\"><a href=\"javascript:void(0)\" class=\"rounded\">\r\n                <i class=\"fab fa-google\"></i>\r\n              </a></li>\r\n            <li class=\"list-inline-item\"><a href=\"javascript:void(0)\" class=\"rounded flex-c-m\">\r\n                <i class=\"fab fa-facebook-f\"></i>\r\n              </a></li>\r\n            <li class=\"list-inline-item\"><a href=\"javascript:void(0)\" class=\"rounded\">\r\n                <i class=\"fab fa-twitter\"></i>\r\n              </a></li>\r\n            <li class=\"list-inline-item\"><a href=\"javascript:void(0)\" class=\"rounded\">\r\n                <i class=\"fab fa-linkedin-in\"></i>\r\n              </a></li>\r\n          </ul>-->\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "1W5f":
/*!***********************************************************!*\
  !*** ./src/app/authentication/locked/locked.component.ts ***!
  \***********************************************************/
/*! exports provided: LockedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockedComponent", function() { return LockedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_locked_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./locked.component.html */ "eJJf");
/* harmony import */ var _locked_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locked.component.scss */ "Ri1z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/service/auth.service */ "KDUW");
/* harmony import */ var src_app_core_models_role__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/models/role */ "0HZm");








let LockedComponent = class LockedComponent {
    constructor(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.submitted = false;
        this.hide = true;
    }
    ngOnInit() {
        this.authForm = this.formBuilder.group({
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
        this.userImg = this.authService.currentUserValue.image;
        this.userFullName =
            this.authService.currentUserValue.name;
    }
    get f() {
        return this.authForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.authForm.invalid) {
            return;
        }
        else {
            const role = this.authService.currentUserValue.role;
            if (role === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_7__["Role"].All || role === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_7__["Role"].Admin) {
                this.router.navigate(["/admin/dashboard/main"]);
            }
            else if (role === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_7__["Role"].Doctor) {
                this.router.navigate(["/doctor/dashboard"]);
            }
            else if (role === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_7__["Role"].Patient) {
                this.router.navigate(["/patient/dashboard"]);
            }
            else {
                this.router.navigate(["/authentication/signin"]);
            }
        }
    }
};
LockedComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
LockedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-locked",
        template: _raw_loader_locked_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_locked_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LockedComponent);



/***/ }),

/***/ "LamZ":
/*!*************************************************************!*\
  !*** ./src/app/authentication/page500/page500.component.ts ***!
  \*************************************************************/
/*! exports provided: Page500Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page500Component", function() { return Page500Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_page500_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./page500.component.html */ "mQbi");
/* harmony import */ var _page500_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page500.component.scss */ "qpfp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let Page500Component = class Page500Component {
    constructor() { }
    ngOnInit() { }
};
Page500Component.ctorParameters = () => [];
Page500Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-page500",
        template: _raw_loader_page500_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_page500_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Page500Component);



/***/ }),

/***/ "OpKh":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication-routing.module */ "ionX");
/* harmony import */ var _page500_page500_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page500/page500.component */ "LamZ");
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page404/page404.component */ "21P8");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signin/signin.component */ "R9+F");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/signup.component */ "umax");
/* harmony import */ var _locked_locked_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./locked/locked.component */ "1W5f");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "xTco");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var mat_progress_buttons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! mat-progress-buttons */ "XfUL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "bTqV");


















let AuthenticationModule = class AuthenticationModule {
};
AuthenticationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _page500_page500_component__WEBPACK_IMPORTED_MODULE_5__["Page500Component"],
            _page404_page404_component__WEBPACK_IMPORTED_MODULE_6__["Page404Component"],
            _signin_signin_component__WEBPACK_IMPORTED_MODULE_7__["SigninComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
            _locked_locked_component__WEBPACK_IMPORTED_MODULE_9__["LockedComponent"],
            _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_10__["ForgotPasswordComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _authentication_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthenticationRoutingModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
            mat_progress_buttons__WEBPACK_IMPORTED_MODULE_15__["MatProgressButtonsModule"],
        ],
    })
], AuthenticationModule);



/***/ }),

/***/ "R9+F":
/*!***********************************************************!*\
  !*** ./src/app/authentication/signin/signin.component.ts ***!
  \***********************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_signin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./signin.component.html */ "1HOj");
/* harmony import */ var _signin_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin.component.scss */ "yclH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/service/auth.service */ "KDUW");
/* harmony import */ var src_app_core_models_role__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/models/role */ "0HZm");








let SigninComponent = class SigninComponent {
    constructor(formBuilder, route, router, authService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.submitted = false;
        this.error = "";
        this.hide = true;
        this.spinnerButtonOptions = {
            active: false,
            text: "Login",
            spinnerSize: 18,
            raised: true,
            stroked: false,
            buttonColor: "primary",
            spinnerColor: "accent",
            fullWidth: false,
            disabled: false,
            mode: "indeterminate",
            buttonIcon: {
                fontIcon: "favorite",
            },
        };
    }
    ngOnInit() {
        this.authForm = this.formBuilder.group({
            username: ["besho", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            password: ["123456789", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
    }
    get f() {
        return this.authForm.controls;
    }
    adminSet() {
        this.authForm.get("username").setValue("besho");
        this.authForm.get("password").setValue("123456789");
    }
    doctorSet() {
        this.authForm.get("username").setValue("doctor@hospital.org");
        this.authForm.get("password").setValue("doctor@123");
    }
    patientSet() {
        this.authForm.get("username").setValue("patient@hospital.org");
        this.authForm.get("password").setValue("patient@123");
    }
    onSubmit() {
        this.submitted = true;
        this.spinnerButtonOptions.active = true;
        this.error = "";
        if (this.authForm.invalid) {
            this.error = "يوجد خطأ في اسم المستخدم او كلمة المرور";
            return;
        }
        else {
            this.authService
                .login(this.f.username.value, this.f.password.value)
                .subscribe((res) => {
                if (res) {
                    setTimeout(() => {
                        const role = this.authService.currentUserValue.role;
                        if (role === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_7__["Role"].All || role === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_7__["Role"].Admin) {
                            this.router.navigate(["/admin/dashboard/main"]);
                        }
                        else if (role === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_7__["Role"].Doctor) {
                            this.router.navigate(["/doctor/dashboard"]);
                        }
                        else if (role === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_7__["Role"].Patient) {
                            this.router.navigate(["/patient/dashboard"]);
                        }
                        else {
                            this.router.navigate(["/authentication/signin"]);
                        }
                        this.spinnerButtonOptions.active = false;
                    }, 1000);
                }
                else {
                    this.error = "خطأ في تسجيل الدخول";
                }
            }, (error) => {
                this.error = error;
                this.submitted = false;
            });
        }
    }
};
SigninComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
SigninComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-signin",
        template: _raw_loader_signin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signin_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SigninComponent);



/***/ }),

/***/ "Ri1z":
/*!*************************************************************!*\
  !*** ./src/app/authentication/locked/locked.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2NrZWQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "WjYc":
/*!*******************************************************************************!*\
  !*** ./src/app/authentication/forgot-password/forgot-password.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "dZao":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/forgot-password/forgot-password.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-container\">\r\n  <div class=\"row auth-main\">\r\n    <div class=\"col-sm-6 px-0 d-none d-sm-block\">\r\n      <div class=\"left-img\" style=\"background-image: url(assets/images/pages/bg-03.png);\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-6 auth-form-section\">\r\n      <div class=\"form-section\">\r\n        <div class=\"auth-wrapper\">\r\n          <h2 class=\"welcome-msg\"> Reset Password </h2>\r\n          <p class=\"auth-signup-text text-muted\">Let Us Help You</p>\r\n          <form class=\"validate-form\" [formGroup]=\"authForm\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"row\">\r\n              <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n                <span class=\"error-subheader2 p-t-20 p-b-15\">\r\n                  Enter your registered email address.\r\n                </span>\r\n                <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                  <mat-label>Email</mat-label>\r\n                  <input matInput formControlName=\"email\" required>\r\n                  <mat-icon matSuffix>mail</mat-icon>\r\n                  <mat-error *ngIf=\"authForm.get('email').hasError('required') || authForm.get('email').touched\">\r\n                    Please enter a valid email address\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n            <div class=\"container-auth-form-btn mt-5\">\r\n              <button mat-flat-button color=\"primary\" class=\"auth-form-btn\" [disabled]=\"!authForm.valid \" type=\"submit\">\r\n                Reset My Password\r\n              </button>\r\n            </div>\r\n            <div class=\"w-full p-t-25 text-center\">\r\n              <div>\r\n                <a routerLink=\"/authentication/signin\" class=\"txt1\">\r\n                  Login?\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "eJJf":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/locked/locked.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-container\">\r\n  <div class=\"row auth-main\">\r\n    <div class=\"col-sm-6 px-0 d-none d-sm-block\">\r\n      <div class=\"left-img\" style=\"background-image: url(assets/images/pages/bg-01.png);\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-6 auth-form-section\">\r\n      <div class=\"form-section\">\r\n        <div class=\"auth-wrapper\">\r\n          <form class=\"validate-form\" [formGroup]=\"authForm\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"auth-locked\">\r\n              <div class=\"image\">\r\n                <img src={{userImg}} alt=\"User\">\r\n              </div>\r\n            </div>\r\n            <span class=\"auth-locked-title p-b-34 p-t-27\">\r\n              {{userFullName}}\r\n            </span>\r\n            <div class=\"text-center\">\r\n              <p class=\"txt1 p-b-20\">\r\n                Locked\r\n              </p>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n                <span class=\"error-subheader2 p-t-20 p-b-15\">\r\n                  Enter your password here.\r\n                </span>\r\n                <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                  <mat-label>Password</mat-label>\r\n                  <input matInput formControlName=\"password\" [type]=\"hide ? 'password' : 'text'\" required>\r\n                  <mat-icon matSuffix (click)=\"hide = !hide\">\r\n                    {{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                  <mat-error *ngIf=\"authForm.get('password').hasError('required')\">\r\n                    Password is required\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n            <div class=\"container-auth-form-btn mt-5\">\r\n              <button mat-flat-button color=\"primary\" class=\"auth-form-btn\" [disabled]=\"!authForm.valid \" type=\"submit\">\r\n                Reset My Password\r\n              </button>\r\n            </div>\r\n            <div class=\"w-full p-t-15 p-b-15 text-center\">\r\n              <div>\r\n                <a routerLink=\"/authentication/signin\" class=\"txt1\">\r\n                  Need Help?\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "ionX":
/*!*****************************************************************!*\
  !*** ./src/app/authentication/authentication-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AuthenticationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function() { return AuthenticationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin/signin.component */ "R9+F");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "umax");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "xTco");
/* harmony import */ var _locked_locked_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locked/locked.component */ "1W5f");
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page404/page404.component */ "21P8");
/* harmony import */ var _page500_page500_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page500/page500.component */ "LamZ");









const routes = [
    {
        path: "",
        redirectTo: "signin",
        pathMatch: "full",
    },
    {
        path: "signin",
        component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"],
    },
    {
        path: "signup",
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"],
    },
    {
        path: "forgot-password",
        component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordComponent"],
    },
    {
        path: "locked",
        component: _locked_locked_component__WEBPACK_IMPORTED_MODULE_6__["LockedComponent"],
    },
    {
        path: "page404",
        component: _page404_page404_component__WEBPACK_IMPORTED_MODULE_7__["Page404Component"],
    },
    {
        path: "page500",
        component: _page500_page500_component__WEBPACK_IMPORTED_MODULE_8__["Page500Component"],
    },
];
let AuthenticationRoutingModule = class AuthenticationRoutingModule {
};
AuthenticationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AuthenticationRoutingModule);



/***/ }),

/***/ "mQbi":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/page500/page500.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-container\">\r\n  <div class=\"row auth-main\">\r\n    <div class=\"col-sm-6 px-0 d-none d-sm-block\">\r\n      <div class=\"left-img\" style=\"background-image: url(assets/images/pages/bg-05.png);\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-6 auth-form-section\">\r\n      <div class=\"form-section\">\r\n        <div class=\"auth-wrapper\">\r\n          <form>\r\n            <span class=\"error-header p-b-45\">\r\n              500\r\n            </span>\r\n            <span class=\"error-subheader2 p-b-5\">\r\n              Oops, Something went wrong. Please try after some times.\r\n            </span>\r\n            <div class=\"container-auth-form-btn mt-5\">\r\n              <button mat-flat-button color=\"primary\" class=\"auth-form-btn\" type=\"submit\">\r\n                Go To Home Page\r\n              </button>\r\n            </div>\r\n            <div class=\"w-full p-t-15 p-b-15 text-center\">\r\n              <div>\r\n                <a routerLink=\"/authentication/signin\" class=\"txt1\">\r\n                  Need Help?\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "py0i":
/*!*************************************************************!*\
  !*** ./src/app/authentication/signup/signup.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "qpfp":
/*!***************************************************************!*\
  !*** ./src/app/authentication/page500/page500.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlNTAwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "umax":
/*!***********************************************************!*\
  !*** ./src/app/authentication/signup/signup.component.ts ***!
  \***********************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./signup.component.html */ "yfau");
/* harmony import */ var _signup_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.component.scss */ "py0i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






let SignupComponent = class SignupComponent {
    constructor(formBuilder, route, router) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.submitted = false;
        this.hide = true;
        this.chide = true;
    }
    ngOnInit() {
        this.authForm = this.formBuilder.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            email: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5)],
            ],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            cpassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
    }
    get f() {
        return this.authForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.authForm.invalid) {
            return;
        }
        else {
            this.router.navigate(["/admin/dashboard/main"]);
        }
    }
};
SignupComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SignupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-signup",
        template: _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signup_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SignupComponent);



/***/ }),

/***/ "xTco":
/*!*****************************************************************************!*\
  !*** ./src/app/authentication/forgot-password/forgot-password.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_forgot_password_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./forgot-password.component.html */ "dZao");
/* harmony import */ var _forgot_password_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password.component.scss */ "WjYc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(formBuilder, route, router) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.submitted = false;
    }
    ngOnInit() {
        this.authForm = this.formBuilder.group({
            email: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5)],
            ],
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
    }
    get f() {
        return this.authForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.authForm.invalid) {
            return;
        }
        else {
            this.router.navigate(["/dashboard/main"]);
        }
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ForgotPasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-forgot-password",
        template: _raw_loader_forgot_password_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forgot_password_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ForgotPasswordComponent);



/***/ }),

/***/ "yclH":
/*!*************************************************************!*\
  !*** ./src/app/authentication/signin/signin.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduaW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "yfau":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/signup/signup.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-container\">\r\n  <div class=\"row auth-main\">\r\n    <div class=\"col-sm-6 px-0 d-none d-sm-block\">\r\n      <div class=\"left-img\" style=\"background-image: url(assets/images/pages/bg-02.png);\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-6 auth-form-section\">\r\n      <div class=\"form-section\">\r\n        <div class=\"auth-wrapper\">\r\n          <h2 class=\"welcome-msg\"> Sign Up </h2>\r\n          <p class=\"auth-signup-text text-muted\">Enter details to create your account</p>\r\n          <form class=\"validate-form\" [formGroup]=\"authForm\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"row\">\r\n              <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n                <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                  <mat-label>Username</mat-label>\r\n                  <input matInput formControlName=\"username\" required>\r\n                  <mat-icon matSuffix>face</mat-icon>\r\n                  <mat-error *ngIf=\"authForm.get('username').hasError('required')\">\r\n                    Username is required\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-xl-12col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n                <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                  <mat-label>Email</mat-label>\r\n                  <input matInput formControlName=\"email\" required>\r\n                  <mat-icon matSuffix>mail</mat-icon>\r\n                  <mat-error *ngIf=\"authForm.get('email').hasError('required') || authForm.get('email').touched\">\r\n                    Please enter a valid email address\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-xl-12col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n                <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                  <mat-label>Password</mat-label>\r\n                  <input matInput formControlName=\"password\" [type]=\"hide ? 'password' : 'text'\" required>\r\n                  <mat-icon matSuffix (click)=\"hide = !hide\">\r\n                    {{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                  <mat-error *ngIf=\"authForm.get('password').hasError('required')\">\r\n                    Password is required\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-xl-12col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n                <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                  <mat-label>Confirm Password</mat-label>\r\n                  <input matInput formControlName=\"cpassword\" [type]=\"chide ? 'password' : 'text'\" required>\r\n                  <mat-icon matSuffix (click)=\"chide = !chide\">\r\n                    {{chide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                  <mat-error *ngIf=\"authForm.get('cpassword').hasError('required')\">\r\n                    Confirm Password is required\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n            <div class=\"flex-sb-m w-full  p-b-20\">\r\n              <div>\r\n                <span>Already Registered? <a routerLink=\"/authentication/signin\">\r\n                    Login\r\n                  </a></span>\r\n              </div>\r\n            </div>\r\n            <div class=\"container-auth-form-btn\">\r\n              <button mat-flat-button color=\"primary\" class=\"auth-form-btn\" [disabled]=\"!authForm.valid \" type=\"submit\">\r\n                Register\r\n              </button>\r\n            </div>\r\n          </form>\r\n          <h6 class=\"social-login-title\">OR</h6>\r\n          <ul class=\"list-unstyled social-icon mb-0 mt-3\">\r\n            <li class=\"list-inline-item\"><a href=\"javascript:void(0)\" class=\"rounded\">\r\n                <i class=\"fab fa-google\"></i>\r\n              </a></li>\r\n            <li class=\"list-inline-item\"><a href=\"javascript:void(0)\" class=\"rounded flex-c-m\">\r\n                <i class=\"fab fa-facebook-f\"></i>\r\n              </a></li>\r\n            <li class=\"list-inline-item\"><a href=\"javascript:void(0)\" class=\"rounded\">\r\n                <i class=\"fab fa-twitter\"></i>\r\n              </a></li>\r\n            <li class=\"list-inline-item\"><a href=\"javascript:void(0)\" class=\"rounded\">\r\n                <i class=\"fab fa-linkedin-in\"></i>\r\n              </a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n");

/***/ })

}]);
//# sourceMappingURL=authentication-authentication-module-es2015.js.map