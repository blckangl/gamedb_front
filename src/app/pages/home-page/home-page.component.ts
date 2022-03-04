import {Component, OnInit} from '@angular/core';
import {Game} from "../../models/game";
import {GameService} from "../../services/game.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  gameListRecentlyAdded: Array<Game> = new Array<Game>();
  gameListRecentlyReleased: Array<Game> = new Array<Game>();

  constructor(private gameService: GameService) {

  }

  ngOnInit(): void {
    this.gameService.getRecentlyAddedGames().subscribe(res => {
      console.log("http result",res);
      this.gameListRecentlyAdded = res;
      console.log("gameListRecentlyAdded",this.gameListRecentlyAdded);

    })
    this.gameService.getRecentlyReleasedGames().subscribe(res => {
      console.log(res);
      this.gameListRecentlyReleased = res;

    })
  }

}
