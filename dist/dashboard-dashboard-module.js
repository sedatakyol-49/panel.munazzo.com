(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/angular-svg-round-progressbar/dist/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/angular-svg-round-progressbar/dist/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var round_progress_component_1 = __webpack_require__(/*! ./round-progress.component */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.component.js");
var round_progress_service_1 = __webpack_require__(/*! ./round-progress.service */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.service.js");
var round_progress_ease_1 = __webpack_require__(/*! ./round-progress.ease */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.ease.js");
var round_progress_config_1 = __webpack_require__(/*! ./round-progress.config */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.config.js");
var RoundProgressModule = /** @class */ (function () {
    function RoundProgressModule() {
    }
    RoundProgressModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [round_progress_component_1.RoundProgressComponent],
                    exports: [round_progress_component_1.RoundProgressComponent],
                    providers: [round_progress_service_1.RoundProgressService, round_progress_ease_1.RoundProgressEase, round_progress_config_1.ROUND_PROGRESS_DEFAULTS_PROVIDER]
                },] },
    ];
    return RoundProgressModule;
}());
exports.RoundProgressModule = RoundProgressModule;
;
__export(__webpack_require__(/*! ./round-progress.component */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.component.js"));
__export(__webpack_require__(/*! ./round-progress.service */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.service.js"));
__export(__webpack_require__(/*! ./round-progress.ease */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.ease.js"));
__export(__webpack_require__(/*! ./round-progress.config */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.config.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angular-svg-round-progressbar/dist/round-progress.component.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/angular-svg-round-progressbar/dist/round-progress.component.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var round_progress_service_1 = __webpack_require__(/*! ./round-progress.service */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.service.js");
var round_progress_config_1 = __webpack_require__(/*! ./round-progress.config */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.config.js");
var round_progress_ease_1 = __webpack_require__(/*! ./round-progress.ease */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.ease.js");
var RoundProgressComponent = /** @class */ (function () {
    function RoundProgressComponent(_service, _easing, _defaults, _ngZone, _renderer) {
        this._service = _service;
        this._easing = _easing;
        this._defaults = _defaults;
        this._ngZone = _ngZone;
        this._renderer = _renderer;
        this._lastAnimationId = 0;
        this.radius = this._defaults.radius;
        this.animation = this._defaults.animation;
        this.animationDelay = this._defaults.animationDelay;
        this.duration = this._defaults.duration;
        this.stroke = this._defaults.stroke;
        this.color = this._defaults.color;
        this.background = this._defaults.background;
        this.responsive = this._defaults.responsive;
        this.clockwise = this._defaults.clockwise;
        this.semicircle = this._defaults.semicircle;
        this.rounded = this._defaults.rounded;
        this.onRender = new core_1.EventEmitter();
    }
    /** Animates a change in the current value. */
    /** Animates a change in the current value. */
    RoundProgressComponent.prototype._animateChange = /** Animates a change in the current value. */
    function (from, to) {
        var _this = this;
        if (typeof from !== 'number') {
            from = 0;
        }
        to = this._clamp(to);
        from = this._clamp(from);
        var self = this;
        var changeInValue = to - from;
        var duration = self.duration;
        // Avoid firing change detection for each of the animation frames.
        self._ngZone.runOutsideAngular(function () {
            var start = function () {
                var startTime = self._service.getTimestamp();
                var id = ++self._lastAnimationId;
                requestAnimationFrame(function animation() {
                    var currentTime = Math.min(self._service.getTimestamp() - startTime, duration);
                    var value = self._easing[self.animation](currentTime, from, changeInValue, duration);
                    self._setPath(value);
                    self.onRender.emit(value);
                    if (id === self._lastAnimationId && currentTime < duration) {
                        requestAnimationFrame(animation);
                    }
                });
            };
            if (_this.animationDelay > 0) {
                setTimeout(start, _this.animationDelay);
            }
            else {
                start();
            }
        });
    };
    /** Sets the path dimensions. */
    /** Sets the path dimensions. */
    RoundProgressComponent.prototype._setPath = /** Sets the path dimensions. */
    function (value) {
        if (this._path) {
            this._renderer.setElementAttribute(this._path.nativeElement, 'd', this._service.getArc(value, this.max, this.radius - this.stroke / 2, this.radius, this.semicircle));
        }
    };
    /** Clamps a value between the maximum and 0. */
    /** Clamps a value between the maximum and 0. */
    RoundProgressComponent.prototype._clamp = /** Clamps a value between the maximum and 0. */
    function (value) {
        return Math.max(0, Math.min(value || 0, this.max));
    };
    /** Determines the SVG transforms for the <path> node. */
    /** Determines the SVG transforms for the <path> node. */
    RoundProgressComponent.prototype.getPathTransform = /** Determines the SVG transforms for the <path> node. */
    function () {
        var diameter = this._diameter;
        if (this.semicircle) {
            return this.clockwise ?
                "translate(0, " + diameter + ") rotate(-90)" :
                "translate(" + (diameter + ',' + diameter) + ") rotate(90) scale(-1, 1)";
        }
        else if (!this.clockwise) {
            return "scale(-1, 1) translate(-" + diameter + " 0)";
        }
    };
    /** Resolves a color through the service. */
    /** Resolves a color through the service. */
    RoundProgressComponent.prototype.resolveColor = /** Resolves a color through the service. */
    function (color) {
        return this._service.resolveColor(color);
    };
    /** Change detection callback. */
    /** Change detection callback. */
    RoundProgressComponent.prototype.ngOnChanges = /** Change detection callback. */
    function (changes) {
        if (changes.current) {
            this._animateChange(changes.current.previousValue, changes.current.currentValue);
        }
        else {
            this._setPath(this.current);
        }
    };
    Object.defineProperty(RoundProgressComponent.prototype, "_diameter", {
        /** Diameter of the circle. */
        get: /** Diameter of the circle. */
        function () {
            return this.radius * 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoundProgressComponent.prototype, "_elementHeight", {
        /** The CSS height of the wrapper element. */
        get: /** The CSS height of the wrapper element. */
        function () {
            if (!this.responsive) {
                return (this.semicircle ? this.radius : this._diameter) + 'px';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoundProgressComponent.prototype, "_viewBox", {
        /** Viewbox for the SVG element. */
        get: /** Viewbox for the SVG element. */
        function () {
            var diameter = this._diameter;
            return "0 0 " + diameter + " " + (this.semicircle ? this.radius : diameter);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoundProgressComponent.prototype, "_paddingBottom", {
        /** Bottom padding for the wrapper element. */
        get: /** Bottom padding for the wrapper element. */
        function () {
            if (this.responsive) {
                return this.semicircle ? '50%' : '100%';
            }
        },
        enumerable: true,
        configurable: true
    });
    RoundProgressComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'round-progress',
                    template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" [attr.viewBox]=\"_viewBox\">\n      <circle\n        fill=\"none\"\n        [attr.cx]=\"radius\"\n        [attr.cy]=\"radius\"\n        [attr.r]=\"radius - stroke / 2\"\n        [style.stroke]=\"resolveColor(background)\"\n        [style.stroke-width]=\"stroke\"/>\n\n      <path\n        #path\n        fill=\"none\"\n        [style.stroke-width]=\"stroke\"\n        [style.stroke]=\"resolveColor(color)\"\n        [style.stroke-linecap]=\"rounded ? 'round' : ''\"\n        [attr.transform]=\"getPathTransform()\"/>\n    </svg>\n  ",
                    host: {
                        'role': 'progressbar',
                        '[attr.aria-valuemin]': 'current',
                        '[attr.aria-valuemax]': 'max',
                        '[style.width]': "responsive ? '' : _diameter + 'px'",
                        '[style.height]': '_elementHeight',
                        '[style.padding-bottom]': '_paddingBottom',
                        '[class.responsive]': 'responsive'
                    },
                    styles: [
                        ":host {\n      display: block;\n      position: relative;\n      overflow: hidden;\n    }",
                        ":host.responsive {\n      width: 100%;\n      padding-bottom: 100%;\n    }",
                        ":host.responsive > svg {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n    }"
                    ]
                },] },
    ];
    /** @nocollapse */
    RoundProgressComponent.ctorParameters = function () { return [
        { type: round_progress_service_1.RoundProgressService, },
        { type: round_progress_ease_1.RoundProgressEase, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [round_progress_config_1.ROUND_PROGRESS_DEFAULTS,] },] },
        { type: core_1.NgZone, },
        { type: core_1.Renderer, },
    ]; };
    RoundProgressComponent.propDecorators = {
        "_path": [{ type: core_1.ViewChild, args: ['path',] },],
        "current": [{ type: core_1.Input },],
        "max": [{ type: core_1.Input },],
        "radius": [{ type: core_1.Input },],
        "animation": [{ type: core_1.Input },],
        "animationDelay": [{ type: core_1.Input },],
        "duration": [{ type: core_1.Input },],
        "stroke": [{ type: core_1.Input },],
        "color": [{ type: core_1.Input },],
        "background": [{ type: core_1.Input },],
        "responsive": [{ type: core_1.Input },],
        "clockwise": [{ type: core_1.Input },],
        "semicircle": [{ type: core_1.Input },],
        "rounded": [{ type: core_1.Input },],
        "onRender": [{ type: core_1.Output },],
    };
    return RoundProgressComponent;
}());
exports.RoundProgressComponent = RoundProgressComponent;
//# sourceMappingURL=round-progress.component.js.map

/***/ }),

/***/ "./node_modules/angular-svg-round-progressbar/dist/round-progress.config.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/angular-svg-round-progressbar/dist/round-progress.config.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
exports.ROUND_PROGRESS_DEFAULTS = new core_1.InjectionToken('ROUND_PROGRESS_DEFAULTS');
exports.ROUND_PROGRESS_DEFAULTS_PROVIDER = {
    provide: exports.ROUND_PROGRESS_DEFAULTS,
    useValue: {
        radius: 125,
        animation: 'easeOutCubic',
        animationDelay: null,
        duration: 500,
        stroke: 15,
        color: '#45CCCE',
        background: '#EAEAEA',
        responsive: false,
        clockwise: true,
        semicircle: false,
        rounded: false
    }
};
//# sourceMappingURL=round-progress.config.js.map

/***/ }),

/***/ "./node_modules/angular-svg-round-progressbar/dist/round-progress.ease.js":
/*!********************************************************************************!*\
  !*** ./node_modules/angular-svg-round-progressbar/dist/round-progress.ease.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var RoundProgressEase = /** @class */ (function () {
    function RoundProgressEase() {
    }
    // t: current time (or position) of the neonate. This can be seconds or frames, steps,
    // seconds, ms, whatever – as long as the unit is the same as is used for the total time.
    // b: beginning value of the property.
    // c: change between the beginning and destination value of the property.
    // d: total time of the neonate.
    // t: current time (or position) of the neonate. This can be seconds or frames, steps,
    // seconds, ms, whatever – as long as the unit is the same as is used for the total time.
    // b: beginning value of the property.
    // c: change between the beginning and destination value of the property.
    // d: total time of the neonate.
    RoundProgressEase.prototype.linearEase = 
    // t: current time (or position) of the neonate. This can be seconds or frames, steps,
    // seconds, ms, whatever – as long as the unit is the same as is used for the total time.
    // b: beginning value of the property.
    // c: change between the beginning and destination value of the property.
    // d: total time of the neonate.
    function (t, b, c, d) {
        return c * t / d + b;
    };
    ;
    RoundProgressEase.prototype.easeInQuad = function (t, b, c, d) {
        return c * (t /= d) * t + b;
    };
    ;
    RoundProgressEase.prototype.easeOutQuad = function (t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutQuad = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t + b;
        }
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    };
    ;
    RoundProgressEase.prototype.easeInCubic = function (t, b, c, d) {
        return c * (t /= d) * t * t + b;
    };
    ;
    RoundProgressEase.prototype.easeOutCubic = function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutCubic = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t + b;
        }
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    };
    ;
    RoundProgressEase.prototype.easeInQuart = function (t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    };
    ;
    RoundProgressEase.prototype.easeOutQuart = function (t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutQuart = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t * t + b;
        }
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    };
    ;
    RoundProgressEase.prototype.easeInQuint = function (t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    };
    ;
    RoundProgressEase.prototype.easeOutQuint = function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutQuint = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t * t * t + b;
        }
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    };
    ;
    RoundProgressEase.prototype.easeInSine = function (t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    };
    ;
    RoundProgressEase.prototype.easeOutSine = function (t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutSine = function (t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    };
    ;
    RoundProgressEase.prototype.easeInExpo = function (t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    };
    ;
    RoundProgressEase.prototype.easeOutExpo = function (t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutExpo = function (t, b, c, d) {
        if (t == 0) {
            return b;
        }
        ;
        if (t == d) {
            return b + c;
        }
        if ((t /= d / 2) < 1) {
            return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        }
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    };
    ;
    RoundProgressEase.prototype.easeInCirc = function (t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    };
    ;
    RoundProgressEase.prototype.easeOutCirc = function (t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutCirc = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        }
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    };
    ;
    RoundProgressEase.prototype.easeInElastic = function (t, b, c, d) {
        var s = 1.70158;
        var p = d * 0.3;
        var a = c;
        if (t == 0) {
            return b;
        }
        if ((t /= d) == 1) {
            return b + c;
        }
        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return -(a * Math.pow(2, 10 * (t--)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    };
    ;
    RoundProgressEase.prototype.easeOutElastic = function (t, b, c, d) {
        var s = 1.70158;
        var p = d * 0.3;
        var a = c;
        if (t == 0) {
            return b;
        }
        if ((t /= d) == 1) {
            return b + c;
        }
        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutElastic = function (t, b, c, d) {
        var s = 1.70158;
        var p = d * (0.3 * 1.5);
        var a = c;
        if (t == 0) {
            return b;
        }
        if ((t /= d / 2) == 2) {
            return b + c;
        }
        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        if (t < 1) {
            return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) *
                Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        }
        return a * Math.pow(2, -10 * (t -= 1)) *
            Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
    };
    ;
    RoundProgressEase.prototype.easeInBack = function (t, b, c, d, s) {
        if (s === void 0) { s = 1.70158; }
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    };
    ;
    RoundProgressEase.prototype.easeOutBack = function (t, b, c, d, s) {
        if (s === void 0) { s = 1.70158; }
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutBack = function (t, b, c, d, s) {
        if (s === void 0) { s = 1.70158; }
        if ((t /= d / 2) < 1) {
            return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
        }
        return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    };
    ;
    RoundProgressEase.prototype.easeInBounce = function (t, b, c, d) {
        return c - this.easeOutBounce(d - t, 0, c, d) + b;
    };
    ;
    RoundProgressEase.prototype.easeOutBounce = function (t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        }
        else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
        }
        else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
        }
        return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutBounce = function (t, b, c, d) {
        if (t < d / 2) {
            return this.easeInBounce(t * 2, 0, c, d) * 0.5 + b;
        }
        return this.easeOutBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
    };
    ;
    RoundProgressEase.decorators = [
        { type: core_1.Injectable },
    ];
    return RoundProgressEase;
}());
exports.RoundProgressEase = RoundProgressEase;
/**
 * TERMS OF USE - EASING EQUATIONS
 * Open source under the BSD License.

 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without modification, are permitted
 * provided that the following conditions are met:

 * Redistributions of source code must retain the above copyright notice, this list of conditions
 * and the following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright notice, this list of conditions
 * and the following disclaimer in the documentation and/or other materials provided with the
 * distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse or promote
 * products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
 * IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 * FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
 * ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
//# sourceMappingURL=round-progress.ease.js.map

/***/ }),

/***/ "./node_modules/angular-svg-round-progressbar/dist/round-progress.service.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/angular-svg-round-progressbar/dist/round-progress.service.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var DEGREE_IN_RADIANS = Math.PI / 180;
var RoundProgressService = /** @class */ (function () {
    function RoundProgressService(document) {
        this.supportsSvg = !!(document &&
            document.createElementNS &&
            document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect);
        this._base = document && document.head.querySelector('base');
        this._hasPerf = typeof window !== 'undefined' &&
            window.performance &&
            window.performance.now &&
            typeof window.performance.now() === 'number';
    }
    /**
     * Resolves a SVG color against the page's `base` tag.
     */
    /**
       * Resolves a SVG color against the page's `base` tag.
       */
    RoundProgressService.prototype.resolveColor = /**
       * Resolves a SVG color against the page's `base` tag.
       */
    function (color) {
        if (this._base && this._base.href) {
            var hashIndex = color.indexOf('#');
            if (hashIndex > -1 && color.indexOf('url') > -1) {
                return color.slice(0, hashIndex) + location.href + color.slice(hashIndex);
            }
        }
        return color;
    };
    /**
     * Generates a timestamp.
     */
    /**
       * Generates a timestamp.
       */
    RoundProgressService.prototype.getTimestamp = /**
       * Generates a timestamp.
       */
    function () {
        return this._hasPerf ? window.performance.now() : Date.now();
    };
    /**
     * Generates the value for an SVG arc.
     * @param current       Current value.
     * @param total         Maximum value.
     * @param pathRadius    Radius of the SVG path.
     * @param elementRadius Radius of the SVG container.
     * @param isSemicircle  Whether the element should be a semicircle.
     */
    /**
       * Generates the value for an SVG arc.
       * @param current       Current value.
       * @param total         Maximum value.
       * @param pathRadius    Radius of the SVG path.
       * @param elementRadius Radius of the SVG container.
       * @param isSemicircle  Whether the element should be a semicircle.
       */
    RoundProgressService.prototype.getArc = /**
       * Generates the value for an SVG arc.
       * @param current       Current value.
       * @param total         Maximum value.
       * @param pathRadius    Radius of the SVG path.
       * @param elementRadius Radius of the SVG container.
       * @param isSemicircle  Whether the element should be a semicircle.
       */
    function (current, total, pathRadius, elementRadius, isSemicircle) {
        if (isSemicircle === void 0) { isSemicircle = false; }
        var value = Math.max(0, Math.min(current || 0, total));
        var maxAngle = isSemicircle ? 180 : 359.9999;
        var percentage = total === 0 ? maxAngle : (value / total) * maxAngle;
        var start = this._polarToCartesian(elementRadius, pathRadius, percentage);
        var end = this._polarToCartesian(elementRadius, pathRadius, 0);
        var arcSweep = (percentage <= 180 ? 0 : 1);
        return "M " + start + " A " + pathRadius + " " + pathRadius + " 0 " + arcSweep + " 0 " + end;
    };
    ;
    /**
     * Converts polar cooradinates to Cartesian.
     * @param elementRadius  Radius of the wrapper element.
     * @param pathRadius     Radius of the path being described.
     * @param angleInDegrees Degree to be converted.
     */
    /**
       * Converts polar cooradinates to Cartesian.
       * @param elementRadius  Radius of the wrapper element.
       * @param pathRadius     Radius of the path being described.
       * @param angleInDegrees Degree to be converted.
       */
    RoundProgressService.prototype._polarToCartesian = /**
       * Converts polar cooradinates to Cartesian.
       * @param elementRadius  Radius of the wrapper element.
       * @param pathRadius     Radius of the path being described.
       * @param angleInDegrees Degree to be converted.
       */
    function (elementRadius, pathRadius, angleInDegrees) {
        var angleInRadians = (angleInDegrees - 90) * DEGREE_IN_RADIANS;
        var x = elementRadius + (pathRadius * Math.cos(angleInRadians));
        var y = elementRadius + (pathRadius * Math.sin(angleInRadians));
        return x + ' ' + y;
    };
    RoundProgressService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    RoundProgressService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [platform_browser_1.DOCUMENT,] },] },
    ]; };
    return RoundProgressService;
}());
exports.RoundProgressService = RoundProgressService;
;
//# sourceMappingURL=round-progress.service.js.map

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



