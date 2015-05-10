var graphicsComponent = require("../components/graphics/bird.js");

var Bird = function() {
	console.log("creating Bird entity");

	var graphics = new graphicsComponent.birdGraphicsComponent(this);
	this.components = {
		graphics: graphics
	};
};

exports.Bird = Bird;