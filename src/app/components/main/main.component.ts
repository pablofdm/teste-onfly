import { Component, HostListener } from '@angular/core';
import { HotelsCardsServiceService } from '../services/card-service/hotels-cards-service.service';
import { Hotel } from 'src/app/models/hotel.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(public hotelsCardsServiceService: HotelsCardsServiceService) { }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    if (pos == max) {
      this.hotelsCardsServiceService.itemsPerPage += this.hotelsCardsServiceService.itemsPerPage;
    }
  }

  onChange(event: string): void {
    switch (event) {
      case "Mais recomendados":
        this.hotelsCardsServiceService.AllHotelsTogether$.next(this.hotelsCardsServiceService.AllHotelsTogetherAuxList$.getValue().sort((firstHotel: Hotel, secondHotel: Hotel) => secondHotel.price - firstHotel.price))
        break;
      case "Melhor avaliados":
        this.hotelsCardsServiceService.AllHotelsTogether$.next(this.hotelsCardsServiceService.AllHotelsTogetherAuxList$.getValue().sort((firstHotel: Hotel, secondHotel: Hotel) => parseInt(secondHotel.stars.toString()) - parseInt(firstHotel.stars.toString())))
        break;
      default:
        this.hotelsCardsServiceService.AllHotelsTogether$ = this.hotelsCardsServiceService.AllHotelsTogetherAuxList$
        break;
    }
  }

  getIfNotResults() {
    return Boolean(this.hotelsCardsServiceService.AllHotelsTogether$.getValue().length <= 0 ? true : false);
  }
}
