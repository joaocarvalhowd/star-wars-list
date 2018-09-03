import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ResponseCharactersAPI } from '../_models/response-characters-api';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  initial_url = 'https://swapi.co/api/people/';

  constructor(private http: HttpClient) { }

  getCharacters(url?: string): Observable<ResponseCharactersAPI> {
    return this.http
      .get<ResponseCharactersAPI>(url || this.initial_url)
      .pipe(
        catchError(this.handleError('getCharacters', {} as ResponseCharactersAPI))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
