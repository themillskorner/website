import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unslugify'
})
export class UnslugifyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.toString().toLocaleLowerCase()
      .replace(/-/g, ' ');
  }

}
