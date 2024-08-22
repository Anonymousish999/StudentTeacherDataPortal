import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  searchText: string = '';
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  onSearch() {
    this.dataService.updateData(this.searchText);
  }

}
