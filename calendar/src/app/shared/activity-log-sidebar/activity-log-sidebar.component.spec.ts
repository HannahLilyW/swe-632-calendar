import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityLogSidebarComponent } from './activity-log-sidebar.component';

describe('ActivityLogSidebarComponent', () => {
  let component: ActivityLogSidebarComponent;
  let fixture: ComponentFixture<ActivityLogSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityLogSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityLogSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
