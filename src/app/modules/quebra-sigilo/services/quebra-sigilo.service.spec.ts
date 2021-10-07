import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { QuebraSigiloService } from './quebra-sigilo.service';

describe('QuebraSigiloService', () => {
  let service: QuebraSigiloService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [QuebraSigiloService]
    });

    service = TestBed.inject(QuebraSigiloService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});