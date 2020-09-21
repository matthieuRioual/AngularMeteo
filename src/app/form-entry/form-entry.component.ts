import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-form-entry',
  templateUrl: './form-entry.component.html',
  styleUrls: ['./form-entry.component.css']
})

export class FormEntryComponent implements OnInit, OnDestroy {

  myForm: FormGroup;
  formMethod = { method: 'City' };
  private subscription: Subscription;


  methods = [
    { id: 1, name: 'City', inputs: ['city'] },
    { id: 2, name: 'Geographic', inputs: ['lat', 'long'] }
  ];

  formInputs = this.methods.filter(x => this.formMethod.method === x.name)[0].inputs;
  currentLanguage: string;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, public translate: TranslateService
  ) {
    this.myForm = this.builderForm();
  }

  ngOnInit(): void {
    console.log("je suis cree")
    this.subscription = this.route.params.subscribe(params => this.changeLangue(params));
  }

  builderForm(): any {
    let allInputs = {};
    for (let i = 0; i < this.methods.length; i++) {
      var inputs = this.methods[i].inputs;
      for (let j = 0; j < inputs.length; j++) {
        allInputs[this.methods[i].inputs[j]] = '';
      }
    }
    return this.formBuilder.group(allInputs);
  }

  changeMethod(event: any) {
    this.formMethod.method = event.target.value;
    this.formInputs = this.methods.filter(x => this.formMethod.method === x.name)[0].inputs;
  }

  onSubmit() {
    var args = {};
    this.formInputs.forEach(element => { args[element] = this.myForm.value[element]; });
    this.router.navigate([this.currentLanguage + '/home/current'], { queryParams: Object.assign(args, this.formMethod) });

  }

  changeLangue(params: any) {
    console.log(params["lang"])
    this.translate.use(params["lang"]);
    this.currentLanguage = params["lang"];
  }

  ngOnDestroy() {
    console.log("je suis détruit")
    this.subscription.unsubscribe();
  }

}
