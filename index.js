const Dog = require('./Dog');
const Mouse = require('./Mouse');
const Cat = require('./Cat');

var meo = new Cat('Meo  Meo' , 10);
var mouse = new Mouse("Chuot");
// console.log(meo);
meo.eat(mouse);
console.log(meo)