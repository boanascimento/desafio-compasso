import { TestBed, inject } from '@angular/core/testing';
import { GithubService } from './github.service';
import { Repo } from 'src/models/starredRepo.module';
import { User } from 'src/models/user.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/app/app.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material';

describe('GithubService test', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient],
          },
        }),
        MatSnackBarModule,
        HttpClientModule
      ],
      providers: [
        GithubService
      ],
    }).compileComponents();
  });

  it('Verificando se existe a classe GithubService', inject([GithubService], (githubService: GithubService) => {
    expect(githubService).toBeTruthy();
  }));

  it('Verificando se existe o metodo "getUsers()" e se o retorno está de acordo com o tipo esperado',
    inject([GithubService], (githubService: GithubService) => {
      expect(githubService.getUsers).toBeTruthy();
      expect<Promise<User>>(githubService.getUsers('test')).toBeTruthy();
    }));

  it('Verificando se existe o metodo "getReposUserList()" e se o retorno está de acordo com o tipo esperado',
    inject([GithubService], (githubService: GithubService) => {
      expect(githubService.getReposUserList).toBeTruthy();
      expect<Promise<Repo[]>>(githubService.getReposUserList('test', 'test')).toBeTruthy();
    }));
});
