import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], field: string, filterValue: string): any {
    if (value && value.length > 0) {
      return value.filter(x => x[field] === filterValue);
    } else {
      return [];
    }
  }
  // transform(value: any[], filterValue: string): any {
  //   console.log('filterValue :', filterValue);
  // }

}
