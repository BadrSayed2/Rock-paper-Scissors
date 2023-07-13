function GetRandomRockPaperScissor(){
    let ComputerGuessProbability = Math.random()
    
    if(ComputerGuessProbability <=(1/3)){
        return 'Rock'
    } else if(ComputerGuessProbability <=(2/3) ){
        return 'Paper'
    } else {
        return 'Scissor'
    }
}

console.log(GetRandomRockPaperScissor())