/***/ }),

/***/ "./src/app/components/pieChart/pieChart.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/pieChart/pieChart.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"panel panel-default\">\r\n  <div class=\"panel-body easypiechart-panel\">\r\n    <h4>{{properties['label']}}</h4>\r\n    <div class=\"progressBarText\" [style.color]=\"properties['color']\">\r\n      {{((properties['current']/properties['max'])*100).toPrecision(3)}}%\r\n    </div>\r\n    <div class=\"progressive-pieChart\">\r\n      <round-progress\r\n        [current]=\"properties['current']\"\r\n        [max]=\"properties['max']\"\r\n        [color]=\"properties['color']\"\r\n        [background]=\"'#eaeaea'\"\r\n        [radius]=100\r\n        [stroke]=\"7\"\r\n        [semicircle]=\"false\"\r\n        [rounded]=\"true\"\r\n        [clockwise]=\"true\"\r\n        [responsive]=\"true\"\r\n        [duration]=\"800\"\r\n        [animation]=\"'easeInOutQuart'\"\r\n        [animationDelay]=\"100\"\r\n      ></round-progress>\r\n    </div>      </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/pieChart/pieChart.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/pieChart/pieChart.component.ts ***!
  \***********************************************************/
/*! exports provided: PieChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartComponent", function() { return PieChartComponent; });
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
var PieChartComponent = /** @class */ (function () {
    function PieChartComponent() {
        this.properties = { color: "#30a5ff", current: 0, max: 100, label: "fa-line-chart" };
    }
    PieChartComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('data'),
        __metadata("design:type", Object)
    ], PieChartComponent.prototype, "properties", void 0);
    PieChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./pieChart.component.html */ "./src/app/components/pieChart/pieChart.component.html"),
            selector: 'pieChart',
            styles: [__webpack_require__(/*! ./pieChart.scss */ "./src/app/components/pieChart/pieChart.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PieChartComponent);
    return PieChartComponent;
}());



