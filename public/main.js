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
        this.score = 44;
    }
    return Exam;
}());



/***/ }),

/***/ "./src/app/_models/examvoice.ts":
/*!**************************************!*\
  !*** ./src/app/_models/examvoice.ts ***!
  \**************************************/
/*! exports provided: ExamVoice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamVoice", function() { return ExamVoice; });
var ExamVoice = /** @class */ (function () {
    function ExamVoice(data, voice) {
        this.voice_id = data.voiceid;
        this.exam_id = data.examid;
        this.id = data.id;
        this.nome = voice.nome;
        this.icona = voice.icona;
        this.gruppo = voice.gruppo;
        this.riga = voice.riga;
        this.countable = voice.countable;
        this.treshold1 = voice.treshold1;
        this.treshold2 = voice.treshold2;
        this.m = data.m;
        this.qv = data.qv;
        this.s = data.s;
        this.punteggio = data.punteggio;
        this.progress = data.progress;
    }
    return ExamVoice;
}());



/***/ }),

/***/ "./src/app/_models/index.ts":
/*!**********************************!*\
  !*** ./src/app/_models/index.ts ***!
  \**********************************/
/*! exports provided: User, Patient, Exam, ExamVoice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./src/app/_models/user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user__WEBPACK_IMPORTED_MODULE_0__["User"]; });

/* harmony import */ var _patient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patient */ "./src/app/_models/patient.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Patient", function() { return _patient__WEBPACK_IMPORTED_MODULE_1__["Patient"]; });

/* harmony import */ var _exam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exam */ "./src/app/_models/exam.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Exam", function() { return _exam__WEBPACK_IMPORTED_MODULE_2__["Exam"]; });

/* harmony import */ var _examvoice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examvoice */ "./src/app/_models/examvoice.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExamVoice", function() { return _examvoice__WEBPACK_IMPORTED_MODULE_3__["ExamVoice"]; });







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
        this.activeExamVoices = [];
        this.last_exams_number = 5;
    }
    ExamService.prototype.refresh = function () {
        var _this = this;
        this.getMyExamList().subscribe(function (response) {
            _this.allMyExams = JSON.parse(response._body);
        }, function (errors) { return console.log(errors); });
    };
    // Restituisce tutti gli esami di un dato utente
    ExamService.prototype.getMyExamList = function () {
        var usr_id = this.userService.getLoggedUser().id;
        return this.http.get(API_URL + '/exam/?user=' + usr_id);
    };
    // Restituisce un esame (dato il suo id)
    ExamService.prototype.getExam = function (id) {
        return this.http.get(API_URL + '/exam/' + id);
    };
    ExamService.prototype.getExamVoiceData = function (id) {
        return this.http.get(API_URL + '/examdata/' + id);
    };
    // Carica la lista dei miei esami su una variabile locale
    ExamService.prototype.loadAllMyExams = function () {
        var _this = this;
        this.getMyExamList().subscribe(function (response) {
            var data = JSON.parse(response._body);
            _this.allMyExams = data;
            _this.lastExams = data.slice(data.length - _this.last_exams_number);
        });
    };
    // restituisce tutti gli esami dalla variable locale
    ExamService.prototype.getAllMyExams = function () {
        return this.allMyExams;
    };
    // restituisce gli ultimi esami (dalla variaible locale)
    ExamService.prototype.getLastExams = function () {
        return this.lastExams;
    };
    // Crea un nuovo esame sul server
    ExamService.prototype.createNewExam = function (pid) {
        var usr = this.userService.getLoggedUser();
        if (usr) {
            this.activeExam = new _models___WEBPACK_IMPORTED_MODULE_3__["Exam"](new Date(), usr.id, pid);
            return this.http.post(API_URL + '/exam', this.activeExam);
        }
    };
    // Crea una voce esame (dati) associata alla voce vid e all'esame eid
    ExamService.prototype.createVoiceData = function (vid, eid) {
        var obj = { "m": true, "qv": false, "s": false, "punteggio": 2, "progress": 0, "voiceid": vid, "examid": eid };
        return this.http.post(API_URL + '/examdata', obj);
    };
    ExamService.prototype.loadVoice = function (vid) {
        return this.http.get(API_URL + '/examvoice/' + vid);
    };
    // carica tutte le voci esame (info)
    ExamService.prototype.loadAllVoices = function () {
        return this.http.get(API_URL + '/examvoice/');
    };
    ExamService.prototype.getAllVoicesData = function (eid) {
        return this.http.get(API_URL + '/examdata?examid=' + eid);
    };
    // Imposta l'esame attivo
    ExamService.prototype.setActive = function (id) {
        var _this = this;
        this.activeExamId = id;
        this.getExam(id).subscribe(function (data) {
            _this.activeExam = JSON.parse(data._body);
            _this.saveOnLocal(_this.activeExam);
            _this.getAllVoicesData(id).subscribe(function (_data) {
                _this.loadAllVoices().subscribe(function (_voices) {
                    var d = JSON.parse(_data._body);
                    var v = JSON.parse(_voices._body);
                    _this.activeExamVoices = _this.merge(d, v);
                    console.log(_this.activeExamVoices);
                    _this.calculateExamScore();
                });
            });
            //console.log("EXA service: ",this.activeExam);
        }, function (error) { return console.log(error); });
    };
    // Salva i dati in localstorage
    ExamService.prototype.saveOnLocal = function (e) {
        this.activeExam = e;
        localStorage.setItem('activeExam', JSON.stringify(this.activeExam));
    };
    // carica i dati da localstorage
    ExamService.prototype.loadFromLocal = function () {
        var exam = JSON.parse(localStorage.getItem('activeExam'));
        this.activeExam = exam;
        return this.activeExam;
    };
    // Restituisce l'esame attivo
    ExamService.prototype.getActiveExam = function () {
        this.loadFromLocal();
        return this.activeExam;
    };
    ExamService.prototype.getActiveExamVoices = function () {
        this.loadFromLocal();
        return this.activeExamVoices;
    };
    ExamService.prototype.saveActiveExam = function (e) {
        console.log("saveActiveExam(e:Exam):todo");
    };
    ExamService.prototype.saveActiveExamVoices = function (v) {
        console.log("saveActiveExamVoices(e:Exam):todo");
    };
    ExamService.prototype.deleteExamData = function (eid) {
        var _this = this;
        this.http.get(API_URL + '/examdata?examid=' + eid).subscribe(function (data) {
            var voices = (JSON.parse(data._body));
            for (var _i = 0, voices_1 = voices; _i < voices_1.length; _i++) {
                var v = voices_1[_i];
                _this.http.delete(API_URL + '/examdata/' + v.id).subscribe(function (response) { return console.log(response); }, function (errors) { return console.log(errors); });
            }
        });
    };
    ExamService.prototype.deleteExam = function (id) {
        return this.http.delete(API_URL + '/exam/' + id);
    };
    ExamService.prototype.saveExam = function (e) {
        return this.http.post(API_URL + '/exam/' + e.id, e);
    };
    ExamService.prototype.saveExamData = function (id, obj) {
        return this.http.put(API_URL + '/examdata/' + id, obj);
    };
    ExamService.prototype.loadActiveExam = function () {
        this.loadFromLocal();
        //console.log(this.activeExam.id);
        return this.http.get(API_URL + '/examdata?examid=' + this.activeExam.id);
    };
    ExamService.prototype.loadPalette = function () {
        return this.http.get(API_URL + '/examgroup');
    };
    ExamService.prototype.merge = function (data, voices) {
        var examData = [];
        if (data.length != voices.length) {
            //console.log("Error! lunghezze array differenti",data.length," vs ",voices.length);
            return [];
        }
        else {
            //console.log("ok, array uguali");
            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < voices.length; j++) {
                    if (data[i].voiceid === voices[j].id)
                        examData.push(new _models___WEBPACK_IMPORTED_MODULE_3__["ExamVoice"](data[i], voices[j]));
                }
            }
            return examData;
        }
    };
    ExamService.prototype.splitInColumns = function (data) {
        var new_data;
        new_data = new Array();
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var d = data_1[_i];
            //console.log(d);
            if (typeof (new_data[d.gruppo - 1]) != 'undefined')
                new_data[d.gruppo - 1][d.riga - 1] = d;
            else {
                new_data[d.gruppo - 1] = new Array();
                new_data[d.gruppo - 1][d.riga - 1] = d;
            }
        }
        return (new_data);
    };
    ExamService.prototype.calculateExamScore = function () {
        var _this = this;
        console.log(typeof this.activeExamVoices);
        var tot = 0;
        for (var _i = 0, _a = this.activeExamVoices; _i < _a.length; _i++) {
            var v = _a[_i];
            tot += v.punteggio;
            console.log(v.punteggio);
        }
        this.activeExam.score = tot;
        console.log(tot);
        this.saveExam(this.activeExam).subscribe(function (exam) {
            _this.activeExam = JSON.parse(exam._body);
            //console.log(this.activeExam.score);
        });
    };
    ExamService.prototype.loadGroups = function () {
        return this.http.get(API_URL + '/examgroup/');
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
            //console.log("PAT service: ",this.activePatient);
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGVydC1tZXNzYWdlL2FsZXJ0LW1lc3NhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

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
/* harmony import */ var _edit_patient_edit_patient_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-patient/edit-patient.component */ "./src/app/edit-patient/edit-patient.component.ts");
/* harmony import */ var _interview_interview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interview/interview.component */ "./src/app/interview/interview.component.ts");
/* harmony import */ var _exam_resume_exam_resume_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./exam-resume/exam-resume.component */ "./src/app/exam-resume/exam-resume.component.ts");
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
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ] },
    { path: '', redirectTo: 'main', pathMatch: 'prefix' },
    { path: 'exam', component: _exam_view_exam_view_component__WEBPACK_IMPORTED_MODULE_6__["ExamViewComponent"], children: [
            { path: 'editpatient', component: _edit_patient_edit_patient_component__WEBPACK_IMPORTED_MODULE_7__["EditPatientComponent"], outlet: 'exam' },
            { path: 'interview', component: _interview_interview_component__WEBPACK_IMPORTED_MODULE_8__["InterviewComponent"], outlet: 'exam' },
            { path: 'resume', component: _exam_resume_exam_resume_component__WEBPACK_IMPORTED_MODULE_9__["ExamResumeComponent"], outlet: 'exam' },
            { path: '', redirectTo: 'component', pathMatch: 'full' }
        ] }
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

