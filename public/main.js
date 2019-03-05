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

/***/ "./src/app/_helpers/must-match.validator.ts":
/*!**************************************************!*\
  !*** ./src/app/_helpers/must-match.validator.ts ***!
  \**************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/_models/exam.ts":
/*!*********************************!*\
  !*** ./src/app/_models/exam.ts ***!
  \*********************************/
/*! exports provided: Exam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exam", function() { return Exam; });
var Exam = /** @class */ (function () {
    function Exam(d, uid, pid) {
        this.date = d;
        this.user = [uid];
        this.patient = { "id": pid };
    }
    return Exam;
}());



/***/ }),

/***/ "./src/app/_models/index.ts":
/*!**********************************!*\
  !*** ./src/app/_models/index.ts ***!
  \**********************************/
/*! exports provided: User, Patient, Exam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./src/app/_models/user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user__WEBPACK_IMPORTED_MODULE_0__["User"]; });

/* harmony import */ var _patient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patient */ "./src/app/_models/patient.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Patient", function() { return _patient__WEBPACK_IMPORTED_MODULE_1__["Patient"]; });

/* harmony import */ var _exam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exam */ "./src/app/_models/exam.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Exam", function() { return _exam__WEBPACK_IMPORTED_MODULE_2__["Exam"]; });






/***/ }),

/***/ "./src/app/_models/patient.ts":
/*!************************************!*\
  !*** ./src/app/_models/patient.ts ***!
  \************************************/
/*! exports provided: Patient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Patient", function() { return Patient; });
var Patient = /** @class */ (function () {
    function Patient() {
        this.nome = "nuovo_paziente";
        this.cognome = "___";
        this.sesso = null;
        this.eta = 0;
        this.lateralita = null;
        this.luogonascita = "";
        this.professione = "";
        this.scolarita = 0;
        this.lingua = "";
        this.altro = "";
        this.diagnosi = "";
        this.data = "";
        this.esaminatore = "";
        this.esame = "";
    }
    Patient.prototype.isValid = function () {
        if (this.nome && this.cognome && this.sesso && this.eta && this.lateralita && this.diagnosi)
            return true;
        return false;
    };
    return Patient;
}());



/***/ }),

/***/ "./src/app/_models/user.ts":
/*!*********************************!*\
  !*** ./src/app/_models/user.ts ***!
  \*********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.id = "_ID_";
        this.username = "_USERNAME_";
        this.password = "_PASSWORD_";
        this.email = "_EMAIL_";
        this.name = "_NAME_";
        this.surname = "_SURNAME_";
    }
    User.prototype.isValid = function () {
        if (this.id && this.username && this.password && this.email)
            return true;
        return false;
    };
    return User;
}());



/***/ }),

/***/ "./src/app/_services/exam/exam.service.ts":
/*!************************************************!*\
  !*** ./src/app/_services/exam/exam.service.ts ***!
  \************************************************/
/*! exports provided: ExamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamService", function() { return ExamService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _models___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_models/ */ "./src/app/_models/index.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/user.service */ "./src/app/_services/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
var ExamService = /** @class */ (function () {
    function ExamService(userService, http) {
        this.userService = userService;
        this.http = http;
        this.last_exams_number = 5;
    }
    ExamService.prototype.getMyExamList = function () {
        var usr_id = this.userService.getLoggedUser().id;
        return this.http.get(API_URL + '/exam/?user=' + usr_id);
    };
    ExamService.prototype.getExam = function (id) {
        return this.http.get(API_URL + '/exam/' + id);
    };
    ExamService.prototype.loadAllMyExams = function () {
        var _this = this;
        this.getMyExamList().subscribe(function (response) {
            var data = JSON.parse(response._body);
            _this.allMyExams = data;
            _this.lastExams = data.slice(data.length - _this.last_exams_number);
        });
    };
    ExamService.prototype.getAllMyExams = function () {
        return this.allMyExams;
    };
    ExamService.prototype.getLastExams = function () {
        return this.lastExams;
    };
    ExamService.prototype.createNewExam = function (pid) {
        var usr = this.userService.getLoggedUser();
        if (usr) {
            this.activeExam = new _models___WEBPACK_IMPORTED_MODULE_3__["Exam"](new Date(), usr.id, pid);
            return this.http.post(API_URL + '/exam', this.activeExam);
        }
    };
    ExamService.prototype.setActive = function (id) {
        var _this = this;
        this.activeExamId = id;
        this.getExam(id).subscribe(function (data) {
            _this.activeExam = JSON.parse(data._body);
            _this.saveOnLocal(_this.activeExam);
            console.log("EXA service: ", _this.activeExam);
        }, function (error) { return console.log(error); });
    };
    ExamService.prototype.saveOnLocal = function (e) {
        this.activeExam = e;
        localStorage.setItem('activeExam', JSON.stringify(this.activeExam));
    };
    ExamService.prototype.loadFromLocal = function () {
        var exam = JSON.parse(localStorage.getItem('activeExam'));
        this.activeExam = exam;
        return this.activeExam;
    };
    ExamService.prototype.getActiveExam = function () {
        this.loadFromLocal();
        return this.activeExam;
    };
    ExamService.prototype.deleteExam = function (id) {
        return this.http.delete(API_URL + '/exam/' + id);
    };
    ExamService.prototype.saveExam = function (e) {
        return this.http.post(API_URL + '/exam/' + e.id, e);
    };
    ExamService.prototype.update = function () {
    };
    ExamService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ExamService);
    return ExamService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: UserService, ExamService, PatientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user/user.service */ "./src/app/_services/user/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]; });

/* harmony import */ var _exam_exam_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exam/exam.service */ "./src/app/_services/exam/exam.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExamService", function() { return _exam_exam_service__WEBPACK_IMPORTED_MODULE_1__["ExamService"]; });

/* harmony import */ var _patient_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patient/patient.service */ "./src/app/_services/patient/patient.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PatientService", function() { return _patient_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"]; });






/***/ }),

/***/ "./src/app/_services/patient/patient.service.ts":
/*!******************************************************!*\
  !*** ./src/app/_services/patient/patient.service.ts ***!
  \******************************************************/
/*! exports provided: PatientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientService", function() { return PatientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _models___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_models/ */ "./src/app/_models/index.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/user.service */ "./src/app/_services/user/user.service.ts");
/* harmony import */ var _exam_exam_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../exam/exam.service */ "./src/app/_services/exam/exam.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
var PatientService = /** @class */ (function () {
    function PatientService(userService, examService, http) {
        this.userService = userService;
        this.examService = examService;
        this.http = http;
    }
    PatientService.prototype.getPatient = function (id) {
        //console.log("asking for: ", id);
        return this.http.get(API_URL + '/patient/' + id);
    };
    PatientService.prototype.setActive = function (pid) {
        var _this = this;
        this.activePatientId = pid;
        this.getPatient(pid).subscribe(function (response) {
            _this.activePatient = JSON.parse(response._body);
            _this.saveOnLocal(_this.activePatient);
            console.log("PAT service: ", _this.activePatient);
        }, function (error) {
            console.log(error);
        });
    };
    PatientService.prototype.saveOnLocal = function (p) {
        this.activePatient = p;
        localStorage.setItem('activePatient', JSON.stringify(this.activePatient));
        this.loadFromLocal();
    };
    PatientService.prototype.loadFromLocal = function () {
        var patient = JSON.parse(localStorage.getItem('activePatient'));
        this.activePatient = patient;
        return this.activePatient;
    };
    PatientService.prototype.getActivePatient = function () {
        this.loadFromLocal();
        return this.activePatient;
    };
    PatientService.prototype.createNewPatient = function () {
        var new_pat = new _models___WEBPACK_IMPORTED_MODULE_3__["Patient"]();
        return this.http.post(API_URL + '/patient', new_pat);
    };
    PatientService.prototype.getMyPatientList = function () {
        this.examService.getMyExamList().subscribe(function (data) {
            var ex_list = JSON.parse(data._body);
            console.log(ex_list);
        });
    };
    PatientService.prototype.savePatient = function (p) {
        return this.http.post(API_URL + '/patient/' + p.id, p);
    };
    PatientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _exam_exam_service__WEBPACK_IMPORTED_MODULE_5__["ExamService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], PatientService);
    return PatientService;
}());



/***/ }),

/***/ "./src/app/_services/user/user.service.ts":
/*!************************************************!*\
  !*** ./src/app/_services/user/user.service.ts ***!
  \************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_models/ */ "./src/app/_models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
var UserService = /** @class */ (function () {
    function UserService(router, http) {
        this.router = router;
        this.http = http;
    }
    UserService.prototype.getAllUsers = function () {
        var _this = this;
        return this.http.get(API_URL + '/user').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            _this.allUsers = response.json().map(function (data) { return new _models___WEBPACK_IMPORTED_MODULE_5__["User"](); });
            return _this.allUsers;
        }));
    };
    UserService.prototype.getUser = function (uid) {
        //console.log("user.service's getUser()");
        return this.http.get(API_URL + '/user/' + uid);
    };
    UserService.prototype.updateUser = function (u) {
        return this.http.put(API_URL + '/user/' + u.id, u);
    };
    UserService.prototype.logIn = function (u, p) {
        var request_body = { username: u, password: p };
        return this.http.post(API_URL + '/user/login', request_body);
    };
    UserService.prototype.register = function (u) {
        return this.http.post(API_URL + '/user', u);
    };
    UserService.prototype.logUser = function (u) {
        this.loggedUser = u;
        this.loggedUserID = u.id;
        this.saveOnLocal();
    };
    UserService.prototype.getLoggedUser = function () {
        this.loadFromLocal();
        //if (this.loggedUserID != null) {
        return this.loggedUser;
        //}
        //else {
        //return false;
        //}
    };
    UserService.prototype.saveOnLocal = function () {
        if (this.loggedUser != null)
            localStorage.setItem('currentUser', JSON.stringify(this.loggedUser));
        else
            return false;
    };
    UserService.prototype.loadFromLocal = function () {
        var data = localStorage.getItem('currentUser');
        if (data) {
            this.loggedUser = JSON.parse(data);
            this.loggedUserID = this.loggedUser.id;
            return true;
        }
        else
            return false;
    };
    UserService.prototype.logout = function () {
        this.loggedUser = null;
        this.loggedUserID = null;
        localStorage.removeItem('currentUser');
        localStorage.removeItem('activePatient');
        localStorage.removeItem('activeExam');
    };
    UserService.prototype.isUserLogged = function () {
        return this.loadFromLocal();
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/alert-message/alert-message.component.html":
/*!************************************************************!*\
  !*** ./src/app/alert-message/alert-message.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-danger\" role=\"alert\">\n  <div class=\"alert-items\">\n    <div class=\"alert-item\">\n      <div class=\"alert-icon-wrapper\">\n        <clr-icon class=\"alert-icon\" shape=\"exclamation-circle\"></clr-icon>\n      </div>\n      <span class=\"alert-text\">{{this.msg}}</span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/alert-message/alert-message.component.scss":
/*!************************************************************!*\
  !*** ./src/app/alert-message/alert-message.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZXJ0LW1lc3NhZ2UvYWxlcnQtbWVzc2FnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/alert-message/alert-message.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/alert-message/alert-message.component.ts ***!
  \**********************************************************/
/*! exports provided: AlertMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertMessageComponent", function() { return AlertMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertMessageComponent = /** @class */ (function () {
    function AlertMessageComponent() {
    }
    AlertMessageComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AlertMessageComponent.prototype, "msg", void 0);
    AlertMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'alert-message',
            template: __webpack_require__(/*! ./alert-message.component.html */ "./src/app/alert-message/alert-message.component.html"),
            styles: [__webpack_require__(/*! ./alert-message.component.scss */ "./src/app/alert-message/alert-message.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AlertMessageComponent);
    return AlertMessageComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _logged_user_wrapper_logged_user_wrapper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logged-user-wrapper/logged-user-wrapper.component */ "./src/app/logged-user-wrapper/logged-user-wrapper.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _exam_list_view_exam_list_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exam-list-view/exam-list-view.component */ "./src/app/exam-list-view/exam-list-view.component.ts");
/* harmony import */ var _exam_view_exam_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exam-view/exam-view.component */ "./src/app/exam-view/exam-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'main', component: _logged_user_wrapper_logged_user_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["LoggedUserWrapperComponent"], children: [
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], outlet: 'logged' },
            { path: 'exams', component: _exam_list_view_exam_list_view_component__WEBPACK_IMPORTED_MODULE_5__["ExamListViewComponent"], outlet: 'logged' },
            { path: 'exam', component: _exam_view_exam_view_component__WEBPACK_IMPORTED_MODULE_6__["ExamViewComponent"], outlet: 'logged' }
        ] },
    { path: '', redirectTo: 'main', pathMatch: 'prefix' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"[{ outlets: { primary: ['login'] } }]\">login</a>\n<a [routerLink]=\"[{ outlets: { primary: ['main'] } }]\">main</a>\n<a [routerLink]=\"['main',{ outlets: { logged: ['dashboard'] } }]\">dashboard</a>\n\n<router-outlet name=\"primary\"></router-outlet>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'apacs-client';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm5/clr-angular.js");
