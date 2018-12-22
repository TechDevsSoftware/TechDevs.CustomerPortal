import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivacyPolicyComponent } from './policy/components/privacy-policy/privacy-policy.component';
import { SigninComponent } from './account/components/signin/signin.component';
import { ProfileComponent } from './account/components/profile/profile.component';
import { AuthGuard } from './core/guards/auth.guard';
import { RegisterComponent } from './account/components/register/register.component';
import { MyCarsListComponent } from './account/components/my-cars-list/my-cars-list.component';
import { ProfileMenuComponent } from './account/components/profile-menu/profile-menu.component';
import { VehicleDetailsComponent } from './account/components/vehicle-details/vehicle-details.component';
import { InvalidClientComponent } from './account/components/invalid-client/invalid-client.component';
import { VehicleLookupComponent } from './account/components/vehicle-lookup/vehicle-lookup.component';

const routes: Routes = [
  {path: 'invalid-client', component: InvalidClientComponent},
  {
    path: 'dealership/:clientKey', children: [
      { path: '', component: SigninComponent },
      { path: 'login', component: SigninComponent },
      { path: 'register', component: RegisterComponent },
      {
        path: 'profile', component: ProfileComponent, canActivate: [AuthGuard], children: [
          { path: '', component: ProfileMenuComponent },
          { path: 'cars', component: MyCarsListComponent },
          { path: 'cars/add', component: VehicleLookupComponent },
          { path: 'cars/:registration', component: VehicleDetailsComponent }
        ]
      },
      { path: "policy/privacy", component: PrivacyPolicyComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
