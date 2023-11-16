import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string) {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=---&units=imperial'); 
  }
}
