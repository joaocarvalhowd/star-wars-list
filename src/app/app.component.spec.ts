import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { LoadingComponent } from './loading/loading.component';
import { CharactersItemComponent } from './characters-item/characters-item.component';
import { PaginationComponent } from './pagination/pagination.component';
import { IdCharacterPipe } from './_pipes/id-character.pipe';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducer } from './_reducers/loading.reducer';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        IdCharacterPipe,
        AppComponent,
        ContainerComponent,
        HeaderComponent,
        CharactersListComponent,
        LoadingComponent,
        CharactersItemComponent,
        PaginationComponent
      ],
      imports: [
        HttpClientModule,
        StoreModule.forRoot({
          loading: reducer
        })
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
