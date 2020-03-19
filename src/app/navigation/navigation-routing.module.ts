import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation.component';
import { NavigationChild2Component } from './navigation-child2/navigation-child2.component';
import { NavigationChild1Component } from './navigation-child1/navigation-child1.component';
import { NavResolver2Service } from './nav-resolver2.service';

const routes: Routes = [
  {
    path: '', component: NavigationComponent, children: [
      { path: '', component: NavigationChild1Component },
      { path: 'child-2', component: NavigationChild2Component, resolve: { data: NavResolver2Service } },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule {
}
