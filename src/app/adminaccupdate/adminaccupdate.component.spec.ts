import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaccupdateComponent } from './adminaccupdate.component';

describe('AdminaccupdateComponent', () => {
  let component: AdminaccupdateComponent;
  let fixture: ComponentFixture<AdminaccupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminaccupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminaccupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
