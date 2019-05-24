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
    this.domain = 'https://api.mailgun.net/v3/themillskorner.org';
  }

  sendMail(to: string, subject: string, message: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authentication': btoa(`api:${environment.mailgun.api_key}`),
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*'
    });

    const params = new HttpParams()
      .set('from', 'theMillsKorner <kevin@themillskorner.org>')
      .set('to', to)
      .set('subject', subject)
      .set('text', message);

    return this.httpClient.post(`${this.domain}/messages`, params, {headers: headers});
  }
}
