var pipe = require('../entities/pipe');

var PipeSystem = function(entities) {
    this.entities = entities;
    this.canvas = document.getElementById('main-canvas');
    this.interval = null;
};

PipeSystem.prototype.run = function() {
    // Run the pipe creation interval
    this.interval = window.setInterval(this.tick.bind(this),
                                       1000 * 2);
};

PipeSystem.prototype.pause = function () {
    window.clearInterval(this.interval);
    this.interval = null;   
};


PipeSystem.prototype.tick = function() {

    var right = 0.5 * this.canvas.width / this.canvas.height;
    var gapPosition = 0.4 + Math.random() * 0.2;

    var height = gapPosition - 0.2;
    var position = {
        x: right + 0.15 / 2,
        y: height / 2
    };

    var size = {
        x: 0.15,
        y: height
    };

    this.entities.push(new pipe.Pipe(position, size));

    var height = 0.8 - gapPosition;
    var position = {
        x: right + 0.15 / 2,
        y: 1 - height / 2
    };

    var size = {
        x: 0.15,
        y: height
    };

    this.entities.push(new pipe.Pipe(position, size));

};

exports.PipeSystem = PipeSystem;