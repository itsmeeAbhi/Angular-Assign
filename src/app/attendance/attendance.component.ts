import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AttendanceService } from '../attendance.service';
import { Attendance } from '../Model/attendance';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  attendDialog: boolean;
  attendance:Attendance;

  listOfEmpAttendance: any;

  submitted: boolean;
  constructor(private attendservice: AttendanceService, private route: ActivatedRoute, private router: Router, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.attendservice.getAttendlist().subscribe(
      data => {
        this.listOfEmpAttendance = data;
        console.log(this.listOfEmpAttendance);
        console.log("Response Received")
      },
      error => console.log("Error Occured")
    )
  }
  addAttendance() {
    this.submitted = false;
    this.attendDialog = true;

    // this.router.navigate(['add-employee']);
  }
  hideDialog() {
    this.attendDialog = false;
    this.submitted = false;
  }
  addattend() {
    this.submitted = true;
    this.attendservice.getAttendlist().subscribe(
      data => {
        console.log("Data Added ");
        this.attendDialog = false;
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
}
