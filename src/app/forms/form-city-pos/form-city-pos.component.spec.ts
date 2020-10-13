import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCityPosComponent } from './form-city-pos.component';

describe('FormCityPosComponent', () => {
  let component: FormCityPosComponent;
  let fixture: ComponentFixture<FormCityPosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCityPosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCityPosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
