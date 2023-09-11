import { HotelsCardsServiceService } from './../services/card-service/hotels-cards-service.service';
import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel.model';

@Component({
  selector: 'app-hotel-cards',
  templateUrl: './hotelcards.component.html',
  styleUrls: ['./hotelcards.component.css']
})
export class HotelCardsComponent implements OnInit {

  theHotels: Array<Hotel>;

  constructor(public hotelsCardsServiceService: HotelsCardsServiceService) { }

  ngOnInit(): void {
    this.hotelsCardsServiceService.getHotels()
    this.hotelsCardsServiceService.putAllHotelInOneEstructure()
    this.hotelsCardsServiceService.AllHotelsTogether$.subscribe((value) =>
      this.theHotels = value
    )

  }
}
