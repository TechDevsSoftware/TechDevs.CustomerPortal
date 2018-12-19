import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
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
      this.routerNav.navigate(['/login']);
      return false;
    }
    // Impliment Auth Logic here
    return this.authService.isLoggedIn;
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): any {
    return this.canActivate(next, state);
  }
}
