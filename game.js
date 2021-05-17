var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

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

function lose(){
   computerScore++;
   computerScore_span.innerHTML = computerScore;
   userScore_span.innerHTML = userScore;
   result_p.innerHTML = "You lose!";
}

function draw(){
    result_p.innerHTML = "It's a draw";
}



function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randNum = Math.floor(Math.random()*3);
    return choices[randNum];
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    if(userChoice=="r"){
        if(computerChoice=="r") draw();
        else if(computerChoice=="p") lose();
        else win();
    }
    else if(userChoice=="p"){
        if(computerChoice=="r") win();
        else if(computerChoice=="p") draw();
        else lose();
    }
    else{
        if(computerChoice=="r")  lose();
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

