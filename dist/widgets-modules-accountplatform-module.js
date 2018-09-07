(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["widgets-modules-accountplatform-module"],{

/***/ "./src/app/core/data/AccountPlatform.ts":
/*!**********************************************!*\
  !*** ./src/app/core/data/AccountPlatform.ts ***!
  \**********************************************/
/*! exports provided: AccountPlatform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPlatform", function() { return AccountPlatform; });
var AccountPlatform = /** @class */ (function () {
    function AccountPlatform() {
    }
    return AccountPlatform;
}());



/***/ }),

/***/ "./src/app/core/data/integrationfilter.ts":
/*!************************************************!*\
  !*** ./src/app/core/data/integrationfilter.ts ***!
  \************************************************/
/*! exports provided: IntegrationFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntegrationFilter", function() { return IntegrationFilter; });
var IntegrationFilter = /** @class */ (function () {
    function IntegrationFilter() {
    }
    return IntegrationFilter;
}());



/***/ }),

/***/ "./src/app/widgets/accountplatform/accountplatform-routing.ts":
/*!********************************************************************!*\
  !*** ./src/app/widgets/accountplatform/accountplatform-routing.ts ***!
  \********************************************************************/
/*! exports provided: AccountPlatformWidgetRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPlatformWidgetRoutingModule", function() { return AccountPlatformWidgetRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _accountplatform_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accountplatform.component */ "./src/app/widgets/accountplatform/accountplatform.component.ts");
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
        component: _accountplatform_component__WEBPACK_IMPORTED_MODULE_2__["AccountPlatformWidgetComponent"],
        data: {
            title: 'data'
        }
    }
];
var AccountPlatformWidgetRoutingModule = /** @class */ (function () {
    function AccountPlatformWidgetRoutingModule() {
    }
    AccountPlatformWidgetRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AccountPlatformWidgetRoutingModule);
    return AccountPlatformWidgetRoutingModule;
}());



/***/ }),

