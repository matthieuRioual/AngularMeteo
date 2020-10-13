import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-form-city-pos',
  templateUrl: './form-city-pos.component.html',
  styleUrls: ['./form-city-pos.component.css']
})
export class FormCityPosComponent implements OnInit {

  formCityPos: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.buildFormCityPos()
  }

  ngOnInit(): void {
  }

  buildFormCityPos(): void {
    this.formCityPos = this.formBuilder.group({
      //the first radio checked is the city name method
      latitude: new FormControl('', [Validators.required]),
      longitude: new FormControl('', [Validators.required])
    })
  }

  get lat() { return this.formCityPos.get('latitude'); }
  get long() { return this.formCityPos.get('longitude'); }


  onSubmit() {
    // stop here if form is invalid
    if (this.formCityPos.invalid) {
      return;
    }
    this.router.navigate(['/home/current'], { queryParams: { lat: this.lat.value, long: this.long.value } });
  }


}
