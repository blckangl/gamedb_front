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
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { GameDashPageComponent } from './pages/dashboard/game-dash-page/game-dash-page.component';
import { GenreDashPageComponent } from './pages/dashboard/genre-dash-page/genre-dash-page.component';
import { CategoryDashPageComponent } from './pages/dashboard/category-dash-page/category-dash-page.component';
import { PlatformDashPageComponent } from './pages/dashboard/platform-dash-page/platform-dash-page.component';

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
    DashboardLayoutComponent,
    SideNavComponent,
    GameDashPageComponent,
    GenreDashPageComponent,
    CategoryDashPageComponent,
    PlatformDashPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