/***/ }),

/***/ "./src/app/components/pieChart/pieChart.scss":
/*!***************************************************!*\
  !*** ./src/app/components/pieChart/pieChart.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".progressBarText {\n  position: absolute;\n  color: #bbb;\n  font-weight: 100;\n  line-height: 1;\n  top: 52%;\n  bottom: auto;\n  left: 50%;\n  -webkit-transform: translateY(-50%) translateX(-50%);\n          transform: translateY(-50%) translateX(-50%);\n  font-size: 2.7rem;\n  padding-top: 10px;\n  padding-left: 7.5px; }\n\n.progressive-pieChart {\n  padding: 30px; }\n\n@media only screen and (max-width: 380px) {\n  .progressBarText {\n    font-size: 2rem; } }\n\n@media only screen and (min-width: 480px) and (max-width: 600px) {\n  .progressBarText {\n    font-size: 3.6rem; } }\n\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .progressBarText {\n    font-size: 5rem; } }\n\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .progressBarText {\n    font-size: 4.2rem; } }\n\n@media only screen and (min-width: 992px) and (max-width: 1382px) {\n  .progressBarText {\n    font-size: 2.3rem; } }\n\n@media only screen and (min-width: 1382px) {\n  .progressBarText {\n    font-size: 4.5rem; } }\n"

/***/ }),

