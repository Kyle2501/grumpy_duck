var FloorGraphicsComponent = function(entity) {
    this.entity = entity;
};

FloorGraphicsComponent.prototype.draw = function(context) {
    
    var position = this.entity.components.physics.position;
    context.save();
    context.translate(position.x, position.y);

    context.beginPath();
    context.fillStyle = "#000000";
    context.fillRect(0, 0, this.entity.size.x, this.entity.size.y);
    context.closePath();

    context.restore();
};

exports.FloorGraphicsComponent = FloorGraphicsComponent;