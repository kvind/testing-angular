import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';

@Component({
  selector: 'app-navigation-child1',
  templateUrl: './navigation-child1.component.html',
  styleUrls: ['./navigation-child1.component.scss']
})
export class NavigationChild1Component implements OnInit {

  constructor(private router: Router, private store: Store) { }

  ngOnInit() {
  }

  nav(url?: string) {
    // this.router.navigate([!!url ? url : '/navigation/child-2']);
    this.store.dispatch(new Navigate(['/navigation/child-2']));
  }

}
