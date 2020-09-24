import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';



const apiKey: string = environment.apiKey;
const apiURL: string = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http: HttpClient) { }

  getCurrentWeatherbyCity(loc: string): Observable<any> {
    return this.http.get(`${apiURL}/weather?q=${loc}&cnt=4&appid=${apiKey}`);
  }

  getForecastWeatherbyCity(loc: string): Observable<any> {
    return this.http.get(`${apiURL}/forecast?q=${loc}&appid=${apiKey}`);
  }

  getCurrentWeatherbyLoc(lat: string, long: string): Observable<any> {
    return this.http.get(`${apiURL}/weather?lat=${lat}&lon=${long}&appid=${apiKey}`);
  }

  getForecastWeatherbyLoc(lat: string, long: string): Observable<any> {
    return this.http.get(`${apiURL}/forecast?lat=${lat}&lon=${long}&appid=${apiKey}`);
  }



}
