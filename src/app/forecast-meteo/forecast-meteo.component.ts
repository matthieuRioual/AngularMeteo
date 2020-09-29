import { Component, Inject, OnInit } from '@angular/core';
/* import { ActivatedRoute } from '@angular/router';
import { WeatherServiceService } from '../shared/services/weather-service.service'; */
import { DailyMeteo } from '../shared/models/DailyMeteo';
import { Subscription } from 'rxjs';
import { DisplayData } from '../display-data/display-data.component';
import { ActivatedRoute } from '@angular/router';
import { WeatherServiceService } from '../shared/services/weather-service.service';
import { formatData } from '../shared/utils';

@Component({
  selector: 'app-forecast-meteo',
  templateUrl: './forecast-meteo.component.html',
  styleUrls: ['./forecast-meteo.component.css']
})
export class ForecastMeteoComponent extends DisplayData implements OnInit {

  constructor(@Inject(ActivatedRoute) route: ActivatedRoute, @Inject(WeatherServiceService) weatherService: WeatherServiceService) {
    super(weatherService, route)
  }

  getMeteo(localisation: any) {
    if (localisation.city) {
      this.weatherService.getForecastWeatherbyCity(localisation.city).subscribe(datas => {
        for (let i = 0; i < 4; i++) {
          this.meteoData.push(formatData(datas.list[i], datas.city));

        };
      });
    };
    if (localisation.lat && localisation.long) {
      this.weatherService.getForecastWeatherbyLoc(localisation.lat, localisation.long).subscribe(datas => {
        for (let i = 0; i < datas.list.length; i++) {
          this.meteoData.push(formatData(datas.list[i], datas.city));

        };
      });
    };
  }



}
