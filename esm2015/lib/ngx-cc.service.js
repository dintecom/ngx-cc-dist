import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import creditCardType from 'credit-card-type';
import * as i0 from "@angular/core";
let NgxCcService = class NgxCcService {
    getCardType(cardNumber) {
        return creditCardType(cardNumber)[0];
    }
    prettyCardNumber(cardNumber, cardType) {
        const card = creditCardType.getTypeInfo(cardType);
        if (card) {
            const offsets = [].concat(0, card.gaps, cardNumber.length);
            const components = [];
            for (let i = 0; offsets[i] < cardNumber.length; i++) {
                const start = offsets[i];
                const end = Math.min(offsets[i + 1], cardNumber.length);
                components.push(cardNumber.substring(start, end));
            }
            return components.join(' ');
        }
        return cardNumber;
    }
};
NgxCcService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgxCcService_Factory() { return new NgxCcService(); }, token: NgxCcService, providedIn: "root" });
NgxCcService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], NgxCcService);
export { NgxCcService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNjLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2MvIiwic291cmNlcyI6WyJsaWIvbmd4LWNjLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxjQUFjLE1BQU0sa0JBQWtCLENBQUM7O0FBTTlDLElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7SUFFdkIsV0FBVyxDQUFDLFVBQTJCO1FBQ3JDLE9BQU8sY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxVQUFrQixFQUFFLFFBQVE7UUFDM0MsTUFBTSxJQUFJLEdBQUcsY0FBYyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVsRCxJQUFJLElBQUksRUFBRTtZQUNSLE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNELE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztZQUV0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDbkQsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN4RCxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDbkQ7WUFFRCxPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDN0I7UUFFRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0NBQ0YsQ0FBQTs7QUF4QlksWUFBWTtJQUh4QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csWUFBWSxDQXdCeEI7U0F4QlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IGNyZWRpdENhcmRUeXBlIGZyb20gJ2NyZWRpdC1jYXJkLXR5cGUnO1xuaW1wb3J0IHsgQ2FyZENvbmZpZyB9IGZyb20gJy4vbmd4LWNjLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4Q2NTZXJ2aWNlIHtcblxuICBnZXRDYXJkVHlwZShjYXJkTnVtYmVyOiBudW1iZXIgfCBzdHJpbmcpOiBDYXJkQ29uZmlnIHtcbiAgICByZXR1cm4gY3JlZGl0Q2FyZFR5cGUoY2FyZE51bWJlcilbMF07XG4gIH1cblxuICBwcmV0dHlDYXJkTnVtYmVyKGNhcmROdW1iZXI6IHN0cmluZywgY2FyZFR5cGUpIHtcbiAgICBjb25zdCBjYXJkID0gY3JlZGl0Q2FyZFR5cGUuZ2V0VHlwZUluZm8oY2FyZFR5cGUpO1xuXG4gICAgaWYgKGNhcmQpIHtcbiAgICAgIGNvbnN0IG9mZnNldHMgPSBbXS5jb25jYXQoMCwgY2FyZC5nYXBzLCBjYXJkTnVtYmVyLmxlbmd0aCk7XG4gICAgICBjb25zdCBjb21wb25lbnRzID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBvZmZzZXRzW2ldIDwgY2FyZE51bWJlci5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBzdGFydCA9IG9mZnNldHNbaV07XG4gICAgICAgIGNvbnN0IGVuZCA9IE1hdGgubWluKG9mZnNldHNbaSArIDFdLCBjYXJkTnVtYmVyLmxlbmd0aCk7XG4gICAgICAgIGNvbXBvbmVudHMucHVzaChjYXJkTnVtYmVyLnN1YnN0cmluZyhzdGFydCwgZW5kKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb21wb25lbnRzLmpvaW4oJyAnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2FyZE51bWJlcjtcbiAgfVxufVxuIl19