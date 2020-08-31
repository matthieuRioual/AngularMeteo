import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherService } from '../Service/weather.service';


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

  selectedMethod: string;

  constructor(private formBuilder: FormBuilder, private weatherService: WeatherService) { }

  ngOnInit(): void {

    this.myForm = this.formBuilder.group({
      city: '', country: ''
    });

  }

  changeMethod(event: any) {
    this.selectedMethod = event.target.value;
    console.log(event);
  }

  getMethod(id: number): any {
    return this.methods.filter(x => x.id === id);

  }

  Onsubmit() {
    this.weatherService.changeLocalisation(this.myForm.value.city);
  }



}