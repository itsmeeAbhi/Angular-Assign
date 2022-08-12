import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  user = new User();
  loading = false;
  msg='';

  
  constructor(
    private service: LoginService, 
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {

  }
  loginUser(){
    this.submitted=true;
    this.loading = false;
    this.service.loginUserFromRestApi(this.user).subscribe(
      data => {
        if(data){
          this.service.isAuth.next(true);
          this.service.user.next(this.user)
          this.router.navigate(['home']);
        }else{
          console.log("Invalid Credentials")
          this.msg="Password Invalid"
        }
        
      },
      err => {
        console.log("something went wrong");
        this.msg="Please Enter Valid Username & Password";
      }
      
    );
  }

}
