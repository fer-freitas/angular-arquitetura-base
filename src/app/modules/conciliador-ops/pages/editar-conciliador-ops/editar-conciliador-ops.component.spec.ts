import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConciliadorOpsComponent } from './editar-conciliador-ops.component';

describe('EditarConciliadorOpsComponent', () => {
  let component: EditarConciliadorOpsComponent;
  let fixture: ComponentFixture<EditarConciliadorOpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarConciliadorOpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarConciliadorOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
