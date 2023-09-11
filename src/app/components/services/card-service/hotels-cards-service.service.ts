import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Hotel, Hotels } from 'src/app/models/hotel.model';
import * as hotelOptionsData from '../../../data/hotel.json'
@Injectable({
  providedIn: 'root'
})
export class HotelsCardsServiceService {
  allHotels: Hotels = []
  AllHotelsTogether$: BehaviorSubject<Array<Hotel>> = new BehaviorSubject<Array<Hotel>>([])
  AllHotelsTogetherAuxList$: BehaviorSubject<Array<Hotel>> = new BehaviorSubject<Array<Hotel>>([])
  allHotelsByTheCity: Hotel[] = []
  city: string = ''
  itemsPerPage: number = 10
  listIsEmpty: boolean = false
  noFilteredHotelOptions: Hotels = (hotelOptionsData as any).default;

  constructor() {
  }

  getHotels(): void {
    this.allHotels = this.noFilteredHotelOptions;
  }

  putAllHotelInOneEstructure(): any {
    const fillPlacesInOneEstructre: Array<Hotel> = []
    this.allHotels.forEach((hotel: any) => {
      let hotels: Hotel[] = hotel.hotels.map((e: any) => e);
      hotels.forEach((e) => {
        fillPlacesInOneEstructre.push(e);
      })
    })
    if (fillPlacesInOneEstructre) {
      this.AllHotelsTogetherAuxList$.next(fillPlacesInOneEstructre)
      this.AllHotelsTogether$.next(fillPlacesInOneEstructre)
    }
  }

}
