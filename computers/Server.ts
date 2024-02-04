import Computer from '../Computer'

class Server implements Computer {
  private name: string;
  private cpu: string;
  private ram: string;
  private color: string;

  constructor(name: string, cpu: string, ram: string, color: string) {
    this.name = name; this.cpu = cpu; this.ram = ram; this.color = color;
  }

  getName(): string { return this.name }
  getRam(): string { return this.ram }
  getCpu(): string { return this.cpu }
  getColor(): string { return this.color }
  toString(): string {
    return `Server - Name: ${this.getName()}, RAM: ${this.getRam()}, CPU: ${this.getCpu()}, color: ${this.color}`;
  }
}

export default Server
