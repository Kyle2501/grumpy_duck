var graphicsComponent = require("../components/graphics/scoreKeeper");
var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/circle");

var score = 0;
var highScore = 0;

var ScoreKeeper = function() {
	var physics = new physicsComponent.PhysicsComponent(this);
    physics.position.y = 0;
    physics.position.x = -0.16;

    var graphics = new graphicsComponent.ScoreGraphicsComponent(this);
    var collision = new collisionComponent.CircleCollisionComponent(this, 0.01);
    collision.onCollision = this.onCollision.bind(this);

    this.components = {
        physics: physics,
        graphics: graphics,
        collision: collision
    };

    var highScore = this.loadHiScore();
};

ScoreKeeper.prototype.onCollision = function() {
    var scoreIncrease = score += 1;
    var scoreTotal = scoreIncrease/21;
    var scoreFixed = scoreTotal.toFixed(0);
    document.getElementById("score").innerHTML = scoreFixed;

    if (scoreFixed > highScore) {
        highScore = scoreFixed;
        document.getElementById("highScore").innerHTML = highScore;
        this.saveHiScore();
    }

    console.log(highScore); 
    
};

ScoreKeeper.prototype.saveHiScore = function() {
    if (Modernizr.localstorage) {
        window.localStorage.setItem('highScore', highScore);
    }else {
        console.log("Local Storage is not available with in this browser.");
        document.getElementById("highScore").innerHTML = "unavailable";
    }
};

ScoreKeeper.prototype.loadHiScore = function() {
    if (Modernizr.localstorage) {
        return parseInt(window.localStorage.getItem('highScore')) || parseInt('0');
    }else{
        return 0;
    }
};

exports.ScoreKeeper = ScoreKeeper;