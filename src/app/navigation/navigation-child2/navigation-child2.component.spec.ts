import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationChild2Component } from './navigation-child2.component';

describe('NavigationChild2Component', () => {
  let component: NavigationChild2Component;
  let fixture: ComponentFixture<NavigationChild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationChild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
