import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
// import { WeatherDashboardComponent } from '../weather-forecast/weather-dashboard/weather-dashboard.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild('container', { read: ViewContainerRef }) container: any;

  constructor() { }

  async addBarComponent() {
    this.container.clear();
    const componentRef = this.container.createComponent(BarChartComponent);
  }

  ngOnInit(): void {
  }

}
