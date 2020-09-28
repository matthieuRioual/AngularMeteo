import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { forbiddenNameValidator } from '../custom_validator/forbiddenName.validator';


@Component({
  selector: 'app-localisation-input',
  templateUrl: './localisation-input.component.html',
  styleUrls: ['./localisation-input.component.css']
})

export class LocalisationInputComponent implements OnInit, OnDestroy {

  formValues: FormGroup;

  formMethods: FormGroup;
  private methodSubscription: Subscription;
  submitted: boolean = false;


  methods = [
    { id: 1, name: 'City', inputs: ['city'], validators: [[Validators.required, forbiddenNameValidator]] },
    { id: 2, name: 'Geographic', inputs: ['lat', 'long'], validators: [[Validators.required], Validators.required] }
  ];

  formInputs = this.methods[0].inputs;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, public translate: TranslateService
  ) {
    this.buildRadioForm();
    this.buildLocalisationForm({ inputs: ['city'], validators: [[Validators.required, forbiddenNameValidator]] });
  }

  ngOnInit(): void {
    //we subscribe to the radio checkbox so we know when user want to switch to another localisation method
    this.methodSubscription = this.formMethods.valueChanges.subscribe(inputMethod => this.getInputs(inputMethod.method));
  }

  get f() { return this.formValues.controls; }

  buildRadioForm() {
    this.formMethods = this.formBuilder.group({
      //the first radio checked is the city name method
      method: 'City',
    })
  }

  buildLocalisationForm(methods) {
    let h = {};
    for (const x in methods.inputs) {
      h[methods.inputs[x]] = ["", methods.validators[x]]
    }
    console.log(h)
    this.formValues = this.formBuilder.group(h);
  }

  getInputs(method: string): void {
    let methodInMethods = this.methods.filter(x => method === x.name)[0];
    this.buildLocalisationForm(methodInMethods);

    this.formInputs = methodInMethods.inputs;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formValues.invalid) {
      return;
    }
    var args = {};
    this.formInputs.forEach(element => { args[element] = this.formValues.value[element]; });
    this.router.navigate(['/home/current'], { queryParams: Object.assign(args, this.formMethods.controls.method) });

  }

  ngOnDestroy() {
    this.methodSubscription.unsubscribe();
  }

}
