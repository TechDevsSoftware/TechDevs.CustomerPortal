import { Component, OnInit } from '@angular/core';
import { TechDevsAuthService } from '../core/services/techdevs-auth.service';
import { Spinkit } from 'ng-http-loader';
import { ClientService } from '../core/services/techdevs-client.service';
import { Client } from '../core/models/auth.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public spinkit = Spinkit;

  client: Client;

  constructor(
    private clientService: ClientService
  ) {
  }

  async ngOnInit() {
    await this.loadClientData();
    if (this.client) {
      this.updateClientStyling();
    }
  }

  async loadClientData() {
    this.client = await this.clientService.getClient();
  }

  updateClientStyling() {
    const html = document.getElementsByTagName('html');
    const params = this.client.clientTheme.parameters;
    params.forEach(param => html[0].style.setProperty(param.key, param.value));
  }

  get primaryColor(): string {
    if (this.client && this.client.clientTheme && this.client.clientTheme.parameters) {
      const result = this.client.clientTheme.parameters.filter(x => x.key == "--td-primary")[0];
      if (result) {
        return result.value;
      }
    }
    return "#ff0000";
  }
}
