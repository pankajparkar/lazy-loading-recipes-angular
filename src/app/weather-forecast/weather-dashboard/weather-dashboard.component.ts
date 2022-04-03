import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'wc-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.css']
})
export class WeatherDashboardComponent implements OnInit, OnDestroy {

  @Input() headingStart = 'Weather Forecast in';

  weatherCast: any;
  locationData: any;
  date: Date = new Date();
  selected = 0;

  constructor(
    private weatherService: WeatherService,
    private locationService: LocationService
  ) { }


  getWeatherData(ipData: any) {
    this.weatherService.getWeatherData('MUMBAI', 'IN').subscribe(
      weatherCast => {
        this.weatherCast = weatherCast
      }
    );
  }
  selectAccordion(index: number) {
    this.selected = index;
  }

  ngOnInit() {
    this.getWeatherData(this.locationData);
  }

  ngOnDestroy() {
  }
}

