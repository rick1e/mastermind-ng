import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pip-selector',
  templateUrl: './pip-selector.component.html',
  styleUrls: ['./pip-selector.component.css']
})
export class PipSelectorComponent implements OnInit {

  @Input() possibleColours: string[];
  @Input() selectPip!: (string) => void;
  @Output() eventFromChild = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    
  }

  

  onClearButtonClick(){

  }

  onSubmitButtonClick(){

  }

}
