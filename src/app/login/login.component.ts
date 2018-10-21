import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from './../services/login-service.service';
import { Client } from './../models/client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  @Output() loginEventEmitter = new EventEmitter();
  
  email: string;
  password: string;

  constructor(private loginService: LoginService) { }
  ngOnInit() {
    // Automatic login
    this.email = "mridul";
    this.password = "mridul";
    this.loginUser();
  }

  loginUser(): void {
    let c: Client = this.loginService.validateUser(this.email, this.password); 
    
    if(c.id != 0) {
      // Client has been authenticated
      this.loginEventEmitter.emit(c);
    }

    // Show client some error message and ask to enter details again.
    this.email = undefined;
    this.password = undefined;
  }

}
