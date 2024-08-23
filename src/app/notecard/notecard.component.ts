import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../service/http/http.service';

@Component({
  selector: 'app-notecard',
  templateUrl: './notecard.component.html',
  styleUrls: ['./notecard.component.scss']
})
export class NotecardComponent implements OnInit {

  @Input() userData: any;
  constructor(private http:HttpService) { }

  ngOnInit(): void {
    
  }

  delete() {
    const id = this.userData.id;
    const role = this.userData.role;
    if(role === 'Student') {
      this.http.deleteStudent(id).subscribe({
        next: (data) => {
          console.log(data);
          window.location.reload();
        },
        error: (error) => {
          console.error('There was an error!', error);
        }
      });
    }
    if(role === 'Teacher') {
      this.http.deleteTeacher(id).subscribe({
        next: (data) => {
          console.log(data);
          window.location.reload();
        },
        error: (error) => {
          console.error('There was an error!', error);
        }
      });
  }
  }
}