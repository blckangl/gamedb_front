import {Component, OnInit} from '@angular/core';
import {Game} from "../../models/game";
import {GameService} from "../../services/game.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  gameList: Array<Game> = new Array<Game>();

  constructor(private gameService: GameService) {

  }

  ngOnInit(): void {
    this.gameService.getGames().subscribe(res => {
      console.log(res);
      this.gameList = res;

    })
  }

}
