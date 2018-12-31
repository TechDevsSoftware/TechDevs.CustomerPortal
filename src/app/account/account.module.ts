import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterNavService } from '../core/services/router-nav.service';
import { RouterModule } from '@angular/router';
import { MomentModule } from "ngx-moment";
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import { JSNativeModalModule } from "ngx-modialog/plugins/js-native";
import { AccountComponent } from './components/account/account.component';
import { AccountHomeComponent } from './components/account-home/account-home.component';
import { WipModuleComponent } from './components/wip-module/wip-module.component';
import { MyVehiclesModule } from '../my-vehicles/my-vehicles.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MomentModule,
    ModalModule.forRoot(),
    JSNativeModalModule,
    MyVehiclesModule
  ],
  declarations: [
    AccountComponent,
    AccountHomeComponent,
    WipModuleComponent
  ],
  providers: [
    RouterNavService
  ]
})
export class AccountModule { }
