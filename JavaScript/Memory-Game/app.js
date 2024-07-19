const cardArray = [

    {
        name:'fries',
        img:'images/fries.png'
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    },
    {
        name:'pizza',
        img:'images/pizza.png'
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },
    {
        name:'fries',
        img:'images/fries.png'
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    },
    {
        name:'pizza',
        img:'images/pizza.png'
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    }  
]

cardArray.sort(()=>0.5-Math.random());
let score=0;
const scoreDisplay = document.getElementById('score');
scoreDisplay.innerHTML=score;

const cardsChosen = []
const cardsChosedIds = []
let gridDisplay = document.querySelector('#grid')
cardArray.forEach((item,index)=>{
    const card = document.createElement('img');
    card.setAttribute('src','images/blank.png');
    card.setAttribute('data-id',index);
    card.addEventListener('click',flipCard);
    gridDisplay.append(card);
})


function flipCard(){
    const cardId = this.getAttribute('data-id');
    const path = cardArray[cardId].img;
    console.log(this);
    this.setAttribute('src',path);
    cardsChosen.push(cardArray[cardId].name);
    cardsChosedIds.push(cardId);
    if(cardsChosen.length===2){
        setTimeout(() => {
            checkForMatch()
        }, 500);
    }
}


function checkForMatch(){
    const imgsDisplay = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosedIds[0];
    const optionTwoId = cardsChosedIds[1];
    if(optionOneId===optionTwoId){
        alert('You have chose same card')
        imgsDisplay[optionOneId].setAttribute('src','images/blank.png');
    }
    else if(cardsChosen[0] === cardsChosen[1]){
        alert('You found a match');
        imgsDisplay[optionOneId].setAttribute('src','images/white.png');
        imgsDisplay[optionTwoId].setAttribute('src','images/white.png');
        imgsDisplay[optionOneId].removeEventListener('click',flipCard);
        imgsDisplay[optionTwoId].removeEventListener('click',flipCard);
        score++;
        scoreDisplay.innerHTML=score;
        if(score == cardArray.length/2)
        {
            const result = document.getElementById('result');
            result.innerHTML = 'You have matched all '
        }
    }
    else{
        alert('Please try again')
        imgsDisplay[cardsChosedIds[0]].setAttribute('src','images/blank.png');
        imgsDisplay[cardsChosedIds[1]].setAttribute('src','images/blank.png');
    }
        cardsChosedIds.pop();
        cardsChosedIds.pop();

        cardsChosen.pop();
        cardsChosen.pop();
}

