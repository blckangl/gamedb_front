import {Component, OnInit} from '@angular/core';
import {GameService} from "../../services/game.service";
import {Category} from "../../models/category";
import {Genre} from "../../models/genre";
import {Platform} from "../../models/platform";

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  categories: Array<Category> = new Array<Category>();
  genres: Array<Genre> = new Array<Genre>();
  platforms: Array<Platform> = new Array<Platform>();

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {

    this.gameService.getCategories().subscribe(res => {
      this.categories = res;
    })
    this.gameService.getGenres().subscribe(res => {
      this.genres = res;
    })
    this.gameService.getPlatforms().subscribe(res => {
      this.platforms = res;
    })
  }

}
