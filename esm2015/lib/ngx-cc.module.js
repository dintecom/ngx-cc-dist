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
export class NgxCcModule {
    static forRoot(config) {
        return {
            ngModule: NgxCcModule,
            providers: [
                {
                    provide: CC_CARD_ICONS_TOKEN,
                    useValue: Object.assign(Object.assign({}, externalCardIcons), config.cardIcons),
                }
            ]
        };
    }
}
NgxCcModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNjLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1jYy9zcmMvbGliL25neC1jYy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNyRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFZLG1CQUFtQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUF3Qm5ELE1BQU0sT0FBTyxXQUFXO0lBQ3RCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBZ0I7UUFDN0IsT0FBTztZQUNMLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsbUJBQW1CO29CQUM1QixRQUFRLGtDQUFPLGlCQUFpQixHQUFLLE1BQU0sQ0FBQyxTQUFTLENBQUU7aUJBQ3hEO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBakNGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osY0FBYztvQkFDZCxtQkFBbUI7b0JBQ25CLGVBQWU7b0JBQ2YsbUJBQW1CO29CQUNuQixjQUFjO2lCQUNmO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsY0FBYztvQkFDZCxrQkFBa0I7aUJBQ25CO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxjQUFjO29CQUNkLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCxtQkFBbUI7b0JBQ25CLG1CQUFtQjtpQkFDcEI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ3hDY0NvbXBvbmVudCB9IGZyb20gJy4vbmd4LWNjLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgTnVtYmVyT25seURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9udW1iZXItb25seS9udW1iZXItb25seS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2NEYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jYy1kYXRlL2NjLWRhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1hdERhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZm9ybWF0LWRhdGUvZm9ybWF0LWRhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IENjQ3Z2Q29tcG9uZW50IH0gZnJvbSAnLi9jYy1jdnYvY2MtY3Z2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDY0NvbmZpZywgQ0NfQ0FSRF9JQ09OU19UT0tFTiB9IGZyb20gJy4vbmd4LWNjLmNvbmZpZyc7XG5pbXBvcnQgeyBleHRlcm5hbENhcmRJY29ucyB9IGZyb20gJy4vbmd4LWNjLmljb25zJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTmd4Q2NDb21wb25lbnQsXG4gICAgTnVtYmVyT25seURpcmVjdGl2ZSxcbiAgICBDY0RhdGVDb21wb25lbnQsXG4gICAgRm9ybWF0RGF0ZURpcmVjdGl2ZSxcbiAgICBDY0N2dkNvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTmd4Q2NDb21wb25lbnQsXG4gICAgQ2NEYXRlQ29tcG9uZW50LFxuICAgIENjQ3Z2Q29tcG9uZW50LFxuICAgIE51bWJlck9ubHlEaXJlY3RpdmUsXG4gICAgRm9ybWF0RGF0ZURpcmVjdGl2ZVxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hDY01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogQ2NDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE5neENjTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ3hDY01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQ0NfQ0FSRF9JQ09OU19UT0tFTixcbiAgICAgICAgICB1c2VWYWx1ZTogeyAuLi5leHRlcm5hbENhcmRJY29ucywgLi4uY29uZmlnLmNhcmRJY29ucyB9LFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19