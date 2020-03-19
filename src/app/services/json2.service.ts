import { Injectable } from '@angular/core';

@Injectable()
export class Json2Service {

  constructor() {
    console.warn('on a construit le json2');
  }

  test() {
    console.warn('on a declenché la methode !!');
    return '1';
  }
}
