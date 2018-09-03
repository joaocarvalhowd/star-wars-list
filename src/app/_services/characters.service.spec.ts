import { TestBed, inject, getTestBed } from '@angular/core/testing';

import { CharactersService } from './characters.service';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import CharactersMock from './characters.mock';

describe('CharactersService', () => {
  let injector: TestBed;
  let service: CharactersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ CharactersService ]
    });

    injector = getTestBed();
    service = injector.get(CharactersService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return an Observable<ResponseCharactersAPI>', () => {
    service.getCharacters()
      .subscribe(data => {
        expect(data.count).toBe(87);
        expect(data.next).toBe('https://swapi.co/api/people/?page=2');
        expect(data.previous).toBeNull();
        expect(data.results.length).toBe(10);
      });

    const req = httpMock.expectOne('https://swapi.co/api/people/');
    expect(req.request.method).toEqual('GET');

    req.flush(CharactersMock);
  });
});
