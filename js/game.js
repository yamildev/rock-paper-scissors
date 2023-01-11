/*
    Your game is going to play against the computer, so begin with a function
    called getComputerChoise that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
    use the console to make sure this is returning the expected output before moving to the next step!
*/

// computer Choise Function: 
function getComputerChoise(){
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    switch (randomNumber) {
        //main.js is linked to index.html
        //getComputerChoise change: perform switch to return. 
        case 1: return 'rock';
            break;
        case 2: return 'paper';
            break;            
        case 3: return 'scissors';
            break;    
        }

    /* desactivamos para prueba de switch
    if       (randomNumber == 1) { return 'rock'; 
    }else if (randomNumber == 2) { return 'paper';
    }else if (randomNumber == 3) { return 'scissors'; 
    */
}

// player Choise Function:        
function getPlayerChoise() { 
    let usrInp = prompt(`Introduce 'Rock', 'Paper' or 'Scissors'`);
    let usrInp_toLowerCase = usrInp.toLowerCase();
    return usrInp_toLowerCase;
}

// playRound Function:
function playRound (getPlayerChoise, getComputerChoise) {
//aca hay que agregar la salida a las combinaciones, utilizare un switch
/*
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}
*/
    if (getPlayerChoise == getComputerChoise) {
        prompt('Empate');
    }else{
    }
    // prueba
    console.log("player Choise: ", getPlayerChoise());
    console.log("Computer Choise: ", getComputerChoise());


}
playRound(getPlayerChoise, getComputerChoise);



