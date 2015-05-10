var flappyBird = require('./flappy_bird.js');

document.addEventListener('DOMContentLoaded', function() {
	var appBird = new flappyBird.FlappyBird();
	var appPipe = new flappyBird.ThePipe();
	appBird.run();
	appPipe.run();
});