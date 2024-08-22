import { Component, OnInit,Input } from '@angular/core';
import { HttpService } from '../service/http/http.service';
import { DataService } from '../service/data/data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  @Input() searchText: string = '';
  studentData: any[] = [];
  constructor(
    private httpService: HttpService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.httpService.getStudents().subscribe({
      next: (data) => {
        this.studentData = data;
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
