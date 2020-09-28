import { Component, OnInit, Inject, Directive } from '@angular/core';
import { DailyMeteo } from '../shared/models/DailyMeteo';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { WeatherServiceService } from '../shared/services/weather-service.service'

@Directive()
export abstract class DisplayData implements OnInit {

  meteoData: DailyMeteo[] = [];
  queryParamsSubscription: Subscription;

  constructor(protected weatherService: WeatherServiceService, protected route: ActivatedRoute) { };

  ngOnInit() {
    this.queryParamsSubscription = this.route.queryParams.subscribe(params => {
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
          let oneDayMeteo: DailyMeteo;
          oneDayMeteo = new DailyMeteo();
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
          let oneDayMeteo: DailyMeteo;
          oneDayMeteo = new DailyMeteo();
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
