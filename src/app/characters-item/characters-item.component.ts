import { Component, Input } from '@angular/core';
import { Character } from '../_models/character';

@Component({
  selector: 'app-characters-item',
  templateUrl: './characters-item.component.html',
  styleUrls: ['./characters-item.component.styl']
})
export class CharactersItemComponent  {

  @Input() character: Character;

  constructor() { }

}
