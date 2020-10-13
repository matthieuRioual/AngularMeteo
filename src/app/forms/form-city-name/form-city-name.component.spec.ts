import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCityNameComponent } from './form-city-name.component';

describe('FormCityNameComponent', () => {
  let component: FormCityNameComponent;
  let fixture: ComponentFixture<FormCityNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCityNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCityNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
