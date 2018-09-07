(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["widgets-main-main-module~widgets-modules-accountplatform-module~widgets-modules-platformsettings-mod~6213483a"],{

/***/ "./node_modules/ng2-listview-crud/index.js":
/*!*************************************************!*\
  !*** ./node_modules/ng2-listview-crud/index.js ***!
  \*************************************************/
/*! exports provided: Ng2ListViewCRUD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2ListViewCRUD", function() { return Ng2ListViewCRUD; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




/**
 * Created by mohma on 7/27/2017.
 */
var Ng2ListViewCRUDComponent = (function () {
    function Ng2ListViewCRUDComponent() {
        this.value = "";
        this.search = "";
        this.opType = "Add";
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    Ng2ListViewCRUDComponent.prototype.ngOnChanges = function (changes) {
        this.subData = this.items;
    };
    /**
     * @return {?}
     */
    Ng2ListViewCRUDComponent.prototype.ngOnInit = function () {
        this.properties.icon += " fa-fw";
        this.subData = this.items;
        this.path = "";
        for (var /** @type {?} */ i = 0; i < this.properties.path.length; i++) {
            this.path += this.properties.path[i];
            if (i !== this.properties.path.length - 1) {
                this.path += ".";
            }
        }
    };
    /**
     * @return {?}
     */
    Ng2ListViewCRUDComponent.prototype.ngAfterViewInit = function () {
        var /** @type {?} */ self = this;
        $('ul.ng2-listview').on('click', 'li', function () {
            $('.selected').removeClass('selected');
            if ($(this).hasClass('selected')) {
                $(this).removeClass('selected');
            }
            else {
                self.selectedIndex = $(this).attr('id');
                $(this).addClass('selected');
                self.properties.onSelect(self.items[self.selectedIndex]);
            }
        });
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    Ng2ListViewCRUDComponent.prototype.onChangeListener = function ($event) {
        var /** @type {?} */ self = this;
        if (this.search === "") {
            this.subData = this.items;
            return;
        }
        this.properties.onSearchChange(self.search);
        var /** @type {?} */ result = this.items.filter(function (lhs) {
            var /** @type {?} */ data = lhs;
            if (self.properties.dataIsObject) {
                if (!lhs[self.properties.path[0]])
                    return false;
                data = lhs[self.properties.path[0]];
                for (var /** @type {?} */ i = 1; i < self.properties.path.length; i++) {
                    if (data[self.properties.path[i]])
                        data = data[self.properties.path[i]];
                    else {
                        return false;
                    }
                }
            }
            return data.match(self.search);
        });
        this.subData = result;
    };
    /**
     * @param {?} obj
     * @param {?} path
     * @param {?} newValue
     * @return {?}
     */
    Ng2ListViewCRUDComponent.prototype.changeJSONValue = function (obj, path, newValue) {
        var /** @type {?} */ parts = path.split('.');
        while (parts.length > 1 && (obj = obj[parts.shift()])) { }
        
        obj[parts.shift()] = newValue;
        return obj;
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    Ng2ListViewCRUDComponent.prototype.getJSONValue = function (obj) {
        if (!obj[this.properties.path[0]])
            return "Not Available";
        var /** @type {?} */ data = obj[this.properties.path[0]];
        for (var /** @type {?} */ i = 1; i < this.properties.path.length; i++) {
            if (!data[this.properties.path[i]])
                return "Not Available";
            data = data[this.properties.path[i]];
        }
        return data;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    Ng2ListViewCRUDComponent.prototype.append = function (value) {
        var /** @type {?} */ data = value;
        if (this.properties.dataIsObject) {
            data = "";
            var /** @type {?} */ closing = "";
            for (var /** @type {?} */ i = 0; i < this.properties.path.length; i++) {
                data += "{\"";
                data += this.properties.path[i] + "\":";
                closing += "}";
            }
            data += ('"' + value + '"' + closing);
            try {
                data = JSON.parse(data);
            }
            catch (e) {
                throw e;
            }
        }
        this.items.push(data);
        return data;
    };
    /**
     * @return {?}
     */
    Ng2ListViewCRUDComponent.prototype.onAddClickListener = function () {
        if (this.value.length !== 0 && this.opType === "Add") {
            if (this.properties.onAdd && this.properties.onAdd(this.append(this.value))) {
                this.value = "";
            }
            else {
                console.log("Function onAdd not found");
            }
        }
        else if (this.value.length !== 0 && this.opType === "Edit") {
            if (this.properties.onAdd && this.properties.onUpdate(this.items[this.selectedIndex], this.value)) {
                if (!this.properties.dataIsObject) {
                    this.items[this.selectedIndex] = this.value;
                }
                else {
                    this.changeJSONValue(this.items[this.selectedIndex], this.path, this.value);
                }
                this.value = "";
                this.opType = "Add";
            }
            else {
                console.log("Function onEdit not found");
            }
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    Ng2ListViewCRUDComponent.prototype.onEditClickListener = function (index) {
        this.selectedIndex = index;
        if (!this.properties.dataIsObject)
            this.value = this.items[this.selectedIndex];
        else {
            var /** @type {?} */ data = this.items[this.selectedIndex][this.properties.path[0]];
            for (var /** @type {?} */ i = 1; i < this.properties.path.length; i++) {
                if (!data[this.properties.path[i]]) {
                    return null;
                }
                data = data[this.properties.path[i]];
            }
            this.value = data;
        }
        this.opType = "Edit";
    };
    /**
     * @param {?} index
     * @return {?}
     */
    Ng2ListViewCRUDComponent.prototype.delete = function (index) {
        this.items.splice(index, 1);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    Ng2ListViewCRUDComponent.prototype.get = function (index) {
        return this.items[index];
    };
    /**
     * @param {?} index
     * @return {?}
     */
    Ng2ListViewCRUDComponent.prototype.onDeleteClickListener = function (index) {
        this.selectedIndex = index;
        if (this.properties.onDelete && this.properties.onDelete(this.get(this.selectedIndex))) {
            this.delete(this.selectedIndex);
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    Ng2ListViewCRUDComponent.prototype.getData = function (item) {
        if (!this.properties.dataIsObject) {
            return item;
        }
        return this.getJSONValue(item);
    };
    return Ng2ListViewCRUDComponent;
}());
Ng2ListViewCRUDComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                template: "<div class=\"panel\"> <div class=\"panel-heading\" [style.background]=\"properties['headingBackgroundColor']\" [style.color]=\"properties['headingFontColor']\"> <i [class]=\"properties['icon']\" style=\"margin-right: 10px\"></i>{{properties['label']}} </div> <input type=\"text\" class=\"form-control searchBoxListView\" placeholder=\"Search....\" [(ngModel)]=\"search\" (keyup)=\"onChangeListener($event)\"> <div class=\"panel-body\"> <ul class=\"ng2-listview\"> <li *ngFor=\"let item of subData; index as i\" class=\"ng2-listview-item\" [id]=\"i\" > {{getData(item)}} <div class=\"pull-right action-buttons\"> <a href=\"javascript:void(0)\" (click)=\"onEditClickListener(i)\" [hidden]=\"!properties['edit']\"><i class=\"fa fa-pencil fa-fw\"></i> </a> <a href=\"javascript:void(0)\" (click)=\"onDeleteClickListener(i)\" [hidden]=\"!properties['remove']\"><i class=\"fa-fw fa fa-remove\"></i> </a> </div> </li> </ul> </div> <div class=\"panel-footer\" [hidden]=\"!properties['add']\"> <div class=\"input-group\"> <input type=\"text\" class=\"form-control input-md\" placeholder=\"Add\" [(ngModel)]=\"value\"> <span class=\"input-group-btn\"> <button class=\"btn btn-success btn-md\" id=\"btn-todo\" (click)=\"onAddClickListener()\">{{opType}}</button> </span> </div> </div> </div> ",
                selector: 'ng2-listview-crud',
                styles: ["/** NG2-Listview-CRUD Author: Mohammed Rashid Github: https://github.com/mohdrashid */ .selected { background: bisque; } .ng2-listview { padding: 0; margin: -15px; background: #fff; color: #5f6468; } #checkbox { margin: 0; } .ng2-listview .checkbox { display: inline-block; margin: 0px; } .panel-body input[type=checkbox]:checked + label { text-decoration: line-through; color: #777; } .ng2-listview-item { list-style: none; line-height: 0.9; padding: 14px 15px 8px 15px; } .ng2-listview-item:hover, a.ng2-listview-item:focus { text-decoration: none; background-color: #f6f6f6; } .ng2-listview-item .trash .glyph:hover { color: #ef4040; } .searchBoxListView { border-radius: 0px; } ul li a { text-decoration: none; } ul li div { display: none; } ul li:hover div { display: inline; } "]
            },] },
];
/**
 * @nocollapse
 */
Ng2ListViewCRUDComponent.ctorParameters = function () { return []; };
Ng2ListViewCRUDComponent.propDecorators = {
    'properties': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['properties',] },],
    'items': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['data',] },],
};

var Ng2ListViewCRUD = (function () {
    function Ng2ListViewCRUD() {
    }
    return Ng2ListViewCRUD;
}());
Ng2ListViewCRUD.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ],
                declarations: [
                    Ng2ListViewCRUDComponent
                ],
                exports: [
                    Ng2ListViewCRUDComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
Ng2ListViewCRUD.ctorParameters = function () { return []; };




/***/ }),

/***/ "./node_modules/ng2-timeline/index.js":
/*!********************************************!*\
  !*** ./node_modules/ng2-timeline/index.js ***!
  \********************************************/
/*! exports provided: Ng2Timeline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2Timeline", function() { return Ng2Timeline; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



/**
 * Created by mohma on 7/31/2017.
 */
var Ng2TimelineComponent = (function () {
    function Ng2TimelineComponent() {
    }
    /**
     * @param {?} index
     * @return {?}
     */
    Ng2TimelineComponent.prototype.onClick = function (index) {
        if (this.listener) {
            if (this.listener(this.items[index])) {
                this.items[index]['complete'] = !this.items[index]['complete'];
            }
        }
    };
    /**
     * @return {?}
     */
    Ng2TimelineComponent.prototype.ngOnInit = function () {
    };
    return Ng2TimelineComponent;
}());
Ng2TimelineComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ng2-timeline',
                template: "<ul class=\"timeline\"> <li *ngFor=\"let item of items; index as i\"> <a href=\"javascript:void(0)\" (click)=\"onClick(i)\"> <div class=\"timeline-badge {{item['complete']?'primary':''}}\" [innerHTML]=\"item['icon']\"> </div> </a> <div class=\"timeline-panel {{item['complete']?'completedEvent':''}}\"> <div class=\"timeline-heading\"> <h4 class=\"timeline-title\">{{item['title']}}</h4> </div> <div class=\"timeline-body\"> <p>{{item['content']}}</p> </div> </div> </li> </ul> ",
                styles: [".timeline { list-style: none; padding: 20px 0 20px; position: relative; } .timeline:before { top: 0; bottom: 0; position: absolute; content: \" \"; width: 2px; background-color: #e9ecf2; left: 25px; margin-right: -1.5px; } .timeline > li { margin-bottom: 20px; position: relative; box-sizing: border-box; } .timeline > li:before, .timeline > li:after { content: \" \"; display: table; } .timeline > li > a > .timeline-badge { color: #fff; width: 46px; height: 46px; line-height: 51px; font-size: 1.4em; text-align: center; position: absolute; top: 16px; left: 0px; margin-right: -25px; background-color: #999999; z-index: 100; border-radius: 9999px; } .timeline > li > .timeline-panel { width: calc( 100% - 65px); float: right; border: 1px solid #edeeed; border-radius: 2px; padding: 10px 20px; position: relative; box-shadow: none; } .timeline > li:after { clear: both; } .timeline-badge.primary { background-color: #30a5ff !important; } .completedEvent { text-decoration: line-through; } "]
            },] },
];
/**
 * @nocollapse
 */
