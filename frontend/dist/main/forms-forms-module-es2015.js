(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-forms-module"],{

/***/ "0GeU":
/*!****************************************************************!*\
  !*** ./src/app/forms/form-controls/form-controls.component.ts ***!
  \****************************************************************/
/*! exports provided: MyErrorStateMatcher, FormControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlsComponent", function() { return FormControlsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_form_controls_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./form-controls.component.html */ "58cn");
/* harmony import */ var _form_controls_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-controls.component.sass */ "BmL2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control &&
            control.invalid &&
            (control.dirty || control.touched || isSubmitted));
    }
}
let FormControlsComponent = class FormControlsComponent {
    constructor(fb) {
        this.hideRequiredControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false);
        this.floatLabelControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("auto");
        // checkbox
        this.checked = false;
        this.indeterminate = false;
        this.labelPosition = "after";
        this.disabled = false;
        this.seasons = ["Winter", "Spring", "Summer", "Autumn"];
        // Date Picker
        this.startDate = new Date(1990, 0, 1);
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](new Date());
        this.serializedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](new Date().toISOString());
        this.foods = [
            { value: "steak-0", viewValue: "Steak" },
            { value: "pizza-1", viewValue: "Pizza" },
            { value: "tacos-2", viewValue: "Tacos" },
        ];
        this.cars = [
            { value: "volvo", viewValue: "Volvo" },
            { value: "saab", viewValue: "Saab" },
            { value: "mercedes", viewValue: "Mercedes" },
        ];
        this.animalControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
        this.selectFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
        this.animals = [
            { name: "Dog", sound: "Woof!" },
            { name: "Cat", sound: "Meow!" },
            { name: "Cow", sound: "Moo!" },
            { name: "Fox", sound: "Wa-pa-pa-pa-pa-pa-pow!" },
        ];
        this.disableSelect = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false);
        this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.toppingList = [
            "Extra cheese",
            "Mushroom",
            "Onion",
            "Pepperoni",
            "Sausage",
            "Tomato",
        ];
        this.pokemonControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.pokemonGroups = [
            {
                name: "Grass",
                pokemon: [
                    { value: "bulbasaur-0", viewValue: "Bulbasaur" },
                    { value: "oddish-1", viewValue: "Oddish" },
                    { value: "bellsprout-2", viewValue: "Bellsprout" },
                ],
            },
            {
                name: "Water",
                pokemon: [
                    { value: "squirtle-3", viewValue: "Squirtle" },
                    { value: "psyduck-4", viewValue: "Psyduck" },
                    { value: "horsea-5", viewValue: "Horsea" },
                ],
            },
            {
                name: "Fire",
                disabled: true,
                pokemon: [
                    { value: "charmander-6", viewValue: "Charmander" },
                    { value: "vulpix-7", viewValue: "Vulpix" },
                    { value: "flareon-8", viewValue: "Flareon" },
                ],
            },
            {
                name: "Psychic",
                pokemon: [
                    { value: "mew-9", viewValue: "Mew" },
                    { value: "mewtwo-10", viewValue: "Mewtwo" },
                ],
            },
        ];
        this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("valid", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("valid"),
        ]);
        this.matcher = new MyErrorStateMatcher();
        // Slide toggle
        this.color = "accent";
        this.myFilter = (d) => {
            const day = (d || new Date()).getDay();
            // Prevent Saturday and Sunday from being selected.
            return day !== 0 && day !== 6;
        };
        // Set the minimum to January 1st 5 years in the past and December 31st a year in the future.
        const currentYear = new Date().getFullYear();
        this.minDate = new Date(currentYear - 5, 0, 1);
        this.maxDate = new Date(currentYear + 1, 11, 31);
        this.labelForm = fb.group({
            hideRequired: this.hideRequiredControl,
        });
        this.fileUploadForm = fb.group({
            singleUpload: [""],
            removablefile: [""],
            multiplefile: [""],
        });
    }
    ngOnInit() { }
};
FormControlsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
FormControlsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-form-controls",
        template: _raw_loader_form_controls_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_form_controls_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FormControlsComponent);



/***/ }),

/***/ "0NeN":
/*!****************************************************!*\
  !*** ./src/app/forms/editors/editors.component.ts ***!
  \****************************************************/
/*! exports provided: EditorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorsComponent", function() { return EditorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_editors_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./editors.component.html */ "y91a");
/* harmony import */ var _editors_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editors.component.scss */ "4LWK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "+z1p");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__);





let EditorsComponent = class EditorsComponent {
    constructor() {
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__;
    }
    ngOnInit() { }
};
EditorsComponent.ctorParameters = () => [];
EditorsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-editors",
        template: _raw_loader_editors_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_editors_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditorsComponent);



/***/ }),

/***/ "0R0B":
/*!**********************************************************************!*\
  !*** ./src/app/forms/form-validations/form-validations.component.ts ***!
  \**********************************************************************/
/*! exports provided: FormValidationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormValidationsComponent", function() { return FormValidationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_form_validations_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./form-validations.component.html */ "4SgL");
/* harmony import */ var _form_validations_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-validations.component.scss */ "nukZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





let FormValidationsComponent = class FormValidationsComponent {
    constructor(fb) {
        this.fb = fb;
        this.hide = true;
        this.agree = false;
        this.register = this.fb.group({
            first: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("[a-zA-Z]+")]],
            last: [""],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)],
            ],
            address: [""],
            city: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            state: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            country: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            termcondition: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].requiredTrue]],
        });
    }
    onRegister() {
        console.log("Form Value", this.register.value);
    }
};
FormValidationsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
FormValidationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-form-validations",
        template: _raw_loader_form_validations_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_form_validations_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FormValidationsComponent);



/***/ }),

/***/ "38gU":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/form-examples/form-examples.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">Form Examples</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a routerLink=\"/admin/dashboard/main\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-2\">\r\n              <a href=\"#\" onClick=\"return false;\">Forms</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">Examples</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Reactive Forms (Outline)</h2>\r\n\r\n          </div>\r\n          <div class=\"body\">\r\n            <form class=\"register-form m-4\" [formGroup]=\"register\" (ngSubmit)=\"onRegister()\">\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n                  <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                    <mat-label>First name</mat-label>\r\n                    <input matInput formControlName=\"first\" required>\r\n                    <mat-icon matSuffix>face</mat-icon>\r\n                    <mat-error *ngIf=\"register.get('first').hasError('required')\">\r\n                      First name is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n                  <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                    <mat-label>Last name</mat-label>\r\n                    <input matInput formControlName=\"last\">\r\n                    <mat-icon matSuffix>face</mat-icon>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n                  <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                    <mat-label>Password</mat-label>\r\n                    <input matInput formControlName=\"password\" [type]=\"hide ? 'password' : 'text'\" required>\r\n                    <mat-icon matSuffix (click)=\"hide = !hide\">\r\n                      {{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                    <mat-error *ngIf=\"register.get('password').hasError('required')\">\r\n                      Password is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n                  <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                    <mat-label>Email</mat-label>\r\n                    <input matInput formControlName=\"email\" required>\r\n                    <mat-icon matSuffix>email</mat-icon>\r\n                    <mat-error *ngIf=\"register.get('email').hasError('required') || register.get('email').touched\">\r\n                      Please enter a valid email address\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n                  <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                    <mat-label>Address</mat-label>\r\n                    <textarea matInput formControlName=\"address\"></textarea>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n                  <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                    <mat-label>City</mat-label>\r\n                    <input matInput formControlName=\"city\" required>\r\n                    <mat-icon matSuffix>location_city</mat-icon>\r\n                    <mat-error *ngIf=\"register.get('city').hasError('required')\">\r\n                      City name is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n                  <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                    <mat-label>State</mat-label>\r\n                    <input matInput formControlName=\"state\" required>\r\n                    <mat-icon matSuffix>business</mat-icon>\r\n                    <mat-error *ngIf=\"register.get('state').hasError('required')\">\r\n                      State name is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n                  <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                    <mat-label>Country</mat-label>\r\n                    <mat-select formControlName=\"country\" required>\r\n                      <mat-option [value]=\"'India'\">\r\n                        India\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'Algeria'\">\r\n                        Algeria\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'Brazil'\">\r\n                        Brazil\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'Poland'\">\r\n                        Poland\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'Sri Lanka'\">\r\n                        Sri Lanka\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'Thailand'\">\r\n                        Thailand\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'Japan'\">\r\n                        Japan\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <mat-icon matSuffix>flag</mat-icon>\r\n                    <mat-error *ngIf=\"register.get('country').hasError('required')\">\r\n                      Country is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n                  <mat-checkbox class=\"example-margin\" formControlName=\"termcondition\">I accept\r\n                    terms\r\n                    and conditions\r\n                  </mat-checkbox>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n                  <button class=\"btn-space\" [disabled]=\"!register.valid\" mat-raised-button\r\n                    color=\"primary\">Submit</button>\r\n                  <button type=\"button\" mat-button>Cancel</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Reactive Forms (Fill)</h2>\r\n\r\n          </div>\r\n          <div class=\"body\">\r\n            <form class=\"m-4\" [formGroup]=\"secondForm\" (ngSubmit)=\"onsecondFormSubmit()\">\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n                  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                    <mat-label>First name</mat-label>\r\n                    <input matInput formControlName=\"first\" required>\r\n                    <mat-icon matSuffix>face</mat-icon>\r\n                    <mat-error *ngIf=\"secondForm.get('first').hasError('required')\">\r\n                      First name is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n                  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                    <mat-label>Last name</mat-label>\r\n                    <input matInput formControlName=\"last\">\r\n                    <mat-icon matSuffix>face</mat-icon>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n                  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                    <mat-label>Password</mat-label>\r\n                    <input matInput formControlName=\"password\" [type]=\"hide2 ? 'password' : 'text'\" required>\r\n                    <mat-icon matSuffix (click)=\"hide2 = !hide2\">\r\n                      {{hide2 ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                    <mat-error *ngIf=\"secondForm.get('password').hasError('required')\">\r\n                      Password is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n                  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                    <mat-label>Email</mat-label>\r\n                    <input matInput formControlName=\"email\" required>\r\n                    <mat-icon matSuffix>email</mat-icon>\r\n                    <mat-error *ngIf=\"secondForm.get('email').hasError('email') && secondForm.get('email').touched\">\r\n                      Please enter a valid email address\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n                  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                    <mat-label>Address</mat-label>\r\n                    <textarea matInput formControlName=\"address\"></textarea>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n                  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                    <mat-label>City</mat-label>\r\n                    <input matInput formControlName=\"city\" required>\r\n                    <mat-icon matSuffix>location_city</mat-icon>\r\n                    <mat-error *ngIf=\"secondForm.get('city').hasError('required')\">\r\n                      City name is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n                  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                    <mat-label>State</mat-label>\r\n                    <input matInput formControlName=\"state\" required>\r\n                    <mat-icon matSuffix>business</mat-icon>\r\n                    <mat-error *ngIf=\"secondForm.get('state').hasError('required')\">\r\n                      State name is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n                  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                    <mat-label>Country</mat-label>\r\n                    <mat-select formControlName=\"country\" required>\r\n                      <mat-option [value]=\"'India'\">\r\n                        India\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'Algeria'\">\r\n                        Algeria\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'Brazil'\">\r\n                        Brazil\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'Poland'\">\r\n                        Poland\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'Sri Lanka'\">\r\n                        Sri Lanka\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'Thailand'\">\r\n                        Thailand\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'Japan'\">\r\n                        Japan\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <mat-icon matSuffix>flag</mat-icon>\r\n                    <mat-error *ngIf=\"secondForm.get('country').hasError('required')\">\r\n                      Country is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n                  <mat-checkbox class=\"example-margin\" formControlName=\"termcondition\">I accept\r\n                    terms\r\n                    and conditions\r\n                  </mat-checkbox>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n                  <button class=\"btn-space\" [disabled]=\"!secondForm.valid\" mat-raised-button\r\n                    color=\"primary\">Submit</button>\r\n                  <button type=\"button\" mat-button>Cancel</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Reactive Forms (Standard)</h2>\r\n\r\n          </div>\r\n          <div class=\"body\">\r\n            <form class=\"m-4\" [formGroup]=\"thirdForm\" (ngSubmit)=\"onThirdFormSubmit()\">\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <mat-label>First name</mat-label>\r\n                    <input matInput formControlName=\"first\" required>\r\n                    <mat-icon matSuffix>face</mat-icon>\r\n                    <mat-error *ngIf=\"thirdForm.get('first').hasError('required')\">\r\n                      First name is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <mat-label>Last name</mat-label>\r\n                    <input matInput formControlName=\"last\">\r\n                    <mat-icon matSuffix>face</mat-icon>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <mat-label>Password</mat-label>\r\n                    <input matInput formControlName=\"password\" [type]=\"hide3 ? 'password' : 'text'\" required>\r\n                    <mat-icon matSuffix (click)=\"hide3 = !hide3\">\r\n                      {{hide3 ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                    <mat-error *ngIf=\"thirdForm.get('password').hasError('required')\">\r\n                      Password is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <mat-label>Email</mat-label>\r\n                    <input matInput formControlName=\"email\" required>\r\n                    <mat-icon matSuffix>email</mat-icon>\r\n                    <mat-error *ngIf=\"thirdForm.get('email').hasError('email') && thirdForm.get('email').touched\">\r\n                      Please enter a valid email address\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <mat-label>Address</mat-label>\r\n                    <textarea matInput formControlName=\"address\"></textarea>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <mat-label>City</mat-label>\r\n                    <input matInput formControlName=\"city\" required>\r\n                    <mat-icon matSuffix>location_city</mat-icon>\r\n                    <mat-error *ngIf=\"thirdForm.get('city').hasError('required')\">\r\n                      City name is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <mat-label>State</mat-label>\r\n                    <input matInput formControlName=\"state\" required>\r\n                    <mat-icon matSuffix>business</mat-icon>\r\n                    <mat-error *ngIf=\"thirdForm.get('state').hasError('required')\">\r\n                      State name is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <mat-label>Country</mat-label>\r\n                    <mat-select formControlName=\"country\" required>\r\n                      <mat-option [value]=\"'India'\">\r\n                        India\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'Algeria'\">\r\n                        Algeria\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'Brazil'\">\r\n                        Brazil\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'Poland'\">\r\n                        Poland\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'Sri Lanka'\">\r\n                        Sri Lanka\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'Thailand'\">\r\n                        Thailand\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'Japan'\">\r\n                        Japan\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <mat-icon matSuffix>flag</mat-icon>\r\n                    <mat-error *ngIf=\"thirdForm.get('country').hasError('required')\">\r\n                      Country is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                  <mat-checkbox class=\"example-margin\" formControlName=\"termcondition\">I accept\r\n                    terms\r\n                    and conditions\r\n                  </mat-checkbox>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3\">\r\n                  <button class=\"btn-space\" [disabled]=\"!thirdForm.valid\" mat-raised-button\r\n                    color=\"primary\">Submit</button>\r\n                  <button type=\"button\" mat-button>Cancel</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "4LWK":
/*!******************************************************!*\
  !*** ./src/app/forms/editors/editors.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .ck-editor__editable_inline {\n  min-height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxlZGl0b3JzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRiIsImZpbGUiOiJlZGl0b3JzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5jay1lZGl0b3JfX2VkaXRhYmxlX2lubGluZSB7XHJcbiAgbWluLWhlaWdodDogNDAwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "4SgL":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/form-validations/form-validations.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">Form Validations</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a routerLink=\"/admin/dashboard/main\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-2\">\r\n              <a href=\"#\" onClick=\"return false;\">Forms</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">Validations</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Basic Validation -->\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>\r\n              <strong>Basic</strong> Validation</h2>\r\n\r\n          </div>\r\n          <div class=\"body\">\r\n            <form class=\"register-form m-4\" [formGroup]=\"register\" (ngSubmit)=\"onRegister()\">\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n                  <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                    <mat-label>First name</mat-label>\r\n                    <input matInput formControlName=\"first\" required>\r\n                    <mat-icon matSuffix>face</mat-icon>\r\n                    <mat-error *ngIf=\"register.get('first').hasError('required')\">\r\n                      First name is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n                  <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                    <mat-label>Last name</mat-label>\r\n                    <input matInput formControlName=\"last\">\r\n                    <mat-icon matSuffix>face</mat-icon>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n                  <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                    <mat-label>Password</mat-label>\r\n                    <input matInput formControlName=\"password\" [type]=\"hide ? 'password' : 'text'\" required>\r\n                    <mat-icon matSuffix (click)=\"hide = !hide\">\r\n                      {{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                    <mat-error *ngIf=\"register.get('password').hasError('required')\">\r\n                      Password is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n                  <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                    <mat-label>Email</mat-label>\r\n                    <input matInput formControlName=\"email\" required>\r\n                    <mat-icon matSuffix>email</mat-icon>\r\n                    <mat-error *ngIf=\"register.get('email').hasError('required') || register.get('email').touched\">\r\n                      Please enter a valid email address\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n                  <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                    <mat-label>Address</mat-label>\r\n                    <textarea matInput formControlName=\"address\"></textarea>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n                  <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                    <mat-label>City</mat-label>\r\n                    <input matInput formControlName=\"city\" required>\r\n                    <mat-icon matSuffix>location_city</mat-icon>\r\n                    <mat-error *ngIf=\"register.get('city').hasError('required')\">\r\n                      City name is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2\">\r\n                  <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                    <mat-label>State</mat-label>\r\n                    <input matInput formControlName=\"state\" required>\r\n                    <mat-icon matSuffix>business</mat-icon>\r\n                    <mat-error *ngIf=\"register.get('state').hasError('required')\">\r\n                      State name is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n                  <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                    <mat-label>Country</mat-label>\r\n                    <mat-select formControlName=\"country\" required>\r\n                      <mat-option [value]=\"'India'\">\r\n                        India\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'Algeria'\">\r\n                        Algeria\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'Brazil'\">\r\n                        Brazil\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'Poland'\">\r\n                        Poland\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'Sri Lanka'\">\r\n                        Sri Lanka\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'Thailand'\">\r\n                        Thailand\r\n                      </mat-option>\r\n                      <mat-option [value]=\"'Japan'\">\r\n                        Japan\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <mat-icon matSuffix>flag</mat-icon>\r\n                    <mat-error *ngIf=\"register.get('country').hasError('required')\">\r\n                      Country is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n                  <mat-checkbox class=\"example-margin\" formControlName=\"termcondition\">I accept\r\n                    terms\r\n                    and conditions\r\n                  </mat-checkbox>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2\">\r\n                  <button class=\"btn-space\" mat-raised-button color=\"primary\"\r\n                    [disabled]=\"!register.valid\">Submit</button>\r\n                  <button type=\"button\" mat-button>Cancel</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- #END# Basic Validation -->\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "58cn":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/form-controls/form-controls.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">Form Controls</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a routerLink=\"/admin/dashboard/main\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-2\">\r\n              <a href=\"#\" onClick=\"return false;\">Form</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">Form Controls</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-4 col-lg-4 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Fill Input Style</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"example-container\">\r\n              <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                <mat-label>Input</mat-label>\r\n                <input matInput>\r\n              </mat-form-field>\r\n              <br>\r\n              <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                <mat-label>Select</mat-label>\r\n                <mat-select>\r\n                  <mat-option value=\"option1\">Option 1</mat-option>\r\n                  <mat-option value=\"option2\">Option 2</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n              <br>\r\n              <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                <mat-label>Textarea</mat-label>\r\n                <textarea matInput></textarea>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xl-4 col-lg-4 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Outline Input Style</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"example-container\">\r\n              <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                <mat-label>Input</mat-label>\r\n                <input matInput>\r\n              </mat-form-field>\r\n              <br>\r\n              <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                <mat-label>Select</mat-label>\r\n                <mat-select>\r\n                  <mat-option value=\"option1\">Option 1</mat-option>\r\n                  <mat-option value=\"option2\">Option 2</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n              <br>\r\n              <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                <mat-label>Textarea</mat-label>\r\n                <textarea matInput></textarea>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xl-4 col-lg-4 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Standard Input</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"example-container\">\r\n              <mat-form-field class=\"example-full-width mb-3\">\r\n                <mat-label>Input</mat-label>\r\n                <input matInput>\r\n              </mat-form-field>\r\n              <br>\r\n              <mat-form-field class=\"example-full-width mb-3\">\r\n                <mat-label>Select</mat-label>\r\n                <mat-select>\r\n                  <mat-option value=\"option1\">Option 1</mat-option>\r\n                  <mat-option value=\"option2\">Option 2</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n              <br>\r\n              <mat-form-field class=\"example-full-width mb-3\">\r\n                <mat-label>Textarea</mat-label>\r\n                <textarea matInput></textarea>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Form field with label</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"example-container\">\r\n              <form [formGroup]=\"labelForm\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-4\">\r\n                    <mat-form-field class=\"example-full-width\" appearance=\"fill\"\r\n                      [hideRequiredMarker]=\"hideRequiredControl.value\" [floatLabel]=\"false\">\r\n                      <input matInput placeholder=\"Simple placeholder\" required>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-4\">\r\n                    <mat-form-field class=\"example-full-width\" appearance=\"fill\" [floatLabel]=\"floatLabelControl.value\">\r\n                      <mat-label>Both a label and a placeholder</mat-label>\r\n                      <input matInput placeholder=\"Simple placeholder\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-4\">\r\n                    <mat-form-field class=\"example-full-width\" appearance=\"fill\"\r\n                      [hideRequiredMarker]=\"hideRequiredControl.value\" [floatLabel]=\"floatLabelControl.value\">\r\n                      <mat-select required>\r\n                        <mat-option>-- None --</mat-option>\r\n                        <mat-option value=\"option1\">Option 1</mat-option>\r\n                        <mat-option value=\"option2\">Option 2</mat-option>\r\n                      </mat-select>\r\n                      <mat-label>\r\n                        <mat-icon>favorite</mat-icon> <b> Fancy</b> <i> label</i>\r\n                      </mat-label>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>File Upload</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"example-container\">\r\n              <form [formGroup]=\"fileUploadForm\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-4\">\r\n                    <mat-form-field class=\"example-full-width mb-3\">\r\n                      <ngx-mat-file-input formControlName=\"singleUpload\" placeholder=\"Single Upload\">\r\n                      </ngx-mat-file-input>\r\n                      <mat-icon matSuffix>cloud_upload</mat-icon>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-4\">\r\n                    <mat-form-field class=\"example-full-width mb-3\">\r\n                      <ngx-mat-file-input #removableInput formControlName=\"removablefile\" placeholder=\"Removable Input\">\r\n                      </ngx-mat-file-input>\r\n                      <button mat-icon-button matSuffix *ngIf=\"!removableInput.empty\"\r\n                        (click)=\"removableInput.clear($event)\">\r\n                        <mat-icon>clear</mat-icon>\r\n                      </button>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-4\">\r\n                    <mat-form-field class=\"example-full-width mb-3\">\r\n                      <ngx-mat-file-input formControlName=\"multiplefile\" placeholder=\"Multiple inputs\" multiple>\r\n                      </ngx-mat-file-input>\r\n                      <mat-icon matSuffix>folder</mat-icon>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Check Box</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <h6>Checkbox configuration</h6>\r\n            <section class=\"example-section\">\r\n              <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\r\n              <mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">Indeterminate\r\n              </mat-checkbox>\r\n            </section>\r\n            <section class=\"example-section\">\r\n              <label class=\"example-margin\">Align:</label>\r\n              <mat-radio-group [(ngModel)]=\"labelPosition\">\r\n                <mat-radio-button class=\"example-margin\" value=\"after\">After</mat-radio-button>\r\n                <mat-radio-button class=\"example-margin\" value=\"before\">Before\r\n                </mat-radio-button>\r\n              </mat-radio-group>\r\n            </section>\r\n            <section class=\"example-section\">\r\n              <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\r\n            </section>\r\n            <h6 class=\"example-h4\">Result</h6>\r\n            <section class=\"example-section\">\r\n              <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\" [(indeterminate)]=\"indeterminate\"\r\n                [labelPosition]=\"labelPosition\" [disabled]=\"disabled\">\r\n                I'm a checkbox\r\n              </mat-checkbox>\r\n            </section>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Radio Buttons</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <label id=\"example-radio-group-label\">Pick your favorite season</label>\r\n            <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\"\r\n              [(ngModel)]=\"favoriteSeason\">\r\n              <mat-radio-button class=\"example-radio-button ms-0\" *ngFor=\"let season of seasons\" [value]=\"season\">\r\n                {{season}}\r\n              </mat-radio-button>\r\n            </mat-radio-group>\r\n            <div>Your favorite season is: {{favoriteSeason}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Datepicker</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-5\">\r\n                <h6>Basic datepicker</h6>\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <mat-label>Choose a date</mat-label>\r\n                  <input matInput [matDatepicker]=\"picker\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #picker></mat-datepicker>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-2\"></div>\r\n              <div class=\"col-5\">\r\n                <h6>Datepicker start date</h6>\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <mat-label>Choose a date</mat-label>\r\n                  <input matInput [matDatepicker]=\"picker2\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #picker2 startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n            <div class=\"row mt-5\">\r\n              <div class=\"col-5\">\r\n                <h6>Datepicker selected value</h6>\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <mat-label>Angular forms</mat-label>\r\n                  <input matInput [matDatepicker]=\"picker3\" [formControl]=\"date\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #picker3></mat-datepicker>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-2\"></div>\r\n              <div class=\"col-5\">\r\n                <h6>Datepicker with min & max validation</h6>\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <mat-label>Choose a date</mat-label>\r\n                  <input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker4\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"picker4\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #picker4></mat-datepicker>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n            <div class=\"row mt-5\">\r\n              <div class=\"col-5\">\r\n                <h6>Datepicker with filter validation</h6>\r\n                <p>Prevent Saturday and Sunday from being selected</p>\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <mat-label>Choose a date</mat-label>\r\n                  <input matInput [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker5\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"picker5\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #picker5></mat-datepicker>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-2\"></div>\r\n              <div class=\"col-5\">\r\n                <h6>Open Datepicker on button click</h6>\r\n                <p>Open date picket on button click</p>\r\n                <mat-form-field>\r\n                  <input matInput [matDatepicker]=\"picker6\" placeholder=\"Choose a date\">\r\n                  <mat-datepicker #picker6></mat-datepicker>\r\n                </mat-form-field>\r\n                <button mat-flat-button color=\"primary\" (click)=\"picker6.open()\" class=\"msl-3\">Open</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Datetime picker</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-5\">\r\n                <h6>Basic datepicker</h6>\r\n                <mat-form-field class=\"example-full-width mb-3\">\r\n                  <mat-label>Choose a date</mat-label>\r\n                  <input matInput [owlDateTimeTrigger]=\"date1\" [owlDateTime]=\"date1\">\r\n                  <owl-date-time #date1></owl-date-time>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-2\"></div>\r\n              <div class=\"col-5\">\r\n                <h6>Datetime picker with icon</h6>\r\n                <mat-form-field class=\"example-full-width mb-3\">\r\n                  <mat-label>Choose a date</mat-label>\r\n                  <input matInput [owlDateTimeTrigger]=\"date2\" [owlDateTime]=\"date2\">\r\n                  <mat-icon matSuffix [owlDateTimeTrigger]=\"date2\" class=\"date-icon\">today</mat-icon>\r\n                  <owl-date-time #date2></owl-date-time>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n            <div class=\"row mt-5\">\r\n              <div class=\"col-5\">\r\n                <h6>Time Picker</h6>\r\n                <mat-form-field class=\"example-full-width mb-3\">\r\n                  <mat-label>Choose a time</mat-label>\r\n                  <input matInput [owlDateTimeTrigger]=\"time1\" [owlDateTime]=\"time1\">\r\n                  <mat-icon matSuffix [owlDateTimeTrigger]=\"time1\" class=\"date-icon\">schedule</mat-icon>\r\n                  <owl-date-time [pickerType]=\"'timer'\" #time1></owl-date-time>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Select Item</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-5\">\r\n                <h6>Basic mat-select</h6>\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <mat-label>Favorite food</mat-label>\r\n                  <mat-select>\r\n                    <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\r\n                      {{food.viewValue}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-2\"></div>\r\n              <div class=\"col-5\">\r\n                <h6>Basic native select</h6>\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <mat-label>Cars</mat-label>\r\n                  <select matNativeControl required>\r\n                    <option value=\"volvo\">Volvo</option>\r\n                    <option value=\"saab\">Saab</option>\r\n                    <option value=\"mercedes\">Mercedes</option>\r\n                    <option value=\"audi\">Audi</option>\r\n                  </select>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n            <div class=\"row mt-5\">\r\n              <div class=\"col-5\">\r\n                <h6>Select Binding</h6>\r\n                <form>\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <mat-label>Favorite food</mat-label>\r\n                    <mat-select [(ngModel)]=\"selectedValue\" name=\"food\">\r\n                      <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\r\n                        {{food.viewValue}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <p> Selected food: {{selectedValue}} </p>\r\n                </form>\r\n              </div>\r\n              <div class=\"col-2\"></div>\r\n              <div class=\"col-5\">\r\n                <h6>Native select binding</h6>\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <mat-label>Favorite car</mat-label>\r\n                  <select matNativeControl [(ngModel)]=\"selectedCar\" name=\"car\">\r\n                    <option value=\"\" selected></option>\r\n                    <option *ngFor=\"let car of cars\" [value]=\"car.value\">\r\n                      {{car.viewValue}}\r\n                    </option>\r\n                  </select>\r\n                </mat-form-field>\r\n                <p> Selected car: {{selectedCar}} </p>\r\n              </div>\r\n            </div>\r\n            <div class=\"row mt-5\">\r\n              <div class=\"col-5\">\r\n                <h6>Select Item Validation</h6>\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <mat-label>Favorite animal</mat-label>\r\n                  <mat-select [formControl]=\"animalControl\" required>\r\n                    <mat-option>Select Item</mat-option>\r\n                    <mat-option *ngFor=\"let animal of animals\" [value]=\"animal\">\r\n                      {{animal.name}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                  <mat-error *ngIf=\"animalControl.hasError('required')\">Please choose an animal\r\n                  </mat-error>\r\n                  <mat-hint>{{animalControl.value?.sound}}</mat-hint>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-2\"></div>\r\n              <div class=\"col-5\">\r\n                <h6>Native select item validation</h6>\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <mat-label>Select your car (required)</mat-label>\r\n                  <select matNativeControl required [formControl]=\"selectFormControl\">\r\n                    <option label=\"--select something --\"></option>\r\n                    <option value=\"saab\">Saab</option>\r\n                    <option value=\"mercedes\">Mercedes</option>\r\n                    <option value=\"audi\">Audi</option>\r\n                  </select>\r\n                  <mat-error *ngIf=\"selectFormControl.hasError('required')\">\r\n                    This field is required\r\n                  </mat-error>\r\n                  <mat-hint>Select your favorite car here</mat-hint>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n            <div class=\"row mt-5\">\r\n              <div class=\"col-5\">\r\n                <h6>Disable Select Item Option</h6>\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <mat-label>Choose an option</mat-label>\r\n                  <mat-select [disabled]=\"disableSelect.value\">\r\n                    <mat-option value=\"option1\">Option 1</mat-option>\r\n                    <mat-option value=\"option2\" disabled>Option 2 (disabled)</mat-option>\r\n                    <mat-option value=\"option3\">Option 3</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-2\"></div>\r\n              <div class=\"col-5\">\r\n                <h6>Native Disable Select Item Option</h6>\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <mat-label>Choose an option</mat-label>\r\n                  <select matNativeControl [disabled]=\"disableSelect.value\">\r\n                    <option value=\"\" selected></option>\r\n                    <option value=\"volvo\">Volvo</option>\r\n                    <option value=\"saab\" disabled>Saab</option>\r\n                    <option value=\"mercedes\">Mercedes</option>\r\n                    <option value=\"audi\">Audi</option>\r\n                  </select>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n            <div class=\"row mt-5\">\r\n              <div class=\"col-5\">\r\n                <h6>Multiple Select Item</h6>\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <mat-label>Toppings</mat-label>\r\n                  <mat-select [formControl]=\"toppings\" multiple>\r\n                    <mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-2\"></div>\r\n              <div class=\"col-5\">\r\n                <h6>Select with option groups</h6>\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <mat-label>Pokemon</mat-label>\r\n                  <mat-select [formControl]=\"pokemonControl\">\r\n                    <mat-option>-- None --</mat-option>\r\n                    <mat-optgroup *ngFor=\"let group of pokemonGroups\" [label]=\"group.name\" [disabled]=\"group.disabled\">\r\n                      <mat-option *ngFor=\"let pokemon of group.pokemon\" [value]=\"pokemon.value\">\r\n                        {{pokemon.viewValue}}\r\n                      </mat-option>\r\n                    </mat-optgroup>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n            <div class=\"row mt-5\">\r\n              <div class=\"col-5\">\r\n                <h6>Select with custom trigger text</h6>\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <mat-select placeholder=\"Toppings\" [formControl]=\"toppings\" multiple>\r\n                    <mat-select-trigger>\r\n                      {{toppings.value ? toppings.value[0] : ''}}\r\n                      <span *ngIf=\"toppings.value?.length > 1\" class=\"example-additional-selection\">\r\n                        (+{{toppings.value.length - 1}}\r\n                        {{toppings.value?.length === 2 ? 'other' : 'others'}})\r\n                      </span>\r\n                    </mat-select-trigger>\r\n                    <mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-2\"></div>\r\n              <div class=\"col-5\">\r\n                <h6>Select with a custom ErrorStateMatcher</h6>\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <mat-label>Choose one</mat-label>\r\n                  <mat-select [formControl]=\"selected\" [errorStateMatcher]=\"matcher\">\r\n                    <mat-option>Clear</mat-option>\r\n                    <mat-option value=\"valid\">Valid option</mat-option>\r\n                    <mat-option value=\"invalid\">Invalid option</mat-option>\r\n                  </mat-select>\r\n                  <mat-hint>Errors appear instantly!</mat-hint>\r\n                  <mat-error *ngIf=\"selected.hasError('required')\">You must make a selection\r\n                  </mat-error>\r\n                  <mat-error *ngIf=\"selected.hasError('pattern') && !selected.hasError('required')\">\r\n                    Your selection is invalid\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Slide Toggle</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                <h6>Basic slide-toggles</h6>\r\n                <mat-slide-toggle>Slide me!</mat-slide-toggle>\r\n              </div>\r\n            </div>\r\n            <div class=\"row mt-5\">\r\n              <div class=\"col-6\">\r\n                <h6>Color slide-toggles</h6>\r\n                <section class=\"example-section\">\r\n                  <label class=\"example-margin\">Color:</label>\r\n                  <mat-radio-group [(ngModel)]=\"color\">\r\n                    <mat-radio-button class=\"example-margin\" value=\"primary\">\r\n                      Primary\r\n                    </mat-radio-button>\r\n                    <mat-radio-button class=\"example-margin\" value=\"accent\">\r\n                      Accent\r\n                    </mat-radio-button>\r\n                    <mat-radio-button class=\"example-margin\" value=\"warn\">\r\n                      Warn\r\n                    </mat-radio-button>\r\n                  </mat-radio-group>\r\n                </section>\r\n                <section class=\"example-section\">\r\n                  <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked\r\n                  </mat-checkbox>\r\n                </section>\r\n                <section class=\"example-section\">\r\n                  <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled\r\n                  </mat-checkbox>\r\n                </section>\r\n                <h4 class=\"example-h2\">Result</h4>\r\n                <section class=\"example-section\">\r\n                  <mat-slide-toggle class=\"example-margin\" [color]=\"color\" [checked]=\"checked\" [disabled]=\"disabled\">\r\n                    Slide me!\r\n                  </mat-slide-toggle>\r\n                </section>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "9Nm5":
/*!***************************************!*\
  !*** ./src/app/forms/forms.module.ts ***!
  \***************************************/
