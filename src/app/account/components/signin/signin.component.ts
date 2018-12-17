import { Component, OnInit } from '@angular/core';
import { TechDevsAuthService } from '../../../core/services/techdevs-auth.service';
import { RouterNavService } from '../../../core/services/router-nav.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email: string;
  password: string;
  errMessage: string;

  constructor(
    private authService: TechDevsAuthService,
    private nav: RouterNavService
  ) { }

  ngOnInit() {
    if (this.authService.isLoggedIn) {
      this.authService.redirectToProfile();
    }
  }

  async login() {
    const response = await this.authService.loginWithEmail(this.email, this.password);
    if (response != "Success") {
      this.errMessage = response;
    }
  }

  async loginWithGoogle() {
    const response = await this.authService.loginWithGoogle();
    if (response != "Success") {
      this.errMessage = response;
    }
  }

  goToRegister() {
    this.nav.navigate(['register']);
  }

}
