import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genPipe'
})
export class GenPipePipe implements PipeTransform {

  transform(name:string,gen:string): string {
    if(gen=="Male"){

      return "Mr. "+name
    }
    else{

      return "Miss. "+name
    }
   
  }

}
