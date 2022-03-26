import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';
import { MatTableModule } from '@angular/material/table';

const matModules = [
  MatTableModule,
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
