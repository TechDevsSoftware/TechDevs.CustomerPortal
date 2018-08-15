import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { UserProfile } from '../models/auth.models';
import { Router } from '@angular/router';

export class LoginRequest {
  provider?: string;
  email?: string;
  password?: string;
  providerIdToken?: string;
}

@Injectable()
export class TechDevsAuthService {

  private user: UserProfile;

  constructor(
    private httpClient: HttpClient,
    private socialAuth: AuthService,
    private router: Router
  ) { }

  async loginWithEmail(email: string, password: string) {
    this.logout();
    const provider = 'TechDevs';
    const loginRequest: LoginRequest = { provider: 'TechDevs', email: email, password: password };
    const token = await this.httpClient.post<string>(`http://localhost:5101/api/auth/login`, loginRequest, {}).toPromise();
    this.onSuccessfulLogin(token);
  }

  async loginWithGoogle() {
    this.logout();
    console.log('Logging in with Google');
    const provider = 'Google';
    let user: SocialUser;
    try {
      user = await this.socialAuth.signIn(GoogleLoginProvider.PROVIDER_ID);
    } catch (error) {
      console.log('Error signing into Goolge');
      return null;
    }
    const idToken = user.idToken;
    const loginRequest: LoginRequest = { provider: provider, providerIdToken: idToken };
    const token = await this.httpClient.post<string>(`http://localhost:5101/api/auth/login`, loginRequest, {}).toPromise();
    this.onSuccessfulLogin(token);
  }

  loginWithFacebook() {
    const provider = 'Facebook';
  }

  authState() {
    return this.socialAuth.authState;
  }

  logout() {
    this.clearLocalToken();
    this.clearUserProfile();
    this.router.navigate(['/signin']);
  }

  get isLoggedIn(): boolean {
    return (this.token !== null && this.user !== null);
  }

  get token(): string {
    return window.localStorage.getItem('techdevs-auth-token');
  }

  get userProfile(): UserProfile {
    return this.user;
  }

  private async onSuccessfulLogin(token: string) {
    this.setLocalToken(token);
    await this.setUserProfile();
    this.router.navigate(['/profile']);
  }

  private setLocalToken(token: string) {
    window.localStorage.setItem('techdevs-auth-token', token);
  }

  private clearLocalToken() {
    window.localStorage.removeItem('techdevs-auth-token');
  }

  private async clearUserProfile() {
    this.user = null;
  }

  private async setUserProfile() {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    const user = await this.httpClient.get<UserProfile>(`http://localhost:5101/api/v1/account`, { headers: headers }).toPromise();
    this.user = user;
  }

}