module.exports = "<router-outlet name=\"primary\"></router-outlet>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"

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
/* harmony import */ var _exam_resume_exam_resume_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./exam-resume/exam-resume.component */ "./src/app/exam-resume/exam-resume.component.ts");
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
                _interview_item_interview_item_component__WEBPACK_IMPORTED_MODULE_19__["InterviewItemComponent"],
                _exam_resume_exam_resume_component__WEBPACK_IMPORTED_MODULE_20__["ExamResumeComponent"]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */"

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

module.exports = "<form clrForm clrLayout=\"horizontal\" [formGroup]=\"patientForm\" (ngSubmit)=\"onSubmit()\">\n    \n    <h2>Dati Esame</h2>\n\n    <div class=\"form-group\">\n      <label>Esaminatore</label>\n      <input type=\"text\" formControlName=\"esaminatore\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.esaminatore.errors }\" />\n    </div>\n    <div class=\"errors\" *ngIf=\"submitted && f.esaminatore.errors\">\n      <alert-message *ngIf=\"f.esaminatore.errors.required\" msg=\"Il campo 'Esaminatore' è obbligatorio\"></alert-message>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Data</label>\n      <input type=\"date\" formControlName=\"data\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.data.errors }\" />\n    </div>\n    <div class=\"errors\" *ngIf=\"submitted && f.data.errors\">\n      <alert-message *ngIf=\"f.data.errors.required\" msg=\"Il campo 'Data' è obbligatorio\"></alert-message>\n    </div>\n\n\n\n    <h2>Dati Personali</h2>\n\n    <div class=\"form-group\">\n      <label>Nome</label>\n      <input type=\"text\" formControlName=\"nome\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.nome.errors }\" />\n    </div>\n    <div class=\"errors\" *ngIf=\"submitted && f.nome.errors\">\n      <alert-message *ngIf=\"f.nome.errors.required\" msg=\"Il campo 'Nome' è obbligatorio\"></alert-message>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Cognome</label>\n      <input type=\"text\" formControlName=\"cognome\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.cognome.errors }\" />\n    </div>\n    <div class=\"errors\" *ngIf=\"submitted && f.cognome.errors\">\n      <alert-message *ngIf=\"f.cognome.errors.required\" msg=\"Il campo 'Cognome' è obbligatorio\"></alert-message>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Sesso</label>\n      <div class=\"clr-control-container clr-control-inline\">\n        <div class=\"clr-radio-wrapper\">\n          <input type=\"radio\" id=\"sex-radio1\" formControlName=\"sesso\" value=\"true\" class=\"clr-radio\" [checked]=\"show_sex\">\n          <label for=\"sex-radio1\" class=\"clr-control-label\">M</label>\n        </div>\n        <div class=\"clr-radio-wrapper\">\n          <input type=\"radio\" id=\"sex-radio2\" formControlName=\"sesso\" value=\"false\" class=\"clr-radio\" [checked]=\"!show_sex\">\n          <label for=\"sex-radio2\" class=\"clr-control-label\">F</label>\n        </div>\n        <div class=\"clr-subtext-wrapper\">\n          <clr-icon class=\"clr-validate-icon\" shape=\"exclamation-circle\"></clr-icon>\n          <span class=\"clr-subtext\">Helper Text</span>\n        </div>\n      </div>\n      <div class=\"errors\" *ngIf=\"submitted && f.sesso.errors\">\n        <alert-message *ngIf=\"f.sesso.errors.required\" msg=\"Il campo 'Sesso' è obbligatorio\"></alert-message>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Età</label>\n      <input type=\"number\" formControlName=\"eta\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.eta.errors }\" />\n    </div>\n    <div class=\"errors\" *ngIf=\"submitted && f.eta.errors\">\n      <alert-message *ngIf=\"f.eta.errors.required\" msg=\"Il campo 'Età' è obbligatorio\"></alert-message>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Luogo di nascita</label>\n      <input type=\"text\" formControlName=\"luogonascita\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.luogonascita.errors }\" />\n    </div>\n    <div class=\"errors\" *ngIf=\"submitted && f.luogonascita.errors\">\n      <alert-message *ngIf=\"f.luogonascita.errors.required\" msg=\"Il campo 'Luogo di nascita' è obbligatorio\"></alert-message>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Professione</label>\n      <input type=\"text\" formControlName=\"professione\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.professione.errors }\" />\n    </div>\n    <div class=\"errors\" *ngIf=\"submitted && f.professione.errors\">\n      <alert-message *ngIf=\"f.professione.errors.required\" msg=\"Il campo 'Professione' è obbligatorio\"></alert-message>\n    </div>\n\n\n\n    <h2>Dati Clinici</h2>\n\n    <div class=\"form-group\">\n      <label>Lateralità</label>\n      <div class=\"clr-control-container clr-control-inline\">\n        <div class=\"clr-radio-wrapper\">\n          <input type=\"radio\" id=\"lat-radio1\" formControlName=\"lateralita\" value=\"true\" class=\"clr-radio\" [checked]=\"show_lat\">\n          <label for=\"lat-radio1\" class=\"clr-control-label\">DX</label>\n        </div>\n        <div class=\"clr-radio-wrapper\">\n          <input type=\"radio\" id=\"lat-radio2\" formControlName=\"lateralita\" value=\"false\" class=\"clr-radio\" [checked]=\"!show_lat\">\n          <label for=\"lat-radio2\" class=\"clr-control-label\">SX</label>\n        </div>\n        <div class=\"clr-subtext-wrapper\">\n          <clr-icon class=\"clr-validate-icon\" shape=\"exclamation-circle\"></clr-icon>\n          <span class=\"clr-subtext\">Helper Text</span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Lingua</label>\n      <input type=\"text\" formControlName=\"lingua\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lingua.errors }\" />\n    </div>\n    <div class=\"errors\" *ngIf=\"submitted && f.lingua.errors\">\n      <alert-message *ngIf=\"f.lingua.errors.required\" msg=\"Il campo 'Lingua' è obbligatorio\"></alert-message>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Scolarità</label>\n      <input type=\"number\" formControlName=\"scolarita\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.scolarita.errors }\" />\n    </div>\n    <div class=\"errors\" *ngIf=\"submitted && f.scolarita.errors\">\n      <alert-message *ngIf=\"f.scolarita.errors.required\" msg=\"Il campo 'Scolarità' è obbligatorio\"></alert-message>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Diagnosi</label>\n      <select clrSelect formControlName=\"diagnosi\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.diagnosi.errors }\" >\n        <option value=\"Nessun disturbo\" > Nessun disturbo </option>\n        <option value=\"Disturbo dello Spettro Autistico\" > Disturbo dello Spettro Autistico </option>\n        <option value=\"Malattia di Alzheimer\" > Malattia di Alzheimer </option>\n        <option value=\"Malattia di Parkinson\" > Malattia di Parkinson </option>\n        <option value=\"Schizofrenia\" > Schizofrenia </option>\n        <option value=\"Sclerosi Laterale Amiotrofica\" > Sclerosi Laterale Amiotrofica </option>\n        <option value=\"Trauma cranico\" > Trauma cranico </option>\n        <option value=\"Non nota\" > Non nota </option>\n        <option value=\"Multiple (specificare in &quot;Note&quot;)\"> Multiple (specificare in \"Note\") </option>\n        <option value=\"Altro... (da riportare in &quot;Note&quot;)\"> Altro... (da riportare in \"Note\") </option>\n      </select>\n    </div>\n    <div class=\"errors\" *ngIf=\"submitted && f.diagnosi.errors\">\n      <alert-message *ngIf=\"f.diagnosi.errors.required\" msg=\"Il campo 'Diagnosi' è obbligatorio\"></alert-message>\n    </div>\n\n\n    <h2>Note</h2>\n\n    <div class=\"form-group\">\n      <label for=\"altro\">Altre informazioni</label>\n      <div class=\"clr-control-container\">\n        <div class=\"clr-textarea-wrapper\">\n          <textarea clrTextarea formControlName=\"altro\" id=\"altro\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.altro.errors }\"></textarea>\n        </div>\n      </div>\n    </div>\n    <div class=\"errors\" *ngIf=\"submitted && f.altro.errors\">\n      <alert-message *ngIf=\"f.altro.errors.required\" msg=\"Il campo 'Altre informazioni' è obbligatorio\"></alert-message>\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-primary\">Salva dati</button>\n</form>\n\n<!--\n<button class=\"btn\" (click)=\"printPat()\">Stampa actual-patient</button>\n<button class=\"btn\" (click)=\"printExam()\">Stampa actual-exam</button>\n-->"