Ng2TimelineComponent.ctorParameters = function () { return []; };
Ng2TimelineComponent.propDecorators = {
    'items': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['data',] },],
    'listener': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['completeListener',] },],
};

var Ng2Timeline = (function () {
    function Ng2Timeline() {
    }
    return Ng2Timeline;
}());
Ng2Timeline.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [Ng2TimelineComponent],
                providers: [],
                exports: [Ng2TimelineComponent]
            },] },
];
/**
 * @nocollapse
 */
Ng2Timeline.ctorParameters = function () { return []; };




/***/ }),

/***/ "./src/app/components/ng2-newslist/ng2newslist.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/ng2-newslist/ng2newslist.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let item of items;index as i\" class=\"article border-bottom\">\r\n<div class=\"col-xs-12\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-2 col-md-2 date\">\r\n      <div class=\"large\">{{item['large']}}</div>\r\n      <div class=\"text-muted\">{{item['small']}}</div>\r\n    </div>\r\n    <div class=\"col-xs-10 col-md-10\">\r\n      <h4><a href=\"{{item['link']}}\">{{item['title']}}</a></h4>\r\n      <p>{{item['content']}}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"clear\"></div>\r\n</div><!--End .article-->\r\n"

/***/ }),

/***/ "./src/app/components/ng2-newslist/ng2newslist.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/ng2-newslist/ng2newslist.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/ng2-newslist/ng2newslist.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/ng2-newslist/ng2newslist.component.ts ***!
  \******************************************************************/
