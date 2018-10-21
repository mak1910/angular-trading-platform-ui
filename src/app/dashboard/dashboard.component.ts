import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './../services/portfolio-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private portfolioService: PortfolioService ) { }

  ngOnInit() {
  }

}
