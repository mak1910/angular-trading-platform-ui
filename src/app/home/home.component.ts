import { Component, OnInit } from '@angular/core';
import { LoginService } from './../services/login-service.service';
import { Client } from './../models/client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email: string;
  password: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {}

  loginUser(): void {
    let c: Client = this.loginService.validateUser(this.email, this.password); 
    console.log("Got client : " + c.toString());
  }

}
