/* tslint:disable */
import { CustomerData } from './customer-data';
export interface CustomerProfile {
  customerData?: CustomerData;
  username?: string;
  firstName?: string;
  lastName?: string;
  emailAddress?: string;
  agreedToTerms?: boolean;
  validatedEmail?: boolean;
  providerName?: string;
  contactNumber?: string;
}
