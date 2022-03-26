import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

const matModules = [
  MatTableModule,
  MatCardModule,
];

@NgModule({
  declarations: [
    RolesComponent
  ],
  imports: [
    ...matModules,
    CommonModule,
    RolesRoutingModule,
  ]
})
export class RolesModule { }
