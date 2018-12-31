import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivacyPolicyComponent } from './policy/components/privacy-policy/privacy-policy.component';
import { AuthGuard } from './core/guards/auth.guard';
import { VehcilesListComponent } from './my-vehicles/components/vehicles-list/vehicles-list.component';
import { VehicleLookupComponent } from './my-vehicles/components/vehicle-lookup/vehicle-lookup.component';
import { VehicleDetailsComponent } from './my-vehicles/components/vehicle-details/vehicle-details.component';
import { InvalidClientComponent } from './app/components/invalid-client/invalid-client.component';
import { SigninComponent } from './app/components/signin/signin.component';
import { RegisterComponent } from './app/components/register/register.component';
import { AccountComponent } from './account/components/account/account.component';
import { EditProfileComponent } from './my-profile/components/edit-profile/edit-profile.component';
import { DeleteProfileComponent } from './my-profile/components/delete-profile/delete-profile.component';
import { AccountHomeComponent } from './account/components/account-home/account-home.component';
import { ProfileMenuComponent } from './my-profile/components/profile-menu/profile-menu.component';
import { WipModuleComponent } from './account/components/wip-module/wip-module.component';
import { NotificationsComponent } from './my-profile/components/notifications/notifications.component';
import { MarketingComponent } from './my-profile/components/marketing/marketing.component';

const routes: Routes = [
  { path: 'invalid-client', component: InvalidClientComponent },
  {
    path: 'dealership/:clientKey', children: [
      { path: '', component: SigninComponent },
      { path: 'login', component: SigninComponent },
      { path: 'register', component: RegisterComponent },
      {
        path: 'account', component: AccountComponent, canActivate: [AuthGuard], children: [
          { path: '', component: AccountHomeComponent },
          { path: 'home', component: AccountHomeComponent },
          { path: 'cars', component: VehcilesListComponent },
          { path: 'cars/add', component: VehicleLookupComponent },
          { path: 'cars/:registration', component: VehicleDetailsComponent },
          { path: 'offers', component: WipModuleComponent },
          { path: 'saved-vehicles', component: WipModuleComponent },
          { path: 'profile', component: ProfileMenuComponent },
          { path: 'profile/edit', component: EditProfileComponent },
          { path: 'profile/delete', component: DeleteProfileComponent },
          { path: 'profile/notifications', component: NotificationsComponent },
          { path: 'profile/marketing', component: MarketingComponent }
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