/***/ "./src/app/widgets/accountplatform/accountplatform.component.html":
/*!************************************************************************!*\
  !*** ./src/app/widgets/accountplatform/accountplatform.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- List of AccountPlatform-->\r\n<div class=\"col-md-12\">\r\n  <h3 style=\"text-align: center\">Account Platforms</h3>\r\n  <table class=\"table table-bordered table-striped table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <th class=\"text-center\">ID</th>\r\n        <th class=\"text-center\">Type</th>\r\n        <th class=\"text-center\">Key</th>\r\n        <th class=\"text-center\">IsActive</th>\r\n        <th>&nbsp;</th>\r\n        <th>&nbsp;</th>\r\n        <th>&nbsp;</th>\r\n        <th>&nbsp;</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let accountplatform of accountplatforms\">\r\n        <td>{{accountplatform.ID}}</td>\r\n        <td>{{accountplatform.Type}}</td>\r\n        <td>{{accountplatform.Key}}</td>\r\n        <td>{{accountplatform.IsActive}}</td>\r\n        <td>\r\n          <button mat-flat-button color=\"accent\" (click)=\"showEditAccountPlatformForm(accountplatform)\">\r\n            <i class=\"fa fa-edit\"></i>\r\n          </button>\r\n        </td>\r\n        <td>\r\n          <button mat-flat-button color color=\"warn\" (click)=\"removeAccountPlatform(accountplatform)\">\r\n            <i class=\"fa fa-minus\"></i>\r\n          </button>\r\n        </td>\r\n        <td>\r\n          <button mat-flat-button color=\"primary\" (click)=\"goPlatformSettings(accountplatform)\">Go to Platformsettings\r\n            <i class=\"fa fa-angle-double-right\"></i>\r\n          </button>\r\n        </td>\r\n        <td>\r\n          <button mat-flat-button color=\"primary\" (click)=\"goIntegrationFilters(accountplatform)\">Go to IntegrationFilters\r\n            <i class=\"fa fa-angle-double-right\"></i>\r\n          </button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <button class=\"btn btn-success\" (click)=\"showAddAccountPlatformForm()\">\r\n    <i class=\"fa fa-plus\"></i>\r\n  </button>\r\n</div>\r\n\r\n<!-- Create AccountPlatform -->\r\n<div *ngIf=\"accounPlatformForm\" class=\"col-md-12\">\r\n  <h3 style=\"text-align:center\">Add(Accountplatform)</h3>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <form #accountPlatForm=\"ngForm\" (ngSubmit)=\"accountPlatForm.form.valid && onSubmit(accountPlatForm)\" id=\"form\" novalidate>\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-4\">Platform Description</label>\r\n          <select id=\"platformID\" ngModel class=\"form-control\" name=\"PlatformID\" [(ngModel)]=\"newAccountPlatform.PlatformID\" required\r\n            #PlatformID=\"ngModel\">\r\n            <option [ngValue]=\"platform.ID\" *ngFor=\"let platform of platforms\">{{platform.Description}}</option>\r\n          </select>\r\n          <div *ngIf=\"accountPlatForm.submitted && PlatformID.invalid\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"PlatformID.errors.required\" class=\"alert alert-danger\">PlatformID is required</div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-4\">Plugin Title</label>\r\n          <select ngModel class=\"form-control\" name=\"PluginID\" [(ngModel)]=\"newAccountPlatform.PluginID\" required #PluginID=\"ngModel\">\r\n            <option [ngValue]=\"plugin.ID\" *ngFor=\"let plugin of plugins\">{{plugin.Title}}</option>\r\n          </select>\r\n          <div *ngIf=\"accountPlatForm.submitted && PluginID.invalid\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"PluginID.errors.required\" class=\"alert alert-danger\">PluginID is required</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-4\">Type</label>\r\n          <input ngModel type=\"text\" class=\"form-control\" [(ngModel)]=\"newAccountPlatform.Type\" required minlength=\"5\" maxlength=\"100\"\r\n            name=\"Type\" #Type=\"ngModel\" />\r\n          <div *ngIf=\"accountPlatForm.submitted && Type.invalid\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"Type.errors.required\" class=\"alert alert-danger\">Type is required</div>\r\n            <div *ngIf=\"Type.errors.minlength\" class=\"alert alert-danger\">Type must be at least 5 characters</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-4\">Key</label>\r\n          <input ngModel type=\"text\" class=\"form-control\" [(ngModel)]=\"newAccountPlatform.Key\" required minlength=\"5\" maxlength=\"100\"\r\n            name=\"Key\" #Key=\"ngModel\" />\r\n          <div *ngIf=\"accountPlatForm.submitted && Key.invalid\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"Key.errors.required\" class=\"alert alert-danger\">Key is required</div>\r\n            <div *ngIf=\"Key.errors.minlength\" class=\"alert alert-danger\">Key must be at least 5 characters</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"checkbox\">\r\n          <mat-checkbox [(ngModel)]=\"newAccountPlatform.IsActive\" ngModel name=\"IsActive\" (change)=\"isIndeterminate = false\" [indeterminate]=\"isIndeterminate\"\r\n            [disabled]=\"isDisabled\" [labelPosition]=\"labelPosition\">IsActive\r\n          </mat-checkbox>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <button mat-flat-button color=\"primary\" type=\"submit\">Save</button>\r\n          <button mat-flat-button color=\"warn\" type=\"button\" (click)=\"cancelNewAccountPlatform()\">Cancel</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Edit AccountPlatform -->\r\n<div *ngIf=\"editAcountPlatformForm\" class=\"col-md-12\">\r\n  <h3 style=\"text-align: center\">Edit(Accountplatform)</h3>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <form #editedAccountPlatForm=\"ngForm\" (ngSubmit)=\"editedAccountPlatForm.form.valid && onSubmitUpdate(editedAccountPlatForm)\"\r\n        id=\"form\">\r\n        <div [style.visibility]=\"'hidden'\">\r\n          <label class=\"col-md-4\">ID</label>\r\n          <input ngModel type=\"text\" class=\"form-control\" [(ngModel)]=\"editedAccountPlatform.ID\" name=\"ID\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-4\">Platform Description</label>\r\n          <select ngModel class=\"form-control\" name=\"PlatformID\" [(ngModel)]=\"editedAccountPlatform.PlatformID\" #PlatformID=\"ngModel\"\r\n            required>\r\n            <option [ngValue]=\"platform.ID\" *ngFor=\"let platform of platforms\">{{platform.Description}}</option>\r\n          </select>\r\n          <div *ngIf=\"editedAccountPlatForm.submitted && PlatformID.invalid\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"PlatformID.errors.required\" class=\"alert alert-danger\">PlatformID is required</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-4\">Plugin Title</label>\r\n          <select ngModel class=\"form-control\" name=\"PluginID\" [(ngModel)]=\"editedAccountPlatform.PluginID\" required #PluginID=\"ngModel\">\r\n            <option [ngValue]=\"plugin.ID\" *ngFor=\"let plugin of plugins\">{{plugin.Title}}</option>\r\n          </select>\r\n          <div *ngIf=\"editedAccountPlatForm.submitted && PluginID.invalid\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"PluginID.errors.required\" class=\"alert alert-danger\">PluginID is required</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-4\">Type</label>\r\n          <input ngModel type=\"text\" class=\"form-control\" [(ngModel)]=\"editedAccountPlatform.Type\" required minlength=\"5\" maxlength=\"100\"\r\n            name=\"Type\" #Type=\"ngModel\" />\r\n          <div *ngIf=\"editedAccountPlatForm.submitted && Type.invalid\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"Type.errors.required\" class=\"alert alert-danger\">Type is required</div>\r\n            <div *ngIf=\"Type.errors.minlength\" class=\"alert alert-danger\">Type must be at least 5 characters</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-4\">Key</label>\r\n          <input ngModel type=\"text\" class=\"form-control\" [(ngModel)]=\"editedAccountPlatform.Key\" required minlength=\"5\" maxlength=\"100\"\r\n            name=\"Key\" #Key=\"ngModel\" />\r\n          <div *ngIf=\"editedAccountPlatForm.submitted && Key.invalid\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"Key.errors.required\" class=\"alert alert-danger\">Key is required</div>\r\n            <div *ngIf=\"Key.errors.minlength\" class=\"alert alert-danger\">Key must be at least 5 characters</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"checkbox\">\r\n          <div class=\"checkbox\">\r\n            <mat-checkbox [(ngModel)]=\"editedAccountPlatform.IsActive\" ngModel name=\"IsActive\" (change)=\"isIndeterminate = false\" [indeterminate]=\"isIndeterminate\"\r\n              [disabled]=\"isDisabled\" [labelPosition]=\"labelPosition\">IsActive\r\n            </mat-checkbox>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col-md-12\">\r\n          <button mat-flat-button color=\"primary\" type=\"submit\">Update</button>\r\n          <button mat-flat-button color=\"warn\" type=\"button\" (click)=\"cancelEdits()\">Cancel</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- List of PlatformSettings-->\r\n<div *ngIf=\"platformSettingList\" class=\"col-md-12\">\r\n  <h3 style=\"text-align: center\">Platform Settings</h3>\r\n  <table class=\"table table-bordered table-striped table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <th class=\"text-center\">ID</th>\r\n        <th class=\"text-center\">Key</th>\r\n        <th class=\"text-center\">Value</th>\r\n        <th></th>\r\n        <th></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let platformset of platformSettings\">\r\n        <td>{{platformset.ID}}</td>\r\n        <td>{{platformset.Key}}</td>\r\n        <td>{{platformset.Value}}</td>\r\n        <td>\r\n          <button mat-flat-button color=\"accent\" (click)=\"showEditPlatformsettingsForm(platformset)\">\r\n            <i class=\"fa fa-edit\"></i>\r\n          </button>\r\n        </td>\r\n        <td>\r\n          <button mat-flat-button color=\"warn\" (click)=\"removePlatformsettings(platformset)\">\r\n            <i class=\"fa fa-minus\"></i>\r\n          </button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <button class=\"btn btn-success\" (click)=\"showAddPlatformsettingsForm()\">\r\n    <i class=\"fa fa-plus\"></i>\r\n  </button>\r\n</div>\r\n\r\n<!-- Create PlatformSettings -->\r\n\r\n<div *ngIf=\"createPlatformSettings\" class=\"col-md-12\">\r\n  <h3 style=\"text-align:center\">Add(Platformsettings)</h3>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <form #platfromsettings=\"ngForm\" (ngSubmit)=\"platfromsettings.form.valid && onSubmitPlatfromsettings(platfromsettings)\" id=\"form\">\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-4\">Key</label>\r\n          <select ngModel class=\"form-control\" name=\"Key\" [(ngModel)]=\"newplatfromsettingsform.Key\" required #Key=\"ngModel\">\r\n            <option *ngFor=\"let defaultplatforsetting of platformsettingsdefault\">{{defaultplatforsetting.Key}}</option>\r\n          </select>\r\n          <div *ngIf=\"platfromsettings.submitted && Key.invalid\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"Key.errors.required\" class=\"alert alert-danger\">Key is required</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-4\">Value</label>\r\n          <input ngModel type=\"text\" class=\"form-control\" [(ngModel)]=\"newplatfromsettingsform.Value\" name=\"Value\" required #Value=\"ngModel\"\r\n            minlength=\"3\" />\r\n          <div *ngIf=\"platfromsettings.submitted && Value.invalid\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"Value.errors.required\" class=\"alert alert-danger\">Value is required</div>\r\n            <div *ngIf=\"Value.errors.minlength\" class=\"alert alert-danger\">Value must be at least 3 characters</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col-md-12\">\r\n          <button type=\"submit\" mat-flat-button color=\"primary\">Save</button>\r\n          <button type=\"button\" mat-flat-button color=\"accent\" (click)=\"cancelNewPlatformSettings()\">Cancel</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Edit PlatformSettings -->\r\n\r\n<div *ngIf=\"editPlatformSettings\" class=\"col-md-12\">\r\n  <h3 style=\"text-align:center\">Edit(Platformsettings)</h3>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <form #editedPlatformSettingsForm=\"ngForm\" (ngSubmit)=\"editedPlatformSettingsForm.form.valid && onSubmitUpdatePlatfromsettings(editedPlatformSettingsForm)\"\r\n        id=\"form\">\r\n        <div class=\"form-group\" style=\"display:none\">\r\n          <input ngModel class=\"form-control\" [(ngModel)]=\"editedPlatformSettings.ID\" name=\"ID\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-4\">Key</label>\r\n          <select ngModel class=\"form-control\" name=\"Key\" [(ngModel)]=\"editedPlatformSettings.Key\" required #Key=\"ngModel\">\r\n            <option *ngFor=\"let defaultplatforsetting of platformsettingsdefault\">{{defaultplatforsetting.Key}}</option>\r\n          </select>\r\n          <div *ngIf=\"editedPlatformSettingsForm.submitted && Key.invalid\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"Key.errors.required\" class=\"alert alert-danger\">Key is required</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-4\">Value</label>\r\n          <input ngModel type=\"text\" class=\"form-control\" [(ngModel)]=\"editedPlatformSettings.Value\" name=\"Value\" required #Value=\"ngModel\"\r\n            minlength=\"3\" />\r\n          <div *ngIf=\"editedPlatformSettingsForm.submitted && Value.invalid\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"Value.errors.required\" class=\"alert alert-danger\">Value is required</div>\r\n            <div *ngIf=\"Value.errors.minlength\" class=\"alert alert-danger\">Value must be at least 3 characters</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col-md-12\">\r\n          <button type=\"submit\" mat-flat-button color=\"primary\">Save</button>\r\n          <button type=\"button\" mat-flat-button color=\"accent\" (click)=\"cancelNewPlatformSettings()\">Cancel</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- List of IntegrationFilters-->\r\n\r\n<div *ngIf=\"IntegrationFilterList\" class=\"col-md-12\">\r\n  <h3 style=\"text-align: center\">Integration Filters</h3>\r\n  <table class=\"table table-bordered table-striped table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <th class=\"text-center\">ID</th>\r\n        <th class=\"text-center\">Key</th>\r\n        <th class=\"text-center\">Value</th>\r\n        <th class=\"text-center\">FilterType</th>\r\n        <th class=\"text-center\">FilterCondition</th>\r\n        <th class=\"text-center\">AccountPlatformID</th>\r\n        <th class=\"text-center\">Result</th>\r\n        <th></th>\r\n        <th></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let integrationfilter of integrationFilters\">\r\n        <td>{{integrationfilter.ID}}</td>\r\n        <td>{{integrationfilter.key}}</td>\r\n        <td>{{integrationfilter.Value}}</td>\r\n        <td>{{integrationfilter.FilterType}}</td>\r\n        <td>{{integrationfilter.FilterCondition}}</td>\r\n        <td>{{integrationfilter.AccountPlatformID}}</td>\r\n        <td>{{integrationfilter.Result}}</td>\r\n        <td>\r\n          <button mat-flat-button color=\"accent\" (click)=\"showEditIntegrationFilters(integrationfilter)\">\r\n            <i class=\"fa fa-edit\"></i>\r\n          </button>\r\n        </td>\r\n        <td>\r\n          <button mat-flat-button color=\"warn\" (click)=\"removeIntegrationFilters(integrationfilter)\">\r\n            <i class=\"fa fa-minus\"></i>\r\n          </button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <button class=\"btn btn-primary\" (click)=\"showAddIntegrationFiltersForm()\">\r\n    <i class=\"fa fa-plus\"></i>\r\n  </button>\r\n</div>\r\n\r\n<!-- Create IntegrationFilters -->\r\n<div *ngIf=\"createIntegrationFilters\" class=\"col-md-12\">\r\n  <h4 style=\"text-align:center;\">Add(Integrationfilters)</h4>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <form #integrationFilters=\"ngForm\" (ngSubmit)=\"integrationFilters.form.valid &&  onSubmitIntegrationFilters(integrationFilters)\"\r\n        id=\"form\">\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-4\">Key</label>\r\n          <select ngModel class=\"form-control\" name=\"key\" [(ngModel)]=\"newIntegrationFiltersform.key\" required #key=\"ngModel\">\r\n            <option *ngFor=\"let integrationFilter of integrationFiltersdefault\">{{integrationFilter.Value}}</option>\r\n          </select>\r\n          <div *ngIf=\"integrationFilters.submitted && key.invalid\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"key.errors.required\" class=\"alert alert-danger\">Key is required</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-4\">Value</label>\r\n          <input ngModel type=\"text\" class=\"form-control\" [(ngModel)]=\"newIntegrationFiltersform.Key\" name=\"Value\" required #Value=\"ngModel\"\r\n          />\r\n          <div *ngIf=\"integrationFilters.submitted && Value.invalid\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"Value.errors.required\" class=\"alert alert-danger\">Value is required</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-4\">FilterCondition</label>\r\n          <select ngModel class=\"form-control\" name=\"FilterCondition\" [(ngModel)]=\"newIntegrationFiltersform.FilterCondition\" required\r\n            #FilterCondition=\"ngModel\">\r\n            <option *ngFor=\"let filtercondition of filterConditions\">{{filtercondition.Value}}</option>\r\n          </select>\r\n          <div *ngIf=\"integrationFilters.submitted && FilterCondition.invalid\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"FilterCondition.errors.required\" class=\"alert alert-danger\">FilterCondition is required</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-4\">FilterType</label>\r\n          <select ngModel class=\"form-control\" name=\"FilterType\" [(ngModel)]=\"newIntegrationFiltersform.FilterType\" required #FilterType=\"ngModel\">\r\n            <option *ngFor=\"let filtertype of filterTypes\">{{filtertype.Value}}</option>\r\n          </select>\r\n          <div *ngIf=\"integrationFilters.submitted && FilterType.invalid\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"FilterType.errors.required\" class=\"alert alert-danger\">FilterType is required</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-4\">Result</label>\r\n          <input ngModel type=\"text\" class=\"form-control\" [(ngModel)]=\"newIntegrationFiltersform.Result\" name=\"Result\" required #Result=\"ngModel\"\r\n          />\r\n          <div *ngIf=\"integrationFilters.submitted && Result.invalid\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"Result.errors.required\" class=\"alert alert-danger\">Result is required</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col-md-12\">\r\n          <button type=\"submit\" mat-flat-button color=\"primary\">Save</button>\r\n          <button type=\"button\" mat-flat-button color=\"accent\" (click)=\"cancelIntegrationFilters()\">Cancel</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Edit IntegrationFilters -->\r\n<div *ngIf=\"editIntegrationFilters\" class=\"md-col-12\">\r\n  <h3 style=\"text-align: center\">Edit (IntegrationFilters)</h3>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <form #editIntegrationFilters=\"ngForm\" (ngSubmit)=\"editIntegrationFilters.form.valid && onSubmitUpdateIntegrationFilters(editIntegrationFilters)\"\r\n        id=\"form\">\r\n        <div class=\"form-group\" style=\"display:none\">\r\n            <input ngModel class=\"form-control\" [(ngModel)]=\"editedIntegrationFilters.ID\" name=\"ID\" />\r\n        </div>\r\n        <div class=\"form-group\" style=\"display:none\">\r\n            <input ngModel class=\"form-control\" [(ngModel)]=\"editedIntegrationFilters.AccountPlatformID\" name=\"AccountPlatformID\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-4\">Key</label>\r\n          <select ngModel class=\"form-control\" name=\"key\" [(ngModel)]=\"editedIntegrationFilters.key\" required #key=\"ngModel\">\r\n            <option *ngFor=\"let defaultIntegrationFilters of integrationFiltersdefault\">{{defaultIntegrationFilters.Value}}</option>\r\n          </select>\r\n          <div *ngIf=\"editIntegrationFilters.submitted && key.invalid\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"key.errors.required\" class=\"alert alert-danger\">Key is required</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-4\">Value</label>\r\n          <input ngModel type=\"text\" class=\"form-control\" [(ngModel)]=\"editedIntegrationFilters.Value\" name=\"Value\" required #Value=\"ngModel\"\r\n          />\r\n          <div *ngIf=\"editIntegrationFilters.submitted && Value.invalid\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"Value.errors.required\" class=\"alert alert-danger\">Value is required</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-4\">FilterType</label>\r\n          <select ngModel class=\"form-control\" name=\"FilterType\" [(ngModel)]=\"editedIntegrationFilters.FilterType\" required #FilterType=\"ngModel\">\r\n            <option *ngFor=\"let defaultFilterTypes of filterTypes\">{{defaultFilterTypes.Value}}</option>\r\n          </select>\r\n          <div *ngIf=\"editIntegrationFilters.submitted && FilterType.invalid\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"FilterType.errors.required\" class=\"alert alert-danger\">FilterType is required</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-4\">Filter Condition</label>\r\n            <select ngModel class=\"form-control\" name=\"FilterCondition\" [(ngModel)]=\"editedIntegrationFilters.FilterCondition\" required\r\n              #FilterCondition=\"ngModel\">\r\n              <option *ngFor=\"let defaultFilterConditions of filterConditions\">{{defaultFilterConditions.Value}}</option>\r\n            </select>\r\n            <div *ngIf=\"editIntegrationFilters.submitted && FilterCondition.invalid\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"FilterCondition.errors.required\" class=\"alert alert-danger\">FilterCondition is required</div>\r\n            </div>\r\n          </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-4\">Result</label>\r\n          <input ngModel type=\"text\" class=\"form-control\" [(ngModel)]=\"editedIntegrationFilters.Result\" name=\"Result\" required #Result=\"ngModel\"\r\n          />\r\n          <div *ngIf=\"editIntegrationFilters.submitted && Result.invalid\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"Result.errors.required\" class=\"alert alert-danger\">Result is required</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group clo-md-12\">\r\n          <button type=\"submit\" mat-flat-button color=\"primary\">Save</button>\r\n          <button type=\"button\" mat-flat-button color=\"accent\" (click)=\"cancelEditIntegrationFilters()\">Cancel</button>\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/widgets/accountplatform/accountplatform.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/widgets/accountplatform/accountplatform.component.ts ***!
  \**********************************************************************/
