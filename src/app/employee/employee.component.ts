import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
  showlist(){
    this.router.navigate(['employee-list'], {relativeTo:this.route});
  }

}
