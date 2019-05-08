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
const ɵ0 = CardExpirationValidator;
export class CcDateComponent {
    /**
     * @param {?} injector
     * @param {?} elRef
     * @param {?} fm
     */
    constructor(injector, elRef, fm) {
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
        this.id = `ngx-cc${CcDateComponent.nextId}`;
        this.describedBy = '';
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
            this.errorState = this.ngControl.invalid && this.ngControl.touched;
            this.stateChanges.next();
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
        this.fm.stopMonitoring(this.elRef.nativeElement);
        this.stateChanges.complete();
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
    { type: FocusMonitor }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2MtZGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2MvIiwic291cmNlcyI6WyJsaWIvY2MtZGF0ZS9jYy1kYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFDWCxVQUFVLEVBQ3RDLGlCQUFpQixFQUFFLFVBQVUsRUFDOUIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJL0IsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7V0F1QzlELHVCQUF1QjtBQVd2QyxNQUFNLE9BQU8sZUFBZTs7Ozs7O0lBaUYxQixZQUNVLFFBQWtCLEVBQ2xCLEtBQThCLEVBQzlCLEVBQWdCO1FBRmhCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBeUI7UUFDOUIsT0FBRSxHQUFGLEVBQUUsQ0FBYzs7UUF2QmxCLGNBQVMsR0FBRyxLQUFLLENBQUM7O1FBRWxCLG1CQUFjLEdBQUcsS0FBSyxDQUFDOztRQUV2QixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzFCLGNBQVMsR0FBYyxJQUFJLENBQUM7UUFDNUIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUNuQyxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBSUMsT0FBRSxHQUFHLFNBQVMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBVXJELEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUU7WUFDdkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBckZELElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7OztJQUNELElBQUksS0FBSyxDQUFDLFVBQVU7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxJQUNJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFDRCxJQUFJLFdBQVcsQ0FBQyxXQUFtQjtRQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxJQUNJLEtBQUs7UUFDUCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxJQUNJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFDRCxJQUFJLFFBQVEsQ0FBQyxHQUFZO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsSUFDSSxRQUFRO1FBQ1YsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUN0RCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1NBQ2hDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBQ0QsSUFBSSxRQUFRLENBQUMsR0FBWTtRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELElBQ0ksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDOzs7OztJQUNELElBQUksYUFBYSxDQUFDLEdBQVE7UUFDeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBcUJELElBQ0ksZ0JBQWdCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDckMsQ0FBQzs7OztJQVlELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlDLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDM0Isd0RBQXdEO1lBQ3hELDBEQUEwRDtZQUMxRCxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDckM7SUFDSCxDQUFDOzs7O0lBRUQsU0FBUztRQUNQLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO1lBQ25FLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDMUI7SUFDSCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxHQUFXO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLEVBQU87UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsR0FBYTtRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFpQjtRQUNoQyxJQUFJLENBQUMsbUJBQUEsS0FBSyxDQUFDLE1BQU0sRUFBVyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLE9BQU8sRUFBRTtZQUMvRCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDekQ7SUFDSCxDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1NBQzlDO0lBQ0gsQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztTQUM5QztJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQy9CLENBQUM7O0FBbEpNLHNCQUFNLEdBQUcsQ0FBQyxDQUFDOztZQWxEbkIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQlQ7Z0JBV0QsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMsZUFBZSxFQUFDO3dCQUM5QyxLQUFLLEVBQUUsSUFBSTtxQkFDWjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsYUFBYTt3QkFDdEIsUUFBUSxJQUF5Qjt3QkFDakMsS0FBSyxFQUFFLElBQUk7cUJBQ1o7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLG1CQUFtQjt3QkFDNUIsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLEVBQUM7d0JBQzlDLEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2dCQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO3lCQTNCNUI7Ozs7Ozs7OztHQVNSO2FBbUJGOzs7O1lBN0RnQyxRQUFRO1lBRXBCLFVBQVU7WUFHdEIsWUFBWTs7O3lCQTREbEIsS0FBSztvQkFDTCxLQUFLOzBCQVVMLEtBQUs7b0JBU0wsS0FBSzt1QkFLTCxLQUFLO3VCQVNMLEtBQUs7NEJBWUwsS0FBSztpQkF5QkwsV0FBVzswQkFDWCxXQUFXLFNBQUMsdUJBQXVCOytCQUNuQyxXQUFXLFNBQUMsZ0JBQWdCOzs7O0lBMUU3Qix1QkFBa0I7O0lBQ2xCLHFDQUE0Qjs7Ozs7SUFzRDVCLGlDQUFvQjs7Ozs7SUFFcEIsdUNBQTZCOzs7OztJQUU3QixvQ0FBMEI7Ozs7O0lBRTFCLHlDQUErQjs7Ozs7SUFFL0Isb0NBQTBCOztJQUMxQixvQ0FBNEI7O0lBQzVCLGtDQUFnQjs7SUFDaEIscUNBQW1COztJQUNuQix1Q0FBbUM7O0lBQ25DLG1DQUFjOztJQUNkLG9DQUFlOztJQUNmLG9DQUFlOztJQUVmLDZCQUFzRDs7SUFDdEQsc0NBQXVEOzs7OztJQU9yRCxtQ0FBMEI7Ozs7O0lBQzFCLGdDQUFzQzs7Ozs7SUFDdEMsNkJBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQsIEluamVjdG9yLFxuICBPbkluaXQsIE9uRGVzdHJveSwgRG9DaGVjaywgZm9yd2FyZFJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb24sIEVsZW1lbnRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IsIE5HX1ZBTElEQVRPUlMsIE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB2YWxpZGF0b3IgZnJvbSAnY2FyZC12YWxpZGF0b3InO1xuXG5pbXBvcnQgeyBDYXJkRXhwaXJhdGlvblZhbGlkYXRvciB9IGZyb20gJy4uL3ZhbGlkYXRvcnMvbmd4LWNjLWRhdGUudmFsaWRhdG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWNjLWRhdGUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJuZ3gtY2MtZGF0ZS1jb250YWluZXJcIiBbbmdDbGFzc109XCJzdHlsZUNsYXNzXCI+XG4gICAgICA8aW5wdXRcbiAgICAgIG5neE51bWJlck9ubHlcbiAgICAgIG5neEZvcm1hdERhdGVcbiAgICAgIG1heGxlbmd0aD1cIjdcIlxuICAgICAgW25nQ2xhc3NdPVwieyduZ3gtY2MtZGF0ZS1pbnB1dCc6ICFkZWZhdWx0U3R5bGVzfVwiXG4gICAgICB0eXBlPVwidGV4dFwiXG4gICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXIgfHwgJydcIlxuICAgICAgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbdmFsdWVdPVwiY2FyZERhdGVcIlxuICAgICAgKGJsdXIpPVwidXBkYXRlT25Ub3VjaCgpXCJcbiAgICAgIChpbnB1dCk9XCJ1cGRhdGVEYXRlKClcIlxuICAgICAgPlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAgLm5neC1jYy1kYXRlLWlucHV0IHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgYF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ2NEYXRlQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgdXNlVmFsdWU6IENhcmRFeHBpcmF0aW9uVmFsaWRhdG9yLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE1hdEZvcm1GaWVsZENvbnRyb2wsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDY0RhdGVDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQ2NEYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIERvQ2hlY2ssIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBNYXRGb3JtRmllbGRDb250cm9sPENjRGF0ZUNvbXBvbmVudD4ge1xuXG4gIHN0YXRpYyBuZXh0SWQgPSAwO1xuICBASW5wdXQoKSBzdHlsZUNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKGNhcmROdW1iZXIpIHtcbiAgICB0aGlzLl92YWx1ZSA9IGNhcmROdW1iZXI7XG4gICAgdGhpcy5vbkNoYW5nZXMoY2FyZE51bWJlcik7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHBsYWNlaG9sZGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9wbGFjZWhvbGRlcjtcbiAgfVxuICBzZXQgcGxhY2Vob2xkZXIocGxhY2Vob2xkZXI6IHN0cmluZykge1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGVtcHR5KCkge1xuICAgIHJldHVybiAhKCEhdGhpcy5jYXJkRGF0ZSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgcmVxdWlyZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVkO1xuICB9XG4gIHNldCByZXF1aXJlZChyZXE6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXF1aXJlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShyZXEpO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wgJiYgdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLm5nQ29udHJvbC5kaXNhYmxlZDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZChkaXM6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShkaXMpO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBkZWZhdWx0U3R5bGVzKCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0U3R5bGVzO1xuICB9XG4gIHNldCBkZWZhdWx0U3R5bGVzKHZhbDogYW55KSB7XG4gICAgdGhpcy5fZGVmYXVsdFN0eWxlcyA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWwpO1xuICB9XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxuICBwcml2YXRlIF92YWx1ZTogYW55O1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcbiAgcHJpdmF0ZSBfcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxuICBwcml2YXRlIF9kZWZhdWx0U3R5bGVzID0gZmFsc2U7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxuICBwcml2YXRlIF9yZXF1aXJlZCA9IGZhbHNlO1xuICBuZ0NvbnRyb2w6IE5nQ29udHJvbCA9IG51bGw7XG4gIGZvY3VzZWQgPSBmYWxzZTtcbiAgZXJyb3JTdGF0ZSA9IGZhbHNlO1xuICBzdGF0ZUNoYW5nZXMgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBjYXJkRGF0ZSA9ICcnO1xuICBvbkNoYW5nZXM6IGFueTtcbiAgb25Ub3VjaGVkOiBhbnk7XG5cbiAgQEhvc3RCaW5kaW5nKCkgaWQgPSBgbmd4LWNjJHtDY0RhdGVDb21wb25lbnQubmV4dElkfWA7XG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWRlc2NyaWJlZGJ5JykgZGVzY3JpYmVkQnkgPSAnJztcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mbG9hdGluZycpXG4gIGdldCBzaG91bGRMYWJlbEZsb2F0KCkge1xuICAgIHJldHVybiB0aGlzLmZvY3VzZWQgfHwgIXRoaXMuZW1wdHk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIGZtOiBGb2N1c01vbml0b3IpIHtcbiAgICBmbS5tb25pdG9yKGVsUmVmLm5hdGl2ZUVsZW1lbnQsIHRydWUpLnN1YnNjcmliZShvcmlnaW4gPT4ge1xuICAgICAgdGhpcy5mb2N1c2VkID0gISFvcmlnaW47XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm5nQ29udHJvbCA9IHRoaXMuaW5qZWN0b3IuZ2V0KE5nQ29udHJvbCk7XG4gICAgaWYgKHRoaXMubmdDb250cm9sICE9PSBudWxsKSB7XG4gICAgICAvLyBTZXR0aW5nIHRoZSB2YWx1ZSBhY2Nlc3NvciBkaXJlY3RseSAoaW5zdGVhZCBvZiB1c2luZ1xuICAgICAgLy8gdGhlIHByb3ZpZGVycykgdG8gYXZvaWQgcnVubmluZyBpbnRvIGEgY2lyY3VsYXIgaW1wb3J0LlxuICAgICAgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xuICAgICAgdGhpcy5lcnJvclN0YXRlID0gdGhpcy5uZ0NvbnRyb2wuaW52YWxpZCAmJiB0aGlzLm5nQ29udHJvbC50b3VjaGVkO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNhcmREYXRlID0gdmFsIHx8ICcnO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XG4gICAgdGhpcy5vbkNoYW5nZXMgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGVzY3JpYmVkQnlJZHMoaWRzOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuZGVzY3JpYmVkQnkgPSBpZHMuam9pbignICcpO1xuICB9XG5cbiAgb25Db250YWluZXJDbGljayhldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmICgoZXZlbnQudGFyZ2V0IGFzIEVsZW1lbnQpLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ2lucHV0Jykge1xuICAgICAgdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVEYXRlKCkge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xuICAgICAgdGhpcy5vbkNoYW5nZXModGhpcy5uZ0NvbnRyb2wuY29udHJvbC52YWx1ZSk7XG4gICAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgICB0aGlzLmNhcmREYXRlID0gdGhpcy5uZ0NvbnRyb2wuY29udHJvbC52YWx1ZTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVPblRvdWNoKCkge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xuICAgICAgdGhpcy5vblRvdWNoZWQodGhpcy5uZ0NvbnRyb2wuY29udHJvbC52YWx1ZSk7XG4gICAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgIHRoaXMuY2FyZERhdGUgPSB0aGlzLm5nQ29udHJvbC5jb250cm9sLnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZm0uc3RvcE1vbml0b3JpbmcodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5jb21wbGV0ZSgpO1xuICB9XG5cbn1cbiJdfQ==