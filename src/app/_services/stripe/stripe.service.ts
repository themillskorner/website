import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StripeService {
  api: string;
  headers: HttpHeaders;

  constructor(private httpClient: HttpClient) {
    this.api = 'https://api.stripe.com/v1';

    this.headers = new HttpHeaders({
      'Authorization': `Bearer ${environment.stripe.secretKey}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    });
  }

  createCharge(charge: { amount: number; customer: string; source: string; description: string }) {
    const params = new HttpParams()
      .set('amount', charge.amount.toString())
      .set('currency', 'usd')
      .set('customer', charge.customer)
      .set('source', charge.source)
      .set('description', charge.description);

    return this.httpClient.post(`${this.api}/charges`, params.toString(), {headers: this.headers});
  }

  createCustomer(customer: { name: string; email: string; source: string; description: string; phone: string }): Observable<any> {
    const params = new HttpParams()
      .set('name', customer.name)
      .set('email', customer.email)
      .set('phone', customer.phone)
      .set('source', customer.source)
      .set('description', customer.description);

    return this.httpClient.post(`${this.api}/customers`, params.toString(), {headers: this.headers});
  }
}