/***/ "./src/app/components/statsCard/statsCard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/statsCard/statsCard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-widget\">\r\n  <div class=\"row no-padding\">\r\n    <div class=\"col-sm-3 col-lg-5 widget-left statsCard\" [style.background]=\"properties['color']\">\r\n      <i [class]=\"properties['icon']\"></i>\r\n    </div>\r\n    <div class=\"col-sm-9 col-lg-7 widget-right\">\r\n      <div class=\"large\">{{properties['data']}}</div>\r\n      <div class=\"text-muted\">{{properties['label']}}</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/statsCard/statsCard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/statsCard/statsCard.component.ts ***!
  \*************************************************************/
/*! exports provided: StatsCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsCardComponent", function() { return StatsCardComponent; });
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
var StatsCardComponent = /** @class */ (function () {
    function StatsCardComponent() {
        this.properties = { color: "#30a5ff", label: "Label", data: 0, icon: "fa-line-chart" };
    }
    StatsCardComponent.prototype.ngOnInit = function () {
        this.properties.icon += " fa fa-3x fa-fw";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('data'),
        __metadata("design:type", Object)
    ], StatsCardComponent.prototype, "properties", void 0);
    StatsCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./statsCard.component.html */ "./src/app/components/statsCard/statsCard.component.html"),
            selector: 'statsCard',
            styles: [__webpack_require__(/*! ./statsCard.scss */ "./src/app/components/statsCard/statsCard.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StatsCardComponent);
    return StatsCardComponent;
}());



