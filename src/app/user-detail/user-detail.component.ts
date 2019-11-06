import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { User } from 'src/models/user.module';
import { GithubService } from 'src/services/giuhub/github.service';
import { Repo } from 'src/models/starredRepo.module';
import { FormControl } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

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
  public user: User;
  public setContextViewLike = ECheckContextView;
  public repos = [];
  public tableName: string;
  public dataSource: any;
  public filter: FormControl;
  public columnsName: string[] = ['name', 'owner'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, null) sort: MatSort;
  constructor(
    private gitHubeService: GithubService,
    private translateService: TranslateService,
    private deviceService: DeviceDetectorService,
  ) { super(); }

  ngOnInit() {
    this.user = this.getStoragedJson(this.lsUser);
    this.filter = new FormControl('', {
    });
  }
  ngOnDestroy() {
    this.removeStoragedItem(this.lsUser);
  }

  public async filterData(value: any) {
    try {
      value = value.trim();
      value = value.toLowerCase();
      this.dataSource.filter = value;
    } catch (error) {
      console.log('filter() - error: ', error);
    }
  }

  public async getRepos(sufix: string, el: HTMLElement) {
    try {
      let textUserRepos: string;
      let textStarredRepos: string;
      this.translateService.get([
        'userRepos',
        'starredReposTitle'
      ]).subscribe(values => {
        textUserRepos = values.userRepos;
        textStarredRepos = values.starredReposTitle;
      }).unsubscribe();
      const chackContext = ECheckContextView;
      this.tableName = sufix === chackContext.repos ? textUserRepos : textStarredRepos;
      const result: Repo[] = await this.gitHubeService.getReposUserList(this.user.login, sufix).catch(error => {
      }) as Repo[];
      if (result) {
        this.repos = result;
        this.dataSource = new MatTableDataSource(this.repos);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        const isMobile = this.deviceService.isMobile();
        if (isMobile) {
          setTimeout(() => {
            el.scrollIntoView();
          }, 200);
        }
      }
    } catch (error) {
      console.log('getRepos() - error: ', error);
    }
  }

}
