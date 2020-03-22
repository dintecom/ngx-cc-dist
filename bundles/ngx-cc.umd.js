(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('credit-card-type'), require('@angular/cdk/a11y'), require('@angular/cdk/coercion'), require('@angular/forms'), require('@angular/material/core'), require('@angular/material/form-field'), require('rxjs'), require('card-validator'), require('@angular/common'), require('@angular/material/input')) :
    typeof define === 'function' && define.amd ? define('ngx-cc', ['exports', '@angular/core', 'credit-card-type', '@angular/cdk/a11y', '@angular/cdk/coercion', '@angular/forms', '@angular/material/core', '@angular/material/form-field', 'rxjs', 'card-validator', '@angular/common', '@angular/material/input'], factory) :
    (global = global || self, factory(global['ngx-cc'] = {}, global.ng.core, global.creditCardType, global.ng.cdk.a11y, global.ng.cdk.coercion, global.ng.forms, global.ng.material.core, global.ng.material.formField, global.rxjs, global.validator, global.ng.common, global.ng.material.input));
}(this, (function (exports, core, creditCardType, a11y, coercion, forms, core$1, formField, rxjs, validator, common, input) { 'use strict';

    creditCardType = creditCardType && Object.prototype.hasOwnProperty.call(creditCardType, 'default') ? creditCardType['default'] : creditCardType;
    validator = validator && Object.prototype.hasOwnProperty.call(validator, 'default') ? validator['default'] : validator;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var NgxCcService = /** @class */ (function () {
        function NgxCcService() {
        }
        NgxCcService.prototype.getCardType = function (cardNumber) {
            return creditCardType(cardNumber)[0];
        };
        NgxCcService.prototype.prettyCardNumber = function (cardNumber, cardType) {
            var card = creditCardType.getTypeInfo(cardType);
            if (card) {
                var offsets = [].concat(0, card.gaps, cardNumber.length);
                var components = [];
                for (var i = 0; offsets[i] < cardNumber.length; i++) {
                    var start = offsets[i];
                    var end = Math.min(offsets[i + 1], cardNumber.length);
                    components.push(cardNumber.substring(start, end));
                }
                return components.join(' ');
            }
            return cardNumber;
        };
        NgxCcService.ɵprov = core["ɵɵdefineInjectable"]({ factory: function NgxCcService_Factory() { return new NgxCcService(); }, token: NgxCcService, providedIn: "root" });
        NgxCcService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], NgxCcService);
        return NgxCcService;
    }());

    var CardValidator = function (control) {
        return validator.number(control.value).isValid ? null : { invalidCardNumber: true };
    };

    var CC_CARD_ICONS_TOKEN = new core.InjectionToken('CC_CARD_ICONS_TOKEN');

    var externalCardIcons = {
        default: 'https://img.icons8.com/color/40/000000/bank-card-back-side.png',
        visa: 'https://img.icons8.com/color/40/000000/visa.png',
        mastercard: 'https://img.icons8.com/color/40/000000/mastercard.png',
        'american-express': 'https://img.icons8.com/color/40/000000/amex.png',
        'diners-club': 'https://img.icons8.com/color/40/000000/diners-club.png',
        discover: 'https://img.icons8.com/color/40/000000/discover.png',
        jcb: 'https://img.icons8.com/color/40/000000/jcb.png',
        unionpay: 'https://img.icons8.com/color/40/000000/unionpay.png',
        maestro: 'https://img.icons8.com/color/40/000000/maestro.png',
        mir: 'https://img.icons8.com/color/40/000000/mir.png',
        elo: 'https://img.icons8.com/color/40/000000/bank-card-back-side.png',
        hiper: 'https://img.icons8.com/color/40/000000/bank-card-back-side.png',
        hipercard: 'https://img.icons8.com/color/40/000000/bank-card-back-side.png',
    };

    var ɵ0 = CardValidator;
    var NgxCcComponent = /** @class */ (function () {
        function NgxCcComponent(injector, elRef, fm, parentForm, parentFormGroup, defaultErrorStateMatcher, creditCardService, ccCardIcons) {
            var _this = this;
            this.injector = injector;
            this.elRef = elRef;
            this.fm = fm;
            this.parentForm = parentForm;
            this.parentFormGroup = parentFormGroup;
            this.defaultErrorStateMatcher = defaultErrorStateMatcher;
            this.creditCardService = creditCardService;
            this.ccCardIcons = ccCardIcons;
            // tslint:disable-next-line: variable-name
            this._disabled = false;
            // tslint:disable-next-line: variable-name
            this._defaultStyles = false;
            // tslint:disable-next-line: variable-name
            this._required = false;
            // tslint:disable-next-line: variable-name
            this._cardIcons = this.ccCardIcons || externalCardIcons;
            this.ngControl = null;
            this.focused = false;
            this.errorState = false;
            this.cardNumber = '';
            this.cardIcon = this._cardIcons.default;
            this.stateChanges = new rxjs.Subject();
            this.id = "ngx-cc" + NgxCcComponent_1.nextId;
            this.describedBy = '';
            var parent = this.parentFormGroup || this.parentForm;
            if (parent) {
                this._formSubmitSubscription = parentFormGroup.ngSubmit.subscribe(function () {
                    _this.ngControl.control.markAsTouched();
                });
            }
            fm.monitor(elRef.nativeElement, true).subscribe(function (origin) {
                _this.focused = !!origin;
                _this.stateChanges.next();
            });
        }
        NgxCcComponent_1 = NgxCcComponent;
        Object.defineProperty(NgxCcComponent.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (cardNumber) {
                this._value = cardNumber;
                this.onChange(cardNumber);
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgxCcComponent.prototype, "placeholder", {
            get: function () {
                return this._placeholder;
            },
            set: function (placeholder) {
                this._placeholder = placeholder;
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgxCcComponent.prototype, "empty", {
            get: function () {
                var value = this.cardNumber.replace(/\s/g, '');
                return !(!!value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgxCcComponent.prototype, "required", {
            get: function () {
                return this._required;
            },
            set: function (req) {
                this._required = coercion.coerceBooleanProperty(req);
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgxCcComponent.prototype, "disabled", {
            get: function () {
                if (this.ngControl && this.ngControl.disabled !== null) {
                    return this.ngControl.disabled;
                }
                return this._disabled;
            },
            set: function (dis) {
                this._disabled = coercion.coerceBooleanProperty(dis);
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgxCcComponent.prototype, "defaultStyles", {
            get: function () {
                return this._defaultStyles;
            },
            set: function (val) {
                this._defaultStyles = coercion.coerceBooleanProperty(val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgxCcComponent.prototype, "shouldLabelFloat", {
            get: function () {
                return this.focused || !this.empty;
            },
            enumerable: true,
            configurable: true
        });
        NgxCcComponent.prototype.ngOnInit = function () {
            this.ngControl = this.injector.get(forms.NgControl);
            if (this.ngControl !== null) {
                // Setting the value accessor directly (instead of using
                // the providers) to avoid running into a circular import.
                this.ngControl.valueAccessor = this;
            }
        };
        NgxCcComponent.prototype.ngDoCheck = function () {
            if (this.ngControl) {
                this.updateErrorState();
            }
        };
        NgxCcComponent.prototype.writeValue = function (value) {
            this.cardNumber = value || '';
        };
        NgxCcComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        NgxCcComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        NgxCcComponent.prototype.setDescribedByIds = function (ids) {
            this.describedBy = ids.join(' ');
        };
        NgxCcComponent.prototype.onContainerClick = function (event) {
            if (event.target.tagName.toLowerCase() !== 'input') {
                this.elRef.nativeElement.querySelector('input').focus();
            }
        };
        NgxCcComponent.prototype.updateIcon = function (event) {
            var value = event.target.value.replace(/\s/g, '');
            var cardType = 'default';
            this.onChange(value);
            this.ngControl.control.markAsDirty();
            this.card = this.creditCardService.getCardType(value);
            if (this.card) {
                this.maxNumberLimit = Math.max.apply(Math, __spread(this.card.lengths));
                cardType = this.card.type;
            }
            this.cardNumber = this.creditCardService.prettyCardNumber(value, cardType);
            this.cardIcon = !value ? this._cardIcons.default : this._cardIcons[cardType];
        };
        NgxCcComponent.prototype.updateOnTouch = function () {
            if (this.ngControl) {
                this.onTouched(this.ngControl.control.value);
                this.ngControl.control.markAsTouched();
            }
        };
        NgxCcComponent.prototype.ngOnDestroy = function () {
            if (this._formSubmitSubscription)
                this._formSubmitSubscription.unsubscribe();
            this.fm.stopMonitoring(this.elRef.nativeElement);
            this.stateChanges.complete();
        };
        NgxCcComponent.prototype.updateErrorState = function () {
            var oldState = this.errorState;
            var parent = this.parentFormGroup || this.parentForm;
            var matcher = this.defaultErrorStateMatcher;
            var control = this.ngControl ? this.ngControl.control : null;
            var newState = matcher.isErrorState(control, parent);
            if (newState !== oldState) {
                this.errorState = newState;
                this.stateChanges.next();
            }
        };
        var NgxCcComponent_1;
        NgxCcComponent.nextId = 0;
        NgxCcComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: core.ElementRef },
            { type: a11y.FocusMonitor },
            { type: forms.NgForm, decorators: [{ type: core.Optional }] },
            { type: forms.FormGroupDirective, decorators: [{ type: core.Optional }] },
            { type: core$1.ErrorStateMatcher },
            { type: NgxCcService },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [CC_CARD_ICONS_TOKEN,] }] }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], NgxCcComponent.prototype, "styleClass", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], NgxCcComponent.prototype, "value", null);
        __decorate([
            core.Input(),
            __metadata("design:type", String),
            __metadata("design:paramtypes", [String])
        ], NgxCcComponent.prototype, "placeholder", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [])
        ], NgxCcComponent.prototype, "empty", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean),
            __metadata("design:paramtypes", [Boolean])
        ], NgxCcComponent.prototype, "required", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean),
            __metadata("design:paramtypes", [Boolean])
        ], NgxCcComponent.prototype, "disabled", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], NgxCcComponent.prototype, "defaultStyles", null);
        __decorate([
            core.HostBinding(),
            __metadata("design:type", Object)
        ], NgxCcComponent.prototype, "id", void 0);
        __decorate([
            core.HostBinding('attr.aria-describedby'),
            __metadata("design:type", Object)
        ], NgxCcComponent.prototype, "describedBy", void 0);
        __decorate([
            core.HostBinding('class.floating'),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [])
        ], NgxCcComponent.prototype, "shouldLabelFloat", null);
        NgxCcComponent = NgxCcComponent_1 = __decorate([
            core.Component({
                selector: 'ngx-cc',
                template: "\n      <div class=\"ngx-cc-container\" [ngClass]=\"styleClass\">\n        <input *ngIf=\"!defaultStyles\"\n        ngxNumberOnly\n        [ngxMaxLength]=\"maxNumberLimit\"\n        class=\"ngx-cc-input\"\n        type=\"text\"\n        [required]=\"required\"\n        [disabled]=\"disabled\"\n        [value]=\"cardNumber\"\n        (blur)=\"updateOnTouch()\"\n        (input)=\"updateIcon($event)\" />\n\n        <input *ngIf=\"defaultStyles\"\n        ngxNumberOnly\n        [ngxMaxLength]=\"maxNumberLimit\"\n        class=\"ngx-cc-input-default\"\n        type=\"text\"\n        [placeholder]=\"placeholder\"\n        [required]=\"required\"\n        [disabled]=\"disabled\"\n        [value]=\"cardNumber\"\n        [ngStyle]=\"{'background-image': 'url(' + cardIcon + ')'}\"\n        (blur)=\"updateOnTouch()\"\n        (input)=\"updateIcon($event)\" />\n        <img *ngIf=\"!defaultStyles\" class=\"ngx-cc-suffix\" [src]=\"cardIcon\" />\n      </div>\n      ",
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return NgxCcComponent_1; }),
                        multi: true
                    },
                    {
                        provide: forms.NG_VALIDATORS,
                        useValue: ɵ0,
                        multi: true
                    },
                    {
                        provide: formField.MatFormFieldControl,
                        useExisting: core.forwardRef(function () { return NgxCcComponent_1; }),
                        multi: true
                    }
                ],
                encapsulation: core.ViewEncapsulation.None,
                styles: ["\n    .ngx-cc-container {\n      display: flex;\n      position: relative;\n    }\n    .ngx-cc-input {\n      border: none;\n      background: none;\n      padding: 0;\n      outline: none;\n      font: inherit;\n      text-align: left;\n    }\n    .ngx-cc-input-default {\n      background-position: 100%;\n      background-repeat: no-repeat;\n      background-size: 40px;\n    }\n    .ngx-cc-form-field div.mat-form-field-wrapper div.mat-form-field-flex {\n      align-items: flex-end;\n    }\n    .ngx-cc-suffix {\n      position: absolute;\n      top: -1.5rem;\n      right: 0;\n      width: 40px;\n      height: 40px;\n    }\n    "]
            }),
            __param(3, core.Optional()),
            __param(4, core.Optional()),
            __param(7, core.Optional()), __param(7, core.Inject(CC_CARD_ICONS_TOKEN)),
            __metadata("design:paramtypes", [core.Injector,
                core.ElementRef,
                a11y.FocusMonitor,
                forms.NgForm,
                forms.FormGroupDirective,
                core$1.ErrorStateMatcher,
                NgxCcService, Object])
        ], NgxCcComponent);
        return NgxCcComponent;
    }());

    var CardExpirationValidator = function (control) {
        var date = validator.expirationDate(control.value);
        return (date.month && date.year) ? null : { invalidDate: true };
    };

    var ɵ0$1 = CardExpirationValidator;
    var CcDateComponent = /** @class */ (function () {
        function CcDateComponent(injector, elRef, fm, parentForm, parentFormGroup, defaultErrorStateMatcher) {
            var _this = this;
            this.injector = injector;
            this.elRef = elRef;
            this.fm = fm;
            this.parentForm = parentForm;
            this.parentFormGroup = parentFormGroup;
            this.defaultErrorStateMatcher = defaultErrorStateMatcher;
            // tslint:disable-next-line: variable-name
            this._disabled = false;
            // tslint:disable-next-line: variable-name
            this._defaultStyles = false;
            // tslint:disable-next-line: variable-name
            this._required = false;
            this.ngControl = null;
            this.focused = false;
            this.errorState = false;
            this.stateChanges = new rxjs.Subject();
            this.cardDate = '';
            this.id = "ngx-cc" + CcDateComponent_1.nextId;
            this.describedBy = '';
            var parent = this.parentFormGroup || this.parentForm;
            if (parent) {
                this._formSubmitSubscription = parentFormGroup.ngSubmit.subscribe(function () {
                    _this.ngControl.control.markAsTouched();
                });
            }
            fm.monitor(elRef.nativeElement, true).subscribe(function (origin) {
                _this.focused = !!origin;
                _this.stateChanges.next();
            });
        }
        CcDateComponent_1 = CcDateComponent;
        Object.defineProperty(CcDateComponent.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (cardNumber) {
                this._value = cardNumber;
                this.onChanges(cardNumber);
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CcDateComponent.prototype, "placeholder", {
            get: function () {
                return this._placeholder;
            },
            set: function (placeholder) {
                this._placeholder = placeholder;
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CcDateComponent.prototype, "empty", {
            get: function () {
                return !(!!this.cardDate);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CcDateComponent.prototype, "required", {
            get: function () {
                return this._required;
            },
            set: function (req) {
                this._required = coercion.coerceBooleanProperty(req);
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CcDateComponent.prototype, "disabled", {
            get: function () {
                if (this.ngControl && this.ngControl.disabled !== null) {
                    return this.ngControl.disabled;
                }
                return this._disabled;
            },
            set: function (dis) {
                this._disabled = coercion.coerceBooleanProperty(dis);
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CcDateComponent.prototype, "defaultStyles", {
            get: function () {
                return this._defaultStyles;
            },
            set: function (val) {
                this._defaultStyles = coercion.coerceBooleanProperty(val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CcDateComponent.prototype, "shouldLabelFloat", {
            get: function () {
                return this.focused || !this.empty;
            },
            enumerable: true,
            configurable: true
        });
        CcDateComponent.prototype.ngOnInit = function () {
            this.ngControl = this.injector.get(forms.NgControl);
            if (this.ngControl !== null) {
                // Setting the value accessor directly (instead of using
                // the providers) to avoid running into a circular import.
                this.ngControl.valueAccessor = this;
            }
        };
        CcDateComponent.prototype.ngDoCheck = function () {
            if (this.ngControl) {
                this.updateErrorState();
            }
        };
        CcDateComponent.prototype.writeValue = function (val) {
            this.cardDate = val || '';
        };
        CcDateComponent.prototype.registerOnChange = function (fn) {
            this.onChanges = fn;
        };
        CcDateComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        CcDateComponent.prototype.setDescribedByIds = function (ids) {
            this.describedBy = ids.join(' ');
        };
        CcDateComponent.prototype.onContainerClick = function (event) {
            if (event.target.tagName.toLowerCase() !== 'input') {
                this.elRef.nativeElement.querySelector('input').focus();
            }
        };
        CcDateComponent.prototype.updateDate = function () {
            if (this.ngControl) {
                this.onChanges(this.ngControl.control.value);
                this.ngControl.control.markAsDirty();
                this.cardDate = this.ngControl.control.value;
            }
        };
        CcDateComponent.prototype.updateOnTouch = function () {
            if (this.ngControl) {
                this.onTouched(this.ngControl.control.value);
                this.ngControl.control.markAsTouched();
                this.cardDate = this.ngControl.control.value;
            }
        };
        CcDateComponent.prototype.ngOnDestroy = function () {
            if (this._formSubmitSubscription)
                this._formSubmitSubscription.unsubscribe();
            this.fm.stopMonitoring(this.elRef.nativeElement);
            this.stateChanges.complete();
        };
        CcDateComponent.prototype.updateErrorState = function () {
            var oldState = this.errorState;
            var parent = this.parentFormGroup || this.parentForm;
            var matcher = this.defaultErrorStateMatcher;
            var control = this.ngControl ? this.ngControl.control : null;
            var newState = matcher.isErrorState(control, parent);
            if (newState !== oldState) {
                this.errorState = newState;
                this.stateChanges.next();
            }
        };
        var CcDateComponent_1;
        CcDateComponent.nextId = 0;
        CcDateComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: core.ElementRef },
            { type: a11y.FocusMonitor },
            { type: forms.NgForm, decorators: [{ type: core.Optional }] },
            { type: forms.FormGroupDirective, decorators: [{ type: core.Optional }] },
            { type: core$1.ErrorStateMatcher }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], CcDateComponent.prototype, "styleClass", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], CcDateComponent.prototype, "value", null);
        __decorate([
            core.Input(),
            __metadata("design:type", String),
            __metadata("design:paramtypes", [String])
        ], CcDateComponent.prototype, "placeholder", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [])
        ], CcDateComponent.prototype, "empty", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean),
            __metadata("design:paramtypes", [Boolean])
        ], CcDateComponent.prototype, "required", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean),
            __metadata("design:paramtypes", [Boolean])
        ], CcDateComponent.prototype, "disabled", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], CcDateComponent.prototype, "defaultStyles", null);
        __decorate([
            core.HostBinding(),
            __metadata("design:type", Object)
        ], CcDateComponent.prototype, "id", void 0);
        __decorate([
            core.HostBinding('attr.aria-describedby'),
            __metadata("design:type", Object)
        ], CcDateComponent.prototype, "describedBy", void 0);
        __decorate([
            core.HostBinding('class.floating'),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [])
        ], CcDateComponent.prototype, "shouldLabelFloat", null);
        CcDateComponent = CcDateComponent_1 = __decorate([
            core.Component({
                selector: 'ngx-cc-date',
                template: "\n    <div class=\"ngx-cc-date-container\" [ngClass]=\"styleClass\">\n      <input\n      ngxNumberOnly\n      ngxFormatDate\n      maxlength=\"7\"\n      [ngClass]=\"{'ngx-cc-date-input': !defaultStyles}\"\n      type=\"text\"\n      [placeholder]=\"placeholder || ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      [value]=\"cardDate\"\n      (blur)=\"updateOnTouch()\"\n      (input)=\"updateDate()\"\n      >\n    </div>\n  ",
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return CcDateComponent_1; }),
                        multi: true
                    },
                    {
                        provide: forms.NG_VALIDATORS,
                        useValue: ɵ0$1,
                        multi: true
                    },
                    {
                        provide: formField.MatFormFieldControl,
                        useExisting: core.forwardRef(function () { return CcDateComponent_1; }),
                        multi: true
                    }
                ],
                encapsulation: core.ViewEncapsulation.None,
                styles: ["\n    .ngx-cc-date-input {\n      border: none;\n      background: none;\n      padding: 0;\n      outline: none;\n      font: inherit;\n      text-align: left;\n    }\n  "]
            }),
            __param(3, core.Optional()),
            __param(4, core.Optional()),
            __metadata("design:paramtypes", [core.Injector,
                core.ElementRef,
                a11y.FocusMonitor,
                forms.NgForm,
                forms.FormGroupDirective,
                core$1.ErrorStateMatcher])
        ], CcDateComponent);
        return CcDateComponent;
    }());

    var NumberOnlyDirective = /** @class */ (function () {
        function NumberOnlyDirective(elRef) {
            this.elRef = elRef;
        }
        Object.defineProperty(NumberOnlyDirective.prototype, "ngxNumberOnly", {
            get: function () {
                return this._ngxNumberOnly;
            },
            set: function (flag) {
                this._ngxNumberOnly = coercion.coerceBooleanProperty(flag);
            },
            enumerable: true,
            configurable: true
        });
        NumberOnlyDirective.prototype.onKeyDown = function (event) {
            if (this.ngxNumberOnly) {
                if ([46, 8, 9, 27, 13, 110, 190].indexOf(event.keyCode) !== -1 ||
                    // Allow: Ctrl+A
                    (event.keyCode === 65 && (event.ctrlKey || event.metaKey)) ||
                    // Allow: Ctrl+C
                    (event.keyCode === 67 && (event.ctrlKey || event.metaKey)) ||
                    // Allow: Ctrl+V
                    (event.keyCode === 86 && (event.ctrlKey || event.metaKey)) ||
                    // Allow: Ctrl+X
                    (event.keyCode === 88 && (event.ctrlKey || event.metaKey)) ||
                    // Allow: home, end, left, right
                    (event.keyCode >= 35 && event.keyCode <= 39)) {
                    // let it happen, don't do anything
                    return;
                }
                // Ensure that it is a number and stop the keypress
                if ((event.shiftKey || (event.keyCode < 48 || event.keyCode > 57)) && (event.keyCode < 96 || event.keyCode > 105)) {
                    event.preventDefault();
                }
                // If creditcard number exceeds the limit provided by braintree api return false.
                if (this.ngxMaxLength) {
                    var value = event.target.value.replace(/\s/g, '').length;
                    return (value < this.ngxMaxLength);
                }
            }
        };
        NumberOnlyDirective.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean),
            __metadata("design:paramtypes", [Boolean])
        ], NumberOnlyDirective.prototype, "ngxNumberOnly", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], NumberOnlyDirective.prototype, "ngxMaxLength", void 0);
        __decorate([
            core.HostListener('keydown', ['$event']),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [KeyboardEvent]),
            __metadata("design:returntype", void 0)
        ], NumberOnlyDirective.prototype, "onKeyDown", null);
        NumberOnlyDirective = __decorate([
            core.Directive({
                selector: '[ngxNumberOnly]'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], NumberOnlyDirective);
        return NumberOnlyDirective;
    }());

    var FormatDateDirective = /** @class */ (function () {
        function FormatDateDirective(control) {
            this.control = control;
            /**
             * isUpdated - check if input is udpated or not
             */
            this.isUpdated = false;
        }
        FormatDateDirective.prototype.formatDate = function (event) {
            var eventValue = event.target.value;
            var value = parseInt(eventValue, 10);
            if (!eventValue) {
                this.isUpdated = false;
                this.control.control.setValue(eventValue);
                return;
            }
            if (!this.isUpdated && value >= 10 && value <= 12) {
                this.control.control.setValue(value + " / ");
                this.isUpdated = true;
            }
            else if (!this.isUpdated && value >= 2 && value <= 9) {
                this.control.control.setValue("0" + value + " / ");
                this.isUpdated = true;
            }
            else if (!this.isUpdated &&
                eventValue.length === 2 && (value < 12 && value > 0)) {
                this.control.control.setValue(eventValue + " / ");
                this.isUpdated = true;
            }
            else {
                this.control.control.setValue(eventValue);
            }
        };
        FormatDateDirective.ctorParameters = function () { return [
            { type: forms.NgControl }
        ]; };
        __decorate([
            core.HostListener('input', ['$event']),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [KeyboardEvent]),
            __metadata("design:returntype", void 0)
        ], FormatDateDirective.prototype, "formatDate", null);
        FormatDateDirective = __decorate([
            core.Directive({
                selector: '[ngxFormatDate]'
            }),
            __metadata("design:paramtypes", [forms.NgControl])
        ], FormatDateDirective);
        return FormatDateDirective;
    }());

    var CcCvvComponent = /** @class */ (function () {
        function CcCvvComponent(injector, elRef, fm, parentForm, parentFormGroup, defaultErrorStateMatcher) {
            var _this = this;
            this.injector = injector;
            this.elRef = elRef;
            this.fm = fm;
            this.parentForm = parentForm;
            this.parentFormGroup = parentFormGroup;
            this.defaultErrorStateMatcher = defaultErrorStateMatcher;
            // tslint:disable-next-line: variable-name
            this._disabled = false;
            // tslint:disable-next-line: variable-name
            this._defaultStyles = false;
            // tslint:disable-next-line: variable-name
            this._required = false;
            this.ngControl = null;
            this.focused = false;
            this.errorState = false;
            this.stateChanges = new rxjs.Subject();
            this.cardCvv = '';
            this.maxCvvLength = 4;
            this.id = "ngx-cc" + CcCvvComponent_1.nextId;
            this.describedBy = '';
            var parent = this.parentFormGroup || this.parentForm;
            if (parent) {
                this._formSubmitSubscription = parentFormGroup.ngSubmit.subscribe(function () {
                    _this.ngControl.control.markAsTouched();
                });
            }
            fm.monitor(elRef.nativeElement, true).subscribe(function (origin) {
                _this.focused = !!origin;
                _this.stateChanges.next();
            });
        }
        CcCvvComponent_1 = CcCvvComponent;
        Object.defineProperty(CcCvvComponent.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (cardNumber) {
                this._value = cardNumber;
                this.onChanges(cardNumber);
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CcCvvComponent.prototype, "placeholder", {
            get: function () {
                return this._placeholder;
            },
            set: function (placeholder) {
                this._placeholder = placeholder;
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CcCvvComponent.prototype, "empty", {
            get: function () {
                return !(!!this.cardCvv);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CcCvvComponent.prototype, "required", {
            get: function () {
                return this._required;
            },
            set: function (req) {
                this._required = coercion.coerceBooleanProperty(req);
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CcCvvComponent.prototype, "disabled", {
            get: function () {
                if (this.ngControl && this.ngControl.disabled !== null) {
                    return this.ngControl.disabled;
                }
                return this._disabled;
            },
            set: function (dis) {
                this._disabled = coercion.coerceBooleanProperty(dis);
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CcCvvComponent.prototype, "defaultStyles", {
            get: function () {
                return this._defaultStyles;
            },
            set: function (val) {
                this._defaultStyles = coercion.coerceBooleanProperty(val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CcCvvComponent.prototype, "cvvSize", {
            get: function () {
                return this._cvvSize;
            },
            set: function (value) {
                this._cvvSize = value;
                if (this.ngControl) {
                    this.ngControl.control.updateValueAndValidity();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CcCvvComponent.prototype, "shouldLabelFloat", {
            get: function () {
                return this.focused || !this.empty;
            },
            enumerable: true,
            configurable: true
        });
        CcCvvComponent.prototype.ngOnInit = function () {
            this.ngControl = this.injector.get(forms.NgControl);
            if (this.ngControl !== null) {
                // Setting the value accessor directly (instead of using
                // the providers) to avoid running into a circular import.
                this.ngControl.valueAccessor = this;
            }
        };
        CcCvvComponent.prototype.ngDoCheck = function () {
            if (this.ngControl) {
                this.updateErrorState();
            }
        };
        CcCvvComponent.prototype.validate = function (control) {
            var cvv = validator.cvv(control.value, this.cvvSize);
            return cvv.isValid ? null : { invalidCvv: true };
        };
        CcCvvComponent.prototype.writeValue = function (val) {
            this.cardCvv = val || '';
        };
        CcCvvComponent.prototype.registerOnChange = function (fn) {
            this.onChanges = fn;
        };
        CcCvvComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        CcCvvComponent.prototype.setDescribedByIds = function (ids) {
            this.describedBy = ids.join(' ');
        };
        CcCvvComponent.prototype.onContainerClick = function (event) {
            if (event.target.tagName.toLowerCase() !== 'input') {
                this.elRef.nativeElement.querySelector('input').focus();
            }
        };
        CcCvvComponent.prototype.updateCvv = function (event) {
            var value = event.target.value;
            this.cardCvv = value;
            this.onChanges(value);
            this.ngControl.control.markAsDirty();
        };
        CcCvvComponent.prototype.updateOnTouch = function () {
            if (this.ngControl) {
                this.onTouched(this.ngControl.control.value);
                this.ngControl.control.markAsTouched();
            }
        };
        CcCvvComponent.prototype.ngOnDestroy = function () {
            if (this._formSubmitSubscription)
                this._formSubmitSubscription.unsubscribe();
            this.fm.stopMonitoring(this.elRef.nativeElement);
            this.stateChanges.complete();
        };
        CcCvvComponent.prototype.updateErrorState = function () {
            var oldState = this.errorState;
            var parent = this.parentFormGroup || this.parentForm;
            var matcher = this.defaultErrorStateMatcher;
            var control = this.ngControl ? this.ngControl.control : null;
            var newState = matcher.isErrorState(control, parent);
            if (newState !== oldState) {
                this.errorState = newState;
                this.stateChanges.next();
            }
        };
        var CcCvvComponent_1;
        CcCvvComponent.nextId = 0;
        CcCvvComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: core.ElementRef },
            { type: a11y.FocusMonitor },
            { type: forms.NgForm, decorators: [{ type: core.Optional }] },
            { type: forms.FormGroupDirective, decorators: [{ type: core.Optional }] },
            { type: core$1.ErrorStateMatcher }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], CcCvvComponent.prototype, "styleClass", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], CcCvvComponent.prototype, "value", null);
        __decorate([
            core.Input(),
            __metadata("design:type", String),
            __metadata("design:paramtypes", [String])
        ], CcCvvComponent.prototype, "placeholder", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [])
        ], CcCvvComponent.prototype, "empty", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean),
            __metadata("design:paramtypes", [Boolean])
        ], CcCvvComponent.prototype, "required", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean),
            __metadata("design:paramtypes", [Boolean])
        ], CcCvvComponent.prototype, "disabled", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], CcCvvComponent.prototype, "defaultStyles", null);
        __decorate([
            core.Input('cvv-size'),
            __metadata("design:type", Number),
            __metadata("design:paramtypes", [Number])
        ], CcCvvComponent.prototype, "cvvSize", null);
        __decorate([
            core.HostBinding(),
            __metadata("design:type", Object)
        ], CcCvvComponent.prototype, "id", void 0);
        __decorate([
            core.HostBinding('attr.aria-describedby'),
            __metadata("design:type", Object)
        ], CcCvvComponent.prototype, "describedBy", void 0);
        __decorate([
            core.HostBinding('class.floating'),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [])
        ], CcCvvComponent.prototype, "shouldLabelFloat", null);
        CcCvvComponent = CcCvvComponent_1 = __decorate([
            core.Component({
                selector: 'ngx-cc-cvv',
                template: "\n    <div class=\"ngx-cc-cvv-container\" [ngClass]=\"styleClass\">\n      <input\n        ngxNumberOnly\n        [ngxMaxLength]=\"maxCvvLength\"\n        [ngClass]=\"{'ngx-cc-cvv-input': !defaultStyles}\"\n        type=\"text\"\n        [placeholder]=\"placeholder || ''\"\n        [required]=\"required\"\n        [disabled]=\"disabled\"\n        [value]=\"cardCvv\"\n        (blur)=\"updateOnTouch()\"\n        (input)=\"updateCvv($event)\">\n    </div>\n  ",
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return CcCvvComponent_1; }),
                        multi: true
                    },
                    {
                        provide: forms.NG_VALIDATORS,
                        useExisting: core.forwardRef(function () { return CcCvvComponent_1; }),
                        multi: true
                    },
                    {
                        provide: formField.MatFormFieldControl,
                        useExisting: core.forwardRef(function () { return CcCvvComponent_1; }),
                        multi: true
                    }
                ],
                styles: ["\n    .ngx-cc-cvv-input {\n      border: none;\n      background: none;\n      padding: 0;\n      outline: none;\n      font: inherit;\n      text-align: left;\n    }\n  "]
            }),
            __param(3, core.Optional()),
            __param(4, core.Optional()),
            __metadata("design:paramtypes", [core.Injector,
                core.ElementRef,
                a11y.FocusMonitor,
                forms.NgForm,
                forms.FormGroupDirective,
                core$1.ErrorStateMatcher])
        ], CcCvvComponent);
        return CcCvvComponent;
    }());

    var NgxCcModule = /** @class */ (function () {
        function NgxCcModule() {
        }
        NgxCcModule_1 = NgxCcModule;
        NgxCcModule.forRoot = function (config) {
            return {
                ngModule: NgxCcModule_1,
                providers: [
                    {
                        provide: CC_CARD_ICONS_TOKEN,
                        useValue: __assign(__assign({}, externalCardIcons), config.cardIcons),
                    }
                ]
            };
        };
        var NgxCcModule_1;
        NgxCcModule = NgxCcModule_1 = __decorate([
            core.NgModule({
                declarations: [
                    NgxCcComponent,
                    NumberOnlyDirective,
                    CcDateComponent,
                    FormatDateDirective,
                    CcCvvComponent
                ],
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                    input.MatInputModule,
                    formField.MatFormFieldModule
                ],
                exports: [
                    NgxCcComponent,
                    CcDateComponent,
                    CcCvvComponent,
                    NumberOnlyDirective,
                    FormatDateDirective
                ],
            })
        ], NgxCcModule);
        return NgxCcModule;
    }());

    exports.CcDateComponent = CcDateComponent;
    exports.NgxCcComponent = NgxCcComponent;
    exports.NgxCcModule = NgxCcModule;
    exports.NgxCcService = NgxCcService;
    exports.ɵ0 = ɵ0;
    exports.ɵa = CardValidator;
    exports.ɵc = CC_CARD_ICONS_TOKEN;
    exports.ɵd = CardExpirationValidator;
    exports.ɵe = NumberOnlyDirective;
    exports.ɵf = FormatDateDirective;
    exports.ɵg = CcCvvComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-cc.umd.js.map
