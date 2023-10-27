import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getWeatherData() {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=65179c0e5c2d0a8918d63d43d1d5f6c9&units=imperial'); 
  }
}
