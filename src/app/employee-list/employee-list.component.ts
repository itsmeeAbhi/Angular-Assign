import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from '../Model/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styles: [`
      :host ::ng-deep .p-dialog .product-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
  }
`]
})
export class EmployeeListComponent implements OnInit {
  empDialog: boolean;
  employee:Employee;

  listOfEmployee: any;

  submitted: boolean;
  constructor(private empservice: EmployeeService, private route: ActivatedRoute, private router: Router, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.employee = {
      employeeId: '',
      firstName:'',
      lastName:'',
      dob:'',
      gender:'',
      phoneNumber: '',
      dateOfJoining:'',
      salary:'',
      shift:'',
      createdSource:'',
      createdSourceType:'',
      createdDttm:'',
      modifiedSource:'',
      modifiedSourceType:'',
      modifiedDttm:'' 
    };
    this.empservice.getEmplist().subscribe(
      data => {
        this.listOfEmployee = data;
        console.log(this.listOfEmployee);
        console.log("Response Received")
      },
      error => console.log("Error Occured")
    )
  }
  addEmployee() {
    this.submitted = false;
    this.empDialog = true;

    // this.router.navigate(['add-employee']);
  }
  hideDialog() {
    this.empDialog = false;
    this.submitted = false;
  }
  addEmployees() {
    this.submitted = true;
    console.log(this.employee);
    this.empservice.addEmployeeToBackend(this.employee).subscribe(
      data => {
        console.log("Data Added ");
        this.empDialog = false;
        this.submitted = true;
      },
      error => {
        console.log(error);
        alert("Data cannot be added");
        this.submitted = false;
      },
      () => {
        console.log("Succes Block");
      }
    );
  }
  deleteEmployee(employeeId: number) {
    this.empservice.deleteEmployee(employeeId)
      .subscribe(
        data => {
          console.log(data);
          this.listOfEmployee = this.empservice.getEmplist();
        },
        error => {
          console.log(error);
        }
      );
  }


}


