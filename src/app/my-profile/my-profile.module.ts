import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { FormsModule } from '@angular/forms';
import { DeleteProfileComponent } from './components/delete-profile/delete-profile.component';
import { ProfileMenuComponent } from './components/profile-menu/profile-menu.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule
  ],
  declarations: [EditProfileComponent, DeleteProfileComponent, ProfileMenuComponent]
})
export class MyProfileModule { }
