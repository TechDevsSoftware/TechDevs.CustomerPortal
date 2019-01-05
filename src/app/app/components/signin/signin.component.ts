import { Component, OnInit, Inject } from '@angular/core';
import { RouterNavService } from '../../../core/services/router-nav.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { _document } from '@angular/platform-browser/src/browser';
import { ClientService } from '../../../api/services';
import { Client } from '../../../api/models';
import { TechDevsAuthService } from '../../../core/services/techdevs-auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {


  email: string;
  password: string;
  errMessage: string;
  client: Client;

  constructor(
    private nav: RouterNavService,
    private clientService: ClientService,
    private router: Router,
    private authService: TechDevsAuthService
  ) { }


  async ngOnInit() {
    await this.loadClientData();
    if (!this.client) {
      this.router.navigate(['invalid-client']);
    }
    if (this.authService.isLoggedIn) {
      this.authService.redirectToAccount();
    }
  }

  async loadClientData() {
    this.client = await this.clientService.GetCurrentClient().toPromise();
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
