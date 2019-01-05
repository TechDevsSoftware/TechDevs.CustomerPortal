import { Component, OnInit } from '@angular/core';
import { TechDevsAuthService } from '../../../core/services/techdevs-auth.service';
import { ActivatedRoute } from '@angular/router';
import { MenuTitleService } from '../../../core/services/menu-title.service';
import { CustomerService, ClientService } from '../../../api/services';
import { CustomerProfile } from '../../../api/models/customer-profile';
import { Client } from '../../../api/models';

@Component({
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  profile: CustomerProfile;
  client: Client;
  title: string;

  constructor(
    private authService: TechDevsAuthService,
    private accountService: CustomerService,
    private clientService: ClientService,
    public route: ActivatedRoute,
    private menuTitleService: MenuTitleService
  ) { 
    this.menuTitleService.title$.subscribe((title: string) => this.title = title);
  }

  async ngOnInit() {
    this.client = await this.clientService.GetCurrentClient().toPromise();
    this.profile = await this.accountService.GetProfile().toPromise();
    console.log("User profile", this.profile);
    console.log("Route", this.route);
  }

  backToAccount() {
    this.authService.redirectToAccount();
  }

  get showHeader(): boolean {
    const segemnts = location.pathname
      .split('/')
      .filter(x => x != "")
      .slice(2);
    return segemnts.length > 1;
  }
}