/* harmony import */ var _user_component_user_component_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-component/user-component.component */ "./src/app/user-component/user-component.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register-form/register-form.component */ "./src/app/register-form/register-form.component.ts");
/* harmony import */ var _alert_message_alert_message_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./alert-message/alert-message.component */ "./src/app/alert-message/alert-message.component.ts");
/* harmony import */ var _logged_user_wrapper_logged_user_wrapper_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./logged-user-wrapper/logged-user-wrapper.component */ "./src/app/logged-user-wrapper/logged-user-wrapper.component.ts");
/* harmony import */ var _exam_view_exam_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./exam-view/exam-view.component */ "./src/app/exam-view/exam-view.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _exam_list_view_exam_list_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./exam-list-view/exam-list-view.component */ "./src/app/exam-list-view/exam-list-view.component.ts");
/* harmony import */ var _edit_patient_edit_patient_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./edit-patient/edit-patient.component */ "./src/app/edit-patient/edit-patient.component.ts");
/* harmony import */ var _interview_interview_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./interview/interview.component */ "./src/app/interview/interview.component.ts");
/* harmony import */ var _interview_item_interview_item_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./interview-item/interview-item.component */ "./src/app/interview-item/interview-item.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _user_component_user_component_component__WEBPACK_IMPORTED_MODULE_8__["UserComponentComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_10__["RegisterFormComponent"],
                _alert_message_alert_message_component__WEBPACK_IMPORTED_MODULE_11__["AlertMessageComponent"],
                _logged_user_wrapper_logged_user_wrapper_component__WEBPACK_IMPORTED_MODULE_12__["LoggedUserWrapperComponent"],
                _exam_view_exam_view_component__WEBPACK_IMPORTED_MODULE_13__["ExamViewComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"],
                _test_test_component__WEBPACK_IMPORTED_MODULE_15__["TestComponent"],
                _exam_list_view_exam_list_view_component__WEBPACK_IMPORTED_MODULE_16__["ExamListViewComponent"],
                _edit_patient_edit_patient_component__WEBPACK_IMPORTED_MODULE_17__["EditPatientComponent"],
                _interview_interview_component__WEBPACK_IMPORTED_MODULE_18__["InterviewComponent"],
                _interview_item_interview_item_component__WEBPACK_IMPORTED_MODULE_19__["InterviewItemComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                //AngularFontAwesomeModule,
                //NgbModule.forRoot()
                _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClarityModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"clr clr-col-12 clr-col-md-6 clr-col-lg-4\" style=\"display: inline-block; vertical-align: top;\">\r\n  <app-user-component></app-user-component>\r\n</div>\r\n<div class=\"clr clr-col-12 clr-col-md-6 clr-col-lg-4\" style=\"display: inline-block; vertical-align: top;\">\r\n  <app-test></app-test>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(userService) {
        this.userService = userService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.onPrint = function () {
        console.log(this.userService.getLoggedUser());
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/edit-patient/edit-patient.component.html":
/*!**********************************************************!*\
  !*** ./src/app/edit-patient/edit-patient.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form clrForm clrLayout=\"horizontal\" [formGroup]=\"patientForm\" (ngSubmit)=\"onSubmit()\">\n    \n    <h2>Dati Esame</h2>\n\n    <div class=\"form-group\">\n      <label>Esaminatore</label>\n      <input type=\"text\" formControlName=\"esaminatore\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.esaminatore.errors }\" />\n    </div>\n    <div class=\"errors\" *ngIf=\"submitted && f.esaminatore.errors\">\n      <alert-message *ngIf=\"f.esaminatore.errors.required\" msg=\"Il campo 'Esaminatore' è obbligatorio\"></alert-message>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Data</label>\n      <input type=\"date\" formControlName=\"data\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.data.errors }\" />\n    </div>\n    <div class=\"errors\" *ngIf=\"submitted && f.data.errors\">\n      <alert-message *ngIf=\"f.data.errors.required\" msg=\"Il campo 'Data' è obbligatorio\"></alert-message>\n    </div>\n\n\n\n    <h2>Dati Personali</h2>\n\n    <div class=\"form-group\">\n      <label>Nome</label>\n      <input type=\"text\" formControlName=\"nome\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.nome.errors }\" />\n    </div>\n    <div class=\"errors\" *ngIf=\"submitted && f.nome.errors\">\n      <alert-message *ngIf=\"f.nome.errors.required\" msg=\"Il campo 'Nome' è obbligatorio\"></alert-message>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Cognome</label>\n      <input type=\"text\" formControlName=\"cognome\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.cognome.errors }\" />\n    </div>\n    <div class=\"errors\" *ngIf=\"submitted && f.cognome.errors\">\n      <alert-message *ngIf=\"f.cognome.errors.required\" msg=\"Il campo 'Cognome' è obbligatorio\"></alert-message>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Sesso</label>\n      <div class=\"clr-control-container clr-control-inline\">\n        <div class=\"clr-radio-wrapper\">\n          <input type=\"radio\" id=\"sex-radio1\" formControlName=\"sesso\" value=\"true\" class=\"clr-radio\" [checked]=\"show_sex\">\n          <label for=\"sex-radio1\" class=\"clr-control-label\">M</label>\n        </div>\n        <div class=\"clr-radio-wrapper\">\n          <input type=\"radio\" id=\"sex-radio2\" formControlName=\"sesso\" value=\"false\" class=\"clr-radio\" [checked]=\"!show_sex\">\n          <label for=\"sex-radio2\" class=\"clr-control-label\">F</label>\n        </div>\n        <div class=\"clr-subtext-wrapper\">\n          <clr-icon class=\"clr-validate-icon\" shape=\"exclamation-circle\"></clr-icon>\n          <span class=\"clr-subtext\">Helper Text</span>\n        </div>\n      </div>\n      <div class=\"errors\" *ngIf=\"submitted && f.sesso.errors\">\n        <alert-message *ngIf=\"f.sesso.errors.required\" msg=\"Il campo 'Sesso' è obbligatorio\"></alert-message>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Età</label>\n      <input type=\"number\" formControlName=\"eta\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.eta.errors }\" />\n    </div>\n    <div class=\"errors\" *ngIf=\"submitted && f.eta.errors\">\n      <alert-message *ngIf=\"f.eta.errors.required\" msg=\"Il campo 'Età' è obbligatorio\"></alert-message>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Luogo di nascita</label>\n      <input type=\"text\" formControlName=\"luogonascita\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.luogonascita.errors }\" />\n    </div>\n    <div class=\"errors\" *ngIf=\"submitted && f.luogonascita.errors\">\n      <alert-message *ngIf=\"f.luogonascita.errors.required\" msg=\"Il campo 'Luogo di nascita' è obbligatorio\"></alert-message>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Professione</label>\n      <input type=\"text\" formControlName=\"professione\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.professione.errors }\" />\n    </div>\n    <div class=\"errors\" *ngIf=\"submitted && f.professione.errors\">\n      <alert-message *ngIf=\"f.professione.errors.required\" msg=\"Il campo 'Professione' è obbligatorio\"></alert-message>\n    </div>\n\n\n\n    <h2>Dati Clinici</h2>\n\n    <div class=\"form-group\">\n      <label>Lateralità</label>\n      <div class=\"clr-control-container clr-control-inline\">\n        <div class=\"clr-radio-wrapper\">\n          <input type=\"radio\" id=\"lat-radio1\" formControlName=\"lateralita\" value=\"true\" class=\"clr-radio\" [checked]=\"show_lat\">\n          <label for=\"lat-radio1\" class=\"clr-control-label\">DX</label>\n        </div>\n        <div class=\"clr-radio-wrapper\">\n          <input type=\"radio\" id=\"lat-radio2\" formControlName=\"lateralita\" value=\"false\" class=\"clr-radio\" [checked]=\"!show_lat\">\n          <label for=\"lat-radio2\" class=\"clr-control-label\">SX</label>\n        </div>\n        <div class=\"clr-subtext-wrapper\">\n          <clr-icon class=\"clr-validate-icon\" shape=\"exclamation-circle\"></clr-icon>\n          <span class=\"clr-subtext\">Helper Text</span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Lingua</label>\n      <input type=\"text\" formControlName=\"lingua\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lingua.errors }\" />\n    </div>\n    <div class=\"errors\" *ngIf=\"submitted && f.lingua.errors\">\n      <alert-message *ngIf=\"f.lingua.errors.required\" msg=\"Il campo 'Lingua' è obbligatorio\"></alert-message>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Scolarità</label>\n      <input type=\"number\" formControlName=\"scolarita\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.scolarita.errors }\" />\n    </div>\n    <div class=\"errors\" *ngIf=\"submitted && f.scolarita.errors\">\n      <alert-message *ngIf=\"f.scolarita.errors.required\" msg=\"Il campo 'Scolarità' è obbligatorio\"></alert-message>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Diagnosi</label>\n      <select clrSelect formControlName=\"diagnosi\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.diagnosi.errors }\" >\n        <option value=\"Nessun disturbo\" > Nessun disturbo </option>\n        <option value=\"Disturbo dello Spettro Autistico\" > Disturbo dello Spettro Autistico </option>\n        <option value=\"Malattia di Alzheimer\" > Malattia di Alzheimer </option>\n        <option value=\"Malattia di Parkinson\" > Malattia di Parkinson </option>\n        <option value=\"Schizofrenia\" > Schizofrenia </option>\n        <option value=\"Sclerosi Laterale Amiotrofica\" > Sclerosi Laterale Amiotrofica </option>\n        <option value=\"Trauma cranico\" > Trauma cranico </option>\n        <option value=\"Non nota\" > Non nota </option>\n        <option value=\"Multiple (specificare in &quot;Note&quot;)\"> Multiple (specificare in \"Note\") </option>\n        <option value=\"Altro... (da riportare in &quot;Note&quot;)\"> Altro... (da riportare in \"Note\") </option>\n      </select>\n    </div>\n    <div class=\"errors\" *ngIf=\"submitted && f.diagnosi.errors\">\n      <alert-message *ngIf=\"f.diagnosi.errors.required\" msg=\"Il campo 'Diagnosi' è obbligatorio\"></alert-message>\n    </div>\n\n\n    <h2>Note</h2>\n\n    <div class=\"form-group\">\n      <label for=\"altro\">Altre informazioni</label>\n      <div class=\"clr-control-container\">\n        <div class=\"clr-textarea-wrapper\">\n          <textarea clrTextarea formControlName=\"altro\" id=\"altro\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.altro.errors }\"></textarea>\n        </div>\n      </div>\n    </div>\n    <div class=\"errors\" *ngIf=\"submitted && f.altro.errors\">\n      <alert-message *ngIf=\"f.altro.errors.required\" msg=\"Il campo 'Altre informazioni' è obbligatorio\"></alert-message>\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-primary\">Salva dati</button>\n</form>\n\n\n<button class=\"btn\" (click)=\"printPat()\">Stampa actual-patient</button>\n<button class=\"btn\" (click)=\"printExam()\">Stampa actual-exam</button>\n"

/***/ }),

