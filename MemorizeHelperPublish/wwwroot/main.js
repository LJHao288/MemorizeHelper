(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-memory-uit/add-memory-uit.component.css":
/*!*************************************************************!*\
  !*** ./src/app/add-memory-uit/add-memory-uit.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form-container {\r\n  height: 100vh;\r\n  width: 100%;\r\n}\r\n\r\ntextarea { \r\n   /* will prevent resizing horizontally */\r\n   max-width: 90%;\r\n   min-width: 150px;\r\n   min-height:200px;\r\n   color:#000000;\r\n}\r\n\r\n.login-form-container{\r\n  height:auto;\r\n\tmin-height:100vh;\r\n\tbackground-image:url('background.png');\r\n\tbackground-size:cover;\r\n  background-position:center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLW1lbW9yeS11aXQvYWRkLW1lbW9yeS11aXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0NBQ2I7O0FBRUQ7R0FDRyx3Q0FBd0M7R0FDeEMsZUFBZTtHQUNmLGlCQUFpQjtHQUNqQixpQkFBaUI7R0FDakIsY0FBYztDQUNoQjs7QUFFRDtFQUNFLFlBQVk7Q0FDYixpQkFBaUI7Q0FDakIsdUNBQWtEO0NBQ2xELHNCQUFzQjtFQUNyQiwyQkFBMkI7Q0FDNUIiLCJmaWxlIjoic3JjL2FwcC9hZGQtbWVtb3J5LXVpdC9hZGQtbWVtb3J5LXVpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWZvcm0tY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7IFxyXG4gICAvKiB3aWxsIHByZXZlbnQgcmVzaXppbmcgaG9yaXpvbnRhbGx5ICovXHJcbiAgIG1heC13aWR0aDogOTAlO1xyXG4gICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICBtaW4taGVpZ2h0OjIwMHB4O1xyXG4gICBjb2xvcjojMDAwMDAwO1xyXG59XHJcblxyXG4ubG9naW4tZm9ybS1jb250YWluZXJ7XHJcbiAgaGVpZ2h0OmF1dG87XHJcblx0bWluLWhlaWdodDoxMDB2aDtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOnVybCguLi8uLi9hc3NldHMvYmFja2dyb3VuZC5wbmcpO1xyXG5cdGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/add-memory-uit/add-memory-uit.component.html":
/*!**************************************************************!*\
  !*** ./src/app/add-memory-uit/add-memory-uit.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-form-container\">\r\n  <div class=\"form-container\">\r\n    <form #AddForm=\"ngForm\" (ngSubmit)=\"onFormSubmit(AddForm.value)\" class=\"form\">\r\n      <h4 class=\"form-header\">\r\n        Add New Unit\r\n      </h4>\r\n       \r\n\t   \r\n\t   \r\n\t   \r\n\t   <div class=\"control\">\r\n        <label for=\"Title\">Title</label>\r\n        <input ngModel #Title=\"ngModel\" name=\"Title\" required id=\"Title\" type=\"text\">\r\n        <div class=\"form-error\" *ngIf=\"Title.touched && !Title.valid\">\r\n          <div *ngIf=\"Title.errors.required\">\r\n            Title is required\r\n          </div>\r\n        </div>\r\n      </div>\r\n\t  \r\n\t  \r\n\t  <div class=\"control\">\r\n        <label for=\"Subject\">Subject</label>\r\n        <input ngModel #Subject=\"ngModel\" name=\"Subject\" type=\"text\">\r\n      </div>\r\n\t  \r\n\t  <div class=\"control\">\r\n        <label for=\"Priority\">Priority</label>\r\n        <select ngModel [(ngModel)]='PriorityOptions[0]' #Priority=\"ngModel\" name=\"Priority\" style=\"color:#000000\">\r\n\t\t\r\n\t\t<option [value]=\"x\" *ngFor=\"let x of PriorityOptions\">{{x}}</option>\r\n\t\t\r\n\t\t</select>\r\n\t\t\r\n      </div>\r\n\t  \r\n\t  \r\n\t  <div class=\"control\">\r\n        <label for=\"Privacy\">Privacy</label>\r\n        <select ngModel [(ngModel)]='PrivacyOptions[0]' #Privacy=\"ngModel\" name=\"Privacy\" style=\"color:#000000\">\r\n\t\t\r\n\t\t<option [value]=\"x\" *ngFor=\"let x of PrivacyOptions\">{{x}}</option>\r\n\t\t\r\n\t\t</select>\r\n\t\t\r\n      </div>\r\n\t  \r\n\t \r\n\t  <div class=\"control\">\r\n        <label for=\"Tags\">Tags</label>\r\n        <input ngModel #Tags=\"ngModel\" name=\"Tags\" type=\"text\">\r\n      </div>\r\n\t  \r\n\t  \r\n\t  <div class=\"control\">\r\n        \r\n\t\t<label for=\"Schedules\">Schedules</label>\r\n        \r\n\t\t<input ngModel #DDate=\"ngModel\" name=\"Schedules\" type=\"date\" (ngModelChange)=\"Chnged()\">\r\n\t\t\r\n\t\t\r\n\t\t<br>\r\n\t\t\r\n\t\t<button class=\"btn\" type=\"button\" (click)=\"AddDate(DDate);\" [disabled]=\"ValidData\">Add Date</button>\r\n\t\t\r\n\t    <br>\r\n\t  \r\n\t  \r\n\t  \r\n\t   <div class=\"row\" *ngFor=\"let X of SchedulesArray; index as i\">\r\n        \r\n          <div>&nbsp; &nbsp; {{X.date}} \r\n\t\t  \r\n\t\t  <button type=\"button\" class=\"close\" (click)=\"DeleteDate(i)\">×</button>\r\n       \r\n\t    </div>\r\n\t\t</div>\r\n\t  \r\n\t   </div>\r\n\t   \r\n\t   \r\n\t   \r\n\t  <div class=\"control\">\r\n        <label for=\"Content\">Content</label>\r\n        <textarea ngModel #Content=\"ngModel\" name=\"Content\" type=\"text\" required id=\"Content\"></textarea>\r\n      </div>\r\n\t  \r\n\t  \r\n\t  <div class=\"control\">\r\n        <button [disabled]=\"AddForm.invalid\" class=\"btn\" type=\"submit\">Add Unit</button>\r\n      </div>\r\n\t  \r\n      \r\n\r\n\t  <div class=\"control\">\r\n        <button class=\"btn\" type=\"button\" (click)=\"Back()\">Back</button>\r\n      </div> \r\n\t  \r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/add-memory-uit/add-memory-uit.component.ts":
/*!************************************************************!*\
  !*** ./src/app/add-memory-uit/add-memory-uit.component.ts ***!
  \************************************************************/
/*! exports provided: AddMemoryUitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMemoryUitComponent", function() { return AddMemoryUitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddMemoryUitComponent = /** @class */ (function () {
    function AddMemoryUitComponent(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.PriorityOptions = ["Intermediate", "High", "Low"];
        this.PrivacyOptions = ["Private", "Public"];
        this.DatesList = [];
        this.TempPrivacy = false;
        this.JsonData = {};
        this.SchedulesArray = [];
        this.Username = "";
        this.ValidData = true;
    }
    AddMemoryUitComponent.prototype.ngOnInit = function () {
    };
    AddMemoryUitComponent.prototype.Back = function () {
        this.router.navigateByUrl('/myprofile');
    };
    AddMemoryUitComponent.prototype.DeleteDate = function (i) {
        this.SchedulesArray.splice(i, 1);
    };
    AddMemoryUitComponent.prototype.AddDate = function (D) {
        this.SchedulesArray.push({ date: D.viewModel });
        this.ValidData = true;
    };
    AddMemoryUitComponent.prototype.Chnged = function () {
        this.ValidData = false;
    };
    AddMemoryUitComponent.prototype.onFormSubmit = function (Data) {
        var _this = this;
        this.Username = localStorage.getItem('Username');
        console.log(this.Username);
        this.TempPrivacy = ("Private" == Data.Privacy);
        this.JsonData = { Title: Data.Title, Tags: Data.Tags, IsPrivate: this.TempPrivacy, Priority: Data.Priority, SubjectName: Data.Subject, StringContent: Data.Content, Schedules: this.SchedulesArray, OwnerUsername: this.Username };
        var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json');
        console.log(this.JsonData);
        var post = this.httpClient.post('http://localhost:44724/api/MemorizeUnit', this.JsonData, { headers: Headers }).subscribe(function (data) {
            _this.router.navigateByUrl('/myprofile');
        }, function (err) {
            var error = JSON.stringify(err.error);
            alert(error);
        });
    };
    AddMemoryUitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-memory-uit',
            template: __webpack_require__(/*! ./add-memory-uit.component.html */ "./src/app/add-memory-uit/add-memory-uit.component.html"),
            styles: [__webpack_require__(/*! ./add-memory-uit.component.css */ "./src/app/add-memory-uit/add-memory-uit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AddMemoryUitComponent);
    return AddMemoryUitComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#mainContainer {\r\n  min-width: 100vw;\r\n  min-height: 100vh;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbkNvbnRhaW5lciB7XHJcbiAgbWluLXdpZHRoOiAxMDB2dztcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@slideInOut]=\"triggerAnimation(outlet)\" id=\"mainContainer\">\r\n  <router-outlet #outlet=\"outlet\" ></router-outlet>\r\n</div>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.triggerAnimation = function (outlet) {
        return outlet.activatedRouteData.animation || null;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *, :enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'absolute', width: '100%' }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100vw)' }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0vw)' }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    transform: 'translateX(100vw)'
                                }))
                            ], { optional: true }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    transform: 'translateX(0)'
                                }))
                            ], { optional: true })
                        ])
                    ])
                ])
            ]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _add_memory_uit_add_memory_uit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-memory-uit/add-memory-uit.component */ "./src/app/add-memory-uit/add-memory-uit.component.ts");
