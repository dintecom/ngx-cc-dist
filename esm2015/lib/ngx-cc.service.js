import { Injectable } from '@angular/core';
import creditCardType from 'credit-card-type';
import * as i0 from "@angular/core";
export class NgxCcService {
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
}
NgxCcService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgxCcService_Factory() { return new NgxCcService(); }, token: NgxCcService, providedIn: "root" });
NgxCcService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNjLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtY2Mvc3JjL2xpYi9uZ3gtY2Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sY0FBYyxNQUFNLGtCQUFrQixDQUFDOztBQU05QyxNQUFNLE9BQU8sWUFBWTtJQUV2QixXQUFXLENBQUMsVUFBMkI7UUFDckMsT0FBTyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELGdCQUFnQixDQUFDLFVBQWtCLEVBQUUsUUFBUTtRQUMzQyxNQUFNLElBQUksR0FBRyxjQUFjLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRWxELElBQUksSUFBSSxFQUFFO1lBQ1IsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0QsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBRXRCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNuRCxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3hELFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNuRDtZQUVELE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3QjtRQUVELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7Ozs7WUExQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgY3JlZGl0Q2FyZFR5cGUgZnJvbSAnY3JlZGl0LWNhcmQtdHlwZSc7XG5pbXBvcnQgeyBDYXJkQ29uZmlnIH0gZnJvbSAnLi9uZ3gtY2MubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hDY1NlcnZpY2Uge1xuXG4gIGdldENhcmRUeXBlKGNhcmROdW1iZXI6IG51bWJlciB8IHN0cmluZyk6IENhcmRDb25maWcge1xuICAgIHJldHVybiBjcmVkaXRDYXJkVHlwZShjYXJkTnVtYmVyKVswXTtcbiAgfVxuXG4gIHByZXR0eUNhcmROdW1iZXIoY2FyZE51bWJlcjogc3RyaW5nLCBjYXJkVHlwZSkge1xuICAgIGNvbnN0IGNhcmQgPSBjcmVkaXRDYXJkVHlwZS5nZXRUeXBlSW5mbyhjYXJkVHlwZSk7XG5cbiAgICBpZiAoY2FyZCkge1xuICAgICAgY29uc3Qgb2Zmc2V0cyA9IFtdLmNvbmNhdCgwLCBjYXJkLmdhcHMsIGNhcmROdW1iZXIubGVuZ3RoKTtcbiAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IG9mZnNldHNbaV0gPCBjYXJkTnVtYmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gb2Zmc2V0c1tpXTtcbiAgICAgICAgY29uc3QgZW5kID0gTWF0aC5taW4ob2Zmc2V0c1tpICsgMV0sIGNhcmROdW1iZXIubGVuZ3RoKTtcbiAgICAgICAgY29tcG9uZW50cy5wdXNoKGNhcmROdW1iZXIuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbXBvbmVudHMuam9pbignICcpO1xuICAgIH1cblxuICAgIHJldHVybiBjYXJkTnVtYmVyO1xuICB9XG59XG4iXX0=