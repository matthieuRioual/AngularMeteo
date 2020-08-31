import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-currentweather',
  templateUrl: './currentweather.component.html',
  styleUrls: ['./currentweather.component.css']
})
export class CurrentweatherComponent implements OnInit {

  @Input() weather_information: any;
  @Input() after_day: string;
  @Input() name:string;
  weather_date = new Date();

  constructor() {
  }

  ngOnInit(): void {
    this.weather_date.setDate(this.weather_date.getDate() + Number(this.after_day));
  }

}
