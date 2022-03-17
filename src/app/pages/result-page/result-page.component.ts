import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  selectedCategory: number = -1;
  selectedPlatform: number = -1;
  selectedGenre: number = -1;
  selectedTerm: string = '';

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((res) => {
      const { term, categoryId, platformId, genreId } = res;

      this.selectedCategory = categoryId ? categoryId : -1;
      this.selectedPlatform = platformId ? platformId : -1;
      this.selectedGenre = genreId ? genreId : -1;
      this.selectedTerm = term ? term : '';

      const query = generateQuery(term, categoryId, platformId, genreId);

      console.log(query);

      this.gameService.getFiltredResult(query).subscribe((list) => {
        console.log('list ', list);
        this.filtredGameList = list;
      });
      console.log('param', categoryId);
    });
  }

  filterChanged(event: any) {
    console.log('query is ', event);
    this.router.navigate(['result'], {
      queryParams: event,
    });
  }
}
