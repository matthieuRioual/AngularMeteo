
import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherServiceService } from '../shared/services/weather-service.service';
import { DailyMeteo } from '../shared/models/DailyMeteo';
import { DisplayData } from '../display-data/display-data.component';


@Component({
  selector: 'app-current-meteo',
  templateUrl: './current-meteo.component.html',
  styleUrls: ['./current-meteo.component.css']
})
export class CurrentMeteoComponent extends DisplayData implements OnInit {

  constructor(@Inject(ActivatedRoute) route: ActivatedRoute, @Inject(WeatherServiceService) weatherService: WeatherServiceService) {
    super(weatherService, route)
  }

  /*city: string;
      date: Date;
      temp: number;
      temp_feeling?: number;
      temp_min?: number;
      temp_max?: number;
      weather_description: string;
      icon: string;
      pressure?: string;
      humidity?: string;
  }*/
  getMeteo(localisation: any) {
    if (localisation.city) {
      this.weatherService.getCurrentWeatherbyCity(localisation.city).subscribe(datas => {
        this.meteoData[0] = new DailyMeteo();
        this.meteoData[0].city = datas.name;
        console.log(datas.timezone);

        this.meteoData[0].date = this.getDate((datas.dt + datas.timezone - 7200) * 1000);
        this.meteoData[0].temp = Math.round((datas.main.temp - 273) * 10) / 10;
        this.meteoData[0].temp_feeling = Math.trunc(datas.main.feels_like - 273);
        this.meteoData[0].temp_min = Math.trunc(datas.main.temp_min - 273);
        this.meteoData[0].temp_max = Math.trunc(datas.main.temp_max - 273);
        this.meteoData[0].description = datas.weather[0].description;
        this.meteoData[0].icon = datas.weather[0].icon;
        this.meteoData[0].pressure = datas.main.pressure;
        this.meteoData[0].humidity = datas.main.humidity;
        this.meteoData[0].wind = Math.round(Number(datas.wind.speed) * 3.6 * 100) / 100;
      });
    }
    else if (localisation.lat && localisation.long) {
      this.weatherService.getCurrentWeatherbyLoc(localisation.lat, localisation.long).subscribe(datas => {
        this.meteoData[0] = new DailyMeteo();
        this.meteoData[0].city = datas.name;
        console.log(datas.timezone);
        this.meteoData[0].date = this.getDate((datas.dt + datas.timezone - 7200) * 1000);
        this.meteoData[0].temp = Math.round((datas.main.temp - 273) * 10) / 10;
        this.meteoData[0].temp_feeling = Math.trunc(datas.main.feels_like - 273);
        this.meteoData[0].temp_min = Math.trunc(datas.main.temp_min - 273);
        this.meteoData[0].temp_max = Math.trunc(datas.main.temp_max - 273);
        this.meteoData[0].description = datas.weather[0].description;
        this.meteoData[0].icon = datas.weather[0].icon;
        this.meteoData[0].pressure = datas.main.pressure;
        this.meteoData[0].humidity = datas.main.humidity;
        this.meteoData[0].wind = Math.round(Number(datas.wind.speed) * 3.6 * 100) / 100;
      });
    }
  }

}