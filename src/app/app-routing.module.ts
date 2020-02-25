import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabComponent } from './tab/tab.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
    { path: 'tab', component: TabComponent, data: {title: 'test'} },
  { path: 'page', component: PageComponent, data: { title: 'badaboum' } },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
