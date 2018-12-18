import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserVehicle } from '../../../core/models/auth.models';
import { VehicleService } from '../../../core/services/techdevs-vehicle.service';

@Component({
  selector: 'app-vehicle-lookup',
  templateUrl: './vehicle-lookup.component.html',
  styleUrls: ['./vehicle-lookup.component.scss']
})
export class VehicleLookupComponent implements OnInit {

  reg: string;
  result: UserVehicle;
  @Output() onCarAdded = new EventEmitter();

  constructor(
    private vehicleService: VehicleService
  ) { }

  ngOnInit() {
  }

  async search() {
    this.result = await this.vehicleService.searchByReg(this.reg);
    console.log(this.result);
  }

  async addToMyCars() {
    await this.vehicleService.addVehicle(this.result);
    this.onCarAdded.emit();
    this.result = null;
    this.reg = null;
  }

}
