import { Component, OnInit } from '@angular/core';
import { RouterNavService } from '../../../core/services/router-nav.service';
import { TechDevsAuthService } from '../../../core/services/techdevs-auth.service';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss']
})
export class ProfileMenuComponent implements OnInit {

  constructor(
    private authService: TechDevsAuthService,
    private routerNav: RouterNavService
  ) { }

  ngOnInit() {
  }

  myCars() {
    this.routerNav.navigate(['profile', 'cars']);
  }

  logout() {
    this.authService.logout();
  }


}
