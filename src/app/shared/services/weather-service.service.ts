import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { LoggerService } from './logger.service'



const apiKey: string = environment.apiKey;
const apiURL: string = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http: HttpClient, private logger: LoggerService) { }

  getCurrentWeatherbyCity(loc: string): Observable<any> {
    this.logger.add('City name' + loc + 'current weather displayed')
    return this.http.get(`${apiURL}/weather?q=${loc}&cnt=4&appid=${apiKey}`).
      pipe(tap(_ => this.logger.add('City name : ' + loc + 'current weather fetched')),
        catchError(this.handleError<any>('City name : ' + loc + 'current weather fetched'))
      );
  }

  getForecastWeatherbyCity(loc: string): Observable<any> {
    return this.http.get(`${apiURL}/forecast?q=${loc}&appid=${apiKey}`)
      .pipe(tap(_ => this.logger.add('City name : ' + loc + 'forecast weather fetched')),
        catchError(this.handleError<any>('City name : ' + loc + 'forecast weather fetched'))
      );
  }

  getCurrentWeatherbyLoc(lat: string, long: string): Observable<any> {
    this.logger.add('Loc pos : lat -> ' + lat + ', long -> ' + long) + 'current weather displayed'
    return this.http.get(`${apiURL}/weather?lat=${lat}&lon=${long}&appid=${apiKey}`).
      pipe(tap(_ => this.logger.add('Loc pos : lat -> ' + lat + ', long -> ' + long + 'current weather displayed')),
        catchError(this.handleError<any>('Loc pos : lat -> ' + lat + ', long -> ' + long + 'current weather displayed'))
      );
  }

  getForecastWeatherbyLoc(lat: string, long: string): Observable<any> {
    this.logger.add('')
    return this.http.get(`${apiURL}/forecast?lat=${lat}&lon=${long}&appid=${apiKey}`).
      pipe(tap(_ => this.logger.add('Loc pos : lat -> ' + lat + ', long -> ' + long + 'forecast weather displayed')),
        catchError(this.handleError<any>('Loc pos : lat -> ' + lat + ', long -> ' + long + 'forecast weather displayed'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.logger.add(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
