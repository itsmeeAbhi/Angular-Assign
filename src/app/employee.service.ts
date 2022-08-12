import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './Model/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  getEmplist():Observable<any>{
    return this.http.get("http://localhost:9090/employeedetail/findallemployees");
  }
  
  addEmployeeToBackend(employee: Employee):Observable<any>{
    const header = new HttpHeaders({

      'Content-Type': 'application/json',


      'Accept': 'application/json',

    });
    return this.http.post<any>("http://localhost:9090/employeedetail/addemployee",employee, { responseType:'json'});
  }
  deleteEmployee(employeeId: number): Observable<any> {
    return this.http.delete<any>("http://localhost:9090/employeedetail/deletebyempid"+employeeId);
  }
}
