import { Component, OnInit } from '@angular/core';
import { TechDevsAuthService } from '../core/services/techdevs-auth.service';

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
  title = 'app';
  isLoggedIn = false;

  user: any;
  loggedIn: boolean;
  email: string;
  password: string;

  constructor(
    private authService: TechDevsAuthService
  ) { }

  ngOnInit() {
    this.authService.authState().subscribe((user) => {
      this.loggedIn = (user != null);
      this.user = user;
    });
  }

  signinWithEmail() {
    this.authService.loginWithEmail(this.email, this.password);
  }

  signinWithGoogle() {
    this.authService.loginWithGoogle();
  }

  signout() {
    this.authService.logout();
  }
}
