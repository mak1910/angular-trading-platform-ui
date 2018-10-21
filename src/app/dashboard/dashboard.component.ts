import { Component, OnInit, Input } from '@angular/core';
import { PortfolioService } from './../services/portfolio-service.service';
import { Portfolio } from './../models/portfolio';

import { Client } from './../models/client';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() client: Client;
  portfolios: Array<Portfolio>;
  constructor(private portfolioService: PortfolioService ) { }

  ngOnInit() {
    console.log("Trying to get portfolios");
    this.portfolios = this.portfolioService.getAllPortfolios();
    console.log(this.portfolios);
  }

}
