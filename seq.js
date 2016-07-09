// {keycode: {start, elem}}
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

styleDiv = function(div){
	div.style.background = "green";
	div.style.height = "20px";
	div.style.border = "2px solid black";
}


eval = function() {
	str = ""
	for (var key in timeStamps) {
		var duration = +new Date() - timeStamps[key].start;
		var elem = timeStamps[key].elem;
		elem.style.width = duration + "px";
		document.getElementById('notes').appendChild(elem);
		str += key + ": " + duration + "\n"
	}
	i++;
	document.getElementById("text").innerHTML = str;
};

window.onkeydown = function(e) {
	// When key is pressed down, add to list of currently
	// pressed keys
	if (!timeStamps[e.which]) {
		var num = +new Date();
		timeStamps[e.which] = {};
		timeStamps[e.which].start = num;
		timeStamps[e.which].elem = document.createElement("div");
		styleDiv(timeStamps[e.which].elem);
		timeStamps[e.which].elem.scrollIntoView();
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



