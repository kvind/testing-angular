import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationChild1Component } from './navigation-child1.component';

describe('NavigationChild1Component', () => {
  let component: NavigationChild1Component;
  let fixture: ComponentFixture<NavigationChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
