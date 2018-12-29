import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';
import { VehcilesListComponent } from './components/vehicles-list/vehicles-list.component';
import { VehicleLookupComponent } from './components/vehicle-lookup/vehicle-lookup.component';
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'ngx-moment';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MomentModule,
    CoreModule,
    SharedModule,
    MatButtonModule
  ],
  declarations: [
    VehicleDetailsComponent,
    VehcilesListComponent,
    VehicleLookupComponent
  ]
})
export class MyVehiclesModule { }
