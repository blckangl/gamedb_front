import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-dash-page',
  templateUrl: './game-dash-page.component.html',
  styleUrls: ['./game-dash-page.component.scss'],
})
export class GameDashPageComponent implements OnInit {
  categories: Array<Game> = [];
  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    // this.gameService.getGa().subscribe((res) => {
    //   this.categories = res;
    // });
  }

  edit(id: number) {
    console.log('edit ' + id);
  }
  remove(id: number) {
    console.log('remove ' + id);
  }
}
