import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { paramsDTO } from '../../shared/models/paramsDTO';
import { forbiddenName } from '../../custom_validator/forbiddenName.validator';

@Component({
  selector: 'app-single-form',
  templateUrl: './single-form.component.html',
  styleUrls: ['./single-form.component.css']
})
export class SingleFormComponent implements OnInit {

  singleFormInput: FormGroup;
  @Output('submited')
  submited: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.buildFormCityPos()
  }

  ngOnInit(): void {
  }

  buildFormCityPos(): void {
    this.singleFormInput = this.formBuilder.group({
      //the first radio checked is the city name method
      input: new FormControl('', [Validators.required, forbiddenName('Toulon')]),
    })
  }

  get input() { return this.singleFormInput.get('input'); }

  parseData(inputrequest: string): paramsDTO {
    let params = new paramsDTO()
    const regex1 = /^([0-9]+|[0-9]*\.[0-9]*);([0-9]+|[0-9]*\.[0-9]*)$/;
    const regex2 = /(\D+)/;
    if (inputrequest.match(regex1)) {
      params.lat = regex1.exec(inputrequest)[1];
      params.long = regex1.exec(inputrequest)[2]
    }
    else if (inputrequest.match(regex2)) {
      params.name = regex2.exec(inputrequest)[0];
    }
    return params;
  }

  onSubmit(): void {
    let params = this.parseData(this.input.value);
    // stop here if form is invalid
    if (this.singleFormInput.invalid) {
      return;
    }
    this.submited.emit(true);
    this.router.navigate(['/home/current'], { queryParams: params });
  }


}
