import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailPipe'
})
export class EmailPipePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, value);
  }

}