/* harmony import */ var _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./userprofile/userprofile.component */ "./src/app/userprofile/userprofile.component.ts");
/* harmony import */ var _view_unit_view_unit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./view-unit/view-unit.component */ "./src/app/view-unit/view-unit.component.ts");
/* harmony import */ var _edit_unit_edit_unit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./edit-unit/edit-unit.component */ "./src/app/edit-unit/edit-unit.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var ng2_opd_popup__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-opd-popup */ "./node_modules/ng2-opd-popup/index.js");
/* harmony import */ var _popular_mem_units_popular_mem_units_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./popular-mem-units/popular-mem-units.component */ "./src/app/popular-mem-units/popular-mem-units.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"],
                _add_memory_uit_add_memory_uit_component__WEBPACK_IMPORTED_MODULE_13__["AddMemoryUitComponent"],
                _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_14__["UserprofileComponent"],
                _view_unit_view_unit_component__WEBPACK_IMPORTED_MODULE_15__["ViewUnitComponent"],
                _edit_unit_edit_unit_component__WEBPACK_IMPORTED_MODULE_16__["EditUnitComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_17__["SearchComponent"],
                _popular_mem_units_popular_mem_units_component__WEBPACK_IMPORTED_MODULE_19__["PopularMemUnitsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_11__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                ng2_opd_popup__WEBPACK_IMPORTED_MODULE_18__["PopupModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: '', redirectTo: '/login', pathMatch: 'full' },
                    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], data: { animation: 'login' } },
                    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"], data: { animation: 'signup' } },
                    { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"] },
                    { path: 'addmemoryunit', component: _add_memory_uit_add_memory_uit_component__WEBPACK_IMPORTED_MODULE_13__["AddMemoryUitComponent"] },
                    { path: 'myprofile', component: _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_14__["UserprofileComponent"] },
                    { path: 'viewunit', component: _view_unit_view_unit_component__WEBPACK_IMPORTED_MODULE_15__["ViewUnitComponent"] },
                    { path: 'editunit', component: _edit_unit_edit_unit_component__WEBPACK_IMPORTED_MODULE_16__["EditUnitComponent"] },
                    { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_17__["SearchComponent"] },
                    { path: 'popular-mem-units', component: _popular_mem_units_popular_mem_units_component__WEBPACK_IMPORTED_MODULE_19__["PopularMemUnitsComponent"] },
                    { path: '**', redirectTo: '/login' }
                ], {
                    useHash: true
                })
            ],
            providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (!!localStorage.getItem('email')) {
            return true;
        }
        this.router.navigateByUrl('/');
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/edit-unit/edit-unit.component.css":
/*!***************************************************!*\
  !*** ./src/app/edit-unit/edit-unit.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form-container {\r\n  height: auto;\r\n  width: 100%;\r\n\tmin-height:100vh;\r\n\tbackground-image:url('background.png');\r\n\tbackground-size:cover;\r\n  background-position:center;\r\n}\r\n\r\ntextarea { \r\n   /* will prevent resizing horizontally */\r\n   max-width: 90%;\r\n   min-width: 150px;\r\n   min-height:200px;\r\n   color:#000000;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC11bml0L2VkaXQtdW5pdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7Q0FDYixpQkFBaUI7Q0FDakIsdUNBQWtEO0NBQ2xELHNCQUFzQjtFQUNyQiwyQkFBMkI7Q0FDNUI7O0FBRUQ7R0FDRyx3Q0FBd0M7R0FDeEMsZUFBZTtHQUNmLGlCQUFpQjtHQUNqQixpQkFBaUI7R0FDakIsY0FBYztDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtdW5pdC9lZGl0LXVuaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1mb3JtLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cdG1pbi1oZWlnaHQ6MTAwdmg7XHJcblx0YmFja2dyb3VuZC1pbWFnZTp1cmwoLi4vLi4vYXNzZXRzL2JhY2tncm91bmQucG5nKTtcclxuXHRiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XHJcbn1cclxuXHJcbnRleHRhcmVhIHsgXHJcbiAgIC8qIHdpbGwgcHJldmVudCByZXNpemluZyBob3Jpem9udGFsbHkgKi9cclxuICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgIG1pbi1oZWlnaHQ6MjAwcHg7XHJcbiAgIGNvbG9yOiMwMDAwMDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/edit-unit/edit-unit.component.html":
