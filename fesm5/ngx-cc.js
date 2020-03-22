import { __decorate, __spread, __metadata, __param, __assign } from 'tslib';
import { ɵɵdefineInjectable, Injectable, InjectionToken, Injector, ElementRef, Optional, Inject, Input, HostBinding, Component, forwardRef, ViewEncapsulation, HostListener, Directive, NgModule } from '@angular/core';
import creditCardType from 'credit-card-type';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { NgControl, NgForm, FormGroupDirective, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormsModule } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import validator from 'card-validator';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

var NgxCcService = /** @class */ (function () {
    function NgxCcService() {
    }
    NgxCcService.prototype.getCardType = function (cardNumber) {
        return creditCardType(cardNumber)[0];
    };
    NgxCcService.prototype.prettyCardNumber = function (cardNumber, cardType) {
        var card = creditCardType.getTypeInfo(cardType);
        if (card) {
            var offsets = [].concat(0, card.gaps, cardNumber.length);
            var components = [];
            for (var i = 0; offsets[i] < cardNumber.length; i++) {
                var start = offsets[i];
                var end = Math.min(offsets[i + 1], cardNumber.length);
                components.push(cardNumber.substring(start, end));
            }
            return components.join(' ');
        }
        return cardNumber;
    };
    NgxCcService.ɵprov = ɵɵdefineInjectable({ factory: function NgxCcService_Factory() { return new NgxCcService(); }, token: NgxCcService, providedIn: "root" });
    NgxCcService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], NgxCcService);
    return NgxCcService;
}());

var CardValidator = function (control) {
    return validator.number(control.value).isValid ? null : { invalidCardNumber: true };
};

var CC_CARD_ICONS_TOKEN = new InjectionToken('CC_CARD_ICONS_TOKEN');

