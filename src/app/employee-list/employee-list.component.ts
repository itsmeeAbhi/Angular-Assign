import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employee : any = [];
  constructor(private empservice: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.empservice.getEmplist().subscribe(
      data =>{
        this.employee = data,
        console.log("Response Received")
      },
      error =>console.log("Error Occured")
    )
  }
  addEmployee(){
    this.router.navigate(['add-employee']);
  }

}
