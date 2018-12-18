import { Component, OnInit } from '@angular/core';
import { UserProfile, UserVehicle } from '../../../core/models/auth.models';
import { TechDevsAuthService } from '../../../core/services/techdevs-auth.service';
import { VehicleService } from '../../../core/services/techdevs-vehicle.service';
import { RouterNavService } from '../../../core/services/router-nav.service';

@Component({
  selector: 'app-my-cars-list',
  templateUrl: './my-cars-list.component.html',
  styleUrls: ['./my-cars-list.component.scss']
})
export class MyCarsListComponent implements OnInit {

  profile: UserProfile;
  cars: UserVehicle[] = [];

  constructor(
    private authService: TechDevsAuthService,
    private vehicleService: VehicleService,
    private routerNav: RouterNavService
  ) { }

  async ngOnInit() {
    await this.loadData();
  }

  async loadData() {
    this.profile = await this.authService.getUserProfile();
    if(this.profile.customerData && this.profile.customerData.myVehicles) {
      this.cars = this.profile.customerData.myVehicles;
    }
    console.log(this.profile);
  }

  async deleteVehicle(reg: string) {
    await this.vehicleService.deleteVehicle(reg);
    await this.loadData();
  }

  vehicleDetails(reg: string) {
    this.routerNav.navigate(['profile', 'cars', reg]);
  }


}
