function Chicken(name, age){
    this.name = name;
    this.age = age;
}

Chicken.prototype.run = function(){
    console.log('Runing .......');
}

module.exports = Chicken;