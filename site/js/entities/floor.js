var graphicsComponent = require("../components/graphics/floor");
var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/rect");

var Floor = function(position, size) {
	var physics = new physicsComponent.PhysicsComponent(this);
    physics.position.y = 0;
    physics.position.x = -0.05;

    var graphics = new graphicsComponent.FloorGraphicsComponent(this);
    
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


exports.Floor = Floor;