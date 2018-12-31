import { Component, OnInit } from '@angular/core';
import { UserProfile, UserVehicle } from '../../../core/models/auth.models';
import { RouterNavService } from '../../../core/services/router-nav.service';
import { Modal } from 'ngx-modialog/plugins/js-native';
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

  
  addVehicle() {
    this.routerNav.navigate(['account', 'cars', 'add']);
  }


}
