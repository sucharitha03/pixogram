import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/modules/product.models';

const API_URL = "http://localhost:3000/products"; 

@Injectable({
  providedIn: 'root'
})
// service to interact with REST 
export class ProductDataService {
  
  

  // recieve the Http Service injected
  constructor(public http : HttpClient) { 

  }

  
  getAllProducts(){

    
    return this.http.get(API_URL);
  }
    addNewProduct(product : Product){
      // POST http verb
      return this.http.post(API_URL, product);
    
  }
}