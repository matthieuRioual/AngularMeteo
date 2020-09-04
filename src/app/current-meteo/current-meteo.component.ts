
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


  getMeteo(localisation: any) {
    if (localisation.city) {
      this.weatherService.getCurrentWeatherbyCity(localisation.city).subscribe(datas => {
        this.meteoData = new dailyMeteo();
        this.meteoData.city = datas.name;
        this.meteoData.date = new Date((datas.dt + datas.timezone) * 1000).toISOString().slice(-13, -5);
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