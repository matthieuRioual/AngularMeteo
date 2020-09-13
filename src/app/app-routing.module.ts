import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ForecastMeteoComponent } from './forecast-meteo/forecast-meteo.component';
import { CurrentMeteoComponent } from './current-meteo/current-meteo.component';

const routes: Routes = [
  { path: '', redirectTo: 'en/home', pathMatch: 'full' },
  {
    path: ':lang/home', component: HomePageComponent,
    children: [
      { path: 'current', component: CurrentMeteoComponent },
      { path: 'forecast', component: ForecastMeteoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
