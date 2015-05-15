var graphicsSystem = require('./systems/graphics');
var physicsSystem = require('./systems/physics');
var pipeSystem = require('./systems/pipeSystem');
var inputSystem = require('./systems/input');

var bird = require('./entities/bird');
var floor = require('./entities/floor');
var ceiling = require('./entities/ceiling');

var GrumpyDuck = function() {
    this.entities = [new bird.Bird(), new floor.Floor(), new ceiling.Ceiling()]; 
    this.graphics = new graphicsSystem.GraphicsSystem(this.entities);
    this.physics = new physicsSystem.PhysicsSystem(this.entities);
    this.input = new inputSystem.InputSystem(this.entities);
    this.pipes = new pipeSystem.PipeSystem(this.entities);

};

GrumpyDuck.prototype.run = function() {
    this.graphics.run();
    this.physics.run();
    this.input.run();
    this.pipes.run();
};

var pause = function() {
	this.graphics.pause();
	this.physics.pause();
	this.pipes.pause();
};

exports.GrumpyDuck = GrumpyDuck;
