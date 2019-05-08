/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, Input, Injector, forwardRef, ViewEncapsulation, ElementRef } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, NgControl } from '@angular/forms';
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
     * @param {?} creditCardService
     */
    constructor(injector, elRef, fm, creditCardService) {
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
        this.stateChanges = new Subject();
        this.id = `ngx-cc${NgxCcComponent.nextId}`;
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
            this.errorState = this.ngControl.invalid && this.ngControl.touched;
            this.stateChanges.next();
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
        this.fm.stopMonitoring(this.elRef.nativeElement);
        this.stateChanges.complete();
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
    NgxCcComponent.prototype.creditCardService;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNjLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jYy8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtY2MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUNYLFVBQVUsRUFDdEMsaUJBQWlCLEVBQUUsVUFBVSxFQUM5QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFaEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztXQXdDM0IsYUFBYTtBQXVDN0IsTUFBTSxPQUFPLGNBQWM7Ozs7Ozs7SUFvRnpCLFlBQ1UsUUFBa0IsRUFDbEIsS0FBOEIsRUFDOUIsRUFBZ0IsRUFDaEIsaUJBQStCO1FBSC9CLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBeUI7UUFDOUIsT0FBRSxHQUFGLEVBQUUsQ0FBYztRQUNoQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWM7O1FBMUJqQyxjQUFTLEdBQUcsS0FBSyxDQUFDOztRQUVsQixtQkFBYyxHQUFHLEtBQUssQ0FBQzs7UUFFdkIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUMx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Q2hCLG9DQUFtQjs7SUFDbkIsb0NBQWdCOztJQUNoQixrQ0FBNkI7O0lBQzdCLDhCQUFpQjs7SUFDakIsa0NBQWM7O0lBQ2QsbUNBQWU7O0lBQ2Ysc0NBQW1DOztJQUNuQyx3Q0FBdUI7O0lBQ3ZCLDRCQUFxRDs7SUFDckQscUNBQXVEOzs7OztJQU9yRCxrQ0FBMEI7Ozs7O0lBQzFCLCtCQUFzQzs7Ozs7SUFDdEMsNEJBQXdCOzs7OztJQUN4QiwyQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCwgSW5qZWN0b3IsXG4gIE9uSW5pdCwgT25EZXN0cm95LCBEb0NoZWNrLCBmb3J3YXJkUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvbiwgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IsIE5HX1ZBTElEQVRPUlMsIE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTmd4Q2NTZXJ2aWNlIH0gZnJvbSAnLi9uZ3gtY2Muc2VydmljZSc7XG5pbXBvcnQgeyBDYXJkQ29uZmlnIH0gZnJvbSAnLi9uZ3gtY2MubW9kZWwnO1xuaW1wb3J0IHsgQ2FyZFZhbGlkYXRvciB9IGZyb20gJy4vdmFsaWRhdG9ycy9uZ3gtY2MudmFsaWRhdG9yJztcbmltcG9ydCB7IGNhcmRJY29ucyB9IGZyb20gJy4vbmd4LWNjLmljb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWNjJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJuZ3gtY2MtY29udGFpbmVyXCIgW25nQ2xhc3NdPVwic3R5bGVDbGFzc1wiPlxuICAgICAgICA8aW5wdXQgKm5nSWY9XCIhZGVmYXVsdFN0eWxlc1wiXG4gICAgICAgIG5neE51bWJlck9ubHlcbiAgICAgICAgW25neE1heExlbmd0aF09XCJtYXhOdW1iZXJMaW1pdFwiXG4gICAgICAgIGNsYXNzPVwibmd4LWNjLWlucHV0XCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbdmFsdWVdPVwiY2FyZE51bWJlclwiXG4gICAgICAgIChibHVyKT1cInVwZGF0ZU9uVG91Y2goKVwiXG4gICAgICAgIChpbnB1dCk9XCJ1cGRhdGVJY29uKCRldmVudClcIiAvPlxuXG4gICAgICAgIDxpbnB1dCAqbmdJZj1cImRlZmF1bHRTdHlsZXNcIlxuICAgICAgICBuZ3hOdW1iZXJPbmx5XG4gICAgICAgIFtuZ3hNYXhMZW5ndGhdPVwibWF4TnVtYmVyTGltaXRcIlxuICAgICAgICBjbGFzcz1cIm5neC1jYy1pbnB1dC1kZWZhdWx0XCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbdmFsdWVdPVwiY2FyZE51bWJlclwiXG4gICAgICAgIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJyArIGNhcmRJY29uICsgJyknfVwiXG4gICAgICAgIChibHVyKT1cInVwZGF0ZU9uVG91Y2goKVwiXG4gICAgICAgIChpbnB1dCk9XCJ1cGRhdGVJY29uKCRldmVudClcIiAvPlxuICAgICAgICA8aW1nICpuZ0lmPVwiIWRlZmF1bHRTdHlsZXNcIiBjbGFzcz1cIm5neC1jYy1zdWZmaXhcIiBbc3JjXT1cImNhcmRJY29uXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgYCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOZ3hDY0NvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgIHVzZVZhbHVlOiBDYXJkVmFsaWRhdG9yLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE1hdEZvcm1GaWVsZENvbnRyb2wsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOZ3hDY0NvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXSxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgIC5uZ3gtY2MtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIC5uZ3gtY2MtaW5wdXQge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgZm9udDogaW5oZXJpdDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICAgIC5uZ3gtY2MtaW5wdXQtZGVmYXVsdCB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB9XG4gICAgLm5neC1jYy1mb3JtLWZpZWxkIGRpdi5tYXQtZm9ybS1maWVsZC13cmFwcGVyIGRpdi5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICB9XG4gICAgLm5neC1jYy1zdWZmaXgge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtMS41cmVtO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICAgIGBcbiAgXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hDY0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBEb0NoZWNrLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgTWF0Rm9ybUZpZWxkQ29udHJvbDxOZ3hDY0NvbXBvbmVudD4ge1xuXG4gIHN0YXRpYyBuZXh0SWQgPSAwO1xuICBASW5wdXQoKSBzdHlsZUNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKGNhcmROdW1iZXIpIHtcbiAgICB0aGlzLl92YWx1ZSA9IGNhcmROdW1iZXI7XG4gICAgdGhpcy5vbkNoYW5nZShjYXJkTnVtYmVyKTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgcGxhY2Vob2xkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyO1xuICB9XG4gIHNldCBwbGFjZWhvbGRlcihwbGFjZWhvbGRlcjogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgZW1wdHkoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmNhcmROdW1iZXIucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICByZXR1cm4gISghIXZhbHVlKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCByZXF1aXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7XG4gIH1cbiAgc2V0IHJlcXVpcmVkKHJlcTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHJlcSk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbCAmJiB0aGlzLm5nQ29udHJvbC5kaXNhYmxlZCAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMubmdDb250cm9sLmRpc2FibGVkO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKGRpczogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KGRpcyk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGRlZmF1bHRTdHlsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRTdHlsZXM7XG4gIH1cbiAgc2V0IGRlZmF1bHRTdHlsZXModmFsOiBhbnkpIHtcbiAgICB0aGlzLl9kZWZhdWx0U3R5bGVzID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbCk7XG4gIH1cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXG4gIHByaXZhdGUgX3ZhbHVlOiBhbnk7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxuICBwcml2YXRlIF9wbGFjZWhvbGRlcjogc3RyaW5nO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXG4gIHByaXZhdGUgX2RlZmF1bHRTdHlsZXMgPSBmYWxzZTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXG4gIHByaXZhdGUgX3JlcXVpcmVkID0gZmFsc2U7XG4gIG5nQ29udHJvbDogTmdDb250cm9sID0gbnVsbDtcbiAgZm9jdXNlZCA9IGZhbHNlO1xuICBlcnJvclN0YXRlID0gZmFsc2U7XG4gIGNhcmROdW1iZXIgPSAnJztcbiAgY2FyZEljb24gPSBjYXJkSWNvbnMuZGVmYXVsdDtcbiAgY2FyZDogQ2FyZENvbmZpZztcbiAgb25DaGFuZ2U6IGFueTtcbiAgb25Ub3VjaGVkOiBhbnk7XG4gIHN0YXRlQ2hhbmdlcyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIG1heE51bWJlckxpbWl0OiBudW1iZXI7XG4gIEBIb3N0QmluZGluZygpIGlkID0gYG5neC1jYyR7Tmd4Q2NDb21wb25lbnQubmV4dElkfWA7XG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWRlc2NyaWJlZGJ5JykgZGVzY3JpYmVkQnkgPSAnJztcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mbG9hdGluZycpXG4gIGdldCBzaG91bGRMYWJlbEZsb2F0KCkge1xuICAgIHJldHVybiB0aGlzLmZvY3VzZWQgfHwgIXRoaXMuZW1wdHk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIGZtOiBGb2N1c01vbml0b3IsXG4gICAgcHJpdmF0ZSBjcmVkaXRDYXJkU2VydmljZTogTmd4Q2NTZXJ2aWNlKSB7XG5cbiAgICBmbS5tb25pdG9yKGVsUmVmLm5hdGl2ZUVsZW1lbnQsIHRydWUpLnN1YnNjcmliZShvcmlnaW4gPT4ge1xuICAgICAgdGhpcy5mb2N1c2VkID0gISFvcmlnaW47XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm5nQ29udHJvbCA9IHRoaXMuaW5qZWN0b3IuZ2V0KE5nQ29udHJvbCk7XG4gICAgaWYgKHRoaXMubmdDb250cm9sICE9PSBudWxsKSB7XG4gICAgICAvLyBTZXR0aW5nIHRoZSB2YWx1ZSBhY2Nlc3NvciBkaXJlY3RseSAoaW5zdGVhZCBvZiB1c2luZ1xuICAgICAgLy8gdGhlIHByb3ZpZGVycykgdG8gYXZvaWQgcnVubmluZyBpbnRvIGEgY2lyY3VsYXIgaW1wb3J0LlxuICAgICAgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xuICAgICAgdGhpcy5lcnJvclN0YXRlID0gdGhpcy5uZ0NvbnRyb2wuaW52YWxpZCAmJiB0aGlzLm5nQ29udHJvbC50b3VjaGVkO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuY2FyZE51bWJlciA9IHZhbHVlIHx8ICcnO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREZXNjcmliZWRCeUlkcyhpZHM6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5kZXNjcmliZWRCeSA9IGlkcy5qb2luKCcgJyk7XG4gIH1cblxuICBvbkNvbnRhaW5lckNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKChldmVudC50YXJnZXQgYXMgRWxlbWVudCkudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnaW5wdXQnKSB7XG4gICAgICB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUljb24oZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3QgdmFsdWUgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgbGV0IGNhcmRUeXBlID0gJ2RlZmF1bHQnO1xuICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICB0aGlzLmNhcmQgPSB0aGlzLmNyZWRpdENhcmRTZXJ2aWNlLmdldENhcmRUeXBlKHZhbHVlKTtcbiAgICBpZiAodGhpcy5jYXJkKSB7XG4gICAgICB0aGlzLm1heE51bWJlckxpbWl0ID0gTWF0aC5tYXgoLi4udGhpcy5jYXJkLmxlbmd0aHMpO1xuICAgICAgY2FyZFR5cGUgPSB0aGlzLmNhcmQudHlwZTtcbiAgICB9XG4gICAgdGhpcy5jYXJkTnVtYmVyID0gdGhpcy5jcmVkaXRDYXJkU2VydmljZS5wcmV0dHlDYXJkTnVtYmVyKHZhbHVlLCBjYXJkVHlwZSk7XG4gICAgdGhpcy5jYXJkSWNvbiA9ICF2YWx1ZSA/IGNhcmRJY29ucy5kZWZhdWx0IDogY2FyZEljb25zW2NhcmRUeXBlXTtcbiAgfVxuXG4gIHVwZGF0ZU9uVG91Y2goKSB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sKSB7XG4gICAgICB0aGlzLm9uVG91Y2hlZCh0aGlzLm5nQ29udHJvbC5jb250cm9sLnZhbHVlKTtcbiAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZm0uc3RvcE1vbml0b3JpbmcodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5jb21wbGV0ZSgpO1xuICB9XG5cbn1cbiJdfQ==