function Mouse(name) {
    this.name = name;
}

Mouse.prototype.eat = function(){
    console.log("eating...");
}

module.exports = Mouse;