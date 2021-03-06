import { IdCharacterPipe } from './id-character.pipe';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CharactersItemComponent } from '../characters-item/characters-item.component';

describe('IdCharacterPipe inside of CharactersItemComponent', () => {
  let fixture: ComponentFixture<CharactersItemComponent>;
  let debugElement: DebugElement;

  let component: CharactersItemComponent;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [IdCharacterPipe, CharactersItemComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersItemComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(fixture).toBeTruthy();
  });

  it('should display id 01', () => {
    component.character = {
      'name': 'Luke Skywalker',
      'height': '172',
      'mass': '77',
      'hair_color': 'blond',
      'skin_color': 'fair',
      'eye_color': 'blue',
      'birth_year': '19BBY',
      'gender': 'male',
      'homeworld': 'https://swapi.co/api/planets/1/',
      'films': [
        'https://swapi.co/api/films/2/',
        'https://swapi.co/api/films/6/',
        'https://swapi.co/api/films/3/',
        'https://swapi.co/api/films/1/',
        'https://swapi.co/api/films/7/'
      ],
      'species': [
        'https://swapi.co/api/species/1/'
      ],
      'vehicles': [
        'https://swapi.co/api/vehicles/14/',
        'https://swapi.co/api/vehicles/30/'
      ],
      'starships': [
        'https://swapi.co/api/starships/12/',
        'https://swapi.co/api/starships/22/'
      ],
      'created': '2014-12-09T13:50:51.644000Z',
      'edited': '2014-12-20T21:17:56.891000Z',
      'url': 'https://swapi.co/api/people/1/'
    };

    fixture.detectChanges();

    const div: HTMLDivElement = debugElement
      .query(By.css('.character__id'))
      .nativeElement;

    expect(div.textContent.trim()).toEqual('01');
  });

  it('should display nothing', () => {
    component.character = {
      'name': 'Luke Skywalker',
      'height': '172',
      'mass': '77',
      'hair_color': 'blond',
      'skin_color': 'fair',
      'eye_color': 'blue',
      'birth_year': '19BBY',
      'gender': 'male',
      'homeworld': 'https://swapi.co/api/planets/1/',
      'films': [
        'https://swapi.co/api/films/2/',
        'https://swapi.co/api/films/6/',
        'https://swapi.co/api/films/3/',
        'https://swapi.co/api/films/1/',
        'https://swapi.co/api/films/7/'
      ],
      'species': [
        'https://swapi.co/api/species/1/'
      ],
      'vehicles': [
        'https://swapi.co/api/vehicles/14/',
        'https://swapi.co/api/vehicles/30/'
      ],
      'starships': [
        'https://swapi.co/api/starships/12/',
        'https://swapi.co/api/starships/22/'
      ],
      'created': '2014-12-09T13:50:51.644000Z',
      'edited': '2014-12-20T21:17:56.891000Z',
      'url': null
    };

    fixture.detectChanges();

    const div: HTMLDivElement = debugElement
      .query(By.css('.character__id'))
      .nativeElement;

    expect(div.textContent.trim()).toEqual('');
  });
});
