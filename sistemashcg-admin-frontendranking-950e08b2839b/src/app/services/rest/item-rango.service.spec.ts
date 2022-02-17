import { TestBed } from '@angular/core/testing';

import { ItemRangoService } from './item-rango.service';

describe('ItemRangoService', () => {
  let service: ItemRangoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemRangoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
