import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivacyPolicyComponent } from './policy/components/privacy-policy/privacy-policy.component';
import { SigninComponent } from './account/components/signin/signin.component';
import { ProfileComponent } from './account/components/profile/profile.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  {
    path: '',
    canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    children: [
      { path: 'profile', component: ProfileComponent }
    ]
  },
  { path: "policy/privacy", component: PrivacyPolicyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
