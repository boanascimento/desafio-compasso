import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { User } from 'src/models/user.module';
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
export class UserDetailComponent extends BaseComponent implements OnInit, OnDestroy {
  columnsName: string[] = ['name', 'owner'];
  public user: User;
  public setContextViewLike = ECheckContextView;
  public repos = [];
  public tableName: string;
  constructor(
    private gitHubeService: GithubService,

  ) { super(); }

  ngOnInit() {
    this.user = this.getStoragedJson(this.lsUser);
  }
  ngOnDestroy() {
    this.removeStoragedItem(this.lsUser);
  }

  public async getRepos(sufix: string) {
    try {
      const chackContext = ECheckContextView;
      this.tableName = sufix === chackContext.repos ? 'Repositórios do usuário' : 'Repositótios estralados pelo usuário';
      const result: Repo[] = await this.gitHubeService.getReposUserList(this.user.login, sufix).catch(error => {
        console.log('TCL: UserDetailComponent -> getRepos -> error', error);
      }) as Repo[];
      if (result) {
        this.repos = result;
      }
    } catch (error) {
      console.log('getRepos() - error: ', error);
    }
  }

}