/*! exports provided: FormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _forms_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms-routing.module */ "a03z");
/* harmony import */ var _editors_editors_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editors/editors.component */ "0NeN");
/* harmony import */ var _form_examples_form_examples_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-examples/form-examples.component */ "gyru");
/* harmony import */ var _form_validations_form_validations_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-validations/form-validations.component */ "0R0B");
/* harmony import */ var _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wizard/wizard.component */ "lEoo");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _form_controls_form_controls_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form-controls/form-controls.component */ "0GeU");
/* harmony import */ var _advance_controls_advance_controls_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./advance-controls/advance-controls.component */ "Gc2I");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "zioG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-mask */ "tmjD");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-color-picker */ "R9Cn");
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ngx-material-file-input */ "7ZcW");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ng-pick-datetime */ "z17N");






































let FormModule = class FormModule {
};
FormModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _editors_editors_component__WEBPACK_IMPORTED_MODULE_4__["EditorsComponent"],
            _form_examples_form_examples_component__WEBPACK_IMPORTED_MODULE_5__["FormExamplesComponent"],
            _form_validations_form_validations_component__WEBPACK_IMPORTED_MODULE_6__["FormValidationsComponent"],
            _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_7__["WizardComponent"],
            _form_controls_form_controls_component__WEBPACK_IMPORTED_MODULE_9__["FormControlsComponent"],
            _advance_controls_advance_controls_component__WEBPACK_IMPORTED_MODULE_10__["AdvanceControlsComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _forms_routing_module__WEBPACK_IMPORTED_MODULE_3__["FormsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_11__["CKEditorModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__["MatSidenavModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__["MatSlideToggleModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__["MatSliderModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__["MatSortModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_31__["MatStepperModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_37__["OwlDateTimeModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_37__["OwlNativeDateTimeModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_34__["NgxMaskModule"],
            ngx_color_picker__WEBPACK_IMPORTED_MODULE_35__["ColorPickerModule"],
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_36__["MaterialFileInputModule"],
        ],
    })
], FormModule);



/***/ }),

/***/ "B/XX":
/*!********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js ***!
  \********************************************************************/
/*! exports provided: CdkStep, CdkStepHeader, CdkStepLabel, CdkStepper, CdkStepperModule, CdkStepperNext, CdkStepperPrevious, STEPPER_GLOBAL_OPTIONS, STEP_STATE, StepperSelectionEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStep", function() { return CdkStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepHeader", function() { return CdkStepHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepLabel", function() { return CdkStepLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepper", function() { return CdkStepper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepperModule", function() { return CdkStepperModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepperNext", function() { return CdkStepperNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepperPrevious", function() { return CdkStepperPrevious; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEPPER_GLOBAL_OPTIONS", function() { return STEPPER_GLOBAL_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP_STATE", function() { return STEP_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperSelectionEvent", function() { return StepperSelectionEvent; });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "41Ph");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "9YHx");









/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



function CdkStep_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](0);
} }
const _c0 = ["*"];
class CdkStepHeader {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
    /** Focuses the step header. */
    focus() {
        this._elementRef.nativeElement.focus();
    }
}
CdkStepHeader.ɵfac = function CdkStepHeader_Factory(t) { return new (t || CdkStepHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"])); };
CdkStepHeader.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({ type: CdkStepHeader, selectors: [["", "cdkStepHeader", ""]], hostAttrs: ["role", "tab"] });
CdkStepHeader.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](CdkStepHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
        args: [{
                selector: '[cdkStepHeader]',
                host: {
                    'role': 'tab'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class CdkStepLabel {
    constructor(/** @docs-private */ template) {
        this.template = template;
    }
}
CdkStepLabel.ɵfac = function CdkStepLabel_Factory(t) { return new (t || CdkStepLabel)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"])); };
CdkStepLabel.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({ type: CdkStepLabel, selectors: [["", "cdkStepLabel", ""]] });
CdkStepLabel.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](CdkStepLabel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
        args: [{
                selector: '[cdkStepLabel]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Used to generate unique ID for each stepper component. */
let nextId = 0;
/** Change event emitted on selection changes. */
class StepperSelectionEvent {
}
/** Enum to represent the different states of the steps. */
const STEP_STATE = {
    NUMBER: 'number',
    EDIT: 'edit',
    DONE: 'done',
    ERROR: 'error'
};
/** InjectionToken that can be used to specify the global stepper options. */
const STEPPER_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["InjectionToken"]('STEPPER_GLOBAL_OPTIONS');
class CdkStep {
    constructor(_stepper, stepperOptions) {
        this._stepper = _stepper;
        /** Whether user has attempted to move away from the step. */
        this.interacted = false;
        /** Emits when the user has attempted to move away from the step. */
        this.interactedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        this._editable = true;
        this._optional = false;
        this._completedOverride = null;
        this._customError = null;
        this._stepperOptions = stepperOptions ? stepperOptions : {};
        this._displayDefaultIndicatorType = this._stepperOptions.displayDefaultIndicatorType !== false;
        this._showError = !!this._stepperOptions.showError;
    }
    /** Whether the user can return to this step once it has been marked as completed. */
    get editable() {
        return this._editable;
    }
    set editable(value) {
        this._editable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
    }
    /** Whether the completion of step is optional. */
    get optional() {
        return this._optional;
    }
    set optional(value) {
        this._optional = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
    }
    /** Whether step is marked as completed. */
    get completed() {
        return this._completedOverride == null ? this._getDefaultCompleted() : this._completedOverride;
    }
    set completed(value) {
        this._completedOverride = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
    }
    _getDefaultCompleted() {
        return this.stepControl ? this.stepControl.valid && this.interacted : this.interacted;
    }
    /** Whether step has an error. */
    get hasError() {
        return this._customError == null ? this._getDefaultError() : this._customError;
    }
    set hasError(value) {
        this._customError = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
    }
    _getDefaultError() {
        return this.stepControl && this.stepControl.invalid && this.interacted;
    }
    /** Selects this step component. */
    select() {
        this._stepper.selected = this;
    }
    /** Resets the step to its initial state. Note that this includes resetting form data. */
    reset() {
        this.interacted = false;
        if (this._completedOverride != null) {
            this._completedOverride = false;
        }
        if (this._customError != null) {
            this._customError = false;
        }
        if (this.stepControl) {
            this.stepControl.reset();
        }
    }
    ngOnChanges() {
        // Since basically all inputs of the MatStep get proxied through the view down to the
        // underlying MatStepHeader, we have to make sure that change detection runs correctly.
        this._stepper._stateChanged();
    }
    _markAsInteracted() {
        if (!this.interacted) {
            this.interacted = true;
            this.interactedStream.emit(this);
        }
    }
}
CdkStep.ɵfac = function CdkStep_Factory(t) { return new (t || CdkStep)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])(() => CdkStepper)), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](STEPPER_GLOBAL_OPTIONS, 8)); };
CdkStep.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CdkStep, selectors: [["cdk-step"]], contentQueries: function CdkStep_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuery"](dirIndex, CdkStepLabel, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.stepLabel = _t.first);
    } }, viewQuery: function CdkStep_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"], 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, inputs: { editable: "editable", optional: "optional", completed: "completed", hasError: "hasError", stepControl: "stepControl", label: "label", errorMessage: "errorMessage", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], state: "state" }, outputs: { interactedStream: "interacted" }, exportAs: ["cdkStep"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function CdkStep_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CdkStep_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2, changeDetection: 0 });
CdkStep.ctorParameters = () => [
    { type: CdkStepper, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])(() => CdkStepper),] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"], args: [STEPPER_GLOBAL_OPTIONS,] }] }
];
CdkStep.propDecorators = {
    stepLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChild"], args: [CdkStepLabel,] }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"], { static: true },] }],
    stepControl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    interactedStream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"], args: ['interacted',] }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    errorMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"], args: ['aria-label',] }],
    ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"], args: ['aria-labelledby',] }],
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    editable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    optional: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    completed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    hasError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](CdkStep, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
        args: [{
                selector: 'cdk-step',
                exportAs: 'cdkStep',
                template: '<ng-template><ng-content></ng-content></ng-template>',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: CdkStepper, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
                args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])(() => CdkStepper)]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
                args: [STEPPER_GLOBAL_OPTIONS]
            }] }]; }, { interactedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"],
            args: ['interacted']
        }], editable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], optional: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], completed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], hasError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], stepLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChild"],
            args: [CdkStepLabel]
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"], { static: true }]
        }], stepControl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], errorMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"],
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"],
            args: ['aria-labelledby']
        }], state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }] }); })();
class CdkStepper {
    constructor(_dir, _changeDetectorRef, _elementRef, _document) {
        this._dir = _dir;
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        /** Emits when the component is destroyed. */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /** Steps that belong to the current stepper, excluding ones from nested steppers. */
        this.steps = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["QueryList"]();
        this._linear = false;
        this._selectedIndex = 0;
        /** Event emitted when the selected step has changed. */
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * @deprecated To be turned into a private property. Use `orientation` instead.
         * @breaking-change 13.0.0
         */
        this._orientation = 'horizontal';
        this._groupId = nextId++;
        this._document = _document;
    }
    /** Whether the validity of previous steps should be checked or not. */
    get linear() {
        return this._linear;
    }
    set linear(value) {
        this._linear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
    }
    /** The index of the selected step. */
    get selectedIndex() {
        return this._selectedIndex;
    }
    set selectedIndex(index) {
        var _a;
        const newIndex = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(index);
        if (this.steps && this._steps) {
            // Ensure that the index can't be out of bounds.
            if (!this._isValidIndex(index) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error('cdkStepper: Cannot assign out-of-bounds value to `selectedIndex`.');
            }
            (_a = this.selected) === null || _a === void 0 ? void 0 : _a._markAsInteracted();
            if (this._selectedIndex !== newIndex && !this._anyControlsInvalidOrPending(newIndex) &&
                (newIndex >= this._selectedIndex || this.steps.toArray()[newIndex].editable)) {
                this._updateSelectedItemIndex(index);
            }
        }
        else {
            this._selectedIndex = newIndex;
        }
    }
    /** The step that is selected. */
    get selected() {
        return this.steps ? this.steps.toArray()[this.selectedIndex] : undefined;
    }
    set selected(step) {
        this.selectedIndex = (step && this.steps) ? this.steps.toArray().indexOf(step) : -1;
    }
    /** Orientation of the stepper. */
    get orientation() { return this._orientation; }
    set orientation(value) {
        // This is a protected method so that `MatSteppter` can hook into it.
        this._orientation = value;
        if (this._keyManager) {
            this._keyManager.withVerticalOrientation(value === 'vertical');
        }
    }
    ngAfterContentInit() {
        this._steps.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(this._steps), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed))
            .subscribe((steps) => {
            this.steps.reset(steps.filter(step => step._stepper === this));
            this.steps.notifyOnChanges();
        });
    }
    ngAfterViewInit() {
        // Note that while the step headers are content children by default, any components that
        // extend this one might have them as view children. We initialize the keyboard handling in
        // AfterViewInit so we're guaranteed for both view and content children to be defined.
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusKeyManager"](this._stepHeader)
            .withWrap()
            .withHomeAndEnd()
            .withVerticalOrientation(this._orientation === 'vertical');
        (this._dir ? this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(this._layoutDirection()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed))
            .subscribe(direction => this._keyManager.withHorizontalOrientation(direction));
        this._keyManager.updateActiveItem(this._selectedIndex);
        // No need to `takeUntil` here, because we're the ones destroying `steps`.
        this.steps.changes.subscribe(() => {
            if (!this.selected) {
                this._selectedIndex = Math.max(this._selectedIndex - 1, 0);
            }
        });
        // The logic which asserts that the selected index is within bounds doesn't run before the
        // steps are initialized, because we don't how many steps there are yet so we may have an
        // invalid index on init. If that's the case, auto-correct to the default so we don't throw.
        if (!this._isValidIndex(this._selectedIndex)) {
            this._selectedIndex = 0;
        }
    }
    ngOnDestroy() {
        this.steps.destroy();
        this._destroyed.next();
        this._destroyed.complete();
    }
    /** Selects and focuses the next step in list. */
    next() {
        this.selectedIndex = Math.min(this._selectedIndex + 1, this.steps.length - 1);
    }
    /** Selects and focuses the previous step in list. */
    previous() {
        this.selectedIndex = Math.max(this._selectedIndex - 1, 0);
    }
    /** Resets the stepper to its initial state. Note that this includes clearing form data. */
    reset() {
        this._updateSelectedItemIndex(0);
        this.steps.forEach(step => step.reset());
        this._stateChanged();
    }
    /** Returns a unique id for each step label element. */
    _getStepLabelId(i) {
        return `cdk-step-label-${this._groupId}-${i}`;
    }
    /** Returns unique id for each step content element. */
    _getStepContentId(i) {
        return `cdk-step-content-${this._groupId}-${i}`;
    }
    /** Marks the component to be change detected. */
    _stateChanged() {
        this._changeDetectorRef.markForCheck();
    }
    /** Returns position state of the step with the given index. */
    _getAnimationDirection(index) {
        const position = index - this._selectedIndex;
        if (position < 0) {
            return this._layoutDirection() === 'rtl' ? 'next' : 'previous';
        }
        else if (position > 0) {
            return this._layoutDirection() === 'rtl' ? 'previous' : 'next';
        }
        return 'current';
    }
    /** Returns the type of icon to be displayed. */
    _getIndicatorType(index, state = STEP_STATE.NUMBER) {
        const step = this.steps.toArray()[index];
        const isCurrentStep = this._isCurrentStep(index);
        return step._displayDefaultIndicatorType ? this._getDefaultIndicatorLogic(step, isCurrentStep) :
            this._getGuidelineLogic(step, isCurrentStep, state);
    }
    _getDefaultIndicatorLogic(step, isCurrentStep) {
        if (step._showError && step.hasError && !isCurrentStep) {
            return STEP_STATE.ERROR;
        }
        else if (!step.completed || isCurrentStep) {
            return STEP_STATE.NUMBER;
        }
        else {
            return step.editable ? STEP_STATE.EDIT : STEP_STATE.DONE;
        }
    }
    _getGuidelineLogic(step, isCurrentStep, state = STEP_STATE.NUMBER) {
        if (step._showError && step.hasError && !isCurrentStep) {
            return STEP_STATE.ERROR;
        }
        else if (step.completed && !isCurrentStep) {
            return STEP_STATE.DONE;
        }
        else if (step.completed && isCurrentStep) {
            return state;
        }
        else if (step.editable && isCurrentStep) {
            return STEP_STATE.EDIT;
        }
        else {
            return state;
        }
    }
    _isCurrentStep(index) {
        return this._selectedIndex === index;
    }
    /** Returns the index of the currently-focused step header. */
    _getFocusIndex() {
        return this._keyManager ? this._keyManager.activeItemIndex : this._selectedIndex;
    }
    _updateSelectedItemIndex(newIndex) {
        const stepsArray = this.steps.toArray();
        this.selectionChange.emit({
            selectedIndex: newIndex,
            previouslySelectedIndex: this._selectedIndex,
            selectedStep: stepsArray[newIndex],
            previouslySelectedStep: stepsArray[this._selectedIndex],
        });
        // If focus is inside the stepper, move it to the next header, otherwise it may become
        // lost when the active step content is hidden. We can't be more granular with the check
        // (e.g. checking whether focus is inside the active step), because we don't have a
        // reference to the elements that are rendering out the content.
        this._containsFocus() ? this._keyManager.setActiveItem(newIndex) :
            this._keyManager.updateActiveItem(newIndex);
        this._selectedIndex = newIndex;
        this._stateChanged();
    }
    _onKeydown(event) {
        const hasModifier = Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["hasModifierKey"])(event);
        const keyCode = event.keyCode;
        const manager = this._keyManager;
        if (manager.activeItemIndex != null && !hasModifier &&
            (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["SPACE"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"])) {
            this.selectedIndex = manager.activeItemIndex;
            event.preventDefault();
        }
        else {
            manager.onKeydown(event);
        }
    }
    _anyControlsInvalidOrPending(index) {
        if (this._linear && index >= 0) {
            return this.steps.toArray().slice(0, index).some(step => {
                const control = step.stepControl;
                const isIncomplete = control ? (control.invalid || control.pending || !step.interacted) : !step.completed;
                return isIncomplete && !step.optional && !step._completedOverride;
            });
        }
        return false;
    }
    _layoutDirection() {
        return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    /** Checks whether the stepper contains the focused element. */
    _containsFocus() {
        const stepperElement = this._elementRef.nativeElement;
        const focusedElement = this._document.activeElement;
        return stepperElement === focusedElement || stepperElement.contains(focusedElement);
    }
    /** Checks whether the passed-in index is a valid step index. */
    _isValidIndex(index) {
        return index > -1 && (!this.steps || index < this.steps.length);
    }
}
CdkStepper.ɵfac = function CdkStepper_Factory(t) { return new (t || CdkStepper)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])); };
CdkStepper.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({ type: CdkStepper, selectors: [["", "cdkStepper", ""]], contentQueries: function CdkStepper_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuery"](dirIndex, CdkStep, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuery"](dirIndex, CdkStepHeader, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._steps = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._stepHeader = _t);
    } }, inputs: { linear: "linear", selectedIndex: "selectedIndex", selected: "selected", orientation: "orientation" }, outputs: { selectionChange: "selectionChange" }, exportAs: ["cdkStepper"] });
CdkStepper.ctorParameters = () => [
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] }
];
CdkStepper.propDecorators = {
    _steps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChildren"], args: [CdkStep, { descendants: true },] }],
    _stepHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChildren"], args: [CdkStepHeader, { descendants: true },] }],
    linear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    selectedIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    selectionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
    orientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](CdkStepper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
        args: [{
                selector: '[cdkStepper]',
                exportAs: 'cdkStepper'
            }]
    }], function () { return [{ type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }] }]; }, { selectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }], linear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], selectedIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], orientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], _steps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChildren"],
            args: [CdkStep, { descendants: true }]
        }], _stepHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChildren"],
            args: [CdkStepHeader, { descendants: true }]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Button that moves to the next step in a stepper workflow. */
class CdkStepperNext {
    constructor(_stepper) {
        this._stepper = _stepper;
        /** Type of the next button. Defaults to "submit" if not specified. */
        this.type = 'submit';
    }
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _handleClick() {
        this._stepper.next();
    }
}
CdkStepperNext.ɵfac = function CdkStepperNext_Factory(t) { return new (t || CdkStepperNext)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](CdkStepper)); };
CdkStepperNext.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({ type: CdkStepperNext, selectors: [["button", "cdkStepperNext", ""]], hostVars: 1, hostBindings: function CdkStepperNext_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CdkStepperNext_click_HostBindingHandler() { return ctx._handleClick(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵhostProperty"]("type", ctx.type);
    } }, inputs: { type: "type" } });
CdkStepperNext.ctorParameters = () => [
    { type: CdkStepper }
];
CdkStepperNext.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    _handleClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"], args: ['click',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](CdkStepperNext, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
        args: [{
                selector: 'button[cdkStepperNext]',
                host: {
                    '[type]': 'type'
                }
            }]
    }], function () { return [{ type: CdkStepper }]; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], 
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _handleClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
            args: ['click']
        }] }); })();
/** Button that moves to the previous step in a stepper workflow. */
class CdkStepperPrevious {
    constructor(_stepper) {
        this._stepper = _stepper;
        /** Type of the previous button. Defaults to "button" if not specified. */
        this.type = 'button';
    }
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _handleClick() {
        this._stepper.previous();
    }
}
CdkStepperPrevious.ɵfac = function CdkStepperPrevious_Factory(t) { return new (t || CdkStepperPrevious)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](CdkStepper)); };
CdkStepperPrevious.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({ type: CdkStepperPrevious, selectors: [["button", "cdkStepperPrevious", ""]], hostVars: 1, hostBindings: function CdkStepperPrevious_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CdkStepperPrevious_click_HostBindingHandler() { return ctx._handleClick(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵhostProperty"]("type", ctx.type);
    } }, inputs: { type: "type" } });
CdkStepperPrevious.ctorParameters = () => [
    { type: CdkStepper }
];
CdkStepperPrevious.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    _handleClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"], args: ['click',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](CdkStepperPrevious, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
        args: [{
                selector: 'button[cdkStepperPrevious]',
                host: {
                    '[type]': 'type'
                }
            }]
    }], function () { return [{ type: CdkStepper }]; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], 
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _handleClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
            args: ['click']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class CdkStepperModule {
}
CdkStepperModule.ɵfac = function CdkStepperModule_Factory(t) { return new (t || CdkStepperModule)(); };
CdkStepperModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: CdkStepperModule });
CdkStepperModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"]]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](CdkStepperModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
        args: [{
                imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"]],
                exports: [
                    CdkStep,
                    CdkStepper,
                    CdkStepHeader,
                    CdkStepLabel,
                    CdkStepperNext,
                    CdkStepperPrevious,
                ],
                declarations: [
                    CdkStep,
                    CdkStepper,
                    CdkStepHeader,
                    CdkStepLabel,
                    CdkStepperNext,
                    CdkStepperPrevious,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CdkStepperModule, { declarations: function () { return [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"]]; }, exports: function () { return [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious]; } }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=stepper.js.map

/***/ }),

/***/ "BmL2":
/*!******************************************************************!*\
  !*** ./src/app/forms/form-controls/form-controls.component.sass ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWNvbnRyb2xzLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "Bviw":
/*!****************************************************!*\
  !*** ./src/app/forms/wizard/wizard.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".centered-content {\n  margin: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx3aXphcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0YiLCJmaWxlIjoid2l6YXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcmVkLWNvbnRlbnQge1xyXG4gIG1hcmdpbjogMzBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "Gc2I":
/*!**********************************************************************!*\
  !*** ./src/app/forms/advance-controls/advance-controls.component.ts ***!
  \**********************************************************************/
/*! exports provided: AdvanceControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceControlsComponent", function() { return AdvanceControlsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_advance_controls_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./advance-controls.component.html */ "hpIr");
/* harmony import */ var _advance_controls_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advance-controls.component.sass */ "bZHX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "9YHx");






let AdvanceControlsComponent = class AdvanceControlsComponent {
    constructor() {
        this.hide = true;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.options = [{ name: "Mary" }, { name: "Shelley" }, { name: "Igor" }];
        this.colorControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("primary");
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]);
    }
    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(""), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((value) => (typeof value === "string" ? value : value.name)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((name) => (name ? this._filter(name) : this.options.slice())));
    }
    displayFn(user) {
        return user && user.name ? user.name : "";
    }
    _filter(name) {
        const filterValue = name.toLowerCase();
        return this.options.filter((option) => option.name.toLowerCase().indexOf(filterValue) === 0);
    }
    getErrorMessage() {
        return this.email.hasError("required")
            ? "You must enter a value"
            : this.email.hasError("email")
                ? "Not a valid email"
                : "";
    }
};
AdvanceControlsComponent.ctorParameters = () => [];
AdvanceControlsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-advance-controls",
        template: _raw_loader_advance_controls_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_advance_controls_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdvanceControlsComponent);



