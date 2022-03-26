import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from '../models';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: PeriodicElement[] = this.apiService.getPeriodicElements();

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

}
