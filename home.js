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

function game(){
    
    let score = 0
    let continuePlaying =1
    let rounds = 0
   
    while(continuePlaying){
        //count the number of rounds
        rounds++;
        //################################

        //Get the two guesses
        let playerSelection = prompt('Rock paper scissor')
        let ComputerSelection = GetRandomRockPaperScissor()
        //#################################

        //compare the two guesses
        let result = CompareGuesses(playerSelection , ComputerSelection)
        //#############################

        //test the result of the round

        console.log(result)
        
        //###############################
        
        //determine the winner of the round

        let resultWords = result.split(" ")

        if(resultWords[1] == 'win'){
            score++
        }
        //#########################

        //check if he wants to continue playing
        continuePlaying = parseInt(
            prompt('do you want to play again?/n press 1 to continue and 0 to stop' , '0' )
            )
            
    }

    //determine the winner of the whole game
    if(score >= (rounds/2) ){
        return 'You win'
    }

    return'You lose'
}


console.log(game())