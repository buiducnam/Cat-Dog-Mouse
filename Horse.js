function Horse(name) {
    this.name = name;
}
Horse.prototype.eat = function(grass){
    console.log("eating grass ....");
}

module.exports = Horse;