/***/ "./src/app/edit-patient/edit-patient.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/edit-patient/edit-patient.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtcGF0aWVudC9lZGl0LXBhdGllbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/edit-patient/edit-patient.component.ts":
/*!********************************************************!*\
  !*** ./src/app/edit-patient/edit-patient.component.ts ***!
  \********************************************************/
/*! exports provided: EditPatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPatientComponent", function() { return EditPatientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { ClarityModule, ClrFormsNextModule } from '@clr/angular';



var EditPatientComponent = /** @class */ (function () {
    function EditPatientComponent(route, patientService, examService, userService, formBuilder) {
        this.route = route;
        this.patientService = patientService;
        this.examService = examService;
        this.userService = userService;
        this.formBuilder = formBuilder;
    }
    EditPatientComponent.prototype.ngOnInit = function () {
        this.activeExam = this.examService.getActiveExam();
        this.activePatient = this.patientService.getActivePatient();
        this.loggedUser = this.userService.getLoggedUser();
        this.patientForm = this.formBuilder.group({
            //email: ['', [Validators.required, Validators.email]],
            //password: ['', [Validators.required, Validators.minLength(6)]],
            nome: [this.activePatient.nome],
            cognome: [this.activePatient.cognome],
            sesso: [this.activePatient.sesso],
            eta: [this.activePatient.eta],
            lateralita: [this.activePatient.lateralita],
            luogonascita: [this.activePatient.luogonascita],
            professione: [this.activePatient.professione],
            scolarita: [this.activePatient.scolarita],
            lingua: [this.activePatient.lingua],
            altro: [this.activePatient.altro],
            diagnosi: [this.activePatient.diagnosi],
            data: [('' + this.activeExam.date).substring(0, 10)],
            esaminatore: [this.loggedUser.name + " " + this.loggedUser.surname]
        });
        this.show_sex = this.activePatient.sesso; // ((this.activePatient.sesso == "true")||(this.activePatient.sesso == true));
        this.show_lat = this.activePatient.lateralita; // ((this.activePatient.lateralita == "true")||(this.activePatient.lateralita == true));
        console.log(this.show_sex, this.show_lat);
    };
    Object.defineProperty(EditPatientComponent.prototype, "f", {
        get: function () { return this.patientForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditPatientComponent.prototype.onSubmit = function () {
        if (confirm("Sicuro di voler salvare? L'azione non è reversibile")) {
            var control = this.patientForm.controls;
            var new_exam = this.activeExam;
            new_exam.date = new Date(control.data.value);
            var new_pat = this.activePatient;
            new_pat.nome = control.nome.value;
            new_pat.cognome = control.cognome.value;
            new_pat.sesso = (control.sesso.value == "true" || control.sesso.value == true);
            new_pat.eta = control.eta.value;
            new_pat.lateralita = (control.lateralita.value == "true" || control.lateralita.value == true);
            new_pat.luogonascita = control.luogonascita.value;
            new_pat.professione = control.professione.value;
            new_pat.scolarita = control.scolarita.value;
            new_pat.lingua = control.lingua.value;
            new_pat.altro = control.altro.value;
            new_pat.diagnosi = control.diagnosi.value;
            this.save(new_exam, new_pat);
        }
    };
    EditPatientComponent.prototype.save = function (e, p) {
        var _this = this;
        this.patientService.savePatient(p).subscribe(function (data) {
            var returnobj = (JSON.parse(data._body));
            console.log(returnobj);
            _this.patientService.saveOnLocal(returnobj);
        }, function (error) { return console.log(error); });
        this.examService.saveExam(e).subscribe(function (data) {
            var returnobj = (JSON.parse(data._body));
            console.log(returnobj);
            _this.examService.saveOnLocal(returnobj);
        }, function (error) { return console.log(error); });
        //console.log(e,p);
    };
    EditPatientComponent.prototype.printPat = function () {
        console.log(this.activePatient);
    };
    EditPatientComponent.prototype.printExam = function () {
        console.log(this.activeExam);
    };
    EditPatientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-patient',
            template: __webpack_require__(/*! ./edit-patient.component.html */ "./src/app/edit-patient/edit-patient.component.html"),
            styles: [__webpack_require__(/*! ./edit-patient.component.scss */ "./src/app/edit-patient/edit-patient.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services__WEBPACK_IMPORTED_MODULE_3__["PatientService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["ExamService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], EditPatientComponent);
    return EditPatientComponent;
}());



/***/ }),

/***/ "./src/app/exam-list-view/exam-list-view.component.html":
/*!**************************************************************!*\
  !*** ./src/app/exam-list-view/exam-list-view.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-icon btn-primary\" title=\"Modifica il tuo profilo\" (click)=\"createNewExam()\">\n    <clr-icon shape=\"plus\"></clr-icon> Crea un nuovo esame\n</button>\n<clr-datagrid [clrDgLoading]=\"loading\">\n    <clr-dg-column>ID esame</clr-dg-column>\n    <clr-dg-column [clrDgField]=\"'patient.nome'\">Nome Paziente\n      <clr-dg-string-filter [clrDgStringFilter]=\"nameFilter\"></clr-dg-string-filter>\n    </clr-dg-column>\n    <clr-dg-column [clrDgField]=\"'patient.nome'\">Cognome Paziente\n      <clr-dg-string-filter [clrDgStringFilter]=\"surnameFilter\"></clr-dg-string-filter>\n    </clr-dg-column>\n    <clr-dg-column [clrDgField]=\"'date'\" [clrDgSortOrder]=\"defaultSort\">Data\n      <clr-dg-string-filter [clrDgStringFilter]=\"dateFilter\"></clr-dg-string-filter>\n    </clr-dg-column>\n    <clr-dg-column>Azioni</clr-dg-column>\n\n    <clr-dg-row *clrDgItems=\"let exam of exams; let i=index\">\n        <clr-dg-cell>{{exam.id}}</clr-dg-cell>\n        <clr-dg-cell>{{exam.patient.nome}}</clr-dg-cell>\n        <clr-dg-cell>{{exam.patient.cognome}}</clr-dg-cell>\n        <clr-dg-cell>{{exam.date | date:\"dd/MM/yyyy\"}}</clr-dg-cell>\n        <clr-dg-cell>\n          <button class=\"btn btn-sm\" (click)=\"editExam(exam.id, exam.patient.id)\">\n            <clr-icon shape=\"pencil\"></clr-icon> edit\n          </button>\n          <button class=\"btn btn-danger-outline btn-sm\" (click)=\"delete_exam = true; new_id = exam.id\">\n          <!--<button class=\"btn btn-danger-outline btn-sm\" (click)=\"deleteExam(exam.id)\">-->\n            <clr-icon shape=\"trash\"></clr-icon> delete\n          </button>\n          \n        </clr-dg-cell>\n    </clr-dg-row>\n\n    <clr-dg-footer>\n        <clr-dg-pagination #pagination [clrDgTotalItems]=\"total\" [clrDgPageSize]=\"10\">\n            <clr-dg-page-size [clrPageSizeOptions]=\"[10,20,50,100]\">Users per page</clr-dg-page-size>\n            {{pagination.firstItem + 1}} - {{pagination.lastItem + 1}}\n            of {{pagination.totalItems}} exams\n        </clr-dg-pagination>\n    </clr-dg-footer>\n</clr-datagrid>\n\n<clr-modal [(clrModalOpen)]=\"delete_exam\" [clrModalSize]=\"'sm'\">\n    <h3 class=\"modal-title\">Attenzione</h3>\n    <div class=\"modal-body\">\n        <p>Stai per eliminare questo esame, l'azione non è reversibile. Sei sicuro?</p>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline\" (click)=\"delete_exam = false\">Annulla</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteExam(new_id); delete_exam = false\">Ok</button>\n    </div>\n</clr-modal>"

/***/ }),

/***/ "./src/app/exam-list-view/exam-list-view.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/exam-list-view/exam-list-view.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW0tbGlzdC12aWV3L2V4YW0tbGlzdC12aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/exam-list-view/exam-list-view.component.ts":
/*!************************************************************!*\
  !*** ./src/app/exam-list-view/exam-list-view.component.ts ***!
  \************************************************************/
/*! exports provided: ExamListViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamListViewComponent", function() { return ExamListViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm5/clr-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DateFilter = /** @class */ (function () {
    function DateFilter() {
        this.asd = false;
    }
    DateFilter.prototype.accepts = function (exam, search) {
        this.cf = "";
        this.date = new Date(exam.date);
        this.d = ("0" + this.date.getDate()).slice(-2);
        this.m = ("0" + (this.date.getMonth() + 1)).slice(-2);
        this.y = this.date.getFullYear();
        this.cf = this.d + "/" + this.m + "/" + this.y + " " + this.cf + this.d + "-" + this.m + "-" + this.y + " " + this.cf + this.d + "." + this.m + "." + this.y + " ";
        this.cf = this.cf + " " + this.y + "/" + this.m + "/" + this.d + " " + this.y + "-" + this.m + "-" + this.d + " " + this.y + "." + this.m + "." + this.d + " ";
        this.cf = this.cf + " " + this.m + "/" + this.d + "/" + this.y + " " + this.m + "-" + this.d + "-" + this.y + " " + this.m + "." + this.d + "." + this.y + " ";
        console.log(this.cf);
        return this.cf.includes(search);
    };
    return DateFilter;
}());
var NameFilter = /** @class */ (function () {
    function NameFilter() {
    }
    NameFilter.prototype.accepts = function (exam, search) {
        console.log(exam.patient.id);
        return (exam.patient.nome).toLowerCase().includes(search);
    };
    return NameFilter;
}());
var SurnameFilter = /** @class */ (function () {
    function SurnameFilter() {
    }
    SurnameFilter.prototype.accepts = function (exam, search) {
        return (exam.patient.cognome).toLowerCase().includes(search);
    };
    return SurnameFilter;
}());
var ExamListViewComponent = /** @class */ (function () {
    function ExamListViewComponent(router, examService, patientService) {
        this.router = router;
        this.examService = examService;
        this.patientService = patientService;
        this.patients = [];
        this.dateFilter = new DateFilter();
        this.nameFilter = new NameFilter();
        this.surnameFilter = new SurnameFilter();
        this.loaded_data = false;
        this.defaultSort = _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrDatagridSortOrder"].DESC;
    }
    ExamListViewComponent.prototype.ngOnInit = function () {
        this.refresh();
        //console.log(this.patients);
    };
    ExamListViewComponent.prototype.refresh = function () {
        var _this = this;
        this.examService.getMyExamList().subscribe(function (data) {
            _this.exams = JSON.parse(data._body);
            //this.patients = [];
            var pat_id = "";
            _this.total = _this.exams.length;
            var _loop_1 = function (exam) {
                pat_id = exam.patient.id;
                //console.log(pat_id);
                _this.patientService.getPatient(pat_id).subscribe(function (response) {
                    exam.patient = JSON.parse(response._body);
                });
            };
            for (var _i = 0, _a = _this.exams; _i < _a.length; _i++) {
                var exam = _a[_i];
                _loop_1(exam);
            }
            ;
            _this.loaded_data = true;
        });
        //console.log(this.patients);
    };
    ExamListViewComponent.prototype.editExam = function (eid, pid) {
        var _this = this;
        this.examService.setActive(eid);
        this.patientService.setActive(pid);
        //console.log(this.examService.getActiveExam(), this.patientService.getActivePatient());
        this.examService.getExam(eid).subscribe(function (_exam) {
            _this.patientService.getPatient(pid).subscribe(function (_pat) {
                _this.router.navigate(['main', { outlets: { logged: ['exam'] } }]);
            });
        });
    };
    ExamListViewComponent.prototype.deleteExam = function (e) {
        var _this = this;
        //alert(e);
        //if (confirm("Sicuro di voler eliminare questo esame? L'azione non è reversibile")) {
        this.examService.deleteExam(e).subscribe(function (response) {
            _this.refresh();
            console.log(response);
        }, function (errors) { return console.log(errors); });
        console.log("elimina ", e);
        //}
    };
    ExamListViewComponent.prototype.createNewExam = function () {
        var _this = this;
        this.patientService.createNewPatient().subscribe(function (response) {
            var pid = (JSON.parse(response._body)).id;
            _this.patientService.saveOnLocal(JSON.parse(response._body));
            _this.examService.createNewExam(pid).subscribe(function (data) {
                var new_exam = JSON.parse(data._body);
                console.log(new_exam);
                _this.examService.saveOnLocal(new_exam);
                //this.getMyLastExams(5);
                _this.refresh();
            });
        });
    };
    ExamListViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-exam-list-view',
            template: __webpack_require__(/*! ./exam-list-view.component.html */ "./src/app/exam-list-view/exam-list-view.component.html"),
            styles: [__webpack_require__(/*! ./exam-list-view.component.scss */ "./src/app/exam-list-view/exam-list-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services__WEBPACK_IMPORTED_MODULE_3__["ExamService"], _services__WEBPACK_IMPORTED_MODULE_3__["PatientService"]])
    ], ExamListViewComponent);
    return ExamListViewComponent;
}());



/***/ }),

