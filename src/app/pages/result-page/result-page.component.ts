import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { generateQuery } from 'src/app/util';
import { Game } from '../../models/game';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss'],
})
export class ResultPageComponent implements OnInit {
  filtredGameList: Array<Game> = new Array<Game>();

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((res) => {
      const { term, categoryId, platformId, genreId } = res;

      const query = generateQuery(term, categoryId, platformId, genreId);

      console.log(query);

      this.gameService.getFiltredResult(query).subscribe((list) => {
        console.log('list ', list);
        this.filtredGameList = list;
      });
      console.log('param', categoryId);
    });
  }
}
