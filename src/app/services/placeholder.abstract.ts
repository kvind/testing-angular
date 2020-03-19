import { Injectable, InjectionToken } from '@angular/core';

export abstract class Logger {
  logs: string[];
  abstract somme(a: number, b: number): number;
  abstract multiply(a: number, b: number): number;
}

export const LOGGER_TOKEN = new InjectionToken<Logger>('LOGGER_TOKEN');

@Injectable()
export class SpecificLogger implements Logger {

  logs = ['test'];

  constructor() {
    console.warn('construct the logger');
  }

  somme(a, b) {
    return a + b;
  }

  multiply(a, b) {
    return a * b;
  }
}
