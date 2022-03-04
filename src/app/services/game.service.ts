import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Game} from "../models/game";
import {environment} from "../../environments/environment";
import {Category} from "../models/category";
import {Genre} from "../models/genre";
import {Platform} from "../models/platform";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) {
  }


  getRecentlyAddedGames(): Observable<Array<Game>> {
    return this.http.get<Array<Game>>(`${environment.url}/games/added`)
  }

  getRecentlyReleasedGames(): Observable<Array<Game>> {
    return this.http.get<Array<Game>>(`${environment.url}/games/released`)
  }

  getGameById(id: number): Observable<Game> {
    return this.http.get<Game>(`${environment.url}/games/${id}`)
  }

  getCategories(): Observable<Array<Category>> {
    return this.http.get<Array<Category>>(`${environment.url}/categories`)
  }

  getGenres(): Observable<Array<Genre>> {
    return this.http.get<Array<Genre>>(`${environment.url}/genres`)
  }

  getPlatforms(): Observable<Array<Platform>> {
    return this.http.get<Array<Platform>>(`${environment.url}/platforms`)
  }
}
