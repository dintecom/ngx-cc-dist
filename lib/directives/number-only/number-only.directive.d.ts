import { ElementRef } from '@angular/core';
export declare class NumberOnlyDirective {
    private elRef;
    ngxNumberOnly: boolean;
    ngxMaxLength: number;
    private _ngxNumberOnly;
    onKeyDown(event: KeyboardEvent): boolean;
    constructor(elRef: ElementRef<HTMLInputElement>);
}