/***/ }),

/***/ "./src/app/edit-patient/edit-patient.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/edit-patient/edit-patient.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXBhdGllbnQvZWRpdC1wYXRpZW50LmNvbXBvbmVudC5zY3NzIn0= */"

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

module.exports = "<button type=\"button\" class=\"btn btn-icon btn-primary\" title=\"Modifica il tuo profilo\" (click)=\"createNewExam()\">\n    <clr-icon shape=\"plus\"></clr-icon> Crea un nuovo esame\n</button>\n<clr-datagrid [clrDgLoading]=\"loading\">\n    <clr-dg-column>ID esame</clr-dg-column>\n    <clr-dg-column [clrDgField]=\"'patient.nome'\">Nome Paziente\n      <clr-dg-string-filter [clrDgStringFilter]=\"nameFilter\"></clr-dg-string-filter>\n    </clr-dg-column>\n    <clr-dg-column [clrDgField]=\"'patient.nome'\">Cognome Paziente\n      <clr-dg-string-filter [clrDgStringFilter]=\"surnameFilter\"></clr-dg-string-filter>\n    </clr-dg-column>\n    <clr-dg-column [clrDgField]=\"'date'\" [clrDgSortOrder]=\"defaultSort\">Data\n      <clr-dg-string-filter [clrDgStringFilter]=\"dateFilter\"></clr-dg-string-filter>\n    </clr-dg-column>\n    <clr-dg-column [clrDgField]=\"'score'\">Punteggio</clr-dg-column>\n    <clr-dg-column>Azioni</clr-dg-column>\n\n    <clr-dg-row *clrDgItems=\"let exam of exams; let i=index\">\n        <clr-dg-cell>{{exam.id}}</clr-dg-cell>\n        <clr-dg-cell>{{exam.patient.nome}}</clr-dg-cell>\n        <clr-dg-cell>{{exam.patient.cognome}}</clr-dg-cell>\n        <clr-dg-cell>{{exam.date | date:\"dd/MM/yyyy\"}}</clr-dg-cell>\n        <clr-dg-cell>{{exam.score}}</clr-dg-cell>\n        <clr-dg-cell>\n          <button class=\"btn btn-sm\" (click)=\"editExam(exam.id, exam.patient.id)\">\n            <clr-icon shape=\"pencil\"></clr-icon> edit\n          </button>\n          <button class=\"btn btn-danger-outline btn-sm\" (click)=\"delete_exam = true; new_id = exam.id\">\n          <!--<button class=\"btn btn-danger-outline btn-sm\" (click)=\"deleteExam(exam.id)\">-->\n            <clr-icon shape=\"trash\"></clr-icon> delete\n          </button>\n          \n        </clr-dg-cell>\n    </clr-dg-row>\n\n    <clr-dg-footer>\n        <clr-dg-pagination #pagination [clrDgTotalItems]=\"total\" [clrDgPageSize]=\"10\">\n            <clr-dg-page-size [clrPageSizeOptions]=\"[10,20,50,100]\">Users per page</clr-dg-page-size>\n            {{pagination.firstItem + 1}} - {{pagination.lastItem + 1}}\n            of {{pagination.totalItems}} exams\n        </clr-dg-pagination>\n    </clr-dg-footer>\n</clr-datagrid>\n\n<clr-modal [(clrModalOpen)]=\"delete_exam\" [clrModalSize]=\"'sm'\">\n    <h3 class=\"modal-title\">Attenzione</h3>\n    <div class=\"modal-body\">\n        <p>Stai per eliminare questo esame, l'azione non è reversibile. Sei sicuro?</p>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline\" (click)=\"delete_exam = false\">Annulla</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteExam(new_id); delete_exam = false\">Ok</button>\n    </div>\n</clr-modal>"

