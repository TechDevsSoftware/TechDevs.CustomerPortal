import { Component, OnInit } from '@angular/core';
import { MenuTitleService } from '../../../core/services/menu-title.service';
import { TechDevsAuthService } from '../../../core/services/techdevs-auth.service';
import { RouterNavService } from '../../../core/services/router-nav.service';
import { CustomerService } from '../../../api/services';

@Component({
  selector: 'app-delete-profile',
  templateUrl: './delete-profile.component.html',
  styleUrls: ['./delete-profile.component.scss']
})
export class DeleteProfileComponent implements OnInit {

  constructor(
    private menuTitle: MenuTitleService,
    private accountService: CustomerService,
    private authService: TechDevsAuthService,
    private routerNav: RouterNavService
  ) { 
    this.menuTitle.updateTitle("Confirm Delete Account");
  }

  ngOnInit() {
  }

  async delete() {
    await this.accountService.DeleteAccount().toPromise();
    this.authService.logout();
  }

  backToProfile() {
    this.routerNav.navigate(['account', 'profile']);
  }

  privacy() {
    this.routerNav.navigate(['policy', 'privacy']);
  }
}
