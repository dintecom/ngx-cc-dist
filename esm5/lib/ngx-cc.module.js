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
var NgxCcModule = /** @class */ (function () {
    function NgxCcModule() {
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
    return NgxCcModule;
}());
export { NgxCcModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNjLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jYy8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtY2MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNyRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDckYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTNEO0lBQUE7SUFzQjJCLENBQUM7O2dCQXRCM0IsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixjQUFjO3dCQUNkLG1CQUFtQjt3QkFDbkIsZUFBZTt3QkFDZixtQkFBbUI7d0JBQ25CLGNBQWM7cUJBQ2Y7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxjQUFjO3dCQUNkLGtCQUFrQjtxQkFDbkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixjQUFjO3dCQUNkLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3FCQUNwQjtpQkFDRjs7SUFDMEIsa0JBQUM7Q0FBQSxBQXRCNUIsSUFzQjRCO1NBQWYsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ3hDY0NvbXBvbmVudCB9IGZyb20gJy4vbmd4LWNjLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgTnVtYmVyT25seURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9udW1iZXItb25seS9udW1iZXItb25seS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2NEYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jYy1kYXRlL2NjLWRhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1hdERhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZm9ybWF0LWRhdGUvZm9ybWF0LWRhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IENjQ3Z2Q29tcG9uZW50IH0gZnJvbSAnLi9jYy1jdnYvY2MtY3Z2LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5neENjQ29tcG9uZW50LFxuICAgIE51bWJlck9ubHlEaXJlY3RpdmUsXG4gICAgQ2NEYXRlQ29tcG9uZW50LFxuICAgIEZvcm1hdERhdGVEaXJlY3RpdmUsXG4gICAgQ2NDdnZDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE5neENjQ29tcG9uZW50LFxuICAgIENjRGF0ZUNvbXBvbmVudCxcbiAgICBDY0N2dkNvbXBvbmVudCxcbiAgICBOdW1iZXJPbmx5RGlyZWN0aXZlLFxuICAgIEZvcm1hdERhdGVEaXJlY3RpdmVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hDY01vZHVsZSB7IH1cbiJdfQ==