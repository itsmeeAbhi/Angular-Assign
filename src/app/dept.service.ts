import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }
  getDeptlist():Observable<any>{
    return this.http.get<any>("http://localhost:9090/departmentdetail/findalldepartment");
  }
}