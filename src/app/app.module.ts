import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { changeUser } from './@logi-store/actions/user.action';
import { userReducer } from './@logi-store/reducers/user.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,UserListComponent,UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({user:userReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
