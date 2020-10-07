import { Component, Inject, OnInit } from '@angular/core';
/* import { ActivatedRoute } from '@angular/router';
import { WeatherServiceService } from '../shared/services/weather-service.service'; */
import { DailyMeteo } from '../shared/models/DailyMeteo';
import { DisplayData } from '../display-data/display-data.component';
import { ActivatedRoute } from '@angular/router';
import { WeatherServiceService } from '../shared/services/weather-service.service';
import { paramsDTO } from '../shared/models/paramsDTO';

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

  getMeteo(localisation: paramsDTO) {
    if (localisation.name) {
      this.weatherService.getForecastWeatherbyCity(localisation.name).subscribe(data => this.meteoData = data);
    };
    if (localisation.lat && localisation.long) {
      this.weatherService.getForecastWeatherbyLoc(localisation.lat, localisation.long).subscribe(data => this.meteoData = data)
    };
  }



}
