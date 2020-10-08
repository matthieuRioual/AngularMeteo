import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ForecastMeteoComponent } from './forecast-meteo/forecast-meteo.component';
import { LocalisationInputComponent } from './localisation-input/localisation-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DailyWidgetViewComponent } from './daily-widget-view/daily-widget-view.component';
import { CurrentMeteoComponent } from './current-meteo/current-meteo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SelectionFormComponent } from './forms/selection-form/selection-form.component';
import { FormCityNameComponent } from './forms/form-city-name/form-city-name.component';
import { FormCityPosComponent } from './forms/form-city-pos/form-city-pos.component';
import { SingleFormComponent } from './forms/single-form/single-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ForecastMeteoComponent,
    LocalisationInputComponent,
    DailyWidgetViewComponent,
    CurrentMeteoComponent,
    SelectionFormComponent,
    FormCityNameComponent,
    FormCityPosComponent,
    SingleFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