/***/ }),

/***/ "./src/app/exam-list-view/exam-list-view.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/exam-list-view/exam-list-view.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtLWxpc3Qtdmlldy9leGFtLWxpc3Qtdmlldy5jb21wb25lbnQuc2NzcyJ9 */"

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
                //this.router.navigate(['main',{ outlets: { logged: ['exam'] } }]);
                _this.router.navigate(['exam']);
            });
        });
    };
    ExamListViewComponent.prototype.deleteExam = function (e) {
        var _this = this;
        this.examService.deleteExam(e).subscribe(function (response) {
            _this.examService.deleteExamData(e);
            _this.refresh();
        }, function (errors) { return console.log(errors); });
        console.log("elimina ", e);
    };
    ExamListViewComponent.prototype.createNewExam = function () {
        var _this = this;
        this.patientService.createNewPatient().subscribe(function (data) {
            var d = (JSON.parse(data._body));
            var pid = d.id;
            _this.patientService.saveOnLocal(d);
            _this.examService.createNewExam(pid).subscribe(function (_exam) {
                var eid = (JSON.parse(_exam._body)).id;
                _this.examService.loadAllVoices().subscribe(function (_voices) {
                    var voices = (JSON.parse(_voices._body));
                    console.log(voices);
                    for (var _i = 0, voices_1 = voices; _i < voices_1.length; _i++) {
                        var v = voices_1[_i];
                        _this.examService.createVoiceData(v.id, eid).subscribe(function (_voice) {
                            console.log(JSON.parse(_voice._body));
                        });
                    }
                    ;
                    _this.refresh();
                });
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

/***/ "./src/app/exam-resume/exam-resume.component.html":
/*!********************************************************!*\
  !*** ./src/app/exam-resume/exam-resume.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<clr-stack-view *ngIf=\"loaded\">\n    <clr-stack-header>Riepilogo esame di <strong>{{patient.nome+\" \"+patient.cognome}}</strong> del <strong>{{exam.date | date:\"dd/MM/yyyy\"}}</strong></clr-stack-header>\n    <!-- heading -->\n    <clr-stack-block>\n        <clr-stack-label><strong>Nome</strong></clr-stack-label>\n        <clr-stack-content>\n          <div class=\"clr-row\">\n              <div class=\"clr-col\">\n                  <span><strong>Mai</strong></span>\n              </div>\n              <div class=\"clr-col\">\n                  <span><strong>Qualche Volta</strong></span>\n              </div>\n              <div class=\"clr-col\">\n                  <span><strong>Spesso</strong></span>\n              </div>\n              <div class=\"clr-col-4\">\n                  <span><strong>Punteggio</strong></span>\n              </div>\n          </div>\n        </clr-stack-content>\n    </clr-stack-block>\n\n    <!-- Groups -->\n    <clr-stack-block *ngFor=\"let g of examData\">\n        <clr-stack-label>{{groups[g[0].gruppo-1].nome}}</clr-stack-label>\n        <clr-stack-content>\n          <div class=\"clr-row\">\n              <div class=\"clr-col\"></div>\n              <div class=\"clr-col\"></div>\n              <div class=\"clr-col\"></div>\n              <div class=\"clr-col-4\">\n                  <span><strong>{{partialGroupScore(g)}}/{{(g.length)*2}}</strong></span>\n              </div>\n          </div>\n        </clr-stack-content>\n        <clr-stack-block *ngFor=\"let voice of g\">\n          <clr-stack-label>{{voice.nome}}</clr-stack-label>\n          <clr-stack-content>\n            <div class=\"clr-row\">\n                <div class=\"clr-col\"><clr-icon *ngIf=\"voice.m\" shape=\"check\"></clr-icon></div>\n                <div class=\"clr-col\"><clr-icon *ngIf=\"voice.qv\" shape=\"check\"></clr-icon></div>\n                <div class=\"clr-col\"><clr-icon *ngIf=\"voice.s\" shape=\"check\"></clr-icon></div>\n                <div class=\"clr-col-4\">\n                    <span><strong>{{voice.punteggio}}/2</strong></span>\n                </div>\n            </div>\n          </clr-stack-content>\n        </clr-stack-block>\n    </clr-stack-block>\n\n  <clr-stack-block>\n        <clr-stack-label><strong>Totale</strong></clr-stack-label>\n        <clr-stack-content>\n          <div class=\"clr-row\">\n              <div class=\"clr-col\"></div>\n              <div class=\"clr-col\"></div>\n              <div class=\"clr-col\"></div>\n              <div class=\"clr-col-4\">\n                  <span><strong>{{totalScore()}}/44</strong></span>\n              </div>\n          </div>\n        </clr-stack-content>\n    </clr-stack-block>\n</clr-stack-view>\n\n<div *ngIf=\"!loaded\" [ngStyle]=\"{'margin': '0 auto','width':'100%','text-align':'center'}\">\n  <span class=\"spinner spinner-inline\">\n      Loading...\n  </span>\n  <span>\n      Sto caricando i dati...\n  </span>\n</div>"

/***/ }),

/***/ "./src/app/exam-resume/exam-resume.component.scss":
/*!********************************************************!*\
  !*** ./src/app/exam-resume/exam-resume.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtLXJlc3VtZS9leGFtLXJlc3VtZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/exam-resume/exam-resume.component.ts":
/*!******************************************************!*\
  !*** ./src/app/exam-resume/exam-resume.component.ts ***!
  \******************************************************/
/*! exports provided: ExamResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamResumeComponent", function() { return ExamResumeComponent; });
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



var ExamResumeComponent = /** @class */ (function () {
    function ExamResumeComponent(examService, patientService) {
        this.examService = examService;
        this.patientService = patientService;
        this.loaded = false;
    }
    ExamResumeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.examService.loadGroups().subscribe(function (data) {
            _this.groups = JSON.parse(data._body);
            _this.loadData();
            _this.exam = _this.examService.getActiveExam();
            _this.patient = _this.patientService.getActivePatient();
        });
    };
    ExamResumeComponent.prototype.test = function () {
        console.log(this.examService.activeExam.score);
    };
    ExamResumeComponent.prototype.partialGroupScore = function (group) {
        var tot = 0;
        for (var _i = 0, group_1 = group; _i < group_1.length; _i++) {
            var it = group_1[_i];
            tot += it.punteggio;
        }
        return tot;
    };
    ExamResumeComponent.prototype.totalScore = function () {
        var tot = 0;
        for (var _i = 0, _a = this.examData; _i < _a.length; _i++) {
            var group = _a[_i];
            for (var _b = 0, group_2 = group; _b < group_2.length; _b++) {
                var it = group_2[_b];
                tot += it.punteggio;
            }
        }
        return tot;
    };
    ExamResumeComponent.prototype.setLoaded = function () {
        this.loaded = true;
    };
    ExamResumeComponent.prototype.loadData = function () {
        var _this = this;
        this.examService.loadActiveExam().subscribe(function (data) {
            _this.exam = _this.examService.getActiveExam();
            var my_data = JSON.parse(data._body);
            _this.examService.loadAllVoices().subscribe(function (_voices) {
                var my_voices = JSON.parse(_voices._body);
                var ex_data = _this.examService.merge(my_data, my_voices);
                _this.examData = _this.examService.splitInColumns(ex_data);
                _this.examService.activeExamVoices = _this.examData;
                _this.examService.calculateExamScore();
                var delay = setTimeout(_this.setLoaded(), 5000);
            });
        }, function (errors) {
            console.log(errors);
        });
    };
    ExamResumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-exam-resume',
            template: __webpack_require__(/*! ./exam-resume.component.html */ "./src/app/exam-resume/exam-resume.component.html"),
            styles: [__webpack_require__(/*! ./exam-resume.component.scss */ "./src/app/exam-resume/exam-resume.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["ExamService"], _services__WEBPACK_IMPORTED_MODULE_1__["PatientService"]])
    ], ExamResumeComponent);
    return ExamResumeComponent;
}());



/***/ }),

