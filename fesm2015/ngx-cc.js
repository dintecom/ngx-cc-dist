import { Injectable, ɵɵdefineInjectable, Component, forwardRef, ViewEncapsulation, Injector, ElementRef, Optional, Input, HostBinding, Directive, HostListener, NgModule } from '@angular/core';
import creditCardType from 'credit-card-type';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { NgControl, NG_VALUE_ACCESSOR, NG_VALIDATORS, NgForm, FormGroupDirective, FormsModule } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import validator from 'card-validator';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxCcService {
    constructor() { }
    /**
     * @param {?} cardNumber
     * @return {?}
     */
    getCardType(cardNumber) {
        return creditCardType(cardNumber)[0];
    }
    /**
     * @param {?} cardNumber
     * @param {?} cardType
     * @return {?}
     */
    prettyCardNumber(cardNumber, cardType) {
        /** @type {?} */
        const card = creditCardType.getTypeInfo(cardType);
        if (card) {
            /** @type {?} */
            const offsets = [].concat(0, card.gaps, cardNumber.length);
            /** @type {?} */
            const components = [];
            for (let i = 0; offsets[i] < cardNumber.length; i++) {
                /** @type {?} */
                const start = offsets[i];
                /** @type {?} */
                const end = Math.min(offsets[i + 1], cardNumber.length);
                components.push(cardNumber.substring(start, end));
            }
            return components.join(' ');
        }
        return cardNumber;
    }
}
NgxCcService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgxCcService.ctorParameters = () => [];
/** @nocollapse */ NgxCcService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgxCcService_Factory() { return new NgxCcService(); }, token: NgxCcService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CardValidator = (/**
 * @param {?} control
 * @return {?}
 */
(control) => {
    return validator.number(control.value).isValid ? null : { invalidCardNumber: true };
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const cardIcons = {
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
const ɵ0 = CardValidator;
class NgxCcComponent {
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
            parentFormGroup.ngSubmit.subscribe((/**
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CardExpirationValidator = (/**
 * @param {?} control
 * @return {?}
 */
(control) => {
    /** @type {?} */
    const date = validator.expirationDate(control.value);
    return (date.month && date.year) ? null : { invalidDate: true };
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$1 = CardExpirationValidator;
class CcDateComponent {
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
            parentFormGroup.ngSubmit.subscribe((/**
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
                        useValue: ɵ0$1,
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NumberOnlyDirective {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        this.elRef = elRef;
    }
    /**
     * @return {?}
     */
    get ngxNumberOnly() {
        return this._ngxNumberOnly;
    }
    /**
     * @param {?} flag
     * @return {?}
     */
    set ngxNumberOnly(flag) {
        this._ngxNumberOnly = coerceBooleanProperty(flag);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
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
                const value = ((/** @type {?} */ (event.target))).value.replace(/\s/g, '').length;
                return (value < this.ngxMaxLength);
            }
        }
    }
}
NumberOnlyDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngxNumberOnly]'
            },] }
];
/** @nocollapse */
NumberOnlyDirective.ctorParameters = () => [
    { type: ElementRef }
];
NumberOnlyDirective.propDecorators = {
    ngxNumberOnly: [{ type: Input }],
    ngxMaxLength: [{ type: Input }],
    onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormatDateDirective {
    /**
     * @param {?} control
     */
    constructor(control) {
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
    formatDate(event) {
        /** @type {?} */
        const eventValue = ((/** @type {?} */ (event.target))).value;
        /** @type {?} */
        const value = parseInt(eventValue, 10);
        if (!eventValue) {
            this.isUpdated = false;
            this.control.control.setValue(eventValue);
            return;
        }
        if (!this.isUpdated && value >= 10 && value <= 12) {
            this.control.control.setValue(`${value} / `);
            this.isUpdated = true;
        }
        else if (!this.isUpdated && value >= 2 && value <= 9) {
            this.control.control.setValue(`0${value} / `);
            this.isUpdated = true;
        }
        else if (!this.isUpdated &&
            eventValue.length === 2 && (value < 12 && value > 0)) {
            this.control.control.setValue(`${eventValue} / `);
            this.isUpdated = true;
        }
        else {
            this.control.control.setValue(eventValue);
        }
    }
}
FormatDateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngxFormatDate]'
            },] }
];
/** @nocollapse */
FormatDateDirective.ctorParameters = () => [
    { type: NgControl }
];
FormatDateDirective.propDecorators = {
    formatDate: [{ type: HostListener, args: ['input', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CcCvvComponent {
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
        this.cardCvv = '';
        this.maxCvvLength = 4;
        this.id = `ngx-cc${CcCvvComponent.nextId}`;
        this.describedBy = '';
        /** @type {?} */
        const parent = this.parentFormGroup || this.parentForm;
        if (parent) {
            parentFormGroup.ngSubmit.subscribe((/**
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
        return !(!!this.cardCvv);
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
    get cvvSize() {
        return this._cvvSize;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set cvvSize(value) {
        this._cvvSize = value;
        if (this.ngControl) {
            this.ngControl.control.updateValueAndValidity();
        }
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
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        /** @type {?} */
        const cvv = validator.cvv(control.value, this.cvvSize);
        return cvv.isValid ? null : { invalidCvv: true };
    }
    /**
     * @param {?} val
     * @return {?}
     */
    writeValue(val) {
        this.cardCvv = val || '';
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
     * @param {?} event
     * @return {?}
     */
    updateCvv(event) {
        /** @type {?} */
        const value = ((/** @type {?} */ (event.target))).value;
        this.cardCvv = value;
        this.onChanges(value);
        this.ngControl.control.markAsDirty();
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
CcCvvComponent.nextId = 0;
CcCvvComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-cc-cvv',
                template: `
    <div class="ngx-cc-cvv-container" [ngClass]="styleClass">
      <input
        ngxNumberOnly
        [ngxMaxLength]="maxCvvLength"
        [ngClass]="{'ngx-cc-cvv-input': !defaultStyles}"
        type="text"
        [placeholder]="placeholder || ''"
        [required]="required"
        [disabled]="disabled"
        [value]="cardCvv"
        (blur)="updateOnTouch()"
        (input)="updateCvv($event)">
    </div>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => CcCvvComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => CcCvvComponent)),
                        multi: true
                    },
                    {
                        provide: MatFormFieldControl,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => CcCvvComponent)),
                        multi: true
                    }
                ],
                styles: [`
    .ngx-cc-cvv-input {
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
CcCvvComponent.ctorParameters = () => [
    { type: Injector },
    { type: ElementRef },
    { type: FocusMonitor },
    { type: NgForm, decorators: [{ type: Optional }] },
    { type: FormGroupDirective, decorators: [{ type: Optional }] },
    { type: ErrorStateMatcher }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxCcModule {
}
NgxCcModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    NgxCcComponent,
                    NumberOnlyDirective,
                    CcDateComponent,
                    FormatDateDirective,
                    CcCvvComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    MatInputModule,
                    MatFormFieldModule
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CcDateComponent, NgxCcComponent, NgxCcModule, NgxCcService, CardValidator as ɵa, CardExpirationValidator as ɵb, NumberOnlyDirective as ɵc, FormatDateDirective as ɵd, CcCvvComponent as ɵe };
//# sourceMappingURL=ngx-cc.js.map
