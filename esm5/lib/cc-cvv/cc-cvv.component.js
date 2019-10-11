/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, Input, Injector, forwardRef, ElementRef, Optional } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, NgControl, NgForm, FormGroupDirective } from '@angular/forms';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import validator from 'card-validator';
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
        this.stateChanges = new Subject();
        this.cardCvv = '';
        this.maxCvvLength = 4;
        this.id = "ngx-cc" + CcCvvComponent.nextId;
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
    Object.defineProperty(CcCvvComponent.prototype, "cvvSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._cvvSize;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._cvvSize = value;
            if (this.ngControl) {
                this.ngControl.control.updateValueAndValidity();
            }
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
            this.updateErrorState();
        }
    };
    /**
     * @param {?} control
     * @return {?}
     */
    CcCvvComponent.prototype.validate = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        /** @type {?} */
        var cvv = validator.cvv(control.value, this.cvvSize);
        return cvv.isValid ? null : { invalidCvv: true };
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
    /**
     * @return {?}
     */
    CcCvvComponent.prototype.updateErrorState = /**
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
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return CcCvvComponent; })),
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
        { type: FocusMonitor },
        { type: NgForm, decorators: [{ type: Optional }] },
        { type: FormGroupDirective, decorators: [{ type: Optional }] },
        { type: ErrorStateMatcher }
    ]; };
    CcCvvComponent.propDecorators = {
        styleClass: [{ type: Input }],
        value: [{ type: Input }],
        placeholder: [{ type: Input }],
        empty: [{ type: Input }],
        required: [{ type: Input }],
        disabled: [{ type: Input }],
        defaultStyles: [{ type: Input }],
        cvvSize: [{ type: Input, args: ['cvv-size',] }],
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
    /**
     * @type {?}
     * @private
     */
    CcCvvComponent.prototype._cvvSize;
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
    /**
     * @type {?}
     * @private
     */
    CcCvvComponent.prototype.parentForm;
    /**
     * @type {?}
     * @private
     */
    CcCvvComponent.prototype.parentFormGroup;
    /**
     * @type {?}
     * @private
     */
    CcCvvComponent.prototype.defaultErrorStateMatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2MtY3Z2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jYy8iLCJzb3VyY2VzIjpbImxpYi9jYy1jdnYvY2MtY3Z2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFDWCxVQUFVLEVBQ3RDLFVBQVUsRUFDVixRQUFRLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFxQyxNQUFNLEVBQUUsa0JBQWtCLEVBQWUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvSyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLFNBQVMsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2QztJQThJRSx3QkFDVSxRQUFrQixFQUNsQixLQUE4QixFQUM5QixFQUFnQixFQUNKLFVBQWtCLEVBQ2xCLGVBQW1DLEVBQy9DLHdCQUEyQztRQU5yRCxpQkFtQkM7UUFsQlMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUF5QjtRQUM5QixPQUFFLEdBQUYsRUFBRSxDQUFjO1FBQ0osZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNsQixvQkFBZSxHQUFmLGVBQWUsQ0FBb0I7UUFDL0MsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUFtQjs7UUE5QjdDLGNBQVMsR0FBRyxLQUFLLENBQUM7O1FBRWxCLG1CQUFjLEdBQUcsS0FBSyxDQUFDOztRQUV2QixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRzFCLGNBQVMsR0FBYyxJQUFJLENBQUM7UUFDNUIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUVuQyxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBR2IsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFFRixPQUFFLEdBQUcsV0FBUyxjQUFjLENBQUMsTUFBUSxDQUFDO1FBQ2YsZ0JBQVcsR0FBRyxFQUFFLENBQUM7O1lBYy9DLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxVQUFVO1FBQ3RELElBQUksTUFBTSxFQUFDO1lBQ1QsZUFBZSxDQUFDLFFBQVEsQ0FBQyxTQUFTOzs7WUFBQztnQkFDakMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDekMsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUVELEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxNQUFNO1lBQ3BELEtBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUN4QixLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQWhIRCxzQkFDSSxpQ0FBSzs7OztRQURUO1lBRUUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7Ozs7O1FBQ0QsVUFBVSxVQUFVO1lBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQixDQUFDOzs7T0FMQTtJQU9ELHNCQUNJLHVDQUFXOzs7O1FBRGY7WUFFRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDM0IsQ0FBQzs7Ozs7UUFDRCxVQUFnQixXQUFtQjtZQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztZQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNCLENBQUM7OztPQUpBO0lBTUQsc0JBQ0ksaUNBQUs7Ozs7UUFEVDtZQUVFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSxvQ0FBUTs7OztRQURaO1lBRUUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7Ozs7O1FBQ0QsVUFBYSxHQUFZO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQixDQUFDOzs7T0FKQTtJQU1ELHNCQUNJLG9DQUFROzs7O1FBRFo7WUFFRSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO2dCQUN0RCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO2FBQ2hDO1lBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7Ozs7O1FBQ0QsVUFBYSxHQUFZO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQixDQUFDOzs7T0FKQTtJQU1ELHNCQUNJLHlDQUFhOzs7O1FBRGpCO1lBRUUsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzdCLENBQUM7Ozs7O1FBQ0QsVUFBa0IsR0FBUTtZQUN4QixJQUFJLENBQUMsY0FBYyxHQUFHLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25ELENBQUM7OztPQUhBO0lBS0Qsc0JBQ0ksbUNBQU87Ozs7UUFEWDtZQUVFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDOzs7OztRQUNELFVBQVksS0FBYTtZQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLHNCQUFzQixFQUFFLENBQUM7YUFDakQ7UUFDSCxDQUFDOzs7T0FOQTtJQWdDRCxzQkFDSSw0Q0FBZ0I7Ozs7UUFEcEI7WUFFRSxPQUFPLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3JDLENBQUM7OztPQUFBOzs7O0lBdUJELGlDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUMsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRTtZQUMzQix3REFBd0Q7WUFDeEQsMERBQTBEO1lBQzFELElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUNyQztJQUNILENBQUM7Ozs7SUFFRCxrQ0FBUzs7O0lBQVQ7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDOzs7OztJQUVELGlDQUFROzs7O0lBQVIsVUFBUyxPQUF3Qjs7WUFDekIsR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RELE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNuRCxDQUFDOzs7OztJQUVELG1DQUFVOzs7O0lBQVYsVUFBVyxHQUFXO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELHlDQUFnQjs7OztJQUFoQixVQUFpQixFQUFPO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsMENBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQU87UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCwwQ0FBaUI7Ozs7SUFBakIsVUFBa0IsR0FBYTtRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCx5Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsS0FBaUI7UUFDaEMsSUFBSSxDQUFDLG1CQUFBLEtBQUssQ0FBQyxNQUFNLEVBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxPQUFPLEVBQUU7WUFDL0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3pEO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxrQ0FBUzs7OztJQUFULFVBQVUsS0FBWTs7WUFDZCxLQUFLLEdBQUcsQ0FBQyxtQkFBQSxLQUFLLENBQUMsTUFBTSxFQUFvQixDQUFDLENBQUMsS0FBSztRQUN0RCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxzQ0FBYTs7O0lBQWI7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN4QztJQUNILENBQUM7Ozs7SUFFRCxvQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELHlDQUFnQjs7O0lBQWhCOztZQUNRLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVTs7WUFDMUIsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLFVBQVU7O1lBQ2hELE9BQU8sR0FBRyxJQUFJLENBQUMsd0JBQXdCOztZQUN2QyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsbUJBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSTs7WUFDdkUsUUFBUSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztRQUV0RCxJQUFJLFFBQVEsS0FBSyxRQUFRLEVBQUU7WUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7SUE1TE0scUJBQU0sR0FBRyxDQUFDLENBQUM7O2dCQS9DbkIsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsOGNBY1Q7b0JBV0QsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLGNBQWMsRUFBZCxDQUFjLEVBQUM7NEJBQzdDLEtBQUssRUFBRSxJQUFJO3lCQUNaO3dCQUNEOzRCQUNFLE9BQU8sRUFBRSxhQUFhOzRCQUN0QixXQUFXLEVBQUUsVUFBVTs7OzRCQUFDLGNBQU0sT0FBQSxjQUFjLEVBQWQsQ0FBYyxFQUFDOzRCQUM3QyxLQUFLLEVBQUUsSUFBSTt5QkFDWjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsbUJBQW1COzRCQUM1QixXQUFXLEVBQUUsVUFBVTs7OzRCQUFDLGNBQU0sT0FBQSxjQUFjLEVBQWQsQ0FBYyxFQUFDOzRCQUM3QyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjs2QkExQlEsNEtBU1I7aUJBa0JGOzs7O2dCQXpEZ0MsUUFBUTtnQkFFdkMsVUFBVTtnQkFJSCxZQUFZO2dCQUQwRixNQUFNLHVCQTBKaEgsUUFBUTtnQkExSjBHLGtCQUFrQix1QkEySnBJLFFBQVE7Z0JBeEpKLGlCQUFpQjs7OzZCQXFEdkIsS0FBSzt3QkFDTCxLQUFLOzhCQVVMLEtBQUs7d0JBU0wsS0FBSzsyQkFLTCxLQUFLOzJCQVNMLEtBQUs7Z0NBWUwsS0FBSzswQkFRTCxLQUFLLFNBQUMsVUFBVTtxQkFpQ2hCLFdBQVc7OEJBQ1gsV0FBVyxTQUFDLHVCQUF1QjttQ0FDbkMsV0FBVyxTQUFDLGdCQUFnQjs7SUFtRy9CLHFCQUFDO0NBQUEsQUE1T0QsSUE0T0M7U0EvTFksY0FBYzs7O0lBRXpCLHNCQUFrQjs7SUFDbEIsb0NBQTRCOzs7OztJQWtFNUIsZ0NBQW9COzs7OztJQUVwQixzQ0FBNkI7Ozs7O0lBRTdCLG1DQUEwQjs7Ozs7SUFFMUIsd0NBQStCOzs7OztJQUUvQixtQ0FBMEI7Ozs7O0lBRTFCLGtDQUF5Qjs7SUFDekIsbUNBQTRCOztJQUM1QixpQ0FBZ0I7O0lBQ2hCLG9DQUFtQjs7SUFDbkIsc0NBQW1DOztJQUVuQyxpQ0FBYTs7SUFDYixtQ0FBZTs7SUFDZixtQ0FBZTs7SUFDZixzQ0FBaUI7O0lBRWpCLDRCQUFxRDs7SUFDckQscUNBQXVEOzs7OztJQU9yRCxrQ0FBMEI7Ozs7O0lBQzFCLCtCQUFzQzs7Ozs7SUFDdEMsNEJBQXdCOzs7OztJQUN4QixvQ0FBc0M7Ozs7O0lBQ3RDLHlDQUF1RDs7Ozs7SUFDdkQsa0RBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQsIEluamVjdG9yLFxuICBPbkluaXQsIE9uRGVzdHJveSwgRG9DaGVjaywgZm9yd2FyZFJlZixcbiAgRWxlbWVudFJlZixcbiAgT3B0aW9uYWxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IsIE5HX1ZBTElEQVRPUlMsIE5nQ29udHJvbCwgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzLCBOZ0Zvcm0sIEZvcm1Hcm91cERpcmVjdGl2ZSwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgRXJyb3JTdGF0ZU1hdGNoZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB2YWxpZGF0b3IgZnJvbSAnY2FyZC12YWxpZGF0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtY2MtY3Z2JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwibmd4LWNjLWN2di1jb250YWluZXJcIiBbbmdDbGFzc109XCJzdHlsZUNsYXNzXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgbmd4TnVtYmVyT25seVxuICAgICAgICBbbmd4TWF4TGVuZ3RoXT1cIm1heEN2dkxlbmd0aFwiXG4gICAgICAgIFtuZ0NsYXNzXT1cInsnbmd4LWNjLWN2di1pbnB1dCc6ICFkZWZhdWx0U3R5bGVzfVwiXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyIHx8ICcnXCJcbiAgICAgICAgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgW3ZhbHVlXT1cImNhcmRDdnZcIlxuICAgICAgICAoYmx1cik9XCJ1cGRhdGVPblRvdWNoKClcIlxuICAgICAgICAoaW5wdXQpPVwidXBkYXRlQ3Z2KCRldmVudClcIj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbYFxuICAgIC5uZ3gtY2MtY3Z2LWlucHV0IHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgYF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ2NDdnZDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDY0N2dkNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogTWF0Rm9ybUZpZWxkQ29udHJvbCxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENjQ3Z2Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENjQ3Z2Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIERvQ2hlY2ssIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBNYXRGb3JtRmllbGRDb250cm9sPENjQ3Z2Q29tcG9uZW50PiB7XG5cbiAgc3RhdGljIG5leHRJZCA9IDA7XG4gIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KClcbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuICBzZXQgdmFsdWUoY2FyZE51bWJlcikge1xuICAgIHRoaXMuX3ZhbHVlID0gY2FyZE51bWJlcjtcbiAgICB0aGlzLm9uQ2hhbmdlcyhjYXJkTnVtYmVyKTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgcGxhY2Vob2xkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyO1xuICB9XG4gIHNldCBwbGFjZWhvbGRlcihwbGFjZWhvbGRlcjogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgZW1wdHkoKSB7XG4gICAgcmV0dXJuICEoISF0aGlzLmNhcmRDdnYpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHJlcXVpcmVkKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlZDtcbiAgfVxuICBzZXQgcmVxdWlyZWQocmVxOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVxdWlyZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkocmVxKTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sICYmIHRoaXMubmdDb250cm9sLmRpc2FibGVkICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQoZGlzOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoZGlzKTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgZGVmYXVsdFN0eWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdFN0eWxlcztcbiAgfVxuICBzZXQgZGVmYXVsdFN0eWxlcyh2YWw6IGFueSkge1xuICAgIHRoaXMuX2RlZmF1bHRTdHlsZXMgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsKTtcbiAgfVxuXG4gIEBJbnB1dCgnY3Z2LXNpemUnKVxuICBnZXQgY3Z2U2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jdnZTaXplO1xuICB9XG4gIHNldCBjdnZTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9jdnZTaXplID0gdmFsdWU7XG4gICAgaWYgKHRoaXMubmdDb250cm9sKSB7XG4gICAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcbiAgcHJpdmF0ZSBfdmFsdWU6IGFueTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXG4gIHByaXZhdGUgX3BsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcbiAgcHJpdmF0ZSBfZGVmYXVsdFN0eWxlcyA9IGZhbHNlO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcbiAgcHJpdmF0ZSBfcmVxdWlyZWQgPSBmYWxzZTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXG4gIHByaXZhdGUgX2N2dlNpemU6IG51bWJlcjtcbiAgbmdDb250cm9sOiBOZ0NvbnRyb2wgPSBudWxsO1xuICBmb2N1c2VkID0gZmFsc2U7XG4gIGVycm9yU3RhdGUgPSBmYWxzZTtcbiAgc3RhdGVDaGFuZ2VzID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjYXJkQ3Z2ID0gJyc7XG4gIG9uQ2hhbmdlczogYW55O1xuICBvblRvdWNoZWQ6IGFueTtcbiAgbWF4Q3Z2TGVuZ3RoID0gNDtcblxuICBASG9zdEJpbmRpbmcoKSBpZCA9IGBuZ3gtY2Mke0NjQ3Z2Q29tcG9uZW50Lm5leHRJZH1gO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1kZXNjcmliZWRieScpIGRlc2NyaWJlZEJ5ID0gJyc7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuZmxvYXRpbmcnKVxuICBnZXQgc2hvdWxkTGFiZWxGbG9hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5mb2N1c2VkIHx8ICF0aGlzLmVtcHR5O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBmbTogRm9jdXNNb25pdG9yLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgcGFyZW50Rm9ybTogTmdGb3JtLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgcGFyZW50Rm9ybUdyb3VwOiBGb3JtR3JvdXBEaXJlY3RpdmUsXG4gICAgcHJpdmF0ZSBkZWZhdWx0RXJyb3JTdGF0ZU1hdGNoZXI6IEVycm9yU3RhdGVNYXRjaGVyLFxuICApIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudEZvcm1Hcm91cCB8fCB0aGlzLnBhcmVudEZvcm07XG4gICAgaWYgKHBhcmVudCl7XG4gICAgICBwYXJlbnRGb3JtR3JvdXAubmdTdWJtaXQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmbS5tb25pdG9yKGVsUmVmLm5hdGl2ZUVsZW1lbnQsIHRydWUpLnN1YnNjcmliZShvcmlnaW4gPT4ge1xuICAgICAgdGhpcy5mb2N1c2VkID0gISFvcmlnaW47XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm5nQ29udHJvbCA9IHRoaXMuaW5qZWN0b3IuZ2V0KE5nQ29udHJvbCk7XG4gICAgaWYgKHRoaXMubmdDb250cm9sICE9PSBudWxsKSB7XG4gICAgICAvLyBTZXR0aW5nIHRoZSB2YWx1ZSBhY2Nlc3NvciBkaXJlY3RseSAoaW5zdGVhZCBvZiB1c2luZ1xuICAgICAgLy8gdGhlIHByb3ZpZGVycykgdG8gYXZvaWQgcnVubmluZyBpbnRvIGEgY2lyY3VsYXIgaW1wb3J0LlxuICAgICAgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xuICAgICAgdGhpcy51cGRhdGVFcnJvclN0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIGNvbnN0IGN2diA9IHZhbGlkYXRvci5jdnYoY29udHJvbC52YWx1ZSwgdGhpcy5jdnZTaXplKTtcbiAgICByZXR1cm4gY3Z2LmlzVmFsaWQgPyBudWxsIDogeyBpbnZhbGlkQ3Z2OiB0cnVlIH07XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5jYXJkQ3Z2ID0gdmFsIHx8ICcnO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XG4gICAgdGhpcy5vbkNoYW5nZXMgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGVzY3JpYmVkQnlJZHMoaWRzOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuZGVzY3JpYmVkQnkgPSBpZHMuam9pbignICcpO1xuICB9XG5cbiAgb25Db250YWluZXJDbGljayhldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmICgoZXZlbnQudGFyZ2V0IGFzIEVsZW1lbnQpLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ2lucHV0Jykge1xuICAgICAgdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVDdnYoZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3QgdmFsdWUgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICAgIHRoaXMuY2FyZEN2diA9IHZhbHVlO1xuICAgIHRoaXMub25DaGFuZ2VzKHZhbHVlKTtcbiAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sLm1hcmtBc0RpcnR5KCk7XG4gIH1cblxuICB1cGRhdGVPblRvdWNoKCkge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xuICAgICAgdGhpcy5vblRvdWNoZWQodGhpcy5uZ0NvbnRyb2wuY29udHJvbC52YWx1ZSk7XG4gICAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmZtLnN0b3BNb25pdG9yaW5nKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMuY29tcGxldGUoKTtcbiAgfVxuXG4gIHVwZGF0ZUVycm9yU3RhdGUoKSB7XG4gICAgY29uc3Qgb2xkU3RhdGUgPSB0aGlzLmVycm9yU3RhdGU7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnRGb3JtR3JvdXAgfHwgdGhpcy5wYXJlbnRGb3JtO1xuICAgIGNvbnN0IG1hdGNoZXIgPSB0aGlzLmRlZmF1bHRFcnJvclN0YXRlTWF0Y2hlcjtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5uZ0NvbnRyb2wgPyB0aGlzLm5nQ29udHJvbC5jb250cm9sIGFzIEZvcm1Db250cm9sIDogbnVsbDtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IG1hdGNoZXIuaXNFcnJvclN0YXRlKGNvbnRyb2wsIHBhcmVudCk7XG5cbiAgICBpZiAobmV3U3RhdGUgIT09IG9sZFN0YXRlKSB7XG4gICAgICB0aGlzLmVycm9yU3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==