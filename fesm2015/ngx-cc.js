import { ɵɵdefineInjectable, Injectable, InjectionToken, Component, forwardRef, ViewEncapsulation, Injector, ElementRef, Optional, Inject, Input, HostBinding, Directive, HostListener, NgModule } from '@angular/core';
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

class NgxCcService {
    getCardType(cardNumber) {
        return creditCardType(cardNumber)[0];
    }
    prettyCardNumber(cardNumber, cardType) {
        const card = creditCardType.getTypeInfo(cardType);
        if (card) {
            const offsets = [].concat(0, card.gaps, cardNumber.length);
            const components = [];
            for (let i = 0; offsets[i] < cardNumber.length; i++) {
                const start = offsets[i];
                const end = Math.min(offsets[i + 1], cardNumber.length);
                components.push(cardNumber.substring(start, end));
            }
            return components.join(' ');
        }
        return cardNumber;
    }
}
NgxCcService.ɵprov = ɵɵdefineInjectable({ factory: function NgxCcService_Factory() { return new NgxCcService(); }, token: NgxCcService, providedIn: "root" });
NgxCcService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];

const CardValidator = (control) => {
    return validator.number(control.value).isValid ? null : { invalidCardNumber: true };
};

const CC_CARD_ICONS_TOKEN = new InjectionToken('CC_CARD_ICONS_TOKEN');

const externalCardIcons = {
    default: 'https://img.icons8.com/color/40/000000/bank-card-back-side.png',
    visa: 'https://img.icons8.com/color/40/000000/visa.png',
    mastercard: 'https://img.icons8.com/color/40/000000/mastercard.png',
    'american-express': 'https://img.icons8.com/color/40/000000/amex.png',
    'diners-club': 'https://img.icons8.com/color/40/000000/diners-club.png',
    discover: 'https://img.icons8.com/color/40/000000/discover.png',
    jcb: 'https://img.icons8.com/color/40/000000/jcb.png',
    unionpay: 'https://img.icons8.com/color/40/000000/unionpay.png',
    maestro: 'https://img.icons8.com/color/40/000000/maestro.png',
    mir: 'https://img.icons8.com/color/40/000000/mir.png',
    elo: 'https://img.icons8.com/color/40/000000/bank-card-back-side.png',
    hiper: 'https://img.icons8.com/color/40/000000/bank-card-back-side.png',
    hipercard: 'https://img.icons8.com/color/40/000000/bank-card-back-side.png',
};

