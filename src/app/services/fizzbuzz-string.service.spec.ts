import { TestBed } from '@angular/core/testing';

import { FizzBuzzStringService } from './fizzbuzz-string.service';

describe('FizzbuzzStringService', () => {
  let service: FizzBuzzStringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FizzBuzzStringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
