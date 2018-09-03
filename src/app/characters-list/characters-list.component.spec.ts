import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { CharactersListComponent } from './characters-list.component';
import { CharactersService } from '../_services/characters.service';
import CharactersMock from '../_services/characters.mock';
import { of } from 'rxjs';
import { LoadingComponent } from '../loading/loading.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { DebugElement } from '@angular/core';
import { CharactersItemComponent } from '../characters-item/characters-item.component';
import { IdCharacterPipe } from '../_pipes/id-character.pipe';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../_reducers/loading.reducer';

describe('CharactersListComponent', () => {
  let component: CharactersListComponent;
  let fixture: ComponentFixture<CharactersListComponent>;
  let debugElement: DebugElement;
  let el: HTMLElement;
  let charactersService: CharactersService;

  const mockRepositoriesService = {
    provide: CharactersService,
    useValue: {
      getCharacters: () => of(CharactersMock)
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ mockRepositoriesService ],
      declarations: [
        CharactersListComponent,
        CharactersItemComponent,
        LoadingComponent,
        PaginationComponent,
        IdCharacterPipe
      ],
      imports: [
        HttpClientModule,
        StoreModule.forRoot({
          loading: reducer
        })
      ]
    })
    .compileComponents();

    charactersService = TestBed.get(CharactersService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersListComponent);
    debugElement = fixture.debugElement;
    el = fixture.debugElement.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have ten characters-item', () => {
    const charactersItems = el.querySelectorAll('.character');
    expect(charactersItems.length).toBe(10);
  });
});
