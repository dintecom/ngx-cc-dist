import { __decorate, __metadata } from "tslib";
import { ElementRef, Directive, Input, HostListener } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
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
export { NumberOnlyDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLW9ubHkuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNjLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbnVtYmVyLW9ubHkvbnVtYmVyLW9ubHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSzlEO0lBMkNFLDZCQUFvQixLQUFtQztRQUFuQyxVQUFLLEdBQUwsS0FBSyxDQUE4QjtJQUFJLENBQUM7SUF4QzVELHNCQUFJLDhDQUFhO2FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzdCLENBQUM7YUFFRCxVQUFrQixJQUFhO1lBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEQsQ0FBQzs7O09BSkE7SUFVb0MsdUNBQVMsR0FBVCxVQUFVLEtBQW9CO1FBQ2pFLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzVELGdCQUFnQjtnQkFDaEIsQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMxRCxnQkFBZ0I7Z0JBQ2hCLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDMUQsZ0JBQWdCO2dCQUNoQixDQUFDLEtBQUssQ0FBQyxPQUFPLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzFELGdCQUFnQjtnQkFDaEIsQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMxRCxnQ0FBZ0M7Z0JBQ2hDLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxFQUFFLElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsRUFBRTtnQkFDOUMsbUNBQW1DO2dCQUNuQyxPQUFPO2FBQ1I7WUFDRCxtREFBbUQ7WUFDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEVBQUUsSUFBSSxLQUFLLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEVBQUUsSUFBSSxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxFQUFFO2dCQUNqSCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDeEI7WUFDRCxpRkFBaUY7WUFDakYsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixJQUFNLEtBQUssR0FBSSxLQUFLLENBQUMsTUFBMkIsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUM7Z0JBQ2pGLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ3BDO1NBQ0Y7SUFDSCxDQUFDOztnQkFFMEIsVUFBVTs7SUF4Q3JDO1FBREMsS0FBSyxFQUFFOzs7NERBR1A7SUFNUTtRQUFSLEtBQUssRUFBRTs7NkRBQXNCO0lBSU87UUFBcEMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzt5Q0FBa0IsYUFBYTs7d0RBMEJsRTtJQXpDVSxtQkFBbUI7UUFIL0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGlCQUFpQjtTQUM1QixDQUFDO3lDQTRDMkIsVUFBVTtPQTNDMUIsbUJBQW1CLENBNkMvQjtJQUFELDBCQUFDO0NBQUEsQUE3Q0QsSUE2Q0M7U0E3Q1ksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgRGlyZWN0aXZlLCBJbnB1dCwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmd4TnVtYmVyT25seV0nXG59KVxuZXhwb3J0IGNsYXNzIE51bWJlck9ubHlEaXJlY3RpdmUge1xuXG4gIEBJbnB1dCgpXG4gIGdldCBuZ3hOdW1iZXJPbmx5KCkge1xuICAgIHJldHVybiB0aGlzLl9uZ3hOdW1iZXJPbmx5O1xuICB9XG5cbiAgc2V0IG5neE51bWJlck9ubHkoZmxhZzogYm9vbGVhbikge1xuICAgIHRoaXMuX25neE51bWJlck9ubHkgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoZmxhZyk7XG4gIH1cblxuICBASW5wdXQoKSBuZ3hNYXhMZW5ndGg6IG51bWJlcjtcblxuICBwcml2YXRlIF9uZ3hOdW1iZXJPbmx5OiBib29sZWFuO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKSBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAodGhpcy5uZ3hOdW1iZXJPbmx5KSB7XG4gICAgICBpZiAoWzQ2LCA4LCA5LCAyNywgMTMsIDExMCwgMTkwXS5pbmRleE9mKGV2ZW50LmtleUNvZGUpICE9PSAtMSB8fFxuICAgICAgICAvLyBBbGxvdzogQ3RybCtBXG4gICAgICAgIChldmVudC5rZXlDb2RlID09PSA2NSAmJiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSkgfHxcbiAgICAgICAgLy8gQWxsb3c6IEN0cmwrQ1xuICAgICAgICAoZXZlbnQua2V5Q29kZSA9PT0gNjcgJiYgKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSkpIHx8XG4gICAgICAgIC8vIEFsbG93OiBDdHJsK1ZcbiAgICAgICAgKGV2ZW50LmtleUNvZGUgPT09IDg2ICYmIChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpKSB8fFxuICAgICAgICAvLyBBbGxvdzogQ3RybCtYXG4gICAgICAgIChldmVudC5rZXlDb2RlID09PSA4OCAmJiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSkgfHxcbiAgICAgICAgLy8gQWxsb3c6IGhvbWUsIGVuZCwgbGVmdCwgcmlnaHRcbiAgICAgICAgKGV2ZW50LmtleUNvZGUgPj0gMzUgJiYgZXZlbnQua2V5Q29kZSA8PSAzOSkpIHtcbiAgICAgICAgLy8gbGV0IGl0IGhhcHBlbiwgZG9uJ3QgZG8gYW55dGhpbmdcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gRW5zdXJlIHRoYXQgaXQgaXMgYSBudW1iZXIgYW5kIHN0b3AgdGhlIGtleXByZXNzXG4gICAgICBpZiAoKGV2ZW50LnNoaWZ0S2V5IHx8IChldmVudC5rZXlDb2RlIDwgNDggfHwgZXZlbnQua2V5Q29kZSA+IDU3KSkgJiYgKGV2ZW50LmtleUNvZGUgPCA5NiB8fCBldmVudC5rZXlDb2RlID4gMTA1KSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgLy8gSWYgY3JlZGl0Y2FyZCBudW1iZXIgZXhjZWVkcyB0aGUgbGltaXQgcHJvdmlkZWQgYnkgYnJhaW50cmVlIGFwaSByZXR1cm4gZmFsc2UuXG4gICAgICBpZiAodGhpcy5uZ3hNYXhMZW5ndGgpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLnJlcGxhY2UoL1xccy9nLCAnJykubGVuZ3RoO1xuICAgICAgICByZXR1cm4gKHZhbHVlIDwgdGhpcy5uZ3hNYXhMZW5ndGgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD4pIHsgfVxuXG59XG4iXX0=