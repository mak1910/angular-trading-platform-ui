
export class Client {
  id: number;
  name: string; 
  email: string;

  constructor() {
    this.id = 0;
    this.name = "";
    this.email = "";
  }

  toString(): string {
    return 'Client { id=' + this.id + ', name=' + this.name + ', email=' + this.email + ' }'; 
  }
}