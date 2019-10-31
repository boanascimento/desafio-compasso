import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GithubService } from './github.service';
import { Repo } from 'src/models/starredRepo.module';

describe('GithubService test', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        GithubService
      ],
    }).compileComponents();
  }));

  it('Verificando o objeto definido no callback',
    inject([GithubService], (githubService) => {
      expect(githubService).toBeDefined();
      expect(githubService.getReposUserList('boanascimento')).toEqual([Repo]);

    }));

  it('Verificando o objeto definido no callback',
    inject([GithubService], (githubService) => {
      expect(githubService).toBeDefined();
      expect(githubService.getUsers('boanascimento')).toEqual([Repo]);

    }));
    
  it('Verificando o objeto definido no callback',
    inject([GithubService], (githubService) => {
      expect(githubService).toBeDefined();
      expect(githubService.getStarredUserList('boanascimento')).toEqual([Repo]);

    }));
});
