(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["widgets-modules-platformsettings-module"],{

/***/ "./src/app/widgets/modules/platformsettings.module.ts":
/*!************************************************************!*\
  !*** ./src/app/widgets/modules/platformsettings.module.ts ***!
  \************************************************************/
/*! exports provided: PlatformsettingsWidgetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformsettingsWidgetModule", function() { return PlatformsettingsWidgetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_listview_crud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-listview-crud */ "./node_modules/ng2-listview-crud/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_timeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-timeline */ "./node_modules/ng2-timeline/index.js");
/* harmony import */ var _components_ng2_newslist_ng2newslist_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ng2-newslist/ng2newslist.module */ "./src/app/components/ng2-newslist/ng2newslist.module.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _platformsetting_platformsetting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../platformsetting/platformsetting.component */ "./src/app/widgets/platformsetting/platformsetting.component.ts");
/* harmony import */ var _platformsetting_platformsettings_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../platformsetting/platformsettings-routing */ "./src/app/widgets/platformsetting/platformsettings-routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PlatformsettingsWidgetModule = /** @class */ (function () {
    function PlatformsettingsWidgetModule() {
    }
    PlatformsettingsWidgetModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _platformsetting_platformsettings_routing__WEBPACK_IMPORTED_MODULE_8__["PlatformsettingsWidgetRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__["Ng2SmartTableModule"],
                ng2_listview_crud__WEBPACK_IMPORTED_MODULE_2__["Ng2ListViewCRUD"],
                ng2_timeline__WEBPACK_IMPORTED_MODULE_4__["Ng2Timeline"], _components_ng2_newslist_ng2newslist_module__WEBPACK_IMPORTED_MODULE_5__["Ng2NewsList"]
            ],
            declarations: [_platformsetting_platformsetting_component__WEBPACK_IMPORTED_MODULE_7__["PlatformsettingComponent"]],
            providers: []
        })
    ], PlatformsettingsWidgetModule);
    return PlatformsettingsWidgetModule;
}());



/***/ }),

