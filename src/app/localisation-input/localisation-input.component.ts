import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localisation-input',
  templateUrl: './localisation-input.component.html',
  styleUrls: ['./localisation-input.component.css']
})

export class LocalisationInputComponent implements OnInit {

  choosenMethod: string;

  constructor() {
    this.choosenMethod = 'cityName'
  }

  ngOnInit(): void {
  }

  handleChangedMethod(valueEmitted) {
    this.choosenMethod = valueEmitted;
  }

}
