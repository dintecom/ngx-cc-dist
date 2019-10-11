/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, Input, Injector, Optional, forwardRef, ViewEncapsulation, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, NgControl, NgForm, FormGroupDirective } from '@angular/forms';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { CardExpirationValidator } from '../validators/ngx-cc-date.validator';
var ɵ0 = CardExpirationValidator;
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
        this.stateChanges = new Subject();
        this.cardDate = '';
        this.id = "ngx-cc" + CcDateComponent.nextId;
        this.describedBy = '';
        /** @type {?} */
        var parent = this.parentFormGroup || this.parentForm;
        if (parent) {
            this._formSubmitSubscription = parentFormGroup.ngSubmit.subscribe((/**
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
    Object.defineProperty(CcDateComponent.prototype, "value", {
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
            this.onChanges(cardNumber);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CcDateComponent.prototype, "placeholder", {
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
    Object.defineProperty(CcDateComponent.prototype, "empty", {
        get: /**
         * @return {?}
         */
        function () {
            return !(!!this.cardDate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CcDateComponent.prototype, "required", {
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
    Object.defineProperty(CcDateComponent.prototype, "disabled", {
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
    Object.defineProperty(CcDateComponent.prototype, "defaultStyles", {
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
    Object.defineProperty(CcDateComponent.prototype, "shouldLabelFloat", {
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
    CcDateComponent.prototype.ngOnInit = /**
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
    CcDateComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this.ngControl) {
            this.updateErrorState();
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
        if (((/** @type {?} */ (event.target))).tagName.toLowerCase() !== 'input') {
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
        if (this._formSubmitSubscription)
            this._formSubmitSubscription.unsubscribe();
        this.fm.stopMonitoring(this.elRef.nativeElement);
        this.stateChanges.complete();
    };
    /**
     * @return {?}
     */
    CcDateComponent.prototype.updateErrorState = /**
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
    CcDateComponent.nextId = 0;
    CcDateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-cc-date',
                    template: "\n    <div class=\"ngx-cc-date-container\" [ngClass]=\"styleClass\">\n      <input\n      ngxNumberOnly\n      ngxFormatDate\n      maxlength=\"7\"\n      [ngClass]=\"{'ngx-cc-date-input': !defaultStyles}\"\n      type=\"text\"\n      [placeholder]=\"placeholder || ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      [value]=\"cardDate\"\n      (blur)=\"updateOnTouch()\"\n      (input)=\"updateDate()\"\n      >\n    </div>\n  ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return CcDateComponent; })),
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
                            function () { return CcDateComponent; })),
                            multi: true
                        }
                    ],
                    encapsulation: ViewEncapsulation.None,
                    styles: ["\n    .ngx-cc-date-input {\n      border: none;\n      background: none;\n      padding: 0;\n      outline: none;\n      font: inherit;\n      text-align: left;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    CcDateComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: ElementRef },
        { type: FocusMonitor },
        { type: NgForm, decorators: [{ type: Optional }] },
        { type: FormGroupDirective, decorators: [{ type: Optional }] },
        { type: ErrorStateMatcher }
    ]; };
    CcDateComponent.propDecorators = {
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
    return CcDateComponent;
}());
export { CcDateComponent };
if (false) {
    /** @type {?} */
    CcDateComponent.nextId;
    /** @type {?} */
    CcDateComponent.prototype.styleClass;
    /**
     * @type {?}
     * @private
     */
    CcDateComponent.prototype._value;
    /**
     * @type {?}
     * @private
     */
    CcDateComponent.prototype._placeholder;
    /**
     * @type {?}
     * @private
     */
    CcDateComponent.prototype._disabled;
    /**
     * @type {?}
     * @private
     */
    CcDateComponent.prototype._defaultStyles;
    /**
     * @type {?}
     * @private
     */
    CcDateComponent.prototype._required;
    /**
     * @type {?}
     * @private
     */
    CcDateComponent.prototype._formSubmitSubscription;
    /** @type {?} */
    CcDateComponent.prototype.ngControl;
    /** @type {?} */
    CcDateComponent.prototype.focused;
    /** @type {?} */
    CcDateComponent.prototype.errorState;
    /** @type {?} */
    CcDateComponent.prototype.stateChanges;
    /** @type {?} */
    CcDateComponent.prototype.cardDate;
    /** @type {?} */
    CcDateComponent.prototype.onChanges;
    /** @type {?} */
    CcDateComponent.prototype.onTouched;
    /** @type {?} */
    CcDateComponent.prototype.id;
    /** @type {?} */
    CcDateComponent.prototype.describedBy;
    /**
     * @type {?}
     * @private
     */
    CcDateComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    CcDateComponent.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    CcDateComponent.prototype.fm;
    /**
     * @type {?}
     * @private
     */
    CcDateComponent.prototype.parentForm;
    /**
     * @type {?}
     * @private
     */
    CcDateComponent.prototype.parentFormGroup;
    /**
     * @type {?}
     * @private
     */
    CcDateComponent.prototype.defaultErrorStateMatcher;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2MtZGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2MvIiwic291cmNlcyI6WyJsaWIvY2MtZGF0ZS9jYy1kYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQ3JCLFVBQVUsRUFDdEMsaUJBQWlCLEVBQUUsVUFBVSxFQUM5QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUFlLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUksT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBRTdDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO1NBdUM5RCx1QkFBdUI7QUFyQ3ZDO0lBbUlFLHlCQUNVLFFBQWtCLEVBQ2xCLEtBQThCLEVBQzlCLEVBQWdCLEVBQ0osVUFBa0IsRUFDbEIsZUFBbUMsRUFDL0Msd0JBQTJDO1FBTnJELGlCQW1CQztRQWxCUyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFVBQUssR0FBTCxLQUFLLENBQXlCO1FBQzlCLE9BQUUsR0FBRixFQUFFLENBQWM7UUFDSixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ2xCLG9CQUFlLEdBQWYsZUFBZSxDQUFvQjtRQUMvQyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQW1COztRQTVCN0MsY0FBUyxHQUFHLEtBQUssQ0FBQzs7UUFFbEIsbUJBQWMsR0FBRyxLQUFLLENBQUM7O1FBRXZCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFHMUIsY0FBUyxHQUFjLElBQUksQ0FBQztRQUM1QixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQ25DLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFJQyxPQUFFLEdBQUcsV0FBUyxlQUFlLENBQUMsTUFBUSxDQUFDO1FBQ2hCLGdCQUFXLEdBQUcsRUFBRSxDQUFDOztZQWMvQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsVUFBVTtRQUN0RCxJQUFJLE1BQU0sRUFBQztZQUNULElBQUksQ0FBQyx1QkFBdUIsR0FBRyxlQUFlLENBQUMsUUFBUSxDQUFDLFNBQVM7OztZQUFDO2dCQUNoRSxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN6QyxDQUFDLEVBQUMsQ0FBQztTQUNKO1FBRUQsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLE1BQU07WUFDcEQsS0FBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBbEdELHNCQUNJLGtDQUFLOzs7O1FBRFQ7WUFFRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7Ozs7UUFDRCxVQUFVLFVBQVU7WUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7WUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNCLENBQUM7OztPQUxBO0lBT0Qsc0JBQ0ksd0NBQVc7Ozs7UUFEZjtZQUVFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMzQixDQUFDOzs7OztRQUNELFVBQWdCLFdBQW1CO1lBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDM0IsQ0FBQzs7O09BSkE7SUFNRCxzQkFDSSxrQ0FBSzs7OztRQURUO1lBRUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUVELHNCQUNJLHFDQUFROzs7O1FBRFo7WUFFRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7Ozs7UUFDRCxVQUFhLEdBQVk7WUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNCLENBQUM7OztPQUpBO0lBTUQsc0JBQ0kscUNBQVE7Ozs7UUFEWjtZQUVFLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7Z0JBQ3RELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7YUFDaEM7WUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7Ozs7UUFDRCxVQUFhLEdBQVk7WUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNCLENBQUM7OztPQUpBO0lBTUQsc0JBQ0ksMENBQWE7Ozs7UUFEakI7WUFFRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDN0IsQ0FBQzs7Ozs7UUFDRCxVQUFrQixHQUFRO1lBQ3hCLElBQUksQ0FBQyxjQUFjLEdBQUcscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkQsQ0FBQzs7O09BSEE7SUEwQkQsc0JBQ0ksNkNBQWdCOzs7O1FBRHBCO1lBRUUsT0FBTyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNyQyxDQUFDOzs7T0FBQTs7OztJQXVCRCxrQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlDLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDM0Isd0RBQXdEO1lBQ3hELDBEQUEwRDtZQUMxRCxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDckM7SUFDSCxDQUFDOzs7O0lBRUQsbUNBQVM7OztJQUFUO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxvQ0FBVTs7OztJQUFWLFVBQVcsR0FBVztRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCwwQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBTztRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELDJDQUFpQjs7OztJQUFqQixVQUFrQixFQUFPO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsMkNBQWlCOzs7O0lBQWpCLFVBQWtCLEdBQWE7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsMENBQWdCOzs7O0lBQWhCLFVBQWlCLEtBQWlCO1FBQ2hDLElBQUksQ0FBQyxtQkFBQSxLQUFLLENBQUMsTUFBTSxFQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssT0FBTyxFQUFFO1lBQy9ELElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN6RDtJQUNILENBQUM7Ozs7SUFFRCxvQ0FBVTs7O0lBQVY7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztTQUM5QztJQUNILENBQUM7Ozs7SUFFRCx1Q0FBYTs7O0lBQWI7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztTQUM5QztJQUNILENBQUM7Ozs7SUFFRCxxQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyx1QkFBdUI7WUFBRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCwwQ0FBZ0I7OztJQUFoQjs7WUFDUSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVU7O1lBQzFCLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxVQUFVOztZQUNoRCxPQUFPLEdBQUcsSUFBSSxDQUFDLHdCQUF3Qjs7WUFDdkMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLG1CQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFlLENBQUMsQ0FBQyxDQUFDLElBQUk7O1lBQ3ZFLFFBQVEsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7UUFFdEQsSUFBSSxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBNUtNLHNCQUFNLEdBQUcsQ0FBQyxDQUFDOztnQkFsRG5CLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLHFjQWdCVDtvQkFXRCxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsZUFBZSxFQUFmLENBQWUsRUFBQzs0QkFDOUMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLGFBQWE7NEJBQ3RCLFFBQVEsSUFBeUI7NEJBQ2pDLEtBQUssRUFBRSxJQUFJO3lCQUNaO3dCQUNEOzRCQUNFLE9BQU8sRUFBRSxtQkFBbUI7NEJBQzVCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLGVBQWUsRUFBZixDQUFlLEVBQUM7NEJBQzlDLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO29CQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzZCQTNCNUIsNktBU1I7aUJBbUJGOzs7O2dCQTVEZ0MsUUFBUTtnQkFFcEIsVUFBVTtnQkFHdEIsWUFBWTtnQkFEdUQsTUFBTSx1QkFnSjdFLFFBQVE7Z0JBaEp1RSxrQkFBa0IsdUJBaUpqRyxRQUFRO2dCQTlJSixpQkFBaUI7Ozs2QkF5RHZCLEtBQUs7d0JBQ0wsS0FBSzs4QkFVTCxLQUFLO3dCQVNMLEtBQUs7MkJBS0wsS0FBSzsyQkFTTCxLQUFLO2dDQVlMLEtBQUs7cUJBMkJMLFdBQVc7OEJBQ1gsV0FBVyxTQUFDLHVCQUF1QjttQ0FDbkMsV0FBVyxTQUFDLGdCQUFnQjs7SUFpRy9CLHNCQUFDO0NBQUEsQUEvTkQsSUErTkM7U0EvS1ksZUFBZTs7O0lBRTFCLHVCQUFrQjs7SUFDbEIscUNBQTRCOzs7OztJQXNENUIsaUNBQW9COzs7OztJQUVwQix1Q0FBNkI7Ozs7O0lBRTdCLG9DQUEwQjs7Ozs7SUFFMUIseUNBQStCOzs7OztJQUUvQixvQ0FBMEI7Ozs7O0lBRTFCLGtEQUE4Qzs7SUFDOUMsb0NBQTRCOztJQUM1QixrQ0FBZ0I7O0lBQ2hCLHFDQUFtQjs7SUFDbkIsdUNBQW1DOztJQUNuQyxtQ0FBYzs7SUFDZCxvQ0FBZTs7SUFDZixvQ0FBZTs7SUFFZiw2QkFBc0Q7O0lBQ3RELHNDQUF1RDs7Ozs7SUFPckQsbUNBQTBCOzs7OztJQUMxQixnQ0FBc0M7Ozs7O0lBQ3RDLDZCQUF3Qjs7Ozs7SUFDeEIscUNBQXNDOzs7OztJQUN0QywwQ0FBdUQ7Ozs7O0lBQ3ZELG1EQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0LCBJbmplY3RvciwgT3B0aW9uYWwsXG4gIE9uSW5pdCwgT25EZXN0cm95LCBEb0NoZWNrLCBmb3J3YXJkUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvbiwgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiwgTkdfVkFMSURBVE9SUywgTmdDb250cm9sLCBOZ0Zvcm0sIEZvcm1Hcm91cERpcmVjdGl2ZSwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgRXJyb3JTdGF0ZU1hdGNoZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDYXJkRXhwaXJhdGlvblZhbGlkYXRvciB9IGZyb20gJy4uL3ZhbGlkYXRvcnMvbmd4LWNjLWRhdGUudmFsaWRhdG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWNjLWRhdGUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJuZ3gtY2MtZGF0ZS1jb250YWluZXJcIiBbbmdDbGFzc109XCJzdHlsZUNsYXNzXCI+XG4gICAgICA8aW5wdXRcbiAgICAgIG5neE51bWJlck9ubHlcbiAgICAgIG5neEZvcm1hdERhdGVcbiAgICAgIG1heGxlbmd0aD1cIjdcIlxuICAgICAgW25nQ2xhc3NdPVwieyduZ3gtY2MtZGF0ZS1pbnB1dCc6ICFkZWZhdWx0U3R5bGVzfVwiXG4gICAgICB0eXBlPVwidGV4dFwiXG4gICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXIgfHwgJydcIlxuICAgICAgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbdmFsdWVdPVwiY2FyZERhdGVcIlxuICAgICAgKGJsdXIpPVwidXBkYXRlT25Ub3VjaCgpXCJcbiAgICAgIChpbnB1dCk9XCJ1cGRhdGVEYXRlKClcIlxuICAgICAgPlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAgLm5neC1jYy1kYXRlLWlucHV0IHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgYF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ2NEYXRlQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgdXNlVmFsdWU6IENhcmRFeHBpcmF0aW9uVmFsaWRhdG9yLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE1hdEZvcm1GaWVsZENvbnRyb2wsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDY0RhdGVDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQ2NEYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIERvQ2hlY2ssIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBNYXRGb3JtRmllbGRDb250cm9sPENjRGF0ZUNvbXBvbmVudD4ge1xuXG4gIHN0YXRpYyBuZXh0SWQgPSAwO1xuICBASW5wdXQoKSBzdHlsZUNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKGNhcmROdW1iZXIpIHtcbiAgICB0aGlzLl92YWx1ZSA9IGNhcmROdW1iZXI7XG4gICAgdGhpcy5vbkNoYW5nZXMoY2FyZE51bWJlcik7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHBsYWNlaG9sZGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9wbGFjZWhvbGRlcjtcbiAgfVxuICBzZXQgcGxhY2Vob2xkZXIocGxhY2Vob2xkZXI6IHN0cmluZykge1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGVtcHR5KCkge1xuICAgIHJldHVybiAhKCEhdGhpcy5jYXJkRGF0ZSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgcmVxdWlyZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVkO1xuICB9XG4gIHNldCByZXF1aXJlZChyZXE6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXF1aXJlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShyZXEpO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wgJiYgdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLm5nQ29udHJvbC5kaXNhYmxlZDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZChkaXM6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShkaXMpO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBkZWZhdWx0U3R5bGVzKCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0U3R5bGVzO1xuICB9XG4gIHNldCBkZWZhdWx0U3R5bGVzKHZhbDogYW55KSB7XG4gICAgdGhpcy5fZGVmYXVsdFN0eWxlcyA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWwpO1xuICB9XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxuICBwcml2YXRlIF92YWx1ZTogYW55O1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcbiAgcHJpdmF0ZSBfcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxuICBwcml2YXRlIF9kZWZhdWx0U3R5bGVzID0gZmFsc2U7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxuICBwcml2YXRlIF9yZXF1aXJlZCA9IGZhbHNlO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcbiAgcHJpdmF0ZSBfZm9ybVN1Ym1pdFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBuZ0NvbnRyb2w6IE5nQ29udHJvbCA9IG51bGw7XG4gIGZvY3VzZWQgPSBmYWxzZTtcbiAgZXJyb3JTdGF0ZSA9IGZhbHNlO1xuICBzdGF0ZUNoYW5nZXMgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBjYXJkRGF0ZSA9ICcnO1xuICBvbkNoYW5nZXM6IGFueTtcbiAgb25Ub3VjaGVkOiBhbnk7XG5cbiAgQEhvc3RCaW5kaW5nKCkgaWQgPSBgbmd4LWNjJHtDY0RhdGVDb21wb25lbnQubmV4dElkfWA7XG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWRlc2NyaWJlZGJ5JykgZGVzY3JpYmVkQnkgPSAnJztcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mbG9hdGluZycpXG4gIGdldCBzaG91bGRMYWJlbEZsb2F0KCkge1xuICAgIHJldHVybiB0aGlzLmZvY3VzZWQgfHwgIXRoaXMuZW1wdHk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIGZtOiBGb2N1c01vbml0b3IsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBwYXJlbnRGb3JtOiBOZ0Zvcm0sXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBwYXJlbnRGb3JtR3JvdXA6IEZvcm1Hcm91cERpcmVjdGl2ZSxcbiAgICBwcml2YXRlIGRlZmF1bHRFcnJvclN0YXRlTWF0Y2hlcjogRXJyb3JTdGF0ZU1hdGNoZXIsXG4gICkge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50Rm9ybUdyb3VwIHx8IHRoaXMucGFyZW50Rm9ybTtcbiAgICBpZiAocGFyZW50KXtcbiAgICAgIHRoaXMuX2Zvcm1TdWJtaXRTdWJzY3JpcHRpb24gPSBwYXJlbnRGb3JtR3JvdXAubmdTdWJtaXQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmbS5tb25pdG9yKGVsUmVmLm5hdGl2ZUVsZW1lbnQsIHRydWUpLnN1YnNjcmliZShvcmlnaW4gPT4ge1xuICAgICAgdGhpcy5mb2N1c2VkID0gISFvcmlnaW47XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm5nQ29udHJvbCA9IHRoaXMuaW5qZWN0b3IuZ2V0KE5nQ29udHJvbCk7XG4gICAgaWYgKHRoaXMubmdDb250cm9sICE9PSBudWxsKSB7XG4gICAgICAvLyBTZXR0aW5nIHRoZSB2YWx1ZSBhY2Nlc3NvciBkaXJlY3RseSAoaW5zdGVhZCBvZiB1c2luZ1xuICAgICAgLy8gdGhlIHByb3ZpZGVycykgdG8gYXZvaWQgcnVubmluZyBpbnRvIGEgY2lyY3VsYXIgaW1wb3J0LlxuICAgICAgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xuICAgICAgdGhpcy51cGRhdGVFcnJvclN0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuY2FyZERhdGUgPSB2YWwgfHwgJyc7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcbiAgICB0aGlzLm9uQ2hhbmdlcyA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREZXNjcmliZWRCeUlkcyhpZHM6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5kZXNjcmliZWRCeSA9IGlkcy5qb2luKCcgJyk7XG4gIH1cblxuICBvbkNvbnRhaW5lckNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKChldmVudC50YXJnZXQgYXMgRWxlbWVudCkudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnaW5wdXQnKSB7XG4gICAgICB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZURhdGUoKSB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlcyh0aGlzLm5nQ29udHJvbC5jb250cm9sLnZhbHVlKTtcbiAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICAgIHRoaXMuY2FyZERhdGUgPSB0aGlzLm5nQ29udHJvbC5jb250cm9sLnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZU9uVG91Y2goKSB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sKSB7XG4gICAgICB0aGlzLm9uVG91Y2hlZCh0aGlzLm5nQ29udHJvbC5jb250cm9sLnZhbHVlKTtcbiAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgICAgdGhpcy5jYXJkRGF0ZSA9IHRoaXMubmdDb250cm9sLmNvbnRyb2wudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX2Zvcm1TdWJtaXRTdWJzY3JpcHRpb24pIHRoaXMuX2Zvcm1TdWJtaXRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmZtLnN0b3BNb25pdG9yaW5nKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMuY29tcGxldGUoKTtcbiAgfVxuXG4gIHVwZGF0ZUVycm9yU3RhdGUoKSB7XG4gICAgY29uc3Qgb2xkU3RhdGUgPSB0aGlzLmVycm9yU3RhdGU7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnRGb3JtR3JvdXAgfHwgdGhpcy5wYXJlbnRGb3JtO1xuICAgIGNvbnN0IG1hdGNoZXIgPSB0aGlzLmRlZmF1bHRFcnJvclN0YXRlTWF0Y2hlcjtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5uZ0NvbnRyb2wgPyB0aGlzLm5nQ29udHJvbC5jb250cm9sIGFzIEZvcm1Db250cm9sIDogbnVsbDtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IG1hdGNoZXIuaXNFcnJvclN0YXRlKGNvbnRyb2wsIHBhcmVudCk7XG5cbiAgICBpZiAobmV3U3RhdGUgIT09IG9sZFN0YXRlKSB7XG4gICAgICB0aGlzLmVycm9yU3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==