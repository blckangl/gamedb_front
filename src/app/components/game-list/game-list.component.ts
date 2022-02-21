import {Component, Input, OnInit} from '@angular/core';
import {Game} from "../../models/game";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  constructor() {
  }


  @Input() gameList!: Array<Game>;

  ngOnInit(): void {
  }

}