/*! exports provided: Ng2NewsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2NewsListComponent", function() { return Ng2NewsListComponent; });
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
 * Created by mohma on 7/31/2017.
 */

var Ng2NewsListComponent = /** @class */ (function () {
    function Ng2NewsListComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('data'),
        __metadata("design:type", Array)
    ], Ng2NewsListComponent.prototype, "items", void 0);
    Ng2NewsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ng2-news-list',
            template: __webpack_require__(/*! ./ng2newslist.component.html */ "./src/app/components/ng2-newslist/ng2newslist.component.html"),
            styles: [__webpack_require__(/*! ./ng2newslist.component.scss */ "./src/app/components/ng2-newslist/ng2newslist.component.scss")]
        })
    ], Ng2NewsListComponent);
    return Ng2NewsListComponent;
}());



/***/ }),

/***/ "./src/app/components/ng2-newslist/ng2newslist.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/ng2-newslist/ng2newslist.module.ts ***!
  \***************************************************************/
/*! exports provided: Ng2NewsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2NewsList", function() { return Ng2NewsList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng2newslist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ng2newslist.component */ "./src/app/components/ng2-newslist/ng2newslist.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by mohma on 7/31/2017.
 */



var Ng2NewsList = /** @class */ (function () {
    function Ng2NewsList() {
    }
    Ng2NewsList = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_ng2newslist_component__WEBPACK_IMPORTED_MODULE_2__["Ng2NewsListComponent"]],
            exports: [_ng2newslist_component__WEBPACK_IMPORTED_MODULE_2__["Ng2NewsListComponent"]]
        })
    ], Ng2NewsList);
    return Ng2NewsList;
}());



/***/ })

}]);
//# sourceMappingURL=widgets-main-main-module~widgets-modules-accountplatform-module~widgets-modules-platformsettings-mod~6213483a.js.map