import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../Service/weather.service';


@Component({
  selector: 'app-display-weather',
  templateUrl: './display-weather.component.html',
  styleUrls: ['./display-weather.component.css']
})
export class DisplayWeatherComponent implements OnInit {

  meteodatas: any;
  display_method: string = 'current';

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.meteoDatas.subscribe(datas => { this.meteodatas = datas });

  }

  

}
