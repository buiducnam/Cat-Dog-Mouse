function Cat(name, age){
    this.name = name;
    this.age = age;
    this.stomach = [];
}

Cat.prototype.eat = function(mouse){
        this.stomach.push(mouse);
}

module.exports = Cat;