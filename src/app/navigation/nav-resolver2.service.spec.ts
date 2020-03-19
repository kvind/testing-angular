import { TestBed } from '@angular/core/testing';

import { NavResolver2Service } from './nav-resolver2.service';

describe('NavResolver2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavResolver2Service = TestBed.get(NavResolver2Service);
    expect(service).toBeTruthy();
  });
});