/***/ "./src/app/widgets/platformsetting/platformsetting.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/widgets/platformsetting/platformsetting.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/widgets/platformsetting/platformsetting.component.html":
/*!************************************************************************!*\
  !*** ./src/app/widgets/platformsetting/platformsetting.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"col-md-12\">\r\n    <h3 style=\"text-align:center\">Platformsettings</h3>\r\n    <table class=\"table table-bordered table-striped table-hover\">\r\n      <thead>\r\n        <tr>\r\n          <th class=\"text-center\">ID</th>\r\n          <th class=\"text-center\">Key</th>\r\n          <th class=\"text-center\">Value</th>\r\n          <th></th>\r\n          <th></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let platformset of platformSettings\">\r\n          <td>{{platformset.ID}}</td>\r\n          <td>{{platformset.Key}}</td>\r\n          <td>{{platformset.Value}}</td>\r\n          <td>\r\n            <button class=\"btn btn-info\" (click)=\"showEditPlatformSettingsForm(platformset)\">\r\n              <i class=\"fa fa-edit\"></i>\r\n            </button>\r\n          </td>\r\n          <td>\r\n            <button class=\"btn btn-danger\" (click)=\"removePlatformsettings(platformset)\">\r\n              <i class=\"fa fa-minus\"></i>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <button class=\"btn btn-success\" (click)=\"showAddPlatformsettingsForm()\">\r\n      <i class=\"fa fa-plus\"></i>\r\n    </button>\r\n  </div>\r\n  <!-- ////// -->\r\n\r\n  <!-- ////// -->\r\n\r\n  <div *ngIf=\"platfromsettingsformForm\" class=\"col-md-12\">\r\n    <h3 style=\"text-align:center\">Add(Platformsettings)</h3>\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <form #platfromsettings=\"ngForm\" (ngSubmit)=\"platfromsettings.form.valid && onSubmit(platfromsettings)\" id=\"form\" novalidate>\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4\">Platform Description</label>\r\n            <select ngModel class=\"form-control\" name=\"AccountPlatformID\" #AccountPlatformID=\"ngModel\" [(ngModel)]=\"newplatfromsettingsform.AccountPlatformID\"\r\n              required>\r\n              <option [ngValue]=\"accplatform.ID\" *ngFor=\"let accplatform of accountplatforms\">{{accplatform.Key}}</option>\r\n            </select>\r\n            <div *ngIf=\"platfromsettings.submitted && AccountPlatformID.invalid\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"AccountPlatformID.errors.required\" class=\"alert alert-danger\">AccountPlatformID is required</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4\">Key</label>\r\n            <select ngModel class=\"form-control\" name=\"Key\" #Key=\"ngModel\" [(ngModel)]=\"newplatfromsettingsform.Key\"\r\n              required>\r\n              <option *ngFor=\"let platformKey of platformSettingsDefaultKey\">{{platformKey.Key}}</option>\r\n            </select>\r\n            <div *ngIf=\"platfromsettings.submitted && Key.invalid\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"Key.errors.required\" class=\"alert alert-danger\">Key is required</div>\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4\">Value</label>\r\n            <input ngModel type=\"text\" class=\"form-control\" [(ngModel)]=\"newplatfromsettingsform.Type\" name=\"Value\" #Value=\"ngModel\"\r\n            required minlength=\"3\"/>\r\n            <div *ngIf=\"platfromsettings.submitted && Value.invalid\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"Value.errors.required\" class=\"alert alert-danger\">Value is required</div>\r\n              <div *ngIf=\"Value.errors.minlength\" class=\"alert alert-danger\">Value must be at least 5 characters</div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group col-md-12\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n            <button type=\"button\" class=\"btn btn-warning\" (click)=\"cancelNewAccountPlatform()\">Cancel</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- /////////////// -->\r\n  <!-- Edit AccountPlatform -->\r\n  <div *ngIf=\"editplatfromsettingsformForm\" class=\"col-md-12\">\r\n    <h3 style=\"text-align:center\">Edit(Platformsettings)</h3>\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <form #editedplatfromsettings=\"ngForm\" (ngSubmit)=\"onSubmitUpdate(editedplatfromsettings)\" id=\"form\">\r\n          <div [style.visibility]=\"'hidden'\">\r\n            <label class=\"col-md-4\">ID</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"editedplatfromsettings.ID\" name=\"ID\" />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4\">Platform Description</label>\r\n            <select ngModel class=\"form-control\" name=\"AccountPlatformID\" [(ngModel)]=\"editedplatfromsettings.AccountPlatformID\">\r\n              <option [ngValue]=\"accplatform.ID\" *ngFor=\"let accplatform of accountplatforms\">{{accplatform.Key}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4\">Key</label>\r\n            <input ngModel type=\"text\" class=\"form-control\" [(ngModel)]=\"editedplatfromsettings.Key\" name=\"Key\" />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4\">Value</label>\r\n            <input ngModel type=\"text\" class=\"form-control\" [(ngModel)]=\"editedplatfromsettings.Value\" name=\"Value\" />\r\n          </div>\r\n          <div class=\"form-group col-md-12\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Update</button>\r\n            <button type=\"button\" class=\"btn btn-warning\" (click)=\"cancelEdits()\">Cancel</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- ////// -->\r\n</div>"

/***/ }),

/***/ "./src/app/widgets/platformsetting/platformsetting.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/widgets/platformsetting/platformsetting.component.ts ***!
  \**********************************************************************/
