import { TestBed } from '@angular/core/testing';

import { TipoCajaService } from './tipo-caja.service';

describe('TipoCajaService', () => {
  let service: TipoCajaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoCajaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
