function Chicken(name, age){
    this.name = name;
    this.age = age;
}

Chicken.prototype.jump = function(){
    console.log("Jump.....");
}

module.exports = Chicken;