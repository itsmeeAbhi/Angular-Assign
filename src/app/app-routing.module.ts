import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { DepartmentComponent } from './department/department.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'attendance', component: AttendanceComponent },
  // { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
