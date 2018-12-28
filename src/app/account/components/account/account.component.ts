import { Component, OnInit } from '@angular/core';
import { TechDevsAuthService } from '../../../core/services/techdevs-auth.service';
import { UserProfile, Client } from '../../../core/models/auth.models';
import { ClientService } from '../../../core/services/techdevs-client.service';
import { ActivatedRoute } from '@angular/router';
import { MenuTitleService } from '../../../core/services/menu-title.service';
import { TechDevsAccountsService } from '../../../core/services/techdevs-accounts.service';

@Component({
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  profile: UserProfile;
  client: Client;
  title: string;

  constructor(
    private authService: TechDevsAuthService,
    private accountService: TechDevsAccountsService,
    private clientService: ClientService,
    public route: ActivatedRoute,
    private menuTitleService: MenuTitleService
  ) { 
    this.menuTitleService.title$.subscribe((title: string) => this.title = title);
  }

  async ngOnInit() {
    this.client = await this.clientService.getClient();
    this.profile = await this.accountService.getUserProfile();
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
