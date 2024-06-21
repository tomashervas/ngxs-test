import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { FormsModule } from '@angular/forms';
import { TodoState } from './state/todos.state';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { ProductState } from './state/products.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxsModule.forRoot([TodoState, ProductState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot({
      keys: '*',

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
