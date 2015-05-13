var flappyBird = require('./flappy_bird');

document.addEventListener('DOMContentLoaded', function() {
    var appBird = new flappyBird.FlappyBird();
    appBird.run();
});
