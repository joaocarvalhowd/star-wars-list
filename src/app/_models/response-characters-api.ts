import { Character } from './character';

export interface ResponseCharactersAPI {
  count: number;
  next: string;
  previous: string;
  results: Character[];
}
