/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, Input, Injector, forwardRef, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, NgControl } from '@angular/forms';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { CardCvvValidator } from '../validators/ngx-cc-cvv.validator';
var ɵ0 = CardCvvValidator;
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
        this.stateChanges = new Subject();
        this.cardCvv = '';
        this.maxCvvLength = 4;
        this.id = "ngx-cc" + CcCvvComponent.nextId;
        this.describedBy = '';
        fm.monitor(elRef.nativeElement, true).subscribe((/**
         * @param {?} origin
         * @return {?}
         */
        function (origin) {
            _this.focused = !!origin;
            _this.stateChanges.next();
        }));
    }
    Object.defineProperty(CcCvvComponent.prototype, "value", {
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
    Object.defineProperty(CcCvvComponent.prototype, "placeholder", {
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
    Object.defineProperty(CcCvvComponent.prototype, "empty", {
        get: /**
         * @return {?}
         */
        function () {
            return !(!!this.cardCvv);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CcCvvComponent.prototype, "required", {
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
    Object.defineProperty(CcCvvComponent.prototype, "disabled", {
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
    Object.defineProperty(CcCvvComponent.prototype, "defaultStyles", {
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
    Object.defineProperty(CcCvvComponent.prototype, "shouldLabelFloat", {
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
    CcCvvComponent.prototype.ngOnInit = /**
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
        if (((/** @type {?} */ (event.target))).tagName.toLowerCase() !== 'input') {
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
        var value = ((/** @type {?} */ (event.target))).value;
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
        { type: Component, args: [{
                    selector: 'ngx-cc-cvv',
                    template: "\n    <div class=\"ngx-cc-cvv-container\" [ngClass]=\"styleClass\">\n      <input\n        ngxNumberOnly\n        [ngxMaxLength]=\"maxCvvLength\"\n        [ngClass]=\"{'ngx-cc-cvv-input': !defaultStyles}\"\n        type=\"text\"\n        [placeholder]=\"placeholder || ''\"\n        [required]=\"required\"\n        [disabled]=\"disabled\"\n        [value]=\"cardCvv\"\n        (blur)=\"updateOnTouch()\"\n        (input)=\"updateCvv($event)\">\n    </div>\n  ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return CcCvvComponent; })),
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
                            function () { return CcCvvComponent; })),
                            multi: true
                        }
                    ],
                    styles: ["\n    .ngx-cc-cvv-input {\n      border: none;\n      background: none;\n      padding: 0;\n      outline: none;\n      font: inherit;\n      text-align: left;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    CcCvvComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: ElementRef },
        { type: FocusMonitor }
    ]; };
    CcCvvComponent.propDecorators = {
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
    return CcCvvComponent;
}());
export { CcCvvComponent };
if (false) {
    /** @type {?} */
    CcCvvComponent.nextId;
    /** @type {?} */
    CcCvvComponent.prototype.styleClass;
    /**
     * @type {?}
     * @private
     */
    CcCvvComponent.prototype._value;
    /**
     * @type {?}
     * @private
     */
    CcCvvComponent.prototype._placeholder;
    /**
     * @type {?}
     * @private
     */
    CcCvvComponent.prototype._disabled;
    /**
     * @type {?}
     * @private
     */
    CcCvvComponent.prototype._defaultStyles;
    /**
     * @type {?}
     * @private
     */
    CcCvvComponent.prototype._required;
    /** @type {?} */
    CcCvvComponent.prototype.ngControl;
    /** @type {?} */
    CcCvvComponent.prototype.focused;
    /** @type {?} */
    CcCvvComponent.prototype.errorState;
    /** @type {?} */
    CcCvvComponent.prototype.stateChanges;
    /** @type {?} */
    CcCvvComponent.prototype.cardCvv;
    /** @type {?} */
    CcCvvComponent.prototype.onChanges;
    /** @type {?} */
    CcCvvComponent.prototype.onTouched;
    /** @type {?} */
    CcCvvComponent.prototype.maxCvvLength;
    /** @type {?} */
    CcCvvComponent.prototype.id;
    /** @type {?} */
    CcCvvComponent.prototype.describedBy;
    /**
     * @type {?}
     * @private
     */
    CcCvvComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    CcCvvComponent.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    CcCvvComponent.prototype.fm;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2MtY3Z2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jYy8iLCJzb3VyY2VzIjpbImxpYi9jYy1jdnYvY2MtY3Z2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFDWCxVQUFVLEVBQ25CLFVBQVUsRUFDOUIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHL0IsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7U0FxQ3RELGdCQUFnQjtBQW5DaEM7SUFnSUUsd0JBQ1UsUUFBa0IsRUFDbEIsS0FBOEIsRUFDOUIsRUFBZ0I7UUFIMUIsaUJBU0M7UUFSUyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFVBQUssR0FBTCxLQUFLLENBQXlCO1FBQzlCLE9BQUUsR0FBRixFQUFFLENBQWM7O1FBekJsQixjQUFTLEdBQUcsS0FBSyxDQUFDOztRQUVsQixtQkFBYyxHQUFHLEtBQUssQ0FBQzs7UUFFdkIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUMxQixjQUFTLEdBQWMsSUFBSSxDQUFDO1FBQzVCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFFbkMsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUdiLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBRUYsT0FBRSxHQUFHLFdBQVMsY0FBYyxDQUFDLE1BQVEsQ0FBQztRQUNmLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBV3JELEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxNQUFNO1lBQ3BELEtBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUN4QixLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQXhGRCxzQkFDSSxpQ0FBSzs7OztRQURUO1lBRUUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7Ozs7O1FBQ0QsVUFBVSxVQUFVO1lBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQixDQUFDOzs7T0FMQTtJQU9ELHNCQUNJLHVDQUFXOzs7O1FBRGY7WUFFRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDM0IsQ0FBQzs7Ozs7UUFDRCxVQUFnQixXQUFtQjtZQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztZQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNCLENBQUM7OztPQUpBO0lBTUQsc0JBQ0ksaUNBQUs7Ozs7UUFEVDtZQUVFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSxvQ0FBUTs7OztRQURaO1lBRUUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7Ozs7O1FBQ0QsVUFBYSxHQUFZO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQixDQUFDOzs7T0FKQTtJQU1ELHNCQUNJLG9DQUFROzs7O1FBRFo7WUFFRSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO2dCQUN0RCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO2FBQ2hDO1lBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7Ozs7O1FBQ0QsVUFBYSxHQUFZO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQixDQUFDOzs7T0FKQTtJQU1ELHNCQUNJLHlDQUFhOzs7O1FBRGpCO1lBRUUsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzdCLENBQUM7Ozs7O1FBQ0QsVUFBa0IsR0FBUTtZQUN4QixJQUFJLENBQUMsY0FBYyxHQUFHLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25ELENBQUM7OztPQUhBO0lBMEJELHNCQUNJLDRDQUFnQjs7OztRQURwQjtZQUVFLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDckMsQ0FBQzs7O09BQUE7Ozs7SUFhRCxpQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlDLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDM0Isd0RBQXdEO1lBQ3hELDBEQUEwRDtZQUMxRCxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDckM7SUFDSCxDQUFDOzs7O0lBRUQsa0NBQVM7OztJQUFUO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7WUFDbkUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7Ozs7O0lBRUQsbUNBQVU7Ozs7SUFBVixVQUFXLEdBQVc7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQseUNBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQU87UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCwwQ0FBaUI7Ozs7SUFBakIsVUFBa0IsRUFBTztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELDBDQUFpQjs7OztJQUFqQixVQUFrQixHQUFhO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVELHlDQUFnQjs7OztJQUFoQixVQUFpQixLQUFpQjtRQUNoQyxJQUFJLENBQUMsbUJBQUEsS0FBSyxDQUFDLE1BQU0sRUFBVyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLE9BQU8sRUFBRTtZQUMvRCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDekQ7SUFDSCxDQUFDOzs7OztJQUVELGtDQUFTOzs7O0lBQVQsVUFBVSxLQUFZOztZQUNkLEtBQUssR0FBRyxDQUFDLG1CQUFBLEtBQUssQ0FBQyxNQUFNLEVBQW9CLENBQUMsQ0FBQyxLQUFLO1FBQ3RELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELHNDQUFhOzs7SUFBYjtRQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQzs7OztJQUVELG9DQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBbkpNLHFCQUFNLEdBQUcsQ0FBQyxDQUFDOztnQkEvQ25CLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLDhjQWNUO29CQVdELFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVTs7OzRCQUFDLGNBQU0sT0FBQSxjQUFjLEVBQWQsQ0FBYyxFQUFDOzRCQUM3QyxLQUFLLEVBQUUsSUFBSTt5QkFDWjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsUUFBUSxJQUFrQjs0QkFDMUIsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLG1CQUFtQjs0QkFDNUIsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsY0FBYyxFQUFkLENBQWMsRUFBQzs0QkFDN0MsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7NkJBMUJRLDRLQVNSO2lCQWtCRjs7OztnQkF6RGdDLFFBQVE7Z0JBRXBCLFVBQVU7Z0JBR3RCLFlBQVk7Ozs2QkF3RGxCLEtBQUs7d0JBQ0wsS0FBSzs4QkFVTCxLQUFLO3dCQVNMLEtBQUs7MkJBS0wsS0FBSzsyQkFTTCxLQUFLO2dDQVlMLEtBQUs7cUJBMkJMLFdBQVc7OEJBQ1gsV0FBVyxTQUFDLHVCQUF1QjttQ0FDbkMsV0FBVyxTQUFDLGdCQUFnQjs7SUF5RS9CLHFCQUFDO0NBQUEsQUFwTUQsSUFvTUM7U0F2SlksY0FBYzs7O0lBRXpCLHNCQUFrQjs7SUFDbEIsb0NBQTRCOzs7OztJQXNENUIsZ0NBQW9COzs7OztJQUVwQixzQ0FBNkI7Ozs7O0lBRTdCLG1DQUEwQjs7Ozs7SUFFMUIsd0NBQStCOzs7OztJQUUvQixtQ0FBMEI7O0lBQzFCLG1DQUE0Qjs7SUFDNUIsaUNBQWdCOztJQUNoQixvQ0FBbUI7O0lBQ25CLHNDQUFtQzs7SUFFbkMsaUNBQWE7O0lBQ2IsbUNBQWU7O0lBQ2YsbUNBQWU7O0lBQ2Ysc0NBQWlCOztJQUVqQiw0QkFBcUQ7O0lBQ3JELHFDQUF1RDs7Ozs7SUFPckQsa0NBQTBCOzs7OztJQUMxQiwrQkFBc0M7Ozs7O0lBQ3RDLDRCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0LCBJbmplY3RvcixcbiAgT25Jbml0LCBPbkRlc3Ryb3ksIERvQ2hlY2ssIGZvcndhcmRSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLCBFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SLCBOR19WQUxJREFUT1JTLCBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHZhbGlkYXRvciBmcm9tICdjYXJkLXZhbGlkYXRvcic7XG5cbmltcG9ydCB7IENhcmRDdnZWYWxpZGF0b3IgfSBmcm9tICcuLi92YWxpZGF0b3JzL25neC1jYy1jdnYudmFsaWRhdG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWNjLWN2dicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cIm5neC1jYy1jdnYtY29udGFpbmVyXCIgW25nQ2xhc3NdPVwic3R5bGVDbGFzc1wiPlxuICAgICAgPGlucHV0XG4gICAgICAgIG5neE51bWJlck9ubHlcbiAgICAgICAgW25neE1heExlbmd0aF09XCJtYXhDdnZMZW5ndGhcIlxuICAgICAgICBbbmdDbGFzc109XCJ7J25neC1jYy1jdnYtaW5wdXQnOiAhZGVmYXVsdFN0eWxlc31cIlxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlciB8fCAnJ1wiXG4gICAgICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIFt2YWx1ZV09XCJjYXJkQ3Z2XCJcbiAgICAgICAgKGJsdXIpPVwidXBkYXRlT25Ub3VjaCgpXCJcbiAgICAgICAgKGlucHV0KT1cInVwZGF0ZUN2digkZXZlbnQpXCI+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW2BcbiAgICAubmd4LWNjLWN2di1pbnB1dCB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBmb250OiBpbmhlcml0O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gIGBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENjQ3Z2Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgdXNlVmFsdWU6IENhcmRDdnZWYWxpZGF0b3IsXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogTWF0Rm9ybUZpZWxkQ29udHJvbCxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENjQ3Z2Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENjQ3Z2Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIERvQ2hlY2ssIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBNYXRGb3JtRmllbGRDb250cm9sPENjQ3Z2Q29tcG9uZW50PiB7XG5cbiAgc3RhdGljIG5leHRJZCA9IDA7XG4gIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KClcbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuICBzZXQgdmFsdWUoY2FyZE51bWJlcikge1xuICAgIHRoaXMuX3ZhbHVlID0gY2FyZE51bWJlcjtcbiAgICB0aGlzLm9uQ2hhbmdlcyhjYXJkTnVtYmVyKTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgcGxhY2Vob2xkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyO1xuICB9XG4gIHNldCBwbGFjZWhvbGRlcihwbGFjZWhvbGRlcjogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgZW1wdHkoKSB7XG4gICAgcmV0dXJuICEoISF0aGlzLmNhcmRDdnYpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHJlcXVpcmVkKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlZDtcbiAgfVxuICBzZXQgcmVxdWlyZWQocmVxOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVxdWlyZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkocmVxKTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sICYmIHRoaXMubmdDb250cm9sLmRpc2FibGVkICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQoZGlzOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoZGlzKTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgZGVmYXVsdFN0eWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdFN0eWxlcztcbiAgfVxuICBzZXQgZGVmYXVsdFN0eWxlcyh2YWw6IGFueSkge1xuICAgIHRoaXMuX2RlZmF1bHRTdHlsZXMgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsKTtcbiAgfVxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcbiAgcHJpdmF0ZSBfdmFsdWU6IGFueTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXG4gIHByaXZhdGUgX3BsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcbiAgcHJpdmF0ZSBfZGVmYXVsdFN0eWxlcyA9IGZhbHNlO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcbiAgcHJpdmF0ZSBfcmVxdWlyZWQgPSBmYWxzZTtcbiAgbmdDb250cm9sOiBOZ0NvbnRyb2wgPSBudWxsO1xuICBmb2N1c2VkID0gZmFsc2U7XG4gIGVycm9yU3RhdGUgPSBmYWxzZTtcbiAgc3RhdGVDaGFuZ2VzID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjYXJkQ3Z2ID0gJyc7XG4gIG9uQ2hhbmdlczogYW55O1xuICBvblRvdWNoZWQ6IGFueTtcbiAgbWF4Q3Z2TGVuZ3RoID0gNDtcblxuICBASG9zdEJpbmRpbmcoKSBpZCA9IGBuZ3gtY2Mke0NjQ3Z2Q29tcG9uZW50Lm5leHRJZH1gO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1kZXNjcmliZWRieScpIGRlc2NyaWJlZEJ5ID0gJyc7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuZmxvYXRpbmcnKVxuICBnZXQgc2hvdWxkTGFiZWxGbG9hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5mb2N1c2VkIHx8ICF0aGlzLmVtcHR5O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBmbTogRm9jdXNNb25pdG9yXG4gICkge1xuICAgIGZtLm1vbml0b3IoZWxSZWYubmF0aXZlRWxlbWVudCwgdHJ1ZSkuc3Vic2NyaWJlKG9yaWdpbiA9PiB7XG4gICAgICB0aGlzLmZvY3VzZWQgPSAhIW9yaWdpbjtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubmdDb250cm9sID0gdGhpcy5pbmplY3Rvci5nZXQoTmdDb250cm9sKTtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wgIT09IG51bGwpIHtcbiAgICAgIC8vIFNldHRpbmcgdGhlIHZhbHVlIGFjY2Vzc29yIGRpcmVjdGx5IChpbnN0ZWFkIG9mIHVzaW5nXG4gICAgICAvLyB0aGUgcHJvdmlkZXJzKSB0byBhdm9pZCBydW5uaW5nIGludG8gYSBjaXJjdWxhciBpbXBvcnQuXG4gICAgICB0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yID0gdGhpcztcbiAgICB9XG4gIH1cblxuICBuZ0RvQ2hlY2soKSB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sKSB7XG4gICAgICB0aGlzLmVycm9yU3RhdGUgPSB0aGlzLm5nQ29udHJvbC5pbnZhbGlkICYmIHRoaXMubmdDb250cm9sLnRvdWNoZWQ7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuY2FyZEN2diA9IHZhbCB8fCAnJztcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xuICAgIHRoaXMub25DaGFuZ2VzID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERlc2NyaWJlZEJ5SWRzKGlkczogc3RyaW5nW10pIHtcbiAgICB0aGlzLmRlc2NyaWJlZEJ5ID0gaWRzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIG9uQ29udGFpbmVyQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAoKGV2ZW50LnRhcmdldCBhcyBFbGVtZW50KS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdpbnB1dCcpIHtcbiAgICAgIHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQ3Z2KGV2ZW50OiBFdmVudCkge1xuICAgIGNvbnN0IHZhbHVlID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgICB0aGlzLmNhcmRDdnYgPSB2YWx1ZTtcbiAgICB0aGlzLm9uQ2hhbmdlcyh2YWx1ZSk7XG4gICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICB9XG5cbiAgdXBkYXRlT25Ub3VjaCgpIHtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wpIHtcbiAgICAgIHRoaXMub25Ub3VjaGVkKHRoaXMubmdDb250cm9sLmNvbnRyb2wudmFsdWUpO1xuICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5mbS5zdG9wTW9uaXRvcmluZyh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLmNvbXBsZXRlKCk7XG4gIH1cblxufVxuIl19