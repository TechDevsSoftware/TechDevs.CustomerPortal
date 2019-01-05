import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../api/services/customer.service';
import { AuthUserProfile } from '../../../api/models/auth-user-profile';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  profile: AuthUserProfile;

  constructor(
    private customerService: CustomerService
  ) { }

  async ngOnInit() {
    this.profile = await this.customerService.GetProfile().toPromise();
    console.log("Profile:", this.profile);
  }

}
