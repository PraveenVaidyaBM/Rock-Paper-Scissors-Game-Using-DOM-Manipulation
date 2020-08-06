let userChosen
let computerChosen
var result =results();
const displayResults=document.getElementById('result')
const computerChoice=document.getElementById('computer-choice')
const userChoice=document.getElementById('user-choice')
const possibleChoice=document.querySelectorAll('.choice')
const randomNumber = Math.round(Math.random()*(3))

// to get the computer and user choice along with result as soon as user clicks one of 3 buttons
possibleChoice.forEach(possibleChoice=>possibleChoice.addEventListener('click',(e)=>{
    userChosen=e.target.id
    generateComputerChoice()
    results()
    userChoice.innerHTML=userChosen
    computerChoice.innerHTML=computerChosen
    displayResults.innerHTML=result
}))

// to get a random choice among 3 from computer
function generateComputerChoice(){
    if(randomNumber==1){
        return computerChosen='rock'
    } else if(randomNumber==2){
            return computerChosen='paper'
    }
    else if(randomNumber==3){
            return computerChosen='scissors'
        }
}

// to get the result by comparing two inputs for equality and what must be output for difeerent inputs
function results(){
    if(computerChosen===userChosen){
        return result='it is a tie'
    }
    if(userChosen==='rock'&& computerChosen==='paper'){
        return result='you lost'
    }
    if(userChosen==='rock'&& computerChosen==='scissors'){
        return result='you lost'
    }
    if(userChosen==='paper'&& computerChosen==='rock'){
        return result='you lost'
    }
    if(userChosen==='paper'&& computerChosen==='scissors'){
        return result='you lost'
    }
    if(userChosen==='scissors'&& computerChosen==='rock'){
        return result='you lost'
    }
    if(userChosen==='scissors'&& computerChosen==='paper'){
        return result='you lost'
    }
}