/*! exports provided: AccountPlatformWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPlatformWidgetComponent", function() { return AccountPlatformWidgetComponent; });
/* harmony import */ var _accountplatform_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accountplatform.service */ "./src/app/widgets/accountplatform/accountplatform.service.ts");
/* harmony import */ var _core_data_AccountPlatform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/AccountPlatform */ "./src/app/core/data/AccountPlatform.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_commonservices_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/commonservices/services */ "./src/app/core/commonservices/services.ts");
/* harmony import */ var _core_data_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/data/global */ "./src/app/core/data/global.ts");
/* harmony import */ var _core_data_PlatformSettings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/data/PlatformSettings */ "./src/app/core/data/PlatformSettings.ts");
/* harmony import */ var _platformsetting_platformsettings_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../platformsetting/platformsettings.service */ "./src/app/widgets/platformsetting/platformsettings.service.ts");
/* harmony import */ var _integrationfilters_integrationfilter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../integrationfilters/integrationfilter.service */ "./src/app/widgets/integrationfilters/integrationfilter.service.ts");
/* harmony import */ var _core_data_integrationfilter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/data/integrationfilter */ "./src/app/core/data/integrationfilter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AccountPlatformWidgetComponent = /** @class */ (function () {
    function AccountPlatformWidgetComponent(accountPlatformService, platformSettingService, integrationFilterService, platformSetting, integrationFilter, services, accountPlatform, router, accountIdForToken, actvatedRoute) {
        this.accountPlatformService = accountPlatformService;
        this.platformSettingService = platformSettingService;
        this.integrationFilterService = integrationFilterService;
        this.platformSetting = platformSetting;
        this.integrationFilter = integrationFilter;
        this.services = services;
        this.accountPlatform = accountPlatform;
        this.router = router;
        this.accountIdForToken = accountIdForToken;
        this.actvatedRoute = actvatedRoute;
        this.submitted = false;
        this.accounPlatformForm = false;
        this.editAcountPlatformForm = false;
        this.editedAccountPlatform = {};
        this.newAccountPlatform = {};
        this.createPlatformSettings = false;
        this.platformSettingList = false;
        this.editPlatformSettings = false;
        this.editedPlatformSettings = {};
        this.newplatfromsettingsform = {};
        this.createIntegrationFilters = false;
        this.IntegrationFilterList = false;
        this.editIntegrationFilters = false;
        this.editedIntegrationFilters = {};
        this.newIntegrationFiltersform = {};
    }
    AccountPlatformWidgetComponent.prototype.ngOnInit = function () {
        this.getAllAccountPlatforms();
        this.getAllFilterType();
        this.getAllFilterCondition();
        this.getAllPlatforms();
        this.getAllPlugins();
    };
    AccountPlatformWidgetComponent.prototype.ngDoCheck = function () {
    };
    // AccountPlatform methods
    AccountPlatformWidgetComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.accountPlatform.AccountID = parseInt(localStorage.getItem("accountID"));
        this.accountPlatform.PlatformID = form.value.PlatformID;
        this.accountPlatform.PluginID = form.value.PluginID;
        this.accountPlatform.Type = form.value.Type;
        this.accountPlatform.Key = form.value.Key;
        if (form.value.IsActive === undefined) {
            this.accountPlatform.IsActive = false;
        }
        else {
            this.accountPlatform.IsActive = form.value.IsActive;
        }
        this.accountPlatformService.createAccountPlatform(this.accountPlatform).subscribe(function (t) {
            if (t) {
                _this.accounPlatformForm = false;
                _this.getAllAccountPlatforms();
            }
            else {
                _this.message = "Please try again!!";
            }
        });
        this.submitted = true;
    };
    AccountPlatformWidgetComponent.prototype.onSubmitUpdate = function (form) {
        var _this = this;
        this.accountPlatform.ID = form.value.ID;
        this.accountPlatform.AccountID = 1;
        this.accountPlatform.PlatformID = form.value.PlatformID;
        this.accountPlatform.PluginID = form.value.PluginID;
        this.accountPlatform.Type = form.value.Type;
        this.accountPlatform.Key = form.value.Key;
        this.accountPlatform.IsActive = form.value.IsActive;
        this.accountPlatformService.updateAccountPlatform(this.accountPlatform).subscribe(function (t) {
            if (t) {
                _this.accounPlatformForm = false;
                _this.getAllAccountPlatforms();
                _this.editAcountPlatformForm = false;
                _this.editedAccountPlatform = {};
            }
            else {
                _this.message = "Please try again!!";
            }
        });
        this.submitted = true;
    };
    AccountPlatformWidgetComponent.prototype.showEditAccountPlatformForm = function (accountPlatform) {
        if (!accountPlatform) {
            this.accounPlatformForm = false;
            return;
        }
        this.editAcountPlatformForm = true;
        this.editedAccountPlatform = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["clone"])(accountPlatform);
        this.accounPlatformForm = false;
    };
    AccountPlatformWidgetComponent.prototype.showAddAccountPlatformForm = function () {
        // resets form if edited accountPlatform
        if (this.accountplatforms.length) {
            this.newAccountPlatform = {};
        }
        this.accounPlatformForm = true;
        this.editAcountPlatformForm = false;
        this.platformSettingList = false;
    };
    AccountPlatformWidgetComponent.prototype.removeAccountPlatform = function (accountPlatform) {
        var _this = this;
        this.accountPlatformService.deleteAccountPlatformById(accountPlatform).subscribe(function (t) {
            if (t) {
                _this.accounPlatformForm = false;
                _this.editAcountPlatformForm = false;
                _this.getAllAccountPlatforms();
                _this.IntegrationFilterList = false;
                _this.platformSettingList = false;
            }
            else {
                _this.message = "Please try again!!";
            }
        });
        this.submitted = true;
    };
    AccountPlatformWidgetComponent.prototype.getAllAccountPlatforms = function () {
        var _this = this;
        this.accountPlatformService.getAllAccountPlatform().subscribe(function (p) {
            if (p.length === 42) {
                _this.accountplatforms = [];
            }
            else {
                _this.accountplatforms = p;
            }
        });
    };
    AccountPlatformWidgetComponent.prototype.cancelNewAccountPlatform = function () {
        this.newAccountPlatform = {};
        this.accounPlatformForm = false;
    };
    AccountPlatformWidgetComponent.prototype.cancelEdits = function () {
        this.editedAccountPlatform = {};
        this.editAcountPlatformForm = false;
    };
    // Platformsettings methods
    AccountPlatformWidgetComponent.prototype.onSubmitPlatfromsettings = function (form) {
        var _this = this;
        this.platformSetting.AccountPlatformID = this.globalAccountPlatfromID;
        this.platformSetting.Value = form.value.Value;
        this.platformSetting.Key = form.value.Key;
        this.platformSettingService.createPlatformsettings(this.platformSetting).subscribe(function (t) {
            if (t) {
                _this.createPlatformSettings = false;
                _this.getAllPlatfromSettingsByAccountPlatformID(_this.globalAccountPlatfromID);
            }
            else {
                _this.message = "Please try again!!";
            }
        });
        this.submitted = true;
    };
    AccountPlatformWidgetComponent.prototype.onSubmitUpdatePlatfromsettings = function (form) {
        var _this = this;
        this.platformSetting.AccountPlatformID = this.globalAccountPlatfromID;
        this.platformSetting.ID = form.value.ID;
        this.platformSetting.Value = form.value.Value;
        this.platformSetting.Key = form.value.Key;
        this.platformSettingService.updatePlatformsettings(this.platformSetting).subscribe(function (t) {
            if (t) {
                _this.editPlatformSettings = false;
                _this.getAllPlatfromSettingsByAccountPlatformID(_this.globalAccountPlatfromID);
            }
            else {
                _this.message = "Please try again!!";
            }
        }, function (error) {
            _this.message = "Please try again";
        });
        this.submitted = true;
    };
    AccountPlatformWidgetComponent.prototype.showAddPlatformsettingsForm = function () {
        // resets form if edited accountPlatform
        // if (this.platformSettings.length==undefined) {
        this.newplatfromsettingsform = {};
        // }
        this.createPlatformSettings = true;
        this.editPlatformSettings = false;
    };
    AccountPlatformWidgetComponent.prototype.showEditPlatformsettingsForm = function (editplatformsettings) {
        if (!editplatformsettings) {
            this.createPlatformSettings = false;
            return;
        }
        this.editPlatformSettings = true;
        this.editedPlatformSettings = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["clone"])(editplatformsettings);
        this.createPlatformSettings = false;
    };
    AccountPlatformWidgetComponent.prototype.showEditIntegrationFilters = function (editIntegrationFilters) {
        if (!editIntegrationFilters) {
            this.createIntegrationFilters = false;
            return;
        }
        this.editIntegrationFilters = true;
        this.editedIntegrationFilters = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["clone"])(editIntegrationFilters);
        this.createIntegrationFilters = false;
    };
    AccountPlatformWidgetComponent.prototype.getAllPlatfromSettingsByAccountPlatformID = function (accountplatformID) {
        var _this = this;
        this.platformSettingService.getAllPlatformsettings(accountplatformID).subscribe(function (p) {
            if (p.length !== 42) {
                _this.platformSettingList = true;
                _this.platformSettings = p;
            }
            else {
                _this.platformSettingList = true;
                _this.platformSettings = [];
            }
        });
    };
    AccountPlatformWidgetComponent.prototype.getPlatformsettingByDefault = function (accountplatform) {
        var _this = this;
        this.platformSettingService.getPlatformsettingByDefault(accountplatform.ID).subscribe(function (p) {
            _this.platformSettingList = true;
            _this.platformsettingsdefault = p;
        });
    };
    AccountPlatformWidgetComponent.prototype.removePlatformsettings = function (platformsetting) {
        var _this = this;
        console.log(this.accountPlatform);
        this.platformSettingService.deletePlatformsettingsById(platformsetting).subscribe(function (t) {
            if (t) {
                _this.editAcountPlatformForm = false;
                _this.getAllPlatfromSettingsByAccountPlatformID(_this.globalAccountPlatfromID);
            }
            else {
                _this.message = "Please try again!!";
            }
        });
        this.submitted = true;
    };
    //IntegrationFilters Method
    AccountPlatformWidgetComponent.prototype.onSubmitIntegrationFilters = function (form) {
        var _this = this;
        this.integrationFilter.AccountPlatformID = this.globalAccountPlatfromID;
        this.integrationFilter.Value = form.value.Value;
        this.integrationFilter.key = form.value.key;
        this.integrationFilter.FilterCondition = form.value.FilterCondition;
        this.integrationFilter.FilterType = form.value.FilterType;
        this.integrationFilter.Result = form.value.Result;
        this.integrationFilterService.createIntegrationFilters(this.integrationFilter).subscribe(function (t) {
            if (t) {
                _this.createIntegrationFilters = false;
                _this.getAllIntegrationFiltersByAccountPlatformID(_this.globalAccountPlatfromID);
            }
            else {
                _this.message = "Please try again!!";
            }
        });
        this.submitted = true;
    };
    AccountPlatformWidgetComponent.prototype.onSubmitUpdateIntegrationFilters = function (form) {
        var _this = this;
        this.integrationFilter.AccountPlatformID = form.value.AccountPlatformID;
        this.integrationFilter.ID = form.value.ID;
        this.integrationFilter.key = form.value.key;
        this.integrationFilter.FilterType = form.value.FilterType;
        this.integrationFilter.Value = form.value.Value;
        this.integrationFilter.Result = form.value.Result;
        this.integrationFilter.FilterCondition = form.value.FilterCondition;
        this.integrationFilterService.updateIntegrationFilters(this.integrationFilter).subscribe(function (t) {
            if (t) {
                _this.editIntegrationFilters = false;
                _this.getAllIntegrationFiltersByAccountPlatformID(_this.globalAccountPlatfromID);
            }
            else {
                _this.message = "Please try again";
            }
        }, function (error) {
            _this.message = "Please try again";
        });
    };
    AccountPlatformWidgetComponent.prototype.showAddIntegrationFiltersForm = function () {
        if (this.integrationFilters.length) {
            this.newIntegrationFiltersform = {};
        }
        this.createIntegrationFilters = true;
        this.editIntegrationFilters = false;
    };
    AccountPlatformWidgetComponent.prototype.getAllIntegrationFiltersByAccountPlatformID = function (accountplatformID) {
        var _this = this;
        this.integrationFilterService.getAllIntegrationFilters(accountplatformID).subscribe(function (p) {
            console.log(p.length);
            if (p.length == 52) {
                _this.IntegrationFilterList = true;
                _this.integrationFilters = [];
            }
            else {
                _this.IntegrationFilterList = true;
                _this.integrationFilters = p;
            }
        });
    };
    AccountPlatformWidgetComponent.prototype.getIntegrationFiltersByDefault = function (accountplatform) {
        var _this = this;
        this.integrationFilterService.getIntegrationFiltersByDefault(accountplatform.ID).subscribe(function (p) {
            _this.IntegrationFilterList = true;
            _this.integrationFiltersdefault = p;
            console.log(_this.integrationFiltersdefault);
        });
    };
    AccountPlatformWidgetComponent.prototype.removeIntegrationFilters = function (integrationfilter) {
        var _this = this;
        console.log(this.globalAccountPlatfromID);
        this.integrationFilterService.deleteIntegrationFiltersById(integrationfilter).subscribe(function (t) {
            if (t) {
                _this.editIntegrationFilters = false;
                _this.getAllIntegrationFiltersByAccountPlatformID(_this.globalAccountPlatfromID);
            }
            else {
                _this.message = "Please try again!!";
            }
        });
        this.submitted = true;
    };
    AccountPlatformWidgetComponent.prototype.getAllFilterCondition = function () {
        var _this = this;
        this.services.getFilterCondition().subscribe(function (p) {
            _this.filterConditions = p;
        });
    };
    AccountPlatformWidgetComponent.prototype.getAllFilterType = function () {
        var _this = this;
        this.services.getFilterType().subscribe(function (p) {
            _this.filterTypes = p;
        });
    };
    //Common methods
    AccountPlatformWidgetComponent.prototype.getAllPlatforms = function () {
        var _this = this;
        this.services.getAllPlatform().subscribe(function (p) {
            _this.platforms = p;
        });
    };
    AccountPlatformWidgetComponent.prototype.getAllPlugins = function () {
        var _this = this;
        this.services.getAllPlugin().subscribe(function (p) {
            _this.plugins = p;
        });
    };
    AccountPlatformWidgetComponent.prototype.cancelNewPlatformSettings = function () {
        this.newplatfromsettingsform = {};
        this.createPlatformSettings = false;
        this.editPlatformSettings = false;
    };
    AccountPlatformWidgetComponent.prototype.cancelIntegrationFilters = function () {
        this.newIntegrationFiltersform = {};
        this.createIntegrationFilters = false;
    };
    AccountPlatformWidgetComponent.prototype.cancelEditIntegrationFilters = function () {
        this.editedIntegrationFilters = {};
        this.editIntegrationFilters = false;
        this.createIntegrationFilters = false;
    };
    AccountPlatformWidgetComponent.prototype.goPlatformSettings = function (accountplatform) {
        this.getAllPlatfromSettingsByAccountPlatformID(accountplatform.ID);
        this.getPlatformsettingByDefault(accountplatform);
        this.globalAccountPlatfromID = accountplatform.ID;
    };
    AccountPlatformWidgetComponent.prototype.goIntegrationFilters = function (accountplatform) {
        this.getAllIntegrationFiltersByAccountPlatformID(accountplatform.ID);
        this.getIntegrationFiltersByDefault(accountplatform);
        this.globalAccountPlatfromID = accountplatform.ID;
    };
    AccountPlatformWidgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            template: __webpack_require__(/*! ./accountplatform.component.html */ "./src/app/widgets/accountplatform/accountplatform.component.html"),
            selector: 'widget-accountplatform',
            providers: [
                _accountplatform_service__WEBPACK_IMPORTED_MODULE_0__["AccountPlatformService"],
                _core_data_AccountPlatform__WEBPACK_IMPORTED_MODULE_1__["AccountPlatform"],
                _core_commonservices_services__WEBPACK_IMPORTED_MODULE_5__["Services"],
                _core_data_global__WEBPACK_IMPORTED_MODULE_6__["MyGlobal"],
                _platformsetting_platformsettings_service__WEBPACK_IMPORTED_MODULE_8__["PlatformsettingsService"],
                _core_data_PlatformSettings__WEBPACK_IMPORTED_MODULE_7__["Platformsettings"],
                _integrationfilters_integrationfilter_service__WEBPACK_IMPORTED_MODULE_9__["IntegrationFilterService"],
                _core_data_integrationfilter__WEBPACK_IMPORTED_MODULE_10__["IntegrationFilter"],
            ]
        }),
        __metadata("design:paramtypes", [_accountplatform_service__WEBPACK_IMPORTED_MODULE_0__["AccountPlatformService"],
            _platformsetting_platformsettings_service__WEBPACK_IMPORTED_MODULE_8__["PlatformsettingsService"],
            _integrationfilters_integrationfilter_service__WEBPACK_IMPORTED_MODULE_9__["IntegrationFilterService"],
            _core_data_PlatformSettings__WEBPACK_IMPORTED_MODULE_7__["Platformsettings"],
            _core_data_integrationfilter__WEBPACK_IMPORTED_MODULE_10__["IntegrationFilter"],
            _core_commonservices_services__WEBPACK_IMPORTED_MODULE_5__["Services"],
            _core_data_AccountPlatform__WEBPACK_IMPORTED_MODULE_1__["AccountPlatform"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_data_global__WEBPACK_IMPORTED_MODULE_6__["MyGlobal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AccountPlatformWidgetComponent);
    return AccountPlatformWidgetComponent;
}());



/***/ }),

