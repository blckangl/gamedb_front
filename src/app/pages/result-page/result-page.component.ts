import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Game} from "../../models/game";
import {GameService} from "../../services/game.service";

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss']
})
export class ResultPageComponent implements OnInit {

  filtredGameList: Array<Game> = new Array<Game>()

  constructor(private route: ActivatedRoute, private gameService: GameService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(res => {
      const {categoryId} = res;

      this.gameService.getFiltredResult(categoryId).subscribe(list => {
        console.log("list ", list)
        this.filtredGameList = list;
      })
      console.log("param", categoryId)
    })


  }

}
