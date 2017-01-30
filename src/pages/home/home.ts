import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController, NavParams, Content } from 'ionic-angular';

import { ProductService } from '../../providers/product-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'


})
export class HomePage {
  @ViewChild(Content) content: Content;

  products: any[];
  productsFound: boolean = false;
  constructor(public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private navParams: NavParams,
    private productService: ProductService) {

  }


  ionViewDidLoad() {
    this.loadProducts();
  }




  loadProducts() {

    let loader = this.loadingCtrl.create({
      content: "Loading..."
    });
    loader.present();

    setTimeout(() => {

      this.productService.get().subscribe((products) => {
        if (products.status == 1 && products.data.length > 0) {
          this.productsFound = true;
          this.products = products.data;
          loader.dismiss();
        } else {
          this.productsFound = false;
          loader.dismiss();
        }
      });
    }, 2000);
  }
}
