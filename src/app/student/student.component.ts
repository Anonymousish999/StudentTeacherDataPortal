import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http/http.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  studentData: any[] = [];
  constructor(private httpService:HttpService) { }

  ngOnInit(): void {
    this.httpService.getStudents().subscribe({
      next: (data) => {
        this.studentData = data;
      },
      error: (error) => {
        console.error('There was an error!', error);
    }
    });
  }

}
