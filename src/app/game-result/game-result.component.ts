import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.css']
})
export class GameResultComponent implements OnInit {

  @Input() resultText:string;
  @Input() answer: string[];

  constructor() { }

  ngOnInit() {
    
  }

}