/***/ }),

/***/ "R9Cn":
/*!*********************************************************************************!*\
  !*** ./node_modules/ngx-color-picker/__ivy_ngcc__/fesm2015/ngx-color-picker.js ***!
  \*********************************************************************************/
/*! exports provided: Cmyk, ColorPickerComponent, ColorPickerDirective, ColorPickerModule, ColorPickerService, Hsla, Hsva, Rgba, SliderDirective, TextDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cmyk", function() { return Cmyk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerComponent", function() { return ColorPickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerDirective", function() { return ColorPickerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerModule", function() { return ColorPickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerService", function() { return ColorPickerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hsla", function() { return Hsla; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hsva", function() { return Hsva; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rgba", function() { return Rgba; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderDirective", function() { return SliderDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDirective", function() { return TextDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = ["dialogPopup"];
const _c1 = ["hueSlider"];
const _c2 = ["alphaSlider"];
function ColorPickerComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("arrow arrow-", ctx_r1.cpUsePosition, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx_r1.arrowTop, "px");
} }
function ColorPickerComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newValue", function ColorPickerComponent_div_3_Template_div_newValue_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.onColorChange($event); })("dragStart", function ColorPickerComponent_div_3_Template_div_dragStart_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.onDragStart("saturation-lightness"); })("dragEnd", function ColorPickerComponent_div_3_Template_div_dragEnd_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.onDragEnd("saturation-lightness"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r2.hueSliderColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rgX", 1)("rgY", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx_r2.slider == null ? null : ctx_r2.slider.v, "px")("left", ctx_r2.slider == null ? null : ctx_r2.slider.s, "px");
} }
function ColorPickerComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_button_8_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.onAddPresetColor($event, ctx_r20.selectedColor); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.cpAddColorButtonClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.cpPresetColors && ctx_r3.cpPresetColors.length >= ctx_r3.cpMaxPresetColorsLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.cpAddColorButtonText, " ");
} }
function ColorPickerComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 28);
} }
function ColorPickerComponent_div_20_input_6_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_20_input_6_Template_input_keyup_enter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.onAcceptColor($event); })("newValue", function ColorPickerComponent_div_20_input_6_Template_input_newValue_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.onAlphaInput($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 1)("value", ctx_r22.cmykText == null ? null : ctx_r22.cmykText.a);
} }
function ColorPickerComponent_div_20_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ColorPickerComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_20_Template_input_keyup_enter_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.onAcceptColor($event); })("newValue", function ColorPickerComponent_div_20_Template_input_newValue_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.onCyanInput($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_20_Template_input_keyup_enter_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.onAcceptColor($event); })("newValue", function ColorPickerComponent_div_20_Template_input_newValue_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.onMagentaInput($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_20_Template_input_keyup_enter_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.onAcceptColor($event); })("newValue", function ColorPickerComponent_div_20_Template_input_newValue_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.onYellowInput($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_20_Template_input_keyup_enter_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.onAcceptColor($event); })("newValue", function ColorPickerComponent_div_20_Template_input_newValue_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.onBlackInput($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ColorPickerComponent_div_20_input_6_Template, 1, 2, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "M");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "K");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ColorPickerComponent_div_20_div_16_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r8.format !== 3 ? "none" : "block");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 100)("value", ctx_r8.cmykText == null ? null : ctx_r8.cmykText.c);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 100)("value", ctx_r8.cmykText == null ? null : ctx_r8.cmykText.m);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 100)("value", ctx_r8.cmykText == null ? null : ctx_r8.cmykText.y);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 100)("value", ctx_r8.cmykText == null ? null : ctx_r8.cmykText.k);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.cpAlphaChannel !== "disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.cpAlphaChannel !== "disabled");
} }
function ColorPickerComponent_div_21_input_5_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_21_input_5_Template_input_keyup_enter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r38.onAcceptColor($event); })("newValue", function ColorPickerComponent_div_21_input_5_Template_input_newValue_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r40.onAlphaInput($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 1)("value", ctx_r36.hslaText == null ? null : ctx_r36.hslaText.a);
} }
function ColorPickerComponent_div_21_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ColorPickerComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.onAcceptColor($event); })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.onHueInput($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.onAcceptColor($event); })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.onSaturationInput($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.onAcceptColor($event); })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.onLightnessInput($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ColorPickerComponent_div_21_input_5_Template, 1, 2, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "H");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "S");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "L");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ColorPickerComponent_div_21_div_13_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r9.format !== 2 ? "none" : "block");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 360)("value", ctx_r9.hslaText == null ? null : ctx_r9.hslaText.h);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 100)("value", ctx_r9.hslaText == null ? null : ctx_r9.hslaText.s);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 100)("value", ctx_r9.hslaText == null ? null : ctx_r9.hslaText.l);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.cpAlphaChannel !== "disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.cpAlphaChannel !== "disabled");
} }
function ColorPickerComponent_div_22_input_5_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_22_input_5_Template_input_keyup_enter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r50.onAcceptColor($event); })("newValue", function ColorPickerComponent_div_22_input_5_Template_input_newValue_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r52.onAlphaInput($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 1)("value", ctx_r48.rgbaText == null ? null : ctx_r48.rgbaText.a);
} }
function ColorPickerComponent_div_22_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ColorPickerComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_22_Template_input_keyup_enter_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.onAcceptColor($event); })("newValue", function ColorPickerComponent_div_22_Template_input_newValue_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.onRedInput($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_22_Template_input_keyup_enter_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r56.onAcceptColor($event); })("newValue", function ColorPickerComponent_div_22_Template_input_newValue_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r57.onGreenInput($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_22_Template_input_keyup_enter_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.onAcceptColor($event); })("newValue", function ColorPickerComponent_div_22_Template_input_newValue_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r59.onBlueInput($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ColorPickerComponent_div_22_input_5_Template, 1, 2, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "R");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "G");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ColorPickerComponent_div_22_div_13_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r10.format !== 1 ? "none" : "block");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 255)("value", ctx_r10.rgbaText == null ? null : ctx_r10.rgbaText.r);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 255)("value", ctx_r10.rgbaText == null ? null : ctx_r10.rgbaText.g);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 255)("value", ctx_r10.rgbaText == null ? null : ctx_r10.rgbaText.b);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.cpAlphaChannel !== "disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.cpAlphaChannel !== "disabled");
} }
function ColorPickerComponent_div_23_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_23_input_3_Template_input_keyup_enter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r62.onAcceptColor($event); })("newValue", function ColorPickerComponent_div_23_input_3_Template_input_newValue_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r64.onAlphaInput($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 1)("value", ctx_r60.hexAlpha);
} }
function ColorPickerComponent_div_23_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ColorPickerComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ColorPickerComponent_div_23_Template_input_blur_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r65.onHexInput(null); })("keyup.enter", function ColorPickerComponent_div_23_Template_input_keyup_enter_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r67.onAcceptColor($event); })("newValue", function ColorPickerComponent_div_23_Template_input_newValue_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r68.onHexInput($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ColorPickerComponent_div_23_input_3_Template, 1, 2, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hex");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ColorPickerComponent_div_23_div_7_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r11.format !== 0 ? "none" : "block");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hex-alpha", ctx_r11.cpAlphaChannel === "forced");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r11.hexText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.cpAlphaChannel === "forced");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.cpAlphaChannel === "forced");
} }
function ColorPickerComponent_div_24_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_24_input_3_Template_input_keyup_enter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r70.onAcceptColor($event); })("newValue", function ColorPickerComponent_div_24_input_3_Template_input_newValue_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r72.onAlphaInput($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 1)("value", ctx_r69.hslaText == null ? null : ctx_r69.hslaText.a);
} }
function ColorPickerComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_24_Template_input_keyup_enter_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r73.onAcceptColor($event); })("newValue", function ColorPickerComponent_div_24_Template_input_newValue_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r75.onValueInput($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ColorPickerComponent_div_24_input_3_Template, 1, 2, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "V");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 100)("value", ctx_r12.hslaText == null ? null : ctx_r12.hslaText.l);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.cpAlphaChannel !== "disabled");
} }
function ColorPickerComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_div_25_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r76.onFormatToggle(-1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_div_25_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r78.onFormatToggle(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ColorPickerComponent_div_26_div_4_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_div_26_div_4_div_1_span_1_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86); const color_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r84.onRemovePresetColor($event, color_r82); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r83.cpRemoveColorButtonClass);
} }
function ColorPickerComponent_div_26_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_div_26_div_4_div_1_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88); const color_r82 = restoredCtx.$implicit; const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r87.setColorFromString(color_r82); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColorPickerComponent_div_26_div_4_div_1_span_1_Template, 1, 3, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r82 = ctx.$implicit;
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", color_r82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r81.cpAddColorButton);
} }
function ColorPickerComponent_div_26_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColorPickerComponent_div_26_div_4_div_1_Template, 2, 3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r79.cpPresetColorsClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r79.cpPresetColors);
} }
function ColorPickerComponent_div_26_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r80.cpPresetEmptyMessageClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r80.cpPresetEmptyMessage);
} }
function ColorPickerComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ColorPickerComponent_div_26_div_4_Template, 2, 4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ColorPickerComponent_div_26_div_5_Template, 2, 4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.cpPresetLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.cpPresetColors == null ? null : ctx_r14.cpPresetColors.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r14.cpPresetColors == null ? null : ctx_r14.cpPresetColors.length) && ctx_r14.cpAddColorButton);
} }
function ColorPickerComponent_div_27_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_div_27_button_1_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r91.onCancelColor($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r89.cpCancelButtonClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r89.cpCancelButtonText);
} }
function ColorPickerComponent_div_27_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_div_27_button_2_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r93.onAcceptColor($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r90.cpOKButtonClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r90.cpOKButtonText);
} }
function ColorPickerComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColorPickerComponent_div_27_button_1_Template, 2, 4, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ColorPickerComponent_div_27_button_2_Template, 2, 4, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.cpCancelButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.cpOKButton);
} }
var ColorFormats;
(function (ColorFormats) {
    ColorFormats[ColorFormats["HEX"] = 0] = "HEX";
    ColorFormats[ColorFormats["RGBA"] = 1] = "RGBA";
    ColorFormats[ColorFormats["HSLA"] = 2] = "HSLA";
    ColorFormats[ColorFormats["CMYK"] = 3] = "CMYK";
})(ColorFormats || (ColorFormats = {}));
class Rgba {
    constructor(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
}
class Hsva {
    constructor(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
}
class Hsla {
    constructor(h, s, l, a) {
        this.h = h;
        this.s = s;
        this.l = l;
        this.a = a;
    }
}
class Cmyk {
    constructor(c, m, y, k, a = 1) {
        this.c = c;
        this.m = m;
        this.y = y;
        this.k = k;
        this.a = a;
    }
}

function calculateAutoPositioning(elBounds, triggerElBounds) {
    // Defaults
    let usePositionX = 'right';
    let usePositionY = 'bottom';
    // Calculate collisions
    const { height, width } = elBounds;
    const { top, left } = triggerElBounds;
    const bottom = top + triggerElBounds.height;
    const right = left + triggerElBounds.width;
    const collisionTop = top - height < 0;
    const collisionBottom = bottom + height > (window.innerHeight || document.documentElement.clientHeight);
    const collisionLeft = left - width < 0;
    const collisionRight = right + width > (window.innerWidth || document.documentElement.clientWidth);
    const collisionAll = collisionTop && collisionBottom && collisionLeft && collisionRight;
    // Generate X & Y position values
    if (collisionBottom) {
        usePositionY = 'top';
    }
    if (collisionTop) {
        usePositionY = 'bottom';
    }
    if (collisionLeft) {
        usePositionX = 'right';
    }
    if (collisionRight) {
        usePositionX = 'left';
    }
    // Choose the largest gap available
    if (collisionAll) {
        const postions = ['left', 'right', 'top', 'bottom'];
        return postions.reduce((prev, next) => elBounds[prev] > elBounds[next] ? prev : next);
    }
    if ((collisionLeft && collisionRight)) {
        if (collisionTop) {
            return 'bottom';
        }
        if (collisionBottom) {
            return 'top';
        }
        return top > bottom ? 'top' : 'bottom';
    }
    if ((collisionTop && collisionBottom)) {
        if (collisionLeft) {
            return 'right';
        }
        if (collisionRight) {
            return 'left';
        }
        return left > right ? 'left' : 'right';
    }
    return `${usePositionY}-${usePositionX}`;
}
function detectIE() {
    let ua = '';
    if (typeof navigator !== 'undefined') {
        ua = navigator.userAgent.toLowerCase();
    }
    const msie = ua.indexOf('msie ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }
    // Other browser
    return false;
}
class TextDirective {
    constructor() {
        this.newValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    inputChange(event) {
        const value = event.target.value;
        if (this.rg === undefined) {
            this.newValue.emit(value);
        }
        else {
            const numeric = parseFloat(value);
            this.newValue.emit({ v: numeric, rg: this.rg });
        }
    }
}
TextDirective.ɵfac = function TextDirective_Factory(t) { return new (t || TextDirective)(); };
TextDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TextDirective, selectors: [["", "text", ""]], hostBindings: function TextDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TextDirective_input_HostBindingHandler($event) { return ctx.inputChange($event); });
    } }, inputs: { rg: "rg", text: "text" }, outputs: { newValue: "newValue" } });
TextDirective.propDecorators = {
    rg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    newValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    inputChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['input', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[text]'
            }]
    }], function () { return []; }, { newValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], inputChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['input', ['$event']]
        }], rg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class SliderDirective {
    constructor(elRef) {
        this.elRef = elRef;
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.listenerMove = (event) => this.move(event);
        this.listenerStop = () => this.stop();
    }
    mouseDown(event) {
        this.start(event);
    }
    touchStart(event) {
        this.start(event);
    }
    move(event) {
        event.preventDefault();
        this.setCursor(event);
    }
    start(event) {
        this.setCursor(event);
        event.stopPropagation();
        document.addEventListener('mouseup', this.listenerStop);
        document.addEventListener('touchend', this.listenerStop);
        document.addEventListener('mousemove', this.listenerMove);
        document.addEventListener('touchmove', this.listenerMove);
        this.dragStart.emit();
    }
    stop() {
        document.removeEventListener('mouseup', this.listenerStop);
        document.removeEventListener('touchend', this.listenerStop);
        document.removeEventListener('mousemove', this.listenerMove);
        document.removeEventListener('touchmove', this.listenerMove);
        this.dragEnd.emit();
    }
    getX(event) {
        const position = this.elRef.nativeElement.getBoundingClientRect();
        const pageX = (event.pageX !== undefined) ? event.pageX : event.touches[0].pageX;
        return pageX - position.left - window.pageXOffset;
    }
    getY(event) {
        const position = this.elRef.nativeElement.getBoundingClientRect();
        const pageY = (event.pageY !== undefined) ? event.pageY : event.touches[0].pageY;
        return pageY - position.top - window.pageYOffset;
    }
    setCursor(event) {
        const width = this.elRef.nativeElement.offsetWidth;
        const height = this.elRef.nativeElement.offsetHeight;
        const x = Math.max(0, Math.min(this.getX(event), width));
        const y = Math.max(0, Math.min(this.getY(event), height));
        if (this.rgX !== undefined && this.rgY !== undefined) {
            this.newValue.emit({ s: x / width, v: (1 - y / height), rgX: this.rgX, rgY: this.rgY });
        }
        else if (this.rgX === undefined && this.rgY !== undefined) {
            this.newValue.emit({ v: y / height, rgY: this.rgY });
        }
        else if (this.rgX !== undefined && this.rgY === undefined) {
            this.newValue.emit({ v: x / width, rgX: this.rgX });
        }
    }
}
SliderDirective.ɵfac = function SliderDirective_Factory(t) { return new (t || SliderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
SliderDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SliderDirective, selectors: [["", "slider", ""]], hostBindings: function SliderDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function SliderDirective_mousedown_HostBindingHandler($event) { return ctx.mouseDown($event); })("touchstart", function SliderDirective_touchstart_HostBindingHandler($event) { return ctx.touchStart($event); });
    } }, inputs: { rgX: "rgX", rgY: "rgY", slider: "slider" }, outputs: { dragEnd: "dragEnd", dragStart: "dragStart", newValue: "newValue" } });
SliderDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
SliderDirective.propDecorators = {
    rgX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rgY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    slider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    dragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    newValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mouseDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mousedown', ['$event'],] }],
    touchStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['touchstart', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[slider]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { dragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], dragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], newValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mouseDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousedown', ['$event']]
        }], touchStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['touchstart', ['$event']]
        }], rgX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rgY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], slider: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class SliderPosition {
    constructor(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
}
class SliderDimension {
    constructor(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
}

class ColorPickerService {
    constructor() {
        this.active = null;
    }
    setActive(active) {
        if (this.active && this.active !== active && this.active.cpDialogDisplay !== 'inline') {
            this.active.closeDialog();
        }
        this.active = active;
    }
    hsva2hsla(hsva) {
        const h = hsva.h, s = hsva.s, v = hsva.v, a = hsva.a;
        if (v === 0) {
            return new Hsla(h, 0, 0, a);
        }
        else if (s === 0 && v === 1) {
            return new Hsla(h, 1, 1, a);
        }
        else {
            const l = v * (2 - s) / 2;
            return new Hsla(h, v * s / (1 - Math.abs(2 * l - 1)), l, a);
        }
    }
    hsla2hsva(hsla) {
        const h = Math.min(hsla.h, 1), s = Math.min(hsla.s, 1);
        const l = Math.min(hsla.l, 1), a = Math.min(hsla.a, 1);
        if (l === 0) {
            return new Hsva(h, 0, 0, a);
        }
        else {
            const v = l + s * (1 - Math.abs(2 * l - 1)) / 2;
            return new Hsva(h, 2 * (v - l) / v, v, a);
        }
    }
    hsvaToRgba(hsva) {
        let r, g, b;
        const h = hsva.h, s = hsva.s, v = hsva.v, a = hsva.a;
        const i = Math.floor(h * 6);
        const f = h * 6 - i;
        const p = v * (1 - s);
        const q = v * (1 - f * s);
        const t = v * (1 - (1 - f) * s);
        switch (i % 6) {
            case 0:
                r = v, g = t, b = p;
                break;
            case 1:
                r = q, g = v, b = p;
                break;
            case 2:
                r = p, g = v, b = t;
                break;
            case 3:
                r = p, g = q, b = v;
                break;
            case 4:
                r = t, g = p, b = v;
                break;
            case 5:
                r = v, g = p, b = q;
                break;
            default:
                r = 0, g = 0, b = 0;
        }
        return new Rgba(r, g, b, a);
    }
    cmykToRgb(cmyk) {
        const r = (1 - cmyk.c) * (1 - cmyk.k);
        const g = (1 - cmyk.m) * (1 - cmyk.k);
        const b = (1 - cmyk.y) * (1 - cmyk.k);
        return new Rgba(r, g, b, cmyk.a);
    }
    rgbaToCmyk(rgba) {
        const k = 1 - Math.max(rgba.r, rgba.g, rgba.b);
        if (k === 1) {
            return new Cmyk(0, 0, 0, 1, rgba.a);
        }
        else {
            const c = (1 - rgba.r - k) / (1 - k);
            const m = (1 - rgba.g - k) / (1 - k);
            const y = (1 - rgba.b - k) / (1 - k);
            return new Cmyk(c, m, y, k, rgba.a);
        }
    }
    rgbaToHsva(rgba) {
        let h, s;
        const r = Math.min(rgba.r, 1), g = Math.min(rgba.g, 1);
        const b = Math.min(rgba.b, 1), a = Math.min(rgba.a, 1);
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        const v = max, d = max - min;
        s = (max === 0) ? 0 : d / max;
        if (max === min) {
            h = 0;
        }
        else {
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
                default:
                    h = 0;
            }
            h /= 6;
        }
        return new Hsva(h, s, v, a);
    }
    rgbaToHex(rgba, allowHex8) {
        /* tslint:disable:no-bitwise */
        let hex = '#' + ((1 << 24) | (rgba.r << 16) | (rgba.g << 8) | rgba.b).toString(16).substr(1);
        if (allowHex8) {
            hex += ((1 << 8) | Math.round(rgba.a * 255)).toString(16).substr(1);
        }
        /* tslint:enable:no-bitwise */
        return hex;
    }
    normalizeCMYK(cmyk) {
        return new Cmyk(cmyk.c / 100, cmyk.m / 100, cmyk.y / 100, cmyk.k / 100, cmyk.a);
    }
    denormalizeCMYK(cmyk) {
        return new Cmyk(Math.floor(cmyk.c * 100), Math.floor(cmyk.m * 100), Math.floor(cmyk.y * 100), Math.floor(cmyk.k * 100), cmyk.a);
    }
    denormalizeRGBA(rgba) {
        return new Rgba(Math.round(rgba.r * 255), Math.round(rgba.g * 255), Math.round(rgba.b * 255), rgba.a);
    }
    stringToHsva(colorString = '', allowHex8 = false) {
        let hsva = null;
        colorString = (colorString || '').toLowerCase();
        const stringParsers = [
            {
                re: /(rgb)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: function (execResult) {
                    return new Rgba(parseInt(execResult[2], 10) / 255, parseInt(execResult[3], 10) / 255, parseInt(execResult[4], 10) / 255, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
                }
            }, {
                re: /(hsl)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: function (execResult) {
                    return new Hsla(parseInt(execResult[2], 10) / 360, parseInt(execResult[3], 10) / 100, parseInt(execResult[4], 10) / 100, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
                }
            }
        ];
        if (allowHex8) {
            stringParsers.push({
                re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})?$/,
                parse: function (execResult) {
                    return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, parseInt(execResult[4] || 'FF', 16) / 255);
                }
            });
        }
        else {
            stringParsers.push({
                re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/,
                parse: function (execResult) {
                    return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, 1);
                }
            });
        }
        stringParsers.push({
            re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/,
            parse: function (execResult) {
                return new Rgba(parseInt(execResult[1] + execResult[1], 16) / 255, parseInt(execResult[2] + execResult[2], 16) / 255, parseInt(execResult[3] + execResult[3], 16) / 255, 1);
            }
        });
        for (const key in stringParsers) {
            if (stringParsers.hasOwnProperty(key)) {
                const parser = stringParsers[key];
                const match = parser.re.exec(colorString), color = match && parser.parse(match);
                if (color) {
                    if (color instanceof Rgba) {
                        hsva = this.rgbaToHsva(color);
                    }
                    else if (color instanceof Hsla) {
                        hsva = this.hsla2hsva(color);
                    }
                    return hsva;
                }
            }
        }
        return hsva;
    }
    outputFormat(hsva, outputFormat, alphaChannel) {
        if (outputFormat === 'auto') {
            outputFormat = hsva.a < 1 ? 'rgba' : 'hex';
        }
        switch (outputFormat) {
            case 'hsla':
                const hsla = this.hsva2hsla(hsva);
                const hslaText = new Hsla(Math.round((hsla.h) * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
                if (hsva.a < 1 || alphaChannel === 'always') {
                    return 'hsla(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%,' +
                        hslaText.a + ')';
                }
                else {
                    return 'hsl(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%)';
                }
            case 'rgba':
                const rgba = this.denormalizeRGBA(this.hsvaToRgba(hsva));
                if (hsva.a < 1 || alphaChannel === 'always') {
                    return 'rgba(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ',' +
                        Math.round(rgba.a * 100) / 100 + ')';
                }
                else {
                    return 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';
                }
            default:
                const allowHex8 = (alphaChannel === 'always' || alphaChannel === 'forced');
                return this.rgbaToHex(this.denormalizeRGBA(this.hsvaToRgba(hsva)), allowHex8);
        }
    }
}
ColorPickerService.ɵfac = function ColorPickerService_Factory(t) { return new (t || ColorPickerService)(); };
ColorPickerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ColorPickerService, factory: ColorPickerService.ɵfac });
ColorPickerService.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorPickerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();

