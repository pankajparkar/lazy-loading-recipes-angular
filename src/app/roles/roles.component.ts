import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from '../models';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: PeriodicElement[] = this.apiService.getPeriodicElements();

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

}
