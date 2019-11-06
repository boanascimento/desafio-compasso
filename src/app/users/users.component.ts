import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/services/giuhub/github.service';
import { User } from 'src/models/user.module';
import { BaseComponent } from '../base/base.component';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent extends BaseComponent implements OnInit {

  public user: User;
  public loading = false;
  public foundUser = true;
  public userName: any;
  public defaultImage = './assets/icons/img_atencao.svg';
  constructor(
    private gitHubeService: GithubService,
    private router: Router
  ) { super(); }

  ngOnInit() {
    this.userName = new FormControl('', {
      validators: [
        Validators.required
      ]
    });
  }

  public async getUser(user: string) {
    try {
      this.loading = true;
      const result: User = await this.gitHubeService.getUsers(user).catch(error => {
        this.loading = false;
        this.foundUser = false;
      }) as User;
      if (result) {
        this.loading = false;
        this.user = result;
        this.storageJSON(this.lsUser, this.user);
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
