import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  urlParams: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.urlParams = this.route.snapshot.queryParams;
  }

  redirectTo(event: any) {
    switch (event.target.value) {
      case ("current"):
        this.router.navigate(['/home/current'], { queryParams: this.urlParams });
        break;
      case ("forecast"):
        this.router.navigate(['/home/forecast'], { queryParams: this.urlParams });
        break;
    }

  }

}
