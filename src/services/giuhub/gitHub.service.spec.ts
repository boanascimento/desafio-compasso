import { TestBed, async, inject } from '@angular/core/testing';
import { GithubService } from './github.service';
import { Repo } from 'src/models/starredRepo.module';
import { User } from 'src/models/user.module';

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
      expect(githubService.getReposUserList('unit.test')).toEqual([Repo]);

    }));

  it('Verificando o objeto definido no callback',
    inject([GithubService], (githubService) => {
      expect(githubService).toBeDefined();
      expect(githubService.getUsers('unit.test')).toEqual(User);

    }));

  it('Verificando o objeto definido no callback',
    inject([GithubService], (githubService) => {
      expect(githubService).toBeDefined();
      expect(githubService.getStarredUserList('unit.test')).toEqual([Repo]);
      console.log(githubService.getStarredUserList('boanascimento'));
    }));
});
