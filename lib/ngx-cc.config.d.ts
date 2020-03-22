import { InjectionToken } from '@angular/core';
export interface CardIcons {
    default: string;
    visa: string;
    mastercard: string;
    'american-express': string;
    'diners-club': string;
    discover: string;
    jcb: string;
    unionpay: string;
    maestro: string;
    mir: string;
    elo: string;
    hiper: string;
    hipercard: string;
}
export interface CcConfig {
    cardIcons: Partial<CardIcons>;
}
export declare const CC_CARD_ICONS_TOKEN: InjectionToken<string>;
