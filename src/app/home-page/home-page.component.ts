import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  triggered: boolean;

  constructor() { }

  
  ngOnInit(): void {
    this.triggered = false;
  }

  onSubmited() {
    this.triggered = true;
  }
}
