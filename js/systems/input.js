var InputSystem = function(entities) {
    this.entities = entities;

    // Canvas is where we get input from
    this.canvas = document.getElementById('main-canvas');
    this.clickListener = null;
};

InputSystem.prototype.run = function() {
	this.clickListener = this.flap.bind(this);
    this.canvas.addEventListener('click', this.clickListener);
    this.canvas.addEventListener('touchstart',  this.clickListener);
};

InputSystem.prototype.pause = function() {
    this.canvas.removeEventListener('click', this.clickListener);
    this.clickListener = null;
};

InputSystem.prototype.flap = function() {
    var bird = this.entities[0];
    bird.components.physics.velocity.y = 0.7;
};

exports.InputSystem = InputSystem;