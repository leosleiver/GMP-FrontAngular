import { TestBed } from '@angular/core/testing';

import { ComputadorService } from './computador.service';

describe('ComputadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComputadorService = TestBed.get(ComputadorService);
    expect(service).toBeTruthy();
  });
});
