import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TechDevsAuthService } from '../../../core/services/techdevs-auth.service';
import { RouterNavService } from '../../../core/services/router-nav.service';
import { MenuTitleService } from '../../../core/services/menu-title.service';
import { CustomerProfile } from '../../../api/models/customer-profile';
import { CustomerVehicle } from '../../../api/models';
import { MyVehiclesService, CustomerService } from '../../../api/services';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements OnInit {

  vehicle: CustomerVehicle;
  profile: CustomerProfile;

  constructor(
    private route: ActivatedRoute,
    private authService: TechDevsAuthService,
    private vehicleService: MyVehiclesService,
    private routeNav: RouterNavService,
    private menuTitleService: MenuTitleService,
    private accountServive: CustomerService
  ) {
    this.menuTitleService.updateTitle("My Vehicle");
  }

  async ngOnInit() {
    await this.loadData();
    this.menuTitleService.updateTitle(`My Vehicle - ${this.vehicle.registration.toLocaleUpperCase}`);
  }

  async loadData() {
    this.profile = await this.accountServive.GetProfile().toPromise();
    const reg = this.route.snapshot.params['registration'];
    if (this.profile && this.profile.customerData && this.profile.customerData.myVehicles) {
      this.vehicle = this.profile.customerData.myVehicles.filter(v => v.registration == reg)[0];
    }
  }

  async refreshVehicleData() {

  }

  async deleteVehicle() {
    await this.vehicleService.RemoveVehicle(this.vehicle.registration);
    this.routeNav.navigate(['account', 'cars']);
  }

}
