import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { FormsModule } from '@angular/forms';
import { DeleteProfileComponent } from './components/delete-profile/delete-profile.component';
import { ProfileMenuComponent } from './components/profile-menu/profile-menu.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { MatSlideToggleModule, MatInputModule, MatButtonModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [EditProfileComponent, DeleteProfileComponent, ProfileMenuComponent, NotificationsComponent]
})
export class MyProfileModule { }
