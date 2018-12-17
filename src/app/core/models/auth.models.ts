export class UserProfile {
  username: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  agreedToTerms: boolean;
  validatedEmail: boolean;
  customerData: UserData;
}

export class UserData {
  myVehicles: UserVehicle[];
}

export class UserVehicle {
  make: string;
  model: string;
  registration: string;
  year: number;
  fuelType: string;
  colour: string;
  motResults: MOTResult[];

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
}

export class UserRegistration {
  firstName: string;
  lastName: string;
  emailAddress: string;
  aggreedToTerms: string;
  provider: string;
  password: string;
}