class ColorPickerComponent {
    constructor(elRef, cdRef, service) {
        this.elRef = elRef;
        this.cdRef = cdRef;
        this.service = service;
        this.isIE10 = false;
        this.dialogArrowSize = 10;
        this.dialogArrowOffset = 15;
        this.dialogInputFields = [
            ColorFormats.HEX,
            ColorFormats.RGBA,
            ColorFormats.HSLA,
            ColorFormats.CMYK
        ];
        this.useRootViewContainer = false;
    }
    handleEsc(event) {
        if (this.show && this.cpDialogDisplay === 'popup') {
            this.onCancelColor(event);
        }
    }
    handleEnter(event) {
        if (this.show && this.cpDialogDisplay === 'popup') {
            this.onAcceptColor(event);
        }
    }
    ngOnInit() {
        this.slider = new SliderPosition(0, 0, 0, 0);
        const hueWidth = this.hueSlider.nativeElement.offsetWidth || 140;
        const alphaWidth = this.alphaSlider.nativeElement.offsetWidth || 140;
        this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
        if (this.cpCmykEnabled) {
            this.format = ColorFormats.CMYK;
        }
        else if (this.cpOutputFormat === 'rgba') {
            this.format = ColorFormats.RGBA;
        }
        else if (this.cpOutputFormat === 'hsla') {
            this.format = ColorFormats.HSLA;
        }
        else {
            this.format = ColorFormats.HEX;
        }
        this.listenerMouseDown = (event) => { this.onMouseDown(event); };
        this.listenerResize = () => { this.onResize(); };
        this.openDialog(this.initialColor, false);
    }
    ngOnDestroy() {
        this.closeDialog();
    }
    ngAfterViewInit() {
        if (this.cpWidth !== 230 || this.cpDialogDisplay === 'inline') {
            const hueWidth = this.hueSlider.nativeElement.offsetWidth || 140;
            const alphaWidth = this.alphaSlider.nativeElement.offsetWidth || 140;
            this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
            this.updateColorPicker(false);
            this.cdRef.detectChanges();
        }
    }
    openDialog(color, emit = true) {
        this.service.setActive(this);
        if (!this.width) {
            this.cpWidth = this.directiveElementRef.nativeElement.offsetWidth;
        }
        if (!this.height) {
            this.height = 320;
        }
        this.setInitialColor(color);
        this.setColorFromString(color, emit);
        this.openColorPicker();
    }
    closeDialog() {
        this.closeColorPicker();
    }
    setupDialog(instance, elementRef, color, cpWidth, cpHeight, cpDialogDisplay, cpFallbackColor, cpColorMode, cpCmykEnabled, cpAlphaChannel, cpOutputFormat, cpDisableInput, cpIgnoredElements, cpSaveClickOutside, cpCloseClickOutside, cpUseRootViewContainer, cpPosition, cpPositionOffset, cpPositionRelativeToArrow, cpPresetLabel, cpPresetColors, cpPresetColorsClass, cpMaxPresetColorsLength, cpPresetEmptyMessage, cpPresetEmptyMessageClass, cpOKButton, cpOKButtonClass, cpOKButtonText, cpCancelButton, cpCancelButtonClass, cpCancelButtonText, cpAddColorButton, cpAddColorButtonClass, cpAddColorButtonText, cpRemoveColorButtonClass, cpTriggerElement) {
        this.setInitialColor(color);
        this.setColorMode(cpColorMode);
        this.isIE10 = (detectIE() === 10);
        this.directiveInstance = instance;
        this.directiveElementRef = elementRef;
        this.cpDisableInput = cpDisableInput;
        this.cpCmykEnabled = cpCmykEnabled;
        this.cpAlphaChannel = cpAlphaChannel;
        this.cpOutputFormat = cpOutputFormat;
        this.cpDialogDisplay = cpDialogDisplay;
        this.cpIgnoredElements = cpIgnoredElements;
        this.cpSaveClickOutside = cpSaveClickOutside;
        this.cpCloseClickOutside = cpCloseClickOutside;
        this.useRootViewContainer = cpUseRootViewContainer;
        this.width = this.cpWidth = parseInt(cpWidth, 10);
        this.height = this.cpHeight = parseInt(cpHeight, 10);
        this.cpPosition = cpPosition;
        this.cpPositionOffset = parseInt(cpPositionOffset, 10);
        this.cpOKButton = cpOKButton;
        this.cpOKButtonText = cpOKButtonText;
        this.cpOKButtonClass = cpOKButtonClass;
        this.cpCancelButton = cpCancelButton;
        this.cpCancelButtonText = cpCancelButtonText;
        this.cpCancelButtonClass = cpCancelButtonClass;
        this.fallbackColor = cpFallbackColor || '#fff';
        this.setPresetConfig(cpPresetLabel, cpPresetColors);
        this.cpPresetColorsClass = cpPresetColorsClass;
        this.cpMaxPresetColorsLength = cpMaxPresetColorsLength;
        this.cpPresetEmptyMessage = cpPresetEmptyMessage;
        this.cpPresetEmptyMessageClass = cpPresetEmptyMessageClass;
        this.cpAddColorButton = cpAddColorButton;
        this.cpAddColorButtonText = cpAddColorButtonText;
        this.cpAddColorButtonClass = cpAddColorButtonClass;
        this.cpRemoveColorButtonClass = cpRemoveColorButtonClass;
        this.cpTriggerElement = cpTriggerElement;
        if (!cpPositionRelativeToArrow) {
            this.dialogArrowOffset = 0;
        }
        if (cpDialogDisplay === 'inline') {
            this.dialogArrowSize = 0;
            this.dialogArrowOffset = 0;
        }
        if (cpOutputFormat === 'hex' &&
            cpAlphaChannel !== 'always' && cpAlphaChannel !== 'forced') {
            this.cpAlphaChannel = 'disabled';
        }
    }
    setColorMode(mode) {
        switch (mode.toString().toUpperCase()) {
            case '1':
            case 'C':
            case 'COLOR':
                this.cpColorMode = 1;
                break;
            case '2':
            case 'G':
            case 'GRAYSCALE':
                this.cpColorMode = 2;
                break;
            case '3':
            case 'P':
            case 'PRESETS':
                this.cpColorMode = 3;
                break;
            default:
                this.cpColorMode = 1;
        }
    }
    setInitialColor(color) {
        this.initialColor = color;
    }
    setPresetConfig(cpPresetLabel, cpPresetColors) {
        this.cpPresetLabel = cpPresetLabel;
        this.cpPresetColors = cpPresetColors;
    }
    setColorFromString(value, emit = true, update = true) {
        let hsva;
        if (this.cpAlphaChannel === 'always' || this.cpAlphaChannel === 'forced') {
            hsva = this.service.stringToHsva(value, true);
            if (!hsva && !this.hsva) {
                hsva = this.service.stringToHsva(value, false);
            }
        }
        else {
            hsva = this.service.stringToHsva(value, false);
        }
        if (!hsva && !this.hsva) {
            hsva = this.service.stringToHsva(this.fallbackColor, false);
        }
        if (hsva) {
            this.hsva = hsva;
            this.sliderH = this.hsva.h;
            if (this.cpOutputFormat === 'hex' && this.cpAlphaChannel === 'disabled') {
                this.hsva.a = 1;
            }
            this.updateColorPicker(emit, update);
        }
    }
    onResize() {
        if (this.position === 'fixed') {
            this.setDialogPosition();
        }
        else if (this.cpDialogDisplay !== 'inline') {
            this.closeColorPicker();
        }
    }
    onDragEnd(slider) {
        this.directiveInstance.sliderDragEnd({ slider: slider, color: this.outputColor });
    }
    onDragStart(slider) {
        this.directiveInstance.sliderDragStart({ slider: slider, color: this.outputColor });
    }
    onMouseDown(event) {
        if (this.show &&
            !this.isIE10 && this.cpDialogDisplay === 'popup' &&
            event.target !== this.directiveElementRef.nativeElement &&
            !this.isDescendant(this.elRef.nativeElement, event.target) &&
            !this.isDescendant(this.directiveElementRef.nativeElement, event.target) &&
            this.cpIgnoredElements.filter((item) => item === event.target).length === 0) {
            if (this.cpSaveClickOutside) {
                this.directiveInstance.colorSelected(this.outputColor);
            }
            else {
                this.hsva = null;
                this.setColorFromString(this.initialColor, false);
                if (this.cpCmykEnabled) {
                    this.directiveInstance.cmykChanged(this.cmykColor);
                }
                this.directiveInstance.colorChanged(this.initialColor);
                this.directiveInstance.colorCanceled();
            }
            if (this.cpCloseClickOutside) {
                this.closeColorPicker();
            }
        }
    }
    onAcceptColor(event) {
        event.stopPropagation();
        if (this.outputColor) {
            this.directiveInstance.colorSelected(this.outputColor);
        }
        if (this.cpDialogDisplay === 'popup') {
            this.closeColorPicker();
        }
    }
    onCancelColor(event) {
        this.hsva = null;
        event.stopPropagation();
        this.directiveInstance.colorCanceled();
        this.setColorFromString(this.initialColor, true);
        if (this.cpDialogDisplay === 'popup') {
            if (this.cpCmykEnabled) {
                this.directiveInstance.cmykChanged(this.cmykColor);
            }
            this.directiveInstance.colorChanged(this.initialColor, true);
            this.closeColorPicker();
        }
    }
    onFormatToggle(change) {
        const availableFormats = this.dialogInputFields.length -
            (this.cpCmykEnabled ? 0 : 1);
        const nextFormat = (((this.dialogInputFields.indexOf(this.format) + change) %
            availableFormats) + availableFormats) % availableFormats;
        this.format = this.dialogInputFields[nextFormat];
    }
    onColorChange(value) {
        this.hsva.s = value.s / value.rgX;
        this.hsva.v = value.v / value.rgY;
        this.updateColorPicker();
        this.directiveInstance.sliderChanged({
            slider: 'lightness',
            value: this.hsva.v,
            color: this.outputColor
        });
        this.directiveInstance.sliderChanged({
            slider: 'saturation',
            value: this.hsva.s,
            color: this.outputColor
        });
    }
    onHueChange(value) {
        this.hsva.h = value.v / value.rgX;
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
        this.directiveInstance.sliderChanged({
            slider: 'hue',
            value: this.hsva.h,
            color: this.outputColor
        });
    }
    onValueChange(value) {
        this.hsva.v = value.v / value.rgX;
        this.updateColorPicker();
        this.directiveInstance.sliderChanged({
            slider: 'value',
            value: this.hsva.v,
            color: this.outputColor
        });
    }
    onAlphaChange(value) {
        this.hsva.a = value.v / value.rgX;
        this.updateColorPicker();
        this.directiveInstance.sliderChanged({
            slider: 'alpha',
            value: this.hsva.a,
            color: this.outputColor
        });
    }
    onHexInput(value) {
        if (value === null) {
            this.updateColorPicker();
        }
        else {
            if (value && value[0] !== '#') {
                value = '#' + value;
            }
            let validHex = /^#([a-f0-9]{3}|[a-f0-9]{6})$/gi;
            if (this.cpAlphaChannel === 'always') {
                validHex = /^#([a-f0-9]{3}|[a-f0-9]{6}|[a-f0-9]{8})$/gi;
            }
            const valid = validHex.test(value);
            if (valid) {
                if (value.length < 5) {
                    value = '#' + value.substring(1)
                        .split('')
                        .map(c => c + c)
                        .join('');
                }
                if (this.cpAlphaChannel === 'forced') {
                    value += Math.round(this.hsva.a * 255).toString(16);
                }
                this.setColorFromString(value, true, false);
            }
            this.directiveInstance.inputChanged({
                input: 'hex',
                valid: valid,
                value: value,
                color: this.outputColor
            });
        }
    }
    onRedInput(value) {
        const rgba = this.service.hsvaToRgba(this.hsva);
        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            rgba.r = value.v / value.rg;
            this.hsva = this.service.rgbaToHsva(rgba);
            this.sliderH = this.hsva.h;
            this.updateColorPicker();
        }
        this.directiveInstance.inputChanged({
            input: 'red',
            valid: valid,
            value: rgba.r,
            color: this.outputColor
        });
    }
    onBlueInput(value) {
        const rgba = this.service.hsvaToRgba(this.hsva);
        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            rgba.b = value.v / value.rg;
            this.hsva = this.service.rgbaToHsva(rgba);
            this.sliderH = this.hsva.h;
            this.updateColorPicker();
        }
        this.directiveInstance.inputChanged({
            input: 'blue',
            valid: valid,
            value: rgba.b,
            color: this.outputColor
        });
    }
    onGreenInput(value) {
        const rgba = this.service.hsvaToRgba(this.hsva);
        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            rgba.g = value.v / value.rg;
            this.hsva = this.service.rgbaToHsva(rgba);
            this.sliderH = this.hsva.h;
            this.updateColorPicker();
        }
        this.directiveInstance.inputChanged({
            input: 'green',
            valid: valid,
            value: rgba.g,
            color: this.outputColor
        });
    }
    onHueInput(value) {
        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            this.hsva.h = value.v / value.rg;
            this.sliderH = this.hsva.h;
            this.updateColorPicker();
        }
        this.directiveInstance.inputChanged({
            input: 'hue',
            valid: valid,
            value: this.hsva.h,
            color: this.outputColor
        });
    }
    onValueInput(value) {
        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            this.hsva.v = value.v / value.rg;
            this.updateColorPicker();
        }
        this.directiveInstance.inputChanged({
            input: 'value',
            valid: valid,
            value: this.hsva.v,
            color: this.outputColor
        });
    }
    onAlphaInput(value) {
        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            this.hsva.a = value.v / value.rg;
            this.updateColorPicker();
        }
        this.directiveInstance.inputChanged({
            input: 'alpha',
            valid: valid,
            value: this.hsva.a,
            color: this.outputColor
        });
    }
    onLightnessInput(value) {
        const hsla = this.service.hsva2hsla(this.hsva);
        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            hsla.l = value.v / value.rg;
            this.hsva = this.service.hsla2hsva(hsla);
            this.sliderH = this.hsva.h;
            this.updateColorPicker();
        }
        this.directiveInstance.inputChanged({
            input: 'lightness',
            valid: valid,
            value: hsla.l,
            color: this.outputColor
        });
    }
    onSaturationInput(value) {
        const hsla = this.service.hsva2hsla(this.hsva);
        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            hsla.s = value.v / value.rg;
            this.hsva = this.service.hsla2hsva(hsla);
            this.sliderH = this.hsva.h;
            this.updateColorPicker();
        }
        this.directiveInstance.inputChanged({
            input: 'saturation',
            valid: valid,
            value: hsla.s,
            color: this.outputColor
        });
    }
    onCyanInput(value) {
        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            this.cmyk.c = value.v;
            this.updateColorPicker(false, true, true);
        }
        this.directiveInstance.inputChanged({
            input: 'cyan',
            valid: true,
            value: this.cmyk.c,
            color: this.outputColor
        });
    }
    onMagentaInput(value) {
        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            this.cmyk.m = value.v;
            this.updateColorPicker(false, true, true);
        }
        this.directiveInstance.inputChanged({
            input: 'magenta',
            valid: true,
            value: this.cmyk.m,
            color: this.outputColor
        });
    }
    onYellowInput(value) {
        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            this.cmyk.y = value.v;
            this.updateColorPicker(false, true, true);
        }
        this.directiveInstance.inputChanged({
            input: 'yellow',
            valid: true,
            value: this.cmyk.y,
            color: this.outputColor
        });
    }
    onBlackInput(value) {
        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            this.cmyk.k = value.v;
            this.updateColorPicker(false, true, true);
        }
        this.directiveInstance.inputChanged({
            input: 'black',
            valid: true,
            value: this.cmyk.k,
            color: this.outputColor
        });
    }
    onAddPresetColor(event, value) {
        event.stopPropagation();
        if (!this.cpPresetColors.filter((color) => (color === value)).length) {
            this.cpPresetColors = this.cpPresetColors.concat(value);
            this.directiveInstance.presetColorsChanged(this.cpPresetColors);
        }
    }
    onRemovePresetColor(event, value) {
        event.stopPropagation();
        this.cpPresetColors = this.cpPresetColors.filter((color) => (color !== value));
        this.directiveInstance.presetColorsChanged(this.cpPresetColors);
    }
    // Private helper functions for the color picker dialog status
    openColorPicker() {
        if (!this.show) {
            this.show = true;
            this.hidden = true;
            setTimeout(() => {
                this.hidden = false;
                this.setDialogPosition();
                this.cdRef.detectChanges();
            }, 0);
            this.directiveInstance.stateChanged(true);
            if (!this.isIE10) {
                document.addEventListener('mousedown', this.listenerMouseDown);
                document.addEventListener('touchstart', this.listenerMouseDown);
            }
            window.addEventListener('resize', this.listenerResize);
        }
    }
    closeColorPicker() {
        if (this.show) {
            this.show = false;
            this.directiveInstance.stateChanged(false);
            if (!this.isIE10) {
                document.removeEventListener('mousedown', this.listenerMouseDown);
                document.removeEventListener('touchstart', this.listenerMouseDown);
            }
            window.removeEventListener('resize', this.listenerResize);
            if (!this.cdRef['destroyed']) {
                this.cdRef.detectChanges();
            }
        }
    }
    updateColorPicker(emit = true, update = true, cmykInput = false) {
        if (this.sliderDimMax) {
            if (this.cpColorMode === 2) {
                this.hsva.s = 0;
            }
            let hue, hsla, rgba;
            const lastOutput = this.outputColor;
            hsla = this.service.hsva2hsla(this.hsva);
            if (!this.cpCmykEnabled) {
                rgba = this.service.denormalizeRGBA(this.service.hsvaToRgba(this.hsva));
            }
            else {
                if (!cmykInput) {
                    rgba = this.service.hsvaToRgba(this.hsva);
                    this.cmyk = this.service.denormalizeCMYK(this.service.rgbaToCmyk(rgba));
                }
                else {
                    rgba = this.service.cmykToRgb(this.service.normalizeCMYK(this.cmyk));
                    this.hsva = this.service.rgbaToHsva(rgba);
                }
                rgba = this.service.denormalizeRGBA(rgba);
                this.sliderH = this.hsva.h;
            }
            hue = this.service.denormalizeRGBA(this.service.hsvaToRgba(new Hsva(this.sliderH || this.hsva.h, 1, 1, 1)));
            if (update) {
                this.hslaText = new Hsla(Math.round((hsla.h) * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
                this.rgbaText = new Rgba(rgba.r, rgba.g, rgba.b, Math.round(rgba.a * 100) / 100);
                if (this.cpCmykEnabled) {
                    this.cmykText = new Cmyk(this.cmyk.c, this.cmyk.m, this.cmyk.y, this.cmyk.k, Math.round(this.cmyk.a * 100) / 100);
                }
                const allowHex8 = this.cpAlphaChannel === 'always';
                this.hexText = this.service.rgbaToHex(rgba, allowHex8);
                this.hexAlpha = this.rgbaText.a;
            }
            if (this.cpOutputFormat === 'auto') {
                if (this.format !== ColorFormats.RGBA && this.format !== ColorFormats.CMYK) {
                    if (this.hsva.a < 1) {
                        this.format = this.hsva.a < 1 ? ColorFormats.RGBA : ColorFormats.HEX;
                    }
                }
            }
            this.hueSliderColor = 'rgb(' + hue.r + ',' + hue.g + ',' + hue.b + ')';
            this.alphaSliderColor = 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';
            this.outputColor = this.service.outputFormat(this.hsva, this.cpOutputFormat, this.cpAlphaChannel);
            this.selectedColor = this.service.outputFormat(this.hsva, 'rgba', null);
            if (this.format !== ColorFormats.CMYK) {
                this.cmykColor = '';
            }
            else {
                if (this.cpAlphaChannel === 'always' || this.cpAlphaChannel === 'enabled' ||
                    this.cpAlphaChannel === 'forced') {
                    const alpha = Math.round(this.cmyk.a * 100) / 100;
                    this.cmykColor = `cmyka(${this.cmyk.c},${this.cmyk.m},${this.cmyk.y},${this.cmyk.k},${alpha})`;
                }
                else {
                    this.cmykColor = `cmyk(${this.cmyk.c},${this.cmyk.m},${this.cmyk.y},${this.cmyk.k})`;
                }
            }
            this.slider = new SliderPosition((this.sliderH || this.hsva.h) * this.sliderDimMax.h - 8, this.hsva.s * this.sliderDimMax.s - 8, (1 - this.hsva.v) * this.sliderDimMax.v - 8, this.hsva.a * this.sliderDimMax.a - 8);
            if (emit && lastOutput !== this.outputColor) {
                if (this.cpCmykEnabled) {
                    this.directiveInstance.cmykChanged(this.cmykColor);
                }
                this.directiveInstance.colorChanged(this.outputColor);
            }
        }
    }
    // Private helper functions for the color picker dialog positioning
    setDialogPosition() {
        if (this.cpDialogDisplay === 'inline') {
            this.position = 'relative';
        }
        else {
            let position = 'static', transform = '', style;
            let parentNode = null, transformNode = null;
            let node = this.directiveElementRef.nativeElement.parentNode;
            const dialogHeight = this.dialogElement.nativeElement.offsetHeight;
            while (node !== null && node.tagName !== 'HTML') {
                style = window.getComputedStyle(node);
                position = style.getPropertyValue('position');
                transform = style.getPropertyValue('transform');
                if (position !== 'static' && parentNode === null) {
                    parentNode = node;
                }
                if (transform && transform !== 'none' && transformNode === null) {
                    transformNode = node;
                }
                if (position === 'fixed') {
                    parentNode = transformNode;
                    break;
                }
                node = node.parentNode;
            }
            const boxDirective = this.createDialogBox(this.directiveElementRef.nativeElement, (position !== 'fixed'));
            if (this.useRootViewContainer || (position === 'fixed' &&
                (!parentNode || parentNode instanceof HTMLUnknownElement))) {
                this.top = boxDirective.top;
                this.left = boxDirective.left;
            }
            else {
                if (parentNode === null) {
                    parentNode = node;
                }
                const boxParent = this.createDialogBox(parentNode, (position !== 'fixed'));
                this.top = boxDirective.top - boxParent.top;
                this.left = boxDirective.left - boxParent.left;
            }
            if (position === 'fixed') {
                this.position = 'fixed';
            }
            let usePosition = this.cpPosition;
            if (this.cpPosition === 'auto') {
                const dialogBounds = this.dialogElement.nativeElement.getBoundingClientRect();
                const triggerBounds = this.cpTriggerElement.nativeElement.getBoundingClientRect();
                usePosition = calculateAutoPositioning(dialogBounds, triggerBounds);
            }
            if (usePosition === 'top') {
                this.arrowTop = dialogHeight - 1;
                this.top -= dialogHeight + this.dialogArrowSize;
                this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
            }
            else if (usePosition === 'bottom') {
                this.top += boxDirective.height + this.dialogArrowSize;
                this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
            }
            else if (usePosition === 'top-left' || usePosition === 'left-top') {
                this.top -= dialogHeight - boxDirective.height + boxDirective.height * this.cpPositionOffset / 100;
                this.left -= this.cpWidth + this.dialogArrowSize - 2 - this.dialogArrowOffset;
            }
            else if (usePosition === 'top-right' || usePosition === 'right-top') {
                this.top -= dialogHeight - boxDirective.height + boxDirective.height * this.cpPositionOffset / 100;
                this.left += boxDirective.width + this.dialogArrowSize - 2 - this.dialogArrowOffset;
            }
            else if (usePosition === 'left' || usePosition === 'bottom-left' || usePosition === 'left-bottom') {
                this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
                this.left -= this.cpWidth + this.dialogArrowSize - 2;
            }
            else { // usePosition === 'right' || usePosition === 'bottom-right' || usePosition === 'right-bottom'
                this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
                this.left += boxDirective.width + this.dialogArrowSize - 2;
            }
            this.cpUsePosition = usePosition;
        }
    }
    // Private helper functions for the color picker dialog positioning and opening
    isDescendant(parent, child) {
        let node = child.parentNode;
        while (node !== null) {
            if (node === parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    }
    createDialogBox(element, offset) {
        return {
            top: element.getBoundingClientRect().top + (offset ? window.pageYOffset : 0),
            left: element.getBoundingClientRect().left + (offset ? window.pageXOffset : 0),
            width: element.offsetWidth,
            height: element.offsetHeight
        };
    }
}
ColorPickerComponent.ɵfac = function ColorPickerComponent_Factory(t) { return new (t || ColorPickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColorPickerService)); };
ColorPickerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ColorPickerComponent, selectors: [["color-picker"]], viewQuery: function ColorPickerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dialogElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.hueSlider = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.alphaSlider = _t.first);
    } }, hostBindings: function ColorPickerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.esc", function ColorPickerComponent_keyup_esc_HostBindingHandler($event) { return ctx.handleEsc($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keyup.enter", function ColorPickerComponent_keyup_enter_HostBindingHandler($event) { return ctx.handleEnter($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 28, vars: 47, consts: [[1, "color-picker", 3, "click"], ["dialogPopup", ""], [3, "class", "top", 4, "ngIf"], ["class", "saturation-lightness", 3, "slider", "rgX", "rgY", "background-color", "newValue", "dragStart", "dragEnd", 4, "ngIf"], [1, "hue-alpha", "box"], [1, "left"], [1, "selected-color-background"], [1, "selected-color"], ["type", "button", 3, "class", "disabled", "click", 4, "ngIf"], [1, "right"], ["style", "height: 16px;", 4, "ngIf"], [1, "hue", 3, "slider", "rgX", "newValue", "dragStart", "dragEnd"], ["hueSlider", ""], [1, "cursor"], [1, "value", 3, "slider", "rgX", "newValue", "dragStart", "dragEnd"], ["valueSlider", ""], [1, "alpha", 3, "slider", "rgX", "newValue", "dragStart", "dragEnd"], ["alphaSlider", ""], ["class", "cmyk-text", 3, "display", 4, "ngIf"], ["class", "hsla-text", 3, "display", 4, "ngIf"], ["class", "rgba-text", 3, "display", 4, "ngIf"], ["class", "hex-text", 3, "hex-alpha", "display", 4, "ngIf"], ["class", "value-text", 4, "ngIf"], ["class", "type-policy", 4, "ngIf"], ["class", "preset-area", 4, "ngIf"], ["class", "button-area", 4, "ngIf"], [1, "saturation-lightness", 3, "slider", "rgX", "rgY", "newValue", "dragStart", "dragEnd"], ["type", "button", 3, "disabled", "click"], [2, "height", "16px"], [1, "cmyk-text"], [1, "box"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "100", 3, "text", "rg", "value", "keyup.enter", "newValue"], ["type", "number", "pattern", "[0-9]+([\\.,][0-9]{1,2})?", "min", "0", "max", "1", "step", "0.1", 3, "text", "rg", "value", "keyup.enter", "newValue", 4, "ngIf"], [4, "ngIf"], ["type", "number", "pattern", "[0-9]+([\\.,][0-9]{1,2})?", "min", "0", "max", "1", "step", "0.1", 3, "text", "rg", "value", "keyup.enter", "newValue"], [1, "hsla-text"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "360", 3, "text", "rg", "value", "keyup.enter", "newValue"], [1, "rgba-text"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "255", 3, "text", "rg", "value", "keyup.enter", "newValue"], [1, "hex-text"], [3, "text", "value", "blur", "keyup.enter", "newValue"], [1, "value-text"], [1, "type-policy"], [1, "type-policy-arrow", 3, "click"], [1, "preset-area"], [1, "preset-label"], [3, "class", 4, "ngIf"], ["class", "preset-color", 3, "backgroundColor", "click", 4, "ngFor", "ngForOf"], [1, "preset-color", 3, "click"], [3, "class", "click", 4, "ngIf"], [3, "click"], [1, "button-area"], ["type", "button", 3, "class", "click", 4, "ngIf"], ["type", "button", 3, "click"]], template: function ColorPickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_Template_div_click_0_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ColorPickerComponent_div_2_Template, 1, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ColorPickerComponent_div_3_Template, 2, 8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ColorPickerComponent_button_8_Template, 2, 5, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ColorPickerComponent_div_10_Template, 1, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newValue", function ColorPickerComponent_Template_div_newValue_11_listener($event) { return ctx.onHueChange($event); })("dragStart", function ColorPickerComponent_Template_div_dragStart_11_listener() { return ctx.onDragStart("hue"); })("dragEnd", function ColorPickerComponent_Template_div_dragEnd_11_listener() { return ctx.onDragEnd("hue"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newValue", function ColorPickerComponent_Template_div_newValue_14_listener($event) { return ctx.onValueChange($event); })("dragStart", function ColorPickerComponent_Template_div_dragStart_14_listener() { return ctx.onDragStart("value"); })("dragEnd", function ColorPickerComponent_Template_div_dragEnd_14_listener() { return ctx.onDragEnd("value"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newValue", function ColorPickerComponent_Template_div_newValue_17_listener($event) { return ctx.onAlphaChange($event); })("dragStart", function ColorPickerComponent_Template_div_dragStart_17_listener() { return ctx.onDragStart("alpha"); })("dragEnd", function ColorPickerComponent_Template_div_dragEnd_17_listener() { return ctx.onDragEnd("alpha"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ColorPickerComponent_div_20_Template, 17, 12, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ColorPickerComponent_div_21_Template, 14, 10, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ColorPickerComponent_div_22_Template, 14, 10, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ColorPickerComponent_div_23_Template, 8, 7, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ColorPickerComponent_div_24_Template, 9, 3, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ColorPickerComponent_div_25_Template, 3, 0, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ColorPickerComponent_div_26_Template, 6, 3, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ColorPickerComponent_div_27_Template, 3, 2, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", !ctx.show ? "none" : "block")("visibility", ctx.hidden ? "hidden" : "visible")("top", ctx.top, "px")("left", ctx.left, "px")("position", ctx.position)("height", ctx.cpHeight, "px")("width", ctx.cpWidth, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cpDialogDisplay == "popup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.cpColorMode || 1) === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.selectedColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cpAddColorButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cpAlphaChannel === "disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", (ctx.cpColorMode || 1) === 1 ? "block" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rgX", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx.slider == null ? null : ctx.slider.h, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", (ctx.cpColorMode || 1) === 2 ? "block" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rgX", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("right", ctx.slider == null ? null : ctx.slider.v, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.cpAlphaChannel === "disabled" ? "none" : "block")("background-color", ctx.alphaSliderColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rgX", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx.slider == null ? null : ctx.slider.a, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.cpPresetColors == null ? null : ctx.cpPresetColors.length) || ctx.cpAddColorButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cpOKButton || ctx.cpCancelButton);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], SliderDirective, TextDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".color-picker{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;background-color:#fff;border:1px solid #777;cursor:default;height:auto;position:absolute;user-select:none;width:230px;z-index:1000}.color-picker *{box-sizing:border-box;font-size:11px;margin:0}.color-picker input{color:#000;font-size:13px;height:26px;min-width:0;text-align:center;width:0}.color-picker input:-moz-submit-invalid,.color-picker input:-moz-ui-invalid,.color-picker input:invalid{box-shadow:none}.color-picker input::-webkit-inner-spin-button,.color-picker input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.color-picker .arrow{border-style:solid;height:0;position:absolute;width:0;z-index:999999}.color-picker .arrow.arrow-top{border-color:#777 transparent transparent;border-width:10px 5px;left:8px}.color-picker .arrow.arrow-bottom{border-color:transparent transparent #777;border-width:10px 5px;left:8px;top:-20px}.color-picker .arrow.arrow-left-top,.color-picker .arrow.arrow-top-left{border-color:transparent transparent transparent #777;border-width:5px 10px;bottom:8px;right:-21px}.color-picker .arrow.arrow-right-top,.color-picker .arrow.arrow-top-right{border-color:transparent #777 transparent transparent;border-width:5px 10px;bottom:8px;left:-20px}.color-picker .arrow.arrow-bottom-left,.color-picker .arrow.arrow-left,.color-picker .arrow.arrow-left-bottom{border-color:transparent transparent transparent #777;border-width:5px 10px;right:-21px;top:8px}.color-picker .arrow.arrow-bottom-right,.color-picker .arrow.arrow-right,.color-picker .arrow.arrow-right-bottom{border-color:transparent #777 transparent transparent;border-width:5px 10px;left:-20px;top:8px}.color-picker .cursor{border:2px solid #222;border-radius:50%;cursor:default;height:16px;position:relative;width:16px}.color-picker .box{display:flex;padding:4px 8px}.color-picker .left{padding:16px 8px;position:relative}.color-picker .right{flex:1 1 auto;padding:12px 8px}.color-picker .button-area{padding:0 16px 16px;text-align:right}.color-picker .button-area button{margin-left:8px}.color-picker .preset-area{padding:4px 15px}.color-picker .preset-area .preset-label{color:#555;font-size:11px;overflow:hidden;padding:4px;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%}.color-picker .preset-area .preset-color{border:1px solid #a9a9a9;border-radius:25%;cursor:pointer;display:inline-block;height:18px;margin:4px 6px 8px;position:relative;width:18px}.color-picker .preset-area .preset-empty-message{font-style:italic;margin-bottom:8px;margin-top:4px;min-height:18px;text-align:center}.color-picker .hex-text{font-size:11px;padding:4px 8px;width:100%}.color-picker .hex-text .box{padding:0 24px 8px 8px}.color-picker .hex-text .box div{clear:left;color:#555;flex:1 1 auto;float:left;text-align:center}.color-picker .hex-text .box input{border:1px solid #a9a9a9;flex:1 1 auto;padding:1px}.color-picker .hex-alpha .box div:first-child,.color-picker .hex-alpha .box input:first-child{flex-grow:3;margin-right:8px}.color-picker .cmyk-text,.color-picker .hsla-text,.color-picker .rgba-text,.color-picker .value-text{font-size:11px;padding:4px 8px;width:100%}.color-picker .cmyk-text .box,.color-picker .hsla-text .box,.color-picker .rgba-text .box{padding:0 24px 8px 8px}.color-picker .value-text .box{padding:0 8px 8px}.color-picker .cmyk-text .box div,.color-picker .hsla-text .box div,.color-picker .rgba-text .box div,.color-picker .value-text .box div{color:#555;flex:1 1 auto;margin-right:8px;text-align:center}.color-picker .cmyk-text .box div:last-child,.color-picker .hsla-text .box div:last-child,.color-picker .rgba-text .box div:last-child,.color-picker .value-text .box div:last-child{margin-right:0}.color-picker .cmyk-text .box input,.color-picker .hsla-text .box input,.color-picker .rgba-text .box input,.color-picker .value-text .box input{border:1px solid #a9a9a9;flex:1;float:left;margin:0 8px 0 0;padding:1px}.color-picker .cmyk-text .box input:last-child,.color-picker .hsla-text .box input:last-child,.color-picker .rgba-text .box input:last-child,.color-picker .value-text .box input:last-child{margin-right:0}.color-picker .hue-alpha{align-items:center;margin-bottom:3px}.color-picker .hue{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC\");direction:ltr}.color-picker .hue,.color-picker .value{background-size:100% 100%;border:none;cursor:pointer;height:16px;margin-bottom:16px;width:100%}.color-picker .value{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAACTklEQVR42u3SYUcrABhA4U2SkmRJMmWSJklKJiWZZpKUJJskKUmaTFImKZOUzMySpGRmliRNJilJSpKSJEtmSpIpmWmSdO736/6D+x7OP3gUCoWCv1cqlSQlJZGcnExKSgqpqamkpaWRnp5ORkYGmZmZqFQqsrKyyM7OJicnh9zcXNRqNXl5eeTn56PRaCgoKKCwsJCioiK0Wi3FxcWUlJRQWlpKWVkZ5eXlVFRUUFlZiU6no6qqiurqampqaqitraWurg69Xk99fT0GgwGj0UhDQwONjY00NTXR3NxMS0sLra2ttLW10d7ejslkwmw209HRQWdnJ11dXXR3d9PT00Nvby99fX309/czMDDA4OAgFouFoaEhrFYrw8PDjIyMMDo6ytjYGDabjfHxcSYmJpicnGRqagq73c709DQzMzPMzs4yNzfH/Pw8DocDp9OJy+XC7XazsLDA4uIiS0tLLC8vs7KywurqKmtra3g8HrxeLz6fD7/fz/r6OhsbG2xubrK1tcX29jaBQICdnR2CwSC7u7vs7e2xv7/PwcEBh4eHHB0dcXx8zMnJCaenp5ydnXF+fs7FxQWXl5dcXV1xfX3Nzc0Nt7e33N3dEQqFuL+/5+HhgXA4TCQS4fHxkaenJ56fn3l5eeH19ZVoNMrb2xvv7+98fHwQi8WIx+N8fn6SSCT4+vri+/ubn58ffn9/+VcKgSWwBJbAElgCS2AJLIElsASWwBJYAktgCSyBJbAElsASWAJLYAksgSWwBJbAElgCS2AJLIElsP4/WH8AmJ5Z6jHS4h8AAAAASUVORK5CYII=\");direction:rtl}.color-picker .alpha{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==\");background-size:100% 100%;border:none;cursor:pointer;direction:ltr;height:16px;width:100%}.color-picker .type-policy{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACewAAAnsB01CO3AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIASURBVEiJ7ZY9axRRFIafsxMStrLQJpAgpBFhi+C9w1YSo00I6RZ/g9vZpBf/QOr4GyRgkSKNSrAadsZqQGwCkuAWyRZJsySwvhZ7N/vhzrgbLH3Ld8597jlzz50zJokyxXH8DqDVar0qi6v8BbItqSGpEcfxdlmsFWXkvX8AfAVWg3UKPEnT9GKujMzsAFgZsVaCN1VTQd77XUnrgE1kv+6935268WRpzrnHZvYRWC7YvC3pRZZl3wozqtVqiyH9IgjAspkd1Gq1xUJQtVrdB9ZKIAOthdg/Qc65LUk7wNIMoCVJO865rYFhkqjX6/d7vV4GPJwBMqofURS5JEk6FYBer/eeYb/Mo9WwFnPOvQbeAvfuAAK4BN4sAJtAG/gJIElmNuiJyba3EGNmZiPeZuEVmVell/Y/6N+CzDn3AXhEOOo7Hv/3BeAz8IzQkMPnJbuPx1wC+yYJ7/0nYIP5S/0FHKdp+rwCEEXRS/rf5Hl1Gtb2M0iSpCOpCZzPATmX1EySpHMLAsiy7MjMDoHrGSDXZnaYZdnRwBh7J91utwmczAA6CbG3GgPleX4jqUH/a1CktqRGnuc3hSCAMB32gKspkCtgb3KCQMmkjeP4WNJThrNNZval1WptTIsv7JtQ4tmIdRa8qSoEpWl6YWZNoAN0zKxZNPehpLSBZv2t+Q0CJ9lLnARQLAAAAABJRU5ErkJggg==\");background-position:50%;background-repeat:no-repeat;background-size:8px 16px;height:24px;position:absolute;right:12px;top:218px;width:16px}.color-picker .type-policy .type-policy-arrow{display:block;height:50%;width:100%}.color-picker .selected-color{border:1px solid #a9a9a9;border-radius:50%;height:40px;left:8px;position:absolute;top:16px;width:40px}.color-picker .selected-color-background{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC\");border-radius:50%;height:40px;width:40px}.color-picker .saturation-lightness{background-image:url(\"data:image/png;base64,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\");background-size:100% 100%;border:none;cursor:pointer;direction:ltr;height:130px;touch-action:manipulation;width:100%}.color-picker .cp-add-color-button-class{background:transparent;border:0;cursor:pointer;display:inline;margin:3px -3px;padding:0;position:absolute}.color-picker .cp-add-color-button-class:hover{text-decoration:underline}.color-picker .cp-add-color-button-class:disabled{color:#999;cursor:not-allowed}.color-picker .cp-add-color-button-class:disabled:hover{text-decoration:none}.color-picker .cp-remove-color-button-class{background:#fff;border-radius:50%;box-shadow:1px 1px 5px #333;cursor:pointer;display:block;height:10px;position:absolute;right:-5px;text-align:center;top:-5px;width:10px}.color-picker .cp-remove-color-button-class:before{bottom:3.5px;content:\"x\";display:inline-block;font-size:10px;position:relative}"], encapsulation: 2 });
ColorPickerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: ColorPickerService }
];
ColorPickerComponent.propDecorators = {
    dialogElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['dialogPopup', { static: true },] }],
    hueSlider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['hueSlider', { static: true },] }],
    alphaSlider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['alphaSlider', { static: true },] }],
    handleEsc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:keyup.esc', ['$event'],] }],
    handleEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:keyup.enter', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorPickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'color-picker',
                template: "<div #dialogPopup class=\"color-picker\" [class.open]=\"show\" [style.display]=\"!show ? 'none' : 'block'\" [style.visibility]=\"hidden ? 'hidden' : 'visible'\" [style.top.px]=\"top\" [style.left.px]=\"left\" [style.position]=\"position\" [style.height.px]=\"cpHeight\" [style.width.px]=\"cpWidth\" (click)=\"$event.stopPropagation()\">\n  <div *ngIf=\"cpDialogDisplay=='popup'\" class=\"arrow arrow-{{cpUsePosition}}\" [style.top.px]=\"arrowTop\"></div>\n\n  <div *ngIf=\"(cpColorMode ||\u00A01) === 1\" class=\"saturation-lightness\" [slider] [rgX]=\"1\" [rgY]=\"1\" [style.background-color]=\"hueSliderColor\" (newValue)=\"onColorChange($event)\" (dragStart)=\"onDragStart('saturation-lightness')\" (dragEnd)=\"onDragEnd('saturation-lightness')\">\n    <div class=\"cursor\" [style.top.px]=\"slider?.v\" [style.left.px]=\"slider?.s\"></div>\n  </div>\n\n  <div class=\"hue-alpha box\">\n    <div class=\"left\">\n      <div class=\"selected-color-background\"></div>\n\n      <div class=\"selected-color\" [style.background-color]=\"selectedColor\"></div>\n\n      <button *ngIf=\"cpAddColorButton\" type=\"button\" class=\"{{cpAddColorButtonClass}}\" [disabled]=\"cpPresetColors && cpPresetColors.length >= cpMaxPresetColorsLength\" (click)=\"onAddPresetColor($event, selectedColor)\">\n        {{cpAddColorButtonText}}\n      </button>\n    </div>\n\n    <div class=\"right\">\n      <div *ngIf=\"cpAlphaChannel==='disabled'\" style=\"height: 16px;\"></div>\n\n      <div #hueSlider class=\"hue\" [slider] [rgX]=\"1\" [style.display]=\"(cpColorMode ||\u00A01) === 1 ? 'block' : 'none'\" (newValue)=\"onHueChange($event)\" (dragStart)=\"onDragStart('hue')\" (dragEnd)=\"onDragEnd('hue')\">\n        <div class=\"cursor\" [style.left.px]=\"slider?.h\"></div>\n      </div>\n\n      <div #valueSlider class=\"value\" [slider] [rgX]=\"1\" [style.display]=\"(cpColorMode ||\u00A01) === 2 ? 'block': 'none'\" (newValue)=\"onValueChange($event)\" (dragStart)=\"onDragStart('value')\" (dragEnd)=\"onDragEnd('value')\">\n        <div class=\"cursor\" [style.right.px]=\"slider?.v\"></div>\n      </div>\n\n      <div #alphaSlider class=\"alpha\" [slider] [rgX]=\"1\" [style.display]=\"cpAlphaChannel === 'disabled' ? 'none' : 'block'\" [style.background-color]=\"alphaSliderColor\" (newValue)=\"onAlphaChange($event)\" (dragStart)=\"onDragStart('alpha')\" (dragEnd)=\"onDragEnd('alpha')\">\n        <div class=\"cursor\" [style.left.px]=\"slider?.a\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\u00A01) === 1\" class=\"cmyk-text\" [style.display]=\"format !== 3 ? 'none' : 'block'\">\n    <div class=\"box\">\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"cmykText?.c\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onCyanInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"cmykText?.m\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onMagentaInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"cmykText?.y\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onYellowInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"cmykText?.k\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onBlackInput($event)\" />\n      <input *ngIf=\"cpAlphaChannel!=='disabled'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\" [text] [rg]=\"1\" [value]=\"cmykText?.a\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\" />\n    </div>\n\n     <div class=\"box\">\n      <div>C</div><div>M</div><div>Y</div><div>K</div><div *ngIf=\"cpAlphaChannel!=='disabled'\" >A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\u00A01) === 1 \" class=\"hsla-text\" [style.display]=\"format !== 2 ? 'none' : 'block'\">\n    <div class=\"box\">\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"360\" [text] [rg]=\"360\" [value]=\"hslaText?.h\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onHueInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"hslaText?.s\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onSaturationInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"hslaText?.l\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onLightnessInput($event)\" />\n      <input *ngIf=\"cpAlphaChannel!=='disabled'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\" [text] [rg]=\"1\" [value]=\"hslaText?.a\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\" />\n    </div>\n\n    <div class=\"box\">\n      <div>H</div><div>S</div><div>L</div><div *ngIf=\"cpAlphaChannel!=='disabled'\">A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\u00A01) === 1 \" [style.display]=\"format !== 1 ? 'none' : 'block'\" class=\"rgba-text\">\n    <div class=\"box\">\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [text] [rg]=\"255\" [value]=\"rgbaText?.r\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onRedInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [text] [rg]=\"255\" [value]=\"rgbaText?.g\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onGreenInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [text] [rg]=\"255\" [value]=\"rgbaText?.b\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onBlueInput($event)\" />\n      <input *ngIf=\"cpAlphaChannel!=='disabled'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\" [text] [rg]=\"1\" [value]=\"rgbaText?.a\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\" />\n    </div>\n\n    <div class=\"box\">\n      <div>R</div><div>G</div><div>B</div><div *ngIf=\"cpAlphaChannel!=='disabled'\" >A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\u00A01) === 1\" class=\"hex-text\" [class.hex-alpha]=\"cpAlphaChannel==='forced'\"\n    [style.display]=\"format !== 0 ? 'none' : 'block'\">\n    <div class=\"box\">\n      <input [text] [value]=\"hexText\" (blur)=\"onHexInput(null)\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onHexInput($event)\"/>\n      <input *ngIf=\"cpAlphaChannel==='forced'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\" [text] [rg]=\"1\" [value]=\"hexAlpha\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\"/>\n    </div>\n\n    <div class=\"box\">\n      <div>Hex</div>\n      <div *ngIf=\"cpAlphaChannel==='forced'\">A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\u00A01) === 2\" class=\"value-text\">\n    <div class=\"box\">\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"hslaText?.l\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onValueInput($event)\" />\n      <input *ngIf=\"cpAlphaChannel!=='disabled'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\"  [text] [rg]=\"1\" [value]=\"hslaText?.a\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\" />\n    </div>\n\n    <div class=\"box\">\n      <div>V</div><div>A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\u00A01) === 1\" class=\"type-policy\">\n    <span class=\"type-policy-arrow\" (click)=\"onFormatToggle(-1)\"></span>\n    <span class=\"type-policy-arrow\" (click)=\"onFormatToggle(1)\"></span>\n  </div>\n\n  <div *ngIf=\"cpPresetColors?.length || cpAddColorButton\" class=\"preset-area\">\n    <hr>\n\n    <div class=\"preset-label\">{{cpPresetLabel}}</div>\n\n    <div *ngIf=\"cpPresetColors?.length\" class=\"{{cpPresetColorsClass}}\">\n      <div *ngFor=\"let color of cpPresetColors\" class=\"preset-color\" [style.backgroundColor]=\"color\" (click)=\"setColorFromString(color)\">\n        <span *ngIf=\"cpAddColorButton\" class=\"{{cpRemoveColorButtonClass}}\" (click)=\"onRemovePresetColor($event, color)\"></span>\n      </div>\n    </div>\n\n    <div *ngIf=\"!cpPresetColors?.length && cpAddColorButton\" class=\"{{cpPresetEmptyMessageClass}}\">{{cpPresetEmptyMessage}}</div>\n  </div>\n\n  <div *ngIf=\"cpOKButton || cpCancelButton\" class=\"button-area\">\n    <button *ngIf=\"cpCancelButton\" type=\"button\" class=\"{{cpCancelButtonClass}}\" (click)=\"onCancelColor($event)\">{{cpCancelButtonText}}</button>\n\n    <button *ngIf=\"cpOKButton\" type=\"button\" class=\"{{cpOKButtonClass}}\" (click)=\"onAcceptColor($event)\">{{cpOKButtonText}}</button>\n  </div>\n</div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: [".color-picker{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;background-color:#fff;border:1px solid #777;cursor:default;height:auto;position:absolute;user-select:none;width:230px;z-index:1000}.color-picker *{box-sizing:border-box;font-size:11px;margin:0}.color-picker input{color:#000;font-size:13px;height:26px;min-width:0;text-align:center;width:0}.color-picker input:-moz-submit-invalid,.color-picker input:-moz-ui-invalid,.color-picker input:invalid{box-shadow:none}.color-picker input::-webkit-inner-spin-button,.color-picker input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.color-picker .arrow{border-style:solid;height:0;position:absolute;width:0;z-index:999999}.color-picker .arrow.arrow-top{border-color:#777 transparent transparent;border-width:10px 5px;left:8px}.color-picker .arrow.arrow-bottom{border-color:transparent transparent #777;border-width:10px 5px;left:8px;top:-20px}.color-picker .arrow.arrow-left-top,.color-picker .arrow.arrow-top-left{border-color:transparent transparent transparent #777;border-width:5px 10px;bottom:8px;right:-21px}.color-picker .arrow.arrow-right-top,.color-picker .arrow.arrow-top-right{border-color:transparent #777 transparent transparent;border-width:5px 10px;bottom:8px;left:-20px}.color-picker .arrow.arrow-bottom-left,.color-picker .arrow.arrow-left,.color-picker .arrow.arrow-left-bottom{border-color:transparent transparent transparent #777;border-width:5px 10px;right:-21px;top:8px}.color-picker .arrow.arrow-bottom-right,.color-picker .arrow.arrow-right,.color-picker .arrow.arrow-right-bottom{border-color:transparent #777 transparent transparent;border-width:5px 10px;left:-20px;top:8px}.color-picker .cursor{border:2px solid #222;border-radius:50%;cursor:default;height:16px;position:relative;width:16px}.color-picker .box{display:flex;padding:4px 8px}.color-picker .left{padding:16px 8px;position:relative}.color-picker .right{flex:1 1 auto;padding:12px 8px}.color-picker .button-area{padding:0 16px 16px;text-align:right}.color-picker .button-area button{margin-left:8px}.color-picker .preset-area{padding:4px 15px}.color-picker .preset-area .preset-label{color:#555;font-size:11px;overflow:hidden;padding:4px;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%}.color-picker .preset-area .preset-color{border:1px solid #a9a9a9;border-radius:25%;cursor:pointer;display:inline-block;height:18px;margin:4px 6px 8px;position:relative;width:18px}.color-picker .preset-area .preset-empty-message{font-style:italic;margin-bottom:8px;margin-top:4px;min-height:18px;text-align:center}.color-picker .hex-text{font-size:11px;padding:4px 8px;width:100%}.color-picker .hex-text .box{padding:0 24px 8px 8px}.color-picker .hex-text .box div{clear:left;color:#555;flex:1 1 auto;float:left;text-align:center}.color-picker .hex-text .box input{border:1px solid #a9a9a9;flex:1 1 auto;padding:1px}.color-picker .hex-alpha .box div:first-child,.color-picker .hex-alpha .box input:first-child{flex-grow:3;margin-right:8px}.color-picker .cmyk-text,.color-picker .hsla-text,.color-picker .rgba-text,.color-picker .value-text{font-size:11px;padding:4px 8px;width:100%}.color-picker .cmyk-text .box,.color-picker .hsla-text .box,.color-picker .rgba-text .box{padding:0 24px 8px 8px}.color-picker .value-text .box{padding:0 8px 8px}.color-picker .cmyk-text .box div,.color-picker .hsla-text .box div,.color-picker .rgba-text .box div,.color-picker .value-text .box div{color:#555;flex:1 1 auto;margin-right:8px;text-align:center}.color-picker .cmyk-text .box div:last-child,.color-picker .hsla-text .box div:last-child,.color-picker .rgba-text .box div:last-child,.color-picker .value-text .box div:last-child{margin-right:0}.color-picker .cmyk-text .box input,.color-picker .hsla-text .box input,.color-picker .rgba-text .box input,.color-picker .value-text .box input{border:1px solid #a9a9a9;flex:1;float:left;margin:0 8px 0 0;padding:1px}.color-picker .cmyk-text .box input:last-child,.color-picker .hsla-text .box input:last-child,.color-picker .rgba-text .box input:last-child,.color-picker .value-text .box input:last-child{margin-right:0}.color-picker .hue-alpha{align-items:center;margin-bottom:3px}.color-picker .hue{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC\");direction:ltr}.color-picker .hue,.color-picker .value{background-size:100% 100%;border:none;cursor:pointer;height:16px;margin-bottom:16px;width:100%}.color-picker .value{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAACTklEQVR42u3SYUcrABhA4U2SkmRJMmWSJklKJiWZZpKUJJskKUmaTFImKZOUzMySpGRmliRNJilJSpKSJEtmSpIpmWmSdO736/6D+x7OP3gUCoWCv1cqlSQlJZGcnExKSgqpqamkpaWRnp5ORkYGmZmZqFQqsrKyyM7OJicnh9zcXNRqNXl5eeTn56PRaCgoKKCwsJCioiK0Wi3FxcWUlJRQWlpKWVkZ5eXlVFRUUFlZiU6no6qqiurqampqaqitraWurg69Xk99fT0GgwGj0UhDQwONjY00NTXR3NxMS0sLra2ttLW10d7ejslkwmw209HRQWdnJ11dXXR3d9PT00Nvby99fX309/czMDDA4OAgFouFoaEhrFYrw8PDjIyMMDo6ytjYGDabjfHxcSYmJpicnGRqagq73c709DQzMzPMzs4yNzfH/Pw8DocDp9OJy+XC7XazsLDA4uIiS0tLLC8vs7KywurqKmtra3g8HrxeLz6fD7/fz/r6OhsbG2xubrK1tcX29jaBQICdnR2CwSC7u7vs7e2xv7/PwcEBh4eHHB0dcXx8zMnJCaenp5ydnXF+fs7FxQWXl5dcXV1xfX3Nzc0Nt7e33N3dEQqFuL+/5+HhgXA4TCQS4fHxkaenJ56fn3l5eeH19ZVoNMrb2xvv7+98fHwQi8WIx+N8fn6SSCT4+vri+/ubn58ffn9/+VcKgSWwBJbAElgCS2AJLIElsASWwBJYAktgCSyBJbAElsASWAJLYAksgSWwBJbAElgCS2AJLIElsP4/WH8AmJ5Z6jHS4h8AAAAASUVORK5CYII=\");direction:rtl}.color-picker .alpha{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==\");background-size:100% 100%;border:none;cursor:pointer;direction:ltr;height:16px;width:100%}.color-picker .type-policy{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACewAAAnsB01CO3AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIASURBVEiJ7ZY9axRRFIafsxMStrLQJpAgpBFhi+C9w1YSo00I6RZ/g9vZpBf/QOr4GyRgkSKNSrAadsZqQGwCkuAWyRZJsySwvhZ7N/vhzrgbLH3Ld8597jlzz50zJokyxXH8DqDVar0qi6v8BbItqSGpEcfxdlmsFWXkvX8AfAVWg3UKPEnT9GKujMzsAFgZsVaCN1VTQd77XUnrgE1kv+6935268WRpzrnHZvYRWC7YvC3pRZZl3wozqtVqiyH9IgjAspkd1Gq1xUJQtVrdB9ZKIAOthdg/Qc65LUk7wNIMoCVJO865rYFhkqjX6/d7vV4GPJwBMqofURS5JEk6FYBer/eeYb/Mo9WwFnPOvQbeAvfuAAK4BN4sAJtAG/gJIElmNuiJyba3EGNmZiPeZuEVmVell/Y/6N+CzDn3AXhEOOo7Hv/3BeAz8IzQkMPnJbuPx1wC+yYJ7/0nYIP5S/0FHKdp+rwCEEXRS/rf5Hl1Gtb2M0iSpCOpCZzPATmX1EySpHMLAsiy7MjMDoHrGSDXZnaYZdnRwBh7J91utwmczAA6CbG3GgPleX4jqUH/a1CktqRGnuc3hSCAMB32gKspkCtgb3KCQMmkjeP4WNJThrNNZval1WptTIsv7JtQ4tmIdRa8qSoEpWl6YWZNoAN0zKxZNPehpLSBZv2t+Q0CJ9lLnARQLAAAAABJRU5ErkJggg==\");background-position:50%;background-repeat:no-repeat;background-size:8px 16px;height:24px;position:absolute;right:12px;top:218px;width:16px}.color-picker .type-policy .type-policy-arrow{display:block;height:50%;width:100%}.color-picker .selected-color{border:1px solid #a9a9a9;border-radius:50%;height:40px;left:8px;position:absolute;top:16px;width:40px}.color-picker .selected-color-background{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC\");border-radius:50%;height:40px;width:40px}.color-picker .saturation-lightness{background-image:url(\"data:image/png;base64,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\");background-size:100% 100%;border:none;cursor:pointer;direction:ltr;height:130px;touch-action:manipulation;width:100%}.color-picker .cp-add-color-button-class{background:transparent;border:0;cursor:pointer;display:inline;margin:3px -3px;padding:0;position:absolute}.color-picker .cp-add-color-button-class:hover{text-decoration:underline}.color-picker .cp-add-color-button-class:disabled{color:#999;cursor:not-allowed}.color-picker .cp-add-color-button-class:disabled:hover{text-decoration:none}.color-picker .cp-remove-color-button-class{background:#fff;border-radius:50%;box-shadow:1px 1px 5px #333;cursor:pointer;display:block;height:10px;position:absolute;right:-5px;text-align:center;top:-5px;width:10px}.color-picker .cp-remove-color-button-class:before{bottom:3.5px;content:\"x\";display:inline-block;font-size:10px;position:relative}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: ColorPickerService }]; }, { handleEsc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keyup.esc', ['$event']]
        }], handleEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keyup.enter', ['$event']]
        }], dialogElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dialogPopup', { static: true }]
        }], hueSlider: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['hueSlider', { static: true }]
        }], alphaSlider: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['alphaSlider', { static: true }]
        }] }); })();

