import { Component, OnInit } from '@angular/core';
import { TechDevsAuthService } from '../../../core/services/techdevs-auth.service';
import { UserProfile, Client } from '../../../core/models/auth.models';
import { RouterNavService } from '../../../core/services/router-nav.service';
import { ClientService } from '../../../core/services/techdevs-client.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: UserProfile;
  client: Client;

  constructor(
    private authService: TechDevsAuthService,
    private routerNav: RouterNavService,
    private clientService: ClientService
  ) { }

  async ngOnInit() {
    this.client = await this.clientService.getClient();
    this.profile = await this.authService.getUserProfile();
    console.log("User profile", this.profile);
  }


}
