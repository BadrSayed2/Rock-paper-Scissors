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


const playerSelection = 'Rock'
const ComputerSelection = GetRandomRockPaperScissor()
console.log(ComputerSelection)
console.log(CompareGuesses(playerSelection , ComputerSelection))