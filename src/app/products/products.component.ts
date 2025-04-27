import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  standalone: true
})
export class ProductsComponent implements OnInit {
  products : any;
  constructor(private productsService: ProductService){

  }
  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts(){
    this.products = this.productsService.getAllProducts();
  }
  handleDelete(product : any): void {
  let v = confirm(" are you sure you want to delete this product");
  if (v== true){
    this.productsService.deleteProduct(product);
    this.getAllProducts();
  }
  }

  
 
}
