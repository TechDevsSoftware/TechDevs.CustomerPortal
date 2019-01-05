import { Component, OnInit, Input } from '@angular/core';
import { BasicOffer } from '../../../api/models';

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
