import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'angularx-social-login';
import { TechDevsAuthService } from '../services/techdevs-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: TechDevsAuthService,
    private router: Router
  ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): any {

    console.log({
      isLoggedIn: this.authService.isLoggedIn,
      user: this.authService.userProfile,
      token: this.authService.token
    });

    if (!this.authService.isLoggedIn) {
      this.router.navigate(['/signin']);
      return false;
    }

    // Impliment Auth Logic here
    return this.authService.isLoggedIn;
  }
}
