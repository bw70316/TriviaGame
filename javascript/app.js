



var questionList = [{"question": "What is the name of Bart Simpson's teacher?",
 "optiona": "Ms. Hoover",
 "optionb": "Ms. Crabapple",
 "optionc": "Ms. Krabappel",
 "optiond": "Mrs. Lovejoy",
 "answer": "3"
 }, {
 "question": "What are the names of the Simpsons' longtime pets?",
 "optiona": "Satan's Little Helper & Snowball II",
 "optionb": "Laddie and Snowball II",
 "optionc": "Itchy & Scratchy",
 "optiond": "Santa's Little Helper & Snowball II",
 "answer": "4"
 }, {
 "question": "What is the name of Homer's boss?",
 "optiona": "Duffman",
 "optionb": "C. Montgomery Burns",
 "optionc": "Whalen Smithers",
 "optiond": "Seymour Skinner",
 "answer": "2"
 }, {
 "question": "Who is Bart's blue-haired best friend?",
 "optiona": "Sherri",
 "optionb": "Ralph Wiggum",
 "optionc": "Nelson Muntz",
 "optiond": "Millhouse VanHouten",
 "answer": "4"
},  {"question": "What musical instrument does Lisa play?",
 "optiona": "Saxophone",
 "optionb": "Drums",
 "optionc": "Violin",
 "optiond": "Trumpet",
 "answer": "1"}]; 

//This is my array of questions. I broke them into objects into one large array.


var countdown = document.getElementById("timer");

var seconds = 60;
var second = 0;
var interval;

 $(".container").hide(); // the game begins with the container hidden and just the start button showing. 

$("#start").on('click', function() { 
		event.preventDefault();
		 $("#start").hide();
 	$(".container").show();
  	countdown.innerHTML = 'You have ' + (seconds - second) + ' seconds left!'; // this is the countdown, 

 	interval = window.setInterval(function() { // this function is a little foreign to me. I realize interval is the amount of time. I used "Google-foo"... I understand that as the clock is run
 		//it goes up one second and displays my innnerhtml from my countdown which is a variable i named above that manipulates the timer div in my html
 		second++;
 		countdown.innerHTML = 'You have ' + (seconds - second) + ' seconds left!'; //used my variables to define the number of seconds to start with. Since second is always plus plus it is 
 		//gradually taking away one from the seconds, which is set at 60.
	 	if (second >= seconds) {
 			clearInterval(interval);
 			$("#outcome").html("<img src='css/giphy.gif' height='300px' width='200px'/>", "<p>sup brah</p>");
 			$("#question").html("D'oh !! you're out of time !!"); 
 			// $("#question").append("<button type='button' onclick='location.href='http://www.stackoverflow.com''">ABC</button>);
 			

 		       }
	}, 50); // This if statement clears the interval when the seconds reach zero and displays a new statement in the html. 1000 = 1000 ms
 });

// $("#start").on("click", function() {
//  $("#start").hide();
 
//  }); // this just hides the start button on click

var currentQuestion = 0;
var score= 0;
var totalQuestions= questionList.length;
var outcome= document.getElementById('outcome');




$(".option").on('click', function() { // someone clicks on my options (radio button inputs)
	
var answer = $(this).val(); // collects info on the exact button pushed

var correctAnswer = questionList[currentQuestion].answer; //set a variable for correctAnswer equal to the current question from my array "questionList" and grabs that object that equals to answer
// for that question

if (answer === correctAnswer) {
score++;
 currentQuestion++;
	 	
}  // if statement declaring that if the answer (aka the "this" button pushed) equals correct ansser, the score will go up and the currentQuestion will go up from the array.

if (answer !== correctAnswer) {

		currentQuestion++;  
}// same deal only no score change

if(currentQuestion === totalQuestions){
	
	$("#question").html("You got " + score + " right!!");
	// $("#question").append("<button type='button' onclick='location.href='http://www.stackoverflow.com''">ABC</button>");
	$("#button").show();
	$("#again").on('click', function(){
	console.log("click");
	$(".container").hide();
	$("#start").show();
	
});

		

 } // when game is over it will display the score

if (score > 4) {

		$("#outcome").html("<img src='css/excellent.gif' height='300px' width='200px'/>");

			$("#timer").hide();
			
			clearInterval(interval);

} // if user gets more than 4, then they get an "excellent" gif.
 
if ( (currentQuestion === totalQuestions) && (score < 4) ) { 

$("#outcome").html("<img src='css/dummy.gif' height='300px' width='200px'/>");
$("#timer").hide();
clearInterval(interval);

} // this just says if the game is over and the score is less than four... you get a doh gif and i hid the timer and clearinterval so it doesn't restart



});


	




//I know i need to havea  way to revert it back, but I tried to go above and beyond and do the advanced for 5 days. After I couldnt get that to work, I decided this morning....
//to start from quasi-scratch and create the basic game. All in all I think I did pretty good and am confident that if i spent the amount of time i spent on the advanced on this....
//I would have yielded a product with that capability and more. How do you get the screen to change damn it??