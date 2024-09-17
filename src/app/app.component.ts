import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mastermind-ng';
    isGameDone:boolean
    rounds: Round[]
    possibleColours: string[]
    numberOfRounds:number
    numberOfChoices: number
    numberOfPipsSelected: number
    currentRound: number
    currentSolution: string[]
    gameResult: string
  
    constructor() {
      this.isGameDone = false
      this.rounds = []
      this.possibleColours = [
        'DarkBlue',
        'BrightBlue',
        'Green',
        'Yellow',
        'Orange',
        'Red',
        'RebeccaPurple',
      ]
      this.numberOfChoices = 4
      this.numberOfRounds = 10
      
      
      
     }
  
    ngOnInit() {
      this.initializeGame();
      
      
    }

    initializeGame(){
      this.rounds = []
      this.isGameDone = false
      this.numberOfPipsSelected = 0
      this.currentRound = 0
      this.generateEmptyRounds(this.numberOfRounds,this.numberOfChoices);
      this.currentSolution = this.generateSolution(this.possibleColours,this.numberOfChoices)
      this.gameResult = 'playying'
      this.rounds[this.currentRound].status = "active";
    }

    pickRandomItem(items){
      const rand = Math.floor(Math.random() * items.length)
      return items[rand]

    }

    generateSolution(colours,number){
      const tempSol = this.generateListOfStuff(number,'');
      for(let i = 0; i< tempSol.length; i++){
        
        tempSol[i] = this.pickRandomItem(colours)
      }

      return [...tempSol]

    }
  
    generateEmptyRounds(numberOfRounds,numberOfPips){
  
      for(let i = 0; i < numberOfRounds; i++){
        const round = new Round()
  
        round.status='blank'
        round.currentChoice = [
          ...this.generateListOfBlanks(numberOfPips)
        ]
        round.guessFeedback=[
          ...this.generateListOfBlanks(numberOfPips)
        ]
  
        this.rounds.push(round)
  
      }
    }
  
    generateListOfBlanks(number){
      return this.generateListOfStuff(number,'blank');
    }

    generateListOfStuff(number,stuff){
      const list = [];
      for(let i = 0; i < number; i++){
        list.push(stuff);
      }
  
      return list;
    }

    selectedPip(colour){
      alert(this.rounds);
    }

    handlePipSelectedEvent(colour: string) {
      if(this.isGameDone)
        return
      
      if(this.numberOfPipsSelected == this.numberOfChoices)
        return
      this.rounds[this.currentRound].currentChoice[this.numberOfPipsSelected] = colour;
      this.numberOfPipsSelected++;
    }

    onClearButtonClick(){
      if(this.isGameDone)
      {
        return
      }
      this.numberOfPipsSelected = 0;
      this.rounds[this.currentRound].currentChoice= [
        ...this.generateListOfBlanks(this.numberOfChoices)
      ]

    }
  
    onSubmitButtonClick(){
      this.generateGuessFeedback()
      this.rounds[this.currentRound].status = "completed";
      this.generateGameResult()
      if(this.isGameDone)
      {
        return
      }
      this.numberOfPipsSelected = 0;
      this.currentRound ++;
      this.rounds[this.currentRound].status = "active";
      
    }
    onNewGameButtonClick(){
      this.initializeGame();
    }
    generateGuessFeedback(){
      const guessFeedback = [
        ...this.generateListOfStuff(this.numberOfChoices,'x')
      ]
      const tempGuess = [...this.rounds[this.currentRound].currentChoice]
      for(let i = 0; i < this.numberOfChoices; i++){
        const sol = this.currentSolution[i]; 

        if(sol === tempGuess[i]){
          guessFeedback[i] = 'black'
          tempGuess[i] = '*'
        } 
        else if(tempGuess.includes(sol)){
          const whiteIndex = tempGuess.indexOf(sol);
          
          if(tempGuess[whiteIndex] === this.currentSolution[whiteIndex]){
            guessFeedback[whiteIndex] = 'black'
          }
          else{
            guessFeedback[i] = 'orange'
          }
          tempGuess[whiteIndex] = '*'
        }
      }

      guessFeedback.sort();
      this.rounds[this.currentRound].guessFeedback = [...guessFeedback.map(str => str.replace('x', 'blank'))];

    }
    generateGameResult(){
      if( this.arraysAreEqual(this.rounds[this.currentRound].currentChoice,this.currentSolution)){
        this.gameResult = 'You Win'
        this.isGameDone = true
        return
      }
      if( this.currentRound+1 == this.numberOfRounds){
        this.gameResult = 'You Lose'
        this.isGameDone = true
      }
    }

    arraysAreEqual(arr1, arr2) {
      // Check if lengths are different
      if (arr1.length !== arr2.length) {
          return false;
      }
  
      // Check if all elements are the same
      return arr1.every((value, index) => value === arr2[index]);
  }
}

class Round{
  status:string
  currentChoice:string[]
  guessFeedback:string[]
}

