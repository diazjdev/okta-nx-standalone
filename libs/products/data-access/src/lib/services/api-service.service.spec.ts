import { TestBed } from '@angular/core/testing';

import { ProductApiService } from './api-service.service';

describe('ApiServiceService', () => {
  let service: ProductApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
