import { Component, OnInit } from '@angular/core';
import { UserProfile, UserVehicle } from '../../../core/models/auth.models';
import { TechDevsAuthService } from '../../../core/services/techdevs-auth.service';
import { VehicleService } from '../../../core/services/techdevs-vehicle.service';
import { RouterNavService } from '../../../core/services/router-nav.service';
import { Overlay } from 'ngx-modialog';
import { Modal } from 'ngx-modialog/plugins/bootstrap';
import { MenuTitleService } from '../../../core/services/menu-title.service';
import { TechDevsAccountsService } from '../../../core/services/techdevs-accounts.service';

@Component({
  selector: 'app-my-cars-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehcilesListComponent implements OnInit {

  profile: UserProfile;
  cars: UserVehicle[] = [];

  constructor(
    private authService: TechDevsAuthService,
    private vehicleService: VehicleService,
    private routerNav: RouterNavService,
    public modal: Modal,
    private menuTitleService: MenuTitleService,
    private accountService: TechDevsAccountsService
  ) { 
    this.menuTitleService.updateTitle("My Cars");
  }

  async ngOnInit() {
    await this.loadData();
  }

  async loadData() {
    this.profile = await this.accountService.getUserProfile();
    if (this.profile.customerData && this.profile.customerData.myVehicles) {
      this.cars = this.profile.customerData.myVehicles;
    }
    console.log(this.profile);
  }

  async deleteVehicle(reg: string) {

    const dialogRef = this.modal
    .confirm()
    .message("Are you shure you want to remove this vehicle?")
    .title("Remove Vehicle")
    .open();

    try {
      await dialogRef.result;
      await this.vehicleService.deleteVehicle(reg);
      await this.loadData();
    } catch (error) {
    }
  }

  vehicleDetails(reg: string) {
    this.routerNav.navigate(['account', 'cars', reg]);
  }

  bookService() {
    console.log("Book Service");
  }

  bookMOT() {
    console.log("Book MOT");
  }

  addVehicle() {
    this.routerNav.navigate(['account', 'cars', 'add']);
  }


}
