/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import creditCardType from 'credit-card-type';
import * as i0 from "@angular/core";
export class NgxCcService {
    constructor() { }
    /**
     * @param {?} cardNumber
     * @return {?}
     */
    getCardType(cardNumber) {
        return creditCardType(cardNumber)[0];
    }
    /**
     * @param {?} cardNumber
     * @param {?} cardType
     * @return {?}
     */
    prettyCardNumber(cardNumber, cardType) {
        /** @type {?} */
        const card = creditCardType.getTypeInfo(cardType);
        if (card) {
            /** @type {?} */
            const offsets = [].concat(0, card.gaps, cardNumber.length);
            /** @type {?} */
            const components = [];
            for (let i = 0; offsets[i] < cardNumber.length; i++) {
                /** @type {?} */
                const start = offsets[i];
                /** @type {?} */
                const end = Math.min(offsets[i + 1], cardNumber.length);
                components.push(cardNumber.substring(start, end));
            }
            return components.join(' ');
        }
        return cardNumber;
    }
}
NgxCcService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgxCcService.ctorParameters = () => [];
/** @nocollapse */ NgxCcService.ngInjectableDef = i0.defineInjectable({ factory: function NgxCcService_Factory() { return new NgxCcService(); }, token: NgxCcService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNjLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2MvIiwic291cmNlcyI6WyJsaWIvbmd4LWNjLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxjQUFjLE1BQU0sa0JBQWtCLENBQUM7O0FBTzlDLE1BQU0sT0FBTyxZQUFZO0lBRXZCLGdCQUFnQixDQUFDOzs7OztJQUVqQixXQUFXLENBQUMsVUFBMkI7UUFDckMsT0FBTyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsVUFBa0IsRUFBRSxRQUFROztjQUNyQyxJQUFJLEdBQUcsY0FBYyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFFakQsSUFBSSxJQUFJLEVBQUU7O2tCQUNGLE9BQU8sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUM7O2tCQUNwRCxVQUFVLEdBQUcsRUFBRTtZQUVyQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7c0JBQzdDLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDOztzQkFDbEIsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDO2dCQUN2RCxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDbkQ7WUFFRCxPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDN0I7UUFFRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDOzs7WUE1QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgY3JlZGl0Q2FyZFR5cGUgZnJvbSAnY3JlZGl0LWNhcmQtdHlwZSc7XG5pbXBvcnQgeyBDYXJkQ29uZmlnIH0gZnJvbSAnLi9uZ3gtY2MubW9kZWwnO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neENjU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBnZXRDYXJkVHlwZShjYXJkTnVtYmVyOiBudW1iZXIgfCBzdHJpbmcpOiBDYXJkQ29uZmlnIHtcbiAgICByZXR1cm4gY3JlZGl0Q2FyZFR5cGUoY2FyZE51bWJlcilbMF07XG4gIH1cblxuICBwcmV0dHlDYXJkTnVtYmVyKGNhcmROdW1iZXI6IHN0cmluZywgY2FyZFR5cGUpIHtcbiAgICBjb25zdCBjYXJkID0gY3JlZGl0Q2FyZFR5cGUuZ2V0VHlwZUluZm8oY2FyZFR5cGUpO1xuXG4gICAgaWYgKGNhcmQpIHtcbiAgICAgIGNvbnN0IG9mZnNldHMgPSBbXS5jb25jYXQoMCwgY2FyZC5nYXBzLCBjYXJkTnVtYmVyLmxlbmd0aCk7XG4gICAgICBjb25zdCBjb21wb25lbnRzID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBvZmZzZXRzW2ldIDwgY2FyZE51bWJlci5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBzdGFydCA9IG9mZnNldHNbaV07XG4gICAgICAgIGNvbnN0IGVuZCA9IE1hdGgubWluKG9mZnNldHNbaSArIDFdLCBjYXJkTnVtYmVyLmxlbmd0aCk7XG4gICAgICAgIGNvbXBvbmVudHMucHVzaChjYXJkTnVtYmVyLnN1YnN0cmluZyhzdGFydCwgZW5kKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb21wb25lbnRzLmpvaW4oJyAnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2FyZE51bWJlcjtcbiAgfVxufVxuIl19