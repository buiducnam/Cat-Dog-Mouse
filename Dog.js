const chalk = require('chalk');
function Dog(name, age){
    this.name = name;
    this.age = age;
}

Dog.prototype.eat = function(){
    console.log(`My name is ${chalk.red(this.name)}`);
}

module.exports = Dog;