(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/Lhg":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header.component.html */ "VqkN");
/* harmony import */ var _header_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.sass */ "2VC3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_config_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/config/config.service */ "Cxl7");
/* harmony import */ var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/service/auth.service */ "KDUW");
/* harmony import */ var src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/service/rightsidebar.service */ "ld2u");
/* harmony import */ var src_app_core_service_language_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/service/language.service */ "rLcU");










const document = window.document;
let HeaderComponent = class HeaderComponent {
    constructor(document, renderer, elementRef, rightSidebarService, configService, authService, router, languageService) {
        this.document = document;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.rightSidebarService = rightSidebarService;
        this.configService = configService;
        this.authService = authService;
        this.router = router;
        this.languageService = languageService;
        this.config = {};
        this.isNavbarCollapsed = true;
        this.listLang = [
            { text: "English", flag: "assets/images/flags/us.jpg", lang: "en" },
            { text: "Spanish", flag: "assets/images/flags/spain.jpg", lang: "es" },
            { text: "German", flag: "assets/images/flags/germany.jpg", lang: "de" },
        ];
        this.notifications = [
            {
                userImg: "assets/images/user/user1.jpg",
                userName: "Sarah Smith",
                time: "14 mins ago",
                message: "Please check your mail",
            },
            {
                userImg: "assets/images/user/user2.jpg",
                userName: "Airi Satou",
                time: "22 mins ago",
                message: "Work Completed !!!",
            },
            {
                userImg: "assets/images/user/user3.jpg",
                userName: "John Doe",
                time: "3 hours ago",
                message: "kindly help me for code.",
            },
            {
                userImg: "assets/images/user/user4.jpg",
                userName: "Ashton Cox",
                time: "5 hours ago",
                message: "Lets break for lunch...",
            },
            {
                userImg: "assets/images/user/user5.jpg",
                userName: "Sarah Smith",
                time: "14 mins ago",
                message: "Please check your mail",
            },
            {
                userImg: "assets/images/user/user6.jpg",
                userName: "Airi Satou",
                time: "22 mins ago",
                message: "Work Completed !!!",
            },
            {
                userImg: "assets/images/user/user7.jpg",
                userName: "John Doe",
                time: "3 hours ago",
                message: "kindly help me for code.",
            },
        ];
    }
    ngOnInit() {
        this.config = this.configService.configData;
        const userRole = this.authService.currentUserValue.role;
        this.userImg = this.authService.currentUserValue.image;
        if (userRole === "Admin") {
            this.homePage = "admin/dashboard/main";
        }
        else if (userRole === "Patient") {
            this.homePage = "patient/dashboard";
        }
        else if (userRole === "Doctor") {
            this.homePage = "doctor/dashboard";
        }
        else {
            this.homePage = "admin/dashboard/main";
        }
        this.langStoreValue = localStorage.getItem("lang");
        const val = this.listLang.filter((x) => x.lang === this.langStoreValue);
        this.countryName = val.map((element) => element.text);
        if (val.length === 0) {
            if (this.flagvalue === undefined) {
                this.defaultFlag = "assets/images/flags/us.jpg";
            }
        }
        else {
            this.flagvalue = val.map((element) => element.flag);
        }
    }
    ngAfterViewInit() {
        // set theme on startup
        if (localStorage.getItem("theme")) {
            this.renderer.removeClass(this.document.body, this.config.layout.variant);
            this.renderer.addClass(this.document.body, localStorage.getItem("theme"));
        }
        else {
            this.renderer.addClass(this.document.body, this.config.layout.variant);
        }
        if (localStorage.getItem("menuOption")) {
            this.renderer.addClass(this.document.body, localStorage.getItem("menuOption"));
        }
        else {
            this.renderer.addClass(this.document.body, "menu_" + this.config.layout.sidebar.backgroundColor);
        }
        if (localStorage.getItem("choose_logoheader")) {
            this.renderer.addClass(this.document.body, localStorage.getItem("choose_logoheader"));
        }
        else {
            this.renderer.addClass(this.document.body, "logo-" + this.config.layout.logo_bg_color);
        }
        if (localStorage.getItem("sidebar_status")) {
            if (localStorage.getItem("sidebar_status") === "close") {
                this.renderer.addClass(this.document.body, "side-closed");
                this.renderer.addClass(this.document.body, "submenu-closed");
            }
            else {
                this.renderer.removeClass(this.document.body, "side-closed");
                this.renderer.removeClass(this.document.body, "submenu-closed");
            }
        }
        else {
            if (this.config.layout.sidebar.collapsed === true) {
                this.renderer.addClass(this.document.body, "side-closed");
                this.renderer.addClass(this.document.body, "submenu-closed");
            }
        }
    }
    callFullscreen() {
        if (!document.fullscreenElement &&
            !document.mozFullScreenElement &&
            !document.webkitFullscreenElement &&
            !document.msFullscreenElement) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            }
            else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            }
            else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            }
            else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen();
            }
        }
        else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    }
    setLanguage(text, lang, flag) {
        this.countryName = text;
        this.flagvalue = flag;
        this.langStoreValue = lang;
        this.languageService.setLanguage(lang);
    }
    mobileMenuSidebarOpen(event, className) {
        const hasClass = event.target.classList.contains(className);
        if (hasClass) {
            this.renderer.removeClass(this.document.body, className);
        }
        else {
            this.renderer.addClass(this.document.body, className);
        }
    }
    callSidemenuCollapse() {
        const hasClass = this.document.body.classList.contains("side-closed");
        if (hasClass) {
            this.renderer.removeClass(this.document.body, "side-closed");
            this.renderer.removeClass(this.document.body, "submenu-closed");
        }
        else {
            this.renderer.addClass(this.document.body, "side-closed");
            this.renderer.addClass(this.document.body, "submenu-closed");
        }
    }
    toggleRightSidebar() {
        this.rightSidebarService.sidebarState.subscribe((isRunning) => {
            this.isOpenSidebar = isRunning;
        });
        this.rightSidebarService.setRightSidebar((this.isOpenSidebar = !this.isOpenSidebar));
    }
    logout() {
        this.authService.logout().subscribe((res) => {
            if (!res.success) {
                this.router.navigate(["/authentication/signin"]);
            }
        });
    }
};
HeaderComponent.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_8__["RightSidebarService"] },
    { type: src_app_config_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] },
    { type: src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_core_service_language_service__WEBPACK_IMPORTED_MODULE_9__["LanguageService"] }
];
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-header",
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HeaderComponent);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Hosting\htdocs\Cash\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "0HZm":
/*!*************************************!*\
  !*** ./src/app/core/models/role.ts ***!
  \*************************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
var Role;
(function (Role) {
    Role["All"] = "All";
    Role["Admin"] = "Admin";
    Role["Doctor"] = "Doctor";
    Role["Patient"] = "Patient";
})(Role || (Role = {}));


/***/ }),

/***/ "21P8":
/*!*************************************************************!*\
  !*** ./src/app/authentication/page404/page404.component.ts ***!
  \*************************************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_page404_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./page404.component.html */ "dUBH");
/* harmony import */ var _page404_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page404.component.scss */ "ym7x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let Page404Component = class Page404Component {
    constructor() { }
    ngOnInit() { }
};
Page404Component.ctorParameters = () => [];
Page404Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-page404",
        template: _raw_loader_page404_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_page404_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Page404Component);



/***/ }),

/***/ "2VC3":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.sass ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "3IAN":
/*!******************************************!*\
  !*** ./src/app/core/guard/auth.guard.ts ***!
  \******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/auth.service */ "KDUW");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.authService.currentUserValue) {
            const userRole = this.authService.currentUserValue.role;
            if (route.data.role && route.data.role.indexOf(userRole) === -1) {
                this.router.navigate(["/authentication/signin"]);
                return false;
            }
            return true;
        }
        this.router.navigate(["/authentication/signin"]);
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], AuthGuard);



/***/ }),

