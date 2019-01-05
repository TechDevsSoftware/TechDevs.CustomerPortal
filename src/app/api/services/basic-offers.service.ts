/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Client } from '../models/client';
import { BasicOffer } from '../models/basic-offer';
@Injectable({
  providedIn: 'root',
})
class BasicOffersService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param offer undefined
   * @return Success
   */
  UpdateBasicOfferResponse(offer?: BasicOffer): __Observable<__StrictHttpResponse<Client>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = offer;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/clients/data/basicoffers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Client>;
      })
    );
  }
  /**
   * @param offer undefined
   * @return Success
   */
  UpdateBasicOffer(offer?: BasicOffer): __Observable<Client> {
    return this.UpdateBasicOfferResponse(offer).pipe(
      __map(_r => _r.body as Client)
    );
  }

  /**
   * @param offerId undefined
   * @return Success
   */
  DeleteBasicOfferResponse(offerId: string): __Observable<__StrictHttpResponse<Client>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/v1/clients/data/basicoffers/${offerId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Client>;
      })
    );
  }
  /**
   * @param offerId undefined
   * @return Success
   */
  DeleteBasicOffer(offerId: string): __Observable<Client> {
    return this.DeleteBasicOfferResponse(offerId).pipe(
      __map(_r => _r.body as Client)
    );
  }
}

module BasicOffersService {
}

export { BasicOffersService }
