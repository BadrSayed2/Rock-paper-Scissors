function GetRandomRockPaperScissor(){
    let ComputerGuessProbability = Math.random()
    
    if(ComputerGuessProbability <=(1/3)){
        return 'rock'
    } else if(ComputerGuessProbability <=(2/3) ){
        return 'paper'
    } else {
        return 'scissors'
    }
}

function CompareGuesses( Guess , ComputerGuess){
       Guess = Guess.toLowerCase();

        if (Guess == ComputerGuess){
            return 'It is a draw'
        }

        if(Guess == 'rock'){
            
            if (ComputerGuess == 'paper'){
                return 'You lose Paper beats Rock'
            } else {
                return'You win Rock beats Scissors'
            }

        }

        else if(Guess == 'paper'){
            
            if (ComputerGuess == 'scissors'){
                return 'You lose Scissors beats Paper'
            } else {
                return'You win Paper beats Rock'
            }
        }

        else if(Guess == 'scissors'){
            
            if (ComputerGuess == 'rock'){
                return 'You lose Rock beats Scissors'
            } else {
                return'You win Scissors beats Paper'
            }

        }

        else {
            return 'Unknown answer , Please enter Rock or Paper or Scissors'
        }
        
    }
    
    //########################################################################################
   
   
    const guessButtons = document.querySelectorAll('.guesses button')
    let playerSelection = 'rock';
    
    for(const guessButton of guessButtons){
        let activatedButton = document.getElementById(guessButton.textContent);    
        guessButton.addEventListener('click' , ()=>{
            for(const button of guessButtons){
                if(button.textContent == activatedButton.textContent){
                    
                    button.setAttribute('style', ' color:red')
                    playerSelection = guessButton.textContent        

                }else{
                    button.setAttribute('style', ' color:default')
                }
            
        }

        })  
    }




    let score = 0
    let rounds = 0


function playOneRound(){
    
        rounds++;

        let ComputerSelection = GetRandomRockPaperScissor()

        let result = CompareGuesses(playerSelection , ComputerSelection)

        
        //determine the winner of the round
        
        let resultWords = result.split(" ")
        
        if( resultWords[1] == 'win'){
            score++
        } else if (resultWords[1] == 'lose') {
            
        } else{
            rounds--
        }
        //#########################
        return result
        console.log(result)
        // console.log(rounds)
        // console.log(score)

}


const roundResult = document.querySelector('.roundResult')
const roundsCount = document.querySelector('.roundsResult')
const totalScore = document.querySelector('.scoreContent')

const playRound  = document.querySelector('.play')
// playRound.setAttribute('style' , 'color:red')
playRound.addEventListener('click' , function(){
    
    roundResult.textContent = playOneRound()
    
    roundsCount.textContent = rounds
    
    totalScore.textContent = score

    
    
})


const finalResult = document.createElement('h1')
const results = document.querySelector('.results')
results.appendChild(finalResult)


const finishPlaying = document.querySelector('.finish')
// finishPlaying.setAttribute('style' , 'color:red')
finishPlaying.addEventListener('click' , function(){
    if(score > (rounds /2 )){

    finalResult.textContent  = 'well done you beated the computer'
    
    } else if (score < (rounds /2 )){
    
        finalResult.textContent  = 'Hard Luck you lost the game'
        
    }   else{
        
        finalResult.textContent  = 'It is a draw'
    
    }

})

const reset = document.querySelector('.reset')
// finishPlaying.setAttribute('style' , 'color:red')
reset.addEventListener('click' , function(){
   
    finalResult.textContent  = ''
    roundResult.textContent =  ''
    roundsCount.textContent = ''
    totalScore.textContent = ''
})



