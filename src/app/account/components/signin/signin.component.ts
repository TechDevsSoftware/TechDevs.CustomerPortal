import { Component, OnInit } from '@angular/core';
import { TechDevsAuthService } from '../../../core/services/techdevs-auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private authService: TechDevsAuthService
  ) { }

  ngOnInit() {
  }

  async login() {
    await this.authService.loginWithEmail(this.email, this.password);
    console.log("Logged In");
  }

  async loginWithGoogle() {
    await this.authService.loginWithGoogle();
  }

}