/***/ "./src/app/exam-view/exam-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/exam-view/exam-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n    <header class=\"header header-4\">\n          <div class=\"branding\">\n            <a href=\"...\" class=\"nav-link\">\n                <clr-icon shape=\"cursor-hand-click\"></clr-icon>\n                <span class=\"title\">Modalità intervista</span>\n            </a>\n          </div>\n          <div class=\"header-nav\">\n            <a [routerLink]=\"[{ outlets: { exam: ['editpatient'] } }]\" outletName=[exam] routerLinkActive=\"active\" class=\"nav-link nav-text\">Anagrafica</a>\n            <a [routerLink]=\"[{ outlets: { exam: ['interview'] } }]\" outletName=[exam] routerLinkActive=\"active\" class=\"nav-link nav-text\">Intervista</a>\n            <a [routerLink]=\"[{ outlets: { exam: ['resume'] } }]\" outletName=[exam] routerLinkActive=\"active\" class=\"nav-link nav-text\">Resume</a>\n          </div>\n          <div class=\"header-actions\">\n            <a (click)=\"basic = true\" class=\"nav-link nav-text\"><clr-icon shape=\"times\"></clr-icon>esci dalla modalità intervista</a>\n          </div>\n\n    </header>\n    <div>\n      <router-outlet name=\"exam\"></router-outlet>\n    </div>\n</div>\n\n<clr-modal [(clrModalOpen)]=\"basic\" [clrModalSize]=\"'sm'\">\n    <h3 class=\"modal-title\">Attenzione</h3>\n    <div class=\"modal-body\">\n        <p>Stai per uscire dalla modalità intervista, i dati non salvati andranno persi. Vuoi procedere?</p>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline\" (click)=\"basic = false\">No, annulla</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"exit()\">Si, esci</button>\n    </div>\n</clr-modal>\n"

/***/ }),

