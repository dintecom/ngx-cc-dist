/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class NgxCcModule {
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
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNjLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jYy8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtY2MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNyRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDckYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBd0IzRCxNQUFNLE9BQU8sV0FBVzs7O1lBdEJ2QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGNBQWM7b0JBQ2QsbUJBQW1CO29CQUNuQixlQUFlO29CQUNmLG1CQUFtQjtvQkFDbkIsY0FBYztpQkFDZjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLGNBQWM7b0JBQ2Qsa0JBQWtCO2lCQUNuQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsY0FBYztvQkFDZCxlQUFlO29CQUNmLGNBQWM7b0JBQ2QsbUJBQW1CO29CQUNuQixtQkFBbUI7aUJBQ3BCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmd4Q2NDb21wb25lbnQgfSBmcm9tICcuL25neC1jYy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IE51bWJlck9ubHlEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbnVtYmVyLW9ubHkvbnVtYmVyLW9ubHkuZGlyZWN0aXZlJztcbmltcG9ydCB7IENjRGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vY2MtZGF0ZS9jYy1kYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtYXREYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2Zvcm1hdC1kYXRlL2Zvcm1hdC1kYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDY0N2dkNvbXBvbmVudCB9IGZyb20gJy4vY2MtY3Z2L2NjLWN2di5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOZ3hDY0NvbXBvbmVudCxcbiAgICBOdW1iZXJPbmx5RGlyZWN0aXZlLFxuICAgIENjRGF0ZUNvbXBvbmVudCxcbiAgICBGb3JtYXREYXRlRGlyZWN0aXZlLFxuICAgIENjQ3Z2Q29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOZ3hDY0NvbXBvbmVudCxcbiAgICBDY0RhdGVDb21wb25lbnQsXG4gICAgQ2NDdnZDb21wb25lbnQsXG4gICAgTnVtYmVyT25seURpcmVjdGl2ZSxcbiAgICBGb3JtYXREYXRlRGlyZWN0aXZlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4Q2NNb2R1bGUgeyB9XG4iXX0=