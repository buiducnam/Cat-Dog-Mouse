const Mouse = require("./Mouse");

function Cat(name, age){
    this.name = name;
    this.age = age;
    this.stomach = [];
}

Cat.prototype.eat = function(animal){
       if(animal instanceof Mouse){
        this.stomach.push(animal);
       }else{
           console.log("NO NO");
       }
}

module.exports = Cat;