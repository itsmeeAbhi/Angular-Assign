import { Component, OnInit } from '@angular/core';
import { Department } from '../Model/department';
import { DepartmentService } from '../dept.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  department: Department;
  constructor(private deptservice:DepartmentService) { }

  ngOnInit() {
    this.deptservice.getDeptlist().subscribe(
      data => {
        this.department = data;
        console.log(this.department);
        console.log("Response Received")
      },
      error => console.log("Error Occured")
    )
  }
}
