import { Component, OnInit } from '@angular/core';
import { TechDevsAccountsService } from '../../../core/services/techdevs-accounts.service';
import { UserProfile } from '../../../core/models/auth.models';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss']
})
export class MarketingComponent implements OnInit {

  profile: UserProfile;

  constructor(
    private accountService: TechDevsAccountsService
  ) { }

  async ngOnInit() {
    await this.loadData();
  }

  async loadData() {
    this.profile = await this.accountService.getUserProfile();
  }

  async save() {
    this.profile = await this.accountService.updateMarketingPreferences(this.profile.customerData.marketingPreferences);
  }

}
