import { Component, OnInit, Input } from '@angular/core';
import { Client } from './../models/client';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Input() client: Client;

  constructor() { }

  ngOnInit() {
  }

}
