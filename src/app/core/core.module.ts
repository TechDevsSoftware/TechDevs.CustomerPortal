import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TechDevsAuthService } from './services/techdevs-auth.service';
import { AuthGuard } from './guards/auth.guard';
import { AccountModule } from '../account/account.module';
import { TechDevsAccountsService } from './services/techdevs-accounts.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [

  ],
  providers: [
    TechDevsAuthService,
    TechDevsAccountsService,
    AuthGuard
  ]
})
export class CoreModule { }
