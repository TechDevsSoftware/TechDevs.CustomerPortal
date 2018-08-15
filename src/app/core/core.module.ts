import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TechDevsAuthService } from './services/techdevs-auth.service';
import { AuthGuard } from './guards/auth.guard';
import { AccountModule } from '../account/account.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [

  ],
  providers: [
    TechDevsAuthService,
    AuthGuard
  ]
})
export class CoreModule { }
