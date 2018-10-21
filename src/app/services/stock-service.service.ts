import { Injectable } from '@angular/core';
import { Portfolio } from './../models/portfolio';
import { Stock } from './../models/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor() { }

  getAllStocks(portfolio: Portfolio): Array<Stock> {
      let s1: Stock = new Stock();
      s1.id = 1;
      s1.name = "AAPL";
      s1.value = 4779;
      s1.quantity = 100;
      s1.presentPrice = 50;

      let s2: Stock = new Stock();
      s2.id = 1;
      s2.name = "MS";
      s2.value = 6002;
      s2.quantity = 100;
      s2.presentPrice = 60;

      let s3: Stock = new Stock();
      s3.id = 1;
      s3.name = "JPMC";
      s3.value = 5004.23;
      s3.quantity = 50;
      s3.presentPrice = 79;

      console.log("Created portfolios");
      return [s1, s2, s3];
  }
}
