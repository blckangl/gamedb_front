import { Component, OnInit } from '@angular/core';
import { Platform } from 'src/app/models/platform';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-platform-dash-page',
  templateUrl: './platform-dash-page.component.html',
  styleUrls: ['./platform-dash-page.component.scss'],
})
export class PlatformDashPageComponent implements OnInit {
  platforms: Array<Platform> = [];
  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getPlatforms().subscribe((res) => {
      this.platforms = res;
    });
  }

  edit(id: number) {
    console.log('edit ' + id);
  }
  remove(id: number) {
    console.log('remove ' + id);
  }
}
