import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/employee';


  constructor(private http: HttpClient) { }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/create`, employee);
  }

  getEmployee(empId: number): Observable<any>{

    return this.http.get(`${this.baseUrl}/get/${empId}`);
  }

  updateEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/update`, employee)
  }

  deleteEmployee(empId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${empId}`, { responseType: 'text' });
  }

  listEmployee(): Observable<any> {

    return this.http.get(`${this.baseUrl}/get/`);
  }

}
