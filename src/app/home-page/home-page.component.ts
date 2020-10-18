import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(protected route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  get cityQueryParam(): string {
    return this.route.snapshot.queryParamMap.get('name');
  }
  get longQueryParam(): string {
    return this.route.snapshot.queryParamMap.get('lon');
  }


}
