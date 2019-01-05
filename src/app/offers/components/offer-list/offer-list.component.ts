import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../../../api/models';
import { ClientService } from '../../../api/services';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.scss']
})
export class OfferListComponent implements OnInit {

  client: Client;
  @Input() usePadding: boolean = true;

  constructor(
    private clientService: ClientService
  ) { }

  async ngOnInit() {
    await this.loadData();
  }

  async loadData() {
    this.client = await this.clientService.GetCurrentClient().toPromise();
  }

}