/***/ "./src/app/exam-view/exam-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/exam-view/exam-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n<app-interview></app-interview>\n-->\n\n<app-edit-patient></app-edit-patient>"

/***/ }),

/***/ "./src/app/exam-view/exam-view.component.scss":
/*!****************************************************!*\
  !*** ./src/app/exam-view/exam-view.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW0tdmlldy9leGFtLXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/exam-view/exam-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/exam-view/exam-view.component.ts ***!
  \**************************************************/
/*! exports provided: ExamViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamViewComponent", function() { return ExamViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExamViewComponent = /** @class */ (function () {
    function ExamViewComponent() {
    }
    ExamViewComponent.prototype.ngOnInit = function () {
    };
    ExamViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-exam-view',
            template: __webpack_require__(/*! ./exam-view.component.html */ "./src/app/exam-view/exam-view.component.html"),
            styles: [__webpack_require__(/*! ./exam-view.component.scss */ "./src/app/exam-view/exam-view.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ExamViewComponent);
    return ExamViewComponent;
}());



/***/ }),

/***/ "./src/app/interview-item/interview-item.component.html":
/*!**************************************************************!*\
  !*** ./src/app/interview-item/interview-item.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li class=\"interview-item\" (click)=\"onClickItem()\">\n  <div class=\"item-top\">\n    <!--\n    <clr-icon class=\"item-icon\" shape=\"{{all_items[cat][item].icona}}\"></clr-icon>\n  -->\n    <clr-icon class=\"item-icon\" shape=\"pencil\"></clr-icon>\n    <span class=\"item-title\">{{all_items[cat][item].nome}}</span>\n  </div>\n  <div class=\"item-bottom\">\n    <div class=\"item-progress\" [hidden]=\"!countable\">\n      <div class=\"back\">\n        <button (click)=\"undo()\">\n          <clr-icon shape=\"undo\"></clr-icon>\n        </button>\n      </div>\n      <div class=\"progress bar\">\n        <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" [style.width]=\"stile\" attr.aria-valuenow=\"{{progress}}\" attr.aria-valuemin=\"{{min}}\" attr.aria-valuemax=\"{{max}}\">{{progress}} / {{max}}</div>\n      </div>\n    </div>\n    <div class=\"item-slider\" [hidden]=\"countable\">\n      <div class=\"back\">\n        <button (click)=\"undo()\">\n          <clr-icon shape=\"undo\"></clr-icon>\n        </button>\n      </div>\n      <div class=\"bar\">\n        <div>\n          <input type=\"range\" min=\"0\" max=\"2\" value=\"{{frequenza}}\" class=\"slider\" (change)=\"changeVal($event)\">\n        </div>\n        <div class=\"slider-label\">\n          <span class=\"left\">M</span>\n          <span class=\"center\">QV</span>\n          <span class=\"right\">S</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</li>\n"

/***/ }),

/***/ "./src/app/interview-item/interview-item.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/interview-item/interview-item.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li.interview-item {\n  list-style-type: none;\n  text-align: center;\n  padding: 0.5em;\n  margin: 0.5em;\n  cursor: pointer; }\n\nli.interview-item:hover {\n  background-color: rgba(0, 0, 0, 0.2); }\n\n.item-top {\n  width: 100%; }\n\n.item-bottom > div {\n  height: 3em; }\n\n.item-icon {\n  vertical-align: middle;\n  display: inline-block;\n  width: 35%;\n  font-size: 300%;\n  margin: 0 auto;\n  text-align: center; }\n\n.item-title {\n  vertical-align: middle;\n  display: inline-block;\n  width: 65%; }\n\n.back {\n  width: 20%;\n  float: left; }\n\n.back button {\n  height: 2em; }\n\n.progress {\n  height: 2em; }\n\n.bar {\n  width: 80%;\n  float: right; }\n\n.progress-bar {\n  height: 2em;\n  color: #333; }\n\n.slider {\n  -webkit-appearance: none;\n  width: 100%;\n  height: 1em;\n  background: #d3d3d3;\n  outline: none;\n  opacity: 0.7;\n  transition: opacity .2s; }\n\n.slider:hover {\n  opacity: 1; }\n\n.slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 25px;\n  height: 1em;\n  background: #4CAF50;\n  cursor: pointer; }\n\n.slider::-moz-range-thumb {\n  width: 25px;\n  height: 25px;\n  background: #4CAF50;\n  cursor: pointer; }\n\n.slider-label {\n  display: flex;\n  line-height: 1em;\n  margin-top: -0.4em; }\n\n.slider-label > span {\n  flex: 1; }\n\n.left {\n  text-align: left; }\n\n.center {\n  text-align: center; }\n\n.right {\n  text-align: right; }\n\n:host(.hidden input) {\n  opacity: 0.3;\n  cursor: none; }\n\n:host(.hidden > li) {\n  opacity: 0.3;\n  cursor: default; }\n\n:host(.hidden:hover > li) {\n  background-color: rgba(0, 0, 0, 0); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50ZXJ2aWV3LWl0ZW0vQzpcXHdvcmtzcGFjZVxcYXBhY3MtY2xpZW50L3NyY1xcYXBwXFxpbnRlcnZpZXctaXRlbVxcaW50ZXJ2aWV3LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZUFBZSxFQUFBOztBQUdqQjtFQUNFLG9DQUFpQyxFQUFBOztBQUduQztFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVO0VBQ1YsV0FBVSxFQUFBOztBQUdaO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFHZDtFQUNFLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBR2I7RUFDSSx3QkFBd0I7RUFDeEIsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFFWix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFDSSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBR25CO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxPQUFNLEVBQUE7O0FBR1I7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUdkO0VBQ0UsWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxrQ0FBK0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ludGVydmlldy1pdGVtL2ludGVydmlldy1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGkuaW50ZXJ2aWV3LWl0ZW0ge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMC41ZW07XHJcbiAgbWFyZ2luOiAwLjVlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmxpLmludGVydmlldy1pdGVtOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7XHJcbn1cclxuXHJcbi5pdGVtLXRvcCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pdGVtLWJvdHRvbT5kaXYge1xyXG4gIGhlaWdodDogM2VtO1xyXG59XHJcblxyXG4uaXRlbS1pY29uIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMzUlO1xyXG4gIGZvbnQtc2l6ZTogMzAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pdGVtLXRpdGxlIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNjUlO1xyXG59XHJcblxyXG4uYmFjayB7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBmbG9hdDpsZWZ0O1xyXG59XHJcblxyXG4uYmFjayBidXR0b24ge1xyXG4gIGhlaWdodDogMmVtO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3Mge1xyXG4gIGhlaWdodDogMmVtO1xyXG59XHJcblxyXG4uYmFyIHtcclxuICB3aWR0aDogODAlO1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnByb2dyZXNzLWJhciB7XHJcbiAgaGVpZ2h0OiAyZW07XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5zbGlkZXIge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDFlbTtcclxuICAgIGJhY2tncm91bmQ6ICNkM2QzZDM7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycztcclxufVxyXG5cclxuLnNsaWRlcjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDFlbTtcclxuICAgIGJhY2tncm91bmQ6ICM0Q0FGNTA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zbGlkZXI6Oi1tb3otcmFuZ2UtdGh1bWIge1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNENBRjUwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2xpZGVyLWxhYmVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgbWFyZ2luLXRvcDogLTAuNGVtO1xyXG59XHJcbi5zbGlkZXItbGFiZWwgPiBzcGFuIHtcclxuICBmbGV4OjE7XHJcbn1cclxuXHJcbi5sZWZ0IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbjpob3N0KC5oaWRkZW4gaW5wdXQpIHtcclxuICBvcGFjaXR5OiAwLjM7XHJcbiAgY3Vyc29yOiBub25lO1xyXG59XHJcblxyXG46aG9zdCguaGlkZGVuPmxpKSB7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuOmhvc3QoLmhpZGRlbjpob3Zlcj5saSkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/interview-item/interview-item.component.ts":
/*!************************************************************!*\
  !*** ./src/app/interview-item/interview-item.component.ts ***!
  \************************************************************/
