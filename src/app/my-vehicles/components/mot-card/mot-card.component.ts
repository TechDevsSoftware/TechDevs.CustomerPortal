import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { CustomerVehicle } from '../../../api/models';

@Component({
  selector: 'app-mot-card',
  templateUrl: './mot-card.component.html',
  styleUrls: ['./mot-card.component.scss']
})
export class MotCardComponent implements OnInit {

  @Input() vehicle: CustomerVehicle;

  constructor() { }

  ngOnInit() {
  }

  bookMOT() {
    console.log("Book MOT");
  }

  get monthsDiff () : number {
    if(this.vehicle) {
      return moment(this.vehicle.motExpiryDate).diff(moment(), 'months');
    } else {
      return 0;
    }
  }
}
