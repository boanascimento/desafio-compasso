import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule, MatButtonModule } from '@angular/material';
import { ReposComponent } from './repos/repos.component';
import { StarredComponent } from './starred/starred.component';
import { UserDetailRoutingModule } from './user-detail-routing.module';

@NgModule({
  declarations: [
    ReposComponent,
    StarredComponent,
    
  ],
  imports: [
    BrowserModule,
    UserDetailRoutingModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: []
})
export class UserDetailModule { }