/*!****************************************************!*\
  !*** ./src/app/edit-unit/edit-unit.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-form-container\">\r\n  <div class=\"form-container\">\r\n    <form #AddForm=\"ngForm\" (ngSubmit)=\"onFormSubmit(AddForm.value)\" class=\"form\">\r\n      <h4 class=\"form-header\">\r\n        Edit Unit\r\n      </h4>\r\n       \r\n\t   \r\n\t   \r\n\t   \r\n\t   <div class=\"control\">\r\n        <label for=\"Title\">Title</label>\r\n        <input [(ngModel)]='TitleVal' ngModel #Title=\"ngModel\" name=\"Title\" required id=\"Title\" type=\"text\">\r\n        <div class=\"form-error\" *ngIf=\"Title.touched && !Title.valid\">\r\n          <div *ngIf=\"Title.errors.required\">\r\n            Title is required\r\n          </div>\r\n        </div>\r\n      </div>\r\n\t  \r\n\t  \r\n\t  <div class=\"control\">\r\n        <label for=\"Subject\">Subject</label>\r\n        <input [(ngModel)]='SubjectVal' ngModel #Subject=\"ngModel\" name=\"Subject\" type=\"text\">\r\n      </div>\r\n\t  \r\n\t  <div class=\"control\">\r\n        <label for=\"Priority\">Priority</label>\r\n        <select ngModel [(ngModel)]='PriorityVal' #Priority=\"ngModel\" name=\"Priority\" style=\"color:#000000\">\r\n\t\t\r\n\t\t<option [value]=\"x\" *ngFor=\"let x of PriorityOptions\">{{x}}</option>\r\n\t\t\r\n\t\t</select>\r\n\t\t\r\n      </div>\r\n\t  \r\n\t  \r\n\t  <div class=\"control\">\r\n        <label for=\"Privacy\">Privacy</label>\r\n        <select ngModel [(ngModel)]='PrivacyVal' #Privacy=\"ngModel\" name=\"Privacy\" style=\"color:#000000\">\r\n\t\t\r\n\t\t<option [value]=\"x\" *ngFor=\"let x of PrivacyOptions\">{{x}}</option>\r\n\t\t\r\n\t\t</select>\r\n\t\t\r\n      </div>\r\n\t  \r\n\t \r\n\t  <div class=\"control\">\r\n        <label for=\"Tags\">Tags</label>\r\n        <input ngModel [(ngModel)]='TagsVal' #Tags=\"ngModel\" name=\"Tags\" type=\"text\">\r\n      </div>\r\n\t  \r\n\t  \r\n\t  <div class=\"control\">\r\n        \r\n\t\t<label for=\"Schedules\">Schedules</label>\r\n        \r\n\t\t<input ngModel #DDate=\"ngModel\" name=\"Schedules\" type=\"date\" (ngModelChange)=\"Chnged()\">\r\n\t\t\r\n\t\t\r\n\t\t<br>\r\n\t\t\r\n\t\t<button class=\"btn\" type=\"button\" (click)=\"AddDate(DDate);\" [disabled]=\"ValidData\">Add Date</button>\r\n\t\t\r\n\t    <br>\r\n\t  \r\n\t  \r\n\t  \r\n\t   <div class=\"row\" *ngFor=\"let X of Dates; index as i\">\r\n        \r\n          <div>&nbsp; &nbsp; {{X.date}} \r\n\t\t  \r\n\t\t  <button type=\"button\" class=\"close\" (click)=\"DeleteDate(i)\">×</button>\r\n       \r\n\t    </div>\r\n\t\t</div>\r\n\t  \r\n\t   </div>\r\n\t   \r\n\t   \r\n\t   \r\n\t  <div class=\"control\">\r\n        <label for=\"Content\">Content</label>\r\n        <textarea [(ngModel)]='ContentVal' ngModel #Content=\"ngModel\" name=\"Content\" type=\"text\" required id=\"Content\"></textarea>\r\n      </div>\r\n\t  \r\n\t  \r\n\t  <div class=\"control\">\r\n        <button [disabled]=\"AddForm.invalid\" class=\"btn\" type=\"submit\">Save</button>\r\n      </div>\r\n\t  \r\n      \r\n\r\n\t  <div class=\"control\">\r\n        <button class=\"btn\" type=\"button\" (click)=\"Back()\">Back</button>\r\n      </div> \r\n\t  \r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/edit-unit/edit-unit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-unit/edit-unit.component.ts ***!
  \**************************************************/
