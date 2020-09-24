import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-localisation-input',
  templateUrl: './localisation-input.component.html',
  styleUrls: ['./localisation-input.component.css']
})

export class LocalisationInputComponent implements OnInit, OnDestroy {

  formValues: FormGroup;
  formMethod = { method: 'City' };
  private subscription: Subscription;


  methods = [
    { id: 1, name: 'City', inputs: ['city'] },
    { id: 2, name: 'Geographic', inputs: ['lat', 'long'] }
  ];

  formInputs = this.methods.filter(x => this.formMethod.method === x.name)[0].inputs;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, public translate: TranslateService
  ) {
    this.buildLocalisationForm();
  }

  ngOnInit(): void {
  }

  buildLocalisationForm(): any {
    let allInputs = {};
    for (let i = 0; i < this.methods.length; i++) {
      var inputs = this.methods[i].inputs;
      for (let j = 0; j < inputs.length; j++) {
        allInputs[this.methods[i].inputs[j]] = '';
      }
    }
    this.formValues = this.formBuilder.group(allInputs);
  }

  changeMethod(event: any) {
    this.formMethod.method = event.target.value;
    this.formInputs = this.methods.filter(x => this.formMethod.method === x.name)[0].inputs;
  }

  onSubmit() {
    var args = {};
    this.formInputs.forEach(element => { args[element] = this.formValues.value[element]; });
    this.router.navigate(['/home/current'], { queryParams: Object.assign(args, this.formMethod) });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
