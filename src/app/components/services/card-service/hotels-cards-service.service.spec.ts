import { TestBed } from '@angular/core/testing';

import { HotelsCardsServiceService } from './hotels-cards-service.service';

describe('HotelsCardsServiceService', () => {
  let service: HotelsCardsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelsCardsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
