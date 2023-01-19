
/*
    Your game is going to play against the computer, so begin with a function
    called getComputerChoise that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
    use the console to make sure this is returning the expected output before moving to the next step!
*/


// computer Choise Function: 

function computerChoise(){
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    
    switch (randomNumber) {

        case 1: return 'rock';
            break;
        case 2: return 'paper';
            break;            
        case 3: return 'scissors';
            break;    
        }

}
// player Choise Function:        
function playerChoise() { 

    let usrInp = prompt(`User: Introduce 'Rock', 'Paper' or 'Scissors'`);
    let usrInp_toLowerCase = usrInp.toLowerCase();
    return usrInp_toLowerCase;
    
}
//play a round Function
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
function getPlayRound() {
    return playRound(playerChoise(), computerChoise());
}
//game function
function game() {
//we get the playRound return, now saved in roundResult. 
    //counters
    let userVictories = 0;
    let computerVictories = 0;
    let roundResult = undefined;
    
    //2nd game logic option:
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

/*
    for (let i = 0; i < 5; i++) {
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
        // your code here!

     }
*/
     //Who won
    if (userVictories > computerVictories) {
            console.log(`user won the game`)
    }else if(userVictories < computerVictories){
            console.log(`computer won the game`)
    }else console.log(`empate`);
        
    }
//game execution
game();
        
    

//console.log(playRound(playerChoise(), computerChoise()));
/*'
function game(getPlayRound){

    let userVictories = 0;
    let computerVictories= 0;
//play 5 rounds
    while (userVictories != 5 || computerVictories != 5) {
        if  (getPlayRound == 1){
            userVictories++;
            console.log('uservictories: ',userVictories)
        }else if (getPlayRound == 2){
            computerVictories++;
            console.log('computervictories: ',userVictories)

        }else if (getPlayRound == 3)
            return 'Empate'; 
//declare winner
        if (userVictories == 5){
            alert('You Win')
        }else if (computerVictories == 5){
            alert('You lose, try again')

        }
    }
}
game(playRound());

*/