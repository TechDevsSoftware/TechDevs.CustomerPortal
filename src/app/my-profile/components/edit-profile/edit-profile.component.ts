import { Component, OnInit } from '@angular/core';
import { TechDevsAuthService } from '../../../core/services/techdevs-auth.service';
import { UserProfile } from '../../../core/models/auth.models';
import { RouterNavService } from '../../../core/services/router-nav.service';
import { MenuTitleService } from '../../../core/services/menu-title.service';
import { TechDevsAccountsService } from '../../../core/services/techdevs-accounts.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  profile: UserProfile;

  constructor(
    private routerNav: RouterNavService,
    private menuTitleService: MenuTitleService,
    private accountService: TechDevsAccountsService
  ) { 
    this.menuTitleService.updateTitle("My Profile");
  }

  async ngOnInit() {
    await this.loadData();
  }

  async loadData() {
    this.profile = await this.accountService.getUserProfile();
  }

  privacy() {
    this.routerNav.navigate(['policy', 'privacy']);
  }

  async save() {
    const profileToUpdate = Object.assign(this.profile);
    console.log(profileToUpdate);
    this.profile = await this.accountService.setName(profileToUpdate.firstName, profileToUpdate.lastName);
    this.profile = await this.accountService.setContactDetails(profileToUpdate.contactNumber);
    // console.log("Saved Profile");
  }

  deleteProfile() {
    this.routerNav.navigate(['account', 'profile', 'delete']);
  }

}
