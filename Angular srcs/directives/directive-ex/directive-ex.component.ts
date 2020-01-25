import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directive-ex',
  templateUrl: './directive-ex.component.html',
  styleUrls: ['./directive-ex.component.css']
})
export class DirectiveExComponent  {
  name:String;
  age:String;
  email:String;

  constructor() { 
    this.name="first";
    this.age="20";
    this.email="first@gmail.com";
  }
  changeval():void
  {
 this.name="xxxx";
 this.age="22";
 this.email="xx@gmail.com";
  }
}

