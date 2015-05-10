var graphicsSystem = require('./systems/graphics.js');
var bird = require('./entities/Bird.js');
var pipe = require('./entities/Pipe.js');

var FlappyBird = function () {
	this.entities = [new bird.Bird()];
	this.graphics = new graphicsSystem.GraphicsSystem(this.entities);
};

var ThePipes = function () {
	this.entities = [new pipe.Pipe()];
	this.graphics = new graphicsSystem.GraphicsSystem(this.entities);
};

FlappyBird.prototype.run = function () {
	this.graphics.run();
};

ThePipes.prototype.run = function () {
	this.graphics.run();
};

exports.FlappyBird = FlappyBird;
exports.ThePipes = ThePipes;