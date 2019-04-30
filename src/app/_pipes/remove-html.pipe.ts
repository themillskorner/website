import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'removeHtml'
})
export class RemoveHtmlPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace('Browser not supported', '').replace(/(<([^>]+)>)/ig, '').substring(0, 150) + '...';
  }

}
