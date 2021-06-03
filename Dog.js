function Dog(name, age){
    this.name = name;
    this.age = age;
    this.stomach = [];
}

Dog.prototype.eat = function(cat){
    this.stomach.push(cat)
}

module.export = Dog;