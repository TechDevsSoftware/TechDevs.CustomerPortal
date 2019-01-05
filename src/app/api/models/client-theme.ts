/* tslint:disable */
import { CSSParameter } from './cssparameter';
export interface ClientTheme {
  font?: string;
  primaryColour?: string;
  secondaryColour?: string;
  warningColour?: string;
  dangerColour?: string;
  logoPath?: string;
  logoData?: string;
  parameters?: Array<CSSParameter>;
}
