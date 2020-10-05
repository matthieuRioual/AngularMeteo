import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forbiddenNameValidator } from '../../custom_validator/forbiddenName.validator';

@Component({
  selector: 'app-form-city-name',
  templateUrl: './form-city-name.component.html',
  styleUrls: ['./form-city-name.component.css']
})
export class FormCityNameComponent implements OnInit {

  formCityName: FormGroup;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.buildFormCityName()
  }

  ngOnInit(): void {
  }

  buildFormCityName(): void {
    this.formCityName = this.formBuilder.group({
      //the first radio checked is the city name method
      name: new FormControl('', [Validators.required, Validators.minLength(4), forbiddenNameValidator('Toulon')])
    })
  }

  get name() { return this.formCityName.get('name'); }

  onSubmit() {
    // stop here if form is invalid
    if (this.formCityName.invalid) {
      return;
    }
    console.log({name:this.name.value})
    this.router.navigate(['/home/current'], { queryParams: { name: this.name.value } });
  }

}
