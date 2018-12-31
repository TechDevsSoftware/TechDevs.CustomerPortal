import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferCardComponent } from './components/offer-card/offer-card.component';
import { OfferListComponent } from './components/offer-list/offer-list.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [OfferListComponent, OfferCardComponent],
  declarations: [OfferCardComponent, OfferListComponent]
})
export class OffersModule { }
