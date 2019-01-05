import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Overlay } from 'ngx-modialog';
import { Modal } from 'ngx-modialog/plugins/js-native';
import { CustomerVehicle } from '../../../api/models';
import { MyVehiclesService } from '../../../api/services';

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.scss']
})
export class VehicleCardComponent implements OnInit {

  @Input() vehicle: CustomerVehicle;
  @Input() showDelete: boolean = false;
  @Input() showButtons: boolean = true;

  @Output() onDeleted = new EventEmitter<void>();

  constructor(
    private vehicleService: MyVehiclesService,
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
      await this.vehicleService.RemoveVehicle(this.vehicle.registration).toPromise();
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
