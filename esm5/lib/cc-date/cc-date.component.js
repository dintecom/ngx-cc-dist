/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, Input, Injector, forwardRef, ViewEncapsulation, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, NgControl } from '@angular/forms';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { CardExpirationValidator } from '../validators/ngx-cc-date.validator';
var ɵ0 = CardExpirationValidator;
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
        this.stateChanges = new Subject();
        this.cardDate = '';
        this.id = "ngx-cc" + CcDateComponent.nextId;
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
        this.fm.stopMonitoring(this.elRef.nativeElement);
        this.stateChanges.complete();
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
        { type: FocusMonitor }
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
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2MtZGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2MvIiwic291cmNlcyI6WyJsaWIvY2MtZGF0ZS9jYy1kYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFDWCxVQUFVLEVBQ3RDLGlCQUFpQixFQUFFLFVBQVUsRUFDOUIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJL0IsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7U0F1QzlELHVCQUF1QjtBQXJDdkM7SUFpSUUseUJBQ1UsUUFBa0IsRUFDbEIsS0FBOEIsRUFDOUIsRUFBZ0I7UUFIMUIsaUJBUUM7UUFQUyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFVBQUssR0FBTCxLQUFLLENBQXlCO1FBQzlCLE9BQUUsR0FBRixFQUFFLENBQWM7O1FBdkJsQixjQUFTLEdBQUcsS0FBSyxDQUFDOztRQUVsQixtQkFBYyxHQUFHLEtBQUssQ0FBQzs7UUFFdkIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUMxQixjQUFTLEdBQWMsSUFBSSxDQUFDO1FBQzVCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDbkMsYUFBUSxHQUFH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QUUsSUFBSTt5QkFDWjtxQkFDRjtvQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs2QkEzQjVCLDZLQVNSO2lCQW1CRjs7OztnQkE3RGdDLFFBQVE7Z0JBRXBCLFVBQVU7Z0JBR3RCLFlBQVk7Ozs2QkE0RGxCLEtBQUs7d0JBQ0wsS0FBSzs4QkFVTCxLQUFLO3dCQVNMLEtBQUs7MkJBS0wsS0FBSzsyQkFTTCxLQUFLO2dDQVlMLEtBQUs7cUJBeUJMLFdBQVc7OEJBQ1gsV0FBVyxTQUFDLHVCQUF1QjttQ0FDbkMsV0FBVyxTQUFDLGdCQUFnQjs7SUEwRS9CLHNCQUFDO0NBQUEsQUF0TUQsSUFzTUM7U0F0SlksZUFBZTs7O0lBRTFCLHVCQUFrQjs7SUFDbEIscUNBQTRCOzs7OztJQXNENUIsaUNBQW9COzs7OztJQUVwQix1Q0FBNkI7Ozs7O0lBRTdCLG9DQUEwQjs7Ozs7SUFFMUIseUNBQStCOzs7OztJQUUvQixvQ0FBMEI7O0lBQzFCLG9DQUE0Qjs7SUFDNUIsa0NBQWdCOztJQUNoQixxQ0FBbUI7O0lBQ25CLHVDQUFtQzs7SUFDbkMsbUNBQWM7O0lBQ2Qsb0NBQWU7O0lBQ2Ysb0NBQWU7O0lBRWYsNkJBQXNEOztJQUN0RCxzQ0FBdUQ7Ozs7O0lBT3JELG1DQUEwQjs7Ozs7SUFDMUIsZ0NBQXNDOzs7OztJQUN0Qyw2QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCwgSW5qZWN0b3IsXG4gIE9uSW5pdCwgT25EZXN0cm95LCBEb0NoZWNrLCBmb3J3YXJkUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvbiwgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiwgTkdfVkFMSURBVE9SUywgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHZhbGlkYXRvciBmcm9tICdjYXJkLXZhbGlkYXRvcic7XG5cbmltcG9ydCB7IENhcmRFeHBpcmF0aW9uVmFsaWRhdG9yIH0gZnJvbSAnLi4vdmFsaWRhdG9ycy9uZ3gtY2MtZGF0ZS52YWxpZGF0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtY2MtZGF0ZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cIm5neC1jYy1kYXRlLWNvbnRhaW5lclwiIFtuZ0NsYXNzXT1cInN0eWxlQ2xhc3NcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgbmd4TnVtYmVyT25seVxuICAgICAgbmd4Rm9ybWF0RGF0ZVxuICAgICAgbWF4bGVuZ3RoPVwiN1wiXG4gICAgICBbbmdDbGFzc109XCJ7J25neC1jYy1kYXRlLWlucHV0JzogIWRlZmF1bHRTdHlsZXN9XCJcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlciB8fCAnJ1wiXG4gICAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFt2YWx1ZV09XCJjYXJkRGF0ZVwiXG4gICAgICAoYmx1cik9XCJ1cGRhdGVPblRvdWNoKClcIlxuICAgICAgKGlucHV0KT1cInVwZGF0ZURhdGUoKVwiXG4gICAgICA+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW2BcbiAgICAubmd4LWNjLWRhdGUtaW5wdXQge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgZm9udDogaW5oZXJpdDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICBgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDY0RhdGVDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICB1c2VWYWx1ZTogQ2FyZEV4cGlyYXRpb25WYWxpZGF0b3IsXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogTWF0Rm9ybUZpZWxkQ29udHJvbCxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENjRGF0ZUNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBDY0RhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgRG9DaGVjaywgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE1hdEZvcm1GaWVsZENvbnRyb2w8Q2NEYXRlQ29tcG9uZW50PiB7XG5cbiAgc3RhdGljIG5leHRJZCA9IDA7XG4gIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KClcbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuICBzZXQgdmFsdWUoY2FyZE51bWJlcikge1xuICAgIHRoaXMuX3ZhbHVlID0gY2FyZE51bWJlcjtcbiAgICB0aGlzLm9uQ2hhbmdlcyhjYXJkTnVtYmVyKTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgcGxhY2Vob2xkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyO1xuICB9XG4gIHNldCBwbGFjZWhvbGRlcihwbGFjZWhvbGRlcjogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgZW1wdHkoKSB7XG4gICAgcmV0dXJuICEoISF0aGlzLmNhcmREYXRlKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCByZXF1aXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7XG4gIH1cbiAgc2V0IHJlcXVpcmVkKHJlcTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHJlcSk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbCAmJiB0aGlzLm5nQ29udHJvbC5kaXNhYmxlZCAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMubmdDb250cm9sLmRpc2FibGVkO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKGRpczogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KGRpcyk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGRlZmF1bHRTdHlsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRTdHlsZXM7XG4gIH1cbiAgc2V0IGRlZmF1bHRTdHlsZXModmFsOiBhbnkpIHtcbiAgICB0aGlzLl9kZWZhdWx0U3R5bGVzID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbCk7XG4gIH1cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXG4gIHByaXZhdGUgX3ZhbHVlOiBhbnk7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxuICBwcml2YXRlIF9wbGFjZWhvbGRlcjogc3RyaW5nO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXG4gIHByaXZhdGUgX2RlZmF1bHRTdHlsZXMgPSBmYWxzZTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXG4gIHByaXZhdGUgX3JlcXVpcmVkID0gZmFsc2U7XG4gIG5nQ29udHJvbDogTmdDb250cm9sID0gbnVsbDtcbiAgZm9jdXNlZCA9IGZhbHNlO1xuICBlcnJvclN0YXRlID0gZmFsc2U7XG4gIHN0YXRlQ2hhbmdlcyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIGNhcmREYXRlID0gJyc7XG4gIG9uQ2hhbmdlczogYW55O1xuICBvblRvdWNoZWQ6IGFueTtcblxuICBASG9zdEJpbmRpbmcoKSBpZCA9IGBuZ3gtY2Mke0NjRGF0ZUNvbXBvbmVudC5uZXh0SWR9YDtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZGVzY3JpYmVkYnknKSBkZXNjcmliZWRCeSA9ICcnO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZsb2F0aW5nJylcbiAgZ2V0IHNob3VsZExhYmVsRmxvYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9jdXNlZCB8fCAhdGhpcy5lbXB0eTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgZm06IEZvY3VzTW9uaXRvcikge1xuICAgIGZtLm1vbml0b3IoZWxSZWYubmF0aXZlRWxlbWVudCwgdHJ1ZSkuc3Vic2NyaWJlKG9yaWdpbiA9PiB7XG4gICAgICB0aGlzLmZvY3VzZWQgPSAhIW9yaWdpbjtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubmdDb250cm9sID0gdGhpcy5pbmplY3Rvci5nZXQoTmdDb250cm9sKTtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wgIT09IG51bGwpIHtcbiAgICAgIC8vIFNldHRpbmcgdGhlIHZhbHVlIGFjY2Vzc29yIGRpcmVjdGx5IChpbnN0ZWFkIG9mIHVzaW5nXG4gICAgICAvLyB0aGUgcHJvdmlkZXJzKSB0byBhdm9pZCBydW5uaW5nIGludG8gYSBjaXJjdWxhciBpbXBvcnQuXG4gICAgICB0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yID0gdGhpcztcbiAgICB9XG4gIH1cblxuICBuZ0RvQ2hlY2soKSB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sKSB7XG4gICAgICB0aGlzLmVycm9yU3RhdGUgPSB0aGlzLm5nQ29udHJvbC5pbnZhbGlkICYmIHRoaXMubmdDb250cm9sLnRvdWNoZWQ7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuY2FyZERhdGUgPSB2YWwgfHwgJyc7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcbiAgICB0aGlzLm9uQ2hhbmdlcyA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREZXNjcmliZWRCeUlkcyhpZHM6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5kZXNjcmliZWRCeSA9IGlkcy5qb2luKCcgJyk7XG4gIH1cblxuICBvbkNvbnRhaW5lckNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKChldmVudC50YXJnZXQgYXMgRWxlbWVudCkudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnaW5wdXQnKSB7XG4gICAgICB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZURhdGUoKSB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlcyh0aGlzLm5nQ29udHJvbC5jb250cm9sLnZhbHVlKTtcbiAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICAgIHRoaXMuY2FyZERhdGUgPSB0aGlzLm5nQ29udHJvbC5jb250cm9sLnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZU9uVG91Y2goKSB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sKSB7XG4gICAgICB0aGlzLm9uVG91Y2hlZCh0aGlzLm5nQ29udHJvbC5jb250cm9sLnZhbHVlKTtcbiAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgICAgdGhpcy5jYXJkRGF0ZSA9IHRoaXMubmdDb250cm9sLmNvbnRyb2wudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5mbS5zdG9wTW9uaXRvcmluZyh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLmNvbXBsZXRlKCk7XG4gIH1cblxufVxuIl19