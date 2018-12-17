import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { UserProfile } from '../models/auth.models';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { RouterNavService } from './router-nav.service';

export class LoginRequest {
  provider?: string;
  email?: string;
  password?: string;
  providerIdToken?: string;
}

@Injectable()
export class TechDevsAuthService {

  constructor(
    private httpClient: HttpClient,
    private socialAuth: AuthService,
    private routerNav: RouterNavService
  ) { }

  async loginWithEmail(email: string, password: string): Promise<string> {
    this.logout();
    const provider = 'TechDevs';
    const loginRequest: LoginRequest = { provider: provider, email: email, password: password };
    try {
      const token = await this.httpClient.post<string>(`${environment.accountServer}/api/v1/customer/auth/login`, loginRequest, {}).toPromise();
      this.onSuccessfulLogin(token);
      return "Success";
    } catch (error) {
      if (error.status == 401) {
        return "Invalid credentials";
      }
      return "Could not log in. Please try again";
      // console.log(error);
    }
  }

  async loginWithGoogle(): Promise<string> {
    this.logout();
    console.log('Logging in with Google');
    const provider = 'Google';
    let user: SocialUser;
    try {
      user = await this.socialAuth.signIn(GoogleLoginProvider.PROVIDER_ID);
    } catch (error) {
      console.log('Error signing in with Goolge');
      return "Error signing in with Google";
    }
    const idToken = user.idToken;
    const loginRequest: LoginRequest = { provider: provider, providerIdToken: idToken };
    const token = await this.httpClient.post<string>(`${environment.accountServer}/api/v1/customer/auth/login`, loginRequest, {}).toPromise();
    this.onSuccessfulLogin(token);
    return "Success";
  }

  loginWithFacebook() {
    const provider = 'Facebook';
  }

  authState() {
    return this.socialAuth.authState;
  }

  logout() {
    this.clearLocalToken();
    this.redirectToLogin();
  }

  redirectToLogin() {
    this.routerNav.navigate(['login']);
  }

  redirectToProfile() {
    this.routerNav.navigate(['profile']);
  }

  get isLoggedIn(): boolean {
    return (this.token !== null);
  }

  get token(): string {
    return window.localStorage.getItem('techdevs-auth-token');
  }

  private async onSuccessfulLogin(token: string) {
    this.setLocalToken(token);
    this.redirectToProfile();
  }

  private setLocalToken(token: string) {
    window.localStorage.setItem('techdevs-auth-token', token);
  }

  private clearLocalToken() {
    window.localStorage.removeItem('techdevs-auth-token');
  }
  async getUserProfile(): Promise<UserProfile> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.httpClient.get<UserProfile>(`${environment.accountServer}/api/v1/customer/account`, { headers: headers }).toPromise();
  }

}
