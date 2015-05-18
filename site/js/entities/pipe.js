var graphicsComponent = require("../components/graphics/pipe");
var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/rect");

var Pipe = function(position, size) {

    var physics = new physicsComponent.PhysicsComponent(this); 
    physics.velocity.x = -0.5;
    physics.position = position;

    var graphics = new graphicsComponent.PipeGraphicsComponent(this, size);
    var collision = new collisionComponent.RectCollisionComponent(this, size);
   

    this.components = {
        graphics: graphics,
        physics: physics,
        collision: collision,
    };
};


exports.Pipe = Pipe;