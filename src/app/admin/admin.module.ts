import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

const matModules = [
  MatTableModule,
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
