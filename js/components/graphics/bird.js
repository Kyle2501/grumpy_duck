var BirdGraphicsComponent = function(entity) {
	this.entity = entity;
};

BirdGraphicsComponent.prototype.draw = function(context) { 

	var position = this.entity.components.physics.position;

    context.save();
    context.translate(position.x, position.y);
    
    context.fillStyle = "#FFF2A4";
    context.beginPath();
    context.ellipse(0, 0, 0.045, 0.04, 0, 0, 2 * Math.PI);
    context.arc(0, 0.045, 0.03, 0, 2 * Math.PI);
    context.closePath();
    context.fill();

    context.fillStyle = "#706E6B";
    context.beginPath();
    context.arc(-0.012, 0.045, 0.006, 0, 2 * Math.PI);
    context.arc(0.012, 0.045, 0.006, 0, 2 * Math.PI);
    context.closePath();
    context.fill();

    context.fillStyle = "#F2A99F";
    context.beginPath();
    context.ellipse(0, 0.032, 0.01, 0.005, 0, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
    
    context.restore();
};

exports.BirdGraphicsComponent = BirdGraphicsComponent;