import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabComponent } from './tab/tab.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule, MatCardModule } from '@angular/material';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsStoragePluginModule, StorageOption } from '@ngxs/storage-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { JsonState } from './store/app.state';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { PageComponent } from './page/page.component';
import { AppRoutingModule } from './app-routing.module';
import { FunctionPipe } from './function.pipe';
import { ChildTestComponent } from './child-test/child-test.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    PageComponent,
    FunctionPipe,
    ChildTestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    AppRoutingModule,
    NgxsModule.forRoot([JsonState], { developmentMode: !environment.production }),
    NgxsFormPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot({
      storage: StorageOption.SessionStorage
    }),
    NgxsRouterPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
