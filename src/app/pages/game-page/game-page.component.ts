import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GameService} from "../../services/game.service";
import {Game} from "../../models/game";

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  game!: Game;

  constructor(private route: ActivatedRoute, private gameService: GameService) {


  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const {id} = params;

      this.gameService.getGameById(id).subscribe(res => {
        this.game = res;
      })

    })
  }

}
