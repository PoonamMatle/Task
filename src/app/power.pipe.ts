import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(base:number,expo:number) :number{
    var result=1;
    for(var i=1;i<=expo;i++){
    
      result=result*base;
    

    }
    return result
  }

}