/***/ "3qQL":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/app-layout/main-layout/main-layout.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<app-sidebar></app-sidebar>\r\n<app-right-sidebar></app-right-sidebar>\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "4veq":
/*!*************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar-items.ts ***!
  \*************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
const ROUTES = [
    {
        path: "",
        title: "MENUITEMS.MAIN.TEXT",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "",
        groupTitle: true,
        badge: "",
        badgeClass: "",
        role: ["All"],
        submenu: [],
    },
    // Admin Modules
    {
        path: "",
        title: "الرئيسية",
        moduleName: "dashboard",
        iconType: "material-icons-two-tone",
        icon: "home",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [
            {
                path: "/admin/dashboard/main",
                title: "MENUITEMS.HOME.LIST.DASHBOARD1",
                moduleName: "dashboard",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/admin/dashboard/dashboard2",
                title: "MENUITEMS.HOME.LIST.DASHBOARD2",
                moduleName: "dashboard",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/admin/dashboard/doctor-dashboard",
                title: "MENUITEMS.HOME.LIST.DOCTOR-DASHBOARD",
                moduleName: "doctor-dashboard",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/admin/dashboard/patient-dashboard",
                title: "MENUITEMS.HOME.LIST.PATIENT-DASHBOARD",
                moduleName: "patient-dashboard",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "إدارة الدعم الفني",
        moduleName: "appointment",
        iconType: "material-icons-two-tone",
        icon: "assignment",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [
            {
                path: "/admin/appointment/viewAppointment",
                title: "MENUITEMS.APPOINTMENTS.LIST.VIEW-APPOINTMENT",
                moduleName: "appointment",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/admin/appointment/bookAppointment",
                title: "MENUITEMS.APPOINTMENTS.LIST.BOOK-APPOINTMENT",
                moduleName: "appointment",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/admin/appointment/edit-ppointment",
                title: "MENUITEMS.APPOINTMENTS.LIST.EDIT-APPOINTMENT",
                moduleName: "appointment",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "الدول والمحافظات",
        moduleName: "countries",
        iconType: "material-icons-two-tone",
        icon: "supervised_user_circle",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [
            {
                path: "/admin/countries/allCountries",
                title: "قائمة الدول",
                moduleName: "countries",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/admin/doctors/add-doctor",
                title: "قائمة المحافظات",
                moduleName: "doctors",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/admin/doctors/edit-doctor",
                title: "قائمة المدن",
                moduleName: "doctors",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/admin/doctors/doctor-profile",
                title: "قائمة المنطقة",
                moduleName: "doctors",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "إدارة الموظفين",
        moduleName: "staff",
        iconType: "material-icons-two-tone",
        icon: "people_alt",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [
            {
                path: "/admin/staff/all-staff",
                title: "MENUITEMS.STAFF.LIST.ALL-STAFF",
                moduleName: "staff",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/admin/staff/add-staff",
                title: "MENUITEMS.STAFF.LIST.ADD-STAFF",
                moduleName: "staff",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/admin/staff/edit-staff",
                title: "MENUITEMS.STAFF.LIST.EDIT-STAFF",
                moduleName: "staff",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/admin/staff/staff-profile",
                title: "MENUITEMS.STAFF.LIST.PROFILE",
                moduleName: "staff",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "المكاتب والفروع",
        moduleName: "patients",
        iconType: "material-icons-two-tone",
        icon: "face",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [
            {
                path: "/admin/patients/all-patients",
                title: "قائمة الفروع",
                moduleName: "patients",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/admin/patients/add-patient",
                title: "MENUITEMS.PATIENTS.LIST.ADD-PATIENT",
                moduleName: "patients",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/admin/patients/edit-patient",
                title: "MENUITEMS.PATIENTS.LIST.EDIT-PATIENT",
                moduleName: "patients",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/admin/patients/patient-profile",
                title: "MENUITEMS.PATIENTS.LIST.PROFILE",
                moduleName: "patients",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "الادارة المالية",
        moduleName: "payment",
        iconType: "material-icons-two-tone",
        icon: "monetization_on",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [
            {
                path: "/admin/payment/all-payment",
                title: "MENUITEMS.PAYMENTS.LIST.ALL-PAYMENTS",
                moduleName: "payment",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/admin/payment/add-payment",
                title: "MENUITEMS.PAYMENTS.LIST.ADD-PAYMENT",
                moduleName: "payment",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/admin/payment/invoice",
                title: "MENUITEMS.PAYMENTS.LIST.INVOICE",
                moduleName: "payment",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    // Doctor Modules
    {
        path: "/doctor/dashboard",
        title: "MENUITEMS.DOCTOR.DASHBOARD",
        moduleName: "dashboard",
        iconType: "material-icons-two-tone",
        icon: "home",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Doctor"],
        submenu: [],
    },
    {
        path: "/doctor/appointments",
        title: "MENUITEMS.DOCTOR.APPOINTMENTS",
        moduleName: "appointments",
        iconType: "material-icons-two-tone",
        icon: "assignment",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Doctor"],
        submenu: [],
    },
    {
        path: "/doctor/doctors",
        title: "MENUITEMS.DOCTOR.DOCTORS",
        moduleName: "doctors",
        iconType: "material-icons-two-tone",
        icon: "supervised_user_circle",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Doctor"],
        submenu: [],
    },
    {
        path: "/doctor/patients",
        title: "MENUITEMS.DOCTOR.PATIENTS",
        moduleName: "patients",
        iconType: "material-icons-two-tone",
        icon: "face",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Doctor"],
        submenu: [],
    },
    {
        path: "/doctor/settings",
        title: "MENUITEMS.DOCTOR.SETTINGS",
        moduleName: "settings",
        iconType: "material-icons-two-tone",
        icon: "settings",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Doctor"],
        submenu: [],
    },
    {
        path: "/apps/chat",
        title: "MENUITEMS.DOCTOR.CHAT",
        moduleName: "apps",
        iconType: "material-icons-two-tone",
        icon: "chat",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Doctor"],
        submenu: [],
    },
    // Patient Modules
    {
        path: "/patient/dashboard",
        title: "MENUITEMS.PATIENT.DASHBOARD",
        moduleName: "dashboard",
        iconType: "material-icons-two-tone",
        icon: "home",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Patient"],
        submenu: [],
    },
    {
        path: "",
        title: "MENUITEMS.PATIENT.APPOINTMENTS.TEXT",
        moduleName: "appointments",
        iconType: "material-icons-two-tone",
        icon: "assignment",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Patient"],
        submenu: [
            {
                path: "/patient/appointments/today",
                title: "MENUITEMS.PATIENT.APPOINTMENTS.LIST.TODAY",
                moduleName: "appointments",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/patient/appointments/upcoming",
                title: "MENUITEMS.PATIENT.APPOINTMENTS.LIST.UPCOMING",
                moduleName: "appointments",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/patient/appointments/past",
                title: "MENUITEMS.PATIENT.APPOINTMENTS.LIST.PAST",
                moduleName: "appointments",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    {
        path: "/patient/prescriptions",
        title: "MENUITEMS.PATIENT.PRESCRIPTIONS",
        moduleName: "prescriptions",
        iconType: "material-icons-two-tone",
        icon: "receipt_long",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Patient"],
        submenu: [],
    },
    {
        path: "/patient/records",
        title: "MENUITEMS.PATIENT.MEDICAL-RECORD",
        moduleName: "records",
        iconType: "material-icons-two-tone",
        icon: "restore_page",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Patient"],
        submenu: [],
    },
    {
        path: "/patient/billing",
        title: "MENUITEMS.PATIENT.BILLING",
        moduleName: "records",
        iconType: "material-icons-two-tone",
        icon: "receipt",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Patient"],
        submenu: [],
    },
    {
        path: "/apps/chat",
        title: "MENUITEMS.PATIENT.CHAT",
        moduleName: "apps",
        iconType: "material-icons-two-tone",
        icon: "chat",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Patient"],
        submenu: [],
    },
    {
        path: "/patient/settings",
        title: "MENUITEMS.PATIENT.SETTINGS",
        moduleName: "settings",
        iconType: "material-icons-two-tone",
        icon: "settings",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Patient"],
        submenu: [],
    },
    // Common Modules
    {
        path: "",
        title: "-- Apps",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "",
        groupTitle: true,
        badge: "",
        badgeClass: "",
        role: ["Admin", "Doctor"],
        submenu: [],
    },
    {
        path: "calendar",
        title: "Calendar",
        moduleName: "calendar",
        iconType: "material-icons-two-tone",
        icon: "event_note",
        class: "",
        groupTitle: false,
        badge: "New",
        badgeClass: "badge bg-blue sidebar-badge float-end",
        role: ["Admin", "Doctor"],
        submenu: [],
    },
    {
        path: "task",
        title: "Task",
        moduleName: "task",
        iconType: "material-icons-two-tone",
        icon: "fact_check",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin", "Doctor"],
        submenu: [],
    },
    {
        path: "contacts",
        title: "Contacts",
        moduleName: "contacts",
        iconType: "material-icons-two-tone",
        icon: "contacts",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin", "Doctor"],
        submenu: [],
    },
    {
        path: "",
        title: "Email",
        moduleName: "email",
        iconType: "material-icons-two-tone",
        icon: "email",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin", "Doctor"],
        submenu: [
            {
                path: "/email/inbox",
                title: "Inbox",
                moduleName: "email",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/email/compose",
                title: "Compose",
                moduleName: "email",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/email/read-mail",
                title: "Read Email",
                moduleName: "email",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "More Apps",
        moduleName: "apps",
        iconType: "material-icons-two-tone",
        icon: "stars",
        class: "menu-toggle",
        groupTitle: false,
        badge: "4",
        badgeClass: "badge bg-orange sidebar-badge float-end",
        role: ["Admin"],
        submenu: [
            {
                path: "/apps/chat",
                title: "Chat",
                moduleName: "apps",
                iconType: "material-icons-two-tone",
                icon: "chat",
                class: "",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/apps/dragdrop",
                title: "Drag & Drop",
                moduleName: "apps",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/apps/contact-grid",
                title: "Contact Grid",
                moduleName: "apps",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/apps/support",
                title: "Support",
                moduleName: "apps",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "Widgets",
        moduleName: "widget",
        iconType: "material-icons-two-tone",
        icon: "widgets",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [
            {
                path: "/widget/chart-widget",
                title: "Chart Widget",
                moduleName: "widget",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/widget/data-widget",
                title: "Data Widget",
                moduleName: "widget",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "-- Components",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "",
        groupTitle: true,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [],
    },
    {
        path: "",
        title: "User Interface (UI)",
        moduleName: "ui",
        iconType: "material-icons-two-tone",
        icon: "dvr",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [
            {
                path: "/ui/alerts",
                title: "Alerts",
                moduleName: "ui",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/ui/badges",
                title: "Badges",
                moduleName: "ui",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/ui/chips",
                title: "Chips",
                moduleName: "ui",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/ui/modal",
                title: "Modal",
                moduleName: "ui",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/ui/buttons",
                title: "Buttons",
                moduleName: "ui",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/ui/expansion-panel",
                title: "Expansion Panel",
                moduleName: "ui",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/ui/bottom-sheet",
                title: "Bottom Sheet",
                moduleName: "ui",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/ui/dialogs",
                title: "Dialogs",
                moduleName: "ui",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/ui/cards",
                title: "Cards",
                moduleName: "ui",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/ui/labels",
                title: "Labels",
                moduleName: "ui",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/ui/list-group",
                title: "List Group",
                moduleName: "ui",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/ui/snackbar",
                title: "Snackbar",
                moduleName: "ui",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/ui/preloaders",
                title: "Preloaders",
                moduleName: "ui",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/ui/progressbars",
                title: "Progress Bars",
                moduleName: "ui",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/ui/tabs",
                title: "Tabs",
                moduleName: "ui",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/ui/typography",
                title: "Typography",
                moduleName: "ui",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/ui/helper-classes",
                title: "Helper Classes",
                moduleName: "ui",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "Forms",
        moduleName: "forms",
        iconType: "material-icons-two-tone",
        icon: "subtitles",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [
            {
                path: "/forms/form-controls",
                title: "Form Controls",
                moduleName: "forms",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/forms/advance-controls",
                title: "Advanced Controls",
                moduleName: "forms",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/forms/form-example",
                title: "Form Examples",
                moduleName: "forms",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/forms/form-validation",
                title: "Form Validation",
                moduleName: "forms",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/forms/wizard",
                title: "Form Wizard",
                moduleName: "forms",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/forms/editors",
                title: "Editors",
                moduleName: "forms",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "Tables",
        moduleName: "tables",
        iconType: "material-icons-two-tone",
        icon: "view_list",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [
            {
                path: "/tables/basic-tables",
                title: "Basic Tables",
                moduleName: "tables",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/tables/material-tables",
                title: "Material Tables",
                moduleName: "tables",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/tables/ngx-datatable",
                title: "ngx-datatable",
                moduleName: "tables",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "Medias",
        moduleName: "media",
        iconType: "material-icons-two-tone",
        icon: "image_search",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [
            {
                path: "/media/gallery",
                moduleName: "media",
                title: "Image Gallery",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "Charts",
        moduleName: "charts",
        iconType: "material-icons-two-tone",
        icon: "insert_chart",
        class: "menu-toggle",
        groupTitle: false,
        badge: "7",
        badgeClass: "badge bg-green sidebar-badge float-end",
        role: ["Admin"],
        submenu: [
            {
                path: "/charts/echart",
                title: "Echart",
                moduleName: "charts",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/charts/apex",
                title: "Apex",
                moduleName: "charts",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/charts/chartjs",
                title: "ChartJS",
                moduleName: "charts",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/charts/ngx-charts",
                title: "Ngx-Charts",
                moduleName: "charts",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/charts/gauge",
                title: "Gauge",
                moduleName: "charts",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "Timeline",
        moduleName: "timeline",
        iconType: "material-icons-two-tone",
        icon: "amp_stories",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [
            {
                path: "/timeline/timeline1",
                title: "Timeline 1",
                moduleName: "timeline",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/timeline/timeline2",
                title: "Timeline 2",
                moduleName: "timeline",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "Icons",
        moduleName: "icons",
        iconType: "material-icons-two-tone",
        icon: "eco",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [
            {
                path: "/icons/material",
                title: "Material Icons",
                moduleName: "icons",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/icons/font-awesome",
                title: "Font Awesome",
                moduleName: "icons",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "Authentication",
        moduleName: "authentication",
        iconType: "material-icons-two-tone",
        icon: "supervised_user_circle",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [
            {
                path: "/authentication/signin",
                title: "Sign In",
                moduleName: "authentication",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/authentication/signup",
                title: "Sign Up",
                moduleName: "authentication",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/authentication/forgot-password",
                title: "Forgot Password",
                moduleName: "authentication",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/authentication/locked",
                title: "Locked",
                moduleName: "authentication",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/authentication/page404",
                title: "404 - Not Found",
                moduleName: "authentication",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/authentication/page500",
                title: "500 - Server Error",
                moduleName: "authentication",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "Extra Pages",
        moduleName: "extra-pages",
        iconType: "material-icons-two-tone",
        icon: "description",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [
            {
                path: "/extra-pages/profile",
                title: "Profile",
                moduleName: "extra-pages",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/extra-pages/pricing",
                title: "Pricing",
                moduleName: "extra-pages",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/extra-pages/invoice",
                title: "Invoice",
                moduleName: "extra-pages",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/extra-pages/faqs",
                title: "Faqs",
                moduleName: "extra-pages",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/extra-pages/blank",
                title: "Blank Page",
                moduleName: "extra-pages",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "Maps",
        moduleName: "maps",
        iconType: "material-icons-two-tone",
        icon: "map",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [
            {
                path: "/maps/google",
                title: "Google Map",
                moduleName: "maps",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "Multi level Menu",
        moduleName: "multilevel",
        iconType: "material-icons-two-tone",
        icon: "slideshow",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [
            {
                path: "/multilevel/first1",
                title: "First",
                moduleName: "multilevel",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/",
                title: "Second",
                moduleName: "secondlevel",
                iconType: "",
                icon: "",
                class: "ml-sub-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [
                    {
                        path: "/multilevel/secondlevel/second1",
                        title: "Second 1",
                        moduleName: "secondlevel",
                        iconType: "",
                        icon: "",
                        class: "ml-sub-sub-menu",
                        groupTitle: false,
                        badge: "",
                        badgeClass: "",
                        role: [""],
                        submenu: [],
                    },
                    {
                        path: "/multilevel/secondlevel/second2",
                        title: "Second 2",
                        moduleName: "secondlevel",
                        iconType: "",
                        icon: "",
                        class: "ml-sub-sub-menu",
                        groupTitle: false,
                        badge: "",
                        badgeClass: "",
                        role: [""],
                        submenu: [],
                    },
                ],
            },
            {
                path: "/multilevel/first3",
                title: "Third",
                moduleName: "multilevel",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
];


/***/ }),

