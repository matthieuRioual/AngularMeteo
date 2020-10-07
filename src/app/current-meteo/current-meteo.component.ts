
import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherServiceService } from '../shared/services/weather-service.service';
import { DailyMeteo } from '../shared/models/DailyMeteo';
import { DisplayData } from '../display-data/display-data.component';
import { paramsDTO } from '../shared/models/paramsDTO';


@Component({
  selector: 'app-current-meteo',
  templateUrl: './current-meteo.component.html',
  styleUrls: ['./current-meteo.component.css']
})
export class CurrentMeteoComponent extends DisplayData implements OnInit {

  meteoData: DailyMeteo;

  constructor(route: ActivatedRoute, weatherService: WeatherServiceService) {
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
  getMeteo(localisation: paramsDTO): void {
    console.log(localisation)
    if (localisation.name) {
      this.weatherService.getCurrentWeatherbyCity(localisation.name).subscribe(data => this.meteoData = data);
    }
    /* else if (localisation.lat && localisation.long) {
      this.weatherService.getCurrentWeatherbyLoc(localisation.lat, localisation.long).subscribe(data => this.meteoData = data);
    } */
  }
}








