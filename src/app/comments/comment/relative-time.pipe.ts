import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relativeTime'
})
export class RelativeTimePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    const date = new Date(value);
    const currentDate = new Date();
    const timeDiff = Math.floor((currentDate.getTime() - date.getTime()) / 1000);

    if (timeDiff < 60) {
      return `${timeDiff} seconds ago.`;
    } else if (timeDiff < 60 * 60) {
      return `${Math.floor(timeDiff / 60)} minutes ago.`;
    } else if (timeDiff < 3600 * 24) {
      return `${date.toLocaleTimeString()}`;
    } else {
      return `${date.toDateString()}`;
    }
  }

}
