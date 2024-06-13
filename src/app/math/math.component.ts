import { Component } from '@angular/core';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent {
a=10;
b=20;
  add(){

    return this.a+this.b;

  }
  sub(){

    return this.a-this.b;
  }
  mul(x:any,y:any){

    return x*y;
  }
  div(a:any,b:any){

    return a/b;
  }
}
