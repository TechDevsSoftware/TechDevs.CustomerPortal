import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserVehicle, UserProfile } from '../../../core/models/auth.models';
import { VehicleService } from '../../../core/services/techdevs-vehicle.service';
import { RouterNavService } from '../../../core/services/router-nav.service';
import { TechDevsAuthService } from '../../../core/services/techdevs-auth.service';

@Component({
  selector: 'app-vehicle-lookup',
  templateUrl: './vehicle-lookup.component.html',
  styleUrls: ['./vehicle-lookup.component.scss']
})
export class VehicleLookupComponent implements OnInit {

  reg: string;
  result: UserVehicle;
  profile: UserProfile;
  error: boolean;

  @Output() onCarAdded = new EventEmitter();

  constructor(
    private vehicleService: VehicleService,
    private authService: TechDevsAuthService,
    private routerNav: RouterNavService
  ) { }

  async ngOnInit() {
    this.profile = await this.authService.getUserProfile();
  }

  async search() {
    try {
      this.result = await this.vehicleService.searchByReg(this.reg);
    } catch (error) {
      this.error = true;; 
    }
  }

  async addToMyCars() {
    await this.vehicleService.addVehicle(this.result);
    this.onCarAdded.emit();
    this.result = null;
    this.reg = null;
    this.routerNav.navigate(['profile', 'cars']);
  }

  back() {
    // this.routerNav.navigate(["profile", 'cars', 'add']);
    this.result = null;
    this.reg = null;
  }

  get canAdd(): boolean {
    return (this.reg && !this.alreadyAdded);
  }

  get alreadyAdded(): boolean {
    if (!this.reg || !this.profile) return false;
    const result = this.profile.customerData.myVehicles.filter(v => v.registration.toUpperCase() == this.reg.toUpperCase()).length == 0;
    return !result;
  }

}
