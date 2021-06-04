function Mouse(name) {
    this.name = name;
}

Mouse.prototype.run = function(){
    console.log("runing ...");
}

module.exports = Mouse;