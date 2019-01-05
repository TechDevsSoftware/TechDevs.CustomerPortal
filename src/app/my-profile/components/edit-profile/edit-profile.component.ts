import { Component, OnInit } from '@angular/core';
import { RouterNavService } from '../../../core/services/router-nav.service';
import { MenuTitleService } from '../../../core/services/menu-title.service';
import { CustomerService } from '../../../api/services';
import { CustomerProfile } from '../../../api/models/customer-profile';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  profile: CustomerProfile;

  constructor(
    private routerNav: RouterNavService,
    private menuTitleService: MenuTitleService,
    private accountService: CustomerService
  ) {
    this.menuTitleService.updateTitle("My Profile");
  }

  async ngOnInit() {
    await this.loadData();
  }

  async loadData() {
    this.profile = await this.accountService.GetProfile().toPromise();
  }

  privacy() {
    this.routerNav.navigate(['policy', 'privacy']);
  }

  async save() {
    const profileToUpdate = Object.assign(this.profile);
    console.log(profileToUpdate);
    this.profile = await this.accountService.UpdateAccountName({ firstName: profileToUpdate.firstName, lastName: profileToUpdate.lastName }).toPromise();
    this.profile = await this.accountService.UpdateAccountContactDetails(profileToUpdate.contactNumber).toPromise();
  }

  deleteProfile() {
    this.routerNav.navigate(['account', 'profile', 'delete']);
  }

}
