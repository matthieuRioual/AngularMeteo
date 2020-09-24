import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ForecastMeteoComponent } from './forecast-meteo/forecast-meteo.component';
import { CurrentMeteoComponent } from './current-meteo/current-meteo.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: HomePageComponent,
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
