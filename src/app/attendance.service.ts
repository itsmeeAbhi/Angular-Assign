import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Attendance } from './Model/attendance';


@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private http:HttpClient) { }
  getAttendlist():Observable<any>{
    return this.http.get("http://localhost:9090/attendanceDetail/findAllAttendance");
  }
  
  addAttendance(attendance: Attendance):Observable<any>{
    return this.http.post<any>("http://localhost:9090/attendanceDetail/addAttendance",attendance);
  }
}
