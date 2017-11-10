import { TestBed, inject } from '@angular/core/testing';

import { CatbookService } from './catbook.service';

describe('CatbookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatbookService]
    });
  });

  it('should be created', inject([CatbookService], (service: CatbookService) => {
    expect(service).toBeTruthy();
  }));
});
