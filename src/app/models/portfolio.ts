
export class Portfolio {
  id: number;
  name: string; 
  value: number;

  constructor() {
    this.id = 0;
    this.name = "";
    this.value = 0;
  }

  toString(): string {
    return 'Portfolio { id=' + this.id + ', name=' + this.name + ', value=' + this.value + ' }'; 
  }
}