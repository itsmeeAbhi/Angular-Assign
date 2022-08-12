import { Injectable } from '@angular/core';
import { User } from './user';

import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user = new BehaviorSubject<User>(null);
  isAuth = new Subject<boolean>();

  constructor(private http: HttpClient) { }
  isloggedIn=true;
  public loginUserFromRestApi(user):Observable<any>{
    return this.http.get<User[]>("http://localhost:9090/userAccount/checkuserexists",
    {
      params: new HttpParams().set('employeeId', user.employeeId).set('password', user.password)
    });
  }
  logout(){
    this.user.next(null);
  }
}
