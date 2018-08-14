import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService, GoogleLoginProvider, SocialUser } from "angularx-social-login";
import { UserProfile } from "../models/auth.models";

export class LoginRequest {
  provider?: string;
  email?: string;
  password?: string;
  providerIdToken?: string;
}

@Injectable()
export class TechDevsAuthService {

  user: UserProfile;

  constructor(
    private httpClient: HttpClient,
    private socialAuth: AuthService,
  ) { }

  async loginWithEmail(email: string, password: string) {
    const provider: string = "TechDevs";
    const loginRequest: LoginRequest = { provider: "TechDevs", email: email, password: password };
    const token = await this.httpClient.post<string>(`http://localhost:5101/api/auth/login`, loginRequest, {}).toPromise();
    this.setLocalToken(token);
    console.log("Logged in");
  }

  async loginWithGoogle() {
    const provider: string = "Google";
    let user: SocialUser;
    try {
      user = await this.socialAuth.signIn(GoogleLoginProvider.PROVIDER_ID);
    } catch (error) {
      console.log("Error signing into Goolge");
      return null;
    }
    const idToken = user.idToken;
    const loginRequest: LoginRequest = { provider: provider, providerIdToken: idToken };
    const token = await this.httpClient.post<string>(`http://localhost:5101/api/auth/login`, loginRequest, {}).toPromise();
    this.setLocalToken(token);
    console.log("Logged in");
  }

  loginWithFacebook() {
    const provider: string = "Facebook";
  }

  authState() {
    return this.socialAuth.authState;
  }

  logout() {
    this.clearLocalToken();
    this.user = null;
  }

  get token(): string {
    return window.localStorage.getItem('techdevs-auth-token');
  }

  private setLocalToken(token: string) {
    window.localStorage.setItem('techdevs-auth-token', token);
  }

  private clearLocalToken() {
    window.localStorage.removeItem('techdevs-auth-token');
  }

}
