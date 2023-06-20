import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanctionLoanComponent } from './sanction-loan.component';

describe('SanctionLoanComponent', () => {
  let component: SanctionLoanComponent;
  let fixture: ComponentFixture<SanctionLoanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SanctionLoanComponent]
    });
    fixture = TestBed.createComponent(SanctionLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
