(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["widgets-charts-charts-module"],{

/***/ "./src/app/widgets/charts/charts-routing.ts":
/*!**************************************************!*\
  !*** ./src/app/widgets/charts/charts-routing.ts ***!
  \**************************************************/
/*! exports provided: ChartsWidgetRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsWidgetRoutingModule", function() { return ChartsWidgetRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _charts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./charts.component */ "./src/app/widgets/charts/charts.component.ts");
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
        component: _charts_component__WEBPACK_IMPORTED_MODULE_2__["ChartsWidgetComponent"],
        data: {
            title: 'Charts'
        }
    }
];
var ChartsWidgetRoutingModule = /** @class */ (function () {
    function ChartsWidgetRoutingModule() {
    }
    ChartsWidgetRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ChartsWidgetRoutingModule);
    return ChartsWidgetRoutingModule;
}());



/***/ }),

/***/ "./src/app/widgets/charts/charts.component.ts":
/*!****************************************************!*\
  !*** ./src/app/widgets/charts/charts.component.ts ***!
  \****************************************************/
/*! exports provided: ChartsWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsWidgetComponent", function() { return ChartsWidgetComponent; });
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

var ChartsWidgetComponent = /** @class */ (function () {
    function ChartsWidgetComponent() {
        /*LineChart*/
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        /*Bar Chart*/
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
        // Doughnut
        this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
        this.doughnutChartData = [350, 450, 100];
        this.doughnutChartType = 'doughnut';
        this.pieChartType = 'pie';
    }
    // events
    ChartsWidgetComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ChartsWidgetComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ChartsWidgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./charts.html */ "./src/app/widgets/charts/charts.html"),
            selector: 'charts-widgets'
        }),
        __metadata("design:paramtypes", [])
    ], ChartsWidgetComponent);
    return ChartsWidgetComponent;
}());



/***/ }),

/***/ "./src/app/widgets/charts/charts.html":
/*!********************************************!*\
  !*** ./src/app/widgets/charts/charts.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-12\">\r\n    <h1 class=\"page-header\">Charts</h1>\r\n  </div>\r\n</div><!--/.row-->\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\">\r\n        Line Chart\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <canvas baseChart width=\"100\" height=\"50\"\r\n                [datasets]=\"lineChartData\"\r\n                [labels]=\"lineChartLabels\"\r\n                [options]=\"lineChartOptions\"\r\n                [colors]=\"lineChartColors\"\r\n                [legend]=\"lineChartLegend\"\r\n                [chartType]=\"lineChartType\"\r\n                (chartHover)=\"chartHovered($event)\"\r\n                (chartClick)=\"chartClicked($event)\"></canvas>      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\">\r\n        Bar Chart\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <canvas baseChart width=\"100\" height=\"50\"\r\n                [datasets]=\"barChartData\"\r\n                [labels]=\"barChartLabels\"\r\n                [options]=\"barChartOptions\"\r\n                [legend]=\"barChartLegend\"\r\n                [chartType]=\"barChartType\"\r\n                (chartHover)=\"chartHovered($event)\"\r\n                (chartClick)=\"chartClicked($event)\"></canvas>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div><!--/.row-->\r\n\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\">\r\n        Line Chart\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <canvas baseChart width=\"100\" height=\"50\"\r\n                [data]=\"doughnutChartData\"\r\n                [labels]=\"doughnutChartLabels\"\r\n                [chartType]=\"doughnutChartType\"\r\n                (chartHover)=\"chartHovered($event)\"\r\n                (chartClick)=\"chartClicked($event)\"></canvas>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\">\r\n        Bar Chart\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <canvas baseChart width=\"100\" height=\"50\"\r\n                [data]=\"doughnutChartData\"\r\n                [labels]=\"doughnutChartLabels\"\r\n                [chartType]=\"pieChartType\"\r\n                (chartHover)=\"chartHovered($event)\"\r\n                (chartClick)=\"chartClicked($event)\"></canvas>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div><!--/.row-->\r\n"

/***/ }),

/***/ "./src/app/widgets/charts/charts.module.ts":
/*!*************************************************!*\
  !*** ./src/app/widgets/charts/charts.module.ts ***!
  \*************************************************/
/*! exports provided: ChartsWidgetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsWidgetModule", function() { return ChartsWidgetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _charts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./charts.component */ "./src/app/widgets/charts/charts.component.ts");
/* harmony import */ var _charts_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./charts-routing */ "./src/app/widgets/charts/charts-routing.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by mohma on 7/26/2017.
 */






var ChartsWidgetModule = /** @class */ (function () {
    function ChartsWidgetModule() {
    }
    ChartsWidgetModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _charts_routing__WEBPACK_IMPORTED_MODULE_4__["ChartsWidgetRoutingModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"]
            ],
            declarations: [_charts_component__WEBPACK_IMPORTED_MODULE_3__["ChartsWidgetComponent"]],
            providers: []
        })
    ], ChartsWidgetModule);
    return ChartsWidgetModule;
}());



/***/ })

}]);
//# sourceMappingURL=widgets-charts-charts-module.js.map