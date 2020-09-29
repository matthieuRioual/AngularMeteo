import { DailyMeteo } from './models/DailyMeteo';

export function formatData(singleobject: any, cityinfo: any): DailyMeteo {
    let oneDayMeteo: DailyMeteo;
    oneDayMeteo = new DailyMeteo();
    oneDayMeteo.city = cityinfo.name;
    oneDayMeteo.date = this.getDate((singleobject.dt + cityinfo.timezone - 7200) * 1000);
    oneDayMeteo.temp = Math.round((singleobject.main.temp - 273) * 10) / 10;
    oneDayMeteo.temp_feeling = Math.trunc(singleobject.main.feels_like - 273);
    oneDayMeteo.temp_min = Math.trunc(singleobject.main.temp_min - 273);
    oneDayMeteo.temp_max = Math.trunc(singleobject.main.temp_max - 273);
    oneDayMeteo.description = singleobject.weather[0].description;

    oneDayMeteo.icon = singleobject.weather[0].icon;
    oneDayMeteo.pressure = singleobject.main.pressure;
    oneDayMeteo.humidity = singleobject.main.humidity;
    oneDayMeteo.wind = Math.round(Number(singleobject.wind.speed) * 3.6 * 100) / 100;
    return (oneDayMeteo);
}