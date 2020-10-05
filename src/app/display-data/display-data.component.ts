import { Component, OnInit, Inject, Directive, OnDestroy } from '@angular/core';
import { DailyMeteo } from '../shared/models/DailyMeteo';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { WeatherServiceService } from '../shared/services/weather-service.service';


@Directive()
export abstract class DisplayData implements OnInit, OnDestroy {

  meteoData: DailyMeteo[] = [];
  queryParamsSubscription: Subscription;

  constructor(protected weatherService: WeatherServiceService, protected route: ActivatedRoute) { };

  ngOnInit() {
    this.queryParamsSubscription = this.route.queryParams.subscribe(params => {
      this.getMeteo(params); // Print the parameter to the console. 

    });
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

  abstract getMeteo(truc: any): void;


  ngOnDestroy() {
    this.queryParamsSubscription.unsubscribe();
  }


}
