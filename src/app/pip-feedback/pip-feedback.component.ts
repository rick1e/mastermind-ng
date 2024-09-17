import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pip-feedback',
  templateUrl: './pip-feedback.component.html',
  styleUrls: ['./pip-feedback.component.css']
})
export class PipFeedbackComponent implements OnInit {
  @Input() rounds: Round[]
  
  constructor() {
    
   }

  ngOnInit() {
  }

}


class Round{
  status:string
  currentChoice:string[]
  guessFeedback:string[]
}
