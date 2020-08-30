import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-currentweather',
  templateUrl: './currentweather.component.html',
  styleUrls: ['./currentweather.component.css']
})
export class CurrentweatherComponent implements OnInit {

  @Input() informations: any;
  constructor() { }

  ngOnInit(): void {
  }

}