/***/ "57d4":
/*!*****************************************************************!*\
  !*** ./src/app/layout/right-sidebar/right-sidebar.component.ts ***!
  \*****************************************************************/
/*! exports provided: RightSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightSidebarComponent", function() { return RightSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_right_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./right-sidebar.component.html */ "I3Wm");
/* harmony import */ var _right_sidebar_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./right-sidebar.component.sass */ "dxzy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_config_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/config/config.service */ "Cxl7");
/* harmony import */ var src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/service/rightsidebar.service */ "ld2u");







let RightSidebarComponent = class RightSidebarComponent {
    constructor(document, renderer, elementRef, rightSidebarService, configService) {
        this.document = document;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.rightSidebarService = rightSidebarService;
        this.configService = configService;
        this.selectedBgColor = "white";
        this.showpanel = false;
        this.isDarkSidebar = false;
        this.isDarTheme = false;
        this.isRtl = false;
        this.config = {};
    }
    ngOnInit() {
        this.config = this.configService.configData;
        this.rightSidebarService.sidebarState.subscribe((isRunning) => {
            this.isOpenSidebar = isRunning;
        });
        this.setRightSidebarWindowHeight();
    }
    ngAfterViewInit() {
        // set header color on startup
        if (localStorage.getItem("choose_skin")) {
            this.renderer.addClass(this.document.body, localStorage.getItem("choose_skin"));
            this.selectedBgColor = localStorage.getItem("choose_skin_active");
        }
        else {
            this.renderer.addClass(this.document.body, "theme-" + this.config.layout.theme_color);
            this.selectedBgColor = this.config.layout.theme_color;
        }
        if (localStorage.getItem("menuOption")) {
            if (localStorage.getItem("menuOption") === "menu_dark") {
                this.isDarkSidebar = true;
            }
            else if (localStorage.getItem("menuOption") === "menu_light") {
                this.isDarkSidebar = false;
            }
            else {
                this.isDarkSidebar =
                    this.config.layout.sidebar.backgroundColor === "dark" ? true : false;
            }
        }
        else {
            this.isDarkSidebar =
                this.config.layout.sidebar.backgroundColor === "dark" ? true : false;
        }
        if (localStorage.getItem("theme")) {
            if (localStorage.getItem("theme") === "dark") {
                this.isDarTheme = true;
            }
            else if (localStorage.getItem("theme") === "light") {
                this.isDarTheme = false;
            }
            else {
                this.isDarTheme = this.config.layout.variant === "dark" ? true : false;
            }
        }
        else {
            this.isDarTheme = this.config.layout.variant === "dark" ? true : false;
        }
        if (localStorage.getItem("isRtl")) {
            if (localStorage.getItem("isRtl") === "true") {
                this.setRTLSettings();
            }
            else if (localStorage.getItem("isRtl") === "false") {
                this.setLTRSettings();
            }
        }
        else {
            if (this.config.layout.rtl == true) {
                this.setRTLSettings();
            }
            else {
                this.setLTRSettings();
            }
        }
    }
    selectTheme(e) {
        this.selectedBgColor = e;
        const prevTheme = this.elementRef.nativeElement
            .querySelector(".right-sidebar .demo-choose-skin li.actived")
            .getAttribute("data-theme");
        this.renderer.removeClass(this.document.body, "theme-" + prevTheme);
        this.renderer.addClass(this.document.body, "theme-" + this.selectedBgColor);
        localStorage.setItem("choose_skin", "theme-" + this.selectedBgColor);
        localStorage.setItem("choose_skin_active", this.selectedBgColor);
    }
    lightSidebarBtnClick() {
        this.renderer.removeClass(this.document.body, "menu_dark");
        this.renderer.removeClass(this.document.body, "logo-black");
        this.renderer.addClass(this.document.body, "menu_light");
        this.renderer.addClass(this.document.body, "logo-white");
        const menuOption = "menu_light";
        localStorage.setItem("choose_logoheader", "logo-white");
        localStorage.setItem("menuOption", menuOption);
    }
    darkSidebarBtnClick() {
        this.renderer.removeClass(this.document.body, "menu_light");
        this.renderer.removeClass(this.document.body, "logo-white");
        this.renderer.addClass(this.document.body, "menu_dark");
        this.renderer.addClass(this.document.body, "logo-black");
        const menuOption = "menu_dark";
        localStorage.setItem("choose_logoheader", "logo-black");
        localStorage.setItem("menuOption", menuOption);
    }
    lightThemeBtnClick() {
        this.renderer.removeClass(this.document.body, "dark");
        this.renderer.removeClass(this.document.body, "submenu-closed");
        this.renderer.removeClass(this.document.body, "menu_dark");
        this.renderer.removeClass(this.document.body, "logo-black");
        if (localStorage.getItem("choose_skin")) {
            this.renderer.removeClass(this.document.body, localStorage.getItem("choose_skin"));
        }
        else {
            this.renderer.removeClass(this.document.body, "theme-" + this.config.layout.theme_color);
        }
        this.renderer.addClass(this.document.body, "light");
        this.renderer.addClass(this.document.body, "submenu-closed");
        this.renderer.addClass(this.document.body, "menu_light");
        this.renderer.addClass(this.document.body, "logo-white");
        this.renderer.addClass(this.document.body, "theme-white");
        const theme = "light";
        const menuOption = "menu_light";
        this.selectedBgColor = "white";
        this.isDarkSidebar = false;
        localStorage.setItem("choose_logoheader", "logo-white");
        localStorage.setItem("choose_skin", "theme-white");
        localStorage.setItem("theme", theme);
        localStorage.setItem("menuOption", menuOption);
    }
    darkThemeBtnClick() {
        this.renderer.removeClass(this.document.body, "light");
        this.renderer.removeClass(this.document.body, "submenu-closed");
        this.renderer.removeClass(this.document.body, "menu_light");
        this.renderer.removeClass(this.document.body, "logo-white");
        if (localStorage.getItem("choose_skin")) {
            this.renderer.removeClass(this.document.body, localStorage.getItem("choose_skin"));
        }
        else {
            this.renderer.removeClass(this.document.body, "theme-" + this.config.layout.theme_color);
        }
        this.renderer.addClass(this.document.body, "dark");
        this.renderer.addClass(this.document.body, "submenu-closed");
        this.renderer.addClass(this.document.body, "menu_dark");
        this.renderer.addClass(this.document.body, "logo-black");
        this.renderer.addClass(this.document.body, "theme-black");
        const theme = "dark";
        const menuOption = "menu_dark";
        this.selectedBgColor = "black";
        this.isDarkSidebar = true;
        localStorage.setItem("choose_logoheader", "logo-black");
        localStorage.setItem("choose_skin", "theme-black");
        localStorage.setItem("theme", theme);
        localStorage.setItem("menuOption", menuOption);
    }
    setRightSidebarWindowHeight() {
        const height = window.innerHeight - 137;
        this.maxHeight = height + "";
        this.maxWidth = "500px";
    }
    onClickedOutside(event) {
        const button = event.target;
        if (button.id !== "settingBtn") {
            if (this.isOpenSidebar === true) {
                this.toggleRightSidebar();
            }
        }
    }
    toggleRightSidebar() {
        this.rightSidebarService.setRightSidebar((this.isOpenSidebar = !this.isOpenSidebar));
    }
    switchDirection(event) {
        var isrtl = String(event.checked);
        if (isrtl === "false" &&
            document.getElementsByTagName("html")[0].hasAttribute("dir")) {
            document.getElementsByTagName("html")[0].removeAttribute("dir");
            this.renderer.removeClass(this.document.body, "rtl");
        }
        else if (isrtl === "true" &&
            !document.getElementsByTagName("html")[0].hasAttribute("dir")) {
            document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
            this.renderer.addClass(this.document.body, "rtl");
        }
        localStorage.setItem("isRtl", isrtl);
        this.isRtl = event.checked;
    }
    setRTLSettings() {
        document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
        this.renderer.addClass(this.document.body, "rtl");
        this.isRtl = true;
        localStorage.setItem("isRtl", "true");
    }
    setLTRSettings() {
        document.getElementsByTagName("html")[0].removeAttribute("dir");
        this.renderer.removeClass(this.document.body, "rtl");
        this.isRtl = false;
        localStorage.setItem("isRtl", "false");
    }
};
RightSidebarComponent.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_6__["RightSidebarService"] },
    { type: src_app_config_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] }
];
RightSidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
        selector: "app-right-sidebar",
        template: _raw_loader_right_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_right_sidebar_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RightSidebarComponent);



