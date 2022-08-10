import { Injectable } from '@angular/core';
import { User } from './user';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  isloggedIn=true;
  public loginUserFromRestApi(user):Observable<any>{
    return this.http.get<User[]>("http://localhost:9090/userAccount/checkuserexists",
    {
      params: new HttpParams().set('employeeId', user.employeeId).set('password', user.password)
    });
  }
}
