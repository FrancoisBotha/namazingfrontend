import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

import { Observable }     from 'rxjs/Observable';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient
              ) {
    this.http = http;
  }

  // private createAuthorizationHeader(headers: Headers): void {
  //   headers.append('Authorization', 'Bearer ');
  // }

  public get(url: string): Observable<any> {
    return this.http.get(url);
  }

  public post(url: string, data: any): Observable<any> {
    return this.http.post(url, data);
  }

  public put(url: string, data: any): Observable<any> {
    let headers: Headers = new Headers();
   // this.createAuthorizationHeader(headers);
    // return this.http.put(url, data, {
    //   headers: headers,
    // });
    return this.http.put(url, data);
  }
}