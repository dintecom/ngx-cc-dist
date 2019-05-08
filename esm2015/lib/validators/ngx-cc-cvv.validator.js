/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import validator from 'card-validator';
/** @type {?} */
export const CardCvvValidator = (/**
 * @param {?} control
 * @return {?}
 */
(control) => {
    /** @type {?} */
    const cvv = validator.cvv(control.value);
    return (cvv.isValid) ? null : { invalidCvv: true };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNjLWN2di52YWxpZGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2MvIiwic291cmNlcyI6WyJsaWIvdmFsaWRhdG9ycy9uZ3gtY2MtY3Z2LnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxTQUFTLE1BQU0sZ0JBQWdCLENBQUM7O0FBRXZDLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7QUFBRyxDQUFDLE9BQW9CLEVBQUUsRUFBRTs7VUFDL0MsR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDO0FBQ3ZELENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHZhbGlkYXRvciBmcm9tICdjYXJkLXZhbGlkYXRvcic7XG5cbmV4cG9ydCBjb25zdCBDYXJkQ3Z2VmFsaWRhdG9yID0gKGNvbnRyb2w6IEZvcm1Db250cm9sKSA9PiB7XG4gICAgY29uc3QgY3Z2ID0gdmFsaWRhdG9yLmN2dihjb250cm9sLnZhbHVlKTtcbiAgICByZXR1cm4gKGN2di5pc1ZhbGlkKSA/IG51bGwgOiB7IGludmFsaWRDdnY6IHRydWUgfTtcbn07XG4iXX0=