/*! exports provided: EditUnitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUnitComponent", function() { return EditUnitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditUnitComponent = /** @class */ (function () {
    function EditUnitComponent(httpClient, router, _location) {
        this.httpClient = httpClient;
        this.router = router;
        this._location = _location;
        this.PriorityOptions = ["Intermediate", "High", "Low"];
        this.PrivacyOptions = ["Private", "Public"];
        this.DatesList = [];
        this.TempPrivacy = false;
        this.JsonData = {};
        this.SchedulesArray = [];
        this.Username = "";
        this.ValidData = true;
        this.CurrentUnit = {};
        this.TitleVal = "";
        this.SubjectVal = "";
        this.PriorityVal = "";
        this.PrivacyVal = "";
        this.TagsVal = "";
        this.ContentVal = "";
        this.Dates = [];
        this.UserID = "";
    }
    EditUnitComponent.prototype.GetSchedule = function (Id) {
        var _this = this;
        var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json');
        this.httpClient.get("http://localhost:44724/api/MemorizeUnit/GetSchedule/" + Id).subscribe(function (data) {
            _this.Dates = Object.values(data);
            ;
            console.log(_this.Dates);
        }, function (err) {
            alert("Error");
        });
    };
    EditUnitComponent.prototype.ngOnInit = function () {
        this.CurrentUnit = JSON.parse(localStorage.getItem('CurrentUnit'));
        this.UserID = this.CurrentUnit.id;
        this.GetSchedule(this.CurrentUnit.id);
        this.TitleVal = this.CurrentUnit.title;
        this.SubjectVal = this.CurrentUnit.subjectName;
        this.PriorityVal = this.CurrentUnit.priority;
        this.PrivacyVal = this.PrivacyOptions[1 - (this.CurrentUnit.isPrivate * 1)];
        this.TagsVal = this.CurrentUnit.tags;
        this.ContentVal = this.CurrentUnit.stringContent;
    };
    EditUnitComponent.prototype.Back = function () {
        this._location.back();
    };
    EditUnitComponent.prototype.DeleteDate = function (i) {
        this.Dates.splice(i, 1);
    };
    EditUnitComponent.prototype.AddDate = function (D) {
        this.Dates.push({ date: D.viewModel });
        this.ValidData = true;
    };
    EditUnitComponent.prototype.Chnged = function () {
        this.ValidData = false;
    };
    EditUnitComponent.prototype.onFormSubmit = function (Data) {
        var _this = this;
        this.Username = localStorage.getItem('Username');
        console.log(this.Username);
        this.TempPrivacy = ("Private" == Data.Privacy);
        this.JsonData = { Id: this.UserID, Title: Data.Title, Tags: Data.Tags, IsPrivate: this.TempPrivacy, Priority: Data.Priority, SubjectName: Data.Subject, StringContent: Data.Content, Schedules: this.Dates, OwnerUsername: this.Username };
        var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json');
        console.log(this.JsonData);
        var post = this.httpClient.put('http://localhost:44724/api/MemorizeUnit/', this.JsonData, { headers: Headers }).subscribe(function (data) {
            alert("Done");
            _this._location.back();
        }, function (err) {
            var error = JSON.stringify(err.error);
            alert(error);
        });
    };
    EditUnitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-unit',
            template: __webpack_require__(/*! ./edit-unit.component.html */ "./src/app/edit-unit/edit-unit.component.html"),
            styles: [__webpack_require__(/*! ./edit-unit.component.css */ "./src/app/edit-unit/edit-unit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], EditUnitComponent);
    return EditUnitComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form-container {\r\n  height: auto;\r\n  width: 100%;\r\n  min-height:100vh;\r\n  background-image:url('background.png');\r\n  background-size:cover;\r\n  background-position:center;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHVDQUFrRDtFQUNsRCxzQkFBc0I7RUFDdEIsMkJBQTJCO0NBQzVCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1mb3JtLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6MTAwdmg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTp1cmwoLi4vLi4vYXNzZXRzL2JhY2tncm91bmQucG5nKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-form-container\">\r\n  <div class=\"form-container\">\r\n    <form #loginForm=\"ngForm\" (ngSubmit)=\"onFormSubmit(loginForm.value)\" autocomplete=\"false\" class=\"form\">\r\n      <h4 class=\"form-header\">\r\n        Login\r\n        <i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"></i>\r\n      </h4>\r\n      <div class=\"control\">\r\n        <label for=\"name\">Name</label>\r\n        <input ngModel #name=\"ngModel\" minlength=\"3\" name=\"name\" required id=\"name\" type=\"text\">\r\n        <div class=\"form-error\" *ngIf=\"name.touched && !name.valid\">\r\n          <div *ngIf=\"name.errors.required\">\r\n            Name is required\r\n          </div>\r\n          <div *ngIf=\"name.errors.minlength\">\r\n            Name must be at least 3 characters long.\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"control\">\r\n        <label for=\"password\">Password</label>\r\n        <input ngModel #password=\"ngModel\" minlength=\"4\" name=\"password\" autocomplete=\"new-password\" id=\"password\" required type=\"password\">\r\n        <div class=\"form-error\" *ngIf=\"password.touched && !password.valid\">\r\n          <div *ngIf=\"password.errors.required\">\r\n            Password is required\r\n          </div>\r\n          <div *ngIf=\"password.errors.minlength\">\r\n            Password must be at least 4 characters long.\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"control\">\r\n        <button [disabled]=\"loginForm.invalid\" class=\"btn\" type=\"submit\">Login</button>\r\n        <p class=\"alter-way\">\r\n          <a [routerLink]=\"'/signup'\" id=\"SIAnchor\">Create a new account</a>\r\n        </p>\r\n      </div>\r\n    \r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onFormSubmit = function (data) {
        var _this = this;
        var name = data.name;
        var password = data.password;
        //console.log("name"+name+" password"+password);
        console.log(data);
        var parameter = JSON.stringify({ username: name, password: password });
        //console.log("pap"+parameter);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json');
        var postd = this.httpClient.post("http://localhost:44724/api/auth/login", parameter, { headers: headers })
            .subscribe(function (Data) {
            localStorage.setItem('isLoggedIn', "true");
            localStorage.setItem('Username', Data.username);
            var token = JSON.stringify(Data);
            console.log("data" + token);
            _this.router.navigateByUrl('/myprofile');
        }, function (err) {
            console.log("err" + JSON.stringify(err.statusText));
            if (JSON.stringify(err.statusText).indexOf("Unauthorized") != -1) {
                //alert("Unregistered User");
                document.getElementById("SIAnchor").textContent = "Invaild Username or password ,please click here to sign up! ";
                document.getElementById("SIAnchor").style.color = "#ff0000";
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/popular-mem-units/popular-mem-units.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/popular-mem-units/popular-mem-units.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form-container {\r\n    height: 100vh;\r\n    width: 100%;\r\n  }\r\n  \r\n .col-md-1 {\r\n    min-width: 130px;\r\n    width: 25%;\r\n    word-wrap: break-word;\r\n    margin-bottom: 10px;\r\n    margin-top: 10px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n\tmax-width:130px;\r\n\t\r\n}\r\n  \r\n .ng2-opd-popup-content-main[_ngcontent-c3] {\r\n    position: absolute;\r\n    right: 0;\r\n    left: 0;\r\n    border-radius: 3px;\r\n    background-color: white;\r\n    z-index: 1000;\r\n    top: 50% !important;\r\n    color: black;\r\n    \r\n    }\r\n  \r\n .login-form-container{\r\n        height:auto;\r\n          min-height:100vh;\r\n          background-image:url('background.png');\r\n          background-size:cover;\r\n        background-position:center;\r\n      }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9wdWxhci1tZW0tdW5pdHMvcG9wdWxhci1tZW0tdW5pdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0dBQ2I7O0NBRUY7SUFDRyxpQkFBaUI7SUFDakIsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7Q0FDdEIsZ0JBQWdCOztDQUVoQjs7Q0FJQztJQUNFLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsUUFBUTtJQUNSLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixhQUFhOztLQUVaOztDQUdEO1FBQ0ksWUFBWTtVQUNWLGlCQUFpQjtVQUNqQix1Q0FBa0Q7VUFDbEQsc0JBQXNCO1FBQ3hCLDJCQUEyQjtPQUM1QiIsImZpbGUiOiJzcmMvYXBwL3BvcHVsYXItbWVtLXVuaXRzL3BvcHVsYXItbWVtLXVuaXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tZm9ybS1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuIC5jb2wtbWQtMSB7XHJcbiAgICBtaW4td2lkdGg6IDEzMHB4O1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblx0bWF4LXdpZHRoOjEzMHB4O1xyXG5cdFxyXG59XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLm5nMi1vcGQtcG9wdXAtY29udGVudC1tYWluW19uZ2NvbnRlbnQtYzNdIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIHRvcDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgLmxvZ2luLWZvcm0tY29udGFpbmVye1xyXG4gICAgICAgIGhlaWdodDphdXRvO1xyXG4gICAgICAgICAgbWluLWhlaWdodDoxMDB2aDtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKC4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZyk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XHJcbiAgICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/popular-mem-units/popular-mem-units.component.html":
/*!********************************************************************!*\
  !*** ./src/app/popular-mem-units/popular-mem-units.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-form-container\">\r\n  <div class=\"form-container\">\r\n    <form #AddForm=\"ngForm\" (ngSubmit)=\"onFormSubmit(AddForm.value)\" class=\"form\">\r\n      <h4 class=\"form-header\">\r\n      <!--{{Title}}-->\r\n      </h4>\r\n      \r\n      <div class=\"control\">\r\n        <label for=\"Search\" >Popular Units</label>\r\n        <input ngModel id=\"Searchtext\" name=\"Searchtext\" type=\"text\" placeholder=\"Number of Popular memory Units...\">\r\n             </div>\r\n      <div class=\"control\">\r\n        <button class=\"btn\" type=\"button\" (click)=\"GetPopularMems()\">Search Now</button>\r\n      </div> \r\n      <div class=\"row\" *ngFor=\"let X of AllData\" style=\"margin-bottom:15px;\">\r\n\r\n        <div class=\"col-md-1\"><p> {{X.title}} </p></div>\r\n\r\n<div class=\"col-md-1\"><button (click)=\"View(X)\" type=\"button\" class=\"btn btn-default \">View</button></div>\r\n<div class=\"col-md-1\"><button  type=\"button\" class=\"btn btn-default\" (click)=\"Edit(X)\" >&nbsp;Edit&nbsp;&nbsp;&nbsp;</button></div>\r\n\r\n        <div class=\"col-md-1\"><button  (click)=\"ClickConfirmPopup(X)\" type=\"button\" class=\"btn btn-default\">Delete</button></div>\r\n\t\t\r\n        <popup (confirmClick)=\"ConfirmDeleteEvent()\" (cancelClick)=\"CancelDeleteEvent()\"class=\"ng2-opd-popup-content-main\" _ngcontent-c3 >Are you sure you want to delete this Memory Unit?</popup>\r\n\r\n</div>\r\n\t  <div class=\"control\">\r\n        <button class=\"btn\" type=\"button\" (click)=\"Back()\">Back</button>\r\n      </div> \r\n\t  \r\n\t\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/popular-mem-units/popular-mem-units.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/popular-mem-units/popular-mem-units.component.ts ***!
  \******************************************************************/
/*! exports provided: PopularMemUnitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularMemUnitsComponent", function() { return PopularMemUnitsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_opd_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-opd-popup */ "./node_modules/ng2-opd-popup/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PopularMemUnitsComponent = /** @class */ (function () {
    function PopularMemUnitsComponent(httpClient, router, popup, _location) {
        this.httpClient = httpClient;
        this.router = router;
        this.popup = popup;
        this._location = _location;
        this.CurrentUnit = {};
        this.Title = "";
        this.Subject = "";
        this.CurrentX = null;
        this.Priority = "";
        this.Username = "";
        this.Privacy = false;
        this.Tags = "";
        this.Privte = "Privte";
        this.Public = "Public";
        this.Content = "";
        this.AllData = [];
        this.max_MemUnits = "";
    }
    PopularMemUnitsComponent.prototype.GetAllData = function () {
        var _this = this;
        var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json');
        this.httpClient.get("http://localhost:44724/api/MemorizeUnit/" + this.Username).subscribe(function (data) {
            _this.AllData = data;
        }, function (err) {
            alert("Error");
        });
    };
    PopularMemUnitsComponent.prototype.ngOnInit = function () {
        this.CurrentUnit = JSON.parse(localStorage.getItem('CurrentUnit'));
        this.Title = this.CurrentUnit.title;
        this.Subject = this.CurrentUnit.subjectName;
        this.Priority = this.CurrentUnit.priority;
        this.Privacy = this.CurrentUnit.isPrivate;
        this.Tags = this.CurrentUnit.tags;
        this.Content = this.CurrentUnit.stringContent;
        this.Username = localStorage.getItem('Username');
        this.GetAllData();
    };
    PopularMemUnitsComponent.prototype.GetPopularMems = function () {
        var _this = this;
        this.max_MemUnits = document.getElementById("Searchtext").value;
        //console.log("inner text "+this.serach)
        var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json');
        this.httpClient.get("http://localhost:44724/api/MemorizeUnit/GetPopular?maxNum=" + this.max_MemUnits).subscribe(function (data) {
            _this.AllData = data;
            //alert("Data Loaded");
            localStorage.setItem('CurrentUnit', JSON.stringify(_this.AllData));
            console.log("in    " + JSON.stringify(localStorage.getItem('CurrentUnit')));
        }, function (err) {
            console.log(" ---" + _this.max_MemUnits);
            alert("Please enter a vaild number!");
        });
    };
    PopularMemUnitsComponent.prototype.View = function (X) {
        localStorage.setItem('CurrentUnit', JSON.stringify(X));
        this.router.navigateByUrl('/viewunit');
    };
    PopularMemUnitsComponent.prototype.Edit = function (X) {
        localStorage.setItem('CurrentUnit', JSON.stringify(X));
        this.router.navigateByUrl('/editunit');
    };
    PopularMemUnitsComponent.prototype.ClickConfirmPopup = function (X) {
        this.popup.options = {
            confirmBtnContent: "Yes",
            cancleBtnContent: "No",
            color: "#17a598",
            header: "Confirm Deletion"
        };
        this.CurrentX = X;
        this.popup.show();
    };
    PopularMemUnitsComponent.prototype.ConfirmDeleteEvent = function () {
        var _this = this;
        this.httpClient.delete("http://localhost:44724/api/MemorizeUnit/" + this.CurrentX.id, { responseType: 'text' }).subscribe(function (data) {
            _this.GetAllData();
            _this.popup.hide();
        }, function (err) {
            alert("Please try again");
        });
    };
    PopularMemUnitsComponent.prototype.CancelDeleteEvent = function () {
        this.popup.hide();
    };
    PopularMemUnitsComponent.prototype.Back = function () {
        this._location.back();
    };
    PopularMemUnitsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-popular-mem-units',
            template: __webpack_require__(/*! ./popular-mem-units.component.html */ "./src/app/popular-mem-units/popular-mem-units.component.html"),
            styles: [__webpack_require__(/*! ./popular-mem-units.component.css */ "./src/app/popular-mem-units/popular-mem-units.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ng2_opd_popup__WEBPACK_IMPORTED_MODULE_3__["Popup"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], PopularMemUnitsComponent);
    return PopularMemUnitsComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form-container {\r\n    height: 100vh;\r\n    width: 100%;\r\n  }\r\n  \r\n  \r\n  .col-md-1 {\r\n      min-width: 130px;\r\n      width: 25%;\r\n      word-wrap: break-word;\r\n      margin-bottom: 10px;\r\n      margin-top: 10px;\r\n      margin-left: auto;\r\n      margin-right: auto;\r\n      max-width:130px;\r\n\t  \r\n      \r\n  }\r\n  \r\n  \r\n  .ng2-opd-popup-content-main[_ngcontent-c3] {\r\n    position: absolute;\r\n    right: 0;\r\n    left: 0;\r\n    border-radius: 3px;\r\n    background-color: white;\r\n    z-index: 1000;\r\n    top: 50% !important;\r\n    color: black;\r\n    \r\n    }\r\n  \r\n  \r\n  .login-form-container{\r\n        height:auto;\r\n          min-height:100vh;\r\n          background-image:url('background.png');\r\n          background-size:cover;\r\n        background-position:center;\r\n      }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFlBQVk7R0FDYjs7O0VBR0Q7TUFDSSxpQkFBaUI7TUFDakIsV0FBVztNQUNYLHNCQUFzQjtNQUN0QixvQkFBb0I7TUFDcEIsaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIsZ0JBQWdCOzs7R0FHbkI7OztFQUlEO0lBQ0UsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGFBQWE7O0tBRVo7OztFQUVEO1FBQ0ksWUFBWTtVQUNWLGlCQUFpQjtVQUNqQix1Q0FBa0Q7VUFDbEQsc0JBQXNCO1FBQ3hCLDJCQUEyQjtPQUM1QiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1mb3JtLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5jb2wtbWQtMSB7XHJcbiAgICAgIG1pbi13aWR0aDogMTMwcHg7XHJcbiAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgbWF4LXdpZHRoOjEzMHB4O1xyXG5cdCAgXHJcbiAgICAgIFxyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAubmcyLW9wZC1wb3B1cC1jb250ZW50LW1haW5bX25nY29udGVudC1jM10ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgdG9wOiA1MCUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5sb2dpbi1mb3JtLWNvbnRhaW5lcntcclxuICAgICAgICBoZWlnaHQ6YXV0bztcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6MTAwdmg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCguLi8uLi9hc3NldHMvYmFja2dyb3VuZC5wbmcpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO1xyXG4gICAgICB9Il19 */"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-form-container\">\r\n  <div class=\"form-container\">\r\n    <form #AddForm=\"ngForm\" (ngSubmit)=\"onFormSubmit(AddForm.value)\" class=\"form\">\r\n      <h4 class=\"form-header\">\r\n      <!--{{Title}}-->\r\n      </h4>\r\n      \r\n      <div class=\"control\">\r\n        <label for=\"Search\" >Search</label>\r\n        <input ngModel id=\"Searchtext\" name=\"Searchtext\" type=\"text\" placeholder=\"Enter the title here...\">\r\n          <input ngModel id=\"Searchtext2\" name=\"Searchtext2\" type=\"text\" placeholder=\"Enter the tag here...\">\r\n          <input ngModel id=\"Searchtext3\" name=\"Searchtext3\" type=\"text\" placeholder=\"Enter the subject name here...\">\r\n        </div> \r\n      <div class=\"control\">\r\n        <button class=\"btn\" type=\"button\" (click)=\"SearchNow()\">Search Now</button>\r\n      </div> \r\n\t  <h1></h1>\r\n      <div class=\"row\" *ngFor=\"let X of AllData\" style=\"margin-bottom:15px;\">\r\n\r\n        <div class=\"col-md-1\"><p> {{X.title}} </p></div>\r\n\r\n<div class=\"col-md-1\"><button (click)=\"View(X)\" type=\"button\" class=\"btn btn-default \" >View</button></div>\r\n<div class=\"col-md-1\"><button (click)=\"Clone(X)\" type=\"button\" class=\"btn btn-default \" >Clone</button></div>\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n <h1></h1>\r\n\t  <div class=\"control\">\r\n        <button class=\"btn\" type=\"button\" (click)=\"Back()\">Back</button>\r\n      </div> \r\n\t  \r\n\t\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = /** @class */ (function () {
    function SearchComponent(httpClient, router, _location) {
        this.httpClient = httpClient;
        this.router = router;
        this._location = _location;
        this.CurrentUnit = {};
        this.Title = "";
        this.Subject = "";
        this.Priority = "";
        this.Privacy = false;
        this.Tags = "";
        this.Privte = "Privte";
        this.Public = "Public";
        this.Content = "";
        this.AllData = [];
        this.serachTitle = "";
        this.serachTag = "";
        this.SubjectName = "";
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.CurrentUnit = JSON.parse(localStorage.getItem('CurrentUnit'));
        this.Title = this.CurrentUnit.title;
        this.Subject = this.CurrentUnit.subjectName;
        this.Priority = this.CurrentUnit.priority;
        this.Privacy = this.CurrentUnit.isPrivate;
        this.Tags = this.CurrentUnit.tags;
        this.Content = this.CurrentUnit.stringContent;
    };
    SearchComponent.prototype.SearchNow = function () {
        var _this = this;
        this.serachTitle = document.getElementById("Searchtext").value;
        this.serachTag = document.getElementById("Searchtext2").value;
        this.SubjectName = document.getElementById("Searchtext3").value;
        console.log("serachTitle " + this.serachTitle);
        console.log("serachTag " + this.serachTag);
        //console.log("inner text "+this.serach)
        var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json');
        this.httpClient.get("http://localhost:44724/api/MemorizeUnit/GetForUserInPage?TitleSearch=" + this.serachTitle + "&TagsSearch=" + this.serachTag + "&SubjectNameSearch=" + this.SubjectName).subscribe(function (data) {
            _this.AllData = data;
            //alert("Data Loaded");
            localStorage.setItem('CurrentUnit', JSON.stringify(_this.AllData));
            console.log("in    " + JSON.stringify(localStorage.getItem('CurrentUnit')));
            //this.router.navigateByUrl('/viewunit');
            //console.log(this.AllData);
            // console.log("out  "+JSON.stringify(localStorage.getItem('CurrentUnit')));
        }, function (err) {
            console.log(" ---" + _this.serachTag + "-- " + _this.serachTitle + "--" + _this.SubjectName);
            alert("Error");
        });
    };
    SearchComponent.prototype.View = function (X) {
        localStorage.setItem('CurrentUnit', JSON.stringify(X));
        this.router.navigateByUrl('/viewunit');
    };
    SearchComponent.prototype.Clone = function (X) {
        var _this = this;
        var Username = localStorage.getItem('Username');
        console.log("Username " + Username);
        this.CurrentUnit = JSON.parse(X.id);
        console.log("id ... MEM  " + JSON.stringify(this.CurrentUnit));
        var id;
        var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json');
        this.httpClient.post("http://localhost:44724/api/MemorizeUnit/Copy/" + this.CurrentUnit + "/" + Username, { headers: Headers }).subscribe(function (data) {
            _this.AllData = data;
            alert("Clone Done!");
            // localStorage.setItem('CurrentUnit', JSON.stringify(this.AllData));
            //console.log("in    "+JSON.stringify(localStorage.getItem('CurrentUnit')));
        }, function (err) {
            console.log(" ---" + _this.serachTag + "--" + _this.serachTitle + "--" + _this.SubjectName);
            alert("Unable to Clone it!");
        });
    };
    SearchComponent.prototype.Back = function () {
        this._location.back();
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signup-form-container {\r\n    height: auto;\r\n    width: 100%;\r\n    min-height:100vh;\r\n    background-image:url('background.png');\r\n    background-size:cover;\r\n    background-position:center;\r\n  }\r\n  \r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsdUNBQWtEO0lBQ2xELHNCQUFzQjtJQUN0QiwyQkFBMkI7R0FDNUIiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbnVwLWZvcm0tY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDoxMDB2aDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKC4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxuICB9XHJcbiAgXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"signup-form-container\">\r\n  <div class=\"form-container\">\r\n    <form #signupForm=\"ngForm\" (ngSubmit)=\"onFormSubmit(signupForm.value)\" autocomplete=\"false\" class=\"form\">\r\n      <h4 class=\"form-header\">Sign up\r\n        <i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i>\r\n      </h4>\r\n      <div class=\"control\">\r\n        <label for=\"name\">Name</label>\r\n        <input ngModel #name=\"ngModel\" minlength=\"3\" name=\"name\" required id=\"name\" type=\"text\">\r\n        <div class=\"form-error\" *ngIf=\"name.touched && !name.valid\">\r\n          <div *ngIf=\"name.errors.required\">\r\n            Name is required\r\n          </div>\r\n          <div *ngIf=\"name.errors.minlength\">\r\n            Name must be at least 3 characters long.\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"control\">\r\n        <label for=\"password\">Password</label>\r\n        <input ngModel #password=\"ngModel\" minlength=\"4\" name=\"password\" required autocomplete=\"new-password\" id=\"password\" type=\"password\">\r\n        <div class=\"form-error\" *ngIf=\"password.touched && !password.valid\">\r\n          <div *ngIf=\"password.errors.required\">\r\n            Password is required\r\n          </div>\r\n          <div *ngIf=\"password.errors.minlength\">\r\n            Password must be at least 4 characters long.\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"control\">\r\n        <button type='button' [disabled]=\"signupForm.invalid\" class=\"btn\" type=\"submit\">Signup</button>\r\n        <p class=\"alter-way\">\r\n          <a [routerLink]=\"'/login'\" id=\"SUAnchor\">Already have an account?</a>\r\n        </p>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onFormSubmit = function (data) {
        var _this = this;
        var name = data.name;
        var password = data.password;
        console.log("name" + name + " password" + password);
        var parameter = JSON.stringify({ username: name, password: password });
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json');
        //console.log(JSON.stringify({username:a, password:b}));
        //var queryHeaders = new HttpHeaders();
        // queryHeaders.append('Content-Type', 'application/json');
        var post = this.httpClient.post("http://localhost:44724/api/auth/register", parameter, { headers: headers })
            .subscribe(function (data) {
            document.getElementById("SUAnchor").textContent = "User added Successfully , click here to sign In! ";
            document.getElementById("SUAnchor").style.color = "#4a7248";
            document.getElementById("SUAnchor").style.fontWeight = "bold";
            //alert('User added Successfully');
        }, function (err) {
            var error = JSON.stringify(err.error);
            if (JSON.stringify(error).indexOf("Username already exists") != -1) {
                alert("Username already exists");
                _this.router.navigateByUrl('/');
            }
            else if (JSON.stringify(error).indexOf("Password length") != -1) {
                //alert("Password length must between 4 and 8");
                document.getElementById("SUAnchor").textContent = "Password length must between (4 - 8 Characters) , click here to sign In! ";
                document.getElementById("SUAnchor").style.color = "#ff0000";
            }
            else {
                alert(error);
            }
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  min-height: 100vh;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 2.4rem;\r\n  color: #fff;\r\n  flex-direction: column;\r\n}\r\n\r\n.btn {\r\n  margin-top: 1.2rem;\r\n}\r\n\r\nfigcaption {\r\n  \r\n  color: #fff;\r\n  font: italic smaller sans-serif;\r\n  padding: 3px;\r\n  -webkit-margin-after: 80px;\r\n          margin-block-end: 80px;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEOztFQUVFLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLDJCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyLjRyZW07XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgbWFyZ2luLXRvcDogMS4ycmVtO1xyXG59XHJcblxyXG5maWdjYXB0aW9uIHtcclxuICBcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250OiBpdGFsaWMgc21hbGxlciBzYW5zLXNlcmlmO1xyXG4gIHBhZGRpbmc6IDNweDtcclxuICBtYXJnaW4tYmxvY2stZW5kOiA4MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <!--<p>Hi, {{get_users()}}</p>-->\r\n\r\n\r\n  <figure>\r\n    <img src=\"http://raptoredu.com/data/uploads/blog/ct1.png\" alt=\"Memorize Helper\" width=\"500\" height=\"200\" />\r\n    <figcaption >Memorize Helper </figcaption>\r\n</figure>\r\n\r\n<div class=\"form-group purple-border\">\r\n  <textarea placeholder=\"Add title ..\" class=\"form-control\" id=\"exampleFormControlTextarea4\" rows=\"2\" cols=\"50\"></textarea>\r\n  <input type=\"checkbox\" class=\"form-check-input\" id=\"materialUnchecked\">\r\n  <label class=\"form-check-label\" for=\"materialUnchecked\"type=\"checkbox\"> <font color=\"orange\">Public</font> </label>\r\n</div>\r\n\r\n<div class=\"form-group green-border-focus\">\r\n  <textarea placeholder=\"Add Content ...\" class=\"form-control\" id=\"exampleFormControlTextarea5\" rows=\"9\" cols=\"62\"></textarea>\r\n</div>\r\n\r\n<select class=\"mdb-select md-form colorful-select dropdown-primary\" multiple searchable=\"Search here..\">\r\n  <option value=\"\" disabled selected>the importance</option>\r\n  <option value=\"1\">High</option>\r\n  <option value=\"2\">Medium</option>\r\n  <option value=\"3\">Low</option>\r\n</select>\r\n  <div class=\"form-group purple-border\">\r\n    <textarea placeholder=\"Add tags ..\" class=\"form-control\" id=\"exampleFormControlTextarea4\" rows=\"4\" cols=\"62\"></textarea>\r\n    \r\n  </div>\r\n \r\n  \r\n  <button class=\"btn\" (click)=\"logout()\">logout</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = /** @class */ (function () {
    function UserComponent(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.getUserEmail = function () {
        // const headers = new HttpHeaders().append('Content-Type' , 'application/json')
        //return JSON.stringify(this.httpClient.get("http://localhost:5000/api/values/1",{headers}
        // ))
        // .subscribe(
        //  function(success) {
        //     console.log('RESPONSE', success);
        //     return success;
        // }, function(error) {
        //     console.log('ERROR', error);
        //     return error;
        //  });
        //return "test"
        //return localStorage.getItem('email');
    };
    UserComponent.prototype.get_users = function () {
        //return JSON.stringify(this.httpClient.get('http://localhost:5000/api/values/1',{observe: 'response'})
        return JSON.stringify(this.httpClient.get('http://localhost:5000/api/values/1'));
    };
    UserComponent.prototype.logout = function () {
        // localStorage.removeItem('email');
        this.router.navigateByUrl('/');
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/userprofile/userprofile.component.css":
/*!*******************************************************!*\
  !*** ./src/app/userprofile/userprofile.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form-container {\r\n  height: 100vh;\r\n  width: 100%;\r\n}\r\n\r\n\r\n.col-md-1 {\r\n    min-width: 130px;\r\n    width: 25%;\r\n    word-wrap: break-word;\r\n    margin-bottom: 10px;\r\n    margin-top: 10px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n\tmax-width:130px;\r\n\t\r\n}\r\n\r\n\r\n.ng2-opd-popup-content-main[_ngcontent-c3] {\r\n  position: absolute;\r\n  right: 0;\r\n  left: 0;\r\n  border-radius: 3px;\r\n  background-color: white;\r\n  z-index: 1000;\r\n  top: 50% !important;\r\n  color: black;\r\n  \r\n  }\r\n\r\n\r\n.login-form-container{\r\n  height:auto;\r\n\tmin-height:100vh;\r\n\tbackground-image:url('background.png');\r\n\tbackground-size:cover;\r\n  background-position:center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnByb2ZpbGUvdXNlcnByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0NBQ2I7OztBQUdEO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3RCLGdCQUFnQjs7Q0FFaEI7OztBQUlEO0VBQ0UsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxRQUFRO0VBQ1IsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGFBQWE7O0dBRVo7OztBQUdIO0VBQ0UsWUFBWTtDQUNiLGlCQUFpQjtDQUNqQix1Q0FBa0Q7Q0FDbEQsc0JBQXNCO0VBQ3JCLDJCQUEyQjtDQUM1QiIsImZpbGUiOiJzcmMvYXBwL3VzZXJwcm9maWxlL3VzZXJwcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tZm9ybS1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4uY29sLW1kLTEge1xyXG4gICAgbWluLXdpZHRoOiAxMzBweDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cdG1heC13aWR0aDoxMzBweDtcclxuXHRcclxufVxyXG5cclxuXHJcblxyXG4ubmcyLW9wZC1wb3B1cC1jb250ZW50LW1haW5bX25nY29udGVudC1jM10ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIHRvcDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIFxyXG4gIH1cclxuICBcclxuXHJcbi5sb2dpbi1mb3JtLWNvbnRhaW5lcntcclxuICBoZWlnaHQ6YXV0bztcclxuXHRtaW4taGVpZ2h0OjEwMHZoO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6dXJsKC4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZyk7XHJcblx0YmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/userprofile/userprofile.component.html":
/*!********************************************************!*\
  !*** ./src/app/userprofile/userprofile.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-form-container\">\r\n  <div class=\"form-container\">\r\n\r\n    <div class=\"form\">\r\n      <h4 class=\"form-header\">\r\n        {{Username}}\r\n        <i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"></i>\r\n      </h4>\r\n      <h4></h4>\r\n      <h4></h4>\r\n\t  \r\n\t  \r\n\t  \r\n\t  <div class=\"row\">\r\n\r\n        \r\n\t\t<div class=\"col-md-1\"><button  style=\"min-width:98px;max-width:98px;\" (click)=\"SwitchToday()\" type=\"button\" class=\"btn btn-default\">{{TodayButtonText}}</button></div>\r\n\t\t\r\n        <div class=\"col-md-1\"><button  style=\"min-width:98px;max-width:98px;\" (click)=\"AddNew()\" type=\"button\" class=\"btn btn-default\">&nbsp;&nbsp;Add&nbsp;&nbsp;&nbsp;</button></div>\r\n\r\n        <div class=\"col-md-1\"><button  style=\"min-width:98px;max-width:98px;\" type=\"button\" class=\"btn btn-default\" (click)=\"Search()\" >Search</button></div>\r\n\r\n        <div class=\"col-md-1\"><button  style=\"min-width:98px;max-width:98px;\" (click)=\"GetPopularMem()\" type=\"button\" class=\"btn btn-default\">Popular</button></div>\r\n\t\t\r\n      </div>\r\n\t  \r\n\t  <h4></h4>\r\n\t  <h4></h4>\r\n\t  \r\n      <div class=\"row\" *ngFor=\"let X of AllData\">\r\n\r\n        <div class=\"col-md-1\">\r\n          <p> {{X.title}} </p>\r\n        </div>\r\n\r\n        <div class=\"col-md-1\"><button  (click)=\"View(X)\" type=\"button\" class=\"btn btn-default\">&nbsp;View&nbsp;&nbsp;</button></div>\r\n\r\n\r\n        <div class=\"col-md-1\"><button  type=\"button\" class=\"btn btn-default\" (click)=\"Edit(X)\" >&nbsp;Edit&nbsp;&nbsp;&nbsp;</button></div>\r\n\r\n        <div class=\"col-md-1\"><button  (click)=\"ClickConfirmPopup(X)\" type=\"button\" class=\"btn btn-default\">Delete</button></div>\r\n\t\t\r\n        <popup (confirmClick)=\"ConfirmDeleteEvent()\" (cancelClick)=\"CancelDeleteEvent()\"class=\"ng2-opd-popup-content-main\" _ngcontent-c3 >Are you sure you want to delete this Memory Unit?</popup>\r\n      </div>\r\n\r\n      <h4></h4>\r\n      <h4></h4>\r\n \r\n\t  <div class=\"control\">\r\n        <button class=\"btn\" (click)=\"LogOut()\">Log Out</button>\r\n      </div>\r\n\t  \r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/userprofile/userprofile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/userprofile/userprofile.component.ts ***!
  \******************************************************/
/*! exports provided: UserprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofileComponent", function() { return UserprofileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_opd_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-opd-popup */ "./node_modules/ng2-opd-popup/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserprofileComponent = /** @class */ (function () {
    function UserprofileComponent(httpClient, router, popup) {
        this.httpClient = httpClient;
        this.router = router;
        this.popup = popup;
        this.Username = "";
        this.AllData = [];
        this.Header = {};
        this.CurrentX = null;
        this.TodayButtonText = "";
    }
    UserprofileComponent.prototype.GetAllData = function () {
        var _this = this;
        var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json');
        this.httpClient.get("http://localhost:44724/api/MemorizeUnit/" + this.Username).subscribe(function (data) {
            _this.AllData = data;
        }, function (err) {
            alert("Error");
        });
    };
    UserprofileComponent.prototype.GetReviewTaskToday = function () {
        var _this = this;
        var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json');
        this.httpClient.get("http://localhost:44724/api/MemorizeUnit/GetReviewTaskToday?Username=" + this.Username).subscribe(function (data) {
            _this.AllData = data;
        }, function (err) {
            alert("Error");
        });
    };
    UserprofileComponent.prototype.ToggleDataLoader = function () {
        if (localStorage.getItem('TodayButtonText') == 'Today') {
            this.TodayButtonText = "All";
            this.GetReviewTaskToday();
        }
        else {
            this.GetAllData();
            this.TodayButtonText = "Today";
        }
    };
    UserprofileComponent.prototype.SwitchToday = function () {
        if (localStorage.getItem('TodayButtonText') == 'Today') {
            localStorage.setItem('TodayButtonText', 'All');
        }
        else {
            localStorage.setItem('TodayButtonText', 'Today');
        }
        this.ToggleDataLoader();
    };
    UserprofileComponent.prototype.ngOnInit = function () {
        this.Username = localStorage.getItem('Username');
        if (localStorage.getItem('TodayButtonText') == "") {
            localStorage.setItem('TodayButtonText', 'All');
        }
        this.ToggleDataLoader();
    };
    UserprofileComponent.prototype.AddNew = function () {
        this.router.navigateByUrl('/addmemoryunit');
    };
    UserprofileComponent.prototype.Search = function () {
        this.router.navigateByUrl('/search');
    };
    UserprofileComponent.prototype.GetPopularMem = function () {
        this.router.navigateByUrl('/popular-mem-units');
    };
    UserprofileComponent.prototype.LogOut = function () {
        this.router.navigateByUrl('/login');
        localStorage.setItem('isLoggedIn', "false");
        localStorage.setItem('Username', "-");
    };
    UserprofileComponent.prototype.View = function (X) {
        localStorage.setItem('CurrentUnit', JSON.stringify(X));
        this.router.navigateByUrl('/viewunit');
    };
    UserprofileComponent.prototype.Edit = function (X) {
        localStorage.setItem('CurrentUnit', JSON.stringify(X));
        this.router.navigateByUrl('/editunit');
    };
    UserprofileComponent.prototype.ClickConfirmPopup = function (X) {
        this.popup.options = {
            confirmBtnContent: "Yes",
            cancleBtnContent: "No",
            color: "#17a598",
            header: "Confirm Deletion"
        };
        this.CurrentX = X;
        this.popup.show();
    };
    UserprofileComponent.prototype.ConfirmDeleteEvent = function () {
        var _this = this;
        this.httpClient.delete("http://localhost:44724/api/MemorizeUnit/" + this.CurrentX.id, { responseType: 'text' }).subscribe(function (data) {
            _this.ToggleDataLoader();
            _this.popup.hide();
        }, function (err) {
            alert("Please try again");
        });
    };
    UserprofileComponent.prototype.CancelDeleteEvent = function () {
        this.popup.hide();
    };
    UserprofileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userprofile',
            template: __webpack_require__(/*! ./userprofile.component.html */ "./src/app/userprofile/userprofile.component.html"),
            styles: [__webpack_require__(/*! ./userprofile.component.css */ "./src/app/userprofile/userprofile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ng2_opd_popup__WEBPACK_IMPORTED_MODULE_3__["Popup"]])
    ], UserprofileComponent);
    return UserprofileComponent;
}());



/***/ }),

/***/ "./src/app/view-unit/view-unit.component.css":
/*!***************************************************!*\
  !*** ./src/app/view-unit/view-unit.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form-container {\r\n  height: auto;\r\n  width: 100%;\r\n\tmin-height:100vh;\r\n\tbackground-image:url('background.png');\r\n\tbackground-size:cover;\r\n  background-position:center;\r\n}\r\n\r\ntextarea { \r\n   /* will prevent resizing horizontally */\r\n   max-width: 90%;\r\n   min-width: 150px;\r\n   min-height:200px;\r\n   color:#000000;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy11bml0L3ZpZXctdW5pdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7Q0FDYixpQkFBaUI7Q0FDakIsdUNBQWtEO0NBQ2xELHNCQUFzQjtFQUNyQiwyQkFBMkI7Q0FDNUI7O0FBRUQ7R0FDRyx3Q0FBd0M7R0FDeEMsZUFBZTtHQUNmLGlCQUFpQjtHQUNqQixpQkFBaUI7R0FDakIsY0FBYztDQUNoQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctdW5pdC92aWV3LXVuaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1mb3JtLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cdG1pbi1oZWlnaHQ6MTAwdmg7XHJcblx0YmFja2dyb3VuZC1pbWFnZTp1cmwoLi4vLi4vYXNzZXRzL2JhY2tncm91bmQucG5nKTtcclxuXHRiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XHJcbn1cclxuXHJcbnRleHRhcmVhIHsgXHJcbiAgIC8qIHdpbGwgcHJldmVudCByZXNpemluZyBob3Jpem9udGFsbHkgKi9cclxuICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgIG1pbi1oZWlnaHQ6MjAwcHg7XHJcbiAgIGNvbG9yOiMwMDAwMDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/view-unit/view-unit.component.html":
/*!****************************************************!*\
  !*** ./src/app/view-unit/view-unit.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-form-container\">\r\n  <div class=\"form-container\">\r\n    <form #AddForm=\"ngForm\" (ngSubmit)=\"onFormSubmit(AddForm.value)\" class=\"form\">\r\n      <h4 class=\"form-header\">\r\n      {{Title}}\r\n      </h4>\r\n      \r\n\r\n\t  \r\n\t  <div class=\"control\">\r\n        <label for=\"Subject\">Creation Date</label>\r\n        <input ngModel [(ngModel)]='CreationDate' name=\"CreationDate\" type=\"text\" readonly>\r\n      </div>\r\n\t  \r\n\t  \r\n\t  <div class=\"control\">\r\n        <label for=\"Subject\">Subject</label>\r\n        <input ngModel [(ngModel)]='Subject' name=\"Subject\" type=\"text\" readonly>\r\n      </div>\r\n\t  \r\n\t   <div class=\"control\">\r\n        <label for=\"Priority\">Priority</label>\r\n        <input ngModel [(ngModel)]='Priority' name=\"Priority\" type=\"text\" readonly>\r\n      </div>\r\n\t  \r\n\t  <div class=\"control\" *ngIf=\"Privacy\">\r\n        <label for=\"Privacy\">Privacy</label>\r\n        <input ngModel [(ngModel)]='Privte' name=\"Privacy\" type=\"text\" readonly>\r\n      </div>\r\n\t  \r\n\t  \r\n\t  <div class=\"control\" *ngIf=\"!Privacy\">\r\n        <label for=\"Privacy1\">Privacy</label>\r\n        <input ngModel [(ngModel)]='Public' name=\"Privacy1\" type=\"text\" readonly>\r\n      </div>\r\n\t  \r\n\t  <div class=\"control\">\r\n        <label for=\"Tags\">Tags</label>\r\n        <input ngModel [(ngModel)]='Tags' name=\"Tags\" type=\"text\" readonly>\r\n      </div>\r\n\t  \r\n\t  <div class=\"control\">\r\n        \r\n\t\t<label for=\"Schedules\">Schedules</label>\r\n        \r\n\t\t<br>\r\n\t\t\r\n\t   <div class=\"row\" *ngFor=\"let X of Dates\">\r\n        \r\n          <div>&nbsp; &nbsp; {{X.date}} \r\n\t\t  \r\n\t    </div>\r\n\t\t</div>\r\n\t  \r\n\t   </div>\r\n\t  \r\n\t  \r\n\t  \r\n\t   <div class=\"control\">\r\n        <label for=\"Content\">Content</label>\r\n        <textarea ngModel [(ngModel)]='Content' name=\"Content\" type=\"text\" readonly></textarea>\r\n      </div>\r\n\t  \r\n\t  <div class=\"control\">\r\n        <button class=\"btn\" type=\"button\" (click)=\"Back()\">Back</button>\r\n      </div> \r\n\t  \r\n\t\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/view-unit/view-unit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/view-unit/view-unit.component.ts ***!
  \**************************************************/
/*! exports provided: ViewUnitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewUnitComponent", function() { return ViewUnitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewUnitComponent = /** @class */ (function () {
    function ViewUnitComponent(router, httpClient, _location) {
        this.router = router;
        this.httpClient = httpClient;
        this._location = _location;
        this.CurrentUnit = {};
        this.Title = "";
        this.Subject = "";
        this.Priority = "";
        this.Privacy = false;
        this.Tags = "";
        this.Privte = "Privte";
        this.Public = "Public";
        this.Content = "";
        this.Dates = [];
        this.CreationDate = "";
    }
    ViewUnitComponent.prototype.GetSchedule = function (Id) {
        var _this = this;
        var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json');
        this.httpClient.get("http://localhost:44724/api/MemorizeUnit/GetSchedule/" + Id).subscribe(function (data) {
            _this.Dates = Object.values(data);
            console.log(_this.Dates);
        }, function (err) {
            alert("Error");
        });
    };
    ViewUnitComponent.prototype.ngOnInit = function () {
        this.CurrentUnit = JSON.parse(localStorage.getItem('CurrentUnit'));
        this.GetSchedule(this.CurrentUnit.id);
        this.Title = this.CurrentUnit.title;
        this.Subject = this.CurrentUnit.subjectName;
        this.Priority = this.CurrentUnit.priority;
        this.Privacy = this.CurrentUnit.isPrivate;
        this.Tags = this.CurrentUnit.tags;
        this.Content = this.CurrentUnit.stringContent;
        this.CreationDate = this.CurrentUnit.creationDate;
        console.log(this.CreationDate);
    };
    ViewUnitComponent.prototype.Back = function () {
        this._location.back();
    };
    ViewUnitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-unit',
            template: __webpack_require__(/*! ./view-unit.component.html */ "./src/app/view-unit/view-unit.component.html"),
            styles: [__webpack_require__(/*! ./view-unit.component.css */ "./src/app/view-unit/view-unit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], ViewUnitComponent);
    return ViewUnitComponent;
}());



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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\NonSystemFile\WorkSpace\MemorizeHelper\MemorizeHelper-FrontEnd\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map