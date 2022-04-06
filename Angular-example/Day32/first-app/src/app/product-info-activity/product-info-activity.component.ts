import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-info-activity',
  templateUrl: './product-info-activity.component.html',
  styleUrls: ['./product-info-activity.component.css']
})
export class ProductInfoActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    {name: "Mobile", brand: ["Vivo", "Oppo", "Oneplus"]},
    {name: "Laptop", brand: ["HP", "Dell", "Lenovo", "Acer"]}
  ];
  
  

}
