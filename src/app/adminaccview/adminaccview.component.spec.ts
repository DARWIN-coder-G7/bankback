import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaccviewComponent } from './adminaccview.component';

describe('AdminaccviewComponent', () => {
  let component: AdminaccviewComponent;
  let fixture: ComponentFixture<AdminaccviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminaccviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminaccviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
