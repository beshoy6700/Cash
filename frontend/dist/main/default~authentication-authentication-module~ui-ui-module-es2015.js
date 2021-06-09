(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~authentication-authentication-module~ui-ui-module"],{

/***/ "XfUL":
/*!*****************************************************************************************!*\
  !*** ./node_modules/mat-progress-buttons/__ivy_ngcc__/fesm2015/mat-progress-buttons.js ***!
  \*****************************************************************************************/
/*! exports provided: MatBarButtonComponent, MatProgressButtonsModule, MatSpinnerButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatBarButtonComponent", function() { return MatBarButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatProgressButtonsModule", function() { return MatProgressButtonsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSpinnerButtonComponent", function() { return MatSpinnerButtonComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");















function MatSpinnerButtonComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-mat-icon", !ctx_r0.options.buttonIcon.fontSet)("active", ctx_r0.options.active && !ctx_r0.options.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.options.buttonIcon.customClass)("fontSet", ctx_r0.options.buttonIcon.fontSet)("fontIcon", ctx_r0.options.buttonIcon.fontIcon)("color", ctx_r0.options.buttonIcon.color)("svgIcon", ctx_r0.options.buttonIcon.svgIcon)("inline", ctx_r0.options.buttonIcon.inline);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.options.buttonIcon.fontSet ? "" : ctx_r0.options.buttonIcon.fontIcon, " ");
} }
function MatSpinnerButtonComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r1.options.active && !ctx_r1.options.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.options.text, " ");
} }
function MatSpinnerButtonComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fontSet", ctx_r2.options.icon.fontSet)("fontIcon", ctx_r2.options.icon.fontIcon)("color", ctx_r2.options.icon.color)("svgIcon", ctx_r2.options.icon.svgIcon)("inline", ctx_r2.options.icon.inline);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.options.icon.fontSet ? "" : ctx_r2.options.icon.fontIcon, " ");
} }
function MatSpinnerButtonComponent_mat_spinner_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner", 7);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r3.options.active && !ctx_r3.options.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("diameter", ctx_r3.options.fab ? 58 : ctx_r3.options.spinnerSize)("color", ctx_r3.options.spinnerColor)("mode", ctx_r3.options.mode)("value", ctx_r3.options.value);
} }
function MatBarButtonComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-mat-icon", !ctx_r0.options.buttonIcon.fontSet);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.options.buttonIcon.customClass)("fontSet", ctx_r0.options.buttonIcon.fontSet)("fontIcon", ctx_r0.options.buttonIcon.fontIcon)("color", ctx_r0.options.buttonIcon.color)("svgIcon", ctx_r0.options.buttonIcon.svgIcon)("inline", ctx_r0.options.buttonIcon.inline);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.options.buttonIcon.fontSet ? "" : ctx_r0.options.buttonIcon.fontIcon, " ");
} }
function MatBarButtonComponent_mat_progress_bar_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-bar", 4);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r1.options.barColor)("mode", ctx_r1.options.mode)("value", ctx_r1.options.value);
} }
class MatSpinnerButtonComponent {
    constructor() {
        this.btnClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onClick(event) {
        if (!this.options.disabled && !this.options.active) {
            this.btnClick.emit(event);
        }
    }
    ngOnChanges(changes) {
        if (changes.active) {
            this.options.active = changes.active.currentValue;
        }
        if (changes.disabled) {
            this.options.disabled = changes.disabled.currentValue;
        }
    }
}
MatSpinnerButtonComponent.ɵfac = function MatSpinnerButtonComponent_Factory(t) { return new (t || MatSpinnerButtonComponent)(); };
MatSpinnerButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatSpinnerButtonComponent, selectors: [["mat-spinner-button"]], hostBindings: function MatSpinnerButtonComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatSpinnerButtonComponent_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, inputs: { options: "options", active: "active", disabled: "disabled" }, outputs: { btnClick: "btnClick" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 20, consts: [["mat-button", "", 3, "type", "color", "ngClass", "disabled"], [4, "ngIf"], ["class", "button-text", 3, "active", 4, "ngIf"], ["class", "spinner", 3, "diameter", "color", "mode", "value", "active", 4, "ngIf"], [1, "mat-button-icon", 3, "ngClass", "fontSet", "fontIcon", "color", "svgIcon", "inline"], [1, "button-text"], [3, "fontSet", "fontIcon", "color", "svgIcon", "inline"], [1, "spinner", 3, "diameter", "color", "mode", "value"]], template: function MatSpinnerButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MatSpinnerButtonComponent_ng_container_1_Template, 3, 11, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MatSpinnerButtonComponent_span_2_Template, 2, 3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MatSpinnerButtonComponent_ng_container_3_Template, 3, 6, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MatSpinnerButtonComponent_mat_spinner_4_Template, 1, 6, "mat-spinner", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.options.active)("fullWidth", ctx.options.fullWidth)("mat-raised-button", ctx.options.raised)("mat-stroked-button", ctx.options.stroked)("mat-flat-button", ctx.options.flat)("mat-fab", ctx.options.fab);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.options.type)("color", ctx.options.buttonColor)("ngClass", ctx.options.customClass)("disabled", ctx.options.active || ctx.options.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.options.buttonIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.options.fab);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.options.fab && ctx.options.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.options.active && !ctx.options.disabled);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatSpinner"]], styles: ["[_nghost-%COMP%]   button[_ngcontent-%COMP%]{outline:none}[_nghost-%COMP%]   button.active[_ngcontent-%COMP%]{cursor:not-allowed}[_nghost-%COMP%]   button[_ngcontent-%COMP%]     .mat-button-wrapper{align-items:center;display:flex;justify-content:center}[_nghost-%COMP%]   button.fullWidth[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   button.mat-fab[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]{margin-top:-15px}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]{opacity:0;position:absolute;top:25%;transition:opacity .3s ease-in-out}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   .spinner.active[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   .button-text[_ngcontent-%COMP%]{opacity:1;transition:opacity .3s ease-in-out}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   .button-text.active[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   mat-icon.mat-button-icon[_ngcontent-%COMP%]{padding-right:5px;transition:opacity .3s ease-in-out}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   mat-icon.mat-button-icon.is-mat-icon[_ngcontent-%COMP%]{font-size:18px;position:relative;top:3px}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   mat-icon.mat-button-icon.active[_ngcontent-%COMP%]{opacity:0}"] });
MatSpinnerButtonComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    btnClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['click', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSpinnerButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'mat-spinner-button',
                template: "<button mat-button\n  [type]=\"options.type\"\n  [color]=\"options.buttonColor\"\n  [class.active]=\"options.active\"\n  [class.fullWidth]=\"options.fullWidth\"\n  [class.mat-raised-button]=\"options.raised\"\n  [class.mat-stroked-button]=\"options.stroked\"\n  [class.mat-flat-button]=\"options.flat\"\n  [class.mat-fab]=\"options.fab\"\n  [ngClass]=\"options.customClass\"\n  [disabled]=\"options.active || options.disabled\">\n\n  <ng-container\n    *ngIf=\"options.buttonIcon\">\n    <mat-icon\n      class=\"mat-button-icon\"\n      [class.is-mat-icon]=\"!options.buttonIcon.fontSet\"\n      [class.active]=\"options.active && !options.disabled\"\n      [ngClass]=\"options.buttonIcon.customClass\"\n      [fontSet]=\"options.buttonIcon.fontSet\"\n      [fontIcon]=\"options.buttonIcon.fontIcon\"\n      [color]=\"options.buttonIcon.color\"\n      [svgIcon]=\"options.buttonIcon.svgIcon\"\n      [inline]=\"options.buttonIcon.inline\">\n      {{ options.buttonIcon.fontSet ? '' : options.buttonIcon.fontIcon }}\n    </mat-icon>\n  </ng-container>\n\n  <span\n    class=\"button-text\"\n    *ngIf=\"!options.fab\"\n    [class.active]=\"options.active && !options.disabled\">\n      {{ options.text }}\n  </span>\n\n  <ng-container\n    *ngIf=\"options.fab && options.icon\">\n    <mat-icon\n      [fontSet]=\"options.icon.fontSet\"\n      [fontIcon]=\"options.icon.fontIcon\"\n      [color]=\"options.icon.color\"\n      [svgIcon]=\"options.icon.svgIcon\"\n      [inline]=\"options.icon.inline\">\n        {{ options.icon.fontSet ? '' : options.icon.fontIcon }}\n    </mat-icon>\n  </ng-container>\n\n  <mat-spinner class=\"spinner\"\n    *ngIf=\"options.active && !options.disabled\"\n    [diameter]=\"options.fab ? 58 : options.spinnerSize\"\n    [color]=\"options.spinnerColor\"\n    [mode]=\"options.mode\"\n    [value]=\"options.value\"\n    [class.active]=\"options.active && !options.disabled\">\n  </mat-spinner>\n</button>\n",
                styles: [":host button{outline:none}:host button.active{cursor:not-allowed}:host button ::ng-deep .mat-button-wrapper{align-items:center;display:flex;justify-content:center}:host button.fullWidth{width:100%}:host button.mat-fab .spinner{margin-top:-15px}:host button .spinner{opacity:0;position:absolute;top:25%;transition:opacity .3s ease-in-out}:host button .spinner.active{opacity:1}:host button .button-text{opacity:1;transition:opacity .3s ease-in-out}:host button .button-text.active{opacity:0}:host button mat-icon.mat-button-icon{padding-right:5px;transition:opacity .3s ease-in-out}:host button mat-icon.mat-button-icon.is-mat-icon{font-size:18px;position:relative;top:3px}:host button mat-icon.mat-button-icon.active{opacity:0}"]
            }]
    }], function () { return []; }, { btnClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['click', ['$event']]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

class MatBarButtonComponent {
    constructor() {
        this.btnClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onClick(event) {
        if (!this.options.disabled && !this.options.active) {
            this.btnClick.emit(event);
        }
    }
    ngOnChanges(changes) {
        if (changes.active) {
            this.options.active = changes.active.currentValue;
        }
        if (changes.disabled) {
            this.options.disabled = changes.disabled.currentValue;
        }
    }
}
MatBarButtonComponent.ɵfac = function MatBarButtonComponent_Factory(t) { return new (t || MatBarButtonComponent)(); };
MatBarButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatBarButtonComponent, selectors: [["mat-bar-button"]], hostBindings: function MatBarButtonComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatBarButtonComponent_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, inputs: { options: "options", active: "active", disabled: "disabled" }, outputs: { btnClick: "btnClick" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 17, consts: [["mat-button", "", 3, "type", "color", "ngClass", "disabled"], [4, "ngIf"], ["class", "bar", 3, "color", "mode", "value", 4, "ngIf"], [3, "ngClass", "fontSet", "fontIcon", "color", "svgIcon", "inline"], [1, "bar", 3, "color", "mode", "value"]], template: function MatBarButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MatBarButtonComponent_ng_container_1_Template, 3, 9, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MatBarButtonComponent_mat_progress_bar_4_Template, 1, 3, "mat-progress-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.options.active)("mat-raised-button", ctx.options.raised)("mat-stroked-button", ctx.options.stroked)("mat-flat-button", ctx.options.flat)("fullWidth", ctx.options.fullWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.options.type)("color", ctx.options.buttonColor)("ngClass", ctx.options.customClass)("disabled", ctx.options.active || ctx.options.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.options.buttonIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.options.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.options.active && !ctx.options.disabled);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MatProgressBar"]], styles: ["[_nghost-%COMP%]   button.active[_ngcontent-%COMP%]{cursor:not-allowed}[_nghost-%COMP%]   button.fullWidth[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{left:0;position:absolute;top:0}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{padding-right:5px}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   mat-icon.is-mat-icon[_ngcontent-%COMP%]{font-size:18px;position:relative;top:3px}"] });
MatBarButtonComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    btnClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['click', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatBarButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'mat-bar-button',
                template: "<button mat-button\n  [type]=\"options.type\"\n  [color]=\"options.buttonColor\"\n  [class.active]=\"options.active\"\n  [class.mat-raised-button]=\"options.raised\"\n  [class.mat-stroked-button]=\"options.stroked\"\n  [class.mat-flat-button]=\"options.flat\"\n  [class.fullWidth]=\"options.fullWidth\"\n  [ngClass]=\"options.customClass\"\n  [disabled]=\"options.active || options.disabled\">\n\n  <ng-container\n    *ngIf=\"options.buttonIcon\">\n    <mat-icon\n      [class.is-mat-icon]=\"!options.buttonIcon.fontSet\"\n      [ngClass]=\"options.buttonIcon.customClass\"\n      [fontSet]=\"options.buttonIcon.fontSet\"\n      [fontIcon]=\"options.buttonIcon.fontIcon\"\n      [color]=\"options.buttonIcon.color\"\n      [svgIcon]=\"options.buttonIcon.svgIcon\"\n      [inline]=\"options.buttonIcon.inline\">\n      {{ options.buttonIcon.fontSet ? '' : options.buttonIcon.fontIcon }}\n    </mat-icon>\n  </ng-container>\n\n  <span>{{ options.text }}</span>\n\n  <mat-progress-bar\n    class=\"bar\"\n    *ngIf=\"options.active && !options.disabled\"\n    [color]=\"options.barColor\"\n    [mode]=\"options.mode\"\n    [value]=\"options.value\">\n  </mat-progress-bar>\n</button>\n",
                styles: [":host button.active{cursor:not-allowed}:host button.fullWidth{width:100%}:host button .bar{left:0;position:absolute;top:0}:host button mat-icon{padding-right:5px}:host button mat-icon.is-mat-icon{font-size:18px;position:relative;top:3px}"]
            }]
    }], function () { return []; }, { btnClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['click', ['$event']]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

class MatProgressButtonsModule {
    static forRoot() {
        return {
            ngModule: MatProgressButtonsModule
        };
    }
}
MatProgressButtonsModule.ɵfac = function MatProgressButtonsModule_Factory(t) { return new (t || MatProgressButtonsModule)(); };
MatProgressButtonsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MatProgressButtonsModule });
MatProgressButtonsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatProgressButtonsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]
                ],
                exports: [
                    MatSpinnerButtonComponent,
                    MatBarButtonComponent
                ],
                declarations: [
                    MatSpinnerButtonComponent,
                    MatBarButtonComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatProgressButtonsModule, { declarations: function () { return [MatSpinnerButtonComponent, MatBarButtonComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]]; }, exports: function () { return [MatSpinnerButtonComponent, MatBarButtonComponent]; } }); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=mat-progress-buttons.js.map

/***/ })

}]);
//# sourceMappingURL=default~authentication-authentication-module~ui-ui-module-es2015.js.map