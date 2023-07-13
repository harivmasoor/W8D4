Function.prototype.inherits = function(parentClass){
    function Surrogate(){}
    Surrogate.prototype = parentClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
}

function MovingObject() {}
MovingObject.prototype.speed = function(){
    console.log('fast');
};

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);

let ship = new Ship();
ship.speed();

let asteroid = new Asteroid();
asteroid.speed();