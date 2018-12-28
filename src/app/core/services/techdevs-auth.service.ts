import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { UserProfile } from '../models/auth.models';
import { environment } from '../../../environments/environment';
import { RouterNavService } from './router-nav.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ClientService } from './techdevs-client.service';

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
    private routerNav: RouterNavService,
    private clientService: ClientService
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

  redirectToAccount() {
    this.routerNav.navigate(['account']);
  }

  get isLoggedIn(): boolean {
    const jwt = new JwtHelperService;
    if (!this.token) return false; 
    const expired = jwt.isTokenExpired(this.token);
    if(expired) {
      this.clearLocalToken();
    }
    return !expired;
  }

  get token(): string {
    return window.localStorage.getItem(this.getTokenKey());
  }

  private async onSuccessfulLogin(token: string) {
    this.setLocalToken(token);
    this.redirectToAccount();
  }

  private setLocalToken(token: string) {
    window.localStorage.setItem(this.getTokenKey(), token);
  }

  private clearLocalToken() {
    window.localStorage.removeItem(this.getTokenKey());
  }

  private getTokenKey(): string {
    const clientKey: string = this.clientService.clientKey;
    return `techdevs-auth-token:${clientKey}`;
  }

}