/*! exports provided: InterviewItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterviewItemComponent", function() { return InterviewItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { ITEMS } from '../mock-items';
var InterviewItemComponent = /** @class */ (function () {
    function InterviewItemComponent() {
        this.active = true;
        this.progress = 0;
        this.min = 0;
        this.max = 20;
        this.all_items_default = [
            [
                { id: 0, i: 0, j: 0, nome: 'Errore - Questo componente non esiste', icona: 'exclamation-triangle', m: true, qv: false, s: false, progress: 0, punteggio: 0, countable: true },
            ],
            [
                { id: 11, i: 1, j: 1, nome: "Anomie", icona: 'commenting', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: true },
                { id: 12, i: 1, j: 2, nome: "Agrammatismo", icona: 'comment-o', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: true },
                { id: 13, i: 1, j: 3, nome: "Parafasie fonemiche", icona: 'forumbee', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: true },
                { id: 14, i: 1, j: 4, nome: "Parafasie semantiche", icona: 'indent', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: true },
                { id: 15, i: 1, j: 5, nome: "Circonlocuzioni", icona: 'repeat', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: true },
            ],
            [
                { id: 21, i: 2, j: 1, nome: "Ripetizioni ", icona: 'copy', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: true },
                { id: 22, i: 2, j: 2, nome: "Frasi incomplete", icona: 'times-rectangle', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: true },
                { id: 23, i: 2, j: 3, nome: "Ecolalia", icona: 'feed', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: true },
                { id: 24, i: 2, j: 4, nome: "Coprolalia", icona: 'warning', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: true },
            ],
            [
                { id: 31, i: 3, j: 1, nome: "Difficoltà nelle risposte sì/no", icona: 'map-signs', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: true },
                { id: 32, i: 3, j: 2, nome: "Tendenza ad essere sotto-informativo", icona: 'sort-amount-desc', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: true },
                { id: 33, i: 3, j: 3, nome: "Tendenza ad essere sovra-informativo", icona: 'line-chart', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: true },
                { id: 34, i: 3, j: 4, nome: "Mancanza di iniziativa verbale", icona: 'user-times', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: false },
            ],
            [
                { id: 41, i: 4, j: 1, nome: "Assenza o uso errato di legami coesivi", icona: 'handshake-o', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: true },
                { id: 42, i: 4, j: 2, nome: "Assenza di referenti", icona: 'crosshairs', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: true },
                { id: 43, i: 4, j: 3, nome: "Ordine errato degli elementi", icona: 'list-ul', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: true },
                { id: 44, i: 4, j: 4, nome: "Cambio di argomento ingiustificolo", icona: 'exclamation', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: true },
            ],
            [
                { id: 51, i: 5, j: 1, nome: "Velocità di eloquio alterata", icona: 'fast-forward', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: false },
                { id: 52, i: 5, j: 2, nome: "Intonazione alterata", icona: 'volume-up', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: false },
                { id: 53, i: 5, j: 3, nome: "Mancanza contatto visivo", icona: 'eye-slash', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: false },
                { id: 54, i: 5, j: 4, nome: "Espressione facciale fissa", icona: 'meh-o', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: false },
                { id: 55, i: 5, j: 5, nome: "Abuso gesti compensativi", icona: 'signing', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: false },
            ]
        ];
    }
    InterviewItemComponent.prototype.ngOnInit = function () {
        // ADJUST item index
        this.item = this.item - 1;
        // Control CAT and ITEM indexes
        if ((this.col < 1) || (this.col > 5)) {
            this.col = 0;
            this.item = 0;
        }
        if ((this.item < 0) || (this.item > 4)) {
            this.col = 0;
            this.item = 0;
        }
        if (!((this.col == 1) || (this.col == 5)) && (this.item == 4)) {
            this.col = 0;
            this.item = 0;
        }
        this.id = this.col + "" + (this.item + 1);
        // LOAD DATA
        var load = localStorage.getItem('exam' + this.id);
        this.all_items = this.all_items_default;
        if (load != null) {
            this.all_items[this.col][this.item] = JSON.parse(load);
            //console.log("Saved data loaded ");
        }
        else {
            //console.log("default data loaded");
        }
        // Update actual item to saved values
        this.m = this.all_items[this.col][this.item].m;
        this.qv = this.all_items[this.col][this.item].qv;
        this.s = this.all_items[this.col][this.item].s;
        this.nome = this.all_items[this.col][this.item].nome;
        this.punteggio = this.all_items[this.col][this.item].punteggio;
        this.frequenza = 2 - this.punteggio;
        this.progress = this.all_items[this.col][this.item].progress;
        this.countable = this.all_items[this.col][this.item].countable;
        this.stile = (this.progress) / (this.max) * 100 + "%";
        //console.log(this.all_items[this.col][this.item].punteggio);
    };
    InterviewItemComponent.prototype.onClickItem = function () {
        if (this.active) {
            if (this.countable) {
                this.editProgress(+1);
            }
            else {
                this.increaseSlider();
            }
        }
        this.clear();
    };
    InterviewItemComponent.prototype.undo = function () {
        if (this.active) {
            if (this.countable) {
                this.editProgress(-2);
            }
            else {
                this.decreaseSlider();
                this.decreaseSlider();
            }
        }
        //this.clear();
    };
    InterviewItemComponent.prototype.editProgress = function (n) {
        this.progress += n;
        this.stile = (this.progress) / (this.max) * 100 + "%";
    };
    InterviewItemComponent.prototype.changeVal = function (e) {
        if (this.active && !this.countable) {
            this.frequenza = e.target.value;
            this.decreaseSlider();
        }
        else if (!this.active) {
            e.target.value = this.frequenza;
        }
    };
    InterviewItemComponent.prototype.increaseSlider = function () {
        this.frequenza++;
        this.punteggio--;
    };
    InterviewItemComponent.prototype.decreaseSlider = function () {
        this.frequenza--;
        this.punteggio++;
    };
    InterviewItemComponent.prototype.clear = function () {
        if (this.countable) {
            if (this.progress < this.min)
                this.progress = this.min;
            if (this.progress > this.max)
                this.progress = this.max;
            if (this.progress > 5) {
                this.punteggio = 0;
                this.frequenza = 2;
                this.s = true, this.m = false, this.qv = false;
            }
            else if (this.progress > 0) {
                this.punteggio = 1;
                this.frequenza = 1;
                this.s = false, this.m = false, this.qv = true;
            }
            else if (this.progress <= 0) {
                this.punteggio = 2;
                this.frequenza = 0;
                this.s = false, this.m = true, this.qv = false;
            }
        }
        else {
            if (this.frequenza > 2) {
                this.frequenza = 2;
                this.punteggio = 0;
            }
            else if (this.frequenza < 0) {
                this.frequenza = 0;
                this.punteggio = 2;
            }
            if (this.frequenza == 2)
                this.s = true, this.m = false, this.qv = false, this.punteggio = 0;
            if (this.frequenza == 1)
                this.s = false, this.m = false, this.qv = true, this.punteggio = 1;
            if (this.frequenza == 0)
                this.s = false, this.m = true, this.qv = false, this.punteggio = 2;
        }
    };
    InterviewItemComponent.prototype.save = function () {
        this.all_items[this.col][this.item].m = this.m;
        this.all_items[this.col][this.item].qv = this.qv;
        this.all_items[this.col][this.item].s = this.s;
        this.all_items[this.col][this.item].punteggio = this.punteggio;
        this.all_items[this.col][this.item].progress = this.progress;
        localStorage.setItem('exam' + this.id, JSON.stringify(this.all_items[this.col][this.item]));
    };
    InterviewItemComponent.prototype.enable = function () {
        this.active = true;
    };
    InterviewItemComponent.prototype.disable = function () {
        this.active = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], InterviewItemComponent.prototype, "col", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], InterviewItemComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], InterviewItemComponent.prototype, "active", void 0);
    InterviewItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-interview-item',
            template: __webpack_require__(/*! ./interview-item.component.html */ "./src/app/interview-item/interview-item.component.html"),
            styles: [__webpack_require__(/*! ./interview-item.component.scss */ "./src/app/interview-item/interview-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InterviewItemComponent);
    return InterviewItemComponent;
}());



/***/ }),

