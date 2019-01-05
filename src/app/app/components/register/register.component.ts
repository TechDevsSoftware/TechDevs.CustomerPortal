import { Component, OnInit } from '@angular/core';
import { TechDevsAuthService } from '../../../core/services/techdevs-auth.service';
import { RouterNavService } from '../../../core/services/router-nav.service';
import { AuthUserRegistration, Client } from '../../../api/models';
import { CustomerService, ClientService } from '../../../api/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  reg: AuthUserRegistration = {};
  confirmPassword: string;
  errMessage: string;
  client: Client;

  constructor(
    private authService: TechDevsAuthService,
    private routerNav: RouterNavService,
    private clientService: ClientService,
    private customerService: CustomerService
  ) { }

  async ngOnInit() {
    this.resetRegistration();
    await this.loadData();
  }

  async loadData() {
    this.client = await this.clientService.GetCurrentClient().toPromise();
  }

  resetRegistration() {
    this.reg.providerName = "TechDevs";
  }

  get passwordsMatch() {
    return ((this.reg.password == this.confirmPassword) && (this.reg.password != null));
  }

  async register() {
    await this.customerService.RegisterUser(this.reg);
    await this.authService.loginWithEmail(this.reg.emailAddress, this.reg.password);
  }

  privacy() {
    this.routerNav.navigate(['policy', 'privacy']);
  }
}
