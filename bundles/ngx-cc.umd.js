(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('credit-card-type'), require('@angular/common'), require('@angular/material/input'), require('@angular/core'), require('@angular/forms'), require('@angular/cdk/a11y'), require('@angular/cdk/coercion'), require('@angular/material/form-field'), require('rxjs'), require('card-validator')) :
    typeof define === 'function' && define.amd ? define('ngx-cc', ['exports', 'credit-card-type', '@angular/common', '@angular/material/input', '@angular/core', '@angular/forms', '@angular/cdk/a11y', '@angular/cdk/coercion', '@angular/material/form-field', 'rxjs', 'card-validator'], factory) :
    (factory((global['ngx-cc'] = {}),global.creditCardType,global.ng.common,global.ng.material.input,global.ng.core,global.ng.forms,global.ng.cdk.a11y,global.ng.cdk.coercion,global.ng.material['form-field'],global.rxjs,global.validator));
}(this, (function (exports,creditCardType,common,input,i0,forms,a11y,coercion,formField,rxjs,validator) { 'use strict';

    creditCardType = creditCardType && creditCardType.hasOwnProperty('default') ? creditCardType['default'] : creditCardType;
    validator = validator && validator.hasOwnProperty('default') ? validator['default'] : validator;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxCcService = /** @class */ (function () {
        function NgxCcService() {
        }
        /**
         * @param {?} cardNumber
         * @return {?}
         */
        NgxCcService.prototype.getCardType = /**
         * @param {?} cardNumber
         * @return {?}
         */
            function (cardNumber) {
                return creditCardType(cardNumber)[0];
            };
        /**
         * @param {?} cardNumber
         * @param {?} cardType
         * @return {?}
         */
        NgxCcService.prototype.prettyCardNumber = /**
         * @param {?} cardNumber
         * @param {?} cardType
         * @return {?}
         */
            function (cardNumber, cardType) {
                /** @type {?} */
                var card = creditCardType.getTypeInfo(cardType);
                if (card) {
                    /** @type {?} */
                    var offsets = [].concat(0, card.gaps, cardNumber.length);
                    /** @type {?} */
                    var components = [];
                    for (var i = 0; offsets[i] < cardNumber.length; i++) {
                        /** @type {?} */
                        var start = offsets[i];
                        /** @type {?} */
                        var end = Math.min(offsets[i + 1], cardNumber.length);
                        components.push(cardNumber.substring(start, end));
                    }
                    return components.join(' ');
                }
                return cardNumber;
            };
        NgxCcService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgxCcService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgxCcService.ngInjectableDef = i0.defineInjectable({ factory: function NgxCcService_Factory() { return new NgxCcService(); }, token: NgxCcService, providedIn: "root" });
        return NgxCcService;
    }());

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
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var CardValidator = ( /**
     * @param {?} control
     * @return {?}
     */function (control) {
        return validator.number(control.value).isValid ? null : { invalidCardNumber: true };
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var cardIcons = {
        default: 'https://img.icons8.com/color/40/000000/bank-card-back-side.png',
        visa: 'https://img.icons8.com/color/40/000000/visa.png',
        mastercard: 'https://img.icons8.com/color/40/000000/mastercard.png',
        discover: 'https://img.icons8.com/color/40/000000/discover.png',
        jcb: 'https://img.icons8.com/color/40/000000/jcb.png',
        maestro: 'https://img.icons8.com/color/40/000000/maestro.png',
        'american-express': 'https://img.icons8.com/color/40/000000/amex.png',
        'diners-club': 'https://img.icons8.com/color/40/000000/diners-club.png'
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0 = CardValidator;
    var NgxCcComponent = /** @class */ (function () {
        function NgxCcComponent(injector, elRef, fm, creditCardService) {
            var _this = this;
            this.injector = injector;
            this.elRef = elRef;
            this.fm = fm;
            this.creditCardService = creditCardService;
            // tslint:disable-next-line: variable-name
            this._disabled = false;
            // tslint:disable-next-line: variable-name
            this._defaultStyles = false;
            // tslint:disable-next-line: variable-name
            this._required = false;
            this.ngControl = null;
            this.focused = false;
            this.errorState = false;
            this.cardNumber = '';
            this.cardIcon = cardIcons.default;
            this.stateChanges = new rxjs.Subject();
            this.id = "ngx-cc" + NgxCcComponent.nextId;
            this.describedBy = '';
            fm.monitor(elRef.nativeElement, true).subscribe(( /**
             * @param {?} origin
             * @return {?}
             */function (origin) {
                _this.focused = !!origin;
                _this.stateChanges.next();
            }));
        }
        Object.defineProperty(NgxCcComponent.prototype, "value", {
            get: /**
             * @return {?}
             */ function () {
                return this._value;
            },
            set: /**
             * @param {?} cardNumber
             * @return {?}
             */ function (cardNumber) {
                this._value = cardNumber;
                this.onChange(cardNumber);
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgxCcComponent.prototype, "placeholder", {
            get: /**
             * @return {?}
             */ function () {
                return this._placeholder;
            },
            set: /**
             * @param {?} placeholder
             * @return {?}
             */ function (placeholder) {
                this._placeholder = placeholder;
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgxCcComponent.prototype, "empty", {
            get: /**
             * @return {?}
             */ function () {
                /** @type {?} */
                var value = this.cardNumber.replace(/\s/g, '');
                return !(!!value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgxCcComponent.prototype, "required", {
            get: /**
             * @return {?}
             */ function () {
                return this._required;
            },
            set: /**
             * @param {?} req
             * @return {?}
             */ function (req) {
                this._required = coercion.coerceBooleanProperty(req);
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgxCcComponent.prototype, "disabled", {
            get: /**
             * @return {?}
             */ function () {
                if (this.ngControl && this.ngControl.disabled !== null) {
                    return this.ngControl.disabled;
                }
                return this._disabled;
            },
            set: /**
             * @param {?} dis
             * @return {?}
             */ function (dis) {
                this._disabled = coercion.coerceBooleanProperty(dis);
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgxCcComponent.prototype, "defaultStyles", {
            get: /**
             * @return {?}
             */ function () {
                return this._defaultStyles;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._defaultStyles = coercion.coerceBooleanProperty(val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgxCcComponent.prototype, "shouldLabelFloat", {
            get: /**
             * @return {?}
             */ function () {
                return this.focused || !this.empty;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NgxCcComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.ngControl = this.injector.get(forms.NgControl);
                if (this.ngControl !== null) {
                    // Setting the value accessor directly (instead of using
                    // the providers) to avoid running into a circular import.
                    this.ngControl.valueAccessor = this;
                }
            };
        /**
         * @return {?}
         */
        NgxCcComponent.prototype.ngDoCheck = /**
         * @return {?}
         */
            function () {
                if (this.ngControl) {
                    this.errorState = this.ngControl.invalid && this.ngControl.touched;
                    this.stateChanges.next();
                }
            };
        /**
         * @param {?} value
         * @return {?}
         */
        NgxCcComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.cardNumber = value || '';
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        NgxCcComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onChange = fn;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        NgxCcComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onTouched = fn;
            };
        /**
         * @param {?} ids
         * @return {?}
         */
        NgxCcComponent.prototype.setDescribedByIds = /**
         * @param {?} ids
         * @return {?}
         */
            function (ids) {
                this.describedBy = ids.join(' ');
            };
        /**
         * @param {?} event
         * @return {?}
         */
        NgxCcComponent.prototype.onContainerClick = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if ((( /** @type {?} */(event.target))).tagName.toLowerCase() !== 'input') {
                    this.elRef.nativeElement.querySelector('input').focus();
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        NgxCcComponent.prototype.updateIcon = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var value = (( /** @type {?} */(event.target))).value.replace(/\s/g, '');
                /** @type {?} */
                var cardType = 'default';
                this.onChange(value);
                this.ngControl.control.markAsDirty();
                this.card = this.creditCardService.getCardType(value);
                if (this.card) {
                    this.maxNumberLimit = Math.max.apply(Math, __spread(this.card.lengths));
                    cardType = this.card.type;
                }
                this.cardNumber = this.creditCardService.prettyCardNumber(value, cardType);
                this.cardIcon = !value ? cardIcons.default : cardIcons[cardType];
            };
        /**
         * @return {?}
         */
        NgxCcComponent.prototype.updateOnTouch = /**
         * @return {?}
         */
            function () {
                if (this.ngControl) {
                    this.onTouched(this.ngControl.control.value);
                    this.ngControl.control.markAsTouched();
                }
            };
        /**
         * @return {?}
         */
        NgxCcComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.fm.stopMonitoring(this.elRef.nativeElement);
                this.stateChanges.complete();
            };
        NgxCcComponent.nextId = 0;
        NgxCcComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ngx-cc',
                        template: "\n      <div class=\"ngx-cc-container\" [ngClass]=\"styleClass\">\n        <input *ngIf=\"!defaultStyles\"\n        ngxNumberOnly\n        [ngxMaxLength]=\"maxNumberLimit\"\n        class=\"ngx-cc-input\"\n        type=\"text\"\n        [required]=\"required\"\n        [disabled]=\"disabled\"\n        [value]=\"cardNumber\"\n        (blur)=\"updateOnTouch()\"\n        (input)=\"updateIcon($event)\" />\n\n        <input *ngIf=\"defaultStyles\"\n        ngxNumberOnly\n        [ngxMaxLength]=\"maxNumberLimit\"\n        class=\"ngx-cc-input-default\"\n        type=\"text\"\n        [placeholder]=\"placeholder\"\n        [required]=\"required\"\n        [disabled]=\"disabled\"\n        [value]=\"cardNumber\"\n        [ngStyle]=\"{'background-image': 'url(' + cardIcon + ')'}\"\n        (blur)=\"updateOnTouch()\"\n        (input)=\"updateIcon($event)\" />\n        <img *ngIf=\"!defaultStyles\" class=\"ngx-cc-suffix\" [src]=\"cardIcon\" />\n      </div>\n      ",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: i0.forwardRef(( /**
                                 * @return {?}
                                 */function () { return NgxCcComponent; })),
                                multi: true
                            },
                            {
                                provide: forms.NG_VALIDATORS,
                                useValue: ɵ0,
                                multi: true
                            },
                            {
                                provide: formField.MatFormFieldControl,
                                useExisting: i0.forwardRef(( /**
                                 * @return {?}
                                 */function () { return NgxCcComponent; })),
                                multi: true
                            }
                        ],
                        encapsulation: i0.ViewEncapsulation.None,
                        styles: ["\n    .ngx-cc-container {\n      display: flex;\n      position: relative;\n    }\n    .ngx-cc-input {\n      border: none;\n      background: none;\n      padding: 0;\n      outline: none;\n      font: inherit;\n      text-align: left;\n    }\n    .ngx-cc-input-default {\n      background-position: 100%;\n      background-repeat: no-repeat;\n    }\n    .ngx-cc-form-field div.mat-form-field-wrapper div.mat-form-field-flex {\n      align-items: flex-end;\n    }\n    .ngx-cc-suffix {\n      position: absolute;\n      top: -1.5rem;\n      right: 0;\n    }\n    "]
                    }] }
        ];
        /** @nocollapse */
        NgxCcComponent.ctorParameters = function () {
            return [
                { type: i0.Injector },
                { type: i0.ElementRef },
                { type: a11y.FocusMonitor },
                { type: NgxCcService }
            ];
        };
        NgxCcComponent.propDecorators = {
            styleClass: [{ type: i0.Input }],
            value: [{ type: i0.Input }],
            placeholder: [{ type: i0.Input }],
            empty: [{ type: i0.Input }],
            required: [{ type: i0.Input }],
            disabled: [{ type: i0.Input }],
            defaultStyles: [{ type: i0.Input }],
            id: [{ type: i0.HostBinding }],
            describedBy: [{ type: i0.HostBinding, args: ['attr.aria-describedby',] }],
            shouldLabelFloat: [{ type: i0.HostBinding, args: ['class.floating',] }]
        };
        return NgxCcComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var CardExpirationValidator = ( /**
     * @param {?} control
     * @return {?}
     */function (control) {
        /** @type {?} */
        var date = validator.expirationDate(control.value);
        return (date.month && date.year) ? null : { invalidDate: true };
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0$1 = CardExpirationValidator;
    var CcDateComponent = /** @class */ (function () {
        function CcDateComponent(injector, elRef, fm) {
            var _this = this;
            this.injector = injector;
            this.elRef = elRef;
            this.fm = fm;
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
            this.id = "ngx-cc" + CcDateComponent.nextId;
            this.describedBy = '';
            fm.monitor(elRef.nativeElement, true).subscribe(( /**
             * @param {?} origin
             * @return {?}
             */function (origin) {
                _this.focused = !!origin;
                _this.stateChanges.next();
            }));
        }
        Object.defineProperty(CcDateComponent.prototype, "value", {
            get: /**
             * @return {?}
             */ function () {
                return this._value;
            },
            set: /**
             * @param {?} cardNumber
             * @return {?}
             */ function (cardNumber) {
                this._value = cardNumber;
                this.onChanges(cardNumber);
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CcDateComponent.prototype, "placeholder", {
            get: /**
             * @return {?}
             */ function () {
                return this._placeholder;
            },
            set: /**
             * @param {?} placeholder
             * @return {?}
             */ function (placeholder) {
                this._placeholder = placeholder;
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CcDateComponent.prototype, "empty", {
            get: /**
             * @return {?}
             */ function () {
                return !(!!this.cardDate);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CcDateComponent.prototype, "required", {
            get: /**
             * @return {?}
             */ function () {
                return this._required;
            },
            set: /**
             * @param {?} req
             * @return {?}
             */ function (req) {
                this._required = coercion.coerceBooleanProperty(req);
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CcDateComponent.prototype, "disabled", {
            get: /**
             * @return {?}
             */ function () {
                if (this.ngControl && this.ngControl.disabled !== null) {
                    return this.ngControl.disabled;
                }
                return this._disabled;
            },
            set: /**
             * @param {?} dis
             * @return {?}
             */ function (dis) {
                this._disabled = coercion.coerceBooleanProperty(dis);
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CcDateComponent.prototype, "defaultStyles", {
            get: /**
             * @return {?}
             */ function () {
                return this._defaultStyles;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._defaultStyles = coercion.coerceBooleanProperty(val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CcDateComponent.prototype, "shouldLabelFloat", {
            get: /**
             * @return {?}
             */ function () {
                return this.focused || !this.empty;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        CcDateComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.ngControl = this.injector.get(forms.NgControl);
                if (this.ngControl !== null) {
                    // Setting the value accessor directly (instead of using
                    // the providers) to avoid running into a circular import.
                    this.ngControl.valueAccessor = this;
                }
            };
        /**
         * @return {?}
         */
        CcDateComponent.prototype.ngDoCheck = /**
         * @return {?}
         */
            function () {
                if (this.ngControl) {
                    this.errorState = this.ngControl.invalid && this.ngControl.touched;
                    this.stateChanges.next();
                }
            };
        /**
         * @param {?} val
         * @return {?}
         */
        CcDateComponent.prototype.writeValue = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                this.cardDate = val || '';
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        CcDateComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onChanges = fn;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        CcDateComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onTouched = fn;
            };
        /**
         * @param {?} ids
         * @return {?}
         */
        CcDateComponent.prototype.setDescribedByIds = /**
         * @param {?} ids
         * @return {?}
         */
            function (ids) {
                this.describedBy = ids.join(' ');
            };
        /**
         * @param {?} event
         * @return {?}
         */
        CcDateComponent.prototype.onContainerClick = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if ((( /** @type {?} */(event.target))).tagName.toLowerCase() !== 'input') {
                    this.elRef.nativeElement.querySelector('input').focus();
                }
            };
        /**
         * @return {?}
         */
        CcDateComponent.prototype.updateDate = /**
         * @return {?}
         */
            function () {
                if (this.ngControl) {
                    this.onChanges(this.ngControl.control.value);
                    this.ngControl.control.markAsDirty();
                    this.cardDate = this.ngControl.control.value;
                }
            };
        /**
         * @return {?}
         */
        CcDateComponent.prototype.updateOnTouch = /**
         * @return {?}
         */
            function () {
                if (this.ngControl) {
                    this.onTouched(this.ngControl.control.value);
                    this.ngControl.control.markAsTouched();
                    this.cardDate = this.ngControl.control.value;
                }
            };
        /**
         * @return {?}
         */
        CcDateComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.fm.stopMonitoring(this.elRef.nativeElement);
                this.stateChanges.complete();
            };
        CcDateComponent.nextId = 0;
        CcDateComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ngx-cc-date',
                        template: "\n    <div class=\"ngx-cc-date-container\" [ngClass]=\"styleClass\">\n      <input\n      ngxNumberOnly\n      ngxFormatDate\n      maxlength=\"7\"\n      [ngClass]=\"{'ngx-cc-date-input': !defaultStyles}\"\n      type=\"text\"\n      [placeholder]=\"placeholder || ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      [value]=\"cardDate\"\n      (blur)=\"updateOnTouch()\"\n      (input)=\"updateDate()\"\n      >\n    </div>\n  ",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: i0.forwardRef(( /**
                                 * @return {?}
                                 */function () { return CcDateComponent; })),
                                multi: true
                            },
                            {
                                provide: forms.NG_VALIDATORS,
                                useValue: ɵ0$1,
                                multi: true
                            },
                            {
                                provide: formField.MatFormFieldControl,
                                useExisting: i0.forwardRef(( /**
                                 * @return {?}
                                 */function () { return CcDateComponent; })),
                                multi: true
                            }
                        ],
                        encapsulation: i0.ViewEncapsulation.None,
                        styles: ["\n    .ngx-cc-date-input {\n      border: none;\n      background: none;\n      padding: 0;\n      outline: none;\n      font: inherit;\n      text-align: left;\n    }\n  "]
                    }] }
        ];
        /** @nocollapse */
        CcDateComponent.ctorParameters = function () {
            return [
                { type: i0.Injector },
                { type: i0.ElementRef },
                { type: a11y.FocusMonitor }
            ];
        };
        CcDateComponent.propDecorators = {
            styleClass: [{ type: i0.Input }],
            value: [{ type: i0.Input }],
            placeholder: [{ type: i0.Input }],
            empty: [{ type: i0.Input }],
            required: [{ type: i0.Input }],
            disabled: [{ type: i0.Input }],
            defaultStyles: [{ type: i0.Input }],
            id: [{ type: i0.HostBinding }],
            describedBy: [{ type: i0.HostBinding, args: ['attr.aria-describedby',] }],
            shouldLabelFloat: [{ type: i0.HostBinding, args: ['class.floating',] }]
        };
        return CcDateComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NumberOnlyDirective = /** @class */ (function () {
        function NumberOnlyDirective(elRef) {
            this.elRef = elRef;
        }
        Object.defineProperty(NumberOnlyDirective.prototype, "ngxNumberOnly", {
            get: /**
             * @return {?}
             */ function () {
                return this._ngxNumberOnly;
            },
            set: /**
             * @param {?} flag
             * @return {?}
             */ function (flag) {
                this._ngxNumberOnly = coercion.coerceBooleanProperty(flag);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} event
         * @return {?}
         */
        NumberOnlyDirective.prototype.onKeyDown = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
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
                        /** @type {?} */
                        var value = (( /** @type {?} */(event.target))).value.replace(/\s/g, '').length;
                        return (value < this.ngxMaxLength);
                    }
                }
            };
        NumberOnlyDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[ngxNumberOnly]'
                    },] }
        ];
        /** @nocollapse */
        NumberOnlyDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        NumberOnlyDirective.propDecorators = {
            ngxNumberOnly: [{ type: i0.Input }],
            ngxMaxLength: [{ type: i0.Input }],
            onKeyDown: [{ type: i0.HostListener, args: ['keydown', ['$event'],] }]
        };
        return NumberOnlyDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormatDateDirective = /** @class */ (function () {
        function FormatDateDirective(control) {
            this.control = control;
            /**
             * isUpdated - check if input is udpated or not
             */
            this.isUpdated = false;
        }
        /**
         * @param {?} event
         * @return {?}
         */
        FormatDateDirective.prototype.formatDate = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var eventValue = (( /** @type {?} */(event.target))).value;
                /** @type {?} */
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
        FormatDateDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[ngxFormatDate]'
                    },] }
        ];
        /** @nocollapse */
        FormatDateDirective.ctorParameters = function () {
            return [
                { type: forms.NgControl }
            ];
        };
        FormatDateDirective.propDecorators = {
            formatDate: [{ type: i0.HostListener, args: ['input', ['$event'],] }]
        };
        return FormatDateDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var CardCvvValidator = ( /**
     * @param {?} control
     * @return {?}
     */function (control) {
        /** @type {?} */
        var cvv = validator.cvv(control.value);
        return (cvv.isValid) ? null : { invalidCvv: true };
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0$2 = CardCvvValidator;
    var CcCvvComponent = /** @class */ (function () {
        function CcCvvComponent(injector, elRef, fm) {
            var _this = this;
            this.injector = injector;
            this.elRef = elRef;
            this.fm = fm;
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
            this.id = "ngx-cc" + CcCvvComponent.nextId;
            this.describedBy = '';
            fm.monitor(elRef.nativeElement, true).subscribe(( /**
             * @param {?} origin
             * @return {?}
             */function (origin) {
                _this.focused = !!origin;
                _this.stateChanges.next();
            }));
        }
        Object.defineProperty(CcCvvComponent.prototype, "value", {
            get: /**
             * @return {?}
             */ function () {
                return this._value;
            },
            set: /**
             * @param {?} cardNumber
             * @return {?}
             */ function (cardNumber) {
                this._value = cardNumber;
                this.onChanges(cardNumber);
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CcCvvComponent.prototype, "placeholder", {
            get: /**
             * @return {?}
             */ function () {
                return this._placeholder;
            },
            set: /**
             * @param {?} placeholder
             * @return {?}
             */ function (placeholder) {
                this._placeholder = placeholder;
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CcCvvComponent.prototype, "empty", {
            get: /**
             * @return {?}
             */ function () {
                return !(!!this.cardCvv);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CcCvvComponent.prototype, "required", {
            get: /**
             * @return {?}
             */ function () {
                return this._required;
            },
            set: /**
             * @param {?} req
             * @return {?}
             */ function (req) {
                this._required = coercion.coerceBooleanProperty(req);
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CcCvvComponent.prototype, "disabled", {
            get: /**
             * @return {?}
             */ function () {
                if (this.ngControl && this.ngControl.disabled !== null) {
                    return this.ngControl.disabled;
                }
                return this._disabled;
            },
            set: /**
             * @param {?} dis
             * @return {?}
             */ function (dis) {
                this._disabled = coercion.coerceBooleanProperty(dis);
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CcCvvComponent.prototype, "defaultStyles", {
            get: /**
             * @return {?}
             */ function () {
                return this._defaultStyles;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._defaultStyles = coercion.coerceBooleanProperty(val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CcCvvComponent.prototype, "shouldLabelFloat", {
            get: /**
             * @return {?}
             */ function () {
                return this.focused || !this.empty;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        CcCvvComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.ngControl = this.injector.get(forms.NgControl);
                if (this.ngControl !== null) {
                    // Setting the value accessor directly (instead of using
                    // the providers) to avoid running into a circular import.
                    this.ngControl.valueAccessor = this;
                }
            };
        /**
         * @return {?}
         */
        CcCvvComponent.prototype.ngDoCheck = /**
         * @return {?}
         */
            function () {
                if (this.ngControl) {
                    this.errorState = this.ngControl.invalid && this.ngControl.touched;
                    this.stateChanges.next();
                }
            };
        /**
         * @param {?} val
         * @return {?}
         */
        CcCvvComponent.prototype.writeValue = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                this.cardCvv = val || '';
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        CcCvvComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onChanges = fn;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        CcCvvComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onTouched = fn;
            };
        /**
         * @param {?} ids
         * @return {?}
         */
        CcCvvComponent.prototype.setDescribedByIds = /**
         * @param {?} ids
         * @return {?}
         */
            function (ids) {
                this.describedBy = ids.join(' ');
            };
        /**
         * @param {?} event
         * @return {?}
         */
        CcCvvComponent.prototype.onContainerClick = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if ((( /** @type {?} */(event.target))).tagName.toLowerCase() !== 'input') {
                    this.elRef.nativeElement.querySelector('input').focus();
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        CcCvvComponent.prototype.updateCvv = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var value = (( /** @type {?} */(event.target))).value;
                this.cardCvv = value;
                this.onChanges(value);
                this.ngControl.control.markAsDirty();
            };
        /**
         * @return {?}
         */
        CcCvvComponent.prototype.updateOnTouch = /**
         * @return {?}
         */
            function () {
                if (this.ngControl) {
                    this.onTouched(this.ngControl.control.value);
                    this.ngControl.control.markAsTouched();
                }
            };
        /**
         * @return {?}
         */
        CcCvvComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.fm.stopMonitoring(this.elRef.nativeElement);
                this.stateChanges.complete();
            };
        CcCvvComponent.nextId = 0;
        CcCvvComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ngx-cc-cvv',
                        template: "\n    <div class=\"ngx-cc-cvv-container\" [ngClass]=\"styleClass\">\n      <input\n        ngxNumberOnly\n        [ngxMaxLength]=\"maxCvvLength\"\n        [ngClass]=\"{'ngx-cc-cvv-input': !defaultStyles}\"\n        type=\"text\"\n        [placeholder]=\"placeholder || ''\"\n        [required]=\"required\"\n        [disabled]=\"disabled\"\n        [value]=\"cardCvv\"\n        (blur)=\"updateOnTouch()\"\n        (input)=\"updateCvv($event)\">\n    </div>\n  ",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: i0.forwardRef(( /**
                                 * @return {?}
                                 */function () { return CcCvvComponent; })),
                                multi: true
                            },
                            {
                                provide: forms.NG_VALIDATORS,
                                useValue: ɵ0$2,
                                multi: true
                            },
                            {
                                provide: formField.MatFormFieldControl,
                                useExisting: i0.forwardRef(( /**
                                 * @return {?}
                                 */function () { return CcCvvComponent; })),
                                multi: true
                            }
                        ],
                        styles: ["\n    .ngx-cc-cvv-input {\n      border: none;\n      background: none;\n      padding: 0;\n      outline: none;\n      font: inherit;\n      text-align: left;\n    }\n  "]
                    }] }
        ];
        /** @nocollapse */
        CcCvvComponent.ctorParameters = function () {
            return [
                { type: i0.Injector },
                { type: i0.ElementRef },
                { type: a11y.FocusMonitor }
            ];
        };
        CcCvvComponent.propDecorators = {
            styleClass: [{ type: i0.Input }],
            value: [{ type: i0.Input }],
            placeholder: [{ type: i0.Input }],
            empty: [{ type: i0.Input }],
            required: [{ type: i0.Input }],
            disabled: [{ type: i0.Input }],
            defaultStyles: [{ type: i0.Input }],
            id: [{ type: i0.HostBinding }],
            describedBy: [{ type: i0.HostBinding, args: ['attr.aria-describedby',] }],
            shouldLabelFloat: [{ type: i0.HostBinding, args: ['class.floating',] }]
        };
        return CcCvvComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxCcModule = /** @class */ (function () {
        function NgxCcModule() {
        }
        NgxCcModule.decorators = [
            { type: i0.NgModule, args: [{
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
                        ]
                    },] }
        ];
        return NgxCcModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NgxCcService = NgxCcService;
    exports.NgxCcComponent = NgxCcComponent;
    exports.CcDateComponent = CcDateComponent;
    exports.NgxCcModule = NgxCcModule;
    exports.ɵe = CcCvvComponent;
    exports.ɵd = FormatDateDirective;
    exports.ɵc = NumberOnlyDirective;
    exports.ɵf = CardCvvValidator;
    exports.ɵb = CardExpirationValidator;
    exports.ɵa = CardValidator;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-cc.umd.js.map