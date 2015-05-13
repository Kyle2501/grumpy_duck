var PipeGraphicsComponent = function(entity) {
    this.entity = entity;
};

PipeGraphicsComponent.prototype.draw = function(context) {
    var position = {x: 0.5, y: 0.5};

    context.save();
    context.translate(position.x, position.y);
    context.beginPath();
    context.fillStyle = "#FF9497";
    context.arc(0, 0, 0.02, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
    context.restore();
};

exports.PipeGraphicsComponent = PipeGraphicsComponent;