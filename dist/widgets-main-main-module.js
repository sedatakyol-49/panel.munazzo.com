(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["widgets-main-main-module"],{

/***/ "./src/app/widgets/main/main-routing.ts":
/*!**********************************************!*\
  !*** ./src/app/widgets/main/main-routing.ts ***!
  \**********************************************/
/*! exports provided: MainWidgetRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainWidgetRoutingModule", function() { return MainWidgetRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.component */ "./src/app/widgets/main/main.component.ts");
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
        component: _main_component__WEBPACK_IMPORTED_MODULE_2__["MainWidgetComponent"],
        data: {
            title: 'Form'
        }
    }
];
var MainWidgetRoutingModule = /** @class */ (function () {
    function MainWidgetRoutingModule() {
    }
    MainWidgetRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MainWidgetRoutingModule);
    return MainWidgetRoutingModule;
}());



/***/ }),

/***/ "./src/app/widgets/main/main.component.html":
/*!**************************************************!*\
  !*** ./src/app/widgets/main/main.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-12\">\r\n    <h1 class=\"page-header\">Main Widgets</h1>\r\n  </div>\r\n</div><!--/.row-->\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n    <h2>Calendar</h2>\r\n    <calendar></calendar>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <h2>ListView with CRUD with JavaScript Objects</h2>\r\n    <ng2-listview-crud [properties]=\"listView\" [data]=\"listItems\"></ng2-listview-crud>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <h2>ListView with CRUD with Arrays</h2>\r\n    <ng2-listview-crud [properties]=\"arraysListViewProperty\" [data]=\"crudArray\"></ng2-listview-crud>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-12\">\r\n    <h2>Alerts</h2>\r\n    <alert [color]=\"successColor\" [fontColor]=\"fontColor\" [text]='successText'></alert>\r\n    <alert [color]=\"warningCOlor\" [text]=\"warningText\"></alert>\r\n    <alert [color]=\"dangerColor\" [text]=\"dangerText\"></alert>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-12\">\r\n    <h2>Basic Panels</h2>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\">\r\n        Default Panel\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ante in sapien blandit luctus sed ut lacus. Phasellus urna est, faucibus nec ultrices placerat, feugiat et ligula. Donec vestibulum magna a dui pharetra molestie. Fusce et dui urna.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-md-4\">\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\">\r\n        Primary Panel\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ante in sapien blandit luctus sed ut lacus. Phasellus urna est, faucibus nec ultrices placerat, feugiat et ligula. Donec vestibulum magna a dui pharetra molestie. Fusce et dui urna.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-md-4\">\r\n    <div class=\"panel panel-success\">\r\n      <div class=\"panel-heading\">\r\n        Success Panel\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ante in sapien blandit luctus sed ut lacus. Phasellus urna est, faucibus nec ultrices placerat, feugiat et ligula. Donec vestibulum magna a dui pharetra molestie. Fusce et dui urna.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div><!-- /.row -->\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n    <div class=\"panel panel-info\">\r\n      <div class=\"panel-heading\">\r\n        Info Panel\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ante in sapien blandit luctus sed ut lacus. Phasellus urna est, faucibus nec ultrices placerat, feugiat et ligula. Donec vestibulum magna a dui pharetra molestie. Fusce et dui urna.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-md-4\">\r\n    <div class=\"panel panel-warning\">\r\n      <div class=\"panel-heading\">\r\n        Warning Panel\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ante in sapien blandit luctus sed ut lacus. Phasellus urna est, faucibus nec ultrices placerat, feugiat et ligula. Donec vestibulum magna a dui pharetra molestie. Fusce et dui urna.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-md-4\">\r\n    <div class=\"panel panel-danger\">\r\n      <div class=\"panel-heading\">\r\n        Danger Panel\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ante in sapien blandit luctus sed ut lacus. Phasellus urna est, faucibus nec ultrices placerat, feugiat et ligula. Donec vestibulum magna a dui pharetra molestie. Fusce et dui urna.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div><!-- /.row -->\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-12\">\r\n    <h2>Widget Panels</h2>\r\n  </div>\r\n\r\n  <div class=\"col-md-6\">\r\n    <div class=\"panel panel-blue\">\r\n      <div class=\"panel-heading dark-overlay\">Blue Panel</div>\r\n      <div class=\"panel-body\">\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ante in sapien blandit luctus sed ut lacus. Phasellus urna est, faucibus nec ultrices placerat, feugiat et ligula. Donec vestibulum magna a dui pharetra molestie. Fusce et dui urna.</p>\r\n      </div>\r\n    </div>\r\n  </div><!--/.col-->\r\n  <div class=\"col-md-6\">\r\n    <div class=\"panel panel-teal\">\r\n      <div class=\"panel-heading dark-overlay\">Teal Panel</div>\r\n      <div class=\"panel-body\">\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ante in sapien blandit luctus sed ut lacus. Phasellus urna est, faucibus nec ultrices placerat, feugiat et ligula. Donec vestibulum magna a dui pharetra molestie. Fusce et dui urna.</p>\r\n      </div>\r\n    </div>\r\n  </div><!--/.col-->\r\n\r\n  <div class=\"col-md-6\">\r\n    <div class=\"panel panel-orange\">\r\n      <div class=\"panel-heading dark-overlay\">Orange Panel</div>\r\n      <div class=\"panel-body\">\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ante in sapien blandit luctus sed ut lacus. Phasellus urna est, faucibus nec ultrices placerat, feugiat et ligula. Donec vestibulum magna a dui pharetra molestie. Fusce et dui urna.</p>\r\n      </div>\r\n    </div>\r\n  </div><!--/.col-->\r\n\r\n  <div class=\"col-md-6\">\r\n    <div class=\"panel panel-red\">\r\n      <div class=\"panel-heading dark-overlay\">Red Panel</div>\r\n      <div class=\"panel-body\">\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ante in sapien blandit luctus sed ut lacus. Phasellus urna est, faucibus nec ultrices placerat, feugiat et ligula. Donec vestibulum magna a dui pharetra molestie. Fusce et dui urna.</p>\r\n      </div>\r\n    </div>\r\n  </div><!--/.col-->\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-12\">\r\n    <h2>Tab Panels</h2>\r\n  </div>\r\n\r\n  <div class=\"col-md-6\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-body tabs\">\r\n        <ul class=\"nav nav-tabs\">\r\n          <li class=\"active\"><a href=\"#tab1\" data-toggle=\"tab\">Tab 1</a></li>\r\n          <li><a href=\"#tab2\" data-toggle=\"tab\">Tab 2</a></li>\r\n          <li><a href=\"#tab3\" data-toggle=\"tab\">Tab 3</a></li>\r\n        </ul>\r\n\r\n        <div class=\"tab-content\">\r\n          <div class=\"tab-pane fade in active\" id=\"tab1\">\r\n            <h4>Tab 1</h4>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget rutrum purus. Donec hendrerit ante ac metus sagittis elementum. Mauris feugiat nisl sit amet neque luctus, a tincidunt odio auctor. </p>\r\n          </div>\r\n          <div class=\"tab-pane fade\" id=\"tab2\">\r\n            <h4>Tab 2</h4>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget rutrum purus. Donec hendrerit ante ac metus sagittis elementum. Mauris feugiat nisl sit amet neque luctus, a tincidunt odio auctor. </p>\r\n          </div>\r\n          <div class=\"tab-pane fade\" id=\"tab3\">\r\n            <h4>Tab 3</h4>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget rutrum purus. Donec hendrerit ante ac metus sagittis elementum. Mauris feugiat nisl sit amet neque luctus, a tincidunt odio auctor. </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.panel-->\r\n  </div><!--/.col-->\r\n\r\n  <div class=\"col-md-6\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-body tabs\">\r\n\r\n        <ul class=\"nav nav-pills\">\r\n          <li class=\"active\"><a href=\"#pilltab1\" data-toggle=\"tab\">Tab 1</a></li>\r\n          <li><a href=\"#pilltab2\" data-toggle=\"tab\">Tab 2</a></li>\r\n          <li><a href=\"#pilltab3\" data-toggle=\"tab\">Tab 3</a></li>\r\n        </ul>\r\n\r\n        <div class=\"tab-content\">\r\n          <div class=\"tab-pane fade in active\" id=\"pilltab1\">\r\n            <h4>Tab 1</h4>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget rutrum purus. Donec hendrerit ante ac metus sagittis elementum. Mauris feugiat nisl sit amet neque luctus, a tincidunt odio auctor. </p>\r\n          </div>\r\n          <div class=\"tab-pane fade\" id=\"pilltab2\">\r\n            <h4>Tab 2</h4>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget rutrum purus. Donec hendrerit ante ac metus sagittis elementum. Mauris feugiat nisl sit amet neque luctus, a tincidunt odio auctor. </p>\r\n          </div>\r\n          <div class=\"tab-pane fade\" id=\"pilltab3\">\r\n            <h4>Tab 3</h4>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget rutrum purus. Donec hendrerit ante ac metus sagittis elementum. Mauris feugiat nisl sit amet neque luctus, a tincidunt odio auctor. </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.panel-->\r\n  </div><!-- /.col-->\r\n\r\n</div><!-- /.row -->\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <div class=\"panel  chat\">\r\n      <div class=\"panel-heading panel-blue\" id=\"accordion\">\r\n        <i class=\"fa fa-list fa-fw\"></i> Chat</div>\r\n      <div class=\"panel-body\">\r\n        <ul>\r\n          <li class=\"left clearfix\">\r\n\t\t\t\t\t\t\t\t<span class=\"chat-img pull-left\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"http://placehold.it/80/30a5ff/fff\" alt=\"User Avatar\" class=\"img-circle\" />\r\n\t\t\t\t\t\t\t\t</span>\r\n            <div class=\"chat-body clearfix\">\r\n              <div class=\"header\">\r\n                <strong class=\"primary-font\">John Doe</strong> <small class=\"text-muted\">32 mins ago</small>\r\n              </div>\r\n              <p>\r\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ante turpis, rutrum ut ullamcorper sed, dapibus ac nunc. Vivamus luctus convallis mauris, eu gravida tortor aliquam ultricies.\r\n              </p>\r\n            </div>\r\n          </li>\r\n          <li class=\"right clearfix\">\r\n\t\t\t\t\t\t\t\t<span class=\"chat-img pull-right\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"http://placehold.it/80/dde0e6/5f6468\" alt=\"User Avatar\" class=\"img-circle\" />\r\n\t\t\t\t\t\t\t\t</span>\r\n            <div class=\"chat-body clearfix\">\r\n              <div class=\"header\">\r\n                <strong class=\"pull-left primary-font\">Jane Doe</strong> <small class=\"text-muted\">6 mins ago</small>\r\n              </div>\r\n              <p>\r\n                Mauris dignissim porta enim, sed commodo sem blandit non. Ut scelerisque sapien eu mauris faucibus ultrices. Nulla ac odio nisl. Proin est metus, interdum scelerisque quam eu, eleifend pretium nunc. Suspendisse finibus auctor lectus, eu interdum sapien.\r\n              </p>\r\n            </div>\r\n          </li>\r\n          <li class=\"left clearfix\">\r\n\t\t\t\t\t\t\t\t<span class=\"chat-img pull-left\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"http://placehold.it/80/30a5ff/fff\" alt=\"User Avatar\" class=\"img-circle\" />\r\n\t\t\t\t\t\t\t\t</span>\r\n            <div class=\"chat-body clearfix\">\r\n              <div class=\"header\">\r\n                <strong class=\"primary-font\">John Doe</strong> <small class=\"text-muted\">32 mins ago</small>\r\n              </div>\r\n              <p>\r\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ante turpis, rutrum ut ullamcorper sed, dapibus ac nunc. Vivamus luctus convallis mauris, eu gravida tortor aliquam ultricies.\r\n              </p>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"panel-footer\">\r\n        <div class=\"input-group\">\r\n          <input id=\"btn-input\" type=\"text\" class=\"form-control input-md\" placeholder=\"Type your message here...\" />\r\n          <span class=\"input-group-btn\">\r\n\t\t\t\t\t\t\t\t<button class=\"btn btn-success btn-md\" id=\"btn-chat\">Send</button>\r\n\t\t\t\t\t\t\t</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div><!--/.col-->\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <div class=\"panel panel-default \">\r\n      <div class=\"panel-heading\">\r\n        Timeline\r\n      </div>\r\n\r\n      <div class=\"panel-body timeline-container\">\r\n        <ng2-timeline [completeListener]=\"completeListener\" [data]=\"timelineData\"></ng2-timeline>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"col-md-6\">\r\n    <div class=\"panel panel-default articles\">\r\n      <div class=\"panel-heading\">\r\n        Latest News\r\n      </div>\r\n      <div class=\"panel-body articles-container\">\r\n        <ng2-news-list [data]=\"newsList\"></ng2-news-list>\r\n      </div>\r\n    </div><!--End .articles-->\r\n\r\n    <div class=\"panel panel-default \">\r\n      <div class=\"panel-heading\">\r\n        Progress bars\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <div class=\"col-md-12 no-padding\">\r\n          <div class=\"row progress-labels\">\r\n            <div class=\"col-sm-6\">New Orders</div>\r\n            <div class=\"col-sm-6\" style=\"text-align: right;\">80%</div>\r\n          </div>\r\n          <div class=\"progress\">\r\n            <div data-percentage=\"0%\" style=\"width: 80%;\" class=\"progress-bar progress-bar-blue\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <div class=\"row progress-labels\">\r\n            <div class=\"col-sm-6\">Comments</div>\r\n            <div class=\"col-sm-6\" style=\"text-align: right;\">60%</div>\r\n          </div>\r\n          <div class=\"progress\">\r\n            <div data-percentage=\"0%\" style=\"width: 60%;background-color: #1ebfae\" class=\"progress-bar\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <div class=\"row progress-labels\">\r\n            <div class=\"col-sm-6\">New Users</div>\r\n            <div class=\"col-sm-6\" style=\"text-align: right;\">40%</div>\r\n          </div>\r\n          <div class=\"progress\">\r\n            <div data-percentage=\"0%\" style=\"width: 40%;\" class=\"progress-bar progress-bar-teal\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <div class=\"row progress-labels\">\r\n            <div class=\"col-sm-6\">Page Views</div>\r\n            <div class=\"col-sm-6\" style=\"text-align: right;\">20%</div>\r\n          </div>\r\n          <div class=\"progress\">\r\n            <div data-percentage=\"0%\" style=\"width: 20%;\" class=\"progress-bar progress-bar-red\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/widgets/main/main.component.ts":
/*!************************************************!*\
  !*** ./src/app/widgets/main/main.component.ts ***!
  \************************************************/
