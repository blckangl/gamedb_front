import {Component, Input, OnInit} from '@angular/core';
import {Game} from "../../models/game";

@Component({
  selector: 'app-game-element',
  templateUrl: './game-element.component.html',
  styleUrls: ['./game-element.component.scss']
})
export class GameElementComponent implements OnInit {
  @Input() game!: Game;

  constructor() {
  }

  ngOnInit(): void {
  }

}
