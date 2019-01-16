import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: any, locale?: any, format?: any): any {
    let dateItem = new Date(value);
    let result;

    switch (format) {
      case 'full':
      result = dateItem
          .toLocaleString(locale, {
            weekday: 'long',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            day: 'numeric'
          });
      break;
      case 'short':
        result = dateItem
            .toLocaleString(locale, {
              weekday: 'short',
              month: 'short',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              day: 'numeric'
            });
        break;
      default:
        result = dateItem.toLocaleString(locale);
        break;
    }
    return result;
  }

}
