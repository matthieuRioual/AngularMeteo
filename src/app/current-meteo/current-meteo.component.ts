
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherServiceService } from '../shared/services/weather-service.service';
import { DailyMeteo } from '../shared/models/DailyMeteo';
import { DisplayData } from '../display-data/display-data.component';
import { paramsDTO } from '../shared/models/paramsDTO';
import { NgxSpinnerService } from "ngx-spinner";



@Component({
  selector: 'app-current-meteo',
  templateUrl: './current-meteo.component.html',
  styleUrls: ['./current-meteo.component.css']
})
export class CurrentMeteoComponent extends DisplayData implements OnInit {

  meteoData: DailyMeteo;

  constructor(route: ActivatedRoute, weatherService: WeatherServiceService, private spinner: NgxSpinnerService) {
    super(weatherService, route)
  }

  getMeteo(localisation: paramsDTO): void {
    
    if (localisation.name) {
      this.weatherService.getCurrentWeatherbyCity(localisation.name).subscribe(data => this.meteoData = data);
    }
    
    else if (localisation.lat && localisation.long) {
      this.weatherService.getCurrentWeatherbyLoc(localisation.lat, localisation.long).subscribe(data => this.meteoData = data);
    }
  }
}








