/* tslint:disable */
import { MotComment } from './mot-comment';
export interface MotResult {
  completedDate?: string;
  testResult?: string;
  expiryDate?: string;
  odometerValue?: string;
  odometerUnit?: string;
  odometerResultType?: string;
  motTestNumber?: string;
  comments?: Array<MotComment>;
}
