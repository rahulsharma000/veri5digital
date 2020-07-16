import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../_services/product.service';
import { Product } from '../../_models/product.models';
@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.css']
})
export class ShoplistComponent implements OnInit {

  productList='';
  constructor(

    public productService:ProductService

  ) { }

  ngOnInit(): void {

      this.productService.getProductList().subscribe(data=>
        {
          this.productList=data;
        })
  }

  addToCart(product: Product) {
    this.productService.addToCart(product);
  }

}
