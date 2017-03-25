$(document). ready(function() {

  
$(".container").hide();
$("#start").on('click', function() {
  $(".container").show()
} );

var questionList = [{"question": "What is the name of Bart Simpson's teacher?",
                    "optiona": "Ms. Hoover",
                    "optionb": "Ms. Crabapple",
                    "optionc": "Ms. Krabappel",
                   "optiond":  "Mrs. Lovejoy",
                   "answer": "3"
                 }, {
                  "question": "What are the names of the Simpsons' longtime pets?",
                  "optiona": "Satan's Little Helper & Snowball II",
                    "optionb": "Laddie and Snowball II",
                    "optionc": "Itchy & Scratchy",
                   "optiond":  "Santa's Little Helper & Snowball II",
                   "answer": "4"
                 },  {
                  "question": "What is the name of Homer's boss?",
                  "optiona": "Duffman",
                    "optionb": "C. Montgomery Burns",
                    "optionc": "Whalen Smithers",
                   "optiond":  "Seymour Skinner",
                   "answer": "2"
                 }, {
                  "question": "Who is Bart's blue-haired best friend?",
                  "optiona": "Sherri",
                    "optionb": "Ralph Wiggum",
                    "optionc": "Nelson Muntz",
                   "optiond":  "Millhouse VanHouten",
                   "answer": "4"
                 }, {
                       "question": "What musical instrument does Lisa play?",
                  "optiona": "Saxophone",
                    "optionb": "Drums",
                    "optionc": "Guitar",
                   "optiond":  "Violin",
                   "answer": "1"
                 }, {
                  "question": "Who voices Apu, Chief Wiggum, Moe Szyslak, and other Springfieldians?",
                  "optiona": "Dan Castellaneta",
                    "optionb": "Hank Azaria",
                    "optionc": "Phil Hartman",
                   "optiond":  "Albert Brooks",
                   "answer": "2"
                 }, {
                  "question": "On which TV show did the Simpsons first appear?",
                  "optiona": "Saturday Night Live",
                    "optionb": "The Tonight Show",
                    "optionc": "The Oprah Winfey Show",
                   "optiond":  "The Tracey Ullman Show",
                   "answer": "4"

                 }, {"question": "On which TV show did the Simpsons first appear?",
                  "optiona": "Matt Groening",
                    "optionb": "Albert Brooks",
                    "optionc": "Sam Simon",
                   "optiond":  "James L. Brooks",
                   "answer": "1"

                 }  ];         



var currentQuestion = 0;
var score= 0;
var totalQuestions= questionList.length;
var outcome= document.getElementById('outcome');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');




  $("#start").on("click", function() {
    $("#start").hide();


  
  });



var countdown = document.getElementById("timer")

var seconds = 20
var second = 0
var interval;



$(document).ready(function(){





interval = setInterval(function()  {

  countdown.innerHTML = '<strong>You have<strong> ' + (seconds - second) + ' seconds left!<strong>';
  if (second >= seconds) {
    clearInterval(interval);
    $("#outcome").html("<img src='css/giphy.gif' height='300px' width='200px'/>");
    $("#question").html("D'oh!! you're out of time!!");
     }

    
  second++;

}, 1000)


});



function loadQuestion (questionIndex) {

  var q = questionList[questionIndex];
  questionEl.textContent = (questionIndex + 1) + '. ' + q.question
  opt1.textContent = q.optiona;
  opt2.textContent = q.optionb;
  opt3.textContent = q.optionc;
  opt4.textContent = q.optiond;
};

function loadNextQuestion () {
  var selectedOption = document.querySelector('input [type=radio]:checked');
  
  var answer = selectedOption.value;
  if (questionList[currentQuestion].answer === answer);{
      score++;
     loadQuestion();
       }
   console.log(solution);
  selectedOption.checked = false;
  currentQuestion++;

  if (currentQuestion ==+ totalQuestions - 1) {
    alert("finish");


  }


}
loadQuestion(currentQuestion);
});


     

                  
//To start the game, I need a button and on.click event run function display game. 




// I need to count the correct answers and number of questions. When someone chooses a correct answer, the question will say correct and display a gif and the answer. If incorrect, same thing. I need to run the length of the questions to declare the game is over. So if questions.length >=8, run function gameOver. 