const ɵ0 = CardValidator;
class NgxCcComponent {
    constructor(injector, elRef, fm, parentForm, parentFormGroup, defaultErrorStateMatcher, creditCardService, ccCardIcons) {
        this.injector = injector;
        this.elRef = elRef;
        this.fm = fm;
        this.parentForm = parentForm;
        this.parentFormGroup = parentFormGroup;
        this.defaultErrorStateMatcher = defaultErrorStateMatcher;
        this.creditCardService = creditCardService;
        this.ccCardIcons = ccCardIcons;
        // tslint:disable-next-line: variable-name
        this._disabled = false;
        // tslint:disable-next-line: variable-name
        this._defaultStyles = false;
        // tslint:disable-next-line: variable-name
        this._required = false;
        // tslint:disable-next-line: variable-name
        this._cardIcons = this.ccCardIcons || externalCardIcons;
        this.ngControl = null;
        this.focused = false;
        this.errorState = false;
        this.cardNumber = '';
        this.cardIcon = this._cardIcons.default;
        this.stateChanges = new Subject();
        this.id = `ngx-cc${NgxCcComponent.nextId}`;
        this.describedBy = '';
        const parent = this.parentFormGroup || this.parentForm;
        if (parent) {
            this._formSubmitSubscription = parentFormGroup.ngSubmit.subscribe(() => {
                this.ngControl.control.markAsTouched();
            });
        }
        fm.monitor(elRef.nativeElement, true).subscribe(origin => {
            this.focused = !!origin;
            this.stateChanges.next();
        });
    }
    get value() {
        return this._value;
    }
    set value(cardNumber) {
        this._value = cardNumber;
        this.onChange(cardNumber);
        this.stateChanges.next();
    }
    get placeholder() {
        return this._placeholder;
    }
    set placeholder(placeholder) {
        this._placeholder = placeholder;
        this.stateChanges.next();
    }
    get empty() {
        const value = this.cardNumber.replace(/\s/g, '');
        return !(!!value);
    }
    get required() {
        return this._required;
    }
    set required(req) {
        this._required = coerceBooleanProperty(req);
        this.stateChanges.next();
    }
    get disabled() {
        if (this.ngControl && this.ngControl.disabled !== null) {
            return this.ngControl.disabled;
        }
        return this._disabled;
    }
    set disabled(dis) {
        this._disabled = coerceBooleanProperty(dis);
        this.stateChanges.next();
    }
    get defaultStyles() {
        return this._defaultStyles;
    }
    set defaultStyles(val) {
        this._defaultStyles = coerceBooleanProperty(val);
    }
    get shouldLabelFloat() {
        return this.focused || !this.empty;
    }
    ngOnInit() {
        this.ngControl = this.injector.get(NgControl);
        if (this.ngControl !== null) {
            // Setting the value accessor directly (instead of using
            // the providers) to avoid running into a circular import.
            this.ngControl.valueAccessor = this;
        }
    }
    ngDoCheck() {
        if (this.ngControl) {
            this.updateErrorState();
        }
    }
    writeValue(value) {
        this.cardNumber = value || '';
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDescribedByIds(ids) {
        this.describedBy = ids.join(' ');
    }
    onContainerClick(event) {
        if (event.target.tagName.toLowerCase() !== 'input') {
            this.elRef.nativeElement.querySelector('input').focus();
        }
    }
    updateIcon(event) {
        const value = event.target.value.replace(/\s/g, '');
        let cardType = 'default';
        this.onChange(value);
        this.ngControl.control.markAsDirty();
        this.card = this.creditCardService.getCardType(value);
        if (this.card) {
            this.maxNumberLimit = Math.max(...this.card.lengths);
            cardType = this.card.type;
        }
        this.cardNumber = this.creditCardService.prettyCardNumber(value, cardType);
        this.cardIcon = !value ? this._cardIcons.default : this._cardIcons[cardType];
    }
    updateOnTouch() {
        if (this.ngControl) {
            this.onTouched(this.ngControl.control.value);
            this.ngControl.control.markAsTouched();
        }
    }
    ngOnDestroy() {
        if (this._formSubmitSubscription) {
            this._formSubmitSubscription.unsubscribe();
        }
        this.fm.stopMonitoring(this.elRef.nativeElement);
        this.stateChanges.complete();
    }
    updateErrorState() {
        const oldState = this.errorState;
        const parent = this.parentFormGroup || this.parentForm;
        const matcher = this.defaultErrorStateMatcher;
        const control = this.ngControl ? this.ngControl.control : null;
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
                        useExisting: forwardRef(() => NgxCcComponent),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useValue: ɵ0,
                        multi: true
                    },
                    {
                        provide: MatFormFieldControl,
                        useExisting: forwardRef(() => NgxCcComponent),
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
      background-size: 40px;
    }
    .ngx-cc-form-field div.mat-form-field-wrapper div.mat-form-field-flex {
      align-items: flex-end;
    }
    .ngx-cc-suffix {
      position: absolute;
      top: -1.5rem;
      right: 0;
      width: 40px;
      height: 40px;
    }
    `]
            },] }
];
NgxCcComponent.ctorParameters = () => [
    { type: Injector },
    { type: ElementRef },
    { type: FocusMonitor },
    { type: NgForm, decorators: [{ type: Optional }] },
    { type: FormGroupDirective, decorators: [{ type: Optional }] },
    { type: ErrorStateMatcher },
    { type: NgxCcService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [CC_CARD_ICONS_TOKEN,] }] }
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

const CardExpirationValidator = (control) => {
    const date = validator.expirationDate(control.value);
    return (date.month && date.year) ? null : { invalidDate: true };
};

const ɵ0$1 = CardExpirationValidator;
class CcDateComponent {
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
        const parent = this.parentFormGroup || this.parentForm;
        if (parent) {
            this._formSubmitSubscription = parentFormGroup.ngSubmit.subscribe(() => {
                this.ngControl.control.markAsTouched();
            });
        }
        fm.monitor(elRef.nativeElement, true).subscribe(origin => {
            this.focused = !!origin;
            this.stateChanges.next();
        });
    }
    get value() {
        return this._value;
    }
    set value(cardNumber) {
        this._value = cardNumber;
        this.onChanges(cardNumber);
        this.stateChanges.next();
    }
    get placeholder() {
        return this._placeholder;
    }
    set placeholder(placeholder) {
        this._placeholder = placeholder;
        this.stateChanges.next();
    }
    get empty() {
        return !(!!this.cardDate);
    }
    get required() {
        return this._required;
    }
    set required(req) {
        this._required = coerceBooleanProperty(req);
        this.stateChanges.next();
    }
    get disabled() {
        if (this.ngControl && this.ngControl.disabled !== null) {
            return this.ngControl.disabled;
        }
        return this._disabled;
    }
    set disabled(dis) {
        this._disabled = coerceBooleanProperty(dis);
        this.stateChanges.next();
    }
    get defaultStyles() {
        return this._defaultStyles;
    }
    set defaultStyles(val) {
        this._defaultStyles = coerceBooleanProperty(val);
    }
    get shouldLabelFloat() {
        return this.focused || !this.empty;
    }
    ngOnInit() {
        this.ngControl = this.injector.get(NgControl);
        if (this.ngControl !== null) {
            // Setting the value accessor directly (instead of using
            // the providers) to avoid running into a circular import.
            this.ngControl.valueAccessor = this;
        }
    }
    ngDoCheck() {
        if (this.ngControl) {
            this.updateErrorState();
        }
    }
    writeValue(val) {
        this.cardDate = val || '';
    }
    registerOnChange(fn) {
        this.onChanges = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDescribedByIds(ids) {
        this.describedBy = ids.join(' ');
    }
    onContainerClick(event) {
        if (event.target.tagName.toLowerCase() !== 'input') {
            this.elRef.nativeElement.querySelector('input').focus();
        }
    }
    updateDate() {
        if (this.ngControl) {
            this.onChanges(this.ngControl.control.value);
            this.ngControl.control.markAsDirty();
            this.cardDate = this.ngControl.control.value;
        }
    }
    updateOnTouch() {
        if (this.ngControl) {
            this.onTouched(this.ngControl.control.value);
            this.ngControl.control.markAsTouched();
            this.cardDate = this.ngControl.control.value;
        }
    }
    ngOnDestroy() {
        if (this._formSubmitSubscription) {
            this._formSubmitSubscription.unsubscribe();
        }
        this.fm.stopMonitoring(this.elRef.nativeElement);
        this.stateChanges.complete();
    }
    updateErrorState() {
        const oldState = this.errorState;
        const parent = this.parentFormGroup || this.parentForm;
        const matcher = this.defaultErrorStateMatcher;
        const control = this.ngControl ? this.ngControl.control : null;
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
                        useExisting: forwardRef(() => CcDateComponent),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useValue: ɵ0$1,
                        multi: true
                    },
                    {
                        provide: MatFormFieldControl,
                        useExisting: forwardRef(() => CcDateComponent),
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
            },] }
];
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

class NumberOnlyDirective {
    constructor(elRef) {
        this.elRef = elRef;
    }
    get ngxNumberOnly() {
        return this._ngxNumberOnly;
    }
    set ngxNumberOnly(flag) {
        this._ngxNumberOnly = coerceBooleanProperty(flag);
    }
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
                const value = event.target.value.replace(/\s/g, '').length;
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
NumberOnlyDirective.ctorParameters = () => [
    { type: ElementRef }
];
NumberOnlyDirective.propDecorators = {
    ngxNumberOnly: [{ type: Input }],
    ngxMaxLength: [{ type: Input }],
    onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};

class FormatDateDirective {
    constructor(control) {
        this.control = control;
        /**
         * isUpdated - check if input is udpated or not
         */
        this.isUpdated = false;
    }
    formatDate(event) {
        const eventValue = event.target.value;
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
FormatDateDirective.ctorParameters = () => [
    { type: NgControl }
];
FormatDateDirective.propDecorators = {
    formatDate: [{ type: HostListener, args: ['input', ['$event'],] }]
};

class CcCvvComponent {
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
        const parent = this.parentFormGroup || this.parentForm;
        if (parent) {
            this._formSubmitSubscription = parentFormGroup.ngSubmit.subscribe(() => {
                this.ngControl.control.markAsTouched();
            });
        }
        fm.monitor(elRef.nativeElement, true).subscribe(origin => {
            this.focused = !!origin;
            this.stateChanges.next();
        });
    }
    get value() {
        return this._value;
    }
    set value(cardNumber) {
        this._value = cardNumber;
        this.onChanges(cardNumber);
        this.stateChanges.next();
    }
    get placeholder() {
        return this._placeholder;
    }
    set placeholder(placeholder) {
        this._placeholder = placeholder;
        this.stateChanges.next();
    }
    get empty() {
        return !(!!this.cardCvv);
    }
    get required() {
        return this._required;
    }
    set required(req) {
        this._required = coerceBooleanProperty(req);
        this.stateChanges.next();
    }
    get disabled() {
        if (this.ngControl && this.ngControl.disabled !== null) {
            return this.ngControl.disabled;
        }
        return this._disabled;
    }
    set disabled(dis) {
        this._disabled = coerceBooleanProperty(dis);
        this.stateChanges.next();
    }
    get defaultStyles() {
        return this._defaultStyles;
    }
    set defaultStyles(val) {
        this._defaultStyles = coerceBooleanProperty(val);
    }
    get cvvSize() {
        return this._cvvSize;
    }
    set cvvSize(value) {
        this._cvvSize = value;
        if (this.ngControl) {
            this.ngControl.control.updateValueAndValidity();
        }
    }
    get shouldLabelFloat() {
        return this.focused || !this.empty;
    }
    ngOnInit() {
        this.ngControl = this.injector.get(NgControl);
        if (this.ngControl !== null) {
            // Setting the value accessor directly (instead of using
            // the providers) to avoid running into a circular import.
            this.ngControl.valueAccessor = this;
        }
    }
    ngDoCheck() {
        if (this.ngControl) {
            this.updateErrorState();
        }
    }
    validate(control) {
        const cvv = validator.cvv(control.value, this.cvvSize);
        return cvv.isValid ? null : { invalidCvv: true };
    }
    writeValue(val) {
        this.cardCvv = val || '';
    }
    registerOnChange(fn) {
        this.onChanges = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDescribedByIds(ids) {
        this.describedBy = ids.join(' ');
    }
    onContainerClick(event) {
        if (event.target.tagName.toLowerCase() !== 'input') {
            this.elRef.nativeElement.querySelector('input').focus();
        }
    }
    updateCvv(event) {
        const value = event.target.value;
        this.cardCvv = value;
        this.onChanges(value);
        this.ngControl.control.markAsDirty();
    }
    updateOnTouch() {
        if (this.ngControl) {
            this.onTouched(this.ngControl.control.value);
            this.ngControl.control.markAsTouched();
        }
    }
    ngOnDestroy() {
        if (this._formSubmitSubscription) {
            this._formSubmitSubscription.unsubscribe();
        }
        this.fm.stopMonitoring(this.elRef.nativeElement);
        this.stateChanges.complete();
    }
    updateErrorState() {
        const oldState = this.errorState;
        const parent = this.parentFormGroup || this.parentForm;
        const matcher = this.defaultErrorStateMatcher;
        const control = this.ngControl ? this.ngControl.control : null;
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
                        useExisting: forwardRef(() => CcCvvComponent),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => CcCvvComponent),
                        multi: true
                    },
                    {
                        provide: MatFormFieldControl,
                        useExisting: forwardRef(() => CcCvvComponent),
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
            },] }
];
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

class NgxCcModule {
    static forRoot(config) {
        return {
            ngModule: NgxCcModule,
            providers: [
                {
                    provide: CC_CARD_ICONS_TOKEN,
                    useValue: Object.assign(Object.assign({}, externalCardIcons), config.cardIcons),
                }
            ]
        };
    }
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
                ],
            },] }
];

/*
 * Public API Surface of ngx-cc
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CcDateComponent, NgxCcComponent, NgxCcModule, NgxCcService, ɵ0, CardValidator as ɵa, CC_CARD_ICONS_TOKEN as ɵc, CardExpirationValidator as ɵd, NumberOnlyDirective as ɵe, FormatDateDirective as ɵf, CcCvvComponent as ɵg };
//# sourceMappingURL=ngx-cc.js.map
