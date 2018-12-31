import { Component, OnInit } from '@angular/core';
import { UserProfile, UserVehicle } from '../../../core/models/auth.models';
import { TechDevsAccountsService } from '../../../core/services/techdevs-accounts.service';
import * as moment from 'moment';

@Component({
  selector: 'app-account-home',
  templateUrl: './account-home.component.html',
  styleUrls: ['./account-home.component.scss']
})
export class AccountHomeComponent implements OnInit {

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

  get expiringMOTVehicles() : UserVehicle[] {
    if(this.profile && this.profile.customerData && this.profile.customerData.myVehicles) {
      return this.profile.customerData.myVehicles.filter(v => moment(v.motExpiryDate).diff(moment(), 'months') <= 6 );
    }
  }

}
