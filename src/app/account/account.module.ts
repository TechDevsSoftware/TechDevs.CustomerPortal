import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './components/signin/signin.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { RouterNavService } from '../core/services/router-nav.service';
import { MyCarsListComponent } from './components/my-cars-list/my-cars-list.component';
import { RouterModule } from '@angular/router';
import { ProfileMenuComponent } from './components/profile-menu/profile-menu.component';
import { VehicleLookupComponent } from './components/vehicle-lookup/vehicle-lookup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    SigninComponent,
    ProfileComponent,
    RegisterComponent,
    MyCarsListComponent,
    ProfileMenuComponent,
    VehicleLookupComponent
  ],
  providers: [
    RouterNavService
  ]
})
export class AccountModule { }
