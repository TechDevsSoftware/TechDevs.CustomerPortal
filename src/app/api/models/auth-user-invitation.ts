/* tslint:disable */
import { AuthUserInvitationStatus } from './auth-user-invitation-status';
export interface AuthUserInvitation {
  clientName?: string;
  email?: string;
  lastName?: string;
  message?: string;
  sentById?: string;
  invitationKey?: string;
  firstName?: string;
  status?: AuthUserInvitationStatus;
  inviteSent?: string;
  inviteExpiry?: string;
  invitationSubject?: string;
  invitationBody?: string;
}
