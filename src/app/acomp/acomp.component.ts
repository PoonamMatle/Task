import { Component } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-acomp',
  templateUrl: './acomp.component.html',
  styleUrls: ['./acomp.component.css']
})
export class AcompComponent {

  tempvar=""
  empobj:any
  txt=""
  constructor(private s:Service1Service){}

  ngOnInit(){

    this.tempvar=this.s.msg
    this.empobj=this.s.employee
    this.txt=this.s.display()

  }


}
