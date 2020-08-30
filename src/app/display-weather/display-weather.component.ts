import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../Service/weather.service';


@Component({
  selector: 'app-display-weather',
  templateUrl: './display-weather.component.html',
  styleUrls: ['./display-weather.component.css']
})
export class DisplayWeatherComponent implements OnInit {

  informations: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.meteoDatas.subscribe(datas => { this.informations = datas, console.log(datas) });
  }


}