/***/ }),

/***/ "5dmV":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-mask */ "tmjD");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");













const materialModules = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
    ngx_mask__WEBPACK_IMPORTED_MODULE_6__["NgxMaskModule"].forRoot(),
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"],
];
let MaterialModule = class MaterialModule {
};
MaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [materialModules],
        exports: [materialModules],
    })
], MaterialModule);



/***/ }),

/***/ "8/1z":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/app-layout/auth-layout/auth-layout.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: "http://127.0.0.1:8000/api/v1",
    //apiUrl: "http://localhost:4200",
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Cxl7":
/*!******************************************!*\
  !*** ./src/app/config/config.service.ts ***!
  \******************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let ConfigService = class ConfigService {
    constructor() {
        this.setConfigData();
    }
    setConfigData() {
        this.configData = {
            layout: {
                rtl: true,
                variant: "light",
                theme_color: "black",
                logo_bg_color: "black",
                sidebar: {
                    collapsed: false,
                    backgroundColor: "dark", // options:  light & dark
                },
            },
        };
    }
};
ConfigService.ctorParameters = () => [];
ConfigService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], ConfigService);



/***/ }),

/***/ "GHa4":
/*!***************************************************************!*\
  !*** ./src/app/core/service/dynamic-script-loader.service.ts ***!
  \***************************************************************/
/*! exports provided: ScriptStore, DynamicScriptLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptStore", function() { return ScriptStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicScriptLoaderService", function() { return DynamicScriptLoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


const ScriptStore = [];
let DynamicScriptLoaderService = class DynamicScriptLoaderService {
    constructor() {
        this.scripts = {};
        ScriptStore.forEach((script) => {
            this.scripts[script.name] = {
                loaded: false,
                src: script.src,
            };
        });
    }
    load(...scripts) {
        const promises = [];
        scripts.forEach((script) => promises.push(this.loadScript(script)));
        return Promise.all(promises);
    }
    loadScript(name) {
        return new Promise((resolve, reject) => {
            if (!this.scripts[name].loaded) {
                // load script
                let script = document.createElement("script");
                script.type = "text/javascript";
                script.src = this.scripts[name].src;
                if (script.readyState) {
                    // IE
                    script.onreadystatechange = () => {
                        if (script.readyState === "loaded" ||
                            script.readyState === "complete") {
                            script.onreadystatechange = null;
                            this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: "Loaded" });
                        }
                    };
                }
                else {
                    // Others
                    script.onload = () => {
                        this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: "Loaded" });
                    };
                }
                script.onerror = (error) => resolve({ script: name, loaded: false, status: "Loaded" });
                document.getElementsByTagName("head")[0].appendChild(script);
            }
            else {
                resolve({ script: name, loaded: true, status: "Already Loaded" });
            }
        });
    }
};
DynamicScriptLoaderService.ctorParameters = () => [];
DynamicScriptLoaderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], DynamicScriptLoaderService);



/***/ }),

/***/ "HSgw":
/*!************************************************************************!*\
  !*** ./src/app/layout/app-layout/main-layout/main-layout.component.ts ***!
  \************************************************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return MainLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_main_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./main-layout.component.html */ "3qQL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let MainLayoutComponent = class MainLayoutComponent {
    constructor() { }
    ngOnInit() { }
};
MainLayoutComponent.ctorParameters = () => [];
MainLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-main-layout",
        template: _raw_loader_main_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], MainLayoutComponent);



/***/ }),

/***/ "I3Wm":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/right-sidebar/right-sidebar.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Right Sidebar -->\r\n<aside id=\"rightsidebar\" class=\"right-sidebar\" [ngClass]=\"isOpenSidebar ? 'open' : 'close'\"\r\n  (clickOutside)=\"onClickedOutside($event)\">\r\n  <div class=\"rightSidebarClose\" (click)=\"toggleRightSidebar()\"><i class=\"far fa-times-circle\"></i></div>\r\n  <div class=\"demo-skin\"\r\n    [ngStyle]=\"{'position' : 'relative', 'max-height' : maxHeight+'px', 'max-width' : maxWidth+'px'}\"\r\n    [perfectScrollbar]>\r\n    <div class=\"rightSetting\">\r\n      <p>GENERAL SETTINGS</p>\r\n      <ul class=\"setting-list list-unstyled m-t-20\">\r\n        <li>\r\n          <div class=\"form-check\">\r\n            <div class=\"form-check m-l-10\">\r\n              <label class=\"form-check-label\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked> Save\r\n                History\r\n                <span class=\"form-check-sign\">\r\n                  <span class=\"check\"></span>\r\n                </span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </li>\r\n        <li>\r\n          <div class=\"form-check\">\r\n            <div class=\"form-check m-l-10\">\r\n              <label class=\"form-check-label\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked> Show\r\n                Status\r\n                <span class=\"form-check-sign\">\r\n                  <span class=\"check\"></span>\r\n                </span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </li>\r\n        <li>\r\n          <div class=\"form-check\">\r\n            <div class=\"form-check m-l-10\">\r\n              <label class=\"form-check-label\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked> Auto\r\n                Submit Issue\r\n                <span class=\"form-check-sign\">\r\n                  <span class=\"check\"></span>\r\n                </span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </li>\r\n        <li>\r\n          <div class=\"form-check\">\r\n            <div class=\"form-check m-l-10\">\r\n              <label class=\"form-check-label\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked> Show\r\n                Status To All\r\n                <span class=\"form-check-sign\">\r\n                  <span class=\"check\"></span>\r\n                </span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"rightSetting\">\r\n      <p>SIDEBAR MENU COLORS</p>\r\n      <mat-button-toggle-group class=\"mt-2\" [value]=\"isDarkSidebar ? 'dark' : 'light'\">\r\n        <mat-button-toggle (click)=\"lightSidebarBtnClick()\" value=\"light\">Light</mat-button-toggle>\r\n        <mat-button-toggle (click)=\"darkSidebarBtnClick()\" value=\"dark\">Dark</mat-button-toggle>\r\n      </mat-button-toggle-group>\r\n    </div>\r\n    <div class=\"rightSetting\">\r\n      <p>THEME COLORS</p>\r\n      <mat-button-toggle-group class=\"mt-2\" [value]=\"isDarTheme ? 'dark' : 'light'\">\r\n        <mat-button-toggle (click)=\"lightThemeBtnClick()\" value=\"light\">Light</mat-button-toggle>\r\n        <mat-button-toggle (click)=\"darkThemeBtnClick()\" value=\"dark\">Dark</mat-button-toggle>\r\n      </mat-button-toggle-group>\r\n    </div>\r\n    <div class=\"rightSetting\">\r\n      <p>SKINS</p>\r\n      <ul class=\"demo-choose-skin choose-theme list-unstyled\">\r\n        <li data-theme=\"white\" [ngClass]=\"{'actived': selectedBgColor === 'white'}\" (click)=\"selectTheme('white')\">\r\n          <div class=\"white-theme white-theme-border\"></div>\r\n        </li>\r\n        <li data-theme=\"black\" [ngClass]=\"{'actived': selectedBgColor === 'black'}\" (click)=\"selectTheme('black')\">\r\n          <div class=\"black-theme\"></div>\r\n        </li>\r\n        <li data-theme=\"purple\" [ngClass]=\"{'actived': selectedBgColor === 'purple'}\" (click)=\"selectTheme('purple')\">\r\n          <div class=\"purple-theme\"></div>\r\n        </li>\r\n        <li data-theme=\"blue\" [ngClass]=\"{'actived': selectedBgColor === 'blue'}\" (click)=\"selectTheme('blue')\">\r\n          <div class=\"blue-theme\"></div>\r\n        </li>\r\n        <li data-theme=\"cyan\" [ngClass]=\"{'actived': selectedBgColor === 'cyan'}\" (click)=\"selectTheme('cyan')\">\r\n          <div class=\"cyan-theme\"></div>\r\n        </li>\r\n        <li data-theme=\"green\" [ngClass]=\"{'actived': selectedBgColor === 'green'}\" (click)=\"selectTheme('green')\">\r\n          <div class=\"green-theme\"></div>\r\n        </li>\r\n        <li data-theme=\"orange\" [ngClass]=\"{'actived': selectedBgColor === 'orange'}\" (click)=\"selectTheme('orange')\">\r\n          <div class=\"orange-theme\"></div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"rightSetting\">\r\n      <p>RTL Layout</p>\r\n      <mat-slide-toggle class=\"mt-2\" [checked]=\"isRtl\" (change)=\"switchDirection($event)\"></mat-slide-toggle>\r\n    </div>\r\n    <div class=\"rightSetting\">\r\n      <p>Disk Space</p>\r\n      <div class=\"sidebar-progress\">\r\n        <div class=\"progress m-t-20\">\r\n          <div class=\"progress-bar l-bg-cyan shadow-style width-per-45\" role=\"progressbar\" aria-valuenow=\"45\"\r\n            aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n        </div>\r\n        <span class=\"progress-description\">\r\n          <small>26% remaining</small>\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"rightSetting\">\r\n      <p>Server Load</p>\r\n      <div class=\"sidebar-progress\">\r\n        <div class=\"progress m-t-20\">\r\n          <div class=\"progress-bar l-bg-orange shadow-style width-per-63\" role=\"progressbar\" aria-valuenow=\"63\"\r\n            aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n        </div>\r\n        <span class=\"progress-description\">\r\n          <small>Highly Loaded</small>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</aside>\r\n<!-- #END# Right Sidebar -->\r\n");

/***/ }),

/***/ "KDUW":
/*!**********************************************!*\
  !*** ./src/app/core/service/auth.service.ts ***!
  \**********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "41Ph");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "9YHx");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./token.service */ "Rmk6");







