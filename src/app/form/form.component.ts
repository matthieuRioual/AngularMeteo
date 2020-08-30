import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherService } from '../Service/weather.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  myForm: FormGroup;

  methods = [
    { id: 1, name: 'City', inputs: ['city'] },
    { id: 2, name: 'Geographic positioning', inputs: ['lat', 'long'] }
  ];

  checkID: number = -1;
  selectedMethod: any;

  constructor(private formBuilder: FormBuilder, private weatherService: WeatherService, private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {

    this.myForm = this.formBuilder.group({
      city: '', country: ''
    });

  }

  onChange(method: any, isChecked: boolean) {
    if (isChecked) {
      this.checkID = method.id;
      this.selectedMethod = this.getMethod(this.checkID);
    }
  }

  getMethod(id: number): any {
    return this.methods.filter(x => x.id === id);

  }

  Onsubmit() {
    this.weatherService.changeLocalisation(this.myForm.value.city);
  }



}