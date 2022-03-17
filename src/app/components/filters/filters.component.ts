import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  categories: Array<Category> = new Array<Category>();
  genres: Array<Category> = new Array<Category>();
  platforms: Array<Category> = new Array<Category>();
  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getCategories().subscribe((res) => {
      this.categories = res;
    });
    this.gameService.getPlatforms().subscribe((res) => {
      this.platforms = res;
    });
    this.gameService.getGenres().subscribe((res) => {
      this.genres = res;
    });
  }
}
