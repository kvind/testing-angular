import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabComponent } from './tab/tab.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsStoragePluginModule, StorageOption } from '@ngxs/storage-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { JsonState } from './store/app.state';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FunctionPipe } from './function.pipe';
import { ChildTestComponent } from './child-test/child-test.component';
import { LOGGER_TOKEN, SpecificLogger } from './services/placeholder.abstract';
import { Json2Service } from './services/json2.service';
import { GenericDialogComponent } from './generic-dialog/generic-dialog.component';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    FunctionPipe,
    ChildTestComponent,
    GenericDialogComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
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
  providers: [{provide: LOGGER_TOKEN, useClass: SpecificLogger}, Json2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
