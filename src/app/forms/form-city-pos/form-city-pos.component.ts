import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-form-city-pos',
  templateUrl: './form-city-pos.component.html',
  styleUrls: ['./form-city-pos.component.css']
})
export class FormCityPosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickSubmit(coordonates) {
    console.log(coordonates);
    this.router.navigate(['/home/current'], { queryParams: { lat: coordonates.latitude, long: coordonates.longitude } });
  }

}
