$(document).ready(function() {	
	var grumpyDuck = require('./grumpy_duck');
	var bird = require('./entities/bird');

	var app = new grumpyDuck.GrumpyDuck();
	app.init();  

	$('#reset').hide();  
	$('#score').hide();

	$('.init').click(function() {
		app.run();
		$('.init').hide();
		$('#score').show();
	});

	$('#resetBtn').click(function () {
		$('#reset').hide();
		location.reload();
	}); 

	$('body').keydown(function () {
		app.pause();
		$('.init').show();
	});


});