/***/ "./src/app/widgets/accountplatform/accountplatform.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/widgets/accountplatform/accountplatform.service.ts ***!
  \********************************************************************/
/*! exports provided: AccountPlatformService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPlatformService", function() { return AccountPlatformService; });
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






var AccountPlatformService = /** @class */ (function () {
    function AccountPlatformService(_http, baseUrl) {
        this._http = _http;
        this.myAppUrl = "";
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'X-MKC-Auth': 'test'
        });
        this.myAppUrl = baseUrl;
    }
    //get all accountplatform
    AccountPlatformService.prototype.getAllAccountPlatform = function () {
        var url = this.myAppUrl + "accountplatform/getall";
        console.log(url);
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
    //Create accountplatform
    AccountPlatformService.prototype.createAccountPlatform = function (accounPlatform) {
        var url = this.myAppUrl + "accountplatform/create";
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
        return this._http.post(url, accounPlatform, requestOptions)
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res) {
            }
            return res;
        })
            .catch(this.errorHandler);
    };
    //Update AccountPlatform
    AccountPlatformService.prototype.updateAccountPlatform = function (accounPlatform) {
        var url = this.myAppUrl + "accountplatform/update";
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
        return this._http.post(url, accounPlatform, requestOptions)
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res) {
            }
            return res;
        })
            .catch(this.errorHandler);
    };
    //Delete AccountPlatform	
    AccountPlatformService.prototype.deleteAccountPlatformById = function (accounPlatform) {
        var url = this.myAppUrl + "accountplatform/" + accounPlatform.ID + "/delete";
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
    //get all platformsettings
    AccountPlatformService.prototype.getDefaultPlatformsettings = function (AccountPlatformID) {
        var url = this.myAppUrl + "platformsettings/" + AccountPlatformID + "/getdefault";
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
    AccountPlatformService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    AccountPlatformService.prototype.errorHandler = function (error) {
        console.log(error);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
    };
    AccountPlatformService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('baseUrl')),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], String])
    ], AccountPlatformService);
    return AccountPlatformService;
}());



