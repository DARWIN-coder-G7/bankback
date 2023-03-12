import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseracchistoryComponent } from './useracchistory.component';

describe('UseracchistoryComponent', () => {
  let component: UseracchistoryComponent;
  let fixture: ComponentFixture<UseracchistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseracchistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseracchistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