class ColorPickerDirective {
    constructor(injector, cfr, appRef, vcRef, elRef, _service) {
        this.injector = injector;
        this.cfr = cfr;
        this.appRef = appRef;
        this.vcRef = vcRef;
        this.elRef = elRef;
        this._service = _service;
        this.dialogCreated = false;
        this.ignoreChanges = false;
        this.viewAttachedToAppRef = false;
        this.cpWidth = '230px';
        this.cpHeight = 'auto';
        this.cpToggle = false;
        this.cpDisabled = false;
        this.cpIgnoredElements = [];
        this.cpFallbackColor = '';
        this.cpColorMode = 'color';
        this.cpCmykEnabled = false;
        this.cpOutputFormat = 'auto';
        this.cpAlphaChannel = 'enabled';
        this.cpDisableInput = false;
        this.cpDialogDisplay = 'popup';
        this.cpSaveClickOutside = true;
        this.cpCloseClickOutside = true;
        this.cpUseRootViewContainer = false;
        this.cpPosition = 'auto';
        this.cpPositionOffset = '0%';
        this.cpPositionRelativeToArrow = false;
        this.cpOKButton = false;
        this.cpOKButtonText = 'OK';
        this.cpOKButtonClass = 'cp-ok-button-class';
        this.cpCancelButton = false;
        this.cpCancelButtonText = 'Cancel';
        this.cpCancelButtonClass = 'cp-cancel-button-class';
        this.cpPresetLabel = 'Preset colors';
        this.cpPresetColorsClass = 'cp-preset-colors-class';
        this.cpMaxPresetColorsLength = 6;
        this.cpPresetEmptyMessage = 'No colors added';
        this.cpPresetEmptyMessageClass = 'preset-empty-message';
        this.cpAddColorButton = false;
        this.cpAddColorButtonText = 'Add color';
        this.cpAddColorButtonClass = 'cp-add-color-button-class';
        this.cpRemoveColorButtonClass = 'cp-remove-color-button-class';
        this.cpInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpToggleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpSliderChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpSliderDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpSliderDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.colorPickerOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.colorPickerClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.colorPickerCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.colorPickerSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.colorPickerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.cpCmykColorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpPresetColorsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
    }
    handleClick() {
        this.inputFocus();
    }
    handleFocus() {
        this.inputFocus();
    }
    handleInput(event) {
        this.inputChange(event);
    }
    ngOnDestroy() {
        if (this.cmpRef != null) {
            if (this.viewAttachedToAppRef) {
                this.appRef.detachView(this.cmpRef.hostView);
            }
            this.cmpRef.destroy();
            this.cmpRef = null;
            this.dialog = null;
        }
    }
    ngOnChanges(changes) {
        if (changes.cpToggle && !this.cpDisabled) {
            if (changes.cpToggle.currentValue) {
                this.openDialog();
            }
            else if (!changes.cpToggle.currentValue) {
                this.closeDialog();
            }
        }
        if (changes.colorPicker) {
            if (this.dialog && !this.ignoreChanges) {
                if (this.cpDialogDisplay === 'inline') {
                    this.dialog.setInitialColor(changes.colorPicker.currentValue);
                }
                this.dialog.setColorFromString(changes.colorPicker.currentValue, false);
                if (this.cpUseRootViewContainer && this.cpDialogDisplay !== 'inline') {
                    this.cmpRef.changeDetectorRef.detectChanges();
                }
            }
            this.ignoreChanges = false;
        }
        if (changes.cpPresetLabel || changes.cpPresetColors) {
            if (this.dialog) {
                this.dialog.setPresetConfig(this.cpPresetLabel, this.cpPresetColors);
            }
        }
    }
    openDialog() {
        if (!this.dialogCreated) {
            let vcRef = this.vcRef;
            this.dialogCreated = true;
            this.viewAttachedToAppRef = false;
            if (this.cpUseRootViewContainer && this.cpDialogDisplay !== 'inline') {
                const classOfRootComponent = this.appRef.componentTypes[0];
                const appInstance = this.injector.get(classOfRootComponent, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].NULL);
                if (appInstance !== _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].NULL) {
                    vcRef = appInstance.vcRef || appInstance.viewContainerRef || this.vcRef;
                    if (vcRef === this.vcRef) {
                        console.warn('You are using cpUseRootViewContainer, ' +
                            'but the root component is not exposing viewContainerRef!' +
                            'Please expose it by adding \'public vcRef: ViewContainerRef\' to the constructor.');
                    }
                }
                else {
                    this.viewAttachedToAppRef = true;
                }
            }
            const compFactory = this.cfr.resolveComponentFactory(ColorPickerComponent);
            if (this.viewAttachedToAppRef) {
                this.cmpRef = compFactory.create(this.injector);
                this.appRef.attachView(this.cmpRef.hostView);
                document.body.appendChild(this.cmpRef.hostView.rootNodes[0]);
            }
            else {
                const injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ReflectiveInjector"].fromResolvedProviders([], vcRef.parentInjector);
                this.cmpRef = vcRef.createComponent(compFactory, 0, injector, []);
            }
            this.cmpRef.instance.setupDialog(this, this.elRef, this.colorPicker, this.cpWidth, this.cpHeight, this.cpDialogDisplay, this.cpFallbackColor, this.cpColorMode, this.cpCmykEnabled, this.cpAlphaChannel, this.cpOutputFormat, this.cpDisableInput, this.cpIgnoredElements, this.cpSaveClickOutside, this.cpCloseClickOutside, this.cpUseRootViewContainer, this.cpPosition, this.cpPositionOffset, this.cpPositionRelativeToArrow, this.cpPresetLabel, this.cpPresetColors, this.cpPresetColorsClass, this.cpMaxPresetColorsLength, this.cpPresetEmptyMessage, this.cpPresetEmptyMessageClass, this.cpOKButton, this.cpOKButtonClass, this.cpOKButtonText, this.cpCancelButton, this.cpCancelButtonClass, this.cpCancelButtonText, this.cpAddColorButton, this.cpAddColorButtonClass, this.cpAddColorButtonText, this.cpRemoveColorButtonClass, this.elRef);
            this.dialog = this.cmpRef.instance;
            if (this.vcRef !== vcRef) {
                this.cmpRef.changeDetectorRef.detectChanges();
            }
        }
        else if (this.dialog) {
            this.dialog.openDialog(this.colorPicker);
        }
    }
    closeDialog() {
        if (this.dialog && this.cpDialogDisplay === 'popup') {
            this.dialog.closeDialog();
        }
    }
    cmykChanged(value) {
        this.cpCmykColorChange.emit(value);
    }
    stateChanged(state) {
        this.cpToggleChange.emit(state);
        if (state) {
            this.colorPickerOpen.emit(this.colorPicker);
        }
        else {
            this.colorPickerClose.emit(this.colorPicker);
        }
    }
    colorChanged(value, ignore = true) {
        this.ignoreChanges = ignore;
        this.colorPickerChange.emit(value);
    }
    colorSelected(value) {
        this.colorPickerSelect.emit(value);
    }
    colorCanceled() {
        this.colorPickerCancel.emit();
    }
    inputFocus() {
        const element = this.elRef.nativeElement;
        const ignored = this.cpIgnoredElements.filter((item) => item === element);
        if (!this.cpDisabled && !ignored.length) {
            if (typeof document !== 'undefined' && element === document.activeElement) {
                this.openDialog();
            }
            else if (!this.dialog || !this.dialog.show) {
                this.openDialog();
            }
            else {
                this.closeDialog();
            }
        }
    }
    inputChange(event) {
        if (this.dialog) {
            this.dialog.setColorFromString(event.target.value, true);
        }
        else {
            this.colorPicker = event.target.value;
            this.colorPickerChange.emit(this.colorPicker);
        }
    }
    inputChanged(event) {
        this.cpInputChange.emit(event);
    }
    sliderChanged(event) {
        this.cpSliderChange.emit(event);
    }
    sliderDragEnd(event) {
        this.cpSliderDragEnd.emit(event);
    }
    sliderDragStart(event) {
        this.cpSliderDragStart.emit(event);
    }
    presetColorsChanged(value) {
        this.cpPresetColorsChange.emit(value);
    }
}
ColorPickerDirective.ɵfac = function ColorPickerDirective_Factory(t) { return new (t || ColorPickerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColorPickerService)); };
ColorPickerDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ColorPickerDirective, selectors: [["", "colorPicker", ""]], hostBindings: function ColorPickerDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerDirective_click_HostBindingHandler() { return ctx.handleClick(); })("focus", function ColorPickerDirective_focus_HostBindingHandler() { return ctx.handleFocus(); })("input", function ColorPickerDirective_input_HostBindingHandler($event) { return ctx.handleInput($event); });
    } }, inputs: { cpWidth: "cpWidth", cpHeight: "cpHeight", cpToggle: "cpToggle", cpDisabled: "cpDisabled", cpIgnoredElements: "cpIgnoredElements", cpFallbackColor: "cpFallbackColor", cpColorMode: "cpColorMode", cpCmykEnabled: "cpCmykEnabled", cpOutputFormat: "cpOutputFormat", cpAlphaChannel: "cpAlphaChannel", cpDisableInput: "cpDisableInput", cpDialogDisplay: "cpDialogDisplay", cpSaveClickOutside: "cpSaveClickOutside", cpCloseClickOutside: "cpCloseClickOutside", cpUseRootViewContainer: "cpUseRootViewContainer", cpPosition: "cpPosition", cpPositionOffset: "cpPositionOffset", cpPositionRelativeToArrow: "cpPositionRelativeToArrow", cpOKButton: "cpOKButton", cpOKButtonText: "cpOKButtonText", cpOKButtonClass: "cpOKButtonClass", cpCancelButton: "cpCancelButton", cpCancelButtonText: "cpCancelButtonText", cpCancelButtonClass: "cpCancelButtonClass", cpPresetLabel: "cpPresetLabel", cpPresetColorsClass: "cpPresetColorsClass", cpMaxPresetColorsLength: "cpMaxPresetColorsLength", cpPresetEmptyMessage: "cpPresetEmptyMessage", cpPresetEmptyMessageClass: "cpPresetEmptyMessageClass", cpAddColorButton: "cpAddColorButton", cpAddColorButtonText: "cpAddColorButtonText", cpAddColorButtonClass: "cpAddColorButtonClass", cpRemoveColorButtonClass: "cpRemoveColorButtonClass", colorPicker: "colorPicker", cpPresetColors: "cpPresetColors" }, outputs: { cpInputChange: "cpInputChange", cpToggleChange: "cpToggleChange", cpSliderChange: "cpSliderChange", cpSliderDragEnd: "cpSliderDragEnd", cpSliderDragStart: "cpSliderDragStart", colorPickerOpen: "colorPickerOpen", colorPickerClose: "colorPickerClose", colorPickerCancel: "colorPickerCancel", colorPickerSelect: "colorPickerSelect", colorPickerChange: "colorPickerChange", cpCmykColorChange: "cpCmykColorChange", cpPresetColorsChange: "cpPresetColorsChange" }, exportAs: ["ngxColorPicker"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
ColorPickerDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: ColorPickerService }
];
ColorPickerDirective.propDecorators = {
    colorPicker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cpWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cpHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cpToggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cpDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cpIgnoredElements: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cpFallbackColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cpColorMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cpCmykEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cpOutputFormat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cpAlphaChannel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cpDisableInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cpDialogDisplay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cpSaveClickOutside: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cpCloseClickOutside: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cpUseRootViewContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cpPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cpPositionOffset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cpPositionRelativeToArrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cpOKButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cpOKButtonText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cpOKButtonClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cpCancelButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cpCancelButtonText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cpCancelButtonClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cpPresetLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cpPresetColors: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cpPresetColorsClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cpMaxPresetColorsLength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cpPresetEmptyMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cpPresetEmptyMessageClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cpAddColorButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cpAddColorButtonText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cpAddColorButtonClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cpRemoveColorButtonClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cpInputChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    cpToggleChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    cpSliderChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    cpSliderDragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    cpSliderDragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    colorPickerOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    colorPickerClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    colorPickerCancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    colorPickerSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    colorPickerChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    cpCmykColorChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    cpPresetColorsChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    handleClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }],
    handleFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['focus',] }],
    handleInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['input', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorPickerDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[colorPicker]',
                exportAs: 'ngxColorPicker'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: ColorPickerService }]; }, { cpWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpIgnoredElements: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpFallbackColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpColorMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpCmykEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpOutputFormat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpAlphaChannel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpDisableInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpDialogDisplay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpSaveClickOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpCloseClickOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpUseRootViewContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpPositionOffset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpPositionRelativeToArrow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpOKButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpOKButtonText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpOKButtonClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpCancelButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpCancelButtonText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpCancelButtonClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpPresetLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpPresetColorsClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpMaxPresetColorsLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpPresetEmptyMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpPresetEmptyMessageClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpAddColorButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpAddColorButtonText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpAddColorButtonClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpRemoveColorButtonClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpInputChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cpToggleChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cpSliderChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cpSliderDragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cpSliderDragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], colorPickerOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], colorPickerClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], colorPickerCancel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], colorPickerSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], colorPickerChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cpCmykColorChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cpPresetColorsChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], handleClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }], handleFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['focus']
        }], handleInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['input', ['$event']]
        }], colorPicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpPresetColors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class ColorPickerModule {
}
ColorPickerModule.ɵfac = function ColorPickerModule_Factory(t) { return new (t || ColorPickerModule)(); };
ColorPickerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ColorPickerModule });
ColorPickerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [ColorPickerService], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorPickerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [ColorPickerDirective],
                providers: [ColorPickerService],
                declarations: [ColorPickerComponent, ColorPickerDirective, TextDirective, SliderDirective],
                entryComponents: [ColorPickerComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ColorPickerModule, { declarations: function () { return [ColorPickerComponent, ColorPickerDirective, TextDirective, SliderDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [ColorPickerDirective]; } }); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-color-picker.js.map

/***/ }),

