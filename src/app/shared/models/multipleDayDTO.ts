import { oneDayDTO } from './oneDayDTO';

export interface multipleDayDTO {
    list: oneDayDTO[],
    city: {
        name: string,
        timezone: number
    }


}

