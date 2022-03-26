import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { MatTableModule } from '@angular/material/table';

const matModules = [
  MatTableModule,
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
