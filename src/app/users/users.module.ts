import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonToggleModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatProgressBarModule
} from '@angular/material';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users.component';
import {  LazyLoadImageModule, scrollPreset } from 'ng-lazyload-image';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    UsersComponent,
  ],
  imports: [
    TranslateModule.forChild(),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    UsersRoutingModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatProgressBarModule,
    LazyLoadImageModule.forRoot({
      preset: scrollPreset,
    })
  ],
  providers: [],
  bootstrap: [UsersComponent]
})
export class UsersComponentModule { }
