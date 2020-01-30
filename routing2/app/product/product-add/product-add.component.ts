import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/product.models';
import { ProductDataService } from 'src/app/services/data/product-data.service';

@Component({
  selector: 'product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(public productservice:  ProductDataService) {

   }

  ngOnInit() {
  }
  saveProduct(txtName:HTMLInputElement, txtCategory:HTMLInputElement, txtCost:HTMLInputElement):void{
    
    let product = new Product(txtName.value, txtCategory.value, parseInt(txtCost.value));

    // sending data to server using service
    this.productservice.addNewProduct(product).subscribe((response:any) => console.log(response));


    
    txtName.value = "";
    txtCategory.value = "";
    txtCost.value = "";
}
}
