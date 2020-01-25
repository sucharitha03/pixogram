import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calci',
  templateUrl: './calci.component.html',
  styleUrls: ['./calci.component.css']
})
export class CalciComponent  {
   value1:number;
   value2:number;
   result:number;
   
  sum(value1:HTMLInputElement,value2:HTMLInputElement)
  {
    let a=parseInt(value1.value);
    let b=parseInt(value2.value);
    let result=a+b;
    result.value=;
   
  }
  sub(value1:HTMLInputElement,value2:HTMLInputElement)
  {
    this.value1=parseInt(value1.value);
    this.value2=parseInt(value2.value);
    this.result=this.value1-this.value2;
  }
  product(value1:HTMLInputElement,value2:HTMLInputElement)
  {
    this.value1=parseInt(value1.value);
    this.value2=parseInt(value2.value);
    this.result=this.value1*this.value2;
  }
  division(value1:HTMLInputElement,value2:HTMLInputElement)
  {
    this.value1=parseInt(value1.value);
    this.value2=parseInt(value2.value);
    this.result=this.value1/this.value2;
  }
}