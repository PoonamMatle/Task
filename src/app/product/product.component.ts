import { Component } from '@angular/core';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(private p:TestServiceService){}

  prodobj:any
  ngOnInit(){

    this.prodobj=this.p.product
  }

}
