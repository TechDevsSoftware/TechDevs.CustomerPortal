import { Component, OnInit } from '@angular/core';
import { TechDevsAuthService } from '../core/services/techdevs-auth.service';
import { Spinkit } from 'ng-http-loader';

export class LoginStatus {
  isLoggedIn: boolean;
  sessionId: string;
  origin: string;
  displayName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public spinkit = Spinkit;
  title = 'app';
  isLoggedIn = false;

  email: string;
  password: string;

  constructor(
    private authService: TechDevsAuthService
  ) { }

  ngOnInit() {
  }

  signinWithEmail() {
    this.authService.loginWithEmail(this.email, this.password);
  }

  signinWithGoogle() {
    this.authService.loginWithGoogle();
  }

  logout() {
    this.authService.logout();
  }
}
