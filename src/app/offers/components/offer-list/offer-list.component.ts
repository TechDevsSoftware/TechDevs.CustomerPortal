import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../../../core/models/auth.models';
import { ClientService } from '../../../core/services/techdevs-client.service';

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
    this.client = await this.clientService.getClient();
  }

}