let AuthService = class AuthService {
    constructor(http, token) {
        this.http = http;
        this.token = token;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem("currentUser")));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    //authenticate
    login(username, password) {
        return this.http
            .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/admin/login`, {
            username,
            password,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((user) => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            this.token.setUser('currentUser', user);
            this.token.handle(user.token);
            this.currentUserSubject.next(user);
            //   this.currentUserSubject.next(user);
            return user;
        }));
    }
    logout() {
        // remove user from local storage to log user out
        this.token.removeUser('currentUser');
        this.currentUserSubject.next(null);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ success: false });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], AuthService);



/***/ }),

/***/ "KwYr":
/*!**************************************************!*\
  !*** ./src/app/core/interceptor/fake-backend.ts ***!
  \**************************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "41Ph");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "9YHx");
/* harmony import */ var _models_role__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/role */ "0HZm");






const users = [
    {
        id: 1,
        image: "assets/images/user/admin.jpg",
        username: "besho",
        password: "123456789",
        name: "Sarah",
        role: _models_role__WEBPACK_IMPORTED_MODULE_5__["Role"].Admin,
        token: "token",
    },
    {
        id: 2,
        image: "assets/images/user/doctor.jpg",
        username: "doctor@hospital.org",
        password: "doctor@123",
        name: "Ashton",
        role: _models_role__WEBPACK_IMPORTED_MODULE_5__["Role"].Doctor,
        token: "doctor-token",
    },
    {
        id: 3,
        image: "assets/images/user/patient.jpg",
        username: "patient@hospital.org",
        password: "patient@123",
        name: "Cara",
        role: _models_role__WEBPACK_IMPORTED_MODULE_5__["Role"].Patient,
        token: "patient-token",
    },
];
let FakeBackendInterceptor = class FakeBackendInterceptor {
    intercept(request, next) {
        const { url, method, headers, body } = request;
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(handleRoute));
        function handleRoute() {
            switch (true) {
                case url.endsWith("/authenticate") && method === "POST":
                    return authenticate();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }
        // route functions
        function authenticate() {
            const { username, password } = body;
            const user = users.find((x) => x.username === username && x.password === password);
            if (!user) {
                return error("Username or password is incorrect");
            }
            return ok({
                id: user.id,
                image: user.image,
                username: user.username,
                name: user.name,
                role: user.role,
                token: user.token,
            });
        }
        // helper functions
        function ok(body) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200, body }));
        }
        function error(message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ error: { message } });
        }
        function unauthorized() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ status: 401, error: { message: "Unauthorised" } });
        }
        function isLoggedIn() {
            return headers.get("Authorization") === "Bearer fake-jwt-token";
        }
    }
};
FakeBackendInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], FakeBackendInterceptor);

let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true,
};


/***/ }),

/***/ "MR0u":
/*!*****************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "Z0AN");
/* harmony import */ var _sidebar_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.component.sass */ "rSWP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sidebar_items__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar-items */ "4veq");
/* harmony import */ var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/service/auth.service */ "KDUW");
/* harmony import */ var src_app_core_models_role__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/models/role */ "0HZm");









let SidebarComponent = class SidebarComponent {
    constructor(document, renderer, elementRef, authService, router) {
        this.document = document;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.authService = authService;
        this.router = router;
        this.level1Menu = "";
        this.level2Menu = "";
        this.level3Menu = "";
        this.headerHeight = 60;
        this.routerObj = null;
        const body = this.elementRef.nativeElement.closest("body");
        this.routerObj = this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                // logic for select active menu in dropdown
                const role = ["admin", "doctor", "patient"];
                const currenturl = event.url.split("?")[0];
                const firstString = currenturl.split("/").slice(1)[0];
                if (role.indexOf(firstString) !== -1) {
                    this.level1Menu = event.url.split("/")[2];
                    this.level2Menu = event.url.split("/")[3];
                }
                else {
                    this.level1Menu = event.url.split("/")[1];
                    this.level2Menu = event.url.split("/")[2];
                }
                // close sidebar on mobile screen after menu select
                this.renderer.removeClass(this.document.body, "overlay-open");
            }
        });
    }
    windowResizecall(event) {
        this.setMenuHeight();
        this.checkStatuForResize(false);
    }
    onGlobalClick(event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.renderer.removeClass(this.document.body, "overlay-open");
        }
    }
    callLevel1Toggle(event, element) {
        if (element === this.level1Menu) {
            this.level1Menu = "0";
        }
        else {
            this.level1Menu = element;
        }
        const hasClass = event.target.classList.contains("toggled");
        if (hasClass) {
            this.renderer.removeClass(event.target, "toggled");
        }
        else {
            this.renderer.addClass(event.target, "toggled");
        }
    }
    callLevel2Toggle(event, element) {
        if (element === this.level2Menu) {
            this.level2Menu = "0";
        }
        else {
            this.level2Menu = element;
        }
    }
    callLevel3Toggle(event, element) {
        if (element === this.level3Menu) {
            this.level3Menu = "0";
        }
        else {
            this.level3Menu = element;
        }
    }
    ngOnInit() {
        if (this.authService.currentUserValue) {
            const userRole = this.authService.currentUserValue.role;
            this.userFullName =
                this.authService.currentUserValue.name;
            this.userImg = this.authService.currentUserValue.image;
            this.sidebarItems = _sidebar_items__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].filter((x) => x.role.indexOf(userRole) !== -1 || x.role.indexOf("All") !== -1);
            if (userRole === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_8__["Role"].Admin) {
                this.userType = src_app_core_models_role__WEBPACK_IMPORTED_MODULE_8__["Role"].Admin;
            }
            else if (userRole === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_8__["Role"].Patient) {
                this.userType = src_app_core_models_role__WEBPACK_IMPORTED_MODULE_8__["Role"].Patient;
            }
            else if (userRole === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_8__["Role"].Doctor) {
                this.userType = src_app_core_models_role__WEBPACK_IMPORTED_MODULE_8__["Role"].Doctor;
            }
            else {
                this.userType = src_app_core_models_role__WEBPACK_IMPORTED_MODULE_8__["Role"].Admin;
            }
        }
        // this.sidebarItems = ROUTES.filter((sidebarItem) => sidebarItem);
        this.initLeftSidebar();
        this.bodyTag = this.document.body;
    }
    ngOnDestroy() {
        this.routerObj.unsubscribe();
    }
    initLeftSidebar() {
        const _this = this;
        // Set menu height
        _this.setMenuHeight();
        _this.checkStatuForResize(true);
    }
    setMenuHeight() {
        this.innerHeight = window.innerHeight;
        const height = this.innerHeight - this.headerHeight;
        this.listMaxHeight = height + "";
        this.listMaxWidth = "500px";
    }
    isOpen() {
        return this.bodyTag.classList.contains("overlay-open");
    }
    checkStatuForResize(firstTime) {
        if (window.innerWidth < 1170) {
            this.renderer.addClass(this.document.body, "ls-closed");
        }
        else {
            this.renderer.removeClass(this.document.body, "ls-closed");
        }
    }
    mouseHover(e) {
        const body = this.elementRef.nativeElement.closest("body");
        if (body.classList.contains("submenu-closed")) {
            this.renderer.addClass(this.document.body, "side-closed-hover");
            this.renderer.removeClass(this.document.body, "submenu-closed");
        }
    }
    mouseOut(e) {
        const body = this.elementRef.nativeElement.closest("body");
        if (body.classList.contains("side-closed-hover")) {
            this.renderer.removeClass(this.document.body, "side-closed-hover");
            this.renderer.addClass(this.document.body, "submenu-closed");
        }
    }
    logout() {
        this.authService.logout().subscribe((res) => {
            if (!res.success) {
                this.router.navigate(["/authentication/signin"]);
            }
        });
    }
};
SidebarComponent.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] },
    { type: src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SidebarComponent.propDecorators = {
    windowResizecall: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"], args: ["window:resize", ["$event"],] }],
    onGlobalClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"], args: ["document:mousedown", ["$event"],] }]
};
SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: "app-sidebar",
        template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sidebar_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SidebarComponent);



/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material.module */ "5dmV");








let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"],
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
        ],
    })
], SharedModule);



/***/ }),

/***/ "Qc9P":
/*!*************************************************************!*\
  !*** ./src/app/layout/page-loader/page-loader.component.ts ***!
  \*************************************************************/
/*! exports provided: PageLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLoaderComponent", function() { return PageLoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_page_loader_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./page-loader.component.html */ "Qgze");
/* harmony import */ var _page_loader_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-loader.component.sass */ "nlTO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PageLoaderComponent = class PageLoaderComponent {
    constructor() { }
    ngOnInit() { }
};
PageLoaderComponent.ctorParameters = () => [];
PageLoaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-page-loader",
        template: _raw_loader_page_loader_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_page_loader_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PageLoaderComponent);



/***/ }),

/***/ "Qgze":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/page-loader/page-loader.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner bdColor=\"rgb(63,69,95)\" size=\"medium\" color=\"#0af0d5\" type=\"ball-scale-pulse\" [fullScreen]=\"true\">\r\n  <p style=\"color: white\"> </p>\r\n</ngx-spinner>\r\n");

/***/ }),

/***/ "Rmk6":
/*!***********************************************!*\
  !*** ./src/app/core/service/token.service.ts ***!
  \***********************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let TokenService = class TokenService {
    constructor() {
        // Local
        this.iss = {
            'admin-login': 'http://127.0.0.1:8000/api/v1/admin/login',
            'user-login': 'http://127.0.0.1:8000/api/v1/login'
        };
    }
    handle(token) {
        this.setToken(token);
        console.log(this.payload(token));
        console.log(this.isValid());
    }
    setToken(token) {
        localStorage.setItem('token', token);
    }
    getToken() {
        return localStorage.getItem('token');
    }
    removeToken() {
        localStorage.removeItem('token');
    }
    isValid() {
        const token = this.getToken();
        if (token) {
            const payload = this.payload(token);
            if (payload) {
                return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
            }
        }
        return false;
    }
    payload(token) {
        const payload = token.split('.')[1];
        return this.decode(payload);
    }
    decode(payload) {
        return JSON.parse(atob(payload));
    }
    loggedIn() {
        return this.isValid();
    }
    setUser(name, user) {
        localStorage.setItem(name, JSON.stringify(user));
    }
    removeUser(user) {
        localStorage.removeItem(user);
    }
};
TokenService.ctorParameters = () => [];
TokenService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TokenService);



/***/ }),

/***/ "SLXU":
/*!*******************************************************!*\
  !*** ./src/app/core/interceptor/error.interceptor.ts ***!
  \*******************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/auth.service */ "KDUW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "41Ph");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "9YHx");





let ErrorInterceptor = class ErrorInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload(true);
            }
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
];
ErrorInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], ErrorInterceptor);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







let AppComponent = class AppComponent {
    constructor(_router, location, spinner) {
        this._router = _router;
        this.spinner = spinner;
        this._router.events.subscribe((routerEvent) => {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"]) {
                this.spinner.show();
                // location.onPopState(() => {
                //   window.location.reload();
                // });
                this.currentUrl = routerEvent.url.substring(routerEvent.url.lastIndexOf("/") + 1);
            }
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                this.spinner.hide();
            }
            window.scrollTo(0, 0);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["PlatformLocation"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-root",
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VqkN":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav #navbar class=\"navbar active\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a href=\"#\" onClick=\"return false;\" class=\"navbar-toggle collapsed\"\r\n        (click)=\"isNavbarCollapsed = !isNavbarCollapsed\" aria-expanded=\"false\"></a>\r\n      <a href=\"#\" onClick=\"return false;\" class=\"bars\" (click)=\"mobileMenuSidebarOpen($event,'overlay-open')\"></a>\r\n      <a class=\"navbar-brand\" routerLink={{homePage}}>\r\n        <img src=\"assets/images/logo.png\" alt=\"\" />\r\n        <span class=\"logo-name\">Cash</span>\r\n      </a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" [ngbCollapse]=\"isNavbarCollapsed\">\r\n      <ul class=\"pull-left collapse-menu-icon\">\r\n        <li>\r\n          <button mat-icon-button (click)=\"callSidemenuCollapse()\" class=\"sidemenu-collapse\">\r\n            <mat-icon>menu</mat-icon>\r\n          </button>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <!-- Full Screen Button -->\r\n        <li class=\"fullscreen\">\r\n          <button mat-icon-button (click)=\"callFullscreen()\" class=\" nav-notification-icons\">\r\n            <mat-icon>fullscreen</mat-icon>\r\n          </button>\r\n        </li>\r\n        <!-- #END# Full Screen Button -->\r\n        <li class=\"nav-item\" ngbDropdown>\r\n          <a ngbDropdownToggle class=\"lang-dropdown\">\r\n            <img *ngIf=\"flagvalue !== undefined\" src=\"{{flagvalue}}\" height=\"16\">\r\n            <img *ngIf=\"flagvalue === undefined\" src=\"{{defaultFlag}}\" height=\"16\">\r\n          </a>\r\n          <div ngbDropdownMenu class=\"dropdown-menu lang-item dropdown-menu-right pullDown\">\r\n            <a href=\"javascript:void(0);\" class=\"dropdown-item lang-item-list\" *ngFor=\"let item of listLang\"\r\n              (click)=\"setLanguage(item.text, item.lang, item.flag)\"\r\n              [ngClass]=\"{'active': langStoreValue === item.lang}\">\r\n              <img src=\"{{item.flag}}\" class=\"flag-img\" height=\"12\"> <span class=\"align-middle\">{{item.text}}</span>\r\n            </a>\r\n          </div>\r\n        </li>\r\n        <!-- #START# Notifications-->\r\n        <li class=\"nav-item\" ngbDropdown>\r\n          <button mat-icon-button ngbDropdownToggle class=\"nav-notification-icons\">\r\n            <mat-icon>notifications_none</mat-icon>\r\n            <span class=\"label-count bg-orange\"></span>\r\n          </button>\r\n          <div ngbDropdownMenu class=\"notification-dropdown pullDown\">\r\n            <div class=\"noti-list\" style=\"position: relative; max-width: 600px; max-height: 250px;\" [perfectScrollbar]>\r\n              <ul class=\"menu\">\r\n                <li>\r\n                  <a href=\"#\" *ngFor=\"let notification of notifications\" onClick=\"return false;\">\r\n                    <span class=\"table-img msg-user\">\r\n                      <img src=\"{{notification.userImg}}\" alt=\"\">\r\n                    </span>\r\n                    <span class=\"menu-info\">\r\n                      <span class=\"menu-title\">{{notification.userName}}</span>\r\n                      <span class=\"menu-desc\">\r\n                        <i class=\"material-icons\">access_time</i> {{notification.time}}\r\n                      </span>\r\n                      <span class=\"menu-desc\">{{notification.message}}</span>\r\n                    </span>\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n            <a class=\"text-center d-block border-top py-1\">Read\r\n              All Notifications</a>\r\n          </div>\r\n        </li>\r\n        <!-- #END# Notifications-->\r\n        <li class=\"nav-item user_profile\" ngbDropdown>\r\n          <a href=\"#\" onClick=\"return false;\" ngbDropdownToggle role=\"button\" class=\"nav-notification-icons pt-0\">\r\n            <img src={{userImg}} class=\"rounded-circle\" width=\"32\" height=\"32\" alt=\"User\">\r\n          </a>\r\n          <div ngbDropdownMenu class=\"notification-dropdown pullDown\">\r\n            <div class=\"noti-list\" style=\"position: relative; max-width: 600px; max-height: 300px;\" [perfectScrollbar]>\r\n              <ul class=\"menu\">\r\n                <li class=\"body\">\r\n                  <ul class=\"user_dw_menu\">\r\n                    <li>\r\n                      <a href=\"#\" onClick=\"return false;\">\r\n                        <mat-icon aria-hidden=\"false\" class=\"msr-2\">person</mat-icon>Profile\r\n                      </a>\r\n                    </li>\r\n                    <li>\r\n                      <a href=\"#\" onClick=\"return false;\">\r\n                        <mat-icon aria-hidden=\"false\" class=\"msr-2\">feedback</mat-icon>Feedback\r\n                      </a>\r\n                    </li>\r\n                    <li>\r\n                      <a href=\"#\" onClick=\"return false;\">\r\n                        <mat-icon aria-hidden=\"false\" class=\"msr-2\">help</mat-icon>Help\r\n                      </a>\r\n                    </li>\r\n                    <li>\r\n                      <a href=\"javascript:void(0);\" (click)=\"logout()\">\r\n                        <mat-icon aria-hidden=\"false\" class=\"msr-2\">power_settings_new</mat-icon>Logout\r\n                      </a>\r\n                    </li>\r\n                  </ul>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </li>\r\n        <!-- #END# Tasks -->\r\n        <li class=\"pull-right\">\r\n          <button mat-icon-button (click)=\"toggleRightSidebar()\" class=\"nav-notification-icons js-right-sidebar\">\r\n            <mat-icon id=\"settingBtn\">settings</mat-icon>\r\n          </button>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-page-loader></app-page-loader>\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "Z0AN":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/sidebar/sidebar.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <!-- Left Sidebar -->\r\n  <aside id=\"leftsidebar\" class=\"sidebar\" (mouseenter)=\"mouseHover($event)\" (mouseleave)=\"mouseOut($event)\">\r\n    <!-- Menu -->\r\n    <div class=\"menu\">\r\n      <ul class=\"list\"\r\n        [ngStyle]=\"{'position' : 'relative', 'max-height' : listMaxHeight+'px', 'max-width' : listMaxWidth+'px'}\"\r\n        [perfectScrollbar]>\r\n        <li class=\"sidebar-user-panel\">\r\n          <div class=\"user-panel\">\r\n            <div class=\" image\">\r\n              <img src={{userImg}} class=\"img-circle user-img-circle\" alt=\"User Image\" />\r\n            </div>\r\n          </div>\r\n          <div class=\"profile-usertitle\">\r\n            <div class=\"sidebar-userpic-name\">{{userFullName}} </div>\r\n            <div class=\"profile-usertitle-job \">{{userType}} </div>\r\n          </div>\r\n        </li>\r\n        <!-- Top Most level menu -->\r\n        <li [class.active]=\"level1Menu === sidebarItem.moduleName && sidebarItem.submenu.length != 0\"\r\n          *ngFor=\"let sidebarItem of sidebarItems\" [routerLinkActive]=\"sidebarItem.submenu.length != 0 ? '' : 'active'\">\r\n          <div class=\"header\" *ngIf=\"sidebarItem.groupTitle === true\">{{sidebarItem.title | translate}}</div>\r\n          <a [routerLink]=\"sidebarItem.class === '' ? [sidebarItem.path] : null\" *ngIf=\"!sidebarItem.groupTitle;\"\r\n            [ngClass]=\"[sidebarItem.class]\" (click)=\"callLevel1Toggle($event, sidebarItem.moduleName)\" class=\"menu-top\">\r\n            <i [ngClass]=\"[sidebarItem.iconType]\">{{sidebarItem.icon}}</i>\r\n            <span class=\"hide-menu\">{{sidebarItem.title | translate}}\r\n            </span>\r\n            <span *ngIf=\"sidebarItem.badge != '' \" [ngClass]=\"[sidebarItem.badgeClass]\">{{sidebarItem.badge}}</span>\r\n          </a>\r\n          <!-- First level menu -->\r\n          <ul class=\"ml-menu\" *ngIf=\"sidebarItem.submenu.length > 0\">\r\n            <li [ngClass]=\"level2Menu === sidebarSubItem.moduleName? 'activeSub':''\"\r\n              *ngFor=\"let sidebarSubItem of sidebarItem.submenu\"\r\n              [routerLinkActive]=\"sidebarSubItem.submenu.length > 0 ? '' : 'active'\">\r\n              <a [routerLink]=\"sidebarSubItem.submenu.length > 0 ? null : [sidebarSubItem.path]\"\r\n                (click)=\"callLevel2Toggle($event,sidebarSubItem.moduleName)\" [ngClass]=\"[sidebarSubItem.class]\">\r\n                {{sidebarSubItem.title | translate}}\r\n              </a>\r\n              <!-- Second level menu -->\r\n              <ul class=\"ml-menu-2\" *ngIf=\"sidebarSubItem.submenu.length > 0\">\r\n                <li *ngFor=\"let sidebarSubsubItem of sidebarSubItem.submenu\"\r\n                  [ngClass]=\"level3Menu === sidebarSubsubItem.moduleName? 'activeSubSub':''\"\r\n                  [routerLinkActive]=\"sidebarSubsubItem.submenu.length > 0 ? '' : 'active'\">\r\n                  <a [routerLink]=\"sidebarSubsubItem.submenu.length > 0 ? null : [sidebarSubsubItem.path]\"\r\n                    (click)=\"callLevel3Toggle($event,sidebarSubsubItem.moduleName)\"\r\n                    [ngClass]=\"[sidebarSubsubItem.class]\">\r\n                    {{sidebarSubsubItem.title | translate}}\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n        <li>\r\n          <a class=\"\" (click)=\"logout()\" class=\"menu-top\">\r\n            <i class=\"material-icons-two-tone\">power_settings_new</i>\r\n            <span class=\"hide-menu\">Logout\r\n            </span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <!-- #Menu -->\r\n  </aside>\r\n  <!-- #END# Left Sidebar -->\r\n</div>\r\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/core.module */ "pKmL");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/header/header.component */ "/Lhg");
/* harmony import */ var _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/page-loader/page-loader.component */ "Qc9P");
/* harmony import */ var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/sidebar/sidebar.component */ "MR0u");
/* harmony import */ var _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/right-sidebar/right-sidebar.component */ "57d4");
/* harmony import */ var _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/app-layout/auth-layout/auth-layout.component */ "f9dz");
/* harmony import */ var _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layout/app-layout/main-layout/main-layout.component */ "HSgw");
/* harmony import */ var _core_interceptor_fake_backend__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/interceptor/fake-backend */ "KwYr");
/* harmony import */ var _core_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/interceptor/error.interceptor */ "SLXU");
/* harmony import */ var _core_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/interceptor/jwt.interceptor */ "sIiH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-click-outside */ "qew9");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "tk/3");























const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelPropagation: false,
};
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_20__["TranslateHttpLoader"](http, "assets/i18n/", ".json");
}
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _layout_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
            _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_9__["PageLoaderComponent"],
            _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"],
            _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["RightSidebarComponent"],
            _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_12__["AuthLayoutComponent"],
            _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_13__["MainLayoutComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__["PerfectScrollbarModule"],
            ng_click_outside__WEBPACK_IMPORTED_MODULE_21__["ClickOutsideModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClient"]],
                },
            }),
            // core & shared
            _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        ],
        providers: [
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_17__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_17__["HashLocationStrategy"] },
            {
                provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__["PERFECT_SCROLLBAR_CONFIG"],
                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
            },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HTTP_INTERCEPTORS"], useClass: _core_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_16__["JwtInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HTTP_INTERCEPTORS"], useClass: _core_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_15__["ErrorInterceptor"], multi: true },
            _core_interceptor_fake_backend__WEBPACK_IMPORTED_MODULE_14__["fakeBackendProvider"],
        ],
        entryComponents: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "dUBH":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/page404/page404.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-container\">\r\n  <div class=\"row auth-main\">\r\n    <div class=\"col-sm-6 px-0 d-none d-sm-block\">\r\n      <div class=\"left-img\" style=\"background-image: url(assets/images/pages/bg-04.png);\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-6 auth-form-section\">\r\n      <div class=\"form-section\">\r\n        <div class=\"auth-wrapper\">\r\n          <form>\r\n            <span class=\"error-header p-b-45\">\r\n              404\r\n            </span>\r\n            <span class=\"error-subheader p-b-5\">\r\n              Looks Like You're Lost\r\n            </span>\r\n            <span class=\"error-subheader2 p-b-5\">\r\n              The Page You Are Looking For Not Available!\r\n            </span>\r\n            <div class=\"container-auth-form-btn mt-5\">\r\n              <button mat-flat-button color=\"primary\" class=\"auth-form-btn\" type=\"submit\">\r\n                Go To Home Page\r\n              </button>\r\n            </div>\r\n            <div class=\"w-full p-t-15 p-b-15 text-center\">\r\n              <div>\r\n                <a routerLink=\"/authentication/signin\" class=\"txt1\">\r\n                  Need Help?\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "dxzy":
/*!*******************************************************************!*\
  !*** ./src/app/layout/right-sidebar/right-sidebar.component.sass ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyaWdodC1zaWRlYmFyLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "f9dz":
/*!************************************************************************!*\
  !*** ./src/app/layout/app-layout/auth-layout/auth-layout.component.ts ***!
  \************************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_auth_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./auth-layout.component.html */ "8/1z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let AuthLayoutComponent = class AuthLayoutComponent {
    constructor() { }
    ngOnInit() { }
};
AuthLayoutComponent.ctorParameters = () => [];
AuthLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-auth-layout",
        template: _raw_loader_auth_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], AuthLayoutComponent);



/***/ }),

/***/ "kCjQ":
/*!***************************************************!*\
  !*** ./src/app/core/guard/module-import.guard.ts ***!
  \***************************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import ${moduleName} modules in the AppModule only.`);
    }
}


