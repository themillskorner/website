import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KontactService {
  private readonly domain: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.domain = 'https://cors-anywhere.herokuapp.com/https://api.mailgun.net/v3/themillskorner.org';
  }

  sendMail(from: string, to: string, subject: string, message: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authentication': `Basic ${btoa(`api:${environment.mailgun.api_key}`)}`,
    });

    const params = new HttpParams()
      .set('from', from)
      .set('to', to)
      .set('subject', subject)
      .set('text', message);

    return this.httpClient.post(`${this.domain}/messages`, params, {headers: headers});
  }
}
