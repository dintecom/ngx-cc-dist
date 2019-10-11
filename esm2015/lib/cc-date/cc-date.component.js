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
const ɵ0 = CardExpirationValidator;
export class CcDateComponent {
    /**
     * @param {?} injector
     * @param {?} elRef
     * @param {?} fm
     * @param {?} parentForm
     * @param {?} parentFormGroup
     * @param {?} defaultErrorStateMatcher
     */
    constructor(injector, elRef, fm, parentForm, parentFormGroup, defaultErrorStateMatcher) {
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
        this.id = `ngx-cc${CcDateComponent.nextId}`;
        this.describedBy = '';
        /** @type {?} */
        const parent = this.parentFormGroup || this.parentForm;
        if (parent) {
            this._formSubmitSubscription = parentFormGroup.ngSubmit.subscribe((/**
             * @return {?}
             */
            () => {
                this.ngControl.control.markAsTouched();
            }));
        }
        fm.monitor(elRef.nativeElement, true).subscribe((/**
         * @param {?} origin
         * @return {?}
         */
        origin => {
            this.focused = !!origin;
            this.stateChanges.next();
        }));
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} cardNumber
     * @return {?}
     */
    set value(cardNumber) {
        this._value = cardNumber;
        this.onChanges(cardNumber);
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    get placeholder() {
        return this._placeholder;
    }
    /**
     * @param {?} placeholder
     * @return {?}
     */
    set placeholder(placeholder) {
        this._placeholder = placeholder;
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    get empty() {
        return !(!!this.cardDate);
    }
    /**
     * @return {?}
     */
    get required() {
        return this._required;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    set required(req) {
        this._required = coerceBooleanProperty(req);
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    get disabled() {
        if (this.ngControl && this.ngControl.disabled !== null) {
            return this.ngControl.disabled;
        }
        return this._disabled;
    }
    /**
     * @param {?} dis
     * @return {?}
     */
    set disabled(dis) {
        this._disabled = coerceBooleanProperty(dis);
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    get defaultStyles() {
        return this._defaultStyles;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set defaultStyles(val) {
        this._defaultStyles = coerceBooleanProperty(val);
    }
    /**
     * @return {?}
     */
    get shouldLabelFloat() {
        return this.focused || !this.empty;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.ngControl = this.injector.get(NgControl);
        if (this.ngControl !== null) {
            // Setting the value accessor directly (instead of using
            // the providers) to avoid running into a circular import.
            this.ngControl.valueAccessor = this;
        }
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this.ngControl) {
            this.updateErrorState();
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    writeValue(val) {
        this.cardDate = val || '';
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChanges = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} ids
     * @return {?}
     */
    setDescribedByIds(ids) {
        this.describedBy = ids.join(' ');
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onContainerClick(event) {
        if (((/** @type {?} */ (event.target))).tagName.toLowerCase() !== 'input') {
            this.elRef.nativeElement.querySelector('input').focus();
        }
    }
    /**
     * @return {?}
     */
    updateDate() {
        if (this.ngControl) {
            this.onChanges(this.ngControl.control.value);
            this.ngControl.control.markAsDirty();
            this.cardDate = this.ngControl.control.value;
        }
    }
    /**
     * @return {?}
     */
    updateOnTouch() {
        if (this.ngControl) {
            this.onTouched(this.ngControl.control.value);
            this.ngControl.control.markAsTouched();
            this.cardDate = this.ngControl.control.value;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._formSubmitSubscription)
            this._formSubmitSubscription.unsubscribe();
        this.fm.stopMonitoring(this.elRef.nativeElement);
        this.stateChanges.complete();
    }
    /**
     * @return {?}
     */
    updateErrorState() {
        /** @type {?} */
        const oldState = this.errorState;
        /** @type {?} */
        const parent = this.parentFormGroup || this.parentForm;
        /** @type {?} */
        const matcher = this.defaultErrorStateMatcher;
        /** @type {?} */
        const control = this.ngControl ? (/** @type {?} */ (this.ngControl.control)) : null;
        /** @type {?} */
        const newState = matcher.isErrorState(control, parent);
        if (newState !== oldState) {
            this.errorState = newState;
            this.stateChanges.next();
        }
    }
}
CcDateComponent.nextId = 0;
CcDateComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-cc-date',
                template: `
    <div class="ngx-cc-date-container" [ngClass]="styleClass">
      <input
      ngxNumberOnly
      ngxFormatDate
      maxlength="7"
      [ngClass]="{'ngx-cc-date-input': !defaultStyles}"
      type="text"
      [placeholder]="placeholder || ''"
      [required]="required"
      [disabled]="disabled"
      [value]="cardDate"
      (blur)="updateOnTouch()"
      (input)="updateDate()"
      >
    </div>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => CcDateComponent)),
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
                        () => CcDateComponent)),
                        multi: true
                    }
                ],
                encapsulation: ViewEncapsulation.None,
                styles: [`
    .ngx-cc-date-input {
      border: none;
      background: none;
      padding: 0;
      outline: none;
      font: inherit;
      text-align: left;
    }
  `]
            }] }
];
/** @nocollapse */
CcDateComponent.ctorParameters = () => [
    { type: Injector },
    { type: ElementRef },
    { type: FocusMonitor },
    { type: NgForm, decorators: [{ type: Optional }] },
    { type: FormGroupDirective, decorators: [{ type: Optional }] },
    { type: ErrorStateMatcher }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2MtZGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2MvIiwic291cmNlcyI6WyJsaWIvY2MtZGF0ZS9jYy1kYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQ3JCLFVBQVUsRUFDdEMsaUJBQWlCLEVBQUUsVUFBVSxFQUM5QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUFlLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUksT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBRTdDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO1dBdUM5RCx1QkFBdUI7QUFXdkMsTUFBTSxPQUFPLGVBQWU7Ozs7Ozs7OztJQW1GMUIsWUFDVSxRQUFrQixFQUNsQixLQUE4QixFQUM5QixFQUFnQixFQUNKLFVBQWtCLEVBQ2xCLGVBQW1DLEVBQy9DLHdCQUEyQztRQUwzQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFVBQUssR0FBTCxLQUFLLENBQXlCO1FBQzlCLE9BQUUsR0FBRixFQUFFLENBQWM7UUFDSixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ2xCLG9CQUFlLEdBQWYsZUFBZSxDQUFvQjtRQUMvQyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQW1COztR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QUFLOzBCQVVMLEtBQUs7b0JBU0wsS0FBSzt1QkFLTCxLQUFLO3VCQVNMLEtBQUs7NEJBWUwsS0FBSztpQkEyQkwsV0FBVzswQkFDWCxXQUFXLFNBQUMsdUJBQXVCOytCQUNuQyxXQUFXLFNBQUMsZ0JBQWdCOzs7O0lBNUU3Qix1QkFBa0I7O0lBQ2xCLHFDQUE0Qjs7Ozs7SUFzRDVCLGlDQUFvQjs7Ozs7SUFFcEIsdUNBQTZCOzs7OztJQUU3QixvQ0FBMEI7Ozs7O0lBRTFCLHlDQUErQjs7Ozs7SUFFL0Isb0NBQTBCOzs7OztJQUUxQixrREFBOEM7O0lBQzlDLG9DQUE0Qjs7SUFDNUIsa0NBQWdCOztJQUNoQixxQ0FBbUI7O0lBQ25CLHVDQUFtQzs7SUFDbkMsbUNBQWM7O0lBQ2Qsb0NBQWU7O0lBQ2Ysb0NBQWU7O0lBRWYsNkJBQXNEOztJQUN0RCxzQ0FBdUQ7Ozs7O0lBT3JELG1DQUEwQjs7Ozs7SUFDMUIsZ0NBQXNDOzs7OztJQUN0Qyw2QkFBd0I7Ozs7O0lBQ3hCLHFDQUFzQzs7Ozs7SUFDdEMsMENBQXVEOzs7OztJQUN2RCxtREFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCwgSW5qZWN0b3IsIE9wdGlvbmFsLFxuICBPbkluaXQsIE9uRGVzdHJveSwgRG9DaGVjaywgZm9yd2FyZFJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb24sIEVsZW1lbnRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IsIE5HX1ZBTElEQVRPUlMsIE5nQ29udHJvbCwgTmdGb3JtLCBGb3JtR3JvdXBEaXJlY3RpdmUsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IEVycm9yU3RhdGVNYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ2FyZEV4cGlyYXRpb25WYWxpZGF0b3IgfSBmcm9tICcuLi92YWxpZGF0b3JzL25neC1jYy1kYXRlLnZhbGlkYXRvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1jYy1kYXRlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwibmd4LWNjLWRhdGUtY29udGFpbmVyXCIgW25nQ2xhc3NdPVwic3R5bGVDbGFzc1wiPlxuICAgICAgPGlucHV0XG4gICAgICBuZ3hOdW1iZXJPbmx5XG4gICAgICBuZ3hGb3JtYXREYXRlXG4gICAgICBtYXhsZW5ndGg9XCI3XCJcbiAgICAgIFtuZ0NsYXNzXT1cInsnbmd4LWNjLWRhdGUtaW5wdXQnOiAhZGVmYXVsdFN0eWxlc31cIlxuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyIHx8ICcnXCJcbiAgICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW3ZhbHVlXT1cImNhcmREYXRlXCJcbiAgICAgIChibHVyKT1cInVwZGF0ZU9uVG91Y2goKVwiXG4gICAgICAoaW5wdXQpPVwidXBkYXRlRGF0ZSgpXCJcbiAgICAgID5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbYFxuICAgIC5uZ3gtY2MtZGF0ZS1pbnB1dCB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBmb250OiBpbmhlcml0O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gIGBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENjRGF0ZUNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgIHVzZVZhbHVlOiBDYXJkRXhwaXJhdGlvblZhbGlkYXRvcixcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBNYXRGb3JtRmllbGRDb250cm9sLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ2NEYXRlQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIENjRGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBEb0NoZWNrLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgTWF0Rm9ybUZpZWxkQ29udHJvbDxDY0RhdGVDb21wb25lbnQ+IHtcblxuICBzdGF0aWMgbmV4dElkID0gMDtcbiAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG4gIHNldCB2YWx1ZShjYXJkTnVtYmVyKSB7XG4gICAgdGhpcy5fdmFsdWUgPSBjYXJkTnVtYmVyO1xuICAgIHRoaXMub25DaGFuZ2VzKGNhcmROdW1iZXIpO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBwbGFjZWhvbGRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7XG4gIH1cbiAgc2V0IHBsYWNlaG9sZGVyKHBsYWNlaG9sZGVyOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBlbXB0eSgpIHtcbiAgICByZXR1cm4gISghIXRoaXMuY2FyZERhdGUpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHJlcXVpcmVkKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlZDtcbiAgfVxuICBzZXQgcmVxdWlyZWQocmVxOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVxdWlyZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkocmVxKTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sICYmIHRoaXMubmdDb250cm9sLmRpc2FibGVkICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQoZGlzOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoZGlzKTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgZGVmYXVsdFN0eWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdFN0eWxlcztcbiAgfVxuICBzZXQgZGVmYXVsdFN0eWxlcyh2YWw6IGFueSkge1xuICAgIHRoaXMuX2RlZmF1bHRTdHlsZXMgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsKTtcbiAgfVxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcbiAgcHJpdmF0ZSBfdmFsdWU6IGFueTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXG4gIHByaXZhdGUgX3BsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcbiAgcHJpdmF0ZSBfZGVmYXVsdFN0eWxlcyA9IGZhbHNlO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcbiAgcHJpdmF0ZSBfcmVxdWlyZWQgPSBmYWxzZTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXG4gIHByaXZhdGUgX2Zvcm1TdWJtaXRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgbmdDb250cm9sOiBOZ0NvbnRyb2wgPSBudWxsO1xuICBmb2N1c2VkID0gZmFsc2U7XG4gIGVycm9yU3RhdGUgPSBmYWxzZTtcbiAgc3RhdGVDaGFuZ2VzID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgY2FyZERhdGUgPSAnJztcbiAgb25DaGFuZ2VzOiBhbnk7XG4gIG9uVG91Y2hlZDogYW55O1xuXG4gIEBIb3N0QmluZGluZygpIGlkID0gYG5neC1jYyR7Q2NEYXRlQ29tcG9uZW50Lm5leHRJZH1gO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1kZXNjcmliZWRieScpIGRlc2NyaWJlZEJ5ID0gJyc7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuZmxvYXRpbmcnKVxuICBnZXQgc2hvdWxkTGFiZWxGbG9hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5mb2N1c2VkIHx8ICF0aGlzLmVtcHR5O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBmbTogRm9jdXNNb25pdG9yLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgcGFyZW50Rm9ybTogTmdGb3JtLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgcGFyZW50Rm9ybUdyb3VwOiBGb3JtR3JvdXBEaXJlY3RpdmUsXG4gICAgcHJpdmF0ZSBkZWZhdWx0RXJyb3JTdGF0ZU1hdGNoZXI6IEVycm9yU3RhdGVNYXRjaGVyLFxuICApIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudEZvcm1Hcm91cCB8fCB0aGlzLnBhcmVudEZvcm07XG4gICAgaWYgKHBhcmVudCl7XG4gICAgICB0aGlzLl9mb3JtU3VibWl0U3Vic2NyaXB0aW9uID0gcGFyZW50Rm9ybUdyb3VwLm5nU3VibWl0LnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZm0ubW9uaXRvcihlbFJlZi5uYXRpdmVFbGVtZW50LCB0cnVlKS5zdWJzY3JpYmUob3JpZ2luID0+IHtcbiAgICAgIHRoaXMuZm9jdXNlZCA9ICEhb3JpZ2luO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5uZ0NvbnRyb2wgPSB0aGlzLmluamVjdG9yLmdldChOZ0NvbnRyb2wpO1xuICAgIGlmICh0aGlzLm5nQ29udHJvbCAhPT0gbnVsbCkge1xuICAgICAgLy8gU2V0dGluZyB0aGUgdmFsdWUgYWNjZXNzb3IgZGlyZWN0bHkgKGluc3RlYWQgb2YgdXNpbmdcbiAgICAgIC8vIHRoZSBwcm92aWRlcnMpIHRvIGF2b2lkIHJ1bm5pbmcgaW50byBhIGNpcmN1bGFyIGltcG9ydC5cbiAgICAgIHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3IgPSB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIG5nRG9DaGVjaygpIHtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wpIHtcbiAgICAgIHRoaXMudXBkYXRlRXJyb3JTdGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNhcmREYXRlID0gdmFsIHx8ICcnO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XG4gICAgdGhpcy5vbkNoYW5nZXMgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGVzY3JpYmVkQnlJZHMoaWRzOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuZGVzY3JpYmVkQnkgPSBpZHMuam9pbignICcpO1xuICB9XG5cbiAgb25Db250YWluZXJDbGljayhldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmICgoZXZlbnQudGFyZ2V0IGFzIEVsZW1lbnQpLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ2lucHV0Jykge1xuICAgICAgdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVEYXRlKCkge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xuICAgICAgdGhpcy5vbkNoYW5nZXModGhpcy5uZ0NvbnRyb2wuY29udHJvbC52YWx1ZSk7XG4gICAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgICB0aGlzLmNhcmREYXRlID0gdGhpcy5uZ0NvbnRyb2wuY29udHJvbC52YWx1ZTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVPblRvdWNoKCkge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xuICAgICAgdGhpcy5vblRvdWNoZWQodGhpcy5uZ0NvbnRyb2wuY29udHJvbC52YWx1ZSk7XG4gICAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgIHRoaXMuY2FyZERhdGUgPSB0aGlzLm5nQ29udHJvbC5jb250cm9sLnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9mb3JtU3VibWl0U3Vic2NyaXB0aW9uKSB0aGlzLl9mb3JtU3VibWl0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5mbS5zdG9wTW9uaXRvcmluZyh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLmNvbXBsZXRlKCk7XG4gIH1cblxuICB1cGRhdGVFcnJvclN0YXRlKCkge1xuICAgIGNvbnN0IG9sZFN0YXRlID0gdGhpcy5lcnJvclN0YXRlO1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50Rm9ybUdyb3VwIHx8IHRoaXMucGFyZW50Rm9ybTtcbiAgICBjb25zdCBtYXRjaGVyID0gdGhpcy5kZWZhdWx0RXJyb3JTdGF0ZU1hdGNoZXI7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMubmdDb250cm9sID8gdGhpcy5uZ0NvbnRyb2wuY29udHJvbCBhcyBGb3JtQ29udHJvbCA6IG51bGw7XG4gICAgY29uc3QgbmV3U3RhdGUgPSBtYXRjaGVyLmlzRXJyb3JTdGF0ZShjb250cm9sLCBwYXJlbnQpO1xuXG4gICAgaWYgKG5ld1N0YXRlICE9PSBvbGRTdGF0ZSkge1xuICAgICAgdGhpcy5lcnJvclN0YXRlID0gbmV3U3RhdGU7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfVxuICB9XG59XG4iXX0=