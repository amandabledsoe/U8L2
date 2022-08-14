import { TestBed } from '@angular/core/testing';

import { ChirpusPizzaService } from './chirpus-pizza.service';

describe('ChirpusPizzaService', () => {
  let service: ChirpusPizzaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChirpusPizzaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