/***/ }),

/***/ "./src/app/components/statsCard/statsCard.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/statsCard/statsCard.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".statsCard {\n  color: #ececec;\n  padding-top: 17.5px; }\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.ts ***!
  \************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
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
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
        data: {
            title: 'Login'
        }
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12 col-md-6 col-sm-12 col-lg-3\">\r\n    <statsCard [data]=\"card1\"></statsCard>\r\n  </div>\r\n  <div class=\"col-xs-12 col-md-6 col-lg-3\">\r\n    <statsCard [data]=\"card2\"></statsCard>\r\n  </div>\r\n  <div class=\"col-xs-12 col-md-6 col-lg-3\">\r\n    <statsCard [data]=\"card3\"></statsCard>\r\n  </div>\r\n  <div class=\"col-xs-12 col-md-6 col-lg-3\">\r\n    <statsCard [data]=\"card4\"></statsCard>\r\n  </div>\r\n</div><!--/.row-->\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-12\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\">Site Traffic Overview</div>\r\n      <div class=\"panel-body\">\r\n        <div class=\"canvas-wrapper\" >\r\n          <canvas baseChart style=\"min-height: 300px;width: 100%; height: 50vh\"\r\n                  [options]=\"ChartOptions\"\r\n                  [datasets]=\"lineChartData\"\r\n                  [labels]=\"lineChartLabels\"\r\n                  [chartType]=\"lineChartType\"\r\n                  (chartHover)=\"chartHovered($event)\"\r\n                  (chartClick)=\"chartClicked($event)\"\r\n          ></canvas>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div><!--/.row-->\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-xs-6 col-md-3\">\r\n    <pieChart [data]=\"pbar1\"></pieChart>\r\n  </div>\r\n  <div class=\"col-xs-6 col-md-3\">\r\n    <pieChart [data]=\"pbar2\"></pieChart>\r\n  </div>\r\n  <div class=\"col-xs-6 col-md-3\">\r\n    <pieChart [data]=\"pbar3\"></pieChart>\r\n  </div>\r\n  <div class=\"col-xs-6 col-md-3\">\r\n    <pieChart [data]=\"pbar4\"></pieChart>\r\n  </div>\r\n\r\n</div><!--/.row-->\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <div class=\"panel panel-default \">\r\n      <div class=\"panel-heading\">\r\n        Timeline\r\n      </div>\r\n\r\n      <div class=\"panel-body timeline-container\">\r\n        <ng2-timeline [completeListener]=\"completeListener\" [data]=\"timelineData\"></ng2-timeline>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <div class=\"panel panel-default articles\">\r\n      <div class=\"panel-heading\">\r\n        Latest News\r\n      </div>\r\n      <div class=\"panel-body articles-container\">\r\n        <ng2-news-list [data]=\"newsList\"></ng2-news-list>\r\n      </div>\r\n    </div><!--End .articles-->\r\n  </div>\r\n</div>\r\n\r\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by mohma on 7/26/2017.
 */

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.chartHeight = 35;
        this.ChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            mainAspectRatio: false
        };
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
        //Card
        this.card1 = { color: "#1ebfae", icon: "fa-users", label: "Users", data: 50 };
        this.card2 = { color: "#30a5ff", icon: "fa-cogs", label: "Items", data: 80 };
        this.card3 = { color: "#ffb53e", icon: "fa-cogs", label: "Orders", data: 90 };
        this.card4 = { color: "#f9243f", icon: "fa-cog", label: "Delivered", data: 2 };
        //ProgressBars
        this.pbar1 = { color: "#1ebfae", max: 100, label: "Load", current: 2 };
        this.pbar2 = { color: "#30a5ff", max: 100, label: "Traffic", current: 20 };
        this.pbar3 = { color: "#ffb53e", max: 100, label: "Users", current: 50 };
        this.pbar4 = { color: "#f9243f", max: 100, label: "RAM", current: 57 };
        // lineChart
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartType = 'line';
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
    }
    //Timeline Related
    DashboardComponent.prototype.completeListener = function (item) {
        console.log(item);
        return true;
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var self = this;
        setTimeout(function () {
            self.timelineData.push({
                title: "Step 3",
                icon: '<i class="fa fa-remove"></i>',
                content: "Bye World",
                complete: false
            });
        }, 5000);
    };
    // events
    DashboardComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            selector: 'dashboard',
            styles: [__webpack_require__(/*! ./dashboard.scss */ "./src/app/dashboard/dashboard.scss")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.service */ "./src/app/dashboard/dashboard.service.ts");
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-routing */ "./src/app/dashboard/dashboard-routing.ts");
/* harmony import */ var _components_statsCard_statsCard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/statsCard/statsCard.component */ "./src/app/components/statsCard/statsCard.component.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-svg-round-progressbar */ "./node_modules/angular-svg-round-progressbar/dist/index.js");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_pieChart_pieChart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/pieChart/pieChart.component */ "./src/app/components/pieChart/pieChart.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_timeline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-timeline */ "./node_modules/ng2-timeline/index.js");
/* harmony import */ var _components_ng2_newslist_ng2newslist_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/ng2-newslist/ng2newslist.module */ "./src/app/components/ng2-newslist/ng2newslist.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by mohma on 7/26/2017.
 */













var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _dashboard_routing__WEBPACK_IMPORTED_MODULE_5__["DashboardRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"],
                angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_8__["RoundProgressModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
                ng2_timeline__WEBPACK_IMPORTED_MODULE_11__["Ng2Timeline"],
                _components_ng2_newslist_ng2newslist_module__WEBPACK_IMPORTED_MODULE_12__["Ng2NewsList"]
            ],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _components_statsCard_statsCard_component__WEBPACK_IMPORTED_MODULE_6__["StatsCardComponent"], _components_pieChart_pieChart_component__WEBPACK_IMPORTED_MODULE_9__["PieChartComponent"]],
            providers: [_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.scss":
/*!******************************************!*\
  !*** ./src/app/dashboard/dashboard.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".responsiveChart {\n  min-height: 300px !important;\n  width: 100% !important;\n  height: 50vh !important; }\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.service.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.service.ts ***!
  \************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
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

var DashboardService = /** @class */ (function () {
    function DashboardService() {
    }
    DashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DashboardService);
    return DashboardService;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map