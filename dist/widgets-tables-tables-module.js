(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["widgets-tables-tables-module"],{

/***/ "./src/app/widgets/tables/table.scss":
/*!*******************************************!*\
  !*** ./src/app/widgets/tables/table.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overflowFix {\n  overflow: auto; }\n\n.overflowFix > table {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/widgets/tables/tables-routing.ts":
/*!**************************************************!*\
  !*** ./src/app/widgets/tables/tables-routing.ts ***!
  \**************************************************/
/*! exports provided: TableWidgetRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableWidgetRoutingModule", function() { return TableWidgetRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tables_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tables.component */ "./src/app/widgets/tables/tables.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by mohma on 7/26/2017.
 */



var routes = [
    {
        path: '',
        component: _tables_component__WEBPACK_IMPORTED_MODULE_2__["TableWidgetComponent"],
        data: {
            title: 'Table'
        }
    }
];
var TableWidgetRoutingModule = /** @class */ (function () {
    function TableWidgetRoutingModule() {
    }
    TableWidgetRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TableWidgetRoutingModule);
    return TableWidgetRoutingModule;
}());



/***/ }),

/***/ "./src/app/widgets/tables/tables.component.ts":
/*!****************************************************!*\
  !*** ./src/app/widgets/tables/tables.component.ts ***!
  \****************************************************/
/*! exports provided: TableWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableWidgetComponent", function() { return TableWidgetComponent; });
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
/**
 * Created by mohma on 7/26/2017.
 */

var TableWidgetComponent = /** @class */ (function () {
    function TableWidgetComponent() {
        this.successColor = "#8ad919";
        this.warningCOlor = "#ffb53e";
        this.dangerColor = "#f9243f";
        this.fontColor = "#ececec";
        this.settings = {
            actions: {
                add: true,
                edit: true,
                delete: true
            },
            columns: {
                id: {
                    title: 'ID',
                    filter: false,
                    editable: false
                },
                name: {
                    title: 'Full Name',
                    filter: true
                },
                username: {
                    title: 'User Name',
                    filter: true
                },
                email: {
                    title: 'Email',
                    filter: true
                }
            }
        };
        this.data = [
            {
                id: 1,
                name: "Leanne Graham",
                username: "Bret",
                email: "Sincere@april.biz"
            },
            {
                id: 2,
                name: "Ervin Howell",
                username: "Antonette",
                email: "Shanna@melissa.tv"
            },
            {
                id: 11,
                name: "Nicholas DuBuque",
                username: "Nicholas.Stanton",
                email: "Rey.Padberg@rosamond.biz"
            }
        ];
    }
    TableWidgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./tables.html */ "./src/app/widgets/tables/tables.html"),
            selector: 'widget-table',
            styles: [__webpack_require__(/*! ./table.scss */ "./src/app/widgets/tables/table.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TableWidgetComponent);
    return TableWidgetComponent;
}());



/***/ }),

/***/ "./src/app/widgets/tables/tables.html":
/*!********************************************!*\
  !*** ./src/app/widgets/tables/tables.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-12\">\r\n    <h1 class=\"page-header\">Table</h1>\r\n  </div>\r\n</div><!--/.row-->\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-body overflowFix\">\r\n        <ng2-smart-table [settings]=\"settings\" [source]=\"data\"></ng2-smart-table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div><!--/.row-->\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/widgets/tables/tables.module.ts":
/*!*************************************************!*\
  !*** ./src/app/widgets/tables/tables.module.ts ***!
  \*************************************************/
/*! exports provided: TablesWidgetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesWidgetModule", function() { return TablesWidgetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tables_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tables.component */ "./src/app/widgets/tables/tables.component.ts");
/* harmony import */ var _tables_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tables-routing */ "./src/app/widgets/tables/tables-routing.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by mohma on 7/26/2017.
 */






var TablesWidgetModule = /** @class */ (function () {
    function TablesWidgetModule() {
    }
    TablesWidgetModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _tables_routing__WEBPACK_IMPORTED_MODULE_4__["TableWidgetRoutingModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableModule"]
            ],
            declarations: [_tables_component__WEBPACK_IMPORTED_MODULE_3__["TableWidgetComponent"]],
            providers: []
        })
    ], TablesWidgetModule);
    return TablesWidgetModule;
}());



/***/ })

}]);
//# sourceMappingURL=widgets-tables-tables-module.js.map