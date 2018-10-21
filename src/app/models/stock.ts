
export class Stock {
  id: number;
  name: string; 
  quantity: number;
  value: number;
  presentPrice: number;

  constructor() {
    this.id = 0;
    this.name = "";
    this.value = 0;
    this.quantity = 0;
    this.presentPrice = 0;
  }

  toString(): string {
    return 'Stock { id=' + this.id + ', name=' + this.name + ', value=' + this.value + ', quantity=' + this.quantity + ', presentPrice=' + this.presentPrice + ' }'; 
  }
}