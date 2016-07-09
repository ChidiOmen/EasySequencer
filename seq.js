var timeStamps = {};
var times = [];
var i = 0;
var interval = null;

sayHello = function() {
	console.log('' + i + ' seconds');
	i++;
	if (i > 200) {
		clearTimeout(interval);
	}
}


eval = function() {
	str = ""
	for (var key in timeStamps) {
		timeStamps[key] = +new Date();
		str += key + " " + timeStamps[key] + '\n'
	}
	i++;
	document.getElementById("text").innerHTML = str;
};

window.onkeydown = function(e) {
	// When key is pressed down, add to list of currently
	// pressed keys
	if (!timeStamps[e.which]) {
		var num = +new Date();
		timeStamps[e.which] = num;
	}
};

window.onkeyup = function(e){
	// When key is up, remove from list of currently
	// pressed keys
	currTime = +new Date();
	if (timeStamps[e.which]) {
		delete timeStamps[e.which];
	}
};

start = function(){
	var intervalID = window.setInterval(eval, 50);
}



