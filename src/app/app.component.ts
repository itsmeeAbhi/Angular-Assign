import { Component } from '@angular/core'; 
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ems-Assign';
  isauthenticated = false;
  constructor(private authservice:LoginService){}
  ngOnInit(){

    this.authservice.isAuth.subscribe(res =>{
      this.isauthenticated = res;
    })
  }
  onLogout(){
    this.authservice.logout();
    this.isauthenticated=false;
  }
}
