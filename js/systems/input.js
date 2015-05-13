var InputSystem = function(entities) {
    this.entities = entities;

    // Canvas is where we get input from
    this.canvas = document.getElementById('main-canvas');
};

InputSystem.prototype.run = function() {
    this.canvas.addEventListener('click', this.flap.bind(this));
    this.canvas.addEventListener('touchstart',  this.flap.bind(this));
};

InputSystem.prototype.flap = function() {
    var bird = this.entities[0];
    bird.components.physics.velocity.y = 0.7;
};

exports.InputSystem = InputSystem;