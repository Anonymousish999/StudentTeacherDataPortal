
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../service/http/http.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(private fb: FormBuilder, private httpService:HttpService) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      Email: ['', Validators.required],
      role: ['', [Validators.required]],
      city: ['', Validators.required],
      state: ['', Validators.required],
      code: ['', Validators.required],
    });
  }

  handleSubmit() {
    const obj = {
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      Email: this.registerForm.value.Email,
      role: this.registerForm.value.role,
      city: this.registerForm.value.city,
      state: this.registerForm.value.state,
      code: this.registerForm.value.code,
    };

    if(this.registerForm.value.role === 'Student'){
      this.httpService.addStudent(obj).subscribe((data)=>{
        console.log(data);
      });
    }
    if(this.registerForm.value.role === 'Teacher'){
      this.httpService.addTeacher(obj).subscribe((data)=>{
        console.log(data);
      });
    }
    // alert('Data Submitted Successfully');
  }
}