/***/ }),

/***/ "./src/app/widgets/integrationfilters/integrationfilter.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/widgets/integrationfilters/integrationfilter.service.ts ***!
  \*************************************************************************/
/*! exports provided: IntegrationFilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntegrationFilterService", function() { return IntegrationFilterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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



var IntegrationFilterService = /** @class */ (function () {
    function IntegrationFilterService(_http, baseUrl) {
        this._http = _http;
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'X-MKC-Auth': 'test',
        });
        this.myAppUrl = "";
        this.myAppUrl = baseUrl;
    }
    //get all integrationfilters
    IntegrationFilterService.prototype.getAllIntegrationFilters = function (accountPlatformID) {
        var url = this.myAppUrl + "integrationfilter/" + accountPlatformID + "/getall";
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
    //get all default integrationfilers
    IntegrationFilterService.prototype.getIntegrationFiltersByDefault = function (accountPlatformID) {
        var url = this.myAppUrl + "integrationfilter/" + accountPlatformID + "/getdefaultkey";
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
    IntegrationFilterService.prototype.createIntegrationFilters = function (integrationfilers) {
        var url = this.myAppUrl + "integrationfilter/create";
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
        return this._http.post(url, integrationfilers, requestOptions)
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res) {
            }
            return res;
        })
            .catch(this.errorHandler);
    };
    //Update IntegrationFilters
    IntegrationFilterService.prototype.updateIntegrationFilters = function (integrationfilters) {
        var url = this.myAppUrl + "integrationfilter/update";
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
        return this._http.post(url, integrationfilters, requestOptions)
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res) {
            }
            return res;
        })
            .catch(this.errorHandler);
    };
    //Delete platformsettings	
    IntegrationFilterService.prototype.deleteIntegrationFiltersById = function (integrationfilters) {
        var url = this.myAppUrl + "integrationfilter/" + integrationfilters.ID + "/delete";
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
        return this._http.delete(url, requestOptions)
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res) {
            }
            return res;
        })
            .catch(this.errorHandler);
    };
    IntegrationFilterService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    IntegrationFilterService.prototype.errorHandler = function (error) {
        console.log(error);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
    };
    IntegrationFilterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('baseUrl')),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], String])
    ], IntegrationFilterService);
    return IntegrationFilterService;
}());



