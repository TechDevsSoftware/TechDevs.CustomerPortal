/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AuthUserProfile } from '../models/auth-user-profile';
import { AuthUserInvitationRequest } from '../models/auth-user-invitation-request';
import { AuthUserInvitationAcceptRequest } from '../models/auth-user-invitation-accept-request';
import { AuthUserRegistration } from '../models/auth-user-registration';
import { LoginRequest } from '../models/login-request';
@Injectable({
  providedIn: 'root',
})
class EmployeeService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  GetProfileResponse(): __Observable<__StrictHttpResponse<AuthUserProfile>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/employees`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthUserProfile>;
      })
    );
  }
  /**
   * @return Success
   */
  GetProfile(): __Observable<AuthUserProfile> {
    return this.GetProfileResponse().pipe(
      __map(_r => _r.body as AuthUserProfile)
    );
  }
  DeleteAccountResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/v1/employees`,
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
  }  DeleteAccount(): __Observable<null> {
    return this.DeleteAccountResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param invite undefined
   * @return Success
   */
  InviteEmployeeResponse(invite?: AuthUserInvitationRequest): __Observable<__StrictHttpResponse<AuthUserProfile>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = invite;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/employees/invite`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthUserProfile>;
      })
    );
  }
  /**
   * @param invite undefined
   * @return Success
   */
  InviteEmployee(invite?: AuthUserInvitationRequest): __Observable<AuthUserProfile> {
    return this.InviteEmployeeResponse(invite).pipe(
      __map(_r => _r.body as AuthUserProfile)
    );
  }

  /**
   * @param inviteKey undefined
   * @return Success
   */
  GetUserProfileFromInviteKeyResponse(inviteKey: string): __Observable<__StrictHttpResponse<AuthUserProfile>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/employees/invite/profile/${inviteKey}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthUserProfile>;
      })
    );
  }
  /**
   * @param inviteKey undefined
   * @return Success
   */
  GetUserProfileFromInviteKey(inviteKey: string): __Observable<AuthUserProfile> {
    return this.GetUserProfileFromInviteKeyResponse(inviteKey).pipe(
      __map(_r => _r.body as AuthUserProfile)
    );
  }

  /**
   * @param request undefined
   * @return Success
   */
  CompleteInviteRegistrationResponse(request?: AuthUserInvitationAcceptRequest): __Observable<__StrictHttpResponse<AuthUserProfile>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/employees/invite/complete`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthUserProfile>;
      })
    );
  }
  /**
   * @param request undefined
   * @return Success
   */
  CompleteInviteRegistration(request?: AuthUserInvitationAcceptRequest): __Observable<AuthUserProfile> {
    return this.CompleteInviteRegistrationResponse(request).pipe(
      __map(_r => _r.body as AuthUserProfile)
    );
  }

  /**
   * @param params The `EmployeeService.ResendInvitationParams` containing the following parameters:
   *
   * - `userId`:
   *
   * - `email`:
   */
  ResendInvitationResponse(params: EmployeeService.ResendInvitationParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.email != null) __params = __params.set('email', params.email.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/employees/invite/resend/${params.userId}`,
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
   * @param params The `EmployeeService.ResendInvitationParams` containing the following parameters:
   *
   * - `userId`:
   *
   * - `email`:
   */
  ResendInvitation(params: EmployeeService.ResendInvitationParams): __Observable<null> {
    return this.ResendInvitationResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `EmployeeService.UpdateAccountNameParams` containing the following parameters:
   *
   * - `lastName`:
   *
   * - `firstName`:
   *
   * @return Success
   */
  UpdateAccountNameResponse(params: EmployeeService.UpdateAccountNameParams): __Observable<__StrictHttpResponse<AuthUserProfile>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.lastName != null) __params = __params.set('lastName', params.lastName.toString());
    if (params.firstName != null) __params = __params.set('firstName', params.firstName.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/employees/setname`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthUserProfile>;
      })
    );
  }
  /**
   * @param params The `EmployeeService.UpdateAccountNameParams` containing the following parameters:
   *
   * - `lastName`:
   *
   * - `firstName`:
   *
   * @return Success
   */
  UpdateAccountName(params: EmployeeService.UpdateAccountNameParams): __Observable<AuthUserProfile> {
    return this.UpdateAccountNameResponse(params).pipe(
      __map(_r => _r.body as AuthUserProfile)
    );
  }

  /**
   * @param contactNumber undefined
   * @return Success
   */
  UpdateAccountContactDetailsResponse(contactNumber?: string): __Observable<__StrictHttpResponse<AuthUserProfile>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (contactNumber != null) __params = __params.set('contactNumber', contactNumber.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/employees/setcontactdetails`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthUserProfile>;
      })
    );
  }
  /**
   * @param contactNumber undefined
   * @return Success
   */
  UpdateAccountContactDetails(contactNumber?: string): __Observable<AuthUserProfile> {
    return this.UpdateAccountContactDetailsResponse(contactNumber).pipe(
      __map(_r => _r.body as AuthUserProfile)
    );
  }

  /**
   * @param registration undefined
   * @return Success
   */
  RegisterUserResponse(registration?: AuthUserRegistration): __Observable<__StrictHttpResponse<AuthUserProfile>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = registration;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/employees/register`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthUserProfile>;
      })
    );
  }
  /**
   * @param registration undefined
   * @return Success
   */
  RegisterUser(registration?: AuthUserRegistration): __Observable<AuthUserProfile> {
    return this.RegisterUserResponse(registration).pipe(
      __map(_r => _r.body as AuthUserProfile)
    );
  }

  /**
   * @param request undefined
   * @return Success
   */
  LoginResponse(request?: LoginRequest): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/employees/login`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @param request undefined
   * @return Success
   */
  Login(request?: LoginRequest): __Observable<string> {
    return this.LoginResponse(request).pipe(
      __map(_r => _r.body as string)
    );
  }
}

module EmployeeService {

  /**
   * Parameters for ResendInvitation
   */
  export interface ResendInvitationParams {
    userId: string;
    email?: string;
  }

  /**
   * Parameters for UpdateAccountName
   */
  export interface UpdateAccountNameParams {
    lastName?: string;
    firstName?: string;
  }
}

export { EmployeeService }
