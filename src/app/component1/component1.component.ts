import { Component, OnInit } from '@angular/core';
import { ConversionService } from '../services/conversion.service';

o
@Component({
  selector: 'component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  name : string;
  constructor(public cservice : ConversionService)  {
    
   }
fun(txt : HTMLInputElement){
this.name=this.cservice.covertToupper(txt.value);//obj.methodname(text box value)
}
  ngOnInit() {
  }

}
