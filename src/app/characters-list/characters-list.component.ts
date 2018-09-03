import { Component, OnInit } from '@angular/core';
import { Character } from '../_models/character';
import { select, Store } from '@ngrx/store';
import * as LoadingActions from '../_actions/loading.actions';
import { AppState } from '../app.state';
import { CharactersService } from '../_services/characters.service';
import {Loading} from '../_models/loading';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.styl']
})
export class CharactersListComponent implements OnInit {

  characters: Character[];
  nextUrl: string;
  prevUrl: string;
  isActive: boolean;

  constructor(
    private charactersService: CharactersService,
    private store: Store<AppState>
  ) {
    store
      .pipe(
        select('loading')
      )
      .subscribe((data: Loading) => this.isActive = data.isActive);
  }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(url?): void {
    this.characters = [];

    this.store.dispatch(new LoadingActions.ToggleLoading());

    this.charactersService.getCharacters(url)
      .subscribe(response => {
        this.store.dispatch(new LoadingActions.ToggleLoading());

        this.characters = response['results'] || [];
        this.nextUrl = response['next'] || null;
        this.prevUrl = response['previous'] || null;
      });
  }

}
