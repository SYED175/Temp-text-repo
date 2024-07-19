const squares = document.querySelectorAll('.square');
const myScore = document.getElementById('score');
const countdownDisplay = document.getElementById('countdown');

let score = 0;
let randomSquareId = null;
let timer = null;
let countdown = 10;
function randomSquare(){
    
    squares.forEach((square)=>{
        square.classList.remove('mole')
    })
    const randomSquare = squares[Math.floor(Math.random()*9)];
    randomSquare.classList.add('mole');
    randomSquareId = randomSquare.id;
}

function moveMole(){
    timer = setInterval(() => {
        randomSquare()
    }, 900);
}

moveMole()

squares.forEach((square)=>{
    square.addEventListener('mousedown',checkHit)
})

function checkHit(){

    if(this.id == randomSquareId){
        score++;
        myScore.innerHTML = score;
        randomSquareId=null;
    }
    console.log('listening')
}
function countdownTimer(){
    countdown--;
    countdownDisplay.innerHTML = countdown;
    if(countdown==0){
        clearInterval(countdownTimerId);
        clearInterval(timer);
        alert('Game over! your score is '+ score);
        squares.forEach(square=>{
            square.removeEventListener('mousedown',checkHit)
        })
    }
}

let countdownTimerId = setInterval(() => {
    countdownTimer()
}, 1000);