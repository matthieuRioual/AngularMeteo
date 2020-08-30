import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../Service/weather.service';


@Component({
  selector: 'app-currentweather',
  templateUrl: './currentweather.component.html',
  styleUrls: ['./currentweather.component.css']
})
export class CurrentweatherComponent implements OnInit {

  @Input() weather_information: any;
  @Input() after_day: string;
  weather_date = new Date();
  
  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.weather_date.setDate(this.weather_date.getDate() + Number(this.after_day));
  }

}
