var grumpyDuck = require('./grumpy_duck');
var bird = require('./entities/bird');

document.addEventListener('DOMContentLoaded', function() {
    var appDuck = new grumpyDuck.GrumpyDuck();
    appDuck.run();
});

bird.Bird.prototype.onCollision = function() {
    console.log('wow');
};