/*! exports provided: MainWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainWidgetComponent", function() { return MainWidgetComponent; });
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

var MainWidgetComponent = /** @class */ (function () {
    function MainWidgetComponent() {
        this.successText = "Successful";
        this.warningText = "Warning";
        this.dangerText = "Danger";
        this.successColor = "#8ad919";
        this.warningCOlor = "#ffb53e";
        this.dangerColor = "#f9243f";
        this.fontColor = "#ececec";
        this.timelineData = [
            {
                title: "Step 1",
                icon: '<i class="fa fa-home"></i>',
                content: "Hello World",
                complete: true
            },
            {
                title: "Step 2",
                icon: '<i class="fa fa-pencil"></i>',
                content: "Welcome World",
                complete: false
            }
        ];
        //News Component
        this.newsList = [
            {
                large: "30",
                small: "Jun",
                link: "http://www.aebiss.com",
                title: "AEBISS",
                content: "Fullstack development, IoT, Blockchain related services in the U.A.E"
            },
            {
                large: "1",
                small: "Jul",
                link: "http://www.tayar.ae",
                title: "Tayar",
                content: "One device that let you control any electrical device at home"
            },
            {
                large: "1",
                small: "Jul",
                link: "http://www.wavex.io",
                title: "WaveX",
                content: "Blockchain based electricity trading platform"
            }
        ];
        this.listView = {
            add: true,
            remove: true,
            edit: true,
            dataIsObject: true,
            path: ["name", "first"],
            label: "CRUD ListView",
            headingBackgroundColor: "#3752ff",
            headingFontColor: "#ececec",
            icon: "fa fa-cogs",
            onDelete: function (value) {
                console.log("Deleting Value: " + JSON.stringify(value));
                return true;
            },
            onUpdate: function (value, newValue) {
                console.log("Editing Value: " + JSON.stringify(value) + " New Value:" + newValue);
                return true;
            },
            onSearch: function (value) {
                console.log(value);
            },
            onAdd: function (value) {
                console.log("Adding Value: " + JSON.stringify(value));
                return true;
            },
            onSelect: function (value) {
                console.log(JSON.stringify(value));
            },
            onSearchChange: function (value) {
                console.log(value);
            }
        };
        //In this specific example the field name.first is displayed in the list
        this.listItems = [
            { name: { first: "Hello", last: "World" }, count: 2 },
            { name: { first: "Hello2", last: "World" }, count: 2 }
        ];
        this.arraysListViewProperty = {
            add: true,
            remove: true,
            edit: true,
            dataIsObject: false,
            path: [],
            label: "CRUD ListView with Arrays",
            headingBackgroundColor: "#3752ff",
            headingFontColor: "#ececec",
            icon: "fa fa-cogs",
            onDelete: function (value) {
                console.log("Deleting Value: " + JSON.stringify(value));
                return true;
            },
            onUpdate: function (value, newValue) {
                console.log("Editing Value: " + JSON.stringify(value) + " New Value:" + newValue);
                return true;
            },
            onSearch: function (value) {
                console.log(value);
            },
            onAdd: function (value) {
                console.log("Adding Value: " + JSON.stringify(value));
                return true;
            },
            onSelect: function (value) {
                console.log(JSON.stringify(value));
            },
            onSearchChange: function (value) {
                console.log(value);
            }
        };
        //In this specific example the field name.first is displayed in the list
        this.crudArray = [
            "Apple", "Orange", "Banana"
        ];
        var self = this;
        setTimeout(function () {
            self.timelineData.push({
                title: "Step 3",
                icon: '<i class="fa fa-remove"></i>',
                content: "Bye World",
                complete: false
            });
        }, 5000);
    }
    //Timeline Related
    MainWidgetComponent.prototype.completeListener = function (item) {
        console.log(item);
        return true;
    };
    MainWidgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/widgets/main/main.component.html"),
            selector: 'widget-main'
        }),
        __metadata("design:paramtypes", [])
    ], MainWidgetComponent);
    return MainWidgetComponent;
}());



