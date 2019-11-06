import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { timeout } from 'rxjs/operators';

@Injectable()
export class BaseService {
  protected  BASE_URL: string = environment.BASE_URL;
  private timeOut: number;

  constructor(
    protected http?: HttpClient,
  ) { this.timeOut = 30000; }

  protected get(endpoint: string, params?: any, reqOpts?: any) {
    try {
      if (!reqOpts) {
        reqOpts = {
          params: new HttpParams()
        };
      }
      if (params) {
        reqOpts.params = new HttpParams();
        // tslint:disable-next-line:forin
        for (const k in params) {
          reqOpts.params = reqOpts.params.set(k, params[k]);
        }
      }

      const req = this.http.get(this.BASE_URL + endpoint, reqOpts).pipe(timeout(this.timeOut));

      return req;
    } catch (error) {
      console.log('get() - error: ', error);
    }
  }
  protected post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.BASE_URL + endpoint, body, reqOpts).pipe(timeout(this.timeOut));
  }

  protected put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.BASE_URL + endpoint, body, reqOpts).pipe(timeout(this.timeOut));
  }

  protected delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.BASE_URL + endpoint, reqOpts).pipe(timeout(this.timeOut));
  }

  protected patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.BASE_URL + endpoint, body, reqOpts).pipe(timeout(this.timeOut));
  }
}
