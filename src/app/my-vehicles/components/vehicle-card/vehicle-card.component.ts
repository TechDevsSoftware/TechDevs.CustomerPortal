import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserVehicle } from '../../../core/models/auth.models';
import { VehicleService } from '../../../core/services/techdevs-vehicle.service';
import { Overlay } from 'ngx-modialog';
import { Modal } from 'ngx-modialog/plugins/js-native';

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.scss']
})
export class VehicleCardComponent implements OnInit {

  @Input() vehicle: UserVehicle;
  @Input() showDelete: boolean = false;
  @Input() showButtons: boolean = true;

  @Output() onDeleted = new EventEmitter<void>();

  constructor(
    private vehicleService: VehicleService,
    public modal: Modal
  ) { }

  ngOnInit() {
  }

  async deleteVehicle(reg: string) {

    const dialogRef = this.modal
      .confirm()
      .message("Are you shure you want to remove this vehicle?")
      .open();

    try {
      await dialogRef.result;
      await this.vehicleService.deleteVehicle(reg);
      this.onDeleted.emit();
    } catch (error) {
    }
  }

  bookService() {
    console.log("Book Service");
  }

  bookMOT() {
    console.log("Book MOT");
  }


}
