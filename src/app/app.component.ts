import { Component, OnInit } from '@angular/core';
import { Client } from './models/client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  title:string;
  client: Client;

  constructor() {
    this.title = 'Trading Platform';
    this.client = new Client();
  }

  ngOnInit(): void {}
  
}
