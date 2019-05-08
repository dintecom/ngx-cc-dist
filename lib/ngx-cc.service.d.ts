import { CardConfig } from './ngx-cc.model';
export declare class NgxCcService {
    constructor();
    getCardType(cardNumber: number | string): CardConfig;
    prettyCardNumber(cardNumber: string, cardType: any): string;
}
