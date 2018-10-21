import { Component, OnInit, Input } from '@angular/core';
import { PortfolioService } from './../services/portfolio-service.service';
import { StockService } from './../services/stock-service.service';

import { Portfolio } from './../models/portfolio';
import { Client } from './../models/client';
import { Stock } from './../models/stock';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() client: Client;
  portfolios: Array<Portfolio>;
  defaultPortfolio: Portfolio;
  stocks: Array<Stock>;
  constructor(private portfolioService: PortfolioService, private stockService: StockService ) { }

  ngOnInit() {
    this.portfolios = this.portfolioService.getAllPortfolios(this.client);
    this.defaultPortfolio = this.portfolios[0];
    this.stocks = this.stockService.getAllStocks(this.defaultPortfolio);
    console.log("Got portfolios : " + this.portfolios);
  }

}
