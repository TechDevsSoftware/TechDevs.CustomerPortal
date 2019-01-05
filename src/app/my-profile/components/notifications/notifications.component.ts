import { Component, OnInit } from '@angular/core';
import { CustomerService, CustomerDataService } from '../../../api/services';
import { CustomerProfile } from '../../../api/models/customer-profile';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  profile: CustomerProfile;

  constructor(
    private accountsService: CustomerService,
    private customerDataService: CustomerDataService
  ) { }

  async ngOnInit() {
    await this.loadData();
  }

  async loadData() {
    this.profile = await this.accountsService.GetProfile().toPromise();
  }

  async save() {
    const result = await this.customerDataService.UpdateNotificationPreferences(this.profile.customerData.notificationPreferences).toPromise();
    if (result) {
      this.profile = result;
    }
  }

}
