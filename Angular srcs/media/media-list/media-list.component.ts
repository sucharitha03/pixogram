import { Component, OnInit,Input } from '@angular/core';
import { Media} from '../models/media.model';

@Component({
  selector: 'media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.css']
})
export class MediaListComponent implements OnInit {
  @Input()
  mediaList : Array<Media>;
  constructor() { }

  ngOnInit() {
  }

}
