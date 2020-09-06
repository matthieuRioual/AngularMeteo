import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-entry',
  templateUrl: './form-entry.component.html',
  styleUrls: ['./form-entry.component.css']
})
export class FormEntryComponent implements OnInit {

  myForm: FormGroup;
  formMethod = { method: 'City' };


  methods = [
    { id: 1, name: 'City', inputs: ['city'] },
    { id: 2, name: 'Geographic positioning', inputs: ['lat', 'long'] }
  ];

  formInputs = this.methods.filter(x => this.formMethod.method === x.name)[0].inputs;


  constructor(private formBuilder: FormBuilder, private router: Router,
  ) {
    this.myForm = this.builderForm();
  }

  ngOnInit(): void {
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
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/home/current'], { queryParams: Object.assign(args, this.formMethod) });
    });
  }


}
