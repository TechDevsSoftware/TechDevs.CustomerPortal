export class UserProfile {
  username: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  contactNumber: string;
  agreedToTerms: boolean;
  validatedEmail: boolean;
  customerData: UserData;
  providerName: string;
}

export class UserData {
  myVehicles: UserVehicle[];
  notificationPreferences: NotificationPreferences;
}

export class NotificationPreferences {
  motEmail: boolean;
  motPush: boolean;
  serviceEmail: boolean;
  servicePush: boolean;
  offersEmail: boolean;
  offersPush: boolean;
}

export class UserVehicle {
  make: string;
  model: string;
  registration: string;
  year: number;
  fuelType: string;
  colour: string;
  motResults: MOTResult[];
  motExpiryDate: Date;

  constructor() {
    this.motResults = [];
  }
}

export class MOTResult {
  completedDate: string;
  testResult: string;
  expiryDate: string;
  odometerValue: string;
  odometerUnit: string;
  odometerResultType: string;
  motTestNumber: string;
  comments: MOTComment[];
}

export class MOTComment {
  text: string;
  type: string;
}

export class UserRegistration {
  firstName: string;
  lastName: string;
  emailAddress: string;
  aggreedToTerms: string;
  provider: string;
  password: string;
}


export class Client {
  id: string;
  name: string;
  siteUrl: string;
  clientApiKey: string;
  shortKey: string;
  clientTheme: ClientTheme;
}

export class ClientTheme {
  font: string;
  primaryColour: string;
  secondaryColour: string;
  warningColour: string;
  dangerColour: string;
  logoPath: string;
  logoData: Blob;
  parameters: CSSParameter[];
}

export class CSSParameter {
  key: string;
  value: string;
}