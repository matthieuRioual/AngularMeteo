import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
const apiKey: string = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getCurrentWeatherbyCity(loc: string) {
    return this.http.get(`${environment.apiUrl}/weather?q=${loc}&appid=${apiKey}`)

  }
  getCurrentWeatherbyCoord(lat: string, long: string) {
    return this.http.get(`${environment.apiUrl}/weather?lat=${lat}&lon=${long}&appid=${apiKey}`)
  }

  getForecastbyCity(loc: string) {
    return this.http.get(`${environment.apiUrl}/forecast?q=${loc}&appid=${apiKey}`)
  }
  getForecastbyCoord(lat: string, long: string) {
    return this.http.get(`${environment.apiUrl}/forecast?lat=${lat}&long=${long}&appid=${apiKey}`)
  }

}
