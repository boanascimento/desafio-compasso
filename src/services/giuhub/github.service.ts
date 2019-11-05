import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'src/models/user.module';
import { MatSnackBar } from '@angular/material';
import { Repo } from 'src/models/starredRepo.module';

@Injectable()
export class GithubService extends BaseService {

  private textGetReposUserList: string;
  private textGetUsersError: string;
  private textTimeoutErrorMessage: string;
  private textNetworkErrorMessage: string;

  constructor(
    private translateService?: TranslateService,
    private snackBar?: MatSnackBar,
    protected http?: HttpClient
  ) {
    super();
    this.translateService.get([
      'getReposUserListError',
      'getUsersError',
      'timeoutErrorMessage',
      'networErrorMessage'
    ]).subscribe(values => {
      this.textGetReposUserList = values.getReposUserListError;
      this.textGetUsersError = values.getUsersError;
      this.textTimeoutErrorMessage = values.timeoutErrorMessage;
      this.textNetworkErrorMessage = values.networErrorMessage;
    });
  }

  /**
   * Usado para buscar a lista de repositórios do usuário.
   * @param user Login do usuário selecionado.
   * @param sufix Sufíxo do endpoit
   * @returns Promise<Repo[]>
   */
  public async getReposUserList(user: string, sufix: string): Promise<Repo[]> {
    try {
      return new Promise((resolv, reject) => {
        this.get(`/${user}/${sufix}`).subscribe((response: any) => {
          const res: Repo[] = Repo.toArray(response);
          resolv(res);
        }, error => {
          this.commumErros(this.textGetReposUserList, error);
          reject(error);
        });
      });

    } catch (error) {
      console.log('getReligions() - error: ', error);
    }
  }

  /**
   * Usado para alterar uma Religião.
   * @param user Usuário selecionado.
   * @returns Promise<User>
   */
  public async getUsers(user: string): Promise<User> {
    try {
      return new Promise((resolv, reject) => {
        this.get(`/${user}`).subscribe((response: any) => {
          const res: User = response;
          resolv(res);
        }, error => {
          this.commumErros(this.textGetUsersError, error);
          reject(error);
        });
      });
    } catch (error) {
      console.log('getUsers() - error: ', error);
    }
  }

  private commumErros(message: string, error: any) {
    try {
      const timeToLeave = 5000;
      if (navigator.onLine) {
        if ('status' in error && error.status === 404 && error.status !== 0) {
          this.snackBar.open(message, null, { duration: timeToLeave });
        } else if ('name' in error && error.name === 'TimeoutError') {
          this.snackBar.open(this.textTimeoutErrorMessage, null, { duration: timeToLeave, panelClass: '' });
        }
      } else {
        this.snackBar.open(this.textNetworkErrorMessage, null, { duration: timeToLeave });
      }
    } catch (error) {
      console.log('commumErros() - error: ', error);
    }
  }

}
