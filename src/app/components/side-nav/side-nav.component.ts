import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  constructor() {}

  show: boolean = true;

  ngOnInit(): void {}

  toggleMenu() {
    this.show = !this.show;
  }
}
