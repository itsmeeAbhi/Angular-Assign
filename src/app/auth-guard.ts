import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    UrlTree
  } from '@angular/router';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  import { map, } from 'rxjs/operators';
import { LoginService } from './login.service';
  
  
  @Injectable({ providedIn: 'root' })
  export class AuthGuard implements CanActivate {
    constructor(private authService: LoginService, private router: Router) {}
  
    canActivate(
      route: ActivatedRouteSnapshot,
      router: RouterStateSnapshot
    ):
      | boolean
      | UrlTree
      | Promise<boolean | UrlTree>
      | Observable<boolean | UrlTree> {
      return this.authService.user.pipe(map(user => {
        const isAuth = !! user
        if(isAuth){
            console.log("User loggedin");
            
            return true;
        }
        else{
            return this.router.createUrlTree['/login'];
        }
      }))
    }
  }