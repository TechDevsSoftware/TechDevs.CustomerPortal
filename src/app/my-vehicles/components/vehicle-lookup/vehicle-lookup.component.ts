import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserVehicle, UserProfile } from '../../../core/models/auth.models';
import { VehicleService } from '../../../core/services/techdevs-vehicle.service';
import { RouterNavService } from '../../../core/services/router-nav.service';
import { TechDevsAuthService } from '../../../core/services/techdevs-auth.service';
import { MenuTitleService } from '../../../core/services/menu-title.service';
import { TechDevsAccountsService } from '../../../core/services/techdevs-accounts.service';

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
    private routerNav: RouterNavService,
    private menuTitleService: MenuTitleService,
    private accountService: TechDevsAccountsService
  ) { 
    this.menuTitleService.updateTitle("Lookup Vehicle");
  }

  async ngOnInit() {
    this.profile = await this.accountService.getUserProfile();
  }

  async search() {
    if(this.canAdd) {
      try {
        this.result = await this.vehicleService.searchByReg(this.reg);
      } catch (error) {
        this.error = true;; 
      }
    }
  }

  async addToMyCars() {
    await this.vehicleService.addVehicle(this.result);
    this.onCarAdded.emit();
    this.result = null;
    this.reg = null;
    this.routerNav.navigate(['account', 'cars']);
  }

  back() {
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