/*! exports provided: PlatformsettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformsettingComponent", function() { return PlatformsettingComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_commonservices_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/commonservices/services */ "./src/app/core/commonservices/services.ts");
/* harmony import */ var _platformsettings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./platformsettings.service */ "./src/app/widgets/platformsetting/platformsettings.service.ts");
/* harmony import */ var _core_data_PlatformSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/data/PlatformSettings */ "./src/app/core/data/PlatformSettings.ts");
/* harmony import */ var _core_data_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/data/global */ "./src/app/core/data/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PlatformsettingComponent = /** @class */ (function () {
    function PlatformsettingComponent(platformsettingsService, services, router, accountIdForToken, platformSetting, actvatedRoute) {
        this.platformsettingsService = platformsettingsService;
        this.services = services;
        this.router = router;
        this.accountIdForToken = accountIdForToken;
        this.platformSetting = platformSetting;
        this.actvatedRoute = actvatedRoute;
        this.submitted = false;
        //  accounPLatformForm: boolean = false;
        this.platfromsettingsformForm = false;
        this.editplatfromsettingsformForm = false;
        this.newplatfromsettingsform = {};
        this.editedplatfromsettings = {};
        this.platformSetting.ID = 0,
            this.platformSetting.CreatedOn = "0000-00-00 00:00:00";
        this.platformSetting.UpdatedOn = "0000-00-00 00:00:00";
        this.platformSetting.Deleted = false;
    }
    PlatformsettingComponent.prototype.ngOnInit = function () {
        this.accountPlatformID = parseInt(localStorage.getItem("accountplatformId"));
        this.getPlatformsettings();
        this.getAllAccountPlatforms();
        this.getAllPlatfroms();
        this.getAllPlugins();
        this.getPlatformsettingByDefault();
    };
    PlatformsettingComponent.prototype.ngDoCheck = function () {
        // this.getPlatformsettingByDefault();
    };
    PlatformsettingComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.platformSetting.AccountPlatformID = this.accountPlatformID;
        this.platformSetting.Value = form.value.Value;
        this.platformSetting.Key = form.value.Key;
        this.platformsettingsService.createPlatformsettings(this.platformSetting).subscribe(function (t) {
            if (t) {
                _this.platfromsettingsformForm = false;
                _this.getPlatformsettings();
            }
            else {
                _this.message = "Please try again!!";
            }
        });
        this.submitted = true;
    };
    PlatformsettingComponent.prototype.onSubmitUpdate = function (form) {
        var _this = this;
        this.platformSetting.ID = form.value.ID;
        this.platformSetting.AccountPlatformID = form.value.AccountPlatformID;
        this.platformSetting.Value = form.value.Value;
        this.platformSetting.Key = form.value.Key;
        this.platformsettingsService.updatePlatformsettings(this.form.value).subscribe(function (t) {
            if (t) {
                _this.editplatfromsettingsformForm = false;
                _this.editedplatfromsettings = {};
                _this.getPlatformsettings();
            }
            else {
                _this.message = "Please try again!!";
            }
        });
        this.submitted = true;
    };
    PlatformsettingComponent.prototype.showEditPlatformSettingsForm = function (platformsetting) {
        if (!platformsetting) {
            this.platfromsettingsformForm = false;
            return;
        }
        this.editplatfromsettingsformForm = true;
        this.editedplatfromsettings = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["clone"])(platformsetting);
    };
    PlatformsettingComponent.prototype.showAddPlatformsettingsForm = function () {
        // resets form if edited platfromsettings
        if (this.platformSettings) {
            if (this.platformSettings.length) {
                this.newplatfromsettingsform = {};
            }
        }
        this.platfromsettingsformForm = true;
        this.isNewForm = true;
    };
    PlatformsettingComponent.prototype.updateAccountPlatform = function () {
        this.platformsettingsService.updatePlatformsettings(this.editedplatfromsettings);
        this.editplatfromsettingsformForm = false;
        this.editedplatfromsettings = {};
    };
    PlatformsettingComponent.prototype.removePlatformsettings = function (platformsetting) {
        var _this = this;
        this.platformsettingsService.deletePlatformsettingsById(platformsetting).subscribe(function (t) {
            if (t) {
                _this.editplatfromsettingsformForm = false;
                _this.platfromsettingsformForm = false;
                _this.getPlatformsettings();
            }
            else {
                _this.message = "Please try again!!";
            }
        });
        this.submitted = true;
    };
    PlatformsettingComponent.prototype.getPlatformsettings = function () {
        var _this = this;
        this.platformsettingsService.getAllPlatformsettings(this.accountPlatformID).subscribe(function (p) {
            if (p.length == 42) {
                _this.platformSettings = [];
            }
            else {
                _this.platformSettings = p;
            }
            console.log(_this.platformSettings);
        });
    };
    PlatformsettingComponent.prototype.getPlatformsettingByDefault = function () {
        var _this = this;
        this.platformsettingsService.getPlatformsettingByDefault(this.accountPlatformID).subscribe(function (p) {
            _this.platformSettingsDefaultKey = p;
            console.log(_this.platformSettingsDefaultKey);
        });
    };
    PlatformsettingComponent.prototype.getAllAccountPlatforms = function () {
        var _this = this;
        this.services.getAllAccountPlatform().subscribe(function (p) {
            _this.accountplatforms = p;
            console.log(_this.accountplatforms);
        });
    };
    PlatformsettingComponent.prototype.getAllPlatfroms = function () {
        var _this = this;
        this.services.getAllPlatform().subscribe(function (p) {
            _this.platforms = p;
        });
    };
    PlatformsettingComponent.prototype.getAllPlugins = function () {
        var _this = this;
        this.services.getAllPlugin().subscribe(function (p) {
            _this.plugins = p;
        });
    };
    PlatformsettingComponent.prototype.cancelNewAccountPlatform = function () {
        this.newplatfromsettingsform = {};
        this.platfromsettingsformForm = false;
    };
    PlatformsettingComponent.prototype.cancelEdits = function () {
        this.newplatfromsettingsform = {};
        this.platfromsettingsformForm = false;
    };
    PlatformsettingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-platformsetting',
            template: __webpack_require__(/*! ./platformsetting.component.html */ "./src/app/widgets/platformsetting/platformsetting.component.html"),
            styles: [__webpack_require__(/*! ./platformsetting.component.css */ "./src/app/widgets/platformsetting/platformsetting.component.css")],
            providers: [_platformsettings_service__WEBPACK_IMPORTED_MODULE_4__["PlatformsettingsService"], _core_commonservices_services__WEBPACK_IMPORTED_MODULE_3__["Services"], _core_data_PlatformSettings__WEBPACK_IMPORTED_MODULE_5__["Platformsettings"], _core_data_global__WEBPACK_IMPORTED_MODULE_6__["MyGlobal"]]
        }),
        __metadata("design:paramtypes", [_platformsettings_service__WEBPACK_IMPORTED_MODULE_4__["PlatformsettingsService"],
            _core_commonservices_services__WEBPACK_IMPORTED_MODULE_3__["Services"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            _core_data_global__WEBPACK_IMPORTED_MODULE_6__["MyGlobal"],
            _core_data_PlatformSettings__WEBPACK_IMPORTED_MODULE_5__["Platformsettings"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
    ], PlatformsettingComponent);
    return PlatformsettingComponent;
}());



/***/ }),

/***/ "./src/app/widgets/platformsetting/platformsettings-routing.ts":
/*!*********************************************************************!*\
  !*** ./src/app/widgets/platformsetting/platformsettings-routing.ts ***!
  \*********************************************************************/
/*! exports provided: PlatformsettingsWidgetRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformsettingsWidgetRoutingModule", function() { return PlatformsettingsWidgetRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _platformsetting_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./platformsetting.component */ "./src/app/widgets/platformsetting/platformsetting.component.ts");
/**
 * Created by mohma on 7/26/2017.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _platformsetting_component__WEBPACK_IMPORTED_MODULE_2__["PlatformsettingComponent"],
        data: {
            title: 'data'
        }
    }
];
var PlatformsettingsWidgetRoutingModule = /** @class */ (function () {
    function PlatformsettingsWidgetRoutingModule() {
    }
    PlatformsettingsWidgetRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PlatformsettingsWidgetRoutingModule);
    return PlatformsettingsWidgetRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=widgets-modules-platformsettings-module.js.map