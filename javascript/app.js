$(document).ready(function(){

var questionList = [ {question: "What is the name of Bart Simpson's teacher?",
						answer: "Ms. Krabappel",
						choices: ["Ms. Hoover", "Ms. CrabApple", "Ms. Krabappel", "Ms. Lovejoy"]

                   },

                   {question: "What are the names of the Simpsons' longtime pets?",
                   	answer: "Santa's Little Helper & Snowball II",
                   	choices: ["Santan's Little Helper & Snowball II", "Laddie and Snowball II", "Itchy & Scratchy", "Santa's Little Helper & Snowball II"]

                   },

                   {question: "What is the name of Homer's boss?",
                    answer: "C. Montgomery Burns",
                    choices: ["Duffman", "C. Montgomery Burns", "Whalen Smithers", "Seymour Skinner"]

                   },

                   {question: "Who is Bart's best friend?",
                 		answer: "Millhouse VanHouten",
                 		choices: ["Sherri", "Ralph Wiggum", "Nelson Muntz", "Millhouse VanHouten"] 
                 	},

                 	{question: "What instrument does Lisa play?",
                 	 answer: "Saxophone",
                 	 choices: ["Saxophone", "Drums", "Guitar", "Violin"]

                 	},

                 	{question: "Who voices Apu, Chief Wiggum, Moe Szyslak?",
                 	answer: "Hank Azaria",
                 	choices: ["Dan Castellaneta", "Hank Azaria", "Phil Hartman", "Albert Brooks"]

                 	},	

					{question: "On what TV show did the Simpsons first appear?",
					answer: "The Tracey Ullman Show",
					choices: ["Saturday Night Live", "The Tonight Show", "The Oprah Winfey Show", "The Tracey Ullman Show"]

					},                 

					{question: "Who created The Simpsons?",
					answer: "Matt Groening",
					choices: ["Matt Groening", "Albert Brooks", "Sam Simon",
					"James L. Brooks"]

					}



                  


];





window.onload = function () {

var countdown = document.getElementById('timer')

var seconds = 20
var second = 0
var interval;
var questions = 




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
