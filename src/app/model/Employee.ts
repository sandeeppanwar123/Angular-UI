import { Department } from './Department';
import { Address } from './Address';
export class Employee {
  employeeName: string;
  employeeId: number;
  department: Department;
  addresses: Set<Address>
}




