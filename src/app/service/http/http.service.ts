import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<any> {
    return this.http.get(`${this.apiUrl}/student`);
  }

  getTeachers() {
    return this.http.get(`${this.apiUrl}/teacher`);
  }

  addStudent(student: any) {
    return this.http.post(`${this.apiUrl}/student`, student);
  }

  addTeacher(teacher: any) {
    return this.http.post(`${this.apiUrl}/teacher`, teacher);
  }

  deleteStudent(id: number) {
    return this.http.delete(`${this.apiUrl}/student/${id}`);
  }

  deleteTeacher(id: number) {
    return this.http.delete(`${this.apiUrl}/teacher/${id}`);
  }
}
