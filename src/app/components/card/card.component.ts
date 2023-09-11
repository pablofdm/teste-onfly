import { Component, Input } from '@angular/core';
import { HotelsCardsServiceService } from './../services/card-service/hotels-cards-service.service';
import { Hotel } from 'src/app/models/hotel.model';


@Component({
  selector: 'app-card-hotel',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() card: Hotel;
  visible: boolean = false;

  constructor(public hotelsCardsServiceService: HotelsCardsServiceService) { }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

}
