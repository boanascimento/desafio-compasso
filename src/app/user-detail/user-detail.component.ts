import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { User } from 'src/models/user.module';
import { Router } from '@angular/router';
import { GithubService } from 'src/services/giuhub/github.service';
import { Repo } from 'src/models/starredRepo.module';

enum ECheckContextView {
  starred = 'starred',
  repos = 'repos',
}

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent extends BaseComponent implements OnInit {
  public user: User;
  public setContextViewLike = ECheckContextView;
  public repos: Repo[];
  constructor(
    private gitHubeService: GithubService,
    private router: Router

  ) { super(); }

  ngOnInit() {
    this.user = this.getStoragedJson(this.lsUser);
  }

  public async getRepos(sufix: string) {
    try {
      const contextView = ECheckContextView;
      const result: Repo[] = await this.gitHubeService.getReposUserList(this.user.login, sufix).catch(error => {
        console.log('TCL: UserDetailComponent -> getRepos -> error', error);
      }) as Repo[];
      if (result) {
        this.repos = result;
        this.router.navigate([`/user-detail/${sufix}`]);
      }
    } catch (error) {
      console.log('getRepos() - error: ', error);
    }
  }

}
