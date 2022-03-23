import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/genre';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-genre-dash-page',
  templateUrl: './genre-dash-page.component.html',
  styleUrls: ['./genre-dash-page.component.scss'],
})
export class GenreDashPageComponent implements OnInit {
  genres: Array<Genre> = [];
  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getGenres().subscribe((res) => {
      this.genres = res;
    });
  }

  edit(id: number) {
    console.log('edit ' + id);
  }
  remove(id: number) {
    console.log('remove ' + id);
  }
}
