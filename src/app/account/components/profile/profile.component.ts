import { Component, OnInit } from '@angular/core';
import { TechDevsAuthService } from '../../../core/services/techdevs-auth.service';
import { UserProfile } from '../../../core/models/auth.models';
import { RouterNavService } from '../../../core/services/router-nav.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: UserProfile;

  constructor(
    private authService: TechDevsAuthService,
    private routerNav: RouterNavService
  ) { }

  async ngOnInit() {
    this.user = await this.authService.getUserProfile();
    console.log("User profile", this.user);
  }


}
