import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // ******Routing*******

 constructor(private route: Router){}
//  load(){

//     this.route.navigate(['/about'])

//  }
  // courses=["c","c++","python","android"]

  // student={                          //Object declaration

  //   age:23,
  //   name:"poonam",               
  //   marks:82
  // }

  // fun(){                             //function declration

  //   console.log("hello Type Script");
  //   return "hello students";
  // }
  // a=10;
  // b=20;
  // add(){              // Global variable access using this keyword

  //   return this.a+this.b;
  // }

  // mul(x:any,y:any){

  //     return x*y;

  // }
// **********Property Bindng********
  // msg="welcome to JBK";
  // msg1="Hello Students";
  // imgPath="assets/images/1.jpg";
  // show=false;

  // employee_info=[
  //   {
  //       empno:11,
  //       ename:"xyz",
  //       city:"pune",
  //       job:"HR",
  //       age:22
  //   },
  //   {
  //       empno:111,
  //       ename:"abc",
  //       city:"mumbai",
  //       job:"development",
  //       age:42
  //   },
  //   {
    
  //     empno:101,
  //     ename:"jhon",
  //     city:"US",
  //     job:"testing",
  //     age:32
    
  //   },
  //   {
    
  //     empno:104,
  //       ename:"riya",
  //       city:"pune",
  //       job:"AWS",
  //       age:33
  //   },
  //   {
    
  //     empno:106,
  //     ename:"poonam",
  //     city:"nashik",
  //     job:"marketing",
  //     age:21
    
    
  //   }]
// msg="welcome to TKA";
// count=1;
// greet="";
// result:any
  // fun(){

  //   console.log("hello");
  // }
  // fun1(){

  //   this.msg="welcome to JBK";

  // }
  // getVal(val:any){

  //   console.log()
  //   this.msg=val;
  // }
  // toggle(){
  //   this.count=this.count+1;

  //   if(this.count%2==0){

  //     this.greet="hello"
  //   }
  //   else{

  //     this.greet="welcome"
  //   }
  // }
  // add(val1:any,val2:any){

  //     console.log(parseInt(val1)+parseInt(val2));
  //     this.result=parseInt(val1)+parseInt(val2);

  // }

  
}