/***/ "./src/app/interview/interview.component.html":
/*!****************************************************!*\
  !*** ./src/app/interview/interview.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  interview works!\n</p>\n\n<div>\n  <div class=\"audio-bar\">\n    <button class=\"btn btn-success\" (click)=\"startRegistration()\" [disabled]=\"registration_on\">Avvia registrazione</button>\n    <button class=\"btn btn-warning\" (click)=\"stopRegistration()\" [disabled]=\"!registration_on\">Ferma registrazione</button>\n  </div>\n  <div class=\"saving-bar\">\n    <button class=\"btn btn-success\" (click)=\"onSubmit()\" title=\"Salva i dati\"><clr-icon size=\"16\" shape=\"save\"></clr-icon></button>\n    <button class=\"btn btn-warning\" (click)=\"clearData()\" title=\"Elimina i dati\"><clr-icon size=\"16\" shape=\"times-rectangle-o\"></clr-icon></button>\n  </div>\n</div>\n<div *ngIf=\"registration_on\" class=\"microphone-control\" (click)=\"toggleRegistration()\">\n  <div class=\"registration on\">\n    <clr-icon size=\"36\" shape=\"microphone\"></clr-icon>\n  </div>\n  <div class=\"registration\">\n    <clr-icon size=\"36\" shape=\"pause\"></clr-icon>\n  </div>\n</div>\n<div *ngIf=\"!registration_on\" class=\"microphone-control\" (click)=\"toggleRegistration()\">\n  <div class=\"registration off\">\n    <clr-icon size=\"36\" shape=\"microphone\"></clr-icon>\n  </div>\n  <div class=\"registration\">\n    <clr-icon size=\"36\" shape=\"play\"></clr-icon>\n  </div>\n</div>\n\n<div class=\"grid\">\n\n  <ul class=\"col blue-bg\">\n    <li *ngFor=\"let item of all_items[1]; index as i\">\n      <app-interview-item [col]=1 [item]=i+1 [active]=\"false\" [ngClass]=\"{'hidden': !registration_on}\"></app-interview-item>\n    </li>\n  </ul>\n\n  <ul class=\"col yellow-bg\">\n    <li *ngFor=\"let item of all_items[2]; index as i\">\n      <app-interview-item [col]=2 [item]=i+1 [active]=\"false\" [ngClass]=\"{'hidden': !registration_on}\"></app-interview-item>\n    </li>\n  </ul>\n\n  <ul class=\"col red-bg\">\n    <li *ngFor=\"let item of all_items[3]; index as i\">\n      <app-interview-item [col]=3 [item]=i+1 [active]=\"false\" [ngClass]=\"{'hidden': !registration_on}\"></app-interview-item>\n    </li>\n  </ul>\n\n  <ul class=\"col green-bg\">\n    <li *ngFor=\"let item of all_items[4]; index as i\">\n      <app-interview-item [col]=4 [item]=i+1 [active]=\"false\" [ngClass]=\"{'hidden': !registration_on}\"></app-interview-item>\n    </li>\n  </ul>\n\n  <ul class=\"col grey-bg\">\n    <li *ngFor=\"let item of all_items[5]; index as i\">\n      <app-interview-item [col]=5 [item]=i+1 [active]=\"false\" [ngClass]=\"{'hidden': !registration_on}\"></app-interview-item>\n    </li>\n  </ul>\n\n</div>\n"

/***/ }),

/***/ "./src/app/interview/interview.component.scss":
/*!****************************************************!*\
  !*** ./src/app/interview/interview.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blue-bg {\n  background-color: #7da8ed; }\n\n.green-bg {\n  background-color: #68e284; }\n\n.red-bg {\n  background-color: #ff7272; }\n\n.yellow-bg {\n  background-color: #ffeb54; }\n\n.grey-bg {\n  background-color: #d8d8d8; }\n\ndiv.grid {\n  display: flex;\n  width: 100%; }\n\nul.col {\n  flex: 1;\n  margin: 0;\n  padding: 0; }\n\nli {\n  list-style-type: none; }\n\n.audio-bar, .saving-bar {\n  width: 50%;\n  margin: 0;\n  float: left; }\n\n.saving-bar {\n  text-align: right; }\n\n.saving-bar button {\n  display: inline-block; }\n\ndiv.registration {\n  width: 60px;\n  height: 60px;\n  padding: 6px;\n  text-align: center;\n  border-radius: 50%;\n  float: left; }\n\n.registration.on {\n  background-color: red; }\n\n.registration.off {\n  background-color: grey; }\n\ndiv.microphone-control {\n  clear: both; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50ZXJ2aWV3L0M6XFx3b3Jrc3BhY2VcXGFwYWNzLWNsaWVudC9zcmNcXGFwcFxcaW50ZXJ2aWV3XFxpbnRlcnZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSx5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSx5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSx5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxhQUFhO0VBQ2IsV0FDRixFQUFBOztBQUVBO0VBQ0UsT0FBTztFQUNQLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBR1o7RUFDRSxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVcsRUFBQTs7QUFHYjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUdiO0VBQ0UscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0Usc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaW50ZXJ2aWV3L2ludGVydmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibHVlLWJnIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2RhOGVkO1xyXG59XHJcbi5ncmVlbi1iZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4ZTI4NDtcclxufVxyXG4ucmVkLWJnIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3MjcyO1xyXG59XHJcbi55ZWxsb3ctYmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmViNTQ7XHJcbn1cclxuLmdyZXktYmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGQ4ZDg7XHJcbn1cclxuXHJcbmRpdi5ncmlkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlXHJcbn1cclxuXHJcbnVsLmNvbCB7XHJcbiAgZmxleDogMTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxubGkge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuLmF1ZGlvLWJhciwgLnNhdmluZy1iYXIge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uc2F2aW5nLWJhciB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5zYXZpbmctYmFyIGJ1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5kaXYucmVnaXN0cmF0aW9uIHtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5yZWdpc3RyYXRpb24ub24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLnJlZ2lzdHJhdGlvbi5vZmYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbn1cclxuXHJcbmRpdi5taWNyb3Bob25lLWNvbnRyb2wge1xyXG4gIGNsZWFyOiBib3RoO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/interview/interview.component.ts":
/*!**************************************************!*\
  !*** ./src/app/interview/interview.component.ts ***!
  \**************************************************/
/*! exports provided: InterviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterviewComponent", function() { return InterviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _interview_item_interview_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interview-item/interview-item.component */ "./src/app/interview-item/interview-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { APIService } from  '../api.service';
var InterviewComponent = /** @class */ (function () {
    //constructor(private  apiService:  APIService) { }
    function InterviewComponent() {
        this.registration_on = false;
        this.all_items = [
            [
                { id: 0, i: 0, j: 0, nome: 'Errore - Questo componente non esiste', icona: 'exclamation-triangle', m: true, qv: false, s: false, progress: 0, punteggio: 0, countable: true },
            ],
            [
                { id: 11, i: 1, j: 1, nome: "Anomie", icona: 'commenting', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: true },
                { id: 12, i: 1, j: 2, nome: "Agrammatismo", icona: 'comment-o', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: true },
                { id: 13, i: 1, j: 3, nome: "Parafasie fonemiche", icona: 'forumbee', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: true },
                { id: 14, i: 1, j: 4, nome: "Parafasie semantiche", icona: 'indent', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: true },
                { id: 15, i: 1, j: 5, nome: "Circonlocuzioni", icona: 'repeat', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: true },
            ],
            [
                { id: 21, i: 2, j: 1, nome: "Ripetizioni ", icona: 'copy', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: true },
                { id: 22, i: 2, j: 2, nome: "Frasi incomplete", icona: 'times-rectangle', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: true },
                { id: 23, i: 2, j: 3, nome: "Ecolalia", icona: 'feed', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: true },
                { id: 24, i: 2, j: 4, nome: "Coprolalia", icona: 'warning', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: true },
            ],
            [
                { id: 31, i: 3, j: 1, nome: "Difficoltà nelle risposte sì/no", icona: 'map-signs', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: true },
                { id: 32, i: 3, j: 2, nome: "Tendenza ad essere sotto-informativo", icona: 'sort-amount-desc', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: true },
                { id: 33, i: 3, j: 3, nome: "Tendenza ad essere sovra-informativo", icona: 'line-chart', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: true },
                { id: 34, i: 3, j: 4, nome: "Mancanza di iniziativa verbale", icona: 'user-times', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: false },
            ],
            [
                { id: 41, i: 4, j: 1, nome: "Assenza o uso errato di legami coesivi", icona: 'handshake-o', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: true },
                { id: 42, i: 4, j: 2, nome: "Assenza di referenti", icona: 'crosshairs', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: true },
                { id: 43, i: 4, j: 3, nome: "Ordine errato degli elementi", icona: 'list-ul', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: true },
                { id: 44, i: 4, j: 4, nome: "Cambio di argomento ingiustificato", icona: 'exclamation', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: true },
            ],
            [
                { id: 51, i: 5, j: 1, nome: "Velocità di eloquio alterata", icona: 'fast-forward', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: false },
                { id: 52, i: 5, j: 2, nome: "Intonazione alterata", icona: 'volume-up', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: false },
                { id: 53, i: 5, j: 3, nome: "Mancanza contatto visivo", icona: 'eye-slash', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: false },
                { id: 54, i: 5, j: 4, nome: "Espressione facciale fissa", icona: 'meh-o', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: false },
                { id: 55, i: 5, j: 5, nome: "Abuso gesti compensativi", icona: 'signing', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: false },
            ]
        ];
    }
    InterviewComponent.prototype.ngOnInit = function () {
        //this.loadData();
        //this.loadPalette();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_interview_item_interview_item_component__WEBPACK_IMPORTED_MODULE_1__["InterviewItemComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], InterviewComponent.prototype, "children", void 0);
    InterviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-interview',
            template: __webpack_require__(/*! ./interview.component.html */ "./src/app/interview/interview.component.html"),
            styles: [__webpack_require__(/*! ./interview.component.scss */ "./src/app/interview/interview.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InterviewComponent);
    return InterviewComponent;
}());



/***/ }),

/***/ "./src/app/logged-user-wrapper/logged-user-wrapper.component.html":
/*!************************************************************************!*\
  !*** ./src/app/logged-user-wrapper/logged-user-wrapper.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n    <div class=\"alert alert-app-level\">\n        [Spazio per gli alert!]\n    </div>\n    <header class=\"header header-6\">\n          <div class=\"branding\">\n            <a href=\"...\" class=\"nav-link\">\n                <clr-icon shape=\"bug\"></clr-icon>\n                <span class=\"title\">APACS</span>\n            </a>\n          </div>\n          <div class=\"header-nav\">\n            <a [routerLink]=\"[{ outlets: { logged: ['dashboard'] } }]\" outletName=[logged] routerLinkActive=\"active\" class=\"nav-link nav-text\">Dashboard</a>\n            <a [routerLink]=\"[{ outlets: { logged: ['exams'] } }]\" outletName=[logged] routerLinkActive=\"active\" class=\"nav-link nav-text\">Esami</a>\n          </div>\n          <div class=\"header-actions\">\n            <clr-dropdown>\n                <button class=\"nav-icon\" clrDropdownTrigger>\n                    <clr-icon shape=\"user\"></clr-icon>\n                    <clr-icon shape=\"caret down\"></clr-icon>\n                </button>\n                <clr-dropdown-menu *clrIfOpen clrPosition=\"bottom-right\">\n                    <a (click)=\"basic = true\" clrDropdownItem>Log out</a>\n                </clr-dropdown-menu>\n            </clr-dropdown>\n          </div>\n\n    </header>\n    <nav class=\"subnav\">\n        [subnav]\n    </nav>\n    <div class=\"content-container\">\n        <div class=\"content-area\">\n          <router-outlet name=\"logged\"></router-outlet>\n        </div>\n    </div>\n</div>\n\n<clr-modal [(clrModalOpen)]=\"basic\" [clrModalSize]=\"'sm'\">\n    <h3 class=\"modal-title\">Attenzione</h3>\n    <div class=\"modal-body\">\n        <p>Stai per effettuare il Logout. Sei sicuro?</p>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline\" (click)=\"basic = false\">Annulla</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"logout()\">Ok</button>\n    </div>\n</clr-modal>\n"

/***/ }),

/***/ "./src/app/logged-user-wrapper/logged-user-wrapper.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/logged-user-wrapper/logged-user-wrapper.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2dlZC11c2VyLXdyYXBwZXIvbG9nZ2VkLXVzZXItd3JhcHBlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/logged-user-wrapper/logged-user-wrapper.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/logged-user-wrapper/logged-user-wrapper.component.ts ***!
  \**********************************************************************/
