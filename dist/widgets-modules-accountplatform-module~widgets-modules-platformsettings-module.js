(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["widgets-modules-accountplatform-module~widgets-modules-platformsettings-module"],{

/***/ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/observable/throw.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].throw = rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"];
rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].throwError = rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"];
//# sourceMappingURL=throw.js.map

/***/ }),

/***/ "./src/app/core/commonservices/services.ts":
/*!*************************************************!*\
  !*** ./src/app/core/commonservices/services.ts ***!
  \*************************************************/
/*! exports provided: Services */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Services", function() { return Services; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var Services = /** @class */ (function () {
    function Services(_http, baseUrl) {
        this._http = _http;
        this.myAppUrl = "";
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'X-MKC-Auth': 'test',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        });
        this.myAppUrl = baseUrl;
    }
    Services.prototype.ngDoCheck = function () {
        this.getAllAccountPlatform();
        this.getAllPlatform();
        this.getAllPlugin();
        this.getFilterCondition();
        this.getFilterType();
    };
    //get all accountplatform
    Services.prototype.getAllAccount = function () {
        var url = this.myAppUrl + "account/getall";
        // let localUrl="http://localhost:51462/account/getall";
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        header.append('Content-Type', 'application/json');
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: header });
        return this._http.get(url, requestOptions)
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res) {
            }
            return res;
        })
            .catch(this.errorHandler);
    };
    //get all accountplatform
    Services.prototype.getAllAccountPlatform = function () {
        var url = this.myAppUrl + "accountplatform/getall";
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
        return this._http.get(url, requestOptions)
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res) {
            }
            return res;
        })
            .catch(this.errorHandler);
    };
    //get all platform
    Services.prototype.getAllPlatform = function () {
        var url = this.myAppUrl + "platform/getall";
        return this._http.get(url)
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res) {
            }
            return res;
        })
            .catch(this.errorHandler);
    };
    //get all plugin
    Services.prototype.getAllPlugin = function () {
        var url = this.myAppUrl + "plugin/getall";
        return this._http.get(url)
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res) {
            }
            return res;
        })
            .catch(this.errorHandler);
    };
    Services.prototype.getFilterCondition = function () {
        var url = this.myAppUrl + "enumeration/filtercondition";
        return this._http.get(url)
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res) {
            }
            return res;
        })
            .catch(this.errorHandler);
    };
    Services.prototype.getFilterType = function () {
        var url = this.myAppUrl + "enumeration/filtertype";
        return this._http.get(url)
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res) {
            }
            return res;
        })
            .catch(this.errorHandler);
    };
    Services.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    Services.prototype.errorHandler = function (error) {
        console.log(error);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
    };
    Services = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('baseUrl')),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], String])
    ], Services);
    return Services;
}());



/***/ }),

/***/ "./src/app/core/data/PlatformSettings.ts":
/*!***********************************************!*\
  !*** ./src/app/core/data/PlatformSettings.ts ***!
  \***********************************************/
/*! exports provided: Platformsettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platformsettings", function() { return Platformsettings; });
var Platformsettings = /** @class */ (function () {
    function Platformsettings() {
    }
    return Platformsettings;
}());



/***/ }),

/***/ "./src/app/core/data/global.ts":
/*!*************************************!*\
  !*** ./src/app/core/data/global.ts ***!
  \*************************************/
/*! exports provided: MyGlobal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyGlobal", function() { return MyGlobal; });
var MyGlobal = /** @class */ (function () {
    function MyGlobal() {
    }
    return MyGlobal;
}());



/***/ }),

/***/ "./src/app/widgets/platformsetting/platformsettings.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/widgets/platformsetting/platformsettings.service.ts ***!
  \*********************************************************************/
/*! exports provided: PlatformsettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformsettingsService", function() { return PlatformsettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var PlatformsettingsService = /** @class */ (function () {
    function PlatformsettingsService(_http, baseUrl) {
        this._http = _http;
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'X-MKC-Auth': 'test',
        });
        this.myAppUrl = "";
        this.myAppUrl = baseUrl;
    }
    //get all platformsettings
    PlatformsettingsService.prototype.getAllPlatformsettings = function (AccountPlatformID) {
        var url = this.myAppUrl + "platformsettings/" + AccountPlatformID + "/getall";
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
        return this._http.get(url, { headers: this.headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res) {
            }
            return res;
        })
            .catch(this.errorHandler);
    };
    //get all default platformsettings
    PlatformsettingsService.prototype.getPlatformsettingByDefault = function (accountPlatformID) {
        var url = this.myAppUrl + "platformsettings/" + accountPlatformID + "/getdefault";
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
        return this._http.get(url, requestOptions)
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res) {
            }
            return res;
        })
            .catch(this.errorHandler);
    };
    //Create platformsettings
    PlatformsettingsService.prototype.createPlatformsettings = function (platformsettings) {
        var url = this.myAppUrl + "platformsettings/create";
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
        return this._http.post(url, platformsettings, requestOptions)
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res) {
            }
            return res;
        })
            .catch(this.errorHandler);
    };
    //Update platformsettings
    PlatformsettingsService.prototype.updatePlatformsettings = function (platformsettings) {
        var url = this.myAppUrl + "platformsettings/update";
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
        return this._http.post(url, platformsettings, requestOptions)
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res) {
            }
            return res;
        })
            .catch(this.errorHandler);
    };
    //Delete platformsettings	
    PlatformsettingsService.prototype.deletePlatformsettingsById = function (platformsettings) {
        // let url: string = this.myAppUrl + "platformsettings/"+ AccountPlatformID+"/getdefault";
        var url = this.myAppUrl + "platformsettings/" + platformsettings.ID + "/delete";
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
        return this._http.delete(url, { headers: this.headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res) {
            }
            return res;
        })
            .catch(this.errorHandler);
    };
    PlatformsettingsService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    PlatformsettingsService.prototype.errorHandler = function (error) {
        console.log(error);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
    };
    PlatformsettingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('baseUrl')),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], String])
    ], PlatformsettingsService);
    return PlatformsettingsService;
}());



/***/ })

}]);
//# sourceMappingURL=widgets-modules-accountplatform-module~widgets-modules-platformsettings-module.js.map