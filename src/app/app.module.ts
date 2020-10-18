import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ForecastMeteoComponent } from './forecast-meteo/forecast-meteo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DailyWidgetViewComponent } from './daily-widget-view/daily-widget-view.component';
import { CurrentMeteoComponent } from './current-meteo/current-meteo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocalStorageModule } from 'angular-2-local-storage';


import { SingleFormComponent } from './forms/single-form/single-form.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { InputFocusDirective } from './shared/directives/input-focus.directive';
import { LoadingButtonDirective } from './shared/directives/loading-button.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ForecastMeteoComponent,
    DailyWidgetViewComponent,
    CurrentMeteoComponent,
    SingleFormComponent,
    LoginFormComponent,
    InputFocusDirective,
    LoadingButtonDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    LocalStorageModule.forRoot({
      prefix: '',
      storageType: 'localStorage'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
