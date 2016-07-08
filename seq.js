var timeStamps = {};
var i = 0;
var interval = null;

sayHello = function() {
	console.log('' + i + ' seconds');
	i++;
	if (i > 200) {
		clearTimeout(interval);
	}
}

var interval = window.setInterval(sayHello, 30);
console.log('Goodbye.');

window.onkeydown = function(e) {
	// When key is pressed down, ad to list of currently
	// pressed keys
	if (!timeStamps[e.which]) {
		var num = +new Date();
		timeStamps[e.which] = num;
		document.getElementById("text").innerHTML = num;
	}
};

window.onkeyup = function(e){
	// When key is up, remove from list of currently
	// pressed keys
	currTime = +new Date();
	if (timeStamps[e.which]) {
		duration = currTime - timeStamps[e.which];
		console.log('' + e.which + ': ' + duration);
		delete timeStamps[e.which];
	}
};

