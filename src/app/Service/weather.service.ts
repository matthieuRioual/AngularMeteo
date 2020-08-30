import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/table';

const apiKey: string = environment.apiKey;
const apiURL: string = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private localisation: any;
  public Datas = new BehaviorSubject('');
  public meteoDatas = this.Datas.asObservable();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  //return an observable JSON from openweather with the current weather
  getCurrentWeatherbyCity(loc: string): Observable<any> {
    return this.http.get(`${apiURL}/weather?q=${loc}&appid=${apiKey}`);
  }

  //triggered when we click on the submit button. We receive values of form as parameters
  changeLocalisation(loc: any) {
    this.localisation = loc;
    this.getCurrentWeatherbyCity(loc).subscribe(datas => this.Datas.next(datas));
  }

}
