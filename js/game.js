
/*
    Your game is going to play against the computer, so begin with a function
    called getComputerChoise that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
    use the console to make sure this is returning the expected output before moving to the next step!
*/


// computer Choise Function: 

function computerChoise(){
    let randomNumber = Math.floor((Math.random() * 3) + 1); //Give a number between (and including) 1 and 3
    
    switch (randomNumber) {
    //by default, return lower-case returns for avoid error when functions are working.
        case 1: return 'rock';
            break;
        case 2: return 'paper';
            break;            
        case 3: return 'scissors';
            break;    
        }

}
//  player Choise Function:        
function playerChoise() { 

    let usrInp = prompt(`User: Introduce 'Rock', 'Paper' or 'Scissors'`);
    let usrInp_toLowerCase = usrInp.toLowerCase();  //allows non-sensitives inputs to work with functions, avoiding errors. 
    return usrInp_toLowerCase;

}
/*
Game logic is stablished by Rock, Paper, Scissors traditional rules:
    -return 1: user's victory in match played
    -return 2: computer's victory
    -return 3: 'empate' both won 
*/
function playRound (getPlayerSelection, getComputerSelection) { 
    if (getPlayerSelection == getComputerSelection) {
        return 3;
    }else if (getPlayerSelection == 'rock' && getComputerSelection == 'scissors') {
        return 1;
    }else if (getPlayerSelection == 'rock' && getComputerSelection == 'paper') {
        return 2;
    }else if (getPlayerSelection == 'scissors' && getComputerSelection == 'paper') {
        return 1;
    }else if (getPlayerSelection == 'scissors' && getComputerSelection == 'rock') {
        return 2;
    }else if (getPlayerSelection == 'paper' && getComputerSelection == 'rock') {
        return 1;
    }else if (getPlayerSelection == 'paper' && getComputerSelection == 'scissors') {
        return 2; }
}
//  Introduced getPlayRound function to allow simplicity. 
function getPlayRound() {
    return playRound(playerChoise(), computerChoise());
}
//  Game function, add feat: counters, logic behind victories, and console.log results.
function game() {
    //counters
    let userVictories = 0;
    let computerVictories = 0;
    let roundResult = undefined;

    for (let i = 0; i < 5; i++) { //Plays 5 matches
        
        roundResult = getPlayRound();   //We get the playRound return, now saved in roundResult
        if (roundResult == 1){ //
            userVictories++;
            console.log('MATCH RESULT: user point!')
        }else if(roundResult == 2){
            computerVictories++;
            console.log('MATCH RESULT: computer point!')
        }else if(roundResult == 3){
            console.log('MATCH RESULT empate!');
        }
        console.log(`MATCH STATUS\nuser points: ${userVictories}\ncomputer points: ${computerVictories}`)

     }
/*     
    
            Alternative game behavior version in game function:
   
    In this version, the game non stop until player or computer won 5 games,
    I,e.: if roundResult == 3, 'empate' every time by match, then
    would be infinite matches until a win result in one game, by other hand, the default
    game option allow the game to stop at 5 matches played.
    
  
    function game() {
//we get the playRound return, now saved in roundResult. 
    //counters
    let userVictories = 0;
    let computerVictories = 0;
    let roundResult = undefined;
    while (userVictories < 5 && computerVictories < 5){
        roundResult = getPlayRound();
        if (roundResult == 1){
            userVictories++;
            console.log('MATCH RESULT: user point!')
        }else if(roundResult == 2){
            computerVictories++;
            console.log('MATCH RESULT: computer point!')
        }else if(roundResult == 3){
            console.log('MATCH RESULT empate!');
        }
        console.log(`MATCH STATUS\nuser points: ${userVictories}\ncomputer points: ${computerVictories}`)
    }

*/

    //  Dictates who won the game, when internal loop in game function is finished.
    if (userVictories > computerVictories) {
            console.log(`user won the game`)
    }else if(userVictories < computerVictories){
            console.log(`computer won the game`)
    }else console.log(`empate`);
        
    }

//  Game execution by default.
game();