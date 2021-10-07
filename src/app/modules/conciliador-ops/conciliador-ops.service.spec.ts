import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ConciliadorOpsService } from './conciliador-ops.service';

describe('ConciliadorOpsService', () => {
  let service: ConciliadorOpsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConciliadorOpsService]
    });

    service = TestBed.inject(ConciliadorOpsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});