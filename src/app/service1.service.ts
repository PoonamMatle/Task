import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor() { }

  msg="hello"

  employee=[
    {
      name:"poonam",age:23, salary:45000
    },
    {
      name:"sanika",age:22, salary:55000
    },
    {
      name:"lucky",age:21, salary:35000
    },
 ]
 display(){
 
  return "welcome to service page";
}
}
