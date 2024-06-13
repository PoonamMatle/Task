import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor() { }
  student=[

    {
       id:1,
       name:"poonam",
       city:"pune"
    },
    {
      id:2,
      name:"sanika",
      city:"mumbai"
   },
   {
    id:3,
    name:"lucky",
    city:"beed"
 },
 {
  id:4,
  name:"jhon",
  city:"nagapur"
},
  ]

  employee_info=[
    {
        empno:11,
        ename:"xyz",
        city:"pune",
        job:"HR"
    },
    {
        empno:111,
        ename:"abc",
        city:"mumbai",
        job:"development"
    },
    {
    
      empno:101,
      ename:"jhon",
      city:"nashik",
      job:"testing"
    
    },
    {
    
      empno:104,
        ename:"riya",
        city:"delhi",
        job:"AWS"
    },
    {
    
      empno:106,
      ename:"poonam",
      city:"gadhinglaj",
      job:"marketing"
    
    
    }]

    product=[

      {
        id:101,
        name:"Book",
        price:250,
        Qty:10
      },
      {
        id:102,
        name:"NoteBook",
        price:60,
        Qty:20
      },
      {
        id:103,
        name:"Pen",
        price:40,
        Qty:25
      },
      {
        id:104,
        name:"Pencile",
        price:20,
        Qty:12
      },

    ]
}
