(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-weather-landing>\r\n</app-weather-landing>\r\n\r\n\r\n<!--The content below is only a placeholder and can be replaced.\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n</div>\r\n<h2>Here are some links to help you start: </h2>\r\n<ul>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\r\n  </li>\r\n</ul>\r\n\r\n-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/weather-landing/weather-details/weather-details.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/weather-landing/weather-details/weather-details.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"weather-body\">\r\n        <div class=\"row\" id=\"weatherDetailsHeader\">\r\n            <div class=\"col-lg-4 text-center\"><i class=\"fas fa-tint\"></i> Humidity</div>\r\n            <div class=\"col-lg-4 text-center\"><i class=\"fas fa-wind\"></i> Wind Speed</div>\r\n            <div class=\"col-lg-4 text-center\"><i class=\"fas fa-location-arrow\"></i> Wind Degree</div>\r\n        </div>\r\n        <div class=\"row\" id=\"weatherDetails\" >\r\n            <div class=\"col-lg-4 text-center\">{{weatherData?.main.humidity}}%</div>\r\n            <div class=\"col-lg-4 text-center\">{{weatherData?.wind.speed}} mph</div>\r\n            <div class=\"col-lg-4 text-center\">{{weatherData?.wind.deg}}°</div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/weather-landing/weather-header/weather-header.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/weather-landing/weather-header/weather-header.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>weather-header works!</p> -->\r\n    <div class=\"weather-head\">\r\n        <h1 id=\"miami\" class=\"text-center display-4\">\r\n            {{weatherData?.name}} , {{weatherData?.sys.country}}\r\n           \r\n        </h1> \r\n        <div class=\"row\">\r\n            <div id=\"description\" class=\"col-lg-6 text-center\"> \r\n                <div class=\"currentWeather\">\r\n                    <!-- <i id=\"icon-desc\" class=\"fas fa-cloud fa-4x\">\r\n                    </i> -->\r\n                    <img src=\"http://openweathermap.org/img/wn/{{weatherData?.weather[0].icon}}@2x.png\"alt=\"\">\r\n                    <p id=\"desc\" class=\"weather-text\">{{weatherData?.weather[0].description}}</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div id=\"temperature\" class=\"col-lg-6 text-center\">\r\n                    {{weatherData?.main.temp}}\r\n                <i class=\"fas fa-thermometer-half\"></i>\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/weather-landing/weather-landing.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/weather-landing/weather-landing.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-8 weather mx-auto borderRound\">\r\n                <app-weather-header></app-weather-header>\r\n                    <app-weather-details></app-weather-details>\r\n            </div>\r\n        </div>\r\n    </div> \r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'weatherApp';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _weather_landing_weather_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./weather-landing/weather-landing.component */ "./src/app/weather-landing/weather-landing.component.ts");
/* harmony import */ var _weather_landing_weather_header_weather_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./weather-landing/weather-header/weather-header.component */ "./src/app/weather-landing/weather-header/weather-header.component.ts");
/* harmony import */ var _weather_landing_weather_details_weather_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./weather-landing/weather-details/weather-details.component */ "./src/app/weather-landing/weather-details/weather-details.component.ts");
/* harmony import */ var src_app_shared_weather_details_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/weather-details.service */ "./src/app/shared/weather-details.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _weather_landing_weather_landing_component__WEBPACK_IMPORTED_MODULE_6__["WeatherLandingComponent"],
            _weather_landing_weather_header_weather_header_component__WEBPACK_IMPORTED_MODULE_7__["WeatherHeaderComponent"],
            _weather_landing_weather_details_weather_details_component__WEBPACK_IMPORTED_MODULE_8__["WeatherDetailsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["AlertModule"].forRoot(),
            angular_font_awesome__WEBPACK_IMPORTED_MODULE_4__["AngularFontAwesomeModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
        ],
        providers: [src_app_shared_weather_details_service__WEBPACK_IMPORTED_MODULE_9__["WeatherDetailsService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/shared/weather-details.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/weather-details.service.ts ***!
  \***************************************************/
/*! exports provided: WeatherDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherDetailsService", function() { return WeatherDetailsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let WeatherDetailsService = class WeatherDetailsService {
    //list:Weather[];
    constructor(http) {
        this.http = http;
        this.rootUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Plymouth&APPID=24d03c65a6ba3dee0c7b8358a1ae0469&units=metric';
    }
    initWeatherData() {
        return this.http.get(this.rootUrl);
    }
    refreshList() {
        //this.http.get(this.rootUrl)
        //.toPromise()
        //.then(res=>res as WeatherDetails)
        //return this.http.get("https://api.openweathermap.org/data/2.5/weather?q=London&APPID=24d03c65a6ba3dee0c7b8358a1ae0469").toPromise()
        //.then((response) => { 
        //console.log(response)
        this.http.get('https://api.openweathermap.org/data/2.5/weather?q=London&APPID=24d03c65a6ba3dee0c7b8358a1ae0469&units=metric')
            .subscribe((response) => {
            //console.log(response);
            this.weatherData = response;
            console.log(this.weatherData);
            return this.weatherData;
        });
        return this.weatherData;
    }
};
WeatherDetailsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
WeatherDetailsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WeatherDetailsService);



/***/ }),

/***/ "./src/app/weather-landing/weather-details/weather-details.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/weather-landing/weather-details/weather-details.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYXRoZXItbGFuZGluZy93ZWF0aGVyLWRldGFpbHMvd2VhdGhlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/weather-landing/weather-details/weather-details.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/weather-landing/weather-details/weather-details.component.ts ***!
  \******************************************************************************/
/*! exports provided: WeatherDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherDetailsComponent", function() { return WeatherDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_weather_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/weather-details.service */ "./src/app/shared/weather-details.service.ts");



