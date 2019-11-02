import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonToggleModule,
  MatButtonModule,
  MatProgressBarModule,
  MatInputModule,
  MatCardModule,
  MatFormFieldModule,
  MatTableModule,
  MatPaginatorModule
} from '@angular/material';
import { UserDetailComponent } from './user-detail.component';

@NgModule({
  declarations: [
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [UserDetailComponent]
})
export class UserDetailComponentModule { }
