import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarQuebraSigiloComponent } from './listar-quebra-sigilo.component';

describe('ListarQuebraSigiloComponent', () => {
  let component: ListarQuebraSigiloComponent;
  let fixture: ComponentFixture<ListarQuebraSigiloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarQuebraSigiloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarQuebraSigiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
