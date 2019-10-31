import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule, MatButtonModule } from '@angular/material';
import { ReposComponent } from './user-detail/repos/repos.component';
import { StarredComponent } from './user-detail/starred/starred.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [
    ReposComponent,
    StarredComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    UsersRoutingModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
