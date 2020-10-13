import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { paramsDTO } from '../../shared/models/paramsDTO';
import { forbiddenName } from '../../shared/validator/forbiddenName.validator';
import { forbiddenTypo } from '../../shared/validator/forbiddenTypo.validator';


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
      information: new FormControl('', [Validators.required, forbiddenName('Toulon'), forbiddenTypo(/[^\[a-z\]|\s|_|\[0-9\]]/)]),
    })
  }

  get information() { return this.singleFormInput.get('information'); }

  ParseData(informationrequest: string): paramsDTO {
    const params = new paramsDTO()
    const regex1 = /^([0-9]+|[0-9]*\.[0-9]*);([0-9]+|[0-9]*\.[0-9]*)$/;
    const regex2 = /(\D+)/;
    if (informationrequest.match(regex1)) {
      params.lat = regex1.exec(informationrequest)[1];
      params.long = regex1.exec(informationrequest)[2]
    }
    else if (informationrequest.match(regex2)) {
      params.name = regex2.exec(informationrequest)[0];
    }
    return params;
  }

  onSubmit(): void {
    const params = this.ParseData(this.information.value);
    // stop here if form is invalid
    if (this.singleFormInput.invalid) {
      return;
    }
    this.submited.emit(true);
    this.router.navigate(['/home/current'], { queryParams: params });
  }


}
