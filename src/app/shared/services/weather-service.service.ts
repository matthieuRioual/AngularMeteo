import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { LoggerService } from './logger.service';
import { DailyMeteo } from '../models/DailyMeteo'
import { oneDayDTO } from '../models/oneDayDTO';
import { multipleDayDTO } from '../models/multipleDayDTO';

const apiKey: string = environment.apiKey;
const apiURL: string = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http: HttpClient, private logger: LoggerService) { }

  getCurrentWeatherbyCity(loc: string): Observable<DailyMeteo> {
    return this.http.get<oneDayDTO>(`${apiURL}/weather?q=${loc}&cnt=4&appid=${apiKey}`).
      pipe(
        map(meteoResponse => { return (DailyMeteo.processBackendMeteo(meteoResponse)) }),
        tap(_ => { this.logger.info('City name : ' + loc + 'current weather fetched') }),
        catchError(this.handleError<DailyMeteo>('City name : ' + loc + 'current weather fetched'))
      );
  }

  getForecastWeatherbyCity(loc: string): Observable<DailyMeteo[]> {
    return this.http.get<multipleDayDTO>(`${apiURL}/forecast?q=${loc}&appid=${apiKey}`)
      .pipe(
        map(meteoResponse => { return (DailyMeteo.processBackendMeteos(meteoResponse)) }),
        tap(_ => { this.logger.info('City name : ' + loc + 'forecast weather fetched') }),
        catchError(this.handleError<DailyMeteo[]>('City name : ' + loc + 'forecast weather fetched'))
      );
  };

  getCurrentWeatherbyLoc(lat: string, long: string): Observable<DailyMeteo> {
    return this.http.get<oneDayDTO>(`${apiURL}/weather?lat=${lat}&lon=${long}&appid=${apiKey}`).
      pipe(
        map(meteoResponse => { return (DailyMeteo.processBackendMeteo(meteoResponse)) }),
        tap(_ => { this.logger.info('Loc pos : lat -> ' + lat + ', long -> ' + long + 'current weather displayed') }),
        catchError(this.handleError<DailyMeteo>('Loc pos : lat -> ' + lat + ', long -> ' + long + 'current weather displayed'))
      );
  }

  getForecastWeatherbyLoc(lat: string, long: string): Observable<DailyMeteo[]> {
    return this.http.get<multipleDayDTO>(`${apiURL}/forecast?lat=${lat}&lon=${long}&appid=${apiKey}`).
      pipe(
        map(meteoResponse => { return (DailyMeteo.processBackendMeteos(meteoResponse)) }),
        tap(_ => { this.logger.info('Loc pos : lat -> ' + lat + ', long -> ' + long + 'forecast weather displayed') }),
        catchError(this.handleError<DailyMeteo[]>('Loc pos : lat -> ' + lat + ', long -> ' + long + 'forecast weather displayed'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.logger.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
