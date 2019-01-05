/* tslint:disable */
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration } from './api-configuration';

import { BasicOffersService } from './services/basic-offers.service';
import { ClientService } from './services/client.service';
import { ClientThemeService } from './services/client-theme.service';
import { CustomerService } from './services/customer.service';
import { CustomerDataService } from './services/customer-data.service';
import { EmployeeService } from './services/employee.service';
import { MyVehiclesService } from './services/my-vehicles.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    BasicOffersService,
    ClientService,
    ClientThemeService,
    CustomerService,
    CustomerDataService,
    EmployeeService,
    MyVehiclesService
  ],
})
export class ApiModule { }
