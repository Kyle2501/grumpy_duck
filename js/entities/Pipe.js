var graphicsComponent = require("../components/graphics/pipe");
var physicsComponent = require("../components/physics/physics");

var Pipe = function(position, size) {

    var physics = new physicsComponent.PhysicsComponent(this); 
    physics.velocity.x = -0.5;
    physics.position = position;

    var graphics = new graphicsComponent.PipeGraphicsComponent(this, size);

    this.components = {
        graphics: graphics,
        physics: physics,
    };
};

exports.Pipe = Pipe;