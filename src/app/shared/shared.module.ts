import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { NavbarComponent } from './navbar/navbar.component';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { PieChartComponent } from '../pie-chart/pie-chart.component';

const chartComponents = [
  BarChartComponent,
  PieChartComponent,
];

@NgModule({
  declarations: [
    ...chartComponents,
    NavbarComponent,
  ],
  imports: [
    ChartsModule,
    CommonModule,
  ],
  exports: [
    ...chartComponents,
  ]
})
export class SharedModule { }
