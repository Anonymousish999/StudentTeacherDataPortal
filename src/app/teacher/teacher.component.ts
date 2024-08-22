import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http/http.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss'],
})
export class TeacherComponent implements OnInit {

  teacherData: any;
  constructor(private httpService:HttpService) {}

  ngOnInit(): void {
    this.httpService.getTeachers().subscribe({
      next: (data) => {
        this.teacherData = data;
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }
}
