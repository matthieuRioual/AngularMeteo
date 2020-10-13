import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  triggered: boolean;

  constructor(protected route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params)
        this.triggered = true;
      else
        this.triggered = false;
    });
  }

  onSubmited() {
    this.triggered = true;
  }
}
