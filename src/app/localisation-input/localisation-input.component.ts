import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of, Subscription } from 'rxjs';


@Component({
  selector: 'app-localisation-input',
  templateUrl: './localisation-input.component.html',
  styleUrls: ['./localisation-input.component.css']
})

export class LocalisationInputComponent implements OnInit, OnDestroy {

  formValues: FormGroup;
  private valueSubscription: Subscription;
  formMethods: FormGroup;
  private methodSubscription: Subscription;
  submitted: boolean = false;

  methods = [
    { id: 1, name: 'City', inputs: ['city'] },
    { id: 2, name: 'Geographic', inputs: ['lat', 'long'] }
  ];

  formInputs = this.methods[0].inputs;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, public translate: TranslateService
  ) {
    this.buildRadioForm();
    this.buildLocalisationForm();
  }

  ngOnInit(): void {
    this.methodSubscription = this.formMethods.valueChanges.subscribe(inputMethod => this.getInputs(inputMethod.method));
  }

  get f() { return this.formValues.controls; }

  buildRadioForm() {
    this.formMethods = this.formBuilder.group({
      method: 'City',
    })
  }

  buildLocalisationForm(methods: string[] = ["city"]) {
    let h = {};
    console.log(methods)
    for (const x in methods) {
      h[methods[x]] = ['', Validators.required]
    }
    console.log(h)
    this.formValues = this.formBuilder.group(h);
  }

  getInputs(method: string): void {
    let methodInMethods = this.methods.filter(x => method === x.name)[0].inputs;
    this.buildLocalisationForm(methodInMethods);

    this.formInputs = methodInMethods;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formValues.invalid) {
      return;
    }
    var args = {};
    this.formInputs.forEach(element => { args[element] = this.formValues.value[element]; });
    this.router.navigate(['/home/current'], { queryParams: Object.assign(args, this.formMethods) });

  }

  ngOnDestroy() {
    this.methodSubscription.unsubscribe();
  }

}
