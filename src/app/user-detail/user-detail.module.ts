import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonToggleModule,
  MatButtonModule,
  MatProgressBarModule,
  MatInputModule,
  MatCardModule,
  MatFormFieldModule
} from '@angular/material';
import { ReposComponent } from './repos/repos.component';
import { StarredComponent } from './starred/starred.component';
import { UserDetailRoutingModule } from './user-detail-routing.module';
import { UserDetailComponent } from './user-detail.component';

@NgModule({
  declarations: [
    ReposComponent,
    StarredComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    UserDetailRoutingModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [UserDetailComponent]
})
export class UserDetailComponentModule { }