var externalCardIcons = {
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

var ɵ0 = CardValidator;
var NgxCcComponent = /** @class */ (function () {
    function NgxCcComponent(injector, elRef, fm, parentForm, parentFormGroup, defaultErrorStateMatcher, creditCardService, ccCardIcons) {
        var _this = this;
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
        this.id = "ngx-cc" + NgxCcComponent_1.nextId;
        this.describedBy = '';
        var parent = this.parentFormGroup || this.parentForm;
        if (parent) {
            this._formSubmitSubscription = parentFormGroup.ngSubmit.subscribe(function () {
                _this.ngControl.control.markAsTouched();
            });
        }
        fm.monitor(elRef.nativeElement, true).subscribe(function (origin) {
            _this.focused = !!origin;
            _this.stateChanges.next();
        });
    }
    NgxCcComponent_1 = NgxCcComponent;
    Object.defineProperty(NgxCcComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (cardNumber) {
            this._value = cardNumber;
            this.onChange(cardNumber);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxCcComponent.prototype, "placeholder", {
        get: function () {
            return this._placeholder;
        },
        set: function (placeholder) {
            this._placeholder = placeholder;
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxCcComponent.prototype, "empty", {
        get: function () {
            var value = this.cardNumber.replace(/\s/g, '');
            return !(!!value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxCcComponent.prototype, "required", {
        get: function () {
            return this._required;
        },
        set: function (req) {
            this._required = coerceBooleanProperty(req);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxCcComponent.prototype, "disabled", {
        get: function () {
            if (this.ngControl && this.ngControl.disabled !== null) {
                return this.ngControl.disabled;
            }
            return this._disabled;
        },
        set: function (dis) {
            this._disabled = coerceBooleanProperty(dis);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxCcComponent.prototype, "defaultStyles", {
        get: function () {
            return this._defaultStyles;
        },
        set: function (val) {
            this._defaultStyles = coerceBooleanProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxCcComponent.prototype, "shouldLabelFloat", {
        get: function () {
            return this.focused || !this.empty;
        },
        enumerable: true,
        configurable: true
    });
    NgxCcComponent.prototype.ngOnInit = function () {
        this.ngControl = this.injector.get(NgControl);
        if (this.ngControl !== null) {
            // Setting the value accessor directly (instead of using
            // the providers) to avoid running into a circular import.
            this.ngControl.valueAccessor = this;
        }
    };
    NgxCcComponent.prototype.ngDoCheck = function () {
        if (this.ngControl) {
            this.updateErrorState();
        }
    };
    NgxCcComponent.prototype.writeValue = function (value) {
        this.cardNumber = value || '';
    };
    NgxCcComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NgxCcComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NgxCcComponent.prototype.setDescribedByIds = function (ids) {
        this.describedBy = ids.join(' ');
    };
    NgxCcComponent.prototype.onContainerClick = function (event) {
        if (event.target.tagName.toLowerCase() !== 'input') {
            this.elRef.nativeElement.querySelector('input').focus();
        }
    };
    NgxCcComponent.prototype.updateIcon = function (event) {
        var value = event.target.value.replace(/\s/g, '');
        var cardType = 'default';
        this.onChange(value);
        this.ngControl.control.markAsDirty();
        this.card = this.creditCardService.getCardType(value);
        if (this.card) {
            this.maxNumberLimit = Math.max.apply(Math, __spread(this.card.lengths));
            cardType = this.card.type;
        }
        this.cardNumber = this.creditCardService.prettyCardNumber(value, cardType);
        this.cardIcon = !value ? this._cardIcons.default : this._cardIcons[cardType];
    };
    NgxCcComponent.prototype.updateOnTouch = function () {
        if (this.ngControl) {
            this.onTouched(this.ngControl.control.value);
            this.ngControl.control.markAsTouched();
        }
    };
    NgxCcComponent.prototype.ngOnDestroy = function () {
        if (this._formSubmitSubscription)
            this._formSubmitSubscription.unsubscribe();
        this.fm.stopMonitoring(this.elRef.nativeElement);
        this.stateChanges.complete();
    };
    NgxCcComponent.prototype.updateErrorState = function () {
        var oldState = this.errorState;
        var parent = this.parentFormGroup || this.parentForm;
        var matcher = this.defaultErrorStateMatcher;
        var control = this.ngControl ? this.ngControl.control : null;
        var newState = matcher.isErrorState(control, parent);
        if (newState !== oldState) {
            this.errorState = newState;
            this.stateChanges.next();
        }
    };
    var NgxCcComponent_1;
    NgxCcComponent.nextId = 0;
    NgxCcComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: ElementRef },
        { type: FocusMonitor },
        { type: NgForm, decorators: [{ type: Optional }] },
        { type: FormGroupDirective, decorators: [{ type: Optional }] },
        { type: ErrorStateMatcher },
        { type: NgxCcService },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [CC_CARD_ICONS_TOKEN,] }] }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NgxCcComponent.prototype, "styleClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NgxCcComponent.prototype, "value", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], NgxCcComponent.prototype, "placeholder", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NgxCcComponent.prototype, "empty", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NgxCcComponent.prototype, "required", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NgxCcComponent.prototype, "disabled", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NgxCcComponent.prototype, "defaultStyles", null);
    __decorate([
        HostBinding(),
        __metadata("design:type", Object)
    ], NgxCcComponent.prototype, "id", void 0);
    __decorate([
        HostBinding('attr.aria-describedby'),
        __metadata("design:type", Object)
    ], NgxCcComponent.prototype, "describedBy", void 0);
    __decorate([
        HostBinding('class.floating'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NgxCcComponent.prototype, "shouldLabelFloat", null);
    NgxCcComponent = NgxCcComponent_1 = __decorate([
        Component({
            selector: 'ngx-cc',
            template: "\n      <div class=\"ngx-cc-container\" [ngClass]=\"styleClass\">\n        <input *ngIf=\"!defaultStyles\"\n        ngxNumberOnly\n        [ngxMaxLength]=\"maxNumberLimit\"\n        class=\"ngx-cc-input\"\n        type=\"text\"\n        [required]=\"required\"\n        [disabled]=\"disabled\"\n        [value]=\"cardNumber\"\n        (blur)=\"updateOnTouch()\"\n        (input)=\"updateIcon($event)\" />\n\n        <input *ngIf=\"defaultStyles\"\n        ngxNumberOnly\n        [ngxMaxLength]=\"maxNumberLimit\"\n        class=\"ngx-cc-input-default\"\n        type=\"text\"\n        [placeholder]=\"placeholder\"\n        [required]=\"required\"\n        [disabled]=\"disabled\"\n        [value]=\"cardNumber\"\n        [ngStyle]=\"{'background-image': 'url(' + cardIcon + ')'}\"\n        (blur)=\"updateOnTouch()\"\n        (input)=\"updateIcon($event)\" />\n        <img *ngIf=\"!defaultStyles\" class=\"ngx-cc-suffix\" [src]=\"cardIcon\" />\n      </div>\n      ",
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return NgxCcComponent_1; }),
                    multi: true
                },
                {
                    provide: NG_VALIDATORS,
                    useValue: ɵ0,
                    multi: true
                },
                {
                    provide: MatFormFieldControl,
                    useExisting: forwardRef(function () { return NgxCcComponent_1; }),
                    multi: true
                }
            ],
            encapsulation: ViewEncapsulation.None,
            styles: ["\n    .ngx-cc-container {\n      display: flex;\n      position: relative;\n    }\n    .ngx-cc-input {\n      border: none;\n      background: none;\n      padding: 0;\n      outline: none;\n      font: inherit;\n      text-align: left;\n    }\n    .ngx-cc-input-default {\n      background-position: 100%;\n      background-repeat: no-repeat;\n      background-size: 40px;\n    }\n    .ngx-cc-form-field div.mat-form-field-wrapper div.mat-form-field-flex {\n      align-items: flex-end;\n    }\n    .ngx-cc-suffix {\n      position: absolute;\n      top: -1.5rem;\n      right: 0;\n      width: 40px;\n      height: 40px;\n    }\n    "]
        }),
        __param(3, Optional()),
        __param(4, Optional()),
        __param(7, Optional()), __param(7, Inject(CC_CARD_ICONS_TOKEN)),
        __metadata("design:paramtypes", [Injector,
            ElementRef,
            FocusMonitor,
            NgForm,
            FormGroupDirective,
            ErrorStateMatcher,
            NgxCcService, Object])
    ], NgxCcComponent);
    return NgxCcComponent;
}());

var CardExpirationValidator = function (control) {
    var date = validator.expirationDate(control.value);
    return (date.month && date.year) ? null : { invalidDate: true };
};

var ɵ0$1 = CardExpirationValidator;
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
        this.id = "ngx-cc" + CcDateComponent_1.nextId;
        this.describedBy = '';
        var parent = this.parentFormGroup || this.parentForm;
        if (parent) {
            this._formSubmitSubscription = parentFormGroup.ngSubmit.subscribe(function () {
                _this.ngControl.control.markAsTouched();
            });
        }
        fm.monitor(elRef.nativeElement, true).subscribe(function (origin) {
            _this.focused = !!origin;
            _this.stateChanges.next();
        });
    }
    CcDateComponent_1 = CcDateComponent;
    Object.defineProperty(CcDateComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (cardNumber) {
            this._value = cardNumber;
            this.onChanges(cardNumber);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CcDateComponent.prototype, "placeholder", {
        get: function () {
            return this._placeholder;
        },
        set: function (placeholder) {
            this._placeholder = placeholder;
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CcDateComponent.prototype, "empty", {
        get: function () {
            return !(!!this.cardDate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CcDateComponent.prototype, "required", {
        get: function () {
            return this._required;
        },
        set: function (req) {
            this._required = coerceBooleanProperty(req);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CcDateComponent.prototype, "disabled", {
        get: function () {
            if (this.ngControl && this.ngControl.disabled !== null) {
                return this.ngControl.disabled;
            }
            return this._disabled;
        },
        set: function (dis) {
            this._disabled = coerceBooleanProperty(dis);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CcDateComponent.prototype, "defaultStyles", {
        get: function () {
            return this._defaultStyles;
        },
        set: function (val) {
            this._defaultStyles = coerceBooleanProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CcDateComponent.prototype, "shouldLabelFloat", {
        get: function () {
            return this.focused || !this.empty;
        },
        enumerable: true,
        configurable: true
    });
    CcDateComponent.prototype.ngOnInit = function () {
        this.ngControl = this.injector.get(NgControl);
        if (this.ngControl !== null) {
            // Setting the value accessor directly (instead of using
            // the providers) to avoid running into a circular import.
            this.ngControl.valueAccessor = this;
        }
    };
    CcDateComponent.prototype.ngDoCheck = function () {
        if (this.ngControl) {
            this.updateErrorState();
        }
    };
    CcDateComponent.prototype.writeValue = function (val) {
        this.cardDate = val || '';
    };
    CcDateComponent.prototype.registerOnChange = function (fn) {
        this.onChanges = fn;
    };
    CcDateComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    CcDateComponent.prototype.setDescribedByIds = function (ids) {
        this.describedBy = ids.join(' ');
    };
    CcDateComponent.prototype.onContainerClick = function (event) {
        if (event.target.tagName.toLowerCase() !== 'input') {
            this.elRef.nativeElement.querySelector('input').focus();
        }
    };
    CcDateComponent.prototype.updateDate = function () {
        if (this.ngControl) {
            this.onChanges(this.ngControl.control.value);
            this.ngControl.control.markAsDirty();
            this.cardDate = this.ngControl.control.value;
        }
    };
    CcDateComponent.prototype.updateOnTouch = function () {
        if (this.ngControl) {
            this.onTouched(this.ngControl.control.value);
            this.ngControl.control.markAsTouched();
            this.cardDate = this.ngControl.control.value;
        }
    };
    CcDateComponent.prototype.ngOnDestroy = function () {
        if (this._formSubmitSubscription)
            this._formSubmitSubscription.unsubscribe();
        this.fm.stopMonitoring(this.elRef.nativeElement);
        this.stateChanges.complete();
    };
    CcDateComponent.prototype.updateErrorState = function () {
        var oldState = this.errorState;
        var parent = this.parentFormGroup || this.parentForm;
        var matcher = this.defaultErrorStateMatcher;
        var control = this.ngControl ? this.ngControl.control : null;
        var newState = matcher.isErrorState(control, parent);
        if (newState !== oldState) {
            this.errorState = newState;
            this.stateChanges.next();
        }
    };
    var CcDateComponent_1;
    CcDateComponent.nextId = 0;
    CcDateComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: ElementRef },
        { type: FocusMonitor },
        { type: NgForm, decorators: [{ type: Optional }] },
        { type: FormGroupDirective, decorators: [{ type: Optional }] },
        { type: ErrorStateMatcher }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CcDateComponent.prototype, "styleClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CcDateComponent.prototype, "value", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], CcDateComponent.prototype, "placeholder", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], CcDateComponent.prototype, "empty", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], CcDateComponent.prototype, "required", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], CcDateComponent.prototype, "disabled", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CcDateComponent.prototype, "defaultStyles", null);
    __decorate([
        HostBinding(),
        __metadata("design:type", Object)
    ], CcDateComponent.prototype, "id", void 0);
    __decorate([
        HostBinding('attr.aria-describedby'),
        __metadata("design:type", Object)
    ], CcDateComponent.prototype, "describedBy", void 0);
    __decorate([
        HostBinding('class.floating'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], CcDateComponent.prototype, "shouldLabelFloat", null);
    CcDateComponent = CcDateComponent_1 = __decorate([
        Component({
            selector: 'ngx-cc-date',
            template: "\n    <div class=\"ngx-cc-date-container\" [ngClass]=\"styleClass\">\n      <input\n      ngxNumberOnly\n      ngxFormatDate\n      maxlength=\"7\"\n      [ngClass]=\"{'ngx-cc-date-input': !defaultStyles}\"\n      type=\"text\"\n      [placeholder]=\"placeholder || ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      [value]=\"cardDate\"\n      (blur)=\"updateOnTouch()\"\n      (input)=\"updateDate()\"\n      >\n    </div>\n  ",
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return CcDateComponent_1; }),
                    multi: true
                },
                {
                    provide: NG_VALIDATORS,
                    useValue: ɵ0$1,
                    multi: true
                },
                {
                    provide: MatFormFieldControl,
                    useExisting: forwardRef(function () { return CcDateComponent_1; }),
                    multi: true
                }
            ],
            encapsulation: ViewEncapsulation.None,
            styles: ["\n    .ngx-cc-date-input {\n      border: none;\n      background: none;\n      padding: 0;\n      outline: none;\n      font: inherit;\n      text-align: left;\n    }\n  "]
        }),
        __param(3, Optional()),
        __param(4, Optional()),
        __metadata("design:paramtypes", [Injector,
            ElementRef,
            FocusMonitor,
            NgForm,
            FormGroupDirective,
            ErrorStateMatcher])
    ], CcDateComponent);
    return CcDateComponent;
}());

var NumberOnlyDirective = /** @class */ (function () {
    function NumberOnlyDirective(elRef) {
        this.elRef = elRef;
    }
    Object.defineProperty(NumberOnlyDirective.prototype, "ngxNumberOnly", {
        get: function () {
            return this._ngxNumberOnly;
        },
        set: function (flag) {
            this._ngxNumberOnly = coerceBooleanProperty(flag);
        },
        enumerable: true,
        configurable: true
    });
    NumberOnlyDirective.prototype.onKeyDown = function (event) {
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
                var value = event.target.value.replace(/\s/g, '').length;
                return (value < this.ngxMaxLength);
            }
        }
    };
    NumberOnlyDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NumberOnlyDirective.prototype, "ngxNumberOnly", null);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], NumberOnlyDirective.prototype, "ngxMaxLength", void 0);
    __decorate([
        HostListener('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], NumberOnlyDirective.prototype, "onKeyDown", null);
    NumberOnlyDirective = __decorate([
        Directive({
            selector: '[ngxNumberOnly]'
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], NumberOnlyDirective);
    return NumberOnlyDirective;
}());

var FormatDateDirective = /** @class */ (function () {
    function FormatDateDirective(control) {
        this.control = control;
        /**
         * isUpdated - check if input is udpated or not
         */
        this.isUpdated = false;
    }
    FormatDateDirective.prototype.formatDate = function (event) {
        var eventValue = event.target.value;
        var value = parseInt(eventValue, 10);
        if (!eventValue) {
            this.isUpdated = false;
            this.control.control.setValue(eventValue);
            return;
        }
        if (!this.isUpdated && value >= 10 && value <= 12) {
            this.control.control.setValue(value + " / ");
            this.isUpdated = true;
        }
        else if (!this.isUpdated && value >= 2 && value <= 9) {
            this.control.control.setValue("0" + value + " / ");
            this.isUpdated = true;
        }
        else if (!this.isUpdated &&
            eventValue.length === 2 && (value < 12 && value > 0)) {
            this.control.control.setValue(eventValue + " / ");
            this.isUpdated = true;
        }
        else {
            this.control.control.setValue(eventValue);
        }
    };
    FormatDateDirective.ctorParameters = function () { return [
        { type: NgControl }
    ]; };
    __decorate([
        HostListener('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], FormatDateDirective.prototype, "formatDate", null);
    FormatDateDirective = __decorate([
        Directive({
            selector: '[ngxFormatDate]'
        }),
        __metadata("design:paramtypes", [NgControl])
    ], FormatDateDirective);
    return FormatDateDirective;
}());

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
        this.id = "ngx-cc" + CcCvvComponent_1.nextId;
        this.describedBy = '';
        var parent = this.parentFormGroup || this.parentForm;
        if (parent) {
            this._formSubmitSubscription = parentFormGroup.ngSubmit.subscribe(function () {
                _this.ngControl.control.markAsTouched();
            });
        }
        fm.monitor(elRef.nativeElement, true).subscribe(function (origin) {
            _this.focused = !!origin;
            _this.stateChanges.next();
        });
    }
    CcCvvComponent_1 = CcCvvComponent;
    Object.defineProperty(CcCvvComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (cardNumber) {
            this._value = cardNumber;
            this.onChanges(cardNumber);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CcCvvComponent.prototype, "placeholder", {
        get: function () {
            return this._placeholder;
        },
        set: function (placeholder) {
            this._placeholder = placeholder;
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CcCvvComponent.prototype, "empty", {
        get: function () {
            return !(!!this.cardCvv);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CcCvvComponent.prototype, "required", {
        get: function () {
            return this._required;
        },
        set: function (req) {
            this._required = coerceBooleanProperty(req);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CcCvvComponent.prototype, "disabled", {
        get: function () {
            if (this.ngControl && this.ngControl.disabled !== null) {
                return this.ngControl.disabled;
            }
            return this._disabled;
        },
        set: function (dis) {
            this._disabled = coerceBooleanProperty(dis);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CcCvvComponent.prototype, "defaultStyles", {
        get: function () {
            return this._defaultStyles;
        },
        set: function (val) {
            this._defaultStyles = coerceBooleanProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CcCvvComponent.prototype, "cvvSize", {
        get: function () {
            return this._cvvSize;
        },
        set: function (value) {
            this._cvvSize = value;
            if (this.ngControl) {
                this.ngControl.control.updateValueAndValidity();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CcCvvComponent.prototype, "shouldLabelFloat", {
        get: function () {
            return this.focused || !this.empty;
        },
        enumerable: true,
        configurable: true
    });
    CcCvvComponent.prototype.ngOnInit = function () {
        this.ngControl = this.injector.get(NgControl);
        if (this.ngControl !== null) {
            // Setting the value accessor directly (instead of using
            // the providers) to avoid running into a circular import.
            this.ngControl.valueAccessor = this;
        }
    };
    CcCvvComponent.prototype.ngDoCheck = function () {
        if (this.ngControl) {
            this.updateErrorState();
        }
    };
    CcCvvComponent.prototype.validate = function (control) {
        var cvv = validator.cvv(control.value, this.cvvSize);
        return cvv.isValid ? null : { invalidCvv: true };
    };
    CcCvvComponent.prototype.writeValue = function (val) {
        this.cardCvv = val || '';
    };
    CcCvvComponent.prototype.registerOnChange = function (fn) {
        this.onChanges = fn;
    };
    CcCvvComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    CcCvvComponent.prototype.setDescribedByIds = function (ids) {
        this.describedBy = ids.join(' ');
    };
    CcCvvComponent.prototype.onContainerClick = function (event) {
        if (event.target.tagName.toLowerCase() !== 'input') {
            this.elRef.nativeElement.querySelector('input').focus();
        }
    };
    CcCvvComponent.prototype.updateCvv = function (event) {
        var value = event.target.value;
        this.cardCvv = value;
        this.onChanges(value);
        this.ngControl.control.markAsDirty();
    };
    CcCvvComponent.prototype.updateOnTouch = function () {
        if (this.ngControl) {
            this.onTouched(this.ngControl.control.value);
            this.ngControl.control.markAsTouched();
        }
    };
    CcCvvComponent.prototype.ngOnDestroy = function () {
        if (this._formSubmitSubscription)
            this._formSubmitSubscription.unsubscribe();
        this.fm.stopMonitoring(this.elRef.nativeElement);
        this.stateChanges.complete();
    };
    CcCvvComponent.prototype.updateErrorState = function () {
        var oldState = this.errorState;
        var parent = this.parentFormGroup || this.parentForm;
        var matcher = this.defaultErrorStateMatcher;
        var control = this.ngControl ? this.ngControl.control : null;
        var newState = matcher.isErrorState(control, parent);
        if (newState !== oldState) {
            this.errorState = newState;
            this.stateChanges.next();
        }
    };
    var CcCvvComponent_1;
    CcCvvComponent.nextId = 0;
    CcCvvComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: ElementRef },
        { type: FocusMonitor },
        { type: NgForm, decorators: [{ type: Optional }] },
        { type: FormGroupDirective, decorators: [{ type: Optional }] },
        { type: ErrorStateMatcher }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CcCvvComponent.prototype, "styleClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CcCvvComponent.prototype, "value", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], CcCvvComponent.prototype, "placeholder", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], CcCvvComponent.prototype, "empty", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], CcCvvComponent.prototype, "required", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], CcCvvComponent.prototype, "disabled", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CcCvvComponent.prototype, "defaultStyles", null);
    __decorate([
        Input('cvv-size'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], CcCvvComponent.prototype, "cvvSize", null);
    __decorate([
        HostBinding(),
        __metadata("design:type", Object)
    ], CcCvvComponent.prototype, "id", void 0);
    __decorate([
        HostBinding('attr.aria-describedby'),
        __metadata("design:type", Object)
    ], CcCvvComponent.prototype, "describedBy", void 0);
    __decorate([
        HostBinding('class.floating'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], CcCvvComponent.prototype, "shouldLabelFloat", null);
    CcCvvComponent = CcCvvComponent_1 = __decorate([
        Component({
            selector: 'ngx-cc-cvv',
            template: "\n    <div class=\"ngx-cc-cvv-container\" [ngClass]=\"styleClass\">\n      <input\n        ngxNumberOnly\n        [ngxMaxLength]=\"maxCvvLength\"\n        [ngClass]=\"{'ngx-cc-cvv-input': !defaultStyles}\"\n        type=\"text\"\n        [placeholder]=\"placeholder || ''\"\n        [required]=\"required\"\n        [disabled]=\"disabled\"\n        [value]=\"cardCvv\"\n        (blur)=\"updateOnTouch()\"\n        (input)=\"updateCvv($event)\">\n    </div>\n  ",
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return CcCvvComponent_1; }),
                    multi: true
                },
                {
                    provide: NG_VALIDATORS,
                    useExisting: forwardRef(function () { return CcCvvComponent_1; }),
                    multi: true
                },
                {
                    provide: MatFormFieldControl,
                    useExisting: forwardRef(function () { return CcCvvComponent_1; }),
                    multi: true
                }
            ],
            styles: ["\n    .ngx-cc-cvv-input {\n      border: none;\n      background: none;\n      padding: 0;\n      outline: none;\n      font: inherit;\n      text-align: left;\n    }\n  "]
        }),
        __param(3, Optional()),
        __param(4, Optional()),
        __metadata("design:paramtypes", [Injector,
            ElementRef,
            FocusMonitor,
            NgForm,
            FormGroupDirective,
            ErrorStateMatcher])
    ], CcCvvComponent);
    return CcCvvComponent;
}());

var NgxCcModule = /** @class */ (function () {
    function NgxCcModule() {
    }
    NgxCcModule_1 = NgxCcModule;
    NgxCcModule.forRoot = function (config) {
        return {
            ngModule: NgxCcModule_1,
            providers: [
                {
                    provide: CC_CARD_ICONS_TOKEN,
                    useValue: __assign(__assign({}, externalCardIcons), config.cardIcons),
                }
            ]
        };
    };
    var NgxCcModule_1;
    NgxCcModule = NgxCcModule_1 = __decorate([
        NgModule({
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
        })
    ], NgxCcModule);
    return NgxCcModule;
}());

/*
 * Public API Surface of ngx-cc
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CcDateComponent, NgxCcComponent, NgxCcModule, NgxCcService, ɵ0, CardValidator as ɵa, CC_CARD_ICONS_TOKEN as ɵc, CardExpirationValidator as ɵd, NumberOnlyDirective as ɵe, FormatDateDirective as ɵf, CcCvvComponent as ɵg };
//# sourceMappingURL=ngx-cc.js.map
