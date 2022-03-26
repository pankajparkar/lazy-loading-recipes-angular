import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

const matModules = [
  MatTableModule,
  MatCardModule,
];

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    ...matModules,
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
