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
    })
], NgxCcModule);
export { NgxCcModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNjLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jYy8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtY2MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNyRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFZLG1CQUFtQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUF3Qm5ELElBQWEsV0FBVyxtQkFBeEIsTUFBYSxXQUFXO0lBQ3RCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBZ0I7UUFDN0IsT0FBTztZQUNMLFFBQVEsRUFBRSxhQUFXO1lBQ3JCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsbUJBQW1CO29CQUM1QixRQUFRLGtDQUFPLGlCQUFpQixHQUFLLE1BQU0sQ0FBQyxTQUFTLENBQUU7aUJBQ3hEO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUFaWSxXQUFXO0lBdEJ2QixRQUFRLENBQUM7UUFDUixZQUFZLEVBQUU7WUFDWixjQUFjO1lBQ2QsbUJBQW1CO1lBQ25CLGVBQWU7WUFDZixtQkFBbUI7WUFDbkIsY0FBYztTQUNmO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLFdBQVc7WUFDWCxjQUFjO1lBQ2Qsa0JBQWtCO1NBQ25CO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsY0FBYztZQUNkLGVBQWU7WUFDZixjQUFjO1lBQ2QsbUJBQW1CO1lBQ25CLG1CQUFtQjtTQUNwQjtLQUNGLENBQUM7R0FDVyxXQUFXLENBWXZCO1NBWlksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ3hDY0NvbXBvbmVudCB9IGZyb20gJy4vbmd4LWNjLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgTnVtYmVyT25seURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9udW1iZXItb25seS9udW1iZXItb25seS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2NEYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jYy1kYXRlL2NjLWRhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1hdERhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZm9ybWF0LWRhdGUvZm9ybWF0LWRhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IENjQ3Z2Q29tcG9uZW50IH0gZnJvbSAnLi9jYy1jdnYvY2MtY3Z2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDY0NvbmZpZywgQ0NfQ0FSRF9JQ09OU19UT0tFTiB9IGZyb20gJy4vbmd4LWNjLmNvbmZpZyc7XG5pbXBvcnQgeyBleHRlcm5hbENhcmRJY29ucyB9IGZyb20gJy4vbmd4LWNjLmljb25zJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTmd4Q2NDb21wb25lbnQsXG4gICAgTnVtYmVyT25seURpcmVjdGl2ZSxcbiAgICBDY0RhdGVDb21wb25lbnQsXG4gICAgRm9ybWF0RGF0ZURpcmVjdGl2ZSxcbiAgICBDY0N2dkNvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTmd4Q2NDb21wb25lbnQsXG4gICAgQ2NEYXRlQ29tcG9uZW50LFxuICAgIENjQ3Z2Q29tcG9uZW50LFxuICAgIE51bWJlck9ubHlEaXJlY3RpdmUsXG4gICAgRm9ybWF0RGF0ZURpcmVjdGl2ZVxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hDY01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogQ2NDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5neENjTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBDQ19DQVJEX0lDT05TX1RPS0VOLFxuICAgICAgICAgIHVzZVZhbHVlOiB7IC4uLmV4dGVybmFsQ2FyZEljb25zLCAuLi5jb25maWcuY2FyZEljb25zIH0sXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=