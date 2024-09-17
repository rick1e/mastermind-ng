import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-guess-feedback-display',
  templateUrl: './guess-feedback-display.component.html',
  styleUrls: ['./guess-feedback-display.component.css']
})
export class GuessFeedbackDisplayComponent implements OnInit {

  @Input() pips:string[]

  constructor() { }

  ngOnInit() {
  }

}
