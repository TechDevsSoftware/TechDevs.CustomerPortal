import { Component, OnInit } from '@angular/core';
import { TechDevsAuthService } from '../../../core/services/techdevs-auth.service';
import { UserProfile } from '../../../core/models/auth.models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: UserProfile;

  constructor(
    private authService: TechDevsAuthService
  ) { }

  async ngOnInit() {
    this.user = await this.authService.getUserProfile();
    console.log(this.user);
  }

  logout() {
    this.authService.logout();
  }

}
