import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherServiceService } from '../static/Services/weather-service.service';
import { dailyMeteo } from '../static/Models/dailyMeteo';

@Component({
  selector: 'app-forecast-meteo',
  templateUrl: './forecast-meteo.component.html',
  styleUrls: ['./forecast-meteo.component.css']
})
export class ForecastMeteoComponent implements OnInit {


  meteoData: dailyMeteo[] = [];


  constructor(private route: ActivatedRoute, private weatherService: WeatherServiceService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.getMeteo(params); // Print the parameter to the console. 
    });

  }

  getDate(ts_ms: number): string {
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

  getMeteo(localisation: any) {
    if (localisation.city) {
      this.weatherService.getForecastWeatherbyCity(localisation.city).subscribe(datas => {
        for (let i = 0; i < 4; i++) {
          let dailydatas = datas.list[i];
          let oneDayMeteo: dailyMeteo;
          oneDayMeteo = new dailyMeteo();
          oneDayMeteo.city = datas.city.name;
          oneDayMeteo.date = this.getDate((dailydatas.dt + datas.city.timezone - 7200) * 1000);
          oneDayMeteo.temp = Math.round((dailydatas.main.temp - 273) * 10) / 10;
          oneDayMeteo.temp_feeling = Math.trunc(dailydatas.main.feels_like - 273);
          oneDayMeteo.temp_min = Math.trunc(dailydatas.main.temp_min - 273);
          oneDayMeteo.temp_max = Math.trunc(dailydatas.main.temp_max - 273);
          oneDayMeteo.description = dailydatas.weather[0].description;

          oneDayMeteo.icon = dailydatas.weather[0].icon;
          oneDayMeteo.pressure = dailydatas.main.pressure;
          oneDayMeteo.humidity = dailydatas.main.humidity;
          oneDayMeteo.wind = Math.round(Number(dailydatas.wind.speed) * 3.6 * 100) / 100;
          this.meteoData.push(oneDayMeteo);
        }

      });
    };
    if (localisation.lat && localisation.long) {
      this.weatherService.getForecastWeatherbyLoc(localisation.lat, localisation.long).subscribe(datas => {
        for (let i = 0; i < datas.list.length; i++) {
          let dailydatas = datas.list[i];
          let oneDayMeteo: dailyMeteo;
          oneDayMeteo = new dailyMeteo();
          oneDayMeteo.city = datas.city.name;
          oneDayMeteo.date = this.getDate((dailydatas.dt + datas.city.timezone - 7200) * 1000);
          oneDayMeteo.temp = Math.round((dailydatas.main.temp - 273) * 10) / 10;
          oneDayMeteo.temp_feeling = Math.trunc(dailydatas.main.feels_like - 273);
          oneDayMeteo.temp_min = Math.trunc(dailydatas.main.temp_min - 273);
          oneDayMeteo.temp_max = Math.trunc(dailydatas.main.temp_max - 273);
          oneDayMeteo.description = dailydatas.weather[0].description;

          oneDayMeteo.icon = dailydatas.weather[0].icon;
          oneDayMeteo.pressure = dailydatas.main.pressure;
          oneDayMeteo.humidity = dailydatas.main.humidity;
          oneDayMeteo.wind = Math.round(Number(dailydatas.wind.speed) * 3.6 * 100) / 100;
          this.meteoData.push(oneDayMeteo);
        }
      });
    };
  }
}
