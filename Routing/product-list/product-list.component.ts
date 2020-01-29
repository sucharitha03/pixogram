import { Component, OnInit,Input } from '@angular/core';
import { Product } from '../modules/product.models';


@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input()
  productsList : Array<Product>;

  constructor() { }

  ngOnInit() {
  }

}