/*! exports provided: LoggedUserWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedUserWrapperComponent", function() { return LoggedUserWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoggedUserWrapperComponent = /** @class */ (function () {
    function LoggedUserWrapperComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    LoggedUserWrapperComponent.prototype.ngOnInit = function () {
        //this.router.navigate(['main',{ outlets: { logged: ['dashboard'] } }]);
        this.checkUser();
    };
    LoggedUserWrapperComponent.prototype.checkUser = function () {
        //console.log("is user logged? ",this.userService.isUserLogged());
        if (!this.userService.isUserLogged()) {
            this.router.navigate(['login']);
        }
    };
    LoggedUserWrapperComponent.prototype.logout = function () {
        this.userService.logout();
        this.router.navigate(['login']);
    };
    LoggedUserWrapperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logged-user-wrapper',
            template: __webpack_require__(/*! ./logged-user-wrapper.component.html */ "./src/app/logged-user-wrapper/logged-user-wrapper.component.html"),
            styles: [__webpack_require__(/*! ./logged-user-wrapper.component.scss */ "./src/app/logged-user-wrapper/logged-user-wrapper.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], LoggedUserWrapperComponent);
    return LoggedUserWrapperComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\">\n    <form class=\"login\">\n        <label class=\"title\">\n            <h3 class=\"welcome\">Benvenuti in</h3>\n            APACS\n            <h5 class=\"hint\">Utilizza le tue credenziali per accedere agli esami che hai effettuato, oppure registrati per ottenere un account.</h5>\n        </label>\n        <div class=\"login-group\">\n            <input class=\"username\" name=\"username\" type=\"text\" id=\"login_username\" placeholder=\"Username\" [(ngModel)]=\"this.username\">\n            <input class=\"password\" name=\"password\" type=\"password\" id=\"login_password\" placeholder=\"Password\" [(ngModel)]=\"this.password\">\n            <div class=\"checkbox\">\n                <input type=\"checkbox\" id=\"rememberme\">\n                <label for=\"rememberme\">\n                    Ricordami\n                </label>\n            </div>\n            <div class=\"error active\" [hidden]=\"!this.wrongCredential\">\n              Username o password non validi\n            </div>\n            <div class=\"error active\" [hidden]=\"!this.missingCredential\">\n              Username o password mancanti\n            </div>\n            <div class=\"error active\" [hidden]=\"!this.otherError\">\n              {{this.error}}\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onSubmit()\">LOG IN</button>\n            <a class=\"signup link-pointer\" (click)=\"newUserModal = true\">Registrati</a>\n        </div>\n    </form>\n</div>\n\n<clr-modal [(clrModalOpen)]=\"newUserModal\" class=\"modal-dialog modal-xl\">\n  <h3 class=\"modal-title\">Registrazione nuovo utente</h3>\n  <div class=\"modal-body\">\n    <app-register-form></app-register-form>\n  </div>\n</clr-modal>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

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
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.wrongCredential = false;
        this.missingCredential = false;
        this.otherError = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.userService.isUserLogged()) {
            this.router.navigate(['main', { outlets: { logged: ['dashboard'] } }]);
        }
    };
    LoginComponent.prototype.onSubmit = function () {
        this.tryLogin();
    };
    LoginComponent.prototype.tryLogin = function () {
        var _this = this;
        this.userService.logIn(this.username, this.password).subscribe(function (response) {
            _this.onSuccess(response);
        }, function (error) {
            _this.onFail(error);
        });
    };
    LoginComponent.prototype.onSuccess = function (r) {
        var _this = this;
        //console.log("Login effettuata correttamente.");
        var uid = JSON.parse(r._body).uid;
        this.userService.getUser(uid).subscribe(function (data) {
            var usr = JSON.parse(data._body);
            _this.userService.logUser(usr);
            _this.router.navigate(['main', { outlets: { logged: ['dashboard'] } }]);
        });
    };
    LoginComponent.prototype.onFail = function (e) {
        console.log("Fail on login: ", e);
        if (e.status == "400") {
            this.missingCredential = true;
        }
        else if (e.status == "401") {
            this.clean();
            this.wrongCredential = true;
        }
        else {
            this.clean();
            this.otherError = true;
            this.error = "http error " + e.status + " - " + JSON.parse(e._body).message;
        }
    };
    LoginComponent.prototype.checkUser = function () {
        if (this.userService.isUserLogged()) {
            return true;
        }
        return false;
    };
    LoginComponent.prototype.clean = function () {
        this.wrongCredential = false;
        this.missingCredential = false;
        this.otherError = false;
        this.error = "";
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register-form/register-form.component.html":
/*!************************************************************!*\
  !*** ./src/app/register-form/register-form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form clrForm clrLayout=\"vertical\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label>Username</label>\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n    </div>\n    <div class=\"errors\" *ngIf=\"submitted && f.username.errors\">\n      <alert-message *ngIf=\"f.username.errors.required\" msg=\"Il campo 'Username' è obbligatorio\"></alert-message>\n    </div>\n\n    <div class=\"form-group\">\n        <label>Email</label>\n        <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n    </div>\n    <div class=\"errors\" *ngIf=\"f.email.errors\">\n      <alert-message *ngIf=\"submitted && f.email.errors.required\" msg=\"Il campo 'Email' è obbligatorio\"></alert-message>\n      <alert-message *ngIf=\"f.email.errors.email\" msg=\"Indirizzo email non valido\"></alert-message>\n    </div>\n\n    <div class=\"form-group\">\n        <label>Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n    </div>\n    <div class=\"errors\" *ngIf=\"f.password.errors\">\n      <alert-message *ngIf=\"submitted && f.password.errors.required\" msg=\"Il campo 'Password' è obbligatorio\"></alert-message>\n      <alert-message *ngIf=\"f.password.errors.minlength\" msg=\"La password dev'essere lunga almeno 6 caratteri\"></alert-message>\n    </div>\n\n\n    <div class=\"form-group\">\n        <label>Conferma Password</label>\n        <input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\" />\n    </div>\n    <div class=\"errors\" *ngIf=\"f.confirmPassword.errors\">\n      <alert-message *ngIf=\"submitted && f.confirmPassword.errors.required\" msg=\"Il campo 'Conferma password' è obbligatorio\"></alert-message>\n      <alert-message *ngIf=\"f.confirmPassword.errors.mustMatch\" msg=\"Le due password devono essere uguali\"></alert-message>\n    </div>\n\n    <div class=\"form-group\">\n        <label>Nome</label>\n        <input type=\"text\" formControlName=\"name\" class=\"form-control\" />\n    </div>\n    <div class=\"form-group\">\n        <label>Cognome</label>\n        <input type=\"text\" formControlName=\"surname\" class=\"form-control\" />\n    </div>\n\n    <div class=\"form-group\">\n      <button type=\"submit\" class=\"btn btn-primary\">Registrati</button>\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/register-form/register-form.component.scss":
/*!************************************************************!*\
  !*** ./src/app/register-form/register-form.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".noFloat {\n  float: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXItZm9ybS9DOlxcd29ya3NwYWNlXFxhcGFjcy1jbGllbnQvc3JjXFxhcHBcXHJlZ2lzdGVyLWZvcm1cXHJlZ2lzdGVyLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci1mb3JtL3JlZ2lzdGVyLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm9GbG9hdCB7XHJcbiAgZmxvYXQ6IG5vbmU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/register-form/register-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/register-form/register-form.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFormComponent", function() { return RegisterFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/must-match.validator */ "./src/app/_helpers/must-match.validator.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_models */ "./src/app/_models/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterFormComponent = /** @class */ (function () {
    function RegisterFormComponent(formBuilder, userService, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
        this.submitted = false;
    }
    RegisterFormComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            name: [''],
            surname: [''],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }, {
            validator: Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_2__["MustMatch"])('password', 'confirmPassword')
        });
    };
    Object.defineProperty(RegisterFormComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.mapFromForm(this.registerForm.value);
        this.askForRegistration(this.new_user);
    };
    RegisterFormComponent.prototype.mapFromForm = function (form_data) {
        this.new_user = new _models__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.new_user.username = form_data.username;
        this.new_user.password = form_data.password;
        this.new_user.email = form_data.email;
        this.new_user.name = form_data.name;
        this.new_user.surname = form_data.surname;
        this.new_user.id = null;
    };
    RegisterFormComponent.prototype.askForRegistration = function (u) {
        var _this = this;
        console.log("asking to register user: ", u);
        this.userService.register(u).subscribe(function (data) {
            console.log("registered user: ", data);
            _this.userService.logIn(u.username, u.password).subscribe(function (response) {
                var new_id = (JSON.parse(response._body)).uid;
                //console.log(new_id);
                _this.userService.getUser(new_id).subscribe(function (answ) {
                    var usr = JSON.parse(answ._body);
                    _this.userService.logUser(usr);
                    _this.router.navigate(['main', { outlets: { logged: ['dashboard'] } }]);
                });
            }, function (error) {
                console.log(error);
            });
        });
    };
    RegisterFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-form',
            template: __webpack_require__(/*! ./register-form.component.html */ "./src/app/register-form/register-form.component.html"),
            styles: [__webpack_require__(/*! ./register-form.component.scss */ "./src/app/register-form/register-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RegisterFormComponent);
    return RegisterFormComponent;
}());



/***/ }),

