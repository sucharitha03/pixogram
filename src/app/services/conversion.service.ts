import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {

  constructor() { }
  covertToupper(str:string):string {            //fun 
    return str.toUpperCase();
  }
}
