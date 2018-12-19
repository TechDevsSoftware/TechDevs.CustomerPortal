import { Component, OnInit, ViewEncapsulation, ElementRef, Inject, Renderer2 } from '@angular/core';
import { TechDevsAuthService } from '../../../core/services/techdevs-auth.service';
import { RouterNavService } from '../../../core/services/router-nav.service';
import { ClientService } from '../../../core/services/techdevs-client.service';
import { Client } from '../../../core/models/auth.models';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { _document } from '@angular/platform-browser/src/browser';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SigninComponent implements OnInit {

  @Inject(DOCUMENT) private _document: any

  email: string;
  password: string;
  errMessage: string;
  client: Client;

  constructor(
    private authService: TechDevsAuthService,
    private nav: RouterNavService,
    private clientService: ClientService,
    private router: Router,
  ) { }


  async ngOnInit() {
    await this.loadClientData();
    if (!this.client) {
      this.router.navigate(['invalid-client']);
    }
    if (this.authService.isLoggedIn) {
      this.authService.redirectToProfile();
    }
  }

  async loadClientData() {
    this.client = await this.clientService.getClient();
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