/***/ "./src/app/test/test.component.html":
/*!******************************************!*\
  !*** ./src/app/test/test.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-block\">\n      <h4 class=\"card-title\">I tuoi ultimi esami</h4>\n  </div>\n  <div class=\"card-block\">\n    <ul>\n      <li *ngFor=\"let exam of lastExams\">\n        {{ exam.id }} - {{exam.date}}\n      </li>\n    </ul>\n  </div>\n  <div class=\"card-block\">\n    <button type=\"button\" class=\"btn btn-icon\" title=\"Modifica il tuo profilo\" (click)=\"getMyExam()\">\n        GET ALL MY EXAMS\n    </button>\n  </div>\n  <div class=\"card-block\">\n    <button type=\"button\" class=\"btn btn-icon\" title=\"Modifica il tuo profilo\" (click)=\"createNewExam()\">\n        CREATE NEW EXAM AS CURRENT USER\n    </button>\n  </div>\n  \n  <div class=\"card-block\">\n    <button type=\"button\" class=\"btn btn-icon\" title=\"Modifica il tuo profilo\" (click)=\"getActualExamId()\">\n        GET ACTUAL EXAM ID\n    </button>\n  </div>\n\n  <div class=\"card-block\">\n    <button type=\"button\" class=\"btn btn-icon\" title=\"Modifica il tuo profilo\" (click)=\"test(5)\">\n        Last 5 exams\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/test/test.component.scss":
/*!******************************************!*\
  !*** ./src/app/test/test.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestComponent = /** @class */ (function () {
    function TestComponent(examService, patientService) {
        this.examService = examService;
        this.patientService = patientService;
        this.examService.loadAllMyExams();
    }
    TestComponent.prototype.ngOnInit = function () {
        this.getMyLastExams(5);
    };
    TestComponent.prototype.getMyLastExams = function (i) {
        var _this = this;
        this.examService.getMyExamList().subscribe(function (data) {
            var obj = JSON.parse(data._body);
            _this.lastExams = obj.slice(obj.length - i);
        });
    };
    TestComponent.prototype.createNewExam = function () {
        var _this = this;
        this.patientService.createNewPatient().subscribe(function (response) {
            var pid = (JSON.parse(response._body)).id;
            _this.examService.createNewExam(pid).subscribe(function (data) {
                var new_exam = JSON.parse(data._body);
                console.log(new_exam);
                _this.examService.saveOnLocal(new_exam);
                _this.getMyLastExams(5);
            });
        });
    };
    TestComponent.prototype.getActualExamId = function () {
        console.log(this.examService.getActiveExam());
    };
    TestComponent.prototype.test = function (i) {
        this.getMyLastExams(5);
    };
    ;
    TestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.scss */ "./src/app/test/test.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["ExamService"], _services__WEBPACK_IMPORTED_MODULE_1__["PatientService"]])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/user-component/user-component.component.html":
/*!**************************************************************!*\
  !*** ./src/app/user-component/user-component.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<clr-modal [(clrModalOpen)]=\"editUserModal\">\n  <h3 class=\"modal-title\">Modifica i tuoi dati</h3>\n  <div class=\"modal-body\">\n    <form clrForm clrLayout=\"vertical\" [formGroup]=\"editUserForm\" class=\"clr-form clr-form-horizontal\">\n      <clr-input-container class=\"form-group\">\n        <label for=\"user-username\">Username:</label>\n        <input clrInput type=\"text\" [value]=\"this.logged_user.username\" placeholder=\"{{this.logged_user.username}}\" formControlName=\"username\" name=\"user-username\" [ngClass]=\"{ 'is-invalid': f.username.errors }\">\n      </clr-input-container>\n      <div class=\"errors\" *ngIf=\"submitted && f.username.errors\">\n        <alert-message *ngIf=\"f.username.errors.required\" msg=\"Il campo 'Username' è obbligatorio\"></alert-message>\n      </div>\n\n      <clr-password-container class=\"form-group\">\n        <label for=\"user-password\">Password:</label>\n        <input clrPassword placeholder=\"password\" formControlName=\"password\" name=\"user-password\" [ngClass]=\"{ 'is-invalid': (f.password.touched && f.password.errors) }\">\n      </clr-password-container>\n      <div class=\"errors\" *ngIf=\"f.password.touched && f.password.errors\">\n        <alert-message *ngIf=\"f.password.errors.required\" msg=\"Il campo 'Password' è obbligatorio\"></alert-message>\n        <alert-message *ngIf=\"f.password.errors.minlength\" msg=\"La password dev'essere lunga almeno 6 caratteri\"></alert-message>\n      </div>\n\n      <clr-password-container class=\"form-group\">\n        <label for=\"confirm-password\">Conferma password:</label>\n        <input clrPassword placeholder=\"conferma password\" formControlName=\"confirmPassword\" name=\"confirm-password\" [ngClass]=\"{ 'is-invalid':(f.confirmPassword.touched && f.confirmPassword.errors)}\">\n      </clr-password-container>\n      <div class=\"errors\" *ngIf=\"f.confirmPassword.touched && f.confirmPassword.errors\">\n        <alert-message *ngIf=\"f.confirmPassword.errors.required\" msg=\"Il campo 'Conferma password' è obbligatorio\"></alert-message>\n        <alert-message *ngIf=\"f.confirmPassword.errors.mustMatch\" msg=\"Le due password devono essere uguali\"></alert-message>\n      </div>\n\n      <clr-input-container class=\"form-group\">\n        <label for=\"user-mail\">eMail:</label>\n        <input clrInput type=\"text\" placeholder=\"{{this.logged_user.email}}\" formControlName=\"email\" name=\"user-email\" [ngClass]=\"{ 'is-invalid': f.email.errors }\">\n      </clr-input-container>\n      <div class=\"errors\" *ngIf=\"f.email.errors\">\n        <alert-message *ngIf=\"submitted && f.email.errors.required\" msg=\"Il campo 'Email' è obbligatorio\"></alert-message>\n        <alert-message *ngIf=\"f.email.errors.email\" msg=\"Indirizzo email non valido\"></alert-message>\n      </div>\n\n      <clr-input-container class=\"form-group\">\n        <label for=\"user-name\">Nome:</label>\n        <input clrInput type=\"text\" placeholder=\"{{this.logged_user.name}}\" formControlName=\"name\" name=\"user-name\">\n      </clr-input-container>\n\n      <clr-input-container class=\"form-group\">\n        <label for=\"user-surname\">Cognome:</label>\n        <input clrInput type=\"text\" placeholder=\"{{this.logged_user.surname}}\" formControlName=\"surname\" name=\"user-surname\">\n      </clr-input-container>\n  \n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline\" (click)=\"editUserModal = false; onAbort();\">Annulla</button>\n        <button [disabled]=\"!this.editUserForm.valid\" type=\"button\" class=\"btn btn-primary\" (click)=\"editUserModal = false; onSave();\">Salva</button>\n      </div>\n    </form> \n  </div>\n</clr-modal>\n\n\n\n<div class=\"card\">\n  <div class=\"card-block\">\n      <h4 class=\"card-title\">Benvenuto <em>{{this.presentation_name}}</em></h4>\n      <p class=\"card-text\">\n      Questi sono i dati del tuo profilo\n      </p>\n  </div>\n\n  <ul class=\"list-group list-group-flush card-block\">\n    <li class=\"clr-row\">\n      <div class=\"clr-col-4\">\n        ID:\n      </div>\n      <div class=\"clr-col-8\">{{this.logged_user.id}}</div>\n    </li>\n    <li class=\"clr-row\">\n      <div class=\"clr-col-4\">\n        Username:\n      </div>\n      <div class=\"clr-col-8\">{{this.logged_user.username}}</div>\n    </li>\n    <li class=\"clr-row\">\n      <div class=\"clr-col-4\">\n        eMail:\n      </div>\n      <div class=\"clr-col-8\">{{this.logged_user.email}}</div>\n    </li>\n    <li class=\"clr-row\">\n      <div class=\"clr-col-4\">\n        Nome:\n      </div>\n      <div class=\"clr-col-8\">{{this.logged_user.name}}</div>\n    </li>\n    <li class=\"clr-row\">\n      <div class=\"clr-col-4\">\n        Cognome:\n      </div>\n      <div class=\"clr-col-8\">{{this.logged_user.surname}}</div>\n    </li>\n  </ul>\n  <div class=\"card-block\">\n    <button type=\"button\" class=\"btn btn-icon\" title=\"Modifica il tuo profilo\" (click)=\"editUserModal = true\">\n        <clr-icon shape=\"pencil\"></clr-icon> Modifica profilo\n    </button>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/user-component/user-component.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/user-component/user-component.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItY29tcG9uZW50L3VzZXItY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/user-component/user-component.component.ts":
/*!************************************************************!*\
  !*** ./src/app/user-component/user-component.component.ts ***!
  \************************************************************/
/*! exports provided: UserComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponentComponent", function() { return UserComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/must-match.validator */ "./src/app/_helpers/must-match.validator.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserComponentComponent = /** @class */ (function () {
    function UserComponentComponent(formBuilder, modalService, userService) {
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.userService = userService;
        this.submitted = false;
    }
    UserComponentComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    UserComponentComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            console.log('Modal dismissed by pressing ESC');
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            console.log('Modal dismissed by clicking on a backdrop');
        }
        else {
            console.log("Modal dismissed with: " + reason);
        }
    };
    UserComponentComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.logged_user = this.userService.getLoggedUser();
        this.presentation_name = this.logged_user.username;
        if (!(this.logged_user.name === "")) {
            this.presentation_name = this.logged_user.name;
        }
        this.initFormData();
    };
    Object.defineProperty(UserComponentComponent.prototype, "f", {
        get: function () { return this.editUserForm.controls; },
        enumerable: true,
        configurable: true
    });
    UserComponentComponent.prototype.initForm = function () {
        this.editUserForm = this.formBuilder.group({
            name: [''],
            surname: [''],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }, {
            validator: Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_2__["MustMatch"])('password', 'confirmPassword')
        });
    };
    UserComponentComponent.prototype.initFormData = function () {
        this.editUserForm.controls['username'].setValue(this.logged_user.username);
        this.editUserForm.controls['email'].setValue(this.logged_user.email);
        this.editUserForm.controls['name'].setValue(this.logged_user.name);
        this.editUserForm.controls['surname'].setValue(this.logged_user.surname);
    };
    UserComponentComponent.prototype.printData = function () {
        console.log(this.logged_user);
    };
    UserComponentComponent.prototype.onSave = function () {
        var _this = this;
        if (!this.save())
            this.abort();
        else {
            this.logged_user.username = this.editUserForm.controls.username.value;
            this.logged_user.email = this.editUserForm.controls.email.value;
            this.logged_user.password = this.editUserForm.controls.password.value;
            this.logged_user.name = this.editUserForm.controls.name.value;
            this.logged_user.surname = this.editUserForm.controls.surname.value;
            this.userService.updateUser(this.logged_user).subscribe(function (data) {
                var new_usr = JSON.parse(data._body);
                _this.userService.logUser(new_usr);
            }, function (error) {
                console.log(error);
            });
        }
    };
    UserComponentComponent.prototype.save = function () {
        return confirm("Sicuro di voler salvare? L'azione non è reversibile");
    };
    UserComponentComponent.prototype.onAbort = function () {
        this.abort();
    };
    UserComponentComponent.prototype.abort = function () { };
    UserComponentComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.userService.getAllUsers().subscribe(function (data) {
            console.log(_this.userService.allUsers);
        });
    };
    UserComponentComponent.prototype.logIn = function () {
        var _this = this;
        this.userService.logIn("admin", "password").subscribe(function (data) {
            console.log(_this.userService.loggedUserID);
        });
    };
    UserComponentComponent.prototype.logged = function () {
        //this.userService.getLoggedUser().subscribe(data => {
        console.log(this.userService.getLoggedUser());
        //})
    };
    UserComponentComponent.prototype.print = function () {
        console.log(this.editUserForm.controls);
    };
    UserComponentComponent.prototype.logout = function () {
        this.userService.logout();
    };
    UserComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-component',
            template: __webpack_require__(/*! ./user-component.component.html */ "./src/app/user-component/user-component.component.html"),
            styles: [__webpack_require__(/*! ./user-component.component.scss */ "./src/app/user-component/user-component.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], _services__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], UserComponentComponent);
    return UserComponentComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    // URL of development API
    //apiUrl: 'http://localhost:2403'
    apiUrl: 'https://web.math.unipd.it/apacs'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\workspace\apacs-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map