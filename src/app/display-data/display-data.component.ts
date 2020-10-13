import { Component, OnInit, Inject, Directive, OnDestroy } from '@angular/core';
import { DailyMeteo } from '../shared/models/DailyMeteo';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { WeatherServiceService } from '../shared/services/weather-service.service';


@Directive()
export abstract class DisplayData implements OnInit, OnDestroy {

  abstract meteoData;
  queryParamsSubscription: Subscription;

  constructor(protected weatherService: WeatherServiceService, protected route: ActivatedRoute) { };

  ngOnInit() {
    this.queryParamsSubscription = this.route.queryParams.subscribe(params => {
      this.getMeteo(params); // Print the parameter to the console. 

    });
  }
  abstract getMeteo(truc: any): void;

  ngOnDestroy() {
    this.queryParamsSubscription.unsubscribe();
  }


}
