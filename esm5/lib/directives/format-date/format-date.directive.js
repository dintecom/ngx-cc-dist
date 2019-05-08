/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /**
     * @param {?} event
     * @return {?}
     */
    FormatDateDirective.prototype.formatDate = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var eventValue = ((/** @type {?} */ (event.target))).value;
        /** @type {?} */
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
    FormatDateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngxFormatDate]'
                },] }
    ];
    /** @nocollapse */
    FormatDateDirective.ctorParameters = function () { return [
        { type: NgControl }
    ]; };
    FormatDateDirective.propDecorators = {
        formatDate: [{ type: HostListener, args: ['input', ['$event'],] }]
    };
    return FormatDateDirective;
}());
export { FormatDateDirective };
if (false) {
    /**
     * isUpdated - check if input is udpated or not
     * @type {?}
     */
    FormatDateDirective.prototype.isUpdated;
    /**
     * @type {?}
     * @private
     */
    FormatDateDirective.prototype.control;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LWRhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNjLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvZm9ybWF0LWRhdGUvZm9ybWF0LWRhdGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0M7SUFVRSw2QkFBb0IsT0FBa0I7UUFBbEIsWUFBTyxHQUFQLE9BQU8sQ0FBVzs7OztRQUZ0QyxjQUFTLEdBQUcsS0FBSyxDQUFDO0lBRXdCLENBQUM7Ozs7O0lBRVIsd0NBQVU7Ozs7SUFBN0MsVUFBOEMsS0FBb0I7O1lBQzFELFVBQVUsR0FBRyxDQUFDLG1CQUFBLEtBQUssQ0FBQyxNQUFNLEVBQW9CLENBQUMsQ0FBQyxLQUFLOztZQUNyRCxLQUFLLEdBQUcsUUFBUSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMxQyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxLQUFLLElBQUksRUFBRSxJQUFJLEtBQUssSUFBSSxFQUFFLEVBQUU7WUFDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFJLEtBQUssUUFBSyxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDdkI7YUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQUksS0FBSyxRQUFLLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN2QjthQUFNLElBQ0wsQ0FBQyxJQUFJLENBQUMsU0FBUztZQUNmLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFJLFVBQVUsUUFBSyxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDdkI7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUM7O2dCQWxDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtpQkFDNUI7Ozs7Z0JBSlEsU0FBUzs7OzZCQWNmLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBd0JuQywwQkFBQztDQUFBLEFBcENELElBb0NDO1NBakNZLG1CQUFtQjs7Ozs7O0lBSzlCLHdDQUFrQjs7Ozs7SUFFTixzQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmd4Rm9ybWF0RGF0ZV0nXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1hdERhdGVEaXJlY3RpdmUge1xuXG4gIC8qKlxuICAgKiBpc1VwZGF0ZWQgLSBjaGVjayBpZiBpbnB1dCBpcyB1ZHBhdGVkIG9yIG5vdFxuICAgKi9cbiAgaXNVcGRhdGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250cm9sOiBOZ0NvbnRyb2wpIHsgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQnXSkgZm9ybWF0RGF0ZShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGNvbnN0IGV2ZW50VmFsdWUgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoZXZlbnRWYWx1ZSwgMTApO1xuICAgIGlmICghZXZlbnRWYWx1ZSkge1xuICAgICAgdGhpcy5pc1VwZGF0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuY29udHJvbC5jb250cm9sLnNldFZhbHVlKGV2ZW50VmFsdWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaXNVcGRhdGVkICYmIHZhbHVlID49IDEwICYmIHZhbHVlIDw9IDEyKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY29udHJvbC5zZXRWYWx1ZShgJHt2YWx1ZX0gLyBgKTtcbiAgICAgIHRoaXMuaXNVcGRhdGVkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmlzVXBkYXRlZCAmJiB2YWx1ZSA+PSAyICYmIHZhbHVlIDw9IDkpIHtcbiAgICAgIHRoaXMuY29udHJvbC5jb250cm9sLnNldFZhbHVlKGAwJHt2YWx1ZX0gLyBgKTtcbiAgICAgIHRoaXMuaXNVcGRhdGVkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgIXRoaXMuaXNVcGRhdGVkICYmXG4gICAgICBldmVudFZhbHVlLmxlbmd0aCA9PT0gMiAmJiAodmFsdWUgPCAxMiAmJiB2YWx1ZSA+IDApKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY29udHJvbC5zZXRWYWx1ZShgJHtldmVudFZhbHVlfSAvIGApO1xuICAgICAgdGhpcy5pc1VwZGF0ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY29udHJvbC5zZXRWYWx1ZShldmVudFZhbHVlKTtcbiAgICB9XG4gIH1cblxufVxuIl19