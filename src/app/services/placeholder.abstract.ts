import { InjectionToken } from '@angular/core';

export abstract class Logger {
  logs: string[];
  somme: (a: number, b: number) => number;
  multiply: (a: number, b: number) => number;
}

export const LOGGER_TOKEN = new InjectionToken<Logger>('LOGGER_TOKEN');


export class SpecificLogger extends Logger {

  constructor() {
    super();
    console.warn('construct the logger');
  }

  somme = (a, b) => {
    return a + b;
  };

  multiply = (a, b) => {
    return a * b;
  };
}
