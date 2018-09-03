import { Pipe, PipeTransform } from '@angular/core';
import { last } from 'rxjs/operators';

@Pipe({
  name: 'idCharacter'
})
export class IdCharacterPipe implements PipeTransform {

  transform(value: string): string {
    if (!value || value.length === 0) {
      return '';
    }

    const splitValue = value.split('/');
    const id = +splitValue[splitValue.length - 2];

    return id < 10 ? `0${id}` : id.toString();
  }
}
