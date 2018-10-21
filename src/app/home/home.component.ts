import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Output() loginEventEmitter = new EventEmitter();

  constructor(private loginService: LoginService) { }

  ngOnInit() {}

  loginUser(): void {
    let c: Client = this.loginService.validateUser(this.email, this.password); 
    if(c.id != 0) {
      // Client has been authenticated
      console.log("Emitting event!!");
      this.loginEventEmitter.emit(c);
    }

    // Show client some error message and ask to enter details again.
    this.email = undefined;
    this.password = undefined;
  }

}
