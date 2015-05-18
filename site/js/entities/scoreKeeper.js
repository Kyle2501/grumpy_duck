var graphicsComponent = require("../components/graphics/scoreKeeper");
var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/circle");

var score = 0;

var ScoreKeeper = function() {
	var physics = new physicsComponent.PhysicsComponent(this);
    physics.position.y = 0;
    physics.position.x = -0.16;

    var graphics = new graphicsComponent.ScoreGraphicsComponent(this);
    var collision = new collisionComponent.CircleCollisionComponent(this, 0.02);
    collision.onCollision = this.onCollision.bind(this);

    this.components = {
        physics: physics,
        graphics: graphics,
        collision: collision
    };

};

ScoreKeeper.prototype.onCollision = function() {
    var scoreIncrease = score += 1;
    var scoreTotal = scoreIncrease/23;
    var scoreFixed = scoreTotal.toFixed(0);
    document.getElementById("score").innerHTML = scoreFixed;
};

exports.ScoreKeeper = ScoreKeeper;