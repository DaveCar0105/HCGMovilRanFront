import { TestBed } from '@angular/core/testing';

import { CargueraService } from './carguera.service';

describe('CargueraService', () => {
  let service: CargueraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargueraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
