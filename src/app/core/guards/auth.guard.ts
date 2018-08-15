import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'angularx-social-login';
import { TechDevsAuthService } from '../services/techdevs-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private authService: TechDevsAuthService,
    private router: Router
  ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): any {

    if (!this.authService.isLoggedIn) {
      this.router.navigate(['/signin']);
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
