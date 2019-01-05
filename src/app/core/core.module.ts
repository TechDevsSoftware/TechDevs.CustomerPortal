import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { RouterNavService } from './services/router-nav.service';
import { MenuTitleService } from './services/menu-title.service';
import { TechDevsAuthService } from './services/techdevs-auth.service';
import { ClientKeyService } from './services/techdevs-clientkey.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [

  ],
  providers: [
    AuthGuard,
    RouterNavService,
    MenuTitleService,
    TechDevsAuthService,
    ClientKeyService
  ]
})
export class CoreModule { }
