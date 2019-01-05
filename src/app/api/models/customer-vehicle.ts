/* tslint:disable */
import { MotResult } from './mot-result';
export interface CustomerVehicle {
  make?: string;
  model?: string;
  registration?: string;
  colour?: string;
  fuelType?: string;
  year?: number;
  motExpiryDate?: string;
  motResults?: Array<MotResult>;
}
