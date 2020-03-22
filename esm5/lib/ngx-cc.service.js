import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import creditCardType from 'credit-card-type';
import * as i0 from "@angular/core";
var NgxCcService = /** @class */ (function () {
    function NgxCcService() {
    }
    NgxCcService.prototype.getCardType = function (cardNumber) {
        return creditCardType(cardNumber)[0];
    };
    NgxCcService.prototype.prettyCardNumber = function (cardNumber, cardType) {
        var card = creditCardType.getTypeInfo(cardType);
        if (card) {
            var offsets = [].concat(0, card.gaps, cardNumber.length);
            var components = [];
            for (var i = 0; offsets[i] < cardNumber.length; i++) {
                var start = offsets[i];
                var end = Math.min(offsets[i + 1], cardNumber.length);
                components.push(cardNumber.substring(start, end));
            }
            return components.join(' ');
        }
        return cardNumber;
    };
    NgxCcService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgxCcService_Factory() { return new NgxCcService(); }, token: NgxCcService, providedIn: "root" });
    NgxCcService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], NgxCcService);
    return NgxCcService;
}());
export { NgxCcService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNjLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2MvIiwic291cmNlcyI6WyJsaWIvbmd4LWNjLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxjQUFjLE1BQU0sa0JBQWtCLENBQUM7O0FBTTlDO0lBQUE7S0F3QkM7SUF0QkMsa0NBQVcsR0FBWCxVQUFZLFVBQTJCO1FBQ3JDLE9BQU8sY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCx1Q0FBZ0IsR0FBaEIsVUFBaUIsVUFBa0IsRUFBRSxRQUFRO1FBQzNDLElBQU0sSUFBSSxHQUFHLGNBQWMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbEQsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzRCxJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7WUFFdEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ25ELElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekIsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEQsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ25EO1lBRUQsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzdCO1FBRUQsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7SUF2QlUsWUFBWTtRQUh4QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csWUFBWSxDQXdCeEI7dUJBaENEO0NBZ0NDLEFBeEJELElBd0JDO1NBeEJZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCBjcmVkaXRDYXJkVHlwZSBmcm9tICdjcmVkaXQtY2FyZC10eXBlJztcbmltcG9ydCB7IENhcmRDb25maWcgfSBmcm9tICcuL25neC1jYy5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neENjU2VydmljZSB7XG5cbiAgZ2V0Q2FyZFR5cGUoY2FyZE51bWJlcjogbnVtYmVyIHwgc3RyaW5nKTogQ2FyZENvbmZpZyB7XG4gICAgcmV0dXJuIGNyZWRpdENhcmRUeXBlKGNhcmROdW1iZXIpWzBdO1xuICB9XG5cbiAgcHJldHR5Q2FyZE51bWJlcihjYXJkTnVtYmVyOiBzdHJpbmcsIGNhcmRUeXBlKSB7XG4gICAgY29uc3QgY2FyZCA9IGNyZWRpdENhcmRUeXBlLmdldFR5cGVJbmZvKGNhcmRUeXBlKTtcblxuICAgIGlmIChjYXJkKSB7XG4gICAgICBjb25zdCBvZmZzZXRzID0gW10uY29uY2F0KDAsIGNhcmQuZ2FwcywgY2FyZE51bWJlci5sZW5ndGgpO1xuICAgICAgY29uc3QgY29tcG9uZW50cyA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgb2Zmc2V0c1tpXSA8IGNhcmROdW1iZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBvZmZzZXRzW2ldO1xuICAgICAgICBjb25zdCBlbmQgPSBNYXRoLm1pbihvZmZzZXRzW2kgKyAxXSwgY2FyZE51bWJlci5sZW5ndGgpO1xuICAgICAgICBjb21wb25lbnRzLnB1c2goY2FyZE51bWJlci5zdWJzdHJpbmcoc3RhcnQsIGVuZCkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29tcG9uZW50cy5qb2luKCcgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhcmROdW1iZXI7XG4gIH1cbn1cbiJdfQ==