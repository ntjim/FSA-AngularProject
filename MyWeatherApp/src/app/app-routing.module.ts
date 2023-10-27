import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { DetailedweatherComponent } from './detailedweather/detailedweather.component';

const routes: Routes = [
  { path: 'weather', component: WeatherComponent },
  { path: 'detailedweather', component: DetailedweatherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
