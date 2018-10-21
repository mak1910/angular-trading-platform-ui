import { Injectable } from '@angular/core';
import { Client } from './../models/client';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor() { }

  validateUser(email: string, password: string): Client {
    if(email == "mridul" && password == "mridul") {
      let c: Client = new Client();
      c.id = 1;
      c.name = "Mridul";
      c.email = "quotemridul@gmail.com";
      return c;
    }
    else
      return new Client();
  }
}
