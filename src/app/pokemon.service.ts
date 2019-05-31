import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import pokemonData from './pokemonData.json';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonApi = 'https://pokeapi.co/api/v2';  // Web APIのURL

  constructor(private http: HttpClient) { }

  getPokemon(id: number): Observable<Pokemon> {
    const url = `${this.pokemonApi}/pokemon/${id}/`;
    return this.http.get<Pokemon>(url).pipe(
      tap(_ => console.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
    );
  }

  englishToJapanese(enName: string) {
    const find = pokemonData.find(pokemon => {
      return pokemon.en.toLowerCase() === enName;
    });
    if (find) { return find.ja; }
    return enName;
  }

  /**
   * 失敗したHttp操作を処理します。
   * アプリを持続させます。
   * @param operation - 失敗した操作の名前
   * @param result - observableな結果として返す任意の値
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: リモート上のロギング基盤にエラーを送信する
      console.error(error); // かわりにconsoleに出力

      // 空の結果を返して、アプリを持続可能にする
      return of(result as T);
    };
  }
}
