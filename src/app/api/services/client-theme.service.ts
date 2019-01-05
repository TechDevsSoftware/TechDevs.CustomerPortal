/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Client } from '../models/client';
import { CSSParameter } from '../models/cssparameter';
@Injectable({
  providedIn: 'root',
})
class ClientThemeService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `ClientThemeService.AddParameterParams` containing the following parameters:
   *
   * - `clientKey`:
   *
   * - `parameter`:
   *
   * @return Success
   */
  AddParameterResponse(params: ClientThemeService.AddParameterParams): __Observable<__StrictHttpResponse<Client>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.parameter;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/clients/${params.clientKey}/theme/parameters`,
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
   * @param params The `ClientThemeService.AddParameterParams` containing the following parameters:
   *
   * - `clientKey`:
   *
   * - `parameter`:
   *
   * @return Success
   */
  AddParameter(params: ClientThemeService.AddParameterParams): __Observable<Client> {
    return this.AddParameterResponse(params).pipe(
      __map(_r => _r.body as Client)
    );
  }

  /**
   * @param params The `ClientThemeService.RemoveParameterParams` containing the following parameters:
   *
   * - `clientKey`:
   *
   * - `key`:
   *
   * @return Success
   */
  RemoveParameterResponse(params: ClientThemeService.RemoveParameterParams): __Observable<__StrictHttpResponse<Client>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.key != null) __params = __params.set('key', params.key.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/v1/clients/${params.clientKey}/theme/parameters`,
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
   * @param params The `ClientThemeService.RemoveParameterParams` containing the following parameters:
   *
   * - `clientKey`:
   *
   * - `key`:
   *
   * @return Success
   */
  RemoveParameter(params: ClientThemeService.RemoveParameterParams): __Observable<Client> {
    return this.RemoveParameterResponse(params).pipe(
      __map(_r => _r.body as Client)
    );
  }
}

module ClientThemeService {

  /**
   * Parameters for AddParameter
   */
  export interface AddParameterParams {
    clientKey: string;
    parameter?: CSSParameter;
  }

  /**
   * Parameters for RemoveParameter
   */
  export interface RemoveParameterParams {
    clientKey: string;
    key?: string;
  }
}

export { ClientThemeService }
