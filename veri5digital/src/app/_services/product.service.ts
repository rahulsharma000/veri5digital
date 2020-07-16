import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import { Product } from '../_models/product.models';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(

    private http: HttpClient,
    private snackBar:MatSnackBar,

    )
    {}

  private handleError(error: Response | any) {
    let errMsg: string;
    if (!error.ok) {
      errMsg = 'Can\'t connect to server.';
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Promise.reject(errMsg);
  }

  getProductList(): Observable<any> {
    return this.http.get('./assets/data/product.json', {withCredentials: false})
      .pipe(
        tap(data => data),
        catchError(this.handleError)
      );
  }

  
  addToCart(data: Product): void {
    const a: Product[] = JSON.parse(localStorage.getItem("product_item")) || [];
    a.push(data);
    this.openSnackBar('Product add successfully','Ok');
  
    setTimeout(() => {
      localStorage.setItem("product_item", JSON.stringify(a));
    }, 100);
  }


  getLocalCartProducts(): Product[] {
    const products: Product[] =
      JSON.parse(localStorage.getItem("product_item")) || [];

    return products;
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
       duration: 2000,
    });
  } 


}