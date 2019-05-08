import { NgControl } from '@angular/forms';
export declare class FormatDateDirective {
    private control;
    /**
     * isUpdated - check if input is udpated or not
     */
    isUpdated: boolean;
    constructor(control: NgControl);
    formatDate(event: KeyboardEvent): void;
}
