/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Customer } from '../models/customer';
import { MarketingNotificationPreferences } from '../models/marketing-notification-preferences';
import { CustomerNotificationPreferences } from '../models/customer-notification-preferences';
@Injectable({
  providedIn: 'root',
})
class CustomerDataService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  GetCustomerDataResponse(): __Observable<__StrictHttpResponse<Customer>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/customer/account`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Customer>;
      })
    );
  }
  /**
   * @return Success
   */
  GetCustomerData(): __Observable<Customer> {
    return this.GetCustomerDataResponse().pipe(
      __map(_r => _r.body as Customer)
    );
  }

  /**
   * @param marketingPreferences undefined
   * @return Success
   */
  UpdateMarketingPreferencesResponse(marketingPreferences?: MarketingNotificationPreferences): __Observable<__StrictHttpResponse<Customer>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = marketingPreferences;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/customer/account/preferences/marketing`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Customer>;
      })
    );
  }
  /**
   * @param marketingPreferences undefined
   * @return Success
   */
  UpdateMarketingPreferences(marketingPreferences?: MarketingNotificationPreferences): __Observable<Customer> {
    return this.UpdateMarketingPreferencesResponse(marketingPreferences).pipe(
      __map(_r => _r.body as Customer)
    );
  }

  /**
   * @param notificationPreferences undefined
   * @return Success
   */
  UpdateNotificationPreferencesResponse(notificationPreferences?: CustomerNotificationPreferences): __Observable<__StrictHttpResponse<Customer>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = notificationPreferences;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/customer/account/preferences/notifications`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Customer>;
      })
    );
  }
  /**
   * @param notificationPreferences undefined
   * @return Success
   */
  UpdateNotificationPreferences(notificationPreferences?: CustomerNotificationPreferences): __Observable<Customer> {
    return this.UpdateNotificationPreferencesResponse(notificationPreferences).pipe(
      __map(_r => _r.body as Customer)
    );
  }
}

module CustomerDataService {
}

export { CustomerDataService }
