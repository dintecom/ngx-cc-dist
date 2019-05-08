/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import validator from 'card-validator';
/** @type {?} */
export var CardCvvValidator = (/**
 * @param {?} control
 * @return {?}
 */
function (control) {
    /** @type {?} */
    var cvv = validator.cvv(control.value);
    return (cvv.isValid) ? null : { invalidCvv: true };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNjLWN2di52YWxpZGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2MvIiwic291cmNlcyI6WyJsaWIvdmFsaWRhdG9ycy9uZ3gtY2MtY3Z2LnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxTQUFTLE1BQU0sZ0JBQWdCLENBQUM7O0FBRXZDLE1BQU0sS0FBTyxnQkFBZ0I7Ozs7QUFBRyxVQUFDLE9BQW9COztRQUMzQyxHQUFHLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFDdkQsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgdmFsaWRhdG9yIGZyb20gJ2NhcmQtdmFsaWRhdG9yJztcblxuZXhwb3J0IGNvbnN0IENhcmRDdnZWYWxpZGF0b3IgPSAoY29udHJvbDogRm9ybUNvbnRyb2wpID0+IHtcbiAgICBjb25zdCBjdnYgPSB2YWxpZGF0b3IuY3Z2KGNvbnRyb2wudmFsdWUpO1xuICAgIHJldHVybiAoY3Z2LmlzVmFsaWQpID8gbnVsbCA6IHsgaW52YWxpZEN2djogdHJ1ZSB9O1xufTtcbiJdfQ==