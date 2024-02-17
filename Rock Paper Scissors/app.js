const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let computerChoice
let userChoice
let result

// possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
//     userChoice = e.target.id So, in your code, e.target.id is likely used to access the id attribute of the HTML element that triggered the 
// event. This can be useful for identifying which element was interacted with and taking specific actions based on that information.
        // userChoiceDisplay.innerHTML = userChoice
// }) 

// )

function rock(){
    userChoice = "rock"
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
}

function paper(){
    userChoice = "paper"
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
}
function scissors(){
    userChoice = "scissors"
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
}
 

function generateComputerChoice(){
   let randomNumber = Math.floor(Math.random() * 3) // use possibleChoices.length
   if (randomNumber === 0){
    computerChoice = "rock"
       computerChoiceDisplay.innerHTML = computerChoice
   } else if (randomNumber === 1){
    computerChoice = "paper"
       computerChoiceDisplay.innerHTML = computerChoice
    } else if (randomNumber === 2){
        computerChoice = "scissors"
        computerChoiceDisplay.innerHTML = computerChoice
    }
    
   getResult()
}

function getResult(){
    if (computerChoiceDisplay === userChoiceDisplay){
        result = "It is a tie!"
    }
    else if(computerChoice === "rock" && userChoice === "paper"){
        result = "You win!"
    }
    else if(computerChoice === "paper" && userChoice === "scissors"){
        result = "You win!"
    }
    else if(computerChoice === "scissors" && userChoice === "rock"){
        result = "You win!"
    }
    else if(computerChoice === "rock" && userChoice === "scissors"){
        result = "You lost!"
    }
    else if(computerChoice === "paper" && userChoice === "rock"){
        result = "You lost!"
    }
    else if(computerChoice === "scissors" && userChoice === "paper"){
        result = "You lost!"
    }
    resultDisplay.innerHTML = result
    
}