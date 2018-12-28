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
    params.forEach(param => {
      console.log(param.key);
      html[0].style.setProperty(param.key, param.value);
      // html[0].style.setProperty(`${param.key}-rgb`, `255, 255, 255`);
      html[0].style.setProperty(`${param.key}-rgb`, this.hexToRgb(param.value));
    });
  };


  get primaryColor(): string {
    if (this.client && this.client.clientTheme && this.client.clientTheme.parameters) {
      const result = this.client.clientTheme.parameters.filter(x => x.key == "--td-primary")[0];
      if (result) {
        return result.value;
      }
    }
    return "#ff0000";
  }

  hexToRgb(hex: string): string {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`: '';
  }
}
