import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../Service/weather.service';


@Component({
  selector: 'app-display-weather',
  templateUrl: './display-weather.component.html',
  styleUrls: ['./display-weather.component.css']
})
export class DisplayWeatherComponent implements OnInit {

  localisation_method: string;
  display_method: string = 'current';
  informations: any;
  @Input() localisation: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }


  setMethod(method: string) {
    this.display_method = method;
  }

  getmeteo() {
    switch (this.localisation_method) {
      case 'City': {
        switch (this.display_method) {
          case 'forecast': {
            this.weatherService.getForecastbyCity(this.localisation.city).subscribe(datas => this.informations = datas);
          }
          case 'current': {
            this.weatherService.getCurrentWeatherbyCity(this.localisation.city).subscribe(datas => this.informations = datas);

          }
        }
      }
      case 'Geographic positioning': {
        switch (this.display_method) {
          case 'City': {
            this.weatherService.getCurrentWeatherbyCoord(this.localisation.lat, this.localisation.long).subscribe(datas => this.informations = datas);
          }
          case 'forecast': {
            this.weatherService.getForecastbyCoord(this.localisation.lat, this.localisation.long).subscribe(datas => this.informations = datas);
          }
        }
      }
    }

  }

  changelocalisationMethod(event: any) {
    this.localisation_method = event.name;
  }

}
