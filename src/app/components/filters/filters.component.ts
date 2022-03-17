import {
  AfterContentChecked,
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { Category } from 'src/app/models/category';
import { GameService } from 'src/app/services/game.service';

import { generateUrlQuery } from '../../util';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit, AfterContentChecked {
  @Input() platform!: number;
  @Input() genre!: number;
  @Input() category!: number;
  @Input() term!: string;

  @Output() onFilterChanged = new EventEmitter<any>();

  categories: Array<Category> = new Array<Category>();
  genres: Array<Category> = new Array<Category>();
  platforms: Array<Category> = new Array<Category>();

  selectedCategory: number = -1;
  selectedGenre: number = -1;
  selectedPlatform: number = -1;

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

  ngAfterContentChecked(): void {
    this.selectedCategory = this.category;
    this.selectedGenre = this.genre;
    this.selectedPlatform = this.platform;
  }
  setSelectedPlatform(event: number) {
    this.selectedPlatform = event;
    this.generateFilter();
  }
  setSelectedCategory(event: number) {
    this.selectedCategory = event;
    this.generateFilter();
  }
  setSelectedGenre(event: number) {
    this.selectedGenre = event;
    this.generateFilter();
  }

  generateFilter() {
    console.log('term is ', this.term);
    let query = generateUrlQuery(
      this.term,
      this.selectedCategory,
      this.selectedPlatform,
      this.selectedGenre
    );

    console.log('query is ', query);
    this.onFilterChanged.emit(query);
  }
}
