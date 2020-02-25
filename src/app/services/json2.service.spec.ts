import { TestBed } from '@angular/core/testing';

import { Json2Service } from './json2.service';

describe('Json2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Json2Service = TestBed.get(Json2Service);
    expect(service).toBeTruthy();
  });
});
