import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserProfile, UserRegistration } from '../models/auth.models';
import { environment } from '../../../environments/environment';

export class LoginRequest {
  provider?: string;
  email?: string;
  password?: string;
  providerIdToken?: string;
}

@Injectable()
export class TechDevsAccountsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  async registerNewUser(reg: UserRegistration): Promise<string> {
    try {
      const user = await this.httpClient.post<UserProfile>(
        `${environment.accountServer}/api/v1/customer/account/register`, reg, {}).toPromise();
      console.log("User registration result", user);
      return "Success";
    } catch (error) {
      console.log("Registration errors", error.error);
      return "Failed to register new user";
    }
  }

  async getUserProfile(): Promise<UserProfile> {
    return this.httpClient.get<UserProfile>(`${environment.accountServer}/api/v1/customer/account`, {}).toPromise();
  }

  async setName(firstName: string, lastName: string): Promise<UserProfile> {
    const params = new HttpParams().set('firstName', firstName).set('lastName', lastName);
    console.log(params);
    return this.httpClient.post<UserProfile>(`${environment.accountServer}/api/v1/customer/account/setname`, {}, { params: params }).toPromise();
  }

  async setContactDetails(contactNumber: string): Promise<UserProfile> {
    const params = new HttpParams().set('contactNumber', contactNumber);
    return this.httpClient.post<UserProfile>(`${environment.accountServer}/api/v1/customer/account/setcontactdetails`, {}, { params: params }).toPromise();
  }

  async deleteUserProfile(): Promise<any> {
    return this.httpClient.delete(`${environment.accountServer}/api/v1/customer/account`, {}).toPromise();
  }

}
