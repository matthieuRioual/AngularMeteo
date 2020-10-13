import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ForecastMeteoComponent } from './forecast-meteo/forecast-meteo.component';
import { CurrentMeteoComponent } from './current-meteo/current-meteo.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { LoginGuard } from './shared/guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: HomePageComponent,
    children: [
      { path: 'current', component: CurrentMeteoComponent, canActivate: [LoginGuard] },
      { path: 'forecast', component: ForecastMeteoComponent, canActivate: [LoginGuard] },
    ],
  },
  { path: 'login', component: LoginFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
