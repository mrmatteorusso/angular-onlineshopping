import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CockieNotificationComponent } from './cockie-notification.component';

describe('CockieNotificationComponent', () => {
  let component: CockieNotificationComponent;
  let fixture: ComponentFixture<CockieNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CockieNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CockieNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
