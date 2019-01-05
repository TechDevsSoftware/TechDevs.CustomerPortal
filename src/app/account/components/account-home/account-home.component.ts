import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { CustomerService } from '../../../api/services';
import { CustomerProfile } from '../../../api/models/customer-profile';
import { CustomerVehicle } from '../../../api/models';

@Component({
  selector: 'app-account-home',
  templateUrl: './account-home.component.html',
  styleUrls: ['./account-home.component.scss']
})
export class AccountHomeComponent implements OnInit {

  profile: CustomerProfile;

  constructor(
    private accountService: CustomerService
  ) { }

  async ngOnInit() {
    await this.loadData();
  }

  async loadData() {
    this.profile = await this.accountService.GetProfile().toPromise();
  }

  get expiringMOTVehicles() : CustomerVehicle[] {
    if(this.profile && this.profile.customerData && this.profile.customerData.myVehicles) {
      return this.profile.customerData.myVehicles.filter(v => moment(v.motExpiryDate).diff(moment(), 'months') <= 6 );
    }
  }

}
