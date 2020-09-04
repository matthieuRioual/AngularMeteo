import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherServiceService } from '../static/Services/weather-service.service';
import { dailyMeteo } from '../static/Models/dailyMeteo';

@Component({
  selector: 'app-forecast-meteo',
  templateUrl: './forecast-meteo.component.html',
  styleUrls: ['./forecast-meteo.component.css']
})
export class ForecastMeteoComponent implements OnInit {


  meteoData: dailyMeteo[] = [];


  constructor(private route: ActivatedRoute, private weatherService: WeatherServiceService) { }

  ngOnInit(): void {
    this.getMeteo(this.route.snapshot.queryParams);

  }



  getMeteo(localisation: any) {
    if (localisation.city) {
      this.weatherService.getForecastWeatherbyCity(localisation.city).subscribe(datas => {
        console.log(datas.list.length);
        for (let i = 0; i < datas.list.length; i++) {
          let dailydatas = datas.list[i];
          let oneDayMeteo: dailyMeteo;
          oneDayMeteo = new dailyMeteo();
          oneDayMeteo.city = datas.city.name;
          oneDayMeteo.date = new Date((dailydatas.dt + datas.city.  timezone) * 1000).toISOString().slice(-13, -5);
          oneDayMeteo.temp = Math.round((dailydatas.main.temp - 273) * 10) / 10;
          oneDayMeteo.temp_feeling = Math.trunc(dailydatas.main.feels_like - 273);
          oneDayMeteo.temp_min = Math.trunc(dailydatas.main.temp_min - 273);
          oneDayMeteo.temp_max = Math.trunc(dailydatas.main.temp_max - 273);
          oneDayMeteo.description = dailydatas.weather[0].description;

          oneDayMeteo.icon = dailydatas.weather[0].icon;
          oneDayMeteo.pressure = dailydatas.main.pressure;
          oneDayMeteo.humidity = dailydatas.main.humidity;
          oneDayMeteo.wind = Math.round(Number(dailydatas.wind.speed) * 3.6 * 100) / 100;
          this.meteoData.push(oneDayMeteo);
        }

      });
    }
  }
}
