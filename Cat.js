function Cat(name, age){
    this.name = name;
    this.age = age;
}

Cat.prototype.eat = function(){
    console.log("Eating ......");
}

module.export = Cat;