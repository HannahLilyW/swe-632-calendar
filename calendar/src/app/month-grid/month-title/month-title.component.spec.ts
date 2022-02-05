import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthTitleComponent } from './month-title.component';

describe('MonthTitleComponent', () => {
  let component: MonthTitleComponent;
  let fixture: ComponentFixture<MonthTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
