import { Component, OnInit } from '@angular/core';
import { Media} from '../models/media.model';

@Component({
  selector: 'media-model',
  templateUrl: './media-model.component.html',
  styleUrls: ['./media-model.component.css']
})
export class MediaModelComponent  {

  title:String;
  description:String;
  tag:String;
  medias: Array<Media>;

  constructor() { 
    // initialize with dummy data...
    this.medias = [
      new Media("First","firstpic","xxxx"),
      new Media("Second","secondpic","yyyy"),
      new Media("Third","thirdpic","zzz")
    ];
    
  }

  saveMedia(txttitle:HTMLInputElement, txtdes:HTMLInputElement, txttag:HTMLInputElement):void{
      // create a new MEDIA Object from coming values 
      let media = new Media(txttitle.value, txtdes.value,(txttag.value));
      // add that object to array
      this.medias.push(media);

      // reset the form
      txttitle.value = "";
      txtdes.value = "";
      txttag.value = "";
  }

   }

 // ngOnInit() {
 // }

//}