/***/ "a03z":
/*!***********************************************!*\
  !*** ./src/app/forms/forms-routing.module.ts ***!
  \***********************************************/
/*! exports provided: FormsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsRoutingModule", function() { return FormsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _form_examples_form_examples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-examples/form-examples.component */ "gyru");
/* harmony import */ var _form_validations_form_validations_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-validations/form-validations.component */ "0R0B");
/* harmony import */ var _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wizard/wizard.component */ "lEoo");
/* harmony import */ var _editors_editors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editors/editors.component */ "0NeN");
/* harmony import */ var _form_controls_form_controls_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form-controls/form-controls.component */ "0GeU");
/* harmony import */ var _advance_controls_advance_controls_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./advance-controls/advance-controls.component */ "Gc2I");









const routes = [
    {
        path: "",
        redirectTo: "form-controls",
        pathMatch: "full",
    },
    {
        path: "form-controls",
        component: _form_controls_form_controls_component__WEBPACK_IMPORTED_MODULE_7__["FormControlsComponent"],
    },
    {
        path: "advance-controls",
        component: _advance_controls_advance_controls_component__WEBPACK_IMPORTED_MODULE_8__["AdvanceControlsComponent"],
    },
    {
        path: "form-example",
        component: _form_examples_form_examples_component__WEBPACK_IMPORTED_MODULE_3__["FormExamplesComponent"],
    },
    {
        path: "form-validation",
        component: _form_validations_form_validations_component__WEBPACK_IMPORTED_MODULE_4__["FormValidationsComponent"],
    },
    {
        path: "wizard",
        component: _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_5__["WizardComponent"],
    },
    {
        path: "editors",
        component: _editors_editors_component__WEBPACK_IMPORTED_MODULE_6__["EditorsComponent"],
    },
];
let FormsRoutingModule = class FormsRoutingModule {
};
FormsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormsRoutingModule);



/***/ }),

/***/ "bZHX":
/*!************************************************************************!*\
  !*** ./src/app/forms/advance-controls/advance-controls.component.sass ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZHZhbmNlLWNvbnRyb2xzLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "gyru":
/*!****************************************************************!*\
  !*** ./src/app/forms/form-examples/form-examples.component.ts ***!
  \****************************************************************/
/*! exports provided: FormExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormExamplesComponent", function() { return FormExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_form_examples_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./form-examples.component.html */ "38gU");
/* harmony import */ var _form_examples_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-examples.component.scss */ "qJUM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





let FormExamplesComponent = class FormExamplesComponent {
    constructor(fb) {
        this.fb = fb;
        this.hide = true;
        this.hide2 = true;
        this.hide3 = true;
        this.initForm();
        this.initSecondForm();
        this.initThirdForm();
    }
    initForm() {
        this.register = this.fb.group({
            first: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("[a-zA-Z]+")]],
            last: [""],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)],
            ],
            address: [""],
            city: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            state: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            country: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            termcondition: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].requiredTrue]],
        });
    }
    initSecondForm() {
        this.secondForm = this.fb.group({
            first: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("[a-zA-Z]+")]],
            last: [""],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)],
            ],
            address: [""],
            city: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            state: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            country: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            termcondition: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].requiredTrue]],
        });
    }
    initThirdForm() {
        this.thirdForm = this.fb.group({
            first: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("[a-zA-Z]+")]],
            last: [""],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)],
            ],
            address: [""],
            city: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            state: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            country: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            termcondition: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].requiredTrue]],
        });
    }
    onRegister() {
        console.log("Form Value", this.register.value);
    }
    onsecondFormSubmit() {
        console.log("Form Value", this.secondForm.value);
    }
    onThirdFormSubmit() {
        console.log("Form Value", this.thirdForm.value);
    }
};
FormExamplesComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
FormExamplesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-form-examples",
        template: _raw_loader_form_examples_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_form_examples_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FormExamplesComponent);



/***/ }),

/***/ "hpIr":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/advance-controls/advance-controls.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">Advance Controls</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a routerLink=\"/admin/dashboard/main\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-2\">\r\n              <a href=\"#\" onClick=\"return false;\">Form</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">Advance Controls</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Input mask </h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-4\">\r\n                <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                  <mat-label>Date Format</mat-label>\r\n                  <span matPrefix>\r\n                    <mat-icon class=\"msr-2\">date_range</mat-icon>\r\n                  </span>\r\n                  <input matInput placeholder=\"EX: 10/07/2020\" mask=\"00/00/0000\" />\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                  <mat-label>Date and hour</mat-label>\r\n                  <span matPrefix>\r\n                    <mat-icon class=\"msr-2\">date_range</mat-icon>\r\n                  </span>\r\n                  <input matInput placeholder=\"EX: 10/07/20 11:05:29 \" mask=\"00/00/00 00:00:00\" />\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                  <mat-label>Valid 24 hour format</mat-label>\r\n                  <span matPrefix>\r\n                    <mat-icon class=\"msr-2\">access_time</mat-icon>\r\n                  </span>\r\n                  <input matInput placeholder=\"EX: 23:05:29 \" mask=\"Hh:m0:s0\" />\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n            <div class=\"row mt-3\">\r\n              <div class=\"col-4\">\r\n                <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                  <mat-label>Prefix</mat-label>\r\n                  <span matPrefix>\r\n                    <mat-icon class=\"msr-2\">phone</mat-icon>\r\n                  </span>\r\n                  <input matInput placeholder=\"EX: (435) 345 34 54\" prefix=\"+91 \" mask=\"(000) 000 00 00\" />\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                  <mat-label>Suffix</mat-label>\r\n                  <span matPrefix>\r\n                    <mat-icon class=\"msr-2\">attach_money</mat-icon>\r\n                  </span>\r\n                  <input matInput placeholder=\"EX: 6762 \" suffix=\" $\" mask=\"0000\" />\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                  <mat-label>Drop Special Character</mat-label>\r\n                  <span matPrefix>\r\n                    <mat-icon class=\"msr-2\">error_outline</mat-icon>\r\n                  </span>\r\n                  <input matInput placeholder=\"EX: 565-656.55\" [dropSpecialCharacters]=\"false\" mask=\"000-000.00\" />\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n            <div class=\"row mt-3\">\r\n              <div class=\"col-4\">\r\n                <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                  <mat-label>Show Mask Type</mat-label>\r\n                  <span matPrefix>\r\n                    <mat-icon class=\"msr-2\">phone</mat-icon>\r\n                  </span>\r\n                  <input matInput placeholder=\"EX: (435) 345 34 54\" mask=\"(000) 000-0000\" [showMaskTyped]=\"true\" />\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                  <mat-label>Thousand separator</mat-label>\r\n                  <span matPrefix>\r\n                    <mat-icon class=\"msr-2\">attach_money</mat-icon>\r\n                  </span>\r\n                  <input matInput placeholder=\"EX: 125 897 854 \" mask=\"separator\" />\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                  <mat-label>Dot separator</mat-label>\r\n                  <span matPrefix>\r\n                    <mat-icon class=\"msr-2\">create</mat-icon>\r\n                  </span>\r\n                  <input matInput placeholder=\"EX: 125.878.754\" mask=\"separator\" thousandSeparator=\".\" />\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n            <div class=\"row mt-3\">\r\n              <div class=\"col-4\">\r\n                <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                  <mat-label>Secure input</mat-label>\r\n                  <span matPrefix>\r\n                    <mat-icon class=\"msr-2\">credit_card</mat-icon>\r\n                  </span>\r\n                  <input matInput placeholder=\"EX: ***/*4/4354\" [hiddenInput]=\"true\" mask=\"XXX/X0/0000\" />\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                  <mat-label>IP Address</mat-label>\r\n                  <span matPrefix>\r\n                    <mat-icon class=\"msr-2\">desktop_mac</mat-icon>\r\n                  </span>\r\n                  <input matInput placeholder=\"EX: 443.543.534.535\" mask=\"IP\" [showMaskTyped]=\"true\" />\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Color Picker </h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-4\">\r\n                <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                  <mat-label>Input</mat-label>\r\n                  <input matInput [value]=\"color\" [(colorPicker)]=\"color\" [cpPosition]=\"'top-right'\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                  <mat-label>Input</mat-label>\r\n                  <input matInput [value]=\"color1\" [cpOutputFormat]=\"'rgba'\" [cpPosition]=\"'top-right'\"\r\n                    [(colorPicker)]=\"color1\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                  <mat-label>Input</mat-label>\r\n                  <input matInput [value]=\"color2\" [style.background]=\"color2\" [cpOKButton]=\"true\"\r\n                    [cpSaveClickOutside]=\"false\" [cpOKButtonClass]=\"'btn btn-primary btn-xs'\" [cpPosition]=\"'top-left'\"\r\n                    [(colorPicker)]=\"color2\">\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Autocomplete</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                <h6>Display value autocomplete</h6>\r\n                <form class=\"example-form\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <mat-label>Assignee</mat-label>\r\n                    <input type=\"text\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\r\n                    <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\r\n                      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\r\n                        {{option.name}}\r\n                      </mat-option>\r\n                    </mat-autocomplete>\r\n                  </mat-form-field>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Hint Label</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                <h6>Form field with hints</h6>\r\n                <mat-form-field hintLabel=\"Max 10 characters\" class=\"example-full-width\" appearance=\"fill\">\r\n                  <mat-label>Enter some input</mat-label>\r\n                  <input matInput #input maxlength=\"10\" placeholder=\"Ex. Nougat\">\r\n                  <mat-hint align=\"end\">{{input.value?.length || 0}}/10</mat-hint>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <h6>Form field with hints</h6>\r\n                <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                  <mat-label>Select me</mat-label>\r\n                  <mat-select>\r\n                    <mat-option value=\"option1\">Option 1</mat-option>\r\n                    <mat-option value=\"option2\">Option 2</mat-option>\r\n                    <mat-option value=\"option3\">Option 3</mat-option>\r\n                  </mat-select>\r\n                  <mat-hint align=\"end\">Here's the dropdown arrow ^</mat-hint>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Error Message</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                <h6>Form field with error messages</h6>\r\n                <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                  <mat-label>Enter your email</mat-label>\r\n                  <input matInput placeholder=\"pat@example.com\" [formControl]=\"email\" required>\r\n                  <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>Prefix & suffix</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                  <mat-label>Enter your password</mat-label>\r\n                  <input matInput [type]=\"hide ? 'password' : 'text'\">\r\n                  <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\"\r\n                    [attr.aria-pressed]=\"hide\">\r\n                    <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                  </button>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                  <mat-label>Amount</mat-label>\r\n                  <input matInput type=\"number\" class=\"example-right-align\">\r\n                  <span matPrefix>$&nbsp;</span>\r\n                  <span matSuffix>.00</span>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "lEoo":
/*!**************************************************!*\
  !*** ./src/app/forms/wizard/wizard.component.ts ***!
  \**************************************************/
/*! exports provided: WizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardComponent", function() { return WizardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_wizard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./wizard.component.html */ "mJzB");
/* harmony import */ var _wizard_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wizard.component.scss */ "Bviw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