/***/ "./src/app/exam-view/exam-view.component.scss":
/*!****************************************************!*\
  !*** ./src/app/exam-view/exam-view.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtLXZpZXcvZXhhbS12aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
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
    function ExamViewComponent(examService, router) {
        this.examService = examService;
        this.router = router;
    }
    ExamViewComponent.prototype.ngOnInit = function () {
    };
    ExamViewComponent.prototype.exit = function () {
        this.examService.setActive(this.examService.activeExam.id);
        this.router.navigate(['main', { outlets: { logged: ['dashboard'] } }]);
    };
    ExamViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-exam-view',
            template: __webpack_require__(/*! ./exam-view.component.html */ "./src/app/exam-view/exam-view.component.html"),
            styles: [__webpack_require__(/*! ./exam-view.component.scss */ "./src/app/exam-view/exam-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["ExamService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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

module.exports = "<div *ngIf=\"loaded\" class=\"interview-item\" (click)=\"onClickItem()\">\n  <clr-icon [attr.shape]=\"item.icona\"></clr-icon>\n  <span class=\"item-title\">{{item.nome}}</span>\n  <div class=\"item-progress\" [hidden]=\"!countable\">\n    <div class=\"progress-block\">\n      <label class=\"undo-button\">\n        <button class=\"\" (click)=\"undo()\">\n          <clr-icon shape=\"undo\"></clr-icon>\n        </button>\n      </label>\n      <div class=\"progress labeled danger\">\n        <progress max=\"{{max}}\" value=\"{{progress}}\" data-displayval=\"0%\"></progress>\n        <span>{{progress}} / {{max}}</span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"item-slider\" [hidden]=\"countable\">\n    <div class=\"progress-block\">\n      <label class=\"undo-button\">\n        <button class=\"\" (click)=\"undo()\">\n          <clr-icon shape=\"undo\"></clr-icon>\n        </button>\n      </label>\n      <div class=\"bar\">\n        <input type=\"range\" min=\"0\" max=\"2\" value=\"{{frequenza}}\" class=\"slider\" (change)=\"changeVal($event)\">\n        <div class=\"slider-label\">\n          <div class=\"left\">M</div>\n          <div class=\"center\">QV</div>\n          <div class=\"right\">S</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/interview-item/interview-item.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/interview-item/interview-item.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".progress {\n  max-height: 1.5em;\n  color: #123456; }\n\n.undo-button {\n  width: 15%;\n  height: 2em; }\n\n.bar {\n  width: 85%;\n  height: 2em;\n  background: white; }\n\n.bar > input {\n  width: 100%; }\n\ninput[type=range] {\n  -webkit-appearance: none;\n  width: 100%;\n  background: rgba(255, 255, 255, 0.2); }\n\ninput[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  height: 1em;\n  width: 1em;\n  background: #999;\n  cursor: pointer;\n  margin-top: 0;\n  /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */ }\n\ninput[type=range]:focus {\n  outline: none; }\n\ninput[type=range]::-ms-track {\n  width: 100%;\n  cursor: pointer;\n  /* Hides the slider so custom styles can be added */\n  background: transparent;\n  border-color: transparent;\n  color: transparent; }\n\n.slider-label {\n  height: 1em;\n  margin-top: -1em; }\n\n.slider-label div {\n  width: 33%;\n  float: left; }\n\n.slider-label .left {\n  text-align: left; }\n\n.slider-label .center {\n  text-align: center; }\n\n.slider-label .right {\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVydmlldy1pdGVtL0M6XFx3b3Jrc3BhY2VcXGFwYWNzLWNsaWVudFxcc3JjXFxhcHAvaW50ZXJ2aWV3LWl0ZW1cXGludGVydmlldy1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFJaEI7RUFDRSxVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQUViO0VBQ0UsVUFBVTtFQUNWLFdBQVU7RUFDVixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSx3QkFBd0I7RUFDeEIsV0FBVztFQUNYLG9DQUFpQyxFQUFBOztBQUduQztFQUNDLHdCQUF3QjtFQUN2QixXQUFXO0VBQ1gsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsYUFBYTtFQUFFLGtGQUFBLEVBQW1GOztBQUdwRztFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBRWYsbURBQUE7RUFDQSx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxVQUFTO0VBQ1QsV0FBVyxFQUFBOztBQUViO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsaUJBQWlCLEVBQUEiLCJmaWxlIjoiaW50ZXJ2aWV3LWl0ZW0vaW50ZXJ2aWV3LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZ3Jlc3Mge1xyXG4gIG1heC1oZWlnaHQ6IDEuNWVtO1xyXG4gIGNvbG9yOiAjMTIzNDU2O1xyXG59XHJcblxyXG5cclxuLnVuZG8tYnV0dG9uIHtcclxuICB3aWR0aDogMTUlO1xyXG4gIGhlaWdodDogMmVtO1xyXG59XHJcbi5iYXIge1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgaGVpZ2h0OjJlbTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLmJhcj5pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9cmFuZ2VdIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjIpOyBcclxufVxyXG5cclxuaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcclxuIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBoZWlnaHQ6IDFlbTtcclxuICB3aWR0aDogMWVtO1xyXG4gIGJhY2tncm91bmQ6ICM5OTk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi10b3A6IDA7IC8qIFlvdSBuZWVkIHRvIHNwZWNpZnkgYSBtYXJnaW4gaW4gQ2hyb21lLCBidXQgaW4gRmlyZWZveCBhbmQgSUUgaXQgaXMgYXV0b21hdGljICovXHJcbn1cclxuXHJcbmlucHV0W3R5cGU9cmFuZ2VdOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXJhbmdlXTo6LW1zLXRyYWNrIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIC8qIEhpZGVzIHRoZSBzbGlkZXIgc28gY3VzdG9tIHN0eWxlcyBjYW4gYmUgYWRkZWQgKi9cclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgXHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5zbGlkZXItbGFiZWwge1xyXG4gIGhlaWdodDogMWVtO1xyXG4gIG1hcmdpbi10b3A6IC0xZW07XHJcbn1cclxuLnNsaWRlci1sYWJlbCBkaXYge1xyXG4gIHdpZHRoOjMzJTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4uc2xpZGVyLWxhYmVsIC5sZWZ0IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5zbGlkZXItbGFiZWwgLmNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zbGlkZXItbGFiZWwgLnJpZ2h0IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufSJdfQ== */"

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




//import { ITEMS } from '../mock-items';
var InterviewItemComponent = /** @class */ (function () {
    //all_items: any[];
    /*
      all_items: any[] = [
          [
            { id: 0, i: 0, j: 0, nome: 'Errore - Questo componente non esiste' , icona: 'exclamation-triangle', m: true, qv: false, s: false, progress: 0, punteggio: 0, countable: true },
          ],
          [
            { id: 11, i: 1, j: 1, nome: "Anomie", icona: 'chat-bubble', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: true },
            { id: 12, i: 1, j: 2, nome: "Agrammatismo", icona: 'bubble-exclamation', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: true },
            { id: 13, i: 1, j: 3, nome: "Parafasie fonemiche", icona: 'bubble-chart', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: true },
            { id: 14, i: 1, j: 4, nome: "Parafasie semantiche", icona: 'shuffle', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: true },
            { id: 15, i: 1, j: 5, nome: "Circonlocuzioni", icona: 'refresh', m: true, qv: false, s: false, progress: 0, punteggio: 2, countable: true },
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
    */
    function InterviewItemComponent(userService, examService, patientService) {
        this.userService = userService;
        this.examService = examService;
        this.patientService = patientService;
        this.active = true;
        this.loaded = false;
        this.progress = 0;
        this.min = 0;
        this.max = 20;
    }
    InterviewItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        var v_data;
        this.examService.getExamVoiceData(this.itemid).subscribe(function (_data) {
            v_data = JSON.parse(_data._body);
            //console.log(voice.voice_id,this.voiceid);
            //this.item = v_data as ExamVoice;
            //console.log((<any>this.item).voiceid);
            _this.examService.loadVoice(v_data.voiceid).subscribe(function (_voice) {
                //console.log(JSON.parse((<any>_voice)._body), (<any>this.item).voiceid);
                var voice = JSON.parse(_voice._body);
                var d = new Array();
                var v = new Array();
                d.push(v_data);
                v.push(voice);
                //console.log(this.examService.merge(d,v)[0]);
                _this.item = _this.examService.merge(d, v)[0];
                _this.m = _this.item.m;
                _this.qv = _this.item.qv;
                _this.s = _this.item.s;
                _this.nome = _this.item.nome;
                _this.punteggio = _this.item.punteggio;
                _this.frequenza = 2 - _this.punteggio;
                _this.progress = _this.item.progress;
                _this.countable = _this.item.countable;
                _this.stile = (_this.progress) / (_this.max) * 100 + "%";
                _this.loaded = true;
            });
        });
        //console.log(voice,this.itemid);
        /*.subscribe(_voice => {
          var voice = JSON.parse((<any>_voice)._body);
          */
        //console.log(voice);
        //while ( !voice ) {
        //  console.log("data not received");
        //}
        //if (voice) {
        //console.log(voice);
        //}
        //else {
        //  console.log("item is empty");
        //}
        //console.log(this.item.punteggio);
        /*
        // ADJUST item index
        this.item = this.item - 1;
    
        // Control CAT and ITEM indexes
        if ( (this.col < 1) || (this.col > 5) ) {
          this.col = 0;
          this.item = 0;
        }
        if ( (this.item < 0) || ( this.item > 4 )) {
          this.col = 0;
          this.item = 0;
        }
        if ( !( ( this.col == 1 ) || ( this.col == 5 ) ) && (this.item == 4) ) {
          this.col = 0;
          this.item = 0;
        }
        this.id = this.col+""+(this.item+1);
    
        // LOAD DATA
        var load = localStorage.getItem('exam'+this.id);
        //this.all_items = this.all_items_default;
        if (load != null) {
          this.item = JSON.parse(load);
          console.log("Saved data loaded ");
        }
        else {
          console.log("default data loaded");
        }
        */
        /*
            // Update actual item to saved values
            this.m=this.item.m;
            this.qv=this.item.qv;
            this.s=this.item.s;
            this.nome=this.item.nome;
            this.punteggio=this.item.punteggio;
            this.frequenza= 2 - this.punteggio;
            this.progress=this.item.progress;
            this.countable=this.item.countable;
            this.stile = (this.progress)/(this.max)*100+"%";
            //console.log(this.item.punteggio);
            */
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
        console.log("edit-progress");
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
        //console.log(this.progress);
        var to_upload = {
            "m": this.m,
            "qv": this.qv,
            "s": this.s,
            "punteggio": this.punteggio,
            "progress": this.progress,
            "examid": this.item.exam_id,
            "voiceid": this.item.voice_id
        };
        //console.log(to_upload);
        localStorage.setItem('exam' + this.id, JSON.stringify(this.item));
        this.examService.saveExamData(this.item.id, to_upload).subscribe(function (data) {
            console.log(JSON.parse(data._body));
        });
    };
    InterviewItemComponent.prototype.enable = function () {
        this.active = true;
    };
    InterviewItemComponent.prototype.disable = function () {
        this.active = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InterviewItemComponent.prototype, "itemid", void 0);
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
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_1__["ExamService"],
            _services__WEBPACK_IMPORTED_MODULE_1__["PatientService"]])
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

module.exports = "<!--\n<button (click)=\"printExam()\">stampa esame</button>\n<button (click)=\"printData()\">stampa dati</button>\n-->\n<div>\n  <button (click)=\"saveData()\" class=\"btn btn-primary\"><clr-icon shape=\"floppy\"></clr-icon>Salva dati</button>\n</div>\n\n<div *ngIf=\"loaded\" class=\"grid\">\n  <ul *ngFor=\"let c of examData; index as i\" class=\"col\" [ngStyle]=\"{'background-color': palette[i]}\">\n    <li *ngFor=\"let item of c\">\n      <app-interview-item [itemid]=\"item.id\" [active]=\"true\" [ngClass]=\"{'hidden': !registration_on}\"></app-interview-item>\n    </li>\n  </ul>\n</div>\n\n<div *ngIf=\"!loaded\" [ngStyle]=\"{'margin': '0 auto','width':'100%','text-align':'center'}\">\n  <span class=\"spinner spinner-inline\">\n      Loading...\n  </span>\n  <span>\n      Sto caricando i dati...\n  </span>\n</div>"

/***/ }),

