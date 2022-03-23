import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-category-dash-page',
  templateUrl: './category-dash-page.component.html',
  styleUrls: ['./category-dash-page.component.scss'],
})
export class CategoryDashPageComponent implements OnInit {
  categories: Array<Category> = [];
  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getCategories().subscribe((res) => {
      this.categories = res;
    });
  }

  edit(id: number) {
    console.log('edit ' + id);
  }
  remove(id: number) {
    console.log('remove ' + id);
  }
}
