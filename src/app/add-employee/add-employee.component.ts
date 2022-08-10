import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee = new Employee();

  constructor(private service: EmployeeService, private route:Router, private router:ActivatedRoute) { }

  ngOnInit() {
  }
  addEmployee() {
    
    this.service.addEmployeeToBackend(this.employee).subscribe(
      data => {
        console.log("Data Added ");
      },
      error => {
         console.log("Data cannot be added"); 
        },
      () => {

      }); 


  }
  goToEmpList(){
    this.route.navigate(['./employee-list']);
  }

}
