function Mouse(name) {
    this.name = name;
}

Mouse.prototype.run = function(){
    console.log("runing ...");
}

Mouse.prototype.eat = function(){
    console.log("eating...");
}

module.exports = Mouse;