export interface oneDayDTO {
    dt: number,
    timezone: number,
    name: string,
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: string,
        humidity: string
    },
    wind: {
        speed: number
    },
    weather: [{ description: string, icon: string }]

}

