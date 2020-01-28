import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {
searchdata:string;
  constructor(public activeroute:ActivatedRoute) {
this.activeroute.params.subscribe((parameter)=>this.searchdata=parameter["searchtxt"]);
   }

  ngOnInit() {
  }

}
