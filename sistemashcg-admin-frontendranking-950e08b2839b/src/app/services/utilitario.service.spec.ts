import { TestBed } from '@angular/core/testing';

import { UtilitarioService } from './utilitario.service';

describe('UtilitarioService', () => {
  let service: UtilitarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilitarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
