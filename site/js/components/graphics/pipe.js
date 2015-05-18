var PipeGraphicsComponent = function(entity, size) {
    this.entity = entity;
    this.size = size;
};

PipeGraphicsComponent.prototype.draw = function(context) {
    
    var position = this.entity.components.physics.position;
    context.save();
    context.translate(position.x, position.y);

    context.beginPath();
    context.fillStyle = "#89898A";
    context.fillRect(-this.size.x / 2, -this.size.y / 2, this.size.x, this.size.y);
    context.closePath();

    context.restore();
};

exports.PipeGraphicsComponent = PipeGraphicsComponent;