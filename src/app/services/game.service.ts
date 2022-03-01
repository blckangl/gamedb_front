import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Game} from "../models/game";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) {
  }


  getGames(): Observable<Array<Game>> {
    return this.http.get<Array<Game>>(`${environment.url}/games`)
  }
  getGameById(id:number): Observable<Game> {
    return this.http.get<Game>(`${environment.url}/games/${id}`)
  }
}
