import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/services/giuhub/github.service';
import { User } from 'src/models/user.module';
import { BaseComponent } from '../base/base.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent extends BaseComponent implements OnInit {

  public user: User;
  public loading = false;
  public foundUser = true;
  public userName: string;
  constructor(
    private gitHubeService: GithubService,
    private router: Router
  ) { super(); }

  ngOnInit() {
  }

  public async getUser(user: string) {
    try {
      this.loading = true;
      const result: User = await this.gitHubeService.getUsers(user).catch(error => {
        this.loading = false;
        this.foundUser = false;

        console.log('TCL: UsersComponent -> getUser -> error', error);
      }) as User;
      if (result) {
        this.loading = false;

        this.user = result;
        this.storageJSON(this.lsUser, this.user);
        // this.user.em
      }
    } catch (error) {
      console.log('getUser() - error: ', error);
    }
  }

  public goToUserDetail() {
    try {
      this.router.navigate(['/user-detail']);
    } catch (error) {
      console.log('goToUserDetail() - error: ', error);
    }
  }

}
