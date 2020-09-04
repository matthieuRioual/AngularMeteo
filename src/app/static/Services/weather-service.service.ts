import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { dailyMeteo } from '../Models/dailyMeteo';
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



const apiKey: string = environment.apiKey;
const apiURL: string = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http: HttpClient) { }

  getCurrentWeatherbyCity(loc: string): Observable<any> {
    return this.http.get(`${apiURL}/weather?q=${loc}&appid=${apiKey}`);
  }

  getForecastWeatherbyCity(loc: string): Observable<any> {
    return this.http.get(`${apiURL}/forecast?q=${loc}&appid=${apiKey}`);
  }




}
