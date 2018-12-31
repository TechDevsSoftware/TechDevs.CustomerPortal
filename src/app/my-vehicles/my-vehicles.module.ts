import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';
import { VehcilesListComponent } from './components/vehicles-list/vehicles-list.component';
import { VehicleLookupComponent } from './components/vehicle-lookup/vehicle-lookup.component';
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'ngx-moment';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { VehicleCardComponent } from './components/vehicle-card/vehicle-card.component';
import { MotCardComponent } from './components/mot-card/mot-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MomentModule,
    CoreModule,
    SharedModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    VehicleCardComponent,
    MotCardComponent
  ],
  declarations: [
    VehicleDetailsComponent,
    VehcilesListComponent,
    VehicleLookupComponent,
    VehicleCardComponent,
    MotCardComponent
  ]
})
export class MyVehiclesModule { }
