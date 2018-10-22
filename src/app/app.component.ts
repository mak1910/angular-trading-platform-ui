import { Component, OnInit } from '@angular/core';
import { Client } from './models/client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  title: string = "Trading Platform";
  client: Client = new Client();

  constructor() {}
  ngOnInit(): void {}

  loginUser(c: Client): void {
    this.client = c;
  }
  
}
