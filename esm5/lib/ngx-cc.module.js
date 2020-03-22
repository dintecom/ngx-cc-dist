import { __assign, __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxCcComponent } from './ngx-cc.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NumberOnlyDirective } from './directives/number-only/number-only.directive';
import { CcDateComponent } from './cc-date/cc-date.component';
import { FormatDateDirective } from './directives/format-date/format-date.directive';
import { CcCvvComponent } from './cc-cvv/cc-cvv.component';
import { CC_CARD_ICONS_TOKEN } from './ngx-cc.config';
import { externalCardIcons } from './ngx-cc.icons';
var NgxCcModule = /** @class */ (function () {
    function NgxCcModule() {
    }
    NgxCcModule_1 = NgxCcModule;
    NgxCcModule.forRoot = function (config) {
        return {
            ngModule: NgxCcModule_1,
            providers: [
                {
                    provide: CC_CARD_ICONS_TOKEN,
                    useValue: __assign(__assign({}, externalCardIcons), config.cardIcons),
                }
            ]
        };
    };
    var NgxCcModule_1;
    NgxCcModule = NgxCcModule_1 = __decorate([
        NgModule({
            declarations: [
                NgxCcComponent,
                NumberOnlyDirective,
                CcDateComponent,
                FormatDateDirective,
                CcCvvComponent
            ],
            imports: [
                CommonModule,
                FormsModule,
                MatInputModule,
                MatFormFieldModule
            ],
            exports: [
                NgxCcComponent,
                CcDateComponent,
                CcCvvComponent,
                NumberOnlyDirective,
                FormatDateDirective
            ],
        })
    ], NgxCcModule);
    return NgxCcModule;
}());
export { NgxCcModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNjLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jYy8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtY2MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDckYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQVksbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQXdCbkQ7SUFBQTtJQVlBLENBQUM7b0JBWlksV0FBVztJQUNmLG1CQUFPLEdBQWQsVUFBZSxNQUFnQjtRQUM3QixPQUFPO1lBQ0wsUUFBUSxFQUFFLGFBQVc7WUFDckIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxtQkFBbUI7b0JBQzVCLFFBQVEsd0JBQU8saUJBQWlCLEdBQUssTUFBTSxDQUFDLFNBQVMsQ0FBRTtpQkFDeEQ7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOztJQVhVLFdBQVc7UUF0QnZCLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWixjQUFjO2dCQUNkLG1CQUFtQjtnQkFDbkIsZUFBZTtnQkFDZixtQkFBbUI7Z0JBQ25CLGNBQWM7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsY0FBYztnQkFDZCxrQkFBa0I7YUFDbkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsY0FBYztnQkFDZCxlQUFlO2dCQUNmLGNBQWM7Z0JBQ2QsbUJBQW1CO2dCQUNuQixtQkFBbUI7YUFDcEI7U0FDRixDQUFDO09BQ1csV0FBVyxDQVl2QjtJQUFELGtCQUFDO0NBQUEsQUFaRCxJQVlDO1NBWlksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ3hDY0NvbXBvbmVudCB9IGZyb20gJy4vbmd4LWNjLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgTnVtYmVyT25seURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9udW1iZXItb25seS9udW1iZXItb25seS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2NEYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jYy1kYXRlL2NjLWRhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1hdERhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZm9ybWF0LWRhdGUvZm9ybWF0LWRhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IENjQ3Z2Q29tcG9uZW50IH0gZnJvbSAnLi9jYy1jdnYvY2MtY3Z2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDY0NvbmZpZywgQ0NfQ0FSRF9JQ09OU19UT0tFTiB9IGZyb20gJy4vbmd4LWNjLmNvbmZpZyc7XG5pbXBvcnQgeyBleHRlcm5hbENhcmRJY29ucyB9IGZyb20gJy4vbmd4LWNjLmljb25zJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTmd4Q2NDb21wb25lbnQsXG4gICAgTnVtYmVyT25seURpcmVjdGl2ZSxcbiAgICBDY0RhdGVDb21wb25lbnQsXG4gICAgRm9ybWF0RGF0ZURpcmVjdGl2ZSxcbiAgICBDY0N2dkNvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTmd4Q2NDb21wb25lbnQsXG4gICAgQ2NEYXRlQ29tcG9uZW50LFxuICAgIENjQ3Z2Q29tcG9uZW50LFxuICAgIE51bWJlck9ubHlEaXJlY3RpdmUsXG4gICAgRm9ybWF0RGF0ZURpcmVjdGl2ZVxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hDY01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogQ2NDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5neENjTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBDQ19DQVJEX0lDT05TX1RPS0VOLFxuICAgICAgICAgIHVzZVZhbHVlOiB7IC4uLmV4dGVybmFsQ2FyZEljb25zLCAuLi5jb25maWcuY2FyZEljb25zIH0sXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=