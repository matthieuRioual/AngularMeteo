import { oneDayDTO } from './oneDayDTO';

export class DailyMeteo {

    constructor() {
    }

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
    wind?: number;

    public static processBackendMeteo(dto: oneDayDTO): DailyMeteo {
        let meteo = new DailyMeteo();
        meteo.city = dto.name;
        meteo.date = DailyMeteo.getDate((dto.dt + dto.timezone - 7200) * 1000)
        meteo.temp = Math.round((dto.main.temp - 273) * 10) / 10;
        meteo.temp_feeling = Math.trunc(dto.main.feels_like - 273);
        meteo.temp_max = Math.trunc(dto.main.temp_max - 273);
        meteo.temp_min = Math.trunc(dto.main.temp_min - 273);
        meteo.description = dto.weather[0].description
        meteo.icon = dto.weather[0].icon
        meteo.pressure = dto.main.pressure
        meteo.humidity = dto.main.humidity
        meteo.wind = Math.round(Number(dto.wind.speed) * 3.6 * 100) / 100;
        return meteo;
    }

    public static processBackendMeteos(dto: oneDayDTO): DailyMeteo[] {
        let forecastmeteo:DailyMeteo[]=[];
        let meteo=new DailyMeteo();
        meteo.city = dto.name;
        meteo.date = DailyMeteo.getDate((dto.dt + dto.timezone - 7200) * 1000)
        meteo.temp = Math.round((dto.main.temp - 273) * 10) / 10;
        meteo.temp_feeling = Math.trunc(dto.main.feels_like - 273);
        meteo.temp_max = Math.trunc(dto.main.temp_max - 273);
        meteo.temp_min = Math.trunc(dto.main.temp_min - 273);
        meteo.description = dto.weather[0].description
        meteo.icon = dto.weather[0].icon
        meteo.pressure = dto.main.pressure
        meteo.humidity = dto.main.humidity
        meteo.wind = Math.round(Number(dto.wind.speed) * 3.6 * 100) / 100;
        forecastmeteo.push(meteo);
        return
    }

    private static getDate(ts_ms: number): string {
        var date_ob = new Date(ts_ms);
        // year as 4 digits (YYYY)
        var year = date_ob.getFullYear();
        // month as 2 digits (MM)
        var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        // date as 2 digits (DD)
        var date = ("0" + date_ob.getDate()).slice(-2);
        // hours as 2 digits (hh)
        var hours = ("0" + date_ob.getHours()).slice(-2);
        // minutes as 2 digits (mm)
        var minutes = ("0" + date_ob.getMinutes()).slice(-2);
        // seconds as 2 digits (ss)
        var seconds = ("0" + date_ob.getSeconds()).slice(-2);
        return (year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
    }
}