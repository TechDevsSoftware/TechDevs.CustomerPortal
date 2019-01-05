/* tslint:disable */
import { CustomerVehicle } from './customer-vehicle';
import { CustomerNotificationPreferences } from './customer-notification-preferences';
import { MarketingNotificationPreferences } from './marketing-notification-preferences';
export interface CustomerData {
  myVehicles?: Array<CustomerVehicle>;
  notificationPreferences?: CustomerNotificationPreferences;
  marketingPreferences?: MarketingNotificationPreferences;
}
