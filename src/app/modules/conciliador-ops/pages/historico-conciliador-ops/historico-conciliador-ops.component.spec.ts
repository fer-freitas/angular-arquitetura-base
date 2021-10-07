import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoConciliadorOpsComponent } from './historico-conciliador-ops.component';

describe('HistoricoConciliadorOpsComponent', () => {
  let component: HistoricoConciliadorOpsComponent;
  let fixture: ComponentFixture<HistoricoConciliadorOpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoConciliadorOpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoConciliadorOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