/***/ "./src/app/interview/interview.component.scss":
/*!****************************************************!*\
  !*** ./src/app/interview/interview.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blue-bg {\n  background-color: #7da8ed; }\n\n.green-bg {\n  background-color: #68e284; }\n\n.red-bg {\n  background-color: #ff7272; }\n\n.yellow-bg {\n  background-color: #ffeb54; }\n\n.grey-bg {\n  background-color: #d8d8d8; }\n\ndiv.grid {\n  display: flex;\n  width: 100%; }\n\nul.col {\n  /*\r\n  flex: 1;\r\n  margin: 0;\r\n  padding: 0;\r\n  */\n  width: 20%; }\n\nli {\n  list-style-type: none; }\n\n.audio-bar, .saving-bar {\n  width: 50%;\n  margin: 0;\n  float: left; }\n\n.saving-bar {\n  text-align: right; }\n\n.saving-bar button {\n  display: inline-block; }\n\ndiv.registration {\n  width: 60px;\n  height: 60px;\n  padding: 6px;\n  text-align: center;\n  border-radius: 50%;\n  float: left; }\n\n.registration.on {\n  background-color: red; }\n\n.registration.off {\n  background-color: grey; }\n\ndiv.microphone-control {\n  clear: both; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVydmlldy9DOlxcd29ya3NwYWNlXFxhcGFjcy1jbGllbnRcXHNyY1xcYXBwL2ludGVydmlld1xcaW50ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIiwiaW50ZXJ2aWV3L2ludGVydmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLGFBQWE7RUFDYixXQUNGLEVBQUE7O0FBRUE7RUFDQTs7OztHQ0VHO0VER0QsVUFBVSxFQUFBOztBQUdaO0VBQ0UscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxXQUFXLEVBQUE7O0FBR2I7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLFdBQVcsRUFBQSIsImZpbGUiOiJpbnRlcnZpZXcvaW50ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsdWUtYmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZGE4ZWQ7XHJcbn1cclxuLmdyZWVuLWJnIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjhlMjg0O1xyXG59XHJcbi5yZWQtYmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjcyNzI7XHJcbn1cclxuLnllbGxvdy1iZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWI1NDtcclxufVxyXG4uZ3JleS1iZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZDhkODtcclxufVxyXG5cclxuZGl2LmdyaWQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCVcclxufVxyXG5cclxudWwuY29sIHtcclxuLypcclxuICBmbGV4OiAxO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gICovXHJcbiAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxubGkge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuLmF1ZGlvLWJhciwgLnNhdmluZy1iYXIge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uc2F2aW5nLWJhciB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5zYXZpbmctYmFyIGJ1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5kaXYucmVnaXN0cmF0aW9uIHtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5yZWdpc3RyYXRpb24ub24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLnJlZ2lzdHJhdGlvbi5vZmYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbn1cclxuXHJcbmRpdi5taWNyb3Bob25lLWNvbnRyb2wge1xyXG4gIGNsZWFyOiBib3RoO1xyXG59IiwiLmJsdWUtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2RhOGVkOyB9XG5cbi5ncmVlbi1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2OGUyODQ7IH1cblxuLnJlZC1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjcyNzI7IH1cblxuLnllbGxvdy1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmViNTQ7IH1cblxuLmdyZXktYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkOGQ4OyB9XG5cbmRpdi5ncmlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7IH1cblxudWwuY29sIHtcbiAgLypcclxuICBmbGV4OiAxO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gICovXG4gIHdpZHRoOiAyMCU7IH1cblxubGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IH1cblxuLmF1ZGlvLWJhciwgLnNhdmluZy1iYXIge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDA7XG4gIGZsb2F0OiBsZWZ0OyB9XG5cbi5zYXZpbmctYmFyIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cblxuLnNhdmluZy1iYXIgYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG5cbmRpdi5yZWdpc3RyYXRpb24ge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwYWRkaW5nOiA2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmbG9hdDogbGVmdDsgfVxuXG4ucmVnaXN0cmF0aW9uLm9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkOyB9XG5cbi5yZWdpc3RyYXRpb24ub2ZmIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTsgfVxuXG5kaXYubWljcm9waG9uZS1jb250cm9sIHtcbiAgY2xlYXI6IGJvdGg7IH1cbiJdfQ== */"

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
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
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
    function InterviewComponent(userService, examService, patientService) {
        this.userService = userService;
        this.examService = examService;
        this.patientService = patientService;
        this.registration_on = true;
        this.loaded = false;
        this.palette = ["", "", "", "", ""];
    }
    InterviewComponent.prototype.ngOnInit = function () {
        this.loadData();
        this.loadPalette();
    };
    InterviewComponent.prototype.loadData = function () {
        var _this = this;
        this.examService.loadActiveExam().subscribe(function (data) {
            _this.exam = _this.examService.getActiveExam();
            var my_data = JSON.parse(data._body);
            _this.examService.loadAllVoices().subscribe(function (_voices) {
                var my_voices = JSON.parse(_voices._body);
                var ex_data = _this.examService.merge(my_data, my_voices);
                _this.examData = _this.examService.splitInColumns(ex_data);
                _this.examService.activeExamVoices = _this.examData;
                _this.examService.calculateExamScore();
                var delay = setTimeout(_this.setLoaded(), 1000);
            });
        }, function (errors) {
            console.log(errors);
        });
    };
    InterviewComponent.prototype.setLoaded = function () {
        this.loaded = true;
    };
    InterviewComponent.prototype.printExam = function () {
        console.log(this.exam);
    };
    InterviewComponent.prototype.printData = function () {
        console.log(this.examData);
    };
    InterviewComponent.prototype.loadPalette = function () {
        var _this = this;
        this.examService.loadPalette().subscribe(function (data) {
            var d = JSON.parse(data._body);
            for (var _i = 0, d_1 = d; _i < d_1.length; _i++) {
                var p = d_1[_i];
                console.log(p.colore, p.ordine);
                _this.palette[p.ordine - 1] = p.colore;
            }
        });
    };
    InterviewComponent.prototype.saveData = function () {
        this.children.forEach(function (it) {
            it.save();
        });
        this.loadData();
    };
    InterviewComponent.prototype.test = function () {
        //this.examService.calculateExamScore();
        console.log(this.examService.activeExam.score);
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
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["ExamService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["PatientService"]])
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

module.exports = "<div class=\"main-container\">\n    <div class=\"alert alert-app-level\">\n        [Spazio per gli alert!]\n    </div>\n    <header class=\"header header-6\">\n          <div class=\"branding\">\n            <a href=\"...\" class=\"nav-link\">\n                <clr-icon shape=\"bug\"></clr-icon>\n                <span class=\"title\">APACS</span>\n            </a>\n          </div>\n          <div class=\"header-nav\">\n            <a [routerLink]=\"[{ outlets: { logged: ['dashboard'] } }]\" outletName=[logged] routerLinkActive=\"active\" class=\"nav-link nav-text\">Dashboard</a>\n            <a [routerLink]=\"[{ outlets: { logged: ['exams'] } }]\" outletName=[logged] routerLinkActive=\"active\" class=\"nav-link nav-text\">Esami</a>\n          </div>\n          <div class=\"header-actions\">\n            <clr-dropdown>\n                <button class=\"nav-icon\" clrDropdownTrigger>\n                    <clr-icon shape=\"user\"></clr-icon>\n                    <clr-icon shape=\"caret down\"></clr-icon>\n                </button>\n                <clr-dropdown-menu *clrIfOpen clrPosition=\"bottom-right\">\n                    <a (click)=\"basic = true\" clrDropdownItem>Log out</a>\n                </clr-dropdown-menu>\n            </clr-dropdown>\n          </div>\n\n    </header>\n    <!--\n    <nav class=\"subnav\">\n        [subnav]\n    </nav>\n    -->\n    <div>\n      <router-outlet name=\"logged\"></router-outlet>\n    </div>\n</div>\n\n<clr-modal [(clrModalOpen)]=\"basic\" [clrModalSize]=\"'sm'\">\n    <h3 class=\"modal-title\">Attenzione</h3>\n    <div class=\"modal-body\">\n        <p>Stai per effettuare il Logout. Sei sicuro?</p>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline\" (click)=\"basic = false\">Annulla</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"logout()\">Ok</button>\n    </div>\n</clr-modal>"

/***/ }),

/***/ "./src/app/logged-user-wrapper/logged-user-wrapper.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/logged-user-wrapper/logged-user-wrapper.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dnZWQtdXNlci13cmFwcGVyL2xvZ2dlZC11c2VyLXdyYXBwZXIuY29tcG9uZW50LnNjc3MifQ== */"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"

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

module.exports = ".noFloat {\n  float: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLWZvcm0vQzpcXHdvcmtzcGFjZVxcYXBhY3MtY2xpZW50XFxzcmNcXGFwcC9yZWdpc3Rlci1mb3JtXFxyZWdpc3Rlci1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFBIiwiZmlsZSI6InJlZ2lzdGVyLWZvcm0vcmVnaXN0ZXItZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub0Zsb2F0IHtcclxuICBmbG9hdDogbm9uZTtcclxufSJdfQ== */"

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

module.exports = "<div class=\"card\">\n  <div class=\"card-block\">\n      <h4 class=\"card-title\">Note sullo sviluppo</h4>\n  </div>\n  <div class=\"card-block\">\n    <ul>\n      <li>Bisogna ancora sistemare i routes di default, e in generale vorrei abbellire un po' gli URI</li>\n      <li>Devo ancora mettere mano ai CSS per i componenti relativi all'esame</li>\n      <li>Per l'esecuzione di un esame ho pensato ad una \"modalità intervista\", alla quale si può accedere da Lista esami -> modifica esame. Per ora non mi entusiasma come soluzione, ma non saprei come integrare l'intervista con il resto dell'interfaccia</li>\n      <li>Devo ancora terminare di gestire il salvataggio automatico dei dati. Vorrei avvisare l'utente che esce di eventuali modifiche non salvate, permettendo (tramite alert) di salvare e uscire, uscire o restare.</li>\n      <li>Oltre ai dati personali sull'utente, non so cos'altro inserire nella dashboard</li>\n    </ul>\n  </div>\n\n  <!--\n  <div class=\"card-block\">\n    <ul>\n      <li *ngFor=\"let exam of lastExams\">\n        {{ exam.id }} - {{exam.date}}\n      </li>\n    </ul>\n  </div>\n  <div class=\"card-block\">\n    <button type=\"button\" class=\"btn btn-icon\" title=\"Modifica il tuo profilo\" (click)=\"getMyExam()\">\n        GET ALL MY EXAMS\n    </button>\n  </div>\n  <div class=\"card-block\">\n    <button type=\"button\" class=\"btn btn-icon\" title=\"Modifica il tuo profilo\" (click)=\"createNewExam()\">\n        CREATE NEW EXAM AS CURRENT USER\n    </button>\n  </div>\n  \n  <div class=\"card-block\">\n    <button type=\"button\" class=\"btn btn-icon\" title=\"Modifica il tuo profilo\" (click)=\"getActualExamId()\">\n        GET ACTUAL EXAM ID\n    </button>\n  </div>\n  \n  <div class=\"card-block\">\n    <button type=\"button\" class=\"btn btn-icon\" title=\"Modifica il tuo profilo\" (click)=\"test()\">\n        test\n    </button>\n  </div>\n\n  \n\n  <div class=\"card-block\">\n    <button type=\"button\" class=\"btn btn-icon\" title=\"Modifica il tuo profilo\" (click)=\"testDel()\">\n        delete examdata where id=\n    </button>\n  </div>\n  -->\n</div>"

/***/ }),

