import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Game} from "../models/game";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) {
  }


  getGames(): Observable<Array<Game>> {
    return this.http.get<Array<Game>>('http://localhost:8080/games')
  }
  getGameById(id:number): Observable<Game> {
    return this.http.get<Game>(`http://localhost:8080/games/${id}`)
  }
}
