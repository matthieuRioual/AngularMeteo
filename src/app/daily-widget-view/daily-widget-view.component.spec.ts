import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyWidgetViewComponent } from './daily-widget-view.component';

describe('DailyWidgetViewComponent', () => {

  let component: DailyWidgetViewComponent;
  let fixture: ComponentFixture<DailyWidgetViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyWidgetViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyWidgetViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
