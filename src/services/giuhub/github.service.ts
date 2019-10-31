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
  private textGetStarredUserList: string;
  private textTimeoutErrorMessage: string;
  private textNetworkErrorMessage: string;

  constructor(
    private translateService: TranslateService,
    private snackBar: MatSnackBar
  ) {
    super();
    this.translateService.get([
      'getReposUserListError',
      'getUsersError',
      'getStarredUserListError',
      'timeoutErrorMessage',
      'networErrorMessage'
    ]).subscribe(values => {
      this.textGetReposUserList = values.getReposUserListError;
      this.textGetUsersError = values.getUsersError;
      this.textGetStarredUserList = values.getStarredUserListError;
      this.textTimeoutErrorMessage = values.timeoutErrorMessage;
      this.textNetworkErrorMessage = values.networErrorMessage;
    }).unsubscribe();
  }

  /**
   * Usado para buscar a lista de repositórios do usuário.
   * @param user usuário selecionado.
   * @returns Promise<Repo[]>
   */
  public async getReposUserList(user: string): Promise<Repo[]> {
    try {
      return new Promise((resolv, reject) => {
        this.get(`/${user}/repos`).subscribe((response: any) => {
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

  /**
   * Usado para buscar a lista de repositórios estrelados pelo usuário.
   * @param user usuário selecionado.
   * @returns Promise<Repo[]>
   */
  public async getStarredUserList(user: number): Promise<Repo[]> {
    try {
      return new Promise((resolv, reject) => {
        this.delete(`/${user}/starred`).subscribe((response: any) => {
          const res: Repo[] = Repo.toArray(response);
          resolv(res);
        }, error => {
          this.commumErros(this.textGetStarredUserList, error);
          reject(error);
        });
      });

    } catch (error) {
      console.log('deleteReligion() - error: ', error);
    }
  }

  private commumErros(message: string, error: any) {
    try {

      if (navigator.onLine) {
        if ('status' in error && error.status === 404 && error.status !== 0) {
          this.snackBar.open(message, null, { duration: 3000 });
        } else if ('name' in error && error.name === 'TimeoutError') {
          this.snackBar.open(this.textTimeoutErrorMessage, null, { duration: 3000 });
        }
      } else {
        this.snackBar.open(this.textNetworkErrorMessage, null, { duration: 3000 });
      }
    } catch (error) {
      console.log('commumErros() - error: ', error);
    }
  }

}
