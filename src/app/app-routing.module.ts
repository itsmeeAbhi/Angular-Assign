import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { AuthGuard } from './auth-guard';
import { DepartmentComponent } from './department/department.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
  { path: 'employee', component: EmployeeComponent,canActivate:[AuthGuard] },
  { path: 'employee-list', component: EmployeeListComponent,canActivate:[AuthGuard] },
  { path: 'department', component: DepartmentComponent,canActivate:[AuthGuard] },
  { path: 'attendance', component: AttendanceComponent,canActivate:[AuthGuard] },
  // { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
