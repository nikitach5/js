var userScore = 0;                                         //it will store the user score
var computerScore = 0;                                    // it will store the computer score

const userScore_span = document.getElementById("user-score");            //this is will display the user-score
const computerScore_span = document.getElementById("computer-score");    // this will display the computer score

const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function win(){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = "You win!";
}

function lost(){
   computerScore++;
   computerScore_span.innerHTML = computerScore;
   userScore_span.innerHTML = userScore;
   result_p.innerHTML = "You lost!";
}

function draw(){
    result_p.innerHTML = "It's a draw";
}


//  getComputerChoice function will generate the random values every time when user click on any of the three choices
function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randNum = Math.floor(Math.random()*3);
    return choices[randNum];
}

// game function will take the user choice and then match with the computer choice that whether it's win, lost or draw.
// win will happen ony in three cases when user:computer choose { rock:scissor , paper:rock , scissor:paper }
// and draw will happen when they both choose the same choice and lost in other cases.

function game(userChoice){
    const computerChoice = getComputerChoice();
    if(userChoice=="r"){
        if(computerChoice=="r") draw();
        else if(computerChoice=="p") lost();
        else win();
    }
    else if(userChoice=="p"){
        if(computerChoice=="r") win();
        else if(computerChoice=="p") draw();
        else lost();
    }
    else{
        if(computerChoice=="r")  lost();
        else if(computerChoice=="p") win();
        else draw();
    }
}

function main() {
    rock_div.addEventListener('click', function(){
        game("r");
    })
    paper_div.addEventListener('click', function(){
        game("p")
    })
    scissors_div.addEventListener('click', function(){
        game("s")
    })    
}

main();

