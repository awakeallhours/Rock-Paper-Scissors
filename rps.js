let counter = 0;

const container = document.querySelector("#container");

container.setAttribute("style", "background: darkgreen;")

const title = document.createElement("h1");
title.classList.add("title");
title.textContent = "Rock Paper Scissors";
title.setAttribute("style", "text-align: center;")
container.appendChild(title);

const scores = document.createElement("div");
scores.classList.add("scores");
scores.setAttribute("style", "text-align: center")
container.appendChild(scores)

let round = document.createElement("h2")
round.classList.add("round")
round.textContent = `Round 0`;
scores.appendChild(round)

let computerScore = 0;
let scoreCom = document.createElement("h2")
scoreCom.classList.add("scoreCom")
scoreCom.textContent = `Computer Score: ${computerScore}`;
scoreCom.setAttribute("style", "display: inline-block; margin: 8px;")
scores.appendChild(scoreCom)

let humanScore = 0;
let scoreHum = document.createElement("h2")
scoreHum.classList.add("scoreHum")
scoreHum.textContent = `Human Score: ${humanScore}`;
scoreHum.setAttribute("style", "display: inline-block; margin: 8px;")
scores.appendChild(scoreHum)

const resultTextH = document.createElement("h2")
resultTextH.classList.add("resultText")
resultTextH.textContent = "Get Ready to Play!";
resultTextH.setAttribute("style", "text-align: center;")
container.appendChild(resultTextH)

const buttonsContainer = document.createElement("div");
buttonsContainer.classList.add("buttonsContainer");
buttonsContainer.setAttribute("style", "text-align: center")
container.appendChild(buttonsContainer)


const rockButton = document.createElement("button");
rockButton.classList.add("btn");
rockButton.id = "rock"
rockButton.textContent = "Rock";



const paperButton = document.createElement("button");
paperButton.classList.add("btn");
paperButton.id = "paper"
paperButton.textContent = "Paper";



const scissorsButton = document.createElement("button");
scissorsButton.classList.add("btn");
scissorsButton.id = "scissors"
scissorsButton.textContent = "Scissors";


const playAgain = document.createElement("button");
playAgain.classList.add("playAgain");
playAgain.textContent = "Play Again";
playAgain.setAttribute("style", "padding: 8px; margin: 8px; display: none;")
buttonsContainer.appendChild(playAgain)



rockButton.addEventListener("click", function () {playRound(getComputerChoice(),getHumanChoice("rock"))
})
paperButton.addEventListener("click", function () {playRound(getComputerChoice(),getHumanChoice("paper"))
})
scissorsButton.addEventListener("click", function () {playRound(getComputerChoice(),getHumanChoice("scissors"))
})
//fix this button and how it works
playAgain.addEventListener("click", function () {newGame()
})


buttonsContainer.appendChild(rockButton);
buttonsContainer.appendChild(paperButton);
buttonsContainer.appendChild(scissorsButton);

const gameButtons = document.querySelectorAll(".btn");

gameButtons.forEach((button) => { button.setAttribute("style", "padding: 8px; margin: 8px;")})



function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3)
    let selected = "";
    if(rand === 0)
    {
        selected = "Rock"
    }
    else if(rand === 1)
    {
        selected = "Paper"
    }
    else if(rand === 2)
    {
        selected = "Scissors"
    }

    console.log(`computer choice ${selected}`)
    return selected.toLowerCase();
    
}

function newGame() {
    playAgain.setAttribute("style", "display: none;")
    gameButtons.forEach((button) => { button.setAttribute("style", "display: inline-block; padding: 8px; margin: 8px;")})
    scoreCom.setAttribute("style", "color: Black; display: inline-block; margin: 8px;;")
    scoreHum.setAttribute("style", "color: Black; display: inline-block; margin: 8px;;")
    resultTextH.setAttribute("style", "text-align: center; color: Black;")
    resultTextH.textContent = "Get Ready to Play!";
    counter = 0;
    humanScore = 0;
    computerScore = 0;
}


function getHumanChoice(choice) {
    
    
    console.log(choice)
    return choice;
}

function playRound(computerChoice, humanChoice){
    
    let resultText = "";
    
    
    
    if(computerChoice === "rock")
    {
        if(humanChoice === "paper") 
        {
            resultText = "Paper beats Rock You Win!";
            humanScore += 1;
        }

        else if(humanChoice === "scissors")
        {
            resultText = "Rock beats Scissors Computer Wins!";
            computerScore +=1;
        }

        else if(humanChoice === "rock")
        {
            resultText = "You both chose Rock";
        }
    }

    if(computerChoice === "paper")
    {
            if(humanChoice === "rock") 
            {
                resultText = "Paper beats Rock Computer Wins";
                computerScore +=1;
            }
    
            else if(humanChoice === "scissors")
            {
                resultText = "Scissors beat Paper You Win!";
                humanScore +=1;
            }
    
            else if(humanChoice === "paper")
            {
                resultText = "You both chose Paper";
            }
    }

    if(computerChoice === "scissors")
    {
            if(humanChoice === "rock") 
            {
                resultText = "Rock beats Scissors You Win!";
                humanScore +=1;
            }
    
            else if(humanChoice === "paper")
            {
                resultText = "Scissors beat Paper Computer Wins";
                computerScore +=1;
            }
    
            else if(humanChoice === "scissors")
            {
                resultText = "You both chose Scissors";
            }
    }
    
    round.textContent = `Round ${counter + 1}`;
    ++ counter  ;
    const result = console.log(`${resultText}`)
    resultTextH.textContent = `${resultText}`;
    scoreHum.textContent = `Human Score: ${humanScore}`;
    scoreCom.textContent = `Computer Score: ${computerScore}`;
    
    if(counter >= 5) {
        
        gameButtons.forEach((button) => { button.setAttribute("style", "display: none;")})
        
        playAgain.setAttribute("style","padding: 8px; margin: 8px; display: none; display: inline-block;")
        
        if(humanScore > computerScore)
        {
            resultTextH.textContent = "You Win the Game!";
            resultTextH.setAttribute("style", "text-align: center; color: Green;")
        }
        else if(humanScore < computerScore)
        {
            resultTextH.textContent = "Computer Wins the Game!";
            resultTextH.setAttribute("style", "text-align: center; color: Red;")
        }
        else if(humanScore === computerScore)
        {
            resultTextH.textContent = "It's a Tie!";
        }
        
        scoreHum.textContent = `Human Score: ${humanScore}`;
        scoreHum.setAttribute("style", "color: Green; display: inline-block; margin: 8px;;")
        scoreCom.textContent = `Computer Score: ${computerScore}`;
        scoreCom.setAttribute("style", "color: Red; display: inline-block; margin: 8px;;")
        
        
    }
    
    console.log(counter)
    return result;

    
}