/***/ }),

/***/ "./src/app/widgets/main/main.module.ts":
/*!*********************************************!*\
  !*** ./src/app/widgets/main/main.module.ts ***!
  \*********************************************/
/*! exports provided: MainWidgetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainWidgetModule", function() { return MainWidgetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.component */ "./src/app/widgets/main/main.component.ts");
/* harmony import */ var _main_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-routing */ "./src/app/widgets/main/main-routing.ts");
/* harmony import */ var ng2_listview_crud__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-listview-crud */ "./node_modules/ng2-listview-crud/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/calendar/calendar.component */ "./src/app/components/calendar/calendar.component.ts");
/* harmony import */ var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/alert/alert.component */ "./src/app/components/alert/alert.component.ts");
/* harmony import */ var ng2_timeline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-timeline */ "./node_modules/ng2-timeline/index.js");
/* harmony import */ var _components_ng2_newslist_ng2newslist_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/ng2-newslist/ng2newslist.module */ "./src/app/components/ng2-newslist/ng2newslist.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by mohma on 7/26/2017.
 */










var MainWidgetModule = /** @class */ (function () {
    function MainWidgetModule() {
    }
    MainWidgetModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _main_routing__WEBPACK_IMPORTED_MODULE_3__["MainWidgetRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                ng2_listview_crud__WEBPACK_IMPORTED_MODULE_4__["Ng2ListViewCRUD"],
                ng2_timeline__WEBPACK_IMPORTED_MODULE_8__["Ng2Timeline"], _components_ng2_newslist_ng2newslist_module__WEBPACK_IMPORTED_MODULE_9__["Ng2NewsList"]
            ],
            declarations: [_main_component__WEBPACK_IMPORTED_MODULE_2__["MainWidgetComponent"], _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_6__["CalendarComponent"], _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_7__["AlertComponent"]],
            providers: []
        })
    ], MainWidgetModule);
    return MainWidgetModule;
}());



/***/ })

}]);
//# sourceMappingURL=widgets-main-main-module.js.map