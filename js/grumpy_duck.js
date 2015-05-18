var graphicsSystem = require('./systems/graphics');
var physicsSystem = require('./systems/physics');
var pipeSystem = require('./systems/pipeSystem');
var inputSystem = require('./systems/input');
var collisionSystem = require('./systems/collision');

var bird = require('./entities/bird');
var floor = require('./entities/floor');
var ceiling = require('./entities/ceiling');
var scoreKeeper = require('./entities/scoreKeeper');

var GrumpyDuck = function() {
    this.entities = [new bird.Bird(), new floor.Floor(), new ceiling.Ceiling(), new scoreKeeper.ScoreKeeper()]; 
    this.graphics = new graphicsSystem.GraphicsSystem();
    this.physics = new physicsSystem.PhysicsSystem();
    this.input = new inputSystem.InputSystem();
    this.pipes = new pipeSystem.PipeSystem();
    this.collision = new collisionSystem.CollisionSystem();

    this.input.entities     = this.entities;
    this.graphics.entities  = this.entities;
    this.pipes.entities = this.entities;
    this.physics.entities   = this.entities;
    this.collision.entities = this.entities;

    this.collision.graphicsSystem = this.graphics;
    this.collision.physicsSystem  = this.physics;
    this.collision.PipeSystem = this.pipes;
    this.physics.collisionSystem  = this.collision;
};

GrumpyDuck.prototype.init = function() {
    this.graphics.init();
};

GrumpyDuck.prototype.run = function() {
    this.graphics.run();
    this.physics.run();
    this.input.run();
    this.pipes.run();
};

GrumpyDuck.prototype.pause = function() {
    this.graphics.pause();
    this.physics.pause();
    this.input.pause();
    this.pipes.pause();
};


exports.GrumpyDuck = GrumpyDuck;
