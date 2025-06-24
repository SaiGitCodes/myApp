import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'append',
  pure: true
})
export class AppendPipe implements PipeTransform {

  transform(value: string, args: string): string {
    console.log('AppendPipe');
    return value + args;
  }

}
