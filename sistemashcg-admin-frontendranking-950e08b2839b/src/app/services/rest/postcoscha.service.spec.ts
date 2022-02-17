import { TestBed } from '@angular/core/testing';

import { PostcoschaService } from './postcoscha.service';

describe('PostcoschaService', () => {
  let service: PostcoschaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostcoschaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
