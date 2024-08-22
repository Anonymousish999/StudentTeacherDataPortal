import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: RegisterComponent },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    children: [
      {
        path: 'student',
        component: StudentComponent
      },
      {
        path: 'teacher',
        component: TeacherComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
