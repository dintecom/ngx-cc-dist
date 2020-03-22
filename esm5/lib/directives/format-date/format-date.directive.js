import { __decorate, __metadata } from "tslib";
import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';
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
export { FormatDateDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LWRhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNjLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvZm9ybWF0LWRhdGUvZm9ybWF0LWRhdGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLM0M7SUFPRSw2QkFBb0IsT0FBa0I7UUFBbEIsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQUx0Qzs7V0FFRztRQUNILGNBQVMsR0FBRyxLQUFLLENBQUM7SUFFd0IsQ0FBQztJQUVSLHdDQUFVLEdBQVYsVUFBVyxLQUFvQjtRQUNoRSxJQUFNLFVBQVUsR0FBSSxLQUFLLENBQUMsTUFBMkIsQ0FBQyxLQUFLLENBQUM7UUFDNUQsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzFDLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLEtBQUssSUFBSSxFQUFFLElBQUksS0FBSyxJQUFJLEVBQUUsRUFBRTtZQUNqRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUksS0FBSyxRQUFLLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN2QjthQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtZQUN0RCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBSSxLQUFLLFFBQUssQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO2FBQU0sSUFDTCxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQ2YsVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtZQUN0RCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUksVUFBVSxRQUFLLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN2QjthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzNDO0lBQ0gsQ0FBQzs7Z0JBeEI0QixTQUFTOztJQUVIO1FBQWxDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7eUNBQW1CLGFBQWE7O3lEQXNCakU7SUEvQlUsbUJBQW1CO1FBSC9CLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7U0FDNUIsQ0FBQzt5Q0FRNkIsU0FBUztPQVAzQixtQkFBbUIsQ0FpQy9CO0lBQUQsMEJBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQWpDWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmd4Rm9ybWF0RGF0ZV0nXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1hdERhdGVEaXJlY3RpdmUge1xuXG4gIC8qKlxuICAgKiBpc1VwZGF0ZWQgLSBjaGVjayBpZiBpbnB1dCBpcyB1ZHBhdGVkIG9yIG5vdFxuICAgKi9cbiAgaXNVcGRhdGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250cm9sOiBOZ0NvbnRyb2wpIHsgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQnXSkgZm9ybWF0RGF0ZShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGNvbnN0IGV2ZW50VmFsdWUgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoZXZlbnRWYWx1ZSwgMTApO1xuICAgIGlmICghZXZlbnRWYWx1ZSkge1xuICAgICAgdGhpcy5pc1VwZGF0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuY29udHJvbC5jb250cm9sLnNldFZhbHVlKGV2ZW50VmFsdWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaXNVcGRhdGVkICYmIHZhbHVlID49IDEwICYmIHZhbHVlIDw9IDEyKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY29udHJvbC5zZXRWYWx1ZShgJHt2YWx1ZX0gLyBgKTtcbiAgICAgIHRoaXMuaXNVcGRhdGVkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmlzVXBkYXRlZCAmJiB2YWx1ZSA+PSAyICYmIHZhbHVlIDw9IDkpIHtcbiAgICAgIHRoaXMuY29udHJvbC5jb250cm9sLnNldFZhbHVlKGAwJHt2YWx1ZX0gLyBgKTtcbiAgICAgIHRoaXMuaXNVcGRhdGVkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgIXRoaXMuaXNVcGRhdGVkICYmXG4gICAgICBldmVudFZhbHVlLmxlbmd0aCA9PT0gMiAmJiAodmFsdWUgPCAxMiAmJiB2YWx1ZSA+IDApKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY29udHJvbC5zZXRWYWx1ZShgJHtldmVudFZhbHVlfSAvIGApO1xuICAgICAgdGhpcy5pc1VwZGF0ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY29udHJvbC5zZXRWYWx1ZShldmVudFZhbHVlKTtcbiAgICB9XG4gIH1cblxufVxuIl19