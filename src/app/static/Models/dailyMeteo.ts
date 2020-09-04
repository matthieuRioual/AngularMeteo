import { Time } from '@angular/common';

export class dailyMeteo {
    city: string;
    date?: string;
    temp?: number;
    temp_feeling?: number;
    temp_min?: number;
    temp_max?: number;
    description?: string;
    icon?: string;
    pressure?: string;
    humidity?: string;
    wind?:number;
}