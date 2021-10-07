import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoConciliadorOpsComponent } from './novo-conciliador-ops.component';

describe('NovoConciliadorOpsComponent', () => {
  let component: NovoConciliadorOpsComponent;
  let fixture: ComponentFixture<NovoConciliadorOpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoConciliadorOpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoConciliadorOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
