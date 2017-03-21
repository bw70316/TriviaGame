



window.onload = function () {

var countdown = document.getElementById('timer')
var gameOver = document.getElementById('over')
var seconds = 20
var second = 0
var interval;
var images = ["sushi.jpg"]

function displayImage() {
	
}

gameOver.style.display = 'none';

interval = setInterval(function() {

	countdown.innerHTML = '<strong>You have<strong> ' + (seconds - second) + ' seconds left!<strong>';
	if (second >= seconds) {
		clearInterval(interval);
	   

	}
	second++;

}, 1000);

}