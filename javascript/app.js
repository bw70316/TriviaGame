



window.onload = function () {

var countdown = document.getElementById('timer')

var seconds = 20
var second = 0
var interval;




function displayImage() {
	$("#outcome").html("giphy.gif");
}


interval = setInterval(function() {

	countdown.innerHTML = '<strong>You have<strong> ' + (seconds - second) + ' seconds left!<strong>';
	if (second >= seconds) {
		clearInterval(interval);
		$("#outcome").html("<img src='css/giphy.gif' height='300px' width='200px'/>")
		$("#question").html("Time's Up!!")

	 
	  


	}
	second++;

}, 50);

}