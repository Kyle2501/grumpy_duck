var PipeGraphicsComponent = function(entity) {
	this.entity = entity;
};

PipeGraphicsComponent.prototype.draw = function () {
	console.log("drawing a pipe");
};

exports.PipeGraphicsComponent = PipeGraphicsComponent;