/***/ "./src/app/test/test.component.scss":
/*!******************************************!*\
  !*** ./src/app/test/test.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0L3Rlc3QuY29tcG9uZW50LnNjc3MifQ== */"

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
    TestComponent.prototype.test = function () {
        /*
        this.patientService.createNewPatient().subscribe(data => {
          var pid = (JSON.parse((<any>data)._body)).id;
          console.log(pid);
          this.examService.generateExam(pid);
        })
        
        /*
        var dati;
        this.examService.loadAllData().subscribe(data => {
          dati = (JSON.parse((<any>data)._body));
          //this.ids = (dati);
          //var i = 0;
          //this.ids = [];
          for (let d of dati) {
            d.examid = "3175ba3924e21890";
            //d.treshold1 = 1;
            //d.treshold2 = 2;
            this.examService.editData(d.id, d).subscribe(response => {
              console.log(d)
            }, errors => console.log("fail"));
          }
        });
        */
    };
    TestComponent.prototype.testDel = function () {
        var todel = "5890a08fe74d98f9";
        this.examService.deleteExamData(todel);
        /*.subscribe(
          data => console.log(data),
          errors => console.log(errors)
        );
        */
    };
    TestComponent.prototype.print = function () {
        /*
        for (let id of this.ids) {
          //console.log(id.id);
          this.examService.createVoiceData(id.id,id.id).subscribe(
            success => console.log("success"),
            errors => console.log("fail")
          );
        }
        */
    };
    TestComponent.prototype.getAllDataId = function () {
        /*
        this.examService.getAllDataId().subscribe(success => {
          var out = JSON.parse((<any>success)._body);
          //console.log(out);
          this.generateArray(out);
        })
        */
    };
    TestComponent.prototype.generateArray = function (o) {
        var es = [];
        var i = 0;
        for (var _i = 0, o_1 = o; _i < o_1.length; _i++) {
            var a = o_1[_i];
            es[i] = a.id;
            i++;
        }
        console.log(es);
    };
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWNvbXBvbmVudC91c2VyLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJ9 */"

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