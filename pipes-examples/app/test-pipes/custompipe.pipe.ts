import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: any): any {
    if(value=="")
    return "data not available";
  return value;
  }

}
