import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

const matModules = [
  MatTableModule,
  MatCardModule,
];

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    ...matModules,
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
