function Horse(name) {
    this.name = name;
}
Horse.prototype.eat = function(grass){
    console.log("eating grass ....");
}

Horse.prototype.run = function(){
    console.log('Runing ....');
}

module.exports = Horse;