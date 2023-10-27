import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  myWeather: any;
  cityName: string = '';
  temp: number = 0;
  icon: string = '';

  
  constructor(private weatherData: DataService) {}

  ngOnInit(): void {
      this.weatherData.getWeatherData().subscribe({

        next: (res) => {
          console.log(res)
          this.myWeather = res;
          console.log(this.myWeather);
          this.cityName = this.myWeather.name;
          this.temp = this.myWeather.main.temp;
          this.icon = 'https://openweathermap.org/img/wn/' + this.myWeather.weather[0].icon + '@2x.png';
        },

        error: (error) => console.log(error.message),

        complete: () => console.info('API call completed')
      })
  }
}
