import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pip-display',
  templateUrl: './pip-display.component.html',
  styleUrls: ['./pip-display.component.css']
})
export class PipDisplayComponent implements OnInit {

  @Input() pips: string[]
  @Input() clickFunction!: (string) => void;
  @Output() pipSelectionEvent = new EventEmitter<string>();

  
  constructor() { }

  ngOnInit() {
  }

  onPipClick(colour) {
    this.pipSelectionEvent.emit(colour);
  }


}
