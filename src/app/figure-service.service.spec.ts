import { TestBed } from '@angular/core/testing';

import { FigureServiceService } from './figure-service.service';

describe('FigureServiceService', () => {
  let service: FigureServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FigureServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
