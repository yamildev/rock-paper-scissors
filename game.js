//  A: SET UP VARIABLES

let playerScore = 0;
let computerScore = 0;
let userPlay = undefined

const buttons = document.querySelectorAll('button'); // Select the botton who run playRound function

//  B: DOM BUTTON FUNCTIONALITIES 

//  B1: Register the click input to execute the function 'playRound',
//      Register the click input from the user,clear
//      Reference our const 'buttons'.

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            userPlay = e.target.id;
        })        
        button.addEventListener('click', () =>{
            playRound();
        })
    })

//  B2: Disable the buttons if function is called upon (in playRound )

function disableButtons () {
    buttons.forEach(button => {
        button.disabled = true;
    })
}

//  C: SEGREGATED JS FUNCTIONS. ONE FUNCTION ONE ACTION

//  C1. Generate random CPU input

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    let i = Math.floor(Math.random() * choices.length);
    return choices[i];    
};
   
//  C3. Executes game logic, conditions for user input to win vs CPU random input
/*
    1. playRound function pulls in (references) two other functions: computerPlay, disableButtons
    2. playRound function is then pulled into the DOM: button.addEventListener('click', function (){
        playRound(e.target.id);
    })
*/

function playRound () {
    
    let getPlayerSelection = userPlay;
    let getComputerSelection  = computerPlay();
    let result = "" //  show result

    if (getPlayerSelection == getComputerSelection) {

        result =  `<br><br><b>Is a tie: </b><br>both chose ${getPlayerSelection}`; //TIE

    }else if  ((getPlayerSelection == 'rock' && getComputerSelection == 'scissors') || 
              (getPlayerSelection == 'scissors' && getComputerSelection == 'paper') ||
              (getPlayerSelection == 'paper' && getComputerSelection == 'rock')) {
    

        playerScore += 1;
        //result = `<br><b>You win: </b><br> ${getPlayerSelection} beats ${getComputerSelection}`;
        result = `<br><br><b>You win: </b><br>${getPlayerSelection} beats ${getComputerSelection}`;

        if (playerScore == 5) {

            result += '<br><br>You Won the game! Reload the page to play again.'
            disableButtons (); // disable the buttons once the game is finished because user won.
        }

    }else {
        
        computerScore += 1;
        result = `<br><br><b>You Lose: </b><br>${getComputerSelection} beats ${getPlayerSelection}`; 
        
        if (computerScore == 5) {
            result += `<br><br>You lose. Reload the page to try again`
            disableButtons();
        }
    }

// C3. Update and show results by element.innerHTML method

    document.getElementById('result').innerHTML = result
    document.getElementById('result-playerScore').innerHTML = `<b>Player:</b><br> ${playerScore}`;
    document.getElementById('result-computerScore').innerHTML = `<b>Computer:</b><br> ${computerScore}`;

}

