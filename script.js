var score = [0,0,0]; //win by user, win by CPU, draw

function computerPlay(){
    let values = ["Rock","Paper","Scissors"];
    index = Math.floor(Math.random()*3);
   // console.log(index);
    return(values[index]);
}


function Round(playerSelection, computerSelection) {
   let playerLow = playerSelection.toLowerCase();
   let computerLow = computerSelection.toLowerCase();
   
   function computerWins() {
        score[1]++;
        return("Computer Wins");
    }
   
   function playerWins() {
        score[0]++;
        return("Player wins!");
    }    
    
    function draw() {
        score[2]++;
        return("Draw");
    }

    if (playerLow === computerLow) {draw();}
    else{
        let winner;
        switch (playerLow) {
            case "rock":
               winner = (computerLow === "paper") ? computerWins() : playerWins();
               return(winner);
               break;
            case "paper":
                winner = (computerLow === "scissors") ? computerWins() : playerWins();
                return(winner);               
                break;
            case "scissors":
                winner = (computerLow === "rock") ? computerWins() : playerWins();
                return(winner);
        }
    }
}


function game(){
       // let player = computer = "";
        let player = prompt("Choose: Rock, Paper, Scissor: ");
        let computer = computerPlay();
        //If both players put the same, repeat the round
        while(player.toLowerCase()===computer.toLowerCase()){
            player = prompt("AGAIN!!!   Choose: Rock, Paper, Scissor: ")
            computer = computerPlay();
            score[2]++;
        }
        
        
        let result = Round(player, computer);   
        console.log("Player choice " + player + " VS CPU choice " + computer);
        console.log(result);

    }


let continuar="";    
do {
    for(let i=1;i<6;i++){
        if (i===1) {
            score[0] = 0;
            score[1] = 0;
            score[2] = 0;
        }
        console.log("Ronda " + i);
        game();
        if (i===5) {
            console.log("-------------------------------------------------------------");
            console.log(" WIN = " + score[0] + " || LOST = " + score[1] + " || DRAW = " + score[2]);
            console.log("-------------------------------------------------------------");
        }
    }
    continuar = prompt("Wanna play again? y/n");

} while (continuar==="y");

