import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../service/http/http.service';
import { DataService } from '../service/data/data.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss'],
})
export class TeacherComponent implements OnInit {
  @Input() searchText: string = '';
  teacherData: any;
  constructor(private httpService: HttpService, private dataService:DataService) {}

  ngOnInit(): void {
    this.httpService.getTeachers().subscribe({
      next: (data) => {
        this.teacherData = data;
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });

    this.dataService.currentData.subscribe((data) => {
      this.searchText = data;
    });
  }
}
