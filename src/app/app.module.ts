import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseComponent } from './base/base.component';
import { MatSnackBarModule, MatToolbarModule } from '@angular/material';
import { GithubService } from 'src/services/giuhub/github.service';
import { BaseService } from 'src/services/base/base.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { UsersComponentModule } from './users/users.module';
import { UserDetailComponentModule } from './user-detail/user-detail.module';
import { LazyLoadImageModule, scrollPreset } from 'ng-lazyload-image';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
  ],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    HttpClientModule,
    UsersComponentModule,
    UserDetailComponentModule,
    MatToolbarModule,
    LazyLoadImageModule.forRoot({
      preset: scrollPreset,
    })
  ],
  providers: [
    BaseService,
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
