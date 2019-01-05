import { Component, OnInit } from '@angular/core';
import { CustomerProfile } from '../../../api/models/customer-profile';
import { CustomerService, CustomerDataService } from '../../../api/services';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss']
})
export class MarketingComponent implements OnInit {

  profile: CustomerProfile;

  constructor(
    private accountService: CustomerService,
    private customerDataService: CustomerDataService
  ) { }

  async ngOnInit() {
    await this.loadData();
  }

  async loadData() {
    this.profile = await this.accountService.GetProfile().toPromise();
  }

  async save() {
    this.profile = await this.customerDataService.UpdateMarketingPreferences(this.profile.customerData.marketingPreferences).toPromise();
  }

}
