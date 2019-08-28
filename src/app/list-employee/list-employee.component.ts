import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees: Array<any>;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.listEmployee().subscribe(data => this.employees = data);


  }

}
