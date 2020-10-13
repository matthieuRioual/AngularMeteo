import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalisationInputComponent } from './localisation-input.component';

describe('FormEntryComponent', () => {
  let component: LocalisationInputComponent;
  let fixture: ComponentFixture<LocalisationInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalisationInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalisationInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
