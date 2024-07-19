const grid = document.querySelector('.grid')

const blockWidth = 100
const blockHeight = 20
const userPosition = [230,10]

const gridWidth = 570
const gridHeight = 300

const ballPosition = [270,90]
const ballDiameter = 20

let xDirection = 2
let yDirection = 2

let score=0

const result = document.getElementById('result')
//we want to map all four positions of the block, creating class
class Block{
    constructor(xAxis,yAxis){
        this.bottomLeft = [xAxis,yAxis]
        this.bottomRight = [xAxis+blockWidth,yAxis]
        this.topLeft = [xAxis,yAxis+blockHeight]
        this.topRight = [xAxis+blockWidth,yAxis+blockHeight]
    }
}

const blocksArray = [
    new Block(10,270),
    new Block(120,270),
    new Block(230,270),
    new Block(340,270),
    new Block(450,270),

    new Block(10,240),
    new Block(120,240),
    new Block(230,240),
    new Block(340,240),
    new Block(450,240),

    new Block(10,210),
    new Block(120,210),
    new Block(230,210),
    new Block(340,210),
    new Block(450,210),
]

function addBlock(){
    for(var i = 0;i<blocksArray.length;i++){
        const block = document.createElement('div');
        block.classList.add('block')
        block.style.left = blocksArray[i].bottomLeft[0] + 'px';
        block.style.bottom = blocksArray[i].bottomLeft[1] + 'px';
        grid.appendChild(block)
    }
}
addBlock()

//user
const userBlock = document.createElement('div')
userBlock.classList.add('userBlock')
moveUser()
grid.appendChild(userBlock)

function moveUser(){
    userBlock.style.left = userPosition[0]+'px'
    userBlock.style.bottom = userPosition[1]+'px'
}

document.addEventListener('keydown',moveUserBlock)
// document.addEventListener('keydown',moveUserBlock)

function moveUserBlock(e){
    switch(e.key){
        case 'ArrowLeft':
            if(userPosition[0]>0){
                userPosition[0] -=10
                moveUser()
            }
            break;
        case 'ArrowRight':
            if(userPosition[0]<gridWidth-blockWidth){
                userPosition[0] +=10
                moveUser()
            }
            break;
    }
}

//ball
const ball = document.createElement('div')
ball.classList.add('ball')
drawBall()
grid.appendChild(ball)

function drawBall(){
    ball.style.left=ballPosition[0]+'px'
    ball.style.bottom=ballPosition[1]+'px'
}




//move Ball
let timer1; 
function moveBall(){
        ballPosition[0]+=xDirection
        ballPosition[1]+=yDirection
        drawBall()
        checkForCollision()
}


function initiate(){
    timer1 = setInterval(() => {
        moveBall()
    }, 20);
    
}
initiate()

function checkForCollision(){
    for(let i=0;i<blocksArray.length;i++){

        if(
            (ballPosition[0]>blocksArray[i].bottomLeft[0] && ballPosition[0]<blocksArray[i].bottomRight[0])
            &&
            (ballPosition[1]>blocksArray[i].bottomLeft[1] && ballPosition[1]<blocksArray[i].topLeft[1])
        ){
            const allBlocks = Array.from(document.querySelectorAll('.block'))
            console.log(allBlocks[i].classList.remove('block'))
            blocksArray.splice(i,1);
            console.log(blocksArray.length)
            changeDirection()
            score++;
            result.innerHTML = score
        }
    }

    // grid check
    if( ballPosition[0]>gridWidth-ballDiameter || ballPosition[1]>gridHeight-ballDiameter || ballPosition[0]<=0){
        changeDirection()
    }

    //game over
    if(ballPosition[1]<=0 ){
        clearInterval(timer1);
        result.innerHTML='Game over!'
        document.removeEventListener('keydown',moveUserBlock)
    }
    if(ballPosition[1]<userPosition[1]+blockHeight && ballPosition[1]>userPosition[1]){
        if(ballPosition[0]<userPosition[0]+blockWidth && ballPosition[0]>userPosition[0]){
                changeDirection()
        }
    }
}

function changeDirection(){
    if(xDirection === 2 && yDirection === 2){
        yDirection = -2
        return
    }
    if(xDirection ===2 && yDirection === -2){
        xDirection = -2
        return
    }
    if(xDirection === -2 && yDirection === -2){
        yDirection = 2
        return
    }
    if(xDirection === -2 && yDirection === 2){
        xDirection = 2
        return 
    }
}
