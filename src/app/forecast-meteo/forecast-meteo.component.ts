import { Component, Inject, OnInit } from '@angular/core';
/* import { ActivatedRoute } from '@angular/router';
import { WeatherServiceService } from '../shared/services/weather-service.service'; */
import { DailyMeteo } from '../shared/models/DailyMeteo';
import { Subscription } from 'rxjs';
import { DisplayData } from '../display-data/display-data.component';
import { ActivatedRoute } from '@angular/router';
import { WeatherServiceService } from '../shared/services/weather-service.service';

@Component({
  selector: 'app-forecast-meteo',
  templateUrl: './forecast-meteo.component.html',
  styleUrls: ['./forecast-meteo.component.css']
})
export class ForecastMeteoComponent extends DisplayData implements OnInit {

  meteoData: DailyMeteo[];

  constructor(route: ActivatedRoute, weatherService: WeatherServiceService) {
    super(weatherService, route)
  }

  getMeteo(localisation: any) {
    if (localisation.city) {
      this.weatherService.getForecastWeatherbyCity(localisation.city).subscribe(data => this.meteoData = data);
    };
    if (localisation.lat && localisation.long) {
      this.weatherService.getForecastWeatherbyLoc(localisation.lat, localisation.long).subscribe(data => this.meteoData = data)
    };
  }



}
