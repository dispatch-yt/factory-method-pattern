import Computer from './Computer'
import Laptop from './computers/Laptop'
import PC from './computers/PC';
import Server from './computers/Server';

class ComputerFactory {
  public static createComputer(name: string, cpu: string,
    ram: string, color: string): Computer {
    if (name === 'laptop')
      return new Laptop(name, cpu, ram, color);

    if (name === 'pc')
      return new PC(name, cpu, ram, color);

    if (name === 'server')
      return new Server(name, cpu, ram, color);

    throw new Error(`Computer for provided type '${name}' not exists.`)
  }
}

export default ComputerFactory
