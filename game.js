

/*
    Your game is going to play against the computer, so begin with a function
    called getComputerChoise that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
    use the console to make sure this is returning the expected output before moving to the next step!
*/


// computer Choise Function: 

function computerChoice(){
    let randomNumber = Math.floor((Math.random() * 3) + 1); //Give a number between (and including) 1 and 3
    
    switch (randomNumber) {
    //by default, return lower-case 'returns' to avoid error when functions are working.
        case 1: return 'rock';
            break;
        case 2: return 'paper';
            break;            
        case 3: return 'scissors';
            
            break;    
        }

}
/*
function playerChoice() {
    const buttons = document.querySelectorAll ('button');
    buttons.forEach((button) => {

        button.addEventListener('click', (e) =>{
            
            const getPlayerChoice = e.target.id //we get the playerChoise as the id value [rock, paper or scissors] from each button, whatever targeted
            console.log(`getPlayerChoice: ${getPlayerChoice}`)
            return getPlayerChoice; 
        });
});
}  
*/
//prueba
//playerChoice();

/*
//  player Choise Function:        
function playerChoice(choice) { 


    //let usrInp = prompt(`User: Introduce 'Rock', 'Paper' or 'Scissors'`);    
    //let choice = choice;    
    
    //let usrInp_lowerCase = usrInp.toLowerCase();  //allows non-sensitives inputs to work with functions, avoiding errors. 
    let choice_lowerCase = choice.toLowerCase();  //allows non-sensitives inputs to work with functions, avoiding errors. 
        return choice_lowerCase;
        //return usrInp_lowerCase;

}
*/
/*
Game logic is stablished by Rock, Paper, Scissors traditional rules:
    -return 1: user's victory in match played
    -return 2: computer's victory
    -return 3: 'empate' both won 
*/



function playRound (getPlayerSelection) { 


    const getComputerSelection = computerChoice()
    //prueba, se intentara obtener la seleccion del jugador a traves de un listener que llamara a playRound
    //const getPlayerSelection = playerChoice()
    
    if (getPlayerSelection == getComputerSelection) {
        return 3; //TIE
    
    }else if (getPlayerSelection == 'rock' && getComputerSelection == 'scissors' || 
              getPlayerSelection == 'scissors' && getComputerSelection == 'paper' ||
              getPlayerSelection == 'paper' && getComputerSelection == 'rock') {
        return 1; //WIN 
    //LOSE
    }else if (getPlayerSelection == 'rock' && getComputerSelection == 'paper' ||
              getPlayerSelection == 'scissors' && getComputerSelection == 'rock' ||
              getPlayerSelection == 'paper' && getComputerSelection == 'scissors') 
        return 2; //LOSE
    }

const buttons = document.querySelectorAll('button'); //Player choice buttons

buttons.forEach((button) => {

    button.addEventListener('click', (event) => {

        const result = playRound(event.target.id);
        console.log(result);
        
});
});
//display Results



