import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RouterNavService } from '../../../core/services/router-nav.service';
import { MenuTitleService } from '../../../core/services/menu-title.service';
import { CustomerVehicle } from '../../../api/models';
import { MyVehiclesService, CustomerService } from '../../../api/services';
import { CustomerProfile } from '../../../api/models/customer-profile';

@Component({
  selector: 'app-vehicle-lookup',
  templateUrl: './vehicle-lookup.component.html',
  styleUrls: ['./vehicle-lookup.component.scss']
})
export class VehicleLookupComponent implements OnInit {

  reg: string;
  result: CustomerVehicle;
  profile: CustomerProfile;
  error: boolean;

  @Output() onCarAdded = new EventEmitter();

  constructor(
    private vehicleService: MyVehiclesService,
    private routerNav: RouterNavService,
    private menuTitleService: MenuTitleService,
    private customerService: CustomerService
  ) {
    this.menuTitleService.updateTitle("Lookup Vehicle");
  }

  async ngOnInit() {
    this.profile = await this.customerService.GetProfile().toPromise();
  }

  async search() {
    if (this.canAdd) {
      try {
        this.result = await this.vehicleService.LookupVehicle(this.reg).toPromise();
      } catch (error) {
        this.error = true;;
      }
    }
  }

  async addToMyCars() {
    await this.vehicleService.AddVehicle(this.result).toPromise();
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
