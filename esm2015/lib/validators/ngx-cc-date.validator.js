/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import validator from 'card-validator';
/** @type {?} */
export const CardExpirationValidator = (/**
 * @param {?} control
 * @return {?}
 */
(control) => {
    /** @type {?} */
    const date = validator.expirationDate(control.value);
    return (date.month && date.year) ? null : { invalidDate: true };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNjLWRhdGUudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNjLyIsInNvdXJjZXMiOlsibGliL3ZhbGlkYXRvcnMvbmd4LWNjLWRhdGUudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLFNBQVMsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFdkMsTUFBTSxPQUFPLHVCQUF1Qjs7OztBQUFHLENBQUMsT0FBb0IsRUFBRSxFQUFFOztVQUN0RCxJQUFJLEdBQUcsU0FBUyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQ3BELE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUNwRSxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB2YWxpZGF0b3IgZnJvbSAnY2FyZC12YWxpZGF0b3InO1xuXG5leHBvcnQgY29uc3QgQ2FyZEV4cGlyYXRpb25WYWxpZGF0b3IgPSAoY29udHJvbDogRm9ybUNvbnRyb2wpID0+IHtcbiAgICBjb25zdCBkYXRlID0gdmFsaWRhdG9yLmV4cGlyYXRpb25EYXRlKGNvbnRyb2wudmFsdWUpO1xuICAgIHJldHVybiAoZGF0ZS5tb250aCAmJiBkYXRlLnllYXIpID8gbnVsbCA6IHsgaW52YWxpZERhdGU6IHRydWUgfTtcbn07XG4iXX0=