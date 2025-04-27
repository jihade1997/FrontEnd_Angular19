import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  standalone: true
})
export class ProductsComponent implements OnInit {
handleDelete(product : any): void {

this.products = this.products.filter((p : any): boolean => p.id != product.id);}
  products : any;
  ngOnInit(): void {
    this.products = [
      {id:1,name:"Computer",price:2300,selected: true},
      {id:2,name:"Printer",price:1200,selected: false},
      {id:3,name:"Smart Phone",price:1100,selected: true}
    ]
  }
  constructor(){

  }

}