/***/ }),

/***/ "./src/app/widgets/modules/accountplatform.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/widgets/modules/accountplatform.module.ts ***!
  \***********************************************************/
/*! exports provided: AccountPlatformWidgetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPlatformWidgetModule", function() { return AccountPlatformWidgetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_listview_crud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-listview-crud */ "./node_modules/ng2-listview-crud/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_timeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-timeline */ "./node_modules/ng2-timeline/index.js");
/* harmony import */ var _components_ng2_newslist_ng2newslist_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ng2-newslist/ng2newslist.module */ "./src/app/components/ng2-newslist/ng2newslist.module.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _accountplatform_accountplatform_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../accountplatform/accountplatform.component */ "./src/app/widgets/accountplatform/accountplatform.component.ts");
/* harmony import */ var _accountplatform_accountplatform_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../accountplatform/accountplatform-routing */ "./src/app/widgets/accountplatform/accountplatform-routing.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AccountPlatformWidgetModule = /** @class */ (function () {
    function AccountPlatformWidgetModule() {
    }
    AccountPlatformWidgetModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _accountplatform_accountplatform_routing__WEBPACK_IMPORTED_MODULE_8__["AccountPlatformWidgetRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__["Ng2SmartTableModule"],
                ng2_listview_crud__WEBPACK_IMPORTED_MODULE_2__["Ng2ListViewCRUD"],
                ng2_timeline__WEBPACK_IMPORTED_MODULE_4__["Ng2Timeline"], _components_ng2_newslist_ng2newslist_module__WEBPACK_IMPORTED_MODULE_5__["Ng2NewsList"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"]
            ],
            declarations: [_accountplatform_accountplatform_component__WEBPACK_IMPORTED_MODULE_7__["AccountPlatformWidgetComponent"]],
            providers: []
        })
    ], AccountPlatformWidgetModule);
    return AccountPlatformWidgetModule;
}());



/***/ })

}]);
//# sourceMappingURL=widgets-modules-accountplatform-module.js.map