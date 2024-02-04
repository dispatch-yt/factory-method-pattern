import Computer from './Computer';
import ComputerFactory from './ComputerFactory'

const server: Computer = ComputerFactory.createComputer('server', 'Rayzon 5', '16GB', 'black');
console.log('computer', server.toString())

const laptop: Computer = ComputerFactory.createComputer('laptop', 'Intel Core i9', '16GB', 'white');
console.log('computer', laptop.toString())
