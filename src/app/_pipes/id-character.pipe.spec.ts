import { IdCharacterPipe } from './id-character.pipe';

describe('IdCharacterPipe', () => {
  let pipe: IdCharacterPipe;

  beforeEach(() => {
    pipe = new IdCharacterPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('Bad Input', () => {
    it('should return empty', () => {
      const actual = pipe.transform('');

      expect(actual).toEqual('');
    });
  });

  describe('Correct Input', () => {
    it('should return 01', () => {
      const valueTransformed = pipe.transform('https://swapi.co/api/people/1/');

      expect(valueTransformed).toEqual('01');
    });

    it('should return 02', () => {
      const valueTransformed = pipe.transform('https://swapi.co/api/people/2/');

      expect(valueTransformed).toEqual('02');
    });

    it('should return 25', () => {
      const valueTransformed = pipe.transform('https://swapi.co/api/people/25/');

      expect(valueTransformed).toEqual('25');
    });
  });
});
