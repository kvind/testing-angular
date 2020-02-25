import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabComponent } from './tab/tab.component';

const routes: Routes = [
    { path: 'tab', component: TabComponent, data: {title: 'test'} },
  { path: 'page', loadChildren: () => import('./page/page.module').then(m => m.PageModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
