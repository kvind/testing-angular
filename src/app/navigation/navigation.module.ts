import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationComponent } from './navigation.component';
import { NavigationChild1Component } from './navigation-child1/navigation-child1.component';
import { NavigationChild2Component } from './navigation-child2/navigation-child2.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [NavigationComponent, NavigationChild1Component, NavigationChild2Component],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    MatButtonModule
  ]
})
export class NavigationModule { }
