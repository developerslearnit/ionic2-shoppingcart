import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Constants } from '../constants/constants';

@Injectable()
export class ProductService {

  constructor(public http: Http) {
    
  }

  get(){
    return this.http.get(Constants.API_ENDPOINT).map((products)=>products.json());
  }

}
