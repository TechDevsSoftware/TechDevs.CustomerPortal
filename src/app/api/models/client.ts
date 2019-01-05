/* tslint:disable */
import { AuthUserProfile } from './auth-user-profile';
import { ClientTheme } from './client-theme';
import { ClientData } from './client-data';
export interface Client {
  id?: string;
  name?: string;
  siteUrl?: string;
  clientApiKey?: string;
  shortKey?: string;
  employees?: Array<AuthUserProfile>;
  customers?: Array<AuthUserProfile>;
  clientTheme?: ClientTheme;
  clientData?: ClientData;
}
