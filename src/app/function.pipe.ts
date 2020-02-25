import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'function'
})
export class FunctionPipe implements PipeTransform {

  transform(value: any, handler: (value: any) => any): any {
    return handler(value);
  }

}
