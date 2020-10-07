
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

  constructor(route: ActivatedRoute, @Inject(WeatherServiceService) weatherService: WeatherServiceService) {
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
  getMeteo(localisation: any): void {
    console.log(localisation);
    if (localisation.name) {
      this.weatherService.getCurrentWeatherbyCity(localisation.name).subscribe(data => this.meteoData[0] = data);
    }
    else if (localisation.lat && localisation.long) {
      this.weatherService.getCurrentWeatherbyLoc(localisation.lat, localisation.long).subscribe(data => this.meteoData[0] = data);
    }
  }
}








