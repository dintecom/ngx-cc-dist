/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, Input, Injector, Optional, forwardRef, ViewEncapsulation, ElementRef } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, NgControl, NgForm, FormGroupDirective } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { NgxCcService } from './ngx-cc.service';
import { CardValidator } from './validators/ngx-cc.validator';
import { cardIcons } from './ngx-cc.icons';
const ɵ0 = CardValidator;
export class NgxCcComponent {
    /**
     * @param {?} injector
     * @param {?} elRef
     * @param {?} fm
     * @param {?} parentForm
     * @param {?} parentFormGroup
     * @param {?} defaultErrorStateMatcher
     * @param {?} creditCardService
     */
    constructor(injector, elRef, fm, parentForm, parentFormGroup, defaultErrorStateMatcher, creditCardService) {
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
        this.id = `ngx-cc${NgxCcComponent.nextId}`;
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
        this.onChange(cardNumber);
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
        /** @type {?} */
        const value = this.cardNumber.replace(/\s/g, '');
        return !(!!value);
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
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.cardNumber = value || '';
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
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
     * @param {?} event
     * @return {?}
     */
    updateIcon(event) {
        /** @type {?} */
        const value = ((/** @type {?} */ (event.target))).value.replace(/\s/g, '');
        /** @type {?} */
        let cardType = 'default';
        this.onChange(value);
        this.ngControl.control.markAsDirty();
        this.card = this.creditCardService.getCardType(value);
        if (this.card) {
            this.maxNumberLimit = Math.max(...this.card.lengths);
            cardType = this.card.type;
        }
        this.cardNumber = this.creditCardService.prettyCardNumber(value, cardType);
        this.cardIcon = !value ? cardIcons.default : cardIcons[cardType];
    }
    /**
     * @return {?}
     */
    updateOnTouch() {
        if (this.ngControl) {
            this.onTouched(this.ngControl.control.value);
            this.ngControl.control.markAsTouched();
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
NgxCcComponent.nextId = 0;
NgxCcComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-cc',
                template: `
      <div class="ngx-cc-container" [ngClass]="styleClass">
        <input *ngIf="!defaultStyles"
        ngxNumberOnly
        [ngxMaxLength]="maxNumberLimit"
        class="ngx-cc-input"
        type="text"
        [required]="required"
        [disabled]="disabled"
        [value]="cardNumber"
        (blur)="updateOnTouch()"
        (input)="updateIcon($event)" />

        <input *ngIf="defaultStyles"
        ngxNumberOnly
        [ngxMaxLength]="maxNumberLimit"
        class="ngx-cc-input-default"
        type="text"
        [placeholder]="placeholder"
        [required]="required"
        [disabled]="disabled"
        [value]="cardNumber"
        [ngStyle]="{'background-image': 'url(' + cardIcon + ')'}"
        (blur)="updateOnTouch()"
        (input)="updateIcon($event)" />
        <img *ngIf="!defaultStyles" class="ngx-cc-suffix" [src]="cardIcon" />
      </div>
      `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => NgxCcComponent)),
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
                        () => NgxCcComponent)),
                        multi: true
                    }
                ],
                encapsulation: ViewEncapsulation.None,
                styles: [`
    .ngx-cc-container {
      display: flex;
      position: relative;
    }
    .ngx-cc-input {
      border: none;
      background: none;
      padding: 0;
      outline: none;
      font: inherit;
      text-align: left;
    }
    .ngx-cc-input-default {
      background-position: 100%;
      background-repeat: no-repeat;
    }
    .ngx-cc-form-field div.mat-form-field-wrapper div.mat-form-field-flex {
      align-items: flex-end;
    }
    .ngx-cc-suffix {
      position: absolute;
      top: -1.5rem;
      right: 0;
    }
    `]
            }] }
];
/** @nocollapse */
NgxCcComponent.ctorParameters = () => [
    { type: Injector },
    { type: ElementRef },
    { type: FocusMonitor },
    { type: NgForm, decorators: [{ type: Optional }] },
    { type: FormGroupDirective, decorators: [{ type: Optional }] },
    { type: ErrorStateMatcher },
    { type: NgxCcService }
];
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
    /**
     * @type {?}
     * @private
     */
    NgxCcComponent.prototype._formSubmitSubscription;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNjLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jYy8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtY2MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFDckIsVUFBVSxFQUN0QyxpQkFBaUIsRUFBRSxVQUFVLEVBQzlCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUFlLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUksT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFFN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWhELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7V0F3QzNCLGFBQWE7QUF1QzdCLE1BQU0sT0FBTyxjQUFjOzs7Ozs7Ozs7O0lBc0Z6QixZQUNVLFFBQWtCLEVBQ2xCLEtBQThCLEVBQzlCLEVBQWdCLEVBQ0osVUFBa0IsRUFDbEIsZUFBbUMsRUFDL0Msd0JBQTJDLEVBQzNDLGlCQUErQjtRQU4vQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFVBQUssR0FBTCxLQUFLLENBQXlCO1FBQzlCLE9BQUUsR0FBRixFQUFFLENBQWM7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LG9DQUFtQjs7SUFDbkIsb0NBQWdCOztJQUNoQixrQ0FBNkI7O0lBQzdCLDhCQUFpQjs7SUFDakIsa0NBQWM7O0lBQ2QsbUNBQWU7O0lBQ2Ysc0NBQW1DOztJQUNuQyx3Q0FBdUI7O0lBQ3ZCLDRCQUFxRDs7SUFDckQscUNBQXVEOzs7OztJQU9yRCxrQ0FBMEI7Ozs7O0lBQzFCLCtCQUFzQzs7Ozs7SUFDdEMsNEJBQXdCOzs7OztJQUN4QixvQ0FBc0M7Ozs7O0lBQ3RDLHlDQUF1RDs7Ozs7SUFDdkQsa0RBQW1EOzs7OztJQUNuRCwyQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCwgSW5qZWN0b3IsIE9wdGlvbmFsLFxuICBPbkluaXQsIE9uRGVzdHJveSwgRG9DaGVjaywgZm9yd2FyZFJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb24sIEVsZW1lbnRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SLCBOR19WQUxJREFUT1JTLCBOZ0NvbnRyb2wsIE5nRm9ybSwgRm9ybUdyb3VwRGlyZWN0aXZlLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEVycm9yU3RhdGVNYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTmd4Q2NTZXJ2aWNlIH0gZnJvbSAnLi9uZ3gtY2Muc2VydmljZSc7XG5pbXBvcnQgeyBDYXJkQ29uZmlnIH0gZnJvbSAnLi9uZ3gtY2MubW9kZWwnO1xuaW1wb3J0IHsgQ2FyZFZhbGlkYXRvciB9IGZyb20gJy4vdmFsaWRhdG9ycy9uZ3gtY2MudmFsaWRhdG9yJztcbmltcG9ydCB7IGNhcmRJY29ucyB9IGZyb20gJy4vbmd4LWNjLmljb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWNjJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJuZ3gtY2MtY29udGFpbmVyXCIgW25nQ2xhc3NdPVwic3R5bGVDbGFzc1wiPlxuICAgICAgICA8aW5wdXQgKm5nSWY9XCIhZGVmYXVsdFN0eWxlc1wiXG4gICAgICAgIG5neE51bWJlck9ubHlcbiAgICAgICAgW25neE1heExlbmd0aF09XCJtYXhOdW1iZXJMaW1pdFwiXG4gICAgICAgIGNsYXNzPVwibmd4LWNjLWlucHV0XCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbdmFsdWVdPVwiY2FyZE51bWJlclwiXG4gICAgICAgIChibHVyKT1cInVwZGF0ZU9uVG91Y2goKVwiXG4gICAgICAgIChpbnB1dCk9XCJ1cGRhdGVJY29uKCRldmVudClcIiAvPlxuXG4gICAgICAgIDxpbnB1dCAqbmdJZj1cImRlZmF1bHRTdHlsZXNcIlxuICAgICAgICBuZ3hOdW1iZXJPbmx5XG4gICAgICAgIFtuZ3hNYXhMZW5ndGhdPVwibWF4TnVtYmVyTGltaXRcIlxuICAgICAgICBjbGFzcz1cIm5neC1jYy1pbnB1dC1kZWZhdWx0XCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbdmFsdWVdPVwiY2FyZE51bWJlclwiXG4gICAgICAgIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJyArIGNhcmRJY29uICsgJyknfVwiXG4gICAgICAgIChibHVyKT1cInVwZGF0ZU9uVG91Y2goKVwiXG4gICAgICAgIChpbnB1dCk9XCJ1cGRhdGVJY29uKCRldmVudClcIiAvPlxuICAgICAgICA8aW1nICpuZ0lmPVwiIWRlZmF1bHRTdHlsZXNcIiBjbGFzcz1cIm5neC1jYy1zdWZmaXhcIiBbc3JjXT1cImNhcmRJY29uXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgYCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOZ3hDY0NvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgIHVzZVZhbHVlOiBDYXJkVmFsaWRhdG9yLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE1hdEZvcm1GaWVsZENvbnRyb2wsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOZ3hDY0NvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXSxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgIC5uZ3gtY2MtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIC5uZ3gtY2MtaW5wdXQge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgZm9udDogaW5oZXJpdDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICAgIC5uZ3gtY2MtaW5wdXQtZGVmYXVsdCB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB9XG4gICAgLm5neC1jYy1mb3JtLWZpZWxkIGRpdi5tYXQtZm9ybS1maWVsZC13cmFwcGVyIGRpdi5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICB9XG4gICAgLm5neC1jYy1zdWZmaXgge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtMS41cmVtO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICAgIGBcbiAgXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hDY0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBEb0NoZWNrLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgTWF0Rm9ybUZpZWxkQ29udHJvbDxOZ3hDY0NvbXBvbmVudD4ge1xuXG4gIHN0YXRpYyBuZXh0SWQgPSAwO1xuICBASW5wdXQoKSBzdHlsZUNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKGNhcmROdW1iZXIpIHtcbiAgICB0aGlzLl92YWx1ZSA9IGNhcmROdW1iZXI7XG4gICAgdGhpcy5vbkNoYW5nZShjYXJkTnVtYmVyKTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgcGxhY2Vob2xkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyO1xuICB9XG4gIHNldCBwbGFjZWhvbGRlcihwbGFjZWhvbGRlcjogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgZW1wdHkoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmNhcmROdW1iZXIucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICByZXR1cm4gISghIXZhbHVlKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCByZXF1aXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7XG4gIH1cbiAgc2V0IHJlcXVpcmVkKHJlcTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHJlcSk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbCAmJiB0aGlzLm5nQ29udHJvbC5kaXNhYmxlZCAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMubmdDb250cm9sLmRpc2FibGVkO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKGRpczogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KGRpcyk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGRlZmF1bHRTdHlsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRTdHlsZXM7XG4gIH1cbiAgc2V0IGRlZmF1bHRTdHlsZXModmFsOiBhbnkpIHtcbiAgICB0aGlzLl9kZWZhdWx0U3R5bGVzID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbCk7XG4gIH1cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXG4gIHByaXZhdGUgX3ZhbHVlOiBhbnk7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxuICBwcml2YXRlIF9wbGFjZWhvbGRlcjogc3RyaW5nO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXG4gIHByaXZhdGUgX2RlZmF1bHRTdHlsZXMgPSBmYWxzZTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXG4gIHByaXZhdGUgX3JlcXVpcmVkID0gZmFsc2U7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxuICBwcml2YXRlIF9mb3JtU3VibWl0U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIG5nQ29udHJvbDogTmdDb250cm9sID0gbnVsbDtcbiAgZm9jdXNlZCA9IGZhbHNlO1xuICBlcnJvclN0YXRlID0gZmFsc2U7XG4gIGNhcmROdW1iZXIgPSAnJztcbiAgY2FyZEljb24gPSBjYXJkSWNvbnMuZGVmYXVsdDtcbiAgY2FyZDogQ2FyZENvbmZpZztcbiAgb25DaGFuZ2U6IGFueTtcbiAgb25Ub3VjaGVkOiBhbnk7XG4gIHN0YXRlQ2hhbmdlcyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIG1heE51bWJlckxpbWl0OiBudW1iZXI7XG4gIEBIb3N0QmluZGluZygpIGlkID0gYG5neC1jYyR7Tmd4Q2NDb21wb25lbnQubmV4dElkfWA7XG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWRlc2NyaWJlZGJ5JykgZGVzY3JpYmVkQnkgPSAnJztcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mbG9hdGluZycpXG4gIGdldCBzaG91bGRMYWJlbEZsb2F0KCkge1xuICAgIHJldHVybiB0aGlzLmZvY3VzZWQgfHwgIXRoaXMuZW1wdHk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIGZtOiBGb2N1c01vbml0b3IsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBwYXJlbnRGb3JtOiBOZ0Zvcm0sXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBwYXJlbnRGb3JtR3JvdXA6IEZvcm1Hcm91cERpcmVjdGl2ZSxcbiAgICBwcml2YXRlIGRlZmF1bHRFcnJvclN0YXRlTWF0Y2hlcjogRXJyb3JTdGF0ZU1hdGNoZXIsXG4gICAgcHJpdmF0ZSBjcmVkaXRDYXJkU2VydmljZTogTmd4Q2NTZXJ2aWNlXG4gICkge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50Rm9ybUdyb3VwIHx8IHRoaXMucGFyZW50Rm9ybTtcbiAgICBpZiAocGFyZW50KXtcbiAgICAgIHRoaXMuX2Zvcm1TdWJtaXRTdWJzY3JpcHRpb24gPSBwYXJlbnRGb3JtR3JvdXAubmdTdWJtaXQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmbS5tb25pdG9yKGVsUmVmLm5hdGl2ZUVsZW1lbnQsIHRydWUpLnN1YnNjcmliZShvcmlnaW4gPT4ge1xuICAgICAgdGhpcy5mb2N1c2VkID0gISFvcmlnaW47XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm5nQ29udHJvbCA9IHRoaXMuaW5qZWN0b3IuZ2V0KE5nQ29udHJvbCk7XG4gICAgaWYgKHRoaXMubmdDb250cm9sICE9PSBudWxsKSB7XG4gICAgICAvLyBTZXR0aW5nIHRoZSB2YWx1ZSBhY2Nlc3NvciBkaXJlY3RseSAoaW5zdGVhZCBvZiB1c2luZ1xuICAgICAgLy8gdGhlIHByb3ZpZGVycykgdG8gYXZvaWQgcnVubmluZyBpbnRvIGEgY2lyY3VsYXIgaW1wb3J0LlxuICAgICAgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xuICAgICAgdGhpcy51cGRhdGVFcnJvclN0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jYXJkTnVtYmVyID0gdmFsdWUgfHwgJyc7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERlc2NyaWJlZEJ5SWRzKGlkczogc3RyaW5nW10pIHtcbiAgICB0aGlzLmRlc2NyaWJlZEJ5ID0gaWRzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIG9uQ29udGFpbmVyQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAoKGV2ZW50LnRhcmdldCBhcyBFbGVtZW50KS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdpbnB1dCcpIHtcbiAgICAgIHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlSWNvbihldmVudDogRXZlbnQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICBsZXQgY2FyZFR5cGUgPSAnZGVmYXVsdCc7XG4gICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgIHRoaXMuY2FyZCA9IHRoaXMuY3JlZGl0Q2FyZFNlcnZpY2UuZ2V0Q2FyZFR5cGUodmFsdWUpO1xuICAgIGlmICh0aGlzLmNhcmQpIHtcbiAgICAgIHRoaXMubWF4TnVtYmVyTGltaXQgPSBNYXRoLm1heCguLi50aGlzLmNhcmQubGVuZ3Rocyk7XG4gICAgICBjYXJkVHlwZSA9IHRoaXMuY2FyZC50eXBlO1xuICAgIH1cbiAgICB0aGlzLmNhcmROdW1iZXIgPSB0aGlzLmNyZWRpdENhcmRTZXJ2aWNlLnByZXR0eUNhcmROdW1iZXIodmFsdWUsIGNhcmRUeXBlKTtcbiAgICB0aGlzLmNhcmRJY29uID0gIXZhbHVlID8gY2FyZEljb25zLmRlZmF1bHQgOiBjYXJkSWNvbnNbY2FyZFR5cGVdO1xuICB9XG5cbiAgdXBkYXRlT25Ub3VjaCgpIHtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wpIHtcbiAgICAgIHRoaXMub25Ub3VjaGVkKHRoaXMubmdDb250cm9sLmNvbnRyb2wudmFsdWUpO1xuICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX2Zvcm1TdWJtaXRTdWJzY3JpcHRpb24pIHRoaXMuX2Zvcm1TdWJtaXRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmZtLnN0b3BNb25pdG9yaW5nKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMuY29tcGxldGUoKTtcbiAgfVxuXG4gIHVwZGF0ZUVycm9yU3RhdGUoKSB7XG4gICAgY29uc3Qgb2xkU3RhdGUgPSB0aGlzLmVycm9yU3RhdGU7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnRGb3JtR3JvdXAgfHwgdGhpcy5wYXJlbnRGb3JtO1xuICAgIGNvbnN0IG1hdGNoZXIgPSB0aGlzLmRlZmF1bHRFcnJvclN0YXRlTWF0Y2hlcjtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5uZ0NvbnRyb2wgPyB0aGlzLm5nQ29udHJvbC5jb250cm9sIGFzIEZvcm1Db250cm9sIDogbnVsbDtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IG1hdGNoZXIuaXNFcnJvclN0YXRlKGNvbnRyb2wsIHBhcmVudCk7XG5cbiAgICBpZiAobmV3U3RhdGUgIT09IG9sZFN0YXRlKSB7XG4gICAgICB0aGlzLmVycm9yU3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==