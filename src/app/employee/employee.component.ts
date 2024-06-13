import { Component } from '@angular/core';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  constructor(private p:TestServiceService){}
  empobj:any

  ngOnInit(){

    this.empobj=this.p. employee_info
  }
  
}
