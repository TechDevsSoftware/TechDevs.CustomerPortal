import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { UserProfile, UserRegistration } from '../models/auth.models';
import { Router } from '@angular/router';
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

}
