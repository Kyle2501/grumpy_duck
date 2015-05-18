var graphicsComponent = require("../components/graphics/ceiling");
var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/rect");

var Ceiling = function(position, size) {
	var physics = new physicsComponent.PhysicsComponent(this);
    physics.position.y = 0.99;
    physics.position.x = -0.05;

    var graphics = new graphicsComponent.CeilingGraphicsComponent(this);
    
    this.size = {
        x: 0.1,
        y: 0.01
    }

    var collision = new collisionComponent.RectCollisionComponent(this, this.size);
    

    this.components = {
        physics: physics,
        graphics: graphics,
        collision: collision
    };
};


exports.Ceiling = Ceiling;