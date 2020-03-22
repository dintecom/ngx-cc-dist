import { __decorate, __metadata } from "tslib";
import { ElementRef, Directive, Input, HostListener } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
let NumberOnlyDirective = class NumberOnlyDirective {
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
};
NumberOnlyDirective.ctorParameters = () => [
    { type: ElementRef }
];
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
export { NumberOnlyDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLW9ubHkuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNjLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbnVtYmVyLW9ubHkvbnVtYmVyLW9ubHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSzlELElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBMkM5QixZQUFvQixLQUFtQztRQUFuQyxVQUFLLEdBQUwsS0FBSyxDQUE4QjtJQUFJLENBQUM7SUF4QzVELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBSSxhQUFhLENBQUMsSUFBYTtRQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFNb0MsU0FBUyxDQUFDLEtBQW9CO1FBQ2pFLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzVELGdCQUFnQjtnQkFDaEIsQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMxRCxnQkFBZ0I7Z0JBQ2hCLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDMUQsZ0JBQWdCO2dCQUNoQixDQUFDLEtBQUssQ0FBQyxPQUFPLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzFELGdCQUFnQjtnQkFDaEIsQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMxRCxnQ0FBZ0M7Z0JBQ2hDLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxFQUFFLElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsRUFBRTtnQkFDOUMsbUNBQW1DO2dCQUNuQyxPQUFPO2FBQ1I7WUFDRCxtREFBbUQ7WUFDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEVBQUUsSUFBSSxLQUFLLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEVBQUUsSUFBSSxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxFQUFFO2dCQUNqSCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDeEI7WUFDRCxpRkFBaUY7WUFDakYsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixNQUFNLEtBQUssR0FBSSxLQUFLLENBQUMsTUFBMkIsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUM7Z0JBQ2pGLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ3BDO1NBQ0Y7SUFDSCxDQUFDO0NBSUYsQ0FBQTs7WUFGNEIsVUFBVTs7QUF4Q3JDO0lBREMsS0FBSyxFQUFFOzs7d0RBR1A7QUFNUTtJQUFSLEtBQUssRUFBRTs7eURBQXNCO0FBSU87SUFBcEMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztxQ0FBa0IsYUFBYTs7b0RBMEJsRTtBQXpDVSxtQkFBbUI7SUFIL0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGlCQUFpQjtLQUM1QixDQUFDO3FDQTRDMkIsVUFBVTtHQTNDMUIsbUJBQW1CLENBNkMvQjtTQTdDWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBEaXJlY3RpdmUsIElucHV0LCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ3hOdW1iZXJPbmx5XSdcbn0pXG5leHBvcnQgY2xhc3MgTnVtYmVyT25seURpcmVjdGl2ZSB7XG5cbiAgQElucHV0KClcbiAgZ2V0IG5neE51bWJlck9ubHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25neE51bWJlck9ubHk7XG4gIH1cblxuICBzZXQgbmd4TnVtYmVyT25seShmbGFnOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbmd4TnVtYmVyT25seSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShmbGFnKTtcbiAgfVxuXG4gIEBJbnB1dCgpIG5neE1heExlbmd0aDogbnVtYmVyO1xuXG4gIHByaXZhdGUgX25neE51bWJlck9ubHk6IGJvb2xlYW47XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmICh0aGlzLm5neE51bWJlck9ubHkpIHtcbiAgICAgIGlmIChbNDYsIDgsIDksIDI3LCAxMywgMTEwLCAxOTBdLmluZGV4T2YoZXZlbnQua2V5Q29kZSkgIT09IC0xIHx8XG4gICAgICAgIC8vIEFsbG93OiBDdHJsK0FcbiAgICAgICAgKGV2ZW50LmtleUNvZGUgPT09IDY1ICYmIChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpKSB8fFxuICAgICAgICAvLyBBbGxvdzogQ3RybCtDXG4gICAgICAgIChldmVudC5rZXlDb2RlID09PSA2NyAmJiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSkgfHxcbiAgICAgICAgLy8gQWxsb3c6IEN0cmwrVlxuICAgICAgICAoZXZlbnQua2V5Q29kZSA9PT0gODYgJiYgKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSkpIHx8XG4gICAgICAgIC8vIEFsbG93OiBDdHJsK1hcbiAgICAgICAgKGV2ZW50LmtleUNvZGUgPT09IDg4ICYmIChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpKSB8fFxuICAgICAgICAvLyBBbGxvdzogaG9tZSwgZW5kLCBsZWZ0LCByaWdodFxuICAgICAgICAoZXZlbnQua2V5Q29kZSA+PSAzNSAmJiBldmVudC5rZXlDb2RlIDw9IDM5KSkge1xuICAgICAgICAvLyBsZXQgaXQgaGFwcGVuLCBkb24ndCBkbyBhbnl0aGluZ1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBFbnN1cmUgdGhhdCBpdCBpcyBhIG51bWJlciBhbmQgc3RvcCB0aGUga2V5cHJlc3NcbiAgICAgIGlmICgoZXZlbnQuc2hpZnRLZXkgfHwgKGV2ZW50LmtleUNvZGUgPCA0OCB8fCBldmVudC5rZXlDb2RlID4gNTcpKSAmJiAoZXZlbnQua2V5Q29kZSA8IDk2IHx8IGV2ZW50LmtleUNvZGUgPiAxMDUpKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICAvLyBJZiBjcmVkaXRjYXJkIG51bWJlciBleGNlZWRzIHRoZSBsaW1pdCBwcm92aWRlZCBieSBicmFpbnRyZWUgYXBpIHJldHVybiBmYWxzZS5cbiAgICAgIGlmICh0aGlzLm5neE1heExlbmd0aCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUucmVwbGFjZSgvXFxzL2csICcnKS5sZW5ndGg7XG4gICAgICAgIHJldHVybiAodmFsdWUgPCB0aGlzLm5neE1heExlbmd0aCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PikgeyB9XG5cbn1cbiJdfQ==