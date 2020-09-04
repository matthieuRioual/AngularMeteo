import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentMeteoComponent } from './current-meteo.component';

describe('CurrentMeteoComponent', () => {
  let component: CurrentMeteoComponent;
  let fixture: ComponentFixture<CurrentMeteoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentMeteoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentMeteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
