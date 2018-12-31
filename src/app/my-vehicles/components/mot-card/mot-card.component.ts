import { Component, OnInit, Input } from '@angular/core';
import { UserVehicle } from '../../../core/models/auth.models';
import * as moment from 'moment';

@Component({
  selector: 'app-mot-card',
  templateUrl: './mot-card.component.html',
  styleUrls: ['./mot-card.component.scss']
})
export class MotCardComponent implements OnInit {

  @Input() vehicle: UserVehicle;

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
