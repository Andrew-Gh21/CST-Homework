import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'headerColumnNames'
})
export class HeaderColumnNamesPipe implements PipeTransform {

  transform(value: string): string {
    let formattedString = '';
    for (let i = 0; i < value.length; i++) {
      const char = value.charAt(i);
      if (char.toUpperCase() === char) {
        formattedString += ' ';
      }
      formattedString += (i === 0 ? char.toUpperCase() : char);
    }
    return formattedString;
  }

}
