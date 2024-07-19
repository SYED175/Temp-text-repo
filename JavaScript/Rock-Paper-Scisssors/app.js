const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button')



let userChoice;

possibleChoices.forEach((item)=>{
    item.addEventListener('click',()=>{
        userChoice=item.textContent;
        userChoiceDisplay.innerHTML = userChoice

        generateComputerRandom()
        checkResult()
    })
})


let compChoice;
function generateComputerRandom(){
    const compChoiceVal = Math.floor(Math.random()*3 + 1);
    if(compChoiceVal===1)
        compChoice = 'Rock';
    else if(compChoiceVal===2)
        compChoice = 'Paper';
    else
        compChoice = 'Scissor';

    computerChoiceDisplay.innerHTML = compChoice;
}

let result;
function checkResult(){
    if(compChoice===userChoice)
        result = 'Its a draw!'
    else if(compChoice === 'Rock' && userChoice === 'Paper')
        result = 'You won!'
    else if(compChoice === 'Rock' && userChoice === 'Scissor')
        result = 'You lost'
    else if(compChoice === 'Paper' && userChoice === 'Rock')
        result = 'You lost'
    else if(compChoice === 'Paper' && userChoice === 'Scissor')
        result = 'You won!'
    else if(compChoice === 'Scissor' && userChoice === 'Rock')
        result = 'You won!'
    else if(compChoice === 'Scissor' && userChoice === 'Paper')
        result = 'You lost'

    resultDisplay.innerHTML = result;
}
 