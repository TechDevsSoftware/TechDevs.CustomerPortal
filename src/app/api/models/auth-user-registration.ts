/* tslint:disable */
export interface AuthUserRegistration {
  firstName?: string;
  lastName?: string;
  emailAddress?: string;
  aggreedToTerms?: boolean;
  providerName?: string;
  providerId?: string;
  password?: string;
  changePasswordOnFirstLogin?: boolean;
  isInvite?: boolean;
}
