import { Component } from '@angular/core';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  constructor(private p:TestServiceService){}
studobj :any
  ngOnInit(){

    this.studobj=this.p.student;
  }

}
