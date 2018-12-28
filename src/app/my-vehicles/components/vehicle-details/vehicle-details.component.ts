import { Component, OnInit } from '@angular/core';
import { UserVehicle, UserProfile } from '../../../core/models/auth.models';
import { ActivatedRoute } from '@angular/router';
import { TechDevsAuthService } from '../../../core/services/techdevs-auth.service';
import { VehicleService } from '../../../core/services/techdevs-vehicle.service';
import { RouterNavService } from '../../../core/services/router-nav.service';
import { MenuTitleService } from '../../../core/services/menu-title.service';
import { TechDevsAccountsService } from '../../../core/services/techdevs-accounts.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements OnInit {

  vehicle: UserVehicle;
  profile: UserProfile;

  constructor(
    private route: ActivatedRoute,
    private authService: TechDevsAuthService,
    private vehicleService: VehicleService,
    private routeNav: RouterNavService,
    private menuTitleService: MenuTitleService,
    private accountServive: TechDevsAccountsService
  ) { 
    this.menuTitleService.updateTitle("My Vehicle");
  }
  
  async ngOnInit() {
    await this.loadData();
    this.menuTitleService.updateTitle(`My Vehicle - ${this.vehicle.registration.toLocaleUpperCase}`);
  }

  async loadData() {
    this.profile = await this.accountServive.getUserProfile();
    const reg = this.route.snapshot.params['registration'];
    if(this.profile && this.profile.customerData && this.profile.customerData.myVehicles) {
      this.vehicle = this.profile.customerData.myVehicles.filter(v => v.registration == reg)[0];
    }
  } 

  async refreshVehicleData() {

  }

  async deleteVehicle() {
    await this.vehicleService.deleteVehicle(this.vehicle.registration);
    this.routeNav.navigate(['account', 'cars']);
  }

}
