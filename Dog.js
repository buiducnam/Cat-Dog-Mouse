const chalk = require('chalk');
function Dog(name){
    this.name = name;
}

Dog.prototype.eat = function(){
    console.log(`My name is ${chalk.red(this.name)}`);
}

module.exports = Dog;