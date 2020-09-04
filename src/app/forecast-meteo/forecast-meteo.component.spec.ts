import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastMeteoComponent } from './forecast-meteo.component';

describe('ForecastMeteoComponent', () => {
  let component: ForecastMeteoComponent;
  let fixture: ComponentFixture<ForecastMeteoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastMeteoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastMeteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
