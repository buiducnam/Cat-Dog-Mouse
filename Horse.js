function Horse(name) {
    this.name = name;
}
Horse.prototype.eat = function(grass){
    console.log("eating grass ....");
}

Horse.prototype.run = function(){
    console.log('Runing ....');
}

Horse.prototype.go = function(){
    console.log('Go go go...');
}

module.exports = Horse;