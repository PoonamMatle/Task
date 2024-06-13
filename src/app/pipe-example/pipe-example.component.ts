import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent {

  title="welcome to my pipe application"

  months=["Jan","Feb","Mar","April","May","Jun","July","Aug","Sep","Oct","Nov","Dec"]

  jsonVal={name:"jhon",age:23,city:"pune"}

  today_date=new Date().toLocaleDateString();


employee=[
  {
    name:"poonam",sal:450000,gender:"Female"
  },
  {
    name:"makarand",sal:500000,gender:"Male"
  },
  {
    name:"jhon",sal:40000,gender:"Male"
  },
  {
    name:"sona",sal:20000,gender:"Female"
  },
]

}
