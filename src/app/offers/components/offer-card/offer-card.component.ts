import { Component, OnInit, Input } from '@angular/core';
import { Client, BasicOffer } from '../../../core/models/auth.models';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss']
})
export class OfferCardComponent implements OnInit {

  @Input() offer: BasicOffer;
  
  constructor(
  ) { }

  ngOnInit() {
  }

}