/***/ }),

/***/ "ld2u":
/*!******************************************************!*\
  !*** ./src/app/core/service/rightsidebar.service.ts ***!
  \******************************************************/
/*! exports provided: RightSidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightSidebarService", function() { return RightSidebarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "41Ph");



let RightSidebarService = class RightSidebarService {
    constructor() {
        this.sidebarSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.sidebarState = this.sidebarSubject.asObservable();
        this.setRightSidebar = (value) => {
            this.sidebarSubject.next(value);
        };
    }
};
RightSidebarService.ctorParameters = () => [];
RightSidebarService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], RightSidebarService);



/***/ }),

/***/ "nlTO":
/*!***************************************************************!*\
  !*** ./src/app/layout/page-loader/page-loader.component.sass ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWxvYWRlci5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/rightsidebar.service */ "ld2u");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guard/auth.guard */ "3IAN");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/auth.service */ "KDUW");
/* harmony import */ var _service_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/dynamic-script-loader.service */ "GHa4");
/* harmony import */ var _guard_module_import_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guard/module-import.guard */ "kCjQ");
/* harmony import */ var _service_token_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/token.service */ "Rmk6");









let CoreModule = class CoreModule {
    constructor(parentModule) {
        Object(_guard_module_import_guard__WEBPACK_IMPORTED_MODULE_7__["throwIfAlreadyLoaded"])(parentModule, "CoreModule");
    }
};
CoreModule.ctorParameters = () => [
    { type: CoreModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] }
];
CoreModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        providers: [
            _service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_3__["RightSidebarService"],
            _guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"],
            _service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _service_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_6__["DynamicScriptLoaderService"],
            _service_token_service__WEBPACK_IMPORTED_MODULE_8__["TokenService"],
        ],
    })
], CoreModule);



/***/ }),

/***/ "rLcU":
/*!**************************************************!*\
  !*** ./src/app/core/service/language.service.ts ***!
  \**************************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



let LanguageService = class LanguageService {
    constructor(translate) {
        this.translate = translate;
        this.languages = ["en", "ar", "de"];
        let browserLang;
        translate.addLangs(this.languages);
        if (localStorage.getItem("lang")) {
            browserLang = localStorage.getItem("lang");
        }
        else {
            browserLang = translate.getBrowserLang();
        }
        translate.use(browserLang.match(/en|ar|de/) ? browserLang : "ar");
    }
    setLanguage(lang) {
        this.translate.use(lang);
        localStorage.setItem("lang", lang);
    }
};
LanguageService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
LanguageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], LanguageService);



/***/ }),

/***/ "rSWP":
/*!*******************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.sass ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "sIiH":
/*!*****************************************************!*\
  !*** ./src/app/core/interceptor/jwt.interceptor.ts ***!
  \*****************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "KDUW");



let JwtInterceptor = class JwtInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        // add authorization header with jwt token if available
        let currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`,
                },
            });
        }
        return next.handle(request);
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
JwtInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], JwtInterceptor);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication/page404/page404.component */ "21P8");
/* harmony import */ var _core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/guard/auth.guard */ "3IAN");
/* harmony import */ var _core_models_role__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/models/role */ "0HZm");
/* harmony import */ var _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/app-layout/auth-layout/auth-layout.component */ "f9dz");
/* harmony import */ var _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/app-layout/main-layout/main-layout.component */ "HSgw");








const routes = [
    {
        path: "",
        component: _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_7__["MainLayoutComponent"],
        canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [
            { path: "", redirectTo: "/authentication/signin", pathMatch: "full" },
            {
                path: "admin",
                canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                data: {
                    role: _core_models_role__WEBPACK_IMPORTED_MODULE_5__["Role"].Admin,
                },
                loadChildren: () => __webpack_require__.e(/*! import() | admin-admin-module */ "admin-admin-module").then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "jkDv")).then((m) => m.AdminModule),
            },
            {
                path: "doctor",
                canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                data: {
                    role: _core_models_role__WEBPACK_IMPORTED_MODULE_5__["Role"].Doctor,
                },
                loadChildren: () => Promise.all(/*! import() | doctor-doctor-module */[__webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~c47cc3e8"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~0ddc1df9"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~b2062aef"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~calendar-ca~2861b4ac"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~aa5da436"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~e52db059"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~authentication-authenticatio~90e9dcb6"), __webpack_require__.e("default~apps-apps-module~calendar-calendar-module~charts-charts-module~contacts-contacts-module~dash~8d7a1f44"), __webpack_require__.e("default~apps-apps-module~countries-countries-module~doctor-doctor-module~doctors-doctors-module~extr~6b68f9ca"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~8766d936"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~doctor-doctor-module~email-email-module~form~1f662b3e"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~doctor-doctor-module~patient-patient-module~~3604c5b4"), __webpack_require__.e("default~apps-apps-module~dashboard-dashboard-module~doctor-doctor-module~task-task-module~widget-wid~82f5afb3"), __webpack_require__.e("default~charts-charts-module~doctor-doctor-module~patient-patient-module"), __webpack_require__.e("default~dashboard-dashboard-module~doctor-doctor-module"), __webpack_require__.e("doctor-doctor-module")]).then(__webpack_require__.bind(null, /*! ./doctor/doctor.module */ "0Flv")).then((m) => m.DoctorModule),
            },
            {
                path: "patient",
                canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                data: {
                    role: _core_models_role__WEBPACK_IMPORTED_MODULE_5__["Role"].Patient,
                },
                loadChildren: () => Promise.all(/*! import() | patient-patient-module */[__webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~c47cc3e8"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~0ddc1df9"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~b2062aef"), __webpack_require__.e("default~apps-apps-module~countries-countries-module~doctor-doctor-module~doctors-doctors-module~extr~6b68f9ca"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~8766d936"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~doctor-doctor-module~email-email-module~form~1f662b3e"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~doctor-doctor-module~patient-patient-module~~3604c5b4"), __webpack_require__.e("default~charts-charts-module~doctor-doctor-module~patient-patient-module"), __webpack_require__.e("default~dashboard-dashboard-module~patient-patient-module"), __webpack_require__.e("patient-patient-module")]).then(__webpack_require__.bind(null, /*! ./patient/patient.module */ "AMsP")).then((m) => m.PatientModule),
            },
            {
                path: "calendar",
                loadChildren: () => Promise.all(/*! import() | calendar-calendar-module */[__webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~c47cc3e8"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~0ddc1df9"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~b2062aef"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~calendar-ca~2861b4ac"), __webpack_require__.e("default~apps-apps-module~calendar-calendar-module~charts-charts-module~contacts-contacts-module~dash~8d7a1f44"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~8766d936"), __webpack_require__.e("default~apps-apps-module~calendar-calendar-module~forms-forms-module"), __webpack_require__.e("calendar-calendar-module")]).then(__webpack_require__.bind(null, /*! ./calendar/calendar.module */ "O51e")).then((m) => m.CalendarsModule),
            },
            {
                path: "task",
                loadChildren: () => Promise.all(/*! import() | task-task-module */[__webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~c47cc3e8"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~0ddc1df9"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~b2062aef"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~aa5da436"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~e52db059"), __webpack_require__.e("default~apps-apps-module~calendar-calendar-module~charts-charts-module~contacts-contacts-module~dash~8d7a1f44"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~e510520b"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~8766d936"), __webpack_require__.e("default~appointments-appointments-module~apps-apps-module~contacts-contacts-module~forms-forms-modul~eae99d78"), __webpack_require__.e("default~apps-apps-module~dashboard-dashboard-module~doctor-doctor-module~task-task-module~widget-wid~82f5afb3"), __webpack_require__.e("default~apps-apps-module~forms-forms-module~task-task-module~ui-ui-module"), __webpack_require__.e("common"), __webpack_require__.e("task-task-module")]).then(__webpack_require__.bind(null, /*! ./task/task.module */ "09GQ")).then((m) => m.TaskModule),
            },
            {
                path: "contacts",
                loadChildren: () => Promise.all(/*! import() | contacts-contacts-module */[__webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~c47cc3e8"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~0ddc1df9"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~b2062aef"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~calendar-ca~2861b4ac"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~aa5da436"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~e52db059"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~authentication-authenticatio~90e9dcb6"), __webpack_require__.e("default~apps-apps-module~calendar-calendar-module~charts-charts-module~contacts-contacts-module~dash~8d7a1f44"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~e510520b"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~8766d936"), __webpack_require__.e("default~appointments-appointments-module~apps-apps-module~contacts-contacts-module~forms-forms-modul~eae99d78"), __webpack_require__.e("common"), __webpack_require__.e("contacts-contacts-module")]).then(__webpack_require__.bind(null, /*! ./contacts/contacts.module */ "1s7i")).then((m) => m.ContactsModule),
            },
            {
                path: "email",
                loadChildren: () => Promise.all(/*! import() | email-email-module */[__webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~c47cc3e8"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~doctor-doctor-module~email-email-module~form~1f662b3e"), __webpack_require__.e("default~email-email-module~forms-forms-module"), __webpack_require__.e("email-email-module")]).then(__webpack_require__.bind(null, /*! ./email/email.module */ "IrIT")).then((m) => m.EmailModule),
            },
            {
                path: "calendar",
                loadChildren: () => Promise.all(/*! import() | apps-apps-module */[__webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~c47cc3e8"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~0ddc1df9"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~b2062aef"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~calendar-ca~2861b4ac"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~aa5da436"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~e52db059"), __webpack_require__.e("default~apps-apps-module~calendar-calendar-module~charts-charts-module~contacts-contacts-module~dash~8d7a1f44"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~e510520b"), __webpack_require__.e("default~apps-apps-module~countries-countries-module~doctor-doctor-module~doctors-doctors-module~extr~6b68f9ca"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~8766d936"), __webpack_require__.e("default~appointments-appointments-module~apps-apps-module~contacts-contacts-module~forms-forms-modul~eae99d78"), __webpack_require__.e("default~apps-apps-module~dashboard-dashboard-module~doctor-doctor-module~task-task-module~widget-wid~82f5afb3"), __webpack_require__.e("default~apps-apps-module~forms-forms-module~task-task-module~ui-ui-module"), __webpack_require__.e("default~apps-apps-module~calendar-calendar-module~forms-forms-module"), __webpack_require__.e("common"), __webpack_require__.e("apps-apps-module")]).then(__webpack_require__.bind(null, /*! ./apps/apps.module */ "IYw8")).then((m) => m.AppsModule),
            },
            {
                path: "apps",
                loadChildren: () => Promise.all(/*! import() | apps-apps-module */[__webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~c47cc3e8"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~0ddc1df9"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~b2062aef"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~calendar-ca~2861b4ac"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~aa5da436"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~e52db059"), __webpack_require__.e("default~apps-apps-module~calendar-calendar-module~charts-charts-module~contacts-contacts-module~dash~8d7a1f44"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~e510520b"), __webpack_require__.e("default~apps-apps-module~countries-countries-module~doctor-doctor-module~doctors-doctors-module~extr~6b68f9ca"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~8766d936"), __webpack_require__.e("default~appointments-appointments-module~apps-apps-module~contacts-contacts-module~forms-forms-modul~eae99d78"), __webpack_require__.e("default~apps-apps-module~dashboard-dashboard-module~doctor-doctor-module~task-task-module~widget-wid~82f5afb3"), __webpack_require__.e("default~apps-apps-module~forms-forms-module~task-task-module~ui-ui-module"), __webpack_require__.e("default~apps-apps-module~calendar-calendar-module~forms-forms-module"), __webpack_require__.e("common"), __webpack_require__.e("apps-apps-module")]).then(__webpack_require__.bind(null, /*! ./apps/apps.module */ "IYw8")).then((m) => m.AppsModule),
            },
            {
                path: "widget",
                loadChildren: () => Promise.all(/*! import() | widget-widget-module */[__webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~c47cc3e8"), __webpack_require__.e("default~apps-apps-module~countries-countries-module~doctor-doctor-module~doctors-doctors-module~extr~6b68f9ca"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~doctor-doctor-module~email-email-module~form~1f662b3e"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~doctor-doctor-module~patient-patient-module~~3604c5b4"), __webpack_require__.e("default~apps-apps-module~dashboard-dashboard-module~doctor-doctor-module~task-task-module~widget-wid~82f5afb3"), __webpack_require__.e("default~authentication-authentication-module~ui-ui-module~widget-widget-module"), __webpack_require__.e("widget-widget-module")]).then(__webpack_require__.bind(null, /*! ./widget/widget.module */ "kXT5")).then((m) => m.WidgetModule),
            },
            {
                path: "ui",
                loadChildren: () => Promise.all(/*! import() | ui-ui-module */[__webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~c47cc3e8"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~b2062aef"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~calendar-ca~2861b4ac"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~authentication-authenticatio~90e9dcb6"), __webpack_require__.e("default~apps-apps-module~calendar-calendar-module~charts-charts-module~contacts-contacts-module~dash~8d7a1f44"), __webpack_require__.e("default~apps-apps-module~countries-countries-module~doctor-doctor-module~doctors-doctors-module~extr~6b68f9ca"), __webpack_require__.e("default~appointments-appointments-module~apps-apps-module~contacts-contacts-module~forms-forms-modul~eae99d78"), __webpack_require__.e("default~apps-apps-module~forms-forms-module~task-task-module~ui-ui-module"), __webpack_require__.e("default~authentication-authentication-module~ui-ui-module~widget-widget-module"), __webpack_require__.e("default~forms-forms-module~ui-ui-module"), __webpack_require__.e("default~extra-pages-extra-pages-module~ui-ui-module"), __webpack_require__.e("default~authentication-authentication-module~ui-ui-module"), __webpack_require__.e("ui-ui-module")]).then(__webpack_require__.bind(null, /*! ./ui/ui.module */ "oRDy")).then((m) => m.UiModule),
            },
            {
                path: "forms",
                loadChildren: () => Promise.all(/*! import() | forms-forms-module */[__webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~c47cc3e8"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~0ddc1df9"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~calendar-ca~2861b4ac"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~e52db059"), __webpack_require__.e("default~apps-apps-module~calendar-calendar-module~charts-charts-module~contacts-contacts-module~dash~8d7a1f44"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~e510520b"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~8766d936"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~doctor-doctor-module~email-email-module~form~1f662b3e"), __webpack_require__.e("default~appointments-appointments-module~apps-apps-module~contacts-contacts-module~forms-forms-modul~eae99d78"), __webpack_require__.e("default~apps-apps-module~forms-forms-module~task-task-module~ui-ui-module"), __webpack_require__.e("default~apps-apps-module~calendar-calendar-module~forms-forms-module"), __webpack_require__.e("default~email-email-module~forms-forms-module"), __webpack_require__.e("default~forms-forms-module~ui-ui-module"), __webpack_require__.e("common"), __webpack_require__.e("forms-forms-module")]).then(__webpack_require__.bind(null, /*! ./forms/forms.module */ "9Nm5")).then((m) => m.FormModule),
            },
            {
                path: "tables",
                loadChildren: () => Promise.all(/*! import() | tables-tables-module */[__webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~0ddc1df9"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~b2062aef"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~aa5da436"), __webpack_require__.e("default~apps-apps-module~calendar-calendar-module~charts-charts-module~contacts-contacts-module~dash~8d7a1f44"), __webpack_require__.e("default~appointments-appointments-module~countries-countries-module~tables-tables-module"), __webpack_require__.e("tables-tables-module")]).then(__webpack_require__.bind(null, /*! ./tables/tables.module */ "w7GV")).then((m) => m.TablesModule),
            },
            {
                path: "media",
                loadChildren: () => Promise.all(/*! import() | media-media-module */[__webpack_require__.e("default~maps-maps-module~media-media-module"), __webpack_require__.e("media-media-module")]).then(__webpack_require__.bind(null, /*! ./media/media.module */ "vbE1")).then((m) => m.MediaModule),
            },
            {
                path: "charts",
                loadChildren: () => Promise.all(/*! import() | charts-charts-module */[__webpack_require__.e("default~apps-apps-module~calendar-calendar-module~charts-charts-module~contacts-contacts-module~dash~8d7a1f44"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~doctor-doctor-module~email-email-module~form~1f662b3e"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~doctor-doctor-module~patient-patient-module~~3604c5b4"), __webpack_require__.e("default~charts-charts-module~doctor-doctor-module~patient-patient-module"), __webpack_require__.e("charts-charts-module")]).then(__webpack_require__.bind(null, /*! ./charts/charts.module */ "eGC9")).then((m) => m.ChartsModule),
            },
            {
                path: "timeline",
                loadChildren: () => __webpack_require__.e(/*! import() | timeline-timeline-module */ "timeline-timeline-module").then(__webpack_require__.bind(null, /*! ./timeline/timeline.module */ "WQCU")).then((m) => m.TimelineModule),
            },
            {
                path: "icons",
                loadChildren: () => __webpack_require__.e(/*! import() | icons-icons-module */ "icons-icons-module").then(__webpack_require__.bind(null, /*! ./icons/icons.module */ "sbs8")).then((m) => m.IconsModule),
            },
            {
                path: "extra-pages",
                loadChildren: () => Promise.all(/*! import() | extra-pages-extra-pages-module */[__webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~c47cc3e8"), __webpack_require__.e("default~apps-apps-module~countries-countries-module~doctor-doctor-module~doctors-doctors-module~extr~6b68f9ca"), __webpack_require__.e("default~extra-pages-extra-pages-module~ui-ui-module"), __webpack_require__.e("extra-pages-extra-pages-module")]).then(__webpack_require__.bind(null, /*! ./extra-pages/extra-pages.module */ "hOZs")).then((m) => m.ExtraPagesModule),
            },
            {
                path: "maps",
                loadChildren: () => Promise.all(/*! import() | maps-maps-module */[__webpack_require__.e("default~maps-maps-module~media-media-module"), __webpack_require__.e("maps-maps-module")]).then(__webpack_require__.bind(null, /*! ./maps/maps.module */ "x04h")).then((m) => m.MapsModule),
            },
            {
                path: "multilevel",
                loadChildren: () => __webpack_require__.e(/*! import() | multilevel-multilevel-module */ "multilevel-multilevel-module").then(__webpack_require__.bind(null, /*! ./multilevel/multilevel.module */ "6LPo")).then((m) => m.MultilevelModule),
            },
        ],
    },
    {
        path: "authentication",
        component: _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__["AuthLayoutComponent"],
        loadChildren: () => Promise.all(/*! import() | authentication-authentication-module */[__webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~authentication-authenticatio~90e9dcb6"), __webpack_require__.e("default~authentication-authentication-module~ui-ui-module~widget-widget-module"), __webpack_require__.e("default~authentication-authentication-module~ui-ui-module"), __webpack_require__.e("authentication-authentication-module")]).then(__webpack_require__.bind(null, /*! ./authentication/authentication.module */ "OpKh")).then((m) => m.AuthenticationModule),
    },
    { path: "**", component: _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_3__["Page404Component"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { relativeLinkResolution: "legacy" })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "ym7x":
/*!***************************************************************!*\
  !*** ./src/app/authentication/page404/page404.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlNDA0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map