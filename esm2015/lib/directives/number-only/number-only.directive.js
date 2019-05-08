/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ElementRef, Directive, Input, HostListener } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
export class NumberOnlyDirective {
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
if (false) {
    /** @type {?} */
    NumberOnlyDirective.prototype.ngxMaxLength;
    /**
     * @type {?}
     * @private
     */
    NumberOnlyDirective.prototype._ngxNumberOnly;
    /**
     * @type {?}
     * @private
     */
    NumberOnlyDirective.prototype.elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLW9ubHkuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNjLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbnVtYmVyLW9ubHkvbnVtYmVyLW9ubHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSzlELE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUEyQzlCLFlBQW9CLEtBQW1DO1FBQW5DLFVBQUssR0FBTCxLQUFLLENBQThCO0lBQUksQ0FBQzs7OztJQXpDNUQsSUFDSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsSUFBSSxhQUFhLENBQUMsSUFBYTtRQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7O0lBTW9DLFNBQVMsQ0FBQyxLQUFvQjtRQUNqRSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM1RCxnQkFBZ0I7Z0JBQ2hCLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDMUQsZ0JBQWdCO2dCQUNoQixDQUFDLEtBQUssQ0FBQyxPQUFPLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzFELGdCQUFnQjtnQkFDaEIsQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMxRCxnQkFBZ0I7Z0JBQ2hCLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDMUQsZ0NBQWdDO2dCQUNoQyxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksRUFBRSxJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLEVBQUU7Z0JBQzlDLG1DQUFtQztnQkFDbkMsT0FBTzthQUNSO1lBQ0QsbURBQW1EO1lBQ25ELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxFQUFFLElBQUksS0FBSyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxFQUFFLElBQUksS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsRUFBRTtnQkFDakgsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3hCO1lBQ0QsaUZBQWlGO1lBQ2pGLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTs7c0JBQ2YsS0FBSyxHQUFHLENBQUMsbUJBQUEsS0FBSyxDQUFDLE1BQU0sRUFBb0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU07Z0JBQ2hGLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ3BDO1NBQ0Y7SUFDSCxDQUFDOzs7WUE1Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7YUFDNUI7Ozs7WUFMUSxVQUFVOzs7NEJBUWhCLEtBQUs7MkJBU0wsS0FBSzt3QkFJTCxZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBSm5DLDJDQUE4Qjs7Ozs7SUFFOUIsNkNBQWdDOzs7OztJQThCcEIsb0NBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgRGlyZWN0aXZlLCBJbnB1dCwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmd4TnVtYmVyT25seV0nXG59KVxuZXhwb3J0IGNsYXNzIE51bWJlck9ubHlEaXJlY3RpdmUge1xuXG4gIEBJbnB1dCgpXG4gIGdldCBuZ3hOdW1iZXJPbmx5KCkge1xuICAgIHJldHVybiB0aGlzLl9uZ3hOdW1iZXJPbmx5O1xuICB9XG5cbiAgc2V0IG5neE51bWJlck9ubHkoZmxhZzogYm9vbGVhbikge1xuICAgIHRoaXMuX25neE51bWJlck9ubHkgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoZmxhZyk7XG4gIH1cblxuICBASW5wdXQoKSBuZ3hNYXhMZW5ndGg6IG51bWJlcjtcblxuICBwcml2YXRlIF9uZ3hOdW1iZXJPbmx5OiBib29sZWFuO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKSBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAodGhpcy5uZ3hOdW1iZXJPbmx5KSB7XG4gICAgICBpZiAoWzQ2LCA4LCA5LCAyNywgMTMsIDExMCwgMTkwXS5pbmRleE9mKGV2ZW50LmtleUNvZGUpICE9PSAtMSB8fFxuICAgICAgICAvLyBBbGxvdzogQ3RybCtBXG4gICAgICAgIChldmVudC5rZXlDb2RlID09PSA2NSAmJiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSkgfHxcbiAgICAgICAgLy8gQWxsb3c6IEN0cmwrQ1xuICAgICAgICAoZXZlbnQua2V5Q29kZSA9PT0gNjcgJiYgKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSkpIHx8XG4gICAgICAgIC8vIEFsbG93OiBDdHJsK1ZcbiAgICAgICAgKGV2ZW50LmtleUNvZGUgPT09IDg2ICYmIChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpKSB8fFxuICAgICAgICAvLyBBbGxvdzogQ3RybCtYXG4gICAgICAgIChldmVudC5rZXlDb2RlID09PSA4OCAmJiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSkgfHxcbiAgICAgICAgLy8gQWxsb3c6IGhvbWUsIGVuZCwgbGVmdCwgcmlnaHRcbiAgICAgICAgKGV2ZW50LmtleUNvZGUgPj0gMzUgJiYgZXZlbnQua2V5Q29kZSA8PSAzOSkpIHtcbiAgICAgICAgLy8gbGV0IGl0IGhhcHBlbiwgZG9uJ3QgZG8gYW55dGhpbmdcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gRW5zdXJlIHRoYXQgaXQgaXMgYSBudW1iZXIgYW5kIHN0b3AgdGhlIGtleXByZXNzXG4gICAgICBpZiAoKGV2ZW50LnNoaWZ0S2V5IHx8IChldmVudC5rZXlDb2RlIDwgNDggfHwgZXZlbnQua2V5Q29kZSA+IDU3KSkgJiYgKGV2ZW50LmtleUNvZGUgPCA5NiB8fCBldmVudC5rZXlDb2RlID4gMTA1KSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgLy8gSWYgY3JlZGl0Y2FyZCBudW1iZXIgZXhjZWVkcyB0aGUgbGltaXQgcHJvdmlkZWQgYnkgYnJhaW50cmVlIGFwaSByZXR1cm4gZmFsc2UuXG4gICAgICBpZiAodGhpcy5uZ3hNYXhMZW5ndGgpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLnJlcGxhY2UoL1xccy9nLCAnJykubGVuZ3RoO1xuICAgICAgICByZXR1cm4gKHZhbHVlIDwgdGhpcy5uZ3hNYXhMZW5ndGgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD4pIHsgfVxuXG59XG4iXX0=