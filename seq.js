console.log('Hello, World!');
var timeStamps = {};

window.onkeydown = function(e) {
	if (!timeStamps[e.which]) {
		timeStamps[e.which] = +new Date();
	}
};

window.onkeyup = function(e){
	currTime = +new Date();
	if (timeStamps[e.which]) {
		duration = currTime - timeStamps[e.which];
		console.log('' + e.which + ': ' + duration);
		delete timeStamps[e.which];
	}
};