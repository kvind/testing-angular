import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabComponent } from './tab/tab.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'tab', component: TabComponent, data: { title: 'test' } },
      { path: 'page', loadChildren: './page/page.module#PageModule' },
    ]
  },
  { path: 'navigation', loadChildren: './navigation/navigation.module#NavigationModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
