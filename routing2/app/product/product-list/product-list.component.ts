import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/product.models';
import { ProductDataService } from 'src/app/services/data/product-data.service';


@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Array<Product>; 
  constructor(private productService : ProductDataService)
 { 
   
 }

  ngOnInit() {
 
    this.productService.getAllProducts().subscribe((response:any) => this.products = response);
  }

}
