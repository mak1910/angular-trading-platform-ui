import { Injectable } from '@angular/core';
import { Portfolio } from './../models/portfolio';
import { Client } from './../models/client';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  getAllPortfolios(client: Client): Array<Portfolio> {
      let p1: Portfolio = new Portfolio();
      p1.id = 1;
      p1.name = "High Risk";
      p1.value = 108928.67;
      
      let p2: Portfolio = new Portfolio();
      p2.id = 2;
      p2.name = "Secure";
      p2.value = 506928.11;
      
      let p3: Portfolio = new Portfolio();
      p3.id = 3;
      p3.name = "Trail";
      p3.value = 1828.34;

      console.log("Created portfolios");
      return [p1, p2, p3];
  }
}
