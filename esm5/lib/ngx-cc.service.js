/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import creditCardType from 'credit-card-type';
import * as i0 from "@angular/core";
var NgxCcService = /** @class */ (function () {
    function NgxCcService() {
    }
    /**
     * @param {?} cardNumber
     * @return {?}
     */
    NgxCcService.prototype.getCardType = /**
     * @param {?} cardNumber
     * @return {?}
     */
    function (cardNumber) {
        return creditCardType(cardNumber)[0];
    };
    /**
     * @param {?} cardNumber
     * @param {?} cardType
     * @return {?}
     */
    NgxCcService.prototype.prettyCardNumber = /**
     * @param {?} cardNumber
     * @param {?} cardType
     * @return {?}
     */
    function (cardNumber, cardType) {
        /** @type {?} */
        var card = creditCardType.getTypeInfo(cardType);
        if (card) {
            /** @type {?} */
            var offsets = [].concat(0, card.gaps, cardNumber.length);
            /** @type {?} */
            var components = [];
            for (var i = 0; offsets[i] < cardNumber.length; i++) {
                /** @type {?} */
                var start = offsets[i];
                /** @type {?} */
                var end = Math.min(offsets[i + 1], cardNumber.length);
                components.push(cardNumber.substring(start, end));
            }
            return components.join(' ');
        }
        return cardNumber;
    };
    NgxCcService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxCcService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgxCcService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgxCcService_Factory() { return new NgxCcService(); }, token: NgxCcService, providedIn: "root" });
    return NgxCcService;
}());
export { NgxCcService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNjLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2MvIiwic291cmNlcyI6WyJsaWIvbmd4LWNjLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxjQUFjLE1BQU0sa0JBQWtCLENBQUM7O0FBSTlDO0lBS0U7SUFBZ0IsQ0FBQzs7Ozs7SUFFakIsa0NBQVc7Ozs7SUFBWCxVQUFZLFVBQTJCO1FBQ3JDLE9BQU8sY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7OztJQUVELHVDQUFnQjs7Ozs7SUFBaEIsVUFBaUIsVUFBa0IsRUFBRSxRQUFROztZQUNyQyxJQUFJLEdBQUcsY0FBYyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFFakQsSUFBSSxJQUFJLEVBQUU7O2dCQUNGLE9BQU8sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUM7O2dCQUNwRCxVQUFVLEdBQUcsRUFBRTtZQUVyQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7b0JBQzdDLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDOztvQkFDbEIsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDO2dCQUN2RCxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDbkQ7WUFFRCxPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDN0I7UUFFRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDOztnQkE1QkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7dUJBUkQ7Q0FtQ0MsQUE3QkQsSUE2QkM7U0ExQlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IGNyZWRpdENhcmRUeXBlIGZyb20gJ2NyZWRpdC1jYXJkLXR5cGUnO1xuaW1wb3J0IHsgQ2FyZENvbmZpZyB9IGZyb20gJy4vbmd4LWNjLm1vZGVsJztcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hDY1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgZ2V0Q2FyZFR5cGUoY2FyZE51bWJlcjogbnVtYmVyIHwgc3RyaW5nKTogQ2FyZENvbmZpZyB7XG4gICAgcmV0dXJuIGNyZWRpdENhcmRUeXBlKGNhcmROdW1iZXIpWzBdO1xuICB9XG5cbiAgcHJldHR5Q2FyZE51bWJlcihjYXJkTnVtYmVyOiBzdHJpbmcsIGNhcmRUeXBlKSB7XG4gICAgY29uc3QgY2FyZCA9IGNyZWRpdENhcmRUeXBlLmdldFR5cGVJbmZvKGNhcmRUeXBlKTtcblxuICAgIGlmIChjYXJkKSB7XG4gICAgICBjb25zdCBvZmZzZXRzID0gW10uY29uY2F0KDAsIGNhcmQuZ2FwcywgY2FyZE51bWJlci5sZW5ndGgpO1xuICAgICAgY29uc3QgY29tcG9uZW50cyA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgb2Zmc2V0c1tpXSA8IGNhcmROdW1iZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBvZmZzZXRzW2ldO1xuICAgICAgICBjb25zdCBlbmQgPSBNYXRoLm1pbihvZmZzZXRzW2kgKyAxXSwgY2FyZE51bWJlci5sZW5ndGgpO1xuICAgICAgICBjb21wb25lbnRzLnB1c2goY2FyZE51bWJlci5zdWJzdHJpbmcoc3RhcnQsIGVuZCkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29tcG9uZW50cy5qb2luKCcgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhcmROdW1iZXI7XG4gIH1cbn1cbiJdfQ==