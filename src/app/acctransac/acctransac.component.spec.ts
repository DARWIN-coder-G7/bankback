import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcctransacComponent } from './acctransac.component';

describe('AcctransacComponent', () => {
  let component: AcctransacComponent;
  let fixture: ComponentFixture<AcctransacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcctransacComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcctransacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
