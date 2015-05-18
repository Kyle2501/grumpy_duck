var ScoreGraphicsComponent = function(entity) {
    this.entity = entity;
};

ScoreGraphicsComponent.prototype.draw = function(context) {
    
    var position = this.entity.components.physics.position;
    context.save();
    context.translate(position.x, position.y);

    context.fillStyle = "#A8DAFF";
    context.beginPath();
    context.arc(0, 0, 0.01, 0, 2 * Math.PI);
    context.closePath();
    context.fill();

    context.restore();
};

exports.ScoreGraphicsComponent = ScoreGraphicsComponent;