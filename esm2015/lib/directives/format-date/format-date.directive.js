/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';
export class FormatDateDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LWRhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNjLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvZm9ybWF0LWRhdGUvZm9ybWF0LWRhdGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLM0MsTUFBTSxPQUFPLG1CQUFtQjs7OztJQU85QixZQUFvQixPQUFrQjtRQUFsQixZQUFPLEdBQVAsT0FBTyxDQUFXOzs7O1FBRnRDLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFFd0IsQ0FBQzs7Ozs7SUFFUixVQUFVLENBQUMsS0FBb0I7O2NBQzFELFVBQVUsR0FBRyxDQUFDLG1CQUFBLEtBQUssQ0FBQyxNQUFNLEVBQW9CLENBQUMsQ0FBQyxLQUFLOztjQUNyRCxLQUFLLEdBQUcsUUFBUSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMxQyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxLQUFLLElBQUksRUFBRSxJQUFJLEtBQUssSUFBSSxFQUFFLEVBQUU7WUFDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN2QjthQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtZQUN0RCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO2FBQU0sSUFDTCxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQ2YsVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtZQUN0RCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxVQUFVLEtBQUssQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDM0M7SUFDSCxDQUFDOzs7WUFsQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7YUFDNUI7Ozs7WUFKUSxTQUFTOzs7eUJBY2YsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7Ozs7OztJQUpqQyx3Q0FBa0I7Ozs7O0lBRU4sc0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25neEZvcm1hdERhdGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBGb3JtYXREYXRlRGlyZWN0aXZlIHtcblxuICAvKipcbiAgICogaXNVcGRhdGVkIC0gY2hlY2sgaWYgaW5wdXQgaXMgdWRwYXRlZCBvciBub3RcbiAgICovXG4gIGlzVXBkYXRlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udHJvbDogTmdDb250cm9sKSB7IH1cblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50J10pIGZvcm1hdERhdGUoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBjb25zdCBldmVudFZhbHVlID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KGV2ZW50VmFsdWUsIDEwKTtcbiAgICBpZiAoIWV2ZW50VmFsdWUpIHtcbiAgICAgIHRoaXMuaXNVcGRhdGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmNvbnRyb2wuY29udHJvbC5zZXRWYWx1ZShldmVudFZhbHVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmlzVXBkYXRlZCAmJiB2YWx1ZSA+PSAxMCAmJiB2YWx1ZSA8PSAxMikge1xuICAgICAgdGhpcy5jb250cm9sLmNvbnRyb2wuc2V0VmFsdWUoYCR7dmFsdWV9IC8gYCk7XG4gICAgICB0aGlzLmlzVXBkYXRlZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmICghdGhpcy5pc1VwZGF0ZWQgJiYgdmFsdWUgPj0gMiAmJiB2YWx1ZSA8PSA5KSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY29udHJvbC5zZXRWYWx1ZShgMCR7dmFsdWV9IC8gYCk7XG4gICAgICB0aGlzLmlzVXBkYXRlZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICF0aGlzLmlzVXBkYXRlZCAmJlxuICAgICAgZXZlbnRWYWx1ZS5sZW5ndGggPT09IDIgJiYgKHZhbHVlIDwgMTIgJiYgdmFsdWUgPiAwKSkge1xuICAgICAgdGhpcy5jb250cm9sLmNvbnRyb2wuc2V0VmFsdWUoYCR7ZXZlbnRWYWx1ZX0gLyBgKTtcbiAgICAgIHRoaXMuaXNVcGRhdGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cm9sLmNvbnRyb2wuc2V0VmFsdWUoZXZlbnRWYWx1ZSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==