import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-selection-form',
  templateUrl: './selection-form.component.html',
  styleUrls: ['./selection-form.component.css']
})
export class SelectionFormComponent implements OnInit {

  @Output('selectionChanged')
  selectionChanged: EventEmitter<string> = new EventEmitter<string>();

  private methodSubscription: Subscription;
  formMethods: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buildRadioForm();
  }

  ngOnInit(): void {
    this.methodSubscription = this.formMethods.valueChanges.subscribe(inputMethod => this.changeMethod(inputMethod.method));
  }

  changeMethod(method: string) {
    this.selectionChanged.emit(method);
  }

  buildRadioForm() {
    this.formMethods = this.formBuilder.group({
      //the first radio checked is the city name method
      method: 'cityName'
    })
  }

  ngOnDestroy() {
    this.methodSubscription.unsubscribe();
  }

}
