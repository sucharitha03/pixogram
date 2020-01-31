import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
name:string;
gpa:number;


  constructor() {
    this.name="sucharitha";
    
    this.gpa=123.45;
    
    
    
   }

  ngOnInit() {
  }

}
