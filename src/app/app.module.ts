import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameElementComponent } from './components/game-element/game-element.component';
import { HttpClientModule } from '@angular/common/http';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { ResultPageComponent } from './pages/result-page/result-page.component';
import { FiltersComponent } from './components/filters/filters.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchPageComponent,
    TopNavComponent,
    GameListComponent,
    GameElementComponent,
    GamePageComponent,
    ResultPageComponent,
    FiltersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
