import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivacyPolicyComponent } from './policy/components/privacy-policy/privacy-policy.component';
import { SigninComponent } from './account/components/signin/signin.component';
import { ProfileComponent } from './account/components/profile/profile.component';
import { AuthGuard } from './core/guards/auth.guard';
import { RegisterComponent } from './account/components/register/register.component';

const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: "policy/privacy", component: PrivacyPolicyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
