var NgxCcModule_1;
import { __decorate } from "tslib";
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
const ɵ0 = externalCardIcons;
let NgxCcModule = NgxCcModule_1 = class NgxCcModule {
    static forRoot(config) {
        return {
            ngModule: NgxCcModule_1,
            providers: [
                {
                    provide: CC_CARD_ICONS_TOKEN,
                    useValue: Object.assign(Object.assign({}, externalCardIcons), config.cardIcons),
                }
            ]
        };
    }
};
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
        providers: [
            {
                provide: CC_CARD_ICONS_TOKEN,
                useValue: ɵ0,
            }
        ]
    })
], NgxCcModule);
export { NgxCcModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNjLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jYy8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtY2MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNyRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFZLG1CQUFtQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7V0EwQm5DLGlCQUFpQjtBQUlqQyxJQUFhLFdBQVcsbUJBQXhCLE1BQWEsV0FBVztJQUN0QixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQWdCO1FBQzdCLE9BQU87WUFDTCxRQUFRLEVBQUUsYUFBVztZQUNyQixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLG1CQUFtQjtvQkFDNUIsUUFBUSxrQ0FBTyxpQkFBaUIsR0FBSyxNQUFNLENBQUMsU0FBUyxDQUFFO2lCQUN4RDthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBWlksV0FBVztJQTVCdkIsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ1osY0FBYztZQUNkLG1CQUFtQjtZQUNuQixlQUFlO1lBQ2YsbUJBQW1CO1lBQ25CLGNBQWM7U0FDZjtRQUNELE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixXQUFXO1lBQ1gsY0FBYztZQUNkLGtCQUFrQjtTQUNuQjtRQUNELE9BQU8sRUFBRTtZQUNQLGNBQWM7WUFDZCxlQUFlO1lBQ2YsY0FBYztZQUNkLG1CQUFtQjtZQUNuQixtQkFBbUI7U0FDcEI7UUFDRCxTQUFTLEVBQUU7WUFDVDtnQkFDRSxPQUFPLEVBQUUsbUJBQW1CO2dCQUM1QixRQUFRLElBQW1CO2FBQzVCO1NBQ0Y7S0FDRixDQUFDO0dBQ1csV0FBVyxDQVl2QjtTQVpZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmd4Q2NDb21wb25lbnQgfSBmcm9tICcuL25neC1jYy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IE51bWJlck9ubHlEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbnVtYmVyLW9ubHkvbnVtYmVyLW9ubHkuZGlyZWN0aXZlJztcbmltcG9ydCB7IENjRGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vY2MtZGF0ZS9jYy1kYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtYXREYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2Zvcm1hdC1kYXRlL2Zvcm1hdC1kYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDY0N2dkNvbXBvbmVudCB9IGZyb20gJy4vY2MtY3Z2L2NjLWN2di5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2NDb25maWcsIENDX0NBUkRfSUNPTlNfVE9LRU4gfSBmcm9tICcuL25neC1jYy5jb25maWcnO1xuaW1wb3J0IHsgZXh0ZXJuYWxDYXJkSWNvbnMgfSBmcm9tICcuL25neC1jYy5pY29ucyc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5neENjQ29tcG9uZW50LFxuICAgIE51bWJlck9ubHlEaXJlY3RpdmUsXG4gICAgQ2NEYXRlQ29tcG9uZW50LFxuICAgIEZvcm1hdERhdGVEaXJlY3RpdmUsXG4gICAgQ2NDdnZDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE5neENjQ29tcG9uZW50LFxuICAgIENjRGF0ZUNvbXBvbmVudCxcbiAgICBDY0N2dkNvbXBvbmVudCxcbiAgICBOdW1iZXJPbmx5RGlyZWN0aXZlLFxuICAgIEZvcm1hdERhdGVEaXJlY3RpdmVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogQ0NfQ0FSRF9JQ09OU19UT0tFTixcbiAgICAgIHVzZVZhbHVlOiBleHRlcm5hbENhcmRJY29ucyxcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4Q2NNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IENjQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ3hDY01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQ0NfQ0FSRF9JQ09OU19UT0tFTixcbiAgICAgICAgICB1c2VWYWx1ZTogeyAuLi5leHRlcm5hbENhcmRJY29ucywgLi4uY29uZmlnLmNhcmRJY29ucyB9LFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19