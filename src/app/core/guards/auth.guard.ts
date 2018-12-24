import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TechDevsAuthService } from '../services/techdevs-auth.service';
import { RouterNavService } from '../services/router-nav.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private authService: TechDevsAuthService,
    private routerNav: RouterNavService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): any {
    if (!this.authService.isLoggedIn) {
      const clientKey = this.getClientKeyFromState(state);
      console.log("CLIENTKEY for failed nav", clientKey);
      this.routerNav.navigateToClient(clientKey, ['login']);
      return false;
    }
    // Impliment Auth Logic here
    return true;
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): any {
    return this.canActivate(next, state);
  }

  private getClientKeyFromState(state: RouterStateSnapshot) {
    const url = state.url;
    const parts = url.split('/');
    const dealershipIndex = parts.findIndex(p => p == "dealership");
    const result = parts[dealershipIndex + 1];
    return result;
  }
}
