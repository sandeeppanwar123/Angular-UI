import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/Employee';
import { Observable, pipe } from 'rxjs';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  @Input() employee: Employee;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {

    this.employeeService.getEmployee(2776).subscribe(data => this.employee = <Employee>data);

    
      
  }

}
