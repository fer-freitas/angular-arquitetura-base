import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarConciliadorOpsComponent } from './listar-conciliador-ops.component';

describe('ListarConciliadorOpsComponent', () => {
  let component: ListarConciliadorOpsComponent;
  let fixture: ComponentFixture<ListarConciliadorOpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarConciliadorOpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarConciliadorOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
