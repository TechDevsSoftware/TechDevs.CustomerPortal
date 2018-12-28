import { Component, OnInit } from '@angular/core';
import { TechDevsAccountsService } from '../../../core/services/techdevs-accounts.service';
import { UserProfile, NotificationPreferences } from '../../../core/models/auth.models';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  profile: UserProfile;

  constructor(
    private accountsService: TechDevsAccountsService
  ) { }

  async ngOnInit() {
    await this.loadData();
  }

  async loadData() {
    this.profile = await this.accountsService.getUserProfile();
  }

  async save() {
    const result = await this.accountsService.updateNotificationPreferences(this.profile.customerData.notificationPreferences);
    if(result) {
      this.profile = result;
    }
  }

}