let WeatherDetailsComponent = class WeatherDetailsComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.initWeatherData().subscribe((response) => {
            console.log('BELOW SHOULD BE POPULATED OBJECTTTT');
            this.weatherData = response;
            console.log(this.weatherData);
        });
    }
};
WeatherDetailsComponent.ctorParameters = () => [
    { type: src_app_shared_weather_details_service__WEBPACK_IMPORTED_MODULE_2__["WeatherDetailsService"] }
];
WeatherDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-weather-details',
        template: __webpack_require__(/*! raw-loader!./weather-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/weather-landing/weather-details/weather-details.component.html"),
        styles: [__webpack_require__(/*! ./weather-details.component.css */ "./src/app/weather-landing/weather-details/weather-details.component.css")]
    })
], WeatherDetailsComponent);



/***/ }),

/***/ "./src/app/weather-landing/weather-header/weather-header.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/weather-landing/weather-header/weather-header.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYXRoZXItbGFuZGluZy93ZWF0aGVyLWhlYWRlci93ZWF0aGVyLWhlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/weather-landing/weather-header/weather-header.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/weather-landing/weather-header/weather-header.component.ts ***!
  \****************************************************************************/
/*! exports provided: WeatherHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherHeaderComponent", function() { return WeatherHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_weather_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/weather-details.service */ "./src/app/shared/weather-details.service.ts");



let WeatherHeaderComponent = class WeatherHeaderComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        // this.resetForm();
        //this.service.refreshList();
        //
        //
        //console.log("Ran refresh List: WeatherDataBelow")
        //console.log(this.service.weatherData)
        this.service.initWeatherData().subscribe((response) => {
            console.log('BELOW SHOULD BE POPULATED OBJECTTTT');
            this.weatherData = response;
            console.log(this.weatherData);
        });
        //console.log(this.weatherData);
    }
    // resetForm(form?: NgForm){
    //   if(form!=null)
    //     form.resetForm();
    //   this.service.weatherData={
    //     coord:
    //   }
    // }
    populateForm(wd) {
        console.log("Run populateForm");
        this.service.weatherData = Object.assign({}, wd);
    }
};
WeatherHeaderComponent.ctorParameters = () => [
    { type: src_app_shared_weather_details_service__WEBPACK_IMPORTED_MODULE_2__["WeatherDetailsService"] }
];
WeatherHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-weather-header',
        template: __webpack_require__(/*! raw-loader!./weather-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/weather-landing/weather-header/weather-header.component.html"),
        styles: [__webpack_require__(/*! ./weather-header.component.css */ "./src/app/weather-landing/weather-header/weather-header.component.css")]
    })
], WeatherHeaderComponent);



/***/ }),

/***/ "./src/app/weather-landing/weather-landing.component.css":
/*!***************************************************************!*\
  !*** ./src/app/weather-landing/weather-landing.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYXRoZXItbGFuZGluZy93ZWF0aGVyLWxhbmRpbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/weather-landing/weather-landing.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/weather-landing/weather-landing.component.ts ***!
  \**************************************************************/
/*! exports provided: WeatherLandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherLandingComponent", function() { return WeatherLandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WeatherLandingComponent = class WeatherLandingComponent {
    constructor() { }
    ngOnInit() {
    }
};
WeatherLandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-weather-landing',
        template: __webpack_require__(/*! raw-loader!./weather-landing.component.html */ "./node_modules/raw-loader/index.js!./src/app/weather-landing/weather-landing.component.html"),
        styles: [__webpack_require__(/*! ./weather-landing.component.css */ "./src/app/weather-landing/weather-landing.component.css")]
    })
], WeatherLandingComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
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
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\stephengibbs\source\repos\weatherApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map