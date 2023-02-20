import { TestBed } from '@angular/core/testing';

import { DynamicformJsonService } from './dynamicform-json.service';

describe('DynamicformJsonService', () => {
  let service: DynamicformJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicformJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
