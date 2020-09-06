
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherServiceService } from '../static/Services/weather-service.service';
import { dailyMeteo } from '../static/Models/dailyMeteo';


@Component({
  selector: 'app-current-meteo',
  templateUrl: './current-meteo.component.html',
  styleUrls: ['./current-meteo.component.css']
})
export class CurrentMeteoComponent implements OnInit {


  meteoData: dailyMeteo;


  constructor(private route: ActivatedRoute, private weatherService: WeatherServiceService) {

  }

  ngOnInit(): void {
    this.getMeteo(this.route.snapshot.queryParams);


  }

  getDate(ts_ms: number): string {
    var date_ob = new Date(ts_ms);

    // year as 4 digits (YYYY)
    var year = date_ob.getFullYear();

    // month as 2 digits (MM)
    var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    // date as 2 digits (DD)
    var date = ("0" + date_ob.getDate()).slice(-2);

    // hours as 2 digits (hh)
    var hours = ("0" + date_ob.getHours()).slice(-2);

    // minutes as 2 digits (mm)
    var minutes = ("0" + date_ob.getMinutes()).slice(-2);

    // seconds as 2 digits (ss)
    var seconds = ("0" + date_ob.getSeconds()).slice(-2);

    return (year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
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
  getMeteo(localisation: any) {
    if (localisation.city) {
      this.weatherService.getCurrentWeatherbyCity(localisation.city).subscribe(datas => {
        this.meteoData = new dailyMeteo();
        this.meteoData.city = datas.name;
        console.log(datas.timezone);

        this.meteoData.date = this.getDate((datas.dt + datas.timezone -7200) * 1000);
        this.meteoData.temp = Math.round((datas.main.temp - 273) * 10) / 10;
        this.meteoData.temp_feeling = Math.trunc(datas.main.feels_like - 273);
        this.meteoData.temp_min = Math.trunc(datas.main.temp_min - 273);
        this.meteoData.temp_max = Math.trunc(datas.main.temp_max - 273);
        this.meteoData.description = datas.weather[0].description;
        this.meteoData.icon = datas.weather[0].icon;
        this.meteoData.pressure = datas.main.pressure;
        this.meteoData.humidity = datas.main.humidity;
        this.meteoData.wind = Math.round(Number(datas.wind.speed) * 3.6 * 100) / 100;
      });
    }
    else if (localisation.lat && localisation.long) {
      this.weatherService.getCurrentWeatherbyLoc(localisation.lat, localisation.long).subscribe(datas => {
        this.meteoData = new dailyMeteo();
        this.meteoData.city = datas.name;
        console.log(datas.timezone);
        this.meteoData.date = this.getDate((datas.dt + datas.timezone-7200) * 1000);
        this.meteoData.temp = Math.round((datas.main.temp - 273) * 10) / 10;
        this.meteoData.temp_feeling = Math.trunc(datas.main.feels_like - 273);
        this.meteoData.temp_min = Math.trunc(datas.main.temp_min - 273);
        this.meteoData.temp_max = Math.trunc(datas.main.temp_max - 273);
        this.meteoData.description = datas.weather[0].description;
        this.meteoData.icon = datas.weather[0].icon;
        this.meteoData.pressure = datas.main.pressure;
        this.meteoData.humidity = datas.main.humidity;
        this.meteoData.wind = Math.round(Number(datas.wind.speed) * 3.6 * 100) / 100;
      });
    }
  }

}