import { Component, OnInit } from '@angular/core';
import { RouterNavService } from '../../../core/services/router-nav.service';
import { Modal } from 'ngx-modialog/plugins/js-native';
import { MenuTitleService } from '../../../core/services/menu-title.service';
import { AuthUserProfile } from '../../../api/models';
import { CustomerService } from '../../../api/services';
import { CustomerData } from '../../../api/models/customer-data';
import { CustomerProfile } from '../../../api/models/customer-profile';

@Component({
  selector: 'app-my-cars-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehcilesListComponent implements OnInit {

  profile: CustomerProfile;
  customerData: CustomerData;

  constructor(
    private routerNav: RouterNavService,
    public modal: Modal,
    private menuTitleService: MenuTitleService,
    private customerService: CustomerService
  ) {
    this.menuTitleService.updateTitle("My Cars");
  }

  async ngOnInit() {
    await this.loadData();
  }

  async loadData() {
    this.profile = await this.customerService.GetProfile().toPromise();
  }


  addVehicle() {
    this.routerNav.navigate(['account', 'cars', 'add']);
  }
}
