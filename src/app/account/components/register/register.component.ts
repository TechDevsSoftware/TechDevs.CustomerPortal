import { Component, OnInit } from '@angular/core';
import { UserRegistration } from '../../../core/models/auth.models';
import { TechDevsAccountsService } from '../../../core/services/techdevs-accounts.service';
import { TechDevsAuthService } from '../../../core/services/techdevs-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  reg: UserRegistration;
  confirmPassword: string;
  errMessage: string;

  constructor(
    private accountsService: TechDevsAccountsService,
    private authService: TechDevsAuthService
  ) { }

  ngOnInit() {
    this.resetRegistration();
  }

  resetRegistration() {
    this.reg = new UserRegistration();
    this.reg.provider = "TechDevs";
  }

  get passwordsMatch() {
    return ((this.reg.password == this.confirmPassword) && (this.reg.password != null));
  }

  async register() {
    // First register the account
    console.log("Registration request", this.reg);
    const result = await this.accountsService.registerNewUser(this.reg);
    console.log("Registration result", result);
    if (result == "Success") {
      await this.authService.loginWithEmail(this.reg.emailAddress, this.reg.password);
    } else {
      this.errMessage = result;
    }
  }

}
