/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, HostBinding, Input, Injector, forwardRef, ViewEncapsulation, ElementRef, Optional } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, NgControl, NgForm, FormGroupDirective } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { NgxCcService } from './ngx-cc.service';
import { CardValidator } from './validators/ngx-cc.validator';
import { cardIcons } from './ngx-cc.icons';
var ɵ0 = CardValidator;
var NgxCcComponent = /** @class */ (function () {
    function NgxCcComponent(injector, elRef, fm, parentForm, parentFormGroup, defaultErrorStateMatcher, creditCardService) {
        var _this = this;
        this.injector = injector;
        this.elRef = elRef;
        this.fm = fm;
        this.parentForm = parentForm;
        this.parentFormGroup = parentFormGroup;
        this.defaultErrorStateMatcher = defaultErrorStateMatcher;
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
        this.stateChanges = new Subject();
        this.id = "ngx-cc" + NgxCcComponent.nextId;
        this.describedBy = '';
        /** @type {?} */
        var parent = this.parentFormGroup || this.parentForm;
        if (parent) {
            parentFormGroup.ngSubmit.subscribe((/**
             * @return {?}
             */
            function () {
                _this.ngControl.control.markAsTouched();
            }));
        }
        fm.monitor(elRef.nativeElement, true).subscribe((/**
         * @param {?} origin
         * @return {?}
         */
        function (origin) {
            _this.focused = !!origin;
            _this.stateChanges.next();
        }));
    }
    Object.defineProperty(NgxCcComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} cardNumber
         * @return {?}
         */
        function (cardNumber) {
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
         */
        function () {
            return this._placeholder;
        },
        set: /**
         * @param {?} placeholder
         * @return {?}
         */
        function (placeholder) {
            this._placeholder = placeholder;
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxCcComponent.prototype, "empty", {
        get: /**
         * @return {?}
         */
        function () {
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
         */
        function () {
            return this._required;
        },
        set: /**
         * @param {?} req
         * @return {?}
         */
        function (req) {
            this._required = coerceBooleanProperty(req);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxCcComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.ngControl && this.ngControl.disabled !== null) {
                return this.ngControl.disabled;
            }
            return this._disabled;
        },
        set: /**
         * @param {?} dis
         * @return {?}
         */
        function (dis) {
            this._disabled = coerceBooleanProperty(dis);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxCcComponent.prototype, "defaultStyles", {
        get: /**
         * @return {?}
         */
        function () {
            return this._defaultStyles;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._defaultStyles = coerceBooleanProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxCcComponent.prototype, "shouldLabelFloat", {
        get: /**
         * @return {?}
         */
        function () {
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
        this.ngControl = this.injector.get(NgControl);
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
            this.updateErrorState();
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
        if (((/** @type {?} */ (event.target))).tagName.toLowerCase() !== 'input') {
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
        var value = ((/** @type {?} */ (event.target))).value.replace(/\s/g, '');
        /** @type {?} */
        var cardType = 'default';
        this.onChange(value);
        this.ngControl.control.markAsDirty();
        this.card = this.creditCardService.getCardType(value);
        if (this.card) {
            this.maxNumberLimit = Math.max.apply(Math, tslib_1.__spread(this.card.lengths));
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
    /**
     * @return {?}
     */
    NgxCcComponent.prototype.updateErrorState = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var oldState = this.errorState;
        /** @type {?} */
        var parent = this.parentFormGroup || this.parentForm;
        /** @type {?} */
        var matcher = this.defaultErrorStateMatcher;
        /** @type {?} */
        var control = this.ngControl ? (/** @type {?} */ (this.ngControl.control)) : null;
        /** @type {?} */
        var newState = matcher.isErrorState(control, parent);
        if (newState !== oldState) {
            this.errorState = newState;
            this.stateChanges.next();
        }
    };
    NgxCcComponent.nextId = 0;
    NgxCcComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-cc',
                    template: "\n      <div class=\"ngx-cc-container\" [ngClass]=\"styleClass\">\n        <input *ngIf=\"!defaultStyles\"\n        ngxNumberOnly\n        [ngxMaxLength]=\"maxNumberLimit\"\n        class=\"ngx-cc-input\"\n        type=\"text\"\n        [required]=\"required\"\n        [disabled]=\"disabled\"\n        [value]=\"cardNumber\"\n        (blur)=\"updateOnTouch()\"\n        (input)=\"updateIcon($event)\" />\n\n        <input *ngIf=\"defaultStyles\"\n        ngxNumberOnly\n        [ngxMaxLength]=\"maxNumberLimit\"\n        class=\"ngx-cc-input-default\"\n        type=\"text\"\n        [placeholder]=\"placeholder\"\n        [required]=\"required\"\n        [disabled]=\"disabled\"\n        [value]=\"cardNumber\"\n        [ngStyle]=\"{'background-image': 'url(' + cardIcon + ')'}\"\n        (blur)=\"updateOnTouch()\"\n        (input)=\"updateIcon($event)\" />\n        <img *ngIf=\"!defaultStyles\" class=\"ngx-cc-suffix\" [src]=\"cardIcon\" />\n      </div>\n      ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NgxCcComponent; })),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useValue: ɵ0,
                            multi: true
                        },
                        {
                            provide: MatFormFieldControl,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NgxCcComponent; })),
                            multi: true
                        }
                    ],
                    encapsulation: ViewEncapsulation.None,
                    styles: ["\n    .ngx-cc-container {\n      display: flex;\n      position: relative;\n    }\n    .ngx-cc-input {\n      border: none;\n      background: none;\n      padding: 0;\n      outline: none;\n      font: inherit;\n      text-align: left;\n    }\n    .ngx-cc-input-default {\n      background-position: 100%;\n      background-repeat: no-repeat;\n    }\n    .ngx-cc-form-field div.mat-form-field-wrapper div.mat-form-field-flex {\n      align-items: flex-end;\n    }\n    .ngx-cc-suffix {\n      position: absolute;\n      top: -1.5rem;\n      right: 0;\n    }\n    "]
                }] }
    ];
    /** @nocollapse */
    NgxCcComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: ElementRef },
        { type: FocusMonitor },
        { type: NgForm, decorators: [{ type: Optional }] },
        { type: FormGroupDirective, decorators: [{ type: Optional }] },
        { type: ErrorStateMatcher },
        { type: NgxCcService }
    ]; };
    NgxCcComponent.propDecorators = {
        styleClass: [{ type: Input }],
        value: [{ type: Input }],
        placeholder: [{ type: Input }],
        empty: [{ type: Input }],
        required: [{ type: Input }],
        disabled: [{ type: Input }],
        defaultStyles: [{ type: Input }],
        id: [{ type: HostBinding }],
        describedBy: [{ type: HostBinding, args: ['attr.aria-describedby',] }],
        shouldLabelFloat: [{ type: HostBinding, args: ['class.floating',] }]
    };
    return NgxCcComponent;
}());
export { NgxCcComponent };
if (false) {
    /** @type {?} */
    NgxCcComponent.nextId;
    /** @type {?} */
    NgxCcComponent.prototype.styleClass;
    /**
     * @type {?}
     * @private
     */
    NgxCcComponent.prototype._value;
    /**
     * @type {?}
     * @private
     */
    NgxCcComponent.prototype._placeholder;
    /**
     * @type {?}
     * @private
     */
    NgxCcComponent.prototype._disabled;
    /**
     * @type {?}
     * @private
     */
    NgxCcComponent.prototype._defaultStyles;
    /**
     * @type {?}
     * @private
     */
    NgxCcComponent.prototype._required;
    /** @type {?} */
    NgxCcComponent.prototype.ngControl;
    /** @type {?} */
    NgxCcComponent.prototype.focused;
    /** @type {?} */
    NgxCcComponent.prototype.errorState;
    /** @type {?} */
    NgxCcComponent.prototype.cardNumber;
    /** @type {?} */
    NgxCcComponent.prototype.cardIcon;
    /** @type {?} */
    NgxCcComponent.prototype.card;
    /** @type {?} */
    NgxCcComponent.prototype.onChange;
    /** @type {?} */
    NgxCcComponent.prototype.onTouched;
    /** @type {?} */
    NgxCcComponent.prototype.stateChanges;
    /** @type {?} */
    NgxCcComponent.prototype.maxNumberLimit;
    /** @type {?} */
    NgxCcComponent.prototype.id;
    /** @type {?} */
    NgxCcComponent.prototype.describedBy;
    /**
     * @type {?}
     * @private
     */
    NgxCcComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    NgxCcComponent.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    NgxCcComponent.prototype.fm;
    /**
     * @type {?}
     * @private
     */
    NgxCcComponent.prototype.parentForm;
    /**
     * @type {?}
     * @private
     */
    NgxCcComponent.prototype.parentFormGroup;
    /**
     * @type {?}
     * @private
     */
    NgxCcComponent.prototype.defaultErrorStateMatcher;
    /**
     * @type {?}
     * @private
     */
    NgxCcComponent.prototype.creditCardService;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNjLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jYy8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtY2MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFDWCxVQUFVLEVBQ3RDLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQ3hDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUFlLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUksT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFaEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztTQXdDM0IsYUFBYTtBQXRDN0I7SUFpS0Usd0JBQ1UsUUFBa0IsRUFDbEIsS0FBOEIsRUFDOUIsRUFBZ0IsRUFDSixVQUFrQixFQUNsQixlQUFtQyxFQUMvQyx3QkFBMkMsRUFDM0MsaUJBQStCO1FBUHpDLGlCQW9CQztRQW5CUyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFVBQUssR0FBTCxLQUFLLENBQXlCO1FBQzlCLE9BQUUsR0FBRixFQUFFLENBQWM7UUFDSixlQUFVLEdB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bUNBQTRCOztJQUM1QixpQ0FBZ0I7O0lBQ2hCLG9DQUFtQjs7SUFDbkIsb0NBQWdCOztJQUNoQixrQ0FBNkI7O0lBQzdCLDhCQUFpQjs7SUFDakIsa0NBQWM7O0lBQ2QsbUNBQWU7O0lBQ2Ysc0NBQW1DOztJQUNuQyx3Q0FBdUI7O0lBQ3ZCLDRCQUFxRDs7SUFDckQscUNBQXVEOzs7OztJQU9yRCxrQ0FBMEI7Ozs7O0lBQzFCLCtCQUFzQzs7Ozs7SUFDdEMsNEJBQXdCOzs7OztJQUN4QixvQ0FBc0M7Ozs7O0lBQ3RDLHlDQUF1RDs7Ozs7SUFDdkQsa0RBQW1EOzs7OztJQUNuRCwyQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCwgSW5qZWN0b3IsXG4gIE9uSW5pdCwgT25EZXN0cm95LCBEb0NoZWNrLCBmb3J3YXJkUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvbiwgRWxlbWVudFJlZiwgT3B0aW9uYWxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SLCBOR19WQUxJREFUT1JTLCBOZ0NvbnRyb2wsIE5nRm9ybSwgRm9ybUdyb3VwRGlyZWN0aXZlLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEVycm9yU3RhdGVNYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE5neENjU2VydmljZSB9IGZyb20gJy4vbmd4LWNjLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FyZENvbmZpZyB9IGZyb20gJy4vbmd4LWNjLm1vZGVsJztcbmltcG9ydCB7IENhcmRWYWxpZGF0b3IgfSBmcm9tICcuL3ZhbGlkYXRvcnMvbmd4LWNjLnZhbGlkYXRvcic7XG5pbXBvcnQgeyBjYXJkSWNvbnMgfSBmcm9tICcuL25neC1jYy5pY29ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1jYycsXG4gIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IGNsYXNzPVwibmd4LWNjLWNvbnRhaW5lclwiIFtuZ0NsYXNzXT1cInN0eWxlQ2xhc3NcIj5cbiAgICAgICAgPGlucHV0ICpuZ0lmPVwiIWRlZmF1bHRTdHlsZXNcIlxuICAgICAgICBuZ3hOdW1iZXJPbmx5XG4gICAgICAgIFtuZ3hNYXhMZW5ndGhdPVwibWF4TnVtYmVyTGltaXRcIlxuICAgICAgICBjbGFzcz1cIm5neC1jYy1pbnB1dFwiXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgW3ZhbHVlXT1cImNhcmROdW1iZXJcIlxuICAgICAgICAoYmx1cik9XCJ1cGRhdGVPblRvdWNoKClcIlxuICAgICAgICAoaW5wdXQpPVwidXBkYXRlSWNvbigkZXZlbnQpXCIgLz5cblxuICAgICAgICA8aW5wdXQgKm5nSWY9XCJkZWZhdWx0U3R5bGVzXCJcbiAgICAgICAgbmd4TnVtYmVyT25seVxuICAgICAgICBbbmd4TWF4TGVuZ3RoXT1cIm1heE51bWJlckxpbWl0XCJcbiAgICAgICAgY2xhc3M9XCJuZ3gtY2MtaW5wdXQtZGVmYXVsdFwiXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgW3ZhbHVlXT1cImNhcmROdW1iZXJcIlxuICAgICAgICBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcgKyBjYXJkSWNvbiArICcpJ31cIlxuICAgICAgICAoYmx1cik9XCJ1cGRhdGVPblRvdWNoKClcIlxuICAgICAgICAoaW5wdXQpPVwidXBkYXRlSWNvbigkZXZlbnQpXCIgLz5cbiAgICAgICAgPGltZyAqbmdJZj1cIiFkZWZhdWx0U3R5bGVzXCIgY2xhc3M9XCJuZ3gtY2Mtc3VmZml4XCIgW3NyY109XCJjYXJkSWNvblwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIGAsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTmd4Q2NDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICB1c2VWYWx1ZTogQ2FyZFZhbGlkYXRvcixcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBNYXRGb3JtRmllbGRDb250cm9sLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTmd4Q2NDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF0sXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAubmd4LWNjLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgICAubmd4LWNjLWlucHV0IHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgICAubmd4LWNjLWlucHV0LWRlZmF1bHQge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgfVxuICAgIC5uZ3gtY2MtZm9ybS1maWVsZCBkaXYubWF0LWZvcm0tZmllbGQtd3JhcHBlciBkaXYubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgfVxuICAgIC5uZ3gtY2Mtc3VmZml4IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogLTEuNXJlbTtcbiAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbiAgICBgXG4gIF0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTmd4Q2NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgRG9DaGVjaywgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE1hdEZvcm1GaWVsZENvbnRyb2w8Tmd4Q2NDb21wb25lbnQ+IHtcblxuICBzdGF0aWMgbmV4dElkID0gMDtcbiAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG4gIHNldCB2YWx1ZShjYXJkTnVtYmVyKSB7XG4gICAgdGhpcy5fdmFsdWUgPSBjYXJkTnVtYmVyO1xuICAgIHRoaXMub25DaGFuZ2UoY2FyZE51bWJlcik7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHBsYWNlaG9sZGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9wbGFjZWhvbGRlcjtcbiAgfVxuICBzZXQgcGxhY2Vob2xkZXIocGxhY2Vob2xkZXI6IHN0cmluZykge1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGVtcHR5KCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5jYXJkTnVtYmVyLnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgcmV0dXJuICEoISF2YWx1ZSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgcmVxdWlyZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVkO1xuICB9XG4gIHNldCByZXF1aXJlZChyZXE6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXF1aXJlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShyZXEpO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wgJiYgdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLm5nQ29udHJvbC5kaXNhYmxlZDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZChkaXM6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShkaXMpO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBkZWZhdWx0U3R5bGVzKCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0U3R5bGVzO1xuICB9XG4gIHNldCBkZWZhdWx0U3R5bGVzKHZhbDogYW55KSB7XG4gICAgdGhpcy5fZGVmYXVsdFN0eWxlcyA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWwpO1xuICB9XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxuICBwcml2YXRlIF92YWx1ZTogYW55O1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcbiAgcHJpdmF0ZSBfcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxuICBwcml2YXRlIF9kZWZhdWx0U3R5bGVzID0gZmFsc2U7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxuICBwcml2YXRlIF9yZXF1aXJlZCA9IGZhbHNlO1xuICBuZ0NvbnRyb2w6IE5nQ29udHJvbCA9IG51bGw7XG4gIGZvY3VzZWQgPSBmYWxzZTtcbiAgZXJyb3JTdGF0ZSA9IGZhbHNlO1xuICBjYXJkTnVtYmVyID0gJyc7XG4gIGNhcmRJY29uID0gY2FyZEljb25zLmRlZmF1bHQ7XG4gIGNhcmQ6IENhcmRDb25maWc7XG4gIG9uQ2hhbmdlOiBhbnk7XG4gIG9uVG91Y2hlZDogYW55O1xuICBzdGF0ZUNoYW5nZXMgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBtYXhOdW1iZXJMaW1pdDogbnVtYmVyO1xuICBASG9zdEJpbmRpbmcoKSBpZCA9IGBuZ3gtY2Mke05neENjQ29tcG9uZW50Lm5leHRJZH1gO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1kZXNjcmliZWRieScpIGRlc2NyaWJlZEJ5ID0gJyc7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuZmxvYXRpbmcnKVxuICBnZXQgc2hvdWxkTGFiZWxGbG9hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5mb2N1c2VkIHx8ICF0aGlzLmVtcHR5O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBmbTogRm9jdXNNb25pdG9yLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgcGFyZW50Rm9ybTogTmdGb3JtLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgcGFyZW50Rm9ybUdyb3VwOiBGb3JtR3JvdXBEaXJlY3RpdmUsXG4gICAgcHJpdmF0ZSBkZWZhdWx0RXJyb3JTdGF0ZU1hdGNoZXI6IEVycm9yU3RhdGVNYXRjaGVyLFxuICAgIHByaXZhdGUgY3JlZGl0Q2FyZFNlcnZpY2U6IE5neENjU2VydmljZVxuICApIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudEZvcm1Hcm91cCB8fCB0aGlzLnBhcmVudEZvcm07XG4gICAgaWYgKHBhcmVudCl7XG4gICAgICBwYXJlbnRGb3JtR3JvdXAubmdTdWJtaXQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmbS5tb25pdG9yKGVsUmVmLm5hdGl2ZUVsZW1lbnQsIHRydWUpLnN1YnNjcmliZShvcmlnaW4gPT4ge1xuICAgICAgdGhpcy5mb2N1c2VkID0gISFvcmlnaW47XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm5nQ29udHJvbCA9IHRoaXMuaW5qZWN0b3IuZ2V0KE5nQ29udHJvbCk7XG4gICAgaWYgKHRoaXMubmdDb250cm9sICE9PSBudWxsKSB7XG4gICAgICAvLyBTZXR0aW5nIHRoZSB2YWx1ZSBhY2Nlc3NvciBkaXJlY3RseSAoaW5zdGVhZCBvZiB1c2luZ1xuICAgICAgLy8gdGhlIHByb3ZpZGVycykgdG8gYXZvaWQgcnVubmluZyBpbnRvIGEgY2lyY3VsYXIgaW1wb3J0LlxuICAgICAgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xuICAgICAgdGhpcy51cGRhdGVFcnJvclN0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jYXJkTnVtYmVyID0gdmFsdWUgfHwgJyc7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERlc2NyaWJlZEJ5SWRzKGlkczogc3RyaW5nW10pIHtcbiAgICB0aGlzLmRlc2NyaWJlZEJ5ID0gaWRzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIG9uQ29udGFpbmVyQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAoKGV2ZW50LnRhcmdldCBhcyBFbGVtZW50KS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdpbnB1dCcpIHtcbiAgICAgIHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlSWNvbihldmVudDogRXZlbnQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICBsZXQgY2FyZFR5cGUgPSAnZGVmYXVsdCc7XG4gICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgIHRoaXMuY2FyZCA9IHRoaXMuY3JlZGl0Q2FyZFNlcnZpY2UuZ2V0Q2FyZFR5cGUodmFsdWUpO1xuICAgIGlmICh0aGlzLmNhcmQpIHtcbiAgICAgIHRoaXMubWF4TnVtYmVyTGltaXQgPSBNYXRoLm1heCguLi50aGlzLmNhcmQubGVuZ3Rocyk7XG4gICAgICBjYXJkVHlwZSA9IHRoaXMuY2FyZC50eXBlO1xuICAgIH1cbiAgICB0aGlzLmNhcmROdW1iZXIgPSB0aGlzLmNyZWRpdENhcmRTZXJ2aWNlLnByZXR0eUNhcmROdW1iZXIodmFsdWUsIGNhcmRUeXBlKTtcbiAgICB0aGlzLmNhcmRJY29uID0gIXZhbHVlID8gY2FyZEljb25zLmRlZmF1bHQgOiBjYXJkSWNvbnNbY2FyZFR5cGVdO1xuICB9XG5cbiAgdXBkYXRlT25Ub3VjaCgpIHtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wpIHtcbiAgICAgIHRoaXMub25Ub3VjaGVkKHRoaXMubmdDb250cm9sLmNvbnRyb2wudmFsdWUpO1xuICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5mbS5zdG9wTW9uaXRvcmluZyh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLmNvbXBsZXRlKCk7XG4gIH1cblxuICB1cGRhdGVFcnJvclN0YXRlKCkge1xuICAgIGNvbnN0IG9sZFN0YXRlID0gdGhpcy5lcnJvclN0YXRlO1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50Rm9ybUdyb3VwIHx8IHRoaXMucGFyZW50Rm9ybTtcbiAgICBjb25zdCBtYXRjaGVyID0gdGhpcy5kZWZhdWx0RXJyb3JTdGF0ZU1hdGNoZXI7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMubmdDb250cm9sID8gdGhpcy5uZ0NvbnRyb2wuY29udHJvbCBhcyBGb3JtQ29udHJvbCA6IG51bGw7XG4gICAgY29uc3QgbmV3U3RhdGUgPSBtYXRjaGVyLmlzRXJyb3JTdGF0ZShjb250cm9sLCBwYXJlbnQpO1xuXG4gICAgaWYgKG5ld1N0YXRlICE9PSBvbGRTdGF0ZSkge1xuICAgICAgdGhpcy5lcnJvclN0YXRlID0gbmV3U3RhdGU7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfVxuICB9XG59XG4iXX0=