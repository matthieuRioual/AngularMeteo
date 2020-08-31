import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../Service/weather.service';


@Component({
  selector: 'app-display-weather',
  templateUrl: './display-weather.component.html',
  styleUrls: ['./display-weather.component.css']
})
export class DisplayWeatherComponent implements OnInit {

  currentmeteodatas: any;
  forecastmeteodatas: any;
  display_method: string = 'current';


  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.currentmeteoDatas.subscribe(datas => { this.currentmeteodatas = datas });
    this.weatherService.forecastmeteoDatas.subscribe(datas => { this.forecastmeteodatas = datas; console.log(datas) });

  }


  changedisplayMethode(event: any) {
    this.display_method = event.target.value;
  }


}
