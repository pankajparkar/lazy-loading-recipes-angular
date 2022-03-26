import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { LocationService } from '../services/location.service';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherForecastComponent } from '../weather-forecast/weather-forecast.component';
import { WeatherForecastDetailsComponent } from '../weather-forecast-details/weather-forecast-details.component';
import { WeatherForecastCityComponent } from '../weather-forecast-city/weather-forecast-city.component';
import { WeatherForecastHistoryComponent } from '../weather-forecast-history/weather-forecast-history.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltersComponent } from '../filters/filters.component';

import { A11yModule } from '@angular/cdk/a11y';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';

const matModules = [
  A11yModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSnackBarModule,
  MatSortModule,
  MatTooltipModule,
  MatToolbarModule,
  MatFormFieldModule
];

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

@NgModule({
  declarations: [
    WeatherDashboardComponent,
    FiltersComponent,
    WeatherForecastComponent,
    WeatherForecastDetailsComponent,
    WeatherForecastCityComponent,
    WeatherForecastHistoryComponent
  ],
  imports: [
    ...matModules,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [WeatherDashboardComponent]
})
export class WeatherForecastModule { }