let WizardComponent = class WizardComponent {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = false;
    }
    ngOnInit() {
        this.HFormGroup1 = this._formBuilder.group({
            firstName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lastName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.HFormGroup2 = this._formBuilder.group({
            address: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.VFormGroup1 = this._formBuilder.group({
            firstName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lastName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.VFormGroup2 = this._formBuilder.group({
            address: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
};
WizardComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
WizardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-wizard",
        template: _raw_loader_wizard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_wizard_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WizardComponent);



/***/ }),

/***/ "mJzB":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/wizard/wizard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">Form Wizard</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a routerLink=\"/admin/dashboard/main\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-2\">\r\n              <a href=\"#\" onClick=\"return false;\">Forms</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">Wizard</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>\r\n              <strong>Stepper Horizontal</strong>\r\n            </h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <mat-horizontal-stepper [linear]=\"isLinear\" #stepper>\r\n              <mat-step [stepControl]=\"HFormGroup1\">\r\n                <form [formGroup]=\"HFormGroup1\">\r\n                  <ng-template matStepLabel>Fill out your name</ng-template>\r\n                  <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                    <mat-label>First Name</mat-label>\r\n                    <input matInput formControlName=\"firstName\" required>\r\n                    <mat-icon matSuffix>face</mat-icon>\r\n                  </mat-form-field>\r\n                  <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                    <mat-label>Last Name</mat-label>\r\n                    <input matInput formControlName=\"lastName\" required>\r\n                    <mat-icon matSuffix>face</mat-icon>\r\n                  </mat-form-field>\r\n                  <div>\r\n                    <button mat-raised-button matStepperNext color=\"primary\"\r\n                      [disabled]=\"!HFormGroup1.valid\">Next</button>\r\n                  </div>\r\n                </form>\r\n              </mat-step>\r\n              <mat-step [stepControl]=\"HFormGroup2\">\r\n                <form [formGroup]=\"HFormGroup2\">\r\n                  <ng-template matStepLabel>Fill out your address</ng-template>\r\n                  <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                    <mat-label>Address</mat-label>\r\n                    <textarea matInput formControlName=\"address\" placeholder=\"Ex. 1 Main St, New York, NY\"\r\n                      required></textarea>\r\n                  </mat-form-field>\r\n                  <div>\r\n                    <button mat-raised-button matStepperPrevious color=\"warn\" class=\"msr-2\">Back</button>\r\n                    <button mat-raised-button matStepperNext color=\"primary\"\r\n                      [disabled]=\"!HFormGroup2.valid\">Next</button>\r\n                  </div>\r\n                </form>\r\n              </mat-step>\r\n              <mat-step>\r\n                <ng-template matStepLabel>Done</ng-template>\r\n                <p>You are now done.</p>\r\n                <div>\r\n                  <button mat-raised-button matStepperPrevious color=\"warn\" class=\"msr-2\">Back</button>\r\n                  <button mat-raised-button color=\"primary\" (click)=\"stepper.reset()\">Reset</button>\r\n                </div>\r\n              </mat-step>\r\n            </mat-horizontal-stepper>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>\r\n              <strong>Stepper Verticle</strong>\r\n            </h2>\r\n          </div>\r\n          <div class=\"body\">\r\n            <mat-vertical-stepper [linear]=\"isLinear\" #stepper>\r\n              <mat-step [stepControl]=\"VFormGroup1\">\r\n                <form [formGroup]=\"VFormGroup1\">\r\n                  <ng-template matStepLabel>Fill out your name</ng-template>\r\n                  <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                    <mat-label>First Name</mat-label>\r\n                    <input matInput formControlName=\"firstName\" required>\r\n                    <mat-icon matSuffix>face</mat-icon>\r\n                  </mat-form-field>\r\n                  <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                    <mat-label>Last Name</mat-label>\r\n                    <input matInput formControlName=\"lastName\" required>\r\n                    <mat-icon matSuffix>face</mat-icon>\r\n                  </mat-form-field>\r\n                  <div>\r\n                    <button mat-raised-button matStepperNext color=\"primary\"\r\n                      [disabled]=\"!VFormGroup1.valid\">Next</button>\r\n                  </div>\r\n                </form>\r\n              </mat-step>\r\n              <mat-step [stepControl]=\"VFormGroup2\">\r\n                <form [formGroup]=\"VFormGroup2\">\r\n                  <ng-template matStepLabel>Fill out your address</ng-template>\r\n                  <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                    <mat-label>Address</mat-label>\r\n                    <textarea matInput formControlName=\"address\" placeholder=\"Ex. 1 Main St, New York, NY\"\r\n                      required></textarea>\r\n                  </mat-form-field>\r\n                  <div>\r\n                    <button mat-raised-button matStepperPrevious color=\"warn\" class=\"msr-2\">Back</button>\r\n                    <button mat-raised-button matStepperNext color=\"primary\"\r\n                      [disabled]=\"!VFormGroup2.valid\">Next</button>\r\n                  </div>\r\n                </form>\r\n              </mat-step>\r\n              <mat-step>\r\n                <ng-template matStepLabel>Done</ng-template>\r\n                <p>You are now done.</p>\r\n                <div>\r\n                  <button mat-raised-button matStepperPrevious color=\"warn\" class=\"msr-2\">Back</button>\r\n                  <button mat-raised-button color=\"primary\" (click)=\"stepper.reset()\">Reset</button>\r\n                </div>\r\n              </mat-step>\r\n            </mat-vertical-stepper>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "nukZ":
/*!************************************************************************!*\
  !*** ./src/app/forms/form-validations/form-validations.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLXZhbGlkYXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "qJUM":
/*!******************************************************************!*\
  !*** ./src/app/forms/form-examples/form-examples.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWV4YW1wbGVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "xHqg":
/*!*************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js ***!
  \*************************************************************************/
/*! exports provided: MAT_STEPPER_INTL_PROVIDER, MAT_STEPPER_INTL_PROVIDER_FACTORY, MatHorizontalStepper, MatStep, MatStepContent, MatStepHeader, MatStepLabel, MatStepper, MatStepperIcon, MatStepperIntl, MatStepperModule, MatStepperNext, MatStepperPrevious, MatVerticalStepper, matStepperAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_INTL_PROVIDER", function() { return MAT_STEPPER_INTL_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_INTL_PROVIDER_FACTORY", function() { return MAT_STEPPER_INTL_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHorizontalStepper", function() { return MatHorizontalStepper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStep", function() { return MatStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepContent", function() { return MatStepContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepHeader", function() { return MatStepHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepLabel", function() { return MatStepLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepper", function() { return MatStepper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepperIcon", function() { return MatStepperIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepperIntl", function() { return MatStepperIntl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepperModule", function() { return MatStepperModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepperNext", function() { return MatStepperNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepperPrevious", function() { return MatStepperPrevious; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatVerticalStepper", function() { return MatVerticalStepper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matStepperAnimations", function() { return matStepperAnimations; });
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "41Ph");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "9YHx");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/animations */ "R0Ic");














/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */








function MatStepHeader_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 8);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.iconOverrides[ctx_r0.state])("ngTemplateOutletContext", ctx_r0._getIconContext());
} }
function MatStepHeader_ng_container_4_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r6._getDefaultTextForState(ctx_r6.state));
} }
function MatStepHeader_ng_container_4_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7._getDefaultTextForState(ctx_r7.state));
} }
function MatStepHeader_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MatStepHeader_ng_container_4_span_1_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MatStepHeader_ng_container_4_mat_icon_2_Template, 2, 1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", ctx_r1.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "number");
} }
function MatStepHeader_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](1, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2._templateLabel().template);
} }
function MatStepHeader_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.label);
} }
function MatStepHeader_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4._intl.optionalLabel);
} }
function MatStepHeader_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.errorMessage);
} }
function MatStep_ng_template_0_ng_template_1_Template(rf, ctx) { }
function MatStep_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MatStep_ng_template_0_ng_template_1_Template, 0, 0, "ng-template", 0);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cdkPortalOutlet", ctx_r0._portal);
} }
const _c0 = ["*"];
function MatStepper_ng_container_1_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 9);
} }
const _c1 = function (a0, a1) { return { step: a0, i: a1 }; };
function MatStepper_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MatStepper_ng_container_1_ng_container_2_div_2_Template, 1, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const step_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const isLast_r8 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](3, _c1, step_r6, i_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !isLast_r8);
} }
function MatStepper_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("@horizontalStepTransition.done", function MatStepper_ng_container_1_div_4_Template_div_animation_horizontalStepTransition_done_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r12._animationDone.next($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](1, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@horizontalStepTransition", ctx_r5._getAnimationDirection(i_r11))("id", ctx_r5._getStepContentId(i_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-labelledby", ctx_r5._getStepLabelId(i_r11))("aria-expanded", ctx_r5.selectedIndex === i_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", step_r10.content);
} }
function MatStepper_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MatStepper_ng_container_1_ng_container_2_Template, 3, 6, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MatStepper_ng_container_1_div_4_Template, 2, 5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.steps);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.steps);
} }
function MatStepper_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("@verticalStepTransition.done", function MatStepper_ng_container_2_div_1_Template_div_animation_verticalStepTransition_done_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r18._animationDone.next($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](5, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    const isLast_r17 = ctx.last;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](9, _c1, step_r15, i_r16));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-stepper-vertical-line", !isLast_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@verticalStepTransition", ctx_r14._getAnimationDirection(i_r16))("id", ctx_r14._getStepContentId(i_r16));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-labelledby", ctx_r14._getStepLabelId(i_r16))("aria-expanded", ctx_r14.selectedIndex === i_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", step_r15.content);
} }
function MatStepper_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MatStepper_ng_container_2_div_1_Template, 6, 12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.steps);
} }
function MatStepper_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-step-header", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatStepper_ng_template_3_Template_mat_step_header_click_0_listener() { const step_r20 = ctx.step; return step_r20.select(); })("keydown", function MatStepper_ng_template_3_Template_mat_step_header_keydown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r23._onKeydown($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r20 = ctx.step;
    const i_r21 = ctx.i;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-horizontal-stepper-header", ctx_r3.orientation === "horizontal")("mat-vertical-stepper-header", ctx_r3.orientation === "vertical");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tabIndex", ctx_r3._getFocusIndex() === i_r21 ? 0 : -1)("id", ctx_r3._getStepLabelId(i_r21))("index", i_r21)("state", ctx_r3._getIndicatorType(i_r21, step_r20.state))("label", step_r20.stepLabel || step_r20.label)("selected", ctx_r3.selectedIndex === i_r21)("active", step_r20.completed || ctx_r3.selectedIndex === i_r21 || !ctx_r3.linear)("optional", step_r20.optional)("errorMessage", step_r20.errorMessage)("iconOverrides", ctx_r3._iconOverrides)("disableRipple", ctx_r3.disableRipple)("color", step_r20.color || ctx_r3.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-posinset", i_r21 + 1)("aria-setsize", ctx_r3.steps.length)("aria-controls", ctx_r3._getStepContentId(i_r21))("aria-selected", ctx_r3.selectedIndex == i_r21)("aria-label", step_r20.ariaLabel || null)("aria-labelledby", !step_r20.ariaLabel && step_r20.ariaLabelledby ? step_r20.ariaLabelledby : null);
} }
class MatStepLabel extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepLabel"] {
}
MatStepLabel.ɵfac = /*@__PURE__*/ function () { let ɵMatStepLabel_BaseFactory; return function MatStepLabel_Factory(t) { return (ɵMatStepLabel_BaseFactory || (ɵMatStepLabel_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatStepLabel)))(t || MatStepLabel); }; }();
MatStepLabel.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: MatStepLabel, selectors: [["", "matStepLabel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatStepLabel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[matStepLabel]'
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Stepper data that is required for internationalization. */
class MatStepperIntl {
    constructor() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        /** Label that is rendered below optional steps. */
        this.optionalLabel = 'Optional';
    }
}
MatStepperIntl.ɵfac = function MatStepperIntl_Factory(t) { return new (t || MatStepperIntl)(); };
MatStepperIntl.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ factory: function MatStepperIntl_Factory() { return new MatStepperIntl(); }, token: MatStepperIntl, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatStepperIntl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
/** @docs-private */
function MAT_STEPPER_INTL_PROVIDER_FACTORY(parentIntl) {
    return parentIntl || new MatStepperIntl();
}
/** @docs-private */
const MAT_STEPPER_INTL_PROVIDER = {
    provide: MatStepperIntl,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"](), MatStepperIntl]],
    useFactory: MAT_STEPPER_INTL_PROVIDER_FACTORY
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatStepHeader.
/** @docs-private */
class MatStepHeaderBase extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepHeader"] {
    constructor(elementRef) {
        super(elementRef);
    }
}
const _MatStepHeaderMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinColor"])(MatStepHeaderBase, 'primary');
class MatStepHeader extends _MatStepHeaderMixinBase {
    constructor(_intl, _focusMonitor, _elementRef, changeDetectorRef) {
        super(_elementRef);
        this._intl = _intl;
        this._focusMonitor = _focusMonitor;
        this._intlSubscription = _intl.changes.subscribe(() => changeDetectorRef.markForCheck());
    }
    ngAfterViewInit() {
        this._focusMonitor.monitor(this._elementRef, true);
    }
    ngOnDestroy() {
        this._intlSubscription.unsubscribe();
        this._focusMonitor.stopMonitoring(this._elementRef);
    }
    /** Focuses the step header. */
    focus(origin, options) {
        if (origin) {
            this._focusMonitor.focusVia(this._elementRef, origin, options);
        }
        else {
            this._elementRef.nativeElement.focus(options);
        }
    }
    /** Returns string label of given step if it is a text label. */
    _stringLabel() {
        return this.label instanceof MatStepLabel ? null : this.label;
    }
    /** Returns MatStepLabel if the label of given step is a template label. */
    _templateLabel() {
        return this.label instanceof MatStepLabel ? this.label : null;
    }
    /** Returns the host HTML element. */
    _getHostElement() {
        return this._elementRef.nativeElement;
    }
    /** Template context variables that are exposed to the `matStepperIcon` instances. */
    _getIconContext() {
        return {
            index: this.index,
            active: this.active,
            optional: this.optional
        };
    }
    _getDefaultTextForState(state) {
        if (state == 'number') {
            return `${this.index + 1}`;
        }
        if (state == 'edit') {
            return 'create';
        }
        if (state == 'error') {
            return 'warning';
        }
        return state;
    }
}
MatStepHeader.ɵfac = function MatStepHeader_Factory(t) { return new (t || MatStepHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatStepperIntl), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"])); };
MatStepHeader.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MatStepHeader, selectors: [["mat-step-header"]], hostAttrs: ["role", "tab", 1, "mat-step-header"], inputs: { color: "color", state: "state", label: "label", errorMessage: "errorMessage", iconOverrides: "iconOverrides", index: "index", selected: "selected", active: "active", optional: "optional", disableRipple: "disableRipple" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 19, consts: [["matRipple", "", 1, "mat-step-header-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-step-icon-content", 3, "ngSwitch"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngSwitchCase"], [3, "ngSwitch", 4, "ngSwitchDefault"], [1, "mat-step-label"], ["class", "mat-step-text-label", 4, "ngIf"], ["class", "mat-step-optional", 4, "ngIf"], ["class", "mat-step-sub-label-error", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "mat-step-text-label"], [3, "ngTemplateOutlet"], [1, "mat-step-optional"], [1, "mat-step-sub-label-error"]], template: function MatStepHeader_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MatStepHeader_ng_container_3_Template, 1, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MatStepHeader_ng_container_4_Template, 3, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, MatStepHeader_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, MatStepHeader_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, MatStepHeader_div_8_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, MatStepHeader_div_9_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disableRipple);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("mat-step-icon-state-", ctx.state, " mat-step-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-step-icon-selected", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", !!(ctx.iconOverrides && ctx.iconOverrides[ctx.state]));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-step-label-active", ctx.active)("mat-step-label-selected", ctx.selected)("mat-step-label-error", ctx.state == "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx._templateLabel());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx._stringLabel());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.optional && ctx.state != "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.state == "error");
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], styles: [".mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:transparent}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon-content,.mat-step-icon .mat-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"], encapsulation: 2, changeDetection: 0 });
MatStepHeader.ctorParameters = () => [
    { type: MatStepperIntl },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
MatStepHeader.propDecorators = {
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    errorMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    iconOverrides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    optional: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    disableRipple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatStepHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'mat-step-header',
                template: "<div class=\"mat-step-header-ripple mat-focus-indicator\" matRipple\n     [matRippleTrigger]=\"_getHostElement()\"\n     [matRippleDisabled]=\"disableRipple\"></div>\n\n<div class=\"mat-step-icon-state-{{state}} mat-step-icon\" [class.mat-step-icon-selected]=\"selected\">\n  <div class=\"mat-step-icon-content\" [ngSwitch]=\"!!(iconOverrides && iconOverrides[state])\">\n    <ng-container\n      *ngSwitchCase=\"true\"\n      [ngTemplateOutlet]=\"iconOverrides[state]\"\n      [ngTemplateOutletContext]=\"_getIconContext()\"></ng-container>\n    <ng-container *ngSwitchDefault [ngSwitch]=\"state\">\n      <span *ngSwitchCase=\"'number'\">{{_getDefaultTextForState(state)}}</span>\n      <mat-icon *ngSwitchDefault>{{_getDefaultTextForState(state)}}</mat-icon>\n    </ng-container>\n  </div>\n</div>\n<div class=\"mat-step-label\"\n     [class.mat-step-label-active]=\"active\"\n     [class.mat-step-label-selected]=\"selected\"\n     [class.mat-step-label-error]=\"state == 'error'\">\n  <!-- If there is a label template, use it. -->\n  <div class=\"mat-step-text-label\" *ngIf=\"_templateLabel()\">\n    <ng-container [ngTemplateOutlet]=\"_templateLabel()!.template\"></ng-container>\n  </div>\n  <!-- If there is no label template, fall back to the text label. -->\n  <div class=\"mat-step-text-label\" *ngIf=\"_stringLabel()\">{{label}}</div>\n\n  <div class=\"mat-step-optional\" *ngIf=\"optional && state != 'error'\">{{_intl.optionalLabel}}</div>\n  <div class=\"mat-step-sub-label-error\" *ngIf=\"state == 'error'\">{{errorMessage}}</div>\n</div>\n\n",
                inputs: ['color'],
                host: {
                    'class': 'mat-step-header',
                    'role': 'tab'
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                styles: [".mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:transparent}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon-content,.mat-step-icon .mat-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"]
            }]
    }], function () { return [{ type: MatStepperIntl }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }]; }, { state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], errorMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], iconOverrides: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], optional: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], disableRipple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Animations used by the Material steppers.
 * @docs-private
 */
const matStepperAnimations = {
    /** Animation that transitions the step along the X axis in a horizontal stepper. */
    horizontalStepTransition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('horizontalStepTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('previous', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ transform: 'translate3d(-100%, 0, 0)', visibility: 'hidden' })),
        // Transition to `inherit`, rather than `visible`,
        // because visibility on a child element the one from the parent,
        // making this element focusable inside of a `hidden` element.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ transform: 'none', visibility: 'inherit' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('next', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ transform: 'translate3d(100%, 0, 0)', visibility: 'hidden' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('500ms cubic-bezier(0.35, 0, 0.25, 1)'))
    ]),
    /** Animation that transitions the step along the Y axis in a vertical stepper. */
    verticalStepTransition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('verticalStepTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('previous', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ height: '0px', visibility: 'hidden' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('next', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ height: '0px', visibility: 'hidden' })),
        // Transition to `inherit`, rather than `visible`,
        // because visibility on a child element the one from the parent,
        // making this element focusable inside of a `hidden` element.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ height: '*', visibility: 'inherit' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('* <=> current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Template to be used to override the icons inside the step header.
 */
class MatStepperIcon {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
MatStepperIcon.ɵfac = function MatStepperIcon_Factory(t) { return new (t || MatStepperIcon)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])); };
MatStepperIcon.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: MatStepperIcon, selectors: [["ng-template", "matStepperIcon", ""]], inputs: { name: ["matStepperIcon", "name"] } });
MatStepperIcon.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
];
MatStepperIcon.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['matStepperIcon',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatStepperIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'ng-template[matStepperIcon]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matStepperIcon']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Content for a `mat-step` that will be rendered lazily.
 */
class MatStepContent {
    constructor(_template) {
        this._template = _template;
    }
}
MatStepContent.ɵfac = function MatStepContent_Factory(t) { return new (t || MatStepContent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])); };
MatStepContent.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: MatStepContent, selectors: [["ng-template", "matStepContent", ""]] });
MatStepContent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatStepContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'ng-template[matStepContent]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatStep extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStep"] {
    constructor(stepper, _errorStateMatcher, _viewContainerRef, stepperOptions) {
        super(stepper, stepperOptions);
        this._errorStateMatcher = _errorStateMatcher;
        this._viewContainerRef = _viewContainerRef;
        this._isSelected = rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"].EMPTY;
    }
    ngAfterContentInit() {
        this._isSelected = this._stepper.steps.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(() => {
            return this._stepper.selectionChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(event => event.selectedStep === this), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(this._stepper.selected === this));
        })).subscribe(isSelected => {
            if (isSelected && this._lazyContent && !this._portal) {
                this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["TemplatePortal"](this._lazyContent._template, this._viewContainerRef);
            }
        });
    }
    ngOnDestroy() {
        this._isSelected.unsubscribe();
    }
    /** Custom error state matcher that additionally checks for validity of interacted form. */
    isErrorState(control, form) {
        const originalErrorState = this._errorStateMatcher.isErrorState(control, form);
        // Custom error state checks for the validity of form that is not submitted or touched
        // since user can trigger a form change by calling for another step without directly
        // interacting with the current form.
        const customErrorState = !!(control && control.invalid && this.interacted);
        return originalErrorState || customErrorState;
    }
}
MatStep.ɵfac = function MatStep_Factory(t) { return new (t || MatStep)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(() => MatStepper)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"], 4), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["STEPPER_GLOBAL_OPTIONS"], 8)); };
MatStep.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MatStep, selectors: [["mat-step"]], contentQueries: function MatStep_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatStepLabel, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatStepContent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.stepLabel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._lazyContent = _t.first);
    } }, inputs: { color: "color" }, exportAs: ["matStep"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"], useExisting: MatStep },
            { provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStep"], useExisting: MatStep },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, consts: [[3, "cdkPortalOutlet"]], template: function MatStep_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MatStep_ng_template_0_Template, 2, 1, "ng-template");
    } }, directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["CdkPortalOutlet"]], encapsulation: 2, changeDetection: 0 });
MatStep.ctorParameters = () => [
    { type: MatStepper, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(() => MatStepper),] }] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["STEPPER_GLOBAL_OPTIONS"],] }] }
];
MatStep.propDecorators = {
    stepLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [MatStepLabel,] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    _lazyContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [MatStepContent, { static: false },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatStep, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'mat-step',
                template: "<ng-template>\n  <ng-content></ng-content>\n  <ng-template [cdkPortalOutlet]=\"_portal\"></ng-template>\n</ng-template>\n",
                providers: [
                    { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"], useExisting: MatStep },
                    { provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStep"], useExisting: MatStep },
                ],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                exportAs: 'matStep',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: MatStepper, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(() => MatStepper)]
            }] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["STEPPER_GLOBAL_OPTIONS"]]
            }] }]; }, { stepLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [MatStepLabel]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], _lazyContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [MatStepContent, { static: false }]
        }] }); })();
/**
 * Proxies the public APIs from `MatStepper` to the deprecated `MatHorizontalStepper` and
 * `MatVerticalStepper`.
 * @deprecated Use `MatStepper` instead.
 * @breaking-change 13.0.0
 * @docs-private
 */
class _MatProxyStepperBase extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"] {
}
_MatProxyStepperBase.ɵfac = /*@__PURE__*/ function () { let ɵ_MatProxyStepperBase_BaseFactory; return function _MatProxyStepperBase_Factory(t) { return (ɵ_MatProxyStepperBase_BaseFactory || (ɵ_MatProxyStepperBase_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](_MatProxyStepperBase)))(t || _MatProxyStepperBase); }; }();
_MatProxyStepperBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: _MatProxyStepperBase, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](_MatProxyStepperBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"]
    }], null, null); })();
/**
 * @deprecated Use `MatStepper` instead.
 * @breaking-change 13.0.0
 */
class MatHorizontalStepper extends _MatProxyStepperBase {
}
MatHorizontalStepper.ɵfac = /*@__PURE__*/ function () { let ɵMatHorizontalStepper_BaseFactory; return function MatHorizontalStepper_Factory(t) { return (ɵMatHorizontalStepper_BaseFactory || (ɵMatHorizontalStepper_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatHorizontalStepper)))(t || MatHorizontalStepper); }; }();
MatHorizontalStepper.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: MatHorizontalStepper, selectors: [["mat-horizontal-stepper"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatHorizontalStepper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: 'mat-horizontal-stepper' }]
    }], null, null); })();
/**
 * @deprecated Use `MatStepper` instead.
 * @breaking-change 13.0.0
 */
class MatVerticalStepper extends _MatProxyStepperBase {
}
MatVerticalStepper.ɵfac = /*@__PURE__*/ function () { let ɵMatVerticalStepper_BaseFactory; return function MatVerticalStepper_Factory(t) { return (ɵMatVerticalStepper_BaseFactory || (ɵMatVerticalStepper_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatVerticalStepper)))(t || MatVerticalStepper); }; }();
MatVerticalStepper.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: MatVerticalStepper, selectors: [["mat-vertical-stepper"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatVerticalStepper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: 'mat-vertical-stepper' }]
    }], null, null); })();
class MatStepper extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"] {
    constructor(dir, changeDetectorRef, elementRef, _document) {
        super(dir, changeDetectorRef, elementRef, _document);
        /** Steps that belong to the current stepper, excluding ones from nested steppers. */
        this.steps = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["QueryList"]();
        /** Event emitted when the current step is done transitioning in. */
        this.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Whether the label should display in bottom or end position.
         * Only applies in the `horizontal` orientation.
         */
        this.labelPosition = 'end';
        /** Consumer-specified template-refs to be used to override the header icons. */
        this._iconOverrides = {};
        /** Stream of animation `done` events when the body expands/collapses. */
        this._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        const nodeName = elementRef.nativeElement.nodeName.toLowerCase();
        this.orientation = nodeName === 'mat-vertical-stepper' ? 'vertical' : 'horizontal';
    }
    ngAfterContentInit() {
        super.ngAfterContentInit();
        this._icons.forEach(({ name, templateRef }) => this._iconOverrides[name] = templateRef);
        // Mark the component for change detection whenever the content children query changes
        this.steps.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(() => {
            this._stateChanged();
        });
        this._animationDone.pipe(
        // This needs a `distinctUntilChanged` in order to avoid emitting the same event twice due
        // to a bug in animations where the `.done` callback gets invoked twice on some browsers.
        // See https://github.com/angular/angular/issues/24084
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])((x, y) => x.fromState === y.fromState && x.toState === y.toState), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(event => {
            if (event.toState === 'current') {
                this.animationDone.emit();
            }
        });
    }
}
MatStepper.ɵfac = function MatStepper_Factory(t) { return new (t || MatStepper)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); };
MatStepper.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MatStepper, selectors: [["mat-stepper"], ["mat-vertical-stepper"], ["mat-horizontal-stepper"], ["", "matStepper", ""]], contentQueries: function MatStepper_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatStep, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatStepperIcon, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._steps = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._icons = _t);
    } }, viewQuery: function MatStepper_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](MatStepHeader, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._stepHeader = _t);
    } }, hostAttrs: ["role", "tablist"], hostVars: 9, hostBindings: function MatStepper_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-orientation", ctx.orientation);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-stepper-horizontal", ctx.orientation === "horizontal")("mat-stepper-vertical", ctx.orientation === "vertical")("mat-stepper-label-position-end", ctx.orientation === "horizontal" && ctx.labelPosition == "end")("mat-stepper-label-position-bottom", ctx.orientation === "horizontal" && ctx.labelPosition == "bottom");
    } }, inputs: { selectedIndex: "selectedIndex", labelPosition: "labelPosition", disableRipple: "disableRipple", color: "color" }, outputs: { animationDone: "animationDone" }, exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
            { provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"], useExisting: MatStepper },
            { provide: MatHorizontalStepper, useExisting: MatStepper },
            { provide: MatVerticalStepper, useExisting: MatStepper },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 3, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], ["stepTemplate", ""], [1, "mat-horizontal-stepper-header-container"], [4, "ngFor", "ngForOf"], [1, "mat-horizontal-content-container"], ["class", "mat-horizontal-stepper-content", "role", "tabpanel", 3, "id", 4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "mat-stepper-horizontal-line", 4, "ngIf"], [1, "mat-stepper-horizontal-line"], ["role", "tabpanel", 1, "mat-horizontal-stepper-content", 3, "id"], [3, "ngTemplateOutlet"], ["class", "mat-step", 4, "ngFor", "ngForOf"], [1, "mat-step"], [1, "mat-vertical-content-container"], ["role", "tabpanel", 1, "mat-vertical-stepper-content", 3, "id"], [1, "mat-vertical-content"], [3, "tabIndex", "id", "index", "state", "label", "selected", "active", "optional", "errorMessage", "iconOverrides", "disableRipple", "color", "click", "keydown"]], template: function MatStepper_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MatStepper_ng_container_1_Template, 5, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MatStepper_ng_container_2_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MatStepper_ng_template_3_Template, 1, 22, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", ctx.orientation);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "vertical");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], MatStepHeader], styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"], encapsulation: 2, data: { animation: [
            matStepperAnimations.horizontalStepTransition,
            matStepperAnimations.verticalStepTransition,
        ] }, changeDetection: 0 });
MatStepper.ctorParameters = () => [
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
];
MatStepper.propDecorators = {
    _stepHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"], args: [MatStepHeader,] }],
    _steps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [MatStep, { descendants: true },] }],
    _icons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [MatStepperIcon, { descendants: true },] }],
    animationDone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    disableRipple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    labelPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatStepper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'mat-stepper, mat-vertical-stepper, mat-horizontal-stepper, [matStepper]',
                exportAs: 'matStepper, matVerticalStepper, matHorizontalStepper',
                template: "<ng-container [ngSwitch]=\"orientation\">\n  <!-- Horizontal stepper -->\n  <ng-container *ngSwitchCase=\"'horizontal'\">\n    <div class=\"mat-horizontal-stepper-header-container\">\n      <ng-container *ngFor=\"let step of steps; let i = index; let isLast = last\">\n        <ng-container\n          [ngTemplateOutlet]=\"stepTemplate\"\n          [ngTemplateOutletContext]=\"{step: step, i: i}\"></ng-container>\n        <div *ngIf=\"!isLast\" class=\"mat-stepper-horizontal-line\"></div>\n      </ng-container>\n    </div>\n\n    <div class=\"mat-horizontal-content-container\">\n      <div *ngFor=\"let step of steps; let i = index\"\n           class=\"mat-horizontal-stepper-content\" role=\"tabpanel\"\n           [@horizontalStepTransition]=\"_getAnimationDirection(i)\"\n           (@horizontalStepTransition.done)=\"_animationDone.next($event)\"\n           [id]=\"_getStepContentId(i)\"\n           [attr.aria-labelledby]=\"_getStepLabelId(i)\"\n           [attr.aria-expanded]=\"selectedIndex === i\">\n        <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n      </div>\n    </div>\n  </ng-container>\n\n  <!-- Vertical stepper -->\n  <ng-container *ngSwitchCase=\"'vertical'\">\n    <div class=\"mat-step\" *ngFor=\"let step of steps; let i = index; let isLast = last\">\n      <ng-container\n        [ngTemplateOutlet]=\"stepTemplate\"\n        [ngTemplateOutletContext]=\"{step: step, i: i}\"></ng-container>\n      <div class=\"mat-vertical-content-container\" [class.mat-stepper-vertical-line]=\"!isLast\">\n        <div class=\"mat-vertical-stepper-content\" role=\"tabpanel\"\n             [@verticalStepTransition]=\"_getAnimationDirection(i)\"\n             (@verticalStepTransition.done)=\"_animationDone.next($event)\"\n             [id]=\"_getStepContentId(i)\"\n             [attr.aria-labelledby]=\"_getStepLabelId(i)\"\n             [attr.aria-expanded]=\"selectedIndex === i\">\n          <div class=\"mat-vertical-content\">\n            <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n\n</ng-container>\n\n<!-- Common step templating -->\n<ng-template let-step=\"step\" let-i=\"i\" #stepTemplate>\n  <mat-step-header\n    [class.mat-horizontal-stepper-header]=\"orientation === 'horizontal'\"\n    [class.mat-vertical-stepper-header]=\"orientation === 'vertical'\"\n    (click)=\"step.select()\"\n    (keydown)=\"_onKeydown($event)\"\n    [tabIndex]=\"_getFocusIndex() === i ? 0 : -1\"\n    [id]=\"_getStepLabelId(i)\"\n    [attr.aria-posinset]=\"i + 1\"\n    [attr.aria-setsize]=\"steps.length\"\n    [attr.aria-controls]=\"_getStepContentId(i)\"\n    [attr.aria-selected]=\"selectedIndex == i\"\n    [attr.aria-label]=\"step.ariaLabel || null\"\n    [attr.aria-labelledby]=\"(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null\"\n    [index]=\"i\"\n    [state]=\"_getIndicatorType(i, step.state)\"\n    [label]=\"step.stepLabel || step.label\"\n    [selected]=\"selectedIndex === i\"\n    [active]=\"step.completed || selectedIndex === i || !linear\"\n    [optional]=\"step.optional\"\n    [errorMessage]=\"step.errorMessage\"\n    [iconOverrides]=\"_iconOverrides\"\n    [disableRipple]=\"disableRipple\"\n    [color]=\"step.color || color\"></mat-step-header>\n</ng-template>\n",
                inputs: ['selectedIndex'],
                host: {
                    '[class.mat-stepper-horizontal]': 'orientation === "horizontal"',
                    '[class.mat-stepper-vertical]': 'orientation === "vertical"',
                    '[class.mat-stepper-label-position-end]': 'orientation === "horizontal" && labelPosition == "end"',
                    '[class.mat-stepper-label-position-bottom]': 'orientation === "horizontal" && labelPosition == "bottom"',
                    '[attr.aria-orientation]': 'orientation',
                    'role': 'tablist'
                },
                animations: [
                    matStepperAnimations.horizontalStepTransition,
                    matStepperAnimations.verticalStepTransition,
                ],
                providers: [
                    { provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"], useExisting: MatStepper },
                    { provide: MatHorizontalStepper, useExisting: MatStepper },
                    { provide: MatVerticalStepper, useExisting: MatStepper },
                ],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"]
            }]
    }], function () { return [{ type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }]; }, { animationDone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], labelPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], _stepHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"],
            args: [MatStepHeader]
        }], _steps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [MatStep, { descendants: true }]
        }], _icons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [MatStepperIcon, { descendants: true }]
        }], disableRipple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Button that moves to the next step in a stepper workflow. */
