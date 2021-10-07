import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoQuebraSigiloComponent } from './novo-quebra-sigilo.component';

describe('NovoQuebraSigiloComponent', () => {
  let component: NovoQuebraSigiloComponent;
  let fixture: ComponentFixture<NovoQuebraSigiloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoQuebraSigiloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoQuebraSigiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
