import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mastermind-ng';
    isGameDone:boolean
    isChecked:boolean
    rounds: Round[]
    possibleColours: string[]
    numberOfRounds:number
    numberOfChoices: number
    numberOfPipsSelected: number
    currentRound: number
    currentSolution: string[]
    hiddenSolution: string[]
    displaySolution: string[]
    gameResult: string
    stats: {}
    modalState: {}
  
    constructor() {
      this.isGameDone = false
      this.isChecked = false
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
      this.modalState = {
        howTo : "hide",
        stats : "hide"
      }
      
      
     }
  
    ngOnInit() {
      this.initializeGame();
      this.stats = this.loadPlayerStats();
      
      
    }

    isCheckedChange(e){
      if (window.confirm("Changing this setting will start a new game. do you want to continue?")) {
        this.isChecked = !this.isChecked
        this.initializeGame();
      }
      e.target.checked = this.isChecked;
    }

    initializeGame(){
      this.rounds = []
      this.isGameDone = false
      this.numberOfPipsSelected = 0
      this.currentRound = 0
      this.generateEmptyRounds(this.numberOfRounds,this.numberOfChoices);
      this.currentSolution = this.generateSolution(this.possibleColours,this.numberOfChoices)
      this.hiddenSolution = this.generateHiddenSolution(this.numberOfChoices)
      this.displaySolution = this.hiddenSolution
      this.gameResult = 'lock'
      this.rounds[this.currentRound].status = "active";
    }

    pickRandomItem(items){
      const rand = Math.floor(Math.random() * items.length)
      return items[rand]

    }
    pickRandomIndex(items){
      const rand = Math.floor(Math.random() * items.length)
      return rand

    }

    generateSolution(colours,number){
      if( this.isChecked ){
        return this.generateSolutionWithDuplicate(colours,number)
      }

      return this.generateSolutionWithoutDuplicate(colours,number)
    }

    generateSolutionWithoutDuplicate(colours,number){
      const tempSol = this.generateListOfStuff(number,'');
      const tempColours = [...colours]

      for(let i = 0; i< tempSol.length; i++){
        
        const index = this.pickRandomIndex(tempColours)
        tempSol[i] = tempColours[index]
        tempColours.splice(index,1)
      }

      return [...tempSol]

    }

    generateSolutionWithDuplicate(colours,number){
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

    generateHiddenSolution(number){
      return this.generateListOfStuff(number,'Hidden');
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

    checkForBlanks(){
      return this.rounds[this.currentRound].currentChoice.includes('blank');
    }

    checkForPreviousGuess(){
      const currentChoice = this.rounds[this.currentRound].currentChoice;
      for(let i = 0; i < this.currentRound; i++ ){
        const prevChoice = this.rounds[i].currentChoice;
        if ( JSON.stringify(prevChoice) == JSON.stringify(currentChoice))
        {
          return true;
        }
      }

      return false;
    }
  
    onSubmitButtonClick(){
      const hasBlanks = this.checkForBlanks();
      if (hasBlanks){
        alert("Each guess must have 4 colours, duplicates are allowed")
        return
      }
      if( this.checkForPreviousGuess() ){
        alert("That guess was made already. Please try a different guess")
        return
      }
      this.generateGuessFeedback()
      this.rounds[this.currentRound].status = "completed";
      this.generateGameResult()
      if(this.isGameDone)
      {
        const mode = this.getCurrentMode();
        this.updateStats(mode,this.currentRound);
        this.savePlayerStats(this.stats);
        this.displaySolution = this.currentSolution;
        return
      }
      this.numberOfPipsSelected = 0;
      this.currentRound ++;
      this.rounds[this.currentRound].status = "active";
      
    }
    onNewGameButtonClick(){
      if (window.confirm("This will start a new game. do you want to continue?")) {
        this.initializeGame();
      }
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
        this.gameResult = 'unlock'
        this.isGameDone = true
        return
      }
      if( this.currentRound+1 == this.numberOfRounds){
        this.gameResult = 'lose'
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

  updateStats(mode,roundIndex){
    if(!this.stats[mode]){
      this.stats[mode] = new Stats;
    }

    this.stats[mode].played += 1
    if( roundIndex+1 == this.numberOfRounds){
      return
    }
    this.stats[mode].won += 1
    this.stats[mode].dist[roundIndex] += 1


  }
  savePlayerStats(stats) {
    localStorage.setItem('playerStats', JSON.stringify(stats));
  }
  loadPlayerStats() {
      const stats = localStorage.getItem('playerStats');
      console.log(stats);
      return stats ? JSON.parse(stats) : {} // Return null if no stats are found
  }

  getCurrentMode(){
    if( this.isChecked)
    {
      return "duplicates";
    }
    return "normal";
  }
  openModal(id){
    console.log(id)
    this.modalState[id] = "show";
    console.log(this.modalState)
  }
  closeModal(id){
    this.modalState[id] = "hide"
  }
}

class Round{
  status:string
  currentChoice:string[]
  guessFeedback:string[]
}

class Stats{

  played:number
  won: number
  dist: number[]

  constructor(){
    this.played = 0;
    this.won = 0,
    this.dist = [
        0,0,0,0,0,0,0,0,0,0
      ]
  }
}
