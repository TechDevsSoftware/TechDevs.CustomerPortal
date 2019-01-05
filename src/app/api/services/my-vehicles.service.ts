/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CustomerVehicle } from '../models/customer-vehicle';
@Injectable({
  providedIn: 'root',
})
class MyVehiclesService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param vehicle undefined
   */
  AddVehicleResponse(vehicle?: CustomerVehicle): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = vehicle;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/account/myvehicles`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param vehicle undefined
   */
  AddVehicle(vehicle?: CustomerVehicle): __Observable<null> {
    return this.AddVehicleResponse(vehicle).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param registration undefined
   */
  RemoveVehicleResponse(registration?: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (registration != null) __params = __params.set('registration', registration.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/v1/account/myvehicles`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param registration undefined
   */
  RemoveVehicle(registration?: string): __Observable<null> {
    return this.RemoveVehicleResponse(registration).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param registration undefined
   */
  LookupVehicleResponse(registration?: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (registration != null) __params = __params.set('registration', registration.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/account/myvehicles/lookup`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param registration undefined
   */
  LookupVehicle(registration?: string): __Observable<null> {
    return this.LookupVehicleResponse(registration).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module MyVehiclesService {
}

export { MyVehiclesService }