class MatStepperNext extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperNext"] {
}
MatStepperNext.ɵfac = /*@__PURE__*/ function () { let ɵMatStepperNext_BaseFactory; return function MatStepperNext_Factory(t) { return (ɵMatStepperNext_BaseFactory || (ɵMatStepperNext_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatStepperNext)))(t || MatStepperNext); }; }();
MatStepperNext.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: MatStepperNext, selectors: [["button", "matStepperNext", ""]], hostAttrs: [1, "mat-stepper-next"], hostVars: 1, hostBindings: function MatStepperNext_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵhostProperty"]("type", ctx.type);
    } }, inputs: { type: "type" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatStepperNext, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'button[matStepperNext]',
                host: {
                    'class': 'mat-stepper-next',
                    '[type]': 'type'
                },
                inputs: ['type']
            }]
    }], null, null); })();
/** Button that moves to the previous step in a stepper workflow. */
class MatStepperPrevious extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperPrevious"] {
}
MatStepperPrevious.ɵfac = /*@__PURE__*/ function () { let ɵMatStepperPrevious_BaseFactory; return function MatStepperPrevious_Factory(t) { return (ɵMatStepperPrevious_BaseFactory || (ɵMatStepperPrevious_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatStepperPrevious)))(t || MatStepperPrevious); }; }();
MatStepperPrevious.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: MatStepperPrevious, selectors: [["button", "matStepperPrevious", ""]], hostAttrs: [1, "mat-stepper-previous"], hostVars: 1, hostBindings: function MatStepperPrevious_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵhostProperty"]("type", ctx.type);
    } }, inputs: { type: "type" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatStepperPrevious, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'button[matStepperPrevious]',
                host: {
                    'class': 'mat-stepper-previous',
                    '[type]': 'type'
                },
                inputs: ['type']
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatStepperModule {
}
MatStepperModule.ɵfac = function MatStepperModule_Factory(t) { return new (t || MatStepperModule)(); };
MatStepperModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MatStepperModule });
MatStepperModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [MAT_STEPPER_INTL_PROVIDER, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]], imports: [[
            _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["PortalModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
        ], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatStepperModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["PortalModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                ],
                exports: [
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"],
                    MatStep,
                    MatStepLabel,
                    MatStepper,
                    MatStepperNext,
                    MatStepperPrevious,
                    MatStepHeader,
                    MatStepperIcon,
                    MatStepContent,
                ],
                declarations: [
                    MatHorizontalStepper,
                    MatVerticalStepper,
                    MatStep,
                    MatStepLabel,
                    MatStepper,
                    MatStepperNext,
                    MatStepperPrevious,
                    MatStepHeader,
                    MatStepperIcon,
                    MatStepContent,
                ],
                providers: [MAT_STEPPER_INTL_PROVIDER, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MatStepperModule, { declarations: function () { return [MatHorizontalStepper, MatVerticalStepper, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon, MatStepContent]; }, imports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["PortalModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]]; }, exports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon, MatStepContent]; } }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=stepper.js.map

/***/ }),

/***/ "y91a":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/editors/editors.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"block-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <ul class=\"breadcrumb breadcrumb-style \">\r\n            <li class=\"breadcrumb-item\">\r\n              <h4 class=\"page-title\">Editors</h4>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-1\">\r\n              <a routerLink=\"/admin/dashboard/main\">\r\n                <i class=\"fas fa-home\"></i> Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item bcrumb-2\">\r\n              <a href=\"#\" onClick=\"return false;\">Forms</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">Editors</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- CKEditor -->\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2>\r\n              <strong>Ckeditor</strong>\r\n            </h2>\r\n\r\n          </div>\r\n          <div class=\"body\">\r\n            <ckeditor [editor]=\"Editor\" data=\"<p>Hello, world!</p>\"></ckeditor>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- #END# CKEditor -->\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "zkoq":
/*!***************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js ***!
  \***************************************************************************/
/*! exports provided: MatGridAvatarCssMatStyler, MatGridList, MatGridListModule, MatGridTile, MatGridTileFooterCssMatStyler, MatGridTileHeaderCssMatStyler, MatGridTileText, ɵTileCoordinator, ɵangular_material_src_material_grid_list_grid_list_a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridAvatarCssMatStyler", function() { return MatGridAvatarCssMatStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridList", function() { return MatGridList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridListModule", function() { return MatGridListModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridTile", function() { return MatGridTile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridTileFooterCssMatStyler", function() { return MatGridTileFooterCssMatStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridTileHeaderCssMatStyler", function() { return MatGridTileHeaderCssMatStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridTileText", function() { return MatGridTileText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵTileCoordinator", function() { return ɵTileCoordinator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_grid_list_grid_list_a", function() { return MAT_GRID_LIST; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");





/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Class for determining, from a list of tiles, the (row, col) position of each of those tiles
 * in the grid. This is necessary (rather than just rendering the tiles in normal document flow)
 * because the tiles can have a rowspan.
 *
 * The positioning algorithm greedily places each tile as soon as it encounters a gap in the grid
 * large enough to accommodate it so that the tiles still render in the same order in which they
 * are given.
 *
 * The basis of the algorithm is the use of an array to track the already placed tiles. Each
 * element of the array corresponds to a column, and the value indicates how many cells in that
 * column are already occupied; zero indicates an empty cell. Moving "down" to the next row
 * decrements each value in the tracking array (indicating that the column is one cell closer to
 * being free).
 *
 * @docs-private
 */



const _c0 = ["*"];
const _c1 = [[["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]], [["", "mat-line", ""], ["", "matLine", ""]], "*"];
const _c2 = ["[mat-grid-avatar], [matGridAvatar]", "[mat-line], [matLine]", "*"];
const _c3 = ".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}\n";
class TileCoordinator {
    constructor() {
        /** Index at which the search for the next gap will start. */
        this.columnIndex = 0;
        /** The current row index. */
        this.rowIndex = 0;
    }
    /** Gets the total number of rows occupied by tiles */
    get rowCount() { return this.rowIndex + 1; }
    /**
     * Gets the total span of rows occupied by tiles.
     * Ex: A list with 1 row that contains a tile with rowspan 2 will have a total rowspan of 2.
     */
    get rowspan() {
        const lastRowMax = Math.max(...this.tracker);
        // if any of the tiles has a rowspan that pushes it beyond the total row count,
        // add the difference to the rowcount
        return lastRowMax > 1 ? this.rowCount + lastRowMax - 1 : this.rowCount;
    }
    /**
     * Updates the tile positions.
     * @param numColumns Amount of columns in the grid.
     * @param tiles Tiles to be positioned.
     */
    update(numColumns, tiles) {
        this.columnIndex = 0;
        this.rowIndex = 0;
        this.tracker = new Array(numColumns);
        this.tracker.fill(0, 0, this.tracker.length);
        this.positions = tiles.map(tile => this._trackTile(tile));
    }
    /** Calculates the row and col position of a tile. */
    _trackTile(tile) {
        // Find a gap large enough for this tile.
        const gapStartIndex = this._findMatchingGap(tile.colspan);
        // Place tile in the resulting gap.
        this._markTilePosition(gapStartIndex, tile);
        // The next time we look for a gap, the search will start at columnIndex, which should be
        // immediately after the tile that has just been placed.
        this.columnIndex = gapStartIndex + tile.colspan;
        return new TilePosition(this.rowIndex, gapStartIndex);
    }
    /** Finds the next available space large enough to fit the tile. */
    _findMatchingGap(tileCols) {
        if (tileCols > this.tracker.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error(`mat-grid-list: tile with colspan ${tileCols} is wider than ` +
                `grid with cols="${this.tracker.length}".`);
        }
        // Start index is inclusive, end index is exclusive.
        let gapStartIndex = -1;
        let gapEndIndex = -1;
        // Look for a gap large enough to fit the given tile. Empty spaces are marked with a zero.
        do {
            // If we've reached the end of the row, go to the next row.
            if (this.columnIndex + tileCols > this.tracker.length) {
                this._nextRow();
                gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
                gapEndIndex = this._findGapEndIndex(gapStartIndex);
                continue;
            }
            gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
            // If there are no more empty spaces in this row at all, move on to the next row.
            if (gapStartIndex == -1) {
                this._nextRow();
                gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
                gapEndIndex = this._findGapEndIndex(gapStartIndex);
                continue;
            }
            gapEndIndex = this._findGapEndIndex(gapStartIndex);
            // If a gap large enough isn't found, we want to start looking immediately after the current
            // gap on the next iteration.
            this.columnIndex = gapStartIndex + 1;
            // Continue iterating until we find a gap wide enough for this tile. Since gapEndIndex is
            // exclusive, gapEndIndex is 0 means we didn't find a gap and should continue.
        } while ((gapEndIndex - gapStartIndex < tileCols) || (gapEndIndex == 0));
        // If we still didn't manage to find a gap, ensure that the index is
        // at least zero so the tile doesn't get pulled out of the grid.
        return Math.max(gapStartIndex, 0);
    }
    /** Move "down" to the next row. */
    _nextRow() {
        this.columnIndex = 0;
        this.rowIndex++;
        // Decrement all spaces by one to reflect moving down one row.
        for (let i = 0; i < this.tracker.length; i++) {
            this.tracker[i] = Math.max(0, this.tracker[i] - 1);
        }
    }
    /**
     * Finds the end index (exclusive) of a gap given the index from which to start looking.
     * The gap ends when a non-zero value is found.
     */
    _findGapEndIndex(gapStartIndex) {
        for (let i = gapStartIndex + 1; i < this.tracker.length; i++) {
            if (this.tracker[i] != 0) {
                return i;
            }
        }
        // The gap ends with the end of the row.
        return this.tracker.length;
    }
    /** Update the tile tracker to account for the given tile in the given space. */
    _markTilePosition(start, tile) {
        for (let i = 0; i < tile.colspan; i++) {
            this.tracker[start + i] = tile.rowspan;
        }
    }
}
/**
 * Simple data structure for tile position (row, col).
 * @docs-private
 */
class TilePosition {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token used to provide a grid list to a tile and to avoid circular imports.
 * @docs-private
 */
const MAT_GRID_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_GRID_LIST');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatGridTile {
    constructor(_element, _gridList) {
        this._element = _element;
        this._gridList = _gridList;
        this._rowspan = 1;
        this._colspan = 1;
    }
    /** Amount of rows that the grid tile takes up. */
    get rowspan() { return this._rowspan; }
    set rowspan(value) { this._rowspan = Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value)); }
    /** Amount of columns that the grid tile takes up. */
    get colspan() { return this._colspan; }
    set colspan(value) { this._colspan = Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value)); }
    /**
     * Sets the style of the grid-tile element.  Needs to be set manually to avoid
     * "Changed after checked" errors that would occur with HostBinding.
     */
    _setStyle(property, value) {
        this._element.nativeElement.style[property] = value;
    }
}
MatGridTile.ɵfac = function MatGridTile_Factory(t) { return new (t || MatGridTile)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_GRID_LIST, 8)); };
MatGridTile.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatGridTile, selectors: [["mat-grid-tile"]], hostAttrs: [1, "mat-grid-tile"], hostVars: 2, hostBindings: function MatGridTile_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("rowspan", ctx.rowspan)("colspan", ctx.colspan);
    } }, inputs: { rowspan: "rowspan", colspan: "colspan" }, exportAs: ["matGridTile"], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "mat-grid-tile-content"]], template: function MatGridTile_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [_c3], encapsulation: 2, changeDetection: 0 });
MatGridTile.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_GRID_LIST,] }] }
];
MatGridTile.propDecorators = {
    rowspan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    colspan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTile, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-grid-tile',
                exportAs: 'matGridTile',
                host: {
                    'class': 'mat-grid-tile',
                    // Ensures that the "rowspan" and "colspan" input value is reflected in
                    // the DOM. This is needed for the grid-tile harness.
                    '[attr.rowspan]': 'rowspan',
                    '[attr.colspan]': 'colspan'
                },
                template: "<div class=\"mat-grid-tile-content\">\n  <ng-content></ng-content>\n</div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [MAT_GRID_LIST]
            }] }]; }, { rowspan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], colspan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class MatGridTileText {
    constructor(_element) {
        this._element = _element;
    }
    ngAfterContentInit() {
        Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["setLines"])(this._lines, this._element);
    }
}
MatGridTileText.ɵfac = function MatGridTileText_Factory(t) { return new (t || MatGridTileText)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
MatGridTileText.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatGridTileText, selectors: [["mat-grid-tile-header"], ["mat-grid-tile-footer"]], contentQueries: function MatGridTileText_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._lines = _t);
    } }, ngContentSelectors: _c2, decls: 4, vars: 0, consts: [[1, "mat-grid-list-text"]], template: function MatGridTileText_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
    } }, encapsulation: 2, changeDetection: 0 });
MatGridTileText.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
MatGridTileText.propDecorators = {
    _lines: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], { descendants: true },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileText, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-grid-tile-header, mat-grid-tile-footer',
                template: "<ng-content select=\"[mat-grid-avatar], [matGridAvatar]\"></ng-content>\n<div class=\"mat-grid-list-text\"><ng-content select=\"[mat-line], [matLine]\"></ng-content></div>\n<ng-content></ng-content>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { _lines: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], { descendants: true }]
        }] }); })();
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
class MatGridAvatarCssMatStyler {
}
MatGridAvatarCssMatStyler.ɵfac = function MatGridAvatarCssMatStyler_Factory(t) { return new (t || MatGridAvatarCssMatStyler)(); };
MatGridAvatarCssMatStyler.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatGridAvatarCssMatStyler, selectors: [["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]], hostAttrs: [1, "mat-grid-avatar"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridAvatarCssMatStyler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[mat-grid-avatar], [matGridAvatar]',
                host: { 'class': 'mat-grid-avatar' }
            }]
    }], null, null); })();
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
class MatGridTileHeaderCssMatStyler {
}
MatGridTileHeaderCssMatStyler.ɵfac = function MatGridTileHeaderCssMatStyler_Factory(t) { return new (t || MatGridTileHeaderCssMatStyler)(); };
MatGridTileHeaderCssMatStyler.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatGridTileHeaderCssMatStyler, selectors: [["mat-grid-tile-header"]], hostAttrs: [1, "mat-grid-tile-header"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileHeaderCssMatStyler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'mat-grid-tile-header',
                host: { 'class': 'mat-grid-tile-header' }
            }]
    }], null, null); })();
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
class MatGridTileFooterCssMatStyler {
}
MatGridTileFooterCssMatStyler.ɵfac = function MatGridTileFooterCssMatStyler_Factory(t) { return new (t || MatGridTileFooterCssMatStyler)(); };
MatGridTileFooterCssMatStyler.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatGridTileFooterCssMatStyler, selectors: [["mat-grid-tile-footer"]], hostAttrs: [1, "mat-grid-tile-footer"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileFooterCssMatStyler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'mat-grid-tile-footer',
                host: { 'class': 'mat-grid-tile-footer' }
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * RegExp that can be used to check whether a value will
 * be allowed inside a CSS `calc()` expression.
 */
const cssCalcAllowedValue = /^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;
/**
 * Sets the style properties for an individual tile, given the position calculated by the
 * Tile Coordinator.
 * @docs-private
 */
class TileStyler {
    constructor() {
        this._rows = 0;
        this._rowspan = 0;
    }
    /**
     * Adds grid-list layout info once it is available. Cannot be processed in the constructor
     * because these properties haven't been calculated by that point.
     *
     * @param gutterSize Size of the grid's gutter.
     * @param tracker Instance of the TileCoordinator.
     * @param cols Amount of columns in the grid.
     * @param direction Layout direction of the grid.
     */
    init(gutterSize, tracker, cols, direction) {
        this._gutterSize = normalizeUnits(gutterSize);
        this._rows = tracker.rowCount;
        this._rowspan = tracker.rowspan;
        this._cols = cols;
        this._direction = direction;
    }
    /**
     * Computes the amount of space a single 1x1 tile would take up (width or height).
     * Used as a basis for other calculations.
     * @param sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
     * @param gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
     * @return The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
     */
    getBaseTileSize(sizePercent, gutterFraction) {
        // Take the base size percent (as would be if evenly dividing the size between cells),
        // and then subtracting the size of one gutter. However, since there are no gutters on the
        // edges, each tile only uses a fraction (gutterShare = numGutters / numCells) of the gutter
        // size. (Imagine having one gutter per tile, and then breaking up the extra gutter on the
        // edge evenly among the cells).
        return `(${sizePercent}% - (${this._gutterSize} * ${gutterFraction}))`;
    }
    /**
     * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
     * @param offset Number of tiles that have already been rendered in the row/column.
     * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
     * @return Position of the tile as a CSS calc() expression.
     */
    getTilePosition(baseSize, offset) {
        // The position comes the size of a 1x1 tile plus gutter for each previous tile in the
        // row/column (offset).
        return offset === 0 ? '0' : calc(`(${baseSize} + ${this._gutterSize}) * ${offset}`);
    }
    /**
     * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
     * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
     * @param span The tile's rowspan or colspan.
     * @return Size of the tile as a CSS calc() expression.
     */
    getTileSize(baseSize, span) {
        return `(${baseSize} * ${span}) + (${span - 1} * ${this._gutterSize})`;
    }
    /**
     * Sets the style properties to be applied to a tile for the given row and column index.
     * @param tile Tile to which to apply the styling.
     * @param rowIndex Index of the tile's row.
     * @param colIndex Index of the tile's column.
     */
    setStyle(tile, rowIndex, colIndex) {
        // Percent of the available horizontal space that one column takes up.
        let percentWidthPerTile = 100 / this._cols;
        // Fraction of the vertical gutter size that each column takes up.
        // For example, if there are 5 columns, each column uses 4/5 = 0.8 times the gutter width.
        let gutterWidthFractionPerTile = (this._cols - 1) / this._cols;
        this.setColStyles(tile, colIndex, percentWidthPerTile, gutterWidthFractionPerTile);
        this.setRowStyles(tile, rowIndex, percentWidthPerTile, gutterWidthFractionPerTile);
    }
    /** Sets the horizontal placement of the tile in the list. */
    setColStyles(tile, colIndex, percentWidth, gutterWidth) {
        // Base horizontal size of a column.
        let baseTileWidth = this.getBaseTileSize(percentWidth, gutterWidth);
        // The width and horizontal position of each tile is always calculated the same way, but the
        // height and vertical position depends on the rowMode.
        let side = this._direction === 'rtl' ? 'right' : 'left';
        tile._setStyle(side, this.getTilePosition(baseTileWidth, colIndex));
        tile._setStyle('width', calc(this.getTileSize(baseTileWidth, tile.colspan)));
    }
    /**
     * Calculates the total size taken up by gutters across one axis of a list.
     */
    getGutterSpan() {
        return `${this._gutterSize} * (${this._rowspan} - 1)`;
    }
    /**
     * Calculates the total size taken up by tiles across one axis of a list.
     * @param tileHeight Height of the tile.
     */
    getTileSpan(tileHeight) {
        return `${this._rowspan} * ${this.getTileSize(tileHeight, 1)}`;
    }
    /**
     * Calculates the computed height and returns the correct style property to set.
     * This method can be implemented by each type of TileStyler.
     * @docs-private
     */
    getComputedHeight() { return null; }
}
/**
 * This type of styler is instantiated when the user passes in a fixed row height.
 * Example `<mat-grid-list cols="3" rowHeight="100px">`
 * @docs-private
 */
class FixedTileStyler extends TileStyler {
    constructor(fixedRowHeight) {
        super();
        this.fixedRowHeight = fixedRowHeight;
    }
    init(gutterSize, tracker, cols, direction) {
        super.init(gutterSize, tracker, cols, direction);
        this.fixedRowHeight = normalizeUnits(this.fixedRowHeight);
        if (!cssCalcAllowedValue.test(this.fixedRowHeight) &&
            (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error(`Invalid value "${this.fixedRowHeight}" set as rowHeight.`);
        }
    }
    setRowStyles(tile, rowIndex) {
        tile._setStyle('top', this.getTilePosition(this.fixedRowHeight, rowIndex));
        tile._setStyle('height', calc(this.getTileSize(this.fixedRowHeight, tile.rowspan)));
    }
    getComputedHeight() {
        return [
            'height', calc(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)
        ];
    }
    reset(list) {
        list._setListStyle(['height', null]);
        if (list._tiles) {
            list._tiles.forEach(tile => {
                tile._setStyle('top', null);
                tile._setStyle('height', null);
            });
        }
    }
}
/**
 * This type of styler is instantiated when the user passes in a width:height ratio
 * for the row height.  Example `<mat-grid-list cols="3" rowHeight="3:1">`
 * @docs-private
 */
class RatioTileStyler extends TileStyler {
    constructor(value) {
        super();
        this._parseRatio(value);
    }
    setRowStyles(tile, rowIndex, percentWidth, gutterWidth) {
        let percentHeightPerTile = percentWidth / this.rowHeightRatio;
        this.baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterWidth);
        // Use padding-top and margin-top to maintain the given aspect ratio, as
        // a percentage-based value for these properties is applied versus the *width* of the
        // containing block. See http://www.w3.org/TR/CSS2/box.html#margin-properties
        tile._setStyle('marginTop', this.getTilePosition(this.baseTileHeight, rowIndex));
        tile._setStyle('paddingTop', calc(this.getTileSize(this.baseTileHeight, tile.rowspan)));
    }
    getComputedHeight() {
        return [
            'paddingBottom', calc(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)
        ];
    }
    reset(list) {
        list._setListStyle(['paddingBottom', null]);
        list._tiles.forEach(tile => {
            tile._setStyle('marginTop', null);
            tile._setStyle('paddingTop', null);
        });
    }
    _parseRatio(value) {
        const ratioParts = value.split(':');
        if (ratioParts.length !== 2 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error(`mat-grid-list: invalid ratio given for row-height: "${value}"`);
        }
        this.rowHeightRatio = parseFloat(ratioParts[0]) / parseFloat(ratioParts[1]);
    }
}
/**
 * This type of styler is instantiated when the user selects a "fit" row height mode.
 * In other words, the row height will reflect the total height of the container divided
 * by the number of rows.  Example `<mat-grid-list cols="3" rowHeight="fit">`
 *
 * @docs-private
 */
class FitTileStyler extends TileStyler {
    setRowStyles(tile, rowIndex) {
        // Percent of the available vertical space that one row takes up.
        let percentHeightPerTile = 100 / this._rowspan;
        // Fraction of the horizontal gutter size that each column takes up.
        let gutterHeightPerTile = (this._rows - 1) / this._rows;
        // Base vertical size of a column.
        let baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterHeightPerTile);
        tile._setStyle('top', this.getTilePosition(baseTileHeight, rowIndex));
        tile._setStyle('height', calc(this.getTileSize(baseTileHeight, tile.rowspan)));
    }
    reset(list) {
        if (list._tiles) {
            list._tiles.forEach(tile => {
                tile._setStyle('top', null);
                tile._setStyle('height', null);
            });
        }
    }
}
/** Wraps a CSS string in a calc function */
function calc(exp) {
    return `calc(${exp})`;
}
/** Appends pixels to a CSS string if no units are given. */
function normalizeUnits(value) {
    return value.match(/([A-Za-z%]+)$/) ? value : `${value}px`;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(kara): Conditional (responsive) column count / row size.
// TODO(kara): Re-layout on window resize / media change (debounced).
// TODO(kara): gridTileHeader and gridTileFooter.
const MAT_FIT_MODE = 'fit';
class MatGridList {
    constructor(_element, _dir) {
        this._element = _element;
        this._dir = _dir;
        /** The amount of space between tiles. This will be something like '5px' or '2em'. */
        this._gutter = '1px';
    }
    /** Amount of columns in the grid list. */
    get cols() { return this._cols; }
    set cols(value) {
        this._cols = Math.max(1, Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value)));
    }
    /** Size of the grid list's gutter in pixels. */
    get gutterSize() { return this._gutter; }
    set gutterSize(value) { this._gutter = `${value == null ? '' : value}`; }
    /** Set internal representation of row height from the user-provided value. */
    get rowHeight() { return this._rowHeight; }
    set rowHeight(value) {
        const newValue = `${value == null ? '' : value}`;
        if (newValue !== this._rowHeight) {
            this._rowHeight = newValue;
            this._setTileStyler(this._rowHeight);
        }
    }
    ngOnInit() {
        this._checkCols();
        this._checkRowHeight();
    }
    /**
     * The layout calculation is fairly cheap if nothing changes, so there's little cost
     * to run it frequently.
     */
    ngAfterContentChecked() {
        this._layoutTiles();
    }
    /** Throw a friendly error if cols property is missing */
    _checkCols() {
        if (!this.cols && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error(`mat-grid-list: must pass in number of columns. ` +
                `Example: <mat-grid-list cols="3">`);
        }
    }
    /** Default to equal width:height if rowHeight property is missing */
    _checkRowHeight() {
        if (!this._rowHeight) {
            this._setTileStyler('1:1');
        }
    }
    /** Creates correct Tile Styler subtype based on rowHeight passed in by user */
    _setTileStyler(rowHeight) {
        if (this._tileStyler) {
            this._tileStyler.reset(this);
        }
        if (rowHeight === MAT_FIT_MODE) {
            this._tileStyler = new FitTileStyler();
        }
        else if (rowHeight && rowHeight.indexOf(':') > -1) {
            this._tileStyler = new RatioTileStyler(rowHeight);
        }
        else {
            this._tileStyler = new FixedTileStyler(rowHeight);
        }
    }
    /** Computes and applies the size and position for all children grid tiles. */
    _layoutTiles() {
        if (!this._tileCoordinator) {
            this._tileCoordinator = new TileCoordinator();
        }
        const tracker = this._tileCoordinator;
        const tiles = this._tiles.filter(tile => !tile._gridList || tile._gridList === this);
        const direction = this._dir ? this._dir.value : 'ltr';
        this._tileCoordinator.update(this.cols, tiles);
        this._tileStyler.init(this.gutterSize, tracker, this.cols, direction);
        tiles.forEach((tile, index) => {
            const pos = tracker.positions[index];
            this._tileStyler.setStyle(tile, pos.row, pos.col);
        });
        this._setListStyle(this._tileStyler.getComputedHeight());
    }
    /** Sets style on the main grid-list element, given the style name and value. */
    _setListStyle(style) {
        if (style) {
            this._element.nativeElement.style[style[0]] = style[1];
        }
    }
}
MatGridList.ɵfac = function MatGridList_Factory(t) { return new (t || MatGridList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], 8)); };
MatGridList.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatGridList, selectors: [["mat-grid-list"]], contentQueries: function MatGridList_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatGridTile, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tiles = _t);
    } }, hostAttrs: [1, "mat-grid-list"], hostVars: 1, hostBindings: function MatGridList_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cols", ctx.cols);
    } }, inputs: { cols: "cols", gutterSize: "gutterSize", rowHeight: "rowHeight" }, exportAs: ["matGridList"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                provide: MAT_GRID_LIST,
                useExisting: MatGridList
            }])], ngContentSelectors: _c0, decls: 2, vars: 0, template: function MatGridList_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [_c3], encapsulation: 2, changeDetection: 0 });
MatGridList.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
MatGridList.propDecorators = {
    _tiles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [MatGridTile, { descendants: true },] }],
    cols: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    gutterSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-grid-list',
                exportAs: 'matGridList',
                template: "<div>\n  <ng-content></ng-content>\n</div>",
                host: {
                    'class': 'mat-grid-list',
                    // Ensures that the "cols" input value is reflected in the DOM. This is
                    // needed for the grid-list harness.
                    '[attr.cols]': 'cols'
                },
                providers: [{
                        provide: MAT_GRID_LIST,
                        useExisting: MatGridList
                    }],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, { cols: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], gutterSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], _tiles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [MatGridTile, { descendants: true }]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatGridListModule {
}
MatGridListModule.ɵfac = function MatGridListModule_Factory(t) { return new (t || MatGridListModule)(); };
MatGridListModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatGridListModule });
MatGridListModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
                exports: [
                    MatGridList,
                    MatGridTile,
                    MatGridTileText,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"],
                    MatGridTileHeaderCssMatStyler,
                    MatGridTileFooterCssMatStyler,
                    MatGridAvatarCssMatStyler
                ],
                declarations: [
                    MatGridList,
                    MatGridTile,
                    MatGridTileText,
                    MatGridTileHeaderCssMatStyler,
                    MatGridTileFooterCssMatStyler,
                    MatGridAvatarCssMatStyler
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatGridListModule, { declarations: function () { return [MatGridList, MatGridTile, MatGridTileText, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler]; }, imports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]; }, exports: function () { return [MatGridList, MatGridTile, MatGridTileText, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"], MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler]; } }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Privately exported for the grid-list harness.
const ɵTileCoordinator = TileCoordinator;

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=grid-list.js.map

/***/ })

}]);
//# sourceMappingURL=forms-forms-module-es2015.js.map