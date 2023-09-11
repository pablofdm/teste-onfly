import { HotelsCardsServiceService } from './../services/card-service/hotels-cards-service.service';
import { Component, OnInit } from '@angular/core';
import * as cityOptionsData from '../../data/place.json'
import { CitiesData } from 'src/app/models/places.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header-search',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  citiesData: Array<CitiesData> = [];
  searchForm!: FormGroup;
  inputValue?: string;
  filteredOptions: Array<string> = [];
  filteredCityOptions: any = (cityOptionsData as any).default;


  constructor(private formBuilder: FormBuilder, public hotelsCardsServiceService: HotelsCardsServiceService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.searchForm = this.formBuilder.group({
      search: [''],
    });
  }

  resetForm(): void {
    this.searchForm = this.formBuilder.group({
      search: [''],
    });
  }

  submitForm(): void {
    this.hotelsCardsServiceService.AllHotelsTogether$.next([])
    setTimeout(() => {
      this.hotelsCardsServiceService.AllHotelsTogether$.next(this.hotelsCardsServiceService.AllHotelsTogetherAuxList$.getValue().filter((e) => e.address.city === this.hotelsCardsServiceService.city) &&
        this.hotelsCardsServiceService.AllHotelsTogetherAuxList$.getValue().filter((e) => e.name.toLowerCase().includes(this.hotelsCardsServiceService.city.toLowerCase())));
      this.checkIfTheListIsEmpty();
    }, 1500)
  }

  checkIfTheListIsEmpty(): void {
    if (this.hotelsCardsServiceService.AllHotelsTogether$.getValue().length <= 0)
      this.hotelsCardsServiceService.listIsEmpty = true;
    else
      this.hotelsCardsServiceService.listIsEmpty = false;
  }


  onChange(value: any): void {
    this.filteredOptions = this.filteredCityOptions.filter((option: CitiesData) =>
      option.name?.toLowerCase().indexOf(value?.toString().toLowerCase()) !== -1)
      .map((e: CitiesData) => `${e.name}, ${e.state.shortname}`);

    this.hotelsCardsServiceService.city = value.split(",")[0];
  }

}
