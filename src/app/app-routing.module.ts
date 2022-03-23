import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { ResultPageComponent } from './pages/result-page/result-page.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { GameDashPageComponent } from './pages/dashboard/game-dash-page/game-dash-page.component';
import { GenreDashPageComponent } from './pages/dashboard/genre-dash-page/genre-dash-page.component';
import { CategoryDashPageComponent } from './pages/dashboard/category-dash-page/category-dash-page.component';
import { PlatformDashPageComponent } from './pages/dashboard/platform-dash-page/platform-dash-page.component';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'game/:id', component: GamePageComponent },
  { path: 'result', component: ResultPageComponent },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      { path: '', component: GameDashPageComponent },
      { path: 'genres', component: GenreDashPageComponent },
      { path: 'categories', component: CategoryDashPageComponent },
      { path: 'platforms', component: PlatformDashPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
