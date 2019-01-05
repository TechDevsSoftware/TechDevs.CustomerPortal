/* tslint:disable */
import { CustomerData } from './customer-data';
import { DBRef } from './dbref';
import { AuthUserInvitation } from './auth-user-invitation';
export interface Customer {
  agreedToTerms?: boolean;
  customerData?: CustomerData;
  clientId?: DBRef;
  username?: string;
  normalisedUsername?: string;
  emailAddress?: string;
  normalisedEmail?: string;
  firstName?: string;
  lastName?: string;
  id?: string;
  validateEmailKey?: string;
  validatedEmail?: boolean;
  passwordHash?: string;
  providerName?: string;
  providerId?: string;
  contactNumber?: string;
  invitation?: AuthUserInvitation;
  disabled?: boolean;
}
