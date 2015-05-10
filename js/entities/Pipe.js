var graphicsComponent = require("../components/graphics/pipe.js");

var Pipe = function() {
	console.log("creating Pipe entity");

	var graphics = new graphicsComponent.pipeGraphicsComponent(this);
	this.components = {
		graphics: graphics
	};
};

exports.Pipe = Pipe;