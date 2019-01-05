/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Client } from '../models/client';
import { ClientRegistration } from '../models/client-registration';
@Injectable({
  providedIn: 'root',
})
class ClientService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  GetClientsResponse(): __Observable<__StrictHttpResponse<Array<Client>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/clients`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Client>>;
      })
    );
  }
  /**
   * @return Success
   */
  GetClients(): __Observable<Array<Client>> {
    return this.GetClientsResponse().pipe(
      __map(_r => _r.body as Array<Client>)
    );
  }

  /**
   * @param client undefined
   * @return Success
   */
  CreateClientResponse(client?: ClientRegistration): __Observable<__StrictHttpResponse<Client>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = client;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/clients`,
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
   * @param client undefined
   * @return Success
   */
  CreateClient(client?: ClientRegistration): __Observable<Client> {
    return this.CreateClientResponse(client).pipe(
      __map(_r => _r.body as Client)
    );
  }

  /**
   * @return Success
   */
  GetCurrentClientResponse(): __Observable<__StrictHttpResponse<Client>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/clients/current`,
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
   * @return Success
   */
  GetCurrentClient(): __Observable<Client> {
    return this.GetCurrentClientResponse().pipe(
      __map(_r => _r.body as Client)
    );
  }

  /**
   * @param params The `ClientService.GetClientByIdParams` containing the following parameters:
   *
   * - `clientId`:
   *
   * - `includeRelatedAuthUsers`:
   *
   * @return Success
   */
  GetClientByIdResponse(params: ClientService.GetClientByIdParams): __Observable<__StrictHttpResponse<Client>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.includeRelatedAuthUsers != null) __params = __params.set('includeRelatedAuthUsers', params.includeRelatedAuthUsers.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/clients/${params.clientId}`,
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
   * @param params The `ClientService.GetClientByIdParams` containing the following parameters:
   *
   * - `clientId`:
   *
   * - `includeRelatedAuthUsers`:
   *
   * @return Success
   */
  GetClientById(params: ClientService.GetClientByIdParams): __Observable<Client> {
    return this.GetClientByIdResponse(params).pipe(
      __map(_r => _r.body as Client)
    );
  }

  /**
   * @param params The `ClientService.UpdateClientParams` containing the following parameters:
   *
   * - `clientId`:
   *
   * - `client`:
   *
   * @return Success
   */
  UpdateClientResponse(params: ClientService.UpdateClientParams): __Observable<__StrictHttpResponse<Client>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.client;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/v1/clients/${params.clientId}`,
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
   * @param params The `ClientService.UpdateClientParams` containing the following parameters:
   *
   * - `clientId`:
   *
   * - `client`:
   *
   * @return Success
   */
  UpdateClient(params: ClientService.UpdateClientParams): __Observable<Client> {
    return this.UpdateClientResponse(params).pipe(
      __map(_r => _r.body as Client)
    );
  }

  /**
   * @param clientId undefined
   * @return Success
   */
  DeleteClientResponse(clientId: string): __Observable<__StrictHttpResponse<Client>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/v1/clients/${clientId}`,
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
   * @param clientId undefined
   * @return Success
   */
  DeleteClient(clientId: string): __Observable<Client> {
    return this.DeleteClientResponse(clientId).pipe(
      __map(_r => _r.body as Client)
    );
  }
}

module ClientService {

  /**
   * Parameters for GetClientById
   */
  export interface GetClientByIdParams {
    clientId: string;
    includeRelatedAuthUsers?: boolean;
  }

  /**
   * Parameters for UpdateClient
   */
  export interface UpdateClientParams {
    clientId: string;
    client?: Client;
  }
}

export { ClientService }
