export interface CardConfig {
    code: {
        name: string;
        size: number;
    };
    gaps: number[];
    lengths: number[];
    matchStrength: number;
    niceType: string;
    patterns: number[];
    type: string;
}
