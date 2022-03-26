import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from '../models';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: PeriodicElement[] = this.apiService.getPeriodicElements();

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

}
