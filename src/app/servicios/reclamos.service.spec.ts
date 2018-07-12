import { TestBed, inject } from '@angular/core/testing';

import { ReclamosService } from './reclamos.service';

describe('ReclamosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReclamosService]
    });
  });

  it('should be created', inject([ReclamosService], (service: ReclamosService) => {
    expect(service).toBeTruthy();
  }));
});
