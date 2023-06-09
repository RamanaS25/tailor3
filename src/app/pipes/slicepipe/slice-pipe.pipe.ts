import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slicePipe',

})
export class SlicePipePipe implements PipeTransform {

  transform(value: any[], start: number, end: number): any[] {
    return value.slice(start, end);
  }

}
