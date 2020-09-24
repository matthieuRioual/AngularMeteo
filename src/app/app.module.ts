import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ForecastMeteoComponent } from './forecast-meteo/forecast-meteo.component';
import { LocalisationInputComponent } from './localisation-input/localisation-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DailyWidgetViewComponent } from './daily-widget-view/daily-widget-view.component';
import { CurrentMeteoComponent } from './current-meteo/current-meteo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from "ngx-translate-multi-http-loader";

export function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: "./assets/translate/", suffix: ".json" },
  ]);
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ForecastMeteoComponent,
    LocalisationInputComponent,
    DailyWidgetViewComponent,
    CurrentMeteoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
