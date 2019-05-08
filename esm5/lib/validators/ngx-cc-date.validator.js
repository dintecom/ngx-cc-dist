/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import validator from 'card-validator';
/** @type {?} */
export var CardExpirationValidator = (/**
 * @param {?} control
 * @return {?}
 */
function (control) {
    /** @type {?} */
    var date = validator.expirationDate(control.value);
    return (date.month && date.year) ? null : { invalidDate: true };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNjLWRhdGUudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNjLyIsInNvdXJjZXMiOlsibGliL3ZhbGlkYXRvcnMvbmd4LWNjLWRhdGUudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLFNBQVMsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFdkMsTUFBTSxLQUFPLHVCQUF1Qjs7OztBQUFHLFVBQUMsT0FBb0I7O1FBQ2xELElBQUksR0FBRyxTQUFTLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDcEQsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDO0FBQ3BFLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHZhbGlkYXRvciBmcm9tICdjYXJkLXZhbGlkYXRvcic7XG5cbmV4cG9ydCBjb25zdCBDYXJkRXhwaXJhdGlvblZhbGlkYXRvciA9IChjb250cm9sOiBGb3JtQ29udHJvbCkgPT4ge1xuICAgIGNvbnN0IGRhdGUgPSB2YWxpZGF0b3IuZXhwaXJhdGlvbkRhdGUoY29udHJvbC52YWx1ZSk7XG4gICAgcmV0dXJuIChkYXRlLm1vbnRoICYmIGRhdGUueWVhcikgPyBudWxsIDogeyBpbnZhbGlkRGF0ZTogdHJ1ZSB9O1xufTtcbiJdfQ==