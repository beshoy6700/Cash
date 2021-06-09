(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "0Em7":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: "dashboard",
        loadChildren: () => Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~apps-apps-module~calendar-calendar-module~charts-charts-module~contacts-contacts-module~dash~8d7a1f44"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~doctor-doctor-module~email-email-module~form~1f662b3e"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~doctor-doctor-module~patient-patient-module~~3604c5b4"), __webpack_require__.e("default~apps-apps-module~dashboard-dashboard-module~doctor-doctor-module~task-task-module~widget-wid~82f5afb3"), __webpack_require__.e("default~dashboard-dashboard-module~patient-patient-module"), __webpack_require__.e("default~dashboard-dashboard-module~doctor-doctor-module"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "pBKm")).then((m) => m.DashboardModule),
    },
    {
        path: "countries",
        loadChildren: () => Promise.all(/*! import() | countries-countries-module */[__webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~c47cc3e8"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~0ddc1df9"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~b2062aef"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~calendar-ca~2861b4ac"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~aa5da436"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~e52db059"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~authentication-authenticatio~90e9dcb6"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~e510520b"), __webpack_require__.e("default~apps-apps-module~countries-countries-module~doctor-doctor-module~doctors-doctors-module~extr~6b68f9ca"), __webpack_require__.e("default~appointments-appointments-module~countries-countries-module~tables-tables-module"), __webpack_require__.e("common"), __webpack_require__.e("countries-countries-module")]).then(__webpack_require__.bind(null, /*! ./countries/countries.module */ "DMhW")).then((m) => m.CountriesModule),
    },
    {
        path: "appointment",
        loadChildren: () => Promise.all(/*! import() | appointment-appointment-module */[__webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~c47cc3e8"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~0ddc1df9"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~b2062aef"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~calendar-ca~2861b4ac"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~aa5da436"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~e52db059"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~authentication-authenticatio~90e9dcb6"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~e510520b"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~8766d936"), __webpack_require__.e("appointment-appointment-module")]).then(__webpack_require__.bind(null, /*! ./appointment/appointment.module */ "ViCA")).then((m) => m.AppointmentModule),
    },
    {
        path: "doctors",
        loadChildren: () => Promise.all(/*! import() | doctors-doctors-module */[__webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~c47cc3e8"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~0ddc1df9"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~b2062aef"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~calendar-ca~2861b4ac"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~aa5da436"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~e52db059"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~authentication-authenticatio~90e9dcb6"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~e510520b"), __webpack_require__.e("default~apps-apps-module~countries-countries-module~doctor-doctor-module~doctors-doctors-module~extr~6b68f9ca"), __webpack_require__.e("common"), __webpack_require__.e("doctors-doctors-module")]).then(__webpack_require__.bind(null, /*! ./doctors/doctors.module */ "mGcs")).then((m) => m.DoctorsModule),
    },
    {
        path: "staff",
        loadChildren: () => Promise.all(/*! import() | staff-staff-module */[__webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~c47cc3e8"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~0ddc1df9"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~b2062aef"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~calendar-ca~2861b4ac"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~aa5da436"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~e52db059"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~authentication-authenticatio~90e9dcb6"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~e510520b"), __webpack_require__.e("default~apps-apps-module~countries-countries-module~doctor-doctor-module~doctors-doctors-module~extr~6b68f9ca"), __webpack_require__.e("common"), __webpack_require__.e("staff-staff-module")]).then(__webpack_require__.bind(null, /*! ./staff/staff.module */ "bejo")).then((m) => m.StaffModule),
    },
    {
        path: "patients",
        loadChildren: () => Promise.all(/*! import() | patients-patients-module */[__webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~c47cc3e8"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~0ddc1df9"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~b2062aef"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~calendar-ca~2861b4ac"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~aa5da436"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~e52db059"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~authentication-authenticatio~90e9dcb6"), __webpack_require__.e("default~apps-apps-module~calendar-calendar-module~charts-charts-module~contacts-contacts-module~dash~8d7a1f44"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~e510520b"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~8766d936"), __webpack_require__.e("common"), __webpack_require__.e("patients-patients-module")]).then(__webpack_require__.bind(null, /*! ./patients/patients.module */ "LZch")).then((m) => m.PatientsModule),
    },
    {
        path: "payment",
        loadChildren: () => Promise.all(/*! import() | payment-payment-module */[__webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~c47cc3e8"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~0ddc1df9"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~b2062aef"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~calendar-ca~2861b4ac"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~aa5da436"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~e52db059"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~authentication-authenticatio~90e9dcb6"), __webpack_require__.e("common"), __webpack_require__.e("payment-payment-module")]).then(__webpack_require__.bind(null, /*! ./payment/payment.module */ "fhuC")).then((m) => m.PaymentModule),
    },
    {
        path: "room",
        loadChildren: () => Promise.all(/*! import() | room-room-module */[__webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~c47cc3e8"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~0ddc1df9"), __webpack_require__.e("default~appointment-appointment-module~apps-apps-module~calendar-calendar-module~contacts-contacts-m~b2062aef"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~calendar-ca~2861b4ac"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~aa5da436"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~apps-apps-module~contacts-co~e52db059"), __webpack_require__.e("default~appointment-appointment-module~appointments-appointments-module~authentication-authenticatio~90e9dcb6"), __webpack_require__.e("common"), __webpack_require__.e("room-room-module")]).then(__webpack_require__.bind(null, /*! ./room/room.module */ "t6NI")).then((m) => m.RoomModule),
    },
];
let AdminRoutingModule = class AdminRoutingModule {
};
AdminRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdminRoutingModule);



/***/ }),

/***/ "jkDv":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-routing.module */ "0Em7");




let AdminModule = class AdminModule {
};
AdminModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"]],
    })
], AdminModule);



/***/ })

}]);
//# sourceMappingURL=admin-admin-module-es2015.js.map