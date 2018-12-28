import { Component, OnInit } from '@angular/core';
import { MenuTitleService } from '../../../core/services/menu-title.service';
import { TechDevsAccountsService } from '../../../core/services/techdevs-accounts.service';
import { TechDevsAuthService } from '../../../core/services/techdevs-auth.service';
import { RouterNavService } from '../../../core/services/router-nav.service';

@Component({
  selector: 'app-delete-profile',
  templateUrl: './delete-profile.component.html',
  styleUrls: ['./delete-profile.component.scss']
})
export class DeleteProfileComponent implements OnInit {

  constructor(
    private menuTitle: MenuTitleService,
    private accountService: TechDevsAccountsService,
    private authService: TechDevsAuthService,
    private routerNav: RouterNavService
  ) { 
    this.menuTitle.updateTitle("Confirm Delete Account");
  }

  ngOnInit() {
  }

  async delete() {
    await this.accountService.deleteUserProfile();
    this.authService.logout();
  }

  backToProfile() {
    this.routerNav.navigate(['account', 'profile']);
  }

  privacy() {
    this.routerNav.navigate(['policy', 'privacy']);